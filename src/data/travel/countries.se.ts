import type { Country } from "./countries";

const euBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrochip",
    detail:
      "Hunden måste identifieras med en mikrochip som uppfyller ISO-standard, insatt före rabiesvaccinationen. En chip som sätts in efteråt innebär att vaccinationen måste göras om.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Giltig rabiesvaccination",
    detail:
      "Ges efter mikrochipet, av en auktoriserad veterinär, och måste vara giltig på resdagen. En första vaccination har en karenstid innan resa är tillåten; påfyllnadsdoser som ges innan den föregående löper ut räknas normalt som kontinuerliga.",
  },
  {
    id: "passport",
    level: "required" as const,
    title: "EU-pass för sällskapsdjur",
    detail:
      "Utfärdat av en auktoriserad veterinär i ett EU- eller EES-land. Ett nationellt vaccinationskort är inte samma dokument och accepteras inte istället.",
  },
  {
    id: "owner",
    level: "required" as const,
    title: "Resa med ägaren",
    detail:
      "Icke-kommersiell flytt omfattar upp till fem djur som reser med sin ägare eller en auktoriserad person. Fler än så, eller resa i försäljningssyfte, faller istället under kommersiella regler.",
  },
];

const euNonEuBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrochip",
    detail: "Ett mikrochip enligt ISO-standard, insatt före rabiesvaccinationen.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Giltig rabiesvaccination",
    detail: "Ges efter mikrochipet och måste vara giltig på resdagen, med en karenstid efter en första vaccination.",
  },
  {
    id: "certificate",
    level: "required" as const,
    title: "Hälsocertifikat för djur",
    detail:
      "Resa från ett icke-EU-land kräver normalt ett officiellt hälsocertifikat för djur utfärdat av en officiell veterinär, snarare än ett EU-pass för sällskapsdjur. Kraven skiljer sig beroende på landet du lämnar.",
  },
  {
    id: "titration",
    level: "required" as const,
    title: "Rabiesantikroppstest — endast för vissa länder",
    detail:
      "Hundar som anländer från vissa icke-listade länder behöver ett rabiesantikroppstest, utfört av ett auktoriserat laboratorium, med en karenstid mellan provtagning och resa. Om det gäller beror på vilket land du lämnar – kontrollera den officiella källan innan du bokar något.",
  },
  {
    id: "entry-point",
    level: "required" as const,
    title: "Utsett inresepunkt för resenärer",
    detail:
      "Ankomster från länder utanför EU måste vanligtvis anlända via en utsedd inresepunkt, där dokument kan kontrolleras.",
  },
];

const tapeworm = {
  id: "tapeworm",
  level: "required" as const,
  title: "Avmaskning mot bandmask",
  detail:
    "Behandling mot Echinococcus multilocularis, given av veterinär och registrerad i passet eller certifikatet, inom ett visst tidsfönster före ankomst. Detta gäller hundar som anländer till ett fåtal länder som är fria från parasiten.",
};

const source = (
  name: string,
  url: string,
  country: string,
  lastChecked: string,
  category = "Resa med sällskapsdjur",
) => ({ name, url, country, lastChecked, category });

