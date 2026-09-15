import { pick } from "@/i18n";
import type { Breed, BreedTraits } from "@/data/breeds";

/**
 * Deterministic content for the paid Complete Breed & Puppy Buyer Dossier.
 * The breeder and contract checklists are general buying advice (not
 * breed-specific); the temperament breakdown and cost estimate are read
 * straight from the same `BreedTraits` data the free result already uses.
 */

/** Temperament traits shown in the dossier's detailed breakdown. */
export const TEMPERAMENT_KEYS = [
  "trainability",
  "sociability",
  "affection",
  "independence",
  "goodWithChildren",
  "goodWithDogs",
  "aloneTolerance",
  "firstTimeSuitability",
] as const satisfies readonly (keyof BreedTraits)[];

const temperamentLabels = {
  trainability: {
    en: "Trainability",
    no: "Lærevillighet",
    pl: "Podatność na szkolenie",
    dk: "Lærevillighed",
    se: "Lärvillighet",
    fi: "Koulutettavuus",
    de: "Erziehbarkeit",
    fr: "Facilité d'éducation",
    nl: "Leerbaarheid",
  },
  sociability: {
    en: "Sociability",
    no: "Sosial med folk",
    pl: "Towarzyskość z ludźmi",
    dk: "Social med mennesker",
    se: "Social med människor",
    fi: "Sosiaalisuus ihmisten kanssa",
    de: "Geselligkeit",
    fr: "Sociabilité",
    nl: "Sociaal gedrag",
  },
  affection: {
    en: "Affection",
    no: "Kosete",
    pl: "Czułość",
    dk: "Kærlighed",
    se: "Kelig",
    fi: "Hellyys",
    de: "Anhänglichkeit",
    fr: "Affection",
    nl: "Aanhankelijkheid",
  },
  independence: {
    en: "Independence",
    no: "Selvstendighet",
    pl: "Niezależność",
    dk: "Selvstændighed",
    se: "Självständighet",
    fi: "Itsenäisyys",
    de: "Eigenständigkeit",
    fr: "Indépendance",
    nl: "Zelfstandigheid",
  },
  goodWithChildren: {
    en: "Good with children",
    no: "Passer med barn",
    pl: "Dobrze z dziećmi",
    dk: "Fungerer med børn",
    se: "Fungerar med barn",
    fi: "Sopii lasten kanssa",
    de: "Kinderfreundlichkeit",
    fr: "Bonne entente avec les enfants",
    nl: "Geschikt voor kinderen",
  },
  goodWithDogs: {
    en: "Good with other dogs",
    no: "Passer med andre hunder",
    pl: "Dobrze z innymi psami",
    dk: "Fungerer med andre hunde",
    se: "Fungerar med andra hundar",
    fi: "Sopii muiden koirien kanssa",
    de: "Verträglichkeit mit anderen Hunden",
    fr: "Bonne entente avec les autres chiens",
    nl: "Geschikt voor andere honden",
  },
  aloneTolerance: {
    en: "Tolerance of being alone",
    no: "Tåler å være alene",
    pl: "Tolerancja samotności",
    dk: "Tåler at være alene",
    se: "Tål att vara ensam",
    fi: "Yksinolon sietokyky",
    de: "Verträgt Alleinsein",
    fr: "Tolérance à la solitude",
    nl: "Tolerantie voor alleen zijn",
  },
  firstTimeSuitability: {
    en: "First-time owner suitability",
    no: "Passer for førstegangseiere",
    pl: "Odpowiedni dla początkujących",
    dk: "Egnet til førstegangsejere",
    se: "Lämplig för förstagångsägare",
    fi: "Sopivuus ensikertalaiselle",
    de: "Eignung für Ersthundehalter",
    fr: "Adapté aux primo-adoptants",
    nl: "Geschikt voor beginners",
  },
} as const satisfies Record<(typeof TEMPERAMENT_KEYS)[number], Record<string, string>>;

export function temperamentLabel(key: (typeof TEMPERAMENT_KEYS)[number]): string {
  return pick(temperamentLabels[key]);
}

/** Matches the free "setup budget" shown in Your First 30 Days, so the two never disagree. */
const SETUP_COST_RANGE: [number, number] = [150 + 80 + 15, 350 + 180 + 40];

/** Whole first year of ownership — recurring annual cost plus one-off puppy setup. */
export function firstYearEstimate(breed: Breed): [number, number] {
  return [breed.annualCost[0] + SETUP_COST_RANGE[0], breed.annualCost[1] + SETUP_COST_RANGE[1]];
}

