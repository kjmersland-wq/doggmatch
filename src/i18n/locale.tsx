import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "no";

export const SUPPORTED_LOCALES: Locale[] = ["en", "no"];

const KEY = "doggmatch.locale";

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
 * Picks the right variant of a bilingual value. Safe outside React.
 * The two branches are inferred independently (so `as const` literals in the
 * Norwegian branch don't have to match the English literal types), but the
 * result is typed from the English branch.
 */
export function pick<A, B>(map: { en: A; no: B }, locale: Locale = getLocale()): A {
  return ((locale === "no" ? map.no : map.en) ?? map.en) as unknown as A;
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
    return v === "en" || v === "no" ? v : null;
  } catch {
    return null;
  }
}

/**
 * A shared link can carry the language it was read in (?lang=no), which is
 * also what the hreflang alternates point at. An explicit link wins over a
 * previously stored choice.
 */
function readFromUrl(): Locale | null {
  if (typeof window === "undefined") return null;
  const v = new URLSearchParams(window.location.search).get("lang");
  if (v === "no" || v === "nb" || v === "nn") return "no";
  if (v === "en") return "en";
  return null;
}

function detect(): Locale {
  if (typeof navigator === "undefined") return "en";
  const l = (navigator.language || "").toLowerCase();
  return l.startsWith("nb") || l.startsWith("nn") || l.startsWith("no") ? "no" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  // Keep the module mirror in sync during render, before any child reads it
  // through `pick()`. Doing this in an effect is too late for the first
  // post-hydration render, which is what makes data look English while the
  // surrounding UI is already Norwegian.
  setCurrentLocale(locale);

  useEffect(() => {
    const next = readFromUrl() ?? readStored() ?? detect();
    setCurrentLocale(next);
    setState(next);
    setReady(true);
  }, []);

  useEffect(() => {
    setCurrentLocale(locale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "no" ? "nb" : "en";
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
  }, []);

  const value = useMemo(() => ({ locale, setLocale, ready }), [locale, setLocale, ready]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

/**
 * The everyday helper for components:
 *   const c = useCopy({ en: { title: "Hello" }, no: { title: "Hei" } });
 */
export function useCopy<A, B>(map: { en: A; no: B }): A {
  const { locale } = useLocale();
  return ((locale === "no" ? map.no : map.en) ?? map.en) as unknown as A;
}
