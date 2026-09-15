import type { UserProfile } from "@/lib/matching/types";

/**
 * La conversation sur la préparation. Ce n'est pas un test — il n'y a pas de note de passage et aucune honte
 * dans aucune réponse. Lorsqu'une réponse est également utile au moteur de mise en correspondance, elle
 * porte un patch `profile` afin que Find My Dog ne la pose plus jamais.
 */
export interface ReadinessOption {
  value: string;
  label: string;
  hint?: string;
  /** 0–3. Plus le score est élevé, moins il y a de choses à régler au préalable. */
  score: number;
  /** Ce que cette réponse indique au moteur de mise en correspondance, le cas échéant. */
  profile?: UserProfile;
  /** Une note douce affichée dans le résultat lorsque cette réponse est choisie. */
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
    eyebrow: "Vos journées",
    title: "Combien de temps pourriez-vous consacrer à un chien chaque jour ?",
    help: "Promenades, repas, dressage, toilettage et simplement passer du temps ensemble.",
    options: [
      { value: "under1", label: "Moins d'une heure", score: 0, note: "La plupart des chiens ont besoin de plus d'une heure de votre journée, répartie entre promenades, repas, dressage et compagnie. Il est bon de réfléchir à la manière dont vous trouveriez ce temps." },
      { value: "1-2", label: "Une à deux heures", score: 2 },
      { value: "2-3", label: "Deux à trois heures", score: 3 },
      { value: "3plus", label: "Plus de trois heures", score: 3, hint: "Mes journées sont assez flexibles" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Votre journée",
    title: "Combien de temps votre chien serait-il généralement seul ?",
    help: "Il n'y a pas de chiffre unique qui convienne à tous les chiens. L'âge, le dressage et le tempérament sont importants.",
    options: [
      { value: "0", label: "Presque jamais seul", score: 3, profile: { alone: "0" } },
      { value: "2", label: "Jusqu'à trois heures", score: 3, profile: { alone: "2" } },
      { value: "4", label: "Trois à cinq heures", score: 2, profile: { alone: "4" } },
      { value: "6", label: "Six heures ou plus", score: 0, profile: { alone: "6" }, note: "Les longues journées seul sont difficiles pour la plupart des chiens. Un promeneur de chiens, une garderie ou un voisin qui peut passer fait une réelle différence — cela vaut la peine de planifier avant, pas après." },
    ],
  },
  {
    id: "activity",
    eyebrow: "Vos journées",
    title: "Quel est votre niveau d'activité un jour normal ?",
    help: "Pensez à une semaine ordinaire, pas à votre meilleure semaine.",
    options: [
      { value: "1", label: "Assez calme", score: 2, profile: { activity: "1" } },
      { value: "2", label: "Raisonnablement actif", score: 3, profile: { activity: "2" } },
      { value: "3", label: "Assez actif", score: 3, profile: { activity: "3" } },
      { value: "4", label: "Toujours en mouvement", score: 3, profile: { activity: "4" } },
    ],
  },
  {
    id: "home",
    eyebrow: "Maison",
    title: "Où vivrait votre chien ?",
    help: "Un appartement n'est pas un obstacle au bonheur d'un chien. Ce qui compte davantage, ce sont les promenades à votre porte et vos horaires.",
    options: [
      { value: "apartment", label: "Un appartement", score: 3, profile: { home: "apartment" } },
      { value: "house", label: "Une maison, sans jardin", score: 3, profile: { home: "house" } },
      { value: "house-garden", label: "Une maison avec un jardin", score: 3, profile: { home: "house-garden" } },
      { value: "rural", label: "À la campagne", score: 3, profile: { home: "rural" } },
    ],
  },
  {
    id: "travel",
    eyebrow: "Loin de chez soi",
    title: "Voyagez-vous souvent ?",
    options: [
      { value: "rarely", label: "Rarement", score: 3 },
      { value: "sometimes", label: "Quelques fois par an", score: 2 },
      { value: "often", label: "Souvent, pour le travail ou autre", score: 1, note: "Voyager souvent n'est pas une raison pour ne pas avoir de chien — mais cela implique de décider tôt qui s'en occupe, ou quels voyages ils font avec vous." },
    ],
  },
  {
    id: "children",
    eyebrow: "À la maison",
    title: "Qui d'autre est à la maison ?",
    options: [
      { value: "none", label: "Seulement des adultes", score: 3, profile: { children: "none" } },
      { value: "older", label: "Des enfants plus âgés", score: 3, profile: { children: "older" } },
      { value: "young", label: "Des jeunes enfants", score: 2, profile: { children: "young" }, note: "Les jeunes enfants et les chiens peuvent être merveilleux ensemble, avec supervision et un endroit calme où le chien peut toujours se retirer." },
      { value: "visitors", label: "Des adultes, et beaucoup de visiteurs", score: 3, profile: { children: "visitors" } },
    ],
  },
  {
    id: "pets",
    eyebrow: "À la maison",
    title: "D'autres animaux dans la maison ?",
    options: [
      { value: "none", label: "Aucun autre animal", score: 3, profile: { pets: "none" } },
      { value: "dog", label: "Un autre chien", score: 3, profile: { pets: "dog" } },
      { value: "cat", label: "Un chat", score: 2, profile: { pets: "cat" } },
      { value: "small", label: "Des petits animaux", hint: "Lapins, oiseaux, rongeurs", score: 2, profile: { pets: "small" } },
    ],
  },
  {
    id: "allergies",
    eyebrow: "Santé à la maison",
    title: "Quelqu'un dans le foyer a-t-il des allergies ?",
    help: "Certaines races perdent moins leurs poils, ce qui est parfois plus facile à vivre pour certaines personnes. Aucun chien n'est complètement hypoallergénique, et les réactions varient d'une personne à l'autre.",
    options: [
      { value: "no", label: "Personne, à notre connaissance", score: 3, profile: { shedding: "fine" } },
      { value: "mild", label: "Quelqu'un est un peu sensible", score: 2, profile: { shedding: "prefer-low" } },
      { value: "yes", label: "Oui, quelqu'un réagit aux chiens", score: 1, profile: { shedding: "must-low" }, note: "Passez du temps avec le chien individuel avant de décider, et parlez-en à un médecin. Les races qui perdent moins leurs poils aident certaines personnes et pas d'autres." },
    ],
  },
  {
    id: "grooming",
    eyebrow: "S'en occuper",
    title: "Êtes-vous à l'aise avec un toilettage régulier ?",
    options: [
      { value: "minimal", label: "Je préférerais que ce soit simple", score: 2, profile: { grooming: "minimal" } },
      { value: "moderate", label: "Un brossage régulier me convient", score: 3, profile: { grooming: "moderate" } },
      { value: "high", label: "Je ne suis pas contre des visites chez le toiletteur", score: 3, profile: { grooming: "high" } },
    ],
  },
  {
    id: "costs",
    eyebrow: "Argent",
    title: "Pourriez-vous faire face à une facture vétérinaire imprévue ?",
    help: "C'est ce qui surprend la plupart des gens. L'assurance ou les économies fonctionnent toutes les deux.",
    options: [
      { value: "yes", label: "Oui, nous nous en sortirions", score: 3 },
      { value: "insurance", label: "Avec une assurance, oui", score: 3 },
      { value: "tight", label: "Ce serait juste", score: 1, note: "Mettre un peu de côté chaque mois, ou assurer tôt, enlève beaucoup d'inquiétude pour les années à venir." },
      { value: "no", label: "Pas pour le moment", score: 0, note: "Les soins vétérinaires peuvent être coûteux et arrivent rarement au bon moment. Quelques mois d'épargne d'abord peuvent tout changer." },
    ],
  },
  {
    id: "support",
    eyebrow: "Vos proches",
    title: "Qui pourrait aider si vous étiez malade ou absent ?",
    options: [
      { value: "household", label: "Quelqu'un d'autre à la maison", score: 3 },
      { value: "family", label: "Famille ou amis à proximité", score: 3 },
      { value: "paid", label: "Je paierais pour un gardien ou une garderie", score: 2 },
      { value: "noone", label: "Je ne suis pas encore sûr", score: 0, note: "Tout le monde tombe malade ou doit s'absenter un jour. Savoir maintenant qui interviendrait rend ces semaines beaucoup moins stressantes." },
    ],
  },
  {
    id: "commitment",
    eyebrow: "La longue vue",
    title: "Un chien peut vivre avec vous dix à quinze ans. Cela vous semble-t-il juste ?",
    help: "Pensez à où vous pourriez vivre, travailler et voyager dans une décennie.",
    options: [
      { value: "yes", label: "Oui, nous y avons réfléchi", score: 3 },
      { value: "mostly", label: "La plupart du temps — certaines choses sont incertaines", score: 2 },
      { value: "unsure", label: "Honnêtement, je ne suis pas sûr", score: 0, note: "C'est une chose très raisonnable à ressentir. Il n'y a aucune urgence — un chien sera toujours là quand l'image sera plus claire." },
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
    title: "Vous semblez bien préparé.",
    body: "D'après ce que vous nous avez dit, un chien s'intégrerait dans votre vie sans avoir à changer grand-chose. Vous avez pensé au temps, à l'argent et aux personnes qui aideraient quand la vie s'en mêle — c'est déjà la majeure partie du travail accompli.",
    encouragement: "Prêt à découvrir quels chiens pourraient convenir à votre vie ?",
  },
  "good-start": {
    id: "good-start",
    title: "Vous prenez un bon départ.",
    body: "La plupart des éléments sont déjà en place. Il y a une ou deux choses à régler avant qu'un chien n'arrive à la maison, et aucune d'entre elles n'est difficile — elles sont simplement plus faciles à organiser maintenant qu'au milieu d'une première semaine avec un nouveau chien.",
    encouragement: "Jetez un œil aux chiens qui pourraient vous convenir pendant que vous réglez le reste.",
  },
  "not-yet": {
    id: "not-yet",
    title: "Il y a quelques points à considérer d'abord.",
    body: "Peut-être pas encore tout à fait — et c'est tout à fait normal. Rien ici ne dit que vous ne devriez pas avoir de chien. Cela dit qu'un peu de préparation maintenant rendrait la décision beaucoup plus facile, et la première année beaucoup plus douce pour vous deux.",
    encouragement: "Vous êtes le bienvenu pour continuer à explorer. Rien n'est verrouillé.",
  },
};
