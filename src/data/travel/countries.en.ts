import type { Country } from "./countries";

const euBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Microchip",
    detail:
      "The dog must be identified by a microchip that meets ISO standards, fitted before the rabies vaccination. A chip fitted afterwards means the vaccination has to be repeated.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Valid rabies vaccination",
    detail:
      "Given after the microchip, by an authorised veterinarian, and still valid on the day you travel. A first vaccination has a waiting period before travel is allowed; boosters given before the previous one expires normally count as continuous.",
  },
  {
    id: "passport",
    level: "required" as const,
    title: "EU pet passport",
    detail:
      "Issued by an authorised veterinarian in an EU or EEA country. A domestic vaccination card is not the same document and is not accepted in its place.",
  },
  {
    id: "owner",
    level: "required" as const,
    title: "Travelling with the owner",
    detail:
      "Non-commercial movement covers up to five animals travelling with their owner or an authorised person. More than that, or travel for sale, falls under commercial rules instead.",
  },
];

const euNonEuBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Microchip",
    detail: "An ISO-standard microchip, fitted before the rabies vaccination.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Valid rabies vaccination",
    detail: "Given after the microchip and still valid on the day of travel, with a waiting period after a first vaccination.",
  },
  {
    id: "certificate",
    level: "required" as const,
    title: "Animal health certificate",
    detail:
      "Travel from a non-EU country normally requires an official animal health certificate issued by an official veterinarian, rather than an EU pet passport. Requirements differ depending on the country you're leaving.",
  },
  {
    id: "titration",
    level: "required" as const,
    title: "Rabies antibody test — for some countries only",
    detail:
      "Dogs arriving from certain non-listed countries need a rabies antibody titration test, taken by an authorised laboratory, with a waiting period between the sample and travel. Whether it applies depends on the exact country you're leaving — check the official source before booking anything.",
  },
  {
    id: "entry-point",
    level: "required" as const,
    title: "Designated traveller's point of entry",
    detail:
      "Arrivals from outside the EU usually have to enter through a designated point of entry, where documents can be checked.",
  },
];

const tapeworm = {
  id: "tapeworm",
  level: "required" as const,
  title: "Tapeworm treatment",
  detail:
    "Treatment against Echinococcus multilocularis, given by a veterinarian and recorded in the passport or certificate, within a set window before arrival. This applies to dogs entering a small number of countries that are free of the parasite.",
};

const source = (
  name: string,
  url: string,
  country: string,
  lastChecked: string,
  category = "Pet travel",
) => ({ name, url, country, lastChecked, category });

