import type { FoodItem } from "./types";

const poisonLine = {
  label: "Conseils sur les aliments toxiques pour les chiens",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Une réponse calme et consultable à « mon chien peut-il manger ça ? ».
 * `avoid` = connu pour être nocif. `care` = acceptable dans certaines situations, avec réserves.
 * Rien ici ne remplace un appel au vétérinaire si un chien a déjà mangé quelque chose.
 */
export const foodItemsFr: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Chocolat", safety: "avoid", body: "Contient de la théobromine, que les chiens n'éliminent pas comme nous. Le chocolat noir et de pâtisserie sont les pires ; le chocolat au lait compte aussi.", warning: "Appelez immédiatement votre vétérinaire en précisant le type, la quantité et approximativement quand. N'attendez pas les symptômes.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / sucre de bouleau", safety: "avoid", body: "Un édulcorant présent dans les chewing-gums sans sucre, les pastilles, certains beurres de cacahuète, produits de boulangerie et certains médicaments. De très petites quantités peuvent provoquer une chute dangereuse de la glycémie.", warning: "C'est une urgence. Appelez un vétérinaire immédiatement.", source: poisonLine },
  { id: "grapes", name: "Raisins, raisins secs, raisins de Corinthe", safety: "avoid", body: "Peuvent provoquer une insuffisance rénale chez certains chiens, et personne ne peut prédire chez lesquels ni à quelle quantité. Cela inclut les mince pies, cakes aux fruits et granolas.", warning: "Toute quantité justifie un appel au vétérinaire le jour même.", source: poisonLine },
  { id: "onion", name: "Oignon, ail, poireaux, ciboulette", safety: "avoid", body: "Toute la famille des alliacées endommage les globules rouges, crue, cuite, séchée ou en poudre. Attention aux sauces, bouillons, currys et restes de repas.", warning: "Les signes peuvent mettre plusieurs jours à apparaître. Appelez votre vétérinaire.", source: poisonLine },
  { id: "macadamia", name: "Noix de macadamia", safety: "avoid", body: "Provoquent faiblesse, tremblements, incoordination et vomissements, souvent dans les douze heures.", warning: "Appelez votre vétérinaire.", source: poisonLine },
  { id: "alcohol", name: "Alcool", safety: "avoid", body: "Les chiens y sont bien plus sensibles que les humains. Cela inclut la pâte à pain non cuite et certains desserts.", warning: "Appelez un vétérinaire de toute urgence.", source: poisonLine },
  { id: "caffeine", name: "Café, thé, boissons énergisantes", safety: "avoid", body: "La caféine provoque une accélération du rythme cardiaque, de l'agitation et des tremblements. Le marc de café et les sachets de thé dans une poubelle sont une cause fréquente.", warning: "Appelez votre vétérinaire.", source: poisonLine },
  { id: "dough", name: "Pâte à pain crue", safety: "avoid", body: "Elle gonfle dans l'estomac au chaud et la levure produit de l'alcool. Douloureux et réellement dangereux.", warning: "C'est une urgence.", source: poisonLine },
  { id: "cooked-bones", name: "Os cuits", safety: "avoid", body: "Se brisent en éclats pointus pouvant blesser ou obstruer l'intestin. Cela inclut les os de poulet, de côtelette et de côtes.", warning: "Si votre chien en a mangé un, appelez votre vétérinaire pour avis." },
  { id: "corn-cob", name: "Épi de maïs", safety: "avoid", body: "Les grains ne posent pas de problème ; l'épi est l'une des causes les plus fréquentes d'obstruction chirurgicale chez le chien.", warning: "Appelez votre vétérinaire le jour même." },
  { id: "mouldy", name: "Aliments moisis & compost", safety: "avoid", body: "La moisissure peut produire des toxines causant de sévères tremblements et des convulsions. Gardez les composteurs bien fermés.", warning: "Appelez un vétérinaire de toute urgence.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Noyaux de pêche, prune et cerise", safety: "avoid", body: "La chair ne pose pas de problème en petite quantité, les noyaux si — risque d'étouffement et d'obstruction, et ils contiennent des composés cyanurés." },
  { id: "mushrooms-wild", name: "Champignons sauvages", safety: "avoid", body: "Certains sont mortels et les distinguer dans un champ n'est pas réaliste. Les champignons achetés en magasin dans un repas sont une autre affaire.", warning: "Si votre chien mange un champignon sauvage, appelez un vétérinaire et photographiez-le si possible." },
  { id: "salt", name: "Aliments très salés", safety: "avoid", body: "De grandes quantités de sel provoquent des problèmes sérieux. Les décorations en pâte à sel et l'ingestion d'eau de mer en sont les causes habituelles." },
  { id: "rhubarb", name: "Feuilles de rhubarbe", safety: "avoid", body: "Les feuilles sont toxiques. Bon à savoir si vous en cultivez au jardin." },
  { id: "nutmeg", name: "Noix de muscade", safety: "avoid", body: "En quantité, elle provoque désorientation et tremblements. Une pincée sur un plat n'est généralement pas une urgence, mais mieux vaut ne pas en donner." },
  { id: "hops", name: "Houblon", safety: "avoid", body: "Pertinent si quelqu'un dans le foyer brasse de la bière. Provoque une dangereuse hausse de la température corporelle." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Beurre de cacahuète", safety: "care", body: "Convient comme friandise occasionnelle — mais seulement s'il ne contient ni xylitol ni sucre de bouleau. Lisez l'étiquette à chaque fois, même sur une marque que vous connaissez.", serving: "Une cuillère à café étalée sur un tapis à lécher", warning: "Sans xylitol uniquement." },
  { id: "cheese", name: "Fromage", safety: "care", body: "Excellente monnaie d'échange à l'éducation, mais riche et salé. Beaucoup de chiens supportent mal les produits laitiers.", serving: "Des morceaux de la taille d'un petit pois, pas une tranche" },
  { id: "yoghurt", name: "Yaourt nature", safety: "care", body: "De petites quantités de yaourt nature non sucré conviennent à certains chiens. Jamais de yaourt sucré — vérifiez l'absence de xylitol.", serving: "Une cuillerée" },
  { id: "milk", name: "Lait", safety: "care", body: "Beaucoup de chiens adultes sont intolérants au lactose, ce qui se traduit généralement par des troubles digestifs. L'eau est une meilleure idée." },
  { id: "bread", name: "Pain", safety: "care", body: "Le pain nature n'est pas nocif mais ce sont des calories vides. Évitez tout ce qui contient des raisins secs, de l'oignon, de l'ail ou des graines." },
  { id: "popcorn", name: "Pop-corn", safety: "care", body: "Nature, soufflé à l'air et non salé, convient comme en-cas occasionnel. Beurre, sel et enrobages sucrés ne conviennent pas. Les grains non éclatés peuvent casser les dents." },
  { id: "ham", name: "Jambon, bacon & charcuterie", safety: "care", body: "Très salé et gras. Les aliments gras sont un déclencheur bien connu de pancréatite, une maladie douloureuse et sérieuse." },
  { id: "avocado", name: "Avocat", safety: "care", body: "La chair pose bien moins de problème pour les chiens que pour les oiseaux, mais elle est riche en matières grasses et le noyau représente un vrai risque d'obstruction. Plus simple de s'en passer." },
  { id: "tomato", name: "Tomate", safety: "care", body: "La chair de tomate mûre convient en petite quantité. Les tomates vertes, feuilles et tiges ne conviennent pas." },
  { id: "nuts", name: "Noix (en général)", safety: "care", body: "Riches en matières grasses, faciles à avaler de travers, souvent salées. Les noix de macadamia sont toxiques. Mieux vaut éviter d'en faire une habitude." },
  { id: "raw-potato", name: "Pomme de terre crue", safety: "care", body: "Les pommes de terre vertes ou germées sont toxiques. Une pomme de terre cuite nature, sans beurre ni sel, convient occasionnellement." },
  { id: "sweetcorn", name: "Grains de maïs doux", safety: "care", body: "Les grains détachés de l'épi sont sans danger en petite quantité. L'épi est le danger." },
  { id: "citrus", name: "Oranges & agrumes", safety: "care", body: "Un petit morceau d'orange épluchée ne fait pas de mal, même si la plupart des chiens n'apprécient guère. Évitez la peau, la peau blanche et les pépins." },
  { id: "ice-cream", name: "Glace", safety: "care", body: "Sucrée, souvent riche en produits laitiers, et contient parfois du xylitol ou du chocolat. Un yaourt nature glacé ou une carotte congelée est une meilleure friandise par temps chaud." },
  { id: "raw-fish", name: "Poisson cru", safety: "care", body: "Comporte un risque de parasites et de bactéries, et certains poissons crus interfèrent avec l'absorption de vitamines. La version cuite et sans arêtes est plus sûre." },
  { id: "liver", name: "Foie", safety: "care", body: "Une excellente friandise d'éducation, mais très riche en vitamine A. Réservez-le à de petites quantités plutôt qu'à un repas régulier." },
  { id: "eggs-raw", name: "Œuf cru", safety: "care", body: "Risque de salmonelle, et le blanc cru peut interférer avec une vitamine B. L'œuf cuit nature est l'alternative simple." },
  { id: "honey", name: "Miel", safety: "care", body: "Non toxique, juste du sucre. Une toute petite quantité de temps en temps convient aux chiens adultes en bonne santé ; à éviter pour les chiens diabétiques et les chiots." },
  { id: "coconut", name: "Noix de coco", safety: "care", body: "De petites quantités de chair ou d'huile ne sont pas nocives, mais c'est gras et cela peut ramollir les selles." },
  { id: "spinach", name: "Épinards & chou frisé", safety: "care", body: "Conviennent en petite quantité dans un repas. De grandes quantités ne sont pas idéales pour les chiens ayant des problèmes rénaux." },
  { id: "table-scraps", name: "Restes de table", safety: "care", body: "Le problème vient rarement d'une seule bouchée — ce sont les sauces, l'oignon, le sel et le gras, ainsi que les calories que personne ne compte. Limitez les friandises à environ un dixième de la ration quotidienne." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Carotte", safety: "safe", body: "Croquante, bon marché et peu calorique. Une carotte froide est une bonne chose à ronger pour un chiot qui fait ses dents.", serving: "Des bâtonnets crus ou des morceaux cuits" },
  { id: "apple", name: "Pomme", safety: "safe", body: "Sucrée, croquante et appréciée. Retirez le trognon et les pépins.", serving: "Quelques tranches" },
  { id: "banana", name: "Banane", safety: "safe", body: "Convient en petite quantité. Sucrée, donc pas tous les jours.", serving: "Quelques rondelles de banane" },
  { id: "blueberries", name: "Myrtilles", safety: "safe", body: "Petites, faciles à distribuer et la plupart des chiens les adorent.", serving: "Une petite poignée" },
  { id: "watermelon", name: "Pastèque", safety: "safe", body: "Rafraîchissante par temps chaud. Retirez les pépins et l'écorce.", serving: "Quelques cubes, ou congelée" },
  { id: "strawberries", name: "Fraises", safety: "safe", body: "Fraîches, en petite quantité, sans problème. Rien en boîte ni au sirop.", serving: "Une ou deux" },
  { id: "pumpkin", name: "Potiron nature", safety: "safe", body: "Le potiron nature cuit ou en boîte (pas la garniture à tarte) est doux pour l'estomac et souvent suggéré pour raffermir des selles molles.", serving: "Une ou deux cuillerées" },
  { id: "green-beans", name: "Haricots verts", safety: "safe", body: "Rassasiants et peu caloriques — vraiment utiles si votre chien suit un régime.", serving: "Une petite poignée, nature" },
  { id: "cucumber", name: "Concombre", safety: "safe", body: "Essentiellement de l'eau. Un bon en-cas par temps chaud.", serving: "Quelques tranches" },
  { id: "chicken", name: "Poulet cuit nature", safety: "safe", body: "Sans peau, sans os et sans assaisonnement. L'une des meilleures friandises d'éducation qui soit.", serving: "De petits morceaux" },
  { id: "turkey", name: "Dinde cuite nature", safety: "safe", body: "Mêmes règles que le poulet : sans peau, sans os, sans assaisonnement, sans sauce.", serving: "De petits morceaux" },
  { id: "fish-cooked", name: "Poisson blanc et saumon cuits", safety: "safe", body: "Bien cuits et soigneusement désarêtés. Une bonne source de protéines et d'oméga-3.", serving: "Une petite portion" },
  { id: "rice", name: "Riz cuit nature", safety: "safe", body: "Fade et facile à digérer — souvent conseillé par un vétérinaire après des troubles digestifs.", serving: "Mélangé à un repas" },
  { id: "egg", name: "Œuf cuit", safety: "safe", body: "Brouillé sans beurre ni sel, ou dur.", serving: "Une partie d'un œuf, selon la taille de votre chien" },
  { id: "sweet-potato", name: "Patate douce cuite", safety: "safe", body: "Nature et cuite. La plupart des chiens en raffolent.", serving: "Une petite quantité, sans beurre" },
  { id: "peas", name: "Petits pois", safety: "safe", body: "Frais ou surgelés, nature. Évitez les petits pois en boîte — trop de sel.", serving: "Une cuillerée" },
  { id: "broccoli", name: "Brocoli", safety: "safe", body: "Convient en petite quantité. Une grande quantité peut provoquer des gaz et une irritation digestive.", serving: "Quelques petits bouquets" },
  { id: "courgette", name: "Courgette", safety: "safe", body: "Peu calorique et douce pour l'estomac, crue ou cuite nature.", serving: "Quelques morceaux" },
  { id: "celery", name: "Céleri", safety: "safe", body: "Croquant et très peu calorique. Coupez-le en petits morceaux.", serving: "De petits morceaux coupés" },
  { id: "pear", name: "Poire", safety: "safe", body: "Sans problème sans le trognon ni les pépins.", serving: "Quelques morceaux" },
  { id: "melon", name: "Melon cantaloup", safety: "safe", body: "Sucré et hydratant. Retirez l'écorce et les pépins.", serving: "Quelques cubes" },
  { id: "mango", name: "Mangue", safety: "safe", body: "Épluchée, noyau retiré. Sucrée, donc à donner en petite quantité.", serving: "Quelques morceaux" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Frais uniquement, peau et cœur retirés. Pas la version en boîte au sirop.", serving: "Un petit morceau" },
  { id: "oats", name: "Flocons d'avoine cuits nature", safety: "safe", body: "Un porridge nature préparé à l'eau. Sans sucre, sans édulcorant, sans lait.", serving: "Une cuillerée" },
  { id: "sardines", name: "Sardines à l'eau", safety: "safe", body: "En boîte à l'eau, pas à l'huile ni à la saumure. Une bonne source d'oméga-3.", serving: "Une partie d'une boîte, occasionnellement" },
  { id: "cauliflower", name: "Chou-fleur", safety: "safe", body: "Nature et en petite quantité. Peut provoquer des gaz, comme chez nous.", serving: "Un petit bouquet" },
  { id: "lettuce", name: "Laitue", safety: "safe", body: "Sans danger et essentiellement de l'eau. Pas très excitant, mais sans problème.", serving: "Un peu, coupée" },
  { id: "beetroot", name: "Betterave cuite", safety: "safe", body: "La betterave cuite nature convient en petite quantité — pas la version au vinaigre.", serving: "Un petit morceau" },
];

export const nutritionSectionsFr = [
  {
    title: "Lisez l'étiquette, pas l'emballage",
    body: "Le devant du sac, c'est du marketing. Ce qui compte, c'est une mention indiquant que l'aliment est complet et équilibré pour le stade de vie de votre chien, et un guide de rationnement que vous pouvez réellement suivre.",
    points: [
      "« Complet » signifie qu'il peut être donné seul. « Complémentaire » signifie que non",
      "Vérifiez qu'il correspond au bon stade de vie — chiot, adulte ou tous stades",
      "Les guides de rationnement sont un point de départ, pas une règle. Ajustez selon votre chien",
      "Les marques employant des vétérinaires et nutritionnistes, menant des essais alimentaires, sont un choix plus sûr",
    ],
  },
  {
    title: "Quelle quantité, vraiment",
    body: "Chaque guide sur chaque sac est une moyenne. Deux chiens du même poids peuvent avoir besoin de quantités sensiblement différentes, et la réponse honnête est de nourrir, observer et ajuster toutes les quelques semaines.",
    points: [
      "Pesez la nourriture plutôt que d'utiliser un doseur — les doseurs dérivent",
      "Comptez les friandises et les os à mâcher. Ils s'accumulent plus vite qu'on ne le pense",
      "Vérifiez l'état corporel chaque mois et ajustez d'environ 10 % à la fois",
      "Les chiens stérilisés ont souvent besoin d'un peu moins qu'avant",
    ],
  },
  {
    title: "À quelle fréquence",
    body: "Les chiots ont besoin de repas fréquents et légers ; les adultes se portent bien avec deux repas. Répartir la ration quotidienne en deux repas convient mieux à la routine de la plupart des chiens qu'une seule grande gamelle.",
    points: [
      "Moins de 4 mois : trois à quatre repas par jour",
      "4 à 6 mois : trois repas",
      "6 mois et plus : deux repas",
      "Chiens à poitrine profonde : évitez l'exercice intense juste autour des repas",
    ],
  },
  {
    title: "Changer d'alimentation",
    body: "Des changements brusques perturbent l'estomac de la plupart des chiens. Prenez environ une semaine pour la transition.",
    points: [
      "Jours 1-2 : un quart de nouveau, trois quarts d'ancien",
      "Jours 3-4 : moitié-moitié",
      "Jours 5-6 : trois quarts de nouveau",
      "Jour 7 : entièrement le nouvel aliment",
      "En cas de selles molles, ralentissez plutôt que de forcer",
    ],
  },
  {
    title: "L'eau",
    body: "De l'eau fraîche, toujours disponible, dans une gamelle propre. Cela semble évident, et c'est pourtant ce qu'on oublie le plus souvent par temps chaud et lors de longs trajets.",
  },
  {
    title: "Alimentation crue et faite maison",
    body: "Les deux peuvent être bien faites, et les deux sont faciles à mal faire. Les régimes faits maison en particulier sont très souvent déséquilibrés à moins d'avoir été formulés par un nutritionniste vétérinaire.",
    points: [
      "L'alimentation crue comporte un risque bactérien pour votre chien et votre foyer",
      "Le fait maison nécessite une vraie recette et des compléments pour être complet",
      "Parlez-en à votre vétérinaire avant de changer, surtout pour les chiots et les chiens âgés",
      "C'est une vraie décision à prendre avec un professionnel, pas sur un forum",
    ],
  },
] as const;
