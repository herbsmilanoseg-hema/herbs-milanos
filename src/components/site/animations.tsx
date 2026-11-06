"use client";

import { motion, type Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Page transition wrapper. Fades + slides the page in on every route change,
 * giving instant visual feedback that navigation happened.
 *
 * Wrap each page's root element with <PageTransition>.
 */

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="contents"
    >
      {children}
    </motion.div>
  );
}

/**
 * Top-of-page progress bar that fills during route changes. Mount once near the
 * root of the layout. Uses a `key` on an inner component so each route change
 * remounts the bar (avoids set-state-in-effect anti-pattern).
 */
export function RouteProgressBar() {
  const pathname = usePathname();
  return <ProgressBar key={pathname} />;
}

function ProgressBar() {
  // Lazy initial state — progress starts at 15 immediately, no set-state-in-effect.
  const [progress, setProgress] = useState(15);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setProgress(60), 80);
    const t2 = setTimeout(() => setProgress(100), 280);
    const t3 = setTimeout(() => setDone(true), 420);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (done && progress >= 100) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[100] h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
      initial={{ width: "0%" }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      aria-hidden
    />
  );
}

/**
 * Hover-prefetch Link wrapper — prefetches the href on hover/focus for instant
 * navigation. Used internally by the smart <FastLink> component.
 */
export { motion as Motion };