export const countries: Country[] = [
  {
    code: "NO",
    name: "Norge",
    eu: true,
    sources: [
      source("Mattilsynet — norska livsmedelstilsynet", "https://www.mattilsynet.no/en/animals/travelling-with-pets", "Norge", "2026-08-15"),
    ],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine:
          "Det finns ingen rutinmässig karantän för hundar som uppfyller alla inresekrav. Om dokument eller behandlingar saknas vid ankomst kan myndigheterna placera hunden under officiell kontroll – vilket inte är samma sak som en standardkarantän.",
        minimumAge:
          "En hund kan inte resa förrän rabiesvaccinationen är giltig, vilket i praktiken utesluter mycket unga valpar. Kontrollera aktuell minimiålder och karenstid med Mattilsynet innan du planerar resan.",
        notes: [
          "Norge är ett av länderna med krav på avmaskning mot bandmask. Tidsfönstret är strikt, så boka veterinärtiden innan du bokar färjan.",
        ],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine:
          "Ingen rutinmässig karantän för resor som uppfyller kraven. Ankomster som inte uppfyller kraven kan nekas inresa eller placeras under officiell kontroll.",
        minimumAge: "Beror på rabiesvaccinationsreglerna för landet du lämnar.",
      },
    },
  },
  {
    code: "SE",
    name: "Sverige",
    eu: true,
    sources: [source("Jordbruksverket", "https://jordbruksverket.se/languages/english/travelling-with-pets", "Sverige", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinmässig karantän för hundar som uppfyller inresekraven.",
        minimumAge: "Resa är inte möjlig förrän rabiesvaccinationen är giltig. Kontrollera aktuell ålder och karenstid.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinmässig karantän för resor som uppfyller kraven; ankomster som inte uppfyller kraven hanteras av myndigheterna vid gränsen.",
        minimumAge: "Bestäms av rabiesreglerna för landet du lämnar.",
      },
    },
  },
  {
    code: "DK",
    name: "Danmark",
    eu: true,
    sources: [source("Fødevarestyrelsen — danska veterinär- och livsmedelsstyrelsen", "https://www.foedevarestyrelsen.dk/english", "Danmark", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinmässig karantän för hundar som uppfyller inresekraven.",
        minimumAge: "Inte möjligt förrän rabiesvaccinationen är giltig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinmässig karantän för resor som uppfyller kraven.",
        minimumAge: "Bestäms av rabiesreglerna för landet du lämnar.",
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
        quarantine: "Ingen rutinmässig karantän för hundar som uppfyller inresekraven.",
        minimumAge: "Inte möjligt förrän rabiesvaccinationen är giltig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinmässig karantän för resor som uppfyller kraven.",
        minimumAge: "Bestäms av rabiesreglerna för landet du lämnar.",
      },
    },
  },
  {
    code: "PL",
    name: "Polen",
    eu: true,
    sources: [source("Główny Inspektorat Weterynarii — generala veterinärinspektionen", "https://www.wetgiw.gov.pl/handel-eksport-import/przemieszczanie-w-celach-niehandlowych", "Polen", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinmässig karantän för hundar som uppfyller inresekraven.",
        minimumAge: "Inte möjligt förrän rabiesvaccinationen är giltig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinmässig karantän för resor som uppfyller kraven.",
        minimumAge: "Bestäms av rabiesreglerna för landet du lämnar.",
      },
    },
  },
  {
    code: "FR",
    name: "Frankrike",
    eu: true,
    sources: [source("Ministère de l'Agriculture", "https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie", "Frankrike", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinmässig karantän för hundar som uppfyller inresekraven.",
        minimumAge: "Inte möjligt förrän rabiesvaccinationen är giltig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinmässig karantän för resor som uppfyller kraven.",
        minimumAge: "Bestäms av rabiesreglerna för landet du lämnar.",
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
        quarantine: "Ingen rutinmässig karantän för hundar som uppfyller inresekraven.",
        minimumAge: "Inte möjligt förrän rabiesvaccinationen är giltig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinmässig karantän för resor som uppfyller kraven.",
        minimumAge: "Bestäms av rabiesreglerna för landet du lämnar.",
      },
    },
  },
  {
    code: "NL",
    name: "Nederländerna",
    eu: true,
    sources: [source("NVWA — Nederländska myndigheten för livsmedel och konsumentprodukter", "https://english.nvwa.nl/topics/travelling-with-pets", "Nederländerna", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen rutinmässig karantän för hundar som uppfyller inresekraven.",
        minimumAge: "Inte möjligt förrän rabiesvaccinationen är giltig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen rutinmässig karantän för resor som uppfyller kraven.",
        minimumAge: "Bestäms av rabiesreglerna för landet du lämnar.",
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
        quarantine: "Ingen rutinmässig karantän för hundar som uppfyller inresekraven.",
        minimumAge: "Inte möjligt förrän rabiesvaccinationen är giltig.",
        notes: ["Irland är ett av länderna som kräver avmaskning mot bandmask före ankomst, inom ett visst tidsfönster."],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine: "Ingen rutinmässig karantän för resor som uppfyller kraven.",
        minimumAge: "Bestäms av rabiesreglerna för landet du lämnar.",
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
            detail: "Ett mikrochip enligt ISO-standard, insatt före rabiesvaccinationen.",
          },
          {
            id: "rabies",
            level: "required" as const,
            title: "Giltig rabiesvaccination",
            detail: "Ges efter mikrochipet och måste vara giltig på resdagen, med en karenstid efter en första vaccination.",
          },
          {
            id: "document",
            level: "required" as const,
            title: "Ett accepterat resedokument",
            detail:
              "Ett EU-pass för sällskapsdjur utfärdat i ett EU-land, eller ett hälsocertifikat för sällskapsdjur för Storbritannien. Vilket som gäller beror på var dokumentet utfärdades – kontrollera den officiella guiden för din situation.",
          },
          tapeworm,
          {
            id: "route",
            level: "required" as const,
            title: "En godkänd rutt och transportör",
            detail: "Hundar måste resa med ett godkänt transportföretag på en godkänd rutt, om du inte reser från Irland.",
          },
        ],
        quarantine:
          "Det finns ingen rutinmässig karantän för hundar som uppfyller alla krav. Hundar som anländer utan giltiga dokument kan licensieras till karantän på ägarens bekostnad – en verklig möjlighet, inte en formalitet.",
        minimumAge: "Resa är inte möjlig förrän rabiesvaccinationen är giltig. Kontrollera aktuell ålder och karenstid på GOV.UK.",
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
          { id: "microchip", level: "required" as const, title: "Mikrochip", detail: "Ett mikrochip enligt ISO-standard, registrerat på de formulär du skickar in." },
          { id: "age", level: "required" as const, title: "Minsta ålder", detail: "CDC tillämpar en minimiålder för hundar som reser in i USA. Kontrollera aktuell siffra innan du bokar." },
          { id: "form", level: "required" as const, title: "CDC importformulär", detail: "Ett online-formulär från CDC för import av hundar krävs, som ska skickas in före resan, och kvittot ska medföras." },
          { id: "rabies", level: "required" as const, title: "Rabiesdokumentation", detail: "Vad som krävs beror på var hunden har varit under de senaste sex månaderna. CDC:s sida går igenom varje fall." },
        ],
        quarantine:
          "Ingen rutinmässig karantän för hundar som uppfyller kraven. Hundar som anländer utan korrekt pappersarbete kan nekas inresa och returneras på ägarens bekostnad.",
        minimumAge: "En minimiålder gäller. Kontrollera CDC:s sida för aktuell regel.",
      },
    },
  },
];

