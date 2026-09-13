import type { Country } from "./countries";

const euBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrochip",
    detail:
      "Der Hund muss durch einen Mikrochip nach ISO-Standard identifizierbar sein, der vor der Tollwutimpfung implantiert wurde. Ein später eingesetzter Chip bedeutet, dass die Impfung wiederholt werden muss.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Gültige Tollwutimpfung",
    detail:
      "Verabreicht nach dem Mikrochip, von einem autorisierten Tierarzt, und am Reisetag noch gültig. Eine Erstimpfung hat eine Wartezeit, bevor die Reise erlaubt ist; Auffrischungsimpfungen, die vor Ablauf der vorherigen gegeben werden, gelten normalerweise als fortlaufend.",
  },
  {
    id: "passport",
    level: "required" as const,
    title: "EU-Heimtierausweis",
    detail:
      "Ausgestellt von einem autorisierten Tierarzt in einem EU- oder EWR-Land. Eine nationale Impfkarte ist nicht dasselbe Dokument und wird nicht akzeptiert.",
  },
  {
    id: "owner",
    level: "required" as const,
    title: "Reise mit dem Besitzer",
    detail:
      "Die nicht-kommerzielle Verbringung umfasst bis zu fünf Tiere, die mit ihrem Besitzer oder einer autorisierten Person reisen. Mehr Tiere oder eine Reise zum Verkauf fallen stattdessen unter die kommerziellen Regeln.",
  },
];

const euNonEuBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrochip",
    detail: "Ein Mikrochip nach ISO-Standard, implantiert vor der Tollwutimpfung.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Gültige Tollwutimpfung",
    detail: "Verabreicht nach dem Mikrochip und am Reisetag noch gültig, mit einer Wartezeit nach einer Erstimpfung.",
  },
  {
    id: "certificate",
    level: "required" as const,
    title: "Gesundheitsbescheinigung für Tiere",
    detail:
      "Die Reise aus einem Nicht-EU-Land erfordert normalerweise eine offizielle Gesundheitsbescheinigung für Tiere, ausgestellt von einem amtlichen Tierarzt, anstelle eines EU-Heimtierausweises. Die Anforderungen unterscheiden sich je nach dem Land, aus dem Sie ausreisen.",
  },
  {
    id: "titration",
    level: "required" as const,
    title: "Tollwut-Antikörper-Test – nur für einige Länder",
    detail:
      "Hunde, die aus bestimmten nicht aufgeführten Ländern einreisen, benötigen einen Tollwut-Antikörper-Titer-Test, der von einem autorisierten Labor durchgeführt wurde, mit einer Wartezeit zwischen der Probenentnahme und der Reise. Ob dies zutrifft, hängt vom genauen Land ab, aus dem Sie ausreisen – prüfen Sie die offizielle Quelle, bevor Sie etwas buchen.",
  },
  {
    id: "entry-point",
    level: "required" as const,
    title: "Benannter Einreiseort",
    detail:
      "Einreisen aus Nicht-EU-Ländern müssen normalerweise über einen benannten Einreiseort erfolgen, an dem die Dokumente überprüft werden können.",
  },
];

const tapeworm = {
  id: "tapeworm",
  level: "required" as const,
  title: "Bandwurmbehandlung",
  detail:
    "Behandlung gegen Echinococcus multilocularis, verabreicht von einem Tierarzt und im Ausweis oder Zertifikat eingetragen, innerhalb eines festgelegten Zeitfensters vor der Ankunft. Dies gilt für Hunde, die in eine kleine Anzahl von Ländern einreisen, die frei von diesem Parasiten sind.",
};

const source = (
  name: string,
  url: string,
  country: string,
  lastChecked: string,
  category = "Reisen mit Haustieren",
) => ({ name, url, country, lastChecked, category });

