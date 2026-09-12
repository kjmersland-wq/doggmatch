import { en, type Dictionary } from "./en";
import { no } from "./no";
import { pl } from "./pl";
import { dk } from "./dk";
import { se } from "./se";
import { fi } from "./fi";
import { de } from "./de";
import { fr } from "./fr";
import { nl } from "./nl";
import { useLocale, type Locale } from "./locale";

export {
  LocaleProvider,
  useLocale,
  useCopy,
  pick,
  getLocale,
  SUPPORTED_LOCALES,
  HTML_LANG,
} from "./locale";
export type { Locale, CopyMap } from "./locale";

export const SOURCE_LOCALE: Locale = "en";

/** Locale codes for Intl date/number formatting. */
export const INTL_LOCALE: Record<Locale, string> = {
  en: "en-GB",
  no: "nb-NO",
  pl: "pl-PL",
  dk: "da-DK",
  se: "sv-SE",
  fi: "fi-FI",
  de: "de-DE",
  fr: "fr-FR",
  nl: "nl-NL",
};

const dictionaries: Record<Locale, Dictionary> = { en, no, pl, dk, se, fi, de, fr, nl };

export function getDictionary(locale: Locale = SOURCE_LOCALE): Dictionary {
  return dictionaries[locale] ?? en;
}

/** Interpolates {token} placeholders in a source string. */
export function interpolate(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in values ? String(values[key]) : `{${key}}`,
  );
}

/** Single access point for UI copy, in whichever language the reader chose. */
export function useT(): Dictionary {
  const { locale } = useLocale();
  return getDictionary(locale);
}
