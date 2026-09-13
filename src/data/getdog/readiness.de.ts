import type { UserProfile } from "@/lib/matching/types";

/**
 * Die Bereitschafts-Konversation. Kein Test – es gibt keine Bestnote und keine Schande
 * für irgendeine Antwort. Wo eine Antwort auch für die Matching-Engine nützlich ist,
 * trägt sie ein `profile`-Patch, damit Find My Dog sie nie wieder fragt.
 */
export interface ReadinessOption {
  value: string;
  label: string;
  hint?: string;
  /** 0–3. Höher bedeutet einfach weniger Dinge, die zuerst geklärt werden müssen. */
  score: number;
  /** Was diese Antwort der Matching-Engine sagt, falls überhaupt. */
  profile?: UserProfile;
  /** Eine sanfte Notiz, die im Ergebnis angezeigt wird, wenn diese Antwort gewählt wird. */
  note?: string;
}

export interface ReadinessQuestion {
  id: string;
  eyebrow: string;
  title: string;
  help?: string;
  options: ReadinessOption[];
}

export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "time",
    eyebrow: "Deine Tage",
    title: "Wie viel Zeit könntest du einem Hund pro Tag widmen?",
    help: "Spaziergänge, Fütterung, Training, Fellpflege und einfach nur Zusammensein.",
    options: [
      { value: "under1", label: "Weniger als eine Stunde", score: 0, note: "Die meisten Hunde brauchen mehr als eine Stunde deines Tages, verteilt auf Spaziergänge, Futter, Training und Gesellschaft. Es lohnt sich zu überlegen, wie du diese Zeit finden würdest." },
      { value: "1-2", label: "Eine bis zwei Stunden", score: 2 },
      { value: "2-3", label: "Zwei bis drei Stunden", score: 3 },
      { value: "3plus", label: "Mehr als drei Stunden", score: 3, hint: "Meine Tage sind ziemlich flexibel" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Dein Tag",
    title: "Wie lange wäre dein Hund normalerweise allein?",
    help: "Es gibt keine einzelne Zahl, die für jeden Hund richtig ist. Alter, Erziehung und Temperament spielen eine Rolle.",
    options: [
      { value: "0", label: "Kaum allein", score: 3, profile: { alone: "0" } },
      { value: "2", label: "Bis zu drei Stunden", score: 3, profile: { alone: "2" } },
      { value: "4", label: "Drei bis fünf Stunden", score: 2, profile: { alone: "4" } },
      { value: "6", label: "Sechs Stunden oder mehr", score: 0, profile: { alone: "6" }, note: "Lange Tage allein sind für die meisten Hunde hart. Ein Hundespaziergänger, eine Hundetagesstätte oder ein Nachbar, der vorbeischauen kann, machen einen echten Unterschied – das lohnt sich, vorher und nicht nachher zu planen." },
    ],
  },
  {
    id: "activity",
    eyebrow: "Deine Tage",
    title: "Wie aktiv bist du an einem normalen Tag?",
    help: "Denk an eine gewöhnliche Woche, nicht an deine beste.",
    options: [
      { value: "1", label: "Ziemlich ruhig", score: 2, profile: { activity: "1" } },
      { value: "2", label: "Angemessen aktiv", score: 3, profile: { activity: "2" } },
      { value: "3", label: "Ziemlich aktiv", score: 3, profile: { activity: "3" } },
      { value: "4", label: "Immer in Bewegung", score: 3, profile: { activity: "4" } },
    ],
  },
  {
    id: "home",
    eyebrow: "Zuhause",
    title: "Wo würde dein Hund leben?",
    help: "Eine Wohnung ist kein Hindernis für einen glücklichen Hund. Wichtiger sind die Spaziergänge vor deiner Haustür und deine Tagesroutine.",
    options: [
      { value: "apartment", label: "Eine Wohnung", score: 3, profile: { home: "apartment" } },
      { value: "house", label: "Ein Haus ohne Garten", score: 3, profile: { home: "house" } },
      { value: "house-garden", label: "Ein Haus mit Garten", score: 3, profile: { home: "house-garden" } },
      { value: "rural", label: "Auf dem Land", score: 3, profile: { home: "rural" } },
    ],
  },
  {
    id: "travel",
    eyebrow: "Unterwegs",
    title: "Reist du oft?",
    options: [
      { value: "rarely", label: "Selten", score: 3 },
      { value: "sometimes", label: "Ein paar Mal im Jahr", score: 2 },
      { value: "often", label: "Oft, beruflich oder privat", score: 1, note: "Oft zu reisen ist kein Grund, keinen Hund zu haben – aber es bedeutet, früh zu entscheiden, wer sich um ihn kümmert oder auf welchen Reisen er mitkommt." },
    ],
  },
  {
    id: "children",
    eyebrow: "Zu Hause",
    title: "Wer lebt noch bei dir?",
    options: [
      { value: "none", label: "Nur Erwachsene", score: 3, profile: { children: "none" } },
      { value: "older", label: "Ältere Kinder", score: 3, profile: { children: "older" } },
      { value: "young", label: "Kleine Kinder", score: 2, profile: { children: "young" }, note: "Kleine Kinder und Hunde können wunderbar zusammen sein, mit Aufsicht und einem ruhigen Rückzugsort für den Hund." },
      { value: "visitors", label: "Erwachsene und viele Besucher", score: 3, profile: { children: "visitors" } },
    ],
  },
  {
    id: "pets",
    eyebrow: "Zu Hause",
    title: "Gibt es andere Tiere im Haushalt?",
    options: [
      { value: "none", label: "Keine anderen Tiere", score: 3, profile: { pets: "none" } },
      { value: "dog", label: "Ein weiterer Hund", score: 3, profile: { pets: "dog" } },
      { value: "cat", label: "Eine Katze", score: 2, profile: { pets: "cat" } },
      { value: "small", label: "Kleinere Tiere", hint: "Kaninchen, Vögel, Nagetiere", score: 2, profile: { pets: "small" } },
    ],
  },
  {
    id: "allergies",
    eyebrow: "Gesundheit zu Hause",
    title: "Hat jemand im Haushalt Allergien?",
    help: "Manche Rassen haaren weniger, was für manche Menschen einfacher zu handhaben ist. Kein Hund ist komplett allergiefrei, und Reaktionen variieren von Person zu Person.",
    options: [
      { value: "no", label: "Niemand, soweit wir wissen", score: 3, profile: { shedding: "fine" } },
      { value: "mild", label: "Jemand ist etwas empfindlich", score: 2, profile: { shedding: "prefer-low" } },
      { value: "yes", label: "Ja, jemand reagiert auf Hunde", score: 1, profile: { shedding: "must-low" }, note: "Verbringe Zeit mit dem einzelnen Hund, bevor du dich entscheidest, und sprich mit einem Arzt. Weniger haarende Rassen helfen manchen Menschen und anderen nicht." },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Pflege",
    title: "Bist du bereit für regelmäßige Fellpflege?",
    options: [
      { value: "minimal", label: "Ich halte es lieber einfach", score: 2, profile: { grooming: "minimal" } },
      { value: "moderate", label: "Regelmäßiges Bürsten ist in Ordnung", score: 3, profile: { grooming: "moderate" } },
      { value: "high", label: "Besuche beim Hundefriseur sind kein Problem", score: 3, profile: { grooming: "high" } },
    ],
  },
  {
    id: "costs",
    eyebrow: "Finanzen",
    title: "Könntest du eine unerwartete Tierarztrechnung bezahlen?",
    help: "Das ist das, was die meisten Leute überrascht. Versicherung oder Ersparnisse funktionieren beide.",
    options: [
      { value: "yes", label: "Ja, wir würden es schaffen", score: 3 },
      { value: "insurance", label: "Mit Versicherung, ja", score: 3 },
      { value: "tight", label: "Es wäre knapp", score: 1, note: "Jeden Monat ein bisschen zur Seite legen oder früh versichern nimmt viel Sorge für die kommenden Jahre." },
      { value: "no", label: "Im Moment nicht", score: 0, note: "Tierärztliche Versorgung kann teuer sein und kommt selten zu einem günstigen Zeitpunkt. Ein paar Monate Sparen im Voraus können alles verändern." },
    ],
  },
  {
    id: "support",
    eyebrow: "Deine Leute",
    title: "Wer könnte helfen, wenn du krank wärst oder weg müsstest?",
    options: [
      { value: "household", label: "Jemand anderes im Haushalt", score: 3 },
      { value: "family", label: "Familie oder Freunde in der Nähe", score: 3 },
      { value: "paid", label: "Ich würde für einen Sitter oder eine Hundetagesstätte bezahlen", score: 2 },
      { value: "noone", label: "Ich bin mir noch nicht sicher", score: 0, note: "Jeder wird irgendwann krank oder muss weg. Wenn du jetzt weißt, wer einspringen würde, sind diese Wochen viel weniger stressig." },
    ],
  },
  {
    id: "commitment",
    eyebrow: "Der lange Blick",
    title: "Ein Hund kann zehn bis fünfzehn Jahre bei dir sein. Fühlt sich das richtig an?",
    help: "Denk darüber nach, wo du in zehn Jahren leben, arbeiten und reisen könntest.",
    options: [
      { value: "yes", label: "Ja, wir haben darüber nachgedacht", score: 3 },
      { value: "mostly", label: "Größtenteils – einiges ist ungewiss", score: 2 },
      { value: "unsure", label: "Ehrlich gesagt, ich bin mir nicht sicher", score: 0, note: "Das ist ein sehr vernünftiges Gefühl. Es gibt keine Eile – ein Hund wird immer noch da sein, wenn das Bild klarer ist." },
    ],
  },
];

export interface ReadinessOutcome {
  id: "well-prepared" | "good-start" | "not-yet";
  title: string;
  body: string;
  encouragement: string;
}

export const readinessOutcomes: Record<ReadinessOutcome["id"], ReadinessOutcome> = {
  "well-prepared": {
    id: "well-prepared",
    title: "Du scheinst gut vorbereitet zu sein.",
    body: "Nach dem, was du uns erzählt hast, würde ein Hund gut in dein Leben passen, ohne dass viel geändert werden muss. Du hast über Zeit, Geld und die Menschen nachgedacht, die helfen würden, wenn das Leben dazwischenkommt – das ist schon der größte Teil der Arbeit.",
    encouragement: "Bereit herauszufinden, welche Hunde zu deinem Leben passen könnten?",
  },
  "good-start": {
    id: "good-start",
    title: "Du hast einen guten Anfang gemacht.",
    body: "Die meisten Teile sind schon da. Es gibt ein oder zwei Dinge, die es wert sind, vor der Ankunft eines Hundes geklärt zu werden, und keine davon ist schwierig – sie sind einfach leichter jetzt zu arrangieren als in der ersten Woche mit einem neuen Hund.",
    encouragement: "Schau dir an, welche Hunde zu dir passen könnten, während du den Rest erledigst.",
  },
  "not-yet": {
    id: "not-yet",
    title: "Es gibt ein paar Dinge, über die es sich lohnt, zuerst nachzudenken.",
    body: "Vielleicht noch nicht ganz – und das ist völlig in Ordnung. Nichts hier sagt, dass du keinen Hund haben solltest. Es sagt, dass ein wenig Vorbereitung jetzt die Entscheidung viel einfacher und das erste Jahr für euch beide viel freundlicher machen würde.",
    encouragement: "Du bist herzlich eingeladen, weiter zu erkunden. Nichts ist gesperrt.",
  },
};
