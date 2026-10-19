import type { Locale } from "@/i18n";

/**
 * The words behind the "getting ready for this breed" notes, in every language.
 * `prepCards` picks which sentence applies from the breed's traits; this file
 * only holds the sentences, so each language reads as its own page rather than
 * an English page with a translated frame.
 */

type Five = readonly [string, string, string, string, string];
type Three = readonly [string, string, string];

export interface PrepCopy {
  /** The name of the My Dog feature in this language. */
  myDog: string;
  titles: {
    activity: string;
    training: string;
    food: string;
    grooming: string;
    shedding: string;
    dental: string;
    weight: string;
    mental: string;
    home: string;
    alone: string;
    social: string;
    health: string;
  };
  activity: Five;
  activityBody: string;
  training: Five;
  trainingBodyQuick: string;
  trainingBodyIndependent: string;
  food: Five;
  foodBody: string;
  grooming: Five;
  groomingBodyHigh: string;
  groomingBodyLow: string;
  shedding: Five;
  sheddingBody: string;
  dentalSmall: string;
  dentalLarge: string;
  dentalBodySmall: string;
  dentalBodyLarge: string;
  weightEasy: string;
  weightWatch: string;
  weightBody: string;
  mental: Five;
  mentalBodyHigh: string;
  mentalBodyLow: string;
  /** Flat-friendly, flat-possible, wants-more-space. */
  home: Three;
  homeBody: string;
  alone: Five;
  aloneBody: string;
  social: Five;
  socialBody: string;
  /** Uses {a} and {b} for the lifespan range. */
  healthHead: string;
  healthBody: string;
}

