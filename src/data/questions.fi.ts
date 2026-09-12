import type { QuizQuestion } from "@/lib/matching/types";

/** Kysymykset suomeksi. Tunnisteet ja arvot ovat samat. */
export const questionsFi: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Arkesi",
    title: "Kuinka aktiivinen olet tavallisena päivänä?",
    help: "Ajattele ihan tavallista viikkoa, ei parasta mahdollista.",
    options: [
      { value: "1", label: "Melko rauhallinen", hint: "Lyhyitä lenkkejä, rauhalliset rutiinit" },
      { value: "2", label: "Vähän aktiivinen", hint: "Lenkki joka päivä, ja välillä hieman enemmän" },
      { value: "3", label: "Melko aktiivinen", hint: "Pitkiä lenkkejä ja ulkoilua viikonloppuisin" },
      { value: "4", label: "Aina menossa", hint: "Juoksua, retkeilyä tai treeniä useimpina päivinä" },
    ],
  },
  {
    id: "home",
    eyebrow: "Koti",
    title: "Missä koira tulee asumaan?",
    options: [
      { value: "apartment", label: "Kerrostalossa", hint: "Yhteinen porras tai hissi" },
      { value: "house", label: "Talossa ilman pihaa" },
      { value: "house-garden", label: "Talossa, jossa on piha" },
      { value: "rural", label: "Maaseudulla" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Päiväsi",
    title: "Kuinka kauan koira olisi tavallisesti yksin?",
    options: [
      { value: "0", label: "Lähes ei koskaan yksin", hint: "Kotona on lähes aina joku" },
      { value: "2", label: "Enintään kolme tuntia" },
      { value: "4", label: "Kolmesta viiteen tuntia" },
      { value: "6", label: "Kuusi tuntia tai enemmän" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Kokemus",
    title: "Onko sinulla ollut koiraa aiemmin?",
    options: [
      { value: "first", label: "Tästä tulisi ensimmäiseni" },
      { value: "some", label: "Jonkin verran", hint: "Kasvoin koiran kanssa, tai olen hoitanut sellaista" },
      { value: "experienced", label: "Paljon", hint: "Olen itse kasvattanut ja kouluttanut koiria" },
    ],
  },
  {
    id: "size",
    eyebrow: "Toiveesi",
    title: "Onko sinulla mielessä tietty koko?",
    optional: true,
    options: [
      { value: "small", label: "Jotain pientä" },
      { value: "medium", label: "Jotain siltä väliltä" },
      { value: "large", label: "Iso koira" },
      { value: "any", label: "Olen avoin mille tahansa" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Toiveesi",
    title: "Millainen luonne sopisi sinulle parhaiten?",
    options: [
      { value: "calm", label: "Rauhallinen ja rento" },
      { value: "affectionate", label: "Hellä ja lähellä sinua" },
      { value: "playful", label: "Leikkisä ja täynnä elämää" },
      { value: "independent", label: "Viihtyy hyvin omissa oloissaan" },
    ],
  },
  {
    id: "children",
    eyebrow: "Kotona",
    title: "Ketä muita kotonasi asuu?",
    options: [
      { value: "none", label: "Vain aikuisia" },
      { value: "older", label: "Isompia lapsia" },
      { value: "young", label: "Pieniä lapsia" },
      { value: "visitors", label: "Aikuisia, ja paljon vieraita" },
    ],
  },
  {
    id: "pets",
    eyebrow: "Kotona",
    title: "Onko kotonasi muita eläimiä?",
    optional: true,
    options: [
      { value: "none", label: "Ei muita eläimiä" },
      { value: "dog", label: "Toinen koira" },
      { value: "cat", label: "Kissa" },
      { value: "small", label: "Pienempiä eläimiä", hint: "Kaneja, lintuja, jyrsijöitä" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Turkki ja allergiat",
    title: "Mitä mieltä olet koiran karvoista kotona?",
    help: "Jotkin rodut karvaavat vähemmän, mikä tuntuu monista allergikoista helpommalta. Yksikään koira ei kuitenkaan ole täysin allergiaystävällinen.",
    options: [
      { value: "fine", label: "Karvat eivät haittaa minua" },
      { value: "prefer-low", label: "Toivoisin vähemmän karvanlähtöä" },
      { value: "must-low", label: "Joku meillä reagoi koiriin", hint: "Vain vähän karvaavia rotuja, kiitos" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Hoito",
    title: "Kuinka paljon turkinhoitoa olet valmis tekemään?",
    options: [
      { value: "minimal", label: "Mahdollisimman vähän" },
      { value: "moderate", label: "Säännöllinen harjaus sopii hyvin" },
      { value: "high", label: "Käynnit koiratrimmaamossa sopivat minulle" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Hoito",
    title: "Kuinka paljon koiraa pystyt hallitsemaan mukavasti?",
    help: "Voima hihnassa on jotain, mitä moni aliarvioi.",
    options: [
      { value: "light", label: "Ei mitään isoa tai vahvaa", hint: "Voimakas koira olisi liikaa" },
      { value: "moderate", label: "Keskikokoinen koira sopii hyvin" },
      { value: "strong", label: "Pärjään hyvin ison ja vahvan koiran kanssa" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Ihan rehellisesti",
    title: "Tulisitko toimeen todella energisen koiran kanssa?",
    help: "Ole tässä rehellinen — otamme sinut sanastasi.",
    options: [
      { value: "no", label: "En, tarvitsen rauhallisemman koiran" },
      { value: "maybe", label: "Kohtuuden rajoissa" },
      { value: "yes", label: "Kyllä, haluaisin mielelläni aktiivisen koiran" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Seura",
    title: "Mitä toivot koiran tuovan elämääsi?",
    options: [
      { value: "calm-company", label: "Rauhallista ja turvallista seuraa" },
      { value: "motivation", label: "Syyn lähteä ulos" },
      { value: "active", label: "Jonkun, joka pysyy vauhdissani mukana" },
      { value: "family", label: "Koiran koko perheelle" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Turkki ja allergiat",
    title: "Onko kotonasi joku, jolla on koira-allergia?",
    help: "Jotkin rodut karvaavat vähemmän ja pitävät turkkinsa paremmin koossa, mikä tuntuu joistakin helpommalta. Yksikään koira ei ole täysin allergiaystävällinen, ja herkkyys vaihtelee ihmisestä toiseen.",
    options: [
      { value: "none", label: "Ei, kukaan ei reagoi koiriin" },
      { value: "mild", label: "Lieviä reaktioita", hint: "Hieman tukkoinen olo tiettyjen koirien seurassa" },
      { value: "significant", label: "Merkittävä allergia", hint: "Haluaisimme kunnon allergianeuvontaa ensin" },
      { value: "unsure", label: "Emme ole vielä varmoja" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Seura ja hyvinvointi",
    title: "Kuinka paljon toivot rauhallista, läheistä kumppania ympärillesi?",
    help: "Koira on seuraa, ei hoitoa. Katsomme rauhallisuutta, sosiaalisuutta ja sitä, kuinka ihmiskeskeinen rotu tavallisesti on.",
    options: [
      { value: "no", label: "En etsi juuri tätä" },
      { value: "some", label: "Se olisi mukavaa" },
      { value: "important", label: "Kyllä, sillä on minulle merkitystä" },
      { value: "very", label: "Se on minulle tärkeintä" },
    ],
  },
];
