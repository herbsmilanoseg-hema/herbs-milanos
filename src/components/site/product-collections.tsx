"use client";

/**
 * Product families — 5 cards showing the top-level product categories.
 *
 * Content lives in src/data/products.ts (productFamilies).
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { productFamilies } from "@/data/products";
import { site } from "@/data/site";

export function ProductCollections() {
  return (
    <section
      id="products"
      className="scroll-mt-24 bg-secondary/40 py-16 md:py-24"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Wholesale Catalog
          </p>
          <h2
            id="products-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Five families. One reliable bulk source.
          </h2>
          <div className="mx-auto mt-3 botanical-divider" aria-hidden />
          <p className="mt-5 text-base text-muted-foreground">
            Over {site.productCount} aromatic and spice SKUs across herbs,
            flowers, seeds, spices, essential oils and vegetable oils —
            available in bulk whole, cut, powder, ground, oil, butter and
            extract forms, with MOQ from 1 MT per item.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productFamilies.map((family) => (
            <article
              key={family.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={family.image}
                  alt={family.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <h3 className="absolute bottom-3 left-4 right-4 text-xl font-semibold text-white">
                  {family.name}
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {family.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {family.subCategories.map((sub) => (
                    <Badge
                      key={sub.name}
                      variant="secondary"
                      className="text-[11px]"
                    >
                      {sub.name}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-2">
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="px-0 text-primary"
                  >
                    <Link href="#featured">
                      View products
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}

          {/* Final CTA card */}
          <article className="flex flex-col justify-between rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6">
            <div>
              <h3 className="text-xl font-semibold text-primary">
                Need a specific aromatic or spice?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We carry 100+ SKUs beyond what is shown here. If you need a
                particular herb, cut, grade, oil or extract, ask us — we likely
                already process it for another wholesale buyer.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild>
                <Link href="#contact">Ask about a product</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
