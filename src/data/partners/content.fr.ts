/** French copy for the "Become a DoggMatch Partner" page. Same shape as content.en.ts. */
import type { PartnerCategory } from "./content.en";

export const partnerCategories: PartnerCategory[] = [
  { id: "equipment", label: "Équipement pour chiens", blurb: "Harnais, laisses, paniers, jouets et les objets du quotidien qui s'usent." },
  { id: "grooming", label: "Toilettage", blurb: "Salons et toiletteurs à domicile qui prennent leur temps avec les chiens anxieux." },
  { id: "training", label: "Éducation", blurb: "Cours pour chiots, accompagnement individuel et travail comportemental basé sur la récompense." },
  { id: "vet", label: "Vétérinaires & santé", blurb: "Cliniques, kinés, dentistes et tous ceux qui gardent les chiens en bonne santé." },
  { id: "insurance", label: "Assurance", blurb: "Une couverture claire sur ce qu'elle prend en charge et ce qu'elle ne prend pas." },
  { id: "boarding", label: "Pension & garderie", blurb: "Pensions, familles d'accueil, garderies et pet-sitters de confiance." },
  { id: "food", label: "Alimentation & nutrition", blurb: "Nourriture, friandises et compléments que vous donneriez à votre propre chien." },
  { id: "travel", label: "Voyages & activités", blurb: "Hébergements acceptant les chiens, équipement auto, randonnées, baignades et sorties." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Touchez des propriétaires réellement en recherche",
    body: "Les gens viennent sur DoggMatch pendant qu'ils choisissent un chien, l'installent, ou cherchent de l'aide pour l'alimentation, l'éducation et les voyages. Vous obtenez une présentation réfléchie au moment précis où ils ont vraiment besoin de vous.",
  },
  {
    id: "listing",
    title: "Votre propre place dans les Avantages Membres",
    body: "Une véritable fiche dans l'espace membres : qui vous êtes, ce que vous proposez, où c'est utilisable, et un lien direct vers vous. Plus utile qu'un logo perdu parmi d'autres.",
  },
  {
    id: "offer",
    title: "Une offre que vous façonnez vous-même",
    body: "Une réduction en pourcentage, une première séance gratuite, une mise à niveau ou un forfait — ce qui convient le mieux à votre activité. Vous décidez de chaque détail, et vous pouvez la modifier ou la suspendre quand vous voulez.",
  },
  {
    id: "branding",
    title: "Une identité de partenaire à utiliser",
    body: "Un badge Partenaire DoggMatch pour votre vitrine, votre site et vos réseaux sociaux, pour que les clients reconnaissent une entreprise que nous sommes fiers de recommander.",
  },
  {
    id: "verification",
    title: "Une vérification qui prend deux secondes",
    body: "Les membres portent une carte DoggMatch+ avec un code QR. Scannez-le, vérifiez si l'adhésion est active, et accueillez-les. Pas d'application, pas de connexion, pas de paperasse.",
  },
  {
    id: "no-cost",
    title: "Un avantage pour vos clients aussi",
    body: "Nous offrons à vos clients 25 % de réduction sur DoggMatch+ pour leur première année. Cela ne vous coûte rien, et vous continuez de décider entièrement de l'avantage que vous offrez à nos membres. Il n'y a aucun frais d'inscription ni commission.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Parlez-nous de votre entreprise",
    body: "Le court formulaire ci-dessous suffit pour commencer. Dites-nous qui vous êtes, où vous êtes basé, et vos premières idées d'offre — cela n'a pas besoin d'être définitif.",
  },
  {
    no: "02",
    title: "Nous avons une vraie conversation",
    body: "Une vraie personne lit votre message et vous répond. Nous discuterons des détails et vérifierons que cela convient dans les deux sens — pour vous et pour nos membres.",
  },
  {
    no: "03",
    title: "Nous rédigeons votre fiche ensemble",
    body: "Nous assemblons avec vous les textes, l'offre et les détails pratiques. Vous validez tout avant la mise en ligne, et rien n'est publié sans votre accord.",
  },
  {
    no: "04",
    title: "Nous vous présentons à nos membres",
    body: "Votre offre apparaît dans les Avantages Membres, vous recevez le badge partenaire et votre code client, et les membres peuvent montrer leur carte QR lors de leur visite.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Combien coûte le fait de devenir partenaire ?",
    a: "Rien. Il n'y a pas de frais d'inscription ni de commission. Votre contribution est la réduction ou l'avantage que vous offrez aux membres.",
  },
  {
    q: "Que me coûte la réduction de 25 % pour mes clients ?",
    a: "Rien. Nous offrons à vos clients une réduction la première année sur DoggMatch+. Vous continuez de décider entièrement de l'avantage que vous souhaitez offrir à nos membres.",
  },
  {
    q: "Comment vérifier que quelqu'un est vraiment membre ?",
    a: "Chaque membre DoggMatch+ possède une carte avec un code QR. Le scanner ouvre une page qui indique seulement si l'adhésion est active et jusqu'à quand — aucune donnée personnelle.",
  },
  {
    q: "Puis-je modifier ou arrêter mon offre plus tard ?",
    a: "Oui, quand vous voulez. Écrivez-nous et nous mettrons à jour ou suspendrons votre fiche. Nous vous demandons simplement d'honorer ce qui a déjà été promis.",
  },
  {
    q: "Nous ne sommes pas en Norvège — pouvons-nous quand même rejoindre ?",
    a: "Oui. DoggMatch est utilisé à l'international, et les Avantages Membres sont affichés avec le pays où ils s'appliquent. Les boutiques en ligne qui livrent largement sont également les bienvenues.",
  },
  {
    q: "Combien de membres le verront ?",
    a: "Nous ne vous donnerons pas un chiffre que nous ne pourrions pas assumer. DoggMatch+ est jeune et en croissance, et nous préférons être honnêtes à ce sujet plutôt que d'en faire trop.",
  },
  {
    q: "Quel type d'entreprises refusez-vous ?",
    a: "Tout ce qui repose sur des méthodes d'éducation coercitives, ou des produits que nous ne recommanderions pas à l'aise à un ami ayant un chien. Nous préférons une courte liste en laquelle nous avons confiance.",
  },
] as const;
