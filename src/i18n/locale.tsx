import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "no" | "pl";

export const SUPPORTED_LOCALES: Locale[] = ["en", "no", "pl"];

/** The ?lang= value and <html lang> we use for each language. */
export const HTML_LANG: Record<Locale, string> = { en: "en", no: "nb", pl: "pl" };

const KEY = "doggmatch.locale";

function isLocale(v: unknown): v is Locale {
  return v === "en" || v === "no" || v === "pl";
}

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
export type CopyMap<A> = { en: A; no?: unknown; pl?: unknown };

/**
 * Picks the right variant of a localised value. Safe outside React.
 * Falls back to English whenever a language is missing.
 */
export function pick<A>(map: CopyMap<A>, locale: Locale = getLocale()): A {
  const value = locale === "pl" ? map.pl : locale === "no" ? map.no : map.en;
  return ((value ?? map.en) as unknown) as A;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  ready: boolean;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
  ready: false,
});

function readStored(): Locale | null {
  try {
    const v = localStorage.getItem(KEY);
    return isLocale(v) ? v : null;
  } catch {
    return null;
  }
}

/** Normalises whatever a ?lang= value looks like into a locale we support. */
export function localeFromParam(value: unknown): Locale | null {
  const v = String(value ?? "").toLowerCase();
  if (v === "no" || v === "nb" || v === "nn" || v === "nb-no") return "no";
  if (v === "pl" || v === "pl-pl") return "pl";
  if (v === "en") return "en";
  return null;
}

/**
 * A shared link can carry the language it was read in (?lang=pl), which is
 * also what the hreflang alternates point at. An explicit link wins over a
 * previously stored choice — and because the server can read it too, the
 * page is rendered in that language straight away.
 */
function readFromUrl(): Locale | null {
  if (typeof window === "undefined") return null;
  return localeFromParam(new URLSearchParams(window.location.search).get("lang"));
}

function detect(): Locale {
  if (typeof navigator === "undefined") return "en";
  const l = (navigator.language || "").toLowerCase();
  if (l.startsWith("nb") || l.startsWith("nn") || l.startsWith("no")) return "no";
  if (l.startsWith("pl")) return "pl";
  return "en";
}

export function LocaleProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  // The language in the URL is known on the server as well, so the first
  // paint already matches what the reader asked for.
  const [locale, setState] = useState<Locale>(initialLocale ?? "en");
  const [ready, setReady] = useState(false);

  // Keep the module mirror in sync during render, before any child reads it
  // through `pick()`. Doing this in an effect is too late for the first
  // post-hydration render, which is what makes data look English while the
  // surrounding UI is already in another language.
  setCurrentLocale(locale);

  useEffect(() => {
    const fromUrl = readFromUrl();
    const next = fromUrl ?? readStored() ?? detect();
    setCurrentLocale(next);
    // A shared ?lang= link should keep its language while you browse on.
    if (fromUrl) {
      try {
        localStorage.setItem(KEY, fromUrl);
      } catch {
        /* private mode */
      }
    }
    setState(next);
    setReady(true);
  }, []);


  useEffect(() => {
    setCurrentLocale(locale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = HTML_LANG[locale];
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setCurrentLocale(next);
    setState(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode — the choice just won't stick */
    }
    // Keep the address bar honest: the language is part of the shareable URL.
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (next === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", next);
      window.history.replaceState(window.history.state, "", url.toString());
    }
  }, []);

  const value = useMemo(() => ({ locale, setLocale, ready }), [locale, setLocale, ready]);

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
