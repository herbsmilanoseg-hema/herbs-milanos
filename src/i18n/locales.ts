/**
 * Supported languages for the Herbs Milanos site.
 * Arabic (ar) is RTL; English (en) is LTR.
 */

export type LangCode = "en" | "ar";

export interface Language {
  code: LangCode;
  /** Native display name */
  label: string;
  dir: "ltr" | "rtl";
}

export const languages: Language[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

export const defaultLang: LangCode = "en";

export function getDir(code: LangCode): "ltr" | "rtl" {
  return languages.find((l) => l.code === code)?.dir ?? "ltr";
}

export function isLang(code: string): code is LangCode {
  return languages.some((l) => l.code === code);
}
