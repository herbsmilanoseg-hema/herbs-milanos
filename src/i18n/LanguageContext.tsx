"use client";

/**
 * Language context provider — keeps the active language synced with
 * localStorage via useSyncExternalStore, and reflects it onto <html lang/dir>.
 *
 * useSyncExternalStore is the React 18+ pattern for external stores: it
 * returns getServerSnapshot() during SSR and the first client render (which
 * matches the server-rendered HTML, preventing hydration mismatches), then
 * switches to getClientSnapshot() after hydration completes.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { defaultLang, getDir, isLang, type LangCode } from "./locales";
import { translations, type Dictionary } from "./translations";

interface LanguageContextValue {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "herbs-milanos-lang";
const LANG_CHANGE_EVENT = "herbs-milanos-lang-change";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener(LANG_CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANG_CHANGE_EVENT, callback);
  };
}

function getServerSnapshot(): LangCode {
  return defaultLang;
}

function getClientSnapshot(): LangCode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isLang(stored)) return stored;
  } catch {
    /* ignore */
  }
  return defaultLang;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const setLang = useCallback((l: LangCode) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
    } catch {
      /* ignore */
    }
  }, []);

  // Reflect lang onto <html lang/dir> — pure side effect, no setState
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = getDir(lang);
  }, [lang]);

  const value = useMemo<LanguageContextValue>(() => {
    const t = translations[lang] ?? translations.en;
    return { lang, setLang, t, dir: getDir(lang) };
  }, [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
