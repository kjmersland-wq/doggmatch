import { useCallback, useEffect, useState } from "react";
import { INTL_LOCALE, useLocale } from "@/i18n";
import { CURRENCY, DEFAULT_COUNTRY, isCountry, toLocalAmount, type Country } from "@/lib/region";

/**
 * The reader's country, kept on this device only. Until they pick one it is the
 * country that matches the language they chose, which the picker shows as a
 * suggestion they can confirm or change. No IP lookup, nothing sent anywhere.
 */
const KEY = "doggmatch.country";
const EVENT = "doggmatch:country";

function readStored(): Country | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(KEY);
    return isCountry(value) ? value : null;
  } catch {
    return null;
  }
}

export function useCountry() {
  const { locale } = useLocale();
  const [stored, setStored] = useState<Country | null>(null);

  useEffect(() => {
    const sync = () => setStored(readStored());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const setCountry = useCallback((next: Country) => {
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      /* private mode — the choice still applies for this visit */
    }
    setStored(next);
    window.dispatchEvent(new Event(EVENT));
  }, []);

  return {
    country: stored ?? DEFAULT_COUNTRY[locale],
    /** False while the country is only our suggestion from the language. */
    confirmed: stored !== null,
    setCountry,
  };
}

/** Formats a euro amount in the reader's currency, in their language's number style. */
export function useMoney() {
  const { locale } = useLocale();
  const { country } = useCountry();
  const fmt = new Intl.NumberFormat(INTL_LOCALE[locale], {
    style: "currency",
    currency: CURRENCY[country],
    maximumFractionDigits: 0,
  });
  return (euros: number) => fmt.format(toLocalAmount(euros, country));
}
