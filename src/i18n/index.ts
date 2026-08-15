import { en, type Dictionary } from "./en";

export const SOURCE_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

const dictionaries: Record<Locale, Dictionary> = { en };

export function getDictionary(locale: Locale = SOURCE_LOCALE): Dictionary {
  return dictionaries[locale] ?? en;
}

/** Interpolates {token} placeholders in a source string. */
export function interpolate(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in values ? String(values[key]) : `{${key}}`,
  );
}

/** Single access point for UI copy — swap the locale here when more languages land. */
export function useT() {
  return getDictionary(SOURCE_LOCALE);
}
