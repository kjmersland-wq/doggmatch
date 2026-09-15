import type { FoodItem } from "./types";

const poisonLine = {
  label: "Råd om giftig mat för hundar",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Ett lugnt, sökbart svar på frågan "kan min hund äta det här?".
 * `avoid` = känt för att vara skadligt. `care` = okej i vissa situationer, med förbehåll.
 * Ingenting här ersätter ett samtal till veterinären om hunden redan har ätit något.
 */
export const foodItemsSe: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Choklad", safety: "avoid", body: "Innehåller teobromin, som hundar inte kan bryta ner som vi. Mörk och bakchoklad är värst; mjölkchoklad räknas också.", warning: "Ring din veterinär omedelbart med typ, mängd och ungefärlig tidpunkt. Vänta inte på symptom.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / björksocker", safety: "avoid", body: "Ett sötningsmedel i sockerfritt tuggummi, halstabletter, vissa jordnötssmör, bakverk och vissa mediciner. Mycket små mängder kan orsaka ett farligt blodsockersfall.", warning: "Detta är en nödsituation. Ring en veterinär omedelbart.", source: poisonLine },
  { id: "grapes", name: "Vindruvor, russin, sultanrussin, korinter", safety: "avoid", body: "Kan orsaka njursvikt hos vissa hundar, och ingen kan förutsäga vilka hundar eller vilken mängd. Det inkluderar köttfärspajer, fruktkakor och granola.", warning: "Alla mängder kräver ett veterinärbesök samma dag.", source: poisonLine },
  { id: "onion", name: "Lök, vitlök, purjolök, gräslök", safety: "avoid", body: "Hela alliumfamiljen skadar röda blodkroppar, rå, tillagad, torkad eller pulveriserad. Se upp för såser, buljonger, curry och rester.", warning: "Symptom kan ta dagar att visa sig. Ring din veterinär.", source: poisonLine },
  { id: "macadamia", name: "Macadamianötter", safety: "avoid", body: "Orsakar svaghet, ostadighet, darrningar och kräkningar, ofta inom tolv timmar.", warning: "Ring din veterinär.", source: poisonLine },
  { id: "alcohol", name: "Alkohol", safety: "avoid", body: "Hundar är mycket känsligare än människor. Inkluderar ojäst deg och vissa desserter.", warning: "Ring en veterinär akut.", source: poisonLine },
  { id: "caffeine", name: "Kaffe, te, energidrycker", safety: "avoid", body: "Koffein orsakar hjärtklappning, rastlöshet och darrningar. Kaffesump och tepåsar i en soptunna är en vanlig orsak.", warning: "Ring din veterinär.", source: poisonLine },
  { id: "dough", name: "Rå bröddeg", safety: "avoid", body: "Jäser i den varma magen och jästen producerar alkohol. Smärtsamt och genuint farligt.", warning: "Detta är en nödsituation.", source: poisonLine },
  { id: "cooked-bones", name: "Tillagade ben", safety: "avoid", body: "Splittras till vassa bitar som kan skada eller blockera tarmen. Det inkluderar kyckling-, kotlett- och revbensben.", warning: "Om din hund har ätit ett ben, ring din veterinär för rådgivning." },
  { id: "corn-cob", name: "Majskolv", safety: "avoid", body: "Kärnorna är okej; kolven är en av de vanligaste orsakerna till kirurgisk blockering hos hundar.", warning: "Ring din veterinär samma dag." },
  { id: "mouldy", name: "Möglig mat & kompost", safety: "avoid", body: "Mögel kan producera toxiner som orsakar svåra darrningar och kramper. Håll kompostbehållare ordentligt stängda.", warning: "Ring en veterinär akut.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Sten från persika, plommon & körsbär", safety: "avoid", body: "Fruktköttet är okej i små mängder, stenarna är det inte – en risk för kvävning och blockering, och de innehåller cyanidföreningar." },
  { id: "mushrooms-wild", name: "Vilda svampar", safety: "avoid", body: "Vissa är dödliga och det är inte realistiskt att skilja dem åt på fältet. Svampar från affären i en måltid är en annan sak.", warning: "Om din hund äter en vild svamp, ring en veterinär och fotografera den om du kan." },
  { id: "salt", name: "Mycket salt mat", safety: "avoid", body: "Stora mängder salt orsakar allvarliga problem. Saltdekorationsfigurer och att svälja mycket havsvatten är de vanliga orsakerna." },
  { id: "rhubarb", name: "Rabarberblad", safety: "avoid", body: "Bladen är giftiga. Värt att veta om du odlar det i trädgården." },
  { id: "nutmeg", name: "Muskotnöt", safety: "avoid", body: "I större mängder orsakar det desorientering och darrningar. Ett strössel på något är oftast ingen kris, men erbjud det inte." },
  { id: "hops", name: "Humle", safety: "avoid", body: "Relevant om någon i hushållet brygger öl. Orsakar en farlig höjning av kroppstemperaturen." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Jordnötssmör", safety: "care", body: "Okej som enstaka godis – men bara om det inte innehåller xylitol eller björksocker. Läs etiketten varje gång, även på ett märke du känner till.", serving: "En tesked utsmord i en slickmatta", warning: "Endast xylitolfritt." },
  { id: "cheese", name: "Ost", safety: "care", body: "Utmärkt träningsbelöning, men rik och salt. Många hundar tål inte mejeriprodukter bra.", serving: "Ärtstora bitar, inte en skiva" },
  { id: "yoghurt", name: "Naturell yoghurt", safety: "care", body: "Små mängder naturell, osötad yoghurt passar vissa hundar. Aldrig något sötat – kontrollera efter xylitol.", serving: "En sked" },
  { id: "milk", name: "Mjölk", safety: "care", body: "Många vuxna hundar är laktosintoleranta och det visar sig oftast som orolig mage. Vatten är en bättre idé." },
  { id: "bread", name: "Bröd", safety: "care", body: "Naturellt bakat bröd är inte skadligt men det är tomma kalorier. Undvik allt med russin, lök, vitlök eller frön." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Naturellt, luftpoppat och osaltat är okej som ett enstaka snacks. Smör, salt och söta överdrag är det inte. Opoppade kärnor kan skada tänder." },
  { id: "ham", name: "Skinka, bacon & charkuterier", safety: "care", body: "Mycket salt och fett. Fet mat är en välkänd utlösare för pankreatit, som är smärtsamt och allvarligt." },
  { id: "avocado", name: "Avokado", safety: "care", body: "Fruktköttet är mycket mindre problem för hundar än för fåglar, men det är fettrikt och stenen är en verklig risk för blockering. Lättare att bara hoppa över." },
  { id: "tomato", name: "Tomat", safety: "care", body: "Moget tomatkött är okej i små mängder. Gröna tomater, blad och stjälkar är det inte." },
  { id: "nuts", name: "Nötter (allmänt)", safety: "care", body: "Fettrika, lätta att sätta i halsen, ofta saltade. Macadamianötter är giftiga. Bäst att undvika som vana." },
  { id: "raw-potato", name: "Rå potatis", safety: "care", body: "Grön eller groende potatis är giftig. Naturell kokt potatis utan smör eller salt är okej ibland." },
  { id: "sweetcorn", name: "Majskorn", safety: "care", body: "Kornen från kolven är ofarliga i små mängder. Kolven är faran." },
  { id: "citrus", name: "Apelsiner & citrus", safety: "care", body: "En liten bit skalad apelsin skadar inte, även om de flesta hundar inte är förtjusta. Skippa skalet, mellanskiktet och kärnorna." },
  { id: "ice-cream", name: "Glass", safety: "care", body: "Sockerrik, ofta fet, och innehåller ibland xylitol eller choklad. Fryst naturell yoghurt eller en fryst morot är ett bättre godis en varm dag." },
  { id: "raw-fish", name: "Rå fisk", safety: "care", body: "Innehåller risk för parasiter och bakterier, och viss rå fisk stör vitaminupptaget. Tillagad och benfri är den säkrare varianten." },
  { id: "liver", name: "Lever", safety: "care", body: "En fantastisk träningsgodis, men mycket rik på vitamin A. Håll det till små mängder snarare än en regelbunden måltid." },
  { id: "eggs-raw", name: "Råa ägg", safety: "care", body: "Salmonellarisk, och råa äggvitor kan störa ett B-vitamin. Tillagat naturellt ägg är det enkla alternativet." },
  { id: "honey", name: "Honung", safety: "care", body: "Inte giftigt, bara socker. En liten mängd då och då är okej för friska vuxna hundar; hoppa över det för diabetiker och valpar." },
  { id: "coconut", name: "Kokos", safety: "care", body: "Små mängder fruktkött eller olja är inte skadligt, men det är fettrikt och kan ge lös avföring." },
  { id: "spinach", name: "Spenat & grönkål", safety: "care", body: "Okej i små mängder som en del av en måltid. Stora mängder är inte idealiskt för hundar med njurproblem." },
  { id: "table-scraps", name: "Matrester från bordet", safety: "care", body: "Problemet är sällan en tugga – det är såserna, löken, saltet och fettet, och kalorierna ingen räknar. Håll godis till ungefär en tiondel av dagens mat." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Morot", safety: "safe", body: "Krispig, billig och kalorifattig. En kall morot är bra för en tandgnagande valp.", serving: "Råa stavar eller kokta bitar" },
  { id: "apple", name: "Äpple", safety: "safe", body: "Sött, krispigt och populärt. Ta bort kärnhuset och kärnorna.", serving: "Några skivor" },
  { id: "banana", name: "Banan", safety: "safe", body: "Okej i små mängder. Sockerrik, så inte varje dag.", serving: "Ett par myntstora bitar" },
  { id: "blueberries", name: "Blåbär", safety: "safe", body: "Små, lätta att ge och de flesta hundar älskar dem.", serving: "En liten handfull" },
  { id: "watermelon", name: "Vattenmelon", safety: "safe", body: "Uppfriskande en varm dag. Ta bort kärnor och skal.", serving: "Några kuber, eller fryst" },
  { id: "strawberries", name: "Jordgubbar", safety: "safe", body: "Okej färska, i små mängder. Inget på burk eller i sirap.", serving: "En eller två" },
  { id: "pumpkin", name: "Naturell pumpa", safety: "safe", body: "Naturell kokt eller konserverad pumpa (inte pajfyllning) är skonsam för magen och rekommenderas ofta för att stadga lös avföring.", serving: "En sked eller två" },
  { id: "green-beans", name: "Gröna bönor", safety: "safe", body: "Mättande och kalorifattiga – genuint användbara om din hund går på diet.", serving: "En liten handfull, naturella" },
  { id: "cucumber", name: "Gurka", safety: "safe", body: "Mestadels vatten. Ett bra snacks för varmt väder.", serving: "Några skivor" },
  { id: "chicken", name: "Naturellt tillagad kyckling", safety: "safe", body: "Utan skinn, ben och kryddor. En av de bästa träningsgodisarna som finns.", serving: "Små bitar" },
  { id: "turkey", name: "Naturellt tillagad kalkon", safety: "safe", body: "Samma regler som kyckling: inget skinn, inga ben, inga kryddor, ingen sås.", serving: "Små bitar" },
  { id: "fish-cooked", name: "Tillagad vit fisk & lax", safety: "safe", body: "Väl tillagad och helt benfri. En bra källa till protein och omega-3.", serving: "En liten portion" },
  { id: "rice", name: "Naturellt kokt ris", safety: "safe", body: "Milt och lättsmält – ofta en del av vad en veterinär rekommenderar efter orolig mage.", serving: "Blandat i maten" },
  { id: "egg", name: "Tillagat ägg", safety: "safe", body: "Äggröra utan smör eller salt, eller hårdkokt.", serving: "En del av ett ägg, beroende på din hunds storlek" },
  { id: "sweet-potato", name: "Tillagad sötpotatis", safety: "safe", body: "Naturell och tillagad. De flesta hundar är mycket förtjusta.", serving: "En liten mängd, utan smör" },
  { id: "peas", name: "Ärtor", safety: "safe", body: "Färska eller frysta, naturella. Skippa konserverade ärtor – för mycket salt.", serving: "En sked" },
  { id: "broccoli", name: "Broccoli", safety: "safe", body: "Okej i små mängder. Mycket kan orsaka gaser och magirritation.", serving: "Ett par små buketter" },
  { id: "courgette", name: "Zucchini", safety: "safe", body: "Kalorifattig och skonsam för magen, rå eller tillagad naturell.", serving: "Några bitar" },
  { id: "celery", name: "Selleri", safety: "safe", body: "Krispig och mycket kalorifattig. Hacka den smått.", serving: "Små hackade bitar" },
  { id: "pear", name: "Päron", safety: "safe", body: "Okej utan kärnhus och kärnor.", serving: "Några bitar" },
  { id: "melon", name: "Cantaloupemelon", safety: "safe", body: "Söt och återfuktande. Ta bort skal och kärnor.", serving: "Några kuber" },
  { id: "mango", name: "Mango", safety: "safe", body: "Skalad, kärna borttagen. Sockerrik, så håll det litet.", serving: "Ett par bitar" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Endast färsk, skal och kärna borttagna. Inte den sockrade sorten på burk.", serving: "En liten bit" },
  { id: "oats", name: "Naturellt kokt havre", safety: "safe", body: "Naturell gröt gjord på vatten. Ingen socker, inga sötningsmedel, ingen mjölk.", serving: "En sked" },
  { id: "sardines", name: "Sardiner i vatten", safety: "safe", body: "Konserverade i vatten, inte olja eller saltlag. En bra källa till omega-3.", serving: "En del av en burk, ibland" },
  { id: "cauliflower", name: "Blomkål", safety: "safe", body: "Naturell och i små mängder. Kan orsaka gaser, precis som för oss.", serving: "En liten bukett" },
  { id: "lettuce", name: "Sallad", safety: "safe", body: "Ofarlig och mestadels vatten. Inte spännande, men okej.", serving: "Lite, hackad" },
  { id: "beetroot", name: "Tillagad rödbeta", safety: "safe", body: "Naturellt tillagad rödbeta är okej i små mängder – inte den inlagda sorten.", serving: "En liten bit" },
];

export const nutritionSectionsSe = [
  {
    title: "Läs etiketten, inte förpackningen",
    body: "Framsidan av påsen är marknadsföring. Det som spelar roll är ett påstående om att maten är komplett och balanserad för din hunds livsstadium, och en utfodringsguide du faktiskt kan följa.",
    points: [
      "\"Komplett\" betyder att den kan ges ensam. \"Kompletterande\" betyder att den inte kan det",
      "Kontrollera att den är för rätt livsstadium – valp, vuxen eller alla livsstadier",
      "Utfodringsguider är en utgångspunkt, inte en regel. Anpassa efter din hund",
      "Varumärken med veterinärer och dietister anställda, som genomför utfodringsförsök, är ett säkrare val",
    ],
  },
  {
    title: "Hur mycket, egentligen",
    body: "Varje guide på varje påse är ett genomsnitt. Två hundar av samma vikt kan behöva märkbart olika mängder, och det ärliga svaret är att ge, observera och justera varannan vecka.",
    points: [
      "Väg maten snarare än att använda en skopa – skopor kan variera",
      "Räkna godis och tuggben. De adderas snabbare än någon tror",
      "Kontrollera hullmönstret månadsvis och justera med cirka 10% åt gången",
      "Kastrerade hundar behöver ofta lite mindre än de brukade",
    ],
  },
  {
    title: "Hur ofta",
    body: "Valpar behöver täta småmål; vuxna klarar sig bra på två. Att dela dagens mat i två mål passar de flesta hundars rutiner bättre än en stor skål.",
    points: [
      "Under 4 månader: tre eller fyra mål om dagen",
      "4 till 6 månader: tre mål",
      "6 månader och uppåt: två mål",
      "Hundar med djup bröstkorg: undvik hård motion precis runt måltiderna",
    ],
  },
  {
    title: "Byta foder",
    body: "Plötsliga förändringar stör de flesta hundars magar. Ta ungefär en vecka på dig.",
    points: [
      "Dag 1–2: en fjärdedel nytt, tre fjärdedelar gammalt",
      "Dag 3–4: hälften och hälften",
      "Dag 5–6: tre fjärdedelar nytt",
      "Dag 7: helt nytt foder",
      "Om magen blir lös, sakta ner snarare än att fortsätta",
    ],
  },
  {
    title: "Vatten",
    body: "Friskt vatten, alltid tillgängligt, i en ren skål. Det låter självklart, och det är fortfarande det som oftast glöms bort under varma dagar och långa resor.",
  },
  {
    title: "Råfoder och hemlagat",
    body: "Båda kan göras bra, och båda är lätta att göra fel. Hemlagade dieter i synnerhet är mycket ofta obalanserade om inte en veterinärdietist har formulerat dem.",
    points: [
      "Råfoder medför en bakterierisk för din hund och ditt hushåll",
      "Hemlagat behöver ett korrekt recept och tillskott för att vara komplett",
      "Prata med din veterinär innan du byter, särskilt för valpar och äldre hundar",
      "Detta är ett genuint beslut att fatta med en professionell, inte från ett forum",
    ],
  },
] as const;
