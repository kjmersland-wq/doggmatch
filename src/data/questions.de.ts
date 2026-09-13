import type { QuizQuestion } from "@/lib/matching/types";

/** Die Fragen auf Deutsch. IDs und Werte bleiben unverändert. */
export const questionsDe: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Ihr Alltag",
    title: "Wie aktiv sind Sie an einem normalen Tag?",
    help: "Denken Sie an eine ganz gewöhnliche Woche, nicht an Ihre beste.",
    options: [
      { value: "1", label: "Eher ruhig", hint: "Ein gemütlicher Spaziergang um den Block, an den meisten Tagen" },
      { value: "2", label: "Einigermaßen aktiv", hint: "Ein 45-minütiger Spaziergang im Park, auch bei Regen" },
      { value: "3", label: "Ziemlich aktiv", hint: "Eine Stunde oder mehr an den meisten Tagen, am Wochenende richtig Einsatz" },
      { value: "4", label: "Immer in Bewegung", hint: "Eine echte zweistündige Wanderung, bei jedem Wetter" },
    ],
  },
  {
    id: "home",
    eyebrow: "Zuhause",
    title: "Wo wird Ihr Hund leben?",
    options: [
      { value: "apartment", label: "In einer Wohnung", hint: "Gemeinsames Treppenhaus oder Aufzug" },
      { value: "house", label: "Ein Haus, ohne Garten" },
      { value: "house-garden", label: "Ein Haus mit Garten" },
      { value: "rural", label: "Auf dem Land" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Ihr Tag",
    title: "Wie lange wäre Ihr Hund üblicherweise allein?",
    help: "Rechnen Sie realistisch den ganzen Tag mit ein — Arbeitsweg und Bürotage eingeschlossen, nicht nur die Stunden am Schreibtisch.",
    options: [
      { value: "0", label: "Fast nie allein", hint: "Fast immer ist jemand zu Hause" },
      { value: "2", label: "Bis zu drei Stunden", hint: "Ein kurzer Arbeitsweg oder ein Vormittag außer Haus" },
      { value: "4", label: "Drei bis fünf Stunden", hint: "Ein typischer Bürotag mit Mittagspause zu Hause" },
      { value: "6", label: "Sechs Stunden oder mehr", hint: "Voller Arbeitsweg und ganzer Bürotag, Tür zu Tür" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Erfahrung",
    title: "Hatten Sie schon einmal einen Hund?",
    help: "Noch nie einen Hund gehabt? Kein Problem. Wir berücksichtigen Dinge wie Erziehungsspielraum, Geduld und Alleinsein-Toleranz, damit Sie nicht überfordert sind.",
    options: [
      { value: "first", label: "Das wäre mein erster" },
      { value: "some", label: "Ein wenig", hint: "Bin mit Hunden aufgewachsen oder habe geholfen, einen zu versorgen" },
      { value: "experienced", label: "Reichlich", hint: "Ich habe selbst Hunde großgezogen und trainiert" },
    ],
  },
  {
    id: "size",
    eyebrow: "Ihre Vorstellung",
    title: "Haben Sie eine Größe im Kopf?",
    optional: true,
    options: [
      { value: "small", label: "Etwas Kleines" },
      { value: "medium", label: "Irgendwo dazwischen" },
      { value: "large", label: "Ein großer Hund" },
      { value: "any", label: "Ich bin offen für alles" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Ihre Vorstellung",
    title: "Welche Persönlichkeit würde Ihnen am meisten Freude bereiten?",
    options: [
      { value: "calm", label: "Ruhig und gelassen" },
      { value: "affectionate", label: "Liebevoll und immer in Ihrer Nähe" },
      { value: "playful", label: "Verspielt und voller Leben" },
      { value: "independent", label: "Zufrieden mit sich selbst" },
    ],
  },
  {
    id: "children",
    eyebrow: "Zuhause",
    title: "Wer lebt noch mit Ihnen zusammen?",
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
    title: "Gibt es weitere Tiere im Haushalt?",
    optional: true,
    options: [
      { value: "none", label: "Keine weiteren Haustiere" },
      { value: "dog", label: "Ein weiterer Hund" },
      { value: "cat", label: "Eine Katze" },
      { value: "small", label: "Kleinere Tiere", hint: "Kaninchen, Vögel, Nagetiere" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Fell und Allergien",
    title: "Wie stehen Sie zu Hundehaaren im Haus?",
    help: "Manche Rassen haaren weniger, was Menschen mit Allergien manchmal leichter fällt. Völlig allergiefrei ist allerdings kein Hund.",
    options: [
      { value: "fine", label: "Haare stören mich nicht" },
      { value: "prefer-low", label: "Ich hätte lieber weniger davon" },
      { value: "must-low", label: "Jemand hier reagiert auf Hunde", hint: "Bitte nur Rassen mit wenig Haarausfall" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Fellpflege",
    title: "Wie viel Fellpflege sind Sie bereit zu übernehmen?",
    options: [
      { value: "minimal", label: "So wenig wie möglich" },
      { value: "moderate", label: "Regelmäßiges Bürsten ist in Ordnung" },
      { value: "high", label: "Termine beim Hundefriseur machen mir nichts aus" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Fellpflege",
    title: "Wie viel Hund können Sie problemlos handhaben?",
    help: "Die Zugkraft an der Leine unterschätzen viele.",
    options: [
      { value: "light", label: "Nichts Großes oder Kräftiges", hint: "Ein kräftiger Hund wäre zu viel" },
      { value: "moderate", label: "Ein mittelgroßer Hund passt gut" },
      { value: "strong", label: "Ich komme mit einem großen, kräftigen Hund zurecht" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Ganz ehrlich",
    title: "Könnten Sie glücklich mit einem sehr energiegeladenen Hund leben?",
    help: "Seien Sie hier ehrlich — wir nehmen Sie beim Wort.",
    options: [
      { value: "no", label: "Nein, ich bräuchte einen ruhigeren Hund" },
      { value: "maybe", label: "In vernünftigem Rahmen" },
      { value: "yes", label: "Ja, ich hätte gerne einen aktiven" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Gesellschaft",
    title: "Was erhoffen Sie sich von einem Hund in Ihrem Leben?",
    options: [
      { value: "calm-company", label: "Ruhige, verlässliche Gesellschaft" },
      { value: "motivation", label: "Einen Grund, nach draußen zu gehen" },
      { value: "active", label: "Jemanden, der mit mir mithält" },
      { value: "family", label: "Einen Hund für die ganze Familie" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Fell und Allergien",
    title: "Hat jemand in Ihrem Haushalt eine Hundeallergie?",
    help: "Manche Rassen haaren weniger und halten ihr Fell, was manchen Menschen leichter fällt. Völlig allergiefrei ist kein Hund, und die Verträglichkeit ist von Person zu Person verschieden.",
    options: [
      { value: "none", label: "Nein, niemand reagiert auf Hunde" },
      { value: "mild", label: "Leichte Reaktionen", hint: "Etwas Schniefen in der Nähe mancher Hunde" },
      { value: "significant", label: "Eine ausgeprägte Allergie", hint: "Wir würden zunächst eine richtige allergologische Beratung wünschen" },
      { value: "unsure", label: "Wir wissen es noch nicht genau" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Gesellschaft und Wohlbefinden",
    title: "Wie sehr wünschen Sie sich einen ruhigen, engen Begleiter an Ihrer Seite?",
    help: "Ein Hund ist Gesellschaft, keine Pflege. Wir schauen auf Gelassenheit, Geselligkeit und wie menschenbezogen eine Rasse üblicherweise ist.",
    options: [
      { value: "no", label: "Danach suche ich nicht" },
      { value: "some", label: "Das wäre schön" },
      { value: "important", label: "Ja, das ist mir wichtig" },
      { value: "very", label: "Das ist mir das Wichtigste" },
    ],
  },
];
