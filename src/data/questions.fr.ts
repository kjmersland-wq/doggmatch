import type { QuizQuestion } from "@/lib/matching/types";

/** Les questions en français. Les identifiants et valeurs restent identiques. */
export const questionsFr: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Vos journées",
    title: "Quel est votre niveau d'activité un jour ordinaire ?",
    help: "Pensez à une semaine tout à fait normale, pas à votre meilleure.",
    options: [
      { value: "1", label: "Plutôt tranquille", hint: "Une petite balade dans le quartier, presque tous les jours" },
      { value: "2", label: "Raisonnablement actif", hint: "Une promenade de 45 minutes au parc, même un mardi pluvieux" },
      { value: "3", label: "Assez actif", hint: "Une heure ou plus la plupart des jours, et de vraies sorties le week-end" },
      { value: "4", label: "Toujours en mouvement", hint: "Une vraie randonnée de deux heures, quel que soit le temps" },
    ],
  },
  {
    id: "home",
    eyebrow: "Chez vous",
    title: "Où votre chien va-t-il vivre ?",
    options: [
      { value: "apartment", label: "En appartement", hint: "Escalier commun ou ascenseur" },
      { value: "house", label: "Une maison, sans jardin" },
      { value: "house-garden", label: "Une maison avec jardin" },
      { value: "rural", label: "À la campagne" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Votre journée",
    title: "Combien de temps votre chien serait-il généralement seul ?",
    help: "Comptez la journée entière de façon réaliste — trajets et jours de bureau compris, pas seulement les heures passées à votre bureau.",
    options: [
      { value: "0", label: "Presque jamais seul", hint: "Il y a presque toujours quelqu'un à la maison" },
      { value: "2", label: "Jusqu'à trois heures", hint: "Un court trajet en plus du télétravail, ou une matinée dehors" },
      { value: "4", label: "Trois à cinq heures", hint: "Une journée de bureau classique avec un aller-retour à midi" },
      { value: "6", label: "Six heures ou plus", hint: "Trajet complet et journée de bureau complète, porte à porte" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Votre expérience",
    title: "Avez-vous déjà eu un chien ?",
    help: "Vous n'avez encore jamais eu de chien ? Pas d'inquiétude. Nous tenons compte de la marge d'éducation, de la patience et de la tolérance à la solitude, pour que vous ne soyez pas dépassé.",
    options: [
      { value: "first", label: "Ce serait mon premier" },
      { value: "some", label: "Un peu", hint: "J'ai grandi avec des chiens, ou j'ai aidé à en garder un" },
      { value: "experienced", label: "Beaucoup", hint: "J'ai élevé et dressé des chiens moi-même" },
    ],
  },
  {
    id: "size",
    eyebrow: "Ce que vous aimeriez",
    title: "Avez-vous une taille en tête ?",
    optional: true,
    options: [
      { value: "small", label: "Quelque chose de petit" },
      { value: "medium", label: "Une taille intermédiaire" },
      { value: "large", label: "Un grand chien" },
      { value: "any", label: "Je suis ouvert à tout" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Ce que vous aimeriez",
    title: "Quel tempérament vous plairait le plus ?",
    options: [
      { value: "calm", label: "Calme et facile à vivre" },
      { value: "affectionate", label: "Affectueux et proche de vous" },
      { value: "playful", label: "Joueur et plein de vie" },
      { value: "independent", label: "Heureux dans sa propre compagnie" },
    ],
  },
  {
    id: "children",
    eyebrow: "À la maison",
    title: "Qui d'autre vit à la maison ?",
    options: [
      { value: "none", label: "Seulement des adultes" },
      { value: "older", label: "Des enfants plus grands" },
      { value: "young", label: "De jeunes enfants" },
      { value: "visitors", label: "Des adultes, et beaucoup de visites" },
    ],
  },
  {
    id: "pets",
    eyebrow: "À la maison",
    title: "Y a-t-il d'autres animaux à la maison ?",
    optional: true,
    options: [
      { value: "none", label: "Aucun autre animal" },
      { value: "dog", label: "Un autre chien" },
      { value: "cat", label: "Un chat" },
      { value: "small", label: "De petits animaux", hint: "Lapins, oiseaux, rongeurs" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Pelage et allergies",
    title: "Que pensez-vous des poils de chien dans la maison ?",
    help: "Certaines races perdent moins leurs poils, ce que les personnes allergiques trouvent parfois plus facile à vivre. Cela dit, aucun chien n'est totalement hypoallergénique.",
    options: [
      { value: "fine", label: "Les poils ne me dérangent pas" },
      { value: "prefer-low", label: "Je préférerais en avoir moins" },
      { value: "must-low", label: "Quelqu'un ici réagit aux chiens", hint: "Uniquement des races qui perdent peu leurs poils, s'il vous plaît" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Leur entretien",
    title: "Combien de toilettage êtes-vous prêt à assumer ?",
    options: [
      { value: "minimal", label: "Le moins possible" },
      { value: "moderate", label: "Un brossage régulier me convient" },
      { value: "high", label: "Les visites chez le toiletteur ne me dérangent pas" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Leur entretien",
    title: "Quelle force de chien pouvez-vous gérer confortablement ?",
    help: "La force en laisse surprend beaucoup de gens.",
    options: [
      { value: "light", label: "Rien de grand ou de fort", hint: "Un chien puissant serait trop pour moi" },
      { value: "moderate", label: "Un chien de taille moyenne me convient" },
      { value: "strong", label: "Je peux gérer un grand chien puissant" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "En toute honnêteté",
    title: "Pourriez-vous vivre heureux avec un chien très énergique ?",
    help: "Soyez honnête ici — nous vous prendrons au mot.",
    options: [
      { value: "no", label: "Non, il me faudrait un chien plus calme" },
      { value: "maybe", label: "Dans une certaine mesure" },
      { value: "yes", label: "Oui, j'adorerais un chien actif" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Compagnie",
    title: "Qu'espérez-vous qu'un chien apporte à votre vie ?",
    options: [
      { value: "calm-company", label: "Une compagnie calme et stable" },
      { value: "motivation", label: "Une raison de sortir" },
      { value: "active", label: "Quelqu'un qui suive mon rythme" },
      { value: "family", label: "Un chien pour toute la famille" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Pelage et allergies",
    title: "Quelqu'un chez vous a-t-il une allergie aux chiens ?",
    help: "Certaines races perdent moins leurs poils et gardent leur pelage, ce que certaines personnes trouvent plus facile. Aucun chien n'est totalement hypoallergénique, et la tolérance varie d'une personne à l'autre.",
    options: [
      { value: "none", label: "Non, personne ne réagit aux chiens" },
      { value: "mild", label: "Réactions légères", hint: "Un peu le nez qui coule près de certains chiens" },
      { value: "significant", label: "Une allergie importante", hint: "Nous voudrions d'abord un vrai avis médical" },
      { value: "unsure", label: "Nous ne sommes pas encore sûrs" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Compagnie et bien-être",
    title: "À quel point espérez-vous un compagnon calme et proche à vos côtés ?",
    help: "Un chien apporte de la compagnie, pas des soins. Nous regardons le calme, la sociabilité et à quel point une race est généralement proche des humains.",
    options: [
      { value: "no", label: "Ce n'est pas ce que je recherche" },
      { value: "some", label: "Ce serait agréable" },
      { value: "important", label: "Oui, c'est important pour moi" },
      { value: "very", label: "C'est ce que je souhaite le plus" },
    ],
  },
];
