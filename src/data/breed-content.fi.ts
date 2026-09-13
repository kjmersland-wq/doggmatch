import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Rotuesittelyt suomeksi, kytkettynä samoihin pysyviin rotutunnisteisiin. */
export const breedContentFi: Partial<Record<BreedId, BreedContent>> = {
  "labrador-retriever": {
    displayName: "Labradorinnoutaja",
    summary:
      "Avosydäminen, ruoasta innostuva noutaja, josta on syystäkin tullut monen perheen ykkösvalinta — mutta joka tarvitsee edelleen oikeaa tekemistä pysyäkseen tyytyväisenä.",
    strengths: [
      "Nauttii ihmisten seurasta",
      "Oppii nopeasti, varsinkin herkun vuoksi",
      "Mainiota seuraa arkeen",
      "Lähtee mukaan mihin tahansa touhuun",
      "Sopeutuu yleensä hyvin perhe-elämään",
    ],
    considerations: [
      "Karvaa lähtee ympäri vuoden",
      "Tarvitsee kunnon lenkin joka päivä, ei vain viikonloppuisin",
      "Iso ja voimakas hihnassa ilman harjoittelua",
      "Kyllästyy nopeasti ilman tekemistä, ja silloin keksii omia puuhia",
    ],
  },
  "golden-retriever": {
    displayName: "Kultainennoutaja",
    summary:
      "Lempeä, yhteistyöhaluinen ja loputtoman kärsivällinen. Kultainennoutaja kaipaa ennen kaikkea seuraa.",
    strengths: [
      "Ihanan lempeä lasten kanssa",
      "Innostuu oppimisesta, kun palkinto on tarjolla",
      "Ystävällinen niin ihmisille kuin toisille koirille",
      "Viihtyy parhaiten viileässä säässä ulkona",
    ],
    considerations: [
      "Karvaa lähtee rajusti pari kertaa vuodessa",
      "Tarvitsee kunnon harjauksen useimpina viikkoina, muuten turkki takkuuntuu",
      "Kärsii helposti helteestä, joten kesälenkit kannattaa ajoittaa aamuun",
      "Ei oikeasti pidä pitkistä yksinäolon jaksoista",
    ],
  },
  poodle: {
    displayName: "Villakoira (iso)",
    summary:
      "Urheilullinen ja poikkeuksellisen älykäs koira tyylikkään turkin alla. Viihtyy parhaiten ongelmanratkaisun ja tiiviin yhteistyön parissa.",
    strengths: [
      "Karvaa lähtee hyvin vähän",
      "Oppii asiat huomattavan nopeasti",
      "Pärjää kerrostalossakin, kunhan pääsee tarpeeksi ulos",
      "Leikkisä ilman että menee sekaisin",
    ],
    considerations: [
      "Trimmauskäynti 6–8 viikon välein, eikä se ole halpaa",
      "Tarvitsee älyllistä tekemistä, ei pelkkiä lenkkikilometrejä",
      "Voi ahdistua aidosti, jos jää liian usein yksin",
      "Turkinhoidon kustannukset kasvavat vuosien myötä",
    ],
  },
  "french-bulldog": {
    displayName: "Ranskanbulldoggi",
    summary:
      "Tiivis, hauska ja syvästi kiintynyt kaupunkilaiskoira, jolla on vaatimaton liikuntatarve mutta todellisia terveyshaasteita.",
    strengths: [
      "Viihtyy erinomaisesti kerrostalossa",
      "Ei tarvitse paljon liikuntaa",
      "Hellä ja aina lähelläsi",
      "Rauhallisempi kuin useimmat pienet koirat",
    ],
    considerations: [
      "Hengitys voi vaikeutua helteellä tai rasituksessa",
      "Eläinlääkärikulut ovat usein elämän mittaan tavallista suuremmat",
      "Ei viihdy hyvin koko työpäivää yksin",
      "Kannattaa vaatia kasvattajaa, joka terveystutkii vanhemmat kunnolla",
    ],
  },
  "border-collie": {
    displayName: "Bordercollie",
    summary:
      "Kaikista oppivaisin koira, jota useimpien ei silti kannata hankkia. Nerokas, intensiivinen ja onneton ilman päivittäistä tekemistä.",
    strengths: [
      "Oppii lähes mitä tahansa opetat",
      "Loistava koiraurheilussa, jäljestyksessä ja pulmatehtävissä",
      "Kiintyy syvästi omaan ihmiseensä",
      "Parhaimmillaan aidosti aktiivisten ihmisten kanssa",
    ],
    considerations: [
      "Tarvitsee runsaasti liikuntaa ja ajattelemista päivittäin",
      "Viihtyy harvoin kerrostalossa tai rauhallisessa arjessa",
      "Saattaa yrittää paimentaa lapsia, pyöräilijöitä tai kissaa",
      "Alistimuloitu bordercollie keksii nopeasti ikävyyksiä",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier kingcharlesinspanieli",
    summary:
      "Pieni, pehmeäluonteinen kumppani, joka haluaa olla siellä missä sinäkin. Rauhallista seuraa, ei projektia.",
    strengths: [
      "Lempeä lasten ja vanhusten kanssa",
      "Tyytyväinen pienessäkin kodissa",
      "Tulee toimeen toisten koirien ja lemmikkien kanssa",
      "Ei tarvitse pitkiä lenkkejä",
    ],
    considerations: [
      "Rodulla tunnettuja perinnöllisiä sydän- ja hermosto-ongelmia",
      "Ei viihdy pitkään yksin — todellinen samettikoira",
      "Korvat ja turkki vaativat säännöllistä huolenpitoa",
      "Kysy aina molempien vanhempien terveystutkimuksista",
    ],
  },
  greyhound: {
    displayName: "Englanninvinttikoira",
    summary:
      "Pikajuoksija, joka nukkuu suurimman osan päivästä. Rauhallinen, siisti ja yllättävän hyvä valinta rauhalliseen kotiin.",
    strengths: [
      "Ihanan rauhallinen sisätiloissa",
      "Helppo turkki, haukkuu harvoin",
      "Pari lyhyttä juoksupyrähdystä riittää",
      "Usein löydettävissä uudelleensijoituksen kautta",
    ],
    considerations: [
      "Vahva halu jahdata kaikkea pientä ja nopeaa",
      "Vapaana juoksemiseen tarvitaan kunnolla aidattu alue",
      "Palelee herkästi, joten takki ja pehmeä peti eivät ole valinnaisia",
      "Ohut iho tarkoittaa naarmuja ja haavoja helpommin kuin luulisi",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba",
    summary:
      "Itsenäinen, tarkka ja omillaan pärjäävä. Shiba pikemminkin kunnioittaa kuin tottelee sinua.",
    strengths: [
      "Sietää yksinoloa paremmin kuin useimmat",
      "Puhdas, lähes kissamainen",
      "Pieni mutta kestävä",
      "Elää usein pitkän iän",
    ],
    considerations: [
      "Itsenäinen luonteeltaan — takaisinkutsu vaatii aitoa, kärsivällistä työtä",
      "Karvaa lähtee valtavasti kahdesti vuodessa, kaikkialle",
      "Usein varautunut tai etäinen muille koirille",
      "Ei anteeksiantavin ensimmäinen koira, jos harjoittelu on uutta",
    ],
  },
  "german-shepherd": {
    displayName: "Saksanpaimenkoira",
    summary:
      "Vakava, valpas ja syvästi uskollinen. Saksanpaimenkoira kaipaa tehtävän, rutiinin ja jonkun, jonka eteen kannattaa ponnistella.",
    strengths: [
      "Oppii nopeasti ja muistaa hyvin",
      "Omistautunut omalle väelleen",
      "Loistava, kun on sosiaalistettu kunnolla",
      "Parhaimmillaan päivittäisen tehtävän kanssa",
    ],
    considerations: [
      "Karvaa lähtee ympäri vuoden, ja rajusti kahdesti vuodessa",
      "Tarvitsee tunnin tai enemmän aitoa tekemistä päivittäin, ei pelkkää kävelyä",
      "Voi olla varautunut vieraille ilman varhaista, tarkoituksellista sosiaalistamista",
      "Kysy kasvattajalta lonkkien ja kyynärpäiden terveystutkimuksista",
    ],
  },
  dachshund: {
    displayName: "Mäyräkoira",
    summary:
      "Pieni, hauska ja rohkeampi kuin lyhyet jalat antaisivat olettaa. Iso persoona, joka haluaa olla lähelläsi.",
    strengths: [
      "Sopii mainiosti pieneenkin kotiin",
      "Ei tarvitse pitkiä lenkkejä",
      "Terävä ja täynnä luonnetta",
      "Hyvää seuraa, aina jaloissa",
    ],
    considerations: [
      "Selkä on aidosti herkkä — ei portaita eikä hyppyjä sohvalta",
      "Pitää oman äänensä kuulemisesta, usein ovikellon kohdalla",
      "Voi olla itsepäinen harjoittelussa — odota neuvottelua",
      "Lihoo helposti, mikä rasittaa pitkää selkää",
    ],
  },
  beagle: {
    displayName: "Beagle",
    summary:
      "Nenä neljällä jalalla. Iloinen, seurallinen ja lähes mahdoton houkutella pois hyvän hajun luota.",
    strengths: [
      "Aidosti ystävällinen kaikille",
      "Kestävä ja mukava lasten kanssa",
      "Rakastaa muita koiria",
      "Lyhyt turkki, helppo hoitaa",
    ],
    considerations: [
      "Takaisinkutsu on kovaa työtä — nenä voittaa yleensä väittelyn",
      "Ulvoo ja äännähtelee, kun kyllästyy tai jää liian pitkäksi aikaa yksin",
      "Syö kirjaimellisesti kaiken, minkä ulottuvilta löytää",
      "Tarvitsee aidosti turvallisen aidatun pihan, ei vain matalaa aitaa",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cockerspanieli",
    summary:
      "Pehmeäkatseinen, vilkas ja loputtoman yhteistyöhaluinen. Cockerspanieli on onnellisimmillaan puuhatessaan jotain yhdessä kanssasi.",
    strengths: [
      "Hellä ja miellyttämishaluinen",
      "Rakastaa jäljestystä ja leikkejä",
      "Pärjää niin kaupungissa kuin maalla",
      "Sopivan kokoinen useimpiin koteihin",
    ],
    considerations: [
      "Korvat vaativat usein tarkistusta ja puhdistusta, tai tulehdukset seuraavat",
      "Turkki takkuuntuu nopeasti ilman säännöllistä harjausta",
      "Käy levottomaksi ilman tekemistä",
      "Ei pärjää hyvin pitkiä aikoja yksin",
    ],
  },
  chihuahua: {
    displayName: "Chihuahua",
    summary:
      "Pikkuruinen, rohkea ja täysin omistautunut yhdelle tai kahdelle ihmiselle. Pieni koira, täysikokoiset mielipiteet.",
    strengths: [
      "Täydellinen kerrostaloon",
      "Tarvitsee hyvin vähän liikuntaa",
      "Elää pitkään, usein pitkälle teini-ikään asti",
      "Helppo ottaa mukaan matkalle",
    ],
    considerations: [
      "Aidosti hento — ei koira kovakouraiseen käsittelyyn",
      "Haukkuu helposti kaikelle vieraalle, myös lähettiä",
      "Palelee herkästi ja tarvitsee takin talvella",
      "Tarvitsee aitoa, tarkoituksellista sosiaalistamista pysyäkseen rauhallisena",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Kääpiösnautseri",
    summary:
      "Parrakas, terävä ja hiljaisen itsetietoinen. Terrierin aivot siistissä, vähän karvaa jättävässä turkissa.",
    strengths: [
      "Karvaa lähtee hyvin vähän",
      "Nokkela ja oppii nopeasti",
      "Sopii niin kerrostaloon kuin omakotitaloon",
      "Kestävä pieneksi koiraksi",
    ],
    considerations: [
      "Trimmaus 6–8 viikon välein, mikä kertyy kuluiksi",
      "Haukkuu herkästi ovelle, postille ja tuulelle",
      "Ei aina innostu pienemmistä lemmikeistä",
      "Taipuvainen lihomaan, joten annoskoko kannattaa pitää kurissa",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Berninpaimenkoira",
    summary:
      "Valtava, lempeä ja rauhallinen. Berninpaimenkoira on pehmeää seuraa perheelle, jolla on tilaa ja sietokykyä karvalle.",
    strengths: [
      "Ihanan kärsivällinen lasten kanssa",
      "Rauhallinen sisällä näin isoksi koiraksi",
      "Rakastaa kylmää säätä",
      "Lempeäluonteinen ja tasapainoinen",
    ],
    considerations: [
      "Elinikä on lyhyempi kuin useimmilla roduilla — raskas asia punnittavaksi",
      "Karvaa riittää joka puolelle taloa suurimman osan vuotta",
      "Ruoka, vakuutus ja hoito maksavat selvästi enemmän",
      "Kärsii pahasti, kun sää lämpenee",
    ],
  },
  "australian-shepherd": {
    displayName: "Australianpaimenkoira",
    summary:
      "Nopea, urheilullinen ja aina valppaana. Australianpaimenkoira kaipaa tarkoitusta enemmän kuin pihaa.",
    strengths: [
      "Nerokas kaikessa, mitä opetat",
      "Rakastaa koiraurheilua, temppuja ja jäljestystä",
      "Hyvin kiintynyt omaan ihmiseensä",
      "Komea ja kestävä ulkona",
    ],
    considerations: [
      "Tarvitsee tuntikausia aitoa aktiviteettia joka ikinen päivä",
      "Paimentaa lapsia, pyöriä ja lenkkeilijöitä, jos liikuntaa on liian vähän",
      "Kyllästyy nopeasti ja kertoo siitä äänekkäästi",
      "Sopii harvoin kerrostaloelämään",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jackrusselinterrieri",
    summary:
      "Pieni, nopea ja täysin vakuuttunut itsestään. Hauskaa seuraa, jos pidät koirasta, jolla on moottori.",
    strengths: [
      "Sitkeä, terve ja pitkäikäinen",
      "Mahtuu pieneenkin kotiin",
      "Loputtoman leikkisä",
      "Sietää yksinoloa paremmin kuin useimmat",
    ],
    considerations: [
      "Jahtaa kaikkea pientä ja nopeaa, oravat mukaan lukien",
      "Kaivaa, ja tarkoituksella — nurmikko ei ole turvassa",
      "Voi riidellä toisten koirien kanssa, etenkin vieraiden",
      "Tarvitsee huomattavasti enemmän liikuntaa kuin kokonsa antaisi olettaa",
    ],
  },
  "siberian-husky": {
    displayName: "Siperianhusky",
    summary:
      "Kaunis, ystävällinen ja rakennettu juoksemaan päiväkaudet. Husky tekee harvoin sitä mitä pyydät, pelkästään koska pyysit.",
    strengths: [
      "Seurallinen ihmisille ja koirille",
      "Luotu kylmään säähän ja pitkiin matkoihin",
      "Haukkuu harvoin",
      "Puhdas, vain vähän koiranhajua",
    ],
    considerations: [
      "Pakenee pihasta määrätietoisesti eikä tule luotettavasti takaisin",
      "Takaisinkutsu on elinikäinen projekti, ei viikonlopun juttu",
      "Karvaa lähtee kahdesti vuodessa — kaikkialle, viikkokausia",
      "Kärsii aidosti lämpimässä ilmastossa tai kuumana kesänä",
    ],
  },
  boxer: {
    displayName: "Bokseri",
    summary:
      "Pelle, joka ei koskaan oikein aikuistu. Vilkas, lämminsydäminen ja aina keskellä tapahtumia.",
    strengths: [
      "Mainio lasten kanssa",
      "Leikkisä pitkälle vanhuuteen asti",
      "Lyhyt turkki, helppo hoitaa",
      "Oppii hyvin ystävällisellä, kannustavalla harjoittelulla",
    ],
    considerations: [
      "Pomppiva ja voimakas — hyppääminen ihmisten päälle vaatii varhaista harjoittelua",
      "Ylikuumenee nopeasti lyhyen kuonon vuoksi",
      "Rodulla on joitain vakavia perinnöllisiä terveysongelmia",
      "Kuolaa reilusti — pidä rätti käsillä",
    ],
  },
  rottweiler: {
    displayName: "Rottweiler",
    summary:
      "Voimakas, tasapainoinen ja hiljaisen itsevarma. Rottweiler tarvitsee omistajan, joka tietää mitä tekee.",
    strengths: [
      "Vakaa ja itsevarma, kun on kasvatettu hyvin",
      "Oppii nopeasti ja tekee mielellään töitä",
      "Uskollinen ja suojeleva perhettään kohtaan",
      "Helppo turkki",
    ],
    considerations: [
      "Erittäin voimakas — hihnakoulutuksen on oltava kunnossa alusta asti",
      "Tarvitsee huolellista, tarkoituksellista sosiaalistamista ensimmäisestä päivästä",
      "Vakuutus ja ruoka maksavat selvästi enemmän",
      "Joissain paikoissa ja vakuutuksissa rotua rajoitetaan — kannattaa tarkistaa etukäteen",
    ],
  },
  whippet: {
    displayName: "Whippet",
    summary:
      "Sohvakoira pikajuoksijan kropassa. Rauhallinen, hellä ja huomattavan helppo elää kanssa.",
    strengths: [
      "Rauhallinen ja vaatimaton kotona",
      "Lähes ei turkinhoitoa",
      "Kaksi lyhyttä pyrähdystä päivässä riittää",
      "Lempeä ja hiljainen",
    ],
    considerations: [
      "Jahtaa kaikkea mikä juoksee, kissat ja lenkkeilijät mukaan lukien",
      "Vapaana liikkumiseen tarvitaan turvallisesti aidattu alue",
      "Palelee — takki ei ole valinnainen talvella",
      "Ohut iho repeää herkemmin kuin odottaisi",
    ],
  },
  "shih-tzu": {
    displayName: "Shih tzu",
    summary:
      "Luotu seurakoiraksi, ja todella hyvä siinä. Onnellinen sylissä, onnellinen pienessä kerrostalossa.",
    strengths: [
      "Ihanteellinen kaupunkielämään",
      "Ystävällinen lähes kaikille",
      "Karvaa lähtee hyvin vähän",
      "Ei tarvitse pitkiä lenkkejä",
    ],
    considerations: [
      "Päivittäinen harjaus, tai lyhyt trimmaus helpottamaan hoitoa",
      "Lyhyt kuono tekee helteestä aidosti vaarallisen",
      "Silmiä pitää tarkkailla ja puhdistaa päivittäin",
      "Siisteyskasvatus voi viedä aikaa ja kärsivällisyyttä",
    ],
  },
  pug: {
    displayName: "Mopsi",
    summary:
      "Koominen, hellä ja aina kannoillasi. Mopsi kaipaa seuraa paljon enemmän kuin liikuntaa.",
    strengths: [
      "Rakastaa kaikkia, koirat mukaan lukien",
      "Viihtyy pienimmässäkin kodissa",
      "Mukava ja hauska luonne",
      "Tarvitsee vain vähän liikuntaa",
    ],
    considerations: [
      "Hengitysongelmat ovat rodulla yleisiä",
      "Helle voi muuttua vaaralliseksi yllättävän nopeasti",
      "Lihoo hyvin helposti — annoskoko on tarkkailtava",
      "Rypyt ja silmät vaativat kunnollista päivittäistä hoitoa",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon frisé",
    summary:
      "Pieni valkoinen pilvi hyväntuulisuutta. Seurallinen, älykäs ja onnellisimmillaan ihmisten ympäröimänä.",
    strengths: [
      "Karvaa lähtee hyvin vähän",
      "Ystävällinen lasten ja toisten koirien kanssa",
      "Sopii kerrostaloon ja pieneen pihaan",
      "Oppii nopeasti ja rakastaa kehuja",
    ],
    considerations: [
      "Trimmauskäynti 4–6 viikon välein, eikä siitä voi tinkiä",
      "Ei oikeasti kestä pitkää yksinoloa",
      "Iho ja korvat vaativat säännöllistä huomiota",
      "Siisteyskasvatus vaatii aitoa johdonmukaisuutta",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshirenbullterrieri",
    summary:
      "Lihaksikas, pehmeäsydäminen ja tunnetusti lapsirakas. Staffi rakastaa väkeään varauksetta.",
    strengths: [
      "Mainio perhekoira hyvin kasvatettuna",
      "Lyhyt turkki, hyvin helppo hoitaa",
      "Kestävä ja leikkisä",
      "Halukas miellyttämään",
    ],
    considerations: [
      "Voi olla hankala toisten koirien kanssa ilman huolellista totuttelua",
      "Yllättävän voimakas kokoonsa nähden hihnassa",
      "Pureskelee pehmeät lelut ja pedit innolla puhki",
      "Kokee epäreilua kohtelua tai rajoituksia joissain paikoissa — hyvä tietää etukäteen",
    ],
  },
  vizsla: {
    displayName: "Unkarinvizsla",
    summary:
      "Tarrakoira. Urheilullinen, herkkä eikä koskaan metriä kauempana sinusta.",
    strengths: [
      "Kaunis, hiljainen ja puhdas",
      "Loistava juoksu- tai patikointikaveri",
      "Erittäin hellä",
      "Lähes ei turkinhoitoa",
    ],
    considerations: [
      "Voi oireilla pahasti, jos jää yksin pitkiksi työpäiviksi",
      "Tarvitsee tunnin tai kaksi kunnon liikuntaa päivittäin",
      "Herkkä korotetulle äänelle — vain kannustava harjoittelu toimii",
      "Palelee selvästi talvilenkeillä",
    ],
  },
  samoyed: {
    displayName: "Samojedinkoira",
    summary:
      "Hymyilevä lumikoira. Seurallinen, puhelias ja kaunis — ja karvaa riittää todella paljon.",
    strengths: [
      "Aidosti ystävällinen kaikille",
      "Rakastaa kylmää säätä ja lunta",
      "Leikkisä ja perhekeskeinen",
      "Harvoin aggressiivinen",
    ],
    considerations: [
      "Karvaa lähtee suorastaan hämmästyttävän paljon",
      "Vaatii harjausta useita kertoja viikossa pysyäkseen siistinä",
      "Puhuu, ulvoo ja ilmaisee mielipiteensä säännöllisesti",
      "Ylikuumenee helposti kesän tullen",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshirenterrieri",
    summary:
      "Pikkuruinen, terävä ja täynnä terrierin luonnetta. Yorkie on rohkeampi kuin kukaan osaa odottaa.",
    strengths: [
      "Karvaa lähtee tuskin lainkaan",
      "Täydellinen koko kerrostaloon",
      "Nokkela ja oppii nopeasti",
      "Elää usein pitkän iän",
    ],
    considerations: [
      "Turkki vaatii päivittäistä hoitoa, tai lyhyen trimmauksen yksinkertaisuuden vuoksi",
      "Haukkuu kaikelle, myös lähetille",
      "Hento jaloissa — helppo satuttaa vahingossa",
      "Siisteyskasvatus voi viedä odotettua kauemmin",
    ],
  },
};
