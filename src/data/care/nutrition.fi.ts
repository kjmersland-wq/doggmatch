import type { FoodItem } from "./types";

const poisonLine = {
  label: "Myrkyllisten ruokien ohjeistus koirille",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Rauhallinen, haettava vastaus kysymykseen "voiko koirani syödä tätä?".
 * `avoid` = tiedetään haitalliseksi. `care` = sopii joissain tilanteissa, tietyin varauksin.
 * Mikään tässä ei korvaa eläinlääkärin puhelua, jos koira on jo syönyt jotain.
 */
export const foodItemsFi: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Suklaa", safety: "avoid", body: "Sisältää teobromiinia, jota koirat eivät pysty käsittelemään samalla tavalla kuin me. Tumma ja leivontasuklaa ovat pahimpia; maitosuklaakin lasketaan.", warning: "Soita eläinlääkärille heti, kerro tyyppi, määrä ja suunnilleen milloin. Älä odota oireita.", source: poisonLine },
  { id: "xylitol", name: "Ksylitoli / koivusokeri", safety: "avoid", body: "Makeutusaine sokerittomassa purukumissa, pastilleissa, joissain maapähkinävoissa, leivonnaisissa ja joissain lääkkeissä. Hyvin pienet määrät voivat aiheuttaa vaarallisen verensokerin laskun.", warning: "Tämä on hätätapaus. Soita eläinlääkärille välittömästi.", source: poisonLine },
  { id: "grapes", name: "Viinirypäleet, rusinat, sultiinat, karviaiset", safety: "avoid", body: "Voivat aiheuttaa munuaisten vajaatoimintaa joillakin koirilla, eikä kukaan voi ennustaa, mitkä koirat tai mikä määrä. Tämä koskee myös lihapiirakoita, hedelmäkakkuja ja granolaa.", warning: "Mikä tahansa määrä vaatii eläinlääkärikäynnin samana päivänä.", source: poisonLine },
  { id: "onion", name: "Sipuli, valkosipuli, purjo, ruohosipuli", safety: "avoid", body: "Koko sipulikasvien suku vahingoittaa punasoluja, raakana, kypsennettynä, kuivattuna tai jauheena. Varo kastikkeita, liemiä, curryja ja tähteitä.", warning: "Oireet voivat ilmetä vasta päivien kuluttua. Soita eläinlääkärillesi.", source: poisonLine },
  { id: "macadamia", name: "Macadamiapähkinät", safety: "avoid", body: "Aiheuttavat heikkoutta, horjuvuutta, vapinaa ja oksentelua, usein kahdentoista tunnin kuluessa.", warning: "Soita eläinlääkärillesi.", source: poisonLine },
  { id: "alcohol", name: "Alkoholi", safety: "avoid", body: "Koirat ovat paljon herkempiä kuin ihmiset. Sisältää myös raakaisen taikinan ja joitain jälkiruokia.", warning: "Soita eläinlääkärille kiireellisesti.", source: poisonLine },
  { id: "caffeine", name: "Kahvi, tee, energiajuomat", safety: "avoid", body: "Kofeiini aiheuttaa sydämen tykytyksiä, levottomuutta ja vapinaa. Kahvinporot ja teepussit roskakorissa ovat yleinen syyllinen.", warning: "Soita eläinlääkärillesi.", source: poisonLine },
  { id: "dough", name: "Raaka leipätaikina", safety: "avoid", body: "Kohoaa lämpimässä vatsassa ja hiiva tuottaa alkoholia. Kivuliasta ja todella vaarallista.", warning: "Tämä on hätätapaus.", source: poisonLine },
  { id: "cooked-bones", name: "Kypsennetyt luut", safety: "avoid", body: "Hajoavat teräviksi sirpaleiksi, jotka voivat vahingoittaa tai tukkia suoliston. Tämä koskee myös kanan-, kyljyksen- ja kylkiluita.", warning: "Jos koirasi on syönyt sellaisen, soita eläinlääkärillesi neuvoa varten." },
  { id: "corn-cob", name: "Maissintähkä", safety: "avoid", body: "Jytkät ovat ok; tähkä on yksi yleisimmistä syistä kirurgiseen tukkeumaan koirilla.", warning: "Soita eläinlääkärillesi samana päivänä." },
  { id: "mouldy", name: "Homeinen ruoka ja komposti", safety: "avoid", body: "Home voi tuottaa myrkkyjä, jotka aiheuttavat vakavia vapinoita ja kouristuksia. Pidä kompostikorit kunnolla suljettuina.", warning: "Soita eläinlääkärille kiireellisesti.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Persikan, luumun ja kirsikan kivet", safety: "avoid", body: "Hedelmäliha on pieninä määrinä ok, kivet eivät – tukehtumis- ja tukosriski, ja ne sisältävät syanidiyhdisteitä." },
  { id: "mushrooms-wild", name: "Villit sienet", safety: "avoid", body: "Jotkut ovat tappavia, ja niiden erottaminen pellolla ei ole realistista. Kaupasta ostetut sienet ateriassa ovat eri asia.", warning: "Jos koirasi syö villisienen, soita eläinlääkärille ja ota kuva, jos voit." },
  { id: "salt", name: "Erittäin suolainen ruoka", safety: "avoid", body: "Suuret määrät suolaa aiheuttavat vakavia ongelmia. Suolataikinakoristeet ja suuren meriveden nieleminen ovat tavallisia syitä." },
  { id: "rhubarb", name: "Raparperin lehdet", safety: "avoid", body: "Lehdet ovat myrkyllisiä. Hyvä tietää, jos kasvatat sitä puutarhassa." },
  { id: "nutmeg", name: "Muskottipähkinä", safety: "avoid", body: "Määrällisesti aiheuttaa sekavuutta ja vapinaa. Ripaus jossain ei yleensä ole kriisi, mutta älä tarjoa sitä." },
  { id: "hops", name: "Humala", safety: "avoid", body: "Asiaankuuluva, jos joku talossa panostaa olutta. Aiheuttaa vaarallisen ruumiinlämmön nousun." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Maapähkinävoi", safety: "care", body: "Sopii satunnaiseksi herkuksi – mutta vain, jos se ei sisällä ksylitolia tai koivusokeria. Lue etiketti joka kerta, jopa tuntemastasi merkistä.", serving: "Teelusikallinen levitettynä nuolumattoon", warning: "Vain ksylitoli-vapaa." },
  { id: "cheese", name: "Juusto", safety: "care", body: "Erinomainen koulutusherkku, mutta rasvainen ja suolainen. Monet koirat eivät siedä maitotuotteita hyvin.", serving: "Herneenkokoisia paloja, ei viipaletta" },
  { id: "yoghurt", name: "Maustamaton jogurtti", safety: "care", body: "Pienet määrät maustamatonta, makeuttamatonta jogurttia sopivat joillekin koirille. Älä koskaan mitään makeutettua – tarkista ksylitoli.", serving: "Lusikan kärjellinen" },
  { id: "milk", name: "Maito", safety: "care", body: "Monet aikuiset koirat ovat laktoosi-intolerantteja ja se ilmenee yleensä vatsavaivoina. Vesi on parempi vaihtoehto." },
  { id: "bread", name: "Leipä", safety: "care", body: "Tavallinen paistettu leipä ei ole haitallista, mutta se on tyhjää kaloria. Vältä kaikkea, jossa on rusinoita, sipulia, valkosipulia tai siemeniä." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Tavallinen, ilmassa paistettu ja suolaamaton sopii satunnaiseksi välipalaksi. Voi, suola ja makeat kuorrutteet eivät sovi. Palamattomat jyvät voivat rikkoa hampaita." },
  { id: "ham", name: "Kinkku, pekoni ja prosessoitu liha", safety: "care", body: "Erittäin suolaista ja rasvaista. Rasvaiset ruoat ovat tunnettu haimantulehduksen laukaisija, joka on kivulias ja vakava." },
  { id: "avocado", name: "Avokado", safety: "care", body: "Hedelmäliha on koirille paljon pienempi ongelma kuin linnuille, mutta se on rasvaista ja kivi on todellinen tukosriski. Helpompi jättää väliin." },
  { id: "tomato", name: "Tomaatti", safety: "care", body: "Kypsä tomaatin hedelmäliha on pieninä määrinä ok. Vihreät tomaatit, lehdet ja varret eivät ole." },
  { id: "nuts", name: "Pähkinät (yleisesti)", safety: "care", body: "Rasvaisia, helppo tukehtua, usein suolattuja. Macadamiat ovat myrkyllisiä. Parasta välttää tapana." },
  { id: "raw-potato", name: "Raaka peruna", safety: "care", body: "Vihreät tai itäneet perunat ovat myrkyllisiä. Tavallinen kypsennetty peruna ilman voita tai suolaa on satunnaisesti ok." },
  { id: "sweetcorn", name: "Maissinjyvät", safety: "care", body: "Tähkästä irrotetut jyvät ovat vaarattomia pieninä määrinä. Tähkä on vaara." },
  { id: "citrus", name: "Appelsiinit ja sitrushedelmät", safety: "care", body: "Pieni pala kuorittua appelsiinia ei vahingoita, vaikka useimmat koirat eivät pidäkään siitä. Jätä kuori, valkoinen osa ja siemenet pois." },
  { id: "ice-cream", name: "Jäätelö", safety: "care", body: "Sokerista, usein maitopitoista, ja sisältää joskus ksylitolia tai suklaata. Pakastettu maustamaton jogurtti tai pakastettu porkkana on parempi herkku kuumana päivänä." },
  { id: "raw-fish", name: "Raaka kala", safety: "care", body: "Sisältää loisten ja bakteerien riskiä, ja jotkut raa'at kalat häiritsevät vitamiinien imeytymistä. Kypsennetty ja ruodoton on turvallisempi versio." },
  { id: "liver", name: "Maksa", safety: "care", body: "Loistava koulutusherkku, mutta erittäin A-vitamiinipitoinen. Pidä se pieninä määrinä säännöllisen aterian sijaan." },
  { id: "eggs-raw", name: "Raaka kananmuna", safety: "care", body: "Salmonellariski, ja raa'at valkuaiset voivat häiritä B-vitamiinin imeytymistä. Kypsennetty tavallinen kananmuna on helppo vaihtoehto." },
  { id: "honey", name: "Hunaja", safety: "care", body: "Ei myrkyllistä, vain sokeria. Pieni määrä silloin tällöin on ok terveelle aikuiselle koiralle; jätä se pois diabeetikoilta ja pennuilta." },
  { id: "coconut", name: "Kookos", safety: "care", body: "Pienet määrät hedelmälihaa tai öljyä eivät ole haitallisia, mutta se on rasvaista ja voi löysentää ulostetta." },
  { id: "spinach", name: "Pinaatti ja lehtikaali", safety: "care", body: "Ok pieninä määrinä osana ateriaa. Suuret määrät eivät ole ihanteellisia koirille, joilla on munuaisongelmia." },
  { id: "table-scraps", name: "Pöydän tähteet", safety: "care", body: "Ongelma on harvoin yksi suupala – se on kastikkeet, sipuli, suola ja rasva, ja kalorit, joita kukaan ei laske. Pidä herkut noin kymmenesosassa päivän ruoasta." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Porkkana", safety: "safe", body: "Rapea, halpa ja vähäkalorinen. Kylmä porkkana on hyvä juttu hampaansa purevalle pennulle.", serving: "Raakoina tikkuina tai kypsennettyinä paloina" },
  { id: "apple", name: "Omena", safety: "safe", body: "Makea, rapea ja suosittu. Poista siemenkota ja siemenet.", serving: "Muutama viipale" },
  { id: "banana", name: "Banaani", safety: "safe", body: "Ok pieninä määrinä. Sokerinen, joten ei joka päivä.", serving: "Muutama kolikko banaania" },
  { id: "blueberries", name: "Mustikat", safety: "safe", body: "Pieniä, helppoja jakaa ja useimmat koirat rakastavat niitä.", serving: "Pieni kourallinen" },
  { id: "watermelon", name: "Vesimeloni", safety: "safe", body: "Virvoketta kuumana päivänä. Poista siemenet ja kuori.", serving: "Muutama kuutio, tai pakastettuna" },
  { id: "strawberries", name: "Mansikat", safety: "safe", body: "Ok tuoreena, pieninä määrinä. Ei mitään säilöttyä tai siirapissa.", serving: "Yksi tai kaksi" },
  { id: "pumpkin", name: "Tavallinen kurpitsa", safety: "safe", body: "Tavallinen kypsennetty tai tölkitetty kurpitsa (ei piirakkatahnaa) on vatsaystävällinen ja sitä suositellaan usein löysän ulosteen kiinteyttämiseen.", serving: "Lusikan kärjellinen tai kaksi" },
  { id: "green-beans", name: "Vihreät pavut", safety: "safe", body: "Täyttäviä ja vähäkalorisia – todella hyödyllisiä, jos koirasi on laihdutuskuurilla.", serving: "Pieni kourallinen, tavallisena" },
  { id: "cucumber", name: "Kurkku", safety: "safe", body: "Pääasiassa vettä. Hyvä kuuman sään naposteltava.", serving: "Muutama viipale" },
  { id: "chicken", name: "Tavallinen kypsennetty kana", safety: "safe", body: "Ilman nahkaa, luutonta ja maustamatonta. Yksi parhaista koulutusherkuista.", serving: "Pieniä paloja" },
  { id: "turkey", name: "Tavallinen kypsennetty kalkkuna", safety: "safe", body: "Samat säännöt kuin kanalla: ei nahkaa, ei luita, ei mausteita, ei kastiketta.", serving: "Pieniä paloja" },
  { id: "fish-cooked", name: "Kypsennetty valkoinen kala ja lohi", safety: "safe", body: "Hyvin kypsennetty ja perusteellisesti ruodoton. Hyvä proteiinin ja omega-3:n lähde.", serving: "Pieni annos" },
  { id: "rice", name: "Tavallinen kypsennetty riisi", safety: "safe", body: "Mieto ja helposti sulava – usein osa sitä, mitä eläinlääkäri suosittelee vatsavaivojen jälkeen.", serving: "Sekoitettuna ateriaan" },
  { id: "egg", name: "Kypsennetty kananmuna", safety: "safe", body: "Munakokkeli ilman voita tai suolaa, tai keitetty kovaksi.", serving: "Osa kananmunaa, koiran koosta riippuen" },
  { id: "sweet-potato", name: "Kypsennetty bataatti", safety: "safe", body: "Tavallinen ja kypsennetty. Useimmat koirat ovat erittäin innokkaita.", serving: "Pieni määrä, ilman voita" },
  { id: "peas", name: "Herneet", safety: "safe", body: "Tuoreet tai pakastetut, tavallisena. Jätä säilötyt herneet väliin – liikaa suolaa.", serving: "Lusikan kärjellinen" },
  { id: "broccoli", name: "Parsakaali", safety: "safe", body: "Ok pieninä määrinä. Paljon voi aiheuttaa kaasua ja vatsan ärsytystä.", serving: "Muutama pieni kukinto" },
  { id: "courgette", name: "Kesäkurpitsa", safety: "safe", body: "Vähäkalorinen ja vatsaystävällinen, raakana tai kypsennettynä tavallisena.", serving: "Muutama pala" },
  { id: "celery", name: "Selleri", safety: "safe", body: "Rapea ja erittäin vähäkalorinen. Pilko pieneksi.", serving: "Pieniä pilkottuja paloja" },
  { id: "pear", name: "Päärynä", safety: "safe", body: "Ok ilman siemenkotaa ja siemeniä.", serving: "Muutama pala" },
  { id: "melon", name: "Meloni", safety: "safe", body: "Makea ja nesteyttävä. Poista kuori ja siemenet.", serving: "Muutama kuutio" },
  { id: "mango", name: "Mango", safety: "safe", body: "Kuorittuna, kivi poistettuna. Sokerinen, joten pidä määrä pienenä.", serving: "Muutama pala" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Vain tuoreena, kuori ja kova keskus poistettuna. Ei säilöttyä sokerista versiota.", serving: "Pieni pala" },
  { id: "oats", name: "Tavallinen kypsennetty kaura", safety: "safe", body: "Tavallinen puuro, valmistettu vedellä. Ei sokeria, ei makeutusaineita, ei maitoa.", serving: "Lusikan kärjellinen" },
  { id: "sardines", name: "Sardiinit vedessä", safety: "safe", body: "Tölkitettynä vedessä, ei öljyssä tai suolaliemessä. Hyvä omega-3:n lähde.", serving: "Osa tölkkiä, satunnaisesti" },
  { id: "cauliflower", name: "Kukkakaali", safety: "safe", body: "Tavallisena ja pieninä määrinä. Voi aiheuttaa kaasua, kuten meillekin.", serving: "Pieni kukinto" },
  { id: "lettuce", name: "Salaatti", safety: "safe", body: "Vaaraton ja pääasiassa vettä. Ei kovin jännittävä, mutta ok.", serving: "Vähän, pilkottuna" },
  { id: "beetroot", name: "Kypsennetty punajuuri", safety: "safe", body: "Tavallinen kypsennetty punajuuri on pieninä määrinä ok – ei säilöttyä versiota.", serving: "Pieni pala" },
];

export const nutritionSectionsFi = [
  {
    title: "Lue etiketti, älä pakkausta",
    body: "Pussin etupuoli on markkinointia. Tärkeintä on ilmoitus, että ruoka on täysravintoa koirasi elämänvaiheeseen ja ruokintaohje, jota voit todella noudattaa.",
    points: [
      "\"Täysravinto\" tarkoittaa, että sitä voidaan syöttää sellaisenaan. \"Täydennysravinto\" tarkoittaa, että ei voida",
      "Tarkista, että se on oikeaan elämänvaiheeseen – pentu, aikuinen tai kaikki elämänvaiheet",
      "Ruokintaohjeet ovat lähtökohta, eivät sääntö. Säädä koirasi mukaan",
      "Merkkien, joilla on eläinlääkäreitä ja ravitsemusterapeutteja työntekijöinä ja jotka tekevät ruokintakokeita, ovat turvallisempi valinta",
    ],
  },
  {
    title: "Kuinka paljon, oikeasti",
    body: "Jokainen ohje jokaisessa pussissa on keskiarvo. Kaksi samanpainoista koiraa voi tarvita huomattavasti eri määriä, ja rehellinen vastaus on syöttää, tarkkailla ja säätää muutaman viikon välein.",
    points: [
      "Punnitse ruoka mittakupin sijaan – mittakupit antavat epätarkkoja määriä",
      "Laske herkut ja purtavat. Ne kertyvät nopeammin kuin kukaan odottaa",
      "Tarkista kehon kunto kuukausittain ja säädä noin 10 % kerrallaan",
      "Steriloidut koirat tarvitsevat usein hieman vähemmän kuin ennen",
    ],
  },
  {
    title: "Kuinka usein",
    body: "Pennut tarvitsevat usein pieniä aterioita; aikuiset pärjäävät kahdella. Päivän ruoan jakaminen kahteen ateriaan sopii useimpien koirien rutiineihin paremmin kuin yksi iso kulho.",
    points: [
      "Alle 4 kuukautta: kolme tai neljä ateriaa päivässä",
      "4–6 kuukautta: kolme ateriaa",
      "6 kuukautta ja vanhemmat: kaksi ateriaa",
      "Syvärintaiset koirat: vältä kovaa liikuntaa juuri aterioiden ympärillä",
    ],
  },
  {
    title: "Ruokinnan vaihto",
    body: "Äkilliset muutokset sekoittavat useimpien koirien vatsat. Varaa siihen noin viikko.",
    points: [
      "Päivät 1–2: neljännes uutta, kolme neljännestä vanhaa",
      "Päivät 3–4: puolet ja puolet",
      "Päivät 5–6: kolme neljännestä uutta",
      "Päivä 7: kokonaan uutta ruokaa",
      "Jos vatsa menee löysäksi, hidasta tahtia sen sijaan, että jatkaisit",
    ],
  },
  {
    title: "Vesi",
    body: "Raikasta vettä, aina saatavilla, puhtaassa kulhossa. Kuulostaa itsestäänselvyydeltä, ja se on silti asia, joka useimmiten unohtuu kuumina päivinä ja pitkillä matkoilla.",
  },
  {
    title: "Raaka ja kotiruoka",
    body: "Molemmat voidaan tehdä hyvin, ja molemmat on helppo tehdä väärin. Erityisesti kotiruoat ovat hyvin usein epätasapainoisia, ellei eläinlääkäri-ravitsemusterapeutti ole niitä suunnitellut.",
    points: [
      "Raakaruoan syöttäminen sisältää bakteeririskin koirallesi ja kotitaloudellesi",
      "Kotiruoka vaatii asianmukaisen reseptin ja lisäravinteet ollakseen täysipainoista",
      "Keskustele eläinlääkärisi kanssa ennen vaihtoa, erityisesti pentujen ja vanhempien koirien kohdalla",
      "Tämä on todellinen päätös, joka tehdään ammattilaisen kanssa, ei foorumilta",
    ],
  },
] as const;
