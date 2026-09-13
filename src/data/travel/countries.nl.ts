import type { Country } from "./countries";

const euBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Microchip",
    detail:
      "De hond moet geïdentificeerd zijn met een microchip die voldoet aan de ISO-normen, geplaatst vóór de rabiësvaccinatie. Een chip die erna geplaatst wordt, betekent dat de vaccinatie herhaald moet worden.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Geldige rabiësvaccinatie",
    detail:
      "Gegeven na de microchip, door een erkende dierenarts, en nog geldig op de dag van de reis. Een eerste vaccinatie heeft een wachttijd voordat reizen is toegestaan; herhalingsvaccinaties die gegeven worden voordat de vorige verloopt, tellen normaal gesproken als continu.",
  },
  {
    id: "passport",
    level: "required" as const,
    title: "EU-huisdierenpaspoort",
    detail:
      "Uitgegeven door een erkende dierenarts in een EU- of EER-land. Een binnenlandse vaccinatiekaart is niet hetzelfde document en wordt niet geaccepteerd.",
  },
  {
    id: "owner",
    level: "required" as const,
    title: "Reizen met de eigenaar",
    detail:
      "Niet-commerciële verplaatsing omvat maximaal vijf dieren die reizen met hun eigenaar of een gemachtigd persoon. Meer dan dat, of reizen voor verkoop, valt onder de commerciële regels.",
  },
];

const euNonEuBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Microchip",
    detail: "Een microchip volgens ISO-normen, geplaatst vóór de rabiësvaccinatie.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Geldige rabiësvaccinatie",
    detail: "Gegeven na de microchip en nog geldig op de dag van de reis, met een wachttijd na een eerste vaccinatie.",
  },
  {
    id: "certificate",
    level: "required" as const,
    title: "Gezondheidscertificaat voor dieren",
    detail:
      "Reizen vanuit een niet-EU-land vereist normaal gesproken een officieel gezondheidscertificaat voor dieren, afgegeven door een officiële dierenarts, in plaats van een EU-huisdierenpaspoort. De vereisten verschillen afhankelijk van het land waar je vertrekt.",
  },
  {
    id: "titration",
    level: "required" as const,
    title: "Rabiëstantigeentest — alleen voor sommige landen",
    detail:
      "Honden die aankomen uit bepaalde niet-vermelde landen hebben een rabiëstantigeentest nodig, uitgevoerd door een erkend laboratorium, met een wachttijd tussen de steekproef en de reis. Of dit van toepassing is, hangt af van het exacte land waar je vertrekt — controleer de officiële bron voordat je iets boekt.",
  },
  {
    id: "entry-point",
    level: "required" as const,
    title: "Aangewezen toegangspunt voor reizigers",
    detail:
      "Aankomsten van buiten de EU moeten meestal via een aangewezen toegangspunt binnenkomen, waar documenten gecontroleerd kunnen worden.",
  },
];

const tapeworm = {
  id: "tapeworm",
  level: "required" as const,
  title: "Ontworming",
  detail:
    "Behandeling tegen Echinococcus multilocularis, gegeven door een dierenarts en geregistreerd in het paspoort of certificaat, binnen een bepaalde periode voor aankomst. Dit geldt voor honden die een klein aantal landen binnenkomen die vrij zijn van de parasiet.",
};

const source = (
  name: string,
  url: string,
  country: string,
  lastChecked: string,
  category = "Reizen met huisdieren",
) => ({ name, url, country, lastChecked, category });

