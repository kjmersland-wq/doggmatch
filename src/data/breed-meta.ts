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

const groupDk: Record<string, string> = {
  Companion: "Selskabshund",
  Gundog: "Fuglehund",
  Herding: "Hyrdehund",
  Hound: "Jagthund",
  Sighthound: "Mynde",
  Spitz: "Spidshund",
  Terrier: "Terrier",
  Toy: "Dværghund",
  Utility: "Brugshund",
  Working: "Arbejdshund",
};

const groupSe: Record<string, string> = {
  Companion: "Sällskapshund",
  Gundog: "Fågelhund",
  Herding: "Vallhund",
  Hound: "Jakthund",
  Sighthound: "Vinthund",
  Spitz: "Spets",
  Terrier: "Terrier",
  Toy: "Dvärghund",
  Utility: "Brukshund",
  Working: "Tjänstehund",
};

const groupFi: Record<string, string> = {
  Companion: "Seurakoira",
  Gundog: "Lintukoira",
  Herding: "Paimenkoira",
  Hound: "Ajokoira",
  Sighthound: "Vinttikoira",
  Spitz: "Pystykorva",
  Terrier: "Terrieri",
  Toy: "Kääpiökoira",
  Utility: "Käyttökoira",
  Working: "Palveluskoira",
};

const groupDe: Record<string, string> = {
  Companion: "Begleithund",
  Gundog: "Vorstehhund",
  Herding: "Hütehund",
  Hound: "Laufhund",
  Sighthound: "Windhund",
  Spitz: "Spitz",
  Terrier: "Terrier",
  Toy: "Zwerghund",
  Utility: "Gebrauchshund",
  Working: "Arbeitshund",
};

const groupFr: Record<string, string> = {
  Companion: "Chien de compagnie",
  Gundog: "Chien d'arrêt",
  Herding: "Chien de berger",
  Hound: "Chien courant",
  Sighthound: "Lévrier",
  Spitz: "Spitz",
  Terrier: "Terrier",
  Toy: "Chien miniature",
  Utility: "Chien utilitaire",
  Working: "Chien de travail",
};

const groupNl: Record<string, string> = {
  Companion: "Gezelschapshond",
  Gundog: "Jachthond (staand/apporterend)",
  Herding: "Herdershond",
  Hound: "Hazewind- of speurhond",
  Sighthound: "Windhond",
  Spitz: "Spits",
  Terrier: "Terriër",
  Toy: "Dwerghond",
  Utility: "Gebruikshond",
  Working: "Werkhond",
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

const originDk: Record<string, string> = {
  "Canada / United Kingdom": "Canada / Storbritannien",
  China: "Kina",
  "France / England": "Frankrig / England",
  "Germany / France": "Tyskland / Frankrig",
  Germany: "Tyskland",
  Hungary: "Ungarn",
  Japan: "Japan",
  Mediterranean: "Middelhavet",
  Mexico: "Mexico",
  Scotland: "Skotland",
  "Scottish Borders": "Skotland (grænseegnene)",
  Siberia: "Sibirien",
  Switzerland: "Schweiz",
  "Tibet / China": "Tibet / Kina",
  "United Kingdom": "Storbritannien",
  "United States": "USA",
};

const originSe: Record<string, string> = {
  "Canada / United Kingdom": "Kanada / Storbritannien",
  China: "Kina",
  "France / England": "Frankrike / England",
  "Germany / France": "Tyskland / Frankrike",
  Germany: "Tyskland",
  Hungary: "Ungern",
  Japan: "Japan",
  Mediterranean: "Medelhavet",
  Mexico: "Mexiko",
  Scotland: "Skottland",
  "Scottish Borders": "Skottland (gränstrakterna)",
  Siberia: "Sibirien",
  Switzerland: "Schweiz",
  "Tibet / China": "Tibet / Kina",
  "United Kingdom": "Storbritannien",
  "United States": "USA",
};

const originFi: Record<string, string> = {
  "Canada / United Kingdom": "Kanada / Iso-Britannia",
  China: "Kiina",
  "France / England": "Ranska / Englanti",
  "Germany / France": "Saksa / Ranska",
  Germany: "Saksa",
  Hungary: "Unkari",
  Japan: "Japani",
  Mediterranean: "Välimeri",
  Mexico: "Meksiko",
  Scotland: "Skotlanti",
  "Scottish Borders": "Skotlanti (rajaseutu)",
  Siberia: "Siperia",
  Switzerland: "Sveitsi",
  "Tibet / China": "Tiibet / Kiina",
  "United Kingdom": "Iso-Britannia",
  "United States": "Yhdysvallat",
};

const originDe: Record<string, string> = {
  "Canada / United Kingdom": "Kanada / Vereinigtes Königreich",
  China: "China",
  "France / England": "Frankreich / England",
  "Germany / France": "Deutschland / Frankreich",
  Germany: "Deutschland",
  Hungary: "Ungarn",
  Japan: "Japan",
  Mediterranean: "Mittelmeerraum",
  Mexico: "Mexiko",
  Scotland: "Schottland",
  "Scottish Borders": "Schottland (Grenzregion)",
  Siberia: "Sibirien",
  Switzerland: "Schweiz",
  "Tibet / China": "Tibet / China",
  "United Kingdom": "Vereinigtes Königreich",
  "United States": "USA",
};

const originFr: Record<string, string> = {
  "Canada / United Kingdom": "Canada / Royaume-Uni",
  China: "Chine",
  "France / England": "France / Angleterre",
  "Germany / France": "Allemagne / France",
  Germany: "Allemagne",
  Hungary: "Hongrie",
  Japan: "Japon",
  Mediterranean: "Méditerranée",
  Mexico: "Mexique",
  Scotland: "Écosse",
  "Scottish Borders": "Écosse (région frontalière)",
  Siberia: "Sibérie",
  Switzerland: "Suisse",
  "Tibet / China": "Tibet / Chine",
  "United Kingdom": "Royaume-Uni",
  "United States": "États-Unis",
};

const originNl: Record<string, string> = {
  "Canada / United Kingdom": "Canada / Verenigd Koninkrijk",
  China: "China",
  "France / England": "Frankrijk / Engeland",
  "Germany / France": "Duitsland / Frankrijk",
  Germany: "Duitsland",
  Hungary: "Hongarije",
  Japan: "Japan",
  Mediterranean: "Middellandse Zeegebied",
  Mexico: "Mexico",
  Scotland: "Schotland",
  "Scottish Borders": "Schotland (grensstreek)",
  Siberia: "Siberië",
  Switzerland: "Zwitserland",
  "Tibet / China": "Tibet / China",
  "United Kingdom": "Verenigd Koninkrijk",
  "United States": "Verenigde Staten",
};

export function breedGroupLabel(group: string): string {
  return pick({
    en: group,
    no: groupNo[group] ?? group,
    pl: groupPl[group] ?? group,
    dk: groupDk[group] ?? group,
    se: groupSe[group] ?? group,
    fi: groupFi[group] ?? group,
    de: groupDe[group] ?? group,
    fr: groupFr[group] ?? group,
    nl: groupNl[group] ?? group,
  });
}

export function breedOriginLabel(origin: string): string {
  return pick({
    en: origin,
    no: originNo[origin] ?? origin,
    pl: originPl[origin] ?? origin,
    dk: originDk[origin] ?? origin,
    se: originSe[origin] ?? origin,
    fi: originFi[origin] ?? origin,
    de: originDe[origin] ?? origin,
    fr: originFr[origin] ?? origin,
    nl: originNl[origin] ?? origin,
  });
}
