import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

const G = "Repères généraux, pas un avis vétérinaire.";
const h = (text: string) => `${text} ${G}`;

export const breedDeepDiveMoreFr: Partial<Record<BreedId, BreedDeepDive>> = {
  whippet: {
    originalPurpose:
      "Le whippet a été créé au XIXe siècle dans le nord de l'Angleterre par des familles d'ouvriers d'usine et de mineurs qui voulaient un petit chien rapide pour les courses et la chasse au lapin – le « cheval de course du pauvre ».",
    healthConsiderations: h(
      "Le whippet est en général une race robuste et longévive, mais sa peau fine se déchire facilement et son corps mince a vite froid : un manteau les jours de gel est une attention bienvenue. Les lévriers peuvent réagir autrement à l'anesthésie, alors mentionnez la race à tout vétérinaire. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous lâcheriez votre chien près de lapins, de chats ou de la circulation en espérant que tout aille bien",
      "Vous voulez un chien à l'aise dehors ou dans une maison fraîche",
      "Votre jardin n'est pas clôturé et vous n'avez aucun endroit sûr pour un vrai sprint",
    ],
    keyTradeoffs: [
      "Calme et propre à l'intérieur, stupéfiant dehors – il vous faut à la fois un canapé et un champ sûr",
      "Doux et silencieux, avec un instinct de poursuite qu'aucun dressage n'éteint tout à fait",
    ],
  },
  greyhound: {
    originalPurpose:
      "Le greyhound est l'un des plus anciens types de lévriers, sélectionné depuis des millénaires pour rattraper les lièvres à vue. Plus récemment, il a été chien de course, et beaucoup d'anciens coureurs trouvent aujourd'hui un foyer comme chiens de famille.",
    healthConsiderations: h(
      "Le greyhound est mince, avec une peau fine et peu de graisse, donc il a froid et peut avoir des escarres sur un sol dur – un lit moelleux compte. Les dents demandent souvent des soins réguliers, et chez les chiens à poitrine profonde comme lui, on surveille couramment la torsion d'estomac. Les anciens coureurs peuvent avoir de vieilles blessures : demandez à l'association ce qu'elle sait et parlez-en à votre vétérinaire.",
    ),
    poorMatchFor: [
      "Vous voulez lâcher votre chien dans un parc non clôturé",
      "Vous vivez avec un chat ou de petits animaux et ne pouvez pas les tenir séparés",
      "Vous voulez un chien qui reste au chaud dehors par une journée d'hiver",
    ],
    keyTradeoffs: [
      "L'un des chiens les plus doux et les plus silencieux qui soient, endormi sur le canapé une bonne partie de la journée, et fait pour piquer un sprint dès que quelque chose de petit détale",
      "Un grand chien dans un corps tranquille : facile à l'intérieur, et beaucoup de chien au bout de la laisse s'il part en flèche",
    ],
  },
  poodle: {
    originalPurpose:
      "Le caniche a commencé comme chien d'eau allemand rapportant des canards aux chasseurs, puis il est devenu un compagnon adoré en France, où c'est le chien le plus célèbre. La fameuse coupe de concours aurait commencé comme une coupe pratique pour nager.",
    healthConsiderations: h(
      "Hanches, yeux et peau sont les questions habituelles, et chez les chiens à poitrine profonde comme le caniche grand, on surveille couramment la torsion d'estomac. Le poil feutre sans brossage régulier, et les oreilles méritent un coup d'œil aussi. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Un toiletteur toutes les six à huit semaines et un brossage presque quotidien ne rentrent pas dans votre vie",
      "Vous voulez un chien qui accepte d'être ignoré une journée",
      "Vous préférez ne pas consacrer de temps à donner de quoi réfléchir à un chien intelligent",
    ],
    keyTradeoffs: [
      "Rapide, désireux de plaire et peu perdeur de poils, avec un poil qui demande un vrai soin régulier",
      "Un penseur sérieux : brillant à éduquer, et plein d'idées quand il s'ennuie",
    ],
  },
  "bichon-frise": {
    originalPurpose:
      "Les bichons descendent de petits chiens d'eau du bassin méditerranéen, et ils sont gardés depuis des siècles comme compagnons dans le sud de l'Europe.",
    healthConsiderations: h(
      "Dents, peau et rotules sont les points habituels chez une petite race au poil clair : les soins dentaires sont une routine, et les allergies cutanées se voient souvent. Une routine de toilettage courte et régulière compte. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous auriez du mal à suivre le brossage et un toilettage professionnel toutes les six à huit semaines",
      "Votre chien serait seul une longue journée de travail, la plupart des jours",
      "Vous voulez un chien qui se contente d'être laissé à lui-même",
    ],
    keyTradeoffs: [
      "Joyeux, amical et peu perdeur de poils, avec un poil qui ne cesse jamais de demander de l'attention",
      "Le plus heureux là où vous êtes, et le plus malheureux quand vous partez",
    ],
  },
  maltese: {
    originalPurpose:
      "Le bichon maltais est l'un des plus anciens petits chiens de compagnie d'Europe, gardé depuis des siècles comme chien de salon et apprécié pour son long poil blanc et son dévouement à sa personne.",
    healthConsiderations: h(
      "Dents, rotules et traces de larmes se voient souvent chez les petits chiens blancs, et le poil fin s'emmêle vite. Un tout petit chien se fatigue et a froid plus vite qu'on ne le croit. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Un brossage quotidien ne rentre pas dans votre routine",
      "Vous voulez un chien qui reste silencieux quand on sonne à la porte",
      "Votre chien serait seul de longues périodes",
    ],
    keyTradeoffs: [
      "Minuscule, doux et très loyal, avec un aboiement plus grand que lui",
      "Un poil qui semble ne rien demander et qui demande un effort chaque jour",
    ],
  },
  havanese: {
    originalPurpose:
      "Le bichon havanais est le chien national de Cuba, descendant de petits chiens de type bichon arrivés sur l'île et devenus compagnons dans des foyers aisés.",
    healthConsiderations: h(
      "Rotules, yeux et hanches sont les questions habituelles chez une petite race longévive, et le poil soyeux s'emmêle sans brossage régulier. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Votre chien serait seul la majeure partie d'une journée de travail",
      "Vous n'avez pas le temps pour un brossage régulier",
      "Vous voulez un chien content en arrière-plan pendant que vous vaquez à votre journée",
    ],
    keyTradeoffs: [
      "Sociable, prompt à apprendre et joyeuse compagnie – et il veut vraiment votre compagnie toute la journée",
      "Léger en laisse et facile à porter, avec un poil qui demande une vraie routine",
    ],
  },
  "italian-greyhound": {
    originalPurpose:
      "Le petit lévrier italien est un lévrier miniature, gardé depuis des siècles comme compagnon et particulièrement en vogue dans les cours de la Renaissance italienne.",
    healthConsiderations: h(
      "Les pattes sont très fines : demandez à un vétérinaire comment garder sauts et jeux brusques sans danger, et pensez aux escaliers et aux canapés. Les dents demandent des soins réguliers, et un poil fin veut dire un vrai équipement pour le froid. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous avez de jeunes enfants qui adoreraient soulever le chien ou chahuter avec lui",
      "Vous voulez un chien qui prend une balade froide et mouillée avec bonne humeur",
      "Votre chien serait seul de longues journées",
    ],
    keyTradeoffs: [
      "Petit, silencieux et tendrement affectueux, et plus fragile qu'il n'y paraît",
      "Adore les genoux et une couverture, et une course à travers un champ tout autant",
    ],
  },
  pug: {
    originalPurpose:
      "Les carlins viennent de Chine, où de petits chiens à museau plat étaient gardés comme compagnons par les empereurs, puis ils ont gagné l'Europe avec les marchands hollandais et sont devenus chiens de salon dans de nombreuses maisons royales.",
    healthConsiderations: h(
      "Les chiens à museau plat ont souvent des difficultés respiratoires et supportent mal la chaleur – le risque de coup de chaleur fait partie des préoccupations de bien-être que soulève la British Veterinary Association – et les yeux, les plis de la peau et le poids demandent une attention régulière. Si vous vous lancez quand même, choisissez un chiot aux narines ouvertes et au museau plus long, prévoyez une assurance, et lisez le profil de la race puis demandez à un vétérinaire.",
    ),
    poorMatchFor: [
      "Vos étés sont chauds et il n'y a pas de pièce fraîche pour le chien",
      "Une facture vétérinaire imprévue de plusieurs milliers d'euros vous mettrait sous une vraie pression",
      "Vous voulez un chien qui court ou randonne avec vous",
    ],
    keyTradeoffs: [
      "Drôle, affectueux et content de courtes balades, et souvent avec de vrais soucis de respiration et de chaleur",
      "Le museau écrasé qui gagne tous les cœurs est aussi derrière la plupart des soucis de santé",
    ],
  },
  "shih-tzu": {
    originalPurpose:
      "Les shih tzus ont été sélectionnés comme compagnons pour la cour impériale chinoise, avec des racines tibétaines, et leur nom signifie « chien-lion ». Ce sont des chiens de salon depuis très longtemps.",
    healthConsiderations: h(
      "Comme race à museau plat, elle demande de l'attention pour la respiration et la chaleur – le risque de coup de chaleur fait partie des préoccupations de bien-être que soulève la British Veterinary Association – et les grands yeux, les oreilles et la peau sous le poil doivent être vérifiés régulièrement. Le long poil feutre vite, ce qui explique que beaucoup choisissent une coupe courte. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Un toilettage régulier, ou une coupe courte toutes les quelques semaines, ne rentre pas dans votre routine",
      "Vous vivez dans un endroit chaud sans coin frais",
      "Vous voulez un chien vite et facilement propre",
    ],
    keyTradeoffs: [
      "Un chien de salon joyeux et amoureux des gens, dont le poil et le museau demandent tous deux des soins quotidiens",
      "Une tête de mule sous le poil duveteux : un dressage patient, à base de friandises, marche le mieux",
    ],
  },
  "golden-retriever": {
    originalPurpose:
      "Les golden retrievers ont été développés dans les Highlands écossaises au XIXe siècle pour rapporter le gibier à plumes abattu depuis un terrain difficile et une eau froide, et la gueule douce et l'envie de plaire viennent de ce travail.",
    healthConsiderations: h(
      "Hanches, coudes, yeux et cœur sont les questions habituelles, et le cancer se voit souvent dans la race – une raison pour laquelle un bon éleveur vaut la peine d'attendre. Le poil et les oreilles demandent des soins réguliers, et le poids compte. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous voulez un chien qui reste propre et perd peu de poils",
      "Votre chien serait seul à la maison toute une journée de travail, la plupart des jours",
      "Vous voulez un chien de garde",
    ],
    keyTradeoffs: [
      "Amical avec presque tout le monde et désireux de plaire, ce qui en fait de merveilleux chiens de famille et de piètres gardiens",
      "Facile à éduquer et toujours prêt à porter quelque chose en gueule, donc l'envie de mordiller demande à être guidée avec douceur",
    ],
  },
  "boston-terrier": {
    originalPurpose:
      "Le boston terrier est né à Boston à la fin du XIXe siècle de croisements entre bouledogues anglais et terriers, et il est devenu l'une des premières races de compagnie créées en Amérique.",
    healthConsiderations: h(
      "C'est une race au museau court, donc la respiration, la chaleur et les yeux demandent de l'attention – le risque de coup de chaleur fait partie des préoccupations de bien-être que soulève la British Veterinary Association – et beaucoup de portées ont besoin d'aide pour naître. Rotules et allergies cutanées méritent aussi une question. Choisissez si possible un chiot aux narines ouvertes et au museau plus long, et lisez le profil de la race puis demandez à un vétérinaire.",
    ),
    poorMatchFor: [
      "Il fait très chaud chez vous l'été et vous ne pouvez pas garder le chien au frais",
      "Vous préférez ne pas partager une chambre avec des ronflements",
      "Vous cherchez un partenaire de course ou de randonnée par temps chaud",
    ],
    keyTradeoffs: [
      "Vif, amical et soigné, avec un nez court qui limite la chaleur et l'exercice qu'il supporte",
      "Joueur et clown, et pas tout à fait aussi robuste que son tempérament bondissant le laisse croire",
    ],
  },
  papillon: {
    originalPurpose:
      "Les papillons sont de petits épagneuls nains d'Europe continentale, nommés d'après leurs oreilles en forme d'ailes de papillon, et on les voit dans de nombreux tableaux anciens comme compagnons de familles nobles.",
    healthConsiderations: h(
      "C'est une petite race souvent longévive, et rotules, dents et yeux sont les questions habituelles. Leur ossature légère fait qu'il vaut mieux surveiller les sauts depuis les meubles. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous voulez un chien qui reste silencieux à la porte ou à la fenêtre",
      "Votre chien serait seul de longues journées",
      "Vous préférez ne pas faire d'exercices réguliers pour occuper un esprit vif",
    ],
    keyTradeoffs: [
      "Vif, éducable et plein d'entrain pour sa taille, et prompt à aboyer au moindre bruit",
      "Assez petit pour être porté, assez malin pour s'ennuyer si vous ne lui donnez rien à faire",
    ],
  },
  "lhasa-apso": {
    originalPurpose:
      "Le lhassa apso vient du Tibet, où de petits chiens servaient de sentinelles à l'intérieur des maisons et des monastères – silencieux la plupart de la journée, et prompts à donner l'alerte.",
    healthConsiderations: h(
      "Les yeux, la peau, ainsi que les oreilles et les pattes sous le long poil demandent des contrôles réguliers, et le poil feutre vite sans brossage, ce qui explique que beaucoup choisissent une coupe courte. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Des aboiements à chaque coup à la porte et à chaque bruit vous pousseraient à bout, vous ou vos voisins",
      "Vous ne tiendriez pas le rythme du brossage",
      "Vous voulez un chien qui adore les inconnus",
    ],
    keyTradeoffs: [
      "Un petit gardien digne et dévoué, avec des opinions sur les visiteurs",
      "Indépendant et parfois têtu : récompenses et patience valent mieux que la répétition",
    ],
  },
  "miniature-schnauzer": {
    originalPurpose:
      "Le schnauzer nain a été créé en Allemagne à la fin du XIXe siècle à partir de schnauzers plus petits, comme chien de ferme et ratier, ce qui explique le caractère alerte, sautillant, qui aboie d'abord.",
    healthConsiderations: h(
      "Les yeux et les calculs urinaires sont souvent évoqués pour la race, et les friandises grasses peuvent fatiguer le pancréas, donc une alimentation simple et un poids stable comptent. Le poil dur demande un toilettage régulier. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous voulez un chien calme qui ne réagit pas aux allées et venues des voisins",
      "Un toilettage régulier et des passages chez le toiletteur ne rentrent pas dans votre routine",
      "Vous préférez ne pas gérer les aboiements d'un petit chien",
    ],
    keyTradeoffs: [
      "Robuste, malin et peu perdeur de poils, avec un aboiement qui arrive avant la sonnette",
      "Excellent pour apprendre, et un terrier dans l'âme : pas timide pour donner son avis",
    ],
  },
  labradoodle: {
    originalPurpose:
      "Le labradoodle est un croisement labrador–caniche, d'abord créé en Australie à la fin des années 1980 pour associer le tempérament d'un chien guide à un poil qui perd moins. C'est un croisement, pas une race reconnue, et les portées varient.",
    healthConsiderations: h(
      "Un croisé n'est pas automatiquement en meilleure santé : un labradoodle peut hériter des deux côtés, donc hanches, coudes, yeux, oreilles et peau méritent des questions. Le poil varie beaucoup, et beaucoup demandent un brossage et un toilettage réguliers. Demandez à l'éleveur quels tests de santé ont passés les deux parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous avez besoin d'un poil garanti peu perdeur ou adapté aux allergiques",
      "Vous auriez du mal à entretenir régulièrement un poil bouclé",
      "Vous voulez un chien facile à prévoir d'après une description de race",
    ],
    keyTradeoffs: [
      "Amical, vif et souvent facile à vivre, et chaque portée est un peu différente",
      "Bondit comme un labrador et pense comme un caniche : une énergie qui a besoin d'un exutoire quotidien",
    ],
  },
  cavapoo: {
    originalPurpose:
      "Le cavapoo est un croisement cavalier king charles–caniche, apprécié comme petit compagnon câlin depuis le début des années 2000. C'est un croisement, pas une race reconnue, et les portées varient.",
    healthConsiderations: h(
      "Un cavapoo peut hériter des deux côtés, donc demandez quels tests de santé ont passés les deux parents – cœur, yeux, rotules et poil méritent tous une question. Le poil feutre sans brossage régulier. Lisez le profil de la race et demandez à un vétérinaire.",
    ),
    poorMatchFor: [
      "Votre chien serait seul toute une journée de travail",
      "Vous voulez un chien dont vous pouvez prévoir le type de poil et la taille",
      "Vous aimeriez vous passer d'un toilettage régulier",
    ],
    keyTradeoffs: [
      "Affectueux et sociable, et souvent très demandeur de compagnie – parfois trop pour être laissé seul",
      "Doux et malin, avec un poil qui demande une vraie routine",
    ],
  },
  "yorkshire-terrier": {
    originalPurpose:
      "Les yorkshires terriers ont été créés au XIXe siècle par des ouvriers d'usine du Yorkshire et du Lancashire pour attraper les rats. Il y a loin de là au chien de salon au poil soyeux, mais le terrier est toujours là.",
    healthConsiderations: h(
      "Rotules, dents et trachée sensible au collier sont les questions habituelles chez les petits chiens, c'est pourquoi beaucoup utilisent un harnais. Le poil fin demande un brossage ou une coupe réguliers. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous voulez un chien qui laisse les autres chiens tranquilles, quelle que soit leur taille",
      "Vous préférez ne pas brosser ni tondre régulièrement",
      "Vous voulez un chien calme que rien ne pousse à aboyer",
    ],
    keyTradeoffs: [
      "Un petit chien avec une attitude de grand : courageux, vif et sûr de lui",
      "Soyeux, peu perdeur de poils et terrier à plein temps",
    ],
  },
  "siberian-husky": {
    originalPurpose:
      "Les huskies ont été créés par les Tchouktches du nord-est de la Sibérie comme chiens de traîneau, conçus pour tirer de légères charges sur de longues distances dans un froid mordant, et ils adorent toujours courir.",
    healthConsiderations: h(
      "C'est une race assez robuste ; yeux et hanches sont les questions habituelles, et un pelage épais fait de la chaleur une vraie préoccupation par temps chaud. Ils perdent aussi beaucoup de poils deux fois par an. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous voulez un chien qui revient à chaque fois quand il est lâché",
      "Votre logement est chaud, ou vos journées laissent peu de temps pour courir",
      "Vous voulez un chien calme, facile à garder en appartement",
    ],
    keyTradeoffs: [
      "Amical, spectaculaire et plein d'endurance, et un vrai artiste de l'évasion qui hurle plutôt qu'il n'aboie",
      "Adore courir avec vous, et en a besoin de beaucoup, quel que soit le temps",
    ],
  },
  "pembroke-welsh-corgi": {
    originalPurpose:
      "Les corgis pembroke viennent du Pembrokeshire, au pays de Galles, où ils menaient le bétail en pinçant les talons et en esquivant les coups de sabot, et ce côté bas, vif et autoritaire n'a pas disparu.",
    healthConsiderations: h(
      "Un dos long et des pattes courtes font que le poids et les sauts méritent de l'attention, et hanches et yeux sont les questions habituelles. Ils perdent beaucoup de poils, toute l'année. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Escaliers, sauts et prise de poids vont mal avec un dos long",
      "Vous voulez un chien qui laisse tranquilles chevilles et enfants",
      "Vous ne voulez pas de poils de chien partout",
    ],
    keyTradeoffs: [
      "Malin, gai et plus costaud qu'il n'en a l'air, et un berger qui peut essayer de mener vos enfants et vous",
      "Adore la nourriture et les jeux, et les kilos en trop pèsent sur ce long dos",
    ],
  },
  "shiba-inu": {
    originalPurpose:
      "Le shiba inu est une petite race japonaise de type spitz, employée à l'origine pour chasser oiseaux et petit gibier dans les montagnes, et il a toujours une façon fière, indépendante, presque féline d'être.",
    healthConsiderations: h(
      "Allergies, yeux, rotules et hanches sont les questions habituelles dans la race, et ils perdent beaucoup de poils deux fois par an. Demandez à l'éleveur quels tests de santé ont passés les parents, et lisez le profil de la race.",
    ),
    poorMatchFor: [
      "Vous voulez un chien qui vient quand on l'appelle et peut être lâché",
      "Vous voulez un chien qui adore être touché par tout le monde",
      "Vous préférez ne pas passer de temps sur un dressage patient, basé sur la récompense",
    ],
    keyTradeoffs: [
      "Propre, digne et discrètement affectueux, avec une volonté bien à lui",
      "Indépendant jusqu'à l'entêtement : le dressage est une conversation, pas un ordre",
    ],
  },
};
