"use client";

import { LanguageProvider } from "@/i18n/LanguageContext";

/** Client wrapper so the server-component layout can mount the i18n provider. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
