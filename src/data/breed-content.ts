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
import { breedContentNewEn } from "./breed-content-new.en";
import { breedContentNewNo } from "./breed-content-new.no";
import { breedContentNewPl } from "./breed-content-new.pl";
import { breedContentNewDk } from "./breed-content-new.dk";
import { breedContentNewSe } from "./breed-content-new.se";
import { breedContentNewFi } from "./breed-content-new.fi";
import { breedContentNewDe } from "./breed-content-new.de";
import { breedContentNewFr } from "./breed-content-new.fr";
import { breedContentNewNl } from "./breed-content-new.nl";
import { breedDeepDiveEn, type BreedDeepDive } from "./breed-deepdive.en";
import { breedDeepDiveNo } from "./breed-deepdive.no";
import { breedDeepDivePl } from "./breed-deepdive.pl";
import { breedDeepDiveDk } from "./breed-deepdive.dk";
import { breedDeepDiveSe } from "./breed-deepdive.se";
import { breedDeepDiveFi } from "./breed-deepdive.fi";
import { breedDeepDiveDe } from "./breed-deepdive.de";
import { breedDeepDiveFr } from "./breed-deepdive.fr";
import { breedDeepDiveNl } from "./breed-deepdive.nl";
import { breedDeepDiveMoreEn } from "./breed-deepdive-more.en";
import { breedDeepDiveMoreNo } from "./breed-deepdive-more.no";
import { breedDeepDiveMorePl } from "./breed-deepdive-more.pl";
import { breedDeepDiveMoreDk } from "./breed-deepdive-more.dk";
import { breedDeepDiveMoreSe } from "./breed-deepdive-more.se";
import { breedDeepDiveMoreFi } from "./breed-deepdive-more.fi";
import { breedDeepDiveMoreDe } from "./breed-deepdive-more.de";
import { breedDeepDiveMoreFr } from "./breed-deepdive-more.fr";
import { breedDeepDiveMoreNl } from "./breed-deepdive-more.nl";
import type { BreedId } from "./breeds";

export type { BreedContent };

type ContentMap = Partial<Record<BreedId, BreedContent>>;

/** Lays the deep-dive fields over the original profiles, breed by breed. */
function withDeepDive(
  content: ContentMap,
  deepDive: Partial<Record<BreedId, BreedDeepDive>>,
): ContentMap {
  const merged: ContentMap = { ...content };
  for (const [id, fields] of Object.entries(deepDive) as [BreedId, BreedDeepDive][]) {
    const base = merged[id];
    if (base) merged[id] = { ...base, ...fields };
  }
  return merged;
}

const english = withDeepDive({ ...breedContentEn, ...breedContentNewEn }, { ...breedDeepDiveEn, ...breedDeepDiveMoreEn });

/** Built once: each language's full prose, with English underneath as the fallback. */
const byLocale = {
  en: english,
  no: { ...english, ...withDeepDive({ ...breedContentNo, ...breedContentNewNo }, { ...breedDeepDiveNo, ...breedDeepDiveMoreNo }) },
  pl: { ...english, ...withDeepDive({ ...breedContentPl, ...breedContentNewPl }, { ...breedDeepDivePl, ...breedDeepDiveMorePl }) },
  dk: { ...english, ...withDeepDive({ ...breedContentDk, ...breedContentNewDk }, { ...breedDeepDiveDk, ...breedDeepDiveMoreDk }) },
  se: { ...english, ...withDeepDive({ ...breedContentSe, ...breedContentNewSe }, { ...breedDeepDiveSe, ...breedDeepDiveMoreSe }) },
  fi: { ...english, ...withDeepDive({ ...breedContentFi, ...breedContentNewFi }, { ...breedDeepDiveFi, ...breedDeepDiveMoreFi }) },
  de: { ...english, ...withDeepDive({ ...breedContentDe, ...breedContentNewDe }, { ...breedDeepDiveDe, ...breedDeepDiveMoreDe }) },
  fr: { ...english, ...withDeepDive({ ...breedContentFr, ...breedContentNewFr }, { ...breedDeepDiveFr, ...breedDeepDiveMoreFr }) },
  nl: { ...english, ...withDeepDive({ ...breedContentNl, ...breedContentNewNl }, { ...breedDeepDiveNl, ...breedDeepDiveMoreNl }) },
} as Record<Locale, Record<BreedId, BreedContent>>;

/**
 * Breed prose in the reader's language. Safe inside and outside React.
 * Pass `locale` explicitly when there's no active render to read it from
 * (e.g. building a Stripe product name inside a server function).
 */
export function breedContent(locale?: Locale): Record<BreedId, BreedContent> {
  return pick(byLocale, locale);
}
