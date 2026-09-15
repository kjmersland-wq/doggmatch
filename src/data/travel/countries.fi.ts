import type { Country } from "./countries";

const euBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrosiru",
    detail:
      "Koiralla on oltava ISO-standardien mukainen mikrosiru, joka on asennettu ennen rabiesrokotusta. Jos siru asennetaan myöhemmin, rokotus on uusittava.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Voimassa oleva rabiesrokote",
    detail:
      "Rokote on annettu mikrosirun jälkeen, valtuutetun eläinlääkärin toimesta, ja sen on oltava voimassa matkapäivänä. Ensimmäisellä rokotuksella on odotusaika ennen matkustamista; tehosteet, jotka annetaan ennen edellisen vanhenemista, lasketaan yleensä jatkuviksi.",
  },
  {
    id: "passport",
    level: "required" as const,
    title: "EU-lemmikkieläinpassi",
    detail:
      "EU- tai ETA-maan valtuutetun eläinlääkärin myöntämä. Kotimainen rokotuskortti ei ole sama asiakirja eikä sitä hyväksytä sen sijaan.",
  },
  {
    id: "owner",
    level: "required" as const,
    title: "Matkustaminen omistajan kanssa",
    detail:
      "Ei-kaupallinen siirto kattaa enintään viisi eläintä, jotka matkustavat omistajansa tai valtuutetun henkilön kanssa. Sitä suurempi määrä tai myyntitarkoituksessa tapahtuva matkustus kuuluu kaupallisten sääntöjen piiriin.",
  },
];

const euNonEuBase = [
  {
    id: "microchip",
    level: "required" as const,
    title: "Mikrosiru",
    detail: "ISO-standardin mukainen mikrosiru, asennettu ennen rabiesrokotusta.",
  },
  {
    id: "rabies",
    level: "required" as const,
    title: "Voimassa oleva rabiesrokote",
    detail: "Annettu mikrosirun jälkeen ja voimassa matkapäivänä, ensimmäisen rokotuksen jälkeen on odotusaika.",
  },
  {
    id: "certificate",
    level: "required" as const,
    title: "Eläinten terveystodistus",
    detail:
      "Matkustaminen EU:n ulkopuolisesta maasta vaatii yleensä virallisen eläinlääkärin myöntämän eläinten terveystodistuksen EU-lemmikkieläinpassin sijaan. Vaatimukset vaihtelevat maasta riippuen, josta olet lähdössä.",
  },
  {
    id: "titration",
    level: "required" as const,
    title: "Rabiesvasta-ainetesti – vain joihinkin maihin",
    detail:
      "Tietyistä listaamattomista maista saapuvat koirat tarvitsevat rabiesvasta-ainetitraustestin, jonka on tehnyt valtuutettu laboratorio, ja näytteen ja matkan välillä on odotusaika. Sen soveltuvuus riippuu tarkasta lähtömaasta – tarkista virallisesta lähteestä ennen minkään varaamista.",
  },
  {
    id: "entry-point",
    level: "required" as const,
    title: "Määrätty saapumispaikka",
    detail:
      "EU:n ulkopuolelta saapuvien on yleensä saavuttava määrätyn saapumispaikan kautta, jossa asiakirjoja voidaan tarkastaa.",
  },
];

const tapeworm = {
  id: "tapeworm",
  level: "required" as const,
  title: "Heisimatolääkitys",
  detail:
    "Hoito Echinococcus multilocularis -loista vastaan, eläinlääkärin antama ja passiin tai todistukseen merkitty, tietyn ajan sisällä ennen saapumista. Tämä koskee koiria, jotka saapuvat pieneen määrään maita, jotka ovat vapaita loista. ",
};

const source = (
  name: string,
  url: string,
  country: string,
  lastChecked: string,
  category = "Lemmikkieläinten matkustus",
) => ({ name, url, country, lastChecked, category });

