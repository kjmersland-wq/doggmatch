import { pick } from "@/i18n";
import { foodItemsEn, nutritionSectionsEn } from "./nutrition.en";
import { foodItemsNo, nutritionSectionsNo } from "./nutrition.no";
import { foodItemsPl, nutritionSectionsPl } from "./nutrition.pl";
import { foodItemsDk, nutritionSectionsDk } from "./nutrition.dk";
import { foodItemsSe, nutritionSectionsSe } from "./nutrition.se";
import { foodItemsFi, nutritionSectionsFi } from "./nutrition.fi";
import { foodItemsDe, nutritionSectionsDe } from "./nutrition.de";
import { foodItemsFr, nutritionSectionsFr } from "./nutrition.fr";
import { foodItemsNl, nutritionSectionsNl } from "./nutrition.nl";
import type { FoodItem } from "./types";

/** Locale-aware food safety list and nutrition guide sections. */
export function foodItems(): FoodItem[] {
  return pick({
    en: foodItemsEn,
    no: foodItemsNo,
    pl: foodItemsPl,
    dk: foodItemsDk,
    se: foodItemsSe,
    fi: foodItemsFi,
    de: foodItemsDe,
    fr: foodItemsFr,
    nl: foodItemsNl,
  });
}

export function foodById(): Record<string, FoodItem> {
  return Object.fromEntries(foodItems().map((f) => [f.id, f]));
}

export function nutritionSections() {
  return pick({
    en: nutritionSectionsEn,
    no: nutritionSectionsNo,
    pl: nutritionSectionsPl,
    dk: nutritionSectionsDk,
    se: nutritionSectionsSe,
    fi: nutritionSectionsFi,
    de: nutritionSectionsDe,
    fr: nutritionSectionsFr,
    nl: nutritionSectionsNl,
  });
}
