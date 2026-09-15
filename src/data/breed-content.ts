import { pick, type Locale } from "@/i18n";
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

/**
 * Breed prose in the reader's language. Safe inside and outside React.
 * Pass `locale` explicitly when there's no active render to read it from
 * (e.g. building a Stripe product name inside a server function).
 */
export function breedContent(locale?: Locale): Record<BreedId, BreedContent> {
  return pick(
    {
      en: breedContentEn,
      no: breedContentNo,
      pl: breedContentPl,
      dk: breedContentDk,
      se: breedContentSe,
      fi: breedContentFi,
      de: breedContentDe,
      fr: breedContentFr,
      nl: breedContentNl,
    },
    locale,
  );
}
