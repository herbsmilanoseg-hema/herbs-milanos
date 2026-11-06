"use client";

/**
 * Applications section — 4 industries Herbs Milanos serves, each with icon,
 * title, description and bullet list.
 *
 * Content lives in src/data/applications.ts (icon components included).
 */

import { applications } from "@/data/applications";

export function Applications() {
  return (
    <section
      id="applications"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="applications-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Applications
          </p>
          <h2
            id="applications-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Built for the industries that rely on botanicals.
          </h2>
          <div className="mx-auto mt-3 botanical-divider" aria-hidden />
          <p className="mt-5 text-base text-muted-foreground">
            From tea bags to skin care to wholesale spice distribution — our
            formats and specifications are tuned to each channel.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <article
                key={app.id}
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {app.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {app.description}
                  </p>
                </div>

                <ul
                  className="mt-auto flex flex-col gap-1.5 border-t border-border pt-4 text-sm text-foreground/90"
                  aria-label={`${app.title} use cases`}
                >
                  {app.bullets.map((bullet) => (
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
