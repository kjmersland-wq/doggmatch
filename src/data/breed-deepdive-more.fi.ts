import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

const G = "Yleistä ohjausta, ei eläinlääkärin neuvo.";
const h = (text: string) => `${text} ${G}`;

export const breedDeepDiveMoreFi: Partial<Record<BreedId, BreedDeepDive>> = {
  whippet: {
    originalPurpose:
      "Whippetin jalostivat 1800-luvulla Pohjois-Englannissa tehdas- ja kaivosperheet, jotka halusivat pienen, nopean koiran kilpa-ajoihin ja kaniinien jahtaamiseen – ”köyhän miehen kilpahevonen”.",
    healthConsiderations: h(
      "Whippet on yleensä kestävä ja pitkäikäinen rotu, mutta ohut iho repeää helposti ja hoikka keho palelee, joten takki pakkaspäivinä on ystävällinen ajatus. Vinttikoirat voivat reagoida nukutusaineisiin eri tavalla, joten mainitse rotu jokaiselle eläinlääkärille. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Päästäisit koiran vapaaksi kaniinien, kissojen tai liikenteen lähellä ja toivoisit parasta",
      "Haluat koiran, joka viihtyy ulkona tai viileässä talossa",
      "Pihasi ei ole aidattu, eikä sinulla ole turvallista paikkaa kunnon pyrähdykselle",
    ],
    keyTradeoffs: [
      "Rauhallinen ja siisti sisällä, hämmästyttävä ulkona – tarvitset sekä sohvan että turvallisen pellon",
      "Lempeä ja hiljainen, mutta jahtivietti, jota mikään koulutus ei kokonaan sammuta",
    ],
  },
  greyhound: {
    originalPurpose:
      "Greyhound on yksi vanhimmista vinttikoiratyypeistä, jalostettu tuhansia vuosia ajamaan jänikset kiinni näköhavainnon varassa. Uudemmassa historiassa se on ollut kilpakoira, ja monet eläkkeelle jääneet kilpurit löytävät nykyään kodin perhekoirina.",
    healthConsiderations: h(
      "Greyhound on hoikka, ohutihoinen ja vähärasvainen, joten se palelee ja voi saada painehaavoja kovalla lattialla – pehmeä peti on tärkeä. Hampaat tarvitsevat usein säännöllistä hoitoa, ja syvärintaisten koirien kohdalla vatsalaukun kiertymää tarkkaillaan yleisesti. Eläkkeelle jääneillä kilpureilla voi olla vanhoja vammoja, joten kysy yhdistykseltä, mitä ne tietävät, ja puhu eläinlääkärin kanssa.",
    ),
    poorMatchFor: [
      "Haluat päästää koiran vapaaksi aidattomassa puistossa",
      "Elät kissan tai pienten lemmikkien kanssa etkä pysty pitämään niitä erillään",
      "Haluat koiran, joka pysyy lämpimänä ulkona talvipäivänä",
    ],
    keyTradeoffs: [
      "Yksi lempeimmistä ja hiljaisimmista koirista, nukkuu sohvalla suuren osan päivästä ja on rakennettu spurttaamaan heti, kun jokin pieni juoksee",
      "Iso koira rauhallisessa kehossa: helppo sisällä, ja paljon koiraa hihnan päässä, jos se ampaisee juoksuun",
    ],
  },
  poodle: {
    originalPurpose:
      "Villakoira aloitti saksalaisena vesinoutajana, joka nouti sorsia metsästäjille, ja siitä tuli Ranskassa rakastettu seurakoira ja maan tunnetuin koira. Kuuluisan näyttelytrimmauksen sanotaan alkaneen käytännöllisenä trimmauksena uimista varten.",
    healthConsiderations: h(
      "Lonkat, silmät ja iho ovat tavallisia kysymyksiä, ja syvärintaisia koiria kuten isoa villakoiraa tarkkaillaan yleisesti vatsalaukun kiertymän varalta. Turkki takkuuntuu ilman säännöllistä harjausta, ja korvat kannattaa tarkistaa. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Trimmaaja kuuden–kahdeksan viikon välein ja harjaus lähes päivittäin eivät mahdu elämääsi",
      "Haluat koiran, joka tyytyy siihen, ettei sitä huomioida päivään",
      "Et mieluusti käytä aikaa siihen, että annat älykkäälle koiralle ajateltavaa",
    ],
    keyTradeoffs: [
      "Nopea, mielistelevä ja vähän karvaa lähtevä, ja turkki vaatii todellista, säännöllistä hoitoa",
      "Vakava ajattelija: loistava koulutettava ja keksiväinen, kun sillä on tylsää",
    ],
  },
  "bichon-frise": {
    originalPurpose:
      "Bichonit polveutuvat Välimeren pienistä vesikoirista, ja niitä on vuosisatojen ajan pidetty seurakoirina Etelä-Euroopassa.",
    healthConsiderations: h(
      "Hampaat, iho ja polvilumpiot ovat tavallisia tarkistuskohteita pienellä, vaaleaturkkisella rodulla: hammashoito on rutiinia, ja ihoallergioita nähdään usein. Lyhyt, säännöllinen hoitorutiini on tärkeä. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Sinun olisi vaikea pysyä mukana harjauksessa ja ammattitrimmauksessa kuuden–kahdeksan viikon välein",
      "Koira olisi yksin pitkän työpäivän, useimpina päivinä",
      "Haluat koiran, joka tyytyy jäämään omiin oloihinsa",
    ],
    keyTradeoffs: [
      "Iloinen, ystävällinen ja vähän karvaa lähtevä, ja turkki ei lakkaa koskaan tarvitsemasta huomiota",
      "Onnellisin siellä missä sinä olet, ja onnettomin, kun lähdet",
    ],
  },
  maltese: {
    originalPurpose:
      "Maltankoira on yksi Euroopan vanhimmista pienistä seurakoirista, jota on vuosisatojen ajan pidetty sylikoirana ja arvostettu pitkästä valkoisesta turkista ja omistajaansa kohdistuvasta omistautumisesta.",
    healthConsiderations: h(
      "Hampaat, polvilumpiot ja kyynelvanat ovat tavallisia pienillä valkoisilla koirilla, ja hieno turkki takkuuntuu nopeasti. Pieni koira myös väsyy ja kylmenee nopeammin kuin arvaisit. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Päivittäinen harjaus ei mahdu rutiineihisi",
      "Haluat koiran, joka pysyy hiljaa ovikellon soidessa",
      "Koira olisi yksin pitkiä aikoja",
    ],
    keyTradeoffs: [
      "Pieni, lempeä ja erittäin uskollinen, ja haukku on isompi kuin koira itse",
      "Turkki näyttää vaivattomalta ja vaatii päivittäistä vaivaa",
    ],
  },
  havanese: {
    originalPurpose:
      "Havannankoira on Kuuban kansalliskoira, pienten bichon-tyyppisten koirien jälkeläinen, jotka tulivat saarelle ja toimivat seuralaisina hyvin toimeentulevissa kodeissa.",
    healthConsiderations: h(
      "Polvilumpiot, silmät ja lonkat ovat tavallisia kysymyksiä pienellä, pitkäikäisellä rodulla, ja silkkinen turkki takkuuntuu ilman säännöllistä harjausta. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Koira olisi yksin suurimman osan työpäivästä",
      "Sinulla ei ole aikaa säännölliseen harjaukseen",
      "Haluat koiran, joka viihtyy taustalla samalla kun hoidat omia asioitasi",
    ],
    keyTradeoffs: [
      "Sosiaalinen, oppii nopeasti ja on iloista seuraa – ja se todella haluaa seuraasi koko päivän",
      "Kevyt hihnassa ja helppo kantaa, ja turkki vaatii todellisen rutiinin",
    ],
  },
  "italian-greyhound": {
    originalPurpose:
      "Italianvinttikoira on pienoisvinttikoira, jota on vuosisatoja pidetty seurakoirana ja joka oli erityisen suosittu renessanssin Italian hoveissa.",
    healthConsiderations: h(
      "Jalat ovat hyvin ohuet, joten kysy eläinlääkäriltä, miten hypyt ja rajut leikit pidetään turvallisina, ja mieti portaita ja sohvia. Hampaat tarvitsevat säännöllistä hoitoa, ja ohut turkki tarkoittaa kunnollisia talvivarusteita. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Sinulla on pieniä lapsia, jotka mielellään nostaisivat koiran syliin tai painisivat sen kanssa",
      "Haluat koiran, joka ottaa kylmän ja märän lenkin rauhallisesti",
      "Koira olisi yksin pitkiä päiviä",
    ],
    keyTradeoffs: [
      "Pieni, hiljainen ja suloisen kiintynyt, ja hauraampi kuin miltä näyttää",
      "Rakastaa syliä ja huopaa, ja jahtia pellon poikki yhtä paljon",
    ],
  },
  pug: {
    originalPurpose:
      "Mopsit ovat kotoisin Kiinasta, jossa pieniä litteänaamaisia koiria pidettiin keisarien seuralaisina, ja myöhemmin ne tulivat Eurooppaan hollantilaisten kauppiaiden mukana ja niistä tuli sylikoiria monissa kuninkaallisissa kodeissa.",
    healthConsiderations: h(
      "Litteänaamaisilla koirilla on usein hengitysvaikeuksia, ja ne kärsivät lämpimässä säässä – lämpöriski on yksi eläinten hyvinvointiin liittyvistä huolista, jotka British Veterinary Association nostaa esiin – ja silmät, ihopoimut ja paino vaativat säännöllistä huomiota. Jos päätät silti ottaa rodun, valitse pentu, jolla on avoimet sieraimet ja pidempi kuono, varaa rahaa vakuutukseen ja lue rodun profiili ja kysy eläinlääkäriltä.",
    ),
    poorMatchFor: [
      "Kesäsi ovat kuumia eikä koiralle ole viileää huonetta",
      "Yllättävä eläinlääkärilasku, joka on muutama tuhat euroa, rasittaisi sinua todella",
      "Haluat koiran, joka juoksee tai vaeltaa kanssasi",
    ],
    keyTradeoffs: [
      "Hauska, hellä ja tyytyväinen lyhyisiin kävelyihin, ja usein todellisia hengitys- ja lämpöongelmia",
      "Litistynyt kasvo, joka voittaa jokaisen sydämen, on myös useimpien terveysongelmien takana",
    ],
  },
  "shih-tzu": {
    originalPurpose:
      "Shih tzuja jalostettiin seuralaisiksi Kiinan keisarilliselle hovelle, tiibetiläisin juurin, ja nimi tarkoittaa ”leijonakoiraa”. Ne ovat olleet sylikoiria hyvin pitkään.",
    healthConsiderations: h(
      "Litteänaamaisena rotuna se tarvitsee huomiota hengitykseen ja lämpöön – lämpöriski on yksi eläinten hyvinvointiin liittyvistä huolista, jotka British Veterinary Association nostaa esiin – ja suuret silmät, korvat ja turkin alla oleva iho on tarkistettava säännöllisesti. Pitkä turkki takkuuntuu nopeasti, siksi moni valitsee lyhyen trimmauksen. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Säännöllinen hoito tai lyhyt trimmaus muutaman viikon välein ei mahdu rutiineihisi",
      "Asut paikassa, jossa on kuuma eikä viileää nurkkaa",
      "Haluat koiran, joka oppii sisäsiistiksi nopeasti ja helposti",
    ],
    keyTradeoffs: [
      "Iloinen, ihmisiä rakastava sylikoira, jonka turkki ja kasvot molemmat vaativat päivittäistä hoitoa",
      "Itsepäinen piirre pehmeän turkin sisällä: kärsivällinen, herkkupohjainen koulutus toimii parhaiten",
    ],
  },
  "golden-retriever": {
    originalPurpose:
      "Kultaisennoutaja kehitettiin Skotlannin ylängöillä 1800-luvulla noutamaan ammuttuja lintuja hankalasta maastosta ja kylmästä vedestä, ja pehmeä suu ja halu miellyttää juontavat siitä työstä.",
    healthConsiderations: h(
      "Lonkat, kyynärpäät, silmät ja sydän ovat tavallisia kysymyksiä, ja syöpää nähdään rodussa usein – yksi syy, miksi hyvää kasvattajaa kannattaa odottaa. Turkki ja korvat tarvitsevat säännöllistä hoitoa, ja painolla on merkitystä. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Haluat koiran, joka pysyy puhtaana ja jonka karvaa lähtee vähän",
      "Koira olisi yksin kotona koko työpäivän, useimpina päivinä",
      "Haluat vartiokoiran",
    ],
    keyTradeoffs: [
      "Ystävällinen lähes kaikille ja halukas miellyttämään, mikä tekee niistä ihania perhekoiria ja huonoja vartijoita",
      "Helppo kouluttaa ja aina innokas kantamaan jotain suussa, joten suun käyttöä pitää ohjata lempeästi",
    ],
  },
  "boston-terrier": {
    originalPurpose:
      "Bostoninterrieri syntyi Bostonissa 1800-luvun lopulla englanninbulldoggien ja terrierien risteytyksistä ja siitä tuli yksi Amerikan ensimmäisistä kotimaisista seurakoirarotuista.",
    healthConsiderations: h(
      "Se on lyhytkuonoinen rotu, joten hengitys, lämpö ja silmät vaativat huomiota – lämpöriski on yksi eläinten hyvinvointiin liittyvistä huolista, jotka British Veterinary Association nostaa esiin – ja monet pentueet tarvitsevat apua syntyessään. Polvilumpioista ja ihoallergioista kannattaa myös kysyä. Valitse mahdollisuuksien mukaan pentu, jolla on avoimet sieraimet ja pidempi kuono, ja lue rodun profiili ja kysy eläinlääkäriltä.",
    ),
    poorMatchFor: [
      "Kotonasi tulee kesällä hyvin kuuma etkä pysty pitämään koiraa viileänä",
      "Et mieluusti jaa makuuhuonetta kuorsauksen kanssa",
      "Etsit juoksulenkkejä tai vaelluksia kuumalla säällä",
    ],
    keyTradeoffs: [
      "Eloisa, ystävällinen ja siisti, ja lyhyt nenä rajoittaa, kuinka paljon lämpöä ja liikuntaa se kestää",
      "Leikkisä ja pelle, eikä aivan niin kestävä kuin sen pomppiva luonne antaa ymmärtää",
    ],
  },
  papillon: {
    originalPurpose:
      "Papillonit ovat Manner-Euroopasta kotoisin olevia pienoisspanieleita, nimetty perhosen muotoisten korvien mukaan, ja ne esiintyvät monissa vanhoissa maalauksissa aatelisperheiden seuralaisina.",
    healthConsiderations: h(
      "Se on pieni, usein pitkäikäinen rotu, ja polvilumpiot, hampaat ja silmät ovat tavallisia kysymyksiä. Kevyt ruumiinrakenne tarkoittaa, että hyppyjä huonekaluilta kannattaa hallita. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Haluat koiran, joka pysyy hiljaa ovella tai ikkunalla",
      "Koira olisi yksin pitkiä päiviä",
      "Et mieluusti harjoita säännöllisesti pitääksesi vilkkaan mielen kiireisenä",
    ],
    keyTradeoffs: [
      "Valpas, koulutettava ja eloisa kokoonsa nähden, ja nopea haukkumaan jokaiselle äänelle",
      "Tarpeeksi pieni kannettavaksi, tarpeeksi älykäs ikävystymään, ellet anna sille tekemistä",
    ],
  },
  "lhasa-apso": {
    originalPurpose:
      "Lhasa apso on kotoisin Tiibetistä, jossa pienet koirat toimivat sisävartijoina koteissa ja luostareissa – hiljaa suurimman osan päivästä ja nopeina hälyttämään.",
    healthConsiderations: h(
      "Silmät, iho sekä pitkän turkin alla olevat korvat ja tassut on tarkistettava säännöllisesti, ja turkki takkuuntuu nopeasti ilman harjausta, siksi moni valitsee lyhyen trimmauksen. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Haukku jokaiselle koputukselle ja äänelle ajaisi sinut tai naapurit hulluksi",
      "Et pysyisi harjauksessa mukana",
      "Haluat koiran, joka rakastaa vieraita",
    ],
    keyTradeoffs: [
      "Arvokas, omistautunut pieni vahtikoira, jolla on mielipiteitä vieraista",
      "Itsenäinen ja joskus itsepäinen: palkkiot ja kärsivällisyys voittavat toiston",
    ],
  },
  "miniature-schnauzer": {
    originalPurpose:
      "Kääpiösnautseri jalostettiin Saksassa 1800-luvun lopulla pienemmistä snautsereista maatilan koiraksi ja rottien pyytäjäksi, mikä selittää valppaan, pirteän, ensin haukkuvan luonteen.",
    healthConsiderations: h(
      "Silmistä ja virtsakivistä puhutaan usein rodun yhteydessä, ja rasvaiset herkut voivat rasittaa haimaa, joten yksinkertainen ruokavalio ja vakaa paino ovat tärkeitä. Karkea turkki vaatii säännöllistä hoitoa. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Haluat hiljaisen koiran, joka ei reagoi naapureiden tulemisiin ja menemisiin",
      "Säännöllinen hoito ja trimmaus eivät mahdu rutiineihisi",
      "Et mieluusti hallitse pienen koiran haukkumista",
    ],
    keyTradeoffs: [
      "Tanakka, älykäs ja vähän karvaa lähtevä, ja haukku tulee ennen ovikelloa",
      "Oppii hyvin ja on sydämeltään terrieri: ei arkaile mielipiteitään",
    ],
  },
  labradoodle: {
    originalPurpose:
      "Labradoodle on labradorinnoutajan ja villakoiran risteytys, jota jalostettiin ensimmäisen kerran Australiassa 1980-luvun lopulla yhdistämään opaskoiran luonne ja vähemmän karvaa lähtevä turkki. Se on risteytys eikä tunnustettu rotu, ja pentueet vaihtelevat.",
    healthConsiderations: h(
      "Sekoitus ei ole automaattisesti terveempi: labradoodle voi periä kummaltakin puolelta, joten lonkista, kyynärpäistä, silmistä, korvista ja ihosta kannattaa kysyä. Turkki vaihtelee paljon, ja monet tarvitsevat säännöllistä harjausta ja trimmausta. Kysy kasvattajalta, mitkä terveystutkimukset molemmille vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Tarvitset taatusti vähän karvaa lähtevän tai allergiaystävällisen turkin",
      "Sinun olisi vaikea hoitaa kiharaa turkkia säännöllisesti",
      "Haluat koiran, jonka voi ennustaa rotukuvauksesta",
    ],
    keyTradeoffs: [
      "Ystävällinen, valpas ja usein helppo elää kanssa, ja jokainen pentue on vähän erilainen",
      "Pomppii kuin labradori ja ajattelee kuin villakoira: energiaa, joka tarvitsee päivittäisen purkautumistien",
    ],
  },
  cavapoo: {
    originalPurpose:
      "Cavapoo on cavalier king charles spanielin ja villakoiran risteytys, joka on ollut suosittu pienenä, halattavana seurakoirana 2000-luvun alusta. Se on risteytys eikä tunnustettu rotu, ja pentueet vaihtelevat.",
    healthConsiderations: h(
      "Cavapoo voi periä kummaltakin puolelta, joten kysy, mitkä terveystutkimukset molemmille vanhemmille on tehty – sydämestä, silmistä, polvilumpioista ja turkista kannattaa kysyä. Turkki takkuuntuu ilman säännöllistä harjausta. Lue rodun profiili ja kysy eläinlääkäriltä.",
    ),
    poorMatchFor: [
      "Koira olisi yksin koko työpäivän",
      "Haluat koiran, jonka turkin tyypin ja koon voi ennustaa",
      "Haluaisit jättää säännöllisen hoidon väliin",
    ],
    keyTradeoffs: [
      "Hellä ja sosiaalinen, ja usein hyvin seuraa kaipaava – joskus liian kiintynyt jäädäkseen yksin",
      "Lempeä ja älykäs, ja turkki vaatii todellisen rutiinin",
    ],
  },
  "yorkshire-terrier": {
    originalPurpose:
      "Yorkshirenterrierin kehittivät 1800-luvulla tehtaan työntekijät Yorkshiressa ja Lancashiressa rottien pyytämiseen. Sieltä on pitkä matka silkkiturkkiseen sylikoiraan, mutta terrieri on yhä sen sisällä.",
    healthConsiderations: h(
      "Polvilumpiot, hampaat ja panta-arka henkitorvi ovat tavallisia kysymyksiä pienillä koirilla, siksi moni käyttää valjaita. Hieno turkki vaatii säännöllistä harjausta tai trimmausta. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Haluat koiran, joka jättää muut koirat rauhaan, koosta riippumatta",
      "Et mieluusti harjaa tai trimmaa säännöllisesti",
      "Haluat hiljaisen koiran, jota ei houkuta haukkua",
    ],
    keyTradeoffs: [
      "Pieni koira ison koiran asenteella: rohkea, valpas ja itsevarma",
      "Silkkinen, vähän karvaa lähtevä ja terrieri kokopäiväisesti",
    ],
  },
  "siberian-husky": {
    originalPurpose:
      "Siperianhuskyn jalostivat Koillis-Siperian tšuktšit valjakkokoiraksi, rakennettuna vetämään kevyitä kuormia pitkiä matkoja purevassa pakkasessa, ja se rakastaa yhä juoksemista.",
    healthConsiderations: h(
      "Se on melko vankka rotu; silmät ja lonkat ovat tavallisia kysymyksiä, ja paksu turkki tekee lämmöstä todellisen huolen lämpimällä säällä. Karvanlähtö on myös voimakasta kahdesti vuodessa. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Haluat koiran, joka tulee joka kerta takaisin vapaana ollessaan",
      "Kotisi on kuuma tai päivissäsi on vähän aikaa juoksemiseen",
      "Haluat hiljaisen koiran, jota on helppo pitää kerrostalossa",
    ],
    keyTradeoffs: [
      "Ystävällinen, näyttävä ja täynnä kestävyyttä, ja todellinen pakotaiteilija, joka ulvoo haukkumisen sijaan",
      "Rakastaa juoksemista kanssasi ja tarvitsee sitä paljon, säästä riippumatta",
    ],
  },
  "pembroke-welsh-corgi": {
    originalPurpose:
      "Pembroke welsh corgi on kotoisin Pembrokeshirestä Walesista, jossa se ajoi karjaa näykkimällä kantapäitä ja väistämällä potkuja, ja tuo matala, nopea, käskevä piirre ei ole kadonnut.",
    healthConsiderations: h(
      "Pitkä selkä ja lyhyet jalat tarkoittavat, että paino ja hyppiminen ansaitsevat huomiota, ja lonkista ja silmistä kysytään yleensä. Karvaa lähtee paljon ympäri vuoden. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Portaat, hyppiminen ja painon nousu sopivat huonosti pitkälle selälle",
      "Haluat koiran, joka jättää nilkat ja lapset rauhaan",
      "Et halua koiran karvoja kaikkialle",
    ],
    keyTradeoffs: [
      "Älykäs, iloinen ja sitkeämpi kuin näyttää, ja paimenkoira, joka voi yrittää paimentaa sinua ja lapsia",
      "Rakastaa ruokaa ja leikkejä, ja ylimääräiset kilot rasittavat sitä pitkää selkää",
    ],
  },
  "shiba-inu": {
    originalPurpose:
      "Shiba inu on pieni japanilainen pystykorvatyyppinen rotu, jota käytettiin alun perin lintujen ja pienriistan metsästykseen vuoristossa, ja sillä on yhä ylpeä, itsenäinen, kissamainen tapa olla.",
    healthConsiderations: h(
      "Allergiat, silmät, polvilumpiot ja lonkat ovat tavallisia kysymyksiä rodussa, ja karvanlähtö on voimakasta kahdesti vuodessa. Kysy kasvattajalta, mitkä terveystutkimukset vanhemmille on tehty, ja lue rodun profiili.",
    ),
    poorMatchFor: [
      "Haluat koiran, joka tulee kutsuttaessa ja voi olla vapaana",
      "Haluat koiran, joka rakastaa sitä, että kaikki koskettavat sitä",
      "Et mieluusti käytä aikaa kärsivälliseen, palkkioihin perustuvaan koulutukseen",
    ],
    keyTradeoffs: [
      "Siisti, arvokas ja hiljaa kiintyvä, oma tahto mukanaan",
      "Itsenäinen itsepäisyyteen asti: koulutus on keskustelu, ei käsky",
    ],
  },
};
