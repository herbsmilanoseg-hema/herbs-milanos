"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Sprout,
} from "lucide-react";
import { useLanguage } from "@/i18n/use-language";
import { site } from "@/data/site";
import { MagneticButton } from "./fast-link";

const HERO_IMAGE = "/hero-welcome.jpg";

export function Hero() {
  const { t, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      <Image
        src={HERO_IMAGE}
        alt="Egyptian herbal market — fresh mint, dried hibiscus, chamomile, and the Nile"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-end px-4 pb-24 pt-[45vh] sm:px-6 lg:px-8 lg:pb-32 lg:pt-[50vh]">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="banner-text mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur"
          >
            <Sprout className="size-3.5" />
            {t.hero.badge}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="banner-text font-serif text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="banner-text mt-6 max-w-2xl text-pretty text-base text-white sm:text-lg lg:text-xl"
          >
            {t.hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <MagneticButton href="/contact" variant="primary" size="lg">
              {t.hero.ctaPrimary}
              <Arrow className="size-4" />
            </MagneticButton>
            <MagneticButton
              href="/certificates/catalogue.pdf"
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:text-white"
              download
            >
              <Download className="size-4" />
              {t.hero.ctaSecondary}
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
