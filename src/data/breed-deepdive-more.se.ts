import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

const G = "Allmän vägledning, inte veterinärråd.";
const h = (text: string) => `${text} ${G}`;

export const breedDeepDiveMoreSe: Partial<Record<BreedId, BreedDeepDive>> = {
  whippet: {
    originalPurpose:
      "Whippeten föddes fram i norra England på 1800-talet av fabriks- och gruvfamiljer som ville ha en liten, snabb hund för lopp och kaninjakt – »den fattiges kapplöpningshäst«.",
    healthConsiderations: h(
      "Whippeten är oftast en robust och långlivad ras, men den tunna huden rivs lätt och den smala kroppen fryser, så ett hundtäcke på frostiga dagar är en vänlig tanke. Vinthundar kan reagera annorlunda på narkos, så nämn rasen för veterinären. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du skulle släppa hunden lös nära kaniner, katter eller trafik och hoppas på det bästa",
      "Du vill ha en hund som trivs ute eller i ett kyligt hus",
      "Din trädgård är inte inhägnad och du har ingen trygg plats för en ordentlig spurt",
    ],
    keyTradeoffs: [
      "Lugn och ren inomhus, förbluffande utomhus – du behöver både en soffa och en trygg äng",
      "Mild och tyst, med en jaktlust som ingen träning helt slår av",
    ],
  },
  greyhound: {
    originalPurpose:
      "Greyhound är en av de äldsta vinthundstyperna, avlad i tusentals år för att springa ifatt harar på syn. På senare tid har den varit kapplöpningshund, och många pensionerade löpare får i dag ett hem som familjehund.",
    healthConsiderations: h(
      "Greyhounden är smal, med tunn hud och lite kroppsfett, så den fryser och kan få trycksår på hårda golv – en mjuk bädd betyder mycket. Tänderna behöver ofta regelbunden skötsel, och hundar med djup bröstkorg som den här brukar man hålla ögonen på för magvridning. Pensionerade löpare kan ha gamla skador, så fråga organisationen vad de vet, och prata med veterinären.",
    ),
    poorMatchFor: [
      "Du vill släppa hunden lös i en park utan stängsel",
      "Du bor med en katt eller smådjur och kan inte hålla dem åtskilda",
      "Du vill ha en hund som håller sig varm ute en vinterdag",
    ],
    keyTradeoffs: [
      "En av de mildaste och tystaste hundarna som finns, sovande i soffan stora delar av dagen, och byggd för att spurta i samma stund som något litet springer",
      "En stor hund i en lugn kropp: enkel inomhus, och mycket hund i andra änden av kopplet om den rusar iväg",
    ],
  },
  poodle: {
    originalPurpose:
      "Pudeln började som en tysk vattenapportör som hämtade änder åt jägare, och blev en högt älskad sällskapshund i Frankrike, där den är landets mest kända hund. Den berömda utställningsklippningen sägs ha börjat som en praktisk klippning för simning.",
    healthConsiderations: h(
      "Höfter, ögon och hud är det man brukar fråga om, och hundar med djup bröstkorg som storpudeln brukar man hålla ögonen på för magvridning. Pälsen tovas utan regelbunden borstning, och öronen bör kollas. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Hundfrisör var sjätte till åttonde vecka och borstning de flesta dagar passar inte i ditt liv",
      "Du vill ha en hund som nöjer sig med att bli förbisedd en dag",
      "Du helst inte vill lägga tid på att ge en klok hund något att fundera på",
    ],
    keyTradeoffs: [
      "Snabb, ivrig att glädja och lite fällande, med en päls som kräver riktig, regelbunden skötsel",
      "En allvarlig tänkare: lysande att träna, och full av påhitt när den tråkar ut sig",
    ],
  },
  "bichon-frise": {
    originalPurpose:
      "Bichon frisé härstammar från små vattenhundar kring Medelhavet och har i århundraden hållits som sällskapshund i södra Europa.",
    healthConsiderations: h(
      "Tänder, hud och knäskålar är det man brukar titta på hos en liten, ljushårig ras: tandvård är en rutin, och hudallergi ses ofta. En kort, fast skötselrutin betyder mycket. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du skulle ha svårt att hänga med i borstning och professionell trimning var sjätte till åttonde vecka",
      "Hunden skulle vara ensam en lång arbetsdag, de flesta dagar",
      "Du vill ha en hund som nöjer sig med att lämnas åt sig själv",
    ],
    keyTradeoffs: [
      "Glad, vänlig och lite fällande, med en päls som aldrig slutar behöva uppmärksamhet",
      "Gladast där du är, och minst glad när du går",
    ],
  },
  maltese: {
    originalPurpose:
      "Maltesern är en av Europas äldsta dvärgsällskapshundar, hållen i århundraden som knähund och värderad för den långa vita pälsen och hängivenheten mot sin människa.",
    healthConsiderations: h(
      "Tänder, knäskålar och tårfläckar ses ofta hos små vita hundar, och den fina pälsen tovas snabbt. En liten hund blir också tröttare och kallare fortare än du tror. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Daglig borstning passar inte i dina rutiner",
      "Du vill ha en hund som håller sig tyst när det ringer på dörren",
      "Hunden skulle vara ensam långa stunder",
    ],
    keyTradeoffs: [
      "Liten, mild och mycket lojal, med ett skall som är större än den själv",
      "En päls som ser ut att inte kräva något, och som kräver något varje dag",
    ],
  },
  havanese: {
    originalPurpose:
      "Havanesern är Kubas nationalhund, ättling till små bichonliknande hundar som kom till ön och blev sällskap i välbärgade hem.",
    healthConsiderations: h(
      "Knäskålar, ögon och höfter är det man brukar fråga om hos en liten, långlivad ras, och den silkeslena pälsen tovas utan regelbunden borstning. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Hunden skulle vara ensam större delen av en arbetsdag",
      "Du har inte tid för regelbunden borstning",
      "Du vill ha en hund som är nöjd i bakgrunden medan du sköter din dag",
    ],
    keyTradeoffs: [
      "Social, snabb att lära och glatt sällskap – och den vill verkligen ha ditt sällskap hela dagen",
      "Lätt i kopplet och lätt att bära, med en päls som kräver en riktig rutin",
    ],
  },
  "italian-greyhound": {
    originalPurpose:
      "Italiensk vinthund är en miniatyrvinthund, hållen som sällskapshund i århundraden och särskilt populär vid hoven i renässansens Italien.",
    healthConsiderations: h(
      "Benen är mycket tunna, så fråga en veterinär hur du håller hopp och vild lek säkra, och tänk på trappor och soffor. Tänderna behöver regelbunden skötsel, och en tunn päls betyder att den behöver ordentlig vinterutrustning. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du har små barn som gärna vill lyfta upp hunden eller busa vilt med den",
      "Du vill ha en hund som tar en kall och blöt promenad med jämnmod",
      "Hunden skulle vara ensam långa dagar",
    ],
    keyTradeoffs: [
      "Liten, tyst och sött tillgiven, och mer skör än den ser ut",
      "Älskar knät och en filt, och en jakt över en äng lika mycket",
    ],
  },
  pug: {
    originalPurpose:
      "Mopsen kommer från Kina, där små plattnosade hundar hölls som sällskap av kejsare, och den nådde senare Europa med holländska handelsmän och blev knähund i många kungahus.",
    healthConsiderations: h(
      "Plattnosade hundar har ofta andningsproblem och har det svårt i varmt väder – värmerisk är ett av de välfärdsskäl som British Veterinary Association lyfter – och ögon, hudveck och vikt kräver regelbunden uppmärksamhet. Går du ändå på rasen, välj en valp med öppna näsborrar och längre nos, avsätt pengar till försäkring, och läs rasens profil och fråga en veterinär.",
    ),
    poorMatchFor: [
      "Dina somrar är varma och det finns inget svalt rum till hunden",
      "En oväntad veterinärräkning på flera tusen euro skulle vara en stor belastning",
      "Du vill ha en hund som springer eller vandrar med dig",
    ],
    keyTradeoffs: [
      "Rolig, kärvänlig och nöjd med korta promenader, och ofta med verkliga andnings- och värmebesvär",
      "Det hoptryckta ansiktet som vinner alla hjärtan ligger också bakom de flesta hälsoproblemen",
    ],
  },
  "shih-tzu": {
    originalPurpose:
      "Shih tzun föddes fram som sällskap åt det kinesiska kejsarhovet, med rötter i Tibet, och namnet betyder »lejonhund«. De har varit knähundar mycket länge.",
    healthConsiderations: h(
      "Som plattnosad ras behöver den uppmärksamhet på andning och värme – värmerisk är ett av de välfärdsskäl som British Veterinary Association lyfter – och de stora ögonen, öronen och huden under pälsen behöver kollas regelbundet. Den långa pälsen tovas snabbt, därför väljer många en kort klippning. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Regelbunden skötsel, eller en kort klippning med några veckors mellanrum, passar inte i dina rutiner",
      "Du bor någonstans där det är varmt och utan ett svalt hörn",
      "Du vill ha en hund som är snabb och enkel att göra ren",
    ],
    keyTradeoffs: [
      "En glad, människokär knähund, med en päls och ett ansikte som båda kräver daglig omsorg",
      "En envis ådra inuti den fluffiga pälsen: tålmodig, godisbaserad träning fungerar bäst",
    ],
  },
  "golden-retriever": {
    originalPurpose:
      "Golden retriever utvecklades i skotska Highlands på 1800-talet för att apportera skjuten fågel från ojämn mark och kallt vatten, och den mjuka munnen och viljan att glädja kommer från det arbetet.",
    healthConsiderations: h(
      "Höfter, armbågar, ögon och hjärta är det man brukar fråga om, och cancer ses ofta i rasen – en anledning till att en bra uppfödare är värd att vänta på. Päls och öron behöver regelbunden skötsel, och vikten betyder något. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du vill ha en hund som håller sig ren och fäller lite",
      "Hunden skulle vara ensam hemma en hel arbetsdag, de flesta dagar",
      "Du vill ha en vakthund",
    ],
    keyTradeoffs: [
      "Vänlig mot nästan alla och ivrig att glädja, vilket ger härliga familjehundar och dåliga vakthundar",
      "Lätt att träna och alltid sugen på att bära något i munnen, så munbruket behöver vägledas mjukt",
    ],
  },
  "boston-terrier": {
    originalPurpose:
      "Boston terrier uppstod i Boston i slutet av 1800-talet ur korsningar mellan engelsk bulldogg och terrier, och blev en av Amerikas första hemmagjorda sällskapsraser.",
    healthConsiderations: h(
      "Det är en kortnosad ras, så andning, värme och ögon behöver uppmärksamhet – värmerisk är ett av de välfärdsskäl som British Veterinary Association lyfter – och många kullar behöver hjälp att komma till världen. Knäskålar och hudallergi är också värda att fråga om. Välj om möjligt en valp med öppna näsborrar och längre nos, och läs rasens profil och fråga en veterinär.",
    ),
    poorMatchFor: [
      "Det blir mycket varmt hemma på sommaren och du kan inte hålla hunden sval",
      "Du helst inte vill dela sovrum med snarkning",
      "Du söker löpturer eller bergsvandringar i varmt väder",
    ],
    keyTradeoffs: [
      "Livlig, vänlig och propert, med en kort nos som begränsar hur mycket värme och motion den tål",
      "Lekfull och clownaktig, och inte riktigt lika tålig som det studsiga sinnet antyder",
    ],
  },
  papillon: {
    originalPurpose:
      "Papillon är en dvärgspaniel från det europeiska fastlandet, uppkallad efter de fjärilsformade öronen, och den dyker upp i många gamla målningar som sällskap åt adelsfamiljer.",
    healthConsiderations: h(
      "Det är en liten ras som ofta blir gammal, och knäskålar, tänder och ögon är det man brukar fråga om. Den lätta kroppen gör att hopp från möbler är värda att hålla koll på. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du vill ha en hund som håller sig tyst vid dörren eller fönstret",
      "Hunden skulle vara ensam långa dagar",
      "Du helst inte vill träna regelbundet för att hålla ett aktivt sinne sysselsatt",
    ],
    keyTradeoffs: [
      "Vaken, tränbar och livlig för sin storlek, och snabb att skälla åt varje ljud",
      "Liten nog att bära, klok nog att tråka ut sig om du inte ger den något att göra",
    ],
  },
  "lhasa-apso": {
    originalPurpose:
      "Lhasa apso kommer från Tibet, där små hundar var vaktposter inomhus i hem och kloster – tysta större delen av dagen och snabba att slå larm.",
    healthConsiderations: h(
      "Ögon, hud, och öronen och tassarna under den långa pälsen behöver regelbunden koll, och pälsen tovas snabbt utan borstning, så många väljer en kort klippning. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Skäll vid varje knackning och ljud skulle driva dig eller grannarna till vansinne",
      "Du inte skulle hålla jämna steg med borstningen",
      "Du vill ha en hund som älskar främlingar",
    ],
    keyTradeoffs: [
      "En värdig, hängiven liten vakthund, med åsikter om gäster",
      "Självständig och ibland envis: belöning och tålamod slår upprepning",
    ],
  },
  "miniature-schnauzer": {
    originalPurpose:
      "Dvärgschnauzern föddes fram i Tyskland i slutet av 1800-talet ur mindre schnauzrar som gårdshund och råttfångare, vilket förklarar det vakna, studsiga, skäll-först-sinnet.",
    healthConsiderations: h(
      "Ögon och urinstenar nämns ofta för rasen, och feta godbitar kan belasta bukspottkörteln, så en enkel kost och stabil vikt betyder något. Den strävhåriga pälsen kräver regelbunden skötsel. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du vill ha en tyst hund som låter grannarnas kommande och gående vara",
      "Regelbunden skötsel och trimning passar inte i dina rutiner",
      "Du helst inte vill hantera en liten hunds skällande",
    ],
    keyTradeoffs: [
      "Robust, klok och lite fällande, med ett skall som kommer före dörrklockan",
      "Bra på att lära, och en terrier i hjärtat: inte rädd för en åsikt",
    ],
  },
  labradoodle: {
    originalPurpose:
      "Labradoodle är en korsning mellan labrador och pudel, först framavlad i Australien i slutet av 1980-talet för att kombinera en ledarhunds temperament med en päls som fäller mindre. Det är en korsning och inte en erkänd ras, och kullarna varierar.",
    healthConsiderations: h(
      "En blandning är inte automatiskt friskare: en labradoodle kan ärva från båda sidor, så höfter, armbågar, ögon, öron och hud är värda att fråga om. Pälsen varierar mycket, och många behöver regelbunden borstning och klippning. Fråga uppfödaren vilka hälsotester båda föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du behöver en garanterat lite fällande eller allergivänlig päls",
      "Du skulle ha svårt att sköta en lockig päls regelbundet",
      "Du vill ha en hund som är lätt att förutsäga utifrån en rasbeskrivning",
    ],
    keyTradeoffs: [
      "Vänlig, vaken och ofta lätt att leva med, och varje kull är lite olika",
      "Studsar som en labrador och tänker som en pudel: energi som behöver ett dagligt utlopp",
    ],
  },
  cavapoo: {
    originalPurpose:
      "Cavapoo är en korsning mellan cavalier king charles spaniel och pudel, populär som liten, gosig sällskapshund sedan början av 2000-talet. Det är en korsning och inte en erkänd ras, och kullarna varierar.",
    healthConsiderations: h(
      "En cavapoo kan ärva från båda sidor, så fråga vilka hälsotester båda föräldrarna har gjort – hjärta, ögon, knäskålar och päls är alla värda att fråga om. Pälsen tovas utan regelbunden borstning. Läs rasens profil och fråga en veterinär.",
    ),
    poorMatchFor: [
      "Hunden skulle vara ensam en hel arbetsdag",
      "Du vill ha en hund där du kan förutsäga pälstyp och storlek",
      "Du helst vill slippa regelbunden skötsel",
    ],
    keyTradeoffs: [
      "Tillgiven och social, och ofta mycket förtjust i sällskap – ibland för förtjust för att lämnas ensam",
      "Godmodig och klok, med en päls som kräver en riktig rutin",
    ],
  },
  "yorkshire-terrier": {
    originalPurpose:
      "Yorkshireterriern utvecklades på 1800-talet av fabriksarbetare i Yorkshire och Lancashire för att fånga råttor. Det är långt därifrån till knähunden med silkespäls, men terriern finns kvar.",
    healthConsiderations: h(
      "Knäskålar, tänder och en luftstrupe som är känslig för halsband är det man brukar fråga om hos små hundar, så många använder sele. Den fina pälsen kräver regelbunden borstning eller klippning. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du vill ha en hund som låter andra hundar vara, oavsett storlek",
      "Du helst inte vill borsta eller klippa regelbundet",
      "Du vill ha en tyst hund som inte frestas att skälla",
    ],
    keyTradeoffs: [
      "En liten hund med storhundsattityd: modig, vaken och självsäker",
      "Silkeslen, lite fällande och terrier på heltid",
    ],
  },
  "siberian-husky": {
    originalPurpose:
      "Huskyn föddes fram av chukchi-folket i nordöstra Sibirien som draghund, byggd för att dra lätta laster långa sträckor i bitande kyla, och den älskar fortfarande att springa.",
    healthConsiderations: h(
      "Det är en ganska robust ras; ögon och höfter är det man brukar fråga om, och tjock päls gör att värme är ett verkligt problem i varmt väder. De fäller också kraftigt två gånger om året. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du vill ha en hund som kommer tillbaka varje gång utan koppel",
      "Ditt hem är varmt, eller dina dagar har lite tid för löpning",
      "Du vill ha en tyst hund som är lätt att ha i lägenhet",
    ],
    keyTradeoffs: [
      "Vänlig, slående och full av uthållighet, och en riktig rymningskonstnär som ylar hellre än skäller",
      "Älskar att springa med dig, och behöver mycket av det, oavsett väder",
    ],
  },
  "pembroke-welsh-corgi": {
    originalPurpose:
      "Pembroke welsh corgi kommer från Pembrokeshire i Wales, där den drev boskap genom att nafsa i hälarna och ducka för sparkarna, och den låga, snabba, bestämda ådran har inte försvunnit.",
    healthConsiderations: h(
      "Lång rygg och korta ben gör att vikt och hoppande förtjänar uppmärksamhet, och höfter och ögon är det man brukar fråga om. De fäller mycket, året runt. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Trappor, hoppande och viktökning passar dåligt med en lång rygg",
      "Du vill ha en hund som låter vrister och barn vara",
      "Du inte vill ha hundhår på allt",
    ],
    keyTradeoffs: [
      "Klok, glad och tuffare än den ser ut, och en vallhund som kan försöka valla dig och barnen",
      "Älskar mat och lek, och extra kilon är tunga för den långa ryggen",
    ],
  },
  "shiba-inu": {
    originalPurpose:
      "Shiba inu är en liten japansk ras av spetstyp, ursprungligen använd för att jaga fågel och smådjur i bergen, och den har fortfarande ett stolt, självständigt, kattlikt sätt.",
    healthConsiderations: h(
      "Allergier, ögon, knäskålar och höfter är det man brukar fråga om hos rasen, och de fäller kraftigt två gånger om året. Fråga uppfödaren vilka hälsotester föräldrarna har gjort, och läs rasens profil.",
    ),
    poorMatchFor: [
      "Du vill ha en hund som kommer när du kallar och kan gå lös",
      "Du vill ha en hund som älskar att bli tagen på av alla",
      "Du helst inte vill lägga tid på tålmodig, belöningsbaserad träning",
    ],
    keyTradeoffs: [
      "Ren, värdig och tyst tillgiven, med en egen vilja",
      "Självständig till det envisa: träning är ett samtal, inte ett kommando",
    ],
  },
};
