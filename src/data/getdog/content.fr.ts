/**
 * Everything the Get A Dog journey says out loud, in the DoggMatch voice.
 * Kept out of the components so it can be translated later without touching
 * a single piece of layout.
 */

export interface JourneyStep {
  id: string;
  no: string;
  title: string;
  body: string;
  to: string;
}

export const journey: JourneyStep[] = [
  { id: "ready", no: "01", title: "Un chien est-il fait pour moi ?", body: "Quelques questions honnêtes sur vos journées, votre foyer et les personnes qui vous entourent.", to: "/get-a-dog/ready" },
  { id: "find", no: "02", title: "Trouver mon chien", body: "Découvrez quelles races correspondent à votre style de vie — et pourquoi.", to: "/find-my-dog" },
  { id: "choose", no: "03", title: "Choisir avec soin", body: "Chiot ou adulte, éleveur ou refuge, et quoi demander avant de dire oui.", to: "/get-a-dog/choose" },
  { id: "costs", no: "04", title: "Comprendre l'engagement", body: "Ce que coûte réellement un chien, avant son arrivée et chaque mois après.", to: "/get-a-dog/costs" },
  { id: "prepare", no: "05", title: "Se préparer", body: "Les achats, le vétérinaire, l'assurance — et l'aménagement de votre foyer.", to: "/get-a-dog/prepare" },
  { id: "welcome", no: "06", title: "Bienvenue à la maison", body: "Le premier jour et la première semaine, en douceur.", to: "/get-a-dog/welcome-home" },
  { id: "mydog", no: "07", title: "Mon Chien", body: "Toute sa vie en un seul endroit — nourriture, éducation, santé, promenades et papiers.", to: "/my-dog" },
];

/* ------------------------------------------------------------ Puppy / adult */

export const puppyVsAdult = {
  title: "Un chiot, ou un chien déjà adulte ?",
  body: "L'un n'est pas mieux que l'autre. Ce sont deux premières années très différentes, et le bon choix dépend bien plus de votre vie que du chien.",
  puppy: {
    title: "Un chiot",
    lead: "Vous pouvez façonner presque tout — et vous le payez en sommeil.",
    good: [
      "Vous voyez chaque étape de ce qu'il devient",
      "La socialisation et les habitudes commencent avec vous",
      "Généralement plus facile à introduire à d'autres animaux et enfants",
      "Une longue vie devant vous ensemble",
    ],
    hard: [
      "Nuits interrompues, apprentissage de la propreté et mastication, pendant des mois",
      "A besoin de compagnie la plupart de la journée au début",
      "La personnalité reste une supposition, même avec un éleveur attentif",
      "Vaccinations, stérilisation et frais vétérinaires précoces tombent la première année",
    ],
  },
  adult: {
    title: "Un chien adulte",
    lead: "Vous savez beaucoup plus à quoi vous attendre.",
    good: [
      "La taille, le poil et le tempérament sont déjà clairs",
      "Beaucoup sont propres et peuvent rester seuls",
      "Souvent plus calmes dès le premier jour",
      "Les refuges fournissent généralement une évaluation honnête du chien",
    ],
    hard: [
      "Ils arrivent avec une histoire que vous ne connaissez peut-être que partiellement",
      "Certaines habitudes demandent de la patience pour être changées",
      "Moins d'années ensemble, surtout avec un chien âgé",
      "L'adaptation peut prendre des semaines, pas des jours",
    ],
  },
  closing:
    "Si vos journées sont déjà bien remplies, un chien adulte qui sait déjà être un chien est souvent le choix le plus doux — pour vous et pour lui.",
};

/* -------------------------------------------------------------- The source */

