import type { Country } from "./countries";

const euBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Puce électronique",
    detail:
      "Le chien doit être identifié par une puce électronique conforme aux normes ISO, implantée avant la vaccination contre la rage. Une puce implantée après rend la vaccination caduque et doit être refaite.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Vaccination antirabique valide",
    detail:
      "Effectuée après l'implantation de la puce, par un vétérinaire agréé, et toujours valide le jour du voyage. Une première vaccination entraîne une période d'attente avant le départ ; les rappels effectués avant l'expiration du précédent sont généralement considérés comme continus.",
  },
  {
    id: "passport",
    level: "required" as const,
    title: "Passeport européen pour animaux de compagnie",
    detail:
      "Délivré par un vétérinaire agréé dans un pays de l'UE ou de l'EEE. Une carte de vaccination nationale n'est pas le même document et n'est pas acceptée en remplacement.",
  },
  {
    id: "owner",
    level: "required" as const,
    title: "Voyage avec le propriétaire",
    detail:
      "Les déplacements non commerciaux couvrent jusqu'à cinq animaux voyageant avec leur propriétaire ou une personne autorisée. Au-delà, ou pour un voyage commercial, les règles commerciales s'appliquent.",
  },
];

const euNonEuBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Puce électronique",
    detail: "Une puce électronique conforme aux normes ISO, implantée avant la vaccination antirabique.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Vaccination antirabique valide",
    detail: "Effectuée après l'implantation de la puce et toujours valide le jour du voyage, avec une période d'attente après une première vaccination.",
  },
  {
    id: "certificate",
    level: "required" as const,
    title: "Certificat sanitaire animal",
    detail:
      "Les voyages depuis un pays non membre de l'UE nécessitent normalement un certificat sanitaire animal officiel délivré par un vétérinaire officiel, plutôt qu'un passeport européen pour animaux de compagnie. Les exigences varient selon le pays de départ.",
  },
  {
    id: "titration",
    level: "required" as const,
    title: "Test d'anticorps antirabiques — pour certains pays uniquement",
    detail:
      "Les chiens arrivant de certains pays non répertoriés nécessitent un test de titrage d'anticorps antirabiques, effectué par un laboratoire agréé, avec une période d'attente entre le prélèvement et le voyage. L'application dépend du pays exact de départ — vérifiez la source officielle avant de réserver quoi que ce soit.",
  },
  {
    id: "entry-point",
    level: "required" as const,
    title: "Point d'entrée désigné pour les voyageurs",
    detail:
      "Les arrivées de l'extérieur de l'UE doivent généralement passer par un point d'entrée désigné, où les documents peuvent être contrôlés.",
  },
];

const tapeworm = {
  id: "tapeworm",
  level: "required" as const,
  title: "Traitement contre le ténia",
  detail:
    "Traitement contre Echinococcus multilocularis, administré par un vétérinaire et enregistré dans le passeport ou le certificat, dans un délai défini avant l'arrivée. Ceci s'applique aux chiens entrant dans un petit nombre de pays indemnes de ce parasite.",
};

const source = (
  name: string,
  url: string,
  country: string,
  lastChecked: string,
  category = "Voyage avec animaux",
) => ({ name, url, country, lastChecked, category });

