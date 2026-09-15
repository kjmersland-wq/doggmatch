import { breeds, type Breed, type BreedTraits } from "@/data/breeds";
import type { CopyMap, Locale } from "@/i18n";

/**
 * High-intent lifestyle guides. Each guide is honest editorial content plus a
 * shortlist computed directly from the same trait data the matching engine
 * uses — so what the guide recommends is exactly what the quiz would.
 *
 * English is the source language; other locales fall back to English until
 * translated (pick() in src/i18n handles the fallback).
 */

export interface GuideMetric {
  key: keyof BreedTraits;
  label: string;
}

export interface GuideSection {
  title: string;
  paragraphs: string[];
}

/** Everything a reader sees on a guide page, in one language. */
export interface GuideCopy {
  eyebrow: string;
  h1: string;
  intro: string;
  howChosenTitle: string;
  howChosen: string[];
  listTitle?: string;
  listIntro?: string;
  metrics: GuideMetric[];
  readProfile: string;
  tradeoffNote?: string;
  sections?: GuideSection[];
  quizTitle: string;
  quizBody: string;
  quizCta: string;
  compareCta: string;
  levelLabels: string[];
  /** Column headings for the cost table (cost guide only). */
  costTable?: { example: string; breed: string; yearly: string };
}

export interface GuideSeo {
  title: string;
  description: string;
}

/**
 * Every translatable value sits in a `{ en: ... }` map, so a new language is
 * added by dropping a sibling key beside the English one — no code changes,
 * and English keeps showing until the translation exists.
 */
export interface LifestyleGuideConfig {
  id: string;
  path: string;
  seo: { en: GuideSeo } & Partial<Record<Exclude<Locale, "en">, GuideSeo>>;
  copy: CopyMap<GuideCopy>;
  /** Deterministic shortlist from real trait data. */
  shortlist?: Breed[];
  /** One honest line per shortlisted breed, keyed by breed id. */
  reasons?: CopyMap<Record<string, string>>;
  /** Example breeds with real yearly cost ranges (cost guide). */
  costExamples?: { breed: Breed; sizeLabel: CopyMap<string> }[];
}

const levelLabels = ["Very low", "Low", "Moderate", "High", "Very high"];

const quizBlock = {
  quizTitle: "Your week is the other half of the match",
  quizBody:
    "A shortlist is a starting point, not an answer. The Find My Dog quiz weighs your home, your time, your experience and your week against every breed's traits — and shows you the reasoning behind each score, so you can judge it for yourself.",
  quizCta: "Take the Find My Dog quiz",
  compareCta: "Compare breeds side by side",
  levelLabels,
};

function byIds(ids: string[]): Breed[] {
  return ids
    .map((id) => breeds.find((b) => b.id === id))
    .filter((b): b is Breed => Boolean(b));
}

/* ------------------------------------------------------------------ */
/* 1. Apartment living                                                 */
/* ------------------------------------------------------------------ */

