import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

export const breedDeepDiveFr: Partial<Record<BreedId, BreedDeepDive>> = {
  "labrador-retriever": {
    originalPurpose:
      "Le Labrador descend des chiens d’eau de Terre-Neuve et a été peaufiné en Grande-Bretagne pour devenir un rapporteur qui va chercher avec bonheur sur terre comme dans l’eau glacée. D’où son amour de la baignade.",
    healthConsiderations:
      "Un bon éleveur vous montrera volontiers les résultats de hanches et de coudes, ainsi que les tests ADN pour l’atrophie progressive de la rétine (prcd-PRA) et le collapsus induit par l’exercice (EIC). Au quotidien, c’est surtout le poids qu’il faut surveiller : beaucoup de Labradors portent une variante génétique liée à un plus gros appétit, et peser les rations les garde en forme plus longtemps.",
    poorMatchFor: [
      "Vous rêvez d’un canapé sans poils de chien",
      "Une promenade quotidienne et un peu d’éducation auraient du mal à trouver leur place dans votre semaine",
      "Votre chien resterait seul une journée de travail entière, la plupart du temps",
    ],
    keyTradeoffs: [
      "Merveilleusement facile à éduquer parce que la nourriture compte énormément pour lui, et ce même appétit demande de surveiller sa ligne",
      "Il accueille presque tout le monde comme un ami : une compagnie adorable, mais pas vraiment un chien de garde",
    ],
  },
  "french-bulldog": {
    originalPurpose:
      "Le Bouledogue français descend de petits bouledogues anglais que des dentellières ont emmenés en France au XIXᵉ siècle. Les Parisiens ont craqué, et il est depuis un pur chien de compagnie.",
    healthConsiderations:
      "Ce joli visage plat peut gêner la respiration (BOAS) : demandez si les parents ont été évalués pour leurs voies respiratoires et choisissez un chiot aux narines bien ouvertes. Le dos, les plis de peau et les oreilles demandent un peu d’attention, et beaucoup de portées naissent par césarienne. Prévoyez une bonne assurance et gardez-le au frais les jours de chaleur.",
    poorMatchFor: [
      "Vous cherchez un compagnon de course, de randonnée ou de grosses chaleurs",
      "Une facture vétérinaire imprévue de quelques milliers d’euros serait vraiment difficile à absorber",
      "Votre logement devient chaud en été et reste difficile à rafraîchir",
    ],
    keyTradeoffs: [
      "Petit, calme et heureux avec de courtes balades, mais le garder en bonne santé peut coûter plus cher que presque toute autre race",
      "Le visage qui fait fondre tout le monde est aussi à l’origine de la plupart de ses soucis de santé",
    ],
  },
  "border-collie": {
    originalPurpose:
      "Le Border Collie vient des collines à la frontière entre l’Angleterre et l’Écosse, où il rassemblait les moutons sur de vastes pentes en suivant les signaux d’un berger resté au loin.",
    healthConsiderations:
      "Bonne nouvelle, c’est une race robuste. Demandez les résultats de hanches, un examen oculaire et les tests ADN pour l’anomalie de l’œil du colley (AOC), le syndrome des neutrophiles piégés (TNS) et la céroïde-lipofuscinose neuronale. L’épilepsie existe, et beaucoup sont sensibles aux bruits forts : un foyer calme les aide.",
    poorMatchFor: [
      "Vous souhaitez un chien de famille qui se contente de promenades, sans besoin d’occuper sa tête",
      "Vous habitez au bord d’une rue passante où voitures et vélos seraient trop tentants à poursuivre",
      "Les week-ends paresseux sur le canapé sont votre idée du bonheur",
    ],
    keyTradeoffs: [
      "Peut-être le chien le plus doué pour apprendre, et sans mission, il s’en invente une",
      "Sa sensibilité en fait un partenaire formidable, mais une maison bruyante et agitée peut l’épuiser",
    ],
  },
  "cavalier-king-charles-spaniel": {
    originalPurpose:
      "Le Cavalier a été recréé en Angleterre dans les années 1920 pour ressembler aux petits épagneuls des tableaux de la cour de Charles II, et il est depuis toujours un chien de compagnie dévoué.",
    healthConsiderations:
      "La maladie de la valve mitrale est très fréquente et commence souvent à l’âge adulte moyen : demandez à voir des certificats cardiaques récents pour les deux parents. La syringomyélie est aussi une vraie préoccupation, et des parents dépistés par IRM valent la peine d’attendre. Des tests ADN existent pour l’episodic falling et le dry eye/curly coat.",
    poorMatchFor: [
      "Votre Cavalier resterait seul la plus grande partie de chaque journée de semaine",
      "Des contrôles cardiaques réguliers, et peut-être un traitement à vie, ne rentrent pas dans le budget",
      "Vous aimeriez un chien qui vous prévient quand quelqu’un est à la porte",
    ],
    keyTradeoffs: [
      "L’un des caractères les plus doux et faciles qui soient, avec l’un des profils de santé les plus exigeants",
      "Il adore tous ceux qu’il rencontre : merveilleux à la maison, inutile comme gardien",
    ],
  },
  "german-shepherd": {
    originalPurpose:
      "La race a été fixée en Allemagne en 1899 comme chien de berger polyvalent, et elle a vite travaillé comme chien guide, chien de recherche et aux côtés de la police et de l’armée.",
    healthConsiderations:
      "Demandez les résultats de hanches et de coudes, et un test ADN pour la myélopathie dégénérative. La torsion d’estomac, l’insuffisance pancréatique exocrine et une peau ou une digestion sensibles peuvent apparaître. Mieux vaut choisir des lignées au dos droit et à la silhouette équilibrée plutôt qu’au dos très incliné.",
    poorMatchFor: [
      "C’est votre premier chien et vous n’avez pas encore de plan pour l’éducation et la socialisation",
      "Vous souhaitez un chien naturellement détendu avec les inconnus",
      "Beaucoup de poils et un chien puissant en laisse finiraient par vous épuiser",
    ],
    keyTradeoffs: [
      "Profondément fidèle et protecteur, et une socialisation régulière garde ce côté protecteur à sa juste mesure",
      "Un bonheur à éduquer, et vraiment malheureux sans tâches régulières",
    ],
  },
  dachshund: {
    originalPurpose:
      "Le Teckel a été sélectionné en Allemagne pour suivre le blaireau (Dachs) sous terre : un petit chasseur intrépide, doté d’une voix assez puissante pour s’entendre depuis le terrier.",
    healthConsiderations:
      "Les problèmes de dos (hernie discale, IVDD) touchent un bon nombre de Teckels et peuvent être graves. Le plus beau cadeau à lui faire : le garder mince, le porter dans les escaliers et le décourager doucement de sauter. Les lignées à poil dur ont souvent moins de soucis de dos. Certaines variétés disposent de tests ADN pour une maladie oculaire (cord1-PRA) et la maladie de Lafora.",
    poorMatchFor: [
      "Vous habitez plusieurs étages sans ascenseur",
      "Il vous faut un chien discret dans un immeuble aux murs fins",
      "Les plus petits de la maison adoreraient le soulever et le promener dans leurs bras",
    ],
    keyTradeoffs: [
      "Assez petit pour vous suivre partout, avec la voix et l’aplomb d’un chien bien plus grand",
      "Malin et indépendant, donc le rappel et la propreté demandent souvent un peu plus de patience",
    ],
  },
  beagle: {
    originalPurpose:
      "Le Beagle est un chien de meute britannique, sélectionné pour suivre la piste du lièvre pendant que les chasseurs suivaient à pied. Son nez mène encore la danse.",
    healthConsiderations:
      "Bonne nouvelle : le Beagle est généralement robuste et vit longtemps. L’épilepsie, l’hypothyroïdie et des problèmes de dos peuvent survenir, et il existe un test ADN pour le syndrome de Musladin-Lueke. Il prend facilement du poids, et ses jolies longues oreilles demandent un contrôle régulier.",
    poorMatchFor: [
      "Vous rêvez d’un chien fiable sans laisse partout",
      "Vos voisins seraient gênés par quelques hurlements pendant votre absence",
      "Votre jardin n’est pas solidement clôturé",
    ],
    keyTradeoffs: [
      "Aimable avec les humains comme avec les chiens, mais le nez l’emporte souvent sur ce que vous venez de demander",
      "Assez compact pour la plupart des foyers, avec l’endurance d’un chien courant au travail",
    ],
  },
  "cocker-spaniel": {
    originalPurpose:
      "Le Cocker est un chien leveur britannique, sélectionné pour faire sortir la bécasse (woodcock) des fourrés épais et la rapporter. D’où son nom.",
    healthConsiderations:
      "Les oreilles sont le soin du quotidien : les sécher et les vérifier souvent lui évite bien des désagréments. Demandez les résultats de hanches et les tests ADN pour l’atrophie progressive de la rétine (prcd-PRA) et la néphropathie familiale, une maladie rénale. Lignées de travail et d’exposition diffèrent beaucoup en énergie : demandez laquelle vous rencontrez.",
    poorMatchFor: [
      "Le brossage et la toilette réguliers passeraient vite au second plan",
      "Votre Cocker resterait seul pendant de longues journées de travail",
      "Vous voulez un chien tranquille mais avez craqué pour un chiot de lignée de travail",
    ],
    keyTradeoffs: [
      "Joyeux et avide de vous faire plaisir, et les lignées de travail sont bien plus actives que ce doux visage ne le laisse croire",
      "Un pelage magnifique qui a besoin d’un toiletteur pour le rester",
    ],
  },
  chihuahua: {
    originalPurpose:
      "Le Chihuahua porte le nom de l’État mexicain et descendrait des petits chiens de compagnie du Mexique ancien. Il est sélectionné comme chien de compagnie depuis la fin du XIXᵉ siècle.",
    healthConsiderations:
      "Ce sont les dents qui demandent le plus de soin : un brossage quotidien et un détartrage de temps en temps font une vraie différence. Des problèmes de rotule et de valve cardiaque peuvent survenir, et les tout petits chiots peuvent faire des hypoglycémies. Bonne nouvelle : 15 ans et plus, c’est tout à fait courant.",
    poorMatchFor: [
      "Il y a des tout-petits ou de jeunes enfants à la maison",
      "Vous souhaitez un chien calme et silencieux quand vous recevez",
      "Vos hivers sont froids et vous préférez ne pas habiller votre chien pour sortir",
    ],
    keyTradeoffs: [
      "Tout petit en place et en budget, et assez fragile pour demander des gestes délicats",
      "Totalement dévoué à son humain, souvent méfiant ou bavard avec tous les autres",
    ],
  },
  "bernese-mountain-dog": {
    originalPurpose:
      "Le Bouvier bernois était un chien de ferme du canton de Berne, en Suisse : il tirait les charrettes de lait, menait les vaches et veillait avec bienveillance sur la ferme.",
    healthConsiderations:
      "Le plus dur, quand on aime un Bernois, c’est que sa vie peut être courte, et les cancers, en particulier le sarcome histiocytaire, sont malheureusement fréquents. Demandez les résultats de hanches et de coudes et un test ADN pour la myélopathie dégénérative, et apprenez à reconnaître les signes d’une torsion d’estomac.",
    poorMatchFor: [
      "Vous vivez sous un climat chaud, ou au dernier étage sans ascenseur",
      "Sept à dix ans ensemble vous sembleraient trop courts",
      "Les frais vétérinaires et d’alimentation d’un grand chien pèseraient trop sur votre budget",
    ],
    keyTradeoffs: [
      "Un géant doux et patient, avec moins de temps ensemble qu’on ne le voudrait",
      "Calme à l’âge adulte après une longue adolescence bondissante, et des poils partout toute l’année",
    ],
  },
};
