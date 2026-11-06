"use client";

import Link from "next/link";
import {
  Leaf,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { translations } from "@/i18n/translations";
import { site } from "@/data/site";
import { productFamilies } from "@/data/products";

export function SiteFooter() {
  // Footer is intentionally pinned to English across all languages — it is
  // international B2B chrome (product categories, contact info, legal line)
  // and reads consistently regardless of the active display language.
  const f = translations.en.footer;

  const year = new Date().getFullYear();
  const rights = f.rights.replace("{year}", String(year));

  const exploreLinks = [
    { label: f.links.about, href: "/about" },
    { label: f.links.products, href: "/products" },
    { label: f.links.resources, href: "/resources" },
    { label: f.links.faq, href: "/faq" },
    { label: f.links.contact, href: "/contact" },
  ];

  const qualityLinks = [
    f.links.quality,
    f.links.coa,
    f.links.phytosanitary,
    f.links.inspection,
  ];

  return (
    <footer
      className="mt-auto border-t border-border bg-primary text-primary-foreground"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Leaf className="size-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-tight text-white">
                  {site.name}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
                  Egyptian Botanicals Exporter
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/80">
              {f.about}
            </p>
          </div>

          {/* Quality & Export */}
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-1 text-sm font-semibold text-white">
              {f.qualityTitle}
            </h3>
            {qualityLinks.map((label) => (
              <Link
                key={label}
                href="/about"
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Product Categories */}
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-1 text-sm font-semibold text-white">
              {f.categoriesTitle}
            </h3>
            {productFamilies.map((family) => (
              <Link
                key={family.id}
                href={`/products?family=${family.id}`}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {family.name}
              </Link>
            ))}
          </div>

          {/* Explore + direct contact */}
          <div className="flex flex-col gap-2.5">
            <h3 className="mb-1 text-sm font-semibold text-white">
              {f.contactTitle}
            </h3>
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-2 border-t border-white/15 pt-4">
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0" />
                <span className="truncate">{site.contact.email}</span>
              </a>
              <a
                href={site.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
              >
                <MessageCircle className="size-4 shrink-0" />
                <span>{site.contact.whatsapp}</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-white/85">
                <MapPin className="size-4 shrink-0 translate-y-0.5" />
                <span>{site.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/70">
          <p>{rights}</p>
        </div>
      </div>
    </footer>
  );
}
