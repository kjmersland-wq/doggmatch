/**
 * Kaikki, mitä "Hanki koira" -matka kertoo, DoggMatchin äänellä.
 * Pidetty poissa komponenteista, jotta niitä voidaan kääntää myöhemmin koskematta
 * yhteenkään asettelun osaan.
 */

export interface JourneyStep {
  id: string;
  no: string;
  title: string;
  body: string;
  to: string;
}

export const journey: JourneyStep[] = [
  { id: "ready", no: "01", title: "Onko koira minulle sopiva?", body: "Muutama rehellinen kysymys päivistäsi, kodistasi ja ympärilläsi olevista ihmisistä.", to: "/get-a-dog/ready" },
  { id: "find", no: "02", title: "Löydä koirani", body: "Katso, mitkä rodut sopivat yleensä elämääsi – ja miksi.", to: "/find-my-dog" },
  { id: "choose", no: "03", title: "Valitse huolella", body: "Pentua vai aikuista, kasvattajalta vai kodinvaihtajalta, ja mitä kysyä ennen kuin sanot kyllä.", to: "/get-a-dog/choose" },
  { id: "costs", no: "04", title: "Ymmärrä sitoumus", body: "Mitä koira todella maksaa, ennen kuin se saapuu ja joka kuukausi sen jälkeen.", to: "/get-a-dog/costs" },
  { id: "prepare", no: "05", title: "Valmistaudu", body: "Ostokset, eläinlääkäri, vakuutus – ja kodin järjestäminen.", to: "/get-a-dog/prepare" },
  { id: "welcome", no: "06", title: "Tervetuloa kotiin", body: "Ensimmäinen päivä ja ensimmäinen viikko, lempeästi hoidettuna.", to: "/get-a-dog/welcome-home" },
  { id: "mydog", no: "07", title: "Oma koirani", body: "Sen koko elämä yhdessä paikassa – ruoka, koulutus, terveys, lenkit ja paperityöt.", to: "/my-dog" },
];

/* ------------------------------------------------------------ Pentu / aikuinen */

export const puppyVsAdult = {
  title: "Pentua vai jo kasvanutta koiraa?",
  body: "Kumpikaan ei ole parempi. Ne ovat kaksi hyvin erilaista ensimmäistä vuotta, ja oikea valinta riippuu enemmän elämästäsi kuin koirasta.",
  puppy: {
    title: "Pentua",
    lead: "Voit muokata lähes kaikkea – ja maksat sen unettomuudella.",
    good: [
      "Näet jokaisen vaiheen siitä, millaiseksi se kasvaa",
      "Sosiaalistaminen ja tavat alkavat sinusta",
      "Yleensä helpompi totuttaa muihin lemmikkeihin ja lapsiin",
      "Pitkä yhteinen elämä edessäsi",
    ],
    hard: [
      "Katkonaiset yöt, sisäsiisteyskasvatus ja pureskelu kuukausien ajan",
      "Tarvitsee seuraa suurimman osan päivästä aluksi",
      "Persoonallisuus on edelleen arvaus, jopa huolellisella kasvattajalla",
      "Rokotukset, sterilointi ja varhaiset eläinlääkärikulut osuvat ensimmäiseen vuoteen",
    ],
  },
  adult: {
    title: "Aikuista koiraa",
    lead: "Paljon enemmän siitä, mitä näet, on sitä, mitä saat.",
    good: [
      "Koko, turkki ja luonne ovat jo selkeät",
      "Monet ovat sisäsiistejä ja osaavat olla yksin",
      "Usein rauhallisempi ensihetkestä lähtien",
      "Kodinvaihtajat tulevat yleensä rehellisen arvion kanssa koirasta",
    ],
    hard: [
      "Ne saapuvat historian kanssa, jonka saatat tuntea vain osittain",
      "Joidenkin tapojen muuttaminen vaatii kärsivällisyyttä",
      "Vähemmän vuosia yhdessä, varsinkin vanhemman koiran kanssa",
      "Sopeutuminen voi kestää viikkoja, ei päiviä",
    ],
  },
  closing:
    "Jos päiväsi ovat jo täynnä, aikuinen koira, joka osaa olla koira, on usein lempeämpi valinta – sinulle ja sille.",
};

/* -------------------------------------------------------------- Lähde */

