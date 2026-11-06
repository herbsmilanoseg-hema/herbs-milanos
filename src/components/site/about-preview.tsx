"use client";

/**
 * About preview — company intro, key facts and certification badges.
 *
 * Content lives in:
 *  - src/data/company.ts  (intro, story, facts, certifications)
 *  - src/data/site.ts     (establishedYear, contact)
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80";

export function AboutPreview() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
              <Image
                src={ABOUT_IMAGE}
                alt="Botanical ingredients being inspected at an Egyptian processing facility"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
              <p className="text-2xl font-bold text-primary">30+</p>
              <p className="text-xs text-muted-foreground">Export countries</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <Leaf className="size-3.5" />
              About Herbs Milanos
            </div>
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              An Egyptian botanicals specialist built for export.
            </h2>
            <div className="mt-2 botanical-divider" aria-hidden />

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {company.intro}
            </p>

            {/* Key facts */}
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {company.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <dt className="text-2xl font-bold text-primary">
                    {fact.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Certification badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                <ShieldCheck className="size-4 text-primary" />
                Certified:
              </span>
              {company.certifications.map((cert) => (
                <Badge
                  key={cert.name}
                  variant="outline"
                  className="border-primary/30 bg-primary/5 text-primary"
                >
                  {cert.name}
                </Badge>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild variant="link" className="px-0 text-primary">
                <Link href="#advantages">
                  Why buyers choose Herbs Milanos
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
