import type { TrainingCategory, TrainingGoal } from "./types";

export const trainingCategories: TrainingCategory[] = [
  {
    id: "puppy-foundations",
    title: "Welpen-Grundlagen",
    blurb: "Der sanfte Anfang — dein Name, deine Stimme und die Erkenntnis, dass Menschen gute Gesellschaft sind.",
    covers: ["Name", "Blickkontakt", "Sitz", "Platz", "Bleib", "Rückruf", "Aus", "Handling", "Zur Ruhe kommen", "Stubenreinheit", "Beißen", "Kauen", "Die Welt kennenlernen"],
  },
  {
    id: "everyday-manners",
    title: "Alltagsmanieren",
    blurb: "Die kleinen Dinge, die den Alltag für euch beide leichter machen.",
    covers: ["Menschen begrüßen", "Ruhige Begrüßungen", "Nicht hochspringen", "Warten", "Türen", "Essenszeiten", "Zur Ruhe kommen", "Auf die Reihe warten"],
  },
  {
    id: "walking",
    title: "Gemeinsam spazieren",
    blurb: "Ein Spaziergang, der sich wie ein Spaziergang anfühlt, nicht wie ein Tauziehen.",
    covers: ["Lockere Leine", "Draußen Blickkontakt halten", "Anhalten", "Abbiegen", "Ablenkungen", "Ruhig an anderen Hunden vorbeigehen"],
  },
  {
    id: "home",
    title: "Leben zu Hause",
    blurb: "Ruhe, Stille und ein Hund, der weiß, wie man abschaltet.",
    covers: ["Ruhe zu Hause", "Alleinsein", "Zur Ruhe kommen", "Bellen", "Besuch", "Alltagsroutinen"],
  },
  {
    id: "socialisation",
    title: "Die Welt kennenlernen",
    blurb: "Neue Orte und neue Gesichter, langsam und im Tempo deines Hundes.",
    covers: ["Menschen", "Andere Hunde", "Neue Orte", "Geräusche", "Reisen", "Angefasst werden", "Fellpflege"],
  },
  {
    id: "recall-safety",
    title: "Rückruf & Sicherheit",
    blurb: "Zu dir zurückkommen, selbst wenn gerade etwas Spannenderes passiert.",
    covers: ["Name", "Aufmerksamkeit", "Komm", "Notrückruf", "Aus", "Gib ab"],
  },
  {
    id: "tricks-games",
    title: "Tricks & Spiele",
    blurb: "Der spaßige Teil. Und ganz nebenbei manchmal das beste Training überhaupt.",
    covers: ["Pfötchen", "Drehen", "Rolle", "Berühren", "Suchen", "Apportieren", "Auf deinen Platz", "Versteckspiel"],
  },
  {
    id: "mental-stimulation",
    title: "Zum Nachdenken",
    blurb: "Zehn Minuten Schnüffeln und Suchen können einen Hund mehr auspowern als eine Stunde Laufen.",
    covers: ["Nasenarbeit", "Denkspiele", "Suchen", "Problemlösen", "Beschäftigung", "Ruhige Denkspiele"],
  },
];

export const trainingGoals: TrainingGoal[] = [
  { id: "puppy-basics", label: "Welpen-Grundlagen", hint: "Womit die meisten anfangen" },
  { id: "calm-at-home", label: "Ruhe zu Hause", hint: "Lernen abzuschalten" },
  { id: "loose-leash", label: "Schön spazieren gehen", hint: "Weniger Ziehen, mehr Gehen" },
  { id: "recall", label: "Auf Ruf kommen", hint: "Eines der nützlichsten Dinge überhaupt" },
  { id: "sit-down-stay", label: "Sitz, Platz & Bleib", hint: "Die Worte für den Alltag" },
  { id: "potty-training", label: "Stubenreinheit", hint: "Weniger Missgeschicke, weniger Stress" },
  { id: "puppy-biting", label: "Welpen-Beißen", hint: "Diese Nadelzähnchen" },
  { id: "leave-it", label: "Aus", hint: "Für die Dinge auf dem Gehweg" },
  { id: "socialisation", label: "Die Welt kennenlernen", hint: "Menschen, Hunde, Orte, Geräusche" },
  { id: "barking", label: "Bellen", hint: "Erst verstehen, dann lindern" },
  { id: "calmness", label: "Zur Ruhe kommen", hint: "Ruhe ist auch eine Fähigkeit" },
  { id: "manners", label: "Alltagsmanieren", hint: "Türen, Besuch, Essenszeit" },
  { id: "mental", label: "Etwas zum Nachdenken", hint: "Schnüffeln, Suchen, Rätsel" },
  { id: "tricks", label: "Tricks & Spiele", hint: "Weil es Spaß macht" },
];