export const countries: Country[] = [
  {
    code: "NO",
    name: "Norvège",
    eu: true,
    sources: [
      source("Mattilsynet — Autorité norvégienne de sécurité alimentaire", "https://www.mattilsynet.no/en/animals/travelling-with-pets", "Norvège", "2026-08-15"),
    ],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine:
          "Il n'y a pas de quarantaine systématique pour les chiens qui remplissent toutes les conditions d'entrée. Si des documents ou des traitements sont manquants à l'arrivée, les autorités peuvent placer le chien sous contrôle officiel — ce qui n'est pas la même chose qu'une période de quarantaine standard.",
        minimumAge:
          "Un chien ne peut pas voyager tant que la vaccination antirabique n'est pas valide, ce qui en pratique exclut les très jeunes chiots. Vérifiez l'âge minimum actuel et la période d'attente auprès de Mattilsynet avant de planifier le voyage.",
        notes: [
          "La Norvège est l'un des pays qui exigent un traitement contre le ténia. La fenêtre de temps est stricte, alors réservez le rendez-vous chez le vétérinaire avant de réserver le ferry.",
        ],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine:
          "Pas de quarantaine systématique pour les voyages conformes. Les arrivées non conformes peuvent se voir refuser l'entrée ou être placées sous contrôle officiel.",
        minimumAge: "Dépend des règles de vaccination antirabique du pays de départ.",
      },
    },
  },
  {
    code: "SE",
    name: "Suède",
    eu: true,
    sources: [source("Jordbruksverket — Office suédois de l'agriculture", "https://jordbruksverket.se/languages/english/travelling-with-pets", "Suède", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Pas de quarantaine systématique pour les chiens qui remplissent les conditions d'entrée.",
        minimumAge: "Le voyage n'est pas possible tant que la vaccination antirabique n'est pas valide. Vérifiez l'âge et la période d'attente actuels.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Pas de quarantaine systématique pour les voyages conformes ; les arrivées non conformes sont gérées par les autorités à la frontière.",
        minimumAge: "Déterminé par les règles antirabiques du pays de départ.",
      },
    },
  },
  {
    code: "DK",
    name: "Danemark",
    eu: true,
    sources: [source("Fødevarestyrelsen — Administration danoise vétérinaire et alimentaire", "https://www.foedevarestyrelsen.dk/english", "Danemark", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Pas de quarantaine systématique pour les chiens qui remplissent les conditions d'entrée.",
        minimumAge: "Impossible tant que la vaccination antirabique n'est pas valide.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Pas de quarantaine systématique pour les voyages conformes.",
        minimumAge: "Déterminé par les règles antirabiques du pays de départ.",
      },
    },
  },
  {
    code: "DE",
    name: "Allemagne",
    eu: true,
    sources: [source("Bundesministerium für Ernährung und Landwirtschaft", "https://www.bmel.de/EN/topics/animals/animal-health/travelling-with-pets.html", "Allemagne", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Pas de quarantaine systématique pour les chiens qui remplissent les conditions d'entrée.",
        minimumAge: "Impossible tant que la vaccination antirabique n'est pas valide.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Pas de quarantaine systématique pour les voyages conformes.",
        minimumAge: "Déterminé par les règles antirabiques du pays de départ.",
      },
    },
  },
  {
    code: "PL",
    name: "Pologne",
    eu: true,
    sources: [source("Główny Inspektorat Weterynarii — Inspection vétérinaire générale", "https://www.wetgiw.gov.pl/handel-eksport-import/przemieszczanie-w-celach-niehandlowych", "Pologne", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Pas de quarantaine systématique pour les chiens qui remplissent les conditions d'entrée.",
        minimumAge: "Impossible tant que la vaccination antirabique n'est pas valide.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Pas de quarantaine systématique pour les voyages conformes.",
        minimumAge: "Déterminé par les règles antirabiques du pays de départ.",
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
        quarantine: "Pas de quarantaine systématique pour les chiens qui remplissent les conditions d'entrée.",
        minimumAge: "Impossible tant que la vaccination antirabique n'est pas valide.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Pas de quarantaine systématique pour les voyages conformes.",
        minimumAge: "Déterminé par les règles antirabiques du pays de départ.",
      },
    },
  },
  {
    code: "ES",
    name: "Espagne",
    eu: true,
    sources: [source("Ministerio de Agricultura, Pesca y Alimentación", "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/animales-compania/", "Espagne", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Pas de quarantaine systématique pour les chiens qui remplissent les conditions d'entrée.",
        minimumAge: "Impossible tant que la vaccination antirabique n'est pas valide.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Pas de quarantaine systématique pour les voyages conformes.",
        minimumAge: "Déterminé par les règles antirabiques du pays de départ.",
      },
    },
  },
  {
    code: "NL",
    name: "Pays-Bas",
    eu: true,
    sources: [source("NVWA — Autorité néerlandaise de sécurité alimentaire et des produits de consommation", "https://english.nvwa.nl/topics/travelling-with-pets", "Pays-Bas", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Pas de quarantaine systématique pour les chiens qui remplissent les conditions d'entrée.",
        minimumAge: "Impossible tant que la vaccination antirabique n'est pas valide.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Pas de quarantaine systématique pour les voyages conformes.",
        minimumAge: "Déterminé par les règles antirabiques du pays de départ.",
      },
    },
  },
  {
    code: "IE",
    name: "Irlande",
    eu: true,
    sources: [source("Department of Agriculture, Food and the Marine", "https://www.gov.ie/en/organisation/department-of-agriculture-food-and-the-marine/", "Irlande", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine: "Pas de quarantaine systématique pour les chiens qui remplissent les conditions d'entrée.",
        minimumAge: "Impossible tant que la vaccination antirabique n'est pas valide.",
        notes: ["L'Irlande est l'un des pays qui exigent un traitement contre le ténia avant l'arrivée, dans un délai imparti."],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine: "Pas de quarantaine systématique pour les voyages conformes.",
        minimumAge: "Déterminé par les règles antirabiques du pays de départ.",
      },
    },
  },
  {
    code: "GB",
    name: "Royaume-Uni",
    eu: false,
    sources: [source("GOV.UK — Faire venir votre chien au Royaume-Uni", "https://www.gov.uk/bring-pet-to-great-britain", "Royaume-Uni", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          {
            id: "microchip",
            level: "required" as const,
            title: "Puce électronique",
            detail: "Une puce électronique conforme aux normes ISO, implantée avant la vaccination antirabique.",
          },
          {
            id: "rabies",
            level: "required" as const,
            title: "Vaccination antirabique valide",
            detail: "Effectuée après l'implantation de la puce et toujours valide le jour du voyage, avec une période d'attente après une première vaccination.",
          },
          {
            id: "document",
            level: "required" as const,
            title: "Un document de voyage accepté",
            detail:
              "Un passeport européen pour animaux de compagnie délivré dans un pays de l'UE, ou un certificat de santé pour animaux de compagnie de Grande-Bretagne. Lequel s'applique dépend de l'endroit où le document a été délivré — vérifiez les directives officielles pour votre situation.",
          },
          tapeworm,
          {
            id: "route",
            level: "required" as const,
            title: "Un itinéraire et un transporteur approuvés",
            detail: "Les chiens doivent voyager avec une compagnie de transport approuvée sur un itinéraire approuvé, sauf si vous voyagez depuis l'Irlande.",
          },
        ],
        quarantine:
          "Il n'y a pas de quarantaine systématique pour les chiens qui remplissent toutes les conditions. Les chiens arrivant sans documents valides peuvent être placés en quarantaine aux frais du propriétaire — une possibilité réelle, pas une formalité.",
        minimumAge: "Le voyage n'est pas possible tant que la vaccination antirabique n'est pas valide. Vérifiez l'âge et la période d'attente actuels sur GOV.UK.",
      },
    },
  },
  {
    code: "US",
    name: "États-Unis",
    eu: false,
    sources: [source("CDC — Faire venir un chien aux États-Unis", "https://www.cdc.gov/importation/dogs/", "États-Unis", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          { id: "microchip", level: "required" as const, title: "Puce électronique", detail: "Une puce électronique conforme aux normes ISO, enregistrée sur les formulaires que vous soumettez." },
          { id: "age", level: "required" as const, title: "Âge minimum", detail: "Le CDC applique un âge minimum pour les chiens entrant aux États-Unis. Vérifiez le chiffre actuel avant de réserver." },
          { id: "form", level: "required" as const, title: "Formulaire d'importation CDC", detail: "Un formulaire d'importation de chien en ligne du CDC est requis, soumis avant le voyage, avec le reçu à conserver." },
          { id: "rabies", level: "required" as const, title: "Documentation antirabique", detail: "Ce qui est requis dépend de l'endroit où le chien a été au cours des six derniers mois. La page du CDC détaille chaque cas." },
        ],
        quarantine:
          "Pas de quarantaine systématique pour les chiens qui remplissent les conditions. Les chiens arrivant sans les bons documents peuvent se voir refuser l'entrée et être renvoyés aux frais du propriétaire.",
        minimumAge: "Un âge minimum s'applique. Consultez la page du CDC pour la règle actuelle.",
      },
    },
  },
];

