"use client";

/**
 * Resources — export resources & buyer guides preview.
 *
 * Content lives in src/data/resources.ts.
 */

import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, FileText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { resources } from "@/data/resources";

export function Resources() {
  return (
    <section
      id="resources"
      className="scroll-mt-24 bg-secondary/40 py-16 md:py-24"
      aria-labelledby="resources-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Resources & Buyer Guides
          </p>
          <h2
            id="resources-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Practical notes for botanical buyers.
          </h2>
          <div className="mx-auto mt-3 botanical-divider" aria-hidden />
          <p className="mt-5 text-base text-muted-foreground">
            Short articles covering sourcing, quality, logistics and packing —
            written from our experience exporting Egyptian botanicals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {article.image ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center bg-secondary">
                  <FileText className="size-8 text-muted-foreground" />
                </div>
              )}

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-2">
                  <Badge
                    variant="outline"
                    className="border-primary/30 bg-primary/5 text-primary"
                  >
                    {article.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-auto text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="link" className="text-primary">
            <Link href="#contact">
              Need a guide on a specific topic? Ask us.
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
