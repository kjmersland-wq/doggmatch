import type { Country } from "./countries";

const euBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrochip",
    detail:
      "Hunden skal identificeres med en mikrochip, der opfylder ISO-standarder, indsat før rabiesvaccinationen. En chip indsat efterfølgende betyder, at vaccinationen skal gentages.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Gyldig rabiesvaccination",
    detail:
      "Givet efter mikrochippen af en autoriseret dyrlæge og stadig gyldig på rejsedagen. En første vaccination har en venteperiode før rejse er tilladt; boostere givet før den forrige udløber tæller normalt som kontinuerlige.",
  },
  {
    id: "passport",
    level: "required" as const,
    title: "EU-kæledyrspas",
    detail:
      "Udsteder af en autoriseret dyrlæge i et EU- eller EØS-land. Et nationalt vaccinationskort er ikke det samme dokument og accepteres ikke i stedet.",
  },
  {
    id: "owner",
    level: "required" as const,
    title: "Rejser med ejeren",
    detail:
      "Ikke-kommerciel flytning dækker op til fem dyr, der rejser med deres ejer eller en autoriseret person. Mere end det, eller rejse med henblik på salg, falder i stedet under kommercielle regler.",
  },
];

const euNonEuBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrochip",
    detail: "En ISO-standard mikrochip, indsat før rabiesvaccinationen.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Gyldig rabiesvaccination",
    detail: "Givet efter mikrochippen og stadig gyldig på rejsedagen, med en venteperiode efter en første vaccination.",
  },
  {
    id: "certificate",
    level: "required" as const,
    title: "Sundhedscertifikat for dyr",
    detail:
      "Rejse fra et ikke-EU-land kræver normalt et officielt sundhedscertifikat for dyr udstedt af en officiel dyrlæge, snarere end et EU-kæledyrspas. Kravene varierer afhængigt af landet, du forlader.",
  },
  {
    id: "titration",
    level: "required" as const,
    title: "Rabies-antistof-test — kun for visse lande",
    detail:
      "Hunde, der ankommer fra visse ikke-oplistede lande, har brug for en rabies-antistof-titrationstest, taget af et autoriseret laboratorium, med en venteperiode mellem prøven og rejsen. Om det gælder, afhænger af det præcise land, du forlader — tjek den officielle kilde, før du booker noget.",
  },
  {
    id: "entry-point",
    level: "required" as const,
    title: "Udpeget indrejsepunkt",
    detail:
      "Ankomster udefra EU skal normalt indrejse gennem et udpeget indrejsepunkt, hvor dokumenter kan kontrolleres.",
  },
];

const tapeworm = {
  id: "tapeworm",
  level: "required" as const,
  title: "Bændelormbehandling",
  detail:
    "Behandling mod Echinococcus multilocularis, givet af en dyrlæge og registreret i pas eller certifikat, inden for et bestemt tidsvindue før ankomst. Dette gælder for hunde, der indrejser i et lille antal lande, som er fri for parasitten.",
};

const source = (
  name: string,
  url: string,
  country: string,
  lastChecked: string,
  category = "Kæledyrsrejser",
) => ({ name, url, country, lastChecked, category });

