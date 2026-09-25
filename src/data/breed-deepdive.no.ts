import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

export const breedDeepDiveNo: Partial<Record<BreedId, BreedDeepDive>> = {
  "labrador-retriever": {
    originalPurpose:
      "Labradoren startet med vannhundene på Newfoundland og ble finpusset i Storbritannia til en apportør som gladelig henter både på land og i iskaldt vann. Det forklarer badegleden.",
    healthConsiderations:
      "En god oppdretter viser deg gjerne hofte- og albueresultater, og DNA-svar for progressiv retinal atrofi (prcd-PRA) og treningsutløst kollaps. Det du bør følge med på i hverdagen, er vekten: mange labradorer har et gen som gir større appetitt, så å måle opp maten holder dem spreke lenger.",
    poorMatchFor: [
      "Du drømmer om en sofa uten hundehår",
      "En daglig tur og litt trening blir vanskelig å få plass til i uka",
      "Hunden ville vært alene hjemme en hel arbeidsdag, de fleste dager",
    ],
    keyTradeoffs: [
      "Herlig lett å trene fordi maten betyr så mye, og den samme appetitten gjør at du må holde et øye med midjen",
      "Hilser på nesten alle som en venn: nydelig selskap, men ingen vakthund",
    ],
  },
  "french-bulldog": {
    originalPurpose:
      "Fransk bulldog stammer fra små engelske bulldoger som kniplingsarbeidere tok med til Frankrike på 1800-tallet. Pariserne falt for dem, og siden har de vært selskapshunder.",
    healthConsiderations:
      "Det søte, flate ansiktet kan gjøre det tungt å puste (BOAS), så spør gjerne om foreldrene er testet for luftveiene, og velg en valp med godt åpne nesebor. Rygg, hudfolder og ører trenger litt ekstra omsorg, og mange kull fødes med keisersnitt. Sett av til en god forsikring, og hold dem kjølige på varme dager.",
    poorMatchFor: [
      "Du ønsker deg en kompis til løpeturer, fjellturer eller hete sommerdager",
      "En uventet veterinærregning på flere titusen kroner ville blitt en stor belastning",
      "Hjemmet ditt blir varmt om sommeren, og det er vanskelig å kjøle det ned",
    ],
    keyTradeoffs: [
      "Liten, stille og fornøyd med korte turer, men å holde den frisk kan koste mer enn for nesten alle andre raser",
      "Ansiktet som sjarmerer alle, står også bak de fleste helsebekymringene",
    ],
  },
  "border-collie": {
    originalPurpose:
      "Border collien kommer fra åsene der England møter Skottland, der den samlet sau over vide lier og tok imot beskjeder fra en gjeter langt unna.",
    healthConsiderations:
      "Heldigvis er dette en robust rase. Be om hofteresultater, øyelysing og DNA-tester for Collie Eye Anomaly, trapped neutrophil syndrome og nevronal ceroid lipofuscinose. Epilepsi forekommer, og mange er følsomme for høye lyder, så et rolig hjem hjelper.",
    poorMatchFor: [
      "Du ønsker en familiehund som er fornøyd med turer og ikke trenger en jobb for hodet",
      "Du bor ved en trafikkert vei der biler og sykler blir vanskelig å la være å jage",
      "Late helger i sofaen er din idé om det perfekte",
    ],
    keyTradeoffs: [
      "Kanskje verdens mest lærenemme hund, og får den ikke noe å gjøre, finner den på sine egne prosjekter",
      "Følsomheten gjør den til en fantastisk partner, men et bråkete og hektisk hjem kan slite på den",
    ],
  },
  "cavalier-king-charles-spaniel": {
    originalPurpose:
      "Cavalieren ble gjenskapt i England på 1920-tallet for å ligne de små spanielene i maleriene fra Karl IIs hoff, og har vært en hengiven fanghund fra første stund.",
    healthConsiderations:
      "Hjerteklaffsykdom er svært vanlig og starter ofte i middelalderen, så be om å få se ferske hjerteattester for begge foreldrene. Syringomyeli er også en reell bekymring, og det er vel verdt å vente på foreldre som er MR-undersøkt. Det finnes DNA-tester for episodic falling og dry eye/curly coat.",
    poorMatchFor: [
      "Cavalieren ville vært alene det meste av hver ukedag",
      "Jevnlige hjertekontroller, og kanskje livslang medisin, får ikke plass i budsjettet",
      "Du vil gjerne ha en hund som sier fra når noen står på døren",
    ],
    keyTradeoffs: [
      "Et av de mildeste og enkleste gemyttene du finner, sammen med en av de mer krevende helseprofilene",
      "Elsker alle den møter, noe som er herlig hjemme og helt ubrukelig som vakthund",
    ],
  },
  "german-shepherd": {
    originalPurpose:
      "Rasen ble fastsatt i Tyskland i 1899 som en allsidig gjeterhund, og det tok ikke lang tid før den jobbet som førerhund, søkshund og sammen med politi og forsvar.",
    healthConsiderations:
      "Be om hofte- og albueresultater og en DNA-test for degenerativ myelopati. Magedreining, eksokrin pankreasinsuffisiens og en følsom mage eller hud kan dukke opp. Det er snillere å velge linjer med rett, balansert kropp enn med en bratt skrånende rygg.",
    poorMatchFor: [
      "Dette er din første hund, og du har ennå ingen plan for trening og sosialisering",
      "Du ønsker deg en hund som er naturlig avslappet med fremmede",
      "Mye hundehår og en sterk hund i båndet ville slitt deg ut",
    ],
    keyTradeoffs: [
      "Dypt lojal og beskyttende, og jevn sosialisering holder den beskyttende siden i riktige proporsjoner",
      "En glede å trene, og ordentlig ulykkelig uten jevnlige oppgaver",
    ],
  },
  dachshund: {
    originalPurpose:
      "Dachsen ble avlet i Tyskland for å følge grevlingen (Dachs) ned i hiet: en liten, uredd jeger med et bjeff kraftig nok til å høres helt ut av jorda.",
    healthConsiderations:
      "Ryggproblemer (IVDD) rammer ganske mange dachser og kan bli alvorlige, så det snilleste du kan gjøre er å holde den slank, bære den i trapper og forsiktig avvenne den fra å hoppe. Strihårede linjer har ofte færre ryggplager. Enkelte varianter har DNA-tester for øyesykdom (cord1-PRA) og Laforas sykdom.",
    poorMatchFor: [
      "Du bor flere etasjer opp uten heis",
      "Du trenger en stille hund i et bygg med tynne vegger",
      "De minste i huset ville elsket å løfte hunden opp og bære den rundt",
    ],
    keyTradeoffs: [
      "Liten nok til å bli med overalt, med stemmen og selvtilliten til en mye større hund",
      "Smart og selvstendig, så innkalling og renslighet krever som regel litt ekstra tålmodighet",
    ],
  },
  beagle: {
    originalPurpose:
      "Beaglen er en britisk flokkhund, avlet for å følge sporet etter hare mens folkene fulgte etter til fots. Den nesen bestemmer fortsatt det meste.",
    healthConsiderations:
      "Gode nyheter: beaglen er som regel frisk og lever lenge. Epilepsi, lavt stoffskifte og ryggproblemer kan forekomme, og det finnes en DNA-test for Musladin-Lueke syndrom. Beagler legger lett på seg, og de fine, lange ørene trenger jevnlig ettersyn.",
    poorMatchFor: [
      "Du drømmer om en hund du kan stole på uten bånd overalt",
      "Naboene dine ville brydd seg om litt uling mens du er borte",
      "Hagen din er ikke ordentlig inngjerdet",
    ],
    keyTradeoffs: [
      "Vennlig mot både folk og hunder, men nesen vinner som regel over det du nettopp ba om",
      "Kompakt nok for de fleste hjem, med utholdenheten til en arbeidende drivhund",
    ],
  },
  "cocker-spaniel": {
    originalPurpose:
      "Cockeren er en britisk fuglehund, avlet for å jage rugda (woodcock) ut av tett kratt og bringe den tilbake. Derav navnet.",
    healthConsiderations:
      "Ørene er den daglige jobben, så å tørke og sjekke dem ofte sparer hunden for mye ubehag. Be om hofteresultater og DNA-tester for progressiv retinal atrofi (prcd-PRA) og familiær nefropati, en nyresykdom. Jakt- og utstillingslinjer er svært ulike i energi, så spør hva slags linje du møter.",
    poorMatchFor: [
      "Jevnlig børsting og klipp ville havnet langt ned på lista",
      "Cockeren ville vært alene gjennom lange arbeidsdager",
      "Du ønsker deg en avslappet hund, men har falt for en valp fra jaktlinjer",
    ],
    keyTradeoffs: [
      "Blid og ivrig etter å gjøre deg glad, og jaktlinjene er mye travlere enn det myke ansiktet tilsier",
      "En vakker pels som trenger hjelp fra hundefrisøren for å forbli vakker",
    ],
  },
  chihuahua: {
    originalPurpose:
      "Chihuahuaen har navnet sitt fra den meksikanske delstaten og stammer trolig fra de små selskapshundene i det gamle Mexico. Den har vært avlet som selskapshund siden slutten av 1800-tallet.",
    healthConsiderations:
      "Tennene trenger mest omsorg, så daglig tannpuss og en profesjonell rens nå og da gjør stor forskjell. Kneskål- og hjerteklaffproblemer kan forekomme, og svært små valper kan slite med lavt blodsukker. Det fine er at 15 år eller mer er helt vanlig.",
    poorMatchFor: [
      "Du har småbarn eller unge barn i huset",
      "Du ønsker en hund som er rolig og stille når det kommer besøk",
      "Vintrene er kalde, og du vil helst slippe å kle på hunden før turen",
    ],
    keyTradeoffs: [
      "Liten i både plass og kostnad, og så skjør at den trenger varsom håndtering",
      "Helt hengiven til sin person, og ofte skeptisk eller pratsom med alle andre",
    ],
  },
  "bernese-mountain-dog": {
    originalPurpose:
      "Berneren var gårdshund i den sveitsiske kantonen Bern, der den trakk melkekjerrer, flyttet kyr og holdt et vennlig øye med tunet.",
    healthConsiderations:
      "Det tyngste med å elske en berner er at livet kan bli kort, og kreft, særlig histiocytært sarkom, er dessverre vanlig. Be om hofte- og albueresultater og en DNA-test for degenerativ myelopati, og lær deg tegnene på magedreining.",
    poorMatchFor: [
      "Du bor et sted med varmt klima, eller i en toppetasje uten heis",
      "Sju til ti år sammen ville kjennes for kort",
      "Veterinær- og fôrregningene til en stor hund ville strukket budsjettet ditt",
    ],
    keyTradeoffs: [
      "En mild, tålmodig kjempe, med kortere tid sammen enn du skulle ønske",
      "Rolig som voksen etter en lang og sprettende ungdomstid, og det er hår overalt hele året",
    ],
  },
};
