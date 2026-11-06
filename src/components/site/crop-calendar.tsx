"use client";

/**
 * Crop calendar — harvest windows by product family (inspired by herbs-eg's
 * "Crop Calendar" link). A quick-reference table so buyers can plan orders
 * around the Egyptian harvest season.
 *
 * Data lives in src/data/catalog.ts (season field) grouped by family.
 */

import { useMemo } from "react";
import { CalendarDays } from "lucide-react";
import { catalogProducts } from "@/data/catalog";
import { productFamilies } from "@/data/products";

export function CropCalendar() {
  // Group products by family, sorted by name within each family
  const grouped = useMemo(() => {
    return productFamilies.map((family) => ({
      family,
      products: catalogProducts
        .filter((p) => p.family === family.id)
        .sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }, []);

  return (
    <section
      id="crop-calendar"
      className="scroll-mt-24 bg-secondary/40 py-16 md:py-24"
      aria-labelledby="crop-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-primary">
            <CalendarDays className="size-4" />
            Crop Calendar
          </p>
          <h2
            id="crop-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Plan your orders around the Egyptian harvest.
          </h2>
          <div className="mx-auto mt-3 botanical-divider" aria-hidden />
          <p className="mt-5 text-base text-muted-foreground">
            Harvest windows vary by crop and region. Use this calendar to time
            your RFQs — items ordered just after harvest typically ship fastest
            and at the most competitive pricing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {grouped.map(({ family, products }) => (
            <article
              key={family.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="border-b border-border bg-primary/5 px-5 py-3">
                <h3 className="text-sm font-semibold text-primary">
                  {family.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {products.length} products
                </p>
              </div>
              <ul className="divide-y divide-border">
                {products.map((p) => (
                  <li
                    key={p.id}
                    className="flex items-center justify-between gap-3 px-5 py-2.5 text-sm"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-medium text-foreground">
                        {p.name}
                      </p>
                      <p className="truncate text-xs italic text-muted-foreground">
                        {p.latinName}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                      {p.season}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Year-round items are harvested and processed continuously. Contact us
          for current stock and lead time on any specific SKU.
        </p>
      </div>
    </section>
  );
}
