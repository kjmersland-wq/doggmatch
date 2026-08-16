import type { FoodItem } from "./types";

const poisonLine = {
  label: "Veiledning om giftig mat for hunder",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Et rolig, søkbart svar på "kan hunden min spise dette?".
 * `avoid` = kjent å være skadelig. `care` = greit i noen situasjoner, med forbehold.
 * Ingenting her erstatter en telefon til veterinæren hvis en hund allerede har spist noe.
 */
export const foodItemsNo: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Sjokolade", safety: "avoid", body: "Inneholder teobromin, som hunder ikke klarer å bryte ned slik vi gjør. Mørk sjokolade og bakesjokolade er verst, men melkesjokolade teller også.", warning: "Ring veterinæren med en gang og oppgi type, mengde og omtrent når det skjedde. Ikke vent på symptomer.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / bjørkesukker", safety: "avoid", body: "Et søtningsstoff i sukkerfri tyggegummi, pastiller, enkelte peanøttsmørtyper, bakverk og noen medisiner. Svært små mengder kan gi et farlig blodsukkerfall.", warning: "Dette er akutt. Ring veterinæren umiddelbart.", source: poisonLine },
  { id: "grapes", name: "Druer, rosiner, sultanas, korinter", safety: "avoid", body: "Kan gi nyresvikt hos enkelte hunder, og ingen kan forutsi hvilke hunder eller hvilken mengde. Dette gjelder også julekaker, fruktkake og granola.", warning: "Enhver mengde krever telefon til veterinæren samme dag.", source: poisonLine },
  { id: "onion", name: "Løk, hvitløk, purre, gressløk", safety: "avoid", body: "Hele løkfamilien skader de røde blodcellene, rå, kokt, tørket eller som pulver. Vær obs på saus, buljong, karri og rester.", warning: "Tegn kan ta dager før de vises. Ring veterinæren.", source: poisonLine },
  { id: "macadamia", name: "Macadamianøtter", safety: "avoid", body: "Gir svakhet, ustøhet, skjelvinger og oppkast, ofte innen tolv timer.", warning: "Ring veterinæren.", source: poisonLine },
  { id: "alcohol", name: "Alkohol", safety: "avoid", body: "Hunder er langt mer følsomme enn mennesker. Inkluderer ubakt deig og enkelte desserter.", warning: "Ring veterinæren umiddelbart.", source: poisonLine },
  { id: "caffeine", name: "Kaffe, te, energidrikker", safety: "avoid", body: "Koffein gir rask hjerterytme, uro og skjelvinger. Kaffegrut og teposer i søppelbøtta er en vanlig synder.", warning: "Ring veterinæren.", source: poisonLine },
  { id: "dough", name: "Rå brøddeig", safety: "avoid", body: "Hever i den varme magesekken, og gjæren produserer alkohol. Smertefullt og reelt farlig.", warning: "Dette er akutt.", source: poisonLine },
  { id: "cooked-bones", name: "Kokte bein", safety: "avoid", body: "Splintres i skarpe biter som kan skade eller tette tarmen. Dette gjelder kylling-, kotelett- og ribbein.", warning: "Har hunden spist et, ring veterinæren for råd." },
  { id: "corn-cob", name: "Maiskolbe", safety: "avoid", body: "Kornene er greie; kolben er en av de vanligste årsakene til kirurgisk tarmtetting hos hunder.", warning: "Ring veterinæren samme dag." },
  { id: "mouldy", name: "Muggen mat og kompost", safety: "avoid", body: "Mugg kan produsere gifter som gir kraftige skjelvinger og krampeanfall. Hold komposten godt lukket.", warning: "Ring veterinæren umiddelbart.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Steiner fra fersken, plomme og kirsebær", safety: "avoid", body: "Selve fruktkjøttet er greit i små mengder, men steinene er ikke det — de er en kvelnings- og tettingsrisiko, og inneholder cyanidforbindelser." },
  { id: "mushrooms-wild", name: "Ville sopper", safety: "avoid", body: "Noen er dødelige, og å skille dem fra hverandre ute i naturen er ikke realistisk. Butikkjøpt sopp i et måltid er en helt annen sak.", warning: "Spiser hunden en villsopp, ring veterinæren og ta gjerne bilde av den." },
  { id: "salt", name: "Svært salt mat", safety: "avoid", body: "Store mengder salt gir alvorlige problemer. Saltdeigspynt og å svelge mye sjøvann er de vanligste årsakene." },
  { id: "rhubarb", name: "Rabarbrablader", safety: "avoid", body: "Bladene er giftige. Verdt å vite hvis du dyrker rabarbra i hagen." },
  { id: "nutmeg", name: "Muskatnøtt", safety: "avoid", body: "I større mengder gir det desorientering og skjelvinger. Et lite dryss på noe er som regel ikke en krise, men ikke tilby det." },
  { id: "hops", name: "Humle", safety: "avoid", body: "Relevant hvis noen i huset brygger øl. Gir en farlig kroppstemperaturøkning." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Peanøttsmør", safety: "care", body: "Greit som en sjelden godbit — men bare hvis det ikke inneholder xylitol eller bjørkesukker. Les innholdslisten hver eneste gang, selv på et merke du kjenner.", serving: "En teskje smurt på en slikkematte", warning: "Kun uten xylitol." },
  { id: "cheese", name: "Ost", safety: "care", body: "Utmerket treningsvaluta, men fet og salt. Mange hunder tåler melkeprodukter dårlig.", serving: "Erte-store biter, ikke en skive" },
  { id: "yoghurt", name: "Naturell yoghurt", safety: "care", body: "Små mengder naturell, usøtet yoghurt passer for enkelte hunder. Aldri noe søtet — sjekk for xylitol.", serving: "En skje" },
  { id: "milk", name: "Melk", safety: "care", body: "Mange voksne hunder tåler ikke laktose, og det viser seg som regel som urolig mage. Vann er et bedre valg." },
  { id: "bread", name: "Brød", safety: "care", body: "Vanlig bakt brød er ikke skadelig, men det er tomme kalorier. Unngå alt med rosiner, løk, hvitløk eller frø." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Naturell, luftpoppet og usaltet er greit som en sjelden snack. Smør, salt og søte belegg er ikke det. Upoppede kjerner kan knekke tenner." },
  { id: "ham", name: "Skinke, bacon og bearbeidet kjøtt", safety: "care", body: "Svært salt og fett. Fettrik mat er en kjent utløser for bukspyttkjertelbetennelse, som er smertefullt og alvorlig." },
  { id: "avocado", name: "Avokado", safety: "care", body: "Fruktkjøttet er et langt mindre problem for hunder enn for fugler, men det er fettrikt, og steinen er en reell tettingsrisiko. Enklest å bare hoppe over." },
  { id: "tomato", name: "Tomat", safety: "care", body: "Modent tomatkjøtt er greit i små mengder. Grønne tomater, blader og stilker er det ikke." },
  { id: "nuts", name: "Nøtter (generelt)", safety: "care", body: "Fettrikt, lett å sette i halsen på, ofte saltet. Macadamianøtter er giftige. Best å unngå det som vane." },
  { id: "raw-potato", name: "Rå potet", safety: "care", body: "Grønne eller spirende poteter er giftige. Vanlig kokt potet uten smør eller salt er greit av og til." },
  { id: "sweetcorn", name: "Maiskorn", safety: "care", body: "Korn løsnet fra kolben er ufarlig i små mengder. Kolben er faren." },
  { id: "citrus", name: "Appelsin og sitrusfrukt", safety: "care", body: "En liten bit skrelt appelsin skader ikke, selv om de fleste hunder ikke er så begeistret. Unngå skall, hinner og kjerner." },
  { id: "ice-cream", name: "Iskrem", safety: "care", body: "Sukkerholdig, ofte melkerik, og inneholder av og til xylitol eller sjokolade. Frossen naturell yoghurt eller en frossen gulrot er en bedre godbit på en varm dag." },
  { id: "raw-fish", name: "Rå fisk", safety: "care", body: "Innebærer risiko for parasitter og bakterier, og enkelte rå fisketyper hemmer opptak av vitaminer. Kokt og benfri er den tryggere varianten." },
  { id: "liver", name: "Lever", safety: "care", body: "En strålende treningsgodbit, men svært rik på vitamin A. Hold det til små mengder framfor et fast måltid." },
  { id: "eggs-raw", name: "Rått egg", safety: "care", body: "Fare for salmonella, og rå eggehvite kan hemme opptaket av et B-vitamin. Kokt, vanlig egg er det enkle alternativet." },
  { id: "honey", name: "Honning", safety: "care", body: "Ikke giftig, bare sukker. En liten smule nå og da er greit for friske voksne hunder; unngå det for diabetikere og valper." },
  { id: "coconut", name: "Kokosnøtt", safety: "care", body: "Små mengder kokoskjøtt eller -olje er ikke skadelig, men det er fettrikt og kan gi løsere avføring." },
  { id: "spinach", name: "Spinat og grønnkål", safety: "care", body: "Greit i små mengder som en del av et måltid. Store mengder er ikke ideelt for hunder med nyreproblemer." },
  { id: "table-scraps", name: "Matrester fra bordet", safety: "care", body: "Problemet er sjelden én munnfull — det er sausene, løken, saltet og fettet, og kaloriene ingen teller. Hold godbiter til omtrent en tidel av dagens matmengde." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Gulrot", safety: "safe", body: "Sprø, billig og lav på kalorier. En kald gulrot er en fin ting for en valp med tannkløe å gnage på.", serving: "Rå staver eller kokte biter" },
  { id: "apple", name: "Eple", safety: "safe", body: "Søtt, sprøtt og populært. Fjern kjernehus og kjerner.", serving: "Noen skiver" },
  { id: "banana", name: "Banan", safety: "safe", body: "Greit i små mengder. Sukkerholdig, så ikke hver dag.", serving: "Et par bananskiver" },
  { id: "blueberries", name: "Blåbær", safety: "safe", body: "Små, lette å dele ut, og de fleste hunder elsker dem.", serving: "En liten håndfull" },
  { id: "watermelon", name: "Vannmelon", safety: "safe", body: "Forfriskende på en varm dag. Fjern kjerner og skall.", serving: "Noen terninger, eller frosset" },
  { id: "strawberries", name: "Jordbær", safety: "safe", body: "Greit ferskt, i små mengder. Ikke noe fra boks eller i sirup.", serving: "En eller to" },
  { id: "pumpkin", name: "Vanlig gresskar", safety: "safe", body: "Vanlig kokt eller hermetisert gresskar (ikke paifyll) er skånsomt for magen og brukes ofte for å fastne løs avføring.", serving: "En skje eller to" },
  { id: "green-beans", name: "Grønne bønner", safety: "safe", body: "Mettende og lav på kalorier — genuint nyttig hvis hunden går på diett.", serving: "En liten håndfull, naturell" },
  { id: "cucumber", name: "Agurk", safety: "safe", body: "Mest vann. En god snack i varmt vær.", serving: "Noen skiver" },
  { id: "chicken", name: "Vanlig kokt kylling", safety: "safe", body: "Uten skinn, ben og krydder. En av de beste treningsgodbitene som finnes.", serving: "Små biter" },
  { id: "turkey", name: "Vanlig kokt kalkun", safety: "safe", body: "Samme regler som kylling: ikke skinn, ikke ben, ikke krydder, ikke saus.", serving: "Små biter" },
  { id: "fish-cooked", name: "Kokt hvit fisk og laks", safety: "safe", body: "Godt gjennomkokt og grundig avbenet. En god kilde til protein og omega-3.", serving: "En liten porsjon" },
  { id: "rice", name: "Vanlig kokt ris", safety: "safe", body: "Mild og lett fordøyelig — ofte det veterinæren foreslår etter en urolig mage.", serving: "Blandet inn i et måltid" },
  { id: "egg", name: "Kokt egg", safety: "safe", body: "Eltet uten smør eller salt, eller hardkokt.", serving: "Deler av et egg, avhengig av hundens størrelse" },
  { id: "sweet-potato", name: "Kokt søtpotet", safety: "safe", body: "Vanlig og kokt. De fleste hunder er veldig glade i det.", serving: "En liten mengde, uten smør" },
  { id: "peas", name: "Erter", safety: "safe", body: "Ferske eller frosne, naturelle. Unngå erter fra boks — for mye salt.", serving: "En skje" },
  { id: "broccoli", name: "Brokkoli", safety: "safe", body: "Greit i små mengder. Mye kan gi luftplager og magerimhet.", serving: "Et par små buketter" },
  { id: "courgette", name: "Squash", safety: "safe", body: "Lav på kalorier og skånsomt for magen, rå eller kokt uten tilsetninger.", serving: "Noen biter" },
  { id: "celery", name: "Selleri", safety: "safe", body: "Sprøtt og svært lavt på kalorier. Kutt det smått.", serving: "Små oppkuttede biter" },
  { id: "pear", name: "Pære", safety: "safe", body: "Greit uten kjernehus og kjerner.", serving: "Noen biter" },
  { id: "melon", name: "Kantalupmelon", safety: "safe", body: "Søtt og væskerikt. Fjern skall og kjerner.", serving: "Noen terninger" },
  { id: "mango", name: "Mango", safety: "safe", body: "Skrelt, uten stein. Sukkerholdig, så hold det lite.", serving: "Et par biter" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Kun fersk, uten skall og kjerne. Ikke den sukkerete varianten fra boks.", serving: "En liten bit" },
  { id: "oats", name: "Vanlig kokt havre", safety: "safe", body: "Vanlig grøt laget med vann. Uten sukker, søtningsstoff eller melk.", serving: "En skje" },
  { id: "sardines", name: "Sardiner i vann", safety: "safe", body: "Hermetisert i vann, ikke olje eller lake. En god kilde til omega-3.", serving: "Deler av en boks, av og til" },
  { id: "cauliflower", name: "Blomkål", safety: "safe", body: "Naturell og i små mengder. Kan gi luftplager, akkurat som hos oss.", serving: "En liten bukett" },
  { id: "lettuce", name: "Salat", safety: "safe", body: "Ufarlig og stort sett vann. Ikke spennende, men greit.", serving: "Litt, oppkuttet" },
  { id: "beetroot", name: "Kokt rødbete", safety: "safe", body: "Vanlig kokt rødbete er greit i små mengder — ikke den syltede varianten.", serving: "En liten bit" },
];

export const nutritionSectionsNo = [
  {
    title: "Les innholdslisten, ikke emballasjen",
    body: "Forsiden av posen er markedsføring. Det som betyr noe, er en erklæring om at fôret er komplett og balansert for hundens livsfase, og en fôringsguide du faktisk kan følge.",
    points: [
      "\"Komplett\" betyr at det kan gis alene. \"Supplerende\" betyr at det ikke kan det",
      "Sjekk at det passer riktig livsfase — valp, voksen eller alle livsfaser",
      "Fôringsguider er et utgangspunkt, ikke en regel. Juster etter hunden din",
      "Merker med veterinærer og ernæringsfysiologer ansatt, som gjennomfører fôringsstudier, er et tryggere valg",
    ],
  },
  {
    title: "Hvor mye, egentlig",
    body: "Hver guide på hver pose er et gjennomsnitt. To hunder med samme vekt kan trenge tydelig forskjellige mengder, og det ærlige svaret er å fôre, observere og justere hver par uker.",
    points: [
      "Vei maten fremfor å bruke en målekopp — målekopper sklir ut over tid",
      "Tell godbiter og tyggesaker. De legger seg raskere på enn de fleste tror",
      "Sjekk holdstatus månedlig og juster med rundt 10 % om gangen",
      "Kastrerte hunder trenger ofte litt mindre enn før",
    ],
  },
  {
    title: "Hvor ofte",
    body: "Valper trenger hyppige, små måltider; voksne klarer seg fint med to. Å dele dagens mat i to måltider passer de fleste hunders rutine bedre enn én stor bolle.",
    points: [
      "Under 4 måneder: tre til fire måltider om dagen",
      "4 til 6 måneder: tre måltider",
      "6 måneder og oppover: to måltider",
      "Dypbrystede hunder: unngå hard aktivitet like før eller etter måltider",
    ],
  },
  {
    title: "Bytte fôr",
    body: "Plutselige endringer gir de fleste hunder urolig mage. Bruk omtrent en uke på overgangen.",
    points: [
      "Dag 1–2: en fjerdedel nytt, tre fjerdedeler gammelt",
      "Dag 3–4: halvt om halvt",
      "Dag 5–6: tre fjerdedeler nytt",
      "Dag 7: kun nytt fôr",
      "Blir avføringen løs, gå saktere fram i stedet for å presse på",
    ],
  },
  {
    title: "Vann",
    body: "Ferskt vann, alltid tilgjengelig, i en ren bolle. Det høres opplagt ut, og det er likevel det som oftest glemmes på varme dager og lange reiser.",
  },
  {
    title: "Rått og hjemmelaget",
    body: "Begge deler kan gjøres bra, og begge deler er lett å gjøre feil. Hjemmelagede dietter er spesielt ofte ubalanserte med mindre en veterinær med ernæringskompetanse har satt dem sammen.",
    points: [
      "Råfôring innebærer bakteriell risiko for hunden og resten av husstanden",
      "Hjemmelaget mat trenger en skikkelig oppskrift og tilskudd for å være komplett",
      "Snakk med veterinæren før du bytter, spesielt for valper og eldre hunder",
      "Dette er en beslutning å ta sammen med en fagperson, ikke ut fra et forum",
    ],
  },
] as const;