export const countries: Country[] = [
  {
    code: "NO",
    name: "Norwegen",
    eu: true,
    sources: [
      source("Mattilsynet – Norwegische Lebensmittelbehörde", "https://www.mattilsynet.no/en/animals/travelling-with-pets", "Norway", "2026-08-15"),
    ],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine:
          "Es gibt keine routinemäßige Quarantäne für Hunde, die alle Einreisebestimmungen erfüllen. Wenn bei der Ankunft Dokumente oder Behandlungen fehlen, können die Behörden den Hund unter behördliche Kontrolle stellen – das ist nicht dasselbe wie eine Standard-Quarantänezeit.",
        minimumAge:
          "Ein Hund kann erst reisen, wenn die Tollwutimpfung gültig ist, was sehr junge Welpen praktisch ausschließt. Erkundigen Sie sich vor der Reiseplanung bei Mattilsynet nach dem aktuellen Mindestalter und der Wartezeit.",
        notes: [
          "Norwegen ist eines der Länder mit einer Bandwurmbehandlungspflicht. Das Zeitfenster ist streng, buchen Sie also den Tierarzttermin, bevor Sie die Fähre buchen.",
        ],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine:
          "Keine routinemäßige Quarantäne für konforme Reisen. Nicht konforme Einreisen können verweigert oder unter behördliche Kontrolle gestellt werden.",
        minimumAge: "Abhängig von den Tollwutimpfregeln des Landes, aus dem Sie ausreisen.",
      },
    },
  },
  {
    code: "SE",
    name: "Schweden",
    eu: true,
    sources: [source("Jordbruksverket – Schwedische Landwirtschaftsbehörde", "https://jordbruksverket.se/languages/english/travelling-with-pets", "Sweden", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Keine routinemäßige Quarantäne für Hunde, die die Einreisebestimmungen erfüllen.",
        minimumAge: "Reisen ist erst möglich, wenn die Tollwutimpfung gültig ist. Erkundigen Sie sich nach dem aktuellen Alter und der Wartezeit.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Keine routinemäßige Quarantäne für konforme Reisen; nicht konforme Einreisen werden von den Behörden an der Grenze behandelt.",
        minimumAge: "Bestimmt durch die Tollwutregeln des Landes, aus dem Sie ausreisen.",
      },
    },
  },
  {
    code: "DK",
    name: "Dänemark",
    eu: true,
    sources: [source("Fødevarestyrelsen – Dänische Veterinär- und Lebensmittelbehörde", "https://www.foedevarestyrelsen.dk/english", "Denmark", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Keine routinemäßige Quarantäne für Hunde, die die Einreisebestimmungen erfüllen.",
        minimumAge: "Nicht möglich, bis die Tollwutimpfung gültig ist.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Keine routinemäßige Quarantäne für konforme Reisen.",
        minimumAge: "Bestimmt durch die Tollwutregeln des Landes, aus dem Sie ausreisen.",
      },
    },
  },
  {
    code: "DE",
    name: "Deutschland",
    eu: true,
    sources: [source("Bundesministerium für Ernährung und Landwirtschaft", "https://www.bmel.de/EN/topics/animals/animal-health/travelling-with-pets.html", "Germany", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Keine routinemäßige Quarantäne für Hunde, die die Einreisebestimmungen erfüllen.",
        minimumAge: "Nicht möglich, bis die Tollwutimpfung gültig ist.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Keine routinemäßige Quarantäne für konforme Reisen.",
        minimumAge: "Bestimmt durch die Tollwutregeln des Landes, aus dem Sie ausreisen.",
      },
    },
  },
  {
    code: "PL",
    name: "Polen",
    eu: true,
    sources: [source("Główny Inspektorat Weterynarii – Allgemeine Veterinärinspektion", "https://www.wetgiw.gov.pl/handel-eksport-import/przemieszczanie-w-celach-niehandlowych", "Poland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Keine routinemäßige Quarantäne für Hunde, die die Einreisebestimmungen erfüllen.",
        minimumAge: "Nicht möglich, bis die Tollwutimpfung gültig ist.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Keine routinemäßige Quarantäne für konforme Reisen.",
        minimumAge: "Bestimmt durch die Tollwutregeln des Landes, aus dem Sie ausreisen.",
      },
    },
  },
  {
    code: "FR",
    name: "Frankreich",
    eu: true,
    sources: [source("Ministère de l'Agriculture", "https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie", "France", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Keine routinemäßige Quarantäne für Hunde, die die Einreisebestimmungen erfüllen.",
        minimumAge: "Nicht möglich, bis die Tollwutimpfung gültig ist.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Keine routinemäßige Quarantäne für konforme Reisen.",
        minimumAge: "Bestimmt durch die Tollwutregeln des Landes, aus dem Sie ausreisen.",
      },
    },
  },
  {
    code: "ES",
    name: "Spanien",
    eu: true,
    sources: [source("Ministerio de Agricultura, Pesca y Alimentación", "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/animales-compania/", "Spain", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Keine routinemäßige Quarantäne für Hunde, die die Einreisebestimmungen erfüllen.",
        minimumAge: "Nicht möglich, bis die Tollwutimpfung gültig ist.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Keine routinemäßige Quarantäne für konforme Reisen.",
        minimumAge: "Bestimmt durch die Tollwutregeln des Landes, aus dem Sie ausreisen.",
      },
    },
  },
  {
    code: "NL",
    name: "Niederlande",
    eu: true,
    sources: [source("NVWA – Niederländische Behörde für Lebens- und Verbraucherproduktsicherheit", "https://english.nvwa.nl/topics/travelling-with-pets", "Netherlands", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Keine routinemäßige Quarantäne für Hunde, die die Einreisebestimmungen erfüllen.",
        minimumAge: "Nicht möglich, bis die Tollwutimpfung gültig ist.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Keine routinemäßige Quarantäne für konforme Reisen.",
        minimumAge: "Bestimmt durch die Tollwutregeln des Landes, aus dem Sie ausreisen.",
      },
    },
  },
  {
    code: "IE",
    name: "Irland",
    eu: true,
    sources: [source("Department of Agriculture, Food and the Marine", "https://www.gov.ie/en/organisation/department-of-agriculture-food-and-the-marine/", "Ireland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine: "Keine routinemäßige Quarantäne für Hunde, die die Einreisebestimmungen erfüllen.",
        minimumAge: "Nicht möglich, bis die Tollwutimpfung gültig ist.",
        notes: ["Irland ist eines der Länder, das eine Bandwurmbehandlung vor der Einreise innerhalb eines bestimmten Zeitfensters vorschreibt."],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine: "Keine routinemäßige Quarantäne für konforme Reisen.",
        minimumAge: "Bestimmt durch die Tollwutregeln des Landes, aus dem Sie ausreisen.",
      },
    },
  },
  {
    code: "GB",
    name: "Vereinigtes Königreich",
    eu: false,
    sources: [source("GOV.UK – Ihren Hund nach Großbritannien bringen", "https://www.gov.uk/bring-pet-to-great-britain", "United Kingdom", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          {
            id: "microchip",
            level: "required" as const,
            title: "Mikrochip",
            detail: "Ein Mikrochip nach ISO-Standard, implantiert vor der Tollwutimpfung.",
          },
          {
            id: "rabies",
            level: "required" as const,
            title: "Gültige Tollwutimpfung",
            detail: "Verabreicht nach dem Mikrochip und am Reisetag noch gültig, mit einer Wartezeit nach einer Erstimpfung.",
          },
          {
            id: "document",
            level: "required" as const,
            title: "Ein akzeptiertes Reisedokument",
            detail:
              "Ein EU-Heimtierausweis, ausgestellt in einem EU-Land, oder eine Gesundheitsbescheinigung für Haustiere für Großbritannien. Welches Dokument zutrifft, hängt davon ab, wo es ausgestellt wurde – prüfen Sie die offiziellen Richtlinien für Ihre Situation.",
          },
          tapeworm,
          {
            id: "route",
            level: "required" as const,
            title: "Eine genehmigte Route und ein genehmigter Beförderer",
            detail: "Hunde müssen mit einem genehmigten Transportunternehmen auf einer genehmigten Route reisen, es sei denn, Sie reisen aus Irland.",
          },
        ],
        quarantine:
          "Es gibt keine routinemäßige Quarantäne für Hunde, die alle Anforderungen erfüllen. Hunde, die ohne gültige Dokumente ankommen, können auf Kosten des Besitzers in Quarantäne genommen werden – eine reale Möglichkeit, keine Formalität.",
        minimumAge: "Reisen ist erst möglich, wenn die Tollwutimpfung gültig ist. Erkundigen Sie sich auf GOV.UK nach dem aktuellen Alter und der Wartezeit.",
      },
    },
  },
  {
    code: "US",
    name: "Vereinigte Staaten",
    eu: false,
    sources: [source("CDC – Einen Hund in die Vereinigten Staaten bringen", "https://www.cdc.gov/importation/dogs/", "United States", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          { id: "microchip", level: "required" as const, title: "Mikrochip", detail: "Ein Mikrochip nach ISO-Standard, auf den eingereichten Formularen vermerkt." },
          { id: "age", level: "required" as const, title: "Mindestalter", detail: "Die CDC legt ein Mindestalter für Hunde fest, die in die Vereinigten Staaten einreisen. Prüfen Sie die aktuelle Zahl, bevor Sie buchen." },
          { id: "form", level: "required" as const, title: "CDC Einreiseformular", detail: "Ein Online-CDC-Hunde-Einreiseformular ist erforderlich, das vor der Reise eingereicht werden muss und dessen Bestätigung Sie mit sich führen müssen." },
          { id: "rabies", level: "required" as const, title: "Tollwut-Dokumentation", detail: "Was erforderlich ist, hängt davon ab, wo sich der Hund in den letzten sechs Monaten aufgehalten hat. Die CDC-Seite führt Sie durch jeden Fall." },
        ],
        quarantine:
          "Keine routinemäßige Quarantäne für Hunde, die die Anforderungen erfüllen. Hunde, die ohne die richtigen Papiere ankommen, können die Einreise verweigert und auf Kosten des Besitzers zurückgeschickt werden.",
        minimumAge: "Ein Mindestalter gilt. Prüfen Sie die CDC-Seite für die aktuelle Regel.",
      },
    },
  },
];

