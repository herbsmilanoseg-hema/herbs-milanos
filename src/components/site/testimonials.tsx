"use client";

import { Quote, Star, User, Leaf } from "lucide-react";
import { testimonials } from "@/data/testimonials";

/**
 * Buyer testimonials section — appears on the home page after WhyUs.
 *
 * Shows 3–6 buyer testimonials in a responsive card grid.
 * Each card: quote, optional star rating, author, role + product.
 */
export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            What our buyers say
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Trusted by B2B buyers across 30+ countries
          </h2>
          <div className="mx-auto mt-3 botanical-divider" aria-hidden />
          <p className="mt-5 text-base text-muted-foreground">
            Tea blenders, spice processors, cosmetics brands, and
            perfumers — here&apos;s what they say about sourcing from
            Herbs Milanos.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="card-hover relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              {/* Big quote mark */}
              <Quote
                className="size-7 text-primary/30"
                aria-hidden
              />

              {/* Quote text */}
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Star rating (optional) */}
              {t.rating && (
                <div
                  className="flex gap-0.5"
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={
                        i < t.rating!
                          ? "size-4 fill-gold text-gold"
                          : "size-4 text-muted-foreground/30"
                      }
                    />
                  ))}
                </div>
              )}

              {/* Product tag (optional) */}
              {t.product && (
                <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary/5 px-2.5 py-1 text-[11px] font-medium text-primary">
                  <Leaf className="size-3" />
                  {t.product}
                </div>
              )}

              {/* Author block */}
              <div className="mt-2 flex items-center gap-3 border-t border-border/60 pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <User className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
