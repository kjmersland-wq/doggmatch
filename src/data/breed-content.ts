import { pick } from "@/i18n";
import { breedContentEn, type BreedContent } from "./breed-content.en";
import { breedContentNo } from "./breed-content.no";
import { breedContentPl } from "./breed-content.pl";
import { breedContentDk } from "./breed-content.dk";
import { breedContentSe } from "./breed-content.se";
import { breedContentFi } from "./breed-content.fi";
import { breedContentDe } from "./breed-content.de";
import { breedContentFr } from "./breed-content.fr";
import { breedContentNl } from "./breed-content.nl";
import type { BreedId } from "./breeds";

export type { BreedContent };

/** Breed prose in the reader's language. Safe inside and outside React. */
export function breedContent(): Record<BreedId, BreedContent> {
  const localized = pick({
    en: breedContentEn,
    no: breedContentNo,
    pl: breedContentPl,
    dk: breedContentDk,
    se: breedContentSe,
    fi: breedContentFi,
    de: breedContentDe,
    fr: breedContentFr,
    nl: breedContentNl,
  });
  return { ...breedContentEn, ...localized };
}
