"use client";

import { Factory, ShieldCheck, Globe2 } from "lucide-react";
import { useLanguage } from "@/i18n/use-language";

const ICONS = [Factory, ShieldCheck, Globe2];

export function WhyUs() {
  const { t } = useLanguage();
  return (
    <section
      id="why"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            {t.why.eyebrow}
          </p>
          <h2
            id="why-heading"
            className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {t.why.heading}
          </h2>
          <div className="mx-auto mt-3 botanical-divider" aria-hidden />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.why.cards.map((card, i) => {
            const Icon = ICONS[i] ?? Factory;
            return (
              <article
                key={card.title}
                className="card-hover group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