export const transportModes = [
  { id: "car", label: "Voiture", note: "Vous contrôlez le rythme et les pauses. Vérifiez les règles du ferry ou du tunnel si l'itinéraire traverse l'eau." },
  { id: "train", label: "Train", note: "Les règles de l'opérateur s'ajoutent aux exigences de chaque pays, et elles varient selon la ligne." },
  { id: "plane", label: "Avion", note: "Les règles des compagnies aériennes sont distinctes des exigences d'entrée. Réservez le chien tôt." },
  { id: "ferry", label: "Ferry", note: "Les règles concernant les chenils, les cabines et le pont varient selon la compagnie et la traversée." },
  { id: "bus", label: "Bus", note: "De nombreux opérateurs de longue distance n'acceptent pas les chiens. Confirmez avant de réserver." },
];

export const travelTimeline = [
  { when: "8 semaines avant", what: "Vérifiez les règles pour votre itinéraire exact, dans les deux sens." },
  { when: "6 semaines avant", what: "Vérifiez le statut de la puce électronique et de la vaccination antirabique avec votre vétérinaire." },
  { when: "4 semaines avant", what: "Commencez les démarches pour les documents — certains prennent plus de temps que prévu." },
  { when: "2 semaines avant", what: "Confirmez les propres règles de la compagnie de transport et réservez le chien." },
  { when: "1 semaine avant", what: "Préparez la trousse de voyage et cherchez un vétérinaire à votre destination." },
  { when: "La veille", what: "Dernière vérification des documents, et une bonne longue promenade." },
  { when: "Jour du voyage", what: "Documents, chien, eau, laisse, et quelque chose de familier." },
];
