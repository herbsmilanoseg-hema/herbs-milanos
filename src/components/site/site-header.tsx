"use client";

/**
 * Site header — sticky top nav with real routes + i18n.
 * Mobile: hamburger opens a Sheet.
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

import { site } from "@/data/site";
import { useLanguage } from "@/i18n/use-language";
import { LanguageSwitcher } from "./language-switcher";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.products, href: "/products" },
    { label: t.nav.resources, href: "/resources" },
    { label: t.nav.faq, href: "/faq" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 transition-shadow",
        scrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/logo/header.png"
            alt={site.name}
            width={64}
            height={43}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-primary">
              {site.name}
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:block">
              Egyptian Botanicals Exporter
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={cn(
                  "group/nav relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/60 hover:text-accent-foreground",
                  active ? "text-primary" : "text-foreground/80"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-center rounded-full bg-primary transition-transform duration-300",
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover/nav:scale-x-100"
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-1.5">
          <LanguageSwitcher />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">
              <Mail className="size-4" />
              {t.nav.requestQuote}
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 max-w-[85vw]">
              <SheetHeader className="px-6 pt-6">
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/logo/header.png"
                    alt={site.name}
                    width={56}
                    height={38}
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-primary">{site.name}</span>
                </SheetTitle>
              </SheetHeader>

              <nav
                className="flex flex-col gap-1 px-4 py-4"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-accent/60 hover:text-accent-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 border-t border-border px-6 py-5">
                <Badge variant="secondary" className="w-fit">
                  ISO 9001 · ISO 22000 · HACCP
                </Badge>
                <SheetClose asChild>
                  <Button asChild size="sm">
                    <Link href="/contact">
                      <Mail className="size-4" />
                      {t.nav.requestQuote}
                    </Link>
                  </Button>
                </SheetClose>
                <p className="text-xs text-muted-foreground" dir="ltr">
                  {site.contact.email}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
