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
import { breedContentNewEn } from "./breed-content-new.en";
import { breedContentNewNo } from "./breed-content-new.no";
import { breedContentNewPl } from "./breed-content-new.pl";
import { breedContentNewDk } from "./breed-content-new.dk";
import { breedContentNewSe } from "./breed-content-new.se";
import { breedContentNewFi } from "./breed-content-new.fi";
import { breedContentNewDe } from "./breed-content-new.de";
import { breedContentNewFr } from "./breed-content-new.fr";
import { breedContentNewNl } from "./breed-content-new.nl";
import type { BreedId } from "./breeds";

export type { BreedContent };

/** Breed prose in the reader's language. Safe inside and outside React. */
export function breedContent(): Record<BreedId, BreedContent> {
  const localized = pick({
    en: { ...breedContentEn, ...breedContentNewEn },
    no: { ...breedContentNo, ...breedContentNewNo },
    pl: { ...breedContentPl, ...breedContentNewPl },
    dk: { ...breedContentDk, ...breedContentNewDk },
    se: { ...breedContentSe, ...breedContentNewSe },
    fi: { ...breedContentFi, ...breedContentNewFi },
    de: { ...breedContentDe, ...breedContentNewDe },
    fr: { ...breedContentFr, ...breedContentNewFr },
    nl: { ...breedContentNl, ...breedContentNewNl },
  });
  return { ...breedContentEn, ...breedContentNewEn, ...localized };
}