export const countries: Country[] = [
  {
    code: "NO",
    name: "Norja",
    eu: true,
    sources: [
      source("Mattilsynet — Norjan elintarviketurvallisuusviranomainen", "https://www.mattilsynet.no/en/animals/travelling-with-pets", "Norway", "2026-08-15"),
    ],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine:
          "Ei rutiininomaista karanteenia koirille, jotka täyttävät kaikki maahantulovaatimukset. Jos asiakirjoja tai hoitoja puuttuu saavuttaessa, viranomaiset voivat asettaa koiran virallisen valvonnan alle – mikä ei ole sama asia kuin tavallinen karanteeniaika.",
        minimumAge:
          "Koira ei voi matkustaa ennen kuin rabiesrokote on voimassa, mikä käytännössä sulkee pois hyvin nuoret pennut. Tarkista ajankohtainen vähimmäisikä ja odotusaika Mattilsynetiltä ennen matkan suunnittelua.",
        notes: [
          "Norja on yksi maista, joissa vaaditaan heisimatolääkitys. Ajoitusikkuna on tiukka, joten varaa eläinlääkäriaika ennen lautan varaamista.",
        ],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine:
          "Ei rutiininomaista karanteenia vaatimukset täyttävälle matkustukselle. Vaatimukset täyttämättömät saapujat voidaan kieltää maahanpääsystä tai asettaa virallisen valvonnan alle.",
        minimumAge: "Riippuu lähtömaan rabiesrokotussäännöistä.",
      },
    },
  },
  {
    code: "SE",
    name: "Ruotsi",
    eu: true,
    sources: [source("Jordbruksverket — Ruotsin maatalousvirasto", "https://jordbruksverket.se/languages/english/travelling-with-pets", "Sweden", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ei rutiininomaista karanteenia koirille, jotka täyttävät maahantulovaatimukset.",
        minimumAge: "Matkustaminen ei ole mahdollista ennen kuin rabiesrokote on voimassa. Tarkista ajankohtainen ikä ja odotusaika.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ei rutiininomaista karanteenia vaatimukset täyttävälle matkustukselle; vaatimukset täyttämättömät saapujat käsitellään rajalla.",
        minimumAge: "Määräytyy lähtömaan rabiesmääräysten mukaan.",
      },
    },
  },
  {
    code: "DK",
    name: "Tanska",
    eu: true,
    sources: [source("Fødevarestyrelsen — Tanskan eläinlääkintä- ja elintarvikevirasto", "https://www.foedevarestyrelsen.dk/english", "Denmark", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ei rutiininomaista karanteenia koirille, jotka täyttävät maahantulovaatimukset.",
        minimumAge: "Ei mahdollista ennen kuin rabiesrokote on voimassa.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ei rutiininomaista karanteenia vaatimukset täyttävälle matkustukselle.",
        minimumAge: "Määräytyy lähtömaan rabiesmääräysten mukaan.",
      },
    },
  },
  {
    code: "DE",
    name: "Saksa",
    eu: true,
    sources: [source("Bundesministerium für Ernährung und Landwirtschaft", "https://www.bmel.de/EN/topics/animals/animal-health/travelling-with-pets.html", "Germany", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ei rutiininomaista karanteenia koirille, jotka täyttävät maahantulovaatimukset.",
        minimumAge: "Ei mahdollista ennen kuin rabiesrokote on voimassa.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ei rutiininomaista karanteenia vaatimukset täyttävälle matkustukselle.",
        minimumAge: "Määräytyy lähtömaan rabiesmääräysten mukaan.",
      },
    },
  },
  {
    code: "PL",
    name: "Puola",
    eu: true,
    sources: [source("Główny Inspektorat Weterynarii — Yleinen eläinlääkintävirasto", "https://www.wetgiw.gov.pl/handel-eksport-import/przemieszczanie-w-celach-niehandlowych", "Poland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ei rutiininomaista karanteenia koirille, jotka täyttävät maahantulovaatimukset.",
        minimumAge: "Ei mahdollista ennen kuin rabiesrokote on voimassa.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ei rutiininomaista karanteenia vaatimukset täyttävälle matkustukselle.",
        minimumAge: "Määräytyy lähtömaan rabiesmääräysten mukaan.",
      },
    },
  },
  {
    code: "FR",
    name: "Ranska",
    eu: true,
    sources: [source("Ministère de l'Agriculture", "https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie", "France", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ei rutiininomaista karanteenia koirille, jotka täyttävät maahantulovaatimukset.",
        minimumAge: "Ei mahdollista ennen kuin rabiesrokote on voimassa.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ei rutiininomaista karanteenia vaatimukset täyttävälle matkustukselle.",
        minimumAge: "Määräytyy lähtömaan rabiesmääräysten mukaan.",
      },
    },
  },
  {
    code: "ES",
    name: "Espanja",
    eu: true,
    sources: [source("Ministerio de Agricultura, Pesca y Alimentación", "https://www.mapa.gob.es/es/ganaderia/temas/comercio-exterior-ganadero/animales-compania/", "Spain", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ei rutiininomaista karanteenia koirille, jotka täyttävät maahantulovaatimukset.",
        minimumAge: "Ei mahdollista ennen kuin rabiesrokote on voimassa.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ei rutiininomaista karanteenia vaatimukset täyttävälle matkustukselle.",
        minimumAge: "Määräytyy lähtömaan rabiesmääräysten mukaan.",
      },
    },
  },
  {
    code: "NL",
    name: "Alankomaat",
    eu: true,
    sources: [source("NVWA — Alankomaiden elintarvike- ja kuluttajaturvallisuusviranomainen", "https://english.nvwa.nl/topics/travelling-with-pets", "Netherlands", "2026-08-15")],
    entry: {
      fromEu: {
        rules: euBase,
        quarantine: "Ei rutiininomaista karanteenia koirille, jotka täyttävät maahantulovaatimukset.",
        minimumAge: "Ei mahdollista ennen kuin rabiesrokote on voimassa.",
      },
      fromNonEu: {
        rules: euNonEuBase,
        quarantine: "Ei rutiininomaista karanteenia vaatimukset täyttävälle matkustukselle.",
        minimumAge: "Määräytyy lähtömaan rabiesmääräysten mukaan.",
      },
    },
  },
  {
    code: "IE",
    name: "Irlanti",
    eu: true,
    sources: [source("Department of Agriculture, Food and the Marine", "https://www.gov.ie/en/organisation/department-of-agriculture-food-and-the-marine/", "Ireland", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [...euBase, tapeworm],
        quarantine: "Ei rutiininomaista karanteenia koirille, jotka täyttävät maahantulovaatimukset.",
        minimumAge: "Ei mahdollista ennen kuin rabiesrokote on voimassa.",
        notes: ["Irlanti on yksi maista, jotka vaativat heisimatolääkityksen ennen saapumista, tietyn aikarajan sisällä."],
      },
      fromNonEu: {
        rules: [...euNonEuBase, tapeworm],
        quarantine: "Ei rutiininomaista karanteenia vaatimukset täyttävälle matkustukselle.",
        minimumAge: "Määräytyy lähtömaan rabiesmääräysten mukaan.",
      },
    },
  },
  {
    code: "GB",
    name: "Iso-Britannia",
    eu: false,
    sources: [source("GOV.UK — Koiran tuominen Iso-Britanniaan", "https://www.gov.uk/bring-pet-to-great-britain", "United Kingdom", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          {
            id: "microchip",
            level: "required" as const,
            title: "Mikrosiru",
            detail: "ISO-standardin mukainen mikrosiru, asennettu ennen rabiesrokotusta.",
          },
          {
            id: "rabies",
            level: "required" as const,
            title: "Voimassa oleva rabiesrokote",
            detail: "Annettu mikrosirun jälkeen ja voimassa matkapäivänä, ensimmäisen rokotuksen jälkeen on odotusaika.",
          },
          {
            id: "document",
            level: "required" as const,
            title: "Hyväksytty matkustusasiakirja",
            detail:
              "EU-lemmikkieläinpassi, joka on myönnetty EU-maassa, tai Iso-Britannian lemmikkieläinten terveystodistus. Kumpi soveltuu, riippuu siitä, missä asiakirja on myönnetty – tarkista virallisista ohjeista tilanteeseesi.",
          },
          tapeworm,
          {
            id: "route",
            level: "required" as const,
            title: "Hyväksytty reitti ja kuljetusyritys",
            detail: "Koirien on matkustettava hyväksytyn kuljetusyrityksen kanssa hyväksyttyä reittiä pitkin, ellei matkusta Irlannista.",
          },
        ],
        quarantine:
          "Ei rutiininomaista karanteenia koirille, jotka täyttävät kaikki vaatimukset. Koirat, jotka saapuvat ilman voimassa olevia asiakirjoja, voidaan lisätä karanteeniin omistajan kustannuksella – todellinen mahdollisuus, ei muodollisuus.",
        minimumAge: "Matkustaminen ei ole mahdollista ennen kuin rabiesrokote on voimassa. Tarkista ajankohtainen ikä ja odotusaika GOV.UK:sta.",
      },
    },
  },
  {
    code: "US",
    name: "Yhdysvallat",
    eu: false,
    sources: [source("CDC — Koiran tuominen Yhdysvaltoihin", "https://www.cdc.gov/importation/dogs/", "United States", "2026-08-15")],
    entry: {
      fromEu: {
        rules: [
          { id: "microchip", level: "required" as const, title: "Mikrosiru", detail: "ISO-standardin mukainen mikrosiru, merkitty toimittamiisi lomakkeisiin." },
          { id: "age", level: "required" as const, title: "Vähimmäisikä", detail: "CDC soveltaa vähimmäisikää Yhdysvaltoihin saapuville koirille. Tarkista ajankohtainen luku ennen varaamista." },
          { id: "form", level: "required" as const, title: "CDC-maahantuontilomake", detail: "Verkossa oleva CDC Dog Import Form on pakollinen, toimitettava ennen matkaa, ja kuitti on pidettävä mukana." },
          { id: "rabies", level: "required" as const, title: "Rabiesdokumentaatio", detail: "Vaatimukset riippuvat siitä, missä koira on ollut edellisten kuuden kuukauden aikana. CDC:n sivu käy läpi jokaisen tapauksen." },
        ],
        quarantine:
          "Ei rutiininomaista karanteenia vaatimukset täyttäville koirille. Oikeilla asiakirjoilla saapuvat koirat voidaan kieltää maahantulosta ja palauttaa omistajan kustannuksella.",
        minimumAge: "Vähimmäisikä on voimassa. Tarkista CDC:n sivulta ajankohtainen sääntö.",
      },
    },
  },
];

