import type { TrainingCategory, TrainingGoal } from "./types";

export const trainingCategories: TrainingCategory[] = [
  {
    id: "puppy-foundations",
    title: "Bases pour chiot",
    blurb: "Les débuts en douceur — votre nom, votre voix, et l'apprentissage que les humains sont une bonne compagnie.",
    covers: ["Nom", "Contact visuel", "Assis", "Couché", "Reste", "Rappel", "Laisse", "Manipulation", "Se poser", "Propreté", "Morsures", "Mastication", "Découvrir le monde"],
  },
  {
    id: "everyday-manners",
    title: "Bonnes manières au quotidien",
    blurb: "Les petites choses qui rendent les journées ordinaires plus faciles pour vous deux.",
    covers: ["Saluer les gens", "Accueils calmes", "Ne pas sauter", "Attendre", "Passages de porte", "Repas", "Se poser", "Attendre son tour"],
  },
  {
    id: "walking",
    title: "Marcher ensemble",
    blurb: "Une promenade qui ressemble à une promenade, pas à un bras de fer.",
    covers: ["Laisse détendue", "Se retourner vers vous dehors", "S'arrêter", "Tourner", "Distractions", "Croiser d'autres chiens calmement"],
  },
  {
    id: "home",
    title: "La vie à la maison",
    blurb: "Repos, calme et un chien qui sait se relâcher.",
    covers: ["Calme à la maison", "Être seul", "Se poser", "Aboiements", "Visiteurs", "Routines du quotidien"],
  },
  {
    id: "socialisation",
    title: "Découvrir le monde",
    blurb: "De nouveaux lieux et de nouveaux visages, pris lentement et au rythme de votre chien.",
    covers: ["Personnes", "Autres chiens", "Nouveaux lieux", "Bruits", "Voyages", "Être manipulé", "Toilettage"],
  },
  {
    id: "recall-safety",
    title: "Rappel et sécurité",
    blurb: "Revenir vers vous, même quand quelque chose de plus intéressant se passe.",
    covers: ["Nom", "Attention", "Viens", "Rappel d'urgence", "Laisse", "Lâche"],
  },
  {
    id: "tricks-games",
    title: "Tours et jeux",
    blurb: "La partie amusante. Aussi, discrètement, l'un des meilleurs entraînements que vous ferez.",
    covers: ["Patte", "Tourner", "Rouler", "Toucher", "Cherche", "Rapporter", "Aller à sa place", "Cache-cache"],
  },
  {
    id: "mental-stimulation",
    title: "De quoi réfléchir",
    blurb: "Dix minutes à renifler et chercher peuvent fatiguer un chien plus qu'une heure de course.",
    covers: ["Jeux d'odorat", "Puzzles", "Recherche", "Résolution de problèmes", "Enrichissement", "Jeux calmes pour le cerveau"],
  },
];

export const trainingGoals: TrainingGoal[] = [
  { id: "puppy-basics", label: "Bases pour chiot", hint: "Là où la plupart des gens commencent" },
  { id: "calm-at-home", label: "Calme à la maison", hint: "Apprendre à se relâcher" },
  { id: "loose-leash", label: "Marcher gentiment", hint: "Moins de tractions, plus de balade" },
  { id: "recall", label: "Revenir quand on l'appelle", hint: "L'un des plus utiles de tous" },
  { id: "sit-down-stay", label: "Assis, couché et reste", hint: "Les mots du quotidien" },
  { id: "potty-training", label: "Propreté", hint: "Moins d'accidents, moins de stress" },
  { id: "puppy-biting", label: "Morsures de chiot", hint: "Ces dents en aiguilles" },
  { id: "leave-it", label: "Laisse", hint: "Pour les choses sur le trottoir" },
  { id: "socialisation", label: "Découvrir le monde", hint: "Personnes, chiens, lieux, bruits" },
  { id: "barking", label: "Aboiements", hint: "Les comprendre, puis les apaiser" },
  { id: "calmness", label: "Se poser", hint: "Le repos est aussi une compétence" },
  { id: "manners", label: "Bonnes manières au quotidien", hint: "Portes, visiteurs, heure du dîner" },
  { id: "mental", label: "De quoi réfléchir", hint: "Renifler, chercher, résoudre des puzzles" },
  { id: "tricks", label: "Tours et jeux", hint: "Parce que c'est amusant" },
];
