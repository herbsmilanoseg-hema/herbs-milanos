"use client";

/**
 * FAQ section — accordion grouped by category.
 *
 * Content lives in src/data/faq.ts (FaqCategory[]).
 */

import { faq } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Questions buyers ask us.
          </h2>
          <div className="mx-auto mt-3 botanical-divider" aria-hidden />
          <p className="mt-5 text-base text-muted-foreground">
            MOQ, payment terms, certifications, packing, ports and storage —
            the essentials for first-time and returning buyers.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[260px_1fr]">
          {/* Category index (desktop) */}
          <nav
            aria-label="FAQ categories"
            className="hidden lg:block lg:sticky lg:top-24 lg:self-start"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Categories
            </p>
            <ul className="flex flex-col gap-1.5 text-sm">
              {faq.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#faq-${cat.id}`}
                    className="text-foreground/80 transition-colors hover:text-primary"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Accordions */}
          <div className="flex flex-col gap-8">
            {faq.map((cat) => (
              <div
                key={cat.id}
                id={`faq-${cat.id}`}
                className="scroll-mt-24 rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Badge variant="secondary">{cat.title}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {cat.items.length}{" "}
                    {cat.items.length === 1 ? "question" : "questions"}
                  </span>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {cat.items.map((item, idx) => (
                    <AccordionItem
                      key={item.question}
                      value={`item-${cat.id}-${idx}`}
                    >
                      <AccordionTrigger className="text-left text-sm font-medium text-foreground sm:text-base">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
