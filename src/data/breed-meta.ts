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

const groupPl: Record<string, string> = {
  Companion: "Rasy towarzyszące",
  Gundog: "Wyżły / psy myśliwskie",
  Herding: "Pasterskie",
  Hound: "Gończe",
  Sighthound: "Charty",
  Spitz: "Szpice",
  Terrier: "Teriery",
  Toy: "Rasy miniaturowe",
  Utility: "Użytkowe",
  Working: "Pracujące",
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

const originPl: Record<string, string> = {
  "Canada / United Kingdom": "Kanada / Wielka Brytania",
  China: "Chiny",
  "France / England": "Francja / Anglia",
  "Germany / France": "Niemcy / Francja",
  Germany: "Niemcy",
  Hungary: "Węgry",
  Japan: "Japonia",
  Mediterranean: "Morze Śródziemne",
  Mexico: "Meksyk",
  Scotland: "Szkocja",
  "Scottish Borders": "Szkocja (pogranicze)",
  Siberia: "Syberia",
  Switzerland: "Szwajcaria",
  "Tibet / China": "Tybet / Chiny",
  "United Kingdom": "Wielka Brytania",
  "United States": "USA",
};

export function breedGroupLabel(group: string): string {
  return pick({ en: group, no: groupNo[group] ?? group, pl: groupPl[group] ?? group });
}

export function breedOriginLabel(origin: string): string {
  return pick({ en: origin, no: originNo[origin] ?? origin, pl: originPl[origin] ?? origin });
}
