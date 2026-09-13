import type { FoodItem } from "./types";

const poisonLine = {
  label: "Conseils sur les aliments toxiques pour les chiens",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Une réponse calme et consultable à la question "mon chien peut-il manger ça ?".
 * `avoid` = connu pour être nocif. `care` = bon dans certaines situations, avec des mises en garde.
 * Rien ici ne remplace un appel à un vétérinaire si un chien a déjà mangé quelque chose.
 */
export const foodItemsFr: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Chocolat", safety: "avoid", body: "Contient de la théobromine, que les chiens ne peuvent pas éliminer comme nous. Le chocolat noir et le chocolat de pâtisserie sont les pires ; le chocolat au lait compte quand même.", warning: "Appelez votre vétérinaire immédiatement en précisant le type, la quantité et à peu près quand. N'attendez pas les symptômes.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / sucre de bouleau", safety: "avoid", body: "Un édulcorant présent dans les chewing-gums sans sucre, les bonbons à la menthe, certains beurres de cacahuète, les pâtisseries et certains médicaments. De très petites quantités peuvent provoquer une chute dangereuse de la glycémie.", warning: "C'est une urgence. Appelez un vétérinaire immédiatement.", source: poisonLine },
  { id: "grapes", name: "Raisins, raisins secs, pépins de raisin", safety: "avoid", body: "Peut provoquer une insuffisance rénale chez certains chiens, et personne ne peut prédire quels chiens ou quelle quantité. Cela inclut les tourtes à la viande, les gâteaux aux fruits et les granolas.", warning: "Toute quantité nécessite un appel au vétérinaire le jour même.", source: poisonLine },
  { id: "onion", name: "Oignon, ail, poireaux, ciboulette", safety: "avoid", body: "Toute la famille des alliacées endommage les globules rouges, crus, cuits, séchés ou en poudre. Attention aux sauces, bouillons, currys et restes.", warning: "Les signes peuvent prendre des jours à apparaître. Appelez votre vétérinaire.", source: poisonLine },
  { id: "macadamia", name: "Noix de macadamia", safety: "avoid", body: "Provoquent faiblesse, instabilité, tremblements et vomissements, souvent dans les douze heures.", warning: "Appelez votre vétérinaire.", source: poisonLine },
  { id: "alcohol", name: "Alcool", safety: "avoid", body: "Les chiens sont beaucoup plus sensibles que les humains. Comprend la pâte non cuite et certains desserts.", warning: "Appelez un vétérinaire d'urgence.", source: poisonLine },
  { id: "caffeine", name: "Café, thé, boissons énergisantes", safety: "avoid", body: "La caféine provoque des palpitations, de l'agitation et des tremblements. Les grains de café et les sachets de thé dans une poubelle sont un coupable fréquent.", warning: "Appelez votre vétérinaire.", source: poisonLine },
  { id: "dough", name: "Pâte à pain crue", safety: "avoid", body: "Elle gonfle dans l'estomac chaud et la levure produit de l'alcool. Douloureux et vraiment dangereux.", warning: "C'est une urgence.", source: poisonLine },
  { id: "cooked-bones", name: "Os cuits", safety: "avoid", body: "Se brisent en éclats tranchants qui peuvent endommager ou bloquer l'intestin. Cela inclut les os de poulet, de côtelette et de travers.", warning: "Si votre chien en a mangé un, appelez votre vétérinaire pour obtenir des conseils." },
  { id: "corn-cob", name: "Épi de maïs", safety: "avoid", body: "Les grains sont inoffensifs ; l'épi est l'une des causes les plus fréquentes de blocage chirurgical chez les chiens.", warning: "Appelez votre vétérinaire le jour même." },
  { id: "mouldy", name: "Nourriture moisie et compost", safety: "avoid", body: "La moisissure peut produire des toxines qui provoquent de graves tremblements et convulsions. Gardez les poubelles de compost bien fermées.", warning: "Appelez un vétérinaire d'urgence.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Noyaux de pêche, prune et cerise", safety: "avoid", body: "La chair est inoffensive en petites quantités, les noyaux ne le sont pas — risque d'étouffement et de blocage, et ils contiennent des composés cyanurés." },
  { id: "mushrooms-wild", name: "Champignons sauvages", safety: "avoid", body: "Certains sont mortels et les distinguer dans un champ n'est pas réaliste. Les champignons de supermarché dans un repas sont une autre affaire.", warning: "Si votre chien mange un champignon sauvage, appelez un vétérinaire et photographiez-le si vous le pouvez." },
  { id: "salt", name: "Aliments très salés", safety: "avoid", body: "De grandes quantités de sel provoquent de graves problèmes. Les décorations en pâte à sel et l'ingestion de beaucoup d'eau de mer en sont les causes habituelles." },
  { id: "rhubarb", name: "Feuilles de rhubarbe", safety: "avoid", body: "Les feuilles sont toxiques. Bon à savoir si vous en cultivez dans votre jardin." },
  { id: "nutmeg", name: "Noix de muscade", safety: "avoid", body: "En quantité, elle provoque désorientation et tremblements. Une pincée sur quelque chose n'est généralement pas une crise, mais n'en donnez pas." },
  { id: "hops", name: "Houblon", safety: "avoid", body: "Pertinent si quelqu'un dans la maison brasse de la bière. Provoque une augmentation dangereuse de la température corporelle." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Beurre de cacahuète", safety: "care", body: "Inoffensif comme friandise occasionnelle — mais seulement s'il ne contient pas de xylitol ou de sucre de bouleau. Lisez l'étiquette à chaque fois, même sur une marque que vous connaissez.", serving: "Une cuillère à café étalée sur une tapis de léchage", warning: "Xylitol uniquement." },
  { id: "cheese", name: "Fromage", safety: "care", body: "Excellente monnaie d'échange pour l'éducation, mais riche et salé. Beaucoup de chiens ne tolèrent pas bien les produits laitiers.", serving: "Morceaux de la taille d'un petit pois, pas une tranche" },
  { id: "yoghurt", name: "Yaourt nature", safety: "care", body: "De petites quantités de yaourt nature non sucré conviennent à certains chiens. Jamais rien de sucré — vérifiez la présence de xylitol.", serving: "Une cuillère à soupe" },
  { id: "milk", name: "Lait", safety: "care", body: "Beaucoup de chiens adultes sont intolérants au lactose et cela se manifeste généralement par des maux d'estomac. L'eau est une meilleure idée." },
  { id: "bread", name: "Pain", safety: "care", body: "Le pain nature cuit n'est pas nocif mais ce sont des calories vides. Évitez tout ce qui contient des raisins secs, des oignons, de l'ail ou des graines." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Nature, soufflé à l'air et non salé, c'est bien comme collation occasionnelle. Le beurre, le sel et les enrobages sucrés ne le sont pas. Les grains non soufflés peuvent casser les dents." },
  { id: "ham", name: "Jambon, bacon et charcuterie", safety: "care", body: "Très salé et gras. Les aliments gras sont un déclencheur bien connu de pancréatite, qui est douloureuse et grave." },
  { id: "avocado", name: "Avocat", safety: "care", body: "La chair pose beaucoup moins de problèmes aux chiens qu'aux oiseaux, mais il est riche en graisses et le noyau présente un réel risque de blocage. Plus facile de s'en passer." },
  { id: "tomato", name: "Tomate", safety: "care", body: "La chair de tomate mûre est inoffensive en petites quantités. Les tomates vertes, les feuilles et les tiges ne le sont pas." },
  { id: "nuts", name: "Noix (général)", safety: "care", body: "Riches en graisses, faciles à avaler, souvent salées. Les macadamias sont toxiques. Mieux vaut éviter en habitude." },
  { id: "raw-potato", name: "Pomme de terre crue", safety: "care", body: "Les pommes de terre vertes ou germées sont toxiques. Les pommes de terre cuites nature sans beurre ni sel sont acceptables occasionnellement." },
  { id: "sweetcorn", name: "Grains de maïs doux", safety: "care", body: "Les grains retirés de l'épi sont inoffensifs en petites quantités. L'épi est le danger." },
  { id: "citrus", name: "Oranges et agrumes", safety: "care", body: "Un petit morceau d'orange pelée ne fera pas de mal, bien que la plupart des chiens n'en soient pas friands. Évitez la peau, la partie blanche et les pépins." },
  { id: "ice-cream", name: "Glace", safety: "care", body: "Sucrée, souvent riche en produits laitiers, et contient parfois du xylitol ou du chocolat. Un yaourt nature congelé ou une carotte congelée est une meilleure friandise par temps chaud." },
  { id: "raw-fish", name: "Poisson cru", safety: "care", body: "Comporte un risque de parasites et de bactéries, et certains poissons crus interfèrent avec l'absorption des vitamines. Cuit et sans arêtes est la version la plus sûre." },
  { id: "liver", name: "Foie", safety: "care", body: "Une excellente friandise d'éducation, mais très riche en vitamine A. Gardez-la en petites quantités plutôt qu'en repas régulier." },
  { id: "eggs-raw", name: "Œuf cru", safety: "care", body: "Risque de salmonelle, et les blancs crus peuvent interférer avec une vitamine B. L'œuf cuit nature est l'alternative facile." },
  { id: "honey", name: "Miel", safety: "care", body: "Pas toxique, juste du sucre. Une toute petite quantité de temps en temps convient aux chiens adultes en bonne santé ; évitez-le pour les chiens diabétiques et les chiots." },
  { id: "coconut", name: "Noix de coco", safety: "care", body: "De petites quantités de chair ou d'huile ne sont pas nocives, mais c'est gras et peut ramollir les selles." },
  { id: "spinach", name: "Épinards et chou frisé", safety: "care", body: "Inoffensifs en petites quantités dans le cadre d'un repas. De grandes quantités ne sont pas idéales pour les chiens ayant des problèmes rénaux." },
  { id: "table-scraps", name: "Restes de table", safety: "care", body: "Le problème est rarement une bouchée — ce sont les sauces, l'oignon, le sel et la graisse, et les calories que personne ne compte. Gardez les friandises à environ un dixième de la nourriture de la journée." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Carotte", safety: "safe", body: "Croquante, bon marché et faible en calories. Une carotte froide est une bonne chose pour un chiot qui fait ses dents à ronger.", serving: "Bâtonnets crus ou morceaux cuits" },
  { id: "apple", name: "Pomme", safety: "safe", body: "Sucrée, croquante et populaire. Retirez le trognon et les pépins.", serving: "Quelques tranches" },
  { id: "banana", name: "Banane", safety: "safe", body: "Inoffensive en petites quantités. Sucrée, donc pas tous les jours.", serving: "Quelques rondelles de banane" },
  { id: "blueberries", name: "Myrtilles", safety: "safe", body: "Petites, faciles à distribuer et la plupart des chiens les adorent.", serving: "Une petite poignée" },
  { id: "watermelon", name: "Pastèque", safety: "safe", body: "Rafraîchissante par temps chaud. Retirez les graines et la peau.", serving: "Quelques cubes, ou congelée" },
  { id: "strawberries", name: "Fraises", safety: "safe", body: "Inoffensives fraîches, en petites quantités. Rien en conserve ou au sirop.", serving: "Une ou deux" },
  { id: "pumpkin", name: "Citrouille nature", safety: "safe", body: "La citrouille nature cuite ou en conserve (pas la garniture pour tarte) est douce pour l'estomac et souvent recommandée pour raffermir les selles molles.", serving: "Une cuillère à soupe ou deux" },
  { id: "green-beans", name: "Haricots verts", safety: "safe", body: "Repas et faible en calories — vraiment utile si votre chien est au régime.", serving: "Une petite poignée, nature" },
  { id: "cucumber", name: "Concombre", safety: "safe", body: "Principalement de l'eau. Une bonne collation par temps chaud.", serving: "Quelques tranches" },
  { id: "chicken", name: "Poulet nature cuit", safety: "safe", body: "Sans peau, sans os et non assaisonné. L'une des meilleures friandises d'éducation qui soit.", serving: "Petits morceaux" },
  { id: "turkey", name: "Dinde nature cuite", safety: "safe", body: "Mêmes règles que le poulet : pas de peau, pas d'os, pas d'assaisonnement, pas de sauce.", serving: "Petits morceaux" },
  { id: "fish-cooked", name: "Poisson blanc et saumon cuits", safety: "safe", body: "Bien cuits et entièrement désarêtés. Une bonne source de protéines et d'oméga-3.", serving: "Une petite portion" },
  { id: "rice", name: "Riz nature cuit", safety: "safe", body: "Doux et facile à digérer — souvent inclus dans ce qu'un vétérinaire suggère après un estomac perturbé.", serving: "Mélangé à un repas" },
  { id: "egg", name: "Œuf cuit", safety: "safe", body: "Brouillé sans beurre ni sel, ou dur-bouilli.", serving: "Une partie d'un œuf, selon la taille de votre chien" },
  { id: "sweet-potato", name: "Patate douce cuite", safety: "safe", body: "Nature et cuite. La plupart des chiens en sont très friands.", serving: "Une petite quantité, sans beurre" },
  { id: "peas", name: "Petits pois", safety: "safe", body: "Frais ou surgelés, nature. Évitez les petits pois en conserve — trop de sel.", serving: "Une cuillère à soupe" },
  { id: "broccoli", name: "Brocoli", safety: "safe", body: "Inoffensif en petites quantités. Beaucoup peut provoquer des gaz et une irritation de l'estomac.", serving: "Quelques petites fleurettes" },
  { id: "courgette", name: "Courgette", safety: "safe", body: "Faible en calories et douce pour l'estomac, crue ou cuite nature.", serving: "Quelques morceaux" },
  { id: "celery", name: "Céleri", safety: "safe", body: "Croquant et très faible en calories. Coupez-le en petits morceaux.", serving: "Petits morceaux hachés" },
  { id: "pear", name: "Poire", safety: "safe", body: "Inoffensive sans le trognon et les pépins.", serving: "Quelques morceaux" },
  { id: "melon", name: "Melon cantaloup", safety: "safe", body: "Doux et hydratant. Retirez la peau et les graines.", serving: "Quelques cubes" },
  { id: "mango", name: "Mangue", safety: "safe", body: "Pelée, noyau retiré. Sucrée, donc gardez-la petite.", serving: "Quelques morceaux" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Frais uniquement, peau et trognon retirés. Pas la sorte en conserve sucrée.", serving: "Un petit morceau" },
  { id: "oats", name: "Flocons d'avoine nature cuits", safety: "safe", body: "Porridge nature préparé à l'eau. Pas de sucre, pas d'édulcorants, pas de lait.", serving: "Une cuillère à soupe" },
  { id: "sardines", name: "Sardines à l'eau", safety: "safe", body: "En conserve à l'eau, pas à l'huile ou à la saumure. Une bonne source d'oméga-3.", serving: "Une partie d'une boîte, occasionnellement" },
  { id: "cauliflower", name: "Chou-fleur", safety: "safe", body: "Nature et en petites quantités. Peut provoquer des gaz, comme chez nous.", serving: "Une petite fleurette" },
  { id: "lettuce", name: "Laitue", safety: "safe", body: "Inoffensive et principalement de l'eau. Pas excitante, mais bien.", serving: "Un peu, hachée" },
  { id: "beetroot", name: "Betterave cuite", safety: "safe", body: "La betterave cuite nature est inoffensive en petites quantités — pas la sorte marinée.", serving: "Un petit morceau" },
];

export const nutritionSectionsFr = [
  {
    title: "Lisez l'étiquette, pas l'emballage",
    body: "La face avant du sac est du marketing. Ce qui compte, c'est une mention indiquant que la nourriture est complète et équilibrée pour le stade de vie de votre chien, et un guide d'alimentation que vous pouvez réellement suivre.",
    points: [
      "\"Complète\" signifie qu'elle peut être donnée seule. \"Complémentaire\" signifie qu'elle ne le peut pas",
      "Vérifiez qu'elle est adaptée au bon stade de vie — chiot, adulte ou toutes les étapes de la vie",
      "Les guides d'alimentation sont un point de départ, pas une règle. Adaptez à votre chien",
      "Les marques ayant des vétérinaires et des nutritionnistes en personnel, effectuant des essais d'alimentation, sont un pari plus sûr",
    ],
  },
  {
    title: "Quelle quantité, vraiment",
    body: "Chaque guide sur chaque sac est une moyenne. Deux chiens du même poids peuvent avoir besoin de quantités sensiblement différentes, et la réponse honnête est de nourrir, observer et ajuster toutes les quelques semaines.",
    points: [
      "Pesez la nourriture plutôt que d'utiliser une mesure — les mesures varient",
      "Comptez les friandises et les jouets à mâcher. Ils s'accumulent plus vite que ce que l'on pense",
      "Vérifiez la condition corporelle mensuellement et ajustez d'environ 10 % à la fois",
      "Les chiens stérilisés ont souvent besoin d'un peu moins qu'avant",
    ],
  },
  {
    title: "À quelle fréquence",
    body: "Les chiots ont besoin de petits repas fréquents ; les adultes se portent bien avec deux repas. Répartir la nourriture de la journée en deux repas convient mieux à la routine de la plupart des chiens qu'un seul grand bol.",
    points: [
      "Moins de 4 mois : trois ou quatre repas par jour",
      "4 à 6 mois : trois repas",
      "6 mois et plus : deux repas",
      "Chiens à poitrine profonde : évitez l'exercice intense juste avant les repas",
    ],
  },
  {
    title: "Changer de nourriture",
    body: "Les changements brusques perturbent l'estomac de la plupart des chiens. Prenez environ une semaine pour cela.",
    points: [
      "Jours 1-2 : un quart de nouveau, trois quarts d'ancien",
      "Jours 3-4 : moitié-moitié",
      "Jours 5-6 : trois quarts de nouveau",
      "Jour 7 : nourriture entièrement nouvelle",
      "Si les choses deviennent molles, ralentissez plutôt que de continuer",
    ],
  },
  {
    title: "Eau",
    body: "De l'eau fraîche, toujours disponible, dans un bol propre. Cela semble évident, et c'est toujours la chose la plus souvent oubliée par temps chaud et lors de longs voyages.",
  },
  {
    title: "Cru et fait maison",
    body: "Les deux peuvent être bien faits, et les deux sont faciles à mal faire. Les régimes faits maison en particulier sont très souvent déséquilibrés à moins qu'un nutritionniste vétérinaire ne les ait formulés.",
    points: [
      "L'alimentation crue présente un risque bactérien pour votre chien et votre foyer",
      "Les repas faits maison nécessitent une recette et des suppléments appropriés pour être complets",
      "Parlez à votre vétérinaire avant de changer, surtout pour les chiots et les chiens âgés",
      "C'est une décision à prendre avec un professionnel, pas sur un forum",
    ],
  },
] as const;
