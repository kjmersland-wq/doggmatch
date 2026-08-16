import { pick } from "@/i18n";

/** Breed group and country names, translated. Ids and data stay English. */
const groupNo: Record<string, string> = {
  Companion: "Selskapshund",
  Gundog: "Fuglehund",
  Herding: "Gjeterhund",
  Hound: "Jakthund",
  Sighthound: "Mynde",
  Spitz: "Spisshund",
  Terrier: "Terrier",
  Toy: "Dverghund",
  Utility: "Brukshund",
  Working: "Tjenestehund",
};

const originNo: Record<string, string> = {
  "Canada / United Kingdom": "Canada / Storbritannia",
  China: "Kina",
  "France / England": "Frankrike / England",
  "Germany / France": "Tyskland / Frankrike",
  Germany: "Tyskland",
  Hungary: "Ungarn",
  Japan: "Japan",
  Mediterranean: "Middelhavet",
  Mexico: "Mexico",
  Scotland: "Skottland",
  "Scottish Borders": "Skottland (grenselandet)",
  Siberia: "Sibir",
  Switzerland: "Sveits",
  "Tibet / China": "Tibet / Kina",
  "United Kingdom": "Storbritannia",
  "United States": "USA",
};

export function breedGroupLabel(group: string): string {
  return pick({ en: group, no: groupNo[group] ?? group });
}

export function breedOriginLabel(origin: string): string {
  return pick({ en: origin, no: originNo[origin] ?? origin });
}
