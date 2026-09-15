/** Matkailu & Seikkailut -sisällöt DoggMatch-äänellä. */

export const carSteps = [
  { no: "01", title: "Anna tutustua autoon paikallaan", body: "Ovet auki, moottori sammutettuna, ei kiirettä. Anna koiran mennä autoon ja tulla pois niin usein kuin haluaa." },
  { no: "02", title: "Palkitse rauhallisuudesta", body: "Herkku rauhallisesta olosta, ei hyppimisestä. Pidä tunnelma hiljaisena ja hieman tylsänä." },
  { no: "03", title: "Istu autossa ilman ajoa", body: "Kaksi minuuttia, kiinnitettynä kuten oikealla matkalla. Sitten ulos ja jotain kivaa." },
  { no: "04", title: "Yksi hyvin lyhyt reissu", body: "Korttelin ympäri. Lopeta jonnekin mukavaan – mieluummin lempipaikkaan nurmikolla kuin eläinlääkäriin." },
  { no: "05", title: "Lisää hieman matkaa", body: "Vasta kun lyhyt reissu on koiralle aidosti tylsä. Huolestuneelle koiralle viikkoja, ei päiviä." },
  { no: "06", title: "Tee kohteesta vaivan arvoinen", body: "Jos useimmat matkat päättyvät paikkaan, jota he rakastavat, autosta tulee itsessään hyvä asia." },
];

export const carSafety = {
  safe: [
    "Kiinnitettynä takana, törmäystestatussa valjaissa turvavyöhön kiinnitettynä",
    "Tai sopivan kokoisessa matkahäkissä, joka ei pääse liukumaan",
    "Tai takakontissa, jossa on ajoneuvoon asennettu suojakaide",
    "Riittävästi tilaa maata, istua ja kääntyä",
    "Tasainen ilmavirta ja miellyttävä lämpötila",
  ],
  unsafe: [
    "Vapaana autossa",
    "Kuljettajan sylissä tai missään, mistä ne pääsevät kuljettajaan käsiksi",
    "Kyky siirtyä jalkatilaan tai eteen",
    "Pää avoimesta ikkunasta vauhdissa",
    "Asennossa, josta ne voivat sinkoutua äkkijarrutuksessa",
  ],
  note: "Tarkat lakisääteiset vaatimukset vaihtelevat maittain. Tarkista säännöt asuinmaassasi ja matkakohteessasi.",
};

export const carSickness = {
  signs: ["Kuolaaminen", "Huulien lipominen ja nieleminen", "Vinkuminen", "Levottomuus tai edestakaisin kävely", "Oksentaminen"],
  helps: [
    "Lyhyempiä matkoja toistaiseksi",
    "Vähittäinen totuttelu painostamisen sijaan",
    "Suuren aterian välttäminen juuri ennen lähtöä",
    "Viileä, rauhallinen ja tasainen ympäristö",
    "Säännölliset tauot pidemmillä matkoilla",
  ],
  note: "Emme suosittele lääkkeitä tai annostuksia. Jos oireet jatkuvat tai ovat vakavia, eläinlääkäri voi auttaa.",
};

export const nervousDog = [
  "Älä aloita pitkällä matkalla – aloita paikallaan olevasta autosta",
  "Pidä kaikki ennakoitavana: sama paikka, samat valjaat, sama rutiini",
  "Palkitse rauhallisuudesta sen sijaan, että yrität piristää",
  "Anna koiran valita mennä autoon aina kun mahdollista",
  "Lopeta ennen kuin koira on huolissaan, älä sen jälkeen",
];

export const walkPrep = [
  "Talutin ja valjaat tai panta, jotka sopivat kunnolla",
  "ID-merkki, jossa on toimiva puhelinnumero",
  "Pussit jätöksille ja paikka niille",
  "Vettä lämpiminä päivinä tai pitkillä reiteillä",
  "Muutama herkku – luoksetulo on sen arvoista",
  "Jotain heijastavaa tai valaistua, kun on pimeää",
  "Tassusuoja, jos on jäistä, suolattua tai erittäin kuumaa",
  "Reitti, jonka tunnet, tai kartta, jos et tunne",
];

