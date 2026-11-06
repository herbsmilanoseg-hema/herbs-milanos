"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { useLanguage } from "@/i18n/use-language";

export default function ResourcesPage() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
          <Image
            src="/resources-hero.jpg"
            alt="Container port at golden hour — Egyptian botanical export shipping"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/80">
                {t.resources.eyebrow}
              </p>
              <h1 className="banner-text text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl font-serif">
                {t.resources.heading}
              </h1>
              <div className="mt-6 botanical-divider" aria-hidden />
            </div>
          </div>
        </section>

        {/* RFQ guide */}
        <section className="scroll-mt-24 bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              {t.resources.rfqTitle}
            </h2>
            <div className="mt-3 botanical-divider" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.resources.rfqIntro}
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {t.resources.rfqPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm text-foreground/90"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Harvest calendar */}
        <section className="scroll-mt-24 bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              {t.resources.harvestTitle}
            </h2>
            <div className="mt-3 botanical-divider" aria-hidden />
            <p className="mt-5 max-w-2xl text-base text-muted-foreground">
              {t.resources.harvestIntro}
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-primary/5">
                    <th className="px-5 py-3 text-start font-semibold text-primary">
                      {t.products.familyLabel}
                    </th>
                    <th className="px-5 py-3 text-start font-semibold text-primary">
                      {t.resources.harvestTitle.split(" ").slice(-2).join(" ")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.resources.harvestRows.map((row, i) => (
                    <tr
                      key={row.crop}
                      className={i % 2 === 0 ? "bg-card" : "bg-secondary/30"}
                    >
                      <td className="px-5 py-3 font-medium text-foreground">
                        {row.crop}
                      </td>
                      <td className="px-5 py-3 text-muted-foreground">
                        {row.season}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm italic text-muted-foreground">
              {t.resources.harvestNote}
            </p>
          </div>
        </section>

        {/* Quality assurance */}
        <section className="scroll-mt-24 bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              {t.resources.qualityTitle}
            </h2>
            <div className="mt-3 botanical-divider" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.resources.qualityBody}
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
