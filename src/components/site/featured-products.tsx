"use client";

/**
 * Featured products — 8 bulk ingredients shown as a grid.
 * Each card shows image, name, latin name, form, MOQ, packing, origin and season.
 *
 * Content lives in src/data/products.ts (featuredItems + totalProductCount).
 */

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Boxes, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { featuredItems, totalProductCount } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section
      id="featured"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="featured-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              Featured Bulk Ingredients
            </p>
            <h2
              id="featured-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Wholesale SKUs buyers return for.
            </h2>
            <div className="mt-3 botanical-divider" aria-hidden />
            <p className="mt-5 text-base text-muted-foreground">
              Eight of our most-exported Egyptian aromatics and spices. Each is
              available in bulk with full COA, samples, and complete export
              documentation.
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="shrink-0 border-primary/40 text-primary hover:bg-primary/5"
          >
            <Link href="#contact">
              Request a Bulk Quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={`${item.name} — ${item.form}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* MOQ badge — primary wholesale signal */}
                <div className="absolute left-2 top-2">
                  <Badge
                    variant="secondary"
                    className="bg-primary text-primary-foreground shadow-sm"
                  >
                    MOQ {item.moq}
                  </Badge>
                </div>
                {/* Form badge */}
                <div className="absolute right-2 top-2">
                  <Badge
                    variant="secondary"
                    className="bg-white/95 text-foreground shadow-sm capitalize"
                  >
                    {item.form}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <h3 className="text-base font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="text-xs italic text-muted-foreground">
                  {item.latinName}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.brief}
                </p>

                {/* Wholesale spec grid */}
                <dl className="mt-auto grid grid-cols-2 gap-x-2 gap-y-1.5 pt-3 text-xs">
                  <SpecRow
                    icon={<Boxes className="size-3.5" />}
                    label="Packing"
                    value={item.packing}
                  />
                  <SpecRow
                    icon={<CalendarDays className="size-3.5" />}
                    label="Season"
                    value={item.season}
                  />
                  <SpecRow
                    icon={<MapPin className="size-3.5" />}
                    label="Origin"
                    value={item.origin}
                    span
                  />
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Browse all{" "}
            <span className="font-semibold text-foreground">
              {totalProductCount} SKUs
            </span>{" "}
            across our five families — request a quote to receive a custom
            product list with bulk pricing.
          </p>
        </div>
      </div>
    </section>
  );
}

function SpecRow({
  icon,
  label,
  value,
  span,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  span?: boolean;
}) {
  return (
    <div className={`flex items-center gap-1.5 ${span ? "col-span-2" : ""}`}>
      <span className="text-primary" aria-hidden>
        {icon}
      </span>
      <dt className="sr-only">{label}</dt>
      <dd className="font-medium text-foreground/80">
        <span className="text-muted-foreground">{label}: </span>
        {value}
      </dd>
    </div>
  );
}
