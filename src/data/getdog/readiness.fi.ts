import type { UserProfile } from "@/lib/matching/types";

/**
 * Valmiuskeskustelu. Ei koe – ei läpäisyrajaa eikä häpeää mistään vastauksesta. Jos vastaus on hyödyllinen myös sopivuusmoottorille, se sisältää `profile`-päivityksen, jotta Find My Dog ei kysy sitä enää koskaan.
 */
export interface ReadinessOption {
  value: string;
  label: string;
  hint?: string;
  /** 0–3. Korkeampi arvo tarkoittaa yksinkertaisesti vähemmän asioita selvitettävänä ensin. */
  score: number;
  /** Mitä tämä vastaus kertoo sopivuusmoottorille, jos mitään. */
  profile?: UserProfile;
  /** Lempeä huomautus, joka näytetään tuloksessa, kun tämä vastaus valitaan. */
  note?: string;
}

export interface ReadinessQuestion {
  id: string;
  eyebrow: string;
  title: string;
  help?: string;
  options: ReadinessOption[];
}

export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "time",
    eyebrow: "Päiväsi",
    title: "Kuinka paljon aikaa voisit antaa koiralle joka päivä?",
    help: "Lenkit, ruokinta, koulutus, turkinhoito ja pelkkä yhdessäolo.",
    options: [
      { value: "under1", label: "Alle tunnin", score: 0, note: "Useimmat koirat tarvitsevat yli tunnin päivässäsi, jaettuna lenkkeihin, ruokaan, koulutukseen ja seuraan. Kannattaa miettiä, miten löytäisit sen ajan." },
      { value: "1-2", label: "Tunnin tai kaksi", score: 2 },
      { value: "2-3", label: "Kaksi tai kolme tuntia", score: 3 },
      { value: "3plus", label: "Yli kolme tuntia", score: 3, hint: "Päiväni ovat melko joustavat" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Päiväsi",
    title: "Kuinka kauan koirasi olisi yleensä yksin?",
    help: "Ei ole yhtä oikeaa numeroa jokaiselle koiralle. Ikä, koulutus ja luonne ovat kaikki tärkeitä.",
    options: [
      { value: "0", label: "Melkein ei koskaan yksin", score: 3, profile: { alone: "0" } },
      { value: "2", label: "Enintään kolme tuntia", score: 3, profile: { alone: "2" } },
      { value: "4", label: "Kolmesta viiteen tuntia", score: 2, profile: { alone: "4" } },
      { value: "6", label: "Kuusi tuntia tai enemmän", score: 0, profile: { alone: "6" }, note: "Pitkät päivät yksin ovat useimmille koirille raskaita. Koiranulkoiluttaja, päivähoito tai naapuri, joka voi käydä välillä, tekee todellisen eron – kannattaa suunnitella etukäteen, ei jälkeenpäin." },
    ],
  },
  {
    id: "activity",
    eyebrow: "Päiväsi",
    title: "Kuinka aktiivinen olet tavallisena päivänä?",
    help: "Ajattele tavallista viikkoa, et parasta.",
    options: [
      { value: "1", label: "Melko rauhallinen", score: 2, profile: { activity: "1" } },
      { value: "2", label: "Kohtuullisen aktiivinen", score: 3, profile: { activity: "2" } },
      { value: "3", label: "Melko aktiivinen", score: 3, profile: { activity: "3" } },
      { value: "4", label: "Aina liikkeellä", score: 3, profile: { activity: "4" } },
    ],
  },
  {
    id: "home",
    eyebrow: "Koti",
    title: "Missä koirasi asuisi?",
    help: "Kerrostaloasunto ei ole este onnelliselle koiralle. Tärkeämpää on ulkoilumahdollisuus kotiovelta ja pitämäsi ajat.",
    options: [
      { value: "apartment", label: "Kerrostalo tai asunto", score: 3, profile: { home: "apartment" } },
      { value: "house", label: "Talo ilman pihaa", score: 3, profile: { home: "house" } },
      { value: "house-garden", label: "Talo pihalla", score: 3, profile: { home: "house-garden" } },
      { value: "rural", label: "Maaseudulla", score: 3, profile: { home: "rural" } },
    ],
  },
  {
    id: "travel",
    eyebrow: "Poissa kotoa",
    title: "Matkustatko usein?",
    options: [
      { value: "rarely", label: "Harvoin", score: 3 },
      { value: "sometimes", label: "Muutaman kerran vuodessa", score: 2 },
      { value: "often", label: "Usein, työn tai muun vuoksi", score: 1, note: "Usein matkustaminen ei ole syy olla hankkimatta koiraa – mutta se tarkoittaa, että on päätettävä ajoissa, kuka koirasta huolehtii, tai mihin matkoihin se voi osallistua." },
    ],
  },
  {
    id: "children",
    eyebrow: "Kotona",
    title: "Ketä muita kotona on?",
    options: [
      { value: "none", label: "Vain aikuisia", score: 3, profile: { children: "none" } },
      { value: "older", label: "Isompia lapsia", score: 3, profile: { children: "older" } },
      { value: "young", label: "Pieniä lapsia", score: 2, profile: { children: "young" }, note: "Pienet lapset ja koirat voivat olla ihania yhdessä, kunhan valvontaa on ja koiralla on rauhallinen paikka, jonne se voi aina vetäytyä." },
      { value: "visitors", label: "Aikuisia ja paljon vierailijoita", score: 3, profile: { children: "visitors" } },
    ],
  },
  {
    id: "pets",
    eyebrow: "Kotona",
    title: "Onko taloudessa muita eläimiä?",
    options: [
      { value: "none", label: "Ei muita lemmikkejä", score: 3, profile: { pets: "none" } },
      { value: "dog", label: "Toinen koira", score: 3, profile: { pets: "dog" } },
      { value: "cat", label: "Kissa", score: 2, profile: { pets: "cat" } },
      { value: "small", label: "Pienempiä eläimiä", hint: "Kanit, linnut, jyrsijät", score: 2, profile: { pets: "small" } },
    ],
  },
  {
    id: "allergies",
    eyebrow: "Terveys kotona",
    title: "Onko taloudessa kenelläkään allergioita?",
    help: "Jotkut rodut irrottavat vähemmän karvaa, mikä voi olla helpompaa joillekin. Mikään koira ei ole täysin allergiaton, ja reaktiot vaihtelevat ihmisestä toiseen.",
    options: [
      { value: "no", label: "Ei kukaan, tietääksemme", score: 3, profile: { shedding: "fine" } },
      { value: "mild", label: "Joku on hieman herkkä", score: 2, profile: { shedding: "prefer-low" } },
      { value: "yes", label: "Kyllä, joku reagoi koiriin", score: 1, profile: { shedding: "must-low" }, note: "Vietä aikaa yksittäisen koiran kanssa ennen päätöstä ja keskustele lääkärin kanssa. Vähäisemmin karvaa irrottavat rodut auttavat joitakin ihmisiä ja toisia eivät." },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Hoitaminen",
    title: "Oletko valmis säännölliseen turkinhoitoon?",
    options: [
      { value: "minimal", label: "Haluan pitää sen yksinkertaisena", score: 2, profile: { grooming: "minimal" } },
      { value: "moderate", label: "Säännöllinen harjaus on ok", score: 3, profile: { grooming: "moderate" } },
      { value: "high", label: "En välitä käynneistä trimmaajalla", score: 3, profile: { grooming: "high" } },
    ],
  },
  {
    id: "costs",
    eyebrow: "Raha",
    title: "Selviäisitkö yllättävästä eläinlääkärikulusta?",
    help: "Tämä on se, mikä yllättää useimmat. Vakuutus tai säästöt toimivat molemmat.",
    options: [
      { value: "yes", label: "Kyllä, selviäisimme", score: 3 },
      { value: "insurance", label: "Vakuutuksen kanssa, kyllä", score: 3 },
      { value: "tight", label: "Se olisi tiukkaa", score: 1, note: "Pienen summan säästäminen joka kuukausi tai vakuutuksen ottaminen ajoissa poistaa paljon huolta tulevista vuosista." },
      { value: "no", label: "Ei juuri nyt", score: 0, note: "Eläinlääkärikulut voivat olla kalliita ja harvoin osuvat sopivaan aikaan. Muutaman kuukauden säästäminen ensin voi muuttaa kaiken." },
    ],
  },
  {
    id: "support",
    eyebrow: "Ihmisesi",
    title: "Kuka voisi auttaa, jos sairastuisit tai olisit poissa?",
    options: [
      { value: "household", label: "Joku muu kotona", score: 3 },
      { value: "family", label: "Perhe tai ystävät lähellä", score: 3 },
      { value: "paid", label: "Maksaisin hoitajasta tai päivähoidosta", score: 2 },
      { value: "noone", label: "En ole vielä varma", score: 0, note: "Jokainen sairastuu tai joutuu lähtemään pois lopulta. Tietäminen nyt, kuka auttaisi, tekee niistä viikoista paljon vähemmän stressaavia." },
    ],
  },
  {
    id: "commitment",
    eyebrow: "Pitkäjänteisyys",
    title: "Koira voi olla kanssasi kymmenen tai viisitoista vuotta. Tuntuuko se oikealta?",
    help: "Mieti, missä saatat asua, työskennellä ja matkustaa vuosikymmenen kuluttua.",
    options: [
      { value: "yes", label: "Kyllä, olemme miettineet sen", score: 3 },
      { value: "mostly", label: "Pääosin – jotkin asiat ovat epävarmoja", score: 2 },
      { value: "unsure", label: "Rehellisesti, en ole varma", score: 0, note: "Se on hyvin ymmärrettävä tunne. Ei ole mitään kiirettä – koira on edelleen olemassa, kun tilanne selkiytyy." },
    ],
  },
];

export interface ReadinessOutcome {
  id: "well-prepared" | "good-start" | "not-yet";
  title: string;
  body: string;
  encouragement: string;
}

export const readinessOutcomes: Record<ReadinessOutcome["id"], ReadinessOutcome> = {
  "well-prepared": {
    id: "well-prepared",
    title: "Näytät olevan hyvin valmistautunut.",
    body: "Sen perusteella, mitä olet kertonut, koira sopisi elämääsi ilman suuria muutoksia. Olet miettinyt aikaa, rahaa ja ihmisiä, jotka auttaisivat elämän yllättäessä – mikä on jo suurin osa vaikeasta.",
    encouragement: "Oletko valmis selvittämään, mitkä koirat sopisivat elämääsi?",
  },
  "good-start": {
    id: "good-start",
    title: "Olet hyvällä alulla.",
    body: "Useimmat palaset ovat jo paikoillaan. On yksi tai kaksi asiaa, jotka kannattaa selvittää ennen koiran kotiutumista, eikä mikään niistä ole vaikeaa – ne on vain helpompi järjestää nyt kuin uuden koiran ensimmäisen viikon keskellä.",
    encouragement: "Tutustu koiriin, jotka voisivat sopia sinulle, samalla kun selvität loput.",
  },
  "not-yet": {
    id: "not-yet",
    title: "On muutamia asioita, jotka kannattaa miettiä ensin.",
    body: "Ehkä ei ihan vielä – ja se on täysin ok. Mikään tässä ei tarkoita, ettetkö voisi saada koiraa. Se tarkoittaa, että pieni valmistautuminen nyt tekisi päätöksestä paljon helpomman ja ensimmäisestä vuodesta lempeämmän teille molemmille.",
    encouragement: "Voit jatkaa tutkimista. Mikään ei ole lukittu.",
  },
};
