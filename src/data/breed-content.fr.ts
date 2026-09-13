import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Portraits de races en français, sur les mêmes identifiants stables. */
export const breedContentFr: Record<BreedId, BreedContent> = {
  "labrador-retriever": {
    displayName: "Labrador Retriever",
    summary:
      "Un chien de travail au cœur ouvert, motivé par la nourriture, devenu le compagnon familial par défaut pour de bonnes raisons — et qui a toujours besoin d'une vraie occupation pour être heureux.",
    strengths: [
      "Adore être entouré de monde",
      "Apprend vite, surtout pour une friandise",
      "Une compagnie merveilleuse, au quotidien",
      "Toujours partant pour une activité",
      "S'installe généralement bien dans la vie de famille",
    ],
    considerations: [
      "Perd ses poils toute l'année — un bon aspirateur s'impose",
      "A besoin d'une vraie promenade chaque jour, pas seulement le week-end",
      "Grand et fort en laisse tant qu'on ne lui a pas appris autrement",
      "S'ennuie vite sans occupation, et un Labrador qui s'ennuie fait des bêtises",
    ],
  },
  "golden-retriever": {
    displayName: "Golden Retriever",
    summary:
      "Doux, docile et infiniment patient. Un Golden réclame de la compagnie plus que tout autre chose.",
    strengths: [
      "Merveilleusement doux avec les enfants",
      "Adore apprendre dès qu'il y a une récompense à la clé",
      "Amical avec les gens et les autres chiens",
      "Le plus heureux dehors par temps frais",
    ],
    considerations: [
      "Mue abondamment deux fois par an — attendez-vous à des touffes de poils partout",
      "A besoin d'un vrai brossage la plupart des semaines, sinon le pelage s'emmêle",
      "Souffre par temps chaud, mieux vaut sortir tôt en été",
      "Déteste vraiment être laissé seul longtemps",
    ],
  },
  poodle: {
    displayName: "Caniche (grand modèle)",
    summary:
      "Un chien athlétique et étonnamment intelligent sous un pelage élégant. Il s'épanouit en résolvant des problèmes et en travaillant en étroite complicité.",
    strengths: [
      "Perd très peu ses poils",
      "Comprend les choses remarquablement vite",
      "S'adapte bien à un appartement, à condition de sortir suffisamment",
      "Joueur sans être chaotique",
    ],
    considerations: [
      "Un passage chez le toiletteur toutes les 6 à 8 semaines, et ce n'est pas donné",
      "A besoin de jeux d'intelligence et d'éducation, pas seulement de kilomètres en laisse",
      "Peut devenir réellement anxieux s'il est laissé seul trop souvent",
      "Les frais de toilettage s'accumulent régulièrement au fil des années",
    ],
  },
  "french-bulldog": {
    displayName: "Bouledogue Français",
    summary:
      "Un compagnon urbain compact, comique et profondément attaché, aux besoins d'exercice modestes mais avec de réelles considérations de santé.",
    strengths: [
      "Très heureux en appartement",
      "N'a pas besoin de beaucoup d'exercice",
      "Affectueux, et toujours près de vous",
      "Plus calme que la plupart des petits chiens",
    ],
    considerations: [
      "Peut avoir du mal à respirer par forte chaleur ou après un vrai effort",
      "Les frais vétérinaires ont tendance à être plus élevés sur toute une vie",
      "Ne supporte pas bien d'être laissé seul une journée de travail complète",
      "Mieux vaut insister pour un éleveur qui pratique de vrais tests de santé",
    ],
  },
  "border-collie": {
    displayName: "Border Collie",
    summary:
      "Le chien le plus facile à éduquer que la plupart des gens ne devraient pas posséder. Brillant, intense, et malheureux sans travail quotidien.",
    strengths: [
      "Apprend presque tout ce qu'on lui enseigne",
      "Excellent en sport, en pistage et en jeux d'intelligence",
      "Profondément attaché à sa personne",
      "Au meilleur de lui-même avec des gens vraiment actifs",
    ],
    considerations: [
      "A besoin d'un exercice quotidien sérieux, et de quoi réfléchir aussi",
      "S'épanouit rarement en appartement ou dans une routine tranquille",
      "Peut chercher à rassembler les enfants, les cyclistes ou le chat",
      "Un Collie sous-stimulé tourne vite ce cerveau vers les bêtises",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier King Charles Spaniel",
    summary:
      "Un petit compagnon au caractère doux qui veut être partout où vous êtes. Une compagnie calme plutôt qu'un projet.",
    strengths: [
      "Doux avec les enfants et les personnes âgées",
      "Parfaitement heureux dans un petit logement",
      "S'entend bien avec les autres chiens et animaux",
      "N'a pas besoin de longues promenades",
    ],
    considerations: [
      "Certaines maladies cardiaques et neurologiques héréditaires bien connues",
      "Rarement heureux laissé seul longtemps — un vrai pot de colle",
      "Oreilles et pelage demandent une vérification et un entretien réguliers",
      "Demandez toujours à voir les tests de santé des deux parents",
    ],
  },
  greyhound: {
    displayName: "Lévrier Anglais (Greyhound)",
    summary:
      "Un sprinteur qui dort la majeure partie de la journée. Calme, propre et étonnamment adapté aux foyers paisibles.",
    strengths: [
      "Merveilleusement calme à l'intérieur",
      "Pelage facile, et aboie rarement",
      "Deux courtes séances de course suffisent amplement",
      "Souvent à la recherche d'un foyer via une association",
    ],
    considerations: [
      "Une forte envie de poursuivre tout ce qui est petit et rapide",
      "Le temps sans laisse nécessite un espace vraiment et solidement clôturé",
      "Craint fortement le froid, un manteau et une literie douce ne sont pas négociables",
      "Peau fine, coupures et éraflures arrivent plus facilement qu'on ne le pense",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba Inu",
    summary:
      "Indépendant, méticuleux et autonome. Un Shiba vous respecte plutôt qu'il ne vous obéit.",
    strengths: [
      "Supporte la solitude mieux que la plupart",
      "Propre, presque comme un chat",
      "Petit mais robuste",
      "Vit souvent longtemps",
    ],
    considerations: [
      "Indépendant de nature — le rappel demande un vrai travail patient",
      "Perd énormément de poils deux fois par an, partout",
      "Souvent réservé ou distant avec les autres chiens",
      "Pas le premier chien le plus indulgent si vous débutez en éducation",
    ],
  },
  "german-shepherd": {
    displayName: "Berger Allemand",
    summary:
      "Sérieux, vigilant et profondément loyal. Un Berger Allemand veut un travail, une routine et quelqu'un pour qui ça vaille la peine de travailler.",
    strengths: [
      "Apprend vite et retient",
      "Dévoué à ses propres personnes",
      "Merveilleux une fois correctement socialisé",
      "Au meilleur de lui-même avec un travail quotidien",
    ],
    considerations: [
      "Perd ses poils toute l'année, puis abondamment deux fois par an en plus",
      "A besoin d'une heure ou plus de vrai travail chaque jour, pas juste une balade",
      "Peut se méfier des inconnus sans socialisation précoce et délibérée",
      "Vaut la peine de demander à tout éleveur les tests de hanches et de coudes",
    ],
  },
  "dachshund": {
    displayName: "Teckel",
    summary:
      "Petit, drôle et plus courageux que ses pattes ne le laissent penser. Une grande personnalité qui aime être près de vous.",
    strengths: [
      "S'installe volontiers dans un petit logement",
      "N'a pas besoin de longues promenades",
      "Vif et plein de caractère",
      "Bonne compagnie, toujours dans vos pattes",
    ],
    considerations: [
      "Le dos est réellement fragile — pas d'escaliers ni de sauts du canapé",
      "Aime le son de sa propre voix, souvent à la sonnette",
      "Peut être têtu à l'éducation — attendez-vous à négocier",
      "Prend du poids facilement, ce qui pèse sur ce long dos",
    ],
  },
  "beagle": {
    displayName: "Beagle",
    summary:
      "Un nez sur quatre pattes. Joyeux, sociable et presque impossible à détourner d'une bonne odeur.",
    strengths: [
      "Vraiment amical avec tout le monde",
      "Robuste et facile avec les enfants",
      "Adore les autres chiens",
      "Pelage court, simple à entretenir",
    ],
    considerations: [
      "Le rappel est un vrai travail — le nez gagne généralement le débat",
      "Hurle et gémit quand il s'ennuie ou est laissé seul trop longtemps",
      "Mangera absolument tout ce qui est à sa portée",
      "A besoin d'un jardin vraiment sécurisé, pas juste d'une clôture basse",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker Spaniel Anglais",
    summary:
      "Le regard doux, actif et infiniment volontaire. Un Cocker est le plus heureux quand il fait quelque chose avec vous.",
    strengths: [
      "Affectueux et désireux de plaire",
      "Adore le pistage et les jeux",
      "S'adapte à la vie urbaine ou à la campagne",
      "Bonne taille pour la plupart des logements",
    ],
    considerations: [
      "Les oreilles doivent être vérifiées et nettoyées souvent, sinon les infections suivent",
      "Le pelage s'emmêle vite sans un brossage régulier et soigné",
      "Devient nerveux et agité sans occupation",
      "Ne supporte pas bien de longues heures seul",
    ],
  },
  "chihuahua": {
    displayName: "Chihuahua",
    summary:
      "Minuscule, audacieux et complètement dévoué à une ou deux personnes. Petit chien, opinions grand format.",
    strengths: [
      "Parfait pour un appartement",
      "Très peu d'exercice nécessaire",
      "Vit longtemps, souvent bien au-delà de dix ans",
      "Voyage facilement",
    ],
    considerations: [
      "Réellement fragile — pas un chien pour une manipulation brusque",
      "A tendance à aboyer à tout ce qui lui est inconnu, livreurs compris",
      "Craint fortement le froid et a besoin d'un manteau en hiver",
      "A besoin d'une socialisation réelle et délibérée pour rester détendu et pas hargneux",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Schnauzer Nain",
    summary:
      "Barbu, vif et discrètement sûr de lui. Un cerveau de terrier dans un pelage soigné qui perd peu ses poils.",
    strengths: [
      "Perd très peu ses poils",
      "Vif d'esprit et apprend vite",
      "Convient à un appartement ou une maison",
      "Robuste pour un petit chien",
    ],
    considerations: [
      "Une tonte toutes les 6 à 8 semaines, ce qui finit par coûter cher",
      "A tendance à aboyer à la porte, au courrier et au vent",
      "Pas toujours enthousiaste envers les petits animaux de la maison",
      "Enclin à prendre du poids, donc les portions comptent",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Bouvier Bernois",
    summary:
      "Immense, doux et calme. Un Bouvier Bernois est une compagnie tendre pour une famille avec de l'espace et de l'indulgence pour les poils.",
    strengths: [
      "Merveilleusement patient avec les enfants",
      "Calme à l'intérieur pour un si grand chien",
      "Adore le froid",
      "Bon naturel et posé",
    ],
    considerations: [
      "Une espérance de vie plus courte que la plupart des races — un vrai chagrin à peser",
      "Beaucoup de poils, partout dans la maison, la majeure partie de l'année",
      "Coûte sensiblement plus cher à nourrir, assurer et soigner",
      "Souffre nettement dès que le temps se réchauffe",
    ],
  },
  "australian-shepherd": {
    displayName: "Berger Australien",
    summary:
      "Vif, athlétique et toujours en alerte. Un Aussie a besoin d'un but bien plus que d'un jardin.",
    strengths: [
      "Excellent dans tout ce qu'on lui enseigne",
      "Adore le sport, les tours et le pistage",
      "Très attaché à sa personne",
      "Beau et robuste en extérieur",
    ],
    considerations: [
      "A besoin de plusieurs heures d'activité réelle, chaque jour",
      "Cherchera à rassembler enfants, vélos et joggeurs s'il manque d'exercice",
      "S'ennuie vite, et le fait savoir bruyamment",
      "Rarement adapté à la vie en appartement",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack Russell Terrier",
    summary:
      "Petit, rapide et absolument sûr de lui. Un régal si vous aimez un chien avec un moteur.",
    strengths: [
      "Robuste, en bonne santé et vit longtemps",
      "S'installe dans un petit logement",
      "Infiniment joueur",
      "Supporte la solitude mieux que la plupart",
    ],
    considerations: [
      "Poursuit tout ce qui est petit et rapide, écureuils compris",
      "Creuse, et sérieusement — votre pelouse n'est pas à l'abri",
      "Peut se montrer bagarreur avec d'autres chiens, surtout inconnus",
      "A besoin de bien plus d'exercice que sa taille ne le suggère",
    ],
  },
  "siberian-husky": {
    displayName: "Husky Sibérien",
    summary:
      "Magnifique, amical et bâti pour courir toute la journée. Un Husky fait rarement ce que vous voulez juste parce que vous l'avez demandé.",
    strengths: [
      "Sociable avec les gens et les chiens",
      "Fait pour le froid et les longues distances",
      "Aboie rarement",
      "Propre, avec peu d'odeur de chien",
    ],
    considerations: [
      "S'échappe des jardins avec une vraie détermination et ne revient pas forcément",
      "Le rappel est un projet de toute une vie, pas une affaire d'un week-end",
      "Perd son pelage deux fois par an — partout, pendant des semaines",
      "Souffre réellement sous les climats chauds ou un été caniculaire",
    ],
  },
  "boxer": {
    displayName: "Boxer",
    summary:
      "Un clown qui ne grandit jamais vraiment. Exubérant, chaleureux et toujours au cœur de l'action.",
    strengths: [
      "Merveilleux avec les enfants",
      "Joueur jusque tard dans sa vie",
      "Pelage court, facile à entretenir",
      "Apprend bien avec une éducation douce et positive",
    ],
    considerations: [
      "Bondissant et puissant — sauter sur les gens demande une éducation précoce",
      "Surchauffe vite à cause de ce nez court",
      "Certaines maladies héréditaires sérieuses dans la race",
      "Un vrai baveur confirmé — gardez un chiffon à portée de main",
    ],
  },
  "rottweiler": {
    displayName: "Rottweiler",
    summary:
      "Puissant, posé et discrètement confiant. Un Rottweiler a besoin d'un propriétaire qui sait ce qu'il fait.",
    strengths: [
      "Stable et sûr de lui quand bien élevé",
      "Apprend vite et travaille volontiers",
      "Loyal et protecteur envers la famille",
      "Pelage facile",
    ],
    considerations: [
      "Très puissant — l'éducation à la laisse doit être solide dès le départ",
      "A besoin d'une socialisation soignée et délibérée dès le premier jour",
      "Assurance et alimentation coûtent sensiblement plus cher",
      "Certains lieux et assureurs restreignent la race — à vérifier au préalable",
    ],
  },
  "whippet": {
    displayName: "Whippet",
    summary:
      "Un chien de canapé au corps de sprinteur. Calme, affectueux et remarquablement facile à vivre.",
    strengths: [
      "Calme et peu exigeant à la maison",
      "Presque aucun toilettage",
      "Deux courts sprints par jour suffisent",
      "Doux et discret",
    ],
    considerations: [
      "Poursuit tout ce qui court, chats et joggeurs compris",
      "A besoin d'un espace solidement clôturé pour tout temps sans laisse",
      "Craint le froid — un manteau n'est pas facultatif en hiver",
      "La peau fine se déchire plus facilement qu'on ne le pense",
    ],
  },
  "shih-tzu": {
    displayName: "Shih Tzu",
    summary:
      "Fait pour être un compagnon, et il excelle dans ce rôle. Heureux sur les genoux, heureux dans un petit appartement.",
    strengths: [
      "Idéal pour la vie en ville",
      "Amical avec presque tout le monde",
      "Perd très peu ses poils",
      "N'a pas besoin de longues promenades",
    ],
    considerations: [
      "Brossage quotidien, ou une coupe courte pour simplifier l'entretien",
      "Ce nez court rend la chaleur réellement dangereuse",
      "Les yeux ont besoin d'une surveillance et d'un nettoyage quotidiens",
      "La propreté peut demander une vraie patience",
    ],
  },
  "pug": {
    displayName: "Carlin",
    summary:
      "Comique, affectueux et toujours dans votre ombre. Un Carlin réclame de la compagnie bien plus que de l'exercice.",
    strengths: [
      "Aime tout le monde, chiens compris",
      "À l'aise dans le plus petit des logements",
      "Facile à vivre et drôle",
      "Peu d'exercice nécessaire",
    ],
    considerations: [
      "Les problèmes respiratoires sont fréquents dans la race",
      "La chaleur peut devenir dangereuse étonnamment vite",
      "Prend du poids très facilement — les portions comptent beaucoup",
      "Plis et yeux demandent un vrai soin quotidien",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon à Poil Frisé",
    summary:
      "Un petit nuage blanc au tempérament joyeux. Sociable, vif et le plus heureux entouré de monde.",
    strengths: [
      "Perd très peu ses poils",
      "Amical avec les enfants et les autres chiens",
      "Convient aux appartements et petits jardins",
      "Apprend vite et adore les compliments",
    ],
    considerations: [
      "Un passage chez le toiletteur toutes les 4 à 6 semaines, et ce n'est pas facultatif",
      "Supporte vraiment mal d'être laissé seul longtemps",
      "Peau et oreilles ont besoin d'une attention régulière",
      "La propreté demande une vraie constance pour s'installer",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire Bull Terrier",
    summary:
      "Musclé, tendre et réputé pour son affection envers les enfants. Un Staffie aime les siens sans réserve.",
    strengths: [
      "Merveilleux chien de famille quand bien élevé",
      "Pelage court, entretien très facile",
      "Robuste et joueur",
      "Désireux de plaire",
    ],
    considerations: [
      "Peut être difficile avec les autres chiens sans une gestion précoce et attentive",
      "Étonnamment puissant pour sa taille en laisse",
      "Mâche jouets en peluche et coussins avec un vrai enthousiasme",
      "Injustement restreint ou mal jugé dans certains endroits — à savoir avant de vous engager",
    ],
  },
  "vizsla": {
    displayName: "Vizsla",
    summary:
      "Le chien pot de colle par excellence. Athlétique, sensible et jamais à plus d'un mètre de vous.",
    strengths: [
      "Beau, discret et propre",
      "Excellent compagnon de course ou de randonnée",
      "Très affectueux",
      "Presque aucun toilettage",
    ],
    considerations: [
      "Souffre beaucoup s'il est laissé seul des journées de travail complètes",
      "A besoin d'une à deux heures d'exercice réellement soutenu chaque jour",
      "Sensible à une voix qui s'élève — éducation douce uniquement",
      "Ressent vivement le froid lors des promenades hivernales",
    ],
  },
  "samoyed": {
    displayName: "Samoyède",
    summary:
      "Le chien des neiges au sourire permanent. Sociable, bavard et magnifique — et une quantité de poils considérable.",
    strengths: [
      "Vraiment amical avec tout le monde",
      "Adore le froid et la neige",
      "Joueur et attaché à la famille",
      "Rarement agressif",
    ],
    considerations: [
      "Perd une quantité de poils honnêtement stupéfiante",
      "A besoin d'être brossé plusieurs fois par semaine pour suivre le rythme",
      "Parle, hurle et exprime régulièrement son avis",
      "Surchauffe facilement dès l'arrivée de l'été",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshire Terrier",
    summary:
      "Minuscule, vif et terrier jusqu'au bout des griffes. Un Yorkie est plus audacieux qu'on ne l'imagine.",
    strengths: [
      "Perd à peine ses poils",
      "Taille parfaite pour un appartement",
      "Vif d'esprit et apprend vite",
      "Vit souvent longtemps",
    ],
    considerations: [
      "Le pelage demande un soin quotidien, ou une coupe courte pour simplifier",
      "A tendance à aboyer à tout, livreurs compris",
      "Fragile sous les pieds — facile à blesser sans le vouloir",
      "La propreté peut être plus longue à acquérir qu'on ne l'imagine",
    ],
  },
};