export const countries: Country[] = [
  {
    code: "NO",
    name: "Noorwegen",
    eu: true,
    sources: [
      source("Mattilsynet — Noorse Voedsel- en Warenautoriteit", "https://www.mattilsynet.no/en/animals/travelling-with-pets", "Noorwegen", "2026-08-15"),
    ],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine:
          "Er is geen routinequarantaine voor honden die aan alle toelatingseisen voldoen. Als documenten of behandelingen bij aankomst ontbreken, kunnen de autoriteiten de hond onder officiële controle plaatsen — wat niet hetzelfde is als een standaard quarantaineperiode.",
        minimumAge:
          "Een hond kan niet reizen totdat de rabiësvaccinatie geldig is, wat in de praktijk zeer jonge puppy's uitsluit. Controleer de actuele minimumleeftijd en wachttijd bij Mattilsynet voordat je de reis plant.",
        notes: [
          "Noorwegen is een van de landen met een vereiste voor ontworming. Het tijdvenster is strikt, dus boek de dierenartsafspraak voordat je de veerboot boekt.",
        ],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine:
          "Geen routinequarantaine voor reizen die aan de eisen voldoen. Niet-conforme aankomsten kunnen de toegang worden geweigerd of onder officiële controle worden geplaatst.",
        minimumAge: "Afhankelijk van de rabiësvaccinatieregels voor het land waar je vertrekt.",
      },
    },
  },
  {
    code: "SE",
    name: "Zweden",
    eu: true,
    sources: [source("Jordbruksverket — Zweedse Raad voor Landbouw", "https://jordbruksverket.se/languages/english/travelling-with-pets", "Zweden", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Geen routinequarantaine voor honden die aan de toelatingseisen voldoen.",
        minimumAge: "Reizen is niet mogelijk totdat de rabiësvaccinatie geldig is. Controleer de actuele leeftijd en wachttijd.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Geen routinequarantaine voor reizen die aan de eisen voldoen; niet-conforme aankomsten worden afgehandeld door de autoriteiten aan de grens.",
        minimumAge: "Vastgesteld door de rabiësregels voor het land waar je vertrekt.",
      },
    },
  },
  {
    code: "DK",
    name: "Denemarken",
    eu: true,
    sources: [source("Fødevarestyrelsen — Deense Veterinaire en Voedselautoriteit", "https://www.foedevarestyrelsen.dk/english", "Denemarken", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Geen routinequarantaine voor honden die aan de toelatingseisen voldoen.",
        minimumAge: "Niet mogelijk totdat de rabiësvaccinatie geldig is.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Geen routinequarantaine voor reizen die aan de eisen voldoen.",
        minimumAge: "Vastgesteld door de rabiësregels voor het land waar je vertrekt.",
      },
    },
  },
  {
    code: "DE",
    name: "Duitsland",
    eu: true,
    sources: [source("Bundesministerium für Ernährung und Landwirtschaft", "https://www.bmel.de/EN/topics/animals/animal-health/travelling-with-pets.html", "Duitsland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Geen routinequarantaine voor honden die aan de toelatingseisen voldoen.",
        minimumAge: "Niet mogelijk totdat de rabiësvaccinatie geldig is.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Geen routinequarantaine voor reizen die aan de eisen voldoen.",
        minimumAge: "Vastgesteld door de rabiësregels voor het land waar je vertrekt.",
      },
    },
  },
  {
    code: "PL",
    name: "Polen",
    eu: true,
    sources: [source("Główny Inspektorat Weterynarii — Algemene Veterinaire Inspectie", "https://www.wetgiw.gov.pl/handel-eksport-import/przemieszczanie-w-celach-niehandlowych", "Polen", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Geen routinequarantaine voor honden die aan de toelatingseisen voldoen.",
        minimumAge: "Niet mogelijk totdat de rabiësvaccinatie geldig is.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Geen routinequarantaine voor reizen die aan de eisen voldoen.",
        minimumAge: "Vastgesteld door de rabiësregels voor het land waar je vertrekt.",
      },
    },
  },
  {
    code: "FR",
    name: "Frankrijk",
    eu: true,
    sources: [source("Ministère de l'Agriculture", "https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie", "Frankrijk", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Geen routinequarantaine voor honden die aan de toelatingseisen voldoen.",
        minimumAge: "Niet mogelijk totdat de rabiësvaccinatie geldig is.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Geen routinequarantaine voor reizen die aan de eisen voldoen.",
        minimumAge: "Vastgesteld door de rabiësregels voor het land waar je vertrekt.",
      },
    },
  },
  {
    code: "ES",
    name: "Spanje",
    eu: true,
    sources: [source("Ministerio de Agricultura, Pesca y Alimentación", "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/animales-compania/", "Spanje", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Geen routinequarantaine voor honden die aan de toelatingseisen voldoen.",
        minimumAge: "Niet mogelijk totdat de rabiësvaccinatie geldig is.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Geen routinequarantaine voor reizen die aan de eisen voldoen.",
        minimumAge: "Vastgesteld door de rabiësregels voor het land waar je vertrekt.",
      },
    },
  },
  {
    code: "NL",
    name: "Nederland",
    eu: true,
    sources: [source("NVWA — Nederlandse Voedsel- en Warenautoriteit", "https://english.nvwa.nl/topics/travelling-with-pets", "Nederland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Geen routinequarantaine voor honden die aan de toelatingseisen voldoen.",
        minimumAge: "Niet mogelijk totdat de rabiësvaccinatie geldig is.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Geen routinequarantaine voor reizen die aan de eisen voldoen.",
        minimumAge: "Vastgesteld door de rabiësregels voor het land waar je vertrekt.",
      },
    },
  },
  {
    code: "IE",
    name: "Ierland",
    eu: true,
    sources: [source("Department of Agriculture, Food and the Marine", "https://www.gov.ie/en/organisation/department-of-agriculture-food-and-the-marine/", "Ierland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine: "Geen routinequarantaine voor honden die aan de toelatingseisen voldoen.",
        minimumAge: "Niet mogelijk totdat de rabiësvaccinatie geldig is.",
        notes: ["Ierland is een van de landen die ontworming vereist vóór aankomst, binnen een bepaalde termijn."],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine: "Geen routinequarantaine voor reizen die aan de eisen voldoen.",
        minimumAge: "Vastgesteld door de rabiësregels voor het land waar je vertrekt.",
      },
    },
  },
  {
    code: "GB",
    name: "Verenigd Koninkrijk",
    eu: false,
    sources: [source("GOV.UK — Uw hond meenemen naar Groot-Brittannië", "https://www.gov.uk/bring-pet-to-great-britain", "Verenigd Koninkrijk", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          {
            id: "microchip",
            level: "required" as const,
            title: "Microchip",
            detail: "Een microchip volgens ISO-normen, geplaatst vóór de rabiësvaccinatie.",
          },
          {
            id: "rabies",
            level: "required" as const,
            title: "Geldige rabiësvaccinatie",
            detail: "Gegeven na de microchip en nog geldig op de dag van de reis, met een wachttijd na een eerste vaccinatie.",
          },
          {
            id: "document",
            level: "required" as const,
            title: "Een geaccepteerd reisdocument",
            detail:
              "Een EU-huisdierenpaspoort afgegeven in een EU-land, of een gezondheidscertificaat voor huisdieren uit Groot-Brittannië. Welke van toepassing is, hangt af van waar het document is afgegeven — controleer de officiële richtlijnen voor jouw situatie.",
          },
          tapeworm,
          {
            id: "route",
            level: "required" as const,
            title: "Een goedgekeurde route en vervoerder",
            detail: "Honden moeten reizen met een goedgekeurd transportbedrijf op een goedgekeurde route, tenzij je vanuit Ierland reist.",
          },
        ],
        quarantine:
          "Er is geen routinequarantaine voor honden die aan alle eisen voldoen. Honden die aankomen zonder geldige documenten kunnen tegen betaling van de eigenaar in quarantaine worden geplaatst — een reële mogelijkheid, geen formaliteit.",
        minimumAge: "Reizen is niet mogelijk totdat de rabiësvaccinatie geldig is. Controleer de actuele leeftijd en wachttijd op GOV.UK.",
      },
    },
  },
  {
    code: "US",
    name: "Verenigde Staten",
    eu: false,
    sources: [source("CDC — Een hond meenemen naar de Verenigde Staten", "https://www.cdc.gov/importation/dogs/", "Verenigde Staten", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          { id: "microchip", level: "required" as const, title: "Microchip", detail: "Een microchip volgens ISO-normen, geregistreerd op de formulieren die je indient." },
          { id: "age", level: "required" as const, title: "Minimumleeftijd", detail: "De CDC hanteert een minimumleeftijd voor honden die de Verenigde Staten binnenkomen. Controleer het actuele cijfer voordat je boekt." },
          { id: "form", level: "required" as const, title: "CDC-importformulier", detail: "Een online CDC Dog Import Form is vereist, ingediend vóór de reis, met het ontvangstbewijs bij je te dragen." },
          { id: "rabies", level: "required" as const, title: "Rabiësdocumentatie", detail: "Wat vereist is, hangt af van waar de hond de afgelopen zes maanden is geweest. De CDC-pagina leidt je door elk geval." },
        ],
        quarantine:
          "Geen routinequarantaine voor honden die aan de eisen voldoen. Honden die aankomen zonder de juiste papieren kunnen de toegang worden geweigerd en op kosten van de eigenaar worden teruggestuurd.",
        minimumAge: "Er geldt een minimumleeftijd. Controleer de CDC-pagina voor de actuele regel.",
      },
    },
  },
];