export const APARTMENT_GUIDE: LifestyleGuideConfig = {
  id: "apartment-dogs",
  path: "/best-apartment-dogs",
  seo: { en: {
    title: "Best dog breeds for apartment living | DoggMatch",
    description:
      "The best dogs for flats, chosen for calm indoor manners and low barking rather than small size — with the honest trade-offs of each breed.",
  } ,
  no: {
    title: "Beste hunderaser for leilighetsliv | DoggMatch",
    description:
      "De beste hundene for leiligheter, valgt for rolig innendørs oppførsel og lite bjeffing snarere enn liten størrelse — med ærlige kompromisser for hver rase.",
  },
pl: {
    title: "Najlepsze rasy psów do życia w mieszkaniu | DoggMatch",
    description:
      "Najlepsze psy do mieszkań, wybrane ze względu na spokojne zachowanie w domu i niskie szczekanie, a nie mały rozmiar — z uczciwymi wadami każdej rasy.",
  },
dk: {
    title: "Bedste hunderacer til lejlighedsliv | DoggMatch",
    description:
      "De bedste hunde til lejligheder, valgt for rolig indendørs opførsel og lav gøen snarere end lille størrelse — med de ærlige kompromiser for hver race.",
  },
se: {
    title: "Bästa hundraserna för lägenhetsliv | DoggMatch",
    description:
      "De bästa hundarna för lägenheter, valda för lugnt inomhusbeteende och låg skällning snarare än liten storlek — med ärliga kompromisser för varje ras.",
  },
fi: {
    title: "Parhaat koirarodut kerrostaloasumiseen | DoggMatch",
    description:
      "Parhaat koirat kerrostaloihin, valittu rauhallisen sisäkäyttäytymisen ja vähäisen haukkumisen perusteella, ei pienen koon perusteella — rehellisin kompromissein jokaiselle rodulle.",
  },
de: {
    title: "Beste Hunderassen für die Wohnungshaltung | DoggMatch",
    description:
      "Die besten Hunde für Wohnungen, ausgewählt wegen ruhigem Verhalten drinnen und wenig Bellen statt kleiner Größe — mit den ehrlichen Kompromissen jeder Rasse.",
  },
fr: {
    title: "Meilleures races de chiens pour la vie en appartement | DoggMatch",
    description:
      "Les meilleurs chiens pour les appartements, choisis pour leur calme à l'intérieur et leur faible aboiement plutôt que pour leur petite taille — avec les compromis honnêtes de chaque race.",
  },
nl: {
    title: "Beste hondenrassen voor appartementen | DoggMatch",
    description:
      "De beste honden voor appartementen, gekozen vanwege hun kalme gedrag binnenshuis en weinig geblaf in plaats van hun kleine formaat — met de eerlijke nadelen van elk ras.",
  }
},
  copy: { en: {
    eyebrow: "Choosing a dog",
    h1: "The best dog breeds for apartment living",
    intro:
      "A small dog is not automatically a good flat dog, and a big dog is not automatically a bad one. What actually decides it is noise, energy indoors, and how the dog copes with neighbours, stairs and time alone. Here's our honest shortlist — and the trade-offs that come with each name on it.",
    howChosenTitle: "How we chose",
    howChosen: [
      "We started from the same trait data the matching engine uses: apartment suitability, barking, exercise needs and alone tolerance.",
      "Barking weighed heaviest. In a block of flats, a vocal dog is the thing that makes neighbours knock — whatever its size.",
      "No breed is 'maintenance-free'. Every dog on this list still needs two proper walks a day and company most of the time.",
    ],
    listTitle: "Our apartment shortlist",
    listIntro:
      "Eight breeds that consistently suit flat living in our data — calm indoors, moderate voice, realistic about stairs and lifts.",
    metrics: [
      { key: "apartmentSuitability", label: "Flat living" },
      { key: "barking", label: "Barking" },
      { key: "exerciseNeeds", label: "Exercise needs" },
      { key: "aloneTolerance", label: "Time alone" },
    ],
    readProfile: "Read the full profile",
    tradeoffNote:
      "Two honest warnings. Small companion breeds often struggle with being left alone — flat or house makes no difference to that. And a shared stairwell means every toilet trip is a small expedition, in every kind of weather, for the next twelve years.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  } ,
  no: {
    eyebrow: "Velge hund",
    h1: "De beste hunderasene for leilighetsliv",
    intro:
      "En liten hund er ikke automatisk en god leilighetshund, og en stor hund er ikke automatisk en dårlig en. Det som faktisk avgjør det, er støy, energinivå innendørs, og hvordan hunden takler naboer, trapper og tid alene. Her er vår ærlige toppliste – og kompromissene som følger med hvert navn på den.",
    howChosenTitle: "Hvordan vi valgte",
    howChosen: [
      "Vi startet med de samme egenskapene som matchingmotoren bruker: egnethet for leilighet, bjeffing, treningsbehov og toleranse for å være alene.",
      "Bjeffing veide tyngst. I en bygård er en vokal hund det som får naboene til å banke på – uansett størrelse.",
      "Ingen rase er 'vedlikeholdsfri'. Hver hund på denne listen trenger fortsatt to skikkelige turer om dagen og selskap mesteparten av tiden.",
    ],
    listTitle: "Vår toppliste for leilighet",
    listIntro:
      "Åtte raser som konsekvent passer for leilighetsliv i våre data – rolige innendørs, moderat stemmebruk, realistiske med trapper og heiser.",
    metrics: [
      { key: "apartmentSuitability", label: "Leilighetsliv" },
      { key: "barking", label: "Bjeffing" },
      { key: "exerciseNeeds", label: "Treningsbehov" },
      { key: "aloneTolerance", label: "Tid alene" },
    ],
    readProfile: "Les hele profilen",
    tradeoffNote:
      "To ærlige advarsler. Små selskapshunder sliter ofte med å bli forlatt alene – leilighet eller hus spiller ingen rolle for det. Og en felles trappeoppgang betyr at hver toalettur er en liten ekspedisjon, i all slags vær, de neste tolv årene.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
pl: {
    eyebrow: "Wybór psa",
    h1: "Najlepsze rasy psów do mieszkania w bloku",
    intro:
      "Mały pies nie jest automatycznie dobrym psem do mieszkania, a duży pies nie jest automatycznie złym. To, co faktycznie o tym decyduje, to hałas, poziom energii w domu i to, jak pies radzi sobie z sąsiadami, schodami i samotnością. Oto nasza szczera lista – i kompromisy, które wiążą się z każdą pozycją na niej.",
    howChosenTitle: "Jak wybieraliśmy",
    howChosen: [
      "Zaczęliśmy od tych samych danych o cechach, których używa silnik dopasowujący: przydatność do mieszkania, szczekanie, potrzeby ruchowe i tolerancja na samotność.",
      "Szczekanie miało największą wagę. W bloku, pies głośno szczekający to coś, co sprawia, że sąsiedzi pukają do drzwi – niezależnie od jego rozmiaru.",
      "Żadna rasa nie jest 'bezobsługowa'. Każdy pies na tej liście nadal potrzebuje dwóch porządnych spacerów dziennie i towarzystwa przez większość czasu.",
    ],
    listTitle: "Nasza lista do mieszkania w bloku",
    listIntro:
      "Osiem ras, które konsekwentnie nadają się do życia w mieszkaniu według naszych danych – spokojne w domu, umiarkowanie szczekające, realistyczne w kwestii schodów i wind.",
    metrics: [
      { key: "apartmentSuitability", label: "Życie w mieszkaniu" },
      { key: "barking", label: "Szczekanie" },
      { key: "exerciseNeeds", label: "Potrzeby ruchowe" },
      { key: "aloneTolerance", label: "Czas w samotności" },
    ],
    readProfile: "Przeczytaj pełny profil",
    tradeoffNote:
      "Dwa szczere ostrzeżenia. Małe rasy towarzyszące często mają problem z zostawaniem same – mieszkanie czy dom nie mają tu znaczenia. A wspólna klatka schodowa oznacza, że każda wizyta w toalecie to mała wyprawa, w każdą pogodę, przez następne dwanaście lat.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
dk: {
    eyebrow: "Valg af hund",
    h1: "De bedste hunderacer til lejlighedsliv",
    intro:
      "En lille hund er ikke automatisk en god lejlighedshund, og en stor hund er ikke automatisk en dårlig en. Det, der reelt afgør det, er støj, energiniveau indendørs, og hvordan hunden klarer naboer, trapper og tid alene. Her er vores ærlige udvalg – og de kompromiser, der følger med hvert navn på listen.",
    howChosenTitle: "Sådan valgte vi",
    howChosen: [
      "Vi startede med de samme trækdata, som matchende motor bruger: egnethed til lejlighed, gøen, motionsbehov og alene-tolerance.",
      "Gøen vejede tungest. I en etageejendom er en vokal hund det, der får naboerne til at banke på – uanset dens størrelse.",
      "Ingen race er 'vedligeholdelsesfri'. Hver hund på denne liste har stadig brug for to ordentlige gåture om dagen og selskab det meste af tiden.",
    ],
    listTitle: "Vores lejligheds-udvalg",
    listIntro:
      "Otte racer, der konsekvent passer til lejlighedsliv i vores data – rolige indendørs, moderat stemmebrug, realistiske med trapper og elevatorer.",
    metrics: [
      { key: "apartmentSuitability", label: "Lejlighedsliv" },
      { key: "barking", label: "Gøen" },
      { key: "exerciseNeeds", label: "Motionsbehov" },
      { key: "aloneTolerance", label: "Tid alene" },
    ],
    readProfile: "Læs hele profilen",
    tradeoffNote:
      "To ærlige advarsler. Små selskabshunde har ofte svært ved at blive ladt alene – lejlighed eller hus gør ingen forskel for det. Og en fælles trappe betyder, at hver toiletbesøg er en lille ekspedition, i al slags vejr, de næste tolv år.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
se: {
    eyebrow: "Välja hund",
    h1: "De bästa hundraserna för lägenhetsliv",
    intro:
      "En liten hund är inte automatiskt en bra lägenhetshund, och en stor hund är inte automatiskt en dålig. Det som faktiskt avgör det är ljudnivå, energinivå inomhus och hur hunden hanterar grannar, trappor och ensamhet. Här är vår ärliga topplista – och de kompromisser som följer med varje namn på den.",
    howChosenTitle: "Hur vi valde",
    howChosen: [
      "Vi utgick från samma egenskapsdata som matchningsmotorn använder: lämplighet för lägenhet, skällande, motionsbehov och ensamhetstolerans.",
      "Skällande vägde tyngst. I ett flerfamiljshus är en högljudd hund det som får grannarna att knacka på – oavsett storlek.",
      "Ingen ras är 'underhållsfri'. Varje hund på den här listan behöver fortfarande två ordentliga promenader om dagen och sällskap större delen av tiden.",
    ],
    listTitle: "Vår topplista för lägenhet",
    listIntro:
      "Åtta raser som konsekvent passar för lägenhetsliv enligt våra data – lugna inomhus, måttlig röst, realistiska med trappor och hissar.",
    metrics: [
      { key: "apartmentSuitability", label: "Lägenhetsliv" },
      { key: "barking", label: "Skällande" },
      { key: "exerciseNeeds", label: "Motionsbehov" },
      { key: "aloneTolerance", label: "Tid ensam" },
    ],
    readProfile: "Läs hela profilen",
    tradeoffNote:
      "Två ärliga varningar. Små sällskapshundar har ofta svårt att bli lämnade ensamma – lägenhet eller hus spelar ingen roll för det. Och en gemensam trappuppgång innebär att varje toalettbesök blir en liten expedition, i alla väder, de kommande tolv åren.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
fi: {
    eyebrow: "Koiran valinta",
    h1: "Parhaat koirarodut kerrostaloasumiseen",
    intro:
      "Pieni koira ei automaattisesti ole hyvä kerrostalokoira, eikä iso koira automaattisesti huono. Todellisuudessa ratkaisevat melu, sisäenergian taso ja se, miten koira selviytyy naapureista, portaista ja yksinolosta. Tässä rehellinen listamme – ja kompromissit, jotka liittyvät jokaiseen listan nimeen.",
    howChosenTitle: "Miten valitsimme",
    howChosen: [
      "Aloitimme samoista ominaisuustiedoista, joita sovitusmoottori käyttää: sopivuus kerrostaloon, haukkuherkkyys, liikunnantarve ja yksinolo-sietokyky.",
      "Haukkuherkkyys painoi eniten. Kerrostalossa äänekäs koira saa naapurit koputtamaan oveen – koosta riippumatta.",
      "Mikään rotu ei ole 'huoltovapaa'. Jokainen listan koira tarvitsee silti kaksi kunnollista lenkkiä päivässä ja seuraa suurimman osan ajasta.",
    ],
    listTitle: "Kerrostaloasumiseen sopivat rodut",
    listIntro:
      "Kahdeksan rotua, jotka datamme mukaan sopivat johdonmukaisesti kerrostaloasumiseen – rauhallisia sisällä, kohtuullisen äänekkäitä, realistisia portaiden ja hissien suhteen.",
    metrics: [
      { key: "apartmentSuitability", label: "Kerrostaloasuminen" },
      { key: "barking", label: "Haukkuherkkyys" },
      { key: "exerciseNeeds", label: "Liikunnantarve" },
      { key: "aloneTolerance", label: "Yksinolo" },
    ],
    readProfile: "Lue koko profiili",
    tradeoffNote:
      "Kaksi rehellistä varoitusta. Pienet seurakoirat kärsivät usein yksinolosta – kerrostalo tai omakotitalo ei vaikuta tähän. Ja yhteinen portaikko tarkoittaa, että jokainen vessareissu on pieni retki, säällä kuin säällä, seuraavat kaksitoista vuotta.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
de: {
    eyebrow: "Hundauswahl",
    h1: "Die besten Hunderassen für das Leben in einer Wohnung",
    intro:
      "Ein kleiner Hund ist nicht automatisch ein guter Wohnungshund, und ein großer Hund nicht automatisch ein schlechter. Was wirklich zählt, sind Lärm, Energielevel im Haus und wie der Hund mit Nachbarn, Treppen und Alleinsein umgeht. Hier ist unsere ehrliche Auswahl – und die Kompromisse, die mit jedem Namen auf der Liste einhergehen.",
    howChosenTitle: "Wie wir ausgewählt haben",
    howChosen: [
      "Wir sind von denselben Eigenschaftsdaten ausgegangen, die auch die Matching-Engine verwendet: Eignung für Wohnungen, Bellen, Bewegungsbedarf und Alleinsein-Toleranz.",
      "Bellen wog am schwersten. In einem Mehrfamilienhaus ist ein lauter Hund das, was Nachbarn zum Klopfen bringt – unabhängig von seiner Größe.",
      "Keine Rasse ist 'wartungsfrei'. Jeder Hund auf dieser Liste benötigt immer noch zwei ordentliche Spaziergänge pro Tag und die meiste Zeit Gesellschaft.",
    ],
    listTitle: "Unsere Top-Liste für Wohnungen",
    listIntro:
      "Acht Rassen, die laut unseren Daten durchweg für das Leben in einer Wohnung geeignet sind – ruhig im Haus, mäßige Lautstärke, realistisch in Bezug auf Treppen und Aufzüge.",
    metrics: [
      { key: "apartmentSuitability", label: "Wohnungsleben" },
      { key: "barking", label: "Bellen" },
      { key: "exerciseNeeds", label: "Bewegungsbedarf" },
      { key: "aloneTolerance", label: "Alleinsein" },
    ],
    readProfile: "Vollständiges Profil lesen",
    tradeoffNote:
      "Zwei ehrliche Warnungen. Kleine Begleithunde haben oft Schwierigkeiten, allein gelassen zu werden – Wohnung oder Haus machen da keinen Unterschied. Und ein gemeinsames Treppenhaus bedeutet, dass jeder Toilettengang eine kleine Expedition ist, bei jedem Wetter, für die nächsten zwölf Jahre.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
fr: {
    eyebrow: "Choisir un chien",
    h1: "Les meilleures races de chiens pour la vie en appartement",
    intro:
      "Un petit chien n'est pas automatiquement un bon chien d'appartement, et un grand chien n'est pas automatiquement un mauvais. Ce qui décide réellement, c'est le bruit, l'énergie à l'intérieur et la façon dont le chien gère les voisins, les escaliers et la solitude. Voici notre sélection honnête – et les compromis qui accompagnent chaque nom sur la liste.",
    howChosenTitle: "Comment nous avons choisi",
    howChosen: [
      "Nous sommes partis des mêmes données de traits que le moteur de correspondance utilise : l'adaptabilité à l'appartement, les aboiements, les besoins d'exercice et la tolérance à la solitude.",
      "Les aboiements avaient le plus de poids. Dans un immeuble, un chien vocal est ce qui fait que les voisins frappent à la porte – quelle que soit sa taille.",
      "Aucune race n'est 'sans entretien'. Chaque chien de cette liste a toujours besoin de deux promenades correctes par jour et de compagnie la plupart du temps.",
    ],
    listTitle: "Notre sélection pour appartement",
    listIntro:
      "Huit races qui conviennent systématiquement à la vie en appartement selon nos données – calmes à l'intérieur, voix modérée, réalistes concernant les escaliers et les ascenseurs.",
    metrics: [
      { key: "apartmentSuitability", label: "Vie en appartement" },
      { key: "barking", label: "Aboiements" },
      { key: "exerciseNeeds", label: "Besoins d'exercice" },
      { key: "aloneTolerance", label: "Temps seul" },
    ],
    readProfile: "Lire le profil complet",
    tradeoffNote:
      "Deux avertissements honnêtes. Les petites races de compagnie ont souvent du mal à être laissées seules – appartement ou maison ne font aucune différence à cela. Et un escalier partagé signifie que chaque sortie aux toilettes est une petite expédition, par tous les temps, pendant les douze prochaines années.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
nl: {
    eyebrow: "Een hond kiezen",
    h1: "De beste hondenrassen voor het leven in een appartement",
    intro:
      "Een kleine hond is niet automatisch een goede flatdog, en een grote hond niet automatisch een slechte. Wat het echt bepaalt, is geluidsoverlast, energie binnenshuis en hoe de hond omgaat met buren, trappen en alleen zijn. Hier is onze eerlijke shortlist – en de afwegingen die bij elke naam erop komen kijken.",
    howChosenTitle: "Hoe we kozen",
    howChosen: [
      "We begonnen met dezelfde kenmerkgegevens die de matching engine gebruikt: geschiktheid voor appartementen, blaffen, bewegingsbehoeften en tolerantie voor alleen zijn.",
      "Blafgedrag woog het zwaarst. In een flatgebouw is een vocale hond degene die buren aan de deur krijgt – wat zijn grootte ook is.",
      "Geen enkele ras is 'onderhoudsvrij'. Elke hond op deze lijst heeft nog steeds twee fatsoenlijke wandelingen per dag en het grootste deel van de tijd gezelschap nodig.",
    ],
    listTitle: "Onze shortlist voor appartementen",
    listIntro:
      "Acht rassen die volgens onze gegevens consequent geschikt zijn voor het leven in een appartement – rustig binnenshuis, matige stem, realistisch met trappen en liften.",
    metrics: [
      { key: "apartmentSuitability", label: "Leven in appartement" },
      { key: "barking", label: "Blafgedrag" },
      { key: "exerciseNeeds", label: "Bewegingsbehoeften" },
      { key: "aloneTolerance", label: "Alleen zijn" },
    ],
    readProfile: "Lees het volledige profiel",
    tradeoffNote:
      "Twee eerlijke waarschuwingen. Kleine gezelschapshonden hebben vaak moeite met alleen gelaten worden – appartement of huis maakt daarin geen verschil. En een gedeelde trappenhuis betekent dat elke toiletgang een kleine expeditie is, bij elk soort weer, voor de komende twaalf jaar.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  }
},
  shortlist: byIds([
    "french-bulldog",
    "pug",
    "cavalier-king-charles-spaniel",
    "whippet",
    "shih-tzu",
    "bichon-frise",
    "dachshund",
    "chihuahua",
  ]),
  reasons: { en: {
    "french-bulldog":
      "Quiet, low-exercise and happiest beside you — but heat-sensitive and prone to expensive health problems.",
    pug: "Calm and comical indoors; snoring, heat sensitivity and vet bills are part of the package.",
    "cavalier-king-charles-spaniel":
      "The classic gentle flat companion — but hates being alone, and heart disease is common in the breed.",
    whippet: "Sprints outside, sleeps all day inside. Genuinely one of the quietest, cleanest flat dogs there is.",
    "shih-tzu": "Bred for centuries to live in rooms, not fields. The coat, though, is a weekly commitment.",
    "bichon-frise": "Cheerful and low-shedding; the trade-off is professional grooming every 6–8 weeks.",
    dachshund: "Small and portable — but surprisingly vocal, and backs need protecting from stairs and jumps.",
    chihuahua: "Tiny and flat-friendly in size; many bark more than neighbours would like, so training matters.",
  } ,
  no: {
    "french-bulldog":
      "Rolig, lite mosjonsbehov og lykkeligst ved din side — men varmefølsom og utsatt for dyre helseproblemer.",
    pug: "Rolig og komisk innendørs; snorking, varmefølsomhet og veterinærregninger er en del av pakken.",
    "cavalier-king-charles-spaniel":
      "Den klassiske, milde følgesvennen — men hater å være alene, og hjertesykdom er vanlig i rasen.",
    whippet: "Sprinter ute, sover hele dagen inne. Virkelig en av de roligste, reneste hundene som finnes.",
    "shih-tzu": "Avlet i århundrer for å bo i rom, ikke på jorder. Pelsen krever imidlertid ukentlig stell.",
    "bichon-frise": "Opplagt og røyter lite; kompromisset er profesjonell pelsstell hver 6.–8. uke.",
    dachshund: "Liten og bærbar — men overraskende vokal, og ryggen trenger beskyttelse mot trapper og hopp.",
    chihuahua: "Liten og leilighetsvennlig i størrelse; mange bjeffer mer enn naboene liker, så trening er viktig.",
  },
pl: {
    "french-bulldog":
      "Spokojny, niewymagający dużo ruchu i najszczęśliwszy u Twojego boku — ale wrażliwy na ciepło i podatny na kosztowne problemy zdrowotne.",
    pug: "Spokojny i komiczny w domu; chrapanie, wrażliwość na ciepło i rachunki od weterynarza to część pakietu.",
    "cavalier-king-charles-spaniel":
      "Klasyczny, łagodny towarzysz — ale nienawidzi być sam, a choroby serca są częste u tej rasy.",
    whippet: "Sprintuje na zewnątrz, śpi cały dzień w domu. Naprawdę jeden z najspokojniejszych i najczystszych psów, jakie istnieją.",
    "shih-tzu": "Hodowany przez wieki do życia w pomieszczeniach, nie na polach. Sierść jednak wymaga cotygodniowego zaangażowania.",
    "bichon-frise": "Wesoły i mało liniejący; kompromisem jest profesjonalna pielęgnacja co 6–8 tygodni.",
    dachshund: "Mały i poręczny — ale zaskakująco szczekliwy, a plecy wymagają ochrony przed schodami i skokami.",
    chihuahua: "Malutki i przyjazny dla mieszkań; wiele z nich szczeka więcej, niż sąsiedzi by chcieli, więc trening jest ważny.",
  },
dk: {
    "french-bulldog":
      "Stille, kræver lidt motion og er gladest ved din side — men varmefølsom og tilbøjelig til dyre helbredsproblemer.",
    pug: "Rolig og komisk indendørs; snorken, varmefølsomhed og dyrlægeregninger er en del af pakken.",
    "cavalier-king-charles-spaniel":
      "Den klassiske, blide følgesvend — men hader at være alene, og hjertesygdomme er almindelige i racen.",
    whippet: "Sprinter udenfor, sover hele dagen indenfor. Virkelig en af de roligste, reneste hunde, der findes.",
    "shih-tzu": "Avlet i århundreder til at bo i rum, ikke på marker. Pelsen kræver dog en ugentlig indsats.",
    "bichon-frise": "Glad og fælder lidt; kompromiset er professionel pelspleje hver 6.–8. uge.",
    dachshund: "Lille og transportabel — men overraskende vokal, og ryggen skal beskyttes mod trapper og hop.",
    chihuahua: "Lille og lejlighedsvenlig i størrelse; mange gøer mere, end naboerne ville ønske, så træning betyder noget.",
  },
se: {
    "french-bulldog":
      "Lugn, kräver lite motion och är som lyckligast vid din sida — men värmekänslig och benägen för dyra hälsoproblem.",
    pug: "Lugn och komisk inomhus; snarkningar, värmekänslighet och veterinärbesök är en del av paketet.",
    "cavalier-king-charles-spaniel":
      "Den klassiska, milda sällskapshunden — men hatar att vara ensam, och hjärtsjukdomar är vanliga i rasen.",
    whippet: "Sprinter utomhus, sover hela dagen inomhus. Verkligen en av de tystaste, renaste hundarna som finns.",
    "shih-tzu": "Aveln har i århundraden varit inriktad på att bo i rum, inte på fält. Pälsen kräver dock en veckovis insats.",
    "bichon-frise": "Glad och fäller lite; kompromissen är professionell pälsvård var 6.–8. vecka.",
    dachshund: "Liten och portabel — men förvånansvärt högljudd, och ryggen behöver skyddas från trappor och hopp.",
    chihuahua: "Liten och lägenhetsvänlig i storlek; många skäller mer än grannarna skulle önska, så träning är viktigt.",
  },
fi: {
    "french-bulldog":
      "Rauhallinen, vähän liikuntaa vaativa ja onnellisimmillaan vierelläsi — mutta kuumalle herkkä ja altis kalliille terveysongelmille.",
    pug: "Rauhallinen ja koominen sisällä; kuorsaus, kuumuudelle herkkyys ja eläinlääkärikulut kuuluvat pakettiin.",
    "cavalier-king-charles-spaniel":
      "Klassinen, lempeä seuralainen — mutta vihaa yksinoloa, ja sydänsairaudet ovat yleisiä rodussa.",
    whippet: "Syöksyy ulkona, nukkuu koko päivän sisällä. Todella yksi hiljaisimmista ja siisteimmistä koirista.",
    "shih-tzu": "Jalostettu vuosisatoja elämään huoneissa, ei pelloilla. Turkki vaatii kuitenkin viikoittaista hoitoa.",
    "bichon-frise": "Iloinen ja vähän karvaa irrottava; kompromissina on ammattimainen turkinhoito 6–8 viikon välein.",
    dachshund: "Pieni ja kannettava — mutta yllättävän äänekäs, ja selkä vaatii suojausta portaita ja hyppyjä vastaan.",
    chihuahua: "Pieni ja asuntoystävällinen kooltaan; monet haukkuvat enemmän kuin naapurit toivoisivat, joten koulutus on tärkeää.",
  },
de: {
    "french-bulldog":
      "Ruhig, wenig Bewegung und am glücklichsten an Ihrer Seite – aber hitzeempfindlich und anfällig für teure Gesundheitsprobleme.",
    pug: "Ruhig und komisch im Haus; Schnarchen, Hitzeempfindlichkeit und Tierarztrechnungen gehören dazu.",
    "cavalier-king-charles-spaniel":
      "Der klassische, sanfte Begleiter – aber hasst es, allein zu sein, und Herzerkrankungen sind bei dieser Rasse häufig.",
    whippet: "Sprintet draußen, schläft den ganzen Tag drinnen. Wirklich einer der ruhigsten, saubersten Hunde, die es gibt.",
    "shih-tzu": "Jahrhundertelang für das Leben in Räumen gezüchtet, nicht auf Feldern. Das Fell ist jedoch eine wöchentliche Verpflichtung.",
    "bichon-frise": "Fröhlich und haart wenig; der Kompromiss ist professionelle Fellpflege alle 6–8 Wochen.",
    dachshund: "Klein und tragbar – aber überraschend lautstark, und der Rücken muss vor Treppen und Sprüngen geschützt werden.",
    chihuahua: "Winzig und wohnungsfreundlich in der Größe; viele bellen mehr, als Nachbarn es mögen würden, daher ist Training wichtig.",
  },
fr: {
    "french-bulldog":
      "Calme, peu d'exercice et le plus heureux à vos côtés — mais sensible à la chaleur et sujet à des problèmes de santé coûteux.",
    pug: "Calme et comique à l'intérieur ; les ronflements, la sensibilité à la chaleur et les factures vétérinaires font partie du package.",
    "cavalier-king-charles-spaniel":
      "Le compagnon plat classique et doux — mais déteste être seul, et les maladies cardiaques sont courantes dans la race.",
    whippet: "Sprinte dehors, dort toute la journée à l'intérieur. Vraiment l'un des chiens plats les plus calmes et les plus propres qui existent.",
    "shih-tzu": "Élevé pendant des siècles pour vivre dans des pièces, pas dans des champs. Le pelage, cependant, demande un engagement hebdomadaire.",
    "bichon-frise": "Joyeux et perd peu ses poils ; le compromis est un toilettage professionnel toutes les 6 à 8 semaines.",
    dachshund: "Petit et portable — mais étonnamment vocal, et le dos doit être protégé des escaliers et des sauts.",
    chihuahua: "Minuscule et adapté aux appartements ; beaucoup aboient plus que ce que les voisins aimeraient, donc l'entraînement compte.",
  },
nl: {
    "french-bulldog":
      "Rustig, weinig beweging en het gelukkigst aan uw zijde — maar gevoelig voor hitte en vatbaar voor dure gezondheidsproblemen.",
    pug: "Kalm en komisch binnenshuis; snurken, gevoeligheid voor hitte en dierenartsrekeningen maken deel uit van het pakket.",
    "cavalier-king-charles-spaniel":
      "De klassieke, zachtaardige metgezel — maar haat het om alleen te zijn, en hartaandoeningen komen veel voor bij dit ras.",
    whippet: "Sprint buiten, slaapt de hele dag binnen. Echt een van de rustigste, schoonste honden die er zijn.",
    "shih-tzu": "Eeuwenlang gefokt om in kamers te leven, niet op velden. De vacht is echter een wekelijkse verplichting.",
    "bichon-frise": "Opgewekt en verhaart weinig; de keerzijde is professionele vachtverzorging elke 6–8 weken.",
    dachshund: "Klein en draagbaar — maar verrassend vocaal, en de rug moet beschermd worden tegen trappen en sprongen.",
    chihuahua: "Klein en flat-vriendelijk qua formaat; velen blaffen meer dan buren zouden willen, dus training is belangrijk.",
  }
},
};

/* ------------------------------------------------------------------ */
/* 2. First-time owners                                                */
/* ------------------------------------------------------------------ */

export const FIRST_TIME_GUIDE: LifestyleGuideConfig = {
  id: "first-time-owners",
  path: "/best-dogs-for-first-time-owners",
  seo: { en: {
    title: "Best dog breeds for first-time owners | DoggMatch",
    description:
      "The best dogs for beginners: forgiving, trainable breeds that shrug off first-year mistakes — chosen from real trait data, with the trade-offs spelled out.",
  } ,
  no: {
    title: "Beste hunderaser for førstegangseiere | DoggMatch",
    description:
      "De beste hundene for nybegynnere: tilgivende, trenbare raser som tåler feil i første året – valgt fra reelle egenskapsdata, med avveiningene forklart.",
  },
pl: {
    title: "Najlepsze rasy psów dla początkujących właścicieli | DoggMatch",
    description:
      "Najlepsze psy dla początkujących: wybaczające, łatwe do wyszkolenia rasy, które poradzą sobie z błędami pierwszego roku – wybrane na podstawie rzeczywistych danych o cechach, z wyjaśnieniem kompromisów.",
  },
dk: {
    title: "Bedste hunderacer for førstegangs hundeejere | DoggMatch",
    description:
      "De bedste hunde for begyndere: tilgivende, trænbar racer, der ignorerer fejl i det første år – valgt ud fra reelle data om egenskaber, med afvejningerne forklaret.",
  },
se: {
    title: "Bästa hundraserna för förstagångsägare | DoggMatch",
    description:
      "De bästa hundarna för nybörjare: förlåtande, träningsbara raser som klarar sig igenom misstag under första året – valda från verkliga data om egenskaper, med avvägningarna tydligt förklarade.",
  },
fi: {
    title: "Parhaat koirarodut ensikertalaisille omistajille | DoggMatch",
    description:
      "Parhaat koirat aloittelijoille: anteeksiantavat, koulutettavat rodut, jotka selviävät ensimmäisen vuoden virheistä – valittu todellisten ominaisuusdatan perusteella, kompromissit selitettyinä.",
  },
de: {
    title: "Beste Hunderassen für Erstbesitzer | DoggMatch",
    description:
      "Die besten Hunde für Anfänger: fehlerverzeihende, trainierbare Rassen, die Fehler im ersten Jahr verkraften – ausgewählt aus echten Eigenschaftsdaten, mit den Kompromissen klar dargelegt.",
  },
fr: {
    title: "Meilleures races de chiens pour propriétaires novices | DoggMatch",
    description:
      "Les meilleurs chiens pour débutants : des races indulgentes et dressables qui pardonnent les erreurs de la première année — choisies à partir de données réelles sur les traits, avec les compromis clairement expliqués.",
  },
nl: {
    title: "Beste hondenrassen voor beginnende eigenaren | DoggMatch",
    description:
      "De beste honden voor beginners: vergevingsgezinde, trainbare rassen die fouten in het eerste jaar niet erg vinden – gekozen uit echte eigenschapsgegevens, met de afwegingen duidelijk uitgelegd.",
  }
},
  copy: { en: {
    eyebrow: "Choosing a dog",
    h1: "The best dog breeds for first-time owners",
    intro:
      "Everyone gets things wrong in the first year — feeding too much, training inconsistently, worrying at the wrong moments. The kindest thing you can do for yourself is pick a dog that forgives that. Here's our honest shortlist of breeds that do, and what each one asks in return.",
    howChosenTitle: "How we chose",
    howChosen: [
      "We ranked breeds by first-time suitability and trainability in the same trait data the matching engine uses — not by popularity.",
      "We favoured steady energy over low energy. Very low-energy breeds are often brachycephalic or elderly; very high-energy ones need a job you may not have.",
      "No breed trains itself. 'Easy for beginners' means forgiving of your learning curve — not effortless.",
    ],
    listTitle: "Our first-dog shortlist",
    listIntro:
      "Eight breeds that reliably forgive beginner mistakes, learn quickly, and settle into ordinary family life.",
    metrics: [
      { key: "firstTimeSuitability", label: "First-time owners" },
      { key: "trainability", label: "Trainability" },
      { key: "energy", label: "Energy" },
      { key: "grooming", label: "Grooming" },
    ],
    readProfile: "Read the full profile",
    tradeoffNote:
      "One honest caveat: forgiving breeds are often popular breeds, and popularity attracts poor breeding. A calm start depends as much on where the dog comes from as which breed it is — meet the breeder or the rescue, and walk away from anything that feels rushed.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  } ,
  no: {
    eyebrow: "Velge hund",
    h1: "De beste hunderasene for førstegangseiere",
    intro:
      "Alle gjør feil det første året – fôrer for mye, trener inkonsistent, bekymrer seg på feil tidspunkt. Det snilleste du kan gjøre for deg selv, er å velge en hund som tilgir det. Her er vår ærlige kortliste over raser som gjør det, og hva hver enkelt ber om til gjengjeld.",
    howChosenTitle: "Hvordan vi valgte",
    howChosen: [
      "Vi rangerte raser etter egnethet for førstegangseiere og trenbarhet i de samme egenskapene som matchingmotoren bruker – ikke etter popularitet.",
      "Vi foretrakk jevn energi fremfor lav energi. Raser med svært lav energi er ofte brakycefale eller eldre; raser med svært høy energi trenger en jobb du kanskje ikke har.",
      "Ingen rase trener seg selv. 'Lett for nybegynnere' betyr tilgivende for din læringskurve – ikke uanstrengt.",
    ],
    listTitle: "Vår kortliste for førstegangshunder",
    listIntro:
      "Åtte raser som pålitelig tilgir nybegynnerfeil, lærer raskt og finner seg til rette i vanlig familieliv.",
    metrics: [
      { key: "firstTimeSuitability", label: "Førstegangseiere" },
      { key: "trainability", label: "Trenbarhet" },
      { key: "energy", label: "Energi" },
      { key: "grooming", label: "Pelsstell" },
    ],
    readProfile: "Les hele profilen",
    tradeoffNote:
      "En ærlig forbehold: tilgivende raser er ofte populære raser, og popularitet tiltrekker seg dårlig avl. En rolig start avhenger like mye av hvor hunden kommer fra som hvilken rase det er – møt oppdretteren eller omplasseringen, og gå vekk fra alt som føles forhastet.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
pl: {
    eyebrow: "Wybór psa",
    h1: "Najlepsze rasy psów dla początkujących właścicieli",
    intro:
      "Każdy popełnia błędy w pierwszym roku – karmi za dużo, trenuje niekonsekwentnie, martwi się w złych momentach. Najlepszą rzeczą, jaką możesz zrobić dla siebie, jest wybranie psa, który to wybacza. Oto nasza szczera lista ras, które to robią, i czego każda z nich oczekuje w zamian.",
    howChosenTitle: "Jak wybieraliśmy",
    howChosen: [
      "Oceniliśmy rasy pod kątem przydatności dla początkujących i łatwości szkolenia, używając tych samych danych o cechach, których używa silnik dopasowujący – nie popularności.",
      "Preferowaliśmy stabilną energię nad niską energią. Rasy o bardzo niskiej energii są często brachycefaliczne lub starsze; rasy o bardzo wysokiej energii potrzebują zadania, którego możesz nie mieć.",
      "Żadna rasa nie szkoli się sama. 'Łatwy dla początkujących' oznacza wyrozumiały dla Twojej krzywej uczenia się – nie bez wysiłku.",
    ],
    listTitle: "Nasza lista psów dla początkujących",
    listIntro:
      "Osiem ras, które niezawodnie wybaczają błędy początkujących, szybko się uczą i odnajdują się w zwykłym życiu rodzinnym.",
    metrics: [
      { key: "firstTimeSuitability", label: "Początkujący właściciele" },
      { key: "trainability", label: "Szkolenie" },
      { key: "energy", label: "Energia" },
      { key: "grooming", label: "Pielęgnacja" },
    ],
    readProfile: "Przeczytaj pełny profil",
    tradeoffNote:
      "Jedno szczere zastrzeżenie: wyrozumiałe rasy są często popularnymi rasami, a popularność przyciąga nieuczciwe hodowle. Spokojny start zależy równie od tego, skąd pochodzi pies, jak i od rasy – spotkaj hodowcę lub schronisko i odejdź od wszystkiego, co wydaje się pośpieszne.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
dk: {
    eyebrow: "Valg af hund",
    h1: "De bedste hunderacer for førstegangs-ejere",
    intro:
      "Alle laver fejl i det første år – fodrer for meget, træner inkonsistent, bekymrer sig på de forkerte tidspunkter. Det venligste, du kan gøre for dig selv, er at vælge en hund, der tilgiver det. Her er vores ærlige kortliste over racer, der gør det, og hvad hver enkelt beder om til gengæld.",
    howChosenTitle: "Hvordan vi valgte",
    howChosen: [
      "Vi rangerede racer efter egnethed for førstegangs-ejere og træningsvillighed i de samme data om træk, som matchende motor bruger – ikke efter popularitet.",
      "Vi foretrak stabil energi frem for lav energi. Racer med meget lav energi er ofte brakycefale eller ældre; racer med meget høj energi har brug for et job, du måske ikke har.",
      "Ingen race træner sig selv. 'Let for begyndere' betyder tilgivende over for din læringskurve – ikke ubesværet.",
    ],
    listTitle: "Vores kortliste for førstegangshunde",
    listIntro:
      "Otte racer, der pålideligt tilgiver begynderfejl, lærer hurtigt og falder til i almindeligt familieliv.",
    metrics: [
      { key: "firstTimeSuitability", label: "Førstegangs-ejere" },
      { key: "trainability", label: "Træningsvillighed" },
      { key: "energy", label: "Energi" },
      { key: "grooming", label: "Pelspleje" },
    ],
    readProfile: "Læs hele profilen",
    tradeoffNote:
      "En ærlig forbehold: tilgivende racer er ofte populære racer, og popularitet tiltrækker dårlig avl. En rolig start afhænger lige så meget af, hvor hunden kommer fra, som hvilken race det er – mød opdrætteren eller internatet, og gå væk fra alt, der føles forhastet.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
se: {
    eyebrow: "Välja hund",
    h1: "De bästa hundraserna för förstagångsägare",
    intro:
      "Alla gör misstag under det första året – matar för mycket, tränar inkonsekvent, oroar sig vid fel tillfällen. Det snällaste du kan göra för dig själv är att välja en hund som förlåter det. Här är vår ärliga kortlista över raser som gör det, och vad var och en ber om i gengäld.",
    howChosenTitle: "Hur vi valde",
    howChosen: [
      "Vi rankade raser efter lämplighet för förstagångsägare och träningsbarhet i samma dragdata som matchningsmotorn använder – inte efter popularitet.",
      "Vi föredrog stabil energi framför låg energi. Raser med mycket låg energi är ofta brakycefala eller äldre; raser med mycket hög energi behöver ett jobb du kanske inte har.",
      "Ingen ras tränar sig själv. 'Lätt för nybörjare' betyder förlåtande för din inlärningskurva – inte ansträngningslöst.",
    ],
    listTitle: "Vår kortlista för förstagångshundar",
    listIntro:
      "Åtta raser som pålitligt förlåter nybörjarmisstag, lär sig snabbt och anpassar sig till ett vanligt familjeliv.",
    metrics: [
      { key: "firstTimeSuitability", label: "Förstagångsägare" },
      { key: "trainability", label: "Träningsbarhet" },
      { key: "energy", label: "Energi" },
      { key: "grooming", label: "Pälsvård" },
    ],
    readProfile: "Läs hela profilen",
    tradeoffNote:
      "En ärlig förbehåll: förlåtande raser är ofta populära raser, och popularitet lockar till sig dålig avel. En lugn start beror lika mycket på var hunden kommer ifrån som vilken ras det är – träffa uppfödaren eller omplaceringshemmet, och gå därifrån om något känns förhastat.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
fi: {
    eyebrow: "Koiran valinta",
    h1: "Parhaat koirarodut ensikertalaisille omistajille",
    intro:
      "Kaikki tekevät virheitä ensimmäisen vuoden aikana – syöttävät liikaa, kouluttavat epäjohdonmukaisesti, huolestuvat vääriä hetkiä. Kiltein asia, jonka voit tehdä itsellesi, on valita koira, joka antaa sen anteeksi. Tässä on rehellinen lyhytlistamme roduista, jotka tekevät niin, ja mitä kukin niistä pyytää vastineeksi.",
    howChosenTitle: "Miten valitsimme",
    howChosen: [
      "Arvioimme rodut ensikertalaisille sopivuuden ja koulutettavuuden perusteella samoilla ominaisuusdatalla, joita sovitusmoottori käyttää – ei suosion perusteella.",
      "Suosimme tasaista energiaa matalan energian sijaan. Erittäin vähäenergiaiset rodut ovat usein brakykefalisia tai vanhoja; erittäin energiset rodut tarvitsevat työn, jota sinulla ei ehkä ole.",
      "Mikään rotu ei kouluta itseään. 'Helppo aloittelijoille' tarkoittaa anteeksiantavaa oppimiskäyrääsi – ei vaivatonta.",
    ],
    listTitle: "Ensikoiramme lyhytlista",
    listIntro:
      "Kahdeksan rotua, jotka luotettavasti antavat anteeksi aloittelijoiden virheet, oppivat nopeasti ja asettuvat tavalliseen perhe-elämään.",
    metrics: [
      { key: "firstTimeSuitability", label: "Ensikertalaiset omistajat" },
      { key: "trainability", label: "Koulutettavuus" },
      { key: "energy", label: "Energia" },
      { key: "grooming", label: "Turkinhoito" },
    ],
    readProfile: "Lue koko profiili",
    tradeoffNote:
      "Yksi rehellinen varoitus: anteeksiantavat rodut ovat usein suosittuja rotuja, ja suosio houkuttelee huonoa jalostusta. Rauhallinen alku riippuu yhtä paljon siitä, mistä koira tulee, kuin mistä rodusta on kyse – tapaa kasvattaja tai pelastus, ja kävele pois kaikesta, mikä tuntuu kiirehdityltä.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
de: {
    eyebrow: "Einen Hund auswählen",
    h1: "Die besten Hunderassen für Erstbesitzer",
    intro:
      "Jeder macht im ersten Jahr Fehler – zu viel füttern, inkonsistent trainieren, sich im falschen Moment Sorgen machen. Das Freundlichste, was Sie für sich tun können, ist, einen Hund zu wählen, der das verzeiht. Hier ist unsere ehrliche Shortlist von Rassen, die das tun, und was jede einzelne im Gegenzug verlangt.",
    howChosenTitle: "Wie wir ausgewählt haben",
    howChosen: [
      "Wir haben Rassen nach ihrer Eignung für Erstbesitzer und ihrer Trainierbarkeit in denselben Merkmalendaten eingestuft, die die Matching-Engine verwendet – nicht nach Popularität.",
      "Wir bevorzugten gleichmäßige Energie gegenüber niedriger Energie. Rassen mit sehr niedriger Energie sind oft brachyzephal oder alt; Rassen mit sehr hoher Energie benötigen eine Aufgabe, die Sie möglicherweise nicht haben.",
      "Keine Rasse trainiert sich selbst. 'Einfach für Anfänger' bedeutet nachsichtig mit Ihrer Lernkurve – nicht mühelos.",
    ],
    listTitle: "Unsere Shortlist für Ersthunde",
    listIntro:
      "Acht Rassen, die Anfängerfehler zuverlässig verzeihen, schnell lernen und sich in das gewöhnliche Familienleben einfügen.",
    metrics: [
      { key: "firstTimeSuitability", label: "Erstbesitzer" },
      { key: "trainability", label: "Trainierbarkeit" },
      { key: "energy", label: "Energie" },
      { key: "grooming", label: "Fellpflege" },
    ],
    readProfile: "Vollständiges Profil lesen",
    tradeoffNote:
      "Eine ehrliche Einschränkung: nachsichtige Rassen sind oft beliebte Rassen, und Popularität zieht schlechte Zucht an. Ein ruhiger Start hängt genauso davon ab, woher der Hund kommt, wie von seiner Rasse – treffen Sie den Züchter oder die Rettungsorganisation und gehen Sie weg von allem, was überstürzt wirkt.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
fr: {
    eyebrow: "Choisir un chien",
    h1: "Les meilleures races de chiens pour les propriétaires novices",
    intro:
      "Tout le monde fait des erreurs la première année – trop nourrir, entraîner de manière incohérente, s'inquiéter aux mauvais moments. La chose la plus gentille que vous puissiez faire pour vous-même est de choisir un chien qui pardonne cela. Voici notre liste honnête de races qui le font, et ce que chacune demande en retour.",
    howChosenTitle: "Comment nous avons choisi",
    howChosen: [
      "Nous avons classé les races en fonction de leur aptitude pour les novices et de leur facilité d'éducation dans les mêmes données de traits que le moteur de correspondance utilise – pas par popularité.",
      "Nous avons privilégié une énergie stable plutôt qu'une faible énergie. Les races à très faible énergie sont souvent brachycéphales ou âgées ; celles à très haute énergie ont besoin d'un travail que vous n'avez peut-être pas.",
      "Aucune race ne s'éduque elle-même. 'Facile pour les débutants' signifie indulgent envers votre courbe d'apprentissage – pas sans effort.",
    ],
    listTitle: "Notre liste de chiens pour débutants",
    listIntro:
      "Huit races qui pardonnent de manière fiable les erreurs des débutants, apprennent rapidement et s'intègrent dans la vie de famille ordinaire.",
    metrics: [
      { key: "firstTimeSuitability", label: "Propriétaires novices" },
      { key: "trainability", label: "Facilité d'éducation" },
      { key: "energy", label: "Énergie" },
      { key: "grooming", label: "Toilettage" },
    ],
    readProfile: "Lire le profil complet",
    tradeoffNote:
      "Une mise en garde honnête : les races indulgentes sont souvent des races populaires, et la popularité attire les mauvais élevages. Un début calme dépend autant de l'origine du chien que de sa race – rencontrez l'éleveur ou le refuge, et éloignez-vous de tout ce qui semble précipité.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
nl: {
    eyebrow: "Een hond kiezen",
    h1: "De beste hondenrassen voor beginnende eigenaren",
    intro:
      "Iedereen maakt fouten in het eerste jaar – te veel voeren, inconsistent trainen, zich op de verkeerde momenten zorgen maken. Het vriendelijkste wat je voor jezelf kunt doen, is een hond kiezen die dat vergeeft. Hier is onze eerlijke shortlist van rassen die dat doen, en wat elk van hen terugvraagt.",
    howChosenTitle: "Hoe we kozen",
    howChosen: [
      "We hebben rassen gerangschikt op geschiktheid voor beginners en trainbaarheid in dezelfde kenmerkgegevens die de matching-engine gebruikt – niet op populariteit.",
      "We gaven de voorkeur aan stabiele energie boven lage energie. Rassen met zeer lage energie zijn vaak brachycefaal of oud; rassen met zeer hoge energie hebben een taak nodig die je misschien niet hebt.",
      "Geen enkele hond traint zichzelf. 'Makkelijk voor beginners' betekent vergevingsgezind voor je leercurve – niet moeiteloos.",
    ],
    listTitle: "Onze shortlist voor beginnershonden",
    listIntro:
      "Acht rassen die beginnersfouten betrouwbaar vergeven, snel leren en zich aanpassen aan het gewone gezinsleven.",
    metrics: [
      { key: "firstTimeSuitability", label: "Beginnende eigenaren" },
      { key: "trainability", label: "Trainbaarheid" },
      { key: "energy", label: "Energie" },
      { key: "grooming", label: "Vachtverzorging" },
    ],
    readProfile: "Lees het volledige profiel",
    tradeoffNote:
      "Eén eerlijke kanttekening: vergevingsgezinde rassen zijn vaak populaire rassen, en populariteit trekt slechte fokkerij aan. Een rustige start hangt net zo veel af van waar de hond vandaan komt als van welk ras het is – ontmoet de fokker of de opvang, en loop weg van alles wat gehaast aanvoelt.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  }
},
  shortlist: byIds([
    "labrador-retriever",
    "golden-retriever",
    "papillon",
    "rough-collie",
    "toy-poodle",
    "poodle",
    "cavalier-king-charles-spaniel",
    "labradoodle",
  ]),
  reasons: { en: {
    "labrador-retriever":
      "Forgiving, food-motivated and endlessly good-natured — but a serious shedder with a serious appetite.",
    "golden-retriever":
      "The gentle classic: eager to please, patient with mistakes, and covered in hair you will find everywhere.",
    papillon: "A small dog with a big brain — quick to learn, easy to carry, and tougher than it looks.",
    "rough-collie":
      "Soft-mannered and deeply trainable; the full coat needs real brushing, and sensitivity means gentle handling.",
    "toy-poodle": "Bright, trainable and low-shedding in a small package — with professional grooming for life.",
    poodle: "Perhaps the most trainable companion there is; the coat is a standing appointment, not a haircut.",
    "cavalier-king-charles-spaniel":
      "As forgiving as a dog gets — but health screening of the breeder matters more here than almost anywhere.",
    labradoodle:
      "Friendly and clever, though less predictable than the marketing suggests — coat and energy vary dog to dog.",
  } ,
  no: {
    "labrador-retriever":
      "Tilgivende, matmotivert og uendelig godmodig — men en skikkelig røyter med en skikkelig appetitt.",
    "golden-retriever":
      "Den milde klassikeren: ivrig etter å behage, tålmodig med feil, og dekket av pels du finner overalt.",
    papillon: "En liten hund med stor hjerne — rask å lære, lett å bære, og tøffere enn den ser ut.",
    "rough-collie":
      "Mykt preget og dypt trenbar; den fulle pelsen trenger skikkelig børsting, og følsomhet betyr skånsom håndtering.",
    "toy-poodle": "Lys, trenbar og lite røyting i en liten pakke — med profesjonell pelsstell for livet.",
    poodle: "Kanskje den mest trenbare følgesvennen som finnes; pelsen er en fast avtale, ikke en klipp.",
    "cavalier-king-charles-spaniel":
      "Så tilgivende som en hund blir — men helsescreening av oppdretteren betyr mer her enn nesten hvor som helst.",
    labradoodle:
      "Vennlig og smart, selv om mindre forutsigbar enn markedsføringen antyder — pels og energi varierer fra hund til hund.",
  },
pl: {
    "labrador-retriever":
      "Wybaczający, zmotywowany jedzeniem i nieskończenie łagodny — ale prawdziwy zrzut sierści z ogromnym apetytem.",
    "golden-retriever":
      "Delikatna klasyka: chętny do zadowolenia, cierpliwy w błędach i pokryty sierścią, którą znajdziesz wszędzie.",
    papillon: "Mały pies z wielkim mózgiem — szybki do nauki, łatwy do noszenia i twardszy niż wygląda.",
    "rough-collie":
      "Łagodny i łatwy do wyszkolenia; pełna sierść wymaga prawdziwego szczotkowania, a wrażliwość oznacza delikatne traktowanie.",
    "toy-poodle": "Bystry, łatwy do wyszkolenia i mało liniejący w małym opakowaniu — z profesjonalną pielęgnacją sierści na całe życie.",
    poodle: "Prawdopodobnie najbardziej podatny na szkolenie towarzysz; sierść to stałe zobowiązanie, a nie zwykłe strzyżenie.",
    "cavalier-king-charles-spaniel":
      "Tak wyrozumiały, jak tylko pies może być — ale badania zdrowotne hodowcy mają tu większe znaczenie niż prawie gdziekolwiek indziej.",
    labradoodle:
      "Przyjazny i inteligentny, choć mniej przewidywalny niż sugeruje marketing — sierść i energia różnią się w zależności od psa.",
  },
dk: {
    "labrador-retriever":
      "Tilgivende, madmotiveret og uendeligt godmodig — men en seriøs fælder med en seriøs appetit.",
    "golden-retriever":
      "Den blide klassiker: ivrig efter at behage, tålmodig med fejl og dækket af pels, du finder overalt.",
    papillon: "En lille hund med en stor hjerne — hurtig til at lære, nem at bære og sejere end den ser ud.",
    "rough-collie":
      "Blid og dybt træningsbar; den fyldige pels kræver ægte børstning, og følsomhed betyder skånsom håndtering.",
    "toy-poodle": "Klar, træningsbar og lav-fældende i en lille pakke — med professionel pelspleje for livet.",
    poodle: "Måske den mest træningsbare ledsager, der findes; pelsen er en fast aftale, ikke en klipning.",
    "cavalier-king-charles-spaniel":
      "Så tilgivende som en hund bliver — men sundhedsscanning af opdrætteren betyder mere her end næsten hvor som helst.",
    labradoodle:
      "Venlig og klog, omend mindre forudsigelig end markedsføringen antyder — pels og energi varierer fra hund til hund.",
  },
se: {
    "labrador-retriever":
      "Förlåtande, matmotiverad och oändligt godmodig — men en rejäl fällare med en rejäl aptit.",
    "golden-retriever":
      "Den milda klassikern: ivrig att behaga, tålmodig med misstag och täckt av hår du hittar överallt.",
    papillon: "En liten hund med stor hjärna — snabb att lära, lätt att bära och tuffare än den ser ut.",
    "rough-collie":
      "Mjukt sinnad och djupt träningsbar; den fulla pälsen behöver riktig borstning, och känslighet innebär varsam hantering.",
    "toy-poodle": "Klar, träningsbar och låg-fällande i ett litet paket — med professionell pälsvård för livet.",
    poodle: "Kanske den mest träningsbara följeslagaren som finns; pälsen är ett stående möte, inte en klippning.",
    "cavalier-king-charles-spaniel":
      "Så förlåtande som en hund blir — men hälsokontroller av uppfödaren är viktigare här än nästan var som helst.",
    labradoodle:
      "Vänlig och smart, om än mindre förutsägbar än marknadsföringen antyder — päls och energi varierar från hund till hund.",
  },
fi: {
    "labrador-retriever":
      "Anteeksiantava, ruokamotivoitunut ja loputtoman hyväntahtoinen — mutta todellinen karvanlähtäjä, jolla on valtava ruokahalu.",
    "golden-retriever":
      "Lempeä klassikko: innokas miellyttämään, kärsivällinen virheiden kanssa ja täynnä karvaa, jota löydät kaikkialta.",
    papillon: "Pieni koira, jolla on suuri aivot — nopea oppimaan, helppo kantaa ja sitkeämpi kuin miltä näyttää.",
    "rough-collie":
      "Pehmeäluontoinen ja syvästi koulutettava; täysi turkki vaatii todellista harjausta, ja herkkyys tarkoittaa hellävaraista käsittelyä.",
    "toy-poodle": "Älykäs, koulutettava ja vähän karvaa irrottava pienessä paketissa — ammattimaisella turkinhoidolla koko elämän ajan.",
    poodle: "Ehkä koulutettavin kumppani, mitä on; turkki on pysyvä sopimus, ei pelkkä leikkaus.",
    "cavalier-king-charles-spaniel":
      "Niin anteeksiantava kuin koira voi olla — mutta kasvattajan terveystarkastukset ovat täällä tärkeämpiä kuin melkein missään muualla.",
    labradoodle:
      "Ystävällinen ja älykäs, vaikkakin vähemmän ennustettava kuin markkinointi antaa ymmärtää — turkki ja energia vaihtelevat koirasta toiseen.",
  },
de: {
    "labrador-retriever":
      "Vergebend, futtermotiviert und unendlich gutmütig — aber ein starker Haarausfaller mit einem ernsthaften Appetit.",
    "golden-retriever":
      "Der sanfte Klassiker: bestrebt zu gefallen, geduldig mit Fehlern und bedeckt mit Haaren, die Sie überall finden werden.",
    papillon: "Ein kleiner Hund mit einem großen Gehirn — schnell zu lernen, leicht zu tragen und zäher, als er aussieht.",
    "rough-collie":
      "Sanftmütig und tief trainierbar; das volle Fell braucht echtes Bürsten, und Empfindlichkeit bedeutet sanfte Handhabung.",
    "toy-poodle": "Intelligent, trainierbar und wenig haarend in einem kleinen Paket — mit professioneller Fellpflege fürs Leben.",
    poodle: "Vielleicht der am besten trainierbare Begleiter überhaupt; das Fell ist ein fester Termin, kein Haarschnitt.",
    "cavalier-king-charles-spaniel":
      "So vergebend, wie ein Hund nur sein kann — aber die Gesundheitsuntersuchungen des Züchters sind hier wichtiger als fast überall sonst.",
    labradoodle:
      "Freundlich und clever, wenn auch weniger vorhersehbar, als das Marketing vermuten lässt — Fell und Energie variieren von Hund zu Hund.",
  },
fr: {
    "labrador-retriever":
      "Indulgent, motivé par la nourriture et d'une gentillesse infinie — mais un gros mueur avec un appétit sérieux.",
    "golden-retriever":
      "Le classique doux : désireux de plaire, patient avec les erreurs et couvert de poils que vous trouverez partout.",
    papillon: "Un petit chien avec un grand cerveau — rapide à apprendre, facile à porter et plus résistant qu'il n'y paraît.",
    "rough-collie":
      "D'un tempérament doux et très dressable ; le pelage complet nécessite un vrai brossage, et la sensibilité implique une manipulation délicate.",
    "toy-poodle": "Intelligent, dressable et peu mueur dans un petit format — avec un toilettage professionnel à vie.",
    poodle: "Peut-être le compagnon le plus dressable qui soit ; le pelage est un rendez-vous fixe, pas une coupe de cheveux.",
    "cavalier-king-charles-spaniel":
      "Aussi indulgent qu'un chien puisse l'être — mais le dépistage de santé de l'éleveur est plus important ici que presque partout ailleurs.",
    labradoodle:
      "Amical et intelligent, bien que moins prévisible que ce que le marketing suggère — le pelage et l'énergie varient d'un chien à l'autre.",
  },
nl: {
    "labrador-retriever":
      "Vergevingsgezind, gemotiveerd door eten en eindeloos goedmoedig — maar een serieuze rui met een serieuze eetlust.",
    "golden-retriever":
      "De zachtaardige klassieker: gretig om te behagen, geduldig met fouten en bedekt met haar dat je overal zult vinden.",
    papillon: "Een kleine hond met een groot brein — snel te leren, makkelijk te dragen en taaier dan hij lijkt.",
    "rough-collie":
      "Zachtaardig en diep trainbaar; de volle vacht vereist echt borstelen, en gevoeligheid betekent zachte behandeling.",
    "toy-poodle": "Slim, trainbaar en weinig haarverlies in een klein pakket — met professionele vachtverzorging voor het leven.",
    poodle: "Misschien wel de meest trainbare metgezel die er is; de vacht is een vaste afspraak, geen knipbeurt.",
    "cavalier-king-charles-spaniel":
      "Zo vergevingsgezind als een hond maar kan zijn — maar gezondheidsonderzoek van de fokker is hier belangrijker dan bijna overal.",
    labradoodle:
      "Vriendelijk en slim, hoewel minder voorspelbaar dan de marketing suggereert — vacht en energie variëren van hond tot hond.",
  }
},
};

/* ------------------------------------------------------------------ */
/* 3. Dogs that handle alone time                                      */
/* ------------------------------------------------------------------ */

export const ALONE_GUIDE: LifestyleGuideConfig = {
  id: "dogs-left-alone",
  path: "/dogs-that-can-be-left-alone",
  seo: { en: {
    title: "Dogs that can be left alone longer | DoggMatch",
    description:
      "Which dog breeds cope best with time alone, what 'longer' really means, and how to build alone time kindly — no myths, no guilt, just the honest picture.",
  } ,
  no: {
    title: "Hunder som kan være alene lenger | DoggMatch",
    description:
      "Hvilke hunderaser takler å være alene best, hva 'lenger' egentlig betyr, og hvordan du bygger opp alenetid på en snill måte – ingen myter, ingen skyldfølelse, bare det ærlige bildet.",
  },
pl: {
    title: "Psy, które mogą zostać same dłużej | DoggMatch",
    description:
      "Które rasy psów najlepiej radzą sobie z samotnością, co tak naprawdę oznacza „dłużej” i jak budować czas samotności w łagodny sposób – bez mitów, bez poczucia winy, tylko szczery obraz sytuacji.",
  },
dk: {
    title: "Hunde der kan være alene længere | DoggMatch",
    description:
      "Hvilke hunderacer klarer sig bedst alene, hvad 'længere' egentlig betyder, og hvordan du opbygger alenetid på en kærlig måde – ingen myter, ingen skyldfølelse, bare det ærlige billede.",
  },
se: {
    title: "Hundar som kan vara ensamma längre | DoggMatch",
    description:
      "Vilka hundraser klarar sig bäst ensamma, vad 'längre' egentligen betyder, och hur du bygger upp ensamtid på ett vänligt sätt – inga myter, ingen skuld, bara den ärliga bilden.",
  },
fi: {
    title: "Koirat, jotka voivat olla yksin pidempään | DoggMatch",
    description:
      "Mitkä koirarodut selviävät parhaiten yksin, mitä 'pidempään' todella tarkoittaa ja miten yksinoloa voi rakentaa lempeästi – ei myyttejä, ei syyllisyyttä, vain rehellinen kuva.",
  },
de: {
    title: "Hunde, die länger allein bleiben können | DoggMatch",
    description:
      "Welche Hunderassen kommen am besten mit dem Alleinsein zurecht, was 'länger' wirklich bedeutet und wie Sie das Alleinsein freundlich aufbauen – keine Mythen, keine Schuldgefühle, nur das ehrliche Bild.",
  },
fr: {
    title: "Les chiens qui peuvent rester seuls plus longtemps | DoggMatch",
    description:
      "Quelles races de chiens s'adaptent le mieux à la solitude, ce que 'plus longtemps' signifie réellement, et comment construire le temps de solitude avec bienveillance – pas de mythes, pas de culpabilité, juste la réalité honnête.",
  },
nl: {
    title: "Honden die langer alleen kunnen zijn | DoggMatch",
    description:
      "Welke hondenrassen kunnen het beste omgaan met alleen zijn, wat 'langer' werkelijk betekent, en hoe je alleen zijn op een vriendelijke manier opbouwt – geen mythes, geen schuldgevoel, alleen het eerlijke verhaal.",
  }
},
  copy: { en: {
    eyebrow: "Choosing a dog",
    h1: "Dogs that can handle being left alone",
    intro:
      "Let's start with the honest part: no dog should regularly spend a whole working day alone. Dogs are social animals, and eight-plus hours is a long time for any of them. But some breeds genuinely cope better with a few hours than others — and if your week includes a commute, that difference matters. Here's the realistic picture.",
    howChosenTitle: "The honest ground rules",
    howChosen: [
      "Four hours is a sensible everyday ceiling for most adult dogs; six is the occasional stretch, not the routine.",
      "Being alone is learned, not inherited. Even an independent breed needs alone time built up in minutes, then hours, from the first weeks.",
      "A walked, settled dog rests; an under-exercised one dismantles your kitchen. What happens before you leave matters more than the breed.",
      "Puppies, seniors and rescue dogs in their first months are a different question entirely — they need far more company.",
    ],
    listTitle: "Breeds that typically cope best",
    listIntro:
      "These breeds score highest for independence and alone tolerance in the same trait data the matching engine uses. Independent often also means less clingy — and sometimes less interested in obedience.",
    metrics: [
      { key: "aloneTolerance", label: "Time alone" },
      { key: "independence", label: "Independence" },
      { key: "energy", label: "Energy" },
      { key: "trainability", label: "Trainability" },
    ],
    readProfile: "Read the full profile",
    tradeoffNote:
      "The trade-off is real: the same independence that lets these dogs rest while you're out often makes them less eager to please when you're home. If you work long days every day, the kinder answer isn't a tougher breed — it's a dog walker, daycare, or waiting a few years.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  } ,
  no: {
    eyebrow: "Velge hund",
    h1: "Hunder som tåler å være alene",
    intro:
      "La oss starte med det ærlige: ingen hund bør regelmessig være alene en hel arbeidsdag. Hunder er sosiale dyr, og åtte timer eller mer er lenge for dem. Men noen raser takler noen timer bedre enn andre – og hvis uken din inkluderer pendling, betyr den forskjellen noe. Her er det realistiske bildet.",
    howChosenTitle: "De ærlige grunnreglene",
    howChosen: [
      "Fire timer er en fornuftig daglig grense for de fleste voksne hunder; seks timer er en sjelden strekk, ikke rutinen.",
      "Å være alene læres, ikke arves. Selv en selvstendig rase trenger at alenetiden bygges opp fra minutter, så timer, fra de første ukene.",
      "En luftet, rolig hund hviler; en understimulert hund demonterer kjøkkenet ditt. Hva som skjer før du drar, betyr mer enn rasen.",
      "Valper, eldre hunder og omplasseringshunder de første månedene er et helt annet spørsmål – de trenger mye mer selskap.",
    ],
    listTitle: "Raser som vanligvis takler det best",
    listIntro:
      "Disse rasene scorer høyest på selvstendighet og alenetoleranse i de samme egenskapene som matchemotoren bruker. Selvstendig betyr ofte også mindre klengete – og noen ganger mindre interessert i lydighet.",
    metrics: [
      { key: "aloneTolerance", label: "Tid alene" },
      { key: "independence", label: "Selvstendighet" },
      { key: "energy", label: "Energi" },
      { key: "trainability", label: "Trenbarhet" },
    ],
    readProfile: "Les hele profilen",
    tradeoffNote:
      "Kompromisset er reelt: den samme selvstendigheten som lar disse hundene hvile mens du er borte, gjør dem ofte mindre ivrige etter å behage når du er hjemme. Hvis du jobber lange dager hver dag, er det snilleste svaret ikke en tøffere rase – det er en hundelufter, daghjem, eller å vente noen år.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
pl: {
    eyebrow: "Wybór psa",
    h1: "Psy, które poradzą sobie z zostawaniem same",
    intro:
      "Zacznijmy od szczerości: żaden pies nie powinien regularnie spędzać sam całego dnia pracy. Psy są zwierzętami stadnymi, a osiem godzin lub więcej to długo dla każdego z nich. Ale niektóre rasy naprawdę lepiej znoszą kilka godzin sam na sam niż inne – a jeśli Twój tydzień obejmuje dojazdy, ta różnica ma znaczenie. Oto realistyczny obraz.",
    howChosenTitle: "Szczere zasady",
    howChosen: [
      "Cztery godziny to rozsądny codzienny limit dla większości dorosłych psów; sześć to okazjonalne naciąganie, a nie rutyna.",
      "Samotność jest wyuczona, nie odziedziczona. Nawet niezależna rasa potrzebuje budowania czasu spędzanego sam na sam, zaczynając od minut, potem godzin, od pierwszych tygodni.",
      "Wyprowadzony, uspokojony pies odpoczywa; pies z niedostateczną ilością ruchu demontuje Twoją kuchnię. To, co dzieje się przed Twoim wyjściem, ma większe znaczenie niż rasa.",
      "Szczenięta, starsze psy i psy ze schroniska w pierwszych miesiącach to zupełnie inna sprawa – potrzebują znacznie więcej towarzystwa.",
    ],
    listTitle: "Rasy, które zazwyczaj radzą sobie najlepiej",
    listIntro:
      "Te rasy uzyskują najwyższe wyniki pod względem niezależności i tolerancji na samotność w tych samych danych cech, których używa silnik dopasowujący. Niezależny często oznacza również mniej przywiązany – a czasem mniej zainteresowany posłuszeństwem.",
    metrics: [
      { key: "aloneTolerance", label: "Czas sam" },
      { key: "independence", label: "Niezależność" },
      { key: "energy", label: "Energia" },
      { key: "trainability", label: "Szkolność" },
    ],
    readProfile: "Przeczytaj pełny profil",
    tradeoffNote:
      "Kompromis jest realny: ta sama niezależność, która pozwala tym psom odpoczywać, gdy Cię nie ma, często sprawia, że są mniej chętne do zadowolenia, gdy jesteś w domu. Jeśli pracujesz długie dni każdego dnia, łagodniejszą odpowiedzią nie jest trudniejsza rasa – to spacer z psem, żłobek dla psów lub poczekanie kilka lat.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
dk: {
    eyebrow: "Valg af hund",
    h1: "Hunde der kan klare at være alene hjemme",
    intro:
      "Lad os starte med det ærlige: ingen hund bør regelmæssigt tilbringe en hel arbejdsdag alene. Hunde er sociale dyr, og otte timer eller mere er lang tid for dem. Men nogle racer klarer sig ærligt talt bedre med et par timer end andre – og hvis din uge inkluderer transport, betyder den forskel noget. Her er det realistiske billede.",
    howChosenTitle: "De ærlige grundregler",
    howChosen: [
      "Fire timer er et fornuftigt dagligt loft for de fleste voksne hunde; seks er en lejlighedsvis strækning, ikke rutinen.",
      "At være alene læres, ikke arves. Selv en uafhængig race har brug for alenetid opbygget i minutter, derefter timer, fra de første uger.",
      "En gået, afbalanceret hund hviler; en understimuleret hund demonterer dit køkken. Hvad der sker før du går, betyder mere end racen.",
      "Hvalpe, seniorer og redningshunde i deres første måneder er et helt andet spørgsmål – de har brug for langt mere selskab.",
    ],
    listTitle: "Racer der typisk klarer sig bedst",
    listIntro:
      "Disse racer scorer højest for uafhængighed og alene-tolerance i de samme trækdata, som matchende motor bruger. Uafhængig betyder ofte også mindre klyngende – og nogle gange mindre interesseret i lydighed.",
    metrics: [
      { key: "aloneTolerance", label: "Tid alene" },
      { key: "independence", label: "Uafhængighed" },
      { key: "energy", label: "Energi" },
      { key: "trainability", label: "Træningsvillighed" },
    ],
    readProfile: "Læs hele profilen",
    tradeoffNote:
      "Afvejningen er reel: den samme uafhængighed, der lader disse hunde hvile, mens du er ude, gør dem ofte mindre ivrige efter at behage, når du er hjemme. Hvis du arbejder lange dage hver dag, er det venligere svar ikke en sejere race – det er en hundelufter, dagpleje eller at vente et par år.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
se: {
    eyebrow: "Välja hund",
    h1: "Hundar som klarar sig bra ensamma hemma",
    intro:
      "Låt oss börja med det ärliga: ingen hund bör regelbundet tillbringa en hel arbetsdag ensam. Hundar är sociala djur, och åtta timmar eller mer är lång tid för dem. Men vissa raser klarar sig ärligt talat bättre med några timmar än andra – och om din vecka inkluderar pendling, spelar den skillnaden roll. Här är den realistiska bilden.",
    howChosenTitle: "De ärliga grundreglerna",
    howChosen: [
      "Fyra timmar är ett rimligt dagligt tak för de flesta vuxna hundar; sex är enstaka undantag, inte rutinen.",
      "Att vara ensam lärs in, inte ärvs. Även en självständig ras behöver att ensamtid byggs upp i minuter, sedan timmar, från de första veckorna.",
      "En rastad, lugn hund vilar; en understimulerad hund river ditt kök. Vad som händer innan du går hemifrån är viktigare än rasen.",
      "Valpar, seniorer och omplaceringshundar under sina första månader är en helt annan fråga – de behöver mycket mer sällskap.",
    ],
    listTitle: "Raser som vanligtvis klarar sig bäst",
    listIntro:
      "Dessa raser får högst poäng för självständighet och ensamhetstolerans i samma egenskapsdata som matchningsmotorn använder. Självständig betyder ofta också mindre klängig – och ibland mindre intresserad av lydnad.",
    metrics: [
      { key: "aloneTolerance", label: "Tid ensam" },
      { key: "independence", label: "Självständighet" },
      { key: "energy", label: "Energi" },
      { key: "trainability", label: "Träningsbarhet" },
    ],
    readProfile: "Läs hela profilen",
    tradeoffNote:
      "Avvägningen är verklig: samma självständighet som låter dessa hundar vila medan du är borta gör dem ofta mindre angelägna att behaga när du är hemma. Om du arbetar långa dagar varje dag, är det snällare svaret inte en tuffare ras – det är en hundvakt, dagis eller att vänta några år.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
fi: {
    eyebrow: "Koiran valinta",
    h1: "Koirat, jotka selviävät yksin olosta",
    intro:
      "Aloitetaan rehellisesti: mikään koira ei saisi säännöllisesti viettää koko työpäivää yksin. Koirat ovat sosiaalisia eläimiä, ja kahdeksan tuntia tai enemmän on pitkä aika kenelle tahansa niistä. Mutta jotkut rodut selviävät muutamasta tunnista paremmin kuin toiset – ja jos viikkoosi kuuluu työmatka, sillä erolla on merkitystä. Tässä on realistinen kuva.",
    howChosenTitle: "Rehelliset pelisäännöt",
    howChosen: [
      "Neljä tuntia on järkevä päivittäinen yläraja useimmille aikuisille koirille; kuusi tuntia on satunnainen venytys, ei rutiini.",
      "Yksin oleminen opitaan, ei peritä. Jopa itsenäinen rotu tarvitsee yksinoloajan rakentamista minuuteista, sitten tunneista, ensimmäisistä viikoista alkaen.",
      "Ulkona käynyt, rauhoittunut koira lepää; liian vähän liikuntaa saanut koira purkaa keittiösi. Se, mitä tapahtuu ennen lähtöäsi, on tärkeämpää kuin rotu.",
      "Pennut, seniorit ja ensimmäisten kuukausien pelastuskoirat ovat täysin eri asia – ne tarvitsevat paljon enemmän seuraa.",
    ],
    listTitle: "Rodut, jotka yleensä selviävät parhaiten",
    listIntro:
      "Nämä rodut saavat korkeimmat pisteet itsenäisyydestä ja yksinolo-sietokyvystä samoista ominaisuusdataista, joita sovitusmoottori käyttää. Itsenäinen tarkoittaa usein myös vähemmän takertuvaa – ja joskus vähemmän kiinnostunutta tottelevaisuudesta.",
    metrics: [
      { key: "aloneTolerance", label: "Aika yksin" },
      { key: "independence", label: "Itsenäisyys" },
      { key: "energy", label: "Energia" },
      { key: "trainability", label: "Koulutettavuus" },
    ],
    readProfile: "Lue koko profiili",
    tradeoffNote:
      "Kompensaatio on todellinen: sama itsenäisyys, joka antaa näiden koirien levätä poissaolosi aikana, tekee niistä usein vähemmän halukkaita miellyttämään ollessasi kotona. Jos työskentelet pitkiä päiviä joka päivä, ystävällisempi vastaus ei ole sitkeämpi rotu – se on koiran ulkoiluttaja, päivähoito tai muutaman vuoden odottaminen.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
de: {
    eyebrow: "Hundauswahl",
    h1: "Hunde, die damit zurechtkommen, allein gelassen zu werden",
    intro:
      "Fangen wir ehrlich an: Kein Hund sollte regelmäßig einen ganzen Arbeitstag allein verbringen. Hunde sind soziale Tiere, und acht Stunden oder mehr sind für jeden von ihnen eine lange Zeit. Aber einige Rassen kommen mit ein paar Stunden ehrlich gesagt besser zurecht als andere – und wenn Ihre Woche eine Pendelstrecke beinhaltet, macht dieser Unterschied einen Unterschied. Hier ist das realistische Bild.",
    howChosenTitle: "Die ehrlichen Grundregeln",
    howChosen: [
      "Vier Stunden sind eine vernünftige tägliche Obergrenze für die meisten erwachsenen Hunde; sechs sind eine gelegentliche Ausnahme, keine Routine.",
      "Alleinsein wird gelernt, nicht vererbt. Selbst eine unabhängige Rasse muss das Alleinsein von Minuten, dann Stunden, von den ersten Wochen an aufbauen.",
      "Ein gelaufener, ausgeglichener Hund ruht; ein unterforderter Hund demontiert Ihre Küche. Was vor Ihrem Weggehen passiert, ist wichtiger als die Rasse.",
      "Welpen, Senioren und Rettungshunde in ihren ersten Monaten sind eine ganz andere Frage – sie brauchen viel mehr Gesellschaft.",
    ],
    listTitle: "Rassen, die typischerweise am besten zurechtkommen",
    listIntro:
      "Diese Rassen erzielen die höchsten Werte in Bezug auf Unabhängigkeit und Alleinsein-Toleranz in denselben Merkmal-Daten, die die Matching-Engine verwendet. Unabhängig bedeutet oft auch weniger anhänglich – und manchmal weniger an Gehorsam interessiert.",
    metrics: [
      { key: "aloneTolerance", label: "Zeit allein" },
      { key: "independence", label: "Unabhängigkeit" },
      { key: "energy", label: "Energie" },
      { key: "trainability", label: "Trainierbarkeit" },
    ],
    readProfile: "Vollständiges Profil lesen",
    tradeoffNote:
      "Der Kompromiss ist real: Dieselbe Unabhängigkeit, die diesen Hunden erlaubt, sich auszuruhen, während Sie weg sind, macht sie oft weniger bestrebt zu gefallen, wenn Sie zu Hause sind. Wenn Sie jeden Tag lange arbeiten, ist die freundlichere Antwort keine zähere Rasse – es ist ein Hundesitter, eine Hundetagesstätte oder ein paar Jahre zu warten.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
fr: {
    eyebrow: "Choisir un chien",
    h1: "Les chiens qui peuvent supporter d'être laissés seuls",
    intro:
      "Commençons par la franchise : aucun chien ne devrait régulièrement passer une journée de travail entière seul. Les chiens sont des animaux sociaux, et huit heures ou plus, c'est long pour n'importe lequel d'entre eux. Mais certaines races s'en sortent honnêtement mieux avec quelques heures que d'autres – et si votre semaine comprend un trajet, cette différence compte. Voici le tableau réaliste.",
    howChosenTitle: "Les règles de base honnêtes",
    howChosen: [
      "Quatre heures est un plafond quotidien raisonnable pour la plupart des chiens adultes ; six est un étirement occasionnel, pas la routine.",
      "Être seul s'apprend, ne s'hérite pas. Même une race indépendante a besoin que le temps passé seul soit construit en minutes, puis en heures, dès les premières semaines.",
      "Un chien promené et calmé se repose ; un chien sous-stimulé démolit votre cuisine. Ce qui se passe avant votre départ est plus important que la race.",
      "Les chiots, les seniors et les chiens de sauvetage dans leurs premiers mois sont une toute autre question – ils ont besoin de beaucoup plus de compagnie.",
    ],
    listTitle: "Races qui s'en sortent généralement le mieux",
    listIntro:
      "Ces races obtiennent les scores les plus élevés en matière d'indépendance et de tolérance à la solitude dans les mêmes données de traits que le moteur de correspondance utilise. Indépendant signifie souvent aussi moins pot-de-colle – et parfois moins intéressé par l'obéissance.",
    metrics: [
      { key: "aloneTolerance", label: "Temps seul" },
      { key: "independence", label: "Indépendance" },
      { key: "energy", label: "Énergie" },
      { key: "trainability", label: "Dressabilité" },
    ],
    readProfile: "Lire le profil complet",
    tradeoffNote:
      "Le compromis est réel : la même indépendance qui permet à ces chiens de se reposer pendant votre absence les rend souvent moins désireux de plaire lorsque vous êtes à la maison. Si vous travaillez de longues journées tous les jours, la réponse la plus gentille n'est pas une race plus résistante – c'est un promeneur de chiens, une garderie ou attendre quelques années.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
nl: {
    eyebrow: "Een hond kiezen",
    h1: "Honden die het aankunnen om alleen gelaten te worden",
    intro:
      "Laten we eerlijk beginnen: geen enkele hond zou regelmatig een hele werkdag alleen moeten doorbrengen. Honden zijn sociale dieren, en acht uur of langer is lang voor elk van hen. Maar sommige rassen kunnen eerlijk gezegd beter omgaan met een paar uur dan andere – en als uw week een woon-werkverkeer inhoudt, is dat verschil belangrijk. Hier is het realistische beeld.",
    howChosenTitle: "De eerlijke basisregels",
    howChosen: [
      "Vier uur is een verstandig dagelijks maximum voor de meeste volwassen honden; zes is een incidentele rek, geen routine.",
      "Alleen zijn wordt aangeleerd, niet geërfd. Zelfs een onafhankelijk ras heeft behoefte aan opbouw van alleen-tijd in minuten, dan uren, vanaf de eerste weken.",
      "Een uitgelaten, rustige hond rust uit; een ondergestimuleerde hond ontmantelt uw keuken. Wat er gebeurt voordat u vertrekt, is belangrijker dan het ras.",
      "Puppy's, senioren en reddingshonden in hun eerste maanden zijn een heel ander verhaal – zij hebben veel meer gezelschap nodig.",
    ],
    listTitle: "Rassen die doorgaans het beste omgaan met alleen zijn",
    listIntro:
      "Deze rassen scoren het hoogst op onafhankelijkheid en tolerantie voor alleen zijn in dezelfde kenmerkgegevens die de matching-engine gebruikt. Onafhankelijk betekent vaak ook minder aanhankelijk – en soms minder geïnteresseerd in gehoorzaamheid.",
    metrics: [
      { key: "aloneTolerance", label: "Tijd alleen" },
      { key: "independence", label: "Onafhankelijkheid" },
      { key: "energy", label: "Energie" },
      { key: "trainability", label: "Trainbaarheid" },
    ],
    readProfile: "Lees het volledige profiel",
    tradeoffNote:
      "De afweging is reëel: dezelfde onafhankelijkheid die deze honden laat rusten terwijl u weg bent, maakt ze vaak minder gretig om te behagen als u thuis bent. Als u elke dag lange dagen werkt, is het vriendelijkere antwoord geen taaier ras – het is een hondenuitlater, dagopvang of een paar jaar wachten.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  }
},
  shortlist: byIds([
    "great-pyrenees",
    "chinese-shar-pei",
    "chow-chow",
    "lhasa-apso",
    "shiba-inu",
    "akita",
    "basenji",
    "rhodesian-ridgeback",
  ]),
  reasons: { en: {
    "great-pyrenees":
      "Bred to watch flocks alone for days — calm and self-sufficient, but giant, sheddy and fond of night barking.",
    "chinese-shar-pei":
      "Naturally reserved and content with its own company; skin and eyes need an owner who stays on top of care.",
    "chow-chow": "The most cat-like of dogs — aloof, quiet and undemanding indoors, but not a cuddler and not for first-timers.",
    "lhasa-apso": "A small, independent watchdog bred for monastery life; the coat is a lifelong commitment.",
    "shiba-inu": "Fastidious, quiet and happy alone for reasonable stretches — with a stubborn streak in training.",
    akita: "Dignified and self-contained; powerful, protective and best with an experienced owner.",
    basenji: "Famously barkless and independent — but clever enough to invent mischief if under-exercised.",
    "rhodesian-ridgeback":
      "Athletic outside, settled and independent at home; needs real exercise before any alone time counts.",
  } ,
  no: {
    "great-pyrenees":
      "Opprinnelig avlet for å vokte flokker alene i dager — rolig og selvstendig, men gigantisk, røyter mye og glad i nattlig bjeffing.",
    "chinese-shar-pei":
      "Naturlig reservert og fornøyd med sitt eget selskap; hud og øyne krever en eier som er nøye med stell.",
    "chow-chow": "Den mest kattelignende hunden — reservert, stille og lite krevende innendørs, men ikke en kosehund og ikke for nybegynnere.",
    "lhasa-apso": "En liten, selvstendig vakthund avlet for klosterliv; pelsen er en livslang forpliktelse.",
    "shiba-inu": "Nøysom, stille og fornøyd alene i rimelig tid — med en sta side under trening.",
    akita: "Verdig og selvsikker; kraftig, beskyttende og best med en erfaren eier.",
    basenji: "Berømt bjeffefri og selvstendig — men smart nok til å finne på ugagn hvis den ikke får nok mosjon.",
    "rhodesian-ridgeback":
      "Atletisk ute, rolig og selvstendig hjemme; trenger skikkelig mosjon før alenetid teller.",
  },
pl: {
    "great-pyrenees":
      "Hodowany do samotnego pilnowania stad przez wiele dni — spokojny i samowystarczalny, ale olbrzymi, liniejący i skłonny do nocnego szczekania.",
    "chinese-shar-pei":
      "Naturalnie powściągliwy i zadowolony z własnego towarzystwa; skóra i oczy wymagają właściciela, który dba o pielęgnację.",
    "chow-chow": "Najbardziej kocia z psów — zdystansowany, cichy i niewymagający w domu, ale nie do przytulania i nie dla początkujących.",
    "lhasa-apso": "Mały, niezależny pies stróżujący hodowany do życia w klasztorze; sierść to zobowiązanie na całe życie.",
    "shiba-inu": "Czysty, cichy i szczęśliwy sam przez rozsądny czas — z upartym charakterem podczas szkolenia.",
    akita: "Godny i opanowany; silny, opiekuńczy i najlepszy z doświadczonym właścicielem.",
    basenji: "Słynnie bezszczekający i niezależny — ale na tyle sprytny, by wymyślać psoty, jeśli nie jest wystarczająco aktywny.",
    "rhodesian-ridgeback":
      "Atletyczny na zewnątrz, spokojny i niezależny w domu; potrzebuje prawdziwego wysiłku fizycznego, zanim jakikolwiek czas spędzony sam na sam będzie miał znaczenie.",
  },
dk: {
    "great-pyrenees":
      "Avlet til at vogte flokke alene i dagevis — rolig og selvstændig, men kæmpestor, fælder meget og glad for at gø om natten.",
    "chinese-shar-pei":
      "Naturligt reserveret og tilfreds med sit eget selskab; hud og øjne kræver en ejer, der holder sig oven på plejen.",
    "chow-chow": "Den mest katteagtige af hunde — reserveret, stille og ukompliceret indendørs, men ikke en krammehund og ikke for førstegangs hundeejere.",
    "lhasa-apso": "En lille, uafhængig vagthund avlet til klosterliv; pelsen er en livslang forpligtelse.",
    "shiba-inu": "Pæn, stille og glad alene i rimelig tid — med en stædig side i træningen.",
    akita: "Værdig og selvbevidst; kraftfuld, beskyttende og bedst med en erfaren ejer.",
    basenji: "Berømt gø-fri og uafhængig — men klog nok til at finde på ballade, hvis den ikke får nok motion.",
    "rhodesian-ridgeback":
      "Atletisk ude, afslappet og uafhængig hjemme; har brug for reel motion, før alenetid tæller.",
  },
se: {
    "great-pyrenees":
      "Avlad för att ensam vakta hjordar i dagar — lugn och självständig, men gigantisk, fäller mycket och förtjust i nattligt skällande.",
    "chinese-shar-pei":
      "Naturligt reserverad och nöjd med sitt eget sällskap; hud och ögon behöver en ägare som håller koll på skötseln.",
    "chow-chow": "Den mest kattlika av hundar — reserverad, tyst och okomplicerad inomhus, men inte en knähund och inte för förstagångsägare.",
    "lhasa-apso": "En liten, självständig vakthund avlad för klosterliv; pälsen är ett livslångt åtagande.",
    "shiba-inu": "Noggrann, tyst och nöjd ensam under rimliga perioder — med en envis sida i träningen.",
    akita: "Värdig och självbehärskad; kraftfull, beskyddande och bäst med en erfaren ägare.",
    basenji: "Berömt skällfri och självständig — men tillräckligt smart för att hitta på bus om den inte får tillräckligt med motion.",
    "rhodesian-ridgeback":
      "Atletisk utomhus, lugn och självständig hemma; behöver ordentlig motion innan någon ensamtid räknas.",
  },
fi: {
    "great-pyrenees":
      "Rodutettu vartioimaan laumoja yksin päiviä — rauhallinen ja omatoiminen, mutta jättimäinen, karvaa irrottava ja yöllä haukkuva.",
    "chinese-shar-pei":
      "Luonnostaan pidättyväinen ja viihtyy omissa oloissaan; iho ja silmät vaativat omistajan, joka pysyy hoidon tasalla.",
    "chow-chow": "Kissojen kaltaisin koira — etäinen, hiljainen ja vähän vaativa sisällä, mutta ei sylikoira eikä ensikertalaisille.",
    "lhasa-apso": "Pieni, itsenäinen vahtikoira luostarielämään jalostettu; turkki on elinikäinen sitoumus.",
    "shiba-inu": "Siisti, hiljainen ja viihtyy yksin kohtuullisen pitkiä aikoja — mutta itsepäinen koulutuksessa.",
    akita: "Arvokas ja itsevarma; voimakas, suojeleva ja parhaimmillaan kokeneen omistajan kanssa.",
    basenji: "Kuuluisan haukkumaton ja itsenäinen — mutta tarpeeksi fiksu keksimään ilkikurisuutta, jos se ei saa tarpeeksi liikuntaa.",
    "rhodesian-ridgeback":
      "Urheilullinen ulkona, rauhallinen ja itsenäinen kotona; tarvitsee kunnon liikuntaa ennen kuin yksinoloaika merkitsee mitään.",
  },
de: {
    "great-pyrenees":
      "Gezüchtet, um Herden tagelang allein zu bewachen — ruhig und eigenständig, aber riesig, haarend und bellt gerne nachts.",
    "chinese-shar-pei":
      "Von Natur aus zurückhaltend und mit sich selbst zufrieden; Haut und Augen benötigen einen Besitzer, der sich um die Pflege kümmert.",
    "chow-chow": "Die katzenartigste aller Hunde — distanziert, ruhig und anspruchslos im Haus, aber kein Kuschelhund und nichts für Anfänger.",
    "lhasa-apso": "Ein kleiner, unabhängiger Wachhund, gezüchtet für das Klosterleben; das Fell ist eine lebenslange Verpflichtung.",
    "shiba-inu": "Sorgfältig, ruhig und glücklich allein für angemessene Zeiträume — mit einem sturen Zug beim Training.",
    akita: "Würdevoll und in sich gekehrt; kräftig, beschützend und am besten mit einem erfahrenen Besitzer.",
    basenji: "Berühmt bellfrei und unabhängig — aber clever genug, um Unfug zu erfinden, wenn er unterfordert ist.",
    "rhodesian-ridgeback":
      "Draußen athletisch, zu Hause ruhig und unabhängig; braucht echte Bewegung, bevor allein sein zählt.",
  },
fr: {
    "great-pyrenees":
      "Élevé pour garder des troupeaux seul pendant des jours — calme et autonome, mais géant, perd beaucoup ses poils et aime aboyer la nuit.",
    "chinese-shar-pei":
      "Naturellement réservé et content de sa propre compagnie ; la peau et les yeux nécessitent un propriétaire qui reste au fait des soins.",
    "chow-chow": "Le plus félin des chiens — distant, silencieux et peu exigeant à l'intérieur, mais pas un câlineur et pas pour les débutants.",
    "lhasa-apso": "Un petit chien de garde indépendant élevé pour la vie monastique ; le pelage est un engagement à vie.",
    "shiba-inu": "Méticuleux, silencieux et heureux seul pendant des périodes raisonnables — avec une touche d'entêtement à l'entraînement.",
    akita: "Digne et réservé ; puissant, protecteur et idéal avec un propriétaire expérimenté.",
    basenji: "Célèbrement sans aboiement et indépendant — mais assez intelligent pour inventer des bêtises s'il n'est pas assez exercé.",
    "rhodesian-ridgeback":
      "Athlétique dehors, calme et indépendant à la maison ; a besoin de vrai exercice avant que le temps passé seul ne compte.",
  },
nl: {
    "great-pyrenees":
      "Fokt om kuddes dagenlang alleen te bewaken — kalm en zelfvoorzienend, maar gigantisch, verhaart veel en houdt van nachtelijk geblaf.",
    "chinese-shar-pei":
      "Van nature gereserveerd en tevreden met zijn eigen gezelschap; huid en ogen hebben een eigenaar nodig die bovenop de verzorging blijft.",
    "chow-chow": "De meest katachtige hond — afstandelijk, stil en veeleisend binnenshuis, maar geen knuffelaar en niet voor beginners.",
    "lhasa-apso": "Een kleine, onafhankelijke waakhond gefokt voor het kloosterleven; de vacht is een levenslange verplichting.",
    "shiba-inu": "Netjes, stil en tevreden alleen voor redelijke periodes — met een eigenwijze kant tijdens training.",
    akita: "Waardig en ingehouden; krachtig, beschermend en het best met een ervaren eigenaar.",
    basenji: "Beroemd blafvrij en onafhankelijk — maar slim genoeg om kattenkwaad uit te halen als hij te weinig beweging krijgt.",
    "rhodesian-ridgeback":
      "Atletisch buiten, rustig en onafhankelijk thuis; heeft echte beweging nodig voordat alleen zijn telt.",
  }
},
};

/* ------------------------------------------------------------------ */
/* 4. Low-shedding & allergies                                         */
/* ------------------------------------------------------------------ */

export const LOW_SHEDDING_GUIDE: LifestyleGuideConfig = {
  id: "low-shedding-dogs",
  path: "/low-shedding-dogs",
  seo: { en: {
    title: "Low-shedding dogs and allergies | DoggMatch",
    description:
      "Which dogs shed least, why no dog is truly hypoallergenic, and how to think it through if someone at home is allergic — plus the grooming trade-offs.",
  } ,
  no: {
    title: "Hunder som røyter lite og allergier | DoggMatch",
    description:
      "Hvilke hunder røyter minst, hvorfor ingen hund er helt allergivennlig, og hvordan du kan tenke deg om hvis noen hjemme er allergisk – pluss avveiningene med pelsstell.",
  },
pl: {
    title: "Psy o niskim linieniu sierści i alergie | DoggMatch",
    description:
      "Które psy linieją najmniej, dlaczego żadne psy nie są w pełni hipoalergiczne i jak to przemyśleć, jeśli ktoś w domu ma alergię – plus kompromisy związane z pielęgnacją sierści.",
  },
dk: {
    title: "Hunde med lavt fældning og allergier | DoggMatch",
    description:
      "Hvilke hunde fælder mindst, hvorfor ingen hund er helt allergivenlig, og hvordan du kan tænke dig om, hvis nogen derhjemme er allergisk – plus pelsplejeovervejelserne.",
  },
se: {
    title: "Hundar som fäller lite och allergier | DoggMatch",
    description:
      "Vilka hundar fäller minst, varför ingen hund är helt allergivänlig, och hur du kan tänka igenom det om någon i hemmet är allergisk – plus avvägningarna med pälsvård.",
  },
fi: {
    title: "Vähän karvaa irrottavat koirat ja allergiat | DoggMatch",
    description:
      "Mitkä koirat irrottavat vähiten karvaa, miksi mikään koira ei ole täysin hypoallergeeninen ja miten asia kannattaa miettiä, jos kotona on allerginen henkilö – sekä turkinhoidon kompromissit.",
  },
de: {
    title: "Hunde mit geringem Haarausfall und Allergien | DoggMatch",
    description:
      "Welche Hunde haaren am wenigsten, warum kein Hund wirklich hypoallergen ist und wie Sie darüber nachdenken sollten, wenn jemand zu Hause allergisch ist – plus die Kompromisse bei der Fellpflege.",
  },
fr: {
    title: "Chiens qui perdent peu leurs poils et allergies | DoggMatch",
    description:
      "Quels chiens perdent le moins leurs poils, pourquoi aucun chien n'est vraiment hypoallergénique, et comment y réfléchir si quelqu'un à la maison est allergique – plus les compromis liés au toilettage.",
  },
nl: {
    title: "Honden die weinig verharen en allergieën | DoggMatch",
    description:
      "Welke honden verharen het minst, waarom geen enkele hond echt hypoallergeen is, en hoe u erover kunt nadenken als iemand thuis allergisch is – plus de afwegingen bij de vachtverzorging.",
  }
},
  copy: { en: {
    eyebrow: "Choosing a dog",
    h1: "Low-shedding dogs, and living with allergies",
    intro:
      "If someone in your home reacts to dogs, you've probably been told to 'get a hypoallergenic breed'. Here is the honest version: there is no such thing. But there are dogs that spread far less of what triggers the reaction — and for many families that's enough. Here's what actually helps, and what it costs you in grooming.",
    howChosenTitle: "What the science actually says",
    howChosen: [
      "The trigger is a protein (Can f 1) found in saliva, skin flakes and urine — not in hair itself. Every dog produces it.",
      "Low-shedding coats hold onto dander instead of dropping it around the house. That reduces how much spreads — it doesn't remove it.",
      "Studies have found no consistent difference in allergen levels between 'hypoallergenic' and ordinary breeds. Individual dogs vary more than breeds do.",
      "Low shedding almost always means high grooming: coats that don't fall out keep growing, and need clipping every 6–8 weeks for life.",
    ],
    listTitle: "Breeds that shed the least",
    listIntro:
      "Eight breeds with genuinely low-shedding coats in our trait data. Treat this as a starting point for meeting dogs — not a guarantee.",
    metrics: [
      { key: "shedding", label: "Shedding" },
      { key: "grooming", label: "Grooming" },
      { key: "energy", label: "Energy" },
      { key: "firstTimeSuitability", label: "First-time owners" },
    ],
    readProfile: "Read the full profile",
    tradeoffNote:
      "Before you commit: spend several hours with adult dogs of the exact breed, more than once, and talk to a doctor — ideally with an allergy test. A trial visit beats any list, including this one. The quiz asks about allergies at home and weighs shedding into every match it makes.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  } ,
  no: {
    eyebrow: "Velge en hund",
    h1: "Hunder som røyter lite, og livet med allergi",
    intro:
      "Hvis noen i hjemmet ditt reagerer på hunder, har du sannsynligvis fått beskjed om å 'skaffe deg en allergivennlig rase'. Her er den ærlige versjonen: det finnes ikke noe slikt. Men det finnes hunder som sprer langt mindre av det som utløser reaksjonen — og for mange familier er det nok. Her er hva som faktisk hjelper, og hva det koster deg i pelsstell.",
    howChosenTitle: "Hva vitenskapen faktisk sier",
    howChosen: [
      "Utløseren er et protein (Can f 1) som finnes i spytt, hudflak og urin — ikke i selve pelsen. Alle hunder produserer det.",
      "Pels som røyter lite, holder på flass i stedet for å slippe det rundt i huset. Det reduserer mengden som spres — det fjerner det ikke.",
      "Studier har ikke funnet noen konsekvent forskjell i allergennivåer mellom 'allergivennlige' og vanlige raser. Individuelle hunder varierer mer enn raser.",
      "Lite røyting betyr nesten alltid mye pelsstell: pels som ikke faller av, fortsetter å vokse og trenger klipp hver 6.–8. uke livet ut.",
    ],
    listTitle: "Raser som røyter minst",
    listIntro:
      "Åtte raser med genuint lite røyting i våre data. Se på dette som et utgangspunkt for å møte hunder — ikke en garanti.",
    metrics: [
      { key: "shedding", label: "Røyting" },
      { key: "grooming", label: "Pelsstell" },
      { key: "energy", label: "Energi" },
      { key: "firstTimeSuitability", label: "Førstegangseiere" },
    ],
    readProfile: "Les hele profilen",
    tradeoffNote:
      "Før du forplikter deg: tilbring flere timer med voksne hunder av nøyaktig den rasen, mer enn én gang, og snakk med en lege — ideelt sett med en allergitest. Et prøvebesøk slår enhver liste, inkludert denne. Spørsmålene om allergi hjemme veier røyting inn i hver eneste match.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
pl: {
    eyebrow: "Wybieranie psa",
    h1: "Psy liniejące mało i życie z alergiami",
    intro:
      "Jeśli ktoś w Twoim domu reaguje na psy, prawdopodobnie usłyszałeś/aś radę: 'weź rasę hipoalergiczną'. Oto szczera prawda: takie nie istnieją. Ale są psy, które rozsiewają znacznie mniej tego, co wywołuje reakcję — i dla wielu rodzin to wystarczy. Oto, co naprawdę pomaga i jaki jest koszt pielęgnacji.",
    howChosenTitle: "Co mówi nauka?",
    howChosen: [
      "Alergenem jest białko (Can f 1) znajdujące się w ślinie, naskórku i moczu — nie w samym włosie. Każdy pies je produkuje.",
      "Sierść, która mało linieje, zatrzymuje naskórek zamiast rozsiewać go po domu. To zmniejsza ilość rozprzestrzeniania się alergenu — ale go nie usuwa.",
      "Badania nie wykazały spójnych różnic w poziomie alergenów między rasami 'hipoalergicznymi' a zwykłymi. Poszczególne psy różnią się bardziej niż rasy.",
      "Małe linienie prawie zawsze oznacza intensywną pielęgnację: sierść, która nie wypada, rośnie dalej i wymaga strzyżenia co 6–8 tygodni przez całe życie.",
    ],
    listTitle: "Rasy, które linieją najmniej",
    listIntro:
      "Osiem ras z faktycznie mało liniejącą sierścią w naszych danych. Traktuj to jako punkt wyjścia do poznawania psów — nie gwarancję.",
    metrics: [
      { key: "shedding", label: "Linienie" },
      { key: "grooming", label: "Pielęgnacja" },
      { key: "energy", label: "Energia" },
      { key: "firstTimeSuitability", label: "Dla początkujących" },
    ],
    readProfile: "Przeczytaj pełny profil",
    tradeoffNote:
      "Zanim się zdecydujesz: spędź kilka godzin z dorosłymi psami dokładnie tej rasy, więcej niż raz, i skonsultuj się z lekarzem — najlepiej wykonaj test alergiczny. Wizyta próbna jest lepsza niż jakakolwiek lista, w tym ta. Quiz pyta o alergie w domu i uwzględnia linienie w każdym dopasowaniu.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
dk: {
    eyebrow: "Valg af hund",
    h1: "Hunde med lav fældning og livet med allergi",
    intro:
      "Hvis nogen i dit hjem reagerer på hunde, har du sikkert fået at vide, at du skal 'få en allergivenlig race'. Her er den ærlige version: der findes ikke noget sådant. Men der findes hunde, der spreder langt mindre af det, der udløser reaktionen — og for mange familier er det nok. Her er, hvad der faktisk hjælper, og hvad det koster dig i pelspleje.",
    howChosenTitle: "Hvad videnskaben faktisk siger",
    howChosen: [
      "Udløseren er et protein (Can f 1), der findes i spyt, hudskæl og urin — ikke i selve pelsen. Alle hunde producerer det.",
      "Pels, der fælder lidt, holder på skæl i stedet for at sprede det rundt i huset. Det reducerer mængden, der spredes — det fjerner det ikke.",
      "Studier har ikke fundet nogen konsekvent forskel i allergenniveauer mellem 'allergivenlige' og almindelige racer. Individuelle hunde varierer mere end racer.",
      "Lav fældning betyder næsten altid høj pelspleje: pels, der ikke falder af, bliver ved med at vokse og skal klippes hver 6.-8. uge for livet.",
    ],
    listTitle: "Racer, der fælder mindst",
    listIntro:
      "Otte racer med ægte lav fældning i vores data. Betragt dette som et udgangspunkt for at møde hunde — ikke en garanti.",
    metrics: [
      { key: "shedding", label: "Fældning" },
      { key: "grooming", label: "Pelspleje" },
      { key: "energy", label: "Energi" },
      { key: "firstTimeSuitability", label: "Førstegangs hundeejere" },
    ],
    readProfile: "Læs hele profilen",
    tradeoffNote:
      "Før du forpligter dig: tilbring flere timer med voksne hunde af den præcise race, mere end én gang, og tal med en læge — ideelt set med en allergitest. Et prøvebesøg slår enhver liste, inklusive denne. Quizzen spørger om allergier i hjemmet og vægter fældning i hver eneste match.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
se: {
    eyebrow: "Välja hund",
    h1: "Hundar som fäller lite och att leva med allergier",
    intro:
      "Om någon i ditt hem reagerar på hundar, har du förmodligen fått rådet att 'skaffa en allergivänlig ras'. Här är den ärliga versionen: det finns inget sådant. Men det finns hundar som sprider betydligt mindre av det som utlöser reaktionen — och för många familjer räcker det. Här är vad som faktiskt hjälper, och vad det kostar dig i pälsvård.",
    howChosenTitle: "Vad säger vetenskapen egentligen?",
    howChosen: [
      "Utlösaren är ett protein (Can f 1) som finns i saliv, hudflagor och urin — inte i själva pälsen. Varje hund producerar det.",
      "Päls som fäller lite håller kvar mjäll istället för att sprida det i hemmet. Det minskar mängden som sprids — det tar inte bort det.",
      "Studier har inte funnit några konsekventa skillnader i allergennivåer mellan 'allergivänliga' och vanliga raser. Enskilda hundar varierar mer än raser.",
      "Lite fällning innebär nästan alltid mycket pälsvård: päls som inte faller av fortsätter att växa och behöver klippas var 6–8:e vecka livet ut.",
    ],
    listTitle: "Raser som fäller minst",
    listIntro:
      "Åtta raser med genuint lite fällning i våra data. Se detta som en utgångspunkt för att träffa hundar — inte en garanti.",
    metrics: [
      { key: "shedding", label: "Fällning" },
      { key: "grooming", label: "Pälsvård" },
      { key: "energy", label: "Energi" },
      { key: "firstTimeSuitability", label: "Förstagångsägare" },
    ],
    readProfile: "Läs hela profilen",
    tradeoffNote:
      "Innan du bestämmer dig: tillbringa flera timmar med vuxna hundar av exakt den rasen, mer än en gång, och prata med en läkare — helst med ett allergitest. Ett besök för att prova på slår vilken lista som helst, inklusive denna. Frågorna om allergier hemma väger in fällning i varje matchning.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
fi: {
    eyebrow: "Koiran valinta",
    h1: "Vähän karvaa irrottavat koirat ja elämä allergioiden kanssa",
    intro:
      "Jos joku kodissasi reagoi koiriin, olet luultavasti kuullut neuvon 'hankkikaa hypoallergeeninen rotu'. Tässä rehellinen versio: sellaista ei ole olemassa. Mutta on olemassa koiria, jotka levittävät paljon vähemmän sitä, mikä laukaisee reaktion — ja monille perheille se riittää. Tässä kerrotaan, mikä todella auttaa ja mitä se maksaa turkinhoidossa.",
    howChosenTitle: "Mitä tiede todella sanoo",
    howChosen: [
      "Laukaisija on proteiini (Can f 1), jota löytyy syljestä, hilseestä ja virtsasta — ei itse karvasta. Jokainen koira tuottaa sitä.",
      "Vähän karvaa irrottava turkki pitää hilseen sisällään sen sijaan, että se leviäisi ympäri taloa. Se vähentää leviävää määrää — ei poista sitä.",
      "Tutkimukset eivät ole löytäneet johdonmukaista eroa allergeenitasoissa 'hypoallergeenisten' ja tavallisten rotujen välillä. Yksittäiset koirat vaihtelevat enemmän kuin rodut.",
      "Vähäinen karvanlähtö tarkoittaa lähes aina runsasta turkinhoitoa: turkki, joka ei irtoa, kasvaa jatkuvasti ja vaatii leikkausta 6–8 viikon välein koko elämän ajan.",
    ],
    listTitle: "Rodut, jotka irrottavat vähiten karvaa",
    listIntro:
      "Kahdeksan rotua, joilla on todella vähän karvanlähtöä datassamme. Käytä tätä lähtökohtana koirien tapaamiseen — ei takuuna.",
    metrics: [
      { key: "shedding", label: "Karvanlähtö" },
      { key: "grooming", label: "Turkinhoito" },
      { key: "energy", label: "Energia" },
      { key: "firstTimeSuitability", label: "Ensikertalaiset omistajat" },
    ],
    readProfile: "Lue koko profiili",
    tradeoffNote:
      "Ennen sitoutumista: vietä useita tunteja täsmälleen kyseisen rodun aikuisten koirien kanssa, useammin kuin kerran, ja keskustele lääkärin kanssa — mieluiten allergiatestin avulla. Kokeilukäynti on parempi kuin mikään lista, tämä mukaan lukien. Kyselyssä kysytään kodin allergioista ja otetaan karvanlähtö huomioon jokaisessa sopivuusarviossa.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
de: {
    eyebrow: "Einen Hund auswählen",
    h1: "Hunde mit geringem Haarausfall und das Leben mit Allergien",
    intro:
      "Wenn jemand in Ihrem Haushalt auf Hunde reagiert, haben Sie wahrscheinlich den Rat erhalten, 'eine hypoallergene Rasse zu wählen'. Hier ist die ehrliche Version: so etwas gibt es nicht. Aber es gibt Hunde, die weitaus weniger von dem verbreiten, was die Reaktion auslöst — und für viele Familien reicht das aus. Hier erfahren Sie, was tatsächlich hilft und was Sie an Fellpflege kostet.",
    howChosenTitle: "Was die Wissenschaft wirklich sagt",
    howChosen: [
      "Der Auslöser ist ein Protein (Can f 1), das im Speichel, in Hautschuppen und im Urin vorkommt — nicht im Haar selbst. Jeder Hund produziert es.",
      "Haarkleider mit geringem Haarausfall halten Schuppen fest, anstatt sie im Haus zu verteilen. Das reduziert die Menge, die sich verbreitet — es entfernt sie nicht.",
      "Studien haben keine konsistenten Unterschiede im Allergengehalt zwischen 'hypoallergenen' und gewöhnlichen Rassen gefunden. Einzelne Hunde variieren stärker als Rassen.",
      "Geringer Haarausfall bedeutet fast immer hohe Fellpflege: Haarkleider, die nicht ausfallen, wachsen weiter und müssen lebenslang alle 6–8 Wochen getrimmt werden.",
    ],
    listTitle: "Rassen mit dem geringsten Haarausfall",
    listIntro:
      "Acht Rassen mit nachweislich geringem Haarausfall in unseren Daten. Betrachten Sie dies als Ausgangspunkt für das Kennenlernen von Hunden — nicht als Garantie.",
    metrics: [
      { key: "shedding", label: "Haarausfall" },
      { key: "grooming", label: "Fellpflege" },
      { key: "energy", label: "Energie" },
      { key: "firstTimeSuitability", label: "Für Erstbesitzer" },
    ],
    readProfile: "Vollständiges Profil lesen",
    tradeoffNote:
      "Bevor Sie sich festlegen: Verbringen Sie mehrere Stunden mit erwachsenen Hunden der exakten Rasse, mehr als einmal, und sprechen Sie mit einem Arzt — idealerweise mit einem Allergietest. Ein Probesbesuch ist besser als jede Liste, auch diese. Der Quiz fragt nach Allergien im Haushalt und berücksichtigt den Haarausfall bei jeder Übereinstimmung.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
fr: {
    eyebrow: "Choisir un chien",
    h1: "Chiens à faible perte de poils et la vie avec des allergies",
    intro:
      "Si quelqu'un dans votre foyer réagit aux chiens, on vous a probablement dit de 'prendre une race hypoallergénique'. Voici la version honnête : il n'existe rien de tel. Mais il existe des chiens qui dispersent beaucoup moins ce qui déclenche la réaction — et pour de nombreuses familles, cela suffit. Voici ce qui aide réellement, et ce que cela vous coûte en toilettage.",
    howChosenTitle: "Ce que dit réellement la science",
    howChosen: [
      "Le déclencheur est une protéine (Can f 1) présente dans la salive, les squames et l'urine — pas dans le poil lui-même. Chaque chien en produit.",
      "Les pelages qui perdent peu de poils retiennent les squames au lieu de les disperser dans la maison. Cela réduit la quantité qui se propage — cela ne l'élimine pas.",
      "Les études n'ont trouvé aucune différence constante dans les niveaux d'allergènes entre les races 'hypoallergéniques' et ordinaires. Les chiens individuels varient plus que les races.",
      "Une faible perte de poils signifie presque toujours un toilettage élevé : les pelages qui ne tombent pas continuent de pousser et nécessitent une coupe toutes les 6 à 8 semaines à vie.",
    ],
    listTitle: "Races qui perdent le moins de poils",
    listIntro:
      "Huit races avec des pelages à faible perte de poils dans nos données. Considérez ceci comme un point de départ pour rencontrer des chiens — pas une garantie.",
    metrics: [
      { key: "shedding", label: "Perte de poils" },
      { key: "grooming", label: "Toilettage" },
      { key: "energy", label: "Énergie" },
      { key: "firstTimeSuitability", label: "Pour les nouveaux propriétaires" },
    ],
    readProfile: "Lire le profil complet",
    tradeoffNote:
      "Avant de vous engager : passez plusieurs heures avec des chiens adultes de la race exacte, plus d'une fois, et parlez-en à un médecin — idéalement avec un test d'allergie. Une visite d'essai vaut mieux que n'importe quelle liste, y compris celle-ci. Le quiz pose des questions sur les allergies à la maison et prend en compte la perte de poils dans chaque correspondance.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  },
nl: {
    eyebrow: "Een hond kiezen",
    h1: "Honden die weinig verharen, en leven met allergieën",
    intro:
      "Als iemand in uw huishouden reageert op honden, heeft u waarschijnlijk het advies gekregen om 'een hypoallergeen ras te nemen'. Hier is de eerlijke versie: dat bestaat niet. Maar er zijn honden die veel minder verspreiden van wat de reactie uitlokt — en voor veel gezinnen is dat genoeg. Hier leest u wat echt helpt, en wat het u kost aan vachtverzorging.",
    howChosenTitle: "Wat de wetenschap echt zegt",
    howChosen: [
      "De trigger is een eiwit (Can f 1) dat voorkomt in speeksel, huidschilfers en urine — niet in het haar zelf. Elke hond produceert het.",
      "Vachten die weinig verharen, houden huidschilfers vast in plaats van ze door het huis te verspreiden. Dat vermindert de hoeveelheid die zich verspreidt — het verwijdert het niet.",
      "Studies hebben geen consistente verschillen gevonden in allergeenniveaus tussen 'hypoallergene' en gewone rassen. Individuele honden variëren meer dan rassen.",
      "Weinig verharen betekent bijna altijd veel vachtverzorging: vachten die niet uitvallen, blijven groeien en moeten levenslang elke 6–8 weken geknipt worden.",
    ],
    listTitle: "Rassen die het minst verharen",
    listIntro:
      "Acht rassen met echt weinig haarverlies in onze gegevens. Beschouw dit als een startpunt om honden te ontmoeten — niet als een garantie.",
    metrics: [
      { key: "shedding", label: "Verharen" },
      { key: "grooming", label: "Vachtverzorging" },
      { key: "energy", label: "Energie" },
      { key: "firstTimeSuitability", label: "Voor beginnende eigenaren" },
    ],
    readProfile: "Lees het volledige profiel",
    tradeoffNote:
      "Voordat u zich vastlegt: breng meerdere uren door met volwassen honden van het exacte ras, meer dan eens, en praat met een arts — idealiter met een allergietest. Een proefbezoek is beter dan welke lijst dan ook, inclusief deze. De quiz vraagt naar allergieën in huis en weegt haarverlies mee in elke match.",
    quizTitle: quizBlock.quizTitle,
    quizBody: quizBlock.quizBody,
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  }
},
  shortlist: byIds([
    "poodle",
    "miniature-schnauzer",
    "shih-tzu",
    "bichon-frise",
    "yorkshire-terrier",
    "maltipoo",
    "havanese",
    "maltese",
  ]),
  reasons: { en: {
    poodle: "The benchmark low-shedding coat — clever, trainable, and at the groomer every 6–8 weeks without fail.",
    "miniature-schnauzer":
      "Hardly sheds at all and full of character; needs hand-stripping or clipping and firm, kind training.",
    "shih-tzu": "Hair rather than fluff — very little drops, but daily brushing or a short clip is non-negotiable.",
    "bichon-frise": "A cheerful powder-puff that keeps its coat to itself; professional grooming is a fixed monthly cost.",
    "yorkshire-terrier":
      "Silky, low-shedding and portable; a big-dog voice in a small body, and a coat that tangles fast.",
    maltipoo:
      "A popular low-shedding cross — coats vary puppy to puppy, so meet the litter rather than trusting the label.",
    havanese: "Gentle, sociable and light on shedding; the long coat needs daily attention or a practical pet clip.",
    maltese: "Centuries as a companion, barely sheds — but the white coat shows every tear stain and tangle.",
  } ,
  no: {
    poodle: "Pels som knapt røyter – smart, trenbar, og må til frisøren hver 6.–8. uke uten unntak.",
    "miniature-schnauzer":
      "Røyter nesten ikke og er full av personlighet; trenger håndstripping eller klipp og fast, vennlig trening.",
    "shih-tzu": "Hår heller enn pels – det faller av lite, men daglig børsting eller en kort klipp er et must.",
    "bichon-frise": "En glad bomullsdott som holder pelsen for seg selv; profesjonell pelsstell er en fast månedlig utgift.",
    "yorkshire-terrier":
      "Silkeaktig, røytefattig og lett å ha med seg; en stor hunds stemme i en liten kropp, og en pels som floker seg fort.",
    maltipoo:
      "En populær krysning som røyter lite – pelsen varierer fra valp til valp, så møt kullet heller enn å stole på merkelappen.",
    havanese: "Mild, sosial og røyter lite; den lange pelsen trenger daglig stell eller en praktisk hundefrisyre.",
    maltese: "Århundrer som selskapshund, røyter knapt – men den hvite pelsen viser hver tårestripe og floke.",
  },
pl: {
    poodle: "Sier ikke mye om røyting – smart, trenbar, og må til frisøren hver 6.–8. uke uten unntak.",
    "miniature-schnauzer":
      "Røyter nesten ikke og er full av personlighet; trenger håndstripping eller klipp og fast, vennlig trening.",
    "shih-tzu": "Hår heller enn pels – det faller av lite, men daglig børsting eller en kort klipp er et must.",
    "bichon-frise": "En glad bomullsdott som holder pelsen for seg selv; profesjonell pelsstell er en fast månedlig utgift.",
    "yorkshire-terrier":
      "Silkeaktig, røytefattig og lett å ha med seg; en stor hunds stemme i en liten kropp, og en pels som floker seg fort.",
    maltipoo:
      "En populær krysning som røyter lite – pelsen varierer fra valp til valp, så møt kullet heller enn å stole på merkelappen.",
    havanese: "Mild, sosial og røyter lite; den lange pelsen trenger daglig stell eller en praktisk hundefrisyre.",
    maltese: "Århundrer som selskapshund, røyter knapt – men den hvite pelsen viser hver tårestripe og floke.",
  },
dk: {
    poodle: "Den ideelle pels, der fælder minimalt – klog, træningsvillig og skal til frisøren hver 6.-8. uge uden undtagelse.",
    "miniature-schnauzer":
      "Fælder næsten ikke og er fuld af personlighed; kræver håndstripping eller klipning og fast, venlig træning.",
    "shih-tzu": "Mere hår end pels – der falder meget lidt af, men daglig børstning eller en kort klipning er et must.",
    "bichon-frise": "En glad pudderkvast, der holder sin pels for sig selv; professionel pelspleje er en fast månedlig udgift.",
    "yorkshire-terrier":
      "Silkeblød, fældefattig og nem at have med; en stor hunds stemme i en lille krop, og en pels, der filtrer hurtigt.",
    maltipoo:
      "Et populært kryds, der fælder minimalt – pelsen varierer fra hvalp til hvalp, så mød kuldet frem for at stole på mærkatet.",
    havanese: "Mild, social og fælder let; den lange pels kræver daglig opmærksomhed eller en praktisk hundeklipning.",
    maltese: "Århundreder som selskabshund, fælder knap – men den hvide pels viser hver en tårestribe og tot.",
  },
se: {
    poodle: "Den ultimata pälsen som fäller minimalt – smart, lättlärd och måste till frisören var 6–8:e vecka utan undantag.",
    "miniature-schnauzer":
      "Fäller nästan ingenting och är full av personlighet; kräver handstrippning eller klippning och fast, vänlig träning.",
    "shih-tzu": "Mer hår än päls – det fälls väldigt lite, men daglig borstning eller en kort klippning är ett måste.",
    "bichon-frise": "En glad bomullstuss som håller sin päls för sig själv; professionell pälsvård är en fast månadskostnad.",
    "yorkshire-terrier":
      "Silkeslen, fäller lite och lätt att ta med sig; en stor hunds röst i en liten kropp, och en päls som trasslar sig snabbt.",
    maltipoo:
      "En populär korsning som fäller lite – pälsen varierar från valp till valp, så träffa kullen istället för att lita på etiketten.",
    havanese: "Mild, social och fäller lätt; den långa pälsen kräver daglig uppmärksamhet eller en praktisk hundklippning.",
    maltese: "Århundraden som sällskapshund, fäller knappt – men den vita pälsen visar varje tårfläck och tova.",
  },
fi: {
    poodle: "Täydellinen turkki, joka irrottaa vähän karvaa – älykäs, koulutettava ja trimmaajalla 6–8 viikon välein varmuudella.",
    "miniature-schnauzer":
      "Irrottaa tuskin lainkaan karvaa ja on täynnä luonnetta; vaatii käsinnyppimistä tai leikkausta ja jämäkkää, ystävällistä koulutusta.",
    "shih-tzu": "Hiusmainen turkki, ei untuvaa – karvaa lähtee vähän, mutta päivittäinen harjaus tai lyhyt leikkaus on ehdoton.",
    "bichon-frise": "Iloinen pumpulipallo, joka pitää turkkinsa itsellään; ammattimainen turkinhoito on kiinteä kuukausikulu.",
    "yorkshire-terrier":
      "Silkkimäinen, vähän karvaa irrottava ja helppo kuljettaa; ison koiran ääni pienessä kehossa, ja turkki, joka takkuuntuu nopeasti.",
    maltipoo:
      "Suosittu risteytys, joka irrottaa vähän karvaa – turkki vaihtelee pennusta toiseen, joten tapaa pentue mieluummin kuin luota merkintään.",
    havanese: "Lempeä, sosiaalinen ja irrottaa vähän karvaa; pitkä turkki vaatii päivittäistä hoitoa tai käytännöllistä leikkausta.",
    maltese: "Vuosisatoja seurakoirana, irrottaa tuskin lainkaan karvaa – mutta valkoinen turkki näyttää jokaisen kyyneljuovan ja takun.",
  },
de: {
    poodle: "Das vorbildliche Fell, das kaum haart – clever, trainierbar und alle 6–8 Wochen zuverlässig beim Hundefriseur.",
    "miniature-schnauzer":
      "Haart so gut wie gar nicht und ist voller Charakter; benötigt Handstripping oder Scherenschnitt und eine feste, liebevolle Erziehung.",
    "shih-tzu": "Eher Haar als Fell – es fällt sehr wenig aus, aber tägliches Bürsten oder ein kurzer Haarschnitt sind unerlässlich.",
    "bichon-frise": "Ein fröhlicher Pudel, der sein Fell für sich behält; professionelle Fellpflege ist eine feste monatliche Ausgabe.",
    "yorkshire-terrier":
      "Seidiges, haarendarmes und portables Fell; die Stimme eines großen Hundes in einem kleinen Körper und ein Fell, das schnell verfilzt.",
    maltipoo:
      "Eine beliebte, haarendarme Kreuzung – das Fell variiert von Welpe zu Welpe, treffen Sie also den Wurf, anstatt dem Etikett zu vertrauen.",
    havanese: "Sanft, gesellig und haart wenig; das lange Fell benötigt tägliche Pflege oder einen praktischen Hundeschnitt.",
    maltese: "Jahrhunderte als Begleiter, haart kaum – aber das weiße Fell zeigt jeden Tränenfleck und jede Verfilzung.",
  },
fr: {
    poodle: "Le pelage idéal qui perd peu ses poils – intelligent, dressable et chez le toiletteur toutes les 6 à 8 semaines sans faute.",
    "miniature-schnauzer":
      "Ne perd presque pas ses poils et est plein de caractère ; nécessite un épilation à la main ou une tonte et une éducation ferme et douce.",
    "shih-tzu": "Des poils plutôt que de la fourrure – très peu tombent, mais un brossage quotidien ou une coupe courte est non négociable.",
    "bichon-frise": "Une joyeuse boule de coton qui garde son pelage pour elle ; le toilettage professionnel est un coût mensuel fixe.",
    "yorkshire-terrier":
      "Soie, perd peu ses poils et portable ; la voix d'un grand chien dans un petit corps, et un pelage qui s'emmêle vite.",
    maltipoo:
      "Un croisement populaire qui perd peu ses poils – le pelage varie de chiot en chiot, alors rencontrez la portée plutôt que de faire confiance à l'étiquette.",
    havanese: "Doux, sociable et perd peu ses poils ; le long pelage nécessite une attention quotidienne ou une coupe pratique.",
    maltese: "Des siècles comme compagnon, perd à peine ses poils – mais le pelage blanc montre chaque larme et nœud.",
  },
nl: {
    poodle: "De ideale vacht die weinig verhaart – slim, trainbaar en elke 6–8 weken zonder falen bij de trimmer.",
    "miniature-schnauzer":
      "Verhaart nauwelijks en zit vol karakter; heeft handstrippen of knippen nodig en een stevige, vriendelijke training.",
    "shih-tzu": "Meer haar dan vacht – er valt weinig uit, maar dagelijks borstelen of een korte trimbeurt is een must.",
    "bichon-frise": "Een vrolijke poederdons die zijn vacht voor zichzelf houdt; professionele vachtverzorging is een vaste maandelijkse kostenpost.",
    "yorkshire-terrier":
      "Zijdezacht, verhaart weinig en is draagbaar; de stem van een grote hond in een klein lichaam, en een vacht die snel in de klitten raakt.",
    maltipoo:
      "Een populaire kruising die weinig verhaart – de vacht varieert van pup tot pup, dus ontmoet het nest in plaats van het etiket te vertrouwen.",
    havanese: "Zachtaardig, sociaal en verhaart licht; de lange vacht heeft dagelijkse aandacht of een praktische trimbeurt nodig.",
    maltese: "Eeuwenlang gezelschapshond, verhaart nauwelijks – maar de witte vacht toont elke traanvlek en klit.",
  }
},
};

/* ------------------------------------------------------------------ */
/* 5. What a dog really costs                                          */
/* ------------------------------------------------------------------ */

type CostExample = { breed: Breed; sizeLabel: CopyMap<string> };

function costExample(id: string, sizeLabel: CopyMap<string>): CostExample | null {
  const breed = breeds.find((b) => b.id === id);
  return breed ? { breed, sizeLabel } : null;
}

export const COST_GUIDE: LifestyleGuideConfig = {
  id: "what-a-dog-costs",
  path: "/what-a-dog-costs",
  seo: { en: {
    title: "What a dog really costs each year | DoggMatch",
    description:
      "An honest yearly budget for a dog: food, vet care, insurance, grooming and the costs everyone forgets — with real ranges and the first year counted apart.",
  } ,
  no: {
    title: "Hva en hund virkelig koster hvert år | DoggMatch",
    description:
      "Et ærlig årsbudsjett for en hund: mat, veterinærutgifter, forsikring, pelsstell og kostnadene alle glemmer — med reelle spenn og det første året talt separat.",
  },
pl: {
    title: "Ile naprawdę kosztuje pies rocznie | DoggMatch",
    description:
      "Uczciwy roczny budżet dla psa: jedzenie, opieka weterynaryjna, ubezpieczenie, pielęgnacja i koszty, o których wszyscy zapominają — z realnymi przedziałami i pierwszym rokiem liczonym osobno.",
  },
dk: {
    title: "Hvad en hund virkelig koster hvert år | DoggMatch",
    description:
      "Et ærligt årsbudget for en hund: mad, dyrlægepleje, forsikring, pelspleje og de omkostninger, alle glemmer — med reelle intervaller og det første år talt separat.",
  },
se: {
    title: "Vad en hund verkligen kostar varje år | DoggMatch",
    description:
      "En ärlig årsbudget för en hund: mat, veterinärvård, försäkring, pälsvård och de kostnader alla glömmer — med verkliga intervall och det första året räknat separat.",
  },
fi: {
    title: "Mitä koira todella maksaa vuosittain | DoggMatch",
    description:
      "Rehellinen vuosibudjetti koiralle: ruoka, eläinlääkärikulut, vakuutus, turkinhoito ja kustannukset, jotka kaikki unohtavat — todellisilla vaihteluväleillä ja ensimmäinen vuosi laskettuna erikseen.",
  },
de: {
    title: "Was ein Hund wirklich jedes Jahr kostet | DoggMatch",
    description:
      "Ein ehrliches Jahresbudget für einen Hund: Futter, Tierarztkosten, Versicherung, Fellpflege und die Kosten, die alle vergessen — mit realen Spannen und dem ersten Jahr separat berechnet.",
  },
fr: {
    title: "Combien coûte vraiment un chien chaque année | DoggMatch",
    description:
      "Un budget annuel honnête pour un chien : nourriture, soins vétérinaires, assurance, toilettage et les coûts que tout le monde oublie — avec des fourchettes réelles et la première année comptée séparément.",
  },
nl: {
    title: "Wat een hond echt per jaar kost | DoggMatch",
    description:
      "Een eerlijk jaarlijks budget voor een hond: voer, dierenartskosten, verzekering, vachtverzorging en de kosten die iedereen vergeet — met echte prijsranges en het eerste jaar apart berekend.",
  }
,
},
  copy: { en: {
    eyebrow: "Before you decide",
    h1: "What a dog really costs",
    intro:
      "Most people budget for food and forget the rest. The honest answer is that a dog costs more than the purchase price every single year — and the first year most of all. None of this is meant to put you off. It's meant to make sure the dog you bring home never has to pay for a budget that wasn't real.",
    howChosenTitle: "How these numbers work",
    howChosen: [
      "Every range below is a planning figure, not a quote — costs vary by country, by the size of the dog, and by individual health.",
      "The first year includes one-off costs: the dog itself, equipment, initial vaccinations, and often castration or spaying.",
      "Insurance is the single biggest variable. Get a real quote for the exact breed before you commit — premiums differ enormously.",
      "All figures are in euros. Every breed profile on DoggMatch carries a full cost calculator with the same ranges, broken down line by line.",
    ],
    metrics: [],
    readProfile: "See the full cost breakdown",
    sections: [
      {
        title: "The first year",
        paragraphs: [
          "Expect roughly €1,500–€4,000 depending on the dog and where you live. The dog itself is usually the largest single line: a well-bred puppy from health-tested parents typically costs €1,000–€2,500, while adoption fees are usually €150–€400 and include the first vet work.",
          "Then come the one-offs people forget: vaccinations and microchipping, castration or spaying (often €200–€600), equipment like a bed, lead, crate and bowls (€200–€400), and a puppy training course (€100–€250). Add pet insurance from day one — the month you skip is the month something happens.",
        ],
      },
      {
        title: "Every year after",
        paragraphs: [
          "Food scales with size: a small dog might eat €25–€40 a month, a large one €70–€120. Routine vet care — vaccinations, worming, flea and tick treatment, an annual check — is a predictable €150–€400 a year. Insurance typically runs €20–€60 a month and rises as the dog ages.",
          "Grooming is the quiet budget-breaker. Short-coated dogs need almost nothing; a poodle-coated dog needs professional clipping every 6–8 weeks, which is €400–€900 a year, every year, for life.",
        ],
      },
      {
        title: "The costs almost everyone forgets",
        paragraphs: [
          "Holidays: boarding or a sitter easily adds €300–€800 a year if you travel. Dental work: many dogs need at least one professional clean in mid-life, often €300–€700. And the buffer: sooner or later there is a year with a swallowed sock, a torn cruciate ligament or an unexplained limp, and that year costs €1,000–€4,000 you didn't plan.",
          "A working rule of thumb: if the regular budget is comfortable and you can absorb a surprise €2,000 without debt, you're ready. If either part makes you wince, waiting a year and saving is the kindest thing you can do for your future dog.",
        ],
      },
      {
        title: "Where the money actually goes",
        paragraphs: [
          "Below are three real examples from our breed data — the yearly range we show on each breed's profile, covering food, routine care, grooming and the rest. The spread within each range is mostly size, country and insurance choices.",
        ],
      },
    ],
    quizTitle: "See what your shortlist would really cost",
    quizBody:
      "Every breed profile carries the same honest yearly range, and the Find My Dog quiz matches you with breeds that fit your week — so the budget you plan is for a dog that actually suits your life.",
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
    costTable: {
      example: "Example",
      breed: "Breed",
      yearly: "Typical yearly cost",
    },
  } ,
  no: {
    eyebrow: "Før du bestemmer deg",
    h1: "Hva en hund virkelig koster",
    intro:
      "De fleste budsjetterer for mat og glemmer resten. Det ærlige svaret er at en hund koster mer enn innkjøpsprisen hvert eneste år – og det første året aller mest. Ingenting av dette er ment for å skremme deg bort. Det er ment for å sikre at hunden du tar med hjem, aldri må betale for et budsjett som ikke var realistisk.",
    howChosenTitle: "Slik fungerer disse tallene",
    howChosen: [
      "Hvert intervall nedenfor er et planleggingstall, ikke et tilbud – kostnadene varierer etter land, hundens størrelse og individuell helse.",
      "Det første året inkluderer engangskostnader: selve hunden, utstyr, innledende vaksinasjoner og ofte kastrering eller sterilisering.",
      "Forsikring er den største enkeltvariabelen. Få et reelt tilbud for den nøyaktige rasen før du forplikter deg – premier varierer enormt.",
      "Alle tall er i euro. Hver raseprofil på DoggMatch har en full kostnadskalkulator med de samme intervallene, brutt ned linje for linje.",
    ],
    metrics: [],
    readProfile: "Se full kostnadsfordeling",
    sections: [
      {
        title: "Det første året",
        paragraphs: [
          "Forvent omtrent 1500–4000 € avhengig av hunden og hvor du bor. Selve hunden er vanligvis den største enkeltposten: en godt avlet valp fra helsetestede foreldre koster vanligvis 1000–2500 €, mens adopsjonsgebyrer vanligvis er 150–400 € og inkluderer det første veterinærarbeidet.",
          "Deretter kommer engangskostnadene folk glemmer: vaksinasjoner og mikrochip, kastrering eller sterilisering (ofte 200–600 €), utstyr som seng, bånd, bur og skåler (200–400 €), og et valpekurs (100–250 €). Legg til dyreforsikring fra dag én – måneden du hopper over, er måneden noe skjer.",
        ],
      },
      {
        title: "Hvert år etter",
        paragraphs: [
          "Fôr skalerer med størrelse: en liten hund kan spise 25–40 € i måneden, en stor 70–120 €. Rutinemessig veterinærpleie – vaksinasjoner, ormekur, flått- og loppebehandling, en årlig sjekk – koster forutsigbart 150–400 € i året. Forsikring koster vanligvis 20–60 € i måneden og øker etter hvert som hunden blir eldre.",
          "Pelsstell er den stille budsjettsprengeren. Kortpelsede hunder trenger nesten ingenting; en hund med puddelpels trenger profesjonell klipp hver 6.–8. uke, noe som koster 400–900 € i året, hvert år, resten av livet.",
        ],
      },
      {
        title: "Kostnadene nesten alle glemmer",
        paragraphs: [
          "Ferie: kennel eller en passord legger lett til 300–800 € i året hvis du reiser. Tannarbeid: mange hunder trenger minst én profesjonell tannrens i midten av livet, ofte 300–700 €. Og bufferen: før eller senere kommer et år med en svelget sokk, en revnet korsbånd eller en uforklarlig halting, og det året koster 1000–4000 € du ikke hadde planlagt for.",
          "En generell tommelfingerregel: hvis det vanlige budsjettet er komfortabelt og du kan absorbere en overraskelse på 2000 € uten gjeld, er du klar. Hvis en av delene får deg til å vri deg, er det å vente et år og spare det snilleste du kan gjøre for din fremtidige hund.",
        ],
      },
      {
        title: "Hvor pengene faktisk går",
        paragraphs: [
          "Nedenfor er tre ekte eksempler fra våre rasematerialer – det årlige intervallet vi viser på hver raseprofil, som dekker fôr, rutinemessig pleie, pelsstell og resten. Spredningen innenfor hvert intervall skyldes mest størrelse, land og forsikringsvalg.",
        ],
      },
    ],
    quizTitle: "Se hva din kortliste virkelig ville kostet",
    quizBody:
      "Hver raseprofil har det samme ærlige årlige intervallet, og Find My Dog-quizen matcher deg med raser som passer din uke – så budsjettet du planlegger er for en hund som faktisk passer ditt liv.",
    quizCta: "Finn min hund",
    compareCta: "Sammenlign hunder",
    levelLabels: {
      low: "Lavt",
      medium: "Middels",
      high: "Høyt",
    },
    costTable: {
      example: "Eksempel",
      breed: "Rase",
      yearly: "Typisk årlig kostnad",
    },
  },
pl: {
    eyebrow: "Zanim podejmiesz decyzję",
    h1: "Ile naprawdę kosztuje pies",
    intro:
      "Większość ludzi planuje budżet na jedzenie i zapomina o reszcie. Szczera prawda jest taka, że pies kosztuje więcej niż cena zakupu każdego roku – a w pierwszym roku najwięcej. Nic z tego nie ma na celu zniechęcenia Cię. Chodzi o to, by upewnić się, że pies, którego przygarniasz, nigdy nie będzie musiał płacić za budżet, który nie był realistyczny.",
    howChosenTitle: "Jak działają te liczby",
    howChosen: [
      "Każdy zakres poniżej to liczba do planowania, a nie wycena – koszty różnią się w zależności od kraju, wielkości psa i indywidualnego stanu zdrowia.",
      "Pierwszy rok obejmuje koszty jednorazowe: samego psa, wyposażenie, wstępne szczepienia i często kastrację lub sterylizację.",
      "Ubezpieczenie jest największą zmienną. Uzyskaj rzeczywistą wycenę dla konkretnej rasy przed podjęciem zobowiązania – składki różnią się ogromnie.",
      "Wszystkie liczby podane są w euro. Każdy profil rasy na DoggMatch zawiera pełny kalkulator kosztów z tymi samymi zakresami, podzielony linia po linii.",
    ],
    metrics: [],
    readProfile: "Zobacz pełne zestawienie kosztów",
    sections: [
      {
        title: "Pierwszy rok",
        paragraphs: [
          "Spodziewaj się około 1500–4000 euro, w zależności od psa i miejsca zamieszkania. Sam pies jest zazwyczaj największym pojedynczym wydatkiem: dobrze wychowany szczeniak od przebadanych pod kątem zdrowia rodziców zazwyczaj kosztuje 1000–2500 euro, podczas gdy opłaty adopcyjne wynoszą zazwyczaj 150–400 euro i obejmują pierwszą opiekę weterynaryjną.",
          "Następnie pojawiają się jednorazowe wydatki, o których ludzie zapominają: szczepienia i chipowanie, kastracja lub sterylizacja (często 200–600 euro), wyposażenie, takie jak legowisko, smycz, klatka i miski (200–400 euro) oraz kurs szkolenia szczeniąt (100–250 euro). Dodaj ubezpieczenie dla zwierząt od pierwszego dnia – miesiąc, który pominięsz, to miesiąc, w którym coś się wydarzy.",
        ],
      },
      {
        title: "Każdy kolejny rok",
        paragraphs: [
          "Karma zależy od wielkości: mały pies może zjeść 25–40 euro miesięcznie, duży 70–120 euro. Rutynowa opieka weterynaryjna – szczepienia, odrobaczanie, leczenie przeciw pchłom i kleszczom, coroczna kontrola – to przewidywalne 150–400 euro rocznie. Ubezpieczenie zazwyczaj kosztuje 20–60 euro miesięcznie i rośnie wraz z wiekiem psa.",
          "Pielęgnacja jest cichym pożeraczem budżetu. Psy z krótką sierścią potrzebują prawie nic; pies z sierścią typu pudel wymaga profesjonalnego strzyżenia co 6–8 tygodni, co kosztuje 400–900 euro rocznie, każdego roku, do końca życia.",
        ],
      },
      {
        title: "Koszty, o których prawie każdy zapomina",
        paragraphs: [
          "Wakacje: hotel dla zwierząt lub opiekun łatwo dodaje 300–800 euro rocznie, jeśli podróżujesz. Zabiegi stomatologiczne: wiele psów potrzebuje co najmniej jednego profesjonalnego czyszczenia w połowie życia, często 300–700 euro. I bufor: prędzej czy później zdarza się rok z połkniętą skarpetką, zerwanym więzadłem krzyżowym lub niewyjaśnioną kulawizną, a ten rok kosztuje 1000–4000 euro, których nie planowałeś.",
          "Ogólna zasada: jeśli regularny budżet jest komfortowy i możesz bez zadłużenia pokryć niespodziewany wydatek 2000 euro, jesteś gotowy. Jeśli którakolwiek z tych części sprawia, że się krzywisz, poczekanie roku i oszczędzanie jest najłaskawszym, co możesz zrobić dla swojego przyszłego psa.",
        ],
      },
      {
        title: "Gdzie faktycznie idą pieniądze",
        paragraphs: [
          "Poniżej znajdują się trzy rzeczywiste przykłady z naszych danych rasowych – roczny zakres, który pokazujemy w profilu każdej rasy, obejmujący jedzenie, rutynową opiekę, pielęgnację i resztę. Rozpiętość w każdym zakresie wynika głównie z wielkości, kraju i wyboru ubezpieczenia.",
        ],
      },
    ],
    quizTitle: "Zobacz, ile naprawdę kosztowałaby Twoja lista",
    quizBody:
      "Każdy profil rasy zawiera ten sam uczciwy roczny zakres, a quiz Find My Dog dopasowuje Cię do ras, które pasują do Twojego tygodnia – dzięki czemu budżet, który planujesz, jest dla psa, który faktycznie pasuje do Twojego życia.",
    quizCta: "Znajdź mojego psa",
    compareCta: "Porównaj psy",
    levelLabels: {
      low: "Niski",
      medium: "Średni",
      high: "Wysoki",
    },
    costTable: {
      example: "Przykład",
      breed: "Rasa",
      yearly: "Typowy roczny koszt",
    },
  },
dk: {
    eyebrow: "Før du beslutter dig",
    h1: "Hvad en hund virkelig koster",
    intro:
      "De fleste budgetterer for mad og glemmer resten. Det ærlige svar er, at en hund koster mere end købsprisen hvert eneste år — og det første år mest af alt. Intet af dette er ment til at afskrække dig. Det er ment til at sikre, at den hund, du bringer hjem, aldrig behøver at betale for et budget, der ikke var realistisk.",
    howChosenTitle: "Sådan fungerer disse tal",
    howChosen: [
      "Hvert interval nedenfor er et planlægningstal, ikke et tilbud — omkostninger varierer efter land, hundens størrelse og individuel sundhed.",
      "Det første år inkluderer engangsomkostninger: selve hunden, udstyr, indledende vaccinationer og ofte kastrering eller sterilisering.",
      "Forsikring er den største enkeltstående variabel. Få et reelt tilbud for den nøjagtige race, før du forpligter dig — præmierne varierer enormt.",
      "Alle tal er i euro. Hver raceprofil på DoggMatch har en fuld omkostningsberegner med de samme intervaller, opdelt linje for linje.",
    ],
    metrics: [],
    readProfile: "Se den fulde omkostningsfordeling",
    sections: [
      {
        title: "Det første år",
        paragraphs: [
          "Forvent cirka 1.500–4.000 € afhængigt af hunden og hvor du bor. Selve hunden er normalt den største enkeltpost: en velavlet hvalp fra sundhedstestede forældre koster typisk 1.000–2.500 €, mens adoptionsgebyrer normalt er 150–400 € og inkluderer det første dyrlægearbejde.",
          "Derefter kommer engangsomkostningerne, som folk glemmer: vaccinationer og chipmærkning, kastrering eller sterilisering (ofte 200–600 €), udstyr som seng, snor, bur og skåle (200–400 €) og et hvalpetræningskursus (100–250 €). Tilføj en kæledyrsforsikring fra dag ét — den måned, du springer over, er den måned, hvor noget sker.",
        ],
      },
      {
        title: "Hvert år derefter",
        paragraphs: [
          "Foder skalerer med størrelse: en lille hund kan spise 25–40 € om måneden, en stor 70–120 €. Rutinemæssig dyrlægepleje — vaccinationer, ormekur, loppe- og flåtbehandling, en årlig kontrol — er en forudsigelig 150–400 € om året. Forsikring koster typisk 20–60 € om måneden og stiger, efterhånden som hunden bliver ældre.",
          "Pelspleje er den stille budgetsprenger. Kortpelsede hunde behøver næsten ingenting; en hund med puddelpels kræver professionel klipning hver 6.–8. uge, hvilket koster 400–900 € om året, hvert år, resten af livet.",
        ],
      },
      {
        title: "Omkostningerne, som næsten alle glemmer",
        paragraphs: [
          "Ferie: pension eller en hundepasser tilføjer nemt 300–800 € om året, hvis du rejser. Tandpleje: mange hunde har brug for mindst én professionel tandrensning i midten af livet, ofte 300–700 €. Og bufferen: før eller siden kommer et år med en slugt sok, en revnet korsbånd eller en uforklarlig halthed, og det år koster 1.000–4.000 €, som du ikke havde planlagt for.",
          "En generel tommelfingerregel: hvis det almindelige budget er komfortabelt, og du kan absorbere en overraskelse på 2.000 € uden gæld, er du klar. Hvis en af delene får dig til at vride dig, er det at vente et år og spare det venligste, du kan gøre for din fremtidige hund.",
        ],
      },
      {
        title: "Hvor pengene rent faktisk går hen",
        paragraphs: [
          "Nedenfor er tre reelle eksempler fra vores racedata — det årlige interval, vi viser på hver races profil, som dækker foder, rutinemæssig pleje, pelspleje og resten. Spredningen inden for hvert interval skyldes mest størrelse, land og forsikringsvalg.",
        ],
      },
    ],
    quizTitle: "Se, hvad din shortlist virkelig ville koste",
    quizBody:
      "Hver raceprofil har det samme ærlige årlige interval, og Find My Dog-quizzen matcher dig med racer, der passer til din uge — så det budget, du planlægger, er for en hund, der rent faktisk passer til dit liv.",
    quizCta: "Find min hund",
    compareCta: "Sammenlign hunde",
    levelLabels: {
      low: "Lav",
      medium: "Mellem",
      high: "Høj",
    },
    costTable: {
      example: "Eksempel",
      breed: "Race",
      yearly: "Typisk årlig omkostning",
    },
  },
se: {
    eyebrow: "Innan du bestämmer dig",
    h1: "Vad en hund verkligen kostar",
    intro:
      "De flesta budgeterar för mat och glömmer resten. Det ärliga svaret är att en hund kostar mer än inköpspriset varje år – och det första året allra mest. Inget av detta är menat att avskräcka dig. Det är menat att säkerställa att hunden du tar hem aldrig behöver betala för en budget som inte var realistisk.",
    howChosenTitle: "Hur dessa siffror fungerar",
    howChosen: [
      "Varje intervall nedan är ett planeringssiffra, inte ett erbjudande – kostnader varierar beroende på land, hundens storlek och individuell hälsa.",
      "Det första året inkluderar engångskostnader: själva hunden, utrustning, initiala vaccinationer och ofta kastrering eller sterilisering.",
      "Försäkring är den enskilt största variabeln. Skaffa ett riktigt erbjudande för den exakta rasen innan du förbinder dig – premier skiljer sig enormt.",
      "Alla siffror är i euro. Varje rasprofil på DoggMatch har en fullständig kostnadskalkylator med samma intervaller, uppdelad rad för rad.",
    ],
    metrics: [],
    readProfile: "Se hela kostnadsfördelningen",
    sections: [
      {
        title: "Det första året",
        paragraphs: [
          "Räkna med cirka 1 500–4 000 € beroende på hunden och var du bor. Själva hunden är oftast den största enskilda posten: en välavlad valp från hälsotestade föräldrar kostar vanligtvis 1 000–2 500 €, medan adoptionsavgifter vanligtvis är 150–400 € och inkluderar det första veterinärarbetet.",
          "Sedan kommer engångskostnaderna som folk glömmer: vaccinationer och chipmärkning, kastrering eller sterilisering (ofta 200–600 €), utrustning som säng, koppel, bur och skålar (200–400 €) och en valpkurs (100–250 €). Lägg till en djurförsäkring från dag ett – den månad du hoppar över är den månad då något händer.",
        ],
      },
      {
        title: "Varje år därefter",
        paragraphs: [
          "Foder skalar med storlek: en liten hund kan äta 25–40 € i månaden, en stor 70–120 €. Rutinmässig veterinärvård – vaccinationer, avmaskning, lopp- och fästingbehandling, en årlig kontroll – är en förutsägbar 150–400 € per år. Försäkring kostar vanligtvis 20–60 € per månad och ökar när hunden blir äldre.",
          "Pälsvård är den tysta budgetdödaren. Kortpälsade hundar behöver nästan ingenting; en hund med pudelliknande päls kräver professionell klippning var 6.–8. vecka, vilket kostar 400–900 € per år, varje år, livet ut.",
        ],
      },
      {
        title: "Kostnaderna som nästan alla glömmer",
        paragraphs: [
          "Semester: pensionat eller en hundvakt lägger lätt till 300–800 € per år om du reser. Tandvård: många hundar behöver minst en professionell tandrengöring i medelåldern, ofta 300–700 €. Och bufferten: förr eller senare kommer ett år med en sväljd strumpa, ett avslitet korsband eller en oförklarlig hälta, och det året kostar 1 000–4 000 € som du inte hade planerat för.",
          "En generell tumregel: om den vanliga budgeten är bekväm och du kan absorbera en överraskning på 2 000 € utan skuld, är du redo. Om någon av delarna får dig att rygga tillbaka, är det att vänta ett år och spara det snällaste du kan göra för din framtida hund.",
        ],
      },
      {
        title: "Var pengarna faktiskt går",
        paragraphs: [
          "Nedan finns tre verkliga exempel från våra rasdata – det årliga intervall vi visar på varje rases profil, som täcker foder, rutinmässig vård, pälsvård och resten. Spridningen inom varje intervall beror mest på storlek, land och försäkringsval.",
        ],
      },
    ],
    quizTitle: "Se vad din kortlista verkligen skulle kosta",
    quizBody:
      "Varje rasprofil har samma ärliga årliga intervall, och Find My Dog-quizzen matchar dig med raser som passar din vecka – så budgeten du planerar är för en hund som faktiskt passar ditt liv.",
    quizCta: "Hitta min hund",
    compareCta: "Jämför hundar",
    levelLabels: {
      low: "Låg",
      medium: "Medel",
      high: "Hög",
    },
    costTable: {
      example: "Exempel",
      breed: "Ras",
      yearly: "Typisk årlig kostnad",
    },
  },
fi: {
    eyebrow: "Ennen kuin päätät",
    h1: "Mitä koira todella maksaa",
    intro:
      "Useimmat budjetoivat ruokaa ja unohtavat loput. Rehellinen vastaus on, että koira maksaa enemmän kuin hankintahinta joka vuosi – ja ensimmäisenä vuonna kaikkein eniten. Mikään tästä ei ole tarkoitettu lannistamaan sinua. Se on tarkoitettu varmistamaan, että koira, jonka otat kotiin, ei koskaan joudu maksamaan budjetista, joka ei ollut todellinen.",
    howChosenTitle: "Miten nämä luvut toimivat",
    howChosen: [
      "Jokainen alla oleva väli on suunnitteluluku, ei tarjous – kustannukset vaihtelevat maan, koiran koon ja yksilöllisen terveyden mukaan.",
      "Ensimmäinen vuosi sisältää kertaluonteiset kustannukset: itse koira, varusteet, ensimmäiset rokotukset ja usein kastraatio tai sterilisaatio.",
      "Vakuutus on suurin yksittäinen muuttuja. Hanki todellinen tarjous tarkalle rodulle ennen sitoutumista – vakuutusmaksut vaihtelevat valtavasti.",
      "Kaikki luvut ovat euroina. Jokaisella DoggMatchin rotuprofiililla on täydellinen kustannuslaskuri samoilla väleillä, eriteltynä rivi riviltä.",
    ],
    metrics: [],
    readProfile: "Katso täydellinen kustannuserittely",
    sections: [
      {
        title: "Ensimmäinen vuosi",
        paragraphs: [
          "Oleta noin 1 500–4 000 € riippuen koirasta ja asuinpaikastasi. Itse koira on yleensä suurin yksittäinen erä: hyvin kasvatettu pentu terveystestatuilta vanhemmilta maksaa yleensä 1 000–2 500 €, kun taas adoptiomaksut ovat yleensä 150–400 € ja sisältävät ensimmäisen eläinlääkärin työn.",
          "Sitten tulevat kertaluonteiset kulut, jotka ihmiset unohtavat: rokotukset ja mikrosirutus, kastraatio tai sterilisaatio (usein 200–600 €), varusteet kuten peti, talutin, häkki ja kupit (200–400 €) ja pentukurssi (100–250 €). Lisää lemmikkivakuutus heti alusta alkaen – kuukausi, jonka jätät väliin, on kuukausi, jolloin jotain tapahtuu.",
        ],
      },
      {
        title: "Joka vuosi sen jälkeen",
        paragraphs: [
          "Ruoka skaalautuu koon mukaan: pieni koira voi syödä 25–40 € kuukaudessa, suuri 70–120 €. Rutiininomainen eläinlääkärihoito – rokotukset, madotus, kirppu- ja punkkikäsittely, vuosittainen tarkastus – on ennakoitavissa oleva 150–400 € vuodessa. Vakuutus maksaa yleensä 20–60 € kuukaudessa ja nousee koiran ikääntyessä.",
          "Turkinhoito on hiljainen budjetin rikkoja. Lyhytkarvaiset koirat eivät tarvitse melkein mitään; villakoiramainen koira tarvitsee ammattimaista trimmausta 6–8 viikon välein, mikä maksaa 400–900 € vuodessa, joka vuosi, eliniän ajan.",
        ],
      },
      {
        title: "Kustannukset, jotka melkein kaikki unohtavat",
        paragraphs: [
          "Lomat: hoitola tai hoitaja lisää helposti 300–800 € vuodessa, jos matkustat. Hammaslääkärikulut: monet koirat tarvitsevat vähintään yhden ammattimaisen puhdistuksen keski-iässä, usein 300–700 €. Ja puskuri: ennemmin tai myöhemmin tulee vuosi, jolloin koira nielaisee sukan, repeää eturistiside tai ontuu selittämättömästi, ja se vuosi maksaa 1 000–4 000 €, jota et suunnitellut.",
          "Yleinen nyrkkisääntö: jos säännöllinen budjetti on mukava ja voit selviytyä 2 000 € yllätyskulusta ilman velkaa, olet valmis. Jos jompikumpi osa saa sinut irvistämään, vuoden odottaminen ja säästäminen on ystävällisintä, mitä voit tehdä tulevalle koirallesi.",
        ],
      },
      {
        title: "Mihin rahat todella menevät",
        paragraphs: [
          "Alla on kolme todellista esimerkkiä rotudatoistamme – vuosittainen väli, jonka näytämme jokaisen rodun profiilissa, kattaen ruoan, rutiinihoidon, turkinhoidon ja loput. Välin sisäinen vaihtelu johtuu pääasiassa koosta, maasta ja vakuutusvalinnoista.",
        ],
      },
    ],
    quizTitle: "Katso, mitä lyhytlistasi todella maksaisi",
    quizBody:
      "Jokaisella rotuprofiililla on sama rehellinen vuosittainen väli, ja Find My Dog -kysely yhdistää sinut rotuihin, jotka sopivat viikkoosi – joten budjetti, jonka suunnittelet, on koiralle, joka todella sopii elämääsi.",
    quizCta: "Etsi koirani",
    compareCta: "Vertaa koiria",
    levelLabels: {
      low: "Matala",
      medium: "Keskitaso",
      high: "Korkea",
    },
    costTable: {
      example: "Esimerkki",
      breed: "Rotu",
      yearly: "Tyypillinen vuosikustannus",
    },
  },
de: {
    eyebrow: "Bevor Sie sich entscheiden",
    h1: "Was ein Hund wirklich kostet",
    intro:
      "Die meisten Leute planen für Futter und vergessen den Rest. Die ehrliche Antwort ist, dass ein Hund jedes Jahr mehr kostet als der Anschaffungspreis – und im ersten Jahr am allermeisten. Nichts davon soll Sie abschrecken. Es soll sicherstellen, dass der Hund, den Sie mit nach Hause nehmen, niemals für ein unrealistisches Budget bezahlen muss.",
    howChosenTitle: "Wie diese Zahlen funktionieren",
    howChosen: [
      "Jeder Bereich unten ist eine Planungszahl, kein Angebot – Kosten variieren je nach Land, Hundegröße und individuellem Gesundheitszustand.",
      "Das erste Jahr beinhaltet einmalige Kosten: den Hund selbst, Ausrüstung, Erstimpfungen und oft Kastration oder Sterilisation.",
      "Versicherung ist die größte einzelne Variable. Holen Sie sich ein echtes Angebot für die genaue Rasse, bevor Sie sich festlegen – die Prämien unterscheiden sich enorm.",
      "Alle Zahlen sind in Euro angegeben. Jedes Rasseprofil auf DoggMatch enthält einen vollständigen Kostenrechner mit denselben Bereichen, aufgeschlüsselt Zeile für Zeile.",
    ],
    metrics: [],
    readProfile: "Siehe vollständige Kostenaufschlüsselung",
    sections: [
      {
        title: "Das erste Jahr",
        paragraphs: [
          "Rechnen Sie mit etwa 1.500–4.000 € je nach Hund und Wohnort. Der Hund selbst ist normalerweise der größte Einzelposten: Ein gut gezüchteter Welpe von gesundheitsgeprüften Eltern kostet typischerweise 1.000–2.500 €, während Adoptionsgebühren normalerweise 150–400 € betragen und die erste tierärztliche Versorgung beinhalten.",
          "Dann kommen die einmaligen Kosten, die die Leute vergessen: Impfungen und Mikrochip, Kastration oder Sterilisation (oft 200–600 €), Ausrüstung wie Bett, Leine, Transportbox und Näpfe (200–400 €) und ein Welpen-Trainingskurs (100–250 €). Schließen Sie vom ersten Tag an eine Tierversicherung ab – der Monat, den Sie auslassen, ist der Monat, in dem etwas passiert.",
        ],
      },
      {
        title: "Jedes Jahr danach",
        paragraphs: [
          "Futter richtet sich nach der Größe: Ein kleiner Hund frisst vielleicht für 25–40 € pro Monat, ein großer für 70–120 €. Regelmäßige tierärztliche Versorgung – Impfungen, Wurmkur, Floh- und Zeckenbehandlung, eine jährliche Untersuchung – kostet vorhersehbar 150–400 € pro Jahr. Die Versicherung kostet typischerweise 20–60 € pro Monat und steigt mit dem Alter des Hundes.",
          "Fellpflege ist der stille Budget-Killer. Kurzhaarige Hunde brauchen fast nichts; ein Pudel-artiger Hund benötigt alle 6–8 Wochen eine professionelle Schur, die 400–900 € pro Jahr kostet, jedes Jahr, lebenslang.",
        ],
      },
      {
        title: "Die Kosten, die fast jeder vergisst",
        paragraphs: [
          "Urlaub: Eine Tierpension oder ein Sitter kostet leicht 300–800 € pro Jahr, wenn Sie verreisen. Zahnbehandlungen: Viele Hunde benötigen mindestens eine professionelle Zahnreinigung im mittleren Alter, oft 300–700 €. Und der Puffer: Früher oder später gibt es ein Jahr mit einer verschluckten Socke, einem gerissenen Kreuzband oder einer unerklärlichen Lahmheit, und dieses Jahr kostet 1.000–4.000 €, die Sie nicht geplant haben.",
          "Eine Faustregel: Wenn das reguläre Budget komfortabel ist und Sie eine Überraschung von 2.000 € ohne Schulden verkraften können, sind Sie bereit. Wenn einer der Teile Sie zusammenzucken lässt, ist es das Freundlichste, was Sie für Ihren zukünftigen Hund tun können, ein Jahr zu warten und zu sparen.",
        ],
      },
      {
        title: "Wohin das Geld tatsächlich fließt",
        paragraphs: [
          "Unten sind drei reale Beispiele aus unseren Rassedaten – die jährliche Spanne, die wir im Profil jeder Rasse anzeigen und die Futter, regelmäßige Pflege, Fellpflege und den Rest abdeckt. Die Streuung innerhalb jeder Spanne sind hauptsächlich Größe, Land und Versicherungsentscheidungen.",
        ],
      },
    ],
    quizTitle: "Sehen Sie, was Ihre engere Wahl wirklich kosten würde",
    quizBody:
      "Jedes Rasseprofil hat die gleiche ehrliche jährliche Spanne, und das Find My Dog Quiz passt Sie zu Rassen, die zu Ihrer Woche passen – so ist das Budget, das Sie planen, für einen Hund, der tatsächlich zu Ihrem Leben passt.",
    quizCta: "Finde meinen Hund",
    compareCta: "Hunde vergleichen",
    levelLabels: {
      low: "Niedrig",
      medium: "Mittel",
      high: "Hoch",
    },
    costTable: {
      example: "Beispiel",
      breed: "Rasse",
      yearly: "Typische jährliche Kosten",
    },
  },
fr: {
    eyebrow: "Avant de décider",
    h1: "Combien coûte vraiment un chien",
    intro:
      "La plupart des gens prévoient un budget pour la nourriture et oublient le reste. La réponse honnête est qu'un chien coûte plus cher que le prix d'achat chaque année – et la première année plus que tout. Rien de tout cela n'est destiné à vous dissuader. C'est destiné à s'assurer que le chien que vous ramenez à la maison n'a jamais à payer pour un budget qui n'était pas réel.",
    howChosenTitle: "Comment fonctionnent ces chiffres",
    howChosen: [
      "Chaque intervalle ci-dessous est un chiffre de planification, pas une estimation – les coûts varient selon le pays, la taille du chien et la santé individuelle.",
      "La première année comprend des coûts uniques : le chien lui-même, l'équipement, les vaccinations initiales et souvent la castration ou la stérilisation.",
      "L'assurance est la plus grande variable. Obtenez une véritable estimation pour la race exacte avant de vous engager – les primes diffèrent énormément.",
      "Tous les chiffres sont en euros. Chaque profil de race sur DoggMatch contient un calculateur de coûts complet avec les mêmes intervalles, décomposé ligne par ligne.",
    ],
    metrics: [],
    readProfile: "Voir la répartition complète des coûts",
    sections: [
      {
        title: "La première année",
        paragraphs: [
          "Attendez-vous à environ 1 500–4 000 € selon le chien et l'endroit où vous vivez. Le chien lui-même est généralement la plus grande dépense unique : un chiot bien élevé issu de parents testés pour leur santé coûte généralement 1 000–2 500 €, tandis que les frais d'adoption sont généralement de 150–400 € et incluent les premiers soins vétérinaires.",
          "Ensuite viennent les coûts uniques que les gens oublient : vaccinations et identification par puce électronique, castration ou stérilisation (souvent 200–600 €), équipement comme un lit, une laisse, une cage et des gamelles (200–400 €) et un cours d'éducation pour chiots (100–250 €). Ajoutez une assurance pour animaux de compagnie dès le premier jour – le mois que vous sautez est le mois où quelque chose se produit.",
        ],
      },
      {
        title: "Chaque année suivante",
        paragraphs: [
          "La nourriture varie selon la taille : un petit chien peut manger pour 25–40 € par mois, un grand pour 70–120 €. Les soins vétérinaires de routine – vaccinations, vermifugation, traitement contre les puces et les tiques, un contrôle annuel – coûtent de manière prévisible 150–400 € par an. L'assurance coûte généralement 20–60 € par mois et augmente avec l'âge du chien.",
          "Le toilettage est le briseur de budget silencieux. Les chiens à poil court n'ont presque rien besoin ; un chien au pelage de type caniche nécessite une coupe professionnelle toutes les 6 à 8 semaines, ce qui coûte 400–900 € par an, chaque année, à vie.",
        ],
      },
      {
        title: "Les coûts que presque tout le monde oublie",
        paragraphs: [
          "Vacances : une pension ou un gardien ajoute facilement 300–800 € par an si vous voyagez. Soins dentaires : de nombreux chiens ont besoin d'au moins un nettoyage professionnel en milieu de vie, souvent 300–700 €. Et la marge : tôt ou tard, il y a une année avec une chaussette avalée, un ligament croisé déchiré ou une boiterie inexpliquée, et cette année coûte 1 000–4 000 € que vous n'aviez pas prévus.",
          "Une règle générale : si le budget régulier est confortable et que vous pouvez absorber une surprise de 2 000 € sans dette, vous êtes prêt. Si l'une des parties vous fait grimacer, attendre un an et économiser est la chose la plus gentille que vous puissiez faire pour votre futur chien.",
        ],
      },
      {
        title: "Où va réellement l'argent",
        paragraphs: [
          "Ci-dessous, trois exemples réels tirés de nos données de races – l'intervalle annuel que nous affichons sur le profil de chaque race, couvrant la nourriture, les soins de routine, le toilettage et le reste. La répartition au sein de chaque intervalle est principalement due à la taille, au pays et aux choix d'assurance.",
        ],
      },
    ],
    quizTitle: "Voyez ce que votre présélection coûterait vraiment",
    quizBody:
      "Chaque profil de race porte le même intervalle annuel honnête, et le quiz Find My Dog vous associe à des races qui correspondent à votre semaine – ainsi, le budget que vous planifiez est pour un chien qui correspond réellement à votre vie.",
    quizCta: "Trouver mon chien",
    compareCta: "Comparer les chiens",
    levelLabels: {
      low: "Bas",
      medium: "Moyen",
      high: "Élevé",
    },
    costTable: {
      example: "Exemple",
      breed: "Race",
      yearly: "Coût annuel typique",
    },
  },
nl: {
    eyebrow: "Voordat u beslist",
    h1: "Wat een hond echt kost",
    intro:
      "De meeste mensen budgetteren voor voer en vergeten de rest. Het eerlijke antwoord is dat een hond elk jaar meer kost dan de aanschafprijs – en het eerste jaar het meest van allemaal. Niets hiervan is bedoeld om u af te schrikken. Het is bedoeld om ervoor te zorgen dat de hond die u in huis neemt, nooit hoeft te betalen voor een budget dat niet realistisch was.",
    howChosenTitle: "Hoe deze cijfers werken",
    howChosen: [
      "Elk bereik hieronder is een planningscijfer, geen offerte – kosten variëren per land, per grootte van de hond en per individuele gezondheid.",
      "Het eerste jaar omvat eenmalige kosten: de hond zelf, uitrusting, eerste vaccinaties en vaak castratie of sterilisatie.",
      "Verzekering is de grootste variabele. Vraag een echte offerte aan voor het exacte ras voordat u zich vastlegt – premies verschillen enorm.",
      "Alle cijfers zijn in euro's. Elk rasprofiel op DoggMatch bevat een volledige kostenberekenaar met dezelfde bereiken, regel voor regel uitgesplitst.",
    ],
    metrics: [],
    readProfile: "Bekijk de volledige kostenverdeling",
    sections: [
      {
        title: "Het eerste jaar",
        paragraphs: [
          "Reken op ongeveer €1.500–€4.000, afhankelijk van de hond en waar u woont. De hond zelf is meestal de grootste kostenpost: een goed gefokte puppy van gezondheidstests-onderworpen ouders kost doorgaans €1.000–€2.500, terwijl adoptiekosten meestal €150–€400 bedragen en de eerste dierenartszorg omvatten.",
          "Daarna komen de eenmalige kosten die mensen vergeten: vaccinaties en chippen, castratie of sterilisatie (vaak €200–€600), uitrusting zoals een mand, riem, bench en voerbakken (€200–€400), en een puppycursus (€100–€250). Sluit vanaf dag één een huisdierenverzekering af – de maand die u overslaat, is de maand waarin er iets gebeurt.",
        ],
      },
      {
        title: "Elk jaar daarna",
        paragraphs: [
          "Voer schaalt met grootte: een kleine hond eet misschien voor €25–€40 per maand, een grote voor €70–€120. Routinematige dierenartszorg – vaccinaties, ontworming, vlooien- en tekenbehandeling, een jaarlijkse controle – kost voorspelbaar €150–€400 per jaar. Verzekering kost doorgaans €20–€60 per maand en stijgt naarmate de hond ouder wordt.",
          "Vachtverzorging is de stille budgetbreker. Kortharige honden hebben bijna niets nodig; een hond met een poedelachtige vacht heeft elke 6–8 weken professionele trimbeurten nodig, wat €400–€900 per jaar kost, elk jaar, levenslang.",
        ],
      },
      {
        title: "De kosten die bijna iedereen vergeet",
        paragraphs: [
          "Vakanties: een pension of een oppas kost gemakkelijk €300–€800 per jaar als u reist. Tandheelkundige zorg: veel honden hebben minstens één professionele gebitsreiniging halverwege hun leven nodig, vaak €300–€700. En de buffer: vroeg of laat komt er een jaar met een ingeslikte sok, een gescheurde kruisband of een onverklaarbare kreupelheid, en dat jaar kost €1.000–€4.000 die u niet had gepland.",
          "Een vuistregel: als het reguliere budget comfortabel is en u een verrassing van €2.000 zonder schuld kunt opvangen, bent u er klaar voor. Als een van beide u doet huiveren, is een jaar wachten en sparen het vriendelijkste wat u voor uw toekomstige hond kunt doen.",
        ],
      },
      {
        title: "Waar het geld daadwerkelijk naartoe gaat",
        paragraphs: [
          "Hieronder staan drie echte voorbeelden uit onze rasgegevens – het jaarlijkse bereik dat we op het profiel van elk ras weergeven, inclusief voer, routinematige zorg, vachtverzorging en de rest. De spreiding binnen elk bereik wordt voornamelijk bepaald door grootte, land en verzekeringskeuzes.",
        ],
      },
    ],
    quizTitle: "Zie wat uw shortlist echt zou kosten",
    quizBody:
      "Elk rasprofiel heeft hetzelfde eerlijke jaarlijkse bereik, en de Find My Dog-quiz koppelt u aan rassen die bij uw week passen – zodat het budget dat u plant, is voor een hond die echt bij uw leven past.",
    quizCta: "Vind mijn hond",
    compareCta: "Vergelijk honden",
    levelLabels: {
      low: "Laag",
      medium: "Gemiddeld",
      high: "Hoog",
    },
    costTable: {
      example: "Voorbeeld",
      breed: "Ras",
      yearly: "Typische jaarlijkse kosten",
    },
  }
,
},
  costExamples: [
    costExample("chihuahua", { en: "A small dog (up to about 10 kg)" }),
    costExample("cocker-spaniel", { en: "A medium dog (about 10–25 kg)" }),
    costExample("bernese-mountain-dog", { en: "A large dog (over about 25 kg)" }),
  ].filter((x): x is CostExample => Boolean(x)),
};

/* ------------------------------------------------------------------ */
/* 6. Most commonly mismatched breeds                                  */
/* ------------------------------------------------------------------ */

export const MISMATCH_GUIDE: LifestyleGuideConfig = {
  id: "most-mismatched-breeds",
  path: "/most-mismatched-breeds",
  seo: { en: {
    title: "The most commonly mismatched dog breeds | DoggMatch",
    description:
      "Border collies in studio flats, huskies in warm cities, Frenchies bought for looks — the breeds that most often end up in the wrong life, and the honest reasons why.",
  } ,
  no: {
    title: "De vanligste feilmatch-hundetypene | DoggMatch",
    description:
      "Border Collier i studioleiligheter, huskyer i varme byer, franske bulldoger kjøpt for utseendet – rasene som oftest havner i feil liv, og de ærlige grunnene til hvorfor.",
  },
pl: {
    title: "Najczęściej niedopasowane rasy psów | DoggMatch",
    description:
      "Border collie w kawalerkach, husky w ciepłych miastach, buldogi francuskie kupione dla wyglądu – rasy, które najczęściej trafiają do niewłaściwego życia i szczere powody, dla których tak się dzieje.",
  },
dk: {
    title: "De mest almindelige fejlmatch-hunderacer | DoggMatch",
    description:
      "Border collies i studieboliger, huskyer i varme byer, franske bulldogs købt for udseendets skyld – de racer, der oftest ender i det forkerte liv, og de ærlige grunde til hvorfor.",
  },
se: {
    title: "De vanligaste felmatchade hundraserna | DoggMatch",
    description:
      "Border collies i etta, huskies i varma städer, fransk bulldogg köpta för utseendets skull – raserna som oftast hamnar i fel liv, och de ärliga anledningarna till varför.",
  },
fi: {
    title: "Yleisimmät väärin valitut koirarodut | DoggMatch",
    description:
      "Bordercolliet yksiöissä, huskyt lämpimissä kaupungeissa, ranskanbulldoggit ulkonäön vuoksi ostettuina – rodut, jotka päätyvät useimmiten väärään elämään, ja rehelliset syyt siihen.",
  },
de: {
    title: "Die häufigsten Fehlbesetzungen bei Hunderassen | DoggMatch",
    description:
      "Border Collies in Studio-Wohnungen, Huskys in warmen Städten, Französische Bulldoggen, die nur wegen ihres Aussehens gekauft werden – die Rassen, die am häufigsten im falschen Zuhause landen, und die ehrlichen Gründe dafür.",
  },
fr: {
    title: "Les races de chiens les plus souvent mal adaptées | DoggMatch",
    description:
      "Les border collies en studio, les huskies dans les villes chaudes, les bouledogues français achetés pour leur look – les races qui finissent le plus souvent dans la mauvaise vie, et les raisons honnêtes pour lesquelles.",
  },
nl: {
    title: "De meest voorkomende verkeerde matches bij hondenrassen | DoggMatch",
    description:
      "Border collies in studio's, husky's in warme steden, Franse buldoggen gekocht om hun uiterlijk – de rassen die het vaakst in het verkeerde leven belanden, en de eerlijke redenen waarom.",
  }
},
  copy: { en: {
    eyebrow: "Choosing a dog",
    h1: "The most commonly mismatched breeds",
    intro:
      "Some breeds end up in the wrong home far more often than others — not because they are difficult dogs, but because they are loved for how they look and chosen before anyone asks how they live. Rescues see the same names again and again. Here they are, with the typical mismatch for each, so you can decide with your eyes open.",
    howChosenTitle: "Why these breeds end up mismatched",
    howChosen: [
      "We looked at the breeds that dominate rescue waiting lists and surrender surveys, and compared them with the same trait data our matching engine uses.",
      "The pattern is almost never aggression or 'bad dogs'. It is ordinary dogs whose daily needs — work, movement, space, care — were bigger than the life they were chosen for.",
      "Every breed below is wonderful in the right home. This page exists so fewer of them have to find that home twice.",
    ],
    listTitle: "The breeds rescues see most",
    listIntro:
      "Eight breeds that most often land in the wrong lifestyle — with the typical mismatch spelled out honestly, and the full profile one click away.",
    metrics: [
      { key: "energy", label: "Energy" },
      { key: "exerciseNeeds", label: "Exercise needs" },
      { key: "mentalStimulation", label: "Mental stimulation" },
      { key: "firstTimeSuitability", label: "First-time owners" },
    ],
    readProfile: "Read the full profile",
    tradeoffNote:
      "None of this is a reason to avoid these breeds — it is a reason to choose them honestly. If your week genuinely includes the work they need, they are some of the most rewarding dogs there are. If it doesn't, the kindest thing you can do is fall in love with a breed that fits the life you actually have.",
    quizTitle: "Fall in love with the right dog, not the wrong photo",
    quizBody:
      "The Find My Dog quiz weighs your home, your time, your experience and your real week against every breed's traits — including every breed on this page — and shows you the reasoning behind each score.",
    quizCta: quizBlock.quizCta,
    compareCta: quizBlock.compareCta,
    levelLabels,
  } ,
  no: {
    eyebrow: "Velge en hund",
    h1: "De mest vanlig feilplasserte rasene",
    intro:
      "Noen raser ender opp i feil hjem langt oftere enn andre – ikke fordi de er vanskelige hunder, men fordi de elskes for utseendet sitt og velges før noen spør om hvordan de lever. Dyrebeskyttelsen ser de samme navnene igjen og igjen. Her er de, med den typiske feilplasseringen for hver, slik at du kan ta en avgjørelse med åpne øyne.",
    howChosenTitle: "Hvorfor disse rasene blir feilplassert",
    howChosen: [
      "Vi så på rasene som dominerer ventelistene hos dyrebeskyttelsen og undersøkelser om omplassering, og sammenlignet dem med de samme egenskapene som matchemotoren vår bruker.",
      "Mønsteret er nesten aldri aggresjon eller 'vanskelige hunder'. Det er vanlige hunder hvis daglige behov – arbeid, bevegelse, plass, stell – var større enn livet de ble valgt for.",
      "Hver rase nedenfor er fantastisk i det rette hjemmet. Denne siden eksisterer for at færre av dem må finne det hjemmet to ganger.",
    ],
    listTitle: "Rasene dyrebeskyttelsen ser mest",
    listIntro:
      "Åtte raser som oftest havner i feil livsstil – med den typiske feilplasseringen ærlig beskrevet, og hele profilen ett klikk unna.",
    metrics: [
      { key: "energy", label: "Energinivå" },
      { key: "exerciseNeeds", label: "Treningsbehov" },
      { key: "mentalStimulation", label: "Mental stimulering" },
      { key: "firstTimeSuitability", label: "Førstegangseiere" },
    ],
    readProfile: "Les hele profilen",
    tradeoffNote:
      "Ingen av dette er en grunn til å unngå disse rasene – det er en grunn til å velge dem ærlig. Hvis uken din genuint inkluderer arbeidet de trenger, er de noen av de mest givende hundene som finnes. Hvis den ikke gjør det, er det snilleste du kan gjøre å bli forelsket i en rase som passer livet du faktisk har.",
    quizTitle: "Bli forelsket i riktig hund, ikke feil bilde",
    quizBody:
      "Finn-min-hund-quizen veier hjemmet ditt, tiden din, erfaringen din og din virkelige uke opp mot egenskapene til hver rase – inkludert hver rase på denne siden – og viser deg begrunnelsen bak hver poengsum.",
    quizCta: "Finn din hund",
    compareCta: "Sammenlign raser",
    levelLabels: {
      low: "Lav",
      medium: "Middels",
      high: "Høy",
      veryHigh: "Veldig høy",
    },
  },
pl: {
    eyebrow: "Wybór psa",
    h1: "Najczęściej źle dopasowywane rasy",
    intro:
      "Niektóre rasy trafiają do niewłaściwych domów znacznie częściej niż inne – nie dlatego, że są trudnymi psami, ale dlatego, że są kochane za swój wygląd i wybierane, zanim ktokolwiek zapyta o ich styl życia. Schroniska widzą te same imiona raz za razem. Oto one, z typowym dla każdej z nich niedopasowaniem, abyś mógł podjąć decyzję z otwartymi oczami.",
    howChosenTitle: "Dlaczego te rasy kończą jako źle dopasowane",
    howChosen: [
      "Przyjrzeliśmy się rasom, które dominują na listach oczekujących w schroniskach i w ankietach dotyczących oddawania psów, i porównaliśmy je z tymi samymi danymi dotyczącymi cech, których używa nasz silnik dopasowujący.",
      "Wzór prawie nigdy nie dotyczy agresji ani 'złych psów'. Są to zwykłe psy, których codzienne potrzeby – praca, ruch, przestrzeń, opieka – były większe niż życie, dla którego zostały wybrane.",
      "Każda rasa poniżej jest wspaniała w odpowiednim domu. Ta strona istnieje po to, by mniej z nich musiało znaleźć ten dom dwukrotnie.",
    ],
    listTitle: "Rasy, które schroniska widzą najczęściej",
    listIntro:
      "Osiem ras, które najczęściej trafiają do niewłaściwego stylu życia – z typowym niedopasowaniem uczciwie opisanym, a pełny profil dostępny jednym kliknięciem.",
    metrics: [
      { key: "energy", label: "Energia" },
      { key: "exerciseNeeds", label: "Potrzeby ruchu" },
      { key: "mentalStimulation", label: "Stymulacja umysłowa" },
      { key: "firstTimeSuitability", label: "Dla początkujących właścicieli" },
    ],
    readProfile: "Przeczytaj pełny profil",
    tradeoffNote:
      "Żaden z tych faktów nie jest powodem, by unikać tych ras – jest to powód, by wybierać je uczciwie. Jeśli Twój tydzień faktycznie obejmuje pracę, której potrzebują, są to jedne z najbardziej satysfakcjonujących psów. Jeśli nie, najłaskawszą rzeczą, jaką możesz zrobić, jest zakochanie się w rasie, która pasuje do życia, które faktycznie masz.",
    quizTitle: "Zakochaj się we właściwym psie, nie w złym zdjęciu",
    quizBody:
      "Quiz 'Znajdź mojego psa' porównuje Twój dom, Twój czas, Twoje doświadczenie i Twój rzeczywisty tydzień z cechami każdej rasy – w tym każdej rasy na tej stronie – i pokazuje Ci uzasadnienie każdej oceny.",
    quizCta: "Znajdź swojego psa",
    compareCta: "Porównaj rasy",
    levelLabels: {
      low: "Niski",
      medium: "Średni",
      high: "Wysoki",
      veryHigh: "Bardzo wysoki",
    },
  },
dk: {
    eyebrow: "Valg af hund",
    h1: "De mest almindeligt fejlplacerede racer",
    intro:
      "Nogle racer ender i det forkerte hjem langt oftere end andre – ikke fordi de er svære hunde, men fordi de elskes for deres udseende og vælges, før nogen spørger ind til deres livsstil. Dyreværnsorganisationer ser de samme navne igen og igen. Her er de, med den typiske fejlplacering for hver, så du kan træffe en beslutning med åbne øjne.",
    howChosenTitle: "Hvorfor disse racer ender som fejlplacerede",
    howChosen: [
      "Vi undersøgte de racer, der dominerer ventelister hos dyreværnsorganisationer og i undersøgelser om ejerskifte, og sammenlignede dem med de samme trækdata, som vores matchende motor bruger.",
      "Mønsteret er næsten aldrig aggression eller 'besværlige hunde'. Det er almindelige hunde, hvis daglige behov – arbejde, bevægelse, plads, pleje – var større end det liv, de blev valgt til.",
      "Hver race nedenfor er vidunderlig i det rette hjem. Denne side eksisterer for at færre af dem skal finde det hjem to gange.",
    ],
    listTitle: "De racer, dyreværnsorganisationer ser mest",
    listIntro:
      "Otte racer, der oftest havner i den forkerte livsstil – med den typiske fejlplacering ærligt beskrevet, og hele profilen ét klik væk.",
    metrics: [
      { key: "energy", label: "Energi" },
      { key: "exerciseNeeds", label: "Træningsbehov" },
      { key: "mentalStimulation", label: "Mental stimulering" },
      { key: "firstTimeSuitability", label: "Førstegangs-ejere" },
    ],
    readProfile: "Læs hele profilen",
    tradeoffNote:
      "Intet af dette er en grund til at undgå disse racer – det er en grund til at vælge dem ærligt. Hvis din uge reelt inkluderer det arbejde, de har brug for, er de nogle af de mest givende hunde, der findes. Hvis den ikke gør det, er det mest venlige, du kan gøre, at blive forelsket i en race, der passer til det liv, du faktisk har.",
    quizTitle: "Forelsk dig i den rigtige hund, ikke det forkerte billede",
    quizBody:
      "Find-min-hund-quizzen afvejer dit hjem, din tid, din erfaring og din reelle uge mod hver races træk – inklusive hver race på denne side – og viser dig begrundelsen bag hver score.",
    quizCta: "Find din hund",
    compareCta: "Sammenlign racer",
    levelLabels: {
      low: "Lav",
      medium: "Mellem",
      high: "Høj",
      veryHigh: "Meget høj",
    },
  },
se: {
    eyebrow: "Välja hund",
    h1: "De vanligaste felmatchade raserna",
    intro:
      "Vissa raser hamnar i fel hem betydligt oftare än andra – inte för att de är svåra hundar, utan för att de älskas för sitt utseende och väljs innan någon frågar om hur de lever. Räddningsorganisationer ser samma namn om och om igen. Här är de, med den typiska felmatchningen för varje, så att du kan fatta ett beslut med öppna ögon.",
    howChosenTitle: "Varför dessa raser blir felmatchade",
    howChosen: [
      "Vi tittade på de raser som dominerar räddningsorganisationernas väntelistor och undersökningar om omplacering, och jämförde dem med samma egenskapsdata som vår matchningsmotor använder.",
      "Mönstret är nästan aldrig aggression eller 'dåliga hundar'. Det är vanliga hundar vars dagliga behov – arbete, rörelse, utrymme, omvårdnad – var större än det liv de valdes för.",
      "Varje ras nedan är underbar i rätt hem. Den här sidan finns för att färre av dem ska behöva hitta det hemmet två gånger.",
    ],
    listTitle: "De raser som räddningsorganisationer ser mest",
    listIntro:
      "Åtta raser som oftast hamnar i fel livsstil – med den typiska felmatchningen ärligt beskriven, och hela profilen ett klick bort.",
    metrics: [
      { key: "energy", label: "Energi" },
      { key: "exerciseNeeds", label: "Träningsbehov" },
      { key: "mentalStimulation", label: "Mental stimulans" },
      { key: "firstTimeSuitability", label: "Förstagångsägare" },
    ],
    readProfile: "Läs hela profilen",
    tradeoffNote:
      "Inget av detta är en anledning att undvika dessa raser – det är en anledning att välja dem ärligt. Om din vecka genuint inkluderar det arbete de behöver, är de några av de mest givande hundarna som finns. Om den inte gör det, är det snällaste du kan göra att bli kär i en ras som passar det liv du faktiskt har.",
    quizTitle: "Bli kär i rätt hund, inte fel bild",
    quizBody:
      "Hitta-min-hund-quizzen väger ditt hem, din tid, din erfarenhet och din verkliga vecka mot varje rases egenskaper – inklusive varje ras på den här sidan – och visar dig resonemanget bakom varje poäng.",
    quizCta: "Hitta din hund",
    compareCta: "Jämför raser",
    levelLabels: {
      low: "Låg",
      medium: "Medel",
      high: "Hög",
      veryHigh: "Mycket hög",
    },
  },
fi: {
    eyebrow: "Koiran valinta",
    h1: "Yleisimmin väärin sijoitetut rodut",
    intro:
      "Jotkut rodut päätyvät väärään kotiin paljon useammin kuin toiset – ei siksi, että ne olisivat vaikeita koiria, vaan siksi, että niitä rakastetaan ulkonäkönsä vuoksi ja valitaan ennen kuin kukaan kysyy niiden elämäntavasta. Eläinsuojeluyhdistykset näkevät samoja nimiä kerta toisensa jälkeen. Tässä ne ovat, tyypillisen vääräsijoituksen kanssa, jotta voit tehdä päätöksen avoimin silmin.",
    howChosenTitle: "Miksi nämä rodut päätyvät väärin sijoitetuiksi",
    howChosen: [
      "Tarkastelimme rotuja, jotka dominoivat eläinsuojeluyhdistysten odotuslistoja ja luovutustutkimuksia, ja vertasimme niitä samoihin ominaisuustietoihin, joita kohdistusmoottorimme käyttää.",
      "Malli ei lähes koskaan ole aggressiivisuus tai 'vaikeat koirat'. Kyse on tavallisista koirista, joiden päivittäiset tarpeet – työ, liikkuminen, tila, hoito – olivat suurempia kuin elämä, johon ne valittiin.",
      "Jokainen alla oleva rotu on ihana oikeassa kodissa. Tämä sivu on olemassa, jotta harvemmat niistä joutuisivat löytämään sen kodin kahdesti.",
    ],
    listTitle: "Rodut, joita eläinsuojeluyhdistykset näkevät eniten",
    listIntro:
      "Kahdeksan rotua, jotka useimmiten päätyvät väärään elämäntapaan – tyypillinen vääräsijoitus rehellisesti selitettynä, ja koko profiili yhden klikkauksen päässä.",
    metrics: [
      { key: "energy", label: "Energia" },
      { key: "exerciseNeeds", label: "Liikuntatarve" },
      { key: "mentalStimulation", label: "Mentaalinen stimulaatio" },
      { key: "firstTimeSuitability", label: "Ensikertalaisille sopivuus" },
    ],
    readProfile: "Lue koko profiili",
    tradeoffNote:
      "Mikään tästä ei ole syy välttää näitä rotuja – se on syy valita ne rehellisesti. Jos viikkosi todella sisältää työn, jota ne tarvitsevat, ne ovat joitakin palkitsevimmista koirista. Jos se ei sisällä, ystävällisin asia, jonka voit tehdä, on rakastua rotuun, joka sopii elämään, joka sinulla todella on.",
    quizTitle: "Rakastu oikeaan koiraan, älä väärään kuvaan",
    quizBody:
      "Etsi-koirani-kysely punnitsee kotisi, aikasi, kokemuksesi ja todellisen viikkosi jokaista rotua vastaan – mukaan lukien jokainen rotu tällä sivulla – ja näyttää sinulle perustelut jokaisen pisteen takana.",
    quizCta: "Etsi koirasi",
    compareCta: "Vertaa rotuja",
    levelLabels: {
      low: "Matala",
      medium: "Keskitaso",
      high: "Korkea",
      veryHigh: "Erittäin korkea",
    },
  },
de: {
    eyebrow: "Einen Hund auswählen",
    h1: "Die am häufigsten fehlvermittelten Rassen",
    intro:
      "Manche Rassen landen weitaus öfter im falschen Zuhause als andere – nicht, weil sie schwierige Hunde sind, sondern weil sie für ihr Aussehen geliebt und ausgewählt werden, bevor jemand nach ihrem Lebensstil fragt. Tierschutzorganisationen sehen immer wieder dieselben Namen. Hier sind sie, mit der typischen Fehlvermittlung für jede Rasse, damit Sie mit offenen Augen entscheiden können.",
    howChosenTitle: "Warum diese Rassen fehlvermittelt werden",
    howChosen: [
      "Wir haben die Rassen untersucht, die die Wartelisten von Tierschutzorganisationen und Umfragen zur Abgabe von Hunden dominieren, und sie mit denselben Eigenschaftsdaten verglichen, die unsere Matching-Engine verwendet.",
      "Das Muster ist fast nie Aggression oder 'schwierige Hunde'. Es sind gewöhnliche Hunde, deren tägliche Bedürfnisse – Arbeit, Bewegung, Platz, Pflege – größer waren als das Leben, für das sie ausgewählt wurden.",
      "Jede Rasse unten ist in der richtigen Umgebung wunderbar. Diese Seite existiert, damit weniger von ihnen dieses Zuhause zweimal finden müssen.",
    ],
    listTitle: "Die Rassen, die Tierschutzorganisationen am häufigsten sehen",
    listIntro:
      "Acht Rassen, die am häufigsten in den falschen Lebensstil geraten – mit der typischen Fehlvermittlung ehrlich dargelegt und dem vollständigen Profil nur einen Klick entfernt.",
    metrics: [
      { key: "energy", label: "Energie" },
      { key: "exerciseNeeds", label: "Bewegungsbedarf" },
      { key: "mentalStimulation", label: "Mentale Stimulation" },
      { key: "firstTimeSuitability", label: "Für Erstbesitzer" },
    ],
    readProfile: "Vollständiges Profil lesen",
    tradeoffNote:
      "Nichts davon ist ein Grund, diese Rassen zu meiden – es ist ein Grund, sie ehrlich auszuwählen. Wenn Ihre Woche wirklich die Arbeit beinhaltet, die sie brauchen, sind sie einige der lohnendsten Hunde, die es gibt. Wenn nicht, ist das Freundlichste, was Sie tun können, sich in eine Rasse zu verlieben, die zu dem Leben passt, das Sie tatsächlich führen.",
    quizTitle: "Verlieben Sie sich in den richtigen Hund, nicht in das falsche Foto",
    quizBody:
      "Der 'Finde meinen Hund'-Quiz gleicht Ihr Zuhause, Ihre Zeit, Ihre Erfahrung und Ihre tatsächliche Woche mit den Eigenschaften jeder Rasse ab – einschließlich jeder Rasse auf dieser Seite – und zeigt Ihnen die Begründung für jede Bewertung.",
    quizCta: "Finde deinen Hund",
    compareCta: "Rassen vergleichen",
    levelLabels: {
      low: "Niedrig",
      medium: "Mittel",
      high: "Hoch",
      veryHigh: "Sehr hoch",
    },
  },
fr: {
    eyebrow: "Choisir un chien",
    h1: "Les races les plus souvent mal adaptées",
    intro:
      "Certaines races se retrouvent dans de mauvais foyers beaucoup plus souvent que d'autres – non pas parce qu'elles sont difficiles, mais parce qu'on les aime pour leur apparence et qu'on les choisit avant même de se renseigner sur leur mode de vie. Les refuges voient les mêmes noms revenir sans cesse. Les voici, avec le type de mauvaise adaptation typique pour chacune, afin que vous puissiez décider en toute connaissance de cause.",
    howChosenTitle: "Pourquoi ces races se retrouvent mal adaptées",
    howChosen: [
      "Nous avons examiné les races qui dominent les listes d'attente des refuges et les enquêtes de placement, et les avons comparées aux mêmes données de traits que notre moteur de correspondance utilise.",
      "Le schéma n'est presque jamais lié à l'agressivité ou à des 'chiens difficiles'. Il s'agit de chiens ordinaires dont les besoins quotidiens – travail, mouvement, espace, soins – étaient plus importants que la vie pour laquelle ils ont été choisis.",
      "Chaque race ci-dessous est merveilleuse dans le bon foyer. Cette page existe pour qu'un moins grand nombre d'entre elles aient à trouver ce foyer une seconde fois.",
    ],
    listTitle: "Les races que les refuges voient le plus",
    listIntro:
      "Huit races qui se retrouvent le plus souvent dans un style de vie inadapté – avec la mauvaise adaptation typique honnêtement expliquée, et le profil complet à un clic.",
    metrics: [
      { key: "energy", label: "Énergie" },
      { key: "exerciseNeeds", label: "Besoins d'exercice" },
      { key: "mentalStimulation", label: "Stimulation mentale" },
      { key: "firstTimeSuitability", label: "Pour les nouveaux propriétaires" },
    ],
    readProfile: "Lire le profil complet",
    tradeoffNote:
      "Rien de tout cela n'est une raison pour éviter ces races – c'est une raison pour les choisir honnêtement. Si votre semaine inclut réellement le travail dont elles ont besoin, ce sont certains des chiens les plus gratifiants qui soient. Si ce n'est pas le cas, la chose la plus gentille que vous puissiez faire est de tomber amoureux d'une race qui correspond à la vie que vous avez réellement.",
    quizTitle: "Tombez amoureux du bon chien, pas de la mauvaise photo",
    quizBody:
      "Le quiz 'Trouver mon chien' pondère votre foyer, votre temps, votre expérience et votre semaine réelle par rapport aux traits de chaque race – y compris chaque race sur cette page – et vous montre le raisonnement derrière chaque score.",
    quizCta: "Trouver votre chien",
    compareCta: "Comparer les races",
    levelLabels: {
      low: "Faible",
      medium: "Moyen",
      high: "Élevé",
      veryHigh: "Très élevé",
    },
  },
nl: {
    eyebrow: "Een hond kiezen",
    h1: "De meest voorkomende verkeerd geplaatste rassen",
    intro:
      "Sommige rassen komen veel vaker in een verkeerd thuis terecht dan andere – niet omdat het moeilijke honden zijn, maar omdat ze geliefd zijn om hun uiterlijk en gekozen worden voordat iemand vraagt naar hun levensstijl. Dierenasielen zien steeds dezelfde namen. Hier zijn ze, met de typische verkeerde plaatsing voor elk ras, zodat u met open ogen kunt beslissen.",
    howChosenTitle: "Waarom deze rassen verkeerd worden geplaatst",
    howChosen: [
      "We hebben gekeken naar de rassen die de wachtlijsten van dierenasielen en de enquêtes over afstand van huisdieren domineren, en ze vergeleken met dezelfde kenmerkgegevens die onze matching-engine gebruikt.",
      "Het patroon is bijna nooit agressie of 'moeilijke honden'. Het zijn gewone honden wiens dagelijkse behoeften – werk, beweging, ruimte, verzorging – groter waren dan het leven waarvoor ze werden gekozen.",
      "Elk ras hieronder is geweldig in het juiste thuis. Deze pagina bestaat zodat minder van hen dit thuis twee keer hoeven te vinden.",
    ],
    listTitle: "De rassen die dierenasielen het meest zien",
    listIntro:
      "Acht rassen die het vaakst in de verkeerde levensstijl terechtkomen – met de typische verkeerde plaatsing eerlijk uiteengezet, en het volledige profiel één klik verwijderd.",
    metrics: [
      { key: "energy", label: "Energie" },
      { key: "exerciseNeeds", label: "Bewegingsbehoeften" },
      { key: "mentalStimulation", label: "Mentale stimulatie" },
      { key: "firstTimeSuitability", label: "Geschikt voor beginners" },
    ],
    readProfile: "Lees het volledige profiel",
    tradeoffNote:
      "Niets hiervan is een reden om deze rassen te vermijden – het is een reden om ze eerlijk te kiezen. Als uw week echt het werk omvat dat ze nodig hebben, zijn het enkele van de meest lonende honden die er zijn. Als dat niet zo is, is het liefste wat u kunt doen, verliefd worden op een ras dat past bij het leven dat u daadwerkelijk heeft.",
    quizTitle: "Word verliefd op de juiste hond, niet op de verkeerde foto",
    quizBody:
      "De 'Vind mijn hond'-quiz weegt uw huis, uw tijd, uw ervaring en uw werkelijke week af tegen de kenmerken van elk ras – inclusief elk ras op deze pagina – en laat u de reden achter elke score zien.",
    quizCta: "Vind uw hond",
    compareCta: "Vergelijk rassen",
    levelLabels: {
      low: "Laag",
      medium: "Gemiddeld",
      high: "Hoog",
      veryHigh: "Zeer hoog",
    },
  }
},
  shortlist: byIds([
    "border-collie",
    "siberian-husky",
    "australian-shepherd",
    "jack-russell-terrier",
    "french-bulldog",
    "beagle",
    "cocker-spaniel",
    "dachshund",
  ]),
  reasons: { en: {
    "border-collie":
      "Chosen for intelligence and beauty, by people with a working week. A bored border collie invents its own job — herding children, chasing cars, dismantling the house. Two walks are not enough; this dog needs work.",
    "siberian-husky":
      "Chosen for the wolf looks. Then comes the reality: an escape artist bred to run all day, shedding in drifts, howling at the neighbours, wilting in summer heat. Stunning dog, very specific life.",
    "australian-shepherd":
      "The social-media dog of the last few years — bought for the merle coat and the tricks. Behind it sits a serious herding dog that needs a job daily, and that turns restless, vocal and nippy without one.",
    "jack-russell-terrier":
      "Bought because it's small. It is not a small dog in spirit — it's a working terrier in a compact body: tireless, prey-driven, vocal, and far too clever for a home that wanted a lapdog.",
    "french-bulldog":
      "The most bought companion dog in the world — chosen for the face, by owners unprepared for the vet bills. Breathing problems, skin, spine and heat intolerance are common; insurance is not optional here.",
    beagle:
      "Chosen as a gentle family dog — which it is. The surprise is the nose: off-lead recall is a life's work, food is a religion, and the baying voice carries through walls. Lovely dog, wrong flat.",
    "cocker-spaniel":
      "Chosen for the soft eyes and the spaniel reputation. A working-bred cocker is a busy, busy dog — needs real exercise and real coat care, and turns barky and restless in a quiet, sedentary home.",
    dachshund:
      "Chosen because it's cute and portable. It is a hunting hound: brave, stubborn, surprisingly loud, and prone to back injuries that mean stairs and sofa-jumping need managing for life.",
  } ,
  no: {
    "border-collie":
      "Valgt for intelligens og skjønnhet, av folk med en full arbeidsuke. En utekket border collie finner på egne jobber – gjeter barn, jager biler, demonterer huset. To turer er ikke nok; denne hunden trenger arbeid.",
    "siberian-husky":
      "Valgt for ulvelignende utseende. Så kommer virkeligheten: en rømningskunstner avlet for å løpe hele dagen, røyter i driv, uler mot naboene, trives dårlig i sommervarmen. Fantastisk hund, veldig spesifikt liv.",
    "australian-shepherd":
      "Årene sosiale medier-hund – kjøpt for merlefargen og triksene. Bak dette sitter en seriøs gjeterhund som trenger en jobb daglig, og som blir rastløs, høylytt og nappete uten en.",
    "jack-russell-terrier":
      "Kjøpt fordi den er liten. Det er ikke en liten hund i ånden – det er en arbeidsterrier i en kompakt kropp: utrettelig, byttedrevet, høylytt, og altfor smart for et hjem som ønsket en sofahund.",
    "french-bulldog":
      "Den mest kjøpte selskapshunden i verden – valgt for ansiktet, av eiere uforberedt på veterinærregningene. Pusteproblemer, hud, rygg og varmeintoleranse er vanlig; forsikring er ikke valgfritt her.",
    beagle:
      "Valgt som en mild familiehund – noe den er. Overraskelsen er nesen: innkalling uten bånd er et livsverk, mat er en religion, og den bjeffende stemmen bærer gjennom vegger. Nydelig hund, feil leilighet.",
    "cocker-spaniel":
      "Valgt for de myke øynene og spaniel-ryktet. En arbeidsavlet cocker er en travel, travel hund – trenger skikkelig mosjon og skikkelig pelsstell, og blir bjeffete og rastløs i et stille, stillesittende hjem.",
    dachshund:
      "Valgt fordi den er søt og bærbar. Det er en jakthund: modig, sta, overraskende høylytt, og utsatt for ryggskader som betyr at trapper og sofa-hopping må håndteres for livet.",
  },
pl: {
    "border-collie":
      "Wybierany ze względu na inteligencję i piękno, przez osoby z pracowitym tygodniem. Nudzący się border collie sam wymyśla sobie zajęcie – ganianie dzieci, pogoń za samochodami, demontowanie domu. Dwa spacery to za mało; ten pies potrzebuje pracy.",
    "siberian-husky":
      "Wybierany ze względu na wilczy wygląd. Potem przychodzi rzeczywistość: mistrz ucieczek, hodowany do biegania przez cały dzień, liniejący garściami, wyjący do sąsiadów, więdnący w letnim upale. Oszałamiający pies, bardzo specyficzne życie.",
    "australian-shepherd":
      "Pies z mediów społecznościowych ostatnich lat – kupowany dla umaszczenia merle i sztuczek. Za tym kryje się poważny pies pasterski, który potrzebuje codziennego zajęcia, a bez niego staje się niespokojny, głośny i skłonny do podgryzania.",
    "jack-russell-terrier":
      "Kupowany, bo jest mały. To nie jest mały pies z ducha – to pies pracujący w kompaktowym ciele: niezmordowany, z silnym instynktem łowieckim, głośny i o wiele za sprytny dla domu, który chciał psa do towarzystwa na kolanach.",
    "french-bulldog":
      "Najczęściej kupowany pies towarzyszący na świecie – wybierany ze względu na pysk, przez właścicieli nieprzygotowanych na rachunki weterynaryjne. Problemy z oddychaniem, skórą, kręgosłupem i nietolerancja ciepła są powszechne; ubezpieczenie nie jest tu opcją.",
    beagle:
      "Wybierany jako łagodny pies rodzinny – którym jest. Niespodzianką jest nos: przywołanie bez smyczy to praca na całe życie, jedzenie to religia, a wycie niesie się przez ściany. Cudowny pies, złe mieszkanie.",
    "cocker-spaniel":
      "Wybierany ze względu na łagodne oczy i reputację spaniela. Pracowicie hodowany cocker to bardzo, bardzo zajęty pies – potrzebuje prawdziwego ruchu i prawdziwej pielęgnacji sierści, a w cichym, siedzącym domu staje się szczekliwy i niespokojny.",
    dachshund:
      "Wybierany, bo jest słodki i przenośny. To pies myśliwski: odważny, uparty, zaskakująco głośny i podatny na urazy kręgosłupa, co oznacza, że schody i skakanie na kanapę wymagają zarządzania przez całe życie.",
  },
dk: {
    "border-collie":
      "Valgt for intelligens og skønhed, af folk med en arbejdsuge. En keder sig border collie finder på sit eget job – at hyrde børn, jage biler, skille huset ad. To gåture er ikke nok; denne hund har brug for arbejde.",
    "siberian-husky":
      "Valgt for ulvelignende udseende. Så kommer virkeligheden: en flugtkunstner avlet til at løbe hele dagen, fælder i driv, hyler ad naboerne, visner i sommervarmen. Fantastisk hund, meget specifikt liv.",
    "australian-shepherd":
      "De seneste års sociale mediehund – købt for merle-pelsen og tricksene. Bagved sidder en seriøs hyrdehund, der har brug for et job dagligt, og som bliver rastløs, vokal og nipper uden et.",
    "jack-russell-terrier":
      "Købt fordi den er lille. Det er ikke en lille hund i ånden – det er en arbejdsterrier i en kompakt krop: utrættelig, byttedrevet, vokal og alt for klog til et hjem, der ønskede en sofahund.",
    "french-bulldog":
      "Den mest købte selskabshund i verden – valgt for ansigtet, af ejere uforberedte på dyrlægeregningerne. Åndedrætsproblemer, hud, rygsøjle og varmeintolerance er almindelige; forsikring er ikke valgfrit her.",
    beagle:
      "Valgt som en blid familiehund – hvilket den er. Overraskelsen er næsen: indkald uden snor er et livs arbejde, mad er en religion, og den gøende stemme bærer gennem vægge. Dejlig hund, forkert lejlighed.",
    "cocker-spaniel":
      "Valgt for de bløde øjne og spaniel-rytet. En arbejdsavlet cocker er en travl, travl hund – har brug for reel motion og reel pelspleje, og bliver gøende og rastløs i et stille, stillesiddende hjem.",
    dachshund:
      "Valgt fordi den er sød og bærbar. Det er en jagthund: modig, stædig, overraskende højlydt og tilbøjelig til rygskader, der betyder, at trapper og sofa-hopning skal håndteres for livet.",
  },
se: {
    "border-collie":
      "Vald för intelligens och skönhet, av människor med en arbetsvecka. En uttråkad border collie hittar på sitt eget jobb – att valla barn, jaga bilar, riva huset. Två promenader räcker inte; denna hund behöver arbete.",
    "siberian-husky":
      "Vald för sitt varglika utseende. Sedan kommer verkligheten: en rymningskonstnär avlad för att springa hela dagen, fäller i drivor, ylar åt grannarna, vissnar i sommarhettan. Fantastisk hund, mycket specifikt liv.",
    "australian-shepherd":
      "Årens sociala medier-hund – köpt för merlefärgen och tricksen. Bakom sitter en seriös vallhund som behöver ett jobb dagligen, och som blir rastlös, högljudd och nafsig utan ett.",
    "jack-russell-terrier":
      "Köpt för att den är liten. Det är ingen liten hund i själen – det är en arbetsterrier i en kompakt kropp: outtröttlig, bytesdriven, högljudd och alldeles för smart för ett hem som ville ha en knähund.",
    "french-bulldog":
      "Den mest köpta sällskapshunden i världen – vald för ansiktet, av ägare oförberedda på veterinärkostnaderna. Andningsproblem, hud, ryggrad och värmointolerans är vanliga; försäkring är inte ett val här.",
    beagle:
      "Vald som en mild familjehund – vilket den är. Överraskningen är nosen: inkallning utan koppel är ett livsarbete, mat är en religion, och det skallande ljudet bär genom väggar. Härlig hund, fel lägenhet.",
    "cocker-spaniel":
      "Vald för de mjuka ögonen och spaniel-ryktet. En arbetsavlad cocker är en mycket, mycket aktiv hund – behöver riktig motion och riktig pälsvård, och blir skällig och rastlös i ett tyst, stillasittande hem.",
    dachshund:
      "Vald för att den är söt och portabel. Det är en jakthund: modig, envis, överraskande högljudd och benägen för ryggskador som innebär att trappor och soffhoppande måste hanteras för livet.",
  },
fi: {
    "border-collie":
      "Valittu älykkyyden ja kauneuden vuoksi, työviikon omaaville ihmisille. Tylsistynyt bordercollie keksii oman työnsä – lasten paimentamisen, autojen jahtaamisen, talon purkamisen. Kaksi lenkkiä ei riitä; tämä koira tarvitsee työtä.",
    "siberian-husky":
      "Valittu susimaisen ulkonäön vuoksi. Sitten tulee todellisuus: pakoilutaiteilija, jalostettu juoksemaan koko päivän, karvaa lähtee paakkuina, ulvoo naapureille, nuutuu kesähelteessä. Upea koira, hyvin erityinen elämä.",
    "australian-shepherd":
      "Viime vuosien somekoira – ostettu merle-turkin ja temppujen vuoksi. Sen takana on vakava paimenkoira, joka tarvitsee päivittäin työtä, ja joka muuttuu levottomaksi, äänekkääksi ja näykkiväksi ilman sitä.",
    "jack-russell-terrier":
      "Ostettu, koska se on pieni. Se ei ole pieni koira hengeltään – se on työterrieri kompaktissa kehossa: väsymätön, saalisviettinen, äänekäs ja aivan liian fiksu kotiin, joka halusi sylikoiran.",
    "french-bulldog":
      "Maailman ostetuin seurakoira – valittu ulkonäön vuoksi, omistajille, jotka eivät ole varautuneet eläinlääkärikuluihin. Hengitysvaikeudet, iho-ongelmat, selkävaivat ja kuumuuden sietämättömyys ovat yleisiä; vakuutus ei ole valinnainen tässä.",
    beagle:
      "Valittu lempeäksi perhekoiraksi – mitä se onkin. Yllätys on nenä: vapaana sisäänkutsuminen on elämän työtä, ruoka on uskonto, ja haukkuva ääni kantaa seinien läpi. Ihana koira, väärä asunto.",
    "cocker-spaniel":
      "Valittu pehmeiden silmien ja spanielin maineen vuoksi. Työlinjainen cockeri on kiireinen, kiireinen koira – tarvitsee todellista liikuntaa ja todellista turkinhoitoa, ja muuttuu haukkuvaksi ja levottomaksi hiljaisessa, paikallaan pysyvässä kodissa.",
    dachshund:
      "Valittu, koska se on söpö ja kannettava. Se on metsästyskoira: rohkea, itsepäinen, yllättävän äänekäs ja altis selkävammoille, mikä tarkoittaa, että portaita ja sohvalle hyppimistä on hallittava koko elämän ajan.",
  },
de: {
    "border-collie":
      "Gewählt wegen Intelligenz und Schönheit, von Menschen mit einer Arbeitswoche. Ein gelangweilter Border Collie erfindet seinen eigenen Job – Kinder hüten, Autos jagen, das Haus auseinandernehmen. Zwei Spaziergänge reichen nicht; dieser Hund braucht Arbeit.",
    "siberian-husky":
      "Gewählt wegen des wolfsähnlichen Aussehens. Dann kommt die Realität: ein Ausbruchskünstler, gezüchtet, um den ganzen Tag zu rennen, der in Haufen haart, die Nachbarn anheult und in Sommerhitze welkt. Atemberaubender Hund, sehr spezifisches Leben.",
    "australian-shepherd":
      "Der Social-Media-Hund der letzten Jahre – gekauft wegen des Merle-Fells und der Tricks. Dahinter steckt ein ernsthafter Hütehund, der täglich eine Aufgabe braucht und ohne diese unruhig, laut und zwickend wird.",
    "jack-russell-terrier":
      "Gekauft, weil er klein ist. Er ist kein kleiner Hund im Geiste – er ist ein Arbeitsterrier in einem kompakten Körper: unermüdlich, beutegierig, laut und viel zu clever für ein Zuhause, das einen Schoßhund wollte.",
    "french-bulldog":
      "Der meistgekaufte Begleithund der Welt – gewählt wegen des Gesichts, von Besitzern, die auf die Tierarztrechnungen nicht vorbereitet sind. Atemprobleme, Haut-, Rücken- und Hitzeintoleranz sind häufig; eine Versicherung ist hier keine Option.",
    beagle:
      "Gewählt als sanfter Familienhund – was er auch ist. Die Überraschung ist die Nase: Freilauf-Rückruf ist lebenslange Arbeit, Futter ist eine Religion, und die bellende Stimme trägt durch Wände. Lieber Hund, falsche Wohnung.",
    "cocker-spaniel":
      "Gewählt wegen der sanften Augen und des Spaniel-Rufs. Ein arbeitsgezüchteter Cocker ist ein geschäftiger, geschäftiger Hund – braucht echte Bewegung und echte Fellpflege und wird in einem ruhigen, sitzenden Zuhause bellfreudig und unruhig.",
    dachshund:
      "Gewählt, weil er süß und tragbar ist. Er ist ein Jagdhund: mutig, stur, überraschend laut und anfällig für Rückenverletzungen, was bedeutet, dass Treppen und Sofa-Springen lebenslang gemanagt werden müssen.",
  },
fr: {
    "border-collie":
      "Choisi pour son intelligence et sa beauté, par des personnes ayant une semaine de travail. Un border collie qui s'ennuie invente son propre travail – rassembler des enfants, chasser des voitures, démanteler la maison. Deux promenades ne suffisent pas ; ce chien a besoin de travail.",
    "siberian-husky":
      "Choisi pour son apparence de loup. Puis vient la réalité : un artiste de l'évasion élevé pour courir toute la journée, muant par tas, hurlant aux voisins, se flétrissant sous la chaleur estivale. Chien magnifique, vie très spécifique.",
    "australian-shepherd":
      "Le chien des réseaux sociaux de ces dernières années – acheté pour sa robe merle et ses tours. Derrière cela se cache un chien de berger sérieux qui a besoin d'un travail quotidien, et qui devient agité, vocal et mordilleur sans cela.",
    "jack-russell-terrier":
      "Acheté parce qu'il est petit. Ce n'est pas un petit chien dans l'esprit – c'est un terrier de travail dans un corps compact : infatigable, guidé par la proie, vocal et bien trop intelligent pour un foyer qui voulait un chien de canapé.",
    "french-bulldog":
      "Le chien de compagnie le plus acheté au monde – choisi pour son visage, par des propriétaires non préparés aux factures vétérinaires. Les problèmes respiratoires, de peau, de colonne vertébrale et l'intolérance à la chaleur sont courants ; l'assurance n'est pas une option ici.",
    beagle:
      "Choisi comme un chien de famille doux – ce qu'il est. La surprise, c'est le nez : le rappel au pied est un travail de toute une vie, la nourriture est une religion, et la voix de chien de chasse porte à travers les murs. Beau chien, mauvais appartement.",
    "cocker-spaniel":
      "Choisi pour ses yeux doux et sa réputation de spaniel. Un cocker de lignée de travail est un chien très, très occupé – a besoin d'exercice réel et de soins réels pour son pelage, et devient aboyeur et agité dans un foyer calme et sédentaire.",
    dachshund:
      "Choisi parce qu'il est mignon et portable. C'est un chien de chasse : courageux, têtu, étonnamment bruyant et sujet aux blessures du dos, ce qui signifie que les escaliers et les sauts sur le canapé doivent être gérés à vie.",
  },
nl: {
    "border-collie":
      "Gekozen vanwege intelligentie en schoonheid, door mensen met een werkweek. Een verveelde border collie bedenkt zijn eigen baan – kinderen hoeden, auto's achternazitten, het huis ontmantelen. Twee wandelingen zijn niet genoeg; deze hond heeft werk nodig.",
    "siberian-husky":
      "Gekozen vanwege het wolfachtige uiterlijk. Dan komt de realiteit: een ontsnappingskunstenaar gefokt om de hele dag te rennen, verhaart in hopen, huilt naar de buren, kwijnt weg in zomerse hitte. Prachtige hond, zeer specifiek leven.",
    "australian-shepherd":
      "De social-medias hond van de afgelopen jaren – gekocht voor de merle vacht en de trucjes. Daarachter zit een serieuze herdershond die dagelijks een taak nodig heeft, en die rusteloos, luidruchtig en bijterig wordt zonder.",
    "jack-russell-terrier":
      "Gekocht omdat hij klein is. Het is geen kleine hond in hart en nieren – het is een werkterriër in een compact lichaam: onvermoeibaar, prooidriftig, luidruchtig en veel te slim voor een huis dat een schoothondje wilde.",
    "french-bulldog":
      "De meest gekochte gezelschapshond ter wereld – gekozen vanwege het gezicht, door eigenaren die niet voorbereid zijn op de dierenartskosten. Ademhalingsproblemen, huid-, rug- en hitte-intolerantie komen vaak voor; verzekering is hier geen optie.",
    beagle:
      "Gekozen als een zachtaardige gezinshond – wat hij ook is. De verrassing is de neus: loslopen en terugkomen is levenswerk, eten is een religie, en de blaffende stem draagt door muren. Heerlijke hond, verkeerd appartement.",
    "cocker-spaniel":
      "Gekozen vanwege de zachte ogen en de spaniel reputatie. Een werklijn cockerspaniël is een drukke, drukke hond – heeft echte beweging en echte vachtverzorging nodig, en wordt blafferig en rusteloos in een stil, sedentair huis.",
    dachshund:
      "Gekozen omdat hij schattig en draagbaar is. Het is een jachthond: moedig, koppig, verrassend luidruchtig en vatbaar voor rugblessures, wat betekent dat trappen en op de bank springen levenslang beheerd moet worden.",
  }
,
},
};

export const LIFESTYLE_GUIDES = [
  APARTMENT_GUIDE,
  FIRST_TIME_GUIDE,
  ALONE_GUIDE,
  LOW_SHEDDING_GUIDE,
  COST_GUIDE,
  MISMATCH_GUIDE,
];

/**
 * Links from the /guides hub sections to the full guide pages.
 * Labels are translated for en/no/pl; other locales fall back to English
 * until translated.
 */
export const GUIDE_HUB_LINKS: Record<
  string,
  { path: string; label: { en: string; no: string; pl: string } }
> = {
  "family-dogs": {
    path: "/best-dog-breeds-for-families",
    label: {
      en: "Read the full guide to the best dog breeds for families",
      no: "Les hele guiden til de beste hunderasene for familier",
      pl: "Przeczytaj pełny przewodnik po najlepszych rasach dla rodzin",
    },
  },
  "flat-living": {
    path: APARTMENT_GUIDE.path,
    label: {
      en: "Read the full guide to the best apartment dogs",
      no: "Les hele guiden til de beste hundene for leilighet",
      pl: "Przeczytaj pełny przewodnik po najlepszych psach do mieszkania",
    },
  },
  "first-dog": {
    path: FIRST_TIME_GUIDE.path,
    label: {
      en: "Read the full guide for first-time owners",
      no: "Les hele guiden for førstegangseiere",
      pl: "Przeczytaj pełny przewodnik dla początkujących właścicieli",
    },
  },
  "calm-dogs": {
    path: ALONE_GUIDE.path,
    label: {
      en: "Read the honest guide to dogs and time alone",
      no: "Les den ærlige guiden om hunder og alene-tid",
      pl: "Przeczytaj szczery przewodnik o psach zostających samym",
    },
  },
  "shedding-allergies": {
    path: LOW_SHEDDING_GUIDE.path,
    label: {
      en: "Read the honest guide to low-shedding dogs and allergies",
      no: "Les den ærlige guiden om lite røytende hunder og allergi",
      pl: "Przeczytaj szczery przewodnik o psach mało liniących i alergii",
    },
  },
  "yearly-cost": {
    path: COST_GUIDE.path,
    label: {
      en: "Read the full guide to what a dog really costs",
      no: "Les hele guiden om hva en hund egentlig koster",
      pl: "Przeczytaj pełny przewodnik o prawdziwych kosztach psa",
    },
  },
};