export const transportModes = [
  { id: "car", label: "Auto", note: "Sinä hallitset vauhtia ja taukoja. Tarkista lautta- tai tunnelisäännöt, jos reitti ylittää vettä." },
  { id: "train", label: "Juna", note: "Operaattorin säännöt pätevät maan vaatimusten lisäksi, ja ne vaihtelevat linjoittain." },
  { id: "plane", label: "Lentokone", note: "Lentoyhtiön säännöt ovat erillisiä maahantulovaatimuksista. Varaa koira ajoissa." },
  { id: "ferry", label: "Lautta", note: "Koiratarhojen, hyttien ja kansien säännöt vaihtelevat yrityksittäin ja ylityksittäin." },
  { id: "bus", label: "Bussi", note: "Monet kaukoliikenteen operaattorit eivät ota koiria lainkaan. Varmista ennen varaamista." },
];

export const travelTimeline = [
  { when: "8 viikkoa ennen", what: "Tarkista tarkat reittisi säännöt, molempiin suuntiin." },
  { when: "6 viikkoa ennen", what: "Tarkista mikrosiru ja rabiesrokote tilanne eläinlääkärisi kanssa." },
  { when: "4 viikkoa ennen", what: "Hanki asiakirjat alulle – jotkut vievät enemmän aikaa kuin luuletkaan." },
  { when: "2 viikkoa ennen", what: "Vahvista kuljetusyrityksen omat säännöt ja varaa koira kyytiin." },
  { when: "1 viikko ennen", what: "Pakkaa matkapakkaus ja etsi eläinlääkäri määränpäästäsi." },
  { when: "Päivää ennen", what: "Viimeinen asiakirjatarkistus ja pitkä lenkki." },
  { when: "Matkapäivä", what: "Asiakirjat, koira, vesi, talutin ja jotain tuttua." },
];
