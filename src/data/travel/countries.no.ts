import type { Country } from "./countries";

const euBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrochip",
    detail:
      "Hunden må være merket med en mikrochip som følger ISO-standard, satt inn før rabiesvaksinen. En chip som settes inn etterpå betyr at vaksinen må tas på nytt.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Gyldig rabiesvaksine",
    detail:
      "Gitt etter mikrochippen, av en autorisert veterinær, og fortsatt gyldig på reisedagen. Første vaksine har en ventetid før reise er tillatt; oppfriskningsdoser gitt før forrige utløper regnes vanligvis som sammenhengende.",
  },
  {
    id: "passport",
    level: "required" as const,
    title: "EU-dyrepass",
    detail:
      "Utstedt av en autorisert veterinær i et EU- eller EØS-land. Et vanlig vaksinasjonskort er ikke det samme dokumentet og godtas ikke i stedet.",
  },
  {
    id: "owner",
    level: "required" as const,
    title: "Reise sammen med eieren",
    detail:
      "Ikke-kommersiell forflytning gjelder for inntil fem dyr som reiser med eieren eller en person med fullmakt. Flere enn det, eller reise for salg, følger de kommersielle reglene i stedet.",
  },
];

const euNonEuBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrochip",
    detail: "En mikrochip som følger ISO-standard, satt inn før rabiesvaksinen.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Gyldig rabiesvaksine",
    detail: "Gitt etter mikrochippen og fortsatt gyldig på reisedagen, med en ventetid etter første vaksine.",
  },
  {
    id: "certificate",
    level: "required" as const,
    title: "Dyrehelsesertifikat",
    detail:
      "Reise fra et land utenfor EU krever som regel et offisielt dyrehelsesertifikat utstedt av en offentlig veterinær, i stedet for et EU-dyrepass. Kravene varierer avhengig av hvilket land du reiser fra.",
  },
  {
    id: "titration",
    level: "required" as const,
    title: "Antistofftest mot rabies — bare for enkelte land",
    detail:
      "Hunder som kommer fra enkelte ikke-listeførte land trenger en antistofftest for rabies, tatt av et godkjent laboratorium, med en ventetid mellom prøven og reisen. Om dette gjelder deg avhenger av nøyaktig hvilket land du reiser fra — sjekk den offisielle kilden før du bestiller noe.",
  },
  {
    id: "entry-point",
    level: "required" as const,
    title: "Utpekt innreisested for reisende",
    detail:
      "Ankomster fra utenfor EU må som regel gå gjennom et utpekt innreisested, hvor dokumentene kan kontrolleres.",
  },
];

const tapeworm = {
  id: "tapeworm",
  level: "required" as const,
  title: "Behandling mot bendelorm",
  detail:
    "Behandling mot Echinococcus multilocularis, gitt av en veterinær og notert i passet eller sertifikatet, innenfor et fastsatt tidsvindu før ankomst. Dette gjelder hunder som kommer inn i et lite antall land som er fri for parasitten.",
};

const source = (
  name: string,
  url: string,
  country: string,
  lastChecked: string,
  category = "Reise med dyr",
) => ({ name, url, country, lastChecked, category });

