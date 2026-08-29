import { pick } from "@/i18n";
import { foodItemsEn, nutritionSectionsEn } from "./nutrition.en";
import { foodItemsNo, nutritionSectionsNo } from "./nutrition.no";
import { foodItemsPl, nutritionSectionsPl } from "./nutrition.pl";
import type { FoodItem } from "./types";

/** Locale-aware food safety list and nutrition guide sections. */
export function foodItems(): FoodItem[] {
  return pick({ en: foodItemsEn, no: foodItemsNo, pl: foodItemsPl });
}

export function foodById(): Record<string, FoodItem> {
  return Object.fromEntries(foodItems().map((f) => [f.id, f]));
}

export function nutritionSections() {
  return pick({ en: nutritionSectionsEn, no: nutritionSectionsNo, pl: nutritionSectionsPl });
}
