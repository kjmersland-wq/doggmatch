import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Textes de race en français, rattachés aux mêmes identifiants stables. */
export const breedContentFr: Record<BreedId, BreedContent> = {
  "labrador-retriever": {
    displayName: "Labrador Retriever",
    summary:
      "Un chien de travail au cœur ouvert, motivé par la nourriture, devenu le compagnon familial par excellence — et qui a toujours besoin d'une vraie occupation pour s'épanouir.",
    strengths: [
      "Adore la compagnie des gens",
      "Apprend vite, surtout pour une friandise",
      "Merveilleuse compagnie au quotidien",
      "Toujours partant pour une activité",
      "S'intègre généralement bien à la vie de famille",
    ],
    considerations: [
      "Perd ses poils toute l'année — mieux vaut un bon aspirateur",
      "A besoin d'une vraie promenade chaque jour, pas seulement le week-end",
      "Grand et fort en laisse tant qu'on ne lui a pas appris autrement",
      "S'ennuie vite sans occupation, et un labrador qui s'ennuie fait des bêtises",
    ],
  },
  "golden-retriever": {
    displayName: "Golden Retriever",
    summary:
      "Doux, docile et d'une patience infinie. Un golden demande de la compagnie plus qu'autre chose.",
    strengths: [
      "Merveilleusement doux avec les enfants",
      "Adore apprendre quand il y a une récompense à la clé",
      "Sociable avec les gens et les autres chiens",
      "Plus heureux dehors par temps frais",
    ],
    considerations: [
      "Mue abondamment deux fois par an — attendez-vous à des moutons de poils",
      "A besoin d'un vrai brossage la plupart des semaines, sinon le poil s'emmêle",
      "Souffre par temps chaud, prévoir des sorties matinales en été",
      "Déteste vraiment être laissé seul longtemps",
    ],
  },
  poodle: {
    displayName: "Caniche (Grand)",
    summary:
      "Un chien athlétique et étonnamment intelligent sous un poil élégant. S'épanouit dans la résolution de problèmes et un partenariat étroit avec son maître.",
    strengths: [
      "Perd très peu ses poils",
      "Apprend remarquablement vite",
      "S'adapte bien à l'appartement, à condition de sortir suffisamment",
      "Joueur sans être chaotique",
    ],
    considerations: [
      "Un passage chez le toiletteur toutes les 6 à 8 semaines, et ce n'est pas donné",
      "A besoin de jeux d'intelligence et d'éducation, pas seulement de kilomètres en laisse",
      "Peut devenir réellement anxieux s'il est laissé seul trop souvent",
      "Les frais de toilettage s'accumulent au fil des années",
    ],
  },
  "french-bulldog": {
    displayName: "Bouledogue Français",
    summary:
      "Un compagnon citadin compact, comique et profondément attaché, avec des besoins d'exercice modestes mais de réelles considérations de santé.",
    strengths: [
      "Très heureux en appartement",
      "N'a pas besoin de beaucoup d'exercice",
      "Affectueux, et toujours près de vous",
      "Plus calme que la plupart des petits chiens",
    ],
    considerations: [
      "Peut avoir du mal à respirer par forte chaleur ou après un effort",
      "Les frais vétérinaires ont tendance à être plus élevés sur la durée",
      "Supporte mal d'être laissé seul toute une journée de travail",
      "Il vaut la peine d'insister sur un éleveur qui teste sérieusement la santé de ses reproducteurs",
    ],
  },
  "border-collie": {
    displayName: "Border Collie",
    summary:
      "Le chien le plus facile à éduquer que la plupart des gens ne devraient pas posséder. Brillant, intense, et malheureux sans travail quotidien.",
    strengths: [
      "Apprend presque tout ce qu'on lui enseigne",
      "Brillant en sport canin, en pistage et en jeux de réflexion",
      "Profondément attaché à son maître",
      "Épanoui auprès de personnes vraiment actives",
    ],
    considerations: [
      "A besoin d'un exercice quotidien sérieux et d'une stimulation mentale tout aussi importante",
      "S'épanouit rarement en appartement ou dans une routine tranquille",
      "Peut essayer de rassembler enfants, cyclistes ou le chat",
      "Un collie sous-stimulé tourne vite ce cerveau vers les bêtises",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier King Charles Spaniel",
    summary:
      "Un petit compagnon au caractère doux qui veut être là où vous êtes. Une compagnie apaisante plutôt qu'un projet.",
    strengths: [
      "Doux avec les enfants et les personnes âgées",
      "Parfaitement épanoui dans un petit logement",
      "S'entend bien avec les autres chiens et les autres animaux",
      "N'a pas besoin de longues promenades",
    ],
    considerations: [
      "Certaines maladies cardiaques et neurologiques héréditaires bien connues dans la race",
      "Rarement heureux d'être laissé seul longtemps — un vrai pot de colle",
      "Oreilles et poil nécessitent une surveillance et un entretien réguliers",
      "Toujours demander à voir les tests de santé des deux parents",
    ],
  },
  greyhound: {
    displayName: "Lévrier",
    summary:
      "Un sprinteur qui dort la majeure partie de la journée. Calme, propre et étonnamment bien adapté aux foyers paisibles.",
    strengths: [
      "Merveilleusement calme à l'intérieur",
      "Poil facile à entretenir, et aboie rarement",
      "Quelques courtes séances de course suffisent amplement",
      "Souvent proposé à l'adoption via des associations de sauvetage",
    ],
    considerations: [
      "Une forte tendance à poursuivre tout ce qui est petit et rapide",
      "Les sorties en liberté nécessitent un espace correctement et solidement clôturé",
      "Craint beaucoup le froid, un manteau et une literie douillette ne sont pas négociables",
      "Une peau fine signifie que coupures et éraflures arrivent plus facilement qu'on ne le pense",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba Inu",
    summary:
      "Indépendant, méticuleux et autonome. Un shiba vous respecte plutôt qu'il ne vous obéit.",
    strengths: [
      "Supporte la solitude mieux que la plupart des chiens",
      "Propre, presque à la manière d'un chat",
      "Petit mais robuste",
      "Vit souvent longtemps",
    ],
    considerations: [
      "Indépendant de nature — le rappel demande un travail patient et sérieux",
      "Perd énormément de poils deux fois par an, partout dans la maison",
      "Souvent réservé voire distant avec les autres chiens",
      "Pas le chien le plus indulgent pour un débutant en éducation canine",
    ],
  },
  "german-shepherd": {
    displayName: "Berger Allemand",
    summary:
      "Sérieux, vigilant et profondément loyal. Un berger allemand veut un travail, une routine et quelqu'un pour qui il vaut la peine de travailler.",
    strengths: [
      "Apprend vite et retient bien",
      "Dévoué à ses maîtres",
      "Merveilleux une fois correctement socialisé",
      "Épanoui avec une tâche quotidienne",
    ],
    considerations: [
      "Perd ses poils toute l'année, puis abondamment deux fois par an en plus",
      "A besoin d'une heure ou plus de vrai travail chaque jour, pas seulement d'une balade",
      "Peut se montrer méfiant envers les inconnus sans une socialisation précoce et délibérée",
      "Il vaut la peine de demander à tout éleveur les tests de hanches et de coudes",
    ],
  },
  dachshund: {
    displayName: "Teckel",
    summary:
      "Petit, drôle et plus courageux que ses pattes ne le laissent penser. Une forte personnalité qui aime être près de vous.",
    strengths: [
      "S'adapte volontiers à un petit logement",
      "N'a pas besoin de longues promenades",
      "Vif et plein de caractère",
      "Bonne compagnie, toujours dans vos pattes",
    ],
    considerations: [
      "Le dos est réellement fragile — pas d'escaliers ni de sauts depuis le canapé",
      "Aime le son de sa propre voix, souvent à la sonnette",
      "Peut se montrer têtu à l'éducation — il faut savoir négocier",
      "Prend facilement du poids, ce qui pèse lourd sur ce long dos",
    ],
  },
  beagle: {
    displayName: "Beagle",
    summary:
      "Un nez sur quatre pattes. Joyeux, sociable et quasiment impossible à détourner d'une bonne odeur.",
    strengths: [
      "Réellement amical avec tout le monde",
      "Robuste et facile avec les enfants",
      "Adore les autres chiens",
      "Poil court, simple à entretenir",
    ],
    considerations: [
      "Le rappel est un vrai travail — le nez gagne généralement le débat",
      "Hurle et gémit quand il s'ennuie ou reste seul trop longtemps",
      "Mangera absolument tout ce qui est à sa portée",
      "A besoin d'un jardin réellement sécurisé, pas juste d'une petite clôture",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker Spaniel Anglais",
    summary:
      "Regard tendre, toujours affairé et d'une bonne volonté sans limite. Un cocker est le plus heureux quand il fait quelque chose avec vous.",
    strengths: [
      "Affectueux et désireux de plaire",
      "Adore le pistage et les jeux",
      "S'accommode aussi bien de la ville que de la campagne",
      "Bonne taille pour la plupart des logements",
    ],
    considerations: [
      "Les oreilles doivent être vérifiées et nettoyées souvent, sinon les infections suivent",
      "Le poil s'emmêle vite sans un brossage régulier et soigné",
      "Devient agité et nerveux sans occupation",
      "Supporte mal les longues heures de solitude",
    ],
  },
  chihuahua: {
    displayName: "Chihuahua",
    summary:
      "Minuscule, audacieux et complètement dévoué à une ou deux personnes. Petit chien, opinions grandeur nature.",
    strengths: [
      "Parfait pour un appartement",
      "A besoin de très peu d'exercice",
      "Vit longtemps, souvent bien au-delà de dix ans",
      "Se déplace facilement en voyage",
    ],
    considerations: [
      "Réellement fragile — pas un chien pour une manipulation brusque",
      "A tendance à aboyer à tout ce qui est inhabituel, livreurs y compris",
      "Craint beaucoup le froid et a besoin d'un manteau l'hiver",
      "A besoin d'une socialisation réelle et délibérée pour rester détendu et ne pas devenir craintif",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Schnauzer Nain",
    summary:
      "Barbu, vif et discrètement sûr de lui. Un cerveau de terrier dans un poil soigné qui perd peu ses poils.",
    strengths: [
      "Perd très peu ses poils",
      "Vif et rapide à apprendre",
      "S'adapte à l'appartement comme à la maison",
      "Robuste pour un petit chien",
    ],
    considerations: [
      "Une tonte toutes les 6 à 8 semaines, dont le coût s'accumule",
      "A tendance à aboyer à la porte, au courrier et au vent",
      "Pas toujours à l'aise avec les petits animaux de la maison",
      "Enclin à prendre du poids, donc les portions comptent",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Bouvier Bernois",
    summary:
      "Immense, doux et calme. Un bouvier bernois est une présence apaisante pour une famille disposant d'espace et d'une certaine tolérance aux poils.",
    strengths: [
      "Merveilleusement patient avec les enfants",
      "Calme à l'intérieur pour un si grand chien",
      "Adore le temps froid",
      "Doux et posé de nature",
    ],
    considerations: [
      "Une espérance de vie plus courte que la plupart des races — un déchirement honnête à peser",
      "Beaucoup de poils, partout dans la maison, la majeure partie de l'année",
      "Coûte sensiblement plus cher à nourrir, assurer et soigner",
      "Souffre beaucoup dès que le temps se réchauffe",
    ],
  },
  "australian-shepherd": {
    displayName: "Berger Australien",
    summary:
      "Vif, athlétique et toujours aux aguets. Un aussie a besoin d'un but plus que d'un jardin.",
    strengths: [
      "Brillant dans tout ce qu'on lui enseigne",
      "Adore le sport canin, les tours et le pistage",
      "Très attaché à son maître",
      "Beau et robuste en extérieur",
    ],
    considerations: [
      "A besoin de plusieurs heures d'activité réelle, chaque jour sans exception",
      "Aura tendance à rassembler enfants, vélos et joggeurs s'il est sous-exercé",
      "S'ennuie vite, et le fait savoir bruyamment",
      "Rarement adapté à la vie en appartement",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack Russell Terrier",
    summary:
      "Petit, rapide et absolument convaincu de lui-même. Beaucoup de plaisir si vous aimez un chien avec du moteur.",
    strengths: [
      "Robuste, en bonne santé et vivant longtemps",
      "S'adapte à un petit logement",
      "Joueur sans relâche",
      "Supporte la solitude mieux que la plupart des chiens",
    ],
    considerations: [
      "Poursuit tout ce qui est petit et rapide, écureuils compris",
      "Creuse, et le fait sérieusement — votre pelouse n'est pas à l'abri",
      "Peut se montrer bagarreur avec d'autres chiens, surtout inconnus",
      "A besoin de bien plus d'exercice que sa taille ne le laisse penser",
    ],
  },
  "siberian-husky": {
    displayName: "Husky Sibérien",
    summary:
      "Magnifique, amical et bâti pour courir toute la journée. Un husky fait rarement ce qu'on lui demande simplement parce qu'on le lui a demandé.",
    strengths: [
      "Sociable avec les gens et les chiens",
      "Fait pour le temps froid et les longues distances",
      "Aboie rarement",
      "Propre, avec peu d'odeur de chien",
    ],
    considerations: [
      "S'échappe des jardins avec une vraie détermination et ne revient pas forcément",
      "Le rappel est un projet de toute une vie, pas une affaire de week-end",
      "Perd énormément ses poils deux fois par an — partout, pendant des semaines",
      "Souffre réellement sous des climats chauds ou pendant un été caniculaire",
    ],
  },
  boxer: {
    displayName: "Boxer",
    summary:
      "Un clown qui ne grandit jamais vraiment. Exubérant, chaleureux et toujours au cœur de l'action.",
    strengths: [
      "Merveilleux avec les enfants",
      "Joueur jusqu'à un âge avancé",
      "Poil court, facile à entretenir",
      "Apprend bien avec une éducation bienveillante et positive",
    ],
    considerations: [
      "Bondissant et fort — sauter sur les gens demande une éducation précoce",
      "Surchauffe vite en raison de son museau court",
      "Certains problèmes de santé héréditaires sérieux dans la race",
      "Bave notoirement — gardez un chiffon à portée de main",
    ],
  },
  rottweiler: {
    displayName: "Rottweiler",
    summary:
      "Puissant, équilibré et discrètement confiant. Un rottweiler a besoin d'un maître qui sait ce qu'il fait.",
    strengths: [
      "Posé et sûr de lui quand il est bien élevé",
      "Apprend vite et travaille volontiers",
      "Loyal et protecteur envers sa famille",
      "Poil facile à entretenir",
    ],
    considerations: [
      "Très fort — l'éducation à la laisse doit être solide dès le début",
      "A besoin d'une socialisation soigneuse et délibérée dès le premier jour",
      "L'assurance et l'alimentation coûtent sensiblement plus cher",
      "Certains lieux et assureurs restreignent la race — à vérifier au préalable",
    ],
  },
  whippet: {
    displayName: "Whippet",
    summary:
      "Un chien de canapé dans un corps de sprinteur. Calme, affectueux et remarquablement facile à vivre.",
    strengths: [
      "Calme et peu exigeant à la maison",
      "Presque aucun entretien du poil",
      "Deux courts sprints par jour suffisent",
      "Doux et discret",
    ],
    considerations: [
      "Poursuit tout ce qui court, chats et joggeurs compris",
      "A besoin d'un espace solidement clôturé pour toute sortie en liberté",
      "Craint le froid — un manteau n'est pas optionnel en hiver",
      "Une peau fine se déchire plus facilement qu'on ne l'imaginerait",
    ],
  },
  "shih-tzu": {
    displayName: "Shih Tzu",
    summary:
      "Conçu pour être un chien de compagnie, et très doué pour cela. Heureux sur les genoux, heureux dans un petit appartement.",
    strengths: [
      "Idéal pour la vie citadine",
      "Amical avec presque tout le monde",
      "Perd très peu ses poils",
      "N'a pas besoin de longues promenades",
    ],
    considerations: [
      "Un brossage quotidien, ou une coupe courte pour simplifier l'entretien",
      "Ce museau court rend la chaleur réellement dangereuse",
      "Les yeux nécessitent une surveillance et un nettoyage quotidiens",
      "La propreté peut demander une vraie patience",
    ],
  },
  pug: {
    displayName: "Carlin",
    summary:
      "Comique, affectueux et toujours dans vos pas. Un carlin demande de la compagnie bien plus que de l'exercice.",
    strengths: [
      "Adore tout le monde, y compris les autres chiens",
      "S'épanouit dans le plus petit logement",
      "Facile à vivre et amusant",
      "A besoin de peu d'exercice",
    ],
    considerations: [
      "Les problèmes respiratoires sont fréquents dans la race",
      "La chaleur peut devenir dangereuse étonnamment vite",
      "Prend très facilement du poids — les portions comptent beaucoup",
      "Rides et yeux nécessitent un soin quotidien approprié",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon Frisé",
    summary:
      "Un petit nuage blanc au tempérament joyeux. Sociable, vif et le plus heureux entouré de monde.",
    strengths: [
      "Perd très peu ses poils",
      "Amical avec les enfants et les autres chiens",
      "S'adapte aux appartements et aux petits jardins",
      "Apprend vite et adore les compliments",
    ],
    considerations: [
      "Une visite chez le toiletteur toutes les 4 à 6 semaines, et ce n'est pas facultatif",
      "Supporte vraiment mal d'être laissé seul longtemps",
      "Peau et oreilles nécessitent une attention régulière",
      "La propreté demande une vraie constance pour s'installer",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire Bull Terrier",
    summary:
      "Musclé, tendre et réputé pour son affection envers les enfants. Un staffie aime les siens sans réserve.",
    strengths: [
      "Merveilleux chien de famille quand il est bien élevé",
      "Poil court, entretien très facile",
      "Robuste et joueur",
      "Désireux de plaire",
    ],
    considerations: [
      "Peut se montrer difficile avec d'autres chiens sans une gestion précoce attentive",
      "Étonnamment fort pour sa taille en laisse",
      "Mâchouille jouets et paniers avec un vrai enthousiasme",
      "Injustement restreint ou mal jugé dans certains endroits — à savoir avant de s'engager",
    ],
  },
  vizsla: {
    displayName: "Vizsla",
    summary:
      "Le chien pot de colle. Athlétique, sensible et jamais à plus d'un mètre de vous.",
    strengths: [
      "Beau, silencieux et propre",
      "Brillant compagnon de course ou de randonnée",
      "Très affectueux",
      "Presque aucun entretien du poil",
    ],
    considerations: [
      "Souffre beaucoup s'il est laissé seul toute une journée de travail",
      "A besoin d'une à deux heures d'exercice vraiment soutenu chaque jour",
      "Sensible à une voix haussée — éducation bienveillante uniquement",
      "Ressent vivement le froid lors des promenades d'hiver",
    ],
  },
  samoyed: {
    displayName: "Samoyède",
    summary:
      "Le chien souriant des neiges. Sociable, bavard et magnifique — et une quantité impressionnante de poils.",
    strengths: [
      "Réellement amical avec tout le monde",
      "Adore le temps froid et la neige",
      "Joueur et attaché à sa famille",
      "Rarement agressif",
    ],
    considerations: [
      "Perd une quantité de poils franchement étonnante",
      "A besoin d'un brossage plusieurs fois par semaine pour rester présentable",
      "Parle, hurle et exprime son avis régulièrement",
      "Surchauffe facilement dès l'arrivée de l'été",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshire Terrier",
    summary:
      "Minuscule, vif et plein de tempérament de terrier. Un yorkie est plus courageux que quiconque ne l'imagine.",
    strengths: [
      "Perd à peine ses poils",
      "Taille parfaite pour un appartement",
      "Vif et rapide à apprendre",
      "Vit souvent longtemps",
    ],
    considerations: [
      "Le poil nécessite un soin quotidien, ou une coupe courte pour simplifier",
      "A tendance à aboyer à tout, livreurs y compris",
      "Fragile au niveau des pattes — facile à blesser sans le vouloir",
      "La propreté peut être plus lente à s'installer qu'on ne le pense",
    ],
  },
};
