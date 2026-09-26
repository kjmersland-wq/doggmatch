import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

export const breedDeepDiveDk: Partial<Record<BreedId, BreedDeepDive>> = {
  "labrador-retriever": {
    originalPurpose:
      "Labradoren startede med vandhundene på Newfoundland og blev finpudset i Storbritannien til en apportør, der glad henter både på land og i iskoldt vand. Det forklarer badeglæden.",
    healthConsiderations:
      "En god opdrætter viser dig gerne hofte- og albueresultater og DNA-svar for progressiv retinal atrofi (prcd-PRA) og træningsudløst kollaps. Det, du skal holde øje med i hverdagen, er vægten: mange labradorer har et gen, der giver større appetit, så når du måler maden op, holder de sig friske længere.",
    poorMatchFor: [
      "Du drømmer om en sofa uden hundehår",
      "En daglig gåtur og lidt træning bliver svær at få plads til i ugen",
      "Hunden ville være alene hjemme en hel arbejdsdag, de fleste dage",
    ],
    keyTradeoffs: [
      "Dejlig nem at træne, fordi maden betyder så meget, og den samme appetit betyder, at du skal holde øje med taljen",
      "Hilser på næsten alle som en ven: skønt selskab, men ingen vagthund",
    ],
  },
  "french-bulldog": {
    originalPurpose:
      "Fransk bulldog stammer fra små engelske bulldogs, som kniplere tog med til Frankrig i 1800-tallet. Pariserne faldt for dem, og siden har de været selskabshunde.",
    healthConsiderations:
      "Det søde, flade ansigt kan gøre det tungt at trække vejret (BOAS), så spørg gerne, om forældrene er testet for luftvejene, og vælg en hvalp med godt åbne næsebor. Ryg, hudfolder og ører har brug for lidt ekstra omsorg, og mange kuld fødes ved kejsersnit. Sæt penge af til en god forsikring, og hold den kølig på varme dage.",
    poorMatchFor: [
      "Du ønsker dig en makker til løbeture, vandreture eller hede sommerdage",
      "En uventet dyrlægeregning på titusindvis af kroner ville blive en stor belastning",
      "Dit hjem bliver varmt om sommeren og er svært at køle ned",
    ],
    keyTradeoffs: [
      "Lille, stille og tilfreds med korte ture, men at holde den rask kan koste mere end for næsten alle andre racer",
      "Det ansigt, der charmerer alle, står også bag de fleste helbredsbekymringer",
    ],
  },
  "border-collie": {
    originalPurpose:
      "Border collien kommer fra bakkerne, hvor England møder Skotland. Her samlede den får over vide skråninger og tog imod signaler fra en hyrde langt væk.",
    healthConsiderations:
      "Heldigvis er det en robust race. Bed om hofteresultater, øjenlysning og DNA-tests for Collie Eye Anomaly, trapped neutrophil syndrome og neuronal ceroid lipofuscinose. Epilepsi forekommer, og mange er følsomme over for høje lyde, så et roligt hjem hjælper.",
    poorMatchFor: [
      "Du ønsker en familiehund, der er tilfreds med gåture og ikke har brug for et job til hovedet",
      "Du bor ved en trafikeret vej, hvor biler og cykler bliver svære ikke at jagte",
      "Dovne weekender i sofaen er din idé om det perfekte",
    ],
    keyTradeoffs: [
      "Måske verdens mest lærenemme hund, og får den ikke noget at lave, finder den selv på projekter",
      "Følsomheden gør den til en fantastisk partner, men et larmende og hektisk hjem kan slide på den",
    ],
  },
  "cavalier-king-charles-spaniel": {
    originalPurpose:
      "Cavalieren blev genskabt i England i 1920'erne for at ligne de små spaniels på malerierne fra Karl II's hof, og den har været en hengiven skødehund fra første dag.",
    healthConsiderations:
      "Hjerteproblemer ses ofte i racen, gerne fra midten af livet, så spørg opdrætteren, hvilke hjertetjek begge forældre har fået. Syringomyeli er en anden tilstand, der ofte nævnes for cavalier, så spørg til den også. Læs racens profil og spørg en dyrlæge, hvilke undersøgelser der giver mening. Generel vejledning, ikke dyrlægeråd.",
    poorMatchFor: [
      "Din cavalier ville være alene det meste af hver hverdag",
      "Jævnlige hjertetjek, og måske livslang medicin, kan ikke være i budgettet",
      "Du vil gerne have en hund, der siger til, når nogen står ved døren",
    ],
    keyTradeoffs: [
      "Et af de mildeste og nemmeste temperamenter, du finder, sammen med en af de mere krævende helbredsprofiler",
      "Elsker alle, den møder, hvilket er skønt derhjemme og helt håbløst som vagthund",
    ],
  },
  "german-shepherd": {
    originalPurpose:
      "Racen blev fastlagt i Tyskland i 1899 som en alsidig hyrdehund, og snart arbejdede den som førerhund, eftersøgningshund og sammen med politi og militær.",
    healthConsiderations:
      "Bed om hofte- og albueresultater og en DNA-test for degenerativ myelopati. Mavedrejning, eksokrin pankreasinsufficiens og en følsom mave eller hud kan dukke op. Det er kærligere at vælge linjer med en lige, balanceret krop frem for en stejlt skrånende ryg.",
    poorMatchFor: [
      "Det er din første hund, og du har endnu ingen plan for træning og socialisering",
      "Du ønsker dig en hund, der af sig selv er afslappet med fremmede",
      "Masser af hundehår og en stærk hund i snoren ville slide dig op",
    ],
    keyTradeoffs: [
      "Dybt loyal og beskyttende, og stabil socialisering holder den beskyttende side i de rette proportioner",
      "En fornøjelse at træne, og rigtig ulykkelig uden faste opgaver",
    ],
  },
  dachshund: {
    originalPurpose:
      "Gravhunden blev avlet i Tyskland til at følge grævlingen (Dachs) ned i graven: en lille, frygtløs jæger med et gø, der kan høres helt op af jorden.",
    healthConsiderations:
      "Rygproblemer (IVDD) rammer en hel del gravhunde og kan blive alvorlige, så det kærligste, du kan gøre, er at holde den slank, bære den på trapper og forsigtigt vænne den fra at hoppe. Ruhårede linjer har ofte færre rygproblemer. Nogle varianter har DNA-tests for øjensygdom (cord1-PRA) og Laforas sygdom.",
    poorMatchFor: [
      "Du bor flere etager oppe uden elevator",
      "Du har brug for en stille hund i en bygning med tynde vægge",
      "De mindste i familien ville elske at løfte hunden op og bære rundt på den",
    ],
    keyTradeoffs: [
      "Lille nok til at komme med overalt, med stemmen og selvtilliden fra en langt større hund",
      "Klog og selvstændig, så indkald og renlighed kræver som regel lidt ekstra tålmodighed",
    ],
  },
  beagle: {
    originalPurpose:
      "Beaglen er en britisk flokhund, avlet til at følge sporet efter hare, mens menneskene fulgte efter til fods. Næsen bestemmer stadig det meste.",
    healthConsiderations:
      "Gode nyheder: beaglen er som regel rask og lever længe. Epilepsi, lavt stofskifte og rygproblemer kan forekomme, og der findes en DNA-test for Musladin-Lueke syndrom. Beagler tager let på, og de fine lange ører skal tjekkes jævnligt.",
    poorMatchFor: [
      "Du drømmer om en hund, du kan stole på uden snor overalt",
      "Dine naboer ville blive generet af lidt hylen, mens du er ude",
      "Din have er ikke ordentligt indhegnet",
    ],
    keyTradeoffs: [
      "Venlig over for både mennesker og hunde, men næsen vinder som regel over det, du lige har bedt om",
      "Kompakt nok til de fleste hjem, med udholdenheden fra en arbejdende drivende hund",
    ],
  },
  "cocker-spaniel": {
    originalPurpose:
      "Cockeren er en britisk fuglehund, avlet til at jage skovsnepper (woodcock) ud af tæt krat og bringe dem tilbage. Deraf navnet.",
    healthConsiderations:
      "Ørerne er det daglige job, så når du tørrer og tjekker dem ofte, sparer du hunden for meget ubehag. Bed om hofteresultater og DNA-tests for progressiv retinal atrofi (prcd-PRA) og familiær nefropati, en nyresygdom. Jagt- og udstillingslinjer er meget forskellige i energi, så spørg, hvilken linje du møder.",
    poorMatchFor: [
      "Jævnlig børstning og klipning ville ryge langt ned på listen",
      "Din cocker ville være alene gennem lange arbejdsdage",
      "Du ønsker en afslappet hund, men er faldet for en hvalp fra jagtlinjer",
    ],
    keyTradeoffs: [
      "Glad og ivrig efter at gøre dig tilfreds, og jagtlinjerne er langt mere travle, end det bløde ansigt antyder",
      "En smuk pels, der har brug for hjælp fra hundefrisøren for at forblive smuk",
    ],
  },
  chihuahua: {
    originalPurpose:
      "Chihuahuaen har navn efter den mexicanske delstat og nedstammer formentlig fra de små selskabshunde i det gamle Mexico. Den har været avlet som selskabshund siden slutningen af 1800-tallet.",
    healthConsiderations:
      "Tænderne kræver mest omsorg, så daglig tandbørstning og en professionel rens en gang imellem gør en stor forskel. Knæskals- og hjerteklapproblemer kan forekomme, og meget små hvalpe kan få lavt blodsukker. Det gode er, at 15 år eller mere er helt normalt.",
    poorMatchFor: [
      "Du har små børn i hjemmet",
      "Du ønsker en hund, der er rolig og stille, når der kommer gæster",
      "Vintrene er kolde, og du vil helst ikke klæde hunden på før gåturen",
    ],
    keyTradeoffs: [
      "Lille i både plads og pris, og så skrøbelig, at den skal håndteres nænsomt",
      "Fuldstændig hengiven til sit menneske, og ofte skeptisk eller snakkesalig over for alle andre",
    ],
  },
  "bernese-mountain-dog": {
    originalPurpose:
      "Berner sennenhunden var gårdhund i den schweiziske kanton Bern, hvor den trak mælkevogne, flyttede køer og holdt et venligt øje med gården.",
    healthConsiderations:
      "Det sværeste ved at elske en berner er, at livet kan blive kort, og kræft, især histiocytært sarkom, er desværre almindeligt. Bed om hofte- og albueresultater og en DNA-test for degenerativ myelopati, og lær tegnene på mavedrejning.",
    poorMatchFor: [
      "Du bor et sted med varmt klima, eller øverst oppe uden elevator",
      "Syv til ti år sammen ville føles for kort",
      "Dyrlæge- og foderregningerne for en stor hund ville presse dit budget",
    ],
    keyTradeoffs: [
      "En mild, tålmodig kæmpe, med kortere tid sammen, end du kunne ønske",
      "Rolig som voksen efter en lang og hoppende teenagetid, og der er hår overalt året rundt",
    ],
  },
};
