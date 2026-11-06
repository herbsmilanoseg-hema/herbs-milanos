"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/use-language";
import { company } from "@/data/company";

export function Certifications() {
  const { t } = useLanguage();
  return (
    <section
      id="certs"
      className="scroll-mt-24 bg-secondary/40 py-16 md:py-24"
      aria-labelledby="certs-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wider text-primary">
            <ShieldCheck className="size-4" />
            {t.certs.eyebrow}
          </p>
          <h2
            id="certs-heading"
            className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {t.certs.items.map((c) => c.name).join(" · ")}
          </h2>
          <div className="mx-auto mt-3 botanical-divider" aria-hidden />
          <p className="mt-5 text-base text-muted-foreground">
            {t.certs.body}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {company.certifications.map((cert, i) => {
            const tcert = t.certs.items[i];
            return (
              <article
                key={cert.name}
                className="card-hover group flex flex-col gap-4 overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                {/* Certificate image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <Image
                    src={cert.pdf}
                    alt={`${cert.name} certificate — Herbs Milanos`}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="img-zoom object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
                        <ShieldCheck className="size-5" />
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {cert.name}
                        </h3>
                        <p className="text-xs text-white/80">
                          {tcert?.desc ?? cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download button */}
                <div className="px-5 pb-5">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-primary/30 text-primary hover:bg-primary/5"
                  >
                    <Link href={cert.pdf} target="_blank" download>
                      <Download className="size-4" />
                      {t.certs.download}
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
