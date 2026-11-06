import { Suspense } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { WhyUs } from "@/components/site/why-us";
import { Catalog } from "@/components/site/catalog";
import { Testimonials } from "@/components/site/testimonials";
import { Certifications } from "@/components/site/certifications";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Stats />
        <WhyUs />
        <Suspense fallback={null}>
          <Catalog compact />
        </Suspense>
        <Testimonials />
        <Certifications />
      </main>
      <SiteFooter />
    </div>
  );
}
