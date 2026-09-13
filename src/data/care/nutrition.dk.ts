import type { FoodItem } from "./types";

const poisonLine = {
  label: "Vejledning om giftig mad til hunde",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * Et roligt, søgbart svar på "må min hund spise dette?".
 * `avoid` = kendt for at være skadeligt. `care` = fint i visse situationer, med forbehold.
 * Intet her erstatter et opkald til dyrlægen, hvis en hund allerede har spist noget.
 */
export const foodItemsDk: FoodItem[] = [
  // ---------------------------------------------------------------- undgå
  { id: "chocolate", name: "Chokolade", safety: "avoid", body: "Indeholder theobromin, som hunde ikke kan nedbryde på samme måde som os. Mørk chokolade og bagechokolade er værst; mælkechokolade tæller stadig.", warning: "Ring straks til din dyrlæge med type, mængde og cirka hvornår. Vent ikke på symptomer.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / birkesukker", safety: "avoid", body: "Et sødemiddel i sukkerfri tyggegummi, bolsjer, nogle peanutbutters, bagværk og visse medicin. Meget små mængder kan forårsage et farligt fald i blodsukkeret.", warning: "Dette er en nødsituation. Ring straks til en dyrlæge.", source: poisonLine },
  { id: "grapes", name: "Vindruer, rosiner, sultanas, korn", safety: "avoid", body: "Kan forårsage nyresvigt hos nogle hunde, og ingen kan forudsige hvilke hunde eller hvilken mængde. Det inkluderer kødboller, frugtkage og granola.", warning: "Enhver mængde kræver et dyrlægeopkald samme dag.", source: poisonLine },
  { id: "onion", name: "Løg, hvidløg, porrer, purløg", safety: "avoid", body: "Hele allium-familien beskadiger røde blodlegemer, rå, kogt, tørret eller pulveriseret. Hold øje med sovs, bouillon, karry og rester.", warning: "Symptomer kan tage dage at vise sig. Ring til din dyrlæge.", source: poisonLine },
  { id: "macadamia", name: "Macadamianødder", safety: "avoid", body: "Forårsager svaghed, ustøhed, rysten og opkastning, ofte inden for tolv timer.", warning: "Ring til din dyrlæge.", source: poisonLine },
  { id: "alcohol", name: "Alkohol", safety: "avoid", body: "Hunde er langt mere følsomme end mennesker. Inkluderer ubagt dej og visse desserter.", warning: "Ring til en dyrlæge akut.", source: poisonLine },
  { id: "caffeine", name: "Kaffe, te, energidrikke", safety: "avoid", body: "Koffein forårsager hurtig hjertebanken, rastløshed og rysten. Kaffegrums og teposer i en skraldespand er en almindelig synder.", warning: "Ring til din dyrlæge.", source: poisonLine },
  { id: "dough", name: "Rå brøddej", safety: "avoid", body: "Hæver i den varme mave, og gæren producerer alkohol. Smertefuldt og virkelig farligt.", warning: "Dette er en nødsituation.", source: poisonLine },
  { id: "cooked-bones", name: "Kogte ben", safety: "avoid", body: "Splintrer i skarpe stykker, der kan beskadige eller blokere tarmen. Det inkluderer kyllinge-, kotelet- og ribben.", warning: "Hvis din hund har spist et, ring til din dyrlæge for rådgivning." },
  { id: "corn-cob", name: "Majskolber", safety: "avoid", body: "Kornene er fine; kolben er en af de mest almindelige årsager til kirurgisk blokering hos hunde.", warning: "Ring til din dyrlæge samme dag." },
  { id: "mouldy", name: "Muggent mad & kompost", safety: "avoid", body: "Mug kan producere toksiner, der forårsager alvorlige rysten og kramper. Hold kompostbeholdere forsvarligt lukkede.", warning: "Ring til en dyrlæge akut.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Sten fra ferskner, blommer & kirsebær", safety: "avoid", body: "Frugtkødet er fint i små mængder, stenene er det ikke – en risiko for kvælning og blokering, og de indeholder cyanidforbindelser." },
  { id: "mushrooms-wild", name: "Vilde svampe", safety: "avoid", body: "Nogle er dødelige, og det er ikke realistisk at skelne dem i felten. Købte svampe i et måltid er en anden sag.", warning: "Hvis din hund spiser en vild svamp, ring til en dyrlæge og tag et billede, hvis du kan." },
  { id: "salt", name: "Meget salt mad", safety: "avoid", body: "Store mængder salt forårsager alvorlige problemer. Saltdejdekorationer og indtagelse af meget havvand er de sædvanlige årsager." },
  { id: "rhubarb", name: "Rabarberblade", safety: "avoid", body: "Bladene er giftige. Værd at vide, hvis du dyrker det i haven." },
  { id: "nutmeg", name: "Muskatnød", safety: "avoid", body: "I større mængder forårsager det desorientering og rysten. Et drys på noget er normalt ikke en krise, men giv det ikke." },
  { id: "hops", name: "Humle", safety: "avoid", body: "Relevant, hvis nogen i husstanden brygger øl. Forårsager en farlig stigning i kropstemperaturen." },

  // ------------------------------------------------------------------ forsigtighed
  { id: "peanut-butter", name: "Peanutbutter", safety: "care", body: "Fint som en lejlighedsvis godbid – men kun hvis den ikke indeholder xylitol eller birkesukker. Læs etiketten hver eneste gang, selv på et mærke du kender.", serving: "En teskefuld smurt på en slikmåtte", warning: "Kun xylitol-fri." },
  { id: "cheese", name: "Ost", safety: "care", body: "Fremragende træningsgodbid, men fed og salt. Mange hunde tåler ikke mejeriprodukter godt.", serving: "Ærtstore stykker, ikke en skive" },
  { id: "yoghurt", name: "Naturel yoghurt", safety: "care", body: "Små mængder naturel, usødet yoghurt passer til nogle hunde. Aldrig noget sødet – tjek for xylitol.", serving: "En skefuld" },
  { id: "milk", name: "Mælk", safety: "care", body: "Mange voksne hunde er laktoseintolerante, og det viser sig normalt som mavebesvær. Vand er en bedre idé." },
  { id: "bread", name: "Brød", safety: "care", body: "Almindeligt bagt brød er ikke skadeligt, men det er tomme kalorier. Undgå alt med rosiner, løg, hvidløg eller frø." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Naturel, luftpoppet og usaltet er fint som en lejlighedsvis snack. Smør, salt og søde belægninger er det ikke. Upoppede kerner kan knække tænder." },
  { id: "ham", name: "Skinke, bacon & forarbejdet kød", safety: "care", body: "Meget salt og fedt. Fed mad er en velkendt udløser for bugspytkirtelbetændelse, som er smertefuldt og alvorligt." },
  { id: "avocado", name: "Avocado", safety: "care", body: "Frugtkødet er langt mindre et problem for hunde end for fugle, men det er fedt, og stenen er en reel blokeringrisiko. Nemmere bare at springe over." },
  { id: "tomato", name: "Tomat", safety: "care", body: "Modent tomatkød er fint i små mængder. Grønne tomater, blade og stilke er det ikke." },
  { id: "nuts", name: "Nødder (generelt)", safety: "care", body: "Højt fedtindhold, nemme at få galt i halsen, ofte saltede. Macadamianødder er giftige. Bedst at undgå som vane." },
  { id: "raw-potato", name: "Rå kartoffel", safety: "care", body: "Grønne eller spirende kartofler er giftige. Almindelig kogt kartoffel uden smør eller salt er fint lejlighedsvis." },
  { id: "sweetcorn", name: "Majskorn", safety: "care", body: "Korn fra kolben er harmløse i små mængder. Kolben er faren." },
  { id: "citrus", name: "Appelsiner & citrusfrugter", safety: "care", body: "Et lille stykke skrællet appelsin skader ikke, selvom de fleste hunde ikke er vilde med det. Spring skræl, hvidt lag og kerner over." },
  { id: "ice-cream", name: "Is", safety: "care", body: "Sukkerholdigt, ofte fedt fra mejeriprodukter, og indeholder sommetider xylitol eller chokolade. Frossen naturel yoghurt eller en frossen gulerod er en bedre godbid på en varm dag." },
  { id: "raw-fish", name: "Rå fisk", safety: "care", body: "Bærer en risiko for parasitter og bakterier, og visse rå fisk forstyrrer vitaminoptagelsen. Kogt og benfri er den sikrere version." },
  { id: "liver", name: "Lever", safety: "care", body: "En fantastisk træningsgodbid, men meget rig på vitamin A. Hold det til små mængder snarere end et regelmæssigt måltid." },
  { id: "eggs-raw", name: "Rå æg", safety: "care", body: "Salmonella-risiko, og rå æggehvider kan forstyrre et B-vitamin. Kogt, neutralt æg er det nemme alternativ." },
  { id: "honey", name: "Honning", safety: "care", body: "Ikke giftigt, bare sukker. En lille smule en gang imellem er fint for sunde voksne hunde; spring det over for diabetiske hunde og hvalpe." },
  { id: "coconut", name: "Kokosnød", safety: "care", body: "Små mængder frugtkød eller olie er ikke skadeligt, men det er fedt og kan give løs afføring." },
  { id: "spinach", name: "Spinat & grønkål", safety: "care", body: "Fint i små mængder som en del af et måltid. Store mængder er ikke ideelle for hunde med nyreproblemer." },
  { id: "table-scraps", name: "Bordrester", safety: "care", body: "Problemet er sjældent en enkelt mundfuld – det er sovserne, løg, salt og fedt, og kalorierne ingen tæller. Hold godbidder til omkring en tiendedel af dagens mad." },

  // ------------------------------------------------------------------ sikkert
  { id: "carrot", name: "Gulerod", safety: "safe", body: "Sprød, billig og kaloriefattig. En kold gulerod er en god ting for en tandfrembruds-hvalp at gnave på.", serving: "Rå stænger eller kogte stykker" },
  { id: "apple", name: "Æble", safety: "safe", body: "Sødt, sprødt og populært. Fjern kernehus og kerner.", serving: "Et par skiver" },
  { id: "banana", name: "Banan", safety: "safe", body: "Fint i små mængder. Sukkerholdigt, så ikke hver dag.", serving: "Et par skiver banan" },
  { id: "blueberries", name: "Blåbær", safety: "safe", body: "Små, nemme at give og de fleste hunde elsker dem.", serving: "En lille håndfuld" },
  { id: "watermelon", name: "Vandmelon", safety: "safe", body: "Forfriskende på en varm dag. Fjern kerner og skræl.", serving: "Et par tern, eller frossen" },
  { id: "strawberries", name: "Jordbær", safety: "safe", body: "Fint friske, i små mængder. Intet på dåse eller i sirup.", serving: "Et eller to" },
  { id: "pumpkin", name: "Naturel græskar", safety: "safe", body: "Naturel kogt eller dåsegræskar (ikke græskartærtefyld) er skånsomt for maven og foreslås ofte til at opstramme løs afføring.", serving: "En skefuld eller to" },
  { id: "green-beans", name: "Grønne bønner", safety: "safe", body: "Mættende og kaloriefattige – virkelig nyttige, hvis din hund er på slankekur.", serving: "En lille håndfuld, naturel" },
  { id: "cucumber", name: "Agurk", safety: "safe", body: "Mest vand. En god snack til varmt vejr.", serving: "Et par skiver" },
  { id: "chicken", name: "Naturel kogt kylling", safety: "safe", body: "Uden skind, uden ben og usaltet. En af de bedste træningsgodbidder der findes.", serving: "Små stykker" },
  { id: "turkey", name: "Naturel kogt kalkun", safety: "safe", body: "Samme regler som kylling: ingen skind, ingen ben, ingen krydderier, ingen sovs.", serving: "Små stykker" },
  { id: "fish-cooked", name: "Kogt hvid fisk & laks", safety: "safe", body: "Velkogt og grundigt benfri. En god kilde til protein og omega-3.", serving: "En lille portion" },
  { id: "rice", name: "Naturel kogt ris", safety: "safe", body: "Mild og let at fordøje – ofte en del af det, en dyrlæge foreslår efter mavebesvær.", serving: "Blandet i et måltid" },
  { id: "egg", name: "Kogt æg", safety: "safe", body: "Røræg uden smør eller salt, eller hårdkogt.", serving: "En del af et æg, afhængig af din hunds størrelse" },
  { id: "sweet-potato", name: "Kogt sød kartoffel", safety: "safe", body: "Naturel og kogt. De fleste hunde er meget glade for det.", serving: "En lille mængde, uden smør" },
  { id: "peas", name: "Ærter", safety: "safe", body: "Friske eller frosne, naturel. Spring dåseærter over – for meget salt.", serving: "En skefuld" },
  { id: "broccoli", name: "Broccoli", safety: "safe", body: "Fint i små mængder. Meget kan forårsage gas og maveirritation.", serving: "Et par små buketter" },
  { id: "courgette", name: "Courgette", safety: "safe", body: "Kaloriefattig og skånsom for maven, rå eller kogt naturel.", serving: "Et par stykker" },
  { id: "celery", name: "Selleri", safety: "safe", body: "Sprød og meget kaloriefattig. Hak det fint.", serving: "Små hakkede stykker" },
  { id: "pear", name: "Pære", safety: "safe", body: "Fint uden kernehus og kerner.", serving: "Et par stykker" },
  { id: "melon", name: "Cantaloupe melon", safety: "safe", body: "Sød og hydrerende. Fjern skræl og kerner.", serving: "Et par tern" },
  { id: "mango", name: "Mango", safety: "safe", body: "Skrællet, sten fjernet. Sukkerholdigt, så hold det lille.", serving: "Et par stykker" },
  { id: "pineapple", name: "Ananas", safety: "safe", body: "Kun frisk, skræl og kernehus fjernet. Ikke den sukkerholdige på dåse.", serving: "Et lille stykke" },
  { id: "oats", name: "Naturel kogte havregryn", safety: "safe", body: "Naturel grød lavet med vand. Ingen sukker, ingen sødemidler, ingen mælk.", serving: "En skefuld" },
  { id: "sardines", name: "Sardiner i vand", safety: "safe", body: "På dåse i vand, ikke olie eller saltlage. En god kilde til omega-3.", serving: "En del af en dåse, lejlighedsvis" },
  { id: "cauliflower", name: "Blomkål", safety: "safe", body: "Naturel og i små mængder. Kan forårsage gas, ligesom hos os.", serving: "En lille buket" },
  { id: "lettuce", name: "Salat", safety: "safe", body: "Harmløs og mest vand. Ikke spændende, men fin.", serving: "Lidt, hakket" },
  { id: "beetroot", name: "Kogt rødbede", safety: "safe", body: "Naturel kogt rødbede er fint i små mængder – ikke den syltede slags.", serving: "Et lille stykke" },
];

export const nutritionSectionsDk = [
  {
    title: "Læs etiketten, ikke emballagen",
    body: "Forsiden af posen er markedsføring. Det, der betyder noget, er en erklæring om, at maden er komplet og afbalanceret til din hunds livsstadie, og en fodringsvejledning, du rent faktisk kan følge.",
    points: [
      "\"Komplet\" betyder, at det kan fodres alene. \"Komplementær\" betyder, at det ikke kan.",
      "Tjek, at det er til den rigtige livsstadie – hvalp, voksen eller alle livsstadier",
      "Fodringsvejledninger er et udgangspunkt, ikke en regel. Tilpas til din hund",
      "Mærker med dyrlæger og ernæringseksperter ansat, der udfører fodringsforsøg, er et sikrere valg",
    ],
  },
  {
    title: "Hvor meget, virkelig",
    body: "Alle vejledninger på hver pose er et gennemsnit. To hunde af samme vægt kan have brug for mærkbart forskellige mængder, og det ærlige svar er at fodre, observere og justere hver par uger.",
    points: [
      "Vej maden i stedet for at bruge en ske – skeen kan variere",
      "Tæl godbidder og tyggeben. De tæller hurtigere op, end man tror",
      "Tjek kropskonditionen månedligt og juster med omkring 10% ad gangen",
      "Kastrerede hunde har ofte brug for lidt mindre, end de plejede",
    ],
  },
  {
    title: "Hvor ofte",
    body: "Hvalpe har brug for hyppige små måltider; voksne klarer sig fint med to. At dele dagens mad op i to måltider passer de fleste hundes rutiner bedre end én stor skål.",
    points: [
      "Under 4 måneder: tre eller fire måltider om dagen",
      "4 til 6 måneder: tre måltider",
      "6 måneder og op: to måltider",
      "Hunde med dyb brystkasse: undgå hård motion lige omkring måltiderne",
    ],
  },
  {
    title: "Skift af foder",
    body: "Pludselige ændringer giver de fleste hundes maver problemer. Tag omkring en uge om det.",
    points: [
      "Dag 1-2: en fjerdedel nyt, tre fjerdedele gammelt",
      "Dag 3-4: halv og halv",
      "Dag 5-6: tre fjerdedele nyt",
      "Dag 7: alt nyt foder",
      "Hvis maven bliver løs, så sæt tempoet ned i stedet for at fortsætte",
    ],
  },
  {
    title: "Vand",
    body: "Frisk vand, altid tilgængeligt, i en ren skål. Det lyder indlysende, og det er stadig det, der oftest bliver glemt på varme dage og lange rejser.",
  },
  {
    title: "Rå og hjemmelavet mad",
    body: "Begge dele kan gøres godt, og begge dele er nemme at gøre forkert. Hjemmelavede diæter er især meget ofte ubalancerede, medmindre en veterinær ernæringsekspert har formuleret dem.",
    points: [
      "Rå fodring indebærer en bakterierisiko for din hund og dit hushold",
      "Hjemmelavet mad kræver en ordentlig opskrift og tilskud for at være komplet",
      "Tal med din dyrlæge, før du skifter, især for hvalpe og ældre hunde",
      "Dette er en reel beslutning, der skal træffes med en professionel, ikke fra et forum",
    ],
  },
] as const;
