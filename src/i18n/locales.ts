/**
 * Supported languages for the Herbs Milanos site.
 * Arabic (ar) is RTL; all others are LTR.
 */

export type LangCode = "en" | "ar" | "fr" | "de" | "it" | "ru" | "zh" | "es" | "pt" | "tr";

export interface Language {
  code: LangCode;
  /** Native display name */
  label: string;
  dir: "ltr" | "rtl";
}

export const languages: Language[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "it", label: "Italiano", dir: "ltr" },
  { code: "ru", label: "Русский", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "pt", label: "Português", dir: "ltr" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
];

export const defaultLang: LangCode = "en";

export function getDir(code: LangCode): "ltr" | "rtl" {
  return languages.find((l) => l.code === code)?.dir ?? "ltr";
}

export function isLang(code: string): code is LangCode {
  return languages.some((l) => l.code === code);
}
