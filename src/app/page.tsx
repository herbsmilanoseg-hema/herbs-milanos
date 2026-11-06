import { Suspense } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/site/hero";
import { WhyUs } from "@/components/site/why-us";
import { Certifications } from "@/components/site/certifications";
import { Catalog } from "@/components/site/catalog";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Suspense fallback={null}>
          <Catalog compact />
        </Suspense>
        <Certifications />
      </main>
      <SiteFooter />
    </div>
  );
}
