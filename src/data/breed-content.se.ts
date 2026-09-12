import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Rastexter på svenska, kopplade till samma stabila ras-id:n. */
export const breedContentSe: Record<BreedId, BreedContent> = {
  "labrador-retriever": {
    displayName: "Labrador retriever",
    summary:
      "En öppen, matglad brukshund som med rätta har blivit familjehunden framför alla andra — och som fortfarande behöver ett riktigt jobb att göra för att må bra.",
    strengths: [
      "Älskar att vara nära människor",
      "Lär sig snabbt, särskilt för en godbit",
      "Härligt sällskap i vardagen",
      "Hakar gärna på allt som är aktivt",
      "Passar oftast fint in i familjelivet",
    ],
    considerations: [
      "Fäller året runt",
      "Behöver en rejäl dos motion varje dag",
      "Stor och stark i koppel",
      "Blir uttråkad utan något att sysselsätta hjärnan med",
    ],
  },
  "golden-retriever": {
    displayName: "Golden retriever",
    summary:
      "Mild, samarbetsvillig och ovanligt tålmodig. En golden vill helst av allt ha ditt sällskap.",
    strengths: [
      "Underbart mild mot barn",
      "Älskar att lära sig när det finns en belöning i det",
      "Vänlig mot både människor och andra hundar",
      "Trivs bäst utomhus i svalare väder",
    ],
    considerations: [
      "Fäller kraftigt ett par gånger om året",
      "Behöver regelbunden borstning",
      "Har svårt för värme",
      "Ogillar långa dagar ensam",
    ],
  },
  poodle: {
    displayName: "Pudel (stor)",
    summary:
      "En atletisk och ovanligt klok hund bakom en elegant päls. Trivs bäst med uppgifter att lösa och nära samarbete med sin människa.",
    strengths: [
      "Fäller väldigt lite",
      "Lär sig saker anmärkningsvärt snabbt",
      "Klarar sig fint i lägenhet, så länge den får komma ut ordentligt",
      "Lekfull utan att vara kaotisk",
    ],
    considerations: [
      "Klippning hos hundfrisören var 6:e–8:e vecka",
      "Behöver mental stimulans, inte bara promenader",
      "Kan bli otrygg av mycket ensamtid",
      "Pälsvården kostar över åren",
    ],
  },
  "french-bulldog": {
    displayName: "Fransk bulldog",
    summary:
      "En kompakt, komisk och djupt tillgiven stadshund med blygsamt rörelsebehov och verkliga hälsoutmaningar.",
    strengths: [
      "Trivs utmärkt i lägenhet",
      "Behöver inte mycket motion",
      "Kärleksfull och alltid nära dig",
      "Lugnare än de flesta småhundar",
    ],
    considerations: [
      "Kan få andningsproblem i värme eller vid ansträngning",
      "Veterinärräkningarna blir ofta högre genom livet",
      "Ogillar att vara ensam",
      "Välj en uppfödare som hälsotestar noggrant",
    ],
  },
  "border-collie": {
    displayName: "Border collie",
    summary:
      "Den mest inlärningsvilliga hunden de flesta inte borde skaffa. Skarp, intensiv och olycklig utan ett jobb varje dag.",
    strengths: [
      "Lär sig nästan allt du orkar lära ut",
      "Lysande på hundsport, nosework och problemlösning",
      "Knyter an starkt till sin människa",
      "Blomstrar hos verkligt aktiva ägare",
    ],
    considerations: [
      "Behöver mycket motion och mycket att fundera på",
      "Sällan nöjd i lägenhet eller med en lugn rutin",
      "Kan valla barn eller jaga cyklar",
      "Uttråkning blir snabbt till problem",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier king charles spaniel",
    summary:
      "En liten, mjuk följeslagare som helst vill vara där du är. Lugnt sällskap snarare än ett projekt.",
    strengths: [
      "Mild mot barn och äldre",
      "Helt nöjd i ett litet hem",
      "Kommer bra överens med andra djur",
      "Behöver inga långa promenader",
    ],
    considerations: [
      "Kända ärftliga hjärt- och nervproblem",
      "Sällan bekväm ensam under längre stunder",
      "Öron och päls behöver regelbunden skötsel",
      "Fråga alltid om föräldrarnas hälsotester",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "En spurtare som sover större delen av dagen. Stillsam, ren och förvånansvärt väl lämpad för lugna hem.",
    strengths: [
      "Underbart lugn inomhus",
      "Lättskött päls och skäller sällan",
      "Ett par korta spurter räcker gott",
      "Många väntar på ett hem via omplacering",
    ],
    considerations: [
      "Starkt jaktinstinkt mot smådjur",
      "Lösspring kräver ett ordentligt inhägnat område",
      "Fryser lätt, behöver värme och en mjuk bädd",
      "Tunn hud, så skråmor och skavsår uppstår lätt",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba inu",
    summary:
      "Självständig, noggrann och självförsörjande. En shiba respekterar dig hellre än lyder dig.",
    strengths: [
      "Klarar ensamtid bättre än de flesta",
      "Ren, nästan kattlik",
      "Liten men seg",
      "Blir ofta gammal",
    ],
    considerations: [
      "Självständig, och inkallning kräver ett rejält jobb",
      "Fäller enorma mängder päls två gånger om året",
      "Ofta reserverad mot andra hundar",
      "Inte den enklaste första hunden",
    ],
  },
  "german-shepherd": {
    displayName: "Schäfer",
    summary:
      "Allvarlig, vaksam och djupt lojal. En schäfer vill ha ett jobb, en rutin och någon värd att jobba för.",
    strengths: [
      "Lär sig snabbt och minns väl",
      "Tillgiven mot sin familj",
      "Fantastisk när den är väl socialiserad",
      "Blomstrar med en daglig uppgift",
    ],
    considerations: [
      "Fäller året runt, och rejält två gånger om året",
      "Behöver en timme eller mer av riktigt arbete varje dag",
      "Kan bli skeptisk mot främlingar utan tidig träning",
      "Fråga uppfödaren om höfter och armbågar",
    ],
  },
  dachshund: {
    displayName: "Tax",
    summary:
      "Liten, rolig och modigare än benen antyder. Stor personlighet som gillar att vara tätt inpå dig.",
    strengths: [
      "Trivs fint i ett litet hem",
      "Behöver inga långa promenader",
      "Kvick och full av karaktär",
      "Gott sällskap, alltid under fötterna",
    ],
    considerations: [
      "Känslig rygg — inga trappor eller hopp från soffan",
      "Gillar ljudet av sin egen röst",
      "Sätter sig på bakbenen och diskuterar träningen",
      "Lägger lätt på hullet",
    ],
  },
  beagle: {
    displayName: "Beagle",
    summary:
      "En nos på fyra ben. Glad, social och nästan omöjlig att övertala bort från en god doft.",
    strengths: [
      "Genuint vänlig mot alla",
      "Robust och tålig mot barn",
      "Älskar andra hundar",
      "Kort päls, enkel att sköta",
    ],
    considerations: [
      "Inkallning är hårt arbete — nosen vinner oftast",
      "Ylar och gör sig hörd när den är uttråkad",
      "Äter allt som lämnas framme",
      "Behöver en säkert inhägnad trädgård",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker spaniel",
    summary:
      "Mjuk blick, ivriga tassar och gränslös samarbetsvilja. En cocker är som lyckligast när den gör något tillsammans med dig.",
    strengths: [
      "Kärleksfull och ivrig att samarbeta",
      "Älskar nosework och lek",
      "Klarar både stad och land",
      "Bra storlek för de flesta hem",
    ],
    considerations: [
      "Öronen måste kollas och rengöras ofta",
      "Pälsen tovar sig utan regelbunden borstning",
      "Blir orolig utan sysselsättning",
      "Ogillar långa dagar ensam",
    ],
  },
  chihuahua: {
    displayName: "Chihuahua",
    summary:
      "Bitte liten, orädd och helt hängiven en eller två personer. Liten hund, åsikter i fullstor.",
    strengths: [
      "Perfekt för lägenhet",
      "Behöver väldigt lite motion",
      "Blir ofta gammal, långt upp i tonåren",
      "Enkel att ta med på resa",
    ],
    considerations: [
      "Skör — ingen hund för hårdhänt hantering",
      "Skäller på allt okänt",
      "Fryser lätt",
      "Behöver riktig socialisering för att bli avslappnad",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Dvärgschnauzer",
    summary:
      "Skägg, skarp hjärna och lugn självkänsla. En terrierhjärna i en prydlig päls som fäller lite.",
    strengths: [
      "Fäller väldigt lite",
      "Kvick och lär sig snabbt",
      "Passar både lägenhet och hus",
      "Seg för att vara en liten hund",
    ],
    considerations: [
      "Klippning var 6:e–8:e vecka",
      "Skäller på dörren, posten och vinden",
      "Inte särskilt förtjust i smådjur",
      "Lägger lätt på hullet",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Berner sennenhund",
    summary:
      "Enorm, mild och lugn. En berner är mjukt sällskap för en familj med utrymme och fördragsamhet för hundhår.",
    strengths: [
      "Underbart tålmodig med barn",
      "Lugn inomhus för att vara så stor",
      "Älskar kallt väder",
      "Godmodig och trygg",
    ],
    considerations: [
      "Kortare liv än de flesta raser",
      "Mängder av päls, i hela huset",
      "Kostar mer i foder, försäkring och vård",
      "Har det tungt i värme",
    ],
  },
  "australian-shepherd": {
    displayName: "Australian shepherd",
    summary:
      "Snabb, atletisk och alltid observant. En aussie behöver ett syfte mer än den behöver en trädgård.",
    strengths: [
      "Skarp på allt du lär den",
      "Älskar hundsport, trick och nosework",
      "Knyter an tätt till sin människa",
      "Vacker och härdig utomhus",
    ],
    considerations: [
      "Behöver timmar av aktivitet varje dag",
      "Vallar barn, cyklar och joggare",
      "Blir uttråkad snabbt, och säger ifrån",
      "Passar sällan i lägenhet",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack russell terrier",
    summary:
      "Liten, snabb och fullständigt övertygad om sig själv. Härlig kul om du gillar en hund med motor.",
    strengths: [
      "Tuff, frisk och blir gammal",
      "Får plats i ett litet hem",
      "Oändligt lekfull",
      "Klarar ensamtid bättre än de flesta",
    ],
    considerations: [
      "Jagar allt som är litet och kvickt",
      "Gräver, och menar allvar",
      "Kan vara grälsjuk mot andra hundar",
      "Behöver betydligt mer motion än storleken antyder",
    ],
  },
  "siberian-husky": {
    displayName: "Sibirisk husky",
    summary:
      "Vacker, vänlig och byggd för att springa hela dagen. En husky gör sällan som du säger bara för att du ber om det.",
    strengths: [
      "Social med både människor och hundar",
      "Skapad för kyla och långa distanser",
      "Skäller sällan",
      "Ren, med lite hundlukt",
    ],
    considerations: [
      "Rymmer från trädgården och kommer inte tillbaka",
      "Inkallning är ett livslångt projekt",
      "Fäller allt två gånger om året, överallt",
      "Lider i varmt klimat",
    ],
  },
  boxer: {
    displayName: "Boxer",
    summary:
      "En clown som aldrig riktigt blir vuxen. Livlig, varmhjärtad och alltid mitt i händelserna.",
    strengths: [
      "Fantastisk med barn",
      "Lekfull långt upp i åren",
      "Kort päls, enkel att sköta",
      "Lär sig bra med vänlig och uppmuntrande träning",
    ],
    considerations: [
      "Spänstig och stark — hoppar upp på folk",
      "Blir lätt överhettad med sin korta nos",
      "Vissa allvarliga hälsoproblem i rasen",
      "Dreglar",
    ],
  },
  rottweiler: {
    displayName: "Rottweiler",
    summary:
      "Kraftfull, lugn och stilla självsäker. En rottweiler behöver en ägare som vet vad hen gör.",
    strengths: [
      "Trygg och stadig när den är väl uppfostrad",
      "Lär sig snabbt och jobbar villigt",
      "Lojal och beskyddande mot familjen",
      "Lättskött päls",
    ],
    considerations: [
      "Mycket stark — träningen måste sitta",
      "Behöver noggrann socialisering från dag ett",
      "Försäkring och foder kostar mer",
      "Vissa platser har restriktioner",
    ],
  },
  whippet: {
    displayName: "Whippet",
    summary:
      "En soffhund i en spurtares kropp. Stillsam, kärleksfull och anmärkningsvärt lätt att leva med.",
    strengths: [
      "Lugn och föga krävande hemma",
      "Nästan ingen pälsvård",
      "Två korta spurter om dagen räcker",
      "Mild och stillsam",
    ],
    considerations: [
      "Jagar allt som springer",
      "Behöver inhägnat område för lösspring",
      "Fryser lätt — filt och täcke",
      "Tunn hud som lätt skadas",
    ],
  },
  "shih-tzu": {
    displayName: "Shih tzu",
    summary:
      "Skapad för att vara sällskapshund, och riktigt bra på det. Nöjd i knät, nöjd i en liten lägenhet.",
    strengths: [
      "Idealisk för stadsliv",
      "Vänlig mot nästan alla",
      "Fäller väldigt lite",
      "Behöver inga långa promenader",
    ],
    considerations: [
      "Daglig borstning, eller klipp den kort",
      "Kort nos gör värme farlig",
      "Ögonen behöver följas upp och torkas",
      "Renlighetsträningen kan kräva tålamod",
    ],
  },
  pug: {
    displayName: "Mops",
    summary:
      "Komisk, kärleksfull och alltid i din skugga. En mops ber om sällskap mycket mer än om motion.",
    strengths: [
      "Älskar alla, hundar inkluderat",
      "Trivs i det minsta hem",
      "Lättsam och rolig",
      "Behöver lite motion",
    ],
    considerations: [
      "Andningsproblem är vanligt",
      "Värme kan vara farligt",
      "Lägger väldigt lätt på hullet",
      "Rynkor och ögon behöver daglig skötsel",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon frisé",
    summary:
      "Ett litet vitt moln med gott humör. Social, kvick och som lyckligast bland människor.",
    strengths: [
      "Fäller väldigt lite",
      "Vänlig mot barn och andra hundar",
      "Passar i lägenhet och liten trädgård",
      "Lär sig snabbt och älskar beröm",
    ],
    considerations: [
      "Hundfrisör var 4:e–6:e vecka",
      "Klarar verkligen dåligt att vara ensam",
      "Hud och öron behöver uppföljning",
      "Renlighetsträningen kräver konsekvens",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire bullterrier",
    summary:
      "Muskulös, mjukhjärtad och känd för att vara barnkär. En staffie älskar sina människor utan förbehåll.",
    strengths: [
      "Härlig familjehund när den är väl uppfostrad",
      "Kort päls, mycket enkel skötsel",
      "Seg och lekfull",
      "Vill gärna göra dig nöjd",
    ],
    considerations: [
      "Kan vara svår med andra hundar",
      "Stark för storleken i koppel",
      "Tuggar sönder mjuka leksaker och bäddar",
      "Möter fördomar och restriktioner på vissa håll",
    ],
  },
  vizsla: {
    displayName: "Vizsla",
    summary:
      "Kardborrehunden. Atletisk, känslig och aldrig mer än en meter ifrån dig.",
    strengths: [
      "Vacker, stillsam och ren",
      "Lysande sällskap på löprundan och fjällvandringen",
      "Mycket kärleksfull",
      "Nästan ingen pälsvård",
    ],
    considerations: [
      "Kan inte vara ensam länge",
      "Behöver en till två timmar hård motion dagligen",
      "Känslig för höjda röster",
      "Fryser på vinterpromenader",
    ],
  },
  samoyed: {
    displayName: "Samojed",
    summary:
      "Den leende snöhunden. Social, pratsam och vacker — och en enorm mängd päls.",
    strengths: [
      "Genuint vänlig mot alla",
      "Älskar kyla och snö",
      "Lekfull och familjekär",
      "Sällan aggressiv",
    ],
    considerations: [
      "Fäller helt otroliga mängder",
      "Borstning flera gånger i veckan",
      "Pratar, ylar och klagar",
      "Blir lätt för varm på sommaren",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshireterrier",
    summary:
      "Bitte liten, skarp och full av terrieranda. En yorkie är modigare än någon väntar sig.",
    strengths: [
      "Fäller nästan inget",
      "Perfekt storlek för lägenhet",
      "Kvick och lär sig snabbt",
      "Blir ofta gammal",
    ],
    considerations: [
      "Pälsen behöver daglig skötsel, eller kort klippning",
      "Skäller på allt",
      "Spinkig — lätt att trampa på",
      "Renlighetsträningen kan ta tid",
    ],
  },
};
