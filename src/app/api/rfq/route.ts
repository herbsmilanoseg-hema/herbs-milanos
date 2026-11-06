import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";

/**
 * RFQ submission endpoint.
 *
 * Receives the contact form JSON, then:
 *   1. Sends an HTML-formatted notification email to the working inbox
 *      (herbs.milanos.eg@gmail.com via site.contact.email)
 *      containing all submitted fields.
 *   2. Sends a friendly auto-confirmation email to the buyer telling them
 *      we received their RFQ and will respond within one business day.
 *
 * Security:
 *   - Origin / Referer validation (CSRF protection)
 *   - Hard body size cap (16 KB) — prevents DoS via giant payloads
 *   - Per-IP rate limit (5 submissions / hour) — in-memory, resets on restart
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const TO_INBOX = process.env.RFQ_TO_EMAIL ?? site.contact.email;

// Allow POSTs from the site itself (same origin) and localhost for testing.
const ALLOWED_ORIGINS = [
  site.url,                       // https://herbsmilanos.space-z.ai
  "https://preview-chat-8ad77471-05b4-4c63-afa3-4a0fe7d9e3d2.space-z.ai",
  "http://localhost:3000",
];

// Hard limit on incoming JSON body — a generous RFQ rarely exceeds 4 KB.
const MAX_BODY_BYTES = 16 * 1024;  // 16 KB

// Simple in-memory rate limiter: { ip: [timestamps] }
// Reset on server restart; for true production deploy Upstash Ratelimit.
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;  // 1 hour
const RATE_LIMIT_MAX = 5;                       // 5 submissions / IP / hour
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entries = (rateLimitStore.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (entries.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, entries);
    return true;
  }
  entries.push(now);
  rateLimitStore.set(ip, entries);
  return false;
}

function getClientIp(req: Request): string {
  // Trust X-Forwarded-For only when behind a known proxy;
  // in production this should be set by Cloudflare/Caddy/nginx.
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return "unknown";
}

// Lazily build the Resend client only when a key is configured —
// keeps local dev / preview working without email credentials.
let client: Resend | null = null;
function getClient() {
  if (!RESEND_API_KEY) return null;
  if (!client) client = new Resend(RESEND_API_KEY);
  return client;
}

interface RfqPayload {
  name?: string;
  company?: string;
  country?: string;
  email?: string;
  phone?: string;
  category?: string;
  product?: string;
  quantity?: string;
  form?: string;
  packing?: string;
  port?: string;
  incoterm?: string;
  notes?: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildNotificationHtml(d: RfqPayload): string {
  // Two-section layout matching the inquiry.jpg format
  // (Contact Details / Product Requirements / Notes / Footer).
  const contactRows: [string, string][] = [
    ["Name", d.name ?? ""],
    ["Company", d.company ?? ""],
    ["Country", d.country ?? ""],
    ["Email", d.email ?? ""],
    ["Phone", d.phone ?? ""],
  ];
  const productRows: [string, string][] = [
    ["Category", d.category ?? ""],
    ["Product", d.product ?? ""],
    ["Quantity", d.quantity ?? ""],
    ["Form", d.form ?? ""],
    ["Packing", d.packing ?? ""],
    ["Port", d.port ?? ""],
    ["Incoterm", d.incoterm ?? ""],
  ];

  const isoTimestamp = new Date().toISOString();
  const localTimestamp = new Date().toLocaleString("en-GB", {
    timeZone: "Africa/Cairo",
  });
  const sentFromUrl = `${site.url}/contact`;
  const replyEmail = d.email ?? TO_INBOX;
  const notes = (d.notes ?? "").trim() || "—";

  // Label-value row style — left column gray regular, right column dark bold.
  const rowHtml = (label: string, value: string, isLink = false) => {
    const safe = escapeHtml(value || "—");
    const cell = isLink && value
      ? `<a href="mailto:${escapeHtml(value)}" style="color:#0000EE;text-decoration:underline;font-weight:700;">${safe}</a>`
      : `<strong style="color:#1a1a1a;font-weight:700;">${safe}</strong>`;
    return `<tr><td style="padding:8px 0 8px 0;width:140px;color:#555555;font-weight:400;font-size:14px;vertical-align:top;">${escapeHtml(
      label
    )}:</td><td style="padding:8px 0 8px 0;color:#1a1a1a;font-size:14px;vertical-align:top;">${cell}</td></tr>`;
  };

  const contactRowsHtml = contactRows
    .map(([k, v]) =>
      k === "Email" ? rowHtml(k, v, true) : rowHtml(k, v, false)
    )
    .join("");

  const productRowsHtml = productRows.map(([k, v]) => rowHtml(k, v)).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>New RFQ from ${escapeHtml(d.name ?? "Website")}</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="margin:24px auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
    <!-- ── Header banner (dark forest green) ── -->
    <tr>
      <td style="padding:30px;background:#2d5a3d;color:#ffffff;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td style="vertical-align:middle;">
              <h1 style="margin:0;font-size:26px;font-weight:700;line-height:1.2;">
                <span style="display:inline-block;margin-right:10px;">🌿</span>New RFQ Submission
              </h1>
              <p style="margin:6px 0 0;font-size:14px;color:#ffffff;opacity:0.92;">Herbs Milanos &mdash; Export Enquiry</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- ── Body ── -->
    <tr>
      <td style="padding:30px;">

        <!-- Contact Details section -->
        <h2 style="margin:0 0 8px 0;font-size:17px;font-weight:700;color:#2d5a3d;">Contact Details</h2>
        <hr style="margin:0 0 14px 0;border:0;border-top:1px solid #a3b18a;" />
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          ${contactRowsHtml}
        </table>

        <!-- Product Requirements section -->
        <h2 style="margin:24px 0 8px 0;font-size:17px;font-weight:700;color:#2d5a3d;">Product Requirements</h2>
        <hr style="margin:0 0 14px 0;border:0;border-top:1px solid #a3b18a;" />
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          ${productRowsHtml}
        </table>

        <!-- Notes section -->
        <h2 style="margin:24px 0 8px 0;font-size:17px;font-weight:700;color:#2d5a3d;">Notes</h2>
        <hr style="margin:0 0 14px 0;border:0;border-top:1px solid #a3b18a;" />
        <div style="background:#f5f5f5;border-radius:6px;padding:15px;font-size:14px;color:#1a1a1a;line-height:1.5;word-break:break-word;">
          ${escapeHtml(notes)}
        </div>
      </td>
    </tr>

    <!-- ── Footer ── -->
    <tr>
      <td style="padding:16px 30px 24px 30px;border-top:1px solid #e8e8e8;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:12px;line-height:1.7;">
          <tr>
            <td style="color:#777777;width:110px;vertical-align:top;">Sent from:</td>
            <td style="color:#1a1a1a;"><a href="${escapeHtml(sentFromUrl)}" style="color:#0000EE;text-decoration:underline;">${escapeHtml(sentFromUrl)}</a></td>
          </tr>
          <tr>
            <td style="color:#777777;vertical-align:top;">Timestamp:</td>
            <td style="color:#1a1a1a;">${escapeHtml(isoTimestamp)} <span style="color:#999999;">(Cairo: ${escapeHtml(localTimestamp)})</span></td>
          </tr>
          <tr>
            <td style="color:#777777;vertical-align:top;">Reply to:</td>
            <td><a href="mailto:${escapeHtml(replyEmail)}" style="color:#0000EE;text-decoration:underline;">${escapeHtml(replyEmail)}</a></td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildBuyerHtml(d: RfqPayload): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>We received your RFQ — Herbs Milanos</title>
</head>
<body style="margin:0;padding:24px;background:#f8f7ef;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#253328;">
  <table role="presentation" width="600" style="margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e2d5;">
    <tr>
      <td style="padding:24px 32px;background:#174c35;color:#ffffff;">
        <h1 style="margin:0;font-size:20px;font-weight:700;">We received your RFQ</h1>
        <p style="margin:4px 0 0;font-size:13px;opacity:0.85;">Herbs Milanos · Egyptian Botanicals Exporter</p>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 32px;">
        <p style="margin:0 0 12px;font-size:14px;">Dear ${escapeHtml(d.name ?? "Buyer")},</p>
        <p style="margin:0 0 12px;font-size:14px;line-height:1.6;">
          Thank you for your interest in Herbs Milanos. We have received your request for quotation for
          <strong style="color:#174c35;">${escapeHtml(d.product || "our products")}</strong>
          ${d.quantity ? `(<em>${escapeHtml(d.quantity)}</em>)` : ""}
          and our export team will get back to you within one business day.
        </p>
        <p style="margin:0 0 12px;font-size:14px;line-height:1.6;">
          A copy of your submission has been forwarded to ${escapeHtml(TO_INBOX)}.
          If you need to send additional details (target spec, COA, sample request),
          just reply to this email.
        </p>
        <table role="presentation" width="100%" cellspacing="0" style="margin-top:16px;font-size:13px;border-collapse:collapse;">
          <tr><td style="padding:6px 0;color:#7a857c;">Phone / WhatsApp:</td><td style="padding:6px 0;color:#174c35;font-weight:600;">${escapeHtml(site.contact.phone)}</td></tr>
          <tr><td style="padding:6px 0;color:#7a857c;">Export email:</td><td style="padding:6px 0;color:#174c35;font-weight:600;">${escapeHtml(site.contact.email)}</td></tr>
          <tr><td style="padding:6px 0;color:#7a857c;">Business hours:</td><td style="padding:6px 0;color:#174c35;font-weight:600;">${escapeHtml(site.hours)}</td></tr>
        </table>
        <p style="margin:24px 0 0;font-size:12px;color:#7a857c;line-height:1.6;">
          Best regards,<br />
          Herbs Milanos Export Team<br />
          Beni Suef, Egypt
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:16px 32px;background:#f4f4ee;color:#7a857c;font-size:11px;text-align:center;">
        This is an automated message — please don't reply directly unless adding details to your RFQ.
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    // ── Security: Origin validation (CSRF) ──
    const origin = req.headers.get("origin");
    const referer = req.headers.get("referer");
    const source = origin ?? (referer ? new URL(referer).origin : "");
    if (source && !ALLOWED_ORIGINS.includes(source)) {
      console.warn(`[RFQ] blocked: bad origin "${source}"`);
      return NextResponse.json(
        { ok: false, error: "Forbidden origin" },
        { status: 403 }
      );
    }

    // ── Security: Body size limit (DoS) ──
    const contentLength = parseInt(req.headers.get("content-length") ?? "0", 10);
    if (contentLength > MAX_BODY_BYTES) {
      console.warn(`[RFQ] blocked: payload too large (${contentLength} bytes)`);
      return NextResponse.json(
        { ok: false, error: "Payload too large" },
        { status: 413 }
      );
    }

    // ── Security: Per-IP rate limit (abuse / spam) ──
    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      console.warn(`[RFQ] blocked: rate limit hit for IP ${clientIp}`);
      return NextResponse.json(
        { ok: false, error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    // ── Parse & validate body ──
    const data = (await req.json()) as RfqPayload;

    // Defensive: trim & cap every string field at 2 KB so even a malicious
    // payload within the 16 KB body limit can't blow up the email body.
    const cap = (s: string | undefined) =>
      (s ?? "").trim().slice(0, 2000);
    const safe: RfqPayload = {
      name: cap(data.name),
      company: cap(data.company),
      country: cap(data.country),
      email: cap(data.email),
      phone: cap(data.phone),
      category: cap(data.category),
      product: cap(data.product),
      quantity: cap(data.quantity),
      form: cap(data.form),
      packing: cap(data.packing),
      port: cap(data.port),
      incoterm: cap(data.incoterm),
      notes: cap(data.notes),
    };

    // Quick email-format sanity check (reject obvious garbage).
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!safe.name || !safe.email || !emailRegex.test(safe.email)) {
      return NextResponse.json(
        { ok: false, error: "Valid name and email are required" },
        { status: 400 }
      );
    }

    if (process.env.NODE_ENV !== "production") {
      console.log("[RFQ] submission received:", {
        ip: clientIp,
        name: safe.name,
        company: safe.company,
        product: safe.product,
        quantity: safe.quantity,
      });
    }

    const resend = getClient();
    if (!resend) {
      // No Resend key configured — log submission and still report success
      // to the buyer so the UX is intact (sandbox / preview mode).
      console.warn(
        "[RFQ] RESEND_API_KEY not set — email NOT sent (sandbox mode)."
      );
      return NextResponse.json({
        ok: true,
        sandbox: true,
        message: "RESEND_API_KEY not set, submission logged only",
      });
    }

    // 1) Internal notification to the export team inbox
    const notifRes = await resend.emails.send({
      from: `Herbs Milanos <${RESEND_FROM}>`,
      to: TO_INBOX,
      replyTo: safe.email,
      subject: `[RFQ] ${safe.name} — ${safe.product || "General inquiry"}`,
      html: buildNotificationHtml(safe),
    });
    if (notifRes.error) {
      console.error("[RFQ] notification send failed:", notifRes.error);
      throw notifRes.error;
    }
    if (process.env.NODE_ENV !== "production") {
      console.log("[RFQ] notification sent:", notifRes.data?.id);
    }

    // 2) Auto-confirmation to the buyer
    const buyerRes = await resend.emails.send({
      from: `Herbs Milanos <${RESEND_FROM}>`,
      to: safe.email,
      subject: "We received your RFQ — Herbs Milanos",
      html: buildBuyerHtml(safe),
    });
    if (buyerRes.error) {
      // Non-fatal — buyer didn't get confirmation, but we have the RFQ
      console.warn("[RFQ] buyer confirmation failed:", buyerRes.error);
    } else if (process.env.NODE_ENV !== "production") {
      console.log("[RFQ] buyer confirmation sent:", buyerRes.data?.id);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[RFQ] error:", err);
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
