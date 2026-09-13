import type { FoodItem } from "./types";

const poisonLine = {
  label: "Vägledning om giftig mat för hundar",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Ett lugnt, sökbart svar på "får min hund äta det här?".
 * `avoid` = känt skadligt. `care` = okej i vissa situationer, med förbehåll.
 * Inget här ersätter ett samtal till veterinären om hunden redan har ätit något.
 */
export const foodItemsSe: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Choklad", safety: "avoid", body: "Innehåller teobromin, som hundar inte kan bryta ner som vi. Mörk choklad och bakchoklad är värst; mjölkchoklad räknas ändå.", warning: "Ring din veterinär direkt med typ, mängd och ungefär när. Vänta inte på symtom.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / björksocker", safety: "avoid", body: "Ett sötningsmedel i sockerfritt tuggummi, pastiller, vissa jordnötssmör, bakverk och en del läkemedel. Väldigt små mängder kan orsaka ett farligt blodsockerfall.", warning: "Det här är akut. Ring en veterinär omedelbart.", source: poisonLine },
  { id: "grapes", name: "Vindruvor, russin, sultanrussin, korinter", safety: "avoid", body: "Kan orsaka njursvikt hos vissa hundar, och ingen kan förutsäga vilka hundar eller vilken mängd. Det gäller även julkaka, fruktkaka och müsli.", warning: "Vilken mängd som helst kräver ett veterinärbesök samma dag.", source: poisonLine },
  { id: "onion", name: "Lök, vitlök, purjolök, gräslök", safety: "avoid", body: "Hela lökfamiljen skadar röda blodkroppar, rå, kokt, torkad eller pulvriserad. Se upp med sås, buljong, curry och matrester.", warning: "Tecken kan dröja flera dagar. Ring din veterinär.", source: poisonLine },
  { id: "macadamia", name: "Macadamianötter", safety: "avoid", body: "Orsakar svaghet, ostadig gång, skakningar och kräkningar, ofta inom tolv timmar.", warning: "Ring din veterinär.", source: poisonLine },
  { id: "alcohol", name: "Alkohol", safety: "avoid", body: "Hundar är betydligt känsligare än människor. Gäller även obakad deg och vissa desserter.", warning: "Ring en veterinär omgående.", source: poisonLine },
  { id: "caffeine", name: "Kaffe, te, energidrycker", safety: "avoid", body: "Koffein orsakar hjärtklappning, rastlöshet och skakningar. Kaffesump och tepåsar i soptunnan är en vanlig orsak.", warning: "Ring din veterinär.", source: poisonLine },
  { id: "dough", name: "Rå bröddeg", safety: "avoid", body: "Jäser i den varma magen och jästen bildar alkohol. Smärtsamt och verkligen farligt.", warning: "Det här är akut.", source: poisonLine },
  { id: "cooked-bones", name: "Kokta ben", safety: "avoid", body: "Splittras i vassa bitar som kan skada eller blockera tarmen. Gäller även kyckling-, kotlett- och revbensben.", warning: "Om din hund har ätit ett, ring din veterinär för råd." },
  { id: "corn-cob", name: "Majskolv", safety: "avoid", body: "Kornen är okej; kolven är en av de vanligaste orsakerna till en kirurgisk blockering hos hundar.", warning: "Ring din veterinär samma dag." },
  { id: "mouldy", name: "Möglig mat & kompost", safety: "avoid", body: "Mögel kan bilda gifter som orsakar kraftiga skakningar och kramper. Håll komposttunnor ordentligt stängda.", warning: "Ring en veterinär omgående.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Persiko-, plommon- och körsbärskärnor", safety: "avoid", body: "Fruktköttet är okej i små mängder, kärnorna är det inte — risk för kvävning och blockering, och de innehåller cyanidföreningar." },
  { id: "mushrooms-wild", name: "Vilda svampar", safety: "avoid", body: "Vissa är dödliga, och att skilja dem åt ute i naturen är inte realistiskt. Köpta svampar i en måltid är en annan sak.", warning: "Om din hund äter en vild svamp, ring en veterinär och fotografera den om du kan." },
  { id: "salt", name: "Väldigt salt mat", safety: "avoid", body: "Stora mängder salt orsakar allvarliga problem. Saltdegsdekorationer och att svälja mycket havsvatten är de vanliga orsakerna." },
  { id: "rhubarb", name: "Rabarberblad", safety: "avoid", body: "Bladen är giftiga. Bra att veta om du odlar rabarber i trädgården." },
  { id: "nutmeg", name: "Muskotnöt", safety: "avoid", body: "I stora mängder orsakar den desorientering och skakningar. Lite på något är sällan en kris, men erbjud det inte." },
  { id: "hops", name: "Humle", safety: "avoid", body: "Relevant om någon i hushållet bryggar öl. Orsakar en farlig höjning av kroppstemperaturen." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Jordnötssmör", safety: "care", body: "Okej som ett tillfälligt godis — men bara om det inte innehåller xylitol eller björksocker. Läs innehållsförteckningen varje gång, även på ett märke du känner igen.", serving: "En tesked utsmetad på en slickmatta", warning: "Endast utan xylitol." },
  { id: "cheese", name: "Ost", safety: "care", body: "Utmärkt träningsvaluta, men fet och salt. Många hundar tål inte mejeriprodukter så bra.", serving: "Ärtstora bitar, inte en skiva" },
  { id: "yoghurt", name: "Naturell yoghurt", safety: "care", body: "Små mängder naturell, osötad yoghurt passar vissa hundar. Aldrig något sötat — kolla efter xylitol.", serving: "En sked" },
  { id: "milk", name: "Mjölk", safety: "care", body: "Många vuxna hundar är laktosintoleranta och det visar sig oftast som magbesvär. Vatten är ett bättre val." },
  { id: "bread", name: "Bröd", safety: "care", body: "Vanligt bakat bröd är inte skadligt men det är tomma kalorier. Undvik allt med russin, lök, vitlök eller frön." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Vanligt, luftpoppat och osaltat är okej som ett tillfälligt mellanmål. Smör, salt och söta beläggningar är det inte. Opoppade korn kan skada tänder." },
  { id: "ham", name: "Skinka, bacon & charkprodukter", safety: "care", body: "Väldigt salt och fet. Fet mat är en känd utlösare av bukspottkörtelinflammation, som är smärtsam och allvarlig." },
  { id: "avocado", name: "Avokado", safety: "care", body: "Fruktköttet är betydligt mindre problematiskt för hundar än för fåglar, men det är fettrikt och kärnan är en verklig blockeringsrisk. Enklast att bara hoppa över." },
  { id: "tomato", name: "Tomat", safety: "care", body: "Moget tomatkött är okej i små mängder. Gröna tomater, blad och stjälkar är det inte." },
  { id: "nuts", name: "Nötter (allmänt)", safety: "care", body: "Fettrika, lätta att sätta i halsen, ofta saltade. Macadamianötter är giftiga. Bäst att undvika som vana." },
  { id: "raw-potato", name: "Rå potatis", safety: "care", body: "Gröna eller grodda potatisar är giftiga. Vanlig kokt potatis utan smör eller salt är okej ibland." },
  { id: "sweetcorn", name: "Majskorn", safety: "care", body: "Korn utan kolv är ofarliga i små mängder. Kolven är faran." },
  { id: "citrus", name: "Apelsin & citrusfrukt", safety: "care", body: "En liten bit skalad apelsin gör ingen skada, även om de flesta hundar inte är särskilt förtjusta. Hoppa över skal, det vita skiktet och kärnorna." },
  { id: "ice-cream", name: "Glass", safety: "care", body: "Sockerrik, ofta mejeritung, och innehåller ibland xylitol eller choklad. Fryst naturell yoghurt eller en fryst morot är ett bättre godis en varm dag." },
  { id: "raw-fish", name: "Rå fisk", safety: "care", body: "Medför risk för parasiter och bakterier, och en del rå fisk stör vitaminupptaget. Kokt och benfri är det säkrare alternativet." },
  { id: "liver", name: "Lever", safety: "care", body: "Ett utmärkt träningsgodis, men väldigt rikt på vitamin A. Håll det till små mängder snarare än ett regelbundet mål." },
  { id: "eggs-raw", name: "Rått ägg", safety: "care", body: "Risk för salmonella, och rå äggvita kan störa ett B-vitamin. Kokt, vanligt ägg är det enkla alternativet." },
  { id: "honey", name: "Honung", safety: "care", body: "Inte giftigt, bara socker. En liten mängd då och då är okej för friska vuxna hundar; hoppa över det för diabeteshundar och valpar." },
  { id: "coconut", name: "Kokosnöt", safety: "care", body: "Små mängder fruktkött eller olja är inte skadliga, men det är fettrikt och kan ge lösare avföring." },
  { id: "spinach", name: "Spenat & grönkål", safety: "care", body: "Okej i små mängder som en del av ett mål. Stora mängder är inte idealiskt för hundar med njurproblem." },
  { id: "table-scraps", name: "Matrester från bordet", safety: "care", body: "Problemet är sällan en enda tugga — det är såserna, löken, saltet och fettet, och kalorierna ingen räknar. Håll godis till ungefär en tiondel av dagens mat." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Morot", safety: "safe", body: "Knaprig, billig och kalorisnål. En kall morot är bra att tugga på för en valp som tandas.", serving: "Råa stavar eller kokta bitar" },
  { id: "apple", name: "Äpple", safety: "safe", body: "Sött, knapprigt och populärt. Ta bort kärnhus och kärnor.", serving: "Några skivor" },
  { id: "banana", name: "Banan", safety: "safe", body: "Okej i små mängder. Sockerrik, så inte varje dag.", serving: "Ett par skivor banan" },
  { id: "blueberries", name: "Blåbär", safety: "safe", body: "Små, lätta att dela ut, och de flesta hundar älskar dem.", serving: "En liten handfull" },
  { id: "watermelon", name: "Vattenmelon", safety: "safe", body: "Uppfriskande en varm dag. Ta bort kärnor och skal.", serving: "Några tärningar, eller frysta" },
  { id: "strawberries", name: "Jordgubbar", safety: "safe", body: "Okej färska, i små mängder. Inget från burk eller i sirap.", serving: "En eller två" },
  { id: "pumpkin", name: "Ren pumpa", safety: "safe", body: "Vanlig kokt eller burkpumpa (inte pajfyllning) är skonsam för magen och föreslås ofta för att fastare lös avföring.", serving: "En sked eller två" },
  { id: "green-beans", name: "Gröna bönor", safety: "safe", body: "Mättande och kalorisnåla — verkligen användbart om din hund bantar.", serving: "En liten handfull, rena" },
  { id: "cucumber", name: "Gurka", safety: "safe", body: "Mest vatten. Ett bra tilltugg i varmt väder.", serving: "Några skivor" },
  { id: "chicken", name: "Vanlig kokt kyckling", safety: "safe", body: "Utan skinn, ben och krydda. Ett av de bästa träningsgodisen som finns.", serving: "Små bitar" },
  { id: "turkey", name: "Vanlig kokt kalkon", safety: "safe", body: "Samma regler som kyckling: inget skinn, inga ben, ingen krydda, ingen sås.", serving: "Små bitar" },
  { id: "fish-cooked", name: "Kokt vit fisk & lax", safety: "safe", body: "Väl genomkokt och noggrant benfri. En bra källa till protein och omega-3.", serving: "En liten portion" },
  { id: "rice", name: "Vanligt kokt ris", safety: "safe", body: "Milt och lättsmält — ofta något en veterinär föreslår efter magbesvär.", serving: "Blandat i ett mål" },
  { id: "egg", name: "Kokt ägg", safety: "safe", body: "Äggröra utan smör eller salt, eller hårdkokt.", serving: "Del av ett ägg, beroende på din hunds storlek" },
  { id: "sweet-potato", name: "Kokt sötpotatis", safety: "safe", body: "Ren och kokt. De flesta hundar är mycket förtjusta.", serving: "En liten mängd, utan smör" },
  { id: "peas", name: "Ärtor", safety: "safe", body: "Färska eller frysta, rena. Undvik ärtor från burk — för mycket salt.", serving: "En sked" },
  { id: "broccoli", name: "Broccoli", safety: "safe", body: "Okej i små mängder. Mycket kan ge gaser och magirritation.", serving: "Ett par små buketter" },
  { id: "courgette", name: "Zucchini", safety: "safe", body: "Kalorisnål och skonsam för magen, rå eller ren kokt.", serving: "Några bitar" },
  { id: "celery", name: "Blekselleri", safety: "safe", body: "Knaprig och väldigt kalorisnål. Hacka den fint.", serving: "Små hackade bitar" },
  { id: "pear", name: "Päron", safety: "safe", body: "Okej utan kärnhus och kärnor.", serving: "Några bitar" },
  { id: "melon", name: "Cantaloupemelon", safety: "safe", body: "Sött och vätskande. Ta bort skal och kärnor.", serving: "Några tärningar" },
  { id: "mango", name: "Mango", safety: "safe", body: "Skalad, kärnan borttagen. Sockerrik, så håll det litet.", serving: "Ett par bitar" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Endast färsk, skal och kärna borttagna. Inte den sockrade från burk.", serving: "En liten bit" },
  { id: "oats", name: "Vanlig kokt havregryn", safety: "safe", body: "Ren gröt gjord på vatten. Inget socker, inga sötningsmedel, ingen mjölk.", serving: "En sked" },
  { id: "sardines", name: "Sardiner i vatten", safety: "safe", body: "På burk i vatten, inte olja eller lag. En bra källa till omega-3.", serving: "Del av en burk, då och då" },
  { id: "cauliflower", name: "Blomkål", safety: "safe", body: "Ren och i små mängder. Kan ge gaser, precis som för oss.", serving: "En liten bukett" },
  { id: "lettuce", name: "Sallad", safety: "safe", body: "Ofarlig och mest vatten. Inte spännande, men okej.", serving: "Lite, hackad" },
  { id: "beetroot", name: "Kokt rödbeta", safety: "safe", body: "Ren kokt rödbeta är okej i små mängder — inte den inlagda sorten.", serving: "En liten bit" },
];

export const nutritionSectionsSe = [
  {
    title: "Läs innehållsförteckningen, inte förpackningen",
    body: "Framsidan av påsen är marknadsföring. Det som betyder något är ett påstående om att fodret är komplett och balanserat för din hunds livsstadium, och en foderrekommendation du faktiskt kan följa.",
    points: [
      "\"Helfoder\" betyder att det kan ges ensamt. \"Kompletteringsfoder\" betyder att det inte kan det",
      "Kolla att det är för rätt livsstadium — valp, vuxen eller alla livsstadier",
      "Foderrekommendationer är en utgångspunkt, inte en regel. Anpassa efter din hund",
      "Märken med veterinärer och nutritionister anställda, som kör foderstudier, är ett säkrare val",
    ],
  },
  {
    title: "Hur mycket, egentligen",
    body: "Varje rekommendation på varje påse är ett genomsnitt. Två hundar med samma vikt kan behöva märkbart olika mängder, och det ärliga svaret är att mata, observera och justera var några veckor.",
    points: [
      "Väg fodret istället för att använda en mätskopa — mätskopor blir opålitliga",
      "Räkna med godis och tuggben. De summerar snabbare än man tror",
      "Kolla hullet varje månad och justera med ungefär 10 % i taget",
      "Kastrerade hundar behöver ofta lite mindre än tidigare",
    ],
  },
  {
    title: "Hur ofta",
    body: "Valpar behöver täta, små måltider; vuxna klarar sig bra med två. Att dela dagens foder på två måltider passar de flesta hundars rytm bättre än en stor skål.",
    points: [
      "Under 4 månader: tre eller fyra måltider om dagen",
      "4 till 6 månader: tre måltider",
      "6 månader och uppåt: två måltider",
      "Djupbröstade hundar: undvik hård motion precis runt måltiderna",
    ],
  },
  {
    title: "Att byta foder",
    body: "Plötsliga byten ger de flesta hundar magbesvär. Ta ungefär en vecka på dig.",
    points: [
      "Dag 1–2: en fjärdedel nytt, tre fjärdedelar gammalt",
      "Dag 3–4: hälften och hälften",
      "Dag 5–6: tre fjärdedelar nytt",
      "Dag 7: helt nytt foder",
      "Blir avföringen lös, sakta ner istället för att fortsätta",
    ],
  },
  {
    title: "Vatten",
    body: "Färskt vatten, alltid tillgängligt, i en ren skål. Det låter självklart, och det är ändå det som oftast glöms bort på varma dagar och långa resor.",
  },
  {
    title: "Rå- och hemlagad mat",
    body: "Båda kan göras bra, och båda är lätta att göra fel. Särskilt hemlagad mat är väldigt ofta obalanserad om den inte har sammanställts av en veterinärnutritionist.",
    points: [
      "Råfoder innebär en bakteriell risk för din hund och ditt hushåll",
      "Hemlagat behöver ett riktigt recept och tillskott för att vara komplett",
      "Prata med din veterinär innan du byter, särskilt för valpar och äldre hundar",
      "Det här är ett verkligt beslut att fatta tillsammans med en fackperson, inte utifrån ett forum",
    ],
  },
] as const;
