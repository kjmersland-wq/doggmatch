import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

export const breedDeepDiveFi: Partial<Record<BreedId, BreedDeepDive>> = {
  "labrador-retriever": {
    originalPurpose:
      "Labradorinnoutaja polveutuu Newfoundlandin vesikoirista, ja Britanniassa siitä hiottiin noutaja, joka tuo riistaa mielellään niin maalta kuin jääkylmästä vedestäkin. Siitä juontaa uimisen ilo.",
    healthConsiderations:
      "Hyvä kasvattaja näyttää mielellään lonkka- ja kyynärtulokset sekä DNA-testit etenevän verkkokalvon surkastuman (prcd-PRA) ja rasituksen aiheuttaman kollapsin (EIC) osalta. Arjessa tärkeintä on paino: monella labradorilla on geenimuunnos, joka lisää ruokahalua, joten annosten mittaaminen pitää koiran pidempään hyvässä kunnossa.",
    poorMatchFor: [
      "Haaveilet sohvasta ilman koirankarvoja",
      "Päivittäinen lenkki ja pieni treenihetki eivät oikein mahdu viikkoosi",
      "Koira olisi useimpina päivinä yksin kotona koko työpäivän",
    ],
    keyTradeoffs: [
      "Ihanan helppo kouluttaa, koska ruoka merkitsee sille niin paljon, ja sama ruokahalu vaatii silmää vyötärölle",
      "Tervehtii lähes kaikkia ystävänä: mainio seuralainen, mutta ei juuri vahtikoira",
    ],
  },
  "french-bulldog": {
    originalPurpose:
      "Ranskanbulldogi polveutuu pienistä englantilaisista bulldogeista, jotka pitsinnyplääjät veivät mukanaan Ranskaan 1800-luvulla. Pariisilaiset ihastuivat niihin, ja siitä asti ne ovat olleet seurakoiria.",
    healthConsiderations:
      "Suloiset lyhyet kasvot voivat vaikeuttaa hengitystä (BOAS), joten kysy, onko vanhempien hengitystiet arvioitu, ja valitse pentu, jolla on reilusti avoimet sieraimet. Selkä, ihopoimut ja korvat kaipaavat vähän lisähuolenpitoa, ja moni pentue syntyy keisarinleikkauksella. Varaudu hyvään vakuutukseen ja pidä koira viileänä helteellä.",
    poorMatchFor: [
      "Toivot kaveria juoksulenkeille, vaelluksille tai helteisiin kesäpäiviin",
      "Odottamaton muutaman tuhannen euron eläinlääkärilasku olisi sinulle todella raskas",
      "Kotisi kuumenee kesällä, eikä sitä saa helposti viilennettyä",
    ],
    keyTradeoffs: [
      "Pieni, hiljainen ja tyytyväinen lyhyisiin lenkkeihin, mutta sen terveenä pitäminen voi maksaa enemmän kuin lähes minkään muun rodun",
      "Kasvot, jotka sulattavat kaikkien sydämet, ovat myös useimpien terveyshuolien taustalla",
    ],
  },
  "border-collie": {
    originalPurpose:
      "Bordercollie on kotoisin Englannin ja Skotlannin rajaseudun kukkuloilta, missä se kokosi lampaita laajoilta rinteiltä kaukana seisovan paimenen merkkien mukaan.",
    healthConsiderations:
      "Onneksi rotu on vankka. Pyydä lonkkatulokset, silmätarkastus sekä DNA-testit collien silmäpoikkeavuudesta (CEA), TNS-oireyhtymästä ja neuronaalisesta seroidilipofuskinoosista. Epilepsiaa esiintyy, ja moni on herkkä koville äänille, joten rauhallinen koti auttaa.",
    poorMatchFor: [
      "Toivot perhekoiraa, jolle lenkit riittävät eikä pää kaipaa tekemistä",
      "Asut vilkkaan tien varrella, jossa ohi kulkevat autot ja pyörät houkuttelisivat jahtaamaan",
      "Laiskat viikonloput sohvalla ovat sinulle parasta mitä on",
    ],
    keyTradeoffs: [
      "Ehkä maailman oppivaisin koira, ja ilman tehtävää se keksii omat projektinsa",
      "Herkkyys tekee siitä upean kumppanin, mutta meluisa ja hektinen koti kuluttaa sitä",
    ],
  },
  "cavalier-king-charles-spaniel": {
    originalPurpose:
      "Cavalier luotiin uudelleen Englannissa 1920-luvulla muistuttamaan Kaarle II:n hovin maalausten pieniä spanieleita, ja se on alusta asti ollut omistautunut sylikoira.",
    healthConsiderations:
      "Sydänongelmia nähdään rodussa usein, tavallisesti keski-iästä alkaen, joten kysy kasvattajalta, mitkä sydäntutkimukset kummallekin vanhemmalle on tehty. Syringomyelia on toinen tila, josta cavalieren yhteydessä puhutaan usein, joten kysy siitäkin. Lue rodun profiili ja kysy eläinlääkäriltä, mitkä tutkimukset ovat järkeviä. Yleistä ohjausta, ei eläinlääkärin neuvo.",
    poorMatchFor: [
      "Cavalier olisi yksin suurimman osan jokaisesta arkipäivästä",
      "Säännölliset sydäntarkastukset ja ehkä elinikäinen lääkitys eivät mahdu budjettiin",
      "Toivot koiraa, joka ilmoittaa, kun joku on ovella",
    ],
    keyTradeoffs: [
      "Yksi lempeimmistä ja helpoimmista luonteista, ja samalla yksi vaativimmista terveysprofiileista",
      "Rakastaa kaikkia tapaamiaan: ihanaa kotona, toivotonta vahtina",
    ],
  },
  "german-shepherd": {
    originalPurpose:
      "Rotu vakiintui Saksassa vuonna 1899 monipuoliseksi paimenkoiraksi, ja pian se työskenteli opaskoirana, etsintäkoirana sekä poliisin ja armeijan rinnalla.",
    healthConsiderations:
      "Pyydä lonkka- ja kyynärtulokset sekä DNA-testi degeneratiivisesta myelopatiasta. Mahalaukun kiertymää, haiman vajaatoimintaa sekä herkkää vatsaa tai ihoa voi esiintyä. Koiralle on ystävällisempää valita linja, jossa rakenne on suora ja tasapainoinen, ei jyrkästi laskeva selkä.",
    poorMatchFor: [
      "Tämä on ensimmäinen koirasi, eikä sinulla ole vielä suunnitelmaa koulutukseen ja sosiaalistamiseen",
      "Toivot koiraa, joka on luonnostaan rento vieraiden kanssa",
      "Runsas karvanlähtö ja vahva koira hihnassa uuvuttaisivat sinut",
    ],
    keyTradeoffs: [
      "Syvästi uskollinen ja suojeleva, ja johdonmukainen sosiaalistaminen pitää suojelevan puolen oikeissa mittasuhteissa",
      "Ilo kouluttaa, ja aidosti onneton ilman säännöllisiä tehtäviä",
    ],
  },
  dachshund: {
    originalPurpose:
      "Mäyräkoira jalostettiin Saksassa seuraamaan mäyrää (Dachs) maan alle: pieni ja peloton metsästäjä, jonka haukku kuuluu pesästä asti.",
    healthConsiderations:
      "Selkäongelmat (välilevytyrä, IVDD) koskettavat melko monta mäyräkoiraa ja voivat olla vakavia. Parasta, mitä voit tehdä: pidä koira hoikkana, kanna se portaissa ja opeta se lempeästi pois hyppimisestä. Karkeakarvaisilla linjoilla selkävaivoja on usein vähemmän. Joillekin muunnoksille on DNA-testit silmäsairaudesta (cord1-PRA) ja Laforan taudista.",
    poorMatchFor: [
      "Asut monta kerrosta ylhäällä ilman hissiä",
      "Tarvitset hiljaisen koiran talossa, jossa on ohuet seinät",
      "Perheen pienimmät haluaisivat nostella koiraa ja kantaa sitä sylissä",
    ],
    keyTradeoffs: [
      "Tarpeeksi pieni kulkemaan mukana kaikkialle, ja sillä on paljon isomman koiran ääni ja itsevarmuus",
      "Fiksu ja itsenäinen, joten luoksetulo ja sisäsiisteys vaativat yleensä vähän lisää kärsivällisyyttä",
    ],
  },
  beagle: {
    originalPurpose:
      "Beagle on brittiläinen laumassa metsästävä ajokoira, joka jalostettiin seuraamaan jäniksen jälkiä metsästäjien kulkiessa perässä jalan. Nenä johtaa yhä sen maailmaa.",
    healthConsiderations:
      "Hyviä uutisia: beagle on yleensä terve ja pitkäikäinen. Epilepsiaa, kilpirauhasen vajaatoimintaa ja selkäongelmia voi esiintyä, ja Musladin-Lueken oireyhtymälle on DNA-testi. Beagle lihoo helposti, ja sen kauniit pitkät korvat kaipaavat säännöllistä tarkistusta.",
    poorMatchFor: [
      "Haaveilet koirasta, jonka voi päästää vapaaksi missä tahansa",
      "Naapureita häiritsisi vähäinen ulvonta, kun olet poissa",
      "Pihasi ei ole kunnolla aidattu",
    ],
    keyTradeoffs: [
      "Ystävällinen sekä ihmisille että koirille, mutta nenä voittaa yleensä sen, mitä juuri pyysit",
      "Tarpeeksi pienikokoinen useimpiin koteihin, ja sillä on työskentelevän ajokoiran kestävyys",
    ],
  },
  "cocker-spaniel": {
    originalPurpose:
      "Cockerspanieli on brittiläinen ylösajava lintukoira, joka jalostettiin ajamaan lehtokurppia (woodcock) esiin tiheästä pusikosta ja noutamaan ne. Siitä sen nimi.",
    healthConsiderations:
      "Korvat ovat arjen hoitotyö: kun kuivaat ja tarkistat ne usein, säästät koiran monelta vaivalta. Pyydä lonkkatulokset sekä DNA-testit etenevästä verkkokalvon surkastumasta (prcd-PRA) ja familiaalisesta nefropatiasta, joka on munuaissairaus. Käyttö- ja näyttelylinjat eroavat energialtaan paljon, joten kysy, kummasta linjasta on kyse.",
    poorMatchFor: [
      "Säännöllinen harjaus ja trimmaus jäisivät helposti tekemättä",
      "Cockerisi olisi yksin pitkiä työpäiviä",
      "Toivot rauhallista koiraa, mutta ihastuit käyttölinjan pentuun",
    ],
    keyTradeoffs: [
      "Iloinen ja innokas miellyttämään, ja käyttölinjaiset ovat paljon vauhdikkaampia kuin pehmeät kasvot antavat ymmärtää",
      "Kaunis turkki, joka tarvitsee trimmaajan apua pysyäkseen kauniina",
    ],
  },
  chihuahua: {
    originalPurpose:
      "Chihuahua on saanut nimensä meksikolaisesta osavaltiosta, ja sen uskotaan polveutuvan muinaisen Meksikon pienistä seurakoirista. Seurakoiraksi sitä on jalostettu 1800-luvun lopulta asti.",
    healthConsiderations:
      "Hampaat vaativat eniten huolenpitoa, joten päivittäinen hampaiden harjaus ja silloin tällöin ammattilaisen puhdistus tekevät suuren eron. Polvilumpion ja sydänläppien ongelmia voi esiintyä, ja hyvin pienillä pennuilla voi olla matala verensokeri. Hyvä puoli: 15 vuotta tai enemmän on aivan tavallista.",
    poorMatchFor: [
      "Kotonasi on taaperoita tai pieniä lapsia",
      "Toivot koiraa, joka on rauhallinen ja hiljainen vieraiden tullessa",
      "Talvesi ovat kylmiä, etkä haluaisi pukea koiraa jokaiselle lenkille",
    ],
    keyTradeoffs: [
      "Pieni tilantarpeeltaan ja kuluiltaan, ja niin hauras, että se tarvitsee varovaista käsittelyä",
      "Täysin omistautunut omalle ihmiselleen, ja muita kohtaan usein epäluuloinen tai äänekäs",
    ],
  },
  "bernese-mountain-dog": {
    originalPurpose:
      "Berninpaimenkoira oli maatilakoira Sveitsin Bernin kantonissa: se veti maitokärryjä, siirsi lehmiä ja piti ystävällisesti silmällä pihapiiriä.",
    healthConsiderations:
      "Vaikeinta berninpaimenkoiran rakastamisessa on, että sen elämä voi jäädä lyhyeksi, ja syövät, erityisesti histiosyyttinen sarkooma, ovat valitettavasti yleisiä. Pyydä lonkka- ja kyynärtulokset sekä DNA-testi degeneratiivisesta myelopatiasta, ja opettele tunnistamaan mahalaukun kiertymän merkit.",
    poorMatchFor: [
      "Asut lämpimässä ilmastossa tai ylimmässä kerroksessa ilman hissiä",
      "Seitsemästä kymmeneen yhteistä vuotta tuntuisi liian lyhyeltä",
      "Ison koiran eläinlääkäri- ja ruokakulut venyttäisivät budjettiasi liikaa",
    ],
    keyTradeoffs: [
      "Lempeä ja kärsivällinen jättiläinen, jonka kanssa aikaa on vähemmän kuin toivoisi",
      "Rauhallinen aikuisena pitkän ja pomppivan nuoruuden jälkeen, ja karvaa on kaikkialla ympäri vuoden",
    ],
  },
};
