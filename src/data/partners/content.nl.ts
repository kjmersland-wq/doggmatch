/**
 * Copy voor de "Word een DoggMatch Partner" pagina.
 * Engels is de brontaal — een sibling-bestand per locale behoudt dezelfde structuur.
 * Toon: warm, eerlijk, menselijk. Nooit commercieel.
 */
export type PartnerCategory = {
  id: string;
  label: string;
  blurb: string;
};

export const partnerCategories: PartnerCategory[] = [
  {
    id: "equipment",
    label: "Huisdier- en hondenbenodigdheden",
    blurb: "Harnassen, lijnen, manden, speeltjes en de dagelijkse dingen die verslijten.",
  },
  {
    id: "grooming",
    label: "Trimsalons",
    blurb: "Salons en mobiele trimmers die de tijd nemen voor nerveuze honden.",
  },
  {
    id: "training",
    label: "Training",
    blurb: "Puppycursussen, individuele begeleiding en beloningsgerichte gedragstherapie.",
  },
  {
    id: "vet",
    label: "Dierenartsen & gezondheid",
    blurb: "Klinieken, fysiotherapeuten, tandartsen en iedereen die honden gezond houdt.",
  },
  {
    id: "insurance",
    label: "Verzekeringen",
    blurb: "Dekking die duidelijk is over wat wel en niet wordt vergoed.",
  },
  {
    id: "boarding",
    label: "Logeren & dagopvang",
    blurb: "Kennels, thuisopvang, dagopvang en vertrouwde oppassers.",
  },
  {
    id: "food",
    label: "Voeding & supplementen",
    blurb: "Voer, snacks en supplementen die je je eigen hond zou geven.",
  },
  {
    id: "travel",
    label: "Reizen & activiteiten",
    blurb: "Hondvriendelijke verblijven, auto-accessoires, wandelingen, zwemmen en uitstapjes.",
  },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Bereik eigenaren die echt zoeken",
    body: "Mensen komen naar DoggMatch terwijl ze een hond kiezen, er een in huis halen, of hulp zoeken bij voeding, training en reizen. Je krijgt een weloverwogen introductie op het moment dat ze je echt nodig hebben.",
  },
  {
    id: "listing",
    title: "Je eigen plek in Ledenvoordelen",
    body: "Een complete vermelding binnen het ledengebied: wie je bent, wat je aanbiedt, waar het gebruikt kan worden, en een directe link naar jou. Nuttiger dan een logo in een muur van logo's.",
  },
  {
    id: "offer",
    title: "Een aanbod dat je zelf vormgeeft",
    body: "Een percentage korting, een gratis eerste sessie, een upgrade of een bundel — wat goed voelt voor jouw bedrijf. Jij bepaalt elk detail, en je kunt het op elk moment aanpassen of pauzeren.",
  },
  {
    id: "branding",
    title: "Partner branding die je kunt gebruiken",
    body: "Een DoggMatch Partner-badge voor je etalage, website en social media, zodat klanten een bedrijf herkennen waar we graag achter staan.",
  },
  {
    id: "verification",
    title: "Verificatie die twee seconden duurt",
    body: "Leden dragen een DoggMatch+ kaart met een QR-code. Scan deze, kijk of het lidmaatschap actief is, en heet ze welkom. Geen app, geen login, geen papierwerk.",
  },
  {
    id: "no-cost",
    title: "Ook een voordeel voor je klanten",
    body: "We geven je klanten 25% korting op DoggMatch+ voor hun eerste jaar. Het kost jou niets, en je bepaalt nog steeds volledig welk voordeel je onze leden wilt bieden. Er zijn geen inschrijfkosten of commissie.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Vertel ons over je bedrijf",
    body: "Het korte formulier hieronder is voldoende om te beginnen. Vertel ons wie je bent, waar je gevestigd bent, en eventuele eerste ideeën voor een aanbod — het hoeft nog niet definitief te zijn.",
  },
  {
    no: "02",
    title: "We voeren een goed gesprek",
    body: "Een echt persoon leest je bericht en reageert. We bespreken de details en zorgen ervoor dat het voor beide partijen goed voelt — voor jou en voor onze leden.",
  },
  {
    no: "03",
    title: "We stellen je vermelding samen",
    body: "We zetten de tekst, het aanbod en de praktische details samen met jou op. Je keurt alles goed voordat het live gaat, en niets wordt gepubliceerd zonder jouw goedkeuring.",
  },
  {
    no: "04",
    title: "We stellen je voor aan leden",
    body: "Je aanbod verschijnt in Ledenvoordelen, je ontvangt de partnerbadge en je klantcode, en leden kunnen hun QR-kaart laten zien wanneer ze langskomen.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Wat kost het om partner te worden?",
    a: "Niets. Er zijn geen inschrijfkosten en geen commissie. De korting of het voordeel dat je leden biedt, is wat je bijdraagt.",
  },
  {
    q: "Wat kost de 25% korting voor mijn klanten mij?",
    a: "Niets. We geven je klanten een korting op DoggMatch+ voor het eerste jaar. Je bepaalt nog steeds volledig welk voordeel je onze leden wilt bieden.",
  },
  {
    q: "Hoe controleer ik of iemand echt lid is?",
    a: "Elk DoggMatch+ lid heeft een kaart met een QR-code. Het scannen ervan opent een pagina die alleen laat zien of het lidmaatschap actief is en tot wanneer — geen persoonlijke gegevens.",
  },
  {
    q: "Kan ik mijn aanbod later wijzigen of stopzetten?",
    a: "Ja, wanneer je maar wilt. Schrijf ons en we passen je vermelding aan of pauzeren deze. We vragen je alleen om alles wat al is toegezegd na te komen.",
  },
  {
    q: "We zijn niet in Noorwegen gevestigd — kunnen we toch meedoen?",
    a: "Ja. DoggMatch wordt internationaal gebruikt en Ledenvoordelen worden getoond met het land waarop ze van toepassing zijn. Online winkels die breed verzenden zijn ook zeer welkom.",
  },
  {
    q: "Hoeveel leden zullen het zien?",
    a: "We zullen geen aantal noemen dat we niet kunnen garanderen. DoggMatch+ is nog jong en groeit, en we zijn liever eerlijk daarover dan te veel beloven.",
  },
  {
    q: "Welke soorten bedrijven wijzen jullie af?",
    a: "Alles wat gebaseerd is op aversieve trainingsmethoden, of producten die we niet met een gerust hart aan een vriend met een hond zouden aanbevelen. We hebben liever een korte lijst waar we op vertrouwen.",
  },
] as const;
