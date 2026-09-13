/** Travel & Adventures copy, in the DoggMatch voice. */

export const carSteps = [
  { no: "01", title: "Laissez-les explorer la voiture à l'arrêt", body: "Portes ouvertes, moteur éteint, personne n'est pressé. Laissez-les monter et descendre autant de fois qu'ils le souhaitent." },
  { no: "02", title: "Récompensez le calme", body: "Une friandise pour s'être calmé, pas pour s'agiter. Restez calme et un peu ennuyeux." },
  { no: "03", title: "Asseyez-vous dans la voiture sans rouler", body: "Deux minutes, attachés comme ils le seraient pour un vrai voyage. Puis sortez à nouveau, et quelque chose d'agréable." },
  { no: "04", title: "Un tout petit trajet", body: "Faites le tour du pâté de maisons. Terminez quelque part de bien — un coin d'herbe préféré plutôt que chez le vétérinaire." },
  { no: "05", title: "Ajoutez un peu de distance", body: "Seulement quand le court trajet est vraiment ennuyeux pour eux. Des semaines, pas des jours, pour un chien inquiet." },
  { no: "06", title: "Rendez la destination intéressante", body: "Si la plupart des trajets se terminent dans un endroit qu'ils aiment, la voiture devient une bonne chose en soi." },
];

export const carSafety = {
  safe: [
    "Attaché à l'arrière, dans un harnais homologué pour la sécurité en cas de collision, relié à la ceinture",
    "Ou dans une caisse de transport de taille appropriée qui ne glisse pas",
    "Ou dans le coffre avec une grille de protection adaptée au véhicule",
    "Assez de place pour s'allonger, s'asseoir et se retourner",
    "Flux d'air constant et température confortable",
  ],
  unsafe: [
    "En liberté dans la voiture",
    "Sur les genoux du conducteur, ou n'importe où où ils peuvent atteindre le conducteur",
    "Pouvant se déplacer dans l'espace pour les pieds ou à l'avant",
    "La tête dehors par la fenêtre ouverte à grande vitesse",
    "Dans une position d'où ils pourraient être projetés lors d'un freinage brusque",
  ],
  note: "Les exigences légales exactes varient d'un pays à l'autre. Vérifiez les règles là où vous vivez et là où vous allez.",
};

export const carSickness = {
  signs: ["Salivation excessive", "Léchage des babines et déglutition", "Gémissements", "Agitation ou déambulation", "Vomissements"],
  helps: [
    "Des trajets plus courts pendant un certain temps",
    "Augmenter progressivement plutôt que de forcer",
    "Éviter un repas copieux juste avant de partir",
    "Un environnement frais, calme et stable",
    "Des pauses régulières lors des longs trajets",
  ],
  note: "Nous ne suggérons pas de médicaments ni de dosages. Si cela continue, ou si c'est grave, votre vétérinaire peut vous aider.",
};

export const nervousDog = [
  "Ne commencez pas par le long trajet — commencez par la voiture à l'arrêt",
  "Gardez tout prévisible : même endroit, même harnais, même routine",
  "Récompensez le calme plutôt que d'essayer de les encourager",
  "Laissez-les choisir de monter quand vous le pouvez",
  "Arrêtez-vous avant qu'ils ne soient inquiets, pas après",
];

export const walkPrep = [
  "Laisse, et un harnais ou un collier qui s'ajuste correctement",
  "Plaque d'identification avec un numéro de téléphone qui fonctionne",
  "Sacs à déjections, et un endroit pour les mettre",
  "Eau par temps chaud ou lors de longs parcours",
  "Quelques friandises — le rappel vaut la peine d'être payé",
  "Quelque chose de réfléchissant ou de lumineux quand il fait noir",
  "Protection des pattes s'il y a du verglas, du sel ou s'il fait très chaud",
  "Un itinéraire que vous connaissez, ou une carte si ce n'est pas le cas",
];

export const hikingFactors = [
  { title: "Condition physique", body: "La distance se construit sur des semaines. Un chien qui marche une heure par jour n'est pas prêt pour une journée entière en montagne." },
  { title: "Âge", body: "Les chiots en croissance et les chiens âgés préfèrent tous deux des journées plus courtes et plus plates." },
  { title: "Météo", body: "La chaleur est ce qui surprend le plus les gens. Commencez tôt, ou n'allez pas loin." },
  { title: "Terrain", body: "La roche, les éboulis et l'herbe longue sont tous difficiles pour les pattes de différentes manières." },
  { title: "Eau", body: "Emportez-en plus que vous ne le pensez, pour vous deux. Ne comptez pas sur les ruisseaux." },
  { title: "Repos", body: "Ombre et une vraie pause toutes les heures environ, qu'ils la demandent ou non." },
  { title: "Rappel", body: "Soyez honnête à ce sujet. S'il n'est pas fiable, utilisez une longe." },
  { title: "Faune et bétail", body: "Tenez-les en laisse près des animaux, toujours. Les règles locales l'exigent souvent." },
];

