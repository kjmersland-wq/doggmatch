/** Dutch copy for the "Become a DoggMatch Partner" page. Same shape as content.en.ts. */
import type { PartnerCategory } from "./content.en";

export const partnerCategories: PartnerCategory[] = [
  { id: "equipment", label: "Huisdier- en hondenbenodigdheden", blurb: "Tuigjes, lijnen, manden, speelgoed en de dagelijkse spullen die verslijten." },
  { id: "grooming", label: "Trimsalon", blurb: "Salons en mobiele trimmers die de tijd nemen voor nerveuze honden." },
  { id: "training", label: "Training", blurb: "Puppycursussen, individuele begeleiding en beloningsgericht gedragswerk." },
  { id: "vet", label: "Dierenarts & gezondheid", blurb: "Klinieken, fysiotherapeuten, tandartsen en iedereen die honden gezond houdt." },
  { id: "insurance", label: "Verzekering", blurb: "Dekking die duidelijk is over wat wel en niet vergoed wordt." },
  { id: "boarding", label: "Pension & opvang", blurb: "Kennels, gastgezinnen, dagopvang en vertrouwde oppassers." },
  { id: "food", label: "Voeding", blurb: "Voer, snacks en supplementen die u ook aan uw eigen hond zou geven." },
  { id: "travel", label: "Reizen & activiteiten", blurb: "Hondvriendelijke verblijven, autobenodigdheden, wandelingen, zwemmen en uitjes." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Bereik baasjes die daadwerkelijk zoeken",
    body: "Mensen komen naar DoggMatch terwijl ze een hond kiezen, hem laten wennen, of hulp zoeken bij voeding, training en reizen. U krijgt een doordachte introductie op het moment dat men u echt nodig heeft.",
  },
  {
    id: "listing",
    title: "Uw eigen plek bij Ledenvoordelen",
    body: "Een echte vermelding binnen het ledengedeelte: wie u bent, wat u aanbiedt, waar het geldt, en een directe link naar u. Nuttiger dan een logo tussen een muur vol logo's.",
  },
  {
    id: "offer",
    title: "Een aanbod dat u zelf vormgeeft",
    body: "Een percentage korting, een gratis eerste sessie, een upgrade of een pakket — wat het beste past bij uw bedrijf. U beslist over elk detail, en u kunt het altijd wijzigen of pauzeren.",
  },
  {
    id: "branding",
    title: "Partnerbranding die u kunt gebruiken",
    body: "Een DoggMatch-partnerbadge voor uw etalage, website en sociale kanalen, zodat klanten een bedrijf herkennen waar wij graag achter staan.",
  },
  {
    id: "verification",
    title: "Verificatie die twee seconden kost",
    body: "Leden dragen een DoggMatch+-kaart met een QR-code. Scan hem, zie of het lidmaatschap actief is, en heet ze welkom. Geen app, geen inlog, geen papierwerk.",
  },
  {
    id: "no-cost",
    title: "Ook een voordeel voor uw klanten",
    body: "Wij geven uw klanten 25% korting op DoggMatch+ voor hun eerste jaar. Het kost u niets, en u blijft volledig zelf bepalen welk voordeel u onze leden biedt. Er is geen vermeldingskosten of commissie.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Vertel ons over uw bedrijf",
    body: "Het korte formulier hieronder is genoeg om te beginnen. Vertel ons wie u bent, waar u gevestigd bent, en eventuele eerste gedachten over een aanbod — het hoeft nog niet definitief te zijn.",
  },
  {
    no: "02",
    title: "We voeren een echt gesprek",
    body: "Een echt persoon leest uw bericht en reageert. We bespreken de details en zorgen dat het voor beide kanten goed voelt — voor u en voor onze leden.",
  },
  {
    no: "03",
    title: "We schrijven uw vermelding samen",
    body: "We stellen samen met u de tekst, het aanbod en de praktische details op. U keurt alles goed voordat het live gaat, en er wordt niets gepubliceerd zonder uw akkoord.",
  },
  {
    no: "04",
    title: "We stellen u voor aan leden",
    body: "Uw aanbod verschijnt bij Ledenvoordelen, u ontvangt de partnerbadge en uw klantcode, en leden kunnen bij hun bezoek hun QR-kaart tonen.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Wat kost het om partner te worden?",
    a: "Niets. Er zijn geen vermeldingskosten en geen commissie. Uw bijdrage is de korting of het voordeel dat u leden geeft.",
  },
  {
    q: "Wat kost de 25% korting voor mijn klanten mij?",
    a: "Niets. Wij geven uw klanten een korting op het eerste jaar van DoggMatch+. U blijft volledig zelf bepalen welk voordeel u onze leden wilt bieden.",
  },
  {
    q: "Hoe controleer ik of iemand echt lid is?",
    a: "Elk DoggMatch+-lid heeft een kaart met een QR-code. Scannen opent een pagina die alleen laat zien of het lidmaatschap actief is en tot wanneer — geen persoonsgegevens.",
  },
  {
    q: "Kan ik mijn aanbod later wijzigen of stoppen?",
    a: "Ja, wanneer u maar wilt. Schrijf ons en we werken uw vermelding bij of pauzeren die. We vragen alleen dat u nakomt wat al is toegezegd.",
  },
  {
    q: "We zitten niet in Noorwegen — kunnen we toch meedoen?",
    a: "Ja. DoggMatch wordt internationaal gebruikt, en Ledenvoordelen worden getoond met het land waarvoor ze gelden. Webshops die breed verzenden zijn ook zeer welkom.",
  },
  {
    q: "Hoeveel leden zullen het zien?",
    a: "We noemen geen getal waar we niet achter kunnen staan. DoggMatch+ is jong en groeiend, en daar zijn we liever eerlijk over dan het te overdrijven.",
  },
  {
    q: "Welk soort bedrijven wijst u af?",
    a: "Alles wat gebaseerd is op afkeurende trainingsmethoden, of producten die we niet met een gerust hart aan een vriend met een hond zouden aanraden. We hebben liever een korte lijst die we vertrouwen.",
  },
] as const;
