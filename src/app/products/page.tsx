"use client";

import Image from "next/image";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Catalog } from "@/components/site/catalog";
import { useLanguage } from "@/i18n/use-language";

function ProductsHero() {
  const { t } = useLanguage();
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <Image
        src="/products-hero.jpg"
        alt="Egyptian black cumin seeds and nigella flowers — premium botanical ingredients"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/80">
            {t.products.eyebrow}
          </p>
          <h1 className="banner-text text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl font-serif">
            {t.products.heading}
          </h1>
          <div className="mt-6 botanical-divider" aria-hidden />
          <p className="banner-text mt-6 text-base text-white sm:text-lg">
            {t.products.intro}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <ProductsHero />
        <Suspense fallback={null}>
          <Catalog />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
