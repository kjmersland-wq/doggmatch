import { en, type Dictionary } from "./en";
import { no } from "./no";
import { useLocale, type Locale } from "./locale";

export { LocaleProvider, useLocale, useCopy, pick, getLocale, SUPPORTED_LOCALES } from "./locale";
export type { Locale } from "./locale";

export const SOURCE_LOCALE: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, no };

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
