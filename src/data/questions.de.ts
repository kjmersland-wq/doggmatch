import type { QuizQuestion } from "@/lib/matching/types";

/** Fragen auf Deutsch. IDs und Werte bleiben gleich. */
export const questionsDe: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Dein Alltag",
    title: "Wie aktiv bist du an einem ganz normalen Tag?",
    help: "Denk an eine ganz gewöhnliche Woche, nicht an deine beste.",
    options: [
      { value: "1", label: "Eher ruhig", hint: "Ein gemütlicher Spaziergang um den Block, an den meisten Tagen" },
      { value: "2", label: "Einigermaßen aktiv", hint: "Ein 45-minütiger Spaziergang im Park, auch an einem verregneten Dienstag" },
      { value: "3", label: "Ziemlich aktiv", hint: "Eine Stunde oder mehr an den meisten Tagen, und am Wochenende richtig was los" },
      { value: "4", label: "Immer in Bewegung", hint: "Eine richtige zweistündige Wanderung, egal bei welchem Wetter" },
    ],
  },
  {
    id: "home",
    eyebrow: "Zuhause",
    title: "Wo wird dein Hund wohnen?",
    options: [
      { value: "apartment", label: "In einer Wohnung", hint: "Gemeinsames Treppenhaus oder Aufzug" },
      { value: "house", label: "Haus ohne Garten" },
      { value: "house-garden", label: "Haus mit Garten" },
      { value: "rural", label: "Draußen auf dem Land" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Dein Tag",
    title: "Wie lange wäre dein Hund normalerweise allein?",
    help: "Rechne den ganzen Tag realistisch mit ein — Arbeitsweg und Bürotage inklusive, nicht nur die Stunden am Schreibtisch.",
    options: [
      { value: "0", label: "Fast nie allein", hint: "Es ist fast immer jemand zu Hause" },
      { value: "2", label: "Bis zu drei Stunden", hint: "Ein kurzer Arbeitsweg neben Homeoffice, oder ein Vormittag unterwegs" },
      { value: "4", label: "Drei bis fünf Stunden", hint: "Ein typischer Bürotag mit kurzem Sprung nach Hause zur Mittagszeit" },
      { value: "6", label: "Sechs Stunden oder mehr", hint: "Voller Arbeitsweg und voller Bürotag, von Tür zu Tür" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Erfahrung",
    title: "Hattest du schon einmal einen Hund?",
    help: "Noch nie einen Hund gehabt? Kein Problem. Wir berücksichtigen Dinge wie Erziehungsspielraum, Geduld und Alleinbleiben-Toleranz, damit du nicht überfordert bist.",
    options: [
      { value: "first", label: "Das wäre mein erster" },
      { value: "some", label: "Ein bisschen", hint: "Bin mit Hunden aufgewachsen oder habe geholfen, einen zu betreuen" },
      { value: "experienced", label: "Jede Menge", hint: "Ich habe selbst Hunde großgezogen und trainiert" },
    ],
  },
  {
    id: "size",
    eyebrow: "Deine Wünsche",
    title: "Hast du eine bestimmte Größe im Kopf?",
    optional: true,
    options: [
      { value: "small", label: "Etwas Kleines" },
      { value: "medium", label: "Irgendwo dazwischen" },
      { value: "large", label: "Einen großen Hund" },
      { value: "any", label: "Ich bin für alles offen" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Deine Wünsche",
    title: "Welchen Charakter würdest du dir am meisten wünschen?",
    options: [
      { value: "calm", label: "Ruhig und gelassen" },
      { value: "affectionate", label: "Liebevoll und nah dran" },
      { value: "playful", label: "Verspielt und voller Leben" },
      { value: "independent", label: "Zufrieden mit sich selbst" },
    ],
  },
  {
    id: "children",
    eyebrow: "Zuhause",
    title: "Wer wohnt sonst noch bei euch?",
    options: [
      { value: "none", label: "Nur Erwachsene" },
      { value: "older", label: "Ältere Kinder" },
      { value: "young", label: "Kleine Kinder" },
      { value: "visitors", label: "Erwachsene, und viel Besuch" },
    ],
  },
  {
    id: "pets",
    eyebrow: "Zuhause",
    title: "Gibt es noch andere Tiere im Haus?",
    optional: true,
    options: [
      { value: "none", label: "Keine anderen Haustiere" },
      { value: "dog", label: "Einen weiteren Hund" },
      { value: "cat", label: "Eine Katze" },
      { value: "small", label: "Kleinere Tiere", hint: "Kaninchen, Vögel, Nagetiere" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Fell und Allergien",
    title: "Wie stehst du zu Hundehaaren im Haus?",
    help: "Manche Rassen haaren weniger, was Menschen mit Allergien manchmal leichter fällt. Kein Hund ist allerdings völlig allergiefrei.",
    options: [
      { value: "fine", label: "Haare stören mich nicht" },
      { value: "prefer-low", label: "Lieber möglichst wenig davon" },
      { value: "must-low", label: "Jemand hier reagiert auf Hunde", hint: "Bitte nur Rassen, die wenig haaren" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Pflege",
    title: "Wie viel Fellpflege bist du bereit zu übernehmen?",
    options: [
      { value: "minimal", label: "So wenig wie möglich" },
      { value: "moderate", label: "Regelmäßiges Bürsten ist okay" },
      { value: "high", label: "Termine beim Hundefriseur stören mich nicht" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Pflege",
    title: "Wie viel Hund kannst du gut handhaben?",
    help: "Kraft an der Leine unterschätzen viele.",
    options: [
      { value: "light", label: "Nichts Großes oder Kräftiges", hint: "Ein kräftiger Hund wäre zu viel" },
      { value: "moderate", label: "Ein mittelgroßer Hund passt gut" },
      { value: "strong", label: "Ich komme mit einem großen, kräftigen Hund zurecht" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Ehrlich gesagt",
    title: "Könntest du gut mit einem sehr energiegeladenen Hund leben?",
    help: "Sei hier ruhig ehrlich — wir nehmen dich beim Wort.",
    options: [
      { value: "no", label: "Nein, ich bräuchte einen ruhigeren Hund" },
      { value: "maybe", label: "In Maßen schon" },
      { value: "yes", label: "Ja, ich hätte gerne einen aktiven" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Gesellschaft",
    title: "Was erhoffst du dir von einem Hund für dein Leben?",
    options: [
      { value: "calm-company", label: "Ruhige, verlässliche Gesellschaft" },
      { value: "motivation", label: "Einen Grund, rauszugehen" },
      { value: "active", label: "Jemanden, der mit mir mithält" },
      { value: "family", label: "Einen Hund für die ganze Familie" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Fell und Allergien",
    title: "Hat jemand in deinem Zuhause eine Hundeallergie?",
    help: "Manche Rassen haaren weniger und behalten ihr Fell, was manchen Menschen leichter fällt. Kein Hund ist völlig allergiefrei, und die Verträglichkeit ist von Person zu Person unterschiedlich.",
    options: [
      { value: "none", label: "Nein, niemand reagiert auf Hunde" },
      { value: "mild", label: "Leichte Reaktionen", hint: "Etwas schnupfig in der Nähe mancher Hunde" },
      { value: "significant", label: "Eine deutliche Allergie", hint: "Wir würden vorher richtigen Allergie-Rat einholen" },
      { value: "unsure", label: "Wir sind uns noch nicht sicher" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Gesellschaft und Wohlbefinden",
    title: "Wie sehr wünschst du dir einen ruhigen, engen Begleiter an deiner Seite?",
    help: "Ein Hund leistet Gesellschaft, keine Pflege. Wir schauen auf Gelassenheit, Geselligkeit und wie menschenbezogen eine Rasse typischerweise ist.",
    options: [
      { value: "no", label: "Danach suche ich nicht" },
      { value: "some", label: "Das wäre schön" },
      { value: "important", label: "Ja, das ist mir wichtig" },
      { value: "very", label: "Das ist mein wichtigster Wunsch" },
    ],
  },
];
