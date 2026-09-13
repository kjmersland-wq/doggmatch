import type { FoodItem } from "./types";

const poisonLine = {
  label: "Ohjeita koirille myrkyllisistä ruoista",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Rauhallinen, haettava vastaus kysymykseen "voiko koirani syödä tätä?".
 * `avoid` = tunnetusti haitallinen. `care` = sopii joissain tilanteissa, varauksin.
 * Mikään tässä ei korvaa puhelua eläinlääkärille, jos koira on jo syönyt jotain.
 */
export const foodItemsFi: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Suklaa", safety: "avoid", body: "Sisältää teobromiinia, jota koirat eivät pysty hajottamaan kuten me. Tumma ja leivontasuklaa ovat pahimpia; maitosuklaakin lasketaan mukaan.", warning: "Soita heti eläinlääkärille ja kerro tyyppi, määrä ja suunnilleen ajankohta. Älä odota oireita.", source: poisonLine },
  { id: "xylitol", name: "Ksylitoli / koivusokeri", safety: "avoid", body: "Makeutusaine sokerittomassa purukumissa, pastilleissa, joissakin maapähkinävoissa, leivonnaisissa ja tietyissä lääkkeissä. Hyvin pienikin määrä voi aiheuttaa vaarallisen verensokerin laskun.", warning: "Tämä on hätätilanne. Soita eläinlääkärille heti.", source: poisonLine },
  { id: "grapes", name: "Viinirypäleet, rusinat, korintit", safety: "avoid", body: "Voivat aiheuttaa munuaisten vajaatoimintaa joillain koirilla, eikä kukaan pysty ennustamaan millä koirilla tai millä määrällä. Tämä koskee myös hedelmäkakkuja ja mysliä.", warning: "Mikä tahansa määrä vaatii eläinlääkärikäynnin samana päivänä.", source: poisonLine },
  { id: "onion", name: "Sipuli, valkosipuli, purjo, ruohosipuli", safety: "avoid", body: "Koko sipulikasvien heimo vahingoittaa punasoluja, raakana, kypsennettynä, kuivattuna tai jauheena. Varo kastikkeita, liemiä, currya ja tähteitä.", warning: "Oireet voivat ilmaantua vasta päivien kuluttua. Soita eläinlääkärillesi.", source: poisonLine },
  { id: "macadamia", name: "Macadamiapähkinät", safety: "avoid", body: "Aiheuttavat heikkoutta, horjuntaa, vapinaa ja oksentelua, usein kahdentoista tunnin sisällä.", warning: "Soita eläinlääkärillesi.", source: poisonLine },
  { id: "alcohol", name: "Alkoholi", safety: "avoid", body: "Koirat ovat paljon herkempiä kuin ihmiset. Tämä koskee myös kypsentämätöntä taikinaa ja joitain jälkiruokia.", warning: "Soita eläinlääkärille kiireesti.", source: poisonLine },
  { id: "caffeine", name: "Kahvi, tee, energiajuomat", safety: "avoid", body: "Kofeiini aiheuttaa sydämen tykytystä, levottomuutta ja vapinaa. Kahvinporot ja teepussit roskiksessa ovat yleinen syy.", warning: "Soita eläinlääkärillesi.", source: poisonLine },
  { id: "dough", name: "Raaka leipätaikina", safety: "avoid", body: "Kohoaa lämpimässä mahassa, ja hiiva tuottaa alkoholia. Kivuliasta ja todella vaarallista.", warning: "Tämä on hätätilanne.", source: poisonLine },
  { id: "cooked-bones", name: "Kypsennetyt luut", safety: "avoid", body: "Sirpaloituvat teräviksi paloiksi, jotka voivat vahingoittaa tai tukkia suoliston. Tämä koskee myös kana-, kylki- ja kylkiluita.", warning: "Jos koirasi on syönyt sellaisen, soita eläinlääkärille neuvoa." },
  { id: "corn-cob", name: "Maissintähkä", safety: "avoid", body: "Jyvät ovat vaarattomia; tähkä on yksi yleisimmistä syistä leikkausta vaativaan tukokseen koirilla.", warning: "Soita eläinlääkärille samana päivänä." },
  { id: "mouldy", name: "Homehtunut ruoka & komposti", safety: "avoid", body: "Home voi tuottaa myrkkyjä, jotka aiheuttavat voimakasta vapinaa ja kouristuksia. Pidä kompostiastiat kunnolla suljettuina.", warning: "Soita eläinlääkärille kiireesti.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Persikan, luumun ja kirsikan kivet", safety: "avoid", body: "Hedelmäliha on vaaratonta pieninä määrinä, kivet eivät ole — tukehtumis- ja tukosriski, ja ne sisältävät syaaniyhdisteitä." },
  { id: "mushrooms-wild", name: "Luonnonvaraiset sienet", safety: "avoid", body: "Jotkin ovat tappavia, eikä niiden erottaminen maastossa ole realistista. Kaupasta ostetut sienet ruoassa ovat eri asia.", warning: "Jos koirasi syö luonnonvaraisen sienen, soita eläinlääkärille ja valokuvaa se, jos voit." },
  { id: "salt", name: "Hyvin suolainen ruoka", safety: "avoid", body: "Suuret suolamäärät aiheuttavat vakavia ongelmia. Suolataikinakoristeet ja runsaan merivesimäärän nieleminen ovat tavallisia syitä." },
  { id: "rhubarb", name: "Raparperin lehdet", safety: "avoid", body: "Lehdet ovat myrkyllisiä. Hyvä tietää, jos kasvatat raparperia puutarhassa." },
  { id: "nutmeg", name: "Muskottipähkinä", safety: "avoid", body: "Suurina määrinä aiheuttaa suunnistuskyvyn menetystä ja vapinaa. Ripaus jossain ei yleensä ole hätätilanne, mutta älä tarjoa sitä." },
  { id: "hops", name: "Humala", safety: "avoid", body: "Merkityksellinen, jos joku taloudessa panee olutta. Aiheuttaa vaarallisen ruumiinlämmön nousun." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Maapähkinävoi", safety: "care", body: "Sopii satunnaiseksi herkuksi — mutta vain jos se ei sisällä ksylitolia tai koivusokeria. Lue ainesosaluettelo joka kerta, myös tutulta merkiltä.", serving: "Teelusikallinen levitettynä nuolentamatolle", warning: "Vain ksylitolitonta." },
  { id: "cheese", name: "Juusto", safety: "care", body: "Erinomaista koulutusvaluuttaa, mutta rasvaista ja suolaista. Moni koira ei siedä maitotuotteita hyvin.", serving: "Herneen kokoisia paloja, ei viipaletta" },
  { id: "yoghurt", name: "Luonnonjogurtti", safety: "care", body: "Pieni määrä luonnonjogurttia ilman lisättyä sokeria sopii joillekin koirille. Ei koskaan makeutettua — tarkista ksylitolin varalta.", serving: "Lusikallinen" },
  { id: "milk", name: "Maito", safety: "care", body: "Moni aikuinen koira on laktoosi-intolerantti, ja se näkyy yleensä vatsavaivoina. Vesi on parempi valinta." },
  { id: "bread", name: "Leipä", safety: "care", body: "Tavallinen paistettu leipä ei ole haitallista, mutta se on tyhjää kaloria. Vältä kaikkea, jossa on rusinoita, sipulia, valkosipulia tai siemeniä." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Tavallinen, ilmapopatettu ja suolaamaton sopii satunnaiseksi naposteltavaksi. Voi, suola ja makeat pinnoitteet eivät sovi. Poksahtamattomat jyvät voivat rikkoa hampaita." },
  { id: "ham", name: "Kinkku, pekoni & prosessoitu liha", safety: "care", body: "Hyvin suolaista ja rasvaista. Rasvainen ruoka on tunnettu haimatulehduksen laukaisija, joka on kivulias ja vakava." },
  { id: "avocado", name: "Avokado", safety: "care", body: "Hedelmäliha on koirille paljon vähäisempi ongelma kuin linnuille, mutta se on rasvaista, ja kivi on todellinen tukosriski. Helpointa jättää kokonaan väliin." },
  { id: "tomato", name: "Tomaatti", safety: "care", body: "Kypsä tomaatinliha on vaaratonta pieninä määrinä. Vihreät tomaatit, lehdet ja varret eivät ole." },
  { id: "nuts", name: "Pähkinät (yleisesti)", safety: "care", body: "Rasvaisia, helppo tukehtua, usein suolattuja. Macadamiapähkinät ovat myrkyllisiä. Parasta välttää tapana." },
  { id: "raw-potato", name: "Raaka peruna", safety: "care", body: "Vihreät tai itäneet perunat ovat myrkyllisiä. Tavallinen keitetty peruna ilman voita tai suolaa on sopiva silloin tällöin." },
  { id: "sweetcorn", name: "Maissinjyvät", safety: "care", body: "Tähkästä irrotetut jyvät ovat vaarattomia pieninä määrinä. Tähkä on vaara." },
  { id: "citrus", name: "Appelsiinit & sitrushedelmät", safety: "care", body: "Pieni pala kuorittua appelsiinia ei satuta, vaikka useimmat koirat eivät ole siitä innoissaan. Jätä kuori, valkoinen kalvo ja siemenet pois." },
  { id: "ice-cream", name: "Jäätelö", safety: "care", body: "Sokerista, usein maitovaltaista, ja sisältää joskus ksylitolia tai suklaata. Jäädytetty luonnonjogurtti tai jäädytetty porkkana on parempi herkku kuumana päivänä." },
  { id: "raw-fish", name: "Raaka kala", safety: "care", body: "Sisältää loinen- ja bakteeririskin, ja osa raa'asta kalasta häiritsee vitamiinien imeytymistä. Kypsennetty ja ruodoton on turvallisempi vaihtoehto." },
  { id: "liver", name: "Maksa", safety: "care", body: "Erinomainen koulutusherkku, mutta hyvin runsas A-vitamiinia. Pidä se pienissä määrissä, ei säännöllisenä aterianosana." },
  { id: "eggs-raw", name: "Raaka kananmuna", safety: "care", body: "Salmonellariski, ja raaka valkuainen voi häiritä B-vitamiinia. Kypsennetty, tavallinen kananmuna on helppo vaihtoehto." },
  { id: "honey", name: "Hunaja", safety: "care", body: "Ei myrkyllistä, pelkkää sokeria. Pieni määrä silloin tällöin sopii terveille aikuisille koirille; jätä pois diabetesta sairastavilta koirilta ja pennuilta." },
  { id: "coconut", name: "Kookos", safety: "care", body: "Pienet määrät hedelmälihaa tai öljyä eivät ole haitallisia, mutta ne ovat rasvaisia ja voivat löysätä ulostetta." },
  { id: "spinach", name: "Pinaatti & lehtikaali", safety: "care", body: "Sopii pieninä määrinä osana ateriaa. Suuret määrät eivät ole ihanteellisia munuaisongelmaisille koirille." },
  { id: "table-scraps", name: "Pöydän tähteet", safety: "care", body: "Ongelma on harvoin yksi suupala — se on kastikkeet, sipuli, suola ja rasva, sekä kalorit, joita kukaan ei laske. Pidä herkut noin kymmenesosassa päivän ruokamäärästä." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Porkkana", safety: "safe", body: "Rapea, edullinen ja vähäkalorinen. Kylmä porkkana on hyvä purtava hampaitaan saavalle pennulle.", serving: "Raakoja tikkuja tai kypsennettyjä paloja" },
  { id: "apple", name: "Omena", safety: "safe", body: "Makea, rapea ja suosittu. Poista siemenkota ja siemenet.", serving: "Muutama viipale" },
  { id: "banana", name: "Banaani", safety: "safe", body: "Sopii pieninä määrinä. Sokerista, joten ei joka päivä.", serving: "Pari viipaletta banaania" },
  { id: "blueberries", name: "Mustikat", safety: "safe", body: "Pieniä, helppo antaa, ja useimmat koirat rakastavat niitä.", serving: "Pieni kourallinen" },
  { id: "watermelon", name: "Vesimeloni", safety: "safe", body: "Virkistävää kuumana päivänä. Poista siemenet ja kuori.", serving: "Muutama kuutio, tai pakastettuna" },
  { id: "strawberries", name: "Mansikat", safety: "safe", body: "Sopii tuoreena, pieninä määrinä. Ei purkista tai siirapissa.", serving: "Yksi tai kaksi" },
  { id: "pumpkin", name: "Tavallinen kurpitsa", safety: "safe", body: "Tavallinen kypsennetty tai purkitettu kurpitsa (ei piirakkatäyte) on lempeä vatsalle, ja sitä suositellaan usein löysän ulosteen kiinteyttämiseen.", serving: "Lusikallinen tai kaksi" },
  { id: "green-beans", name: "Vihreät pavut", safety: "safe", body: "Täyttävää ja vähäkalorista — todella hyödyllistä, jos koirasi laihduttaa.", serving: "Pieni kourallinen, sellaisenaan" },
  { id: "cucumber", name: "Kurkku", safety: "safe", body: "Enimmäkseen vettä. Hyvä naposteltava kuumalla säällä.", serving: "Muutama viipale" },
  { id: "chicken", name: "Tavallinen kypsennetty kana", safety: "safe", body: "Ilman nahkaa, luita ja mausteita. Yksi parhaista koulutusherkuista.", serving: "Pieniä paloja" },
  { id: "turkey", name: "Tavallinen kypsennetty kalkkuna", safety: "safe", body: "Samat säännöt kuin kanalla: ei nahkaa, ei luita, ei mausteita, ei kastiketta.", serving: "Pieniä paloja" },
  { id: "fish-cooked", name: "Kypsennetty valkokala & lohi", safety: "safe", body: "Hyvin kypsennetty ja huolellisesti ruodoton. Hyvä proteiinin ja omega-3:n lähde.", serving: "Pieni annos" },
  { id: "rice", name: "Tavallinen keitetty riisi", safety: "safe", body: "Mietoa ja helposti sulavaa — usein eläinlääkärin suosittelemaa vatsavaivan jälkeen.", serving: "Sekoitettuna ateriaan" },
  { id: "egg", name: "Kypsennetty kananmuna", safety: "safe", body: "Munakokkelia ilman voita tai suolaa, tai kovaksi keitettynä.", serving: "Osa munaa, koirasi koon mukaan" },
  { id: "sweet-potato", name: "Kypsennetty bataatti", safety: "safe", body: "Tavallinen ja kypsennetty. Useimmat koirat ovat siitä hyvin innoissaan.", serving: "Pieni määrä, ilman voita" },
  { id: "peas", name: "Herneet", safety: "safe", body: "Tuoreita tai pakastettuja, sellaisenaan. Vältä purkitettuja herneitä — liikaa suolaa.", serving: "Lusikallinen" },
  { id: "broccoli", name: "Parsakaali", safety: "safe", body: "Sopii pieninä määrinä. Suuri määrä voi aiheuttaa ilmavaivoja ja vatsan ärsytystä.", serving: "Pari pientä nuppua" },
  { id: "courgette", name: "Kesäkurpitsa", safety: "safe", body: "Vähäkalorista ja lempeää vatsalle, raakana tai sellaisenaan kypsennettynä.", serving: "Muutama pala" },
  { id: "celery", name: "Varsiselleri", safety: "safe", body: "Rapeaa ja hyvin vähäkalorista. Pilko se pieneksi.", serving: "Pieniä silputtuja paloja" },
  { id: "pear", name: "Päärynä", safety: "safe", body: "Sopii ilman siemenkotaa ja siemeniä.", serving: "Muutama pala" },
  { id: "melon", name: "Cantaloupemeloni", safety: "safe", body: "Makeaa ja nesteikästä. Poista kuori ja siemenet.", serving: "Muutama kuutio" },
  { id: "mango", name: "Mango", safety: "safe", body: "Kuorittuna, kivi poistettuna. Sokerista, joten pidä määrä pienenä.", serving: "Pari palaa" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Vain tuoretta, kuori ja sydän poistettuna. Ei sokeroitua purkista.", serving: "Pieni pala" },
  { id: "oats", name: "Tavallinen keitetty kaurapuuro", safety: "safe", body: "Tavallinen vedellä keitetty puuro. Ei sokeria, ei makeutusaineita, ei maitoa.", serving: "Lusikallinen" },
  { id: "sardines", name: "Sardiinit vedessä", safety: "safe", body: "Purkitettu vedessä, ei öljyssä tai suolavedessä. Hyvä omega-3:n lähde.", serving: "Osa purkkia, silloin tällöin" },
  { id: "cauliflower", name: "Kukkakaali", safety: "safe", body: "Sellaisenaan ja pieninä määrinä. Voi aiheuttaa ilmavaivoja, kuten meillekin.", serving: "Pieni nuppu" },
  { id: "lettuce", name: "Salaatti", safety: "safe", body: "Vaaratonta ja enimmäkseen vettä. Ei jännittävää, mutta sopivaa.", serving: "Vähän, silputtuna" },
  { id: "beetroot", name: "Kypsennetty punajuuri", safety: "safe", body: "Sellaisenaan kypsennetty punajuuri sopii pieninä määrinä — ei säilöttyä.", serving: "Pieni pala" },
];

export const nutritionSectionsFi = [
  {
    title: "Lue ainesosaluettelo, älä pakkausta",
    body: "Pussin etupuoli on markkinointia. Tärkeää on maininta siitä, että ruoka on täysravintoa ja tasapainoista koirasi elämänvaiheelle, sekä ruokintaohje, jota voit oikeasti noudattaa.",
    points: [
      "\"Täysravinto\" tarkoittaa, että sitä voi antaa yksinään. \"Täydennysravinto\" tarkoittaa, ettei voi",
      "Tarkista, että se on oikealle elämänvaiheelle — pentu, aikuinen tai kaikille elämänvaiheille",
      "Ruokintaohjeet ovat lähtökohta, ei sääntö. Säädä koirasi mukaan",
      "Merkit, joilla on eläinlääkäreitä ja ravitsemusasiantuntijoita palveluksessaan ja jotka tekevät ruokintakokeita, ovat turvallisempi valinta",
    ],
  },
  {
    title: "Kuinka paljon, oikeasti",
    body: "Jokainen pussin ohje on keskiarvo. Kaksi samanpainoista koiraa voivat tarvita huomattavan eri määriä, ja rehellinen vastaus on ruokkia, tarkkailla ja säätää muutaman viikon välein.",
    points: [
      "Punnitse ruoka mittalusikan sijaan — mittalusikat epätarkentuvat ajan myötä",
      "Laske herkut ja purutikut mukaan. Ne kertyvät nopeammin kuin luulisi",
      "Tarkista kuntoluokka kuukausittain ja säädä noin 10 % kerrallaan",
      "Kastroidut koirat tarvitsevat usein hieman vähemmän kuin ennen",
    ],
  },
  {
    title: "Kuinka usein",
    body: "Pennut tarvitsevat useita pieniä aterioita; aikuiset pärjäävät hyvin kahdella. Päivän ruoan jakaminen kahteen ateriaan sopii useimpien koirien rytmiin paremmin kuin yksi iso kulho.",
    points: [
      "Alle 4 kuukautta: kolme tai neljä ateriaa päivässä",
      "4–6 kuukautta: kolme ateriaa",
      "6 kuukaudesta ylöspäin: kaksi ateriaa",
      "Syvärintaiset koirat: vältä rasittavaa liikuntaa juuri ruokailun ympärillä",
    ],
  },
  {
    title: "Ruoan vaihtaminen",
    body: "Äkilliset muutokset aiheuttavat useimmille koirille vatsavaivoja. Varaa siihen noin viikko.",
    points: [
      "Päivät 1–2: neljäsosa uutta, kolme neljäsosaa vanhaa",
      "Päivät 3–4: puolet ja puolet",
      "Päivät 5–6: kolme neljäsosaa uutta",
      "Päivä 7: pelkkää uutta ruokaa",
      "Jos uloste löystyy, hidasta vauhtia jatkamisen sijaan",
    ],
  },
  {
    title: "Vesi",
    body: "Raikasta vettä aina saatavilla, puhtaassa kulhossa. Kuulostaa itsestäänselvältä, ja silti se unohtuu useimmin kuumina päivinä ja pitkillä matkoilla.",
  },
  {
    title: "Raakaruokinta ja kotona valmistettu ruoka",
    body: "Molemmat voi tehdä hyvin, ja molemmissa on helppo mokata. Erityisesti kotona valmistettu ruoka on hyvin usein epätasapainoista, ellei eläinravitsemusasiantuntija ole sitä koostanut.",
    points: [
      "Raakaruokintaan liittyy bakteeririski koirallesi ja taloudellesi",
      "Kotiruoka tarvitsee kunnollisen reseptin ja lisäravinteita ollakseen täysipainoista",
      "Puhu eläinlääkärisi kanssa ennen vaihtoa, erityisesti pennuille ja vanhemmille koirille",
      "Tämä on aito päätös, joka tehdään yhdessä ammattilaisen kanssa, ei foorumin perusteella",
    ],
  },
] as const;