export const hikingFactors = [
  { title: "Kunto", body: "Matkaa kasvatetaan viikkojen aikana. Koira, joka kävelee tunnin päivässä, ei ole valmis koko päiväksi vuorille." },
  { title: "Ikä", body: "Kasvavat pennut ja vanhemmat koirat pärjäävät paremmin lyhyemmillä, tasaisemmilla päivillä." },
  { title: "Sää", body: "Kuumuus on se, joka yllättää ihmiset. Aloita aikaisin tai älä mene kauas." },
  { title: "Maasto", body: "Kalliot, sorat ja pitkä ruoho rasittavat tassuja eri tavoin." },
  { title: "Vesi", body: "Ota mukaan enemmän kuin luulet tarvitsevasi, teille molemmille. Älä luota puroihin." },
  { title: "Lepo", body: "Varjo ja kunnon tauko noin tunnin välein, pyysipä koira sitä tai ei." },
  { title: "Luoksetulo", body: "Ole rehellinen sen suhteen. Jos se on epäluotettava, käytä pitkää talutinta." },
  { title: "Villieläimet ja karja", body: "Pidä koira aina kytkettynä eläinten lähellä. Paikalliset säännöt usein vaativat sitä." },
];

export const weather = {
  hot: [
    "Kävele aikaisin tai myöhään, älä keskellä päivää",
    "Testaa jalkakäytävää kämmenselälläsi seitsemän sekunnin ajan",
    "Varjo ja vesi jokaisella pysähdyksellä",
    "Hidasta vauhtia kauan ennen kuin koira pyytää sinua",
    "Varo raskasta hengitystä, horjumista tai koiraa, joka menee makuulle eikä liiku",
  ],
  cold: [
    "Lyhytkarvaiset ja pienet koirat menettävät lämpöä nopeasti",
    "Märkä turkki ja tuuli yhdessä ovat pahempia kuin pelkkä kylmyys",
    "Huuhtele ja kuivaa tassut suolattujen jalkakäytävien jälkeen",
    "Varo jääpalloja tyynyjen välissä",
    "Palaa kotiin mieluummin ennemmin kuin myöhemmin",
  ],
  rain: [
    "Ole näkyvä – valo tai heijastava valjas",
    "Kuivaa koira kunnolla, erityisesti korvat ja kainalot",
    "Tarkista tassut hiekan varalta, jota on tarttunut lätäköistä",
    "Märkä koira jäähtyy nopeasti, kun liikkuminen loppuu",
  ],
  note: "Ei ole olemassa yhtä lämpötilaa, joka sopisi jokaiselle koiralle. Husky ja vinttikoira ovat eri mieltä samana aamuna.",
};

export const pawChecks = [
  "Kuuma jalkakäytävä, joka palaa nopeammin kuin useimmat ihmiset odottavat",
  "Terävät kivet ja rikkoutunut lasi",
  "Jää ja jääpallot, jotka muodostuvat tyynyjen väliin",
  "Tiesuola, joka kirvelee eikä sitä saa nuolla pois",
  "Heinänsiemenet, jotka pääsevät varpaiden väliin",
  "Pienet haavat ja kaikki, mikä saa koiran nuolemaan yhtä tassua toistuvasti",
];

export const longJourney = [
  "Vesi", "Ruoka", "Herkut", "Talutin", "Valjaat", "Pussit jätöksille", "Pyyhe",
  "Lääkitys tarvittaessa", "Terveystiedot", "Tärkeät yhteystiedot",
  "Hätätiedot", "Tutun peiton", "Lempilelun", "Siivoustarvikkeet",
];