export const sources = {
  title: "D'où viendra votre chien ?",
  body: "Les deux voies peuvent vous apporter un chien merveilleux. Les deux méritent quelques questions attentives. Aucune n'est automatiquement la bonne réponse.",
  breeder: {
    title: "Un éleveur responsable",
    good: [
      "Vous rencontrez la mère et voyez comment les chiots sont élevés",
      "Les tests de santé pertinents pour la race ont généralement été effectués",
      "Vous avez une idée assez claire de la taille adulte, du poil et du tempérament",
      "Un bon éleveur reste en contact pendant toute la vie du chien",
    ],
    check: [
      "Les chiots sont-ils élevés dans un foyer, au milieu de la vie domestique normale ?",
      "Quels tests de santé ont été effectués, et pouvez-vous en voir les résultats ?",
      "Combien de portées ont-ils, et de combien de races ?",
      "Reprendront-ils le chien si vos circonstances changent un jour ?",
    ],
  },
  rescue: {
    title: "Adoption ou refuge",
    good: [
      "Les chiens adultes ont une personnalité que vous pouvez réellement rencontrer",
      "Les bons refuges évaluent et décrivent leurs chiens honnêtement",
      "Souvent déjà vaccinés, pucés et stérilisés",
      "Le soutien après l'adoption fait généralement partie du package",
    ],
    check: [
      "Que savent-ils de l'histoire du chien et de son foyer précédent ?",
      "Comment le chien se comporte-t-il avec les enfants, les autres chiens et les chats ?",
      "Quelles informations de santé accompagnent-ils ?",
      "Quelle aide est disponible si les premières semaines sont difficiles ?",
    ],
  },
};

export const breederQuestions = [
  "Puis-je rencontrer la mère ?",
  "Puis-je voir où les chiots sont élevés ?",
  "Quels tests de santé ont été effectués pour cette race ?",
  "Quels soins vétérinaires les chiots ont-ils reçus jusqu'à présent ?",
  "Comment ont-ils été socialisés — qu'ont-ils rencontré et entendu ?",
  "Quel soutien est offert après que j'ai ramené le chiot à la maison ?",
  "Quelle documentation vais-je recevoir ?",
  "Puis-je prendre quelques jours pour décider ?",
];

export const breederRedFlags = [
  "On vous presse de payer ou de décider immédiatement",
  "Vous ne pouvez pas voir où vivent les chiots, ni rencontrer la mère",
  "La documentation de santé ou de vaccination est manquante ou vague",
  "Les questions directes reçoivent des réponses évasives",
  "Un nombre inhabituellement élevé de portées non apparentées, ou de nombreuses races à la fois",
  "Un chiot semble malade, ou est extrêmement craintif face à des choses ordinaires",
  "L'histoire change entre les conversations",
];

export const adoptionConsiderations = [
  { title: "Historique", body: "Certains chiens arrivent avec une histoire complète, d'autres avec presque rien. Un bon refuge vous dira honnêtement de quel cas il s'agit." },
  { title: "Tempérament", body: "Demandez ce qu'ils ont réellement vu : avec des inconnus, en laisse, en voiture, laissé seul pendant une heure." },
  { title: "Santé", body: "Demandez les notes du vétérinaire, pas un résumé. Les conditions chroniques sont gérables quand on les connaît." },
  { title: "Comportement", body: "La plupart des 'problèmes' sont un chien qui n'a pas été éduqué, ou qui a peur. Demandez quelle aide est disponible." },
  { title: "Votre foyer", body: "Escaliers, enfants, chats, une rue animée — dites tout cela à voix haute. Une bonne correspondance est plus importante qu'une adoption rapide." },
  { title: "Après", body: "Demandez quel soutien existe la deuxième semaine, lorsque l'excitation initiale s'est estompée et que le vrai chien apparaît." },
];

/* -------------------------------------------------------------- The costs */

export interface CostGroup {
  id: string;
  title: string;
  body: string;
  items: { label: string; note: string }[];
}

