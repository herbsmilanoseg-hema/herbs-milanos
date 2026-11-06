"use client";

import { CalendarDays, Globe, Leaf, ShieldCheck } from "lucide-react";
import { companyStats } from "@/data/testimonials";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  calendar: CalendarDays,
  globe: Globe,
  leaf: Leaf,
  shield: ShieldCheck,
};

/**
 * Company-wide stats banner — appears on the home page after the hero.
 *
 * 4 numbers in a horizontal row, with botanical iconography.
 */
export function Stats() {
  return (
    <section
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
      aria-labelledby="stats-heading"
    >
      {/* Subtle botanical background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.10) 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <h2 id="stats-heading" className="sr-only">
          Herbs Milanos by the numbers
        </h2>
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {companyStats.map((stat) => {
            const Icon = ICONS[stat.icon ?? "leaf"] ?? Leaf;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <span className="mb-3 flex size-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-inset ring-white/20">
                  <Icon className="size-6" />
                </span>
                <dd className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-1.5 text-xs font-medium uppercase tracking-wider text-primary-foreground/80 sm:text-sm">
                  {stat.label}
                </dt>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
