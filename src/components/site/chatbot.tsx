"use client";

/**
 * Floating WhatsApp FAQ chatbot — conversation-style.
 *
 * Behavior:
 *   • User types a question (or taps a suggested question).
 *   • Bot searches the FAQ index for a keyword match.
 *   • If exactly one match → bot replies with the full Q&A inline.
 *   • If multiple matches → bot shows them as quick-reply chips;
 *     tapping one replies with the full answer inline.
 *   • If no match → bot announces it will hand off to a human agent
 *     and opens wa.me/<phone> automatically after a short delay.
 *
 * Bilingual (AR + EN), RTL-aware, no third-party animation libs.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/i18n/use-language";
import { site } from "@/data/site";

interface FaqItem {
  q: string;
  a: string;
}

interface ChatMessage {
  from: "bot" | "user";
  text: string;
  /** Optional quick-reply chips attached to a bot message. */
  chips?: FaqItem[];
  /** When true, message indicates a WhatsApp handoff is in progress. */
  handoff?: boolean;
}

// WhatsApp green — distinguishable from site's botanical green
const WHATSAPP_GREEN = "#25D366";

export function Chatbot() {
  const { t, dir, lang } = useLanguage();
  const c = t.chatbot;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "bot", text: c.greeting },
  ]);
  const [query, setQuery] = useState("");
  const [typing, setTyping] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const conversationRef = useRef<HTMLDivElement | null>(null);

  // Reset conversation when language flips (so greeting + answers
  // appear in the newly selected language).
  useEffect(() => {
    setMessages([{ from: "bot", text: t.chatbot.greeting }]);
    setTyping(false);
  }, [lang]);

  // Focus the input when opening
  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => inputRef.current?.focus(), 250);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  // Auto-scroll the conversation to bottom when messages change
  useEffect(() => {
    const el = conversationRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  // Build a flat searchable index of all FAQ Q&A pairs (memoized per language)
  const faqIndex = useMemo<FaqItem[]>(() => {
    return t.faq.categories.flatMap((cat) =>
      cat.items.map((item) => ({ q: item.q, a: item.a }))
    );
  }, [t]);

  /**
   * Search the FAQ index for the best match to the user's question.
   * Strategy:
   *   1. Exact substring match in question text → highest priority
   *   2. Substring match in answer text → medium priority
   *   3. Token overlap (any word from query appears in q or a) → low priority
   * Returns the top N matches (default 3).
   */
  function searchFaq(userText: string, max = 3): FaqItem[] {
    const q = userText.trim().toLowerCase();
    if (!q) return [];

    // Tokenize the query for fuzzy matching
    const tokens = q.split(/\s+/).filter((tok) => tok.length >= 2);

    const scored = faqIndex.map((item) => {
      const ql = item.q.toLowerCase();
      const al = item.a.toLowerCase();
      let score = 0;
      if (ql.includes(q)) score += 10;
      if (al.includes(q)) score += 5;
      for (const tok of tokens) {
        if (ql.includes(tok)) score += 2;
        if (al.includes(tok)) score += 1;
      }
      return { item, score };
    });

    return scored
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, max)
      .map((s) => s.item);
  }

  /**
   * Push a bot reply after a short typing delay (feels natural).
   */
  function replyWith(botText: string, chips?: FaqItem[], handoff = false) {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: botText, chips, handoff },
      ]);
      // If handoff, open WhatsApp after a 1.5s grace period so the user
      // can read the bot's explanation before being redirected.
      if (handoff) {
        window.setTimeout(() => {
          window.open(site.contact.whatsappLink, "_blank", "noopener");
        }, 1500);
      }
    }, 600);
  }

  function handleSend() {
    const q = query.trim();
    if (!q || typing) return;
    setQuery("");

    // Push the user's message immediately
    setMessages((prev) => [...prev, { from: "user", text: q }]);

    // Find the best matching FAQ entry
    const results = searchFaq(q);

    if (results.length === 0) {
      // No match → announce handoff and open WhatsApp automatically.
      replyWith(`${c.handoffTitle}\n\n${c.handoffBody}`, undefined, true);
      return;
    }

    if (results.length === 1) {
      // Single exact match → answer inline.
      replyWith(`${results[0].q}\n\n${results[0].a}`);
      return;
    }

    // Multiple matches → show them as quick-reply chips.
    const intro =
      lang === "ar"
        ? `لقيت ${results.length} إجابات محتملة. اختر اللي يناسبك:`
        : `I found ${results.length} potential matches. Pick the one that fits:`;
    replyWith(intro, results);
  }

  function handleChipClick(item: FaqItem) {
    setMessages((prev) => [...prev, { from: "user", text: item.q }]);
    replyWith(item.a);
  }

  const launcherSide = dir === "rtl" ? "left-4" : "right-4";

  return (
    <>
      {/* Launcher button */}
      <button
        type="button"
        aria-label={open ? c.ariaClose : c.ariaOpen}
        onClick={() => setOpen((v) => !v)}
        className={`fixed bottom-4 ${launcherSide} z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95`}
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        {!open && (
          <span
            aria-hidden
            className="absolute inset-0 animate-ping rounded-full opacity-30"
            style={{ backgroundColor: WHATSAPP_GREEN }}
          />
        )}
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={c.title}
          className={`fixed bottom-20 ${launcherSide} z-50 flex max-h-[min(640px,80vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl chatbot-panel`}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 text-white"
            style={{ backgroundColor: WHATSAPP_GREEN }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{c.title}</p>
              <p className="truncate text-[11px] opacity-90">{c.status}</p>
            </div>
            <button
              type="button"
              aria-label={c.ariaClose}
              onClick={() => setOpen(false)}
              className="rounded-full p-1 transition hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Conversation */}
          <div
            ref={conversationRef}
            data-conversation
            className="flex-1 space-y-2 overflow-y-auto bg-muted/30 px-3 py-3"
            style={{ minHeight: "240px", maxHeight: "320px" }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  m.from === "user" ? "items-end" : "items-start"
                } gap-1.5`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-line rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-sm ${
                    m.from === "user"
                      ? "rounded-br-sm bg-primary text-primary-foreground"
                      : m.handoff
                      ? "rounded-bl-sm border border-amber-300 bg-amber-50 text-amber-900"
                      : "rounded-bl-sm bg-background text-foreground"
                  }`}
                >
                  {m.text}
                </div>
                {/* Quick-reply chips for matched FAQs */}
                {m.chips && m.chips.length > 0 && (
                  <div className="flex w-full flex-col gap-1.5">
                    {m.chips.map((chip, ci) => (
                      <button
                        key={ci}
                        type="button"
                        onClick={() => handleChipClick(chip)}
                        disabled={typing}
                        className="w-full rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5 text-start text-xs font-medium text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {chip.q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-background px-3 py-2.5 shadow-sm">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-border bg-background px-3 py-3">
            <div className="flex items-center gap-1.5">
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={c.placeholder}
                className="min-w-0 flex-1 rounded-full border border-border bg-background px-3 py-1.5 text-xs outline-none transition focus:border-primary"
                disabled={typing}
              />
              <button
                type="button"
                onClick={handleSend}
                aria-label={c.send}
                disabled={typing || !query.trim()}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: WHATSAPP_GREEN }}
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
            {/* Always-available WhatsApp handoff button (manual) */}
            <a
              href={site.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: WHATSAPP_GREEN }}
            >
              <MessageCircle className="h-4 w-4" />
              {c.human}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
