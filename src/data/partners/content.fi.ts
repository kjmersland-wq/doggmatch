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
  { id: "equipment", label: "Lemmikit & koiratarvikkeet", blurb: "Valjaat, taluttimet, pedit, lelut ja arjen kulutustavarat." },
  { id: "grooming", label: "Turkinhoito", blurb: "Kampaamot ja liikkuvat trimmaajat, jotka ottavat aikaa myös arasteluville koirille." },
  { id: "training", label: "Koulutus", blurb: "Pennunpentueet, henkilökohtainen apu ja palkkiopohjainen käytöstyöskentely." },
  { id: "vet", label: "Eläinlääkäri & terveys", blurb: "Klinikat, fysioterapeutit, hammaslääkärit ja kaikki koirien hyvinvoinnista huolehtivat." },
  { id: "insurance", label: "Vakuutukset", blurb: "Vakuutukset, jotka kertovat selkeästi, mitä ne kattavat ja mitä eivät." },
  { id: "boarding", label: "Hoito & päivähoito", blurb: "Koirahotellit, kotihoidot, päivähoito ja luotettavat hoitajat." },
  { id: "food", label: "Ruoka & ravitsemus", blurb: "Ruokaa, herkkuja ja lisäravinteita, joita antaisit omalle koirallesi." },
  { id: "travel", label: "Matkailu & aktiviteetit", blurb: "Koiraystävälliset majoitukset, autotarvikkeet, vaellukset, uinnit ja retket." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Tavoita omistajat, jotka etsivät juuri sinua",
    body: "Ihmiset tulevat DoggMatchiin valitessaan koiraa, totuttaessaan sitä uuteen kotiin tai etsiessään apua ruokintaan, koulutukseen ja matkustamiseen. Saat harkitun esittelyn juuri silloin, kun he sinua aidosti tarvitsevat.",
  },
  {
    id: "listing",
    title: "Oma paikka Jäsenetutkassa",
    body: "Oma esittely jäsenalueella: kuka olet, mitä tarjoat, missä sitä voi käyttää ja linkki suoraan sinulle. Hyödyllisempi kuin logo muiden logojen joukossa.",
  },
  {
    id: "offer",
    title: "Tarjous, jonka muotoilet itse",
    body: "Prosenttialennus, ilmainen ensikäynti, päivitys tai paketti – mitä tahansa yrityksellesi sopii. Päätät jokaisesta yksityiskohdasta ja voit muuttaa tai keskeyttää sen milloin tahansa.",
  },
  {
    id: "branding",
    title: "Käytettävissä oleva kumppanibrändäys",
    body: "DoggMatch Partner -merkki ikkunaasi, verkkosivuillesi ja sosiaalisen median kanaviisi, jotta asiakkaat tunnistavat yrityksen, jonka takana seisomme mielellämme.",
  },
  {
    id: "verification",
    title: "Varmennus, joka vie kaksi sekuntia",
    body: "Jäsenillä on DoggMatch+-kortti QR-koodilla. Skannaa se, näet onko jäsenyys voimassa ja toivota heidät tervetulleiksi. Ei sovellusta, ei kirjautumista, ei paperityötä.",
  },
  {
    id: "no-cost",
    title: "Etu myös asiakkaillesi",
    body: "Annamme asiakkaillesi 25 % alennuksen DoggMatch+:sta ensimmäiseksi vuodeksi. Se ei maksa sinulle mitään, ja voit silti täysin itse päättää, minkä edun tarjoat jäsenillemme. Ei listausmaksua tai provisiota.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Kerro meille yrityksestäsi",
    body: "Lyhyt lomake alla riittää alkuun. Kerro kuka olet, missä toimit ja mitä ajatuksia sinulla on tarjouksesta – sen ei tarvitse olla lopullinen.",
  },
  {
    no: "02",
    title: "Käymme kunnon keskustelun",
    body: "Todellinen ihminen lukee viestisi ja vastaa. Käymme läpi yksityiskohdat ja varmistamme, että se tuntuu sopivalta molemmin puolin – sinulle ja jäsenillemme.",
  },
  {
    no: "03",
    title: "Kirjoitamme esittelysi yhdessä",
    body: "Muotoilemme sanat, tarjouksen ja käytännön yksityiskohdat yhdessä kanssasi. Hyväksyt kaiken ennen julkaisua, eikä mitään julkaista ilman lupaasi.",
  },
  {
    no: "04",
    title: "Esittelemme sinut jäsenille",
    body: "Tarjouksesi ilmestyy Jäsenetuihin, saat kumppanimerkin ja asiakaskoodisi, ja jäsenet voivat näyttää QR-korttinsa vierailun yhteydessä.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Mitä kumppaniksi ryhtyminen maksaa?",
    a: "Ei mitään. Ei ole listausmaksua eikä provisiota. Tarjoamasi alennus tai etu jäsenille on se, mitä panostat.",
  },
  {
    q: "Mitä asiakkailleni tarjottava 25 % alennus maksaa minulle?",
    a: "Ei mitään. Tarjoamme asiakkaillesi ensimmäisen vuoden alennuksen DoggMatch+:sta. Voit silti täysin itse päättää, minkä edun haluat tarjota jäsenillemme.",
  },
  {
    q: "Miten tarkistan, onko joku todella jäsen?",
    a: "Jokaisella DoggMatch+-jäsenellä on kortti QR-koodilla. Sen skannaaminen avaa sivun, joka näyttää vain, onko jäsenyys voimassa ja mihin asti – ei henkilökohtaisia tietoja.",
  },
  {
    q: "Voinko muuttaa tai lopettaa tarjoukseni myöhemmin?",
    a: "Kyllä, milloin tahansa haluat. Kirjoita meille, niin päivitämme tai keskeytämme esittelysi. Pyydämme vain, että kunnioitat jo annettuja lupauksia.",
  },
  {
    q: "Emme ole Norjassa – voimmeko silti liittyä?",
    a: "Kyllä. DoggMatchia käytetään kansainvälisesti ja Jäsenetuja näytetään maan mukaan, johon ne soveltuvat. Verkkokaupat, jotka toimittavat laajasti, ovat myös erittäin tervetulleita.",
  },
  {
    q: "Kuinka monet jäsenet näkevät sen?",
    a: "Emme anna numeroa, jota emme voi seisoa. DoggMatch+ on nuori ja kasvava, ja mieluummin olemme rehellisiä siitä kuin myymme yli.",
  },
  {
    q: "Millaisia yrityksiä ette hyväksy?",
    a: "Kaikki, jotka perustuvat aversiivisiin koulutusmenetelmiin, tai tuotteet, joita emme suosittelisi ystävälle koiransa kanssa. Mieluummin lyhyt lista, johon luotamme.",
  },
] as const;