export const costGroups: CostGroup[] = [
  {
    id: "before",
    title: "Avant l'arrivée de votre chien",
    body: "La dépense unique. La plupart se fait en une seule quinzaine, c'est pourquoi cela surprend les gens.",
    items: [
      { label: "Frais d'achat ou d'adoption", note: "Varie énormément selon la race, le pays et la provenance" },
      { label: "Panier et caisse si vous en utilisez une", note: "Achetez la taille dans laquelle il grandira" },
      { label: "Gamelles, collier, harnais, laisse, médaille d'identification", note: "Les exigences légales d'identification diffèrent selon les pays" },
      { label: "Kit de toilettage", note: "Brosse, peigne, coupe-ongles, brosse à dents" },
      { label: "Jouets et friandises à mâcher", note: "Moins que vous ne le pensez, remplacés plus souvent que vous ne le pensez" },
      { label: "Première visite vétérinaire", note: "Contrôle, vaccinations, puce électronique si pas déjà faite" },
    ],
  },
  {
    id: "monthly",
    title: "Chaque mois",
    body: "Le coût régulier. Il vaut la peine de l'écrire honnêtement avant de vous engager, pas après.",
    items: [
      { label: "Nourriture", note: "La plus grosse ligne mensuelle, et elle évolue avec la taille" },
      { label: "Friandises et jouets à mâcher", note: "L'éducation se fait avec ça la première année" },
      { label: "Assurance", note: "Moins cher plus il est jeune et en bonne santé" },
      { label: "Toilettage", note: "De rien à une visite chez le toiletteur toutes les six semaines" },
      { label: "Soins de routine", note: "Vermifugation, traitement anti-puces et tiques, coupe des griffes" },
      { label: "Aide pendant que vous travaillez", note: "Un promeneur ou une garderie, si vos journées sont longues" },
    ],
  },
  {
    id: "unexpected",
    title: "Quelque chose pour lequel être prêt",
    body: "La partie que personne ne budgétise. Un peu mis de côté chaque mois rend ces imprévus supportables.",
    items: [
      { label: "Soins vétérinaires imprévus", note: "Les blessures et les maladies arrivent rarement à point nommé" },
      { label: "Soins dentaires", note: "Très fréquents à l'âge mûr, et pas bon marché" },
      { label: "Soins d'urgence et hors heures", note: "Coûte plus cher qu'un rendez-vous planifié" },
      { label: "Remplacement d'objets", note: "Paniers, laisses et un ou deux objets que vous aimiez" },
    ],
  },
];

/* ---------------------------------------------------------------- Your home */

export const homeScenarios = [
  { id: "apartment", title: "Un appartement", body: "Parfaitement gérable. Pensez aux escaliers ou à l'ascenseur, aux voisins, et où vous irez pour la première promenade de la journée." },
  { id: "house", title: "Une maison", body: "L'espace intérieur importe moins que vous ne le pensez. Ce qui compte, c'est la promenade à moins de dix minutes de votre porte." },
  { id: "garden", title: "Un jardin", body: "Agréable à avoir, et pas un substitut à une promenade. Vérifiez la clôture, le portail et tout ce qui pousse et qui ne devrait pas être mangé." },
  { id: "city", title: "Ville", body: "Trottoirs animés, circulation, ascenseurs et cafés. Les chiens de ville doivent être à l'aise avec le bruit plus que tout." },
  { id: "suburb", title: "Banlieue", body: "Généralement le plus facile de tous : rues calmes, espaces verts à proximité, et un endroit pour se défouler le week-end." },
  { id: "rural", title: "Campagne", body: "Espace et liberté, avec du bétail, de la faune et une plus longue route vers le vétérinaire à considérer." },
];

export const homeFactors = [
  "Escaliers, et si votre chien pourrait les gérer aux deux extrémités de sa vie",
  "Un ascenseur, et s'il s'y sentira à l'aise",
  "Espace extérieur, et à quel point il est vraiment sécurisé",
  "Zones vertes à une promenade facile",
  "Un endroit sûr pour laisser un chien courir",
  "Cafés, magasins et transports qui acceptent les chiens",
];

export const lifeScenarios = [
  { id: "quiet", title: "Calme à la maison", body: "Routines stables et promenades courtes et régulières. Un chien plus calme sera plus heureux ici qu'un athlète." },
  { id: "outdoors", title: "Actif en extérieur", body: "Week-ends sur les sentiers, peu importe la météo. Un chien en forme qui peut augmenter la distance avec vous." },
  { id: "city", title: "Vie citadine", body: "Trottoirs, transports, foule. La confiance dans le bruit compte plus que la taille." },
  { id: "family", title: "Vie de famille", body: "Bruit, visiteurs, trajets scolaires. La tolérance et un endroit pour se retirer sont ce qui compte." },
  { id: "home-office", title: "Travail à domicile", body: "Merveilleux pour un chien — à condition qu'il apprenne aussi à être seul parfois." },
  { id: "retired", title: "Retraité ou flexible", body: "Temps et routine, ce qui est la majeure partie de ce qu'un chien désire. Pensez à la force en laisse." },
  { id: "travel", title: "Voyageur fréquent", body: "Entièrement possible avec un plan : un gardien régulier, ou un chien qui voyage bien avec vous." },
];

