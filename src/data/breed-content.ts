import { pick } from "@/i18n";
import { breedContentEn, type BreedContent } from "./breed-content.en";
import { breedContentNo } from "./breed-content.no";
import type { BreedId } from "./breeds";

export type { BreedContent };

/** Breed prose in the reader's language. Safe inside and outside React. */
export function breedContent(): Record<BreedId, BreedContent> {
  return pick({ en: breedContentEn, no: breedContentNo });
}