export const weather = {
  hot: [
    "Marchez tôt ou tard, pas en milieu de journée",
    "Testez le trottoir avec le dos de votre main pendant sept secondes",
    "Ombre et eau à chaque arrêt",
    "Ralentissez bien avant qu'ils ne vous le demandent",
    "Surveillez une respiration haletante intense, des trébuchements ou un chien qui s'allonge et refuse de bouger",
  ],
  cold: [
    "Les chiens à poil court et les petits chiens perdent rapidement de la chaleur",
    "Le poil mouillé et le vent ensemble sont pires que le froid seul",
    "Rincez et séchez les pattes après les trottoirs salés",
    "Surveillez les boules de glace entre les coussinets",
    "Rentrez plus tôt que tard",
  ],
  rain: [
    "Soyez visible — une lumière ou un harnais réfléchissant",
    "Séchez-les correctement, surtout les oreilles et les aisselles",
    "Vérifiez les pattes pour le gravier ramassé dans les flaques d'eau",
    "Un chien mouillé se refroidit rapidement une fois que vous arrêtez de bouger",
  ],
  note: "Il n'y a pas de température qui convienne à tous les chiens. Un husky et un whippet seront en désaccord le même matin.",
};

export const pawChecks = [
  "Trottoir chaud, qui brûle plus vite que la plupart des gens ne s'y attendent",
  "Pierres tranchantes et verre brisé",
  "Glace, et boules de glace se formant entre les coussinets",
  "Sel de voirie, qui pique et ne doit pas être léché",
  "Graines d'herbe, qui s'infiltrent entre les doigts de pied",
  "Petites coupures, et tout ce qui les fait lécher une patte de manière répétée",
];

export const longJourney = [
  "Eau", "Nourriture", "Friandises", "Laisse", "Harnais", "Sacs à déjections", "Serviette",
  "Médicaments si nécessaire", "Informations sur la santé", "Contacts importants",
  "Informations d'urgence", "Une couverture familière", "Un jouet préféré", "Produits de nettoyage",
];

export const beforeYouLeave = [
  "Chien attaché en toute sécurité",
  "Eau",
  "Nourriture",
  "Laisse",
  "Détails d'identification et de puce électronique",
  "Téléphone chargé",
  "Informations sur la santé à portée de main",
  "Contact d'urgence écrit",
  "Pauses planifiées",
  "Destination vérifiée pour les chiens",
  "Météo vérifiée",
  "Chien confortable avant de partir",
];

export const holidayChecklist = [
  "Hébergement qui accueille vraiment les chiens",
  "Comment vous voyagez, et ce que cela signifie pour eux",
  "Leur nourriture habituelle, en quantité habituelle",
  "Eau et gamelle de voyage",
  "Dossiers de santé et informations de vaccination",
  "Tout médicament, avec un peu de réserve",
  "Détails de puce électronique et une plaque d'identification avec votre numéro de mobile",
  "Contacts d'urgence, y compris quelqu'un à la maison",
  "Literie familière et une chose préférée",
  "Le vétérinaire le plus proche à votre destination, recherché à l'avance",
  "Règles locales sur les laisses, les plages et les espaces publics",
];

export const publicTransport = [
  { title: "Train", body: "Les règles diffèrent selon l'opérateur et le pays. Certains transportent les chiens gratuitement, d'autres facturent, d'autres exigent un transporteur pour les petits chiens." },
  { title: "Bus", body: "Souvent à la discrétion du conducteur. Les heures calmes sont plus douces pour un chien qui apprend encore." },
  { title: "Métro", body: "Foule, escaliers mécaniques et bruit tout à la fois. Entraînez-vous sur le quai avant de vous entraîner pour le trajet." },
  { title: "Ferry", body: "Beaucoup ont des chenils, certains autorisent les chiens sur le pont, peu les autorisent dans les cabines. Réservez pour le chien, pas seulement pour vous." },
];

export const airTravel = [
  "Les règles des compagnies aériennes sont indépendantes des exigences d'entrée de tout pays",
  "La cabine, la soute et le fret ont chacun des conditions et des tailles de transporteurs différentes",
  "Certaines compagnies aériennes restreignent certaines races, ou ne font pas voler les chiens pendant les mois chauds ou froids",
  "Les exigences en matière de documentation varient selon la compagnie aérienne et la destination",
  "Réservez bien à l'avance — le nombre de chiens par vol est généralement limité",
  "Parlez à votre vétérinaire pour savoir si le vol convient à votre chien en particulier",
];

export const travelWithDifferentDogs = [
  { title: "Chiots", body: "Trajets courts, arrêts fréquents, et beaucoup de patience avec les accidents." },
  { title: "Adultes", body: "Généralement les voyageurs les plus faciles, une fois l'habitude prise." },
  { title: "Chiens seniors", body: "Plus d'arrêts, accès plus facile pour monter et descendre, et un endroit doux pour s'allonger." },
  { title: "Petits chiens", body: "Un transporteur est souvent requis dans les transports en commun, et peut être un nid douillet dans la voiture." },
  { title: "Grands chiens", body: "Pensez au coffre, à une grille, et à la façon dont ils montent sans se blesser une épaule." },
  { title: "Chiens nerveux", body: "Des semaines de trajets courts et calmes valent mieux qu'un long voyage qu'ils se souviendront mal." },
  { title: "Chiens très actifs", body: "Une bonne promenade avant de partir. Un chien fatigué est un bon passager." },
];