export const countries: Country[] = [
  {
    code: "NO",
    name: "Norge",
    eu: true,
    sources: [
      source("Mattilsynet — Fødevarestyrelsen", "https://www.mattilsynet.no/en/animals/travelling-with-pets", "Norge", "2026-08-15"),
    ],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine:
          "Der er ingen rutinemæssig karantæne for hunde, der opfylder alle indrejsekrav. Hvis dokumenter eller behandlinger mangler ved ankomst, kan myndighederne sætte hunden under officiel kontrol — hvilket ikke er det samme som en standard karantæneperiode.",
        minimumAge:
          "En hund kan ikke rejse, før rabiesvaccinationen er gyldig, hvilket i praksis udelukker meget unge hvalpe. Tjek den aktuelle minimumsalder og venteperiode hos Mattilsynet, før du planlægger turen.",
        notes: [
          "Norge er et af de lande, der har krav om bændelormbehandling. Tidsvinduet er strengt, så book dyrlægetid, før du booker færgen.",
        ],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine:
          "Ingen rutinemæssig karantæne for overholdende rejser. Ikke-overholdende ankomster kan nægtes indrejse eller sættes under officiel kontrol.",
        minimumAge: "Afhænger af rabiesvaccinationsreglerne for det land, du forlader.",
      },
    },
  },
  {
    code: "SE",
    name: "Sverige",
    eu: true,
    sources: [source("Jordbruksverket — Svenska Jordbruksverket", "https://jordbruksverket.se/languages/english/travelling-with-pets", "Sverige", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinemæssig karantæne for hunde, der opfylder indrejsekravene.",
        minimumAge: "Rejse er ikke mulig, før rabiesvaccinationen er gyldig. Tjek den aktuelle alder og venteperiode.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinemæssig karantæne for overholdende rejser; ikke-overholdende ankomster håndteres af myndighederne ved grænsen.",
        minimumAge: "Bestemt af rabiesreglerne for det land, du forlader.",
      },
    },
  },
  {
    code: "DK",
    name: "Danmark",
    eu: true,
    sources: [source("Fødevarestyrelsen — Fødevarestyrelsen", "https://www.foedevarestyrelsen.dk/english", "Danmark", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinemæssig karantæne for hunde, der opfylder indrejsekravene.",
        minimumAge: "Ikke muligt, før rabiesvaccinationen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinemæssig karantæne for overholdende rejser.",
        minimumAge: "Bestemt af rabiesreglerne for det land, du forlader.",
      },
    },
  },
  {
    code: "DE",
    name: "Tyskland",
    eu: true,
    sources: [source("Bundesministerium für Ernährung und Landwirtschaft", "https://www.bmel.de/EN/topics/animals/animal-health/travelling-with-pets.html", "Tyskland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinemæssig karantæne for hunde, der opfylder indrejsekravene.",
        minimumAge: "Ikke muligt, før rabiesvaccinationen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinemæssig karantæne for overholdende rejser.",
        minimumAge: "Bestemt af rabiesreglerne for det land, du forlader.",
      },
    },
  },
  {
    code: "PL",
    name: "Polen",
    eu: true,
    sources: [source("Główny Inspektorat Weterynarii — Generaldirektoratet for Veterinærinspektion", "https://www.wetgiw.gov.pl/handel-eksport-import/przemieszczanie-w-celach-niehandlowych", "Polen", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinemæssig karantæne for hunde, der opfylder indrejsekravene.",
        minimumAge: "Ikke muligt, før rabiesvaccinationen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinemæssig karantæne for overholdende rejser.",
        minimumAge: "Bestemt af rabiesreglerne for det land, du forlader.",
      },
    },
  },
  {
    code: "FR",
    name: "Frankrig",
    eu: true,
    sources: [source("Ministère de l'Agriculture", "https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie", "Frankrig", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinemæssig karantæne for hunde, der opfylder indrejsekravene.",
        minimumAge: "Ikke muligt, før rabiesvaccinationen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinemæssig karantæne for overholdende rejser.",
        minimumAge: "Bestemt af rabiesreglerne for det land, du forlader.",
      },
    },
  },
  {
    code: "ES",
    name: "Spanien",
    eu: true,
    sources: [source("Ministerio de Agricultura, Pesca y Alimentación", "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/animales-compania/", "Spanien", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinemæssig karantæne for hunde, der opfylder indrejsekravene.",
        minimumAge: "Ikke muligt, før rabiesvaccinationen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinemæssig karantæne for overholdende rejser.",
        minimumAge: "Bestemt af rabiesreglerne for det land, du forlader.",
      },
    },
  },
  {
    code: "NL",
    name: "Holland",
    eu: true,
    sources: [source("NVWA — Netherlands Food and Consumer Product Safety Authority", "https://english.nvwa.nl/topics/travelling-with-pets", "Holland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinemæssig karantæne for hunde, der opfylder indrejsekravene.",
        minimumAge: "Ikke muligt, før rabiesvaccinationen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinemæssig karantæne for overholdende rejser.",
        minimumAge: "Bestemt af rabiesreglerne for det land, du forlader.",
      },
    },
  },
  {
    code: "IE",
    name: "Irland",
    eu: true,
    sources: [source("Department of Agriculture, Food and the Marine", "https://www.gov.ie/en/organisation/department-of-agriculture-food-and-the-marine/", "Irland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine: "Ingen rutinemæssig karantæne for hunde, der opfylder indrejsekravene.",
        minimumAge: "Ikke muligt, før rabiesvaccinationen er gyldig.",
        notes: ["Irland er et af de lande, der kræver bændelormbehandling før ankomst, inden for et bestemt tidsvindue."],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine: "Ingen rutinemæssig karantæne for overholdende rejser.",
        minimumAge: "Bestemt af rabiesreglerne for det land, du forlader.",
      },
    },
  },
  {
    code: "GB",
    name: "Storbritannien",
    eu: false,
    sources: [source("GOV.UK — Bringing your pet dog to Great Britain", "https://www.gov.uk/bring-pet-to-great-britain", "Storbritannien", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          {
            id: "microchip",
            level: "required" as const,
            title: "Mikrochip",
            detail: "En ISO-standard mikrochip, indsat før rabiesvaccinationen.",
          },
          {
            id: "rabies",
            level: "required" as const,
            title: "Gyldig rabiesvaccination",
            detail: "Givet efter mikrochippen og stadig gyldig på rejsedagen, med en venteperiode efter en første vaccination.",
          },
          {
            id: "document",
            level: "required" as const,
            title: "Et accepteret rejsedokument",
            detail:
              "Et EU-kæledyrspas udstedt i et EU-land eller et sundhedscertifikat for kæledyr til Storbritannien. Hvilken der gælder, afhænger af, hvor dokumentet blev udstedt — tjek den officielle vejledning for din situation.",
          },
          tapeworm,
          {
            id: "route",
            level: "required" as const,
            title: "En godkendt rute og transportør",
            detail: "Hunde skal rejse med et godkendt transportfirma på en godkendt rute, medmindre du rejser fra Irland.",
          },
        ],
        quarantine:
          "Der er ingen rutinemæssig karantæne for hunde, der opfylder alle krav. Hunde, der ankommer uden gyldige dokumenter, kan licenseres til karantæne på ejerens regning — en reel mulighed, ikke en formalitet.",
        minimumAge: "Rejse er ikke mulig, før rabiesvaccinationen er gyldig. Tjek den aktuelle alder og venteperiode på GOV.UK.",
      },
    },
  },
  {
    code: "US",
    name: "USA",
    eu: false,
    sources: [source("CDC — Bringing a dog into the United States", "https://www.cdc.gov/importation/dogs/", "USA", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          { id: "microchip", level: "required" as const, title: "Mikrochip", detail: "En ISO-standard mikrochip, registreret på de formularer, du indsender." },
          { id: "age", level: "required" as const, title: "Minimumsalder", detail: "CDC fastsætter en minimumsalder for hunde, der indrejser i USA. Tjek det aktuelle tal, før du booker." },
          { id: "form", level: "required" as const, title: "CDC indrejseformular", detail: "En online CDC Dog Import Form er påkrævet, indsendt før rejse, med kvitteringen medbragt." },
          { id: "rabies", level: "required" as const, title: "Rabiesdokumentation", detail: "Hvad der kræves, afhænger af, hvor hunden har været i de foregående seks måneder. CDC-siden gennemgår hvert tilfælde." },
        ],
        quarantine:
          "Ingen rutinemæssig karantæne for hunde, der opfylder kravene. Hunde, der ankommer uden korrekt papirarbejde, kan nægtes indrejse og returneres på ejerens regning.",
        minimumAge: "En minimumsalder gælder. Tjek CDC-siden for den aktuelle regel.",
      },
    },
  },
];