const breederChecklist = {
  en: [
    "Ask to see health screening results or certificates for both parents",
    "Meet the mother in person, and see how she behaves around people",
    "See where the puppies are actually raised — clean, warm, used to normal household noise",
    "Ask for the vaccination and worming records so far, in writing",
    "Ask what happens if things don't work out — a responsible breeder always takes the dog back",
  ],
  no: [
    "Be om å få se helseundersøkelser eller attester for begge foreldrene",
    "Møt tispa personlig, og se hvordan hun oppfører seg rundt folk",
    "Se hvor valpene faktisk vokser opp — rent, varmt, vant til vanlige husholdningslyder",
    "Be om vaksinasjons- og ormekur-journal så langt, skriftlig",
    "Spør hva som skjer hvis det ikke går bra — en ansvarlig oppdretter tar alltid hunden tilbake",
  ],
  pl: [
    "Poproś o wyniki badań zdrowotnych lub certyfikaty dla obojga rodziców",
    "Poznaj matkę osobiście i zobacz, jak zachowuje się przy ludziach",
    "Zobacz, gdzie faktycznie wychowywane są szczenięta — czysto, ciepło, oswojone ze zwykłymi domowymi dźwiękami",
    "Poproś o dotychczasową dokumentację szczepień i odrobaczania, na piśmie",
    "Zapytaj, co się dzieje, jeśli coś pójdzie nie tak — odpowiedzialny hodowca zawsze przyjmie psa z powrotem",
  ],
  dk: [
    "Bed om at se sundhedsundersøgelser eller attester for begge forældre",
    "Mød tæven personligt, og se hvordan hun opfører sig omkring mennesker",
    "Se hvor hvalpene rent faktisk vokser op — rent, varmt, vant til almindelig husstandsstøj",
    "Bed om vaccinations- og ormekur-journal indtil videre, skriftligt",
    "Spørg hvad der sker, hvis det ikke går godt — en ansvarlig opdrætter tager altid hunden tilbage",
  ],
  se: [
    "Be om att få se hälsoundersökningar eller intyg för båda föräldrarna",
    "Träffa tiken personligen och se hur hon beter sig runt människor",
    "Se var valparna faktiskt växer upp — rent, varmt, vant vid vanligt hushållsljud",
    "Be om vaccinations- och avmaskningsjournal hittills, skriftligt",
    "Fråga vad som händer om det inte fungerar — en ansvarsfull uppfödare tar alltid tillbaka hunden",
  ],
  fi: [
    "Pyydä nähtäväksi molempien vanhempien terveystutkimustulokset tai todistukset",
    "Tapaa emo henkilökohtaisesti ja katso, miten hän käyttäytyy ihmisten seurassa",
    "Katso, missä pennut todella kasvatetaan — puhtaassa, lämpimässä paikassa, tavallisiin kotiäänin tottuneina",
    "Pyydä tähänastiset rokotus- ja madotustiedot kirjallisena",
    "Kysy, mitä tapahtuu, jos asiat eivät suju — vastuullinen kasvattaja ottaa koiran aina takaisin",
  ],
  de: [
    "Bitten Sie um Gesundheitsuntersuchungen oder Zertifikate für beide Elterntiere",
    "Lernen Sie die Mutter persönlich kennen und beobachten Sie, wie sie sich bei Menschen verhält",
    "Sehen Sie sich an, wo die Welpen tatsächlich aufwachsen — sauber, warm, an normale Haushaltsgeräusche gewöhnt",
    "Bitten Sie um die bisherigen Impf- und Entwurmungsnachweise, schriftlich",
    "Fragen Sie, was passiert, wenn es nicht klappt — ein verantwortungsvoller Züchter nimmt den Hund immer zurück",
  ],
  fr: [
    "Demandez à voir les résultats des dépistages de santé ou certificats des deux parents",
    "Rencontrez la mère en personne et observez son comportement avec les gens",
    "Voyez où les chiots grandissent réellement — propre, chaud, habitué aux bruits domestiques normaux",
    "Demandez le carnet de vaccination et de vermifugation à ce jour, par écrit",
    "Demandez ce qui se passe si ça ne fonctionne pas — un éleveur responsable reprend toujours le chien",
  ],
  nl: [
    "Vraag om gezondheidsonderzoeken of certificaten van beide ouderdieren te zien",
    "Ontmoet de moederhond persoonlijk en kijk hoe ze zich gedraagt bij mensen",
    "Bekijk waar de pups daadwerkelijk opgroeien — schoon, warm, gewend aan normale huishoudelijke geluiden",
    "Vraag om de tot nu toe bijgehouden vaccinatie- en ontwormingsgegevens, op papier",
    "Vraag wat er gebeurt als het niet uitwerkt — een verantwoordelijke fokker neemt de hond altijd terug",
  ],
} as const;