export const transportModes = [
  { id: "car", label: "Auto", note: "Jij bepaalt het tempo en de pauzes. Controleer de regels voor veerboten of tunnels als de route water kruist." },
  { id: "train", label: "Trein", note: "Regels van de exploitant komen bovenop eventuele landelijke vereisten, en deze verschillen per lijn." },
  { id: "plane", label: "Vliegtuig", note: "Regels van de luchtvaartmaatschappij staan los van de toelatingseisen. Boek de hond vroeg." },
  { id: "ferry", label: "Veerboot", note: "Regels voor kennels, hutten en dek verschillen per bedrijf en per overtocht." },
  { id: "bus", label: "Bus", note: "Veel langeafstandsexploitanten accepteren helemaal geen honden. Bevestig dit voordat je boekt." },
];

export const travelTimeline = [
  { when: "8 weken van tevoren", what: "Controleer de regels voor je exacte route, beide richtingen." },
  { when: "6 weken van tevoren", what: "Controleer de status van de microchip en rabiësvaccinatie bij je dierenarts." },
  { when: "4 weken van tevoren", what: "Laat eventuele documenten starten — sommige duren langer dan je denkt." },
  { when: "2 weken van tevoren", what: "Bevestig de eigen regels van het transportbedrijf en boek de hond erop." },
  { when: "1 week van tevoren", what: "Pak de reispakket in en zoek een dierenarts op je bestemming op." },
  { when: "Dag ervoor", what: "Laatste documentcontrole, en een goede lange wandeling." },
  { when: "Reisdag", what: "Documenten, hond, water, riem en iets vertrouwds." },
];
