import type { CareTopic } from "./types";

const vetOrgs = {
  wsava: { label: "Maailman pieneläinlääkäriyhdistyksen ravitsemus- ja hammashoidon ohjeet", org: "World Small Animal Veterinary Association" },
  avdc: { label: "Kotihoito-ohjeet hammashoitoon", org: "American Veterinary Dental College" },
  rspca: { label: "Arjen koiranhoito-ohjeet", org: "RSPCA" },
  aaha: { label: "Elinvaihe- ja ennaltaehkäisevän hoidon ohjeet", org: "American Animal Hospital Association" },
  bva: { label: "Omistajan ohjeet terveyteen ja hyvinvointiin", org: "British Veterinary Association" },
} as const;

export const careTopicsFi: CareTopic[] = [
  /* ------------------------------------------------------------- Dental */
  {
    id: "dental",
    title: "Terve suu on tärkeä",
    promise: "Muutama lempeä minuutti, muutama kerta viikossa, ja koirasi suu pysyy huomattavasti mukavampana.",
    category: "dental",
    intro: [
      "Useimmilla koirilla on jonkinlaisia hammasongelmia muutaman vuoden ikään mennessä, ja ne on helppo huomata, koska koirat harvoin valittavat niistä.",
      "Hyvä uutinen: hampaiden harjaus on yksittäinen hyödyllisin asia, jonka voit tehdä kotona, ja melkein jokainen koira voi oppia nauttimaan siitä, jos etenet hitaasti.",
    ],
    steps: [
      {
        title: "Anna ensin tutustua",
        body: "Laita hammasharja lattialle ja anna koirasi nuuhkia sitä. Mitään muuta ei tapahdu. Tämä vaihe on tärkeämpi kuin kuulostaa.",
        visual: "brush-1",
      },
      {
        title: "Kosketa huulia, sitten hampaita",
        body: "Nosta huulta hetkeksi, kehu, päästä irti. Sitten sormella ulkopintaa hampaita pitkin. Pidä se lyhyenä ja iloisena.",
        visual: "brush-1",
      },
      {
        title: "Lisää koiran hammastahnaa",
        body: "Anna nuolaista vähän sormestasi – useimmat ovat liha- tai siipikarjamakuisia, ja koirat yleensä pitävät niistä. Älä koskaan käytä ihmisten hammastahnaa; sitä ei ole tarkoitettu nieltäväksi.",
      },
      {
        title: "Harjaa muutama hammas",
        body: "Pieniä ympyröitä ulkopinnoilla, joihin plakki kertyy eniten. Suuret takahampaat ja kulmahampaat ovat tärkeimpiä. Sisäpinnat voivat odottaa – niihin kertyy vähemmän plakkia ja useimmat koirat eivät pidä niistä.",
        visual: "brush-2",
      },
      {
        title: "Lopeta ennen kuin koira kyllästyy",
        body: "Kolmekymmentä sekuntia on aluksi hyvä sessio. Lopeta, kun koirastasi tuntuu vielä hyvältä, ja pidennä siitä vähitellen.",
      },
    ],
    routine: [
      { day: "Päivä 1", body: "Anna koirasi nuuhkia hammasharjaa. Se on koko sessio." },
      { day: "Päivä 2", body: "Kosketa sen huulia hellästi sekunnin tai pari, sitten herkku." },
      { day: "Päivä 3", body: "Maista koiralle turvallista hammastahnaa sormeltasi." },
      { day: "Päivä 4", body: "Hiero sormella tai harjalla muutamia etuhampaita." },
      { day: "Päivä 5", body: "Harjaa toinen puoli suusta lyhyesti." },
      { day: "Päivä 6", body: "Molemmat puolet, edelleen lyhyesti. Kehu matkan varrella." },
      { day: "Päivä 7", body: "Normaali pieni sessio. Jatka sitten näin, useimpina päivinä jos pystyt." },
    ],
    sections: [
      {
        title: "Mikä todella auttaa",
        body: "Harjaamisella on vahvin tieteellinen näyttö. Kaikki muu on hyödyllinen lisä, ei korvike.",
        points: [
          "Pehmeä harja, sormiharja tai jopa sideharso – mitä tahansa koirasi sietää",
          "Vain koiran hammastahnaa",
          "Päivittäin on ihanteellista, muutaman kerran viikossa auttaa silti",
          "Puruluut ja ruoat, joilla on eläinlääkärin hammashoidon merkki, voivat auttaa harjaamisen rinnalla",
        ],
      },
      {
        title: "Luista ja kovista puruleluista",
        body: "Kova pureskelu ei puhdista hampaita luotettavasti, ja erittäin kovat esineet ovat yleinen syy hammasmurtumiin – sarvet, kaviot, kova nailon, kypsennetyt luut, jääpalat.",
        points: [
          "Karkea ohje: jos et pystyisi painamaan sitä kynnelläsi, se on todennäköisesti liian kova",
          "Kypsennetyt luut voivat lohjeta ja niitä tulee välttää",
          "Valvo aina purulelua ja ota se pois, kun se pienenee nieltäväksi",
          "Eläinlääkärisi voi kertoa, mitkä purulelut aiheuttavat paikallisesti ongelmia",
        ],
      },
      {
        title: "Ammattimainen puhdistus",
        body: "Joitain plakin kertymiä voidaan poistaa vain nukutuksessa, röntgenkuvien avulla nähdäkseen, mitä ikenien alla tapahtuu. Se ei ole sinun vikasi – se on osa normaalia hoitoa monille koirille.",
      },
    ],
    watchFor: [
      "Pysyvästi paha hengitys, ei vain koiramainen",
      "Punaiset, turvonneet tai verenvuotoiset ikenet",
      "Pureskelu toisella puolella tai ruoan pudottaminen",
      "Murtunut tai värjäytynyt hammas",
      "Normaalia enemmän kuolaamista",
      "Kuonon koskettelu tai kääntyminen pois, kun kosketat kasvoja",
      "Turvotus kasvoissa tai silmän alla",
    ],
    whenToAskVet:
      "Jos huomaat jonkin näistä, on syytä varata aika tarkastukseen. Hammaskipu on helppo jättää huomaamatta, koska useimmat koirat syövät sen läpi.",
    ageNotes: {
      puppy: "Pennut menettävät maitohampaansa noin neljän kuukauden iästä lähtien. Aloita käsittely nyt – pentu, joka pitää hammasharjoja normaaleina, on lahja tulevalle itsellesi.",
      senior: "Vanhempien koirien suut vaativat useammin tarkastusta, ja hammaskipu on yleinen syy siihen, että vanhempi koira vaikuttaa hitaammalta tai ärtyisämmältä.",
    },
    sources: [vetOrgs.avdc, vetOrgs.wsava],
  },

  /* --------------------------------------------------------- Coat & skin */
  {
    id: "coat",
    title: "Turkki & iho",
    promise: "Tutustu siihen, mikä on normaalia koirallesi, niin huomaat nopeasti, kun jokin ei ole.",
    category: "coat",
    intro: [
      "Harjaaminen ei ole vain ulkonäöstä kiinni. Se on tapa, jolla useimmat ihmiset huomaavat ensimmäisenä kyhmyn, arkuuden, punkin tai takun muodostumisen hankalaan paikkaan.",
      "Kuinka usein riippuu paljon enemmän turkin tyypistä kuin rodun nimestä paperissa – ja sekarotuiset koirat voivat olla mitä tahansa väliltä.",
    ],
    sections: [
      {
        title: "Lyhyet, sileät turkit",
        body: "Nopea harjaus kerran viikossa kumihansikkaalla tai harjasuuttimella pitää irtoavan karvan kurissa ja tuntuu miellyttävältä useimmista koirista.",
        points: ["Irtoaa karvaa ympäri vuoden, usein enemmän kuin ihmiset odottavat", "Kylpy vain, kun on todella likainen", "Iho on helppo nähdä – käytä sitä"],
      },
      {
        title: "Pitkät turkit",
        body: "Vaatii kunnollista harjausta useita kertoja viikossa, aivan ihoon asti, ei vain pintaa pitkin.",
        points: ["Takkuja muodostuu korvien taakse, kainaloihin ja kauluksen ympärille", "Kampa kertoo totuuden, jota harja ei kerro", "Trimmaus jalkojen ja takaosan ympäriltä pitää asiat siistinä"],
      },
      {
        title: "Kiharat turkit",
        body: "Kiharat eivät irrota paljon karvaa, mikä tarkoittaa, että irtoava karva jää turkkiin ja takkuuntuu huomaamatta.",
        points: ["Harjaa ja kampaa joka päivä tai joka toinen päivä", "Säännölliset trimmauskäynnit, yleensä kuuden tai kahdeksan viikon välein", "Takut kiristävät ihoa ja sattuvat – poista ne ajoissa"],
      },
      {
        title: "Tuplaturkit",
        body: "Pehmeä aluskarva karkean pintakarvan alla. Se irtoaa runsaasti kahdesti vuodessa ja löydät sitä kaikkialta.",
        points: ["Aluskarvan harja on hyödyllinen keväällä ja syksyllä", "Älä aja tuplaturkkia, ellei eläinlääkäri niin neuvo", "Runsas harjaus on parempi kuin tiheä kylvetys"],
      },
      {
        title: "Karkeat turkit",
        body: "Karkeat, säänkestävät turkit, jotka säilyttävät tekstuurinsa käsin nyppimällä leikkaamisen sijaan.",
        points: ["Kampaa parta ja jalat", "Leikkaaminen pehmentää turkkia ajan myötä", "Trimmaaja, joka tuntee turkin tyypin, on löytämisen arvoinen"],
      },
    ],
    steps: [
      {
        title: "Aloita käsilläsi",
        body: "Käytä käsiäsi koirasi yli ennen kuin otat harjan esiin. Tunnet kyhmyjä, rupia, arkoja kohtia ja kaikkea, mikä on tarttunut turkkiin.",
      },
      {
        title: "Harjaa osioittain",
        body: "Työskentele pienissä osioissa, aivan ihoon asti. Pidä karvaa takun yläpuolelta, jotta et vedä ihoa samalla kun harjaat.",
      },
      {
        title: "Tarkista hankalat paikat",
        body: "Korvien takana, kainaloissa, jalkojen takana, hännässä ja kauluksen alla. Takut alkavat lähes aina sieltä, missä jokin hankaa.",
      },
      {
        title: "Lopeta jollain mukavalla",
        body: "Herkku, rapsutus, leikki. Turkkihoitoon tulisi suhtautua niin, että koira odottaa sitä, ei kärsi sitä.",
      },
    ],
    watchFor: [
      "Raapiminen, nuoleminen tai pureminen, joka on uutta tai jatkuvaa",
      "Punainen iho, näppylät, rupi tai kuuma kohta",
      "Karvojen oheneminen tai lähtö laikkuina",
      "Haju, jota ei ollut ennen",
      "Hilseily tai rasvainen iho",
      "Kyhmyt tai kyhmy, joka on muuttunut",
    ],
    whenToAskVet:
      "Kutinaan on monia mahdollisia syitä – loiset, allergiat, infektiot, joskus jotain aivan muuta. Jos se on jatkuvaa, eläinlääkärisi voi selvittää syyn, sen sijaan että arvailet shampoita.",
    ageNotes: {
      puppy: "Pentujen turkit muuttuvat kasvaessa. Harjaaminen nyt on lähinnä sitä, että opetetaan niille, että käsittely on miellyttävää.",
      senior: "Vanhemmat koirat harjaavat itseään usein vähemmän ja niiden iho muuttuu hilseilevämmäksi tai kyhmyisemmäksi. Hellä, tiheä harjaus on parempi kuin pitkät sessiot.",
    },
    sources: [vetOrgs.rspca, vetOrgs.bva],
  },

  /* ---------------------------------------------------------- Paws & nails */
  {
    id: "paws",
    title: "Tassut & kynnet",
    promise: "Kolmekymmentä sekuntia kävelyn jälkeen poistaa useimmat pienet ongelmat ennen kuin niistä tulee kipeitä.",
    category: "paws",
    intro: [
      "Tassut ottavat koville ja koirat ovat stoalaisia niiden suhteen. Nopea tarkastus kävelyn jälkeen on yksi helpoimmista tavoista rakentaa.",
      "Liian pitkät kynnet muuttavat koiran seisoma-asentoa ja voivat tehdä kävelystä epämukavaa, joten niihin kannattaa kiinnittää huomiota.",
    ],
    steps: [
      {
        title: "Pidä tassua hellästi",
        body: "Tue sitä alta sen sijaan, että puristat. Jos koirasi vetää tassua pois, anna sen tehdä niin – yritä sitten uudelleen myöhemmin toisessa kädessäsi herkku.",
        visual: "paw-check",
      },
      {
        title: "Katso tyynyjen väliin",
        body: "Ruoho-siemenet, hiekka, tiesuola ja pienet kivet rakastavat olla siellä. Talvella huuhtele ja kuivaa tassut suolattujen jalkakäytävien jälkeen.",
        visual: "paw-check",
      },
      {
        title: "Tunne tyynyt",
        body: "Niiden pitäisi olla joustavia. Halkeamat, viillot, punoitus tai tassu, joka on muita lämpimämpi, vaativat tarkempaa tarkastelua.",
      },
      {
        title: "Tarkista tassujen välinen karva",
        body: "Karvaisissa tassuissa se takkuuntuu ja kerää asioita. Huolellinen trimmaus tyynyjen tasalle auttaa myös otteessa.",
      },
      {
        title: "Leikkaa pieniä määriä",
        body: "Ota vain kärki, sitten lopeta. Vähän ja usein on paljon turvallisempaa kuin yksi iso sessio, ja palkitse rauhallisesti koko ajan.",
        visual: "nails",
      },
    ],
    sections: [
      {
        title: "Kynnet, ilman draamaa",
        body: "Jos kuulet napsahtelua kovalla lattialla, ne ovat todennäköisesti hieman pitkät. Useimmat koirat tarvitsevat leikkauksen 3–6 viikon välein.",
        points: [
          "Kosketa tassuja joka päivä, jotta leikkurit eivät yllätä",
          "Leikkaa vain aivan kärki – verisuoni on syvemmällä kuin ihmiset luulevat",
          "Tummat kynnet: leikkaa pienempiä paloja ja lopeta, kun leikattu pinta näyttää liituiselta",
          "Lopeta, jos koirasi ahdistuu. Mikään tässä ei ole taistelun arvoista",
          "Trimmaaja tai eläinhoitaja voi tehdä sen, eikä siinä ole mitään hävettävää",
        ],
      },
      {
        title: "Jalkakäytävät ja sää",
        body: "Paina kätesi takaosaa jalkakäytävälle seitsemän sekunnin ajan. Jos et voi pitää sitä siellä, se on liian kuuma tassuille – kävele sen sijaan aikaisin aamulla tai myöhään illalla.",
        points: ["Talven suola ja hiekka ärsyttävät tyynyjä – huuhtele ja kuivaa jälkeenpäin", "Pitkät kävelyt karhealla maastolla voivat kuluttaa tyynyjä", "Syvä lumi pakkaantuu jääpalloiksi karvaisissa jaloissa"],
      },
    ],
    watchFor: [
      "Halvaantuminen tai yhden tassun jatkuva nuoleminen",
      "Murtunut, verenvuotoinen tai turvonnut tyyny",
      "Kynsi, joka on revennyt tai murtunut taaksepäin",
      "Punoitus tai paha haju varpaiden välissä",
      "Haluttomuus kävellä pinnalla, jolla ne olivat aiemmin kunnossa",
    ],
    whenToAskVet:
      "Revennyt kynsi, syvä haava tai jatkuva ontuminen on syy soittaa. Jos leikkaat kynnen liian lyhyeksi ja se vuotaa, veren hyydyttämisjauhe ja hellä paine yleensä rauhoittavat sen – soita eläinlääkärillesi, jos se ei lakkaa.",
    sources: [vetOrgs.rspca, vetOrgs.aaha],
  },

  /* -------------------------------------------------------------- Ears */
  {
    id: "ears",
    title: "Korvat",
    promise: "Katso, haista. Se on suurin osa korvanhoidosta.",
    category: "health",
    intro: [
      "Terveet korvat ovat sisältä vaaleanpunaiset, ilman voimakasta hajua. Tuon perustason tunteminen on koko juju.",
      "Korvia ei tarvitse syväpuhdistaa rutiininomaisesti. Terveen korvan sisälle kaivaminen aiheuttaa usein ongelmia, joita se yrittää estää.",
    ],
    sections: [
      {
        title: "Viikoittainen katsaus",
        body: "Nosta läppää, katso sisään, haista. Muutama sekunti, kun olette jo yhdessä.",
        points: ["Vaaleanpunainen, ei voimakasta hajua, ei eritettä", "Pieni määrä vahaa on normaalia", "Kuivaa korvat uinnin tai kylvyn jälkeen"],
      },
      {
        title: "Jos eläinlääkärisi on antanut puhdistusainetta",
        body: "Käytä heidän tuotettaan ja heidän ohjeitaan. Älä koskaan työnnä vanupuikkoja korvakäytävään – pakkaat likaa syvemmälle.",
      },
      {
        title: "Korvat, jotka tarvitsevat enemmän huomiota",
        body: "Löysät korvalehdet, karvaiset korvakäytävät ja paljon uivat koirat ovat alttiimpia ongelmille. Se riippuu yksilöstä, ei vain rodusta.",
      },
    ],
    watchFor: [
      "Hiivainen tai hapan haju",
      "Punoitus tai turvotus läpän sisällä",
      "Ruskea, keltainen tai verinen erite",
      "Korvan raapiminen tai sen hierominen sohvaa vasten",
      "Pään pudistelu tai kallistelu",
      "Väristys, kun kosketat korvaa",
    ],
    whenToAskVet:
      "Korvatulehdukset ovat kivuliaita eivätkä parane itsestään. Jos jokin näyttää tai haisee oudolta, anna se tarkastettavaksi sen sijaan, että yrität laittaa tippaa, jota sinulla on laatikossa.",
    sources: [vetOrgs.rspca],
  },

  /* -------------------------------------------------------------- Eyes */
  {
    id: "eyes",
    title: "Silmät",
    promise: "Kirkkaat, selkeät ja samanlaiset. Sitä etsitään.",
    category: "health",
    intro: [
      "Nopea silmäys koirasi silmiin aamulla tervehdyksen yhteydessä riittää useimpina päivinä.",
      "Silmät voivat muuttua lievästi ärtyneistä vakavasti kivuliaiksi nopeasti, joten ne ovat yksi niistä asioista, joihin kannattaa olla hieman varovainen.",
    ],
    sections: [
      {
        title: "Miltä normaali näyttää",
        body: "Kirkas ja selkeä, valkuaiset eivät ole verestävät, pupillit saman kokoisia, ei siristelyä. Pieni kirkas tai harmaa kyynelerite silmäkulmissa ei yleensä ole mitään.",
      },
      {
        title: "Arkinen hoito",
        body: "Pyyhi kuivunut erite kostealla vanulapulla ja puhtaalla vedellä, yksi pyyhkäisy per silmä. Pidä pitkät karvat leikattuna pois silmistä. Älä käytä ihmisten silmätippoja.",
      },
      {
        title: "Litteäkasvoiset koirat",
        body: "Ulonevat silmät ovat alttiimpia kolhuille, kuivumiselle ja haavaumille. Jos koirallasi on lyhyt kuono, tarkkaile hieman useammin.",
      },
    ],
    watchFor: [
      "Siristely tai silmän sulkeminen",
      "Punoitus, joka jää",
      "Vihreä tai keltainen erite",
      "Sameus tai värin muutos",
      "Kasvojen hierominen maata vasten",
      "Mikä tahansa äkillinen muutos tai törmäily esineisiin",
    ],
    whenToAskVet:
      "Kipeä tai äkillisesti muuttunut silmä vaatii päivän sisäisen soiton. Näköongelmat paranevat paremmin, kun ne havaitaan ajoissa.",
    sources: [vetOrgs.bva],
  },

  /* ---------------------------------------------------- Body condition */
  {
    id: "body-condition",
    title: "Kehon kunto",
    promise: "Vaaka-lukema on vähemmän tärkeä kuin miltä koirasi näyttää ja tuntuu käsissäsi.",
    category: "weight",
    intro: [
      "Kaksi samanpainoista koiraa voi olla täysin eri kunnossa. Kehon kunto on se, miten eläinlääkärit arvioivat sitä, ja voit oppia sen noin minuutissa.",
      "Tämä on ohje, ei diagnoosi. Rotu ja rakenne muuttavat sitä, miltä 'oikea' näyttää – vinttikoira ja labradorinnoutaja täydellisessä kunnossa eivät näytä lainkaan samalta.",
    ],
    steps: [
      {
        title: "Tunne kylkiluut",
        body: "Käytä sormenpäitäsi koirasi kyljellä. Sinun pitäisi tuntea kylkiluut helposti ohuen kerroksen alla, vähän kuin tuntisit kätesi takaosan luut.",
        visual: "body-condition",
      },
      {
        title: "Katso ylhäältä",
        body: "Seiso koirasi yläpuolella ja katso, onko kylkiluiden takana lievä kaventuminen. Suora tai pullottava ääriviiva viittaa pieneen ylimäärään.",
        visual: "body-condition",
      },
      {
        title: "Katso sivulta",
        body: "Vatsan pitäisi supistua takajalkoja kohti sen sijaan, että se olisi samalla tasolla rintakehän kanssa.",
      },
      {
        title: "Tee se kuukausittain",
        body: "Muutokset hiipivät hitaasti. Tämän tekeminen samana päivänä kuukaudessa tekee muutoksesta ilmeisen, kun se on vielä pieni.",
      },
    ],
    sections: [
      {
        title: "Hieman ylipainoinen",
        body: "Kylkiluut vaikeasti tunnettavissa, vyötärö vaikeasti nähtävissä, vatsa tasainen. Pienet muutokset toimivat: mittaa ruoka, laske herkut, lisää kymmenen minuuttia kävelyä.",
      },
      {
        title: "Melko sopiva",
        body: "Kylkiluut helposti tunnettavissa, näkyvä vyötärö, vatsa supistunut. Jatka niin kuin olet tehnyt.",
      },
      {
        title: "Hieman laiha",
        body: "Kylkiluut, selkäranka tai lantio erottuvat, vähän peitettä. Vaatii eläinlääkärin tarkastusta pelkän lisäruoan sijaan – selittämätön painon lasku ansaitsee tarkastelun.",
      },
    ],
    whenToAskVet:
      "Eläinlääkärisi voi auttaa sinua tarkistamaan kehon kunnon asianmukaisesti ja voi keskustella suunnitelmasta, jos painoa on pudotettavana. Äkilliset tai selittämättömät painon muutokset ansaitsevat aina keskustelun.",
    sources: [vetOrgs.wsava, vetOrgs.aaha],
  },

  /* -------------------------------------------------------- Wellbeing */
  {
    id: "wellbeing",
    title: "Hyvä päivä koiralle",
    promise: "Kävely, pieni leikki, ruokaa, paljon unta ja aikaa kanssasi merkitsee paljon.",
    category: "wellbeing",
    intro: [
      "Hyvä elämä koiralle ei tarvitse olla monimutkaista tai kallista. Suurin osa siitä on rutiinia, seuraa ja riittävästi lepoa.",
      "Jos muutat vain yhden asian, se on yleensä uni. Monet 'käyttäytymisongelmat' ovat väsyneitä koiria, jotka eivät koskaan saa mahdollisuutta todella rauhoittua.",
    ],
    sections: [
      {
        title: "Uni",
        body: "Koirat nukkuvat paljon enemmän kuin useimmat ihmiset odottavat. Pennut tarvitsevat usein 18–20 tuntia päivässä, aikuiset noin 12–14 tuntia ja vanhemmat koirat yleensä enemmän.",
        points: ["Rauhallinen paikka poissa etuovelta ja talon vilinästä", "Päiväunet ovat normaaleja, eivät laiskuutta", "Jatkuva stimulaatio on uuvuttavaa koiralle, ei rikastuttavaa"],
      },
      {
        title: "Nuuskiminen ja ajattelu",
        body: "Kymmenen minuuttia kunnollista nuuskimista voi rauhoittaa koiraa enemmän kuin tunti juoksemista. Anna kävelyiden olla joskus hitaita.",
        points: ["Ripottele illallinen ruohoon", "Piilota herkkuja huoneeseen ja anna niiden etsiä", "Ruokapeli tai rullattu pyyhe, jossa on nappuloita", "Uusia, rauhallisia paikkoja tutkittavaksi"],
      },
      {
        title: "Seura",
        body: "Koirat ovat sosiaalisia. Useimmat kamppailevat pitkien yksinolo-jaksojen kanssa, ja yksin oleminen on taito, joka on opetettava vähitellen sen sijaan, että oletetaan sen olevan itsestäänselvyys.",
      },
      {
        title: "Ennakoitavat päivät",
        body: "Suunnilleen säännölliset kävelyt, ateriat ja nukkumaanmenoajat tekevät elämästä helpommin luettavaa. Sen ei tarvitse olla minuutilleen.",
      },
      {
        title: "Rauhallinen aika",
        body: "Aika, jolloin heiltä ei pyydetä mitään – ei koulutusta, ei vieraita, ei pelejä. Jokainen koira tarvitsee sitä päivän aikana.",
      },
    ],
    ageNotes: {
      puppy: "Pennut väsyvät nopeasti ja se näyttää tuhmuudelta – pureminen, villiintyminen, kaiken huomiotta jättäminen. Enemmän unta yleensä korjaa sen.",
      adolescent: "Teini-ikäiset koirat tarvitsevat todellisia purkautumiskanavia: nuuskimista, pureskelua, koulutusta, leikkiä. Tylsyys ilmenee tavaroidesi pureskeluna sen sijaan.",
      senior: "Lyhyemmät, useammin toistuvat kävelyt, pehmeämmät pedit ja lempeät aivopelit sopivat vanhemmille koirille paremmin kuin pitkät retket.",
    },
    sources: [vetOrgs.rspca],
  },

  /* --------------------------------------------------- Everyday check */
  {
    id: "everyday-check",
    title: "Tunne koirasi normaali",
    promise: "Huomaat muutoksen kauan ennen kuin kukaan muu. Se on todella arvokasta.",
    category: "health",
    intro: [
      "Sinun ei tarvitse tutkia koiraasi. Sinun tarvitsee vain karkea käsitys sen normaalista – kuinka paljon se syö, juo, liikkuu ja nukkuu.",
      "Kun jokin muuttuu, kyky sanoa 'tämä alkoi tiistaina' auttaa eläinlääkäriäsi valtavasti.",
    ],
    sections: [
      {
        title: "Ruokahalu",
        body: "Useimmat koirat syövät melko ennakoitavasti. Yhden aterian väliin jättäminen tapahtuu; ruoasta kieltäytyminen päivän tai pidempään vaatii huomiota.",
      },
      {
        title: "Juominen",
        body: "Selkeä juomisen lisääntyminen tai väheneminen on yksi hyödyllisimmistä varhaisista merkeistä. Jos olet epävarma, mittaa, kuinka paljon menee kulhoon parin päivän ajan.",
      },
      {
        title: "Energia",
        body: "Hidastuminen ei ole vain ikää. Haluttomuus portaita ylös, jäykkyys levon jälkeen tai vähentynyt kiinnostus kävelyihin on usein epämukavuutta.",
      },
      {
        title: "WC-tottumukset",
        body: "Huomioi muutokset tiheydessä, ponnistelussa tai löysissä ulosteissa, jotka kestävät yli päivän. Ei miellyttävä aihe, mutta hyödyllinen.",
      },
      {
        title: "Paino ja turkki",
        body: "Kuukausittainen paino, kuukausittainen käsin tehtävä tarkastus. Turkin laatu muuttuu usein ennen kuin mikään muu.",
      },
      {
        title: "Käyttäytyminen",
        body: "Piiloutuminen, takertuminen, ärtyisyys tai levottomuus yöllä voivat kaikki olla merkkejä kivusta mielialan sijaan.",
      },
    ],
    whenToAskVet:
      "Yksi pieni muutos yhtenä päivänä ei yleensä ole mitään. Muutos, joka kestää yli päivän tai kaksi, tai useita muutoksia kerralla, on puhelun arvoinen.",
    sources: [vetOrgs.aaha],
  },

  /* -------------------------------------------- Something seems different */
  {
    id: "something-different",
    title: "Jokin tuntuu erilaiselta?",
    promise: "Rauhallinen paikka selvittää, onko tämä odota ja katso -tilanne vai soitto eläinlääkärille.",
    category: "health",
    intro: [
      "Tämä on yleistä tietoa, ei diagnoosi. Jotkut muutokset ovat vaarattomia ja jotkut eivät, ja ero ei usein ole ilmeinen ulkopuolelta.",
      "Jos olet huolissasi, tai muutos tapahtui äkillisesti tai voimakkaasti, ota yhteyttä eläinlääkäriisi. Huoli itsessään on riittävä syy soittaa.",
    ],
    sections: [
      {
        title: "Ei ruokaa",
        body: "Yksi väliin jäänyt ateria muuten pirteällä koiralla on yleistä. Soita eläinlääkärillesi, jos se kestää yli noin 24 tuntia, jos pentu jättää aterioita väliin, tai jos siihen liittyy oksentelua, apaattisuutta tai turvonnut vatsa.",
      },
      {
        title: "Juominen paljon enemmän tai vähemmän",
        body: "Selkeä muutos, joka kestää yli pari päivää, on syytä tutkia sen sijaan, että vain katsottaisiin. Kirjaa ylös karkeasti kuinka paljon.",
      },
      {
        title: "Oksentelu",
        body: "Yksi oksennus, sitten takaisin normaaliksi, usein rauhoittuu. Soita, jos se toistuu, jos he eivät pysty pitämään vettä sisällään, jos on verta, jos he yrittävät oksentaa tuottamatta mitään, tai jos he ovat saattaneet niellä jotain.",
      },
      {
        title: "Ripuli",
        body: "Lievä ja lyhytkestoinen on yleistä. Soita, jos se kestää yli päivän tai kaksi, sisältää verta, tai siihen liittyy oksentelua, kipua tai litteä, väsynyt koira – ja nopeammin pennuilla ja vanhemmilla koirilla, jotka kuivuvat nopeasti.",
      },
      {
        title: "Yskä",
        body: "Satunnainen yskä taluttimen vetämisen jälkeen on eri asia kuin jatkuva yskä. Jatkuva yskä, yskä yöllä tai mikä tahansa hengitysvaikeus vaatii eläinlääkäriä.",
      },
      {
        title: "Kutina",
        body: "Jatkuva raapiminen, nuoleminen tai pureminen on epämukavaa ja sillä on yleensä syy, joka kannattaa löytää – loiset, ihoinfektio tai allergia. Se harvoin paranee pelkällä shampoolla.",
      },
      {
        title: "Ontuminen",
        body: "Lievää ontumista, joka rauhoittuu päivän sisällä levon avulla, voidaan seurata. Ei-painoa kantava ontuminen, ilmeinen kipu, turvotus tai kestävä ontuminen tulisi tarkastaa.",
      },
      {
        title: "Epätavallinen väsymys",
        body: "Rauhallinen päivä sattuu. Koira, joka ei halua nousta, on epävakaa tai on paljon litteämpi kuin tavallisesti, tulisi nähdä nopeasti.",
      },
    ],
    whenToAskVet:
      "Eläinlääkärisi mieluummin kuulee sinusta ajoissa kuin myöhään. Sen kuvaileminen, mikä muuttui, milloin se alkoi ja mikä on erilaista kuin normaalisti, on juuri sitä, mitä he tarvitsevat.",
    sources: [vetOrgs.bva, vetOrgs.aaha],
  },

  /* ---------------------------------------------------------- Emergency */
  {
    id: "emergency",
    title: "Kun ei voi odottaa",
    promise: "Lyhyt lista asioista, jotka vaativat eläinlääkärin välitöntä soittoa, mihin tahansa kellonaikaan.",
    category: "health",
    intro: [
      "Pidä eläinlääkärisi numero ja lähin päivystävä klinikka jossain, mistä löydät ne ajattelematta. Tallenna ne puhelimeesi nyt.",
      "Näissä tilanteissa soita ensin ja mene paikalle. Älä odota, miten asiat kehittyvät, äläkä yritä kotikonsteja.",
    ],
    sections: [
      {
        title: "Soita eläinlääkärille välittömästi",
        body: "Mikä tahansa näistä vaatii kiireellistä ammattilaisapua, päivällä tai yöllä.",
        points: [
          "Hengitysvaikeudet, tukehtuminen tai siniset tai hyvin kalpeat ikenet",
          "Romahdus, tajuttomuus tai äkillinen heikkous",
          "Verenvuoto, joka ei lopu",
          "Epäilty myrkytys tai jotain sopimatonta syönyt",
          "Kohtaus tai toistuvat kohtaukset",
          "Auton alle jääminen, putoaminen tai mikä tahansa vakava vamma",
          "Ponnistelu virtsatessa ilman tulosta",
          "Turvonnut, kova vatsa, oksentelua ja ei oksennusta",
          "Lämpöhalvauksen merkit: voimakas läähätys, ahdistus, romahdus kuumassa",
          "Äkillinen kova kipu tai koira, joka ei rauhoitu lainkaan",
        ],
      },
      {
        title: "Epäilty myrkytys",
        body: "Soita eläinlääkärillesi tai eläinmyrkytyslinjalle välittömästi ja kerro mitä, kuinka paljon ja milloin. Ota pakkaus mukaasi. Älä yritä saada koiraasi oksentamaan, ellei eläinlääkäri niin käske – joidenkin aineiden kanssa se aiheuttaa enemmän haittaa.",
      },
      {
        title: "Matkalla",
        body: "Pidä koirasi rauhallisena, lämpimänä ja paikallaan. Aja varovasti. Soita etukäteen, jotta klinikka on valmis sinua varten.",
      },
    ],
    whenToAskVet:
      "Jos luet tätä ja mietit, kuuluuko se tähän, soita. Kukaan eläinlääkäriasemalla ei pahastu puhelusta, joka osoittautuu turhaksi.",
    sources: [vetOrgs.bva, vetOrgs.rspca],
  },
];