/* ------------------------------------------------------------- Preparation */

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

export const arrivalChecklist: ChecklistItem[] = [
  { id: "food", label: "Nourriture", note: "Commencez avec ce qu'il mange déjà, puis changez lentement" },
  { id: "bowls", label: "Gamelles", note: "Une pour la nourriture, une toujours pleine d'eau" },
  { id: "collar", label: "Collier" },
  { id: "tag", label: "Médaille d'identification", note: "Votre numéro de téléphone, au minimum" },
  { id: "harness", label: "Harnais" },
  { id: "lead", label: "Laisse" },
  { id: "bed", label: "Panier", note: "Un endroit calme, à l'écart du passage de la maison" },
  { id: "toys", label: "Quelques jouets" },
  { id: "grooming", label: "Matériel de toilettage" },
  { id: "toothbrush", label: "Brosse à dents et dentifrice pour chien" },
  { id: "waste", label: "Sacs à déjections" },
  { id: "cleaning", label: "Produits de nettoyage", note: "Un nettoyant enzymatique, pour les accidents qui arriveront" },
  { id: "travel", label: "Équipement de voyage sécurisé", note: "Pour le trajet retour ainsi que pour après" },
  { id: "vet", label: "Rendez-vous vétérinaire réservé" },
  { id: "insurance", label: "Assurance souscrite" },
  { id: "microchip", label: "Détails de la puce électronique", note: "Enregistrée à votre nom, avec votre numéro de téléphone actuel" },
  { id: "emergency", label: "Contacts d'urgence notés", note: "Votre vétérinaire, et la clinique d'urgence la plus proche" },
];

export const firstDay = [
  { title: "Restez calme", body: "Pas de fête de bienvenue. Juste les personnes qui habitent ici, parlant normalement." },
  { title: "Montrez-lui son panier", body: "Emmenez-le à l'endroit qui est le sien, et laissez-le y revenir à son rythme." },
  { title: "Eau, puis nourriture", body: "De l'eau tout de suite. De la nourriture quand il s'est un peu calmé, et la même nourriture qu'avant." },
  { title: "Laissez-le explorer", body: "Une pièce à la fois, sans laisse, avec vous à proximité sans être envahissant." },
  { title: "Gardez le monde petit", body: "La maison et le jardin suffisent pour une journée. Tout le reste peut attendre." },
  { title: "Commencez à observer", body: "Quand il a besoin de sortir, où il choisit de dormir, ce qui le rend mal à l'aise. C'est le début de le connaître." },
];

export const firstWeek = [
  { title: "Une routine douce", body: "Mêmes heures pour la nourriture, les promenades et le coucher. La prévisibilité est ce qui calme le plus rapidement un chien." },
  { title: "Son nom", body: "Dites-le, et récompensez-le quand il vous regarde. Rien de plus compliqué que ça pour l'instant." },
  { title: "Les premières petites leçons", body: "Venir quand on l'appelle, et être à l'aise seul pendant quelques minutes à la fois." },
  { title: "Routine propreté", body: "Dehors après avoir dormi, mangé et joué. Félicitez le moment où cela arrive, ne grondez jamais les accidents." },
  { title: "Sommeil", body: "Les nouveaux chiens dorment énormément. Laissez-les. Les chiots ont besoin de la majeure partie de la journée." },
  { title: "Rencontrer le monde", body: "À un rythme adapté à son âge, et conformément aux conseils de votre vétérinaire sur les vaccinations." },
  { title: "Être ensemble", body: "S'asseoir tranquillement dans la même pièce fait plus pour le lien que n'importe quel exercice." },
  { title: "Observer", body: "Appétit, habitudes de toilettes, énergie. Vous saurez ce qui est normal pour lui plus vite que vous ne le pensez." },
];