export const countries: Country[] = [
  {
    code: "NO",
    name: "Norge",
    eu: true,
    sources: [
      source("Mattilsynet", "https://www.mattilsynet.no/en/animals/travelling-with-pets", "Norge", "2026-08-15"),
    ],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine:
          "Det er ingen fast karantene for hunder som oppfyller alle innreisekravene. Hvis dokumenter eller behandlinger mangler ved ankomst, kan myndighetene sette hunden under offentlig kontroll — som ikke er det samme som en vanlig karanteneperiode.",
        minimumAge:
          "En hund kan ikke reise før rabiesvaksinen er gyldig, noe som i praksis utelukker svært unge valper. Sjekk gjeldende minstealder og ventetid hos Mattilsynet før du planlegger reisen.",
        notes: [
          "Norge er ett av landene med krav om behandling mot bendelorm. Tidsvinduet er strengt, så book veterinærtimen før du booker fergen.",
        ],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine:
          "Ingen fast karantene ved reise som oppfyller kravene. Ankomster som ikke oppfyller kravene kan bli avvist eller satt under offentlig kontroll.",
        minimumAge: "Avhenger av rabiesvaksinereglene for landet du reiser fra.",
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
        quarantine: "Ingen fast karantene for hunder som oppfyller innreisekravene.",
        minimumAge: "Reise er ikke mulig før rabiesvaksinen er gyldig. Sjekk gjeldende alder og ventetid.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen fast karantene ved reise som oppfyller kravene; øvrige ankomster håndteres av myndighetene ved grensen.",
        minimumAge: "Bestemmes av rabiesreglene for landet du reiser fra.",
      },
    },
  },
  {
    code: "DK",
    name: "Danmark",
    eu: true,
    sources: [source("Fødevarestyrelsen", "https://www.foedevarestyrelsen.dk/english", "Danmark", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen fast karantene for hunder som oppfyller innreisekravene.",
        minimumAge: "Ikke mulig før rabiesvaksinen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen fast karantene ved reise som oppfyller kravene.",
        minimumAge: "Bestemmes av rabiesreglene for landet du reiser fra.",
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
        quarantine: "Ingen fast karantene for hunder som oppfyller innreisekravene.",
        minimumAge: "Ikke mulig før rabiesvaksinen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen fast karantene ved reise som oppfyller kravene.",
        minimumAge: "Bestemmes av rabiesreglene for landet du reiser fra.",
      },
    },
  },
  {
    code: "PL",
    name: "Polen",
    eu: true,
    sources: [source("Główny Inspektorat Weterynarii", "https://www.wetgiw.gov.pl/handel-eksport-import/przemieszczanie-w-celach-niehandlowych", "Polen", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen fast karantene for hunder som oppfyller innreisekravene.",
        minimumAge: "Ikke mulig før rabiesvaksinen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen fast karantene ved reise som oppfyller kravene.",
        minimumAge: "Bestemmes av rabiesreglene for landet du reiser fra.",
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
        quarantine: "Ingen fast karantene for hunder som oppfyller innreisekravene.",
        minimumAge: "Ikke mulig før rabiesvaksinen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen fast karantene ved reise som oppfyller kravene.",
        minimumAge: "Bestemmes av rabiesreglene for landet du reiser fra.",
      },
    },
  },
  {
    code: "ES",
    name: "Spania",
    eu: true,
    sources: [source("Ministerio de Agricultura, Pesca y Alimentación", "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/animales-compania/", "Spania", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen fast karantene for hunder som oppfyller innreisekravene.",
        minimumAge: "Ikke mulig før rabiesvaksinen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen fast karantene ved reise som oppfyller kravene.",
        minimumAge: "Bestemmes av rabiesreglene for landet du reiser fra.",
      },
    },
  },
  {
    code: "NL",
    name: "Nederland",
    eu: true,
    sources: [source("NVWA", "https://english.nvwa.nl/topics/travelling-with-pets", "Nederland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ingen fast karantene for hunder som oppfyller innreisekravene.",
        minimumAge: "Ikke mulig før rabiesvaksinen er gyldig.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ingen fast karantene ved reise som oppfyller kravene.",
        minimumAge: "Bestemmes av rabiesreglene for landet du reiser fra.",
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
        quarantine: "Ingen fast karantene for hunder som oppfyller innreisekravene.",
        minimumAge: "Ikke mulig før rabiesvaksinen er gyldig.",
        notes: ["Irland er ett av landene som krever behandling mot bendelorm før ankomst, innenfor et fastsatt tidsvindu."],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine: "Ingen fast karantene ved reise som oppfyller kravene.",
        minimumAge: "Bestemmes av rabiesreglene for landet du reiser fra.",
      },
    },
  },
  {
    code: "GB",
    name: "Storbritannia",
    eu: false,
    sources: [source("GOV.UK — Bringing your pet dog to Great Britain", "https://www.gov.uk/bring-pet-to-great-britain", "Storbritannia", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          {
            id: "microchip",
            level: "required" as const,
            title: "Mikrochip",
            detail: "En mikrochip som følger ISO-standard, satt inn før rabiesvaksinen.",
          },
          {
            id: "rabies",
            level: "required" as const,
            title: "Gyldig rabiesvaksine",
            detail: "Gitt etter mikrochippen og fortsatt gyldig på reisedagen, med en ventetid etter første vaksine.",
          },
          {
            id: "document",
            level: "required" as const,
            title: "Et godkjent reisedokument",
            detail:
              "Et EU-dyrepass utstedt i et EU-land, eller et britisk helsesertifikat for kjæledyr. Hvilket som gjelder avhenger av hvor dokumentet ble utstedt — sjekk den offisielle veiledningen for din situasjon.",
          },
          tapeworm,
          {
            id: "route",
            level: "required" as const,
            title: "En godkjent rute og transportør",
            detail: "Hunder må reise med et godkjent transportselskap på en godkjent rute, med mindre du reiser fra Irland.",
          },
        ],
        quarantine:
          "Det er ingen fast karantene for hunder som oppfyller alle kravene. Hunder som ankommer uten gyldige dokumenter kan bli satt i karantene for eierens regning — en reell mulighet, ikke bare en formalitet.",
        minimumAge: "Reise er ikke mulig før rabiesvaksinen er gyldig. Sjekk gjeldende alder og ventetid på GOV.UK.",
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
          { id: "microchip", level: "required" as const, title: "Mikrochip", detail: "En mikrochip som følger ISO-standard, registrert på skjemaene du sender inn." },
          { id: "age", level: "required" as const, title: "Minstealder", detail: "CDC har en minstealder for hunder som kommer inn i USA. Sjekk gjeldende alder før du bestiller." },
          { id: "form", level: "required" as const, title: "CDC-importskjema", detail: "Et digitalt CDC Dog Import Form kreves, sendt inn før reisen, med kvitteringen med deg på reisen." },
          { id: "rabies", level: "required" as const, title: "Rabiesdokumentasjon", detail: "Hva som kreves avhenger av hvor hunden har oppholdt seg de siste seks månedene. CDC-siden går gjennom hvert tilfelle." },
        ],
        quarantine:
          "Ingen fast karantene for hunder som oppfyller kravene. Hunder som ankommer uten riktige papirer kan bli nektet innreise og sendt tilbake for eierens regning.",
        minimumAge: "En minstealder gjelder. Sjekk CDC-siden for gjeldende regel.",
      },
    },
  },
];

