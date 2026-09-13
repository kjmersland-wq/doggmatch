import type { CareTopic } from "./types";

const vetOrgs = {
  wsava: { label: "Lignes directrices mondiales en matière de nutrition et de soins dentaires", org: "World Small Animal Veterinary Association" },
  avdc: { label: "Conseils pour les soins dentaires à domicile", org: "American Veterinary Dental College" },
  rspca: { label: "Conseils pour les soins quotidiens des chiens", org: "RSPCA" },
  aaha: { label: "Lignes directrices sur les stades de vie et les soins préventifs", org: "American Animal Hospital Association" },
  bva: { label: "Conseils aux propriétaires sur la santé et le bien-être", org: "British Veterinary Association" },
} as const;

export const careTopicsFr: CareTopic[] = [
  /* ------------------------------------------------------------- Dental */
  {
    id: "dental",
    title: "Une bouche saine, c'est important",
    promise: "Quelques minutes douces, quelques fois par semaine, et la bouche de votre chien sera beaucoup plus confortable.",
    category: "dental",
    intro: [
      "La plupart des chiens ont des problèmes dentaires à quelques années, et c'est facile à manquer car les chiens s'en plaignent rarement.",
      "La bonne nouvelle : le brossage est la chose la plus utile que vous puissiez faire à la maison, et presque tous les chiens peuvent apprendre à l'apprécier si vous y allez doucement.",
    ],
    steps: [
      {
        title: "Laissez-les d'abord regarder",
        body: "Posez la brosse à dents par terre et laissez votre chien la renifler. Rien d'autre ne se passe. Cette étape est plus importante qu'il n'y paraît.",
        visual: "brush-1",
      },
      {
        title: "Touchez les lèvres, puis les dents",
        body: "Soulevez une lèvre une seconde, félicitez, relâchez. Puis passez un doigt sur l'extérieur des dents. Restez bref et joyeux.",
        visual: "brush-1",
      },
      {
        title: "Ajoutez du dentifrice pour chien",
        body: "Laissez-les en lécher un peu sur votre doigt — la plupart sont à la viande ou à la volaille, et les chiens les aiment généralement. N'utilisez jamais de dentifrice humain ; il n'est pas fait pour être avalé.",
      },
      {
        title: "Brossez quelques dents",
        body: "De petits cercles le long des surfaces extérieures, là où la plaque s'accumule le plus. Les grosses dents à l'arrière et les canines sont les plus importantes. Les surfaces intérieures peuvent attendre — elles accumulent moins de plaque et la plupart des chiens n'aiment pas ça.",
        visual: "brush-2",
      },
      {
        title: "Arrêtez avant qu'ils en aient assez",
        body: "Trente secondes, c'est une bonne séance au début. Arrêtez-vous pendant que votre chien trouve encore cela acceptable, et augmentez à partir de là.",
      },
    ],
    routine: [
      { day: "Jour 1", body: "Laissez votre chien renifler la brosse à dents. C'est toute la séance." },
      { day: "Jour 2", body: "Touchez doucement leurs lèvres une ou deux secondes, puis une friandise." },
      { day: "Jour 3", body: "Un peu de dentifrice sans danger pour les chiens sur votre doigt." },
      { day: "Jour 4", body: "Passez un doigt ou une brosse sur quelques dents de devant." },
      { day: "Jour 5", body: "Brossez un côté de la bouche, brièvement." },
      { day: "Jour 6", body: "Les deux côtés, toujours brièvement. Félicitez au fur et à mesure." },
      { day: "Jour 7", body: "Une petite séance normale. Puis continuez ainsi, la plupart des jours si vous le pouvez." },
    ],
    sections: [
      {
        title: "Ce qui aide vraiment",
        body: "Le brossage est ce qui a le plus de preuves solides derrière lui. Tout le reste est un ajout utile, pas un remplacement.",
        points: [
          "Une brosse douce, un gant de brossage ou même de la gaze — ce que votre chien tolère",
          "Dentifrice pour chien uniquement",
          "Idéalement tous les jours, quelques fois par semaine aide quand même",
          "Les jouets à mâcher et les aliments portant un sceau vétérinaire dentaire peuvent aider en plus du brossage",
        ],
      },
      {
        title: "À propos des os et des jouets à mâcher durs",
        body: "Macher des objets durs ne nettoie pas les dents de manière fiable, et les objets très durs sont une cause fréquente de fractures dentaires — bois de cerf, sabots, nylon dur, os cuits, glaçons.",
        points: [
          "Règle générale : si vous ne pouviez pas le denteler avec un ongle, c'est probablement trop dur",
          "Les os cuits peuvent se briser et doivent être évités",
          "Surveillez tout jouet à mâcher, et retirez-le quand il devient assez petit pour être avalé",
          "Votre vétérinaire peut vous dire quels jouets à mâcher causent des problèmes localement",
        ],
      },
      {
        title: "Nettoyage professionnel",
        body: "Certains dépôts ne peuvent être retirés que sous anesthésie, avec des radiographies pour voir ce qui se passe sous la gencive. Ce n'est pas un échec de votre part — c'est une partie normale des soins pour beaucoup de chiens.",
      },
    ],
    watchFor: [
      "Une haleine constamment mauvaise, pas juste une haleine de chien",
      "Des gencives rouges, gonflées ou qui saignent",
      "Macher d'un seul côté, ou laisser tomber de la nourriture",
      "Une dent cassée ou décolorée",
      "Plus de bave que d'habitude",
      "Se gratter la gueule, ou se détourner quand vous touchez le visage",
      "Un gonflement sur le visage ou sous un œil",
    ],
    whenToAskVet:
      "Si vous remarquez l'un de ces signes, cela vaut la peine de prendre rendez-vous. La douleur dentaire est facile à manquer car la plupart des chiens continuent de manger sans problème.",
    ageNotes: {
      puppy: "Les chiots perdent leurs dents de lait vers quatre mois. Commencez la manipulation maintenant — un chiot qui pense que les brosses à dents sont normales est un cadeau pour votre futur vous.",
      senior: "Les bouches plus âgées nécessitent des vérifications plus fréquentes, et la douleur dentaire est une raison courante pour laquelle un chien âgé semble plus lent ou plus grognon.",
    },
    sources: [vetOrgs.avdc, vetOrgs.wsava],
  },

  /* --------------------------------------------------------- Coat & skin */
  {
    id: "coat",
    title: "Pelage et peau",
    promise: "Apprenez à connaître ce qui est normal pour votre chien, et vous remarquerez rapidement quand ce ne l'est pas.",
    category: "coat",
    intro: [
      "Le brossage ne concerne pas seulement l'apparence. C'est ainsi que la plupart des gens remarquent pour la première fois une grosseur, une zone irritée, une tique ou un nœud qui se forme quelque part d'incommode.",
      "La fréquence dépend beaucoup plus du pelage que du nom de la race sur le pedigree — et les chiens croisés peuvent se situer n'importe où.",
    ],
    sections: [
      {
        title: "Pelages courts et lisses",
        body: "Un brossage rapide une fois par semaine avec un gant en caoutchouc ou une brosse à poils permet de réduire les poils morts et est agréable pour la plupart des chiens.",
        points: ["Perd ses poils toute l'année, souvent plus que ce que les gens attendent", "Bain uniquement quand il est vraiment sale", "La peau est facile à voir — utilisez cela"],
      },
      {
        title: "Pelages longs",
        body: "Nécessite un brossage approprié plusieurs fois par semaine, jusqu'à la peau plutôt que de simplement effleurer le dessus.",
        points: ["Les nœuds se forment derrière les oreilles, sous les pattes et autour du collier", "Un peigne dit la vérité qu'une brosse ne dit pas", "Les coupes autour des pattes et de l'arrière gardent les choses propres"],
      },
      {
        title: "Pelages bouclés",
        body: "Les boucles ne perdent pas beaucoup de poils, ce qui signifie que les poils morts restent dans le pelage et forment des nœuds discrètement.",
        points: ["Brosser et peigner tous les jours ou tous les deux jours", "Rendez-vous réguliers chez le toiletteur, généralement toutes les six à huit semaines", "Les nœuds tirent sur la peau et font mal — éliminez-les tôt"],
      },
      {
        title: "Pelages doubles",
        body: "Un sous-poil doux sous un poil de couverture plus rêche. Il mue abondamment deux fois par an et vous le trouverez partout.",
        points: ["Un râteau pour sous-poil est utile au printemps et en automne", "Ne rasez pas un pelage double à moins qu'un vétérinaire ne le conseille", "Beaucoup de brossage vaut mieux que des bains fréquents"],
      },
      {
        title: "Pelages durs",
        body: "Des pelages rêches et résistants aux intempéries qui conservent leur texture avec un épilation à la main plutôt qu'une tonte.",
        points: ["Peigner la barbe et les pattes", "La tonte adoucit le pelage avec le temps", "Un toiletteur qui connaît le type de pelage vaut la peine d'être trouvé"],
      },
    ],
    steps: [
      {
        title: "Commencez avec vos mains",
        body: "Passez vos mains sur votre chien avant de sortir la brosse. Vous cherchez des grosseurs, des croûtes, des zones sensibles et tout ce qui est coincé dans le pelage.",
      },
      {
        title: "Brossez par sections",
        body: "Travaillez par petites zones, jusqu'à la peau. Tenez les poils au-dessus d'un nœud pour ne pas tirer sur la peau pendant que vous travaillez.",
      },
      {
        title: "Vérifiez les endroits difficiles d'accès",
        body: "Derrière les oreilles, les aisselles, l'arrière des pattes, la queue et sous le collier. Les nœuds commencent presque toujours là où les choses frottent.",
      },
      {
        title: "Terminez par quelque chose d'agréable",
        body: "Une friandise, une caresse, un jeu. Le toilettage doit être quelque chose que votre chien attend avec impatience, pas qu'il endure.",
      },
    ],
    watchFor: [
      "Se gratter, se lécher ou se mordre de manière nouvelle ou constante",
      "Peau rouge, boutons, croûtes ou une zone chaude",
      "Perte de poils par plaques ou éclaircissement",
      "Une odeur qui n'était pas là avant",
      "Peau qui pèle ou qui est grasse",
      "Grosseurs, ou une grosseur qui a changé",
    ],
    whenToAskVet:
      "Les démangeaisons ont de nombreuses causes possibles — parasites, allergies, infections, parfois quelque chose de complètement différent. Si c'est persistant, votre vétérinaire peut déterminer laquelle, plutôt que vous ne deviniez les shampooings.",
    ageNotes: {
      puppy: "Les pelages des chiots changent en grandissant. Le brossage maintenant sert surtout à leur apprendre que le contact est agréable.",
      senior: "Les chiens âgés se toilettent souvent moins et ont une peau plus sèche ou plus grumeleuse. Un brossage doux et fréquent vaut mieux que de longues séances.",
    },
    sources: [vetOrgs.rspca, vetOrgs.bva],
  },

  /* ---------------------------------------------------------- Paws & nails */
  {
    id: "paws",
    title: "Pattes et griffes",
    promise: "Trente secondes après une promenade attrapent la plupart des petits problèmes avant qu'ils ne deviennent douloureux.",
    category: "paws",
    intro: [
      "Les pattes encaissent les chocs et les chiens sont stoïques à leur sujet. Un coup d'œil rapide après les promenades est l'une des habitudes les plus faciles à prendre.",
      "Les griffes trop longues modifient la façon dont un chien se tient et peuvent rendre la marche inconfortable, il est donc utile de s'en occuper.",
    ],
    steps: [
      {
        title: "Tenez la patte doucement",
        body: "Soutenez-la par le dessous plutôt que de la serrer. Si votre chien se retire, laissez-le — puis réessayez plus tard avec une friandise dans votre autre main.",
        visual: "paw-check",
      },
      {
        title: "Regardez entre les coussinets",
        body: "Les graines d'herbe, le gravier, le sel de voirie et les petits cailloux adorent se loger là. En hiver, rincez et séchez les pattes après avoir marché sur des trottoirs salés.",
        visual: "paw-check",
      },
      {
        title: "Sentez les coussinets",
        body: "Ils doivent être souples. Les fissures, les coupures, les rougeurs ou une patte plus chaude que les autres méritent un examen plus approfondi.",
      },
      {
        title: "Vérifiez les poils entre les coussinets",
        body: "Chez les chiens aux pattes poilues, ils s'emmêlent et ramassent des choses. Une coupe soignée au niveau des coussinets aide aussi beaucoup à l'adhérence.",
      },
      {
        title: "Coupez de très petites quantités",
        body: "Ne coupez que la pointe, puis arrêtez. Petit à petit est bien plus sûr qu'une seule grosse séance, et récompensez calmement tout au long du processus.",
        visual: "nails",
      },
    ],
    sections: [
      {
        title: "Les griffes, sans le drame",
        body: "Si vous entendez des clics sur un sol dur, elles sont probablement un peu longues. La plupart des chiens ont besoin d'une coupe toutes les trois à six semaines.",
        points: [
          "Touchez les pattes tous les jours pour que les coupe-griffes ne soient pas une surprise",
          "Ne coupez que la pointe — la pulpe est plus loin qu'on ne le pense",
          "Griffes noires : coupez de petites tranches et arrêtez lorsque la surface coupée semble crayeuse",
          "Arrêtez si votre chien est stressé. Rien de tout cela ne vaut la peine de se battre",
          "Un toiletteur ou une infirmière vétérinaire peut le faire, et il n'y a aucune honte à cela",
        ],
      },
      {
        title: "Trottoirs et météo",
        body: "Appuyez le dos de votre main sur le trottoir pendant sept secondes. Si vous ne pouvez pas le tenir là, il fait trop chaud pour les pattes — marchez tôt ou tard à la place.",
        points: ["Le sel et le gravier d'hiver irritent les coussinets — rincez et séchez après", "Les longues promenades sur terrain accidenté peuvent user les coussinets", "La neige profonde s'agglomère en boules de glace dans les pattes poilues"],
      },
    ],
    watchFor: [
      "Boiterie, ou lécher une patte de manière répétée",
      "Un coussinet craqué, qui saigne ou gonflé",
      "Une griffe déchirée ou cassée",
      "Rougeur ou mauvaise odeur entre les doigts de pied",
      "Réticence à marcher sur une surface qui leur convenait auparavant",
    ],
    whenToAskVet:
      "Une griffe déchirée, une coupure profonde ou une boiterie persistante justifie un appel. Si vous coupez une griffe trop court et qu'elle saigne, la poudre hémostatique et une pression douce la calment généralement — appelez votre vétérinaire si ce n'est pas le cas.",
    sources: [vetOrgs.rspca, vetOrgs.aaha],
  },

  /* -------------------------------------------------------------- Ears */
  {
    id: "ears",
    title: "Oreilles",
    promise: "Regardez, sentez. C'est la majeure partie des soins des oreilles.",
    category: "health",
    intro: [
      "Les oreilles saines sont d'un rose pâle à l'intérieur, sans beaucoup d'odeur. Connaître cette base est tout l'art.",
      "Les oreilles n'ont pas besoin d'un nettoyage en profondeur de routine. Piquer à l'intérieur d'une oreille saine a tendance à causer les problèmes qu'il est censé prévenir.",
    ],
    sections: [
      {
        title: "Le regard hebdomadaire",
        body: "Soulevez le pavillon, regardez à l'intérieur, sentez. Quelques secondes pendant que vous êtes déjà ensemble.",
        points: ["Rose pâle, pas d'odeur forte, pas de sécrétion", "Un peu de cérumen est normal", "Séchez les oreilles après la baignade ou un bain"],
      },
      {
        title: "Si votre vétérinaire vous a donné un nettoyant",
        body: "Utilisez son produit et ses instructions. N'enfoncez jamais de coton-tige dans le conduit auditif — vous tasserez les débris plus loin.",
      },
      {
        title: "Oreilles qui nécessitent plus d'attention",
        body: "Les oreilles tombantes, les canaux auditifs poilus et les chiens qui nagent beaucoup sont plus sujets aux problèmes. Cela dépend du chien individuel, pas seulement de la race.",
      },
    ],
    watchFor: [
      "Une odeur de levure ou aigre",
      "Rougeur ou gonflement à l'intérieur du pavillon",
      "Sécrétion brune, jaune ou sanglante",
      "Se gratter une oreille, ou la frotter contre le canapé",
      "Secouer ou pencher la tête",
      "Grimacer quand vous touchez l'oreille",
    ],
    whenToAskVet:
      "Les infections de l'oreille sont douloureuses et guérissent rarement d'elles-mêmes. Si quelque chose a une apparence ou une odeur suspecte, faites-le examiner plutôt que d'essayer des gouttes que vous avez dans un tiroir.",
    sources: [vetOrgs.rspca],
  },

  /* -------------------------------------------------------------- Eyes */
  {
    id: "eyes",
    title: "Yeux",
    promise: "Brillants, clairs et égaux. C'est ce que vous recherchez.",
    category: "health",
    intro: [
      "Un rapide coup d'œil aux yeux de votre chien pendant que vous lui dites bonjour le matin suffit la plupart du temps.",
      "Les yeux peuvent passer d'une irritation légère à une douleur intense rapidement, ce sont donc des choses sur lesquelles il vaut la peine d'être un peu prudent.",
    ],
    sections: [
      {
        title: "Ce à quoi ressemble la normale",
        body: "Clairs et brillants, blancs non injectés de sang, pupilles de même taille, pas de strabisme. Un peu de matière lacrymale claire ou grise dans les coins n'est généralement rien.",
      },
      {
        title: "Soins quotidiens",
        body: "Essuyez les croûtes avec du coton doux et de l'eau propre, une lingette par œil. Gardez les poils longs coupés loin des yeux. N'utilisez pas de gouttes oculaires humaines.",
      },
      {
        title: "Chiens au visage plat",
        body: "Les yeux proéminents sont plus exposés aux chocs, au dessèchement et aux ulcères. Si votre chien a un museau court, regardez un peu plus souvent.",
      },
    ],
    watchFor: [
      "Strabisme ou fermeture d'un œil",
      "Rougeur persistante",
      "Sécrétion verte ou jaune",
      "Opacité ou changement de couleur",
      "Se frotter le visage par terre",
      "Tout changement soudain, ou se cogner dans les objets",
    ],
    whenToAskVet:
      "Un œil douloureux ou soudainement changé nécessite un appel le jour même. Les problèmes de vision ont de meilleurs résultats lorsqu'ils sont détectés tôt.",
    sources: [vetOrgs.bva],
  },

  /* ---------------------------------------------------- Body condition */
  {
    id: "body-condition",
    title: "Condition corporelle",
    promise: "Le chiffre sur la balance compte moins que l'apparence et la sensation de votre chien sous vos mains.",
    category: "weight",
    intro: [
      "Deux chiens du même poids peuvent être dans des conditions complètement différentes. La condition corporelle est la façon dont les vétérinaires l'évaluent, et vous pouvez l'apprendre en une minute environ.",
      "Ceci est un guide, pas un diagnostic. La race et la morphologie modifient ce à quoi ressemble le 'bon' — un Lévrier et un Labrador en parfaite condition ne se ressemblent pas du tout.",
    ],
    steps: [
      {
        title: "Sentez les côtes",
        body: "Passez le bout de vos doigts le long du flanc de votre chien. Vous devriez sentir les côtes facilement sous une fine couche, un peu comme sentir les os au dos de votre main.",
        visual: "body-condition",
      },
      {
        title: "Regardez d'en haut",
        body: "Debout au-dessus de votre chien, recherchez un léger rétrécissement derrière les côtes. Un contour droit ou bombé suggère un peu de surplus.",
        visual: "body-condition",
      },
      {
        title: "Regardez de côté",
        body: "Le ventre doit remonter vers les pattes arrière plutôt que d'être au même niveau que la poitrine.",
      },
      {
        title: "Faites-le chaque mois",
        body: "Les changements surviennent lentement. Faire cela le même jour chaque mois rend la dérive évidente tant qu'elle est encore petite.",
      },
    ],
    sections: [
      {
        title: "Un peu lourd",
        body: "Côtes difficiles à sentir, taille difficile à voir, ventre plat. De petits changements fonctionnent : mesurez la nourriture, comptez les friandises, ajoutez dix minutes de marche.",
      },
      {
        title: "À peu près juste",
        body: "Côtes faciles à sentir, taille visible, ventre rentré. Continuez ce que vous faites.",
      },
      {
        title: "Un peu maigre",
        body: "Côtes, colonne vertébrale ou hanches saillantes, très peu de couverture. Vaut mieux consulter un vétérinaire plutôt que de simplement donner plus de nourriture — une perte de poids inexpliquée mérite un examen.",
      },
    ],
    whenToAskVet:
      "Votre vétérinaire peut vous aider à vérifier correctement la condition corporelle, et peut discuter d'un plan s'il y a du poids à perdre. Les changements soudains ou inexpliqués de poids méritent toujours une conversation.",
    sources: [vetOrgs.wsava, vetOrgs.aaha],
  },

  /* -------------------------------------------------------- Wellbeing */
  {
    id: "wellbeing",
    title: "Une bonne journée pour un chien",
    promise: "Une promenade, un peu de jeu, de la nourriture, beaucoup de sommeil et du temps avec vous comptent beaucoup.",
    category: "wellbeing",
    intro: [
      "Une bonne vie pour un chien n'a pas besoin d'être compliquée ou coûteuse. La plupart de ses éléments sont la routine, la compagnie et suffisamment de repos.",
      "Si vous ne changez qu'une chose, c'est généralement le sommeil. Beaucoup de 'problèmes de comportement' sont un chien fatigué qui n'a jamais la chance de se déconnecter correctement.",
    ],
    sections: [
      {
        title: "Sommeil",
        body: "Les chiens dorment beaucoup plus que la plupart des gens ne s'y attendent. Les chiots ont souvent besoin de 18 à 20 heures par jour, les adultes environ 12 à 14 heures, et les chiens plus âgés généralement plus encore.",
        points: ["Un endroit calme loin de la porte d'entrée et du passage de la maison", "Les siestes pendant la journée sont normales, pas de la paresse", "La stimulation constante est épuisante pour un chien, pas enrichissante"],
      },
      {
        title: "Renifler et réfléchir",
        body: "Dix minutes de reniflement approprié peuvent calmer un chien plus qu'une heure de course. Laissez les promenades être lentes parfois.",
        points: ["Éparpillez le dîner dans l'herbe", "Cachez des friandises dans une pièce et laissez-les chercher", "Un puzzle alimentaire ou une serviette roulée avec des croquettes à l'intérieur", "De nouveaux endroits calmes à explorer"],
      },
      {
        title: "Compagnie",
        body: "Les chiens sont sociaux. La plupart ont du mal avec de longues périodes seuls, et être seul est une compétence qui doit être enseignée progressivement plutôt que présumée.",
      },
      {
        title: "Journées prévisibles",
        body: "Des promenades, des repas et des heures de coucher à peu près réguliers rendent la vie plus facile à lire. Pas besoin que ce soit à la minute près.",
      },
      {
        title: "Temps calme",
        body: "Du temps où rien ne leur est demandé — pas d'entraînement, pas de visiteurs, pas de jeux. Chaque chien a besoin d'un peu de cela dans la journée.",
      },
    ],
    ageNotes: {
      puppy: "Les chiots se fatiguent vite et cela ressemble à de la malice — morsures, courses folles, ignorance de tout. Plus de sommeil résout généralement le problème.",
      adolescent: "Les chiens adolescents ont besoin de véritables exutoires : renifler, mâcher, s'entraîner, jouer. L'ennui se manifeste par la mastication de vos affaires à la place.",
      senior: "Des promenades plus courtes et plus fréquentes, une literie plus douce et des jeux cérébraux doux conviennent mieux aux chiens plus âgés que les longues sorties.",
    },
    sources: [vetOrgs.rspca],
  },

  /* --------------------------------------------------- Everyday check */
  {
    id: "everyday-check",
    title: "Connaissez ce qui est normal pour votre chien",
    promise: "Vous remarquerez un changement bien avant que quiconque d'autre ne le fasse. C'est vraiment précieux.",
    category: "health",
    intro: [
      "Vous n'avez pas besoin d'examiner votre chien. Vous avez juste besoin d'une idée générale de sa normalité — combien il mange, boit, bouge et dort.",
      "Quand quelque chose change, pouvoir dire 'cela a commencé mardi' aide énormément votre vétérinaire.",
    ],
    sections: [
      {
        title: "Appétit",
        body: "La plupart des chiens sont des mangeurs assez prévisibles. Sauter un repas arrive ; perdre l'appétit pendant un jour ou plus mérite attention.",
      },
      {
        title: "Boire",
        body: "Une augmentation ou une diminution claire de la consommation d'eau est l'un des signes précoces les plus utiles. Si vous n'êtes pas sûr, mesurez ce qui va dans la gamelle pendant quelques jours.",
      },
      {
        title: "Énergie",
        body: "Ralentir n'est pas seulement lié à l'âge. La réticence dans les escaliers, la raideur après le repos ou un intérêt moindre pour les promenades sont souvent des inconforts.",
      },
      {
        title: "Habitudes de toilettes",
        body: "Notez les changements de fréquence, les efforts, ou les selles molles qui durent plus d'un jour. Ce n'est pas un sujet agréable, mais c'est utile.",
      },
      {
        title: "Poids et pelage",
        body: "Poids mensuel, examen manuel mensuel. La qualité du pelage change souvent avant toute autre chose.",
      },
      {
        title: "Comportement",
        body: "Se cacher, être pot-de-colle, irritabilité ou agitation la nuit peuvent tous être des signes de douleur plutôt que d'humeur.",
      },
    ],
    whenToAskVet:
      "Un petit changement un jour donné n'est généralement rien. Un changement qui dure plus d'un jour ou deux, ou plusieurs changements à la fois, mérite un appel téléphonique.",
    sources: [vetOrgs.aaha],
  },

  /* -------------------------------------------- Something seems different */
  {
    id: "something-different",
    title: "Quelque chose semble différent ?",
    promise: "Un endroit calme pour déterminer s'il faut attendre et voir, ou appeler le vétérinaire.",
    category: "health",
    intro: [
      "Ceci est une information générale, pas un diagnostic. Certains changements sont inoffensifs et d'autres non, et la différence n'est souvent pas évidente de l'extérieur.",
      "Si vous êtes inquiet, ou si le changement est apparu soudainement ou sévèrement, contactez votre vétérinaire. L'inquiétude seule est une bonne raison d'appeler.",
    ],
    sections: [
      {
        title: "Perte d'appétit",
        body: "Un repas sauté chez un chien par ailleurs vif est courant. Appelez votre vétérinaire si cela dure plus d'environ 24 heures, si un chiot saute des repas, ou s'il y a des vomissements, de la léthargie ou un ventre gonflé en plus.",
      },
      {
        title: "Boire beaucoup plus ou moins",
        body: "Un changement clair qui dure plus de quelques jours mérite d'être investigué plutôt que surveillé. Notez à peu près la quantité.",
      },
      {
        title: "Vomissements",
        body: "Un vomissement, puis retour à la normale, se règle souvent. Appelez s'ils sont répétés, s'ils ne peuvent pas garder l'eau, s'il y a du sang, s'ils essaient de vomir sans rien produire, ou s'ils ont pu ingérer quelque chose.",
      },
      {
        title: "Diarrhée",
        body: "Légère et de courte durée est courante. Appelez si cela dure plus d'un jour ou deux, contient du sang, ou s'accompagne de vomissements, de douleur ou d'un chien abattu et fatigué — et plus tôt pour les chiots et les chiens âgés, qui se déshydratent rapidement.",
      },
      {
        title: "Toux",
        body: "Une toux occasionnelle après avoir tiré sur une laisse est différente d'une toux qui persiste. Une toux persistante, une toux nocturne, ou toute difficulté respiratoire nécessite un vétérinaire.",
      },
      {
        title: "Démangeaisons",
        body: "Se gratter, se lécher ou se mordre constamment est inconfortable et a généralement une cause qui mérite d'être trouvée — parasites, infection cutanée ou allergie. Cela se résout rarement avec un shampooing seul.",
      },
      {
        title: "Boiterie",
        body: "Une boiterie légère qui se résorbe en un jour avec du repos peut être surveillée. Une boiterie sans appui, une douleur évidente, un gonflement ou une boiterie qui dure doit être examinée.",
      },
      {
        title: "Fatigue inhabituelle",
        body: "Une journée calme arrive. Un chien qui refuse de se lever, qui est instable, ou qui est beaucoup plus abattu que d'habitude doit être vu rapidement.",
      },
    ],
    whenToAskVet:
      "Votre vétérinaire préfère vous entendre tôt plutôt que tard. Décrire ce qui a changé, quand cela a commencé et ce qui est différent de la normale est exactement ce dont il a besoin.",
    sources: [vetOrgs.bva, vetOrgs.aaha],
  },

  /* ---------------------------------------------------------- Emergency */
  {
    id: "emergency",
    title: "Quand cela ne peut pas attendre",
    promise: "La courte liste des choses qui nécessitent d'appeler un vétérinaire immédiatement, à toute heure.",
    category: "health",
    intro: [
      "Gardez le numéro de votre vétérinaire et celui de votre clinique d'urgence la plus proche dans un endroit que vous pouvez trouver sans réfléchir. Enregistrez-les dans votre téléphone maintenant.",
      "Dans ces situations, appelez d'abord et allez-y. N'attendez pas de voir comment les choses évoluent, et n'essayez pas de remèdes maison.",
    ],
    sections: [
      {
        title: "Appelez un vétérinaire immédiatement",
        body: "N'importe lequel de ces signes nécessite une aide professionnelle urgente, de jour comme de nuit.",
        points: [
          "Difficulté à respirer, étouffement, ou gencives bleues ou très pâles",
          "Effondrement, perte de conscience, ou faiblesse soudaine",
          "Saignement qui ne s'arrête pas",
          "Intoxication suspectée, ou ingestion de quelque chose qu'ils n'auraient pas dû manger",
          "Une crise, ou des crises répétées",
          "Être heurté par une voiture, une chute, ou toute blessure grave",
          "Efforts pour uriner sans produire rien",
          "Un ventre gonflé et dur avec des haut-le-cœur et pas de vomissements",
          "Signes de coup de chaleur : halètement intense, détresse, effondrement par temps chaud",
          "Douleur soudaine et intense, ou un chien qui ne trouve pas le repos du tout",
        ],
      },
      {
        title: "Intoxication suspectée",
        body: "Appelez votre vétérinaire ou une ligne d'information sur les poisons pour animaux immédiatement, et dites-leur quoi, combien et quand. Prenez l'emballage avec vous. N'essayez pas de faire vomir votre chien à moins qu'un vétérinaire ne vous le dise — avec certaines substances, cela cause plus de tort.",
      },
      {
        title: "En route",
        body: "Gardez votre chien calme, au chaud et immobile. Conduisez prudemment. Téléphonez à l'avance pour que la clinique soit prête pour vous.",
      },
    ],
    whenToAskVet:
      "Si vous lisez ceci et vous demandez si cela compte, appelez. Personne dans un cabinet vétérinaire ne se soucie d'un appel qui s'avère être rien.",
    sources: [vetOrgs.bva, vetOrgs.rspca],
  },
];
