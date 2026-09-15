import type { TrainingCategory, TrainingGoal } from "./types";

export const trainingCategories: TrainingCategory[] = [
  {
    id: "puppy-foundations",
    title: "Pentuajan perusteet",
    blurb: "Lempeä alku — nimesi, äänesi ja se, että ihmiset ovat hyvää seuraa.",
    covers: ["Nimi", "Katsekontakti", "Istu", "Maahan", "Paikka", "Luo", "Jätä se", "Käsittely", "Rauhoittuminen", "Sisäsiisteys", "Puremat", "Pureskelu", "Maailmaan tutustuminen"],
  },
  {
    id: "everyday-manners",
    title: "Arjen käytöstavat",
    blurb: "Pienet asiat, jotka tekevät tavallisista päivistä helpompia teille molemmille.",
    covers: ["Ihmisten tervehtiminen", "Rauhalliset tervehdykset", "Hyppäämättä jättäminen", "Odottaminen", "Ovet", "Ruoka-ajat", "Rauhoittuminen", "Vuoron odottaminen"],
  },
  {
    id: "walking",
    title: "Yhdessä kävelyllä",
    blurb: "Lenkki, joka tuntuu lenkiltä, ei köydenvedolta.",
    covers: ["Löysä hihna", "Yhteyden pitäminen ulkona", "Pysähtyminen", "Kääntyminen", "Häiriötekijät", "Toisten koirien rauhallinen ohittaminen"],
  },
  {
    id: "home",
    title: "Elämää kotona",
    blurb: "Lepoa, rauhaa ja koira, joka osaa kytkeytyä pois päältä.",
    covers: ["Rauhallisuus kotona", "Yksin oleminen", "Rauhoittuminen", "Haukkuminen", "Vieraat", "Arjen rutiinit"],
  },
  {
    id: "socialisation",
    title: "Maailmaan tutustuminen",
    blurb: "Uusia paikkoja ja uusia kasvoja, hitaasti ja koirasi tahdissa.",
    covers: ["Ihmiset", "Muut koirat", "Uudet paikat", "Äänet", "Matkustaminen", "Käsiteltäväksi antautuminen", "Turkinhoito"],
  },
  {
    id: "recall-safety",
    title: "Luoksetulo & turvallisuus",
    blurb: "Luoksesi tuleminen, vaikka jotain kiinnostavampaa olisi meneillään.",
    covers: ["Nimi", "Tarkkaavaisuus", "Tule", "Hätätilanteen luoksetulo", "Jätä se", "Pudota se"],
  },
  {
    id: "tricks-games",
    title: "Temput & leikit",
    blurb: "Hauska osuus. Myös huomaamatta yksi parhaista harjoitusmuodoista.",
    covers: ["Tassu", "Pyöri", "Kieräytys", "Kosketa", "Etsi se", "Nouto", "Mene paikallesi", "Piilosta"],
  },
  {
    id: "mental-stimulation",
    title: "Ajattelemisen aihetta",
    blurb: "Kymmenen minuuttia nuuskimista ja etsimistä voi väsyttää koiran enemmän kuin tunti juoksua.",
    covers: ["Hajupelit", "Palapelit", "Etsiminen", "Ongelmanratkaisu", "Virikkeet", "Rauhalliset aivopelit"],
  },
];

export const trainingGoals: TrainingGoal[] = [
  { id: "puppy-basics", label: "Pennun perusteet", hint: "Mistä useimmat aloittavat" },
  { id: "calm-at-home", label: "Rauhallisuus kotona", hint: "Pois päältä kytkeytymisen opettelua" },
  { id: "loose-leash", label: "Kävely mukavasti", hint: "Vähemmän vetämistä, enemmän kävelyä" },
  { id: "recall", label: "Luokse tuleminen kutsuttaessa", hint: "Yksi kaikkein hyödyllisimmistä taidoista" },
  { id: "sit-down-stay", label: "Istu, maahan & paikka", hint: "Arjen peruskäskyt" },
  { id: "potty-training", label: "Sisäsiisteys", hint: "Vähemmän vahinkoja, vähemmän stressiä" },
  { id: "puppy-biting", label: "Pentujen purenta", hint: "Ne neulanterävät hampaat" },
  { id: "leave-it", label: "Jätä se", hint: "Jalkakäytävän löydöille" },
  { id: "socialisation", label: "Maailmaan tutustuminen", hint: "Ihmiset, koirat, paikat, äänet" },
  { id: "barking", label: "Haukkuminen", hint: "Ensin ymmärrystä, sitten lievitystä" },
  { id: "calmness", label: "Rauhoittuminen", hint: "Lepokin on taito" },
  { id: "manners", label: "Arjen käytöstavat", hint: "Ovet, vieraat, ruoka-ajat" },
  { id: "mental", label: "Ajattelemisen aihetta", hint: "Nuuskimista, etsimistä, palapelejä" },
  { id: "tricks", label: "Temput & leikit", hint: "Koska se on hauskaa" },
];