export const countries: Country[] = [
  {
    code: "NO",
    name: "Norway",
    eu: true,
    sources: [
      source("Mattilsynet — Norwegian Food Safety Authority", "https://www.mattilsynet.no/en/animals/travelling-with-pets", "Norway", "2026-08-15"),
    ],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine:
          "There is no routine quarantine for dogs that meet all the entry requirements. If documents or treatments are missing on arrival, the authorities can place the dog under official control — which is not the same thing as a standard quarantine period.",
        minimumAge:
          "A dog can't travel until the rabies vaccination is valid, which in practice rules out very young puppies. Check the current minimum age and waiting period with Mattilsynet before you plan the trip.",
        notes: [
          "Norway is one of the countries with a tapeworm treatment requirement. The timing window is strict, so book the vet appointment before you book the ferry.",
        ],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine:
          "No routine quarantine for compliant travel. Non-compliant arrivals can be refused entry or placed under official control.",
        minimumAge: "Depends on the rabies vaccination rules for the country you're leaving.",
      },
    },
  },
  {
    code: "SE",
    name: "Sweden",
    eu: true,
    sources: [source("Jordbruksverket — Swedish Board of Agriculture", "https://jordbruksverket.se/languages/english/travelling-with-pets", "Sweden", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "No routine quarantine for dogs that meet the entry requirements.",
        minimumAge: "Travel isn't possible until the rabies vaccination is valid. Check the current age and waiting period.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "No routine quarantine for compliant travel; non-compliant arrivals are handled by the authorities at the border.",
        minimumAge: "Determined by the rabies rules for the country you're leaving.",
      },
    },
  },
  {
    code: "DK",
    name: "Denmark",
    eu: true,
    sources: [source("Fødevarestyrelsen — Danish Veterinary and Food Administration", "https://www.foedevarestyrelsen.dk/english", "Denmark", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "No routine quarantine for dogs that meet the entry requirements.",
        minimumAge: "Not possible until the rabies vaccination is valid.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "No routine quarantine for compliant travel.",
        minimumAge: "Determined by the rabies rules for the country you're leaving.",
      },
    },
  },
  {
    code: "DE",
    name: "Germany",
    eu: true,
    sources: [source("Bundesministerium für Ernährung und Landwirtschaft", "https://www.bmel.de/EN/topics/animals/animal-health/travelling-with-pets.html", "Germany", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "No routine quarantine for dogs that meet the entry requirements.",
        minimumAge: "Not possible until the rabies vaccination is valid.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "No routine quarantine for compliant travel.",
        minimumAge: "Determined by the rabies rules for the country you're leaving.",
      },
    },
  },
  {
    code: "PL",
    name: "Poland",
    eu: true,
    sources: [source("Główny Inspektorat Weterynarii — General Veterinary Inspectorate", "https://www.wetgiw.gov.pl/handel-eksport-import/przemieszczanie-w-celach-niehandlowych", "Poland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "No routine quarantine for dogs that meet the entry requirements.",
        minimumAge: "Not possible until the rabies vaccination is valid.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "No routine quarantine for compliant travel.",
        minimumAge: "Determined by the rabies rules for the country you're leaving.",
      },
    },
  },
  {
    code: "FR",
    name: "France",
    eu: true,
    sources: [source("Ministère de l'Agriculture", "https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie", "France", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "No routine quarantine for dogs that meet the entry requirements.",
        minimumAge: "Not possible until the rabies vaccination is valid.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "No routine quarantine for compliant travel.",
        minimumAge: "Determined by the rabies rules for the country you're leaving.",
      },
    },
  },
  {
    code: "ES",
    name: "Spain",
    eu: true,
    sources: [source("Ministerio de Agricultura, Pesca y Alimentación", "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/animales-compania/", "Spain", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "No routine quarantine for dogs that meet the entry requirements.",
        minimumAge: "Not possible until the rabies vaccination is valid.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "No routine quarantine for compliant travel.",
        minimumAge: "Determined by the rabies rules for the country you're leaving.",
      },
    },
  },
  {
    code: "NL",
    name: "Netherlands",
    eu: true,
    sources: [source("NVWA — Netherlands Food and Consumer Product Safety Authority", "https://english.nvwa.nl/topics/travelling-with-pets", "Netherlands", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "No routine quarantine for dogs that meet the entry requirements.",
        minimumAge: "Not possible until the rabies vaccination is valid.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "No routine quarantine for compliant travel.",
        minimumAge: "Determined by the rabies rules for the country you're leaving.",
      },
    },
  },
  {
    code: "IE",
    name: "Ireland",
    eu: true,
    sources: [source("Department of Agriculture, Food and the Marine", "https://www.gov.ie/en/organisation/department-of-agriculture-food-and-the-marine/", "Ireland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine: "No routine quarantine for dogs that meet the entry requirements.",
        minimumAge: "Not possible until the rabies vaccination is valid.",
        notes: ["Ireland is one of the countries that requires tapeworm treatment before arrival, within a set time window."],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine: "No routine quarantine for compliant travel.",
        minimumAge: "Determined by the rabies rules for the country you're leaving.",
      },
    },
  },
  {
    code: "GB",
    name: "United Kingdom",
    eu: false,
    sources: [source("GOV.UK — Bringing your pet dog to Great Britain", "https://www.gov.uk/bring-pet-to-great-britain", "United Kingdom", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          {
            id: "microchip",
            level: "required" as const,
            title: "Microchip",
            detail: "An ISO-standard microchip, fitted before the rabies vaccination.",
          },
          {
            id: "rabies",
            level: "required" as const,
            title: "Valid rabies vaccination",
            detail: "Given after the microchip and still valid on the day of travel, with a waiting period after a first vaccination.",
          },
          {
            id: "document",
            level: "required" as const,
            title: "An accepted travel document",
            detail:
              "An EU pet passport issued in an EU country, or a Great Britain pet health certificate. Which one applies depends on where the document was issued — check the official guidance for your situation.",
          },
          tapeworm,
          {
            id: "route",
            level: "required" as const,
            title: "An approved route and carrier",
            detail: "Dogs must travel with an approved transport company on an approved route, unless you're travelling from Ireland.",
          },
        ],
        quarantine:
          "There is no routine quarantine for dogs that meet all the requirements. Dogs that arrive without valid documents can be licensed into quarantine at the owner's expense — a real possibility, not a formality.",
        minimumAge: "Travel isn't possible until the rabies vaccination is valid. Check the current age and waiting period on GOV.UK.",
      },
    },
  },
  {
    code: "US",
    name: "United States",
    eu: false,
    sources: [source("CDC — Bringing a dog into the United States", "https://www.cdc.gov/importation/dogs/", "United States", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          { id: "microchip", level: "required" as const, title: "Microchip", detail: "An ISO-standard microchip, recorded on the forms you submit." },
          { id: "age", level: "required" as const, title: "Minimum age", detail: "The CDC applies a minimum age for dogs entering the United States. Check the current figure before booking." },
          { id: "form", level: "required" as const, title: "CDC import form", detail: "An online CDC Dog Import Form is required, submitted before travel, with the receipt carried with you." },
          { id: "rabies", level: "required" as const, title: "Rabies documentation", detail: "What's required depends on where the dog has been in the previous six months. The CDC page walks through each case." },
        ],
        quarantine:
          "No routine quarantine for dogs meeting the requirements. Dogs arriving without the correct paperwork can be denied entry and returned at the owner's expense.",
        minimumAge: "A minimum age applies. Check the CDC page for the current rule.",
      },
    },
  },
];

export const transportModes = [
  { id: "car", label: "Car", note: "You control the pace and the breaks. Check ferry or tunnel rules if the route crosses water." },
  { id: "train", label: "Train", note: "Operator rules apply on top of any country requirements, and they differ by line." },
  { id: "plane", label: "Plane", note: "Airline rules are separate from entry requirements. Book the dog early." },
  { id: "ferry", label: "Ferry", note: "Kennels, cabins and on-deck rules vary by company and by crossing." },
  { id: "bus", label: "Bus", note: "Many long-distance operators don't take dogs at all. Confirm before you book." },
];

export const travelTimeline = [
  { when: "8 weeks before", what: "Check the rules for your exact route, both directions." },
  { when: "6 weeks before", what: "Check the microchip and rabies vaccination status with your vet." },
  { when: "4 weeks before", what: "Get any documents started — some take longer than you'd think." },
  { when: "2 weeks before", what: "Confirm the transport company's own rules and book the dog on." },
  { when: "1 week before", what: "Pack the travel pack and look up a vet at your destination." },
  { when: "Day before", what: "Final document check, and a good long walk." },
  { when: "Travel day", what: "Documents, dog, water, lead, and something familiar." },
];
