"use client";

import Image from "next/image";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { useLanguage } from "@/i18n/use-language";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqPage() {
  const { t } = useLanguage();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.categories.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
          <Image
            src="/faq-hero.jpg"
            alt="Fulfillment team processing new export orders"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/80">
                {t.faq.eyebrow}
              </p>
              <h1 className="banner-text text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl font-serif">
                {t.faq.heading}
              </h1>
              <div className="mt-6 botanical-divider" aria-hidden />
              <p className="banner-text mt-6 text-base text-white sm:text-lg">
                {t.faq.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 bg-background py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10">
              {t.faq.categories.map((category) => (
                <div key={category.id} className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl font-serif">
                    {category.title}
                  </h2>
                  <div className="botanical-divider" aria-hidden />
                  <Accordion
                    type="single"
                    collapsible
                    className="flex flex-col gap-3"
                  >
                    {category.items.map((item, i) => (
                      <AccordionItem
                        key={`${category.id}-${i}`}
                        value={`${category.id}-${i}`}
                        className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-sm"
                      >
                        <AccordionTrigger className="text-start text-base font-semibold text-foreground hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
