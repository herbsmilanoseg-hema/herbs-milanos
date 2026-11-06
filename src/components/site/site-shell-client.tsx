"use client";

import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

/**
 * Client wrappers for use in server-component pages (e.g. product detail)
 * so the header/footer can read the i18n context.
 */
export function SiteHeaderClient() {
  return <SiteHeader />;
}
export function SiteFooterClient() {
  return <SiteFooter />;
}
