import type { FoodItem } from "./types";

const poisonLine = {
  label: "Vejledning om giftige fødevarer til hunde",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Et roligt, søgbart svar på "må min hund spise det her?".
 * `avoid` = kendt skadeligt. `care` = fint i visse situationer, med forbehold.
 * Intet her erstatter et opkald til dyrlægen, hvis hunden allerede har spist noget.
 */
export const foodItemsDk: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Chokolade", safety: "avoid", body: "Indeholder theobromin, som hunde ikke kan nedbryde som os. Mørk chokolade og bagechokolade er værst; mælkechokolade tæller stadig.", warning: "Ring til din dyrlæge med det samme med typen, mængden og cirka hvornår. Vent ikke på symptomer.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / birkesukker", safety: "avoid", body: "Et sødemiddel i sukkerfri tyggegummi, pastiller, nogle jordnøddesmør, bagværk og visse lægemidler. Meget små mængder kan give et farligt blodsukkerfald.", warning: "Dette er et nødstilfælde. Ring straks til en dyrlæge.", source: poisonLine },
  { id: "grapes", name: "Vindruer, rosiner, sultanas, korender", safety: "avoid", body: "Kan give nyresvigt hos nogle hunde, og ingen kan forudsige hvilke hunde eller hvilken mængde. Det gælder også julekage, frugtkage og granola.", warning: "Enhver mængde er et opkald til dyrlægen samme dag.", source: poisonLine },
  { id: "onion", name: "Løg, hvidløg, porrer, purløg", safety: "avoid", body: "Hele løgfamilien skader røde blodlegemer, rå, kogt, tørret eller pulveriseret. Pas på med sovs, bouillon, karry og rester.", warning: "Tegn kan først vise sig efter dage. Ring til din dyrlæge.", source: poisonLine },
  { id: "macadamia", name: "Macadamianødder", safety: "avoid", body: "Giver svaghed, usikker gang, rysten og opkastning, ofte inden for tolv timer.", warning: "Ring til din dyrlæge.", source: poisonLine },
  { id: "alcohol", name: "Alkohol", safety: "avoid", body: "Hunde er langt mere følsomme end mennesker. Gælder også ubagt dej og visse desserter.", warning: "Ring straks til en dyrlæge.", source: poisonLine },
  { id: "caffeine", name: "Kaffe, te, energidrikke", safety: "avoid", body: "Koffein giver hjertebanken, uro og rysten. Kaffegrums og teposer i skraldespanden er en almindelig årsag.", warning: "Ring til din dyrlæge.", source: poisonLine },
  { id: "dough", name: "Rå brøddej", safety: "avoid", body: "Hæver i den varme mave, og gæren danner alkohol. Smertefuldt og virkelig farligt.", warning: "Dette er et nødstilfælde.", source: poisonLine },
  { id: "cooked-bones", name: "Kogte ben", safety: "avoid", body: "Splintrer i skarpe stykker, der kan skade eller blokere tarmen. Det gælder også kyllinge-, kotelet- og ribbenben.", warning: "Har din hund spist et, så ring til din dyrlæge for råd." },
  { id: "corn-cob", name: "Majskolbe", safety: "avoid", body: "Kernerne er fine; kolben er en af de mest almindelige årsager til en kirurgisk blokering hos hunde.", warning: "Ring til din dyrlæge samme dag." },
  { id: "mouldy", name: "Skimlet mad & kompost", safety: "avoid", body: "Skimmel kan danne toksiner, der giver kraftig rysten og krampeanfald. Hold kompostbeholdere ordentligt lukket.", warning: "Ring straks til en dyrlæge.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Fersken-, blomme- og kirsebærsten", safety: "avoid", body: "Frugtkødet er fint i små mængder, stenene er det ikke — risiko for kvælning og blokering, og de indeholder cyanidforbindelser." },
  { id: "mushrooms-wild", name: "Vilde svampe", safety: "avoid", body: "Nogle er dødelige, og det er ikke realistisk at kende forskel på dem ude i naturen. Købte svampe i et måltid er en anden sag.", warning: "Spiser din hund en vild svamp, så ring til en dyrlæge og tag et billede, hvis du kan." },
  { id: "salt", name: "Meget salt mad", safety: "avoid", body: "Store mængder salt giver alvorlige problemer. Saltdejspynt og at sluge meget havvand er de sædvanlige årsager." },
  { id: "rhubarb", name: "Rabarberblade", safety: "avoid", body: "Bladene er giftige. Værd at vide, hvis du dyrker rabarber i haven." },
  { id: "nutmeg", name: "Muskatnød", safety: "avoid", body: "I store mængder giver den desorientering og rysten. Et drys på noget er sjældent en krise, men tilbyd det ikke." },
  { id: "hops", name: "Humle", safety: "avoid", body: "Relevant, hvis nogen i huset brygger øl. Giver en farlig stigning i kropstemperaturen." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Jordnøddesmør", safety: "care", body: "Fint som en sjælden godbid — men kun hvis det ikke indeholder xylitol eller birkesukker. Læs varedeklarationen hver gang, også på et mærke du kender.", serving: "En teskefuld smurt på en slikkemåtte", warning: "Kun uden xylitol." },
  { id: "cheese", name: "Ost", safety: "care", body: "Fremragende træningsvaluta, men fed og salt. Mange hunde tåler ikke mejeriprodukter godt.", serving: "Ærtestore stykker, ikke en skive" },
  { id: "yoghurt", name: "Naturel yoghurt", safety: "care", body: "Små mængder naturel, usødet yoghurt passer til nogle hunde. Aldrig noget sødet — tjek for xylitol.", serving: "En ske" },
  { id: "milk", name: "Mælk", safety: "care", body: "Mange voksne hunde er laktoseintolerante, og det viser sig som regel som en dårlig mave. Vand er en bedre idé." },
  { id: "bread", name: "Brød", safety: "care", body: "Almindeligt bagt brød er ikke skadeligt, men det er tomme kalorier. Undgå alt med rosiner, løg, hvidløg eller frø." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Almindeligt, luftpoppet og usaltet er fint som en sjælden snack. Smør, salt og søde belægninger er det ikke. Upoppede korn kan ødelægge tænder." },
  { id: "ham", name: "Skinke, bacon & forarbejdet kød", safety: "care", body: "Meget salt og fedt. Fed mad er en velkendt udløser af bugspytkirtelbetændelse, som er smertefuld og alvorlig." },
  { id: "avocado", name: "Avocado", safety: "care", body: "Frugtkødet er langt mindre problematisk for hunde end for fugle, men det er fedtrigt, og stenen er en reel risiko for blokering. Nemmest bare at springe over." },
  { id: "tomato", name: "Tomat", safety: "care", body: "Modent tomatkød er fint i små mængder. Grønne tomater, blade og stilke er det ikke." },
  { id: "nuts", name: "Nødder (generelt)", safety: "care", body: "Fedtrige, nemme at sætte i halsen på, ofte saltede. Macadamianødder er giftige. Bedst at undgå som vane." },
  { id: "raw-potato", name: "Rå kartoffel", safety: "care", body: "Grønne eller spirende kartofler er giftige. Almindelig kogt kartoffel uden smør eller salt er fint en gang imellem." },
  { id: "sweetcorn", name: "Majskerner", safety: "care", body: "Kerner uden kolbe er harmløse i små mængder. Kolben er faren." },
  { id: "citrus", name: "Appelsiner & citrusfrugt", safety: "care", body: "Et lille stykke skrællet appelsin gør ikke skade, selvom de fleste hunde ikke er vilde med det. Spring skræl, hinder og kerner over." },
  { id: "ice-cream", name: "Is", safety: "care", body: "Sukkerholdig, ofte mejeririg, og indeholder nogle gange xylitol eller chokolade. Frossen naturel yoghurt eller en frossen gulerod er en bedre godbid på en varm dag." },
  { id: "raw-fish", name: "Rå fisk", safety: "care", body: "Medfører risiko for parasitter og bakterier, og noget rå fisk hæmmer optagelsen af vitaminer. Kogt og benfri er den sikrere version." },
  { id: "liver", name: "Lever", safety: "care", body: "En fantastisk træningsgodbid, men meget rig på A-vitamin. Hold det til små mængder frem for et fast måltid." },
  { id: "eggs-raw", name: "Rå æg", safety: "care", body: "Risiko for salmonella, og rå æggehvide kan hæmme et B-vitamin. Kogt, almindeligt æg er det nemme alternativ." },
  { id: "honey", name: "Honning", safety: "care", body: "Ikke giftigt, bare sukker. En lille smule en gang imellem er fint for raske voksne hunde; spring det over til diabetiske hunde og hvalpe." },
  { id: "coconut", name: "Kokosnød", safety: "care", body: "Små mængder frugtkød eller olie er ikke skadelige, men det er fedtholdigt og kan give løs afføring." },
  { id: "spinach", name: "Spinat & grønkål", safety: "care", body: "Fint i små mængder som en del af et måltid. Store mængder er ikke ideelt for hunde med nyreproblemer." },
  { id: "table-scraps", name: "Madrester fra bordet", safety: "care", body: "Problemet er sjældent én mundfuld — det er saucerne, løget, saltet og fedtet, og de kalorier ingen tæller. Hold godbidder til omkring en tiendedel af dagens mad." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Gulerod", safety: "safe", body: "Sprød, billig og kalorielet. En kold gulerod er godt at gnave i for en hvalp, der er ved at få tænder.", serving: "Rå stave eller kogte stykker" },
  { id: "apple", name: "Æble", safety: "safe", body: "Sødt, sprødt og populært. Fjern kernehus og kerner.", serving: "Nogle skiver" },
  { id: "banana", name: "Banan", safety: "safe", body: "Fint i små mængder. Sukkerholdig, så ikke hver dag.", serving: "Et par skiver banan" },
  { id: "blueberries", name: "Blåbær", safety: "safe", body: "Små, nemme at give, og de fleste hunde elsker dem.", serving: "En lille håndfuld" },
  { id: "watermelon", name: "Vandmelon", safety: "safe", body: "Forfriskende på en varm dag. Fjern kerner og skræl.", serving: "Nogle tern, eller frossen" },
  { id: "strawberries", name: "Jordbær", safety: "safe", body: "Fint friske, i små mængder. Intet fra dåse eller i sirup.", serving: "Et eller to" },
  { id: "pumpkin", name: "Almindelig græskar", safety: "safe", body: "Almindeligt kogt eller dåsegræskar (ikke tærtefyld) er skånsomt for maven og bliver ofte anbefalet til at faste løs afføring.", serving: "En ske eller to" },
  { id: "green-beans", name: "Grønne bønner", safety: "safe", body: "Mættende og kalorielette — virkelig nyttige, hvis din hund er på diæt.", serving: "En lille håndfuld, uden tilsætning" },
  { id: "cucumber", name: "Agurk", safety: "safe", body: "Mest vand. God til varmt vejr.", serving: "Nogle skiver" },
  { id: "chicken", name: "Almindelig kogt kylling", safety: "safe", body: "Uden skind, ben og krydderi. En af de bedste træningsgodbidder, der findes.", serving: "Små stykker" },
  { id: "turkey", name: "Almindelig kogt kalkun", safety: "safe", body: "Samme regler som kylling: intet skind, ingen ben, ingen krydderier, ingen sovs.", serving: "Små stykker" },
  { id: "fish-cooked", name: "Kogt hvid fisk & laks", safety: "safe", body: "Godt gennemkogt og grundigt renset for ben. En god kilde til protein og omega-3.", serving: "En lille portion" },
  { id: "rice", name: "Almindelig kogt ris", safety: "safe", body: "Mild og let at fordøje — ofte det en dyrlæge anbefaler efter en dårlig mave.", serving: "Blandet i et måltid" },
  { id: "egg", name: "Kogt æg", safety: "safe", body: "Røræg uden smør eller salt, eller hårdkogt.", serving: "En del af et æg, afhængigt af din hunds størrelse" },
  { id: "sweet-potato", name: "Kogt sødkartoffel", safety: "safe", body: "Almindelig og kogt. De fleste hunde er meget begejstrede.", serving: "En lille mængde, uden smør" },
  { id: "peas", name: "Ærter", safety: "safe", body: "Friske eller frosne, almindelige. Undgå ærter fra dåse — for meget salt.", serving: "En ske" },
  { id: "broccoli", name: "Broccoli", safety: "safe", body: "Fint i små mængder. Store mængder kan give luft i maven og irritation.", serving: "Et par små buketter" },
  { id: "courgette", name: "Squash", safety: "safe", body: "Kalorielet og skånsom for maven, rå eller almindeligt kogt.", serving: "Nogle stykker" },
  { id: "celery", name: "Bladselleri", safety: "safe", body: "Sprød og meget kalorielet. Skær den i små stykker.", serving: "Små hakkede stykker" },
  { id: "pear", name: "Pære", safety: "safe", body: "Fint uden kernehus og kerner.", serving: "Nogle stykker" },
  { id: "melon", name: "Cantaloupemelon", safety: "safe", body: "Sød og væskende. Fjern skræl og kerner.", serving: "Nogle tern" },
  { id: "mango", name: "Mango", safety: "safe", body: "Skrællet, sten fjernet. Sukkerholdig, så hold det til lidt.", serving: "Et par stykker" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Kun frisk, skræl og kerne fjernet. Ikke den sukrede fra dåse.", serving: "Et lille stykke" },
  { id: "oats", name: "Almindelig kogt havregryn", safety: "safe", body: "Almindelig grød lavet med vand. Ingen sukker, ingen sødemidler, ingen mælk.", serving: "En ske" },
  { id: "sardines", name: "Sardiner i vand", safety: "safe", body: "På dåse i vand, ikke olie eller lage. En god kilde til omega-3.", serving: "En del af en dåse, en gang imellem" },
  { id: "cauliflower", name: "Blomkål", safety: "safe", body: "Almindeligt og i små mængder. Kan give luft i maven, ligesom hos os.", serving: "En lille buket" },
  { id: "lettuce", name: "Salat", safety: "safe", body: "Harmløs og mest vand. Ikke spændende, men fint.", serving: "Lidt, hakket" },
  { id: "beetroot", name: "Kogt rødbede", safety: "safe", body: "Almindelig kogt rødbede er fint i små mængder — ikke den syltede slags.", serving: "Et lille stykke" },
];

export const nutritionSectionsDk = [
  {
    title: "Læs varedeklarationen, ikke emballagen",
    body: "Forsiden af posen er markedsføring. Det, der betyder noget, er en erklæring om, at foderet er fuldgyldigt og afbalanceret til din hunds livsstadie, og en fodervejledning du rent faktisk kan følge.",
    points: [
      "\"Fuldfoder\" betyder, at det kan gives alene. \"Tilskudsfoder\" betyder, at det ikke kan",
      "Tjek at det er til det rigtige livsstadie — hvalp, voksen eller alle livsstadier",
      "Fodervejledninger er et udgangspunkt, ikke en regel. Tilpas til din hund",
      "Mærker med dyrlæger og ernæringseksperter ansat, som kører fodringsforsøg, er et sikrere valg",
    ],
  },
  {
    title: "Hvor meget, i virkeligheden",
    body: "Enhver vejledning på enhver pose er et gennemsnit. To hunde med samme vægt kan have brug for mærkbart forskellige mængder, og det ærlige svar er at fodre, observere og justere hver anden uge.",
    points: [
      "Vej foderet i stedet for at bruge en måleske — måleskeer bliver upræcise",
      "Tæl godbidder og tyggeting med. De løber hurtigere op, end man tror",
      "Tjek huldet månedligt og juster med omkring 10 % ad gangen",
      "Kastrerede hunde har ofte brug for lidt mindre end før",
    ],
  },
  {
    title: "Hvor tit",
    body: "Hvalpe har brug for hyppige, små måltider; voksne klarer sig godt med to. At dele dagens foder i to måltider passer bedre til de fleste hundes rytme end én stor skål.",
    points: [
      "Under 4 måneder: tre eller fire måltider om dagen",
      "4 til 6 måneder: tre måltider",
      "6 måneder og opefter: to måltider",
      "Dybbrystede hunde: undgå hård motion lige omkring måltiderne",
    ],
  },
  {
    title: "Skift af foder",
    body: "Pludselige skift giver de fleste hunde dårlig mave. Brug omkring en uge på det.",
    points: [
      "Dag 1–2: en fjerdedel nyt, tre fjerdedele gammelt",
      "Dag 3–4: halvt og halvt",
      "Dag 5–6: tre fjerdedele nyt",
      "Dag 7: helt nyt foder",
      "Bliver afføringen løs, så sæt farten ned i stedet for at fortsætte",
    ],
  },
  {
    title: "Vand",
    body: "Frisk vand, altid tilgængeligt, i en ren skål. Det lyder indlysende, og det er stadig det, der oftest bliver glemt på varme dage og lange ture.",
  },
  {
    title: "Rå fodring og hjemmelavet mad",
    body: "Begge dele kan gøres godt, og begge dele er nemme at gøre forkert. Især hjemmelavet mad er meget ofte ubalanceret, medmindre en veterinær ernæringsekspert har sammensat den.",
    points: [
      "Rå fodring indebærer en bakteriel risiko for din hund og din husstand",
      "Hjemmelavet mad kræver en ordentlig opskrift og tilskud for at være fuldgyldig",
      "Tal med din dyrlæge før du skifter, især for hvalpe og ældre hunde",
      "Det er en reel beslutning, man tager sammen med en fagperson, ikke ud fra et forum",
    ],
  },
] as const;
