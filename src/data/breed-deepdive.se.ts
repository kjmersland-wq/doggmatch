import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

export const breedDeepDiveSe: Partial<Record<BreedId, BreedDeepDive>> = {
  "labrador-retriever": {
    originalPurpose:
      "Labradoren började med vattenhundarna på Newfoundland och finslipades i Storbritannien till en apportör som glatt hämtar både på land och i iskallt vatten. Det förklarar badglädjen.",
    healthConsiderations:
      "En bra uppfödare visar gärna höft- och armbågsresultat, och DNA-svar för progressiv retinal atrofi (prcd-PRA) och träningsutlöst kollaps. Det du ska hålla koll på i vardagen är vikten: många labradorer har en gen som ger större aptit, så att mäta upp maten håller dem pigga längre.",
    poorMatchFor: [
      "Du drömmer om en soffa utan hundhår",
      "En daglig promenad och lite träning blir svårt att få in i veckan",
      "Hunden skulle vara ensam hemma en hel arbetsdag, de flesta dagar",
    ],
    keyTradeoffs: [
      "Härligt lätt att träna eftersom maten betyder så mycket, och samma aptit gör att du behöver hålla koll på midjan",
      "Hälsar på nästan alla som en vän: underbart sällskap, men ingen vakthund",
    ],
  },
  "french-bulldog": {
    originalPurpose:
      "Fransk bulldogg härstammar från små engelska bulldoggar som spetsknypplare tog med till Frankrike på 1800-talet. Parisarna föll för dem, och sedan dess har de varit sällskapshundar.",
    healthConsiderations:
      "Det söta, platta ansiktet kan göra det tungt att andas (BOAS), så fråga gärna om föräldrarna är testade för luftvägarna och välj en valp med ordentligt öppna näsborrar. Rygg, hudveck och öron behöver lite extra omtanke, och många kullar föds med kejsarsnitt. Räkna med en bra försäkring, och håll hunden sval på varma dagar.",
    poorMatchFor: [
      "Du vill ha en kompis för löprundor, vandringar eller heta sommardagar",
      "En oväntad veterinärräkning på tiotusentals kronor skulle bli en stor påfrestning",
      "Ditt hem blir varmt på sommaren och är svårt att kyla ner",
    ],
    keyTradeoffs: [
      "Liten, tyst och nöjd med korta promenader, men att hålla den frisk kan kosta mer än för nästan alla andra raser",
      "Ansiktet som charmar alla ligger också bakom de flesta hälsobekymren",
    ],
  },
  "border-collie": {
    originalPurpose:
      "Border collien kommer från bergstrakterna där England möter Skottland, där den samlade får över vida sluttningar och tog emot signaler från en herde långt bort.",
    healthConsiderations:
      "Som tur är är det en robust ras. Be om höftresultat, ögonlysning och DNA-tester för Collie Eye Anomaly, trapped neutrophil syndrome och neuronal ceroid lipofuscinos. Epilepsi förekommer, och många är känsliga för höga ljud, så ett lugnt hem hjälper.",
    poorMatchFor: [
      "Du vill ha en familjehund som är nöjd med promenader och inte behöver ett jobb för huvudet",
      "Du bor vid en trafikerad väg där bilar och cyklar blir svåra att låta bli att jaga",
      "Lata helger i soffan är din bild av det perfekta",
    ],
    keyTradeoffs: [
      "Kanske världens mest lättlärda hund, och får den inget att göra hittar den på egna projekt",
      "Känsligheten gör den till en fantastisk partner, men ett stökigt och hektiskt hem kan slita på den",
    ],
  },
  "cavalier-king-charles-spaniel": {
    originalPurpose:
      "Cavaliern återskapades i England på 1920-talet för att likna de små spanielerna i målningarna från Karl II:s hov, och har varit en hängiven knähund från första stund.",
    healthConsiderations:
      "Hjärtproblem ses ofta i rasen, gärna från medelåldern, så fråga uppfödaren vilka hjärtkontroller båda föräldrarna har gjort. Syringomyeli är ett annat tillstånd som ofta nämns för cavalier, så fråga om den också. Läs rasens profil och fråga en veterinär vilka undersökningar som är vettiga. Allmän vägledning, inte veterinärråd.",
    poorMatchFor: [
      "Din cavalier skulle vara ensam större delen av varje vardag",
      "Regelbundna hjärtkontroller, och kanske livslång medicin, ryms inte i budgeten",
      "Du vill gärna ha en hund som säger till när någon står vid dörren",
    ],
    keyTradeoffs: [
      "Ett av de mildaste och enklaste temperamenten du hittar, tillsammans med en av de mer krävande hälsoprofilerna",
      "Älskar alla den träffar, vilket är underbart hemma och helt hopplöst som vakthund",
    ],
  },
  "german-shepherd": {
    originalPurpose:
      "Rasen fastställdes i Tyskland 1899 som en mångsidig vallhund, och snart arbetade den som ledarhund, sökhund och tillsammans med polis och militär.",
    healthConsiderations:
      "Be om höft- och armbågsresultat och ett DNA-test för degenerativ myelopati. Magomvridning, exokrin pankreasinsufficiens och känslig mage eller hud kan dyka upp. Det är snällare att välja linjer med rak, balanserad kropp än med en brant sluttande rygg.",
    poorMatchFor: [
      "Det här är din första hund och du har ännu ingen plan för träning och socialisering",
      "Du vill ha en hund som är naturligt avslappnad med främlingar",
      "Mycket hundhår och en stark hund i kopplet skulle slita ut dig",
    ],
    keyTradeoffs: [
      "Djupt lojal och beskyddande, och stadig socialisering håller den beskyddande sidan i rätt proportion",
      "En glädje att träna, och ordentligt olycklig utan regelbundna uppgifter",
    ],
  },
  dachshund: {
    originalPurpose:
      "Taxen avlades i Tyskland för att följa grävlingen (Dachs) ner i grytet: en liten, orädd jägare med ett skall kraftigt nog att höras ända upp ur jorden.",
    healthConsiderations:
      "Ryggproblem (IVDD) drabbar ganska många taxar och kan bli allvarliga, så det snällaste du kan göra är att hålla den smal, bära den i trappor och varsamt avvänja den från att hoppa. Strävhåriga linjer har ofta färre ryggbesvär. Vissa varianter har DNA-tester för ögonsjukdom (cord1-PRA) och Laforas sjukdom.",
    poorMatchFor: [
      "Du bor flera trappor upp utan hiss",
      "Du behöver en tyst hund i ett hus med tunna väggar",
      "De minsta i familjen skulle älska att lyfta upp hunden och bära runt på den",
    ],
    keyTradeoffs: [
      "Liten nog att följa med överallt, med rösten och självförtroendet hos en mycket större hund",
      "Smart och självständig, så inkallning och rumsrenhet kräver oftast lite extra tålamod",
    ],
  },
  beagle: {
    originalPurpose:
      "Beaglen är en brittisk packhund, avlad för att följa spåret efter hare medan människorna följde efter till fots. Nosen bestämmer fortfarande det mesta.",
    healthConsiderations:
      "Goda nyheter: beaglen är oftast frisk och lever länge. Epilepsi, låg ämnesomsättning och ryggproblem kan förekomma, och det finns ett DNA-test för Musladin-Lueke syndrom. Beaglar går lätt upp i vikt, och de fina långa öronen behöver kollas regelbundet.",
    poorMatchFor: [
      "Du drömmer om en hund du kan lita på lös överallt",
      "Dina grannar skulle störa sig på lite ylande medan du är borta",
      "Din trädgård är inte ordentligt inhägnad",
    ],
    keyTradeoffs: [
      "Vänlig mot både människor och hundar, men nosen vinner oftast över det du nyss bad om",
      "Kompakt nog för de flesta hem, med uthålligheten hos en arbetande drivhund",
    ],
  },
  "cocker-spaniel": {
    originalPurpose:
      "Cockern är en brittisk fågelhund, avlad för att stöta ut morkulla (woodcock) ur täta snår och hämta tillbaka den. Därav namnet.",
    healthConsiderations:
      "Öronen är det dagliga jobbet, så att torka och kolla dem ofta besparar hunden mycket obehag. Be om höftresultat och DNA-tester för progressiv retinal atrofi (prcd-PRA) och familjär nefropati, en njursjukdom. Jakt- och utställningslinjer skiljer sig mycket i energi, så fråga vilken linje du möter.",
    poorMatchFor: [
      "Regelbunden borstning och klippning skulle hamna långt ner på listan",
      "Din cocker skulle vara ensam under långa arbetsdagar",
      "Du vill ha en avslappnad hund men har fallit för en valp från jaktlinjer",
    ],
    keyTradeoffs: [
      "Glad och ivrig att göra dig nöjd, och jaktlinjerna är mycket livligare än det mjuka ansiktet antyder",
      "En vacker päls som behöver hjälp av hundfrisören för att förbli vacker",
    ],
  },
  chihuahua: {
    originalPurpose:
      "Chihuahuan har fått sitt namn från den mexikanska delstaten och härstammar troligen från de små sällskapshundarna i det gamla Mexiko. Den har avlats som sällskapshund sedan slutet av 1800-talet.",
    healthConsiderations:
      "Tänderna behöver mest omsorg, så daglig tandborstning och en professionell rengöring då och då gör stor skillnad. Knäskåls- och hjärtklaffsproblem kan förekomma, och mycket små valpar kan få lågt blodsocker. Det fina är att 15 år eller mer är helt vanligt.",
    poorMatchFor: [
      "Du har småbarn eller unga barn hemma",
      "Du vill ha en hund som är lugn och tyst när det kommer besök",
      "Vintrarna är kalla och du vill helst slippa klä på hunden inför promenaden",
    ],
    keyTradeoffs: [
      "Liten i både utrymme och kostnad, och så ömtålig att den behöver varsam hantering",
      "Helt hängiven sin människa, och ofta misstänksam eller pratig med alla andra",
    ],
  },
  "bernese-mountain-dog": {
    originalPurpose:
      "Berner sennenhunden var gårdshund i den schweiziska kantonen Bern, där den drog mjölkkärror, flyttade kor och höll ett vänligt öga på gården.",
    healthConsiderations:
      "Det tyngsta med att älska en berner är att livet kan bli kort, och cancer, särskilt histiocytärt sarkom, är tyvärr vanligt. Be om höft- och armbågsresultat och ett DNA-test för degenerativ myelopati, och lär dig tecknen på magomvridning.",
    poorMatchFor: [
      "Du bor någonstans med varmt klimat, eller högst upp utan hiss",
      "Sju till tio år tillsammans skulle kännas för kort",
      "Veterinär- och foderräkningarna för en stor hund skulle pressa din budget",
    ],
    keyTradeoffs: [
      "En mild, tålmodig jätte, med kortare tid tillsammans än du skulle önska",
      "Lugn som vuxen efter en lång och studsig ungdomstid, och det är hår överallt året runt",
    ],
  },
};