export const prepCopy: Record<Locale, PrepCopy> = {
  en: {
    myDog: "My Dog",
    titles: {
      activity: "Activity",
      training: "Training",
      food: "Food",
      grooming: "Grooming",
      shedding: "Shedding",
      dental: "Dental",
      weight: "Weight",
      mental: "Mental stimulation",
      home: "Home",
      alone: "Time alone",
      social: "Social life",
      health: "Health to read up on",
    },
    activity: [
      "Short, gentle walks",
      "Around an hour a day",
      "An hour or so, most days",
      "One to two hours, every day",
      "Two hours or more, every day",
    ],
    activityBody:
      "Many dogs of this type settle far better in the house when the walking is regular rather than occasional. Build any distance up slowly, especially with a young or older dog.",
    training: [
      "Patience will be needed",
      "Takes a little persistence",
      "Learns steadily",
      "Learns quickly",
      "Learns very quickly",
    ],
    trainingBodyQuick:
      "Quick learners pick up the habits you didn't mean to teach just as fast. Short, kind, reward-based sessions from day one.",
    trainingBodyIndependent:
      "Independent thinkers aren't being difficult — they simply need a better reason. Keep sessions short and worth their while.",
    food: [
      "A small daily amount",
      "A modest daily amount",
      "A moderate daily amount",
      "A substantial daily amount",
      "A large daily amount",
    ],
    foodBody:
      "Weigh meals rather than guessing, and count treats as food. {myDog} can work out a starting portion once you know their weight.",
    grooming: [
      "Very little upkeep",
      "An occasional brush",
      "A regular brush",
      "Frequent brushing",
      "Brushing plus professional grooming",
    ],
    groomingBodyHigh:
      "Coats like this mat if they're left. Getting a puppy used to being handled early makes the next fifteen years far easier.",
    groomingBodyLow:
      "Easy-going coats still need nails, ears and teeth looking after — that part is the same for every dog.",
    shedding: [
      "Sheds very little",
      "Sheds lightly",
      "Sheds moderately",
      "Sheds a good deal",
      "Sheds heavily, all year",
    ],
    sheddingBody:
      "Lower-shedding breeds are sometimes easier for people with allergies, but no dog is completely allergy-free and reactions vary from person to person.",
    dentalSmall: "Worth extra attention",
    dentalLarge: "Part of the weekly routine",
    dentalBodySmall:
      "Smaller mouths tend to have more crowded teeth, and dental problems are common in middle age. Daily brushing is the cheapest care there is.",
    dentalBodyLarge:
      "Brushing a few times a week, started early, saves a great deal of money and discomfort later on.",
    weightEasy: "Easy to overfeed",
    weightWatch: "Keep an eye as they mature",
    weightBody:
      "You should be able to feel the ribs easily without pressing. Weight creeps on slowly — a monthly note in {myDog} catches it early.",
    mental: [
      "Content with quiet days",
      "A little variety is plenty",
      "Needs something to do",
      "Needs a job most days",
      "Needs real work to be content",
    ],
    mentalBodyHigh:
      "Boredom in this kind of dog usually shows up as noise, chewing or invented jobs. Scentwork, training and puzzles cost you ten minutes and buy hours of calm.",
    mentalBodyLow:
      "A sniffy walk, a chew and a bit of training is usually enough to keep this kind of dog settled.",
    home: [
      "Usually fine in a flat",
      "A flat can work with good walks",
      "Happier with more space and daily outdoor time",
    ],
    homeBody:
      "What matters most is the walking near your door and the hours you keep, not the number of rooms.",
    alone: [
      "Finds being alone hard",
      "Prefers company most of the day",
      "Manages a few hours",
      "Copes well with a normal working morning",
      "Fairly independent",
    ],
    aloneBody:
      "There's no single maximum that fits every dog. Age, training and temperament all change the answer — and being alone is a skill you teach gradually.",
    social: [
      "Reserved with strangers",
      "Takes a while to warm up",
      "Friendly once introduced",
      "Sociable with most people",
      "Delighted by everyone",
    ],
    socialBody:
      "Early, calm, positive introductions to people, dogs, traffic and handling shape this more than the breed does.",
    healthHead: "Typically lives {a}–{b} years",
    healthBody:
      "Every breed has conditions that appear more often than average. Ask a breeder which tests they do and why, or ask a rescue what's known. Your vet is the right person for anything specific.",
  },
  no: {
    myDog: "Min hund",
    titles: {
      activity: "Aktivitet",
      training: "Trening",
      food: "Fôr",
      grooming: "Stell",
      shedding: "Hårfelling",
      dental: "Tenner",
      weight: "Vekt",
      mental: "Mental stimulering",
      home: "Hjem",
      alone: "Tid alene",
      social: "Sosialt liv",
      health: "Helse å sette seg inn i",
    },
    activity: [
      "Korte, rolige turer",
      "Rundt en time om dagen",
      "En time eller så, de fleste dager",
      "En til to timer, hver dag",
      "To timer eller mer, hver dag",
    ],
    activityBody:
      "Mange hunder av denne typen er mye roligere inne når turene er regelmessige og ikke tilfeldige. Øk distansen sakte, særlig med en ung eller eldre hund.",
    training: [
      "Det trengs tålmodighet",
      "Krever litt utholdenhet",
      "Lærer jevnt og trutt",
      "Lærer raskt",
      "Lærer veldig raskt",
    ],
    trainingBodyQuick:
      "Raske elever plukker opp vanene du ikke mente å lære bort, like fort. Korte, snille, belønningsbaserte økter fra første dag.",
    trainingBodyIndependent:
      "Selvstendige hunder er ikke vanskelige — de trenger bare en bedre grunn. Hold øktene korte og verdt innsatsen.",
    food: [
      "En liten mengde om dagen",
      "En beskjeden mengde om dagen",
      "En moderat mengde om dagen",
      "En betydelig mengde om dagen",
      "En stor mengde om dagen",
    ],
    foodBody:
      "Vei måltidene i stedet for å gjette, og regn godbiter som mat. {myDog} kan regne ut en startporsjon når du vet vekten.",
    grooming: [
      "Svært lite vedlikehold",
      "En og annen børsting",
      "Regelmessig børsting",
      "Hyppig børsting",
      "Børsting pluss profesjonell trimming",
    ],
    groomingBodyHigh:
      "Pels som denne floker seg hvis den blir forsømt. Å venne en valp til å bli håndtert tidlig gjør de neste femten årene mye enklere.",
    groomingBodyLow:
      "Enkel pels trenger likevel at klør, ører og tenner blir tatt vare på — det er likt for alle hunder.",
    shedding: [
      "Feller svært lite",
      "Feller litt",
      "Feller middels",
      "Feller en god del",
      "Feller mye, hele året",
    ],
    sheddingBody:
      "Raser som feller lite er noen ganger lettere for allergikere, men ingen hund er helt allergifri, og reaksjoner varierer fra person til person.",
    dentalSmall: "Verdt ekstra oppmerksomhet",
    dentalLarge: "En del av ukerutinen",
    dentalBodySmall:
      "Små munner har gjerne trangere tenner, og tannproblemer er vanlige i middelalderen. Daglig tannpuss er den billigste omsorgen som finnes.",
    dentalBodyLarge:
      "Å pusse tennene noen ganger i uka, startet tidlig, sparer mye penger og ubehag senere.",
    weightEasy: "Lett å overfôre",
    weightWatch: "Hold øye med vekten når de blir eldre",
    weightBody:
      "Du skal lett kunne kjenne ribbeina uten å trykke. Vekten sniker seg opp langsomt — et månedlig notat i {myDog} fanger det tidlig.",
    mental: [
      "Fornøyd med rolige dager",
      "Litt variasjon er nok",
      "Trenger noe å gjøre",
      "Trenger en jobb de fleste dager",
      "Trenger ekte arbeid for å være fornøyd",
    ],
    mentalBodyHigh:
      "Kjedsomhet hos denne typen hund viser seg ofte som bjeffing, tygging eller selvfunne oppgaver. Sporarbeid, trening og aktivitetsleker koster deg ti minutter og gir timer med ro.",
    mentalBodyLow:
      "En snuseetur, et tyggeben og litt trening er som regel nok til å holde denne typen hund rolig.",
    home: [
      "Som regel greit i leilighet",
      "Leilighet kan fungere med gode turer",
      "Triveligere med mer plass og daglig tid utendørs",
    ],
    homeBody:
      "Det som betyr mest er turene i nærheten av døra og timene du er borte, ikke antall rom.",
    alone: [
      "Synes det er vanskelig å være alene",
      "Foretrekker selskap det meste av dagen",
      "Klarer noen timer",
      "Takler en vanlig arbeidsformiddag godt",
      "Ganske selvstendig",
    ],
    aloneBody:
      "Det finnes ikke ett maksimum som passer alle hunder. Alder, trening og temperament endrer svaret — og å være alene er en ferdighet du lærer bort gradvis.",
    social: [
      "Reservert overfor fremmede",
      "Bruker tid på å bli varm i trøya",
      "Vennlig når den er blitt presentert",
      "Omgjengelig med de fleste",
      "Henrykt over alle",
    ],
    socialBody:
      "Tidlige, rolige og positive møter med mennesker, hunder, trafikk og håndtering former dette mer enn rasen gjør.",
    healthHead: "Lever vanligvis {a}–{b} år",
    healthBody:
      "Hver rase har tilstander som oppstår oftere enn gjennomsnittet. Spør en oppdretter hvilke tester de tar og hvorfor, eller spør en omplasseringsorganisasjon hva som er kjent. Veterinæren din er den rette personen for alt spesifikt.",
  },
  pl: {
    myDog: "Mój pies",
    titles: {
      activity: "Aktywność",
      training: "Szkolenie",
      food: "Jedzenie",
      grooming: "Pielęgnacja",
      shedding: "Linienie",
      dental: "Zęby",
      weight: "Waga",
      mental: "Stymulacja umysłowa",
      home: "Dom",
      alone: "Czas w samotności",
      social: "Życie towarzyskie",
      health: "Zdrowie — warto poczytać",
    },
    activity: [
      "Krótkie, spokojne spacery",
      "Około godziny dziennie",
      "Godzina lub nieco więcej, przez większość dni",
      "Od jednej do dwóch godzin, codziennie",
      "Dwie godziny lub więcej, codziennie",
    ],
    activityBody:
      "Wiele psów tego typu zachowuje się w domu znacznie spokojniej, gdy spacery są regularne, a nie okazjonalne. Wydłużaj dystans stopniowo, zwłaszcza u młodego lub starszego psa.",
    training: [
      "Potrzeba cierpliwości",
      "Wymaga odrobiny wytrwałości",
      "Uczy się stabilnie",
      "Uczy się szybko",
      "Uczy się bardzo szybko",
    ],
    trainingBodyQuick:
      "Szybko uczące się psy równie szybko łapią nawyki, których wcale nie chciałeś uczyć. Krótkie, życzliwe sesje oparte na nagrodach od pierwszego dnia.",
    trainingBodyIndependent:
      "Samodzielnie myślące psy nie są uparte — po prostu potrzebują lepszego powodu. Trzymaj sesje krótkie i warte ich wysiłku.",
    food: [
      "Mała dzienna porcja",
      "Skromna dzienna porcja",
      "Umiarkowana dzienna porcja",
      "Spora dzienna porcja",
      "Duża dzienna porcja",
    ],
    foodBody:
      "Odważaj posiłki zamiast zgadywać i wliczaj przysmaki do jedzenia. {myDog} wyliczy porcję startową, gdy będziesz znać wagę psa.",
    grooming: [
      "Bardzo mało pielęgnacji",
      "Okazjonalne szczotkowanie",
      "Regularne szczotkowanie",
      "Częste szczotkowanie",
      "Szczotkowanie i profesjonalna pielęgnacja",
    ],
    groomingBodyHigh:
      "Taka sierść się filcuje, jeśli się jej nie pielęgnuje. Wczesne oswojenie szczeniaka z dotykiem bardzo ułatwi kolejne piętnaście lat.",
    groomingBodyLow:
      "Łatwa sierść też wymaga dbania o pazury, uszy i zęby — to jest takie samo u każdego psa.",
    shedding: [
      "Linieje bardzo mało",
      "Linieje lekko",
      "Linieje umiarkowanie",
      "Linieje sporo",
      "Linieje mocno, przez cały rok",
    ],
    sheddingBody:
      "Rasy, które mało linieją, bywają łatwiejsze dla alergików, ale żaden pies nie jest całkowicie bezalergiczny, a reakcje różnią się u każdego człowieka.",
    dentalSmall: "Warto poświęcić więcej uwagi",
    dentalLarge: "Część cotygodniowej rutyny",
    dentalBodySmall:
      "Mniejsze pyski mają zwykle ciaśniej ustawione zęby, a problemy dentystyczne są częste w średnim wieku. Codzienne szczotkowanie to najtańsza opieka, jaka istnieje.",
    dentalBodyLarge:
      "Szczotkowanie kilka razy w tygodniu, zaczęte wcześnie, oszczędza później mnóstwo pieniędzy i dyskomfortu.",
    weightEasy: "Łatwo przekarmić",
    weightWatch: "Obserwuj wagę, gdy pies dojrzewa",
    weightBody:
      "Powinieneś łatwo wyczuć żebra bez naciskania. Waga rośnie powoli — miesięczna notatka w aplikacji {myDog} wychwyci to wcześnie.",
    mental: [
      "Zadowolony ze spokojnych dni",
      "Odrobina różnorodności wystarczy",
      "Potrzebuje czegoś do roboty",
      "Potrzebuje zadania przez większość dni",
      "Potrzebuje prawdziwej pracy, by być zadowolonym",
    ],
    mentalBodyHigh:
      "Nuda u takiego psa zwykle objawia się hałasem, gryzieniem lub wymyślaniem sobie zajęć. Węszenie, szkolenie i zabawki logiczne kosztują dziesięć minut, a dają godziny spokoju.",
    mentalBodyLow:
      "Spacer z węszeniem, gryzak i trochę szkolenia zwykle wystarczą, by taki pies był spokojny.",
    home: [
      "Zwykle dobrze w mieszkaniu",
      "Mieszkanie może się sprawdzić przy dobrych spacerach",
      "Szczęśliwszy z większą przestrzenią i codziennym czasem na dworze",
    ],
    homeBody:
      "Najważniejsze są spacery w pobliżu Twojego domu i godziny, które spędzasz poza nim, a nie liczba pokoi.",
    alone: [
      "Trudno znosi samotność",
      "Woli towarzystwo przez większość dnia",
      "Radzi sobie przez kilka godzin",
      "Dobrze znosi zwykły poranek pracy",
      "Dość niezależny",
    ],
    aloneBody:
      "Nie ma jednego maksimum, które pasuje każdemu psu. Wiek, szkolenie i temperament zmieniają odpowiedź — a bycie samemu to umiejętność, której uczy się stopniowo.",
    social: [
      "Powściągliwy wobec obcych",
      "Potrzebuje czasu, by się oswoić",
      "Przyjazny po przedstawieniu",
      "Towarzyski wobec większości ludzi",
      "Zachwycony każdym",
    ],
    socialBody:
      "Wczesne, spokojne i pozytywne poznawanie ludzi, psów, ruchu ulicznego i dotyku kształtuje to bardziej niż sama rasa.",
    healthHead: "Zwykle żyje {a}–{b} lat",
    healthBody:
      "Każda rasa ma schorzenia, które występują częściej niż przeciętnie. Zapytaj hodowcę, jakie badania robi i dlaczego, albo schronisko, co jest wiadome. W kwestiach szczegółowych właściwą osobą jest Twój weterynarz.",
  },
  dk: {
    myDog: "Min hund",
    titles: {
      activity: "Aktivitet",
      training: "Træning",
      food: "Foder",
      grooming: "Pleje",
      shedding: "Hårskift",
      dental: "Tænder",
      weight: "Vægt",
      mental: "Mental stimulering",
      home: "Hjem",
      alone: "Tid alene",
      social: "Socialt liv",
      health: "Sundhed at sætte sig ind i",
    },
    activity: [
      "Korte, rolige ture",
      "Omkring en time om dagen",
      "En time eller så, de fleste dage",
      "En til to timer, hver dag",
      "To timer eller mere, hver dag",
    ],
    activityBody:
      "Mange hunde af denne type falder meget bedre til ro indenfor, når turene er regelmæssige frem for tilfældige. Byg distancen langsomt op, især med en ung eller ældre hund.",
    training: [
      "Der skal bruges tålmodighed",
      "Kræver lidt vedholdenhed",
      "Lærer støt og roligt",
      "Lærer hurtigt",
      "Lærer meget hurtigt",
    ],
    trainingBodyQuick:
      "Hurtige elever opsnapper de vaner, du ikke mente at lære dem, lige så hurtigt. Korte, venlige, belønningsbaserede sessioner fra første dag.",
    trainingBodyIndependent:
      "Selvstændige hunde er ikke besværlige — de har bare brug for en bedre grund. Hold sessionerne korte og værd at bruge tid på.",
    food: [
      "En lille mængde om dagen",
      "En beskeden mængde om dagen",
      "En moderat mængde om dagen",
      "En betydelig mængde om dagen",
      "En stor mængde om dagen",
    ],
    foodBody:
      "Vej måltiderne i stedet for at gætte, og regn godbidder med som mad. {myDog} kan regne en startportion ud, når du kender vægten.",
    grooming: [
      "Meget lidt vedligeholdelse",
      "En gang imellem en børstning",
      "Regelmæssig børstning",
      "Hyppig børstning",
      "Børstning plus professionel trimning",
    ],
    groomingBodyHigh:
      "Pels som denne filtrer, hvis den forsømmes. At vænne en hvalp til at blive håndteret tidligt gør de næste femten år meget lettere.",
    groomingBodyLow:
      "Nem pels kræver stadig, at kløer, ører og tænder bliver passet — det er ens for alle hunde.",
    shedding: [
      "Fælder meget lidt",
      "Fælder lidt",
      "Fælder moderat",
      "Fælder en hel del",
      "Fælder meget, hele året",
    ],
    sheddingBody:
      "Racer, der fælder lidt, er nogle gange lettere for allergikere, men ingen hund er helt allergifri, og reaktioner varierer fra person til person.",
    dentalSmall: "Værd at give ekstra opmærksomhed",
    dentalLarge: "En del af ugens rutine",
    dentalBodySmall:
      "Små munde har ofte mere trange tænder, og tandproblemer er almindelige i middelalderen. Daglig tandbørstning er den billigste pleje, der findes.",
    dentalBodyLarge:
      "At børste tænder et par gange om ugen, startet tidligt, sparer mange penge og ubehag senere.",
    weightEasy: "Let at overfodre",
    weightWatch: "Hold øje med vægten, når de bliver ældre",
    weightBody:
      "Du skal let kunne mærke ribbenene uden at trykke. Vægten sniger sig langsomt på — en månedlig note i {myDog} fanger det tidligt.",
    mental: [
      "Tilfreds med rolige dage",
      "Lidt variation er rigeligt",
      "Har brug for noget at lave",
      "Har brug for et job de fleste dage",
      "Har brug for rigtigt arbejde for at være tilfreds",
    ],
    mentalBodyHigh:
      "Kedsomhed hos denne type hund viser sig ofte som støj, tyggen eller selvopfundne opgaver. Næsearbejde, træning og aktiveringslegetøj koster ti minutter og giver timers ro.",
    mentalBodyLow:
      "En snuseetur, et tyggeben og lidt træning er som regel nok til at holde denne type hund rolig.",
    home: [
      "Som regel fint i lejlighed",
      "En lejlighed kan fungere med gode ture",
      "Gladere med mere plads og daglig tid udenfor",
    ],
    homeBody:
      "Det, der betyder mest, er turene tæt på din dør og de timer, du er væk, ikke antallet af værelser.",
    alone: [
      "Har svært ved at være alene",
      "Foretrækker selskab det meste af dagen",
      "Klarer et par timer",
      "Håndterer en almindelig arbejdsformiddag godt",
      "Ret selvstændig",
    ],
    aloneBody:
      "Der findes ikke ét maksimum, der passer til alle hunde. Alder, træning og temperament ændrer svaret — og at være alene er en færdighed, man lærer gradvist.",
    social: [
      "Reserveret over for fremmede",
      "Bruger tid på at blive varm i trøjen",
      "Venlig, når den er blevet præsenteret",
      "Social over for de fleste",
      "Henrykt over alle",
    ],
    socialBody:
      "Tidlige, rolige og positive møder med mennesker, hunde, trafik og håndtering former dette mere end racen gør.",
    healthHead: "Lever typisk {a}–{b} år",
    healthBody:
      "Hver race har tilstande, der opstår oftere end gennemsnittet. Spørg en opdrætter, hvilke tests de laver og hvorfor, eller spørg et internat, hvad der er kendt. Din dyrlæge er den rette til alt specifikt.",
  },
  se: {
    myDog: "Min hund",
    titles: {
      activity: "Aktivitet",
      training: "Träning",
      food: "Mat",
      grooming: "Pälsvård",
      shedding: "Fällning",
      dental: "Tänder",
      weight: "Vikt",
      mental: "Mental stimulans",
      home: "Hem",
      alone: "Tid ensam",
      social: "Socialt liv",
      health: "Hälsa att läsa på om",
    },
    activity: [
      "Korta, lugna promenader",
      "Ungefär en timme om dagen",
      "En timme eller så, de flesta dagar",
      "En till två timmar, varje dag",
      "Två timmar eller mer, varje dag",
    ],
    activityBody:
      "Många hundar av den här typen blir mycket lugnare inomhus när promenaderna är regelbundna snarare än sporadiska. Öka sträckan långsamt, särskilt med en ung eller äldre hund.",
    training: [
      "Det krävs tålamod",
      "Kräver lite uthållighet",
      "Lär sig stadigt",
      "Lär sig snabbt",
      "Lär sig mycket snabbt",
    ],
    trainingBodyQuick:
      "Snabba elever plockar upp vanorna du inte menade att lära ut lika fort. Korta, snälla, belöningsbaserade pass från första dagen.",
    trainingBodyIndependent:
      "Självständiga hundar är inte besvärliga — de behöver bara en bättre anledning. Håll passen korta och värda besväret.",
    food: [
      "En liten mängd om dagen",
      "En blygsam mängd om dagen",
      "En måttlig mängd om dagen",
      "En betydande mängd om dagen",
      "En stor mängd om dagen",
    ],
    foodBody:
      "Väg måltiderna i stället för att gissa, och räkna godsaker som mat. {myDog} kan räkna ut en startportion när du vet vikten.",
    grooming: [
      "Mycket lite underhåll",
      "Då och då en borstning",
      "Regelbunden borstning",
      "Frekvent borstning",
      "Borstning plus professionell trimning",
    ],
    groomingBodyHigh:
      "Päls som denna tovar sig om den lämnas. Att vänja en valp vid att bli hanterad tidigt gör de kommande femton åren mycket enklare.",
    groomingBodyLow:
      "Lättskött päls kräver ändå att klor, öron och tänder tas om hand — det är lika för alla hundar.",
    shedding: [
      "Fäller mycket lite",
      "Fäller lite",
      "Fäller måttligt",
      "Fäller en hel del",
      "Fäller mycket, hela året",
    ],
    sheddingBody:
      "Raser som fäller lite är ibland lättare för allergiker, men ingen hund är helt allergifri, och reaktioner varierar från person till person.",
    dentalSmall: "Värt extra uppmärksamhet",
    dentalLarge: "En del av veckorutinen",
    dentalBodySmall:
      "Små munnar har ofta trängre tänder, och tandproblem är vanliga i medelåldern. Daglig tandborstning är den billigaste omsorgen som finns.",
    dentalBodyLarge:
      "Att borsta tänderna några gånger i veckan, påbörjat tidigt, sparar mycket pengar och obehag senare.",
    weightEasy: "Lätt att övermata",
    weightWatch: "Håll koll på vikten när de mognar",
    weightBody:
      "Du ska lätt kunna känna revbenen utan att trycka. Vikten smyger sig på långsamt — en månatlig anteckning i {myDog} fångar det tidigt.",
    mental: [
      "Nöjd med lugna dagar",
      "Lite omväxling räcker gott",
      "Behöver något att göra",
      "Behöver ett jobb de flesta dagar",
      "Behöver riktigt arbete för att vara nöjd",
    ],
    mentalBodyHigh:
      "Uttråkning hos den här typen av hund visar sig ofta som oväsen, tuggande eller självpåtagna uppgifter. Nosarbete, träning och aktiveringsleksaker kostar tio minuter och ger timmar av lugn.",
    mentalBodyLow:
      "En snusig promenad, ett tuggben och lite träning räcker oftast för att hålla den här typen av hund lugn.",
    home: [
      "Oftast bra i lägenhet",
      "Lägenhet kan fungera med bra promenader",
      "Gladare med mer utrymme och daglig tid utomhus",
    ],
    homeBody:
      "Det som betyder mest är promenaderna nära dörren och de timmar du är borta, inte antalet rum.",
    alone: [
      "Har svårt att vara ensam",
      "Föredrar sällskap större delen av dagen",
      "Klarar några timmar",
      "Hanterar en vanlig arbetsförmiddag bra",
      "Ganska självständig",
    ],
    aloneBody:
      "Det finns inget enskilt maximum som passar alla hundar. Ålder, träning och temperament ändrar svaret — och att vara ensam är en färdighet man lär ut gradvis.",
    social: [
      "Reserverad inför främlingar",
      "Behöver tid för att tina upp",
      "Vänlig när den blivit presenterad",
      "Sällskaplig med de flesta",
      "Förtjust i alla",
    ],
    socialBody:
      "Tidiga, lugna och positiva möten med människor, hundar, trafik och hantering formar detta mer än rasen gör.",
    healthHead: "Lever vanligtvis {a}–{b} år",
    healthBody:
      "Varje ras har tillstånd som uppstår oftare än genomsnittet. Fråga en uppfödare vilka tester de gör och varför, eller fråga en hundorganisation vad som är känt. Din veterinär är rätt person för allt specifikt.",
  },
  fi: {
    myDog: "Oma koira",
    titles: {
      activity: "Liikunta",
      training: "Koulutus",
      food: "Ruoka",
      grooming: "Turkinhoito",
      shedding: "Karvanlähtö",
      dental: "Hampaat",
      weight: "Paino",
      mental: "Henkinen virike",
      home: "Koti",
      alone: "Yksinolo",
      social: "Sosiaalinen elämä",
      health: "Terveys, josta kannattaa lukea",
    },
    activity: [
      "Lyhyitä, rauhallisia lenkkejä",
      "Noin tunti päivässä",
      "Tunti tai pari, useimpina päivinä",
      "Yhdestä kahteen tuntiin, joka päivä",
      "Kaksi tuntia tai enemmän, joka päivä",
    ],
    activityBody:
      "Monet tämän tyyppiset koirat rauhoittuvat sisällä paljon paremmin, kun lenkit ovat säännöllisiä eivätkä satunnaisia. Pidennä matkaa vähitellen, erityisesti nuoren tai vanhan koiran kanssa.",
    training: [
      "Tarvitaan kärsivällisyyttä",
      "Vaatii vähän sinnikkyyttä",
      "Oppii tasaisesti",
      "Oppii nopeasti",
      "Oppii erittäin nopeasti",
    ],
    trainingBodyQuick:
      "Nopeat oppijat omaksuvat yhtä nopeasti myös tavat, joita et tarkoittanut opettaa. Lyhyitä, ystävällisiä, palkkiopohjaisia harjoituksia ensimmäisestä päivästä.",
    trainingBodyIndependent:
      "Itsenäiset koirat eivät ole hankalia — ne tarvitsevat vain paremman syyn. Pidä harjoitukset lyhyinä ja vaivan arvoisina.",
    food: [
      "Pieni päiväannos",
      "Vaatimaton päiväannos",
      "Kohtuullinen päiväannos",
      "Melkoinen päiväannos",
      "Suuri päiväannos",
    ],
    foodBody:
      "Punnitse ateriat arvaamisen sijaan ja laske herkut ruoaksi. {myDog} voi laskea aloitusannoksen, kun tiedät koiran painon.",
    grooming: [
      "Hyvin vähän hoitoa",
      "Satunnainen harjaus",
      "Säännöllinen harjaus",
      "Tiheä harjaus",
      "Harjaus ja ammattitrimmaus",
    ],
    groomingBodyHigh:
      "Tällainen turkki takkuuntuu, jos sitä ei hoideta. Pennun totuttaminen käsittelyyn varhain tekee seuraavista viidestätoista vuodesta paljon helpompia.",
    groomingBodyLow:
      "Helppohoitoinenkin turkki tarvitsee kynsien, korvien ja hampaiden hoitoa — se on kaikilla koirilla samaa.",
    shedding: [
      "Karvoja lähtee hyvin vähän",
      "Karvoja lähtee vähän",
      "Karvoja lähtee kohtalaisesti",
      "Karvoja lähtee melko paljon",
      "Karvoja lähtee runsaasti, ympäri vuoden",
    ],
    sheddingBody:
      "Vähän karvaa lähtevät rodut ovat joskus helpompia allergisille, mutta mikään koira ei ole täysin allergiaton ja reaktiot vaihtelevat ihmisestä toiseen.",
    dentalSmall: "Kannattaa kiinnittää erityistä huomiota",
    dentalLarge: "Osa viikoittaista rutiinia",
    dentalBodySmall:
      "Pienemmissä suissa hampaat ovat usein ahtaammassa, ja hammasongelmat ovat yleisiä keski-iässä. Päivittäinen harjaus on edullisinta hoivaa, mitä on.",
    dentalBodyLarge:
      "Hampaiden harjaus muutaman kerran viikossa, aloitettuna varhain, säästää paljon rahaa ja vaivaa myöhemmin.",
    weightEasy: "Helppo ylisyöttää",
    weightWatch: "Seuraa painoa, kun koira kypsyy",
    weightBody:
      "Kylkiluut pitäisi tuntea helposti painamatta. Paino nousee hitaasti — kuukausittainen merkintä sovelluksessa {myDog} huomaa sen ajoissa.",
    mental: [
      "Tyytyväinen rauhallisiin päiviin",
      "Pieni vaihtelu riittää",
      "Tarvitsee tekemistä",
      "Tarvitsee tehtävän useimpina päivinä",
      "Tarvitsee oikeaa työtä ollakseen tyytyväinen",
    ],
    mentalBodyHigh:
      "Tämän tyyppisen koiran tylsistyminen näkyy yleensä äänekkyytenä, pureskeluna tai keksittyinä tehtävinä. Hajutyöskentely, koulutus ja älypelit vievät kymmenen minuuttia ja tuovat tuntien rauhan.",
    mentalBodyLow:
      "Nuuskiva lenkki, purtava ja vähän koulutusta riittävät yleensä pitämään tämän tyyppisen koiran tyytyväisenä.",
    home: [
      "Yleensä sopii hyvin kerrostaloon",
      "Kerrostalo voi toimia hyvien lenkkien kanssa",
      "Viihtyy paremmin, kun on enemmän tilaa ja päivittäistä ulkoilua",
    ],
    homeBody:
      "Eniten merkitsee lenkkimaasto oven lähellä ja poissaoloaikasi, ei huoneiden määrä.",
    alone: [
      "Yksinolo on vaikeaa",
      "Haluaa seuraa suurimman osan päivästä",
      "Pärjää muutaman tunnin",
      "Selviää hyvin tavallisesta työaamusta",
      "Melko itsenäinen",
    ],
    aloneBody:
      "Ei ole yhtä enimmäisaikaa, joka sopisi jokaiselle koiralle. Ikä, koulutus ja luonne muuttavat vastausta — ja yksinolo on taito, jota opetetaan vähitellen.",
    social: [
      "Pidättyväinen vieraita kohtaan",
      "Lämpenee hitaasti",
      "Ystävällinen esittelyn jälkeen",
      "Seurallinen useimpien kanssa",
      "Iloitsee kaikista",
    ],
    socialBody:
      "Varhaiset, rauhalliset ja myönteiset tutustumiset ihmisiin, koiriin, liikenteeseen ja käsittelyyn muovaavat tätä enemmän kuin rotu.",
    healthHead: "Elää tyypillisesti {a}–{b} vuotta",
    healthBody:
      "Jokaisella rodulla on sairauksia, joita esiintyy keskimääräistä useammin. Kysy kasvattajalta, mitä tutkimuksia hän teettää ja miksi, tai kysy hoitolasta, mitä tiedetään. Eläinlääkäri on oikea henkilö kaikkeen yksityiskohtaiseen.",
  },
  de: {
    myDog: "Mein Hund",
    titles: {
      activity: "Bewegung",
      training: "Training",
      food: "Futter",
      grooming: "Fellpflege",
      shedding: "Haaren",
      dental: "Zähne",
      weight: "Gewicht",
      mental: "Geistige Auslastung",
      home: "Zuhause",
      alone: "Alleinsein",
      social: "Sozialleben",
      health: "Gesundheit zum Nachlesen",
    },
    activity: [
      "Kurze, sanfte Spaziergänge",
      "Etwa eine Stunde am Tag",
      "Eine Stunde oder so, an den meisten Tagen",
      "Ein bis zwei Stunden, jeden Tag",
      "Zwei Stunden oder mehr, jeden Tag",
    ],
    activityBody:
      "Viele Hunde dieses Typs sind im Haus deutlich ruhiger, wenn die Spaziergänge regelmäßig statt gelegentlich stattfinden. Steigere die Strecke langsam, besonders bei einem jungen oder älteren Hund.",
    training: [
      "Es braucht Geduld",
      "Braucht etwas Ausdauer",
      "Lernt stetig",
      "Lernt schnell",
      "Lernt sehr schnell",
    ],
    trainingBodyQuick:
      "Schnelle Lerner schnappen auch die Gewohnheiten auf, die du ihnen gar nicht beibringen wolltest — genauso schnell. Kurze, freundliche, belohnungsbasierte Einheiten ab dem ersten Tag.",
    trainingBodyIndependent:
      "Eigenständige Denker sind nicht schwierig — sie brauchen nur einen besseren Grund. Halte die Einheiten kurz und lohnend.",
    food: [
      "Eine kleine Tagesmenge",
      "Eine bescheidene Tagesmenge",
      "Eine mittlere Tagesmenge",
      "Eine beträchtliche Tagesmenge",
      "Eine große Tagesmenge",
    ],
    foodBody:
      "Wiege die Mahlzeiten ab, statt zu schätzen, und rechne Leckerlis als Futter. {myDog} kann eine Startportion berechnen, sobald du das Gewicht kennst.",
    grooming: [
      "Sehr wenig Pflege",
      "Gelegentliches Bürsten",
      "Regelmäßiges Bürsten",
      "Häufiges Bürsten",
      "Bürsten plus professionelle Pflege",
    ],
    groomingBodyHigh:
      "Ein solches Fell verfilzt, wenn man es vernachlässigt. Einen Welpen früh ans Anfassen zu gewöhnen, macht die nächsten fünfzehn Jahre viel leichter.",
    groomingBodyLow:
      "Auch pflegeleichtes Fell braucht Aufmerksamkeit für Krallen, Ohren und Zähne — das ist bei jedem Hund gleich.",
    shedding: [
      "Haart sehr wenig",
      "Haart leicht",
      "Haart mäßig",
      "Haart ziemlich stark",
      "Haart stark, das ganze Jahr",
    ],
    sheddingBody:
      "Wenig haarende Rassen sind für Allergiker manchmal leichter, aber kein Hund ist völlig allergiefrei, und die Reaktionen sind von Mensch zu Mensch verschieden.",
    dentalSmall: "Verdient besondere Aufmerksamkeit",
    dentalLarge: "Teil der Wochenroutine",
    dentalBodySmall:
      "Kleinere Mäuler haben oft engere Zähne, und Zahnprobleme sind im mittleren Alter häufig. Tägliches Zähneputzen ist die günstigste Pflege, die es gibt.",
    dentalBodyLarge:
      "Mehrmals pro Woche Zähneputzen, früh begonnen, spart später viel Geld und Beschwerden.",
    weightEasy: "Leicht zu überfüttern",
    weightWatch: "Behalte das Gewicht im Blick, wenn er älter wird",
    weightBody:
      "Du solltest die Rippen ohne Druck leicht fühlen können. Das Gewicht schleicht sich langsam hoch — eine monatliche Notiz in {myDog} fängt es früh ab.",
    mental: [
      "Zufrieden mit ruhigen Tagen",
      "Ein wenig Abwechslung genügt",
      "Braucht etwas zu tun",
      "Braucht an den meisten Tagen eine Aufgabe",
      "Braucht echte Arbeit, um zufrieden zu sein",
    ],
    mentalBodyHigh:
      "Langeweile zeigt sich bei dieser Art Hund meist als Lärm, Kauen oder selbst erfundene Aufgaben. Nasenarbeit, Training und Denkspiele kosten dich zehn Minuten und schenken dir Stunden der Ruhe.",
    mentalBodyLow:
      "Ein Schnüffelspaziergang, ein Kauknochen und etwas Training reichen meist, damit dieser Hundetyp ausgeglichen bleibt.",
    home: [
      "Meist gut in der Wohnung",
      "Eine Wohnung kann mit guten Spaziergängen funktionieren",
      "Glücklicher mit mehr Platz und täglicher Zeit im Freien",
    ],
    homeBody:
      "Am wichtigsten sind die Spaziergänge in der Nähe deiner Tür und die Zeiten, die du außer Haus bist — nicht die Zahl der Zimmer.",
    alone: [
      "Findet Alleinsein schwer",
      "Bevorzugt die meiste Zeit des Tages Gesellschaft",
      "Schafft ein paar Stunden",
      "Kommt mit einem normalen Arbeitsvormittag gut zurecht",
      "Ziemlich unabhängig",
    ],
    aloneBody:
      "Es gibt kein einzelnes Maximum, das für jeden Hund passt. Alter, Training und Temperament verändern die Antwort — und Alleinsein ist eine Fähigkeit, die man schrittweise beibringt.",
    social: [
      "Zurückhaltend gegenüber Fremden",
      "Braucht eine Weile, um warm zu werden",
      "Freundlich, sobald man sich kennt",
      "Gesellig mit den meisten Menschen",
      "Begeistert von allen",
    ],
    socialBody:
      "Frühe, ruhige, positive Begegnungen mit Menschen, Hunden, Verkehr und Anfassen prägen das mehr als die Rasse.",
    healthHead: "Lebt typischerweise {a}–{b} Jahre",
    healthBody:
      "Jede Rasse hat Erkrankungen, die häufiger auftreten als im Durchschnitt. Frag Züchter, welche Tests sie machen und warum, oder frag ein Tierheim, was bekannt ist. Bei allem Konkreten ist deine Tierärztin oder dein Tierarzt die richtige Ansprechperson.",
  },
  fr: {
    myDog: "Mon chien",
    titles: {
      activity: "Activité",
      training: "Éducation",
      food: "Alimentation",
      grooming: "Toilettage",
      shedding: "Perte de poils",
      dental: "Dents",
      weight: "Poids",
      mental: "Stimulation mentale",
      home: "Logement",
      alone: "Temps seul",
      social: "Vie sociale",
      health: "Santé à connaître",
    },
    activity: [
      "Des promenades courtes et douces",
      "Environ une heure par jour",
      "Une heure environ, la plupart des jours",
      "Une à deux heures, chaque jour",
      "Deux heures ou plus, chaque jour",
    ],
    activityBody:
      "Beaucoup de chiens de ce type sont bien plus calmes à la maison quand les promenades sont régulières plutôt qu'occasionnelles. Augmentez la distance progressivement, surtout avec un chien jeune ou âgé.",
    training: [
      "Il faudra de la patience",
      "Demande un peu de persévérance",
      "Apprend régulièrement",
      "Apprend vite",
      "Apprend très vite",
    ],
    trainingBodyQuick:
      "Les élèves rapides adoptent tout aussi vite les habitudes que vous ne vouliez pas leur apprendre. Des séances courtes, bienveillantes et basées sur la récompense dès le premier jour.",
    trainingBodyIndependent:
      "Les chiens indépendants ne sont pas difficiles — ils ont simplement besoin d'une meilleure raison. Gardez des séances courtes et qui en valent la peine.",
    food: [
      "Une petite quantité par jour",
      "Une quantité modeste par jour",
      "Une quantité modérée par jour",
      "Une quantité importante par jour",
      "Une grande quantité par jour",
    ],
    foodBody:
      "Pesez les repas plutôt que de deviner, et comptez les friandises comme de la nourriture. {myDog} peut calculer une ration de départ dès que vous connaissez son poids.",
    grooming: [
      "Très peu d'entretien",
      "Un brossage de temps en temps",
      "Un brossage régulier",
      "Des brossages fréquents",
      "Brossage plus toilettage professionnel",
    ],
    groomingBodyHigh:
      "Un poil comme celui-ci s'emmêle s'il est négligé. Habituer un chiot à être manipulé tôt rend les quinze années suivantes bien plus faciles.",
    groomingBodyLow:
      "Un poil facile demande tout de même de s'occuper des griffes, des oreilles et des dents — c'est la même chose pour tous les chiens.",
    shedding: [
      "Perd très peu de poils",
      "Perd légèrement ses poils",
      "Perd modérément ses poils",
      "Perd pas mal de poils",
      "Perd beaucoup de poils, toute l'année",
    ],
    sheddingBody:
      "Les races qui perdent peu de poils sont parfois plus faciles pour les personnes allergiques, mais aucun chien n'est totalement sans allergènes et les réactions varient d'une personne à l'autre.",
    dentalSmall: "Mérite une attention particulière",
    dentalLarge: "Fait partie de la routine hebdomadaire",
    dentalBodySmall:
      "Les petites gueules ont souvent des dents plus serrées, et les problèmes dentaires sont courants à l'âge mûr. Un brossage quotidien est le soin le moins cher qui soit.",
    dentalBodyLarge:
      "Brosser les dents plusieurs fois par semaine, dès le plus jeune âge, évite beaucoup de frais et d'inconfort plus tard.",
    weightEasy: "Facile à suralimenter",
    weightWatch: "Surveillez son poids en vieillissant",
    weightBody:
      "Vous devriez sentir facilement les côtes sans appuyer. Le poids augmente lentement — une note mensuelle dans {myDog} le repère tôt.",
    mental: [
      "Content avec des journées calmes",
      "Un peu de variété suffit",
      "A besoin d'occupations",
      "A besoin d'un travail la plupart des jours",
      "A besoin d'un vrai travail pour être heureux",
    ],
    mentalBodyHigh:
      "L'ennui chez ce type de chien se manifeste souvent par du bruit, de la mastication ou des occupations inventées. Le travail olfactif, l'éducation et les jeux d'intelligence vous coûtent dix minutes et offrent des heures de calme.",
    mentalBodyLow:
      "Une promenade à renifler, un os à ronger et un peu d'éducation suffisent généralement à garder ce type de chien serein.",
    home: [
      "Généralement bien en appartement",
      "Un appartement peut convenir avec de bonnes promenades",
      "Plus heureux avec plus d'espace et du temps dehors chaque jour",
    ],
    homeBody:
      "Ce qui compte le plus, ce sont les promenades près de chez vous et les heures où vous êtes absent, pas le nombre de pièces.",
    alone: [
      "Supporte mal la solitude",
      "Préfère la compagnie la plupart de la journée",
      "Se débrouille quelques heures",
      "Gère bien une matinée de travail ordinaire",
      "Assez indépendant",
    ],
    aloneBody:
      "Il n'existe pas de maximum unique valable pour tous les chiens. L'âge, l'éducation et le tempérament changent la réponse — et rester seul est une compétence qui s'apprend progressivement.",
    social: [
      "Réservé avec les inconnus",
      "Met du temps à se réchauffer",
      "Amical une fois présenté",
      "Sociable avec la plupart des gens",
      "Ravi de rencontrer tout le monde",
    ],
    socialBody:
      "Des rencontres précoces, calmes et positives avec des personnes, des chiens, la circulation et les manipulations façonnent cela plus que la race.",
    healthHead: "Vit généralement de {a} à {b} ans",
    healthBody:
      "Chaque race a des affections qui apparaissent plus souvent que la moyenne. Demandez à un éleveur quels tests il fait et pourquoi, ou à un refuge ce que l'on sait. Votre vétérinaire est la bonne personne pour tout ce qui est précis.",
  },
  nl: {
    myDog: "Mijn hond",
    titles: {
      activity: "Beweging",
      training: "Training",
      food: "Voeding",
      grooming: "Vachtverzorging",
      shedding: "Haaruitval",
      dental: "Gebit",
      weight: "Gewicht",
      mental: "Mentale prikkels",
      home: "Thuis",
      alone: "Alleen zijn",
      social: "Sociaal leven",
      health: "Gezondheid om over te lezen",
    },
    activity: [
      "Korte, rustige wandelingen",
      "Ongeveer een uur per dag",
      "Een uur of zo, op de meeste dagen",
      "Een tot twee uur, elke dag",
      "Twee uur of meer, elke dag",
    ],
    activityBody:
      "Veel honden van dit type zijn in huis een stuk rustiger als de wandelingen regelmatig zijn in plaats van af en toe. Bouw de afstand langzaam op, vooral bij een jonge of oudere hond.",
    training: [
      "Er is geduld nodig",
      "Vraagt wat doorzettingsvermogen",
      "Leert gestaag",
      "Leert snel",
      "Leert heel snel",
    ],
    trainingBodyQuick:
      "Snelle leerlingen pikken de gewoonten die je niet wilde aanleren net zo snel op. Korte, vriendelijke sessies op basis van beloning, vanaf dag één.",
    trainingBodyIndependent:
      "Zelfstandige denkers zijn niet lastig — ze hebben gewoon een betere reden nodig. Houd sessies kort en de moeite waard.",
    food: [
      "Een kleine dagelijkse hoeveelheid",
      "Een bescheiden dagelijkse hoeveelheid",
      "Een matige dagelijkse hoeveelheid",
      "Een flinke dagelijkse hoeveelheid",
      "Een grote dagelijkse hoeveelheid",
    ],
    foodBody:
      "Weeg maaltijden af in plaats van te gokken en reken snoepjes als voeding. {myDog} kan een startportie uitrekenen zodra je het gewicht weet.",
    grooming: [
      "Heel weinig onderhoud",
      "Af en toe borstelen",
      "Regelmatig borstelen",
      "Vaak borstelen",
      "Borstelen plus professionele trimbeurten",
    ],
    groomingBodyHigh:
      "Een vacht als deze klit als je hem verwaarloost. Een pup vroeg laten wennen aan aanraking maakt de komende vijftien jaar veel makkelijker.",
    groomingBodyLow:
      "Een makkelijke vacht vraagt toch aandacht voor nagels, oren en tanden — dat geldt voor elke hond.",
    shedding: [
      "Verhaart heel weinig",
      "Verhaart licht",
      "Verhaart matig",
      "Verhaart behoorlijk",
      "Verhaart sterk, het hele jaar",
    ],
    sheddingBody:
      "Rassen die weinig verharen zijn soms makkelijker voor mensen met allergieën, maar geen enkele hond is helemaal allergievrij en reacties verschillen per persoon.",
    dentalSmall: "Verdient extra aandacht",
    dentalLarge: "Onderdeel van de weekroutine",
    dentalBodySmall:
      "Kleinere bekken hebben vaak krappere tanden, en gebitsproblemen komen op middelbare leeftijd vaak voor. Dagelijks poetsen is de goedkoopste zorg die er is.",
    dentalBodyLarge:
      "Een paar keer per week tanden poetsen, vroeg begonnen, bespaart later veel geld en ongemak.",
    weightEasy: "Snel te veel gevoerd",
    weightWatch: "Houd het gewicht in de gaten als hij ouder wordt",
    weightBody:
      "Je moet de ribben makkelijk kunnen voelen zonder te drukken. Gewicht kruipt langzaam omhoog — een maandelijkse notitie in {myDog} vangt het vroeg op.",
    mental: [
      "Tevreden met rustige dagen",
      "Een beetje afwisseling is genoeg",
      "Heeft iets te doen nodig",
      "Heeft de meeste dagen een taak nodig",
      "Heeft echt werk nodig om tevreden te zijn",
    ],
    mentalBodyHigh:
      "Verveling bij dit soort hond uit zich meestal in lawaai, kauwen of zelfverzonnen klusjes. Speurwerk, training en breinspelletjes kosten je tien minuten en leveren uren rust op.",
    mentalBodyLow:
      "Een snuffelwandeling, een kauwbot en wat training zijn meestal genoeg om dit soort hond rustig te houden.",
    home: [
      "Meestal prima in een flat",
      "Een flat kan werken met goede wandelingen",
      "Gelukkiger met meer ruimte en dagelijks tijd buiten",
    ],
    homeBody:
      "Wat het meest telt, is het wandelen bij jou in de buurt en de uren dat je weg bent, niet het aantal kamers.",
    alone: [
      "Vindt alleen zijn moeilijk",
      "Houdt het grootste deel van de dag van gezelschap",
      "Redt een paar uur",
      "Redt een gewone werkochtend goed",
      "Vrij zelfstandig",
    ],
    aloneBody:
      "Er is geen enkel maximum dat bij elke hond past. Leeftijd, training en temperament veranderen het antwoord — en alleen zijn is een vaardigheid die je geleidelijk aanleert.",
    social: [
      "Terughoudend bij vreemden",
      "Heeft even tijd nodig om op te warmen",
      "Vriendelijk zodra hij is voorgesteld",
      "Sociaal met de meeste mensen",
      "Dolblij met iedereen",
    ],
    socialBody:
      "Vroege, rustige, positieve kennismakingen met mensen, honden, verkeer en aanraking bepalen dit meer dan het ras.",
    healthHead: "Wordt doorgaans {a}–{b} jaar",
    healthBody:
      "Elk ras heeft aandoeningen die vaker voorkomen dan gemiddeld. Vraag een fokker welke testen hij doet en waarom, of vraag een asiel wat bekend is. Je dierenarts is de juiste persoon voor alles wat specifiek is.",
  },
};
