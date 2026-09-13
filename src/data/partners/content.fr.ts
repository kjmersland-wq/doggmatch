/**
 * Copy for the "Become a DoggMatch Partner" page.
 * English is the source language — a sibling file per locale keeps the same shape.
 * Voice: warm, honest, human. Never salesy.
 */
export type PartnerCategory = {
  id: string;
  label: string;
  blurb: string;
};

export const partnerCategories: PartnerCategory[] = [
  {
    id: "equipment",
    label: "Équipement pour animaux et chiens",
    blurb: "Harnais, laisses, paniers, jouets et tout le nécessaire du quotidien qui s'use.",
  },
  {
    id: "grooming",
    label: "Toilettage",
    blurb: "Salons et toiletteurs mobiles qui prennent leur temps avec les chiens nerveux.",
  },
  {
    id: "training",
    label: "Éducation",
    blurb: "Cours pour chiots, aide individuelle et travail comportemental basé sur la récompense.",
  },
  {
    id: "vet",
    label: "Vétérinaire et santé",
    blurb:
      "Cliniques, physiothérapeutes, dentistes et tous ceux qui veillent au bien-être des chiens.",
  },
  {
    id: "insurance",
    label: "Assurance",
    blurb:
      "Couvertures claires sur ce qu'elles prennent en charge et ce qu'elles ne prennent pas en charge.",
  },
  {
    id: "boarding",
    label: "Garde et garderie",
    blurb: "Chenils, familles d'accueil, garderies et pet-sitters de confiance.",
  },
  {
    id: "food",
    label: "Alimentation et nutrition",
    blurb: "Nourriture, friandises et suppléments que vous donneriez à votre propre chien.",
  },
  {
    id: "travel",
    label: "Voyages et activités",
    blurb: "Séjours acceptant les chiens, kits de voiture, randonnées, baignades et sorties.",
  },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Atteignez des propriétaires qui cherchent vraiment",
    body: "Les gens viennent sur DoggMatch lorsqu'ils choisissent un chien, s'en occupent, ou cherchent de l'aide pour l'alimentation, l'éducation et les voyages. Vous bénéficiez d'une introduction réfléchie au moment où ils ont vraiment besoin de vous.",
  },
  {
    id: "listing",
    title: "Votre propre espace dans les Avantages Membres",
    body: "Une fiche complète dans l'espace membres : qui vous êtes, ce que vous proposez, où cela s'applique, et un lien direct vers vous. Plus utile qu'un logo parmi une multitude de logos.",
  },
  {
    id: "offer",
    title: "Une offre que vous façonnez",
    body: "Un pourcentage de réduction, une première séance gratuite, une mise à niveau ou un forfait — ce qui convient le mieux à votre entreprise. Vous décidez de chaque détail, et vous pouvez le modifier ou le suspendre quand vous le souhaitez.",
  },
  {
    id: "branding",
    title: "Un branding partenaire que vous pouvez utiliser",
    body: "Un badge Partenaire DoggMatch pour votre vitrine, votre site web et vos réseaux sociaux, afin que les clients puissent reconnaître une entreprise que nous sommes heureux de soutenir.",
  },
  {
    id: "verification",
    title: "Une vérification qui prend deux secondes",
    body: "Les membres portent une carte DoggMatch+ avec un code QR. Scannez-la, vérifiez si l'adhésion est active, et accueillez-les. Pas d'application, pas de connexion, pas de paperasse.",
  },
  {
    id: "no-cost",
    title: "Un avantage aussi pour vos clients",
    body: "Nous offrons à vos clients 25 % de réduction sur DoggMatch+ pour leur première année. Cela ne vous coûte rien, et vous décidez toujours entièrement de l'avantage que vous offrez à nos membres. Il n'y a pas de frais d'inscription ni de commission.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Parlez-nous de votre entreprise",
    body: "Le court formulaire ci-dessous suffit pour commencer. Dites-nous qui vous êtes, où vous êtes basé, et toute première idée que vous avez concernant une offre — elle n'a pas besoin d'être définitive.",
  },
  {
    no: "02",
    title: "Nous avons une vraie conversation",
    body: "Une personne réelle lit votre message et vous répond. Nous discuterons des détails et nous assurerons que cela convienne aux deux parties — à vous et à nos membres.",
  },
  {
    no: "03",
    title: "Nous rédigeons votre fiche ensemble",
    body: "Nous mettons les mots, l'offre et les détails pratiques en place avec vous. Vous approuvez tout avant sa mise en ligne, et rien n'est publié sans votre accord.",
  },
  {
    no: "04",
    title: "Nous vous présentons aux membres",
    body: "Votre offre apparaît dans les Avantages Membres, vous recevez le badge partenaire et votre code client, et les membres peuvent présenter leur carte QR lors de leur visite.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Quel est le coût pour devenir partenaire ?",
    a: "Rien. Il n'y a pas de frais d'inscription ni de commission. La réduction ou l'avantage que vous accordez aux membres est votre contribution.",
  },
  {
    q: "Quel est le coût de la réduction de 25 % pour mes clients ?",
    a: "Rien. Nous offrons à vos clients une réduction pour leur première année sur DoggMatch+. Vous décidez toujours entièrement de l'avantage que vous souhaitez offrir à nos membres.",
  },
  {
    q: "Comment vérifier si quelqu'un est vraiment membre ?",
    a: "Chaque membre DoggMatch+ possède une carte avec un code QR. Le scanner ouvre une page qui indique uniquement si l'adhésion est active et jusqu'à quand — aucun détail personnel.",
  },
  {
    q: "Puis-je modifier ou arrêter mon offre plus tard ?",
    a: "Oui, quand vous le souhaitez. Écrivez-nous et nous mettrons à jour ou suspendrons votre fiche. Nous vous demanderons simplement d'honorer tout ce qui a déjà été promis.",
  },
  {
    q: "Nous ne sommes pas en Norvège — pouvons-nous quand même nous inscrire ?",
    a: "Oui. DoggMatch est utilisé à l'international et les Avantages Membres sont affichés avec le pays auquel ils s'appliquent. Les boutiques en ligne qui expédient largement sont également les bienvenues.",
  },
  {
    q: "Combien de membres verront mon offre ?",
    a: "Nous ne vous donnerons pas un chiffre que nous ne pouvons pas garantir. DoggMatch+ est jeune et en pleine croissance, et nous préférons être honnêtes à ce sujet plutôt que de survendre.",
  },
  {
    q: "Quel type d'entreprises refusez-vous ?",
    a: "Tout ce qui repose sur des méthodes d'éducation aversives, ou des produits que nous ne serions pas à l'aise de recommander à un ami avec un chien. Nous préférons avoir une courte liste de confiance.",
  },
] as const;
