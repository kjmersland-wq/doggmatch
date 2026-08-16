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
let currentLocale: Locale = "en";
export function getLocale(): Locale {
  return currentLocale;
}

/** Picks the right variant of a bilingual value. Safe outside React. */
export function pick<T>(map: { en: T; no: T }, locale: Locale = currentLocale): T {
  return map[locale] ?? map.en;
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

function detect(): Locale {
  if (typeof navigator === "undefined") return "en";
  const l = (navigator.language || "").toLowerCase();
  return l.startsWith("nb") || l.startsWith("nn") || l.startsWith("no") ? "no" : "en";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const next = readStored() ?? detect();
    currentLocale = next;
    setState(next);
    setReady(true);
  }, []);

  useEffect(() => {
    currentLocale = locale;
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "no" ? "nb" : "en";
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    currentLocale = next;
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
export function useCopy<T>(map: { en: T; no: T }): T {
  const { locale } = useLocale();
  return map[locale] ?? map.en;
}
