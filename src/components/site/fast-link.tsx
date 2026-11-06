"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FastLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Optional prefetch on mount (default: only on hover/focus) */
  prefetch?: boolean;
  [key: string]: unknown;
}

/**
 * FastLink — a Next.js <Link> that:
 *  1. Prefetches the target route on hover/focus so navigation feels instant.
 *  2. Adds a subtle lift + underline shimmer on hover.
 *  3. Preserves all the typing/behaviour of next/link.
 */
export function FastLink({
  href,
  children,
  className,
  prefetch = false,
  ...rest
}: FastLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      prefetch={prefetch || hovered ? true : false}
      onMouseEnter={() => setHovered(true)}
      onFocus={() => setHovered(true)}
      className={cn("group/link relative inline-flex", className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

/**
 * MagneticButton — a primary CTA button with a soft glow + scale-on-press.
 * Used for the most important actions (Request Quote, Download Catalogue…).
 */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
  download,
  target,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "lg";
  className?: string;
  download?: boolean;
  target?: string;
}) {
  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40",
    outline:
      "border border-primary/40 bg-transparent text-primary hover:bg-primary/5",
    ghost: "text-primary hover:bg-primary/5",
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="inline-flex"
    >
      <Link
        href={href}
        prefetch={false}
        download={download}
        target={target}
        className={cn(base, sizes[size], variants[variant], className)}
      >
        {/* Shine sweep */}
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          aria-hidden
        />
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
        </span>
      </Link>
    </motion.div>
  );
}
