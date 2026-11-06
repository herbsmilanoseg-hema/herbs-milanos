"use client";

/**
 * Wholesale buying journey — 4-step process shown to global B2B buyers.
 *
 * Content lives in src/data/order-process.ts (step titles, descriptions, icons).
 */

import { orderSteps } from "@/data/order-process";

export function OrderProcess() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            How Wholesale Orders Work
          </p>
          <h2
            id="process-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            From enquiry to container — in four steps.
          </h2>
          <div className="mx-auto mt-3 botanical-divider" aria-hidden />
          <p className="mt-5 text-base text-muted-foreground">
            Built for global buyers who need clean product, accurate
            documentation and on-time shipment. Here is what to expect when you
            order from Herbs Milanos.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {orderSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.id}
                className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                {/* Step number watermark */}
                <span
                  className="absolute right-4 top-3 text-4xl font-bold text-primary/10"
                  aria-hidden
                >
                  {step.number}
                </span>

                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </span>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  <span className="sr-only">Step {step.number}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                <ul
                  className="mt-auto flex flex-col gap-1.5 border-t border-border pt-4 text-sm text-foreground/90"
                  aria-label={`${step.title} details`}
                >
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
