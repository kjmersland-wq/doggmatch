/**
 * Lookup helpers for the food safety pages.
 *
 * The food list itself lives in `src/data/care/nutrition.*.ts` — one file per
 * language, same ids in the same order. These helpers let a route read a food
 * in a specific language (which `head()` needs, before React context exists)
 * and find a few sensible neighbours to link on to.
 */
import { foodItemsEn } from "@/data/care/nutrition.en";
import { foodItemsNo } from "@/data/care/nutrition.no";
import { foodItemsPl } from "@/data/care/nutrition.pl";
import { foodItemsDk } from "@/data/care/nutrition.dk";
import { foodItemsSe } from "@/data/care/nutrition.se";
import { foodItemsFi } from "@/data/care/nutrition.fi";
import { foodItemsDe } from "@/data/care/nutrition.de";
import { foodItemsFr } from "@/data/care/nutrition.fr";
import { foodItemsNl } from "@/data/care/nutrition.nl";
import type { FoodItem } from "@/data/care/types";
import type { Locale } from "@/i18n";

const byLocale: Partial<Record<Locale, FoodItem[]>> = {
  en: foodItemsEn,
  no: foodItemsNo,
  pl: foodItemsPl,
  dk: foodItemsDk,
  se: foodItemsSe,
  fi: foodItemsFi,
  de: foodItemsDe,
  fr: foodItemsFr,
  nl: foodItemsNl,
};

/** Every food id, in the order the English source lists them. */
export const foodIds: string[] = foodItemsEn.map((f) => f.id);

export function foodListFor(locale: Locale): FoodItem[] {
  return byLocale[locale] ?? foodItemsEn;
}

/** One food, read in a given language (falls back to English). */
export function foodFor(locale: Locale, id: string): FoodItem | undefined {
  return foodListFor(locale).find((f) => f.id === id) ?? foodItemsEn.find((f) => f.id === id);
}

export function foodExists(id: string): boolean {
  return foodIds.includes(id);
}

/** A handful of neighbours: same verdict first, then anything else. */
export function relatedFoods(locale: Locale, id: string, count = 6): FoodItem[] {
  const list = foodListFor(locale);
  const current = list.find((f) => f.id === id);
  if (!current) return list.slice(0, count);
  const same = list.filter((f) => f.id !== id && f.safety === current.safety);
  const rest = list.filter((f) => f.id !== id && f.safety !== current.safety);
  return [...same, ...rest].slice(0, count);
}

/** Foods grouped A–Z by first letter, for the hub page. */
export function foodsByLetter(locale: Locale): { letter: string; items: FoodItem[] }[] {
  const sorted = [...foodListFor(locale)].sort((a, b) => a.name.localeCompare(b.name));
  const groups = new Map<string, FoodItem[]>();
  for (const item of sorted) {
    const letter = item.name.charAt(0).toLocaleUpperCase();
    const bucket = groups.get(letter);
    if (bucket) bucket.push(item);
    else groups.set(letter, [item]);
  }
  return [...groups.entries()].map(([letter, items]) => ({ letter, items }));
}
