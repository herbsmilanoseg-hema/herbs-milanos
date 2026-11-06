"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sprout, Wind, Magnet, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { useLanguage } from "@/i18n/use-language";
import { site } from "@/data/site";

const PROCESS_ICONS = [Sprout, Wind, Magnet, Package];

const GALLERY = [
  "/gallery/galary_1.jpg",
  "/gallery/galary2.jpg",
  "/gallery/galary3.jpg",
  "/gallery/galary4.jpg",
];

export default function AboutPage() {
  const { t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
          <Image
            src="/about-hero.jpg"
            alt="Egyptian spice market by the Nile — herbs, spices, and pyramids"
            fill
            priority
            className="object-cover"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="banner-text text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl font-serif">
                {t.about.heroTitle}
              </h1>
              <div className="mt-6 botanical-divider" aria-hidden />
              <p className="banner-text mt-6 text-base text-white sm:text-lg">
                {site.name} — {t.footer.about}
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              {t.about.storyHeading}
            </h2>
            <div className="mt-3 botanical-divider" aria-hidden />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.about.storyP1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t.about.storyP2}
            </p>
          </div>
        </section>

        <section className="scroll-mt-24 bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              {t.about.processHeading}
            </h2>
            <div className="mt-3 botanical-divider" aria-hidden />
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.about.process.map((step, i) => {
                const Icon = PROCESS_ICONS[i] ?? Sprout;
                return (
                  <li
                    key={step.title}
                    className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
                  >
                    <span
                      className="absolute right-4 top-3 text-4xl font-bold text-primary/10"
                      aria-hidden
                    >
                      0{i + 1}
                    </span>
                    <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="scroll-mt-24 bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-primary">
                  {t.about.visionHeading}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {t.about.vision}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-primary">
                  {t.about.missionHeading}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {t.about.mission}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 bg-secondary/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
              {t.about.galleryHeading}
            </h2>
            <div className="mt-3 botanical-divider" aria-hidden />
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {GALLERY.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-2xl shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`Herbs Milanos farm ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  {t.nav.requestQuote}
                  <Arrow className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
