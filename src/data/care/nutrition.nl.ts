import type { FoodItem } from "./types";

const poisonLine = {
  label: "Giftige voedingsmiddelen voor honden",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Een rustig, doorzoekbaar antwoord op de vraag "mag mijn hond dit eten?".
 * `avoid` = bekend als schadelijk. `care` = oké in sommige situaties, met kanttekeningen.
 * Niets hierin vervangt een telefoontje naar de dierenarts als een hond al iets heeft gegeten.
 */
export const foodItemsNl: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Chocolade", safety: "avoid", body: "Bevat theobromine, wat honden niet zo goed kunnen verwerken als wij. Pure en bakchocolade zijn het ergst; melkchocolade telt ook mee.", warning: "Bel direct uw dierenarts met het type, de hoeveelheid en ongeveer wanneer. Wacht niet op symptomen.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / berken­suiker", safety: "avoid", body: "Een zoetstof in suikervrije kauwgom, snoepjes, sommige pindakaas, gebak en medicijnen. Zeer kleine hoeveelheden kunnen een gevaarlijke daling van de bloedsuikerspiegel veroorzaken.", warning: "Dit is een noodgeval. Bel onmiddellijk een dierenarts.", source: poisonLine },
  { id: "grapes", name: "Druiven, rozijnen, krenten", safety: "avoid", body: "Kan bij sommige honden nierfalen veroorzaken, en niemand kan voorspellen welke honden of welke hoeveelheid. Dat geldt ook voor mince pies, kerstcake en muesli.", warning: "Elke hoeveelheid vereist een dierenartsbezoek op dezelfde dag.", source: poisonLine },
  { id: "onion", name: "Ui, knoflook, prei, bieslook", safety: "avoid", body: "De hele alliumfamilie beschadigt rode bloedcellen, rauw, gekookt, gedroogd of poeder. Pas op voor jus, bouillon, curry en restjes.", warning: "Symptomen kunnen dagen duren. Bel uw dierenarts.", source: poisonLine },
  { id: "macadamia", name: "Macadamianoten", safety: "avoid", body: "Veroorzaken zwakte, wankelheid, trillingen en braken, vaak binnen twaalf uur.", warning: "Bel uw dierenarts.", source: poisonLine },
  { id: "alcohol", name: "Alcohol", safety: "avoid", body: "Honden zijn veel gevoeliger dan mensen. Inclusief ongekookt deeg en sommige desserts.", warning: "Bel dringend een dierenarts.", source: poisonLine },
  { id: "caffeine", name: "Koffie, thee, energiedrankjes", safety: "avoid", body: "Cafeïne veroorzaakt een snelle hartslag, rusteloosheid en trillingen. Koffiedik en theezakjes in de prullenbak zijn een veelvoorkomende boosdoener.", warning: "Bel uw dierenarts.", source: poisonLine },
  { id: "dough", name: "Rauw brooddeeg", safety: "avoid", body: "Rijst in de warme maag en de gist produceert alcohol. Pijnlijk en echt gevaarlijk.", warning: "Dit is een noodgeval.", source: poisonLine },
  { id: "cooked-bones", name: "Gekookte botten", safety: "avoid", body: "Splinteren in scherpe stukken die de darmen kunnen beschadigen of blokkeren. Dat geldt ook voor kip-, karbonade- en ribbotten.", warning: "Als uw hond er een heeft gegeten, bel dan uw dierenarts voor advies." },
  { id: "corn-cob", name: "Kolf van de maïs", safety: "avoid", body: "De korrels zijn prima; de kolf is een van de meest voorkomende oorzaken van een chirurgische verstopping bij honden.", warning: "Bel uw dierenarts op dezelfde dag." },
  { id: "mouldy", name: "Schimmelig voedsel & compost", safety: "avoid", body: "Schimmel kan gifstoffen produceren die ernstige trillingen en toevallen veroorzaken. Houd compostbakken goed gesloten.", warning: "Bel dringend een dierenarts.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Pitten van perziken, pruimen & kersen", safety: "avoid", body: "Het vruchtvlees is in kleine hoeveelheden prima, de pitten niet – een verstikkings- en ver­stoppings­risico, en ze bevatten cyanideverbindingen." },
  { id: "mushrooms-wild", name: "Wilde paddenstoelen", safety: "avoid", body: "Sommige zijn dodelijk en het onderscheid in een veld is niet realistisch. Paddenstoelen uit de winkel in een maaltijd is een ander verhaal.", warning: "Als uw hond een wilde paddenstoel eet, bel dan een dierenarts en maak er een foto van als u kunt." },
  { id: "salt", name: "Zeer zout voedsel", safety: "avoid", body: "Grote hoeveelheden zout veroorzaken ernstige problemen. Zoutdeegdecoraties en het inslikken van veel zeewater zijn de gebruikelijke oorzaken." },
  { id: "rhubarb", name: "Rabarberbladeren", safety: "avoid", body: "De bladeren zijn giftig. Goed om te weten als u het in de tuin kweekt." },
  { id: "nutmeg", name: "Nootmuskaat", safety: "avoid", body: "In hoeveelheid veroorzaakt het desoriëntatie en trillingen. Een snufje over iets is meestal geen crisis, maar bied het niet aan." },
  { id: "hops", name: "Hop", safety: "avoid", body: "Relevant als iemand in huis bier brouwt. Veroorzaakt een gevaarlijke stijging van de lichaamstemperatuur." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Pindakaas", safety: "care", body: "Prima als af en toe een traktatie – maar alleen als het geen xylitol of berken­suiker bevat. Lees elke keer het etiket, zelfs op een merk dat u kent.", serving: "Een theelepel gesmeerd op een likmat", warning: "Alleen xylitolvrij." },
  { id: "cheese", name: "Kaas", safety: "care", body: "Uitstekend trainingsvoer, maar rijk en zout. Veel honden verdragen zuivel niet goed.", serving: "Erwtjesgrootte stukjes, geen plak" },
  { id: "yoghurt", name: "Naturel yoghurt", safety: "care", body: "Kleine hoeveelheden naturel, ongezoete yoghurt zijn geschikt voor sommige honden. Nooit iets gezoets – controleer op xylitol.", serving: "Een lepeltje" },
  { id: "milk", name: "Melk", safety: "care", body: "Veel volwassen honden zijn lactose-intolerant en dit uit zich meestal in maagklachten. Water is een beter idee." },
  { id: "bread", name: "Brood", safety: "care", body: "Naturel gebakken brood is niet schadelijk, maar het zijn lege calorieën. Vermijd alles met rozijnen, ui, knoflook of zaden." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Naturel, luchtgepoft en ongezouten is prima als af en toe een snack. Boter, zout en zoete coatings niet. Ongepofte korrels kunnen tanden breken." },
  { id: "ham", name: "Ham, spek & bewerkt vlees", safety: "care", body: "Zeer zout en vet. Vet voedsel is een bekende trigger voor pancreatitis, wat pijnlijk en ernstig is." },
  { id: "avocado", name: "Avocado", safety: "care", body: "Het vruchtvlees is veel minder een probleem voor honden dan voor vogels, maar het is vetrijk en de pit is een echt ver­stoppings­risico. Makkelijker om gewoon over te slaan." },
  { id: "tomato", name: "Tomaat", safety: "care", body: "Rijp tomatenvruchtvlees is in kleine hoeveelheden prima. Groene tomaten, bladeren en stengels niet." },
  { id: "nuts", name: "Noten (algemeen)", safety: "care", body: "Vetrijk, makkelijk om in te stikken, vaak gezouten. Macadamianoten zijn giftig. Het beste om als gewoonte te vermijden." },
  { id: "raw-potato", name: "Rauwe aardappel", safety: "care", body: "Groene of spruitende aardappelen zijn giftig. Naturel gekookte aardappel zonder boter of zout is af en toe prima." },
  { id: "sweetcorn", name: "Maïskorrels", safety: "care", body: "Korrels van de kolf zijn ongevaarlijk in kleine hoeveelheden. De kolf is het gevaar." },
  { id: "citrus", name: "Sinaasappels & citrus", safety: "care", body: "Een klein stukje gepelde sinaasappel kan geen kwaad, hoewel de meeste honden er niet van houden. Sla de schil, het merg en de pitten over." },
  { id: "ice-cream", name: "IJs", safety: "care", body: "Suikerrijk, vaak zuivelrijk, en bevat soms xylitol of chocolade. Bevroren naturel yoghurt of een bevroren wortel is een betere traktatie op een warme dag." },
  { id: "raw-fish", name: "Rauwe vis", safety: "care", body: "Brengt een risico op parasieten en bacteriën met zich mee, en sommige rauwe vis verstoort de opname van vitamines. Gekookt en graatvrij is de veiligere versie." },
  { id: "liver", name: "Lever", safety: "care", body: "Een uitstekende trainings traktatie, maar zeer rijk aan vitamine A. Houd het bij kleine hoeveelheden in plaats van een regelmatige maaltijd." },
  { id: "eggs-raw", name: "Rauw ei", safety: "care", body: "Salmonellarisico, en rauwe eiwitten kunnen een B-vitamine verstoren. Gekookt naturel ei is het makkelijke alternatief." },
  { id: "honey", name: "Honing", safety: "care", body: "Niet giftig, gewoon suiker. Een klein beetje af en toe is prima voor gezonde volwassen honden; sla het over voor diabetische honden en puppy's." },
  { id: "coconut", name: "Kokos", safety: "care", body: "Kleine hoeveelheden vruchtvlees of olie zijn niet schadelijk, maar het is vetrijk en kan de ontlasting dunner maken." },
  { id: "spinach", name: "Spinazie & boerenkool", safety: "care", body: "Prima in kleine hoeveelheden als onderdeel van een maaltijd. Grote hoeveelheden zijn niet ideaal voor honden met nierproblemen." },
  { id: "table-scraps", name: "Tafelrestjes", safety: "care", body: "Het probleem is zelden één hap – het zijn de sauzen, ui, zout en vet, en de calorieën die niemand telt. Houd traktaties op ongeveer een tiende van het dagelijkse voer." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Wortel", safety: "safe", body: "Knapperig, goedkoop en caloriearm. Een koude wortel is een prima ding voor een doorkomende puppy om op te kauwen.", serving: "Rauwe reepjes of gekookte stukjes" },
  { id: "apple", name: "Appel", safety: "safe", body: "Zoet, knapperig en populair. Verwijder het klokhuis en de pitten.", serving: "Een paar plakjes" },
  { id: "banana", name: "Banaan", safety: "safe", body: "Prima in kleine hoeveelheden. Suikerrijk, dus niet elke dag.", serving: "Een paar plakjes banaan" },
  { id: "blueberries", name: "Blauwe bessen", safety: "safe", body: "Klein, makkelijk uit te delen en de meeste honden zijn er dol op.", serving: "Een kleine handvol" },
  { id: "watermelon", name: "Watermeloen", safety: "safe", body: "Verfrissend op een warme dag. Verwijder de zaden en schil.", serving: "Een paar blokjes, of bevroren" },
  { id: "strawberries", name: "Aardbeien", safety: "safe", body: "Prima vers, in kleine hoeveelheden. Niets uit blik of in siroop.", serving: "Eén of twee" },
  { id: "pumpkin", name: "Naturel pompoen", safety: "safe", body: "Naturel gekookte of uit blik pompoen (geen taartvulling) is zacht voor de maag en wordt vaak aangeraden om dunne ontlasting steviger te maken.", serving: "Een lepeltje of twee" },
  { id: "green-beans", name: "Groene bonen", safety: "safe", body: "Vullend en caloriearm – echt nuttig als uw hond op dieet is.", serving: "Een kleine handvol, naturel" },
  { id: "cucumber", name: "Komkommer", safety: "safe", body: "Voornamelijk water. Een goede snack voor warm weer.", serving: "Een paar plakjes" },
  { id: "chicken", name: "Naturel gekookte kip", safety: "safe", body: "Zonder vel, zonder botten en ongekruid. Een van de beste trainings traktaties die er is.", serving: "Kleine stukjes" },
  { id: "turkey", name: "Naturel gekookte kalkoen", safety: "safe", body: "Zelfde regels als kip: geen vel, geen botten, geen kruiden, geen jus.", serving: "Kleine stukjes" },
  { id: "fish-cooked", name: "Gekookte witte vis & zalm", safety: "safe", body: "Goed gekookt en grondig ontgraat. Een goede bron van eiwitten en omega-3.", serving: "Een klein portie" },
  { id: "rice", name: "Naturel gekookte rijst", safety: "safe", body: "Mild en licht verteerbaar – vaak onderdeel van wat een dierenarts aanbeveelt na maagklachten.", serving: "Gemengd in een maaltijd" },
  { id: "egg", name: "Gekookt ei", safety: "safe", body: "Roerei zonder boter of zout, of hardgekookt.", serving: "Een deel van een ei, afhankelijk van de grootte van uw hond" },
  { id: "sweet-potato", name: "Gekookte zoete aardappel", safety: "safe", body: "Naturel en gekookt. De meeste honden zijn er erg dol op.", serving: "Een kleine hoeveelheid, geen boter" },
  { id: "peas", name: "Erwten", safety: "safe", body: "Vers of bevroren, naturel. Sla erwten uit blik over – te veel zout.", serving: "Een lepeltje" },
  { id: "broccoli", name: "Broccoli", safety: "safe", body: "Prima in kleine hoeveelheden. Veel kan gas en maagirritatie veroorzaken.", serving: "Een paar kleine roosjes" },
  { id: "courgette", name: "Courgette", safety: "safe", body: "Caloriearm en licht voor de maag, rauw of gekookt naturel.", serving: "Een paar stukjes" },
  { id: "celery", name: "Selderij", safety: "safe", body: "Knapperig en zeer caloriearm. Hak het klein.", serving: "Kleine gehakte stukjes" },
  { id: "pear", name: "Peer", safety: "safe", body: "Prima zonder klokhuis en pitten.", serving: "Een paar stukjes" },
  { id: "melon", name: "Cantaloupe meloen", safety: "safe", body: "Zoet en hydraterend. Verwijder de schil en zaden.", serving: "Een paar blokjes" },
  { id: "mango", name: "Mango", safety: "safe", body: "Gepeld, pit verwijderd. Suikerrijk, dus houd het klein.", serving: "Een paar stukjes" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Alleen vers, schil en kern verwijderd. Niet de gesuikerde soort uit blik.", serving: "Een klein stukje" },
  { id: "oats", name: "Naturel gekookte havermout", safety: "safe", body: "Naturel pap gemaakt met water. Geen suiker, geen zoetstoffen, geen melk.", serving: "Een lepeltje" },
  { id: "sardines", name: "Sardines in water", safety: "safe", body: "Uit blik in water, niet in olie of pekel. Een goede bron van omega-3.", serving: "Een deel van een blikje, af en toe" },
  { id: "cauliflower", name: "Bloemkool", safety: "safe", body: "Naturel en in kleine hoeveelheden. Kan gas veroorzaken, net als bij ons.", serving: "Een klein roosje" },
  { id: "lettuce", name: "Sla", safety: "safe", body: "Onschadelijk en grotendeels water. Niet spannend, maar prima.", serving: "Een beetje, gehakt" },
  { id: "beetroot", name: "Gekookte rode biet", safety: "safe", body: "Naturel gekookte rode biet is prima in kleine hoeveelheden – niet de ingelegde soort.", serving: "Een klein stukje" },
];

export const nutritionSectionsNl = [
  {
    title: "Lees het etiket, niet de verpakking",
    body: "De voorkant van de zak is marketing. Wat telt, is een verklaring dat het voer compleet en uitgebalanceerd is voor de levensfase van uw hond, en een voedergids die u daadwerkelijk kunt volgen.",
    points: [
      "\"Compleet\" betekent dat het op zichzelf gevoerd kan worden. \"Aanvullend\" betekent dat het niet kan",
      "Controleer of het voor de juiste levensfase is – puppy, volwassen of alle levensfasen",
      "Voedergidsen zijn een startpunt, geen regel. Pas aan op uw hond",
      "Merken met dierenartsen en voedingsdeskundigen in dienst, die voederproeven uitvoeren, zijn een veiligere keuze",
    ],
  },
  {
    title: "Hoeveel, echt",
    body: "Elke gids op elke zak is een gemiddelde. Twee honden van hetzelfde gewicht kunnen merkbaar verschillende hoeveelheden nodig hebben, en het eerlijke antwoord is om te voeren, te observeren en elke paar weken aan te passen.",
    points: [
      "Weeg het voer in plaats van een schep te gebruiken – scheppen kunnen variëren",
      "Tel traktaties en kauwsnacks mee. Ze tellen sneller op dan iemand verwacht",
      "Controleer de lichaamsconditie maandelijks en pas met ongeveer 10% per keer aan",
      "Gecastreerde honden hebben vaak iets minder nodig dan voorheen",
    ],
  },
  {
    title: "Hoe vaak",
    body: "Puppy's hebben frequente kleine maaltijden nodig; volwassenen doen het goed op twee. Het verdelen van het dagelijkse voer over twee maaltijden past beter bij de routines van de meeste honden dan één grote bak.",
    points: [
      "Onder 4 maanden: drie of vier maaltijden per dag",
      "4 tot 6 maanden: drie maaltijden",
      "6 maanden en ouder: twee maaltijden",
      "Honden met een diepe borstkas: vermijd zware inspanning vlak voor de maaltijden",
    ],
  },
  {
    title: "Voer veranderen",
    body: "Plotselinge veranderingen verstoren de maag van de meeste honden. Neem er ongeveer een week de tijd voor.",
    points: [
      "Dag 1-2: een kwart nieuw, driekwart oud",
      "Dag 3-4: half om half",
      "Dag 5-6: driekwart nieuw",
      "Dag 7: volledig nieuw voer",
      "Als de ontlasting dunner wordt, ga dan langzamer door in plaats van door te zetten",
    ],
  },
  {
    title: "Water",
    body: "Vers water, altijd beschikbaar, in een schone bak. Het klinkt vanzelfsprekend, en toch is het hetgene dat het vaakst wordt vergeten op warme dagen en lange reizen.",
  },
  {
    title: "Rauw en zelfgemaakt",
    body: "Beide kunnen goed worden gedaan, en beide zijn makkelijk om fout te doen. Zelfgemaakte diëten zijn in het bijzonder vaak ongebalanceerd, tenzij een veterinaire voedingsdeskundige ze heeft samengesteld.",
    points: [
      "Rauw voeren brengt een bacteriële risico met zich mee voor uw hond en uw huishouden",
      "Zelfgemaakt voer heeft een goed recept en supplementen nodig om compleet te zijn",
      "Praat met uw dierenarts voordat u overschakelt, vooral voor puppy's en oudere honden",
      "Dit is een echte beslissing die u met een professional moet nemen, niet van een forum",
    ],
  },
] as const;