export const sources = {
  title: "Mistä koirasi tulee?",
  body: "Molemmat reitit voivat tuoda sinulle ihanan koiran. Molemmat ovat muutaman huolellisen kysymyksen arvoisia. Kumpikaan ei ole automaattisesti oikea vastaus.",
  breeder: {
    title: "Vastuullinen kasvattaja",
    good: [
      "Tapaat emon ja näet, miten pentuja kasvatetaan",
      "Rodulle relevantit terveystestit on yleensä tehty",
      "Saat melko selkeän käsityksen aikuisen koiran koosta, turkista ja luonteesta",
      "Hyvä kasvattaja pysyy yhteydessä koiran koko elämän ajan",
    ],
    check: [
      "Kasvatetaanko pentuja kodissa, normaalin kotielämän keskellä?",
      "Mitä terveystestejä on tehty, ja voitko nähdä tulokset?",
      "Kuinka monta pentuetta heillä on, ja kuinka monesta rodusta?",
      "Ottavatko he koiran takaisin, jos olosuhteesi muuttuvat joskus?",
    ],
  },
  rescue: {
    title: "Adoptointi tai kodinvaihto",
    good: [
      "Aikuisilla koirilla on persoonallisuus, jonka voit todella tavata",
      "Hyvät kodinvaihtopaikat arvioivat ja kuvailevat koiriaan rehellisesti",
      "Usein jo rokotettu, sirutettu ja leikattu",
      "Tuki adoptoinnin jälkeen on yleensä osa sopimusta",
    ],
    check: [
      "Mitä he tietävät koiran historiasta ja edellisestä kodista?",
      "Miten koira käyttäytyy lasten, muiden koirien ja kissojen kanssa?",
      "Mitä terveystietoja niiden mukana tulee?",
      "Mitä apua on tarjolla, jos ensimmäiset viikot ovat vaikeita?",
    ],
  },
};

export const breederQuestions = [
  "Voinko tavata emon?",
  "Voinko nähdä, missä pentuja kasvatetaan?",
  "Mitä terveystestejä tälle rodulle on tehty?",
  "Mitä eläinlääkinnällistä hoitoa pennut ovat saaneet tähän mennessä?",
  "Miten niitä on sosiaalistettu – mitä ne ovat kohdanneet ja kuulleet?",
  "Mitä tukea on tarjolla sen jälkeen, kun olen vienyt pennun kotiin?",
  "Mitä dokumentaatiota saan?",
  "Voinko käyttää muutaman päivän päätöksen tekemiseen?",
];

export const breederRedFlags = [
  "Sinua painostetaan maksamaan tai päättämään välittömästi",
  "Et voi nähdä, missä pennut asuvat, tai tavata emoa",
  "Terveys- tai rokotusdokumentaatio puuttuu tai on epäselvää",
  "Suoriin kysymyksiin saa vältteleviä vastauksia",
  "Epätavallisen suuri määrä sukulattomia pentueita tai monta rotua kerralla",
  "Pentua näyttää sairaalta tai on äärimmäisen pelokas tavallisia asioita kohtaan",
  "Tarina muuttuu keskustelujen välillä",
];

export const adoptionConsiderations = [
  { title: "Historia", body: "Jotkut koirat saapuvat täydellä tarinalla, toiset melkein ilman mitään. Hyvä kodinvaihtopaikka kertoo sinulle rehellisesti, kumpi tilanne on kyseessä." },
  { title: "Luonne", body: "Kysy, mitä he ovat todella nähneet: vieraita kohtaan, hihnassa, autossa, tunnin yksin jätettynä." },
  { title: "Terveys", body: "Pyydä eläinlääkärin muistiinpanot, ei yhteenvetoa. Jatkuvat sairaudet ovat hallittavissa, kun tiedät niistä." },
  { title: "Käyttäytyminen", body: "Useimmat 'ongelmat' ovat koira, jota ei ole opetettu, tai joka on peloissaan. Kysy, mitä apua on saatavilla." },
  { title: "Kotisi", body: "Portaat, lapset, kissat, vilkas katu – sano kaikki ääneen. Hyvä sopivuus on tärkeämpää kuin nopea." },
  { title: "Jälkeenpäin", body: "Kysy, mitä tukea on tarjolla toisella viikolla, kun ensimmäinen innostus on laantunut ja todellinen koira ilmestyy." },
];

/* -------------------------------------------------------------- Kustannukset */

export interface CostGroup {
  id: string;
  title: string;
  body: string;
  items: { label: string; note: string }[];
}