export const transportModes = [
  { id: "car", label: "Bil", note: "Du styr tempot och pauserna. Kontrollera regler för färja eller tunnel om rutten korsar vatten." },
  { id: "train", label: "Tåg", note: "Operatörens regler gäller utöver eventuella landsregler, och de skiljer sig åt mellan olika linjer." },
  { id: "plane", label: "Flyg", note: "Flygbolagens regler är separata från inresekraven. Boka hunden tidigt." },
  { id: "ferry", label: "Färja", note: "Regler för hundburar, hytter och regler ombord varierar mellan olika rederier och överfarter." },
  { id: "bus", label: "Buss", note: "Många långdistansbussar tar inte med hundar alls. Bekräfta innan du bokar." },
];

export const travelTimeline = [
  { when: "8 veckor före", what: "Kontrollera reglerna för din exakta rutt, båda riktningarna." },
  { when: "6 veckor före", what: "Kontrollera mikrochip och rabiesvaccinationsstatus med din veterinär." },
  { when: "4 veckor före", what: "Påbörja eventuella dokument – vissa tar längre tid än du tror." },
  { when: "2 veckor före", what: "Bekräfta transportföretagets egna regler och boka hunden." },
  { when: "1 vecka före", what: "Packa reseväskan och leta upp en veterinär på din destination." },
  { when: "Dagen före", what: "Slutlig dokumentkontroll, och en ordentlig långpromenad." },
  { when: "Resdagen", what: "Dokument, hund, vatten, koppel och något bekant." },
];
