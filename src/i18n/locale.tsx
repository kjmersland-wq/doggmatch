import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";

export type Locale = "en" | "no" | "pl" | "dk" | "se" | "fi";

export const SUPPORTED_LOCALES: Locale[] = ["en", "no", "pl", "dk", "se", "fi"];

/** The /no, /pl, /dk, /se or /fi path segment (and <html lang>) we use for each language. */
export const HTML_LANG: Record<Locale, string> = { en: "en", no: "nb", pl: "pl", dk: "da", se: "sv", fi: "fi" };

/**
 * Mirror of the active locale for plain (non-React) modules — data files and
 * helpers that need to pick copy outside a component render.
 */
const globalStore = globalThis as unknown as { __doggmatchLocale?: Locale };
globalStore.__doggmatchLocale ??= "en";

export function getLocale(): Locale {
  return globalStore.__doggmatchLocale ?? "en";
}

function setCurrentLocale(next: Locale) {
  globalStore.__doggmatchLocale = next;
}

/**
 * A copy map. English is the source language and always required; the other
 * languages are optional so a page still renders while a translation lands.
 */
export type CopyMap<A> = { en: A; no?: unknown; pl?: unknown; dk?: unknown; se?: unknown; fi?: unknown };

/**
 * Picks the right variant of a localised value. Safe outside React.
 * Falls back to English whenever a language is missing.
 */
export function pick<A>(map: CopyMap<A>, locale: Locale = getLocale()): A {
  const value =
    locale === "pl" ? map.pl :
    locale === "no" ? map.no :
    locale === "dk" ? map.dk :
    locale === "se" ? map.se :
    locale === "fi" ? map.fi :
    map.en;
  return ((value ?? map.en) as unknown) as A;
}

/** Normalises whatever the /no, /pl, /dk, /se, /fi path segment looks like into a locale we support. */
export function localeFromParam(value: unknown): Locale | null {
  const v = String(value ?? "").toLowerCase();
  if (v === "no" || v === "nb" || v === "nn" || v === "nb-no") return "no";
  if (v === "pl" || v === "pl-pl") return "pl";
  if (v === "dk" || v === "da" || v === "da-dk") return "dk";
  if (v === "se" || v === "sv" || v === "sv-se") return "se";
  if (v === "fi" || v === "fi-fi") return "fi";
  if (v === "en") return "en";
  return null;
}

type LocaleContextValue = { locale: Locale };

const LocaleContext = createContext<LocaleContextValue>({ locale: "en" });

/**
 * The language lives in the URL — the /no or /pl path segment — so the
 * reader's locale is simply whatever route matched, known on the server as
 * well as the client. No detection, no stored preference: a bare "/" always
 * renders English, exactly what its canonical and hreflang tags promise.
 */
export function LocaleProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale | undefined }) {
  const locale = initialLocale ?? "en";

  // Keep the module mirror in sync during render, before any child reads it
  // through `pick()`. Doing this in an effect is too late for the first
  // post-hydration render, which is what makes data look English while the
  // surrounding UI is already in another language.
  setCurrentLocale(locale);

  useEffect(() => {
    setCurrentLocale(locale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = HTML_LANG[locale];
    }
  }, [locale]);

  const value = useMemo(() => ({ locale }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

/**
 * The everyday helper for components:
 *   const c = useCopy({ en: {...}, no: {...}, pl: {...} });
 */
export function useCopy<A>(map: CopyMap<A>): A {
  const { locale } = useLocale();
  return pick(map, locale);
}