export const costGroups: CostGroup[] = [
  {
    id: "before",
    title: "Ennen kuin koirasi saapuu",
    body: "Kertaluonteiset kulut. Suurin osa niistä tapahtuu yhden kahden viikon aikana, minkä vuoksi se yllättää ihmiset.",
    items: [
      { label: "Osto- tai adoptointimaksu", note: "Vaihtelee valtavasti rodun, maan ja reitin mukaan" },
      { label: "Petipaikka ja häkki, jos käytät sellaista", note: "Osta koko, johon se kasvaa" },
      { label: "Kupit, panta, valjaat, hihna, nimikyltti", note: "Lailliset tunnistetiedot vaihtelevat maittain" },
      { label: "Turkinhoitosetti", note: "Harja, kampa, kynsileikkurit, hammasharja" },
      { label: "Lelut ja purtavat", note: "Vähemmän kuin luulet, vaihdetaan useammin kuin luulet" },
      { label: "Ensimmäinen eläinlääkärikäynti", note: "Tarkastus, rokotukset, mikrosiru, jos ei jo tehty" },
    ],
  },
  {
    id: "monthly",
    title: "Joka kuukausi",
    body: "Tasainen kustannus. Kannattaa kirjoittaa rehellisesti ylös ennen sitoutumista, ei sen jälkeen.",
    items: [
      { label: "Ruoka", note: "Suurin yksittäinen kuukausikulu, ja se skaalautuu koon mukaan" },
      { label: "Herkut ja purtavat", note: "Koulutus perustuu niihin ensimmäisenä vuonna" },
      { label: "Vakuutus", note: "Halvempi, mitä nuorempi ja terveempi se on" },
      { label: "Turkinhoito", note: "Nollasta kuuden viikon välein tapahtuvaan salonkikäyntiin" },
      { label: "Rutiinihoito", note: "Madotus, kirppu- ja punkkikarkotteet, kynsien leikkaus" },
      { label: "Apua työpäivän aikana", note: "Koiranulkoiluttaja tai päivähoito, jos päiväsi ovat pitkiä" },
    ],
  },
  {
    id: "unexpected",
    title: "Valmistaudu yllätyksiin",
    body: "Osa, jota kukaan ei budjetoi. Pieni säästäminen joka kuukausi tekee näistä siedettäviä.",
    items: [
      { label: "Odottamaton eläinlääkinnällinen hoito", note: "Loukkaantumiset ja sairaudet harvoin osuvat kätevästi" },
      { label: "Hammashoito", note: "Erittäin yleistä keski-iässä, eikä halpaa" },
      { label: "Hätä- ja päivystyshoito", note: "Maksaa enemmän kuin suunniteltu vastaanotto" },
      { label: "Tavaroiden korvaaminen", note: "Pedit, hihnat ja yksi tai kaksi esinettä, joista pidit" },
    ],
  },
];

/* ---------------------------------------------------------------- Kotisi */

export const homeScenarios = [
  { id: "apartment", title: "Asunto", body: "Täysin toimiva. Mieti portaita tai hissiä, naapureita ja minne menet päivän ensimmäiselle lenkille." },
  { id: "house", title: "Talo", body: "Tila sisällä on vähemmän tärkeää kuin odottaisit. Tärkeintä on lenkkeily kymmenen minuutin säteellä ovestasi." },
  { id: "garden", title: "Puutarha", body: "Mukava olla, eikä korvaa lenkkiä. Tarkista aita, portti ja kaikki kasvit, joita ei pitäisi syödä." },
  { id: "city", title: "Kaupunki", body: "Vilkkaita jalkakäytäviä, liikennettä, hissejä ja kahviloita. Kaupunkikoirien on oltava mukavia melulle enemmän kuin mikään muu." },
  { id: "suburb", title: "Lähiö", body: "Yleensä helpoin kaikista: hiljaiset kadut, viheralueita lähellä ja paikka purkaa energiaa viikonloppuna." },
  { id: "rural", title: "Maaseutu", body: "Tilaa ja vapautta, mutta myös karjaa, villieläimiä ja pidempi ajomatka eläinlääkäriin." },
];

export const homeFactors = [
  "Portaat ja se, selviäisikö koirasi niistä elämän molemmissa päissä",
  "Hissi ja se, viihtyisikö koira sellaisessa",
  "Ulkotila ja kuinka turvallinen se todella on",
  "Vihreät alueet helposti kävelymatkan päässä",
  "Paikka, jossa koiraa voi turvallisesti juoksuttaa",
  "Kahvilat, kaupat ja julkinen liikenne, jotka toivottavat koirat tervetulleiksi",
];

export const lifeScenarios = [
  { id: "quiet", title: "Rauhallinen kotikissa", body: "Tasaiset rutiinit ja lyhyet, säännölliset lenkit. Rauhallisempi koira viihtyy täällä paremmin kuin urheilija." },
  { id: "outdoors", title: "Aktiivinen ulkoilija", body: "Viikonloput poluilla, säällä ei väliä. Kuntoinen koira, joka voi kasvattaa matkaa kanssasi." },
  { id: "city", title: "Kaupunkielämä", body: "Jalkakäytävät, julkinen liikenne, väkijoukot. Luottamus melua kohtaan on tärkeämpää kuin koko." },
  { id: "family", title: "Perhe-elämä", body: "Melu, vieraat, koulukuljetukset. Tärkeintä on suvaitsevaisuus ja paikka vetäytyä." },
  { id: "home-office", title: "Etätyö", body: "Ihanaa koiralle – kunhan se oppii myös olemaan joskus yksin." },
  { id: "retired", title: "Eläkkeellä tai joustava", body: "Aikaa ja rutiinia, mikä on suurin osa siitä, mitä koira haluaa. Mieti voimaa hihnassa." },
  { id: "travel", title: "Usein matkustava", body: "Täysin mahdollista suunnitelmalla: säännöllinen hoitaja tai koira, joka matkustaa hyvin kanssasi." },
];