export const transportModes = [
  { id: "car", label: "Auto", note: "Sie bestimmen das Tempo und die Pausen. Prüfen Sie die Regeln für Fähren oder Tunnel, wenn die Route Wasser überquert." },
  { id: "train", label: "Zug", note: "Die Regeln des Betreibers gelten zusätzlich zu den Länderanforderungen und unterscheiden sich je nach Strecke." },
  { id: "plane", label: "Flugzeug", note: "Die Regeln der Fluggesellschaften sind von den Einreisebestimmungen getrennt. Buchen Sie den Hund frühzeitig." },
  { id: "ferry", label: "Fähre", note: "Regeln für Zwinger, Kabinen und Deckbereiche variieren je nach Unternehmen und Überfahrt." },
  { id: "bus", label: "Bus", note: "Viele Fernbusunternehmen nehmen keine Hunde mit. Bestätigen Sie dies, bevor Sie buchen." },
];

export const travelTimeline = [
  { when: "8 Wochen vorher", what: "Prüfen Sie die Regeln für Ihre genaue Route, in beide Richtungen." },
  { when: "6 Wochen vorher", what: "Überprüfen Sie den Mikrochip- und Tollwutimpfstatus mit Ihrem Tierarzt." },
  { when: "4 Wochen vorher", what: "Lassen Sie alle Dokumente beginnen – manche dauern länger als gedacht." },
  { when: "2 Wochen vorher", what: "Bestätigen Sie die eigenen Regeln des Transportunternehmens und buchen Sie den Hund ein." },
  { when: "1 Woche vorher", what: "Packen Sie die Reiseunterlagen und suchen Sie einen Tierarzt am Zielort." },
  { when: "Tag vorher", what: "Endgültige Überprüfung der Dokumente und ein langer Spaziergang." },
  { when: "Reisetag", what: "Dokumente, Hund, Wasser, Leine und etwas Vertrautes." },
];