export const beforeYouLeave = [
  "Koira turvallisesti kiinnitettynä",
  "Vesi",
  "Ruoka",
  "Talutin",
  "ID- ja mikrosirun tiedot",
  "Puhelin ladattuna",
  "Terveystiedot saatavilla",
  "Hätäyhteystiedot kirjoitettuna",
  "Tauot suunniteltu",
  "Kohde tarkistettu koirien suhteen",
  "Sää tarkistettu",
  "Koira mukavasti ennen lähtöä",
];

export const holidayChecklist = [
  "Majoitus, joka todella toivottaa koirat tervetulleiksi",
  "Miten matkustat ja mitä se tarkoittaa koiralle",
  "Heidän tavallinen ruokansa, tavallisella määrällä",
  "Vesi ja matkamuki",
  "Terveystiedot ja rokotustiedot",
  "Mahdolliset lääkkeet, hieman ylimääräistä",
  "Mikrosirun tiedot ja ID-merkki, jossa on matkapuhelinnumerosi",
  "Hätäyhteystiedot, mukaan lukien joku kotona",
  "Tuttu peti ja yksi lempiesine",
  "Lähin eläinlääkäri määränpäässä, selvitettynä etukäteen",
  "Paikalliset säännöt taluttimista, rannoista ja julkisista tiloista",
];

export const publicTransport = [
  { title: "Juna", body: "Säännöt vaihtelevat operaattorin ja maan mukaan. Jotkut kuljettavat koiria ilmaiseksi, jotkut veloittavat, jotkut vaativat kuljetuskopan pienille koirille." },
  { title: "Bussi", body: "Usein kuljettajan harkinnan mukaan. Hiljaisemmat ajat ovat lempeämpiä koiralle, joka vielä opettelee." },
  { title: "Metro", body: "Ruuhkat, liukuportaat ja melu kaikki kerralla. Harjoittele laituria ennen matkan harjoittelua." },
  { title: "Lautta", body: "Monissa on koiratarhoja, jotkut sallivat koirat kannella, harvat sallivat ne hytteihin. Varaa koiralle, älä vain itsellesi." },
];

export const airTravel = [
  "Lentoyhtiöiden säännöt ovat oma asiansa, erillään maan maahantulovaatimuksista",
  "Matkustamo, ruuma ja rahti – jokaisella on omat ehtonsa ja kuljetuskopin kokonsa",
  "Jotkut lentoyhtiöt rajoittavat tiettyjä rotuja tai eivät lennätä koiria kuumina tai kylminä kuukausina",
  "Dokumentointivaatimukset vaihtelevat lentoyhtiön ja määränpään mukaan",
  "Varaa hyvissä ajoin – koirien määrä per lento on yleensä rajoitettu",
  "Keskustele eläinlääkärisi kanssa siitä, sopiiko lentäminen juuri sinun koirallesi",
];

export const travelWithDifferentDogs = [
  { title: "Pennut", body: "Lyhyet matkat, tiheät pysähdykset ja suuri annos kärsivällisyyttä sotkujen kanssa." },
  { title: "Aikuiset", body: "Yleensä helpoimmat matkustajat, kun tapa on opittu." },
  { title: "Seniorikoirat", body: "Lisää pysähdyksiä, helpompi nousta kyytiin ja pois, ja pehmeä paikka levätä." },
  { title: "Pienet koirat", body: "Julkisissa liikennevälineissä vaaditaan usein kuljetuskoppaa, ja se voi olla kodikas pesä autossa." },
  { title: "Isot koirat", body: "Mieti takakonttia, suojakaidetta ja miten ne pääsevät kyytiin ilman olkapään loukkaantumista." },
  { title: "Arat koirat", body: "Viikot lyhyitä, rauhallisia matkoja ovat parempia kuin yksi pitkä matka, jonka ne muistavat huonosti." },
  { title: "Hyvin aktiiviset koirat", body: "Kunnon lenkki ennen lähtöä. Väsynyt koira on hyvä matkustaja." },
];