export const transportModes = [
  { id: "car", label: "Bil", note: "Du styrer selv tempoet og pausene. Sjekk regler for ferge eller tunnel hvis ruten krysser vann." },
  { id: "train", label: "Tog", note: "Operatørens egne regler kommer i tillegg til landets krav, og de varierer fra linje til linje." },
  { id: "plane", label: "Fly", note: "Flyselskapets regler er atskilt fra innreisekravene. Book hunden tidlig." },
  { id: "ferry", label: "Ferge", note: "Kenneler, lugarer og regler på dekk varierer fra selskap til selskap og fra overfart til overfart." },
  { id: "bus", label: "Buss", note: "Mange langdistanseoperatører tar ikke med hunder i det hele tatt. Bekreft før du bestiller." },
];

export const travelTimeline = [
  { when: "8 uker før", what: "Sjekk reglene for akkurat din rute, begge veier." },
  { when: "6 uker før", what: "Sjekk status på mikrochip og rabiesvaksine hos veterinæren." },
  { when: "4 uker før", what: "Sett i gang med dokumenter — noen tar lengre tid enn man skulle tro." },
  { when: "2 uker før", what: "Bekreft transportørens egne regler og book hunden på." },
  { when: "1 uke før", what: "Pakk reisemappen og finn en veterinær på reisemålet." },
  { when: "Dagen før", what: "Siste dokumentsjekk, og en god, lang tur." },
  { when: "Reisedagen", what: "Dokumenter, hund, vann, bånd, og noe kjent hjemmefra." },
];