export const transportModes = [
  { id: "car", label: "Bil", note: "Du styrer tempoet og pauserne. Tjek færge- eller tunnelregler, hvis ruten krydser vand." },
  { id: "train", label: "Tog", note: "Operatørregler gælder ud over eventuelle landekrav, og de varierer efter linje." },
  { id: "plane", label: "Fly", note: "Flyselskabernes regler er adskilt fra indrejsekrav. Book hunden tidligt." },
  { id: "ferry", label: "Færge", note: "Kennel-, kahyts- og dæksregler varierer efter selskab og overfart." },
  { id: "bus", label: "Bus", note: "Mange langdistanceoperatører tager slet ikke hunde med. Bekræft, før du booker." },
];

export const travelTimeline = [
  { when: "8 uger før", what: "Tjek reglerne for din præcise rute, begge veje." },
  { when: "6 uger før", what: "Tjek mikrochip- og rabiesvaccinationsstatus hos din dyrlæge." },
  { when: "4 uger før", what: "Få startet eventuelle dokumenter — nogle tager længere tid, end du tror." },
  { when: "2 uger før", what: "Bekræft transportørens egne regler og book hunden på." },
  { when: "1 uge før", what: "Pak rejsetasken og find en dyrlæge på din destination." },
  { when: "Dagen før", what: "Endelig dokumentkontrol og en god, lang gåtur." },
  { when: "Rejsedag", what: "Dokumenter, hund, vand, snor og noget velkendt." },
];
