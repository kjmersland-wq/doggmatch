import { pick } from "@/i18n";
import { foodItemsEn, nutritionSectionsEn } from "./nutrition.en";
import { foodItemsNo, nutritionSectionsNo } from "./nutrition.no";
import type { FoodItem } from "./types";

/** Locale-aware food safety list and nutrition guide sections. */
export function foodItems(): FoodItem[] {
  return pick({ en: foodItemsEn, no: foodItemsNo });
}

export function foodById(): Record<string, FoodItem> {
  return Object.fromEntries(foodItems().map((f) => [f.id, f]));
}

export function nutritionSections() {
  return pick({ en: nutritionSectionsEn, no: nutritionSectionsNo });
}