/* ------------------------------------------------------------- Valmistelu */

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

export const arrivalChecklist: ChecklistItem[] = [
  { id: "food", label: "Ruoka", note: "Aloita sillä, mitä se jo syö, ja vaihda sitten hitaasti" },
  { id: "bowls", label: "Kupit", note: "Yksi ruualle, yksi aina täynnä vettä" },
  { id: "collar", label: "Panta" },
  { id: "tag", label: "Nimikyltti", note: "Ainakin puhelinnumerosi" },
  { id: "harness", label: "Valjaat" },
  { id: "lead", label: "Hihna" },
  { id: "bed", label: "Petipaikka", note: "Jossain rauhallisessa paikassa, poissa kodin läpikulkuväyliltä" },
  { id: "toys", label: "Muutama lelu" },
  { id: "grooming", label: "Turkinhoitotarvikkeet" },
  { id: "toothbrush", label: "Hammasharja ja koiran hammastahna" },
  { id: "waste", label: "Pussit jätöksille" },
  { id: "cleaning", label: "Puhdistusaineet", note: "Entsyymipohjainen puhdistusaine, niille vahingoille, joita sattuu" },
  { id: "travel", label: "Turvalliset matkustusvarusteet", note: "Matkalle kotiin sekä sen jälkeen" },
  { id: "vet", label: "Eläinlääkäriaika varattu" },
  { id: "insurance", label: "Vakuutus järjestetty" },
  { id: "microchip", label: "Mikrosirun tiedot", note: "Rekisteröity nimellesi, nykyisellä puhelinnumerollasi" },
  { id: "emergency", label: "Hätäyhteystiedot kirjoitettuna", note: "Oma eläinlääkärisi ja lähin päivystävä klinikka" },
];

export const firstDay = [
  { title: "Pidä se rauhallisena", body: "Ei tervetulojuhlia. Vain kodissa asuvat ihmiset, puhuen normaalisti." },
  { title: "Näytä sille sen peti", body: "Vie se paikalle, joka on sen oma, ja anna sen tulla takaisin omaan tahtiinsa." },
  { title: "Vettä, sitten ruokaa", body: "Vettä heti. Ruokaa, kun se on hieman rauhoittunut, ja samaa ruokaa kuin ennenkin." },
  { title: "Anna sen tutkia", body: "Yksi huone kerrallaan, ilman hihnaa, sinun lähelläsi, mutta et vaanimassa." },
  { title: "Pidä maailma pienenä", body: "Talo ja piha riittävät yhdeksi päiväksi. Kaikki muu voi odottaa." },
  { title: "Ala tarkkailla", body: "Milloin se tarvitsee ulos, missä se valitsee nukkua, mikä tekee siitä levottoman. Tämä on alun tunnistamista." },
];

export const firstWeek = [
  { title: "Lempeä rutiini", body: "Samat ajat ruualle, lenkeille ja nukkumaanmenolle. Ennakoitavuus on se, mikä rauhoittaa koiran nopeimmin." },
  { title: "Sen nimi", body: "Sano se ja palkitse, kun se katsoo sinua. Ei mitään monimutkaisempaa vielä." },
  { title: "Ensimmäiset pienet opetukset", body: "Tuleminen kutsuttaessa ja viihtyminen yksin muutaman minuutin ajan." },
  { title: "Sisäsiisteysrutiini", body: "Ulkona nukkumisen, syömisen ja leikkimisen jälkeen. Kehu, kun se tapahtuu, älä koskaan moiti vahinkoja." },
  { title: "Uni", body: "Uudet koirat nukkuvat valtavasti. Anna niiden nukkua. Pennut tarvitsevat suurimman osan päivästä." },
  { title: "Maailmaan tutustuminen", body: "Tahdilla, joka sopii sen ikään, ja eläinlääkärisi rokotussuositusten mukaisesti." },
  { title: "Yhdessä oleminen", body: "Hiljaa samassa huoneessa istuminen tekee enemmän siteen luomiselle kuin mikään liikunta." },
  { title: "Huomaaminen", body: "Ruokahalu, ulostamistavat, energiataso. Tiedät, mikä on sille normaalia, nopeammin kuin luuletkaan." },
];
