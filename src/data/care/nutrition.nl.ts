import type { FoodItem } from "./types";

const poisonLine = {
  label: "Advies over giftig voedsel voor honden",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Een rustig, doorzoekbaar antwoord op "mag mijn hond dit eten?".
 * `avoid` = bekend schadelijk. `care` = in sommige gevallen prima, met kanttekeningen.
 * Niets hier vervangt een telefoontje naar de dierenarts als een hond al iets heeft gegeten.
 */
export const foodItemsNl: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Chocolade", safety: "avoid", body: "Bevat theobromine, dat honden niet kunnen afbreken zoals wij dat kunnen. Pure en bakchocolade zijn het ergst; melkchocolade telt ook mee.", warning: "Bel meteen uw dierenarts met het type, de hoeveelheid en ongeveer het tijdstip. Wacht niet op symptomen.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / berkensuiker", safety: "avoid", body: "Een zoetstof in suikervrije kauwgom, mints, sommige pindakaas, gebak en enkele medicijnen. Al hele kleine hoeveelheden kunnen een gevaarlijke daling van de bloedsuiker veroorzaken.", warning: "Dit is een noodgeval. Bel onmiddellijk een dierenarts.", source: poisonLine },
  { id: "grapes", name: "Druiven, rozijnen, sultana's, krenten", safety: "avoid", body: "Kan bij sommige honden nierfalen veroorzaken, en niemand kan voorspellen bij welke honden of welke hoeveelheid. Denk ook aan kerstkoekjes, fruitcake en granola.", warning: "Elke hoeveelheid is reden voor een telefoontje naar de dierenarts, dezelfde dag nog.", source: poisonLine },
  { id: "onion", name: "Ui, knoflook, prei, bieslook", safety: "avoid", body: "De hele uienfamilie beschadigt rode bloedcellen, rauw, gekookt, gedroogd of als poeder. Let op met jus, bouillon, curry en restjes.", warning: "Verschijnselen kunnen dagen op zich laten wachten. Bel uw dierenarts.", source: poisonLine },
  { id: "macadamia", name: "Macadamianoten", safety: "avoid", body: "Veroorzaken zwakte, wankelheid, trillingen en braken, vaak binnen twaalf uur.", warning: "Bel uw dierenarts.", source: poisonLine },
  { id: "alcohol", name: "Alcohol", safety: "avoid", body: "Honden zijn veel gevoeliger dan mensen. Denk ook aan ongebakken deeg en sommige toetjes.", warning: "Bel dringend een dierenarts.", source: poisonLine },
  { id: "caffeine", name: "Koffie, thee, energiedrankjes", safety: "avoid", body: "Cafeïne veroorzaakt een racende hartslag, onrust en trillingen. Koffiedik en theezakjes in de vuilnisbak zijn een veelvoorkomende boosdoener.", warning: "Bel uw dierenarts.", source: poisonLine },
  { id: "dough", name: "Rauw broodgist-deeg", safety: "avoid", body: "Rijst verder op in de warme maag en de gist produceert alcohol. Pijnlijk en oprecht gevaarlijk.", warning: "Dit is een noodgeval.", source: poisonLine },
  { id: "cooked-bones", name: "Gekookte botten", safety: "avoid", body: "Versplinteren in scherpe stukken die de darm kunnen beschadigen of blokkeren. Denk aan kippen-, karbonade- en ribbotjes.", warning: "Als uw hond er een heeft opgegeten, bel dan uw dierenarts voor advies." },
  { id: "corn-cob", name: "Maiskolf", safety: "avoid", body: "De korrels zijn prima; de kolf zelf is een van de meest voorkomende oorzaken van een chirurgische verstopping bij honden.", warning: "Bel dezelfde dag nog uw dierenarts." },
  { id: "mouldy", name: "Beschimmeld voedsel & compost", safety: "avoid", body: "Schimmel kan toxines produceren die ernstige trillingen en toevallen veroorzaken. Houd compostbakken goed gesloten.", warning: "Bel dringend een dierenarts.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Pitten van perzik, pruim en kers", safety: "avoid", body: "Het vruchtvlees is in kleine hoeveelheden prima, de pitten niet — een verstikkings- en verstoppingsrisico, en ze bevatten cyanideverbindingen." },
  { id: "mushrooms-wild", name: "Wilde paddenstoelen", safety: "avoid", body: "Sommige zijn dodelijk en ze in het veld uit elkaar houden is niet realistisch. Gekochte champignons in een maaltijd zijn een ander verhaal.", warning: "Als uw hond een wilde paddenstoel eet, bel dan een dierenarts en maak indien mogelijk een foto." },
  { id: "salt", name: "Erg zout voedsel", safety: "avoid", body: "Grote hoeveelheden zout veroorzaken ernstige problemen. Zoutdeeg-decoraties en veel zeewater binnenkrijgen zijn de gebruikelijke oorzaken." },
  { id: "rhubarb", name: "Rabarberblad", safety: "avoid", body: "De bladeren zijn giftig. Goed om te weten als u het in de tuin heeft." },
  { id: "nutmeg", name: "Nootmuskaat", safety: "avoid", body: "In grote hoeveelheden veroorzaakt het desoriëntatie en trillingen. Een snufje op iets is meestal geen crisis, maar geef het niet expres." },
  { id: "hops", name: "Hop", safety: "avoid", body: "Relevant als iemand in huis bier brouwt. Veroorzaakt een gevaarlijke stijging van de lichaamstemperatuur." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Pindakaas", safety: "care", body: "Prima als incidenteel hapje — maar alleen als het geen xylitol of berkensuiker bevat. Lees elke keer het etiket, ook bij een merk dat u kent.", serving: "Een theelepel uitgesmeerd op een liksmatje", warning: "Alleen xylitolvrij." },
  { id: "cheese", name: "Kaas", safety: "care", body: "Uitstekend trainingssnoepje, maar rijk en zout. Veel honden verdragen zuivel niet goed.", serving: "Stukjes ter grootte van een erwt, geen plak" },
  { id: "yoghurt", name: "Naturel yoghurt", safety: "care", body: "Kleine hoeveelheden ongezoete naturel yoghurt bevallen sommige honden goed. Nooit iets gezoets — controleer op xylitol.", serving: "Een lepel" },
  { id: "milk", name: "Melk", safety: "care", body: "Veel volwassen honden zijn lactose-intolerant en dat uit zich meestal als een van streek geraakte maag. Water is een beter idee." },
  { id: "bread", name: "Brood", safety: "care", body: "Puur gebakken brood is niet schadelijk maar het zijn lege calorieën. Vermijd alles met rozijnen, ui, knoflook of zaden." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Puur, luchtgepoft en ongezouten is prima als incidenteel snackje. Boter, zout en zoete coatings niet. Niet-gepofte korrels kunnen tanden breken." },
  { id: "ham", name: "Ham, spek & bewerkt vlees", safety: "care", body: "Erg zout en vet. Vet voedsel is een bekende trigger voor alvleesklierontsteking, wat pijnlijk en ernstig is." },
  { id: "avocado", name: "Avocado", safety: "care", body: "Het vruchtvlees is voor honden veel minder een probleem dan voor vogels, maar het is vet en de pit is een echt verstoppingsrisico. Makkelijker om het gewoon over te slaan." },
  { id: "tomato", name: "Tomaat", safety: "care", body: "Rijp tomatenvruchtvlees is in kleine hoeveelheden prima. Groene tomaten, bladeren en stelen niet." },
  { id: "nuts", name: "Noten (algemeen)", safety: "care", body: "Vetrijk, makkelijk om je in te verslikken, vaak gezouten. Macadamianoten zijn giftig. Kunt u het beste vermijden als gewoonte." },
  { id: "raw-potato", name: "Rauwe aardappel", safety: "care", body: "Groene of uitlopende aardappelen zijn giftig. Puur gekookte aardappel zonder boter of zout is af en toe prima." },
  { id: "sweetcorn", name: "Suikermaïskorrels", safety: "care", body: "Korrels los van de kolf zijn in kleine hoeveelheden onschadelijk. De kolf is het gevaar." },
  { id: "citrus", name: "Sinaasappels & citrusvruchten", safety: "care", body: "Een klein stukje geschilde sinaasappel doet geen kwaad, hoewel de meeste honden er niet erg op zitten te wachten. Sla de schil, het wit en de pitten over." },
  { id: "ice-cream", name: "IJs", safety: "care", body: "Suikerrijk, vaak zuivelrijk, en bevat soms xylitol of chocolade. Bevroren naturel yoghurt of een bevroren wortel is een betere traktatie op een warme dag." },
  { id: "raw-fish", name: "Rauwe vis", safety: "care", body: "Brengt een parasiet- en bacterierisico met zich mee, en sommige rauwe vis belemmert de opname van vitamines. Gekookt en zonder graten is de veiligere versie." },
  { id: "liver", name: "Lever", safety: "care", body: "Een fantastisch trainingshapje, maar erg rijk aan vitamine A. Houd het bij kleine hoeveelheden in plaats van een vaste maaltijd." },
  { id: "eggs-raw", name: "Rauw ei", safety: "care", body: "Salmonellarisico, en rauw eiwit kan de opname van een B-vitamine belemmeren. Gekookt, puur ei is het simpele alternatief." },
  { id: "honey", name: "Honing", safety: "care", body: "Niet giftig, gewoon suiker. Een piepklein beetje af en toe is prima voor gezonde volwassen honden; sla het over bij diabetische honden en pups." },
  { id: "coconut", name: "Kokos", safety: "care", body: "Kleine hoeveelheden vruchtvlees of olie zijn niet schadelijk, maar het is vet en kan de ontlasting losser maken." },
  { id: "spinach", name: "Spinazie & boerenkool", safety: "care", body: "In kleine hoeveelheden prima als onderdeel van een maaltijd. Grote hoeveelheden zijn niet ideaal voor honden met nierproblemen." },
  { id: "table-scraps", name: "Etensresten van tafel", safety: "care", body: "Het probleem is zelden één hapje — het zijn de sauzen, ui, zout en vet, en de calorieën die niemand telt. Houd traktaties op ongeveer een tiende van de dagelijkse voeding." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Wortel", safety: "safe", body: "Knapperig, goedkoop en calorie-arm. Een koude wortel is een prima knaagobject voor een pup met doorkomende tandjes.", serving: "Rauwe reepjes of gekookte stukjes" },
  { id: "apple", name: "Appel", safety: "safe", body: "Zoet, knapperig en geliefd. Haal het klokhuis en de pitjes eruit.", serving: "Een paar plakjes" },
  { id: "banana", name: "Banaan", safety: "safe", body: "In kleine hoeveelheden prima. Suikerrijk, dus niet elke dag.", serving: "Een paar plakjes banaan" },
  { id: "blueberries", name: "Bosbessen", safety: "safe", body: "Klein, makkelijk uit te delen en de meeste honden zijn er dol op.", serving: "Een kleine handvol" },
  { id: "watermelon", name: "Watermeloen", safety: "safe", body: "Verfrissend op een warme dag. Verwijder de pitjes en de schil.", serving: "Een paar blokjes, of bevroren" },
  { id: "strawberries", name: "Aardbeien", safety: "safe", body: "Vers is prima, in kleine hoeveelheden. Niets uit blik of op siroop.", serving: "Een of twee stuks" },
  { id: "pumpkin", name: "Pure pompoen", safety: "safe", body: "Pure gekookte of blikpompoen (geen taartvulling) is zacht voor de maag en wordt vaak aanbevolen om losse ontlasting steviger te maken.", serving: "Een lepel of twee" },
  { id: "green-beans", name: "Sperziebonen", safety: "safe", body: "Vullend en calorie-arm — echt handig als uw hond op dieet is.", serving: "Een kleine handvol, puur" },
  { id: "cucumber", name: "Komkommer", safety: "safe", body: "Grotendeels water. Een fijn hapje bij warm weer.", serving: "Een paar plakjes" },
  { id: "chicken", name: "Puur gekookte kip", safety: "safe", body: "Zonder vel, zonder botjes en ongekruid. Een van de beste trainingssnoepjes die er zijn.", serving: "Kleine stukjes" },
  { id: "turkey", name: "Puur gekookte kalkoen", safety: "safe", body: "Dezelfde regels als kip: geen vel, geen botjes, geen kruiden, geen jus.", serving: "Kleine stukjes" },
  { id: "fish-cooked", name: "Gekookte witvis & zalm", safety: "safe", body: "Goed doorgegaard en volledig ontgraat. Een goede bron van eiwit en omega-3.", serving: "Een kleine portie" },
  { id: "rice", name: "Puur gekookte rijst", safety: "safe", body: "Neutraal en makkelijk verteerbaar — vaak onderdeel van wat een dierenarts adviseert na een maagverstoring.", serving: "Door een maaltijd gemengd" },
  { id: "egg", name: "Gekookt ei", safety: "safe", body: "Roerei zonder boter of zout, of hardgekookt.", serving: "Een deel van een ei, afhankelijk van de grootte van uw hond" },
  { id: "sweet-potato", name: "Gekookte zoete aardappel", safety: "safe", body: "Puur en gekookt. De meeste honden zijn er erg enthousiast over.", serving: "Een kleine hoeveelheid, zonder boter" },
  { id: "peas", name: "Doperwten", safety: "safe", body: "Vers of diepvries, puur. Sla erwten uit blik over — te veel zout.", serving: "Een lepel" },
  { id: "broccoli", name: "Broccoli", safety: "safe", body: "In kleine hoeveelheden prima. Veel kan winderigheid en maagirritatie veroorzaken.", serving: "Een paar kleine roosjes" },
  { id: "courgette", name: "Courgette", safety: "safe", body: "Calorie-arm en licht verteerbaar, rauw of puur gekookt.", serving: "Een paar stukjes" },
  { id: "celery", name: "Bleekselderij", safety: "safe", body: "Knapperig en heel calorie-arm. Snijd het klein.", serving: "Kleine gesneden stukjes" },
  { id: "pear", name: "Peer", safety: "safe", body: "Prima zonder het klokhuis en de pitjes.", serving: "Een paar stukjes" },
  { id: "melon", name: "Cantaloupemeloen", safety: "safe", body: "Zoet en vochtrijk. Verwijder de schil en de pitjes.", serving: "Een paar blokjes" },
  { id: "mango", name: "Mango", safety: "safe", body: "Geschild, pit verwijderd. Suikerrijk, dus houd het klein.", serving: "Een paar stukjes" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Alleen vers, schil en kern verwijderd. Niet de gesuikerde uit blik.", serving: "Een klein stukje" },
  { id: "oats", name: "Puur gekookte havermout", safety: "safe", body: "Pure pap gemaakt met water. Geen suiker, geen zoetstoffen, geen melk.", serving: "Een lepel" },
  { id: "sardines", name: "Sardines op water", safety: "safe", body: "Uit blik op water, niet op olie of pekel. Een goede bron van omega-3.", serving: "Een deel van een blikje, af en toe" },
  { id: "cauliflower", name: "Bloemkool", safety: "safe", body: "Puur en in kleine hoeveelheden. Kan winderigheid veroorzaken, net als bij ons.", serving: "Een klein roosje" },
  { id: "lettuce", name: "Sla", safety: "safe", body: "Onschadelijk en voornamelijk water. Niet spannend, maar prima.", serving: "Een beetje, gesneden" },
  { id: "beetroot", name: "Gekookte rode biet", safety: "safe", body: "Puur gekookte rode biet is in kleine hoeveelheden prima — niet de ingelegde soort.", serving: "Een klein stukje" },
];

export const nutritionSectionsNl = [
  {
    title: "Lees het etiket, niet de verpakking",
    body: "De voorkant van de zak is marketing. Wat telt is een vermelding dat het voer compleet en uitgebalanceerd is voor de levensfase van uw hond, en een voedingsschema dat u ook echt kunt volgen.",
    points: [
      "\"Compleet\" betekent dat het alleen gevoerd kan worden. \"Aanvullend\" betekent van niet",
      "Controleer of het voor de juiste levensfase is — pup, volwassen of alle levensfasen",
      "Voedingsschema's zijn een startpunt, geen regel. Pas het aan op uw hond",
      "Merken met dierenartsen en voedingsdeskundigen in dienst, die voedingsproeven uitvoeren, zijn een veiligere keuze",
    ],
  },
  {
    title: "Hoeveel, eigenlijk",
    body: "Elk schema op elke zak is een gemiddelde. Twee honden met hetzelfde gewicht kunnen merkbaar verschillende hoeveelheden nodig hebben, en het eerlijke antwoord is: voeren, observeren en om de paar weken bijstellen.",
    points: [
      "Weeg het voer in plaats van een schepje te gebruiken — schepjes wijken af",
      "Tel traktaties en kauwproducten mee. Ze lopen sneller op dan iedereen verwacht",
      "Controleer maandelijks de lichaamsconditie en pas ongeveer 10% per keer aan",
      "Gesteriliseerde of gecastreerde honden hebben vaak iets minder nodig dan voorheen",
    ],
  },
  {
    title: "Hoe vaak",
    body: "Pups hebben regelmatige kleine maaltijden nodig; volwassen honden doen het goed met twee. Het dagvoer opsplitsen in twee maaltijden past beter bij de routine van de meeste honden dan één grote bak.",
    points: [
      "Onder 4 maanden: drie of vier maaltijden per dag",
      "4 tot 6 maanden: drie maaltijden",
      "6 maanden en ouder: twee maaltijden",
      "Honden met een diepe borstkas: vermijd zware inspanning vlak rond etenstijd",
    ],
  },
  {
    title: "Voer wisselen",
    body: "Plotselinge veranderingen brengen de maag van de meeste honden van streek. Neem er ongeveer een week de tijd voor.",
    points: [
      "Dag 1–2: een kwart nieuw, driekwart oud",
      "Dag 3–4: fifty-fifty",
      "Dag 5–6: driekwart nieuw",
      "Dag 7: helemaal nieuw voer",
      "Als de ontlasting losser wordt, vertraag dan liever in plaats van door te zetten",
    ],
  },
  {
    title: "Water",
    body: "Vers water, altijd beschikbaar, in een schone bak. Het klinkt vanzelfsprekend, en toch is het wat het vaakst wordt vergeten op warme dagen en tijdens lange reizen.",
  },
  {
    title: "Rauw en zelfgekookt",
    body: "Beide kunnen goed worden gedaan, en bij beide gaat het ook makkelijk mis. Vooral zelfgekookte diëten zijn heel vaak onevenwichtig, tenzij een dierenartsvoedingsdeskundige ze heeft samengesteld.",
    points: [
      "Rauwe voeding brengt een bacterieel risico met zich mee voor uw hond en uw huishouden",
      "Zelfgekookt voer heeft een goed recept en supplementen nodig om compleet te zijn",
      "Praat met uw dierenarts voordat u overstapt, zeker bij pups en oudere honden",
      "Dit is een echte beslissing om samen met een professional te nemen, niet vanuit een forum",
    ],
  },
] as const;