const contractChecklist = {
  en: [
    "Get the price, deposit and payment terms in writing before you commit",
    "Confirm what health guarantees are included, and for how long",
    "Check the microchip and registration details are (or will be) in your name",
    "Confirm the return and refund policy if the puppy becomes seriously ill early on",
    "Keep a copy of the pedigree or registration papers and the breeder's contact details",
  ],
  no: [
    "Få pris, depositum og betalingsvilkår skriftlig før du forplikter deg",
    "Bekreft hvilke helsegarantier som er inkludert, og hvor lenge",
    "Sjekk at ID-merking og registrering er (eller blir) i ditt navn",
    "Bekreft angre- og refusjonsreglene hvis valpen blir alvorlig syk tidlig",
    "Ta vare på en kopi av stamtavle eller registreringspapirer og oppdretterens kontaktinfo",
  ],
  pl: [
    "Ustal cenę, zadatek i warunki płatności na piśmie, zanim się zdecydujesz",
    "Potwierdź, jakie gwarancje zdrowotne są zawarte i na jak długo",
    "Sprawdź, czy dane czipa i rejestracji są (lub będą) na twoje nazwisko",
    "Potwierdź zasady zwrotu i refundacji, gdyby szczenię poważnie zachorowało na wczesnym etapie",
    "Zachowaj kopię rodowodu lub dokumentów rejestracyjnych oraz dane kontaktowe hodowcy",
  ],
  dk: [
    "Få pris, depositum og betalingsvilkår skriftligt, før du binder dig",
    "Bekræft hvilke sundhedsgarantier der er inkluderet, og hvor længe",
    "Tjek at chipmærkning og registrering er (eller bliver) i dit navn",
    "Bekræft returnerings- og refusionsreglerne, hvis hvalpen bliver alvorligt syg tidligt",
    "Gem en kopi af stamtavlen eller registreringspapirerne og opdrætterens kontaktoplysninger",
  ],
  se: [
    "Få pris, handpenning och betalningsvillkor skriftligt innan du bestämmer dig",
    "Bekräfta vilka hälsogarantier som ingår, och hur länge",
    "Kontrollera att id-märkning och registrering är (eller blir) i ditt namn",
    "Bekräfta retur- och återbetalningsreglerna om valpen blir allvarligt sjuk tidigt",
    "Behåll en kopia av stamtavlan eller registreringspapperen och uppfödarens kontaktuppgifter",
  ],
  fi: [
    "Sovi hinta, käsiraha ja maksuehdot kirjallisesti ennen sitoutumista",
    "Vahvista, mitkä terveystakuut sisältyvät ja kuinka pitkäksi aikaa",
    "Tarkista, että siru- ja rekisteröintitiedot ovat (tai tulevat olemaan) sinun nimissäsi",
    "Vahvista palautus- ja hyvityskäytäntö, jos pentu sairastuu vakavasti pian",
    "Säilytä kopio sukutodistuksesta tai rekisteröintipapereista ja kasvattajan yhteystiedot",
  ],
  de: [
    "Lassen Sie sich Preis, Anzahlung und Zahlungsbedingungen schriftlich geben, bevor Sie sich festlegen",
    "Bestätigen Sie, welche Gesundheitsgarantien enthalten sind und für wie lange",
    "Prüfen Sie, ob Chip- und Registrierungsdaten auf Sie (oder in Kürze auf Sie) laufen",
    "Bestätigen Sie die Rückgabe- und Erstattungsregelung, falls der Welpe früh ernsthaft erkrankt",
    "Bewahren Sie eine Kopie des Stammbaums oder der Registrierungspapiere sowie die Kontaktdaten des Züchters auf",
  ],
  fr: [
    "Obtenez le prix, l'acompte et les conditions de paiement par écrit avant de vous engager",
    "Confirmez quelles garanties de santé sont incluses, et pour combien de temps",
    "Vérifiez que les informations de puce et d'enregistrement sont (ou seront) à votre nom",
    "Confirmez la politique de retour et de remboursement si le chiot tombe gravement malade tôt",
    "Conservez une copie du pedigree ou des papiers d'enregistrement et les coordonnées de l'éleveur",
  ],
  nl: [
    "Laat prijs, aanbetaling en betalingsvoorwaarden schriftelijk vastleggen voordat u zich vastlegt",
    "Bevestig welke gezondheidsgaranties zijn inbegrepen, en voor hoe lang",
    "Controleer of de chip- en registratiegegevens op uw naam staan (of komen te staan)",
    "Bevestig het retour- en terugbetalingsbeleid als de pup vroeg ernstig ziek wordt",
    "Bewaar een kopie van de stamboom of registratiepapieren en de contactgegevens van de fokker",
  ],
} as const;

export function breederQuestions(): readonly string[] {
  return pick(breederChecklist);
}

export function contractGuide(): readonly string[] {
  return pick(contractChecklist);
}
