# Security Headers — Deployment Notes

## Two profiles

The site ships with **two** security-header profiles, selected by the
`STRICT_SECURITY` env var in `next.config.ts`.

> **Important:** `NODE_ENV=production` is **not** used as the trigger.
> The space-z.ai preview host also runs under `NODE_ENV=production`, so relying
> on it would break the preview iframe. Strict mode is **opt-in** via
> `STRICT_SECURITY=true`.

### 1. Preview profile (DEFAULT — used by space-z.ai preview host)

- `Content-Security-Policy` is permissive:
  - `frame-ancestors *` — allows the page to be embedded in any iframe
    (needed for the space-z.ai preview wrapper)
  - `script-src 'self' 'unsafe-inline' 'unsafe-eval'` — HMR / dev tools
  - `connect-src 'self' https:` — for any third-party dev fetches
- **No `X-Frame-Options`** — same reason as above
- All other base headers (HSTS, X-Content-Type-Options, Referrer-Policy,
  Permissions-Policy, X-Permitted-Cross-Domain-Policies) are still applied

### 2. Strict profile (production — opt-in)

Triggered **only** when `STRICT_SECURITY=true` is set in the runtime environment.

| Header | Value |
| --- | --- |
| `Content-Security-Policy` | `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; frame-src 'none'; worker-src 'self' blob:; manifest-src 'self'; upgrade-insecure-requests` |
| `X-Frame-Options` | `DENY` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-origin` |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), interest-cohort=()` |
| `X-Permitted-Cross-Domain-Policies` | `none` |
| `X-XSS-Protection` | `1; mode=block` |

## Why `unsafe-inline` is still required for scripts

Next.js injects inline `<script>` blocks for React hydration and route
pre-fetching. Removing `'unsafe-inline'` from `script-src` breaks the site.

For a fully nonce-based CSP (the strictest possible), use Next.js's built-in
`nonce` middleware pattern — see
https://nextjs.org/docs/app/guides/content-security-policy.

For this project, `'unsafe-inline'` is acceptable because:
- All scripts are first-party (`'self'`)
- No third-party analytics / ads / tracking
- `object-src 'none'` blocks Flash / Java / PDF embeds
- `connect-src 'self'` blocks exfiltration to third-party origins

## How to test the strict profile locally

```bash
# Full production simulation locally
STRICT_SECURITY=true npm run build
STRICT_SECURITY=true npm run start
```

Then verify with:
```bash
curl -I http://localhost:3000/ | grep -iE "x-frame|content-security|cross-origin"
```

You should see `X-Frame-Options: DENY` and `frame-ancestors 'none'` in the
response headers.

## Production deployment checklist

On the production host:

1. Ensure HTTPS is terminating in front of Next.js (Caddy / Nginx / Cloudflare).
   HSTS is meaningless over HTTP.
2. Set `STRICT_SECURITY=true` in the runtime environment (systemd unit,
   docker compose, or `.env.production`) **before** starting the server.
3. `npm run build && npm run start`
4. Verify headers with an external scanner:
   - https://securityheaders.com/?q=herbsmilanos.space-z.ai
   - https://observatory.mozilla.org/analyze/herbsmilanos.space-z.ai
   Target: **A+ grade** on both.
5. Verify the site is NOT embeddable in an iframe:
   ```html
   <iframe src="https://herbsmilanos.space-z.ai/"></iframe>
   ```
   Browser should refuse to render it (console: `Refused to display … in a frame
   because an ancestor violates the following Content Security Policy directive:
   "frame-ancestors 'none'"`).

## Reverting to preview profile (emergency)

If production embedding is needed temporarily (e.g. third-party dashboard):

```bash
unset STRICT_SECURITY
npm run start
```

This downgrades to the permissive profile (default). Re-enable strict mode by
setting `STRICT_SECURITY=true` again before the next deploy.
