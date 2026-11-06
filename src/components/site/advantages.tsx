"use client";

/**
 * Advantages / "Why choose Herbs Milanos" — 3 reasons buyers choose us.
 *
 * Content lives in src/data/advantages.ts (icon components included).
 */

import { advantages } from "@/data/advantages";

export function Advantages() {
  return (
    <section
      id="advantages"
      className="scroll-mt-24 bg-primary text-primary-foreground py-16 md:py-24"
      aria-labelledby="advantages-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/70">
            Why Herbs Milanos
          </p>
          <h2
            id="advantages-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Built for wholesale buyers, not retail shoppers.
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0.9), var(--accent))",
            }}
            aria-hidden
          />
          <p className="mt-5 text-base text-white/85">
            Three things every wholesale buyer counts on — whether they are a
            tea blender, a cosmetics formulator, or an ingredient distributor
            ordering by the metric ton.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <article
                key={adv.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {adv.description}
                  </p>
                </div>

                <ul
                  className="mt-auto flex flex-col gap-2 border-t border-white/15 pt-4 text-sm text-white/90"
                  aria-label={`${adv.title} highlights`}
                >
                  {adv.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
