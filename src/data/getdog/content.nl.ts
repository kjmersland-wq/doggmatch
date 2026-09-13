/**
 * Alles wat de 'Een Hond Krijgen'-reis te zeggen heeft, in de DoggMatch-stijl.
 * Buiten de componenten gehouden, zodat het later vertaald kan worden zonder
 * ook maar een stukje layout aan te raken.
 */

export interface JourneyStep {
  id: string;
  no: string;
  title: string;
  body: string;
  to: string;
}

export const journey: JourneyStep[] = [
  { id: "ready", no: "01", title: "Is een hond iets voor mij?", body: "Een paar eerlijke vragen over je dagen, je huis en de mensen om je heen.", to: "/get-a-dog/ready" },
  { id: "find", no: "02", title: "Vind mijn hond", body: "Ontdek welke rassen bij een leven zoals het jouwe passen – en waarom.", to: "/find-my-dog" },
  { id: "choose", no: "03", title: "Kies zorgvuldig", body: "Puppy of volwassen, fokker of opvang, en wat je moet vragen voordat je ja zegt.", to: "/get-a-dog/choose" },
  { id: "costs", no: "04", title: "Begrijp de verbintenis", body: "Wat een hond echt kost, voordat ze er zijn en elke maand daarna.", to: "/get-a-dog/costs" },
  { id: "prepare", no: "05", title: "Maak je klaar", body: "De spullen, de dierenarts, de verzekering – en je huis op orde maken.", to: "/get-a-dog/prepare" },
  { id: "welcome", no: "06", title: "Welkom thuis", body: "De eerste dag en de eerste week, rustig aan.", to: "/get-a-dog/welcome-home" },
  { id: "mydog", no: "07", title: "Mijn Hond", body: "Hun hele leven op één plek – voer, training, gezondheid, wandelingen en papieren.", to: "/my-dog" },
];

/* ------------------------------------------------------------ Puppy / adult */

export const puppyVsAdult = {
  title: "Een puppy, of een hond die al volwassen is?",
  body: "Het ene is niet beter dan het andere. Het zijn twee heel verschillende eerste jaren, en de juiste keuze hangt veel meer af van jouw leven dan van de hond.",
  puppy: {
    title: "Een puppy",
    lead: "Je mag bijna alles vormen – en je betaalt ervoor met slaap.",
    good: [
      "Je ziet elke fase van wie ze worden",
      "Socialisatie en gewoontes beginnen bij jou",
      "Meestal makkelijker te introduceren aan andere huisdieren en kinderen",
      "Een lang leven samen voor de boeg",
    ],
    hard: [
      "Onderbroken nachten, zindelijkheidstraining en kauwen, maandenlang",
      "Heeft in het begin het grootste deel van de dag gezelschap nodig",
      "Persoonlijkheid is nog steeds een gok, zelfs bij een zorgvuldige fokker",
      "Vaccinaties, sterilisatie en vroege dierenartskosten vallen in het eerste jaar",
    ],
  },
  adult: {
    title: "Een volwassen hond",
    lead: "Veel meer van wat je ziet, is wat je krijgt.",
    good: [
      "Grootte, vacht en temperament zijn al duidelijk",
      "Veel zijn zindelijk en kunnen alleen zijn",
      "Vaak rustiger vanaf dag één",
      "Opvanghonden komen meestal met een eerlijke beoordeling van de hond",
    ],
    hard: [
      "Ze komen met een geschiedenis die je misschien maar deels kent",
      "Sommige gewoontes vergen geduld om te veranderen",
      "Minder jaren samen, vooral met een oudere hond",
      "Aanpassen kan weken duren, geen dagen",
    ],
  },
  closing:
    "Als je dagen al vol zijn, is een volwassen hond die weet hoe hij een hond moet zijn vaak de vriendelijkere keuze – voor jou en voor hem.",
};

/* -------------------------------------------------------------- The source */

export const sources = {
  title: "Waar komt je hond vandaan?",
  body: "Beide routes kunnen je een prachtige hond brengen. Beide zijn een paar zorgvuldige vragen waard. Geen van beide is automatisch het juiste antwoord.",
  breeder: {
    title: "Een verantwoordelijke fokker",
    good: [
      "Je ontmoet de moeder en ziet hoe de puppy's worden grootgebracht",
      "Gezondheidstesten relevant voor het ras zijn meestal gedaan",
      "Je krijgt een redelijk duidelijk beeld van de volwassen grootte, vacht en temperament",
      "Een goede fokker blijft contact houden gedurende het hele leven van de hond",
    ],
    check: [
      "Worden de puppy's in een huis grootgebracht, rondom het normale gezinsleven?",
      "Welke gezondheidstesten zijn gedaan, en kun je de resultaten zien?",
      "Hoeveel nesten hebben ze, en van hoeveel rassen?",
      "Nemen ze de hond terug als je omstandigheden ooit veranderen?",
    ],
  },
  rescue: {
    title: "Adoptie of opvang",
    good: [
      "Volwassen honden komen met een persoonlijkheid die je echt kunt ontmoeten",
      "Goede opvangcentra beoordelen en beschrijven hun honden eerlijk",
      "Vaak al gevaccineerd, gechipt en gesteriliseerd",
      "Ondersteuning na adoptie is meestal onderdeel van de deal",
    ],
    check: [
      "Wat weten ze over de geschiedenis en het vorige thuis van de hond?",
      "Hoe gedraagt de hond zich bij kinderen, andere honden en katten?",
      "Welke gezondheidsinformatie krijg je mee?",
      "Welke hulp is er als de eerste weken moeilijk zijn?",
    ],
  },
};

export const breederQuestions = [
  "Mag ik de moeder ontmoeten?",
  "Mag ik zien waar de puppy's worden grootgebracht?",
  "Welke gezondheidstesten zijn er gedaan voor dit ras?",
  "Welke veterinaire zorg hebben de puppy's tot nu toe gehad?",
  "Hoe zijn ze gesocialiseerd – wat hebben ze ontmoet en gehoord?",
  "Welke ondersteuning is er nadat ik de puppy mee naar huis neem?",
  "Welke documentatie ontvang ik?",
  "Mag ik een paar dagen bedenktijd nemen?",
];

export const breederRedFlags = [
  "Je wordt onder druk gezet om direct te betalen of te beslissen",
  "Je kunt niet zien waar de puppy's wonen, of de moeder niet ontmoeten",
  "Gezondheids- of vaccinatiebewijzen ontbreken of zijn vaag",
  "Rechttoe rechtaan vragen krijgen ontwijkende antwoorden",
  "Een ongewoon groot aantal niet-gerelateerde nesten, of veel rassen tegelijk",
  "Een puppy ziet er ziek uit, of is extreem bang voor gewone dingen",
  "Het verhaal verandert tussen gesprekken door",
];

export const adoptionConsiderations = [
  { title: "Geschiedenis", body: "Sommige honden komen met een compleet verhaal, andere met bijna geen. Een goed opvangcentrum zal je eerlijk vertellen welk geval dit is." },
  { title: "Temperament", body: "Vraag wat ze daadwerkelijk hebben gezien: bij vreemden, aan de lijn, in de auto, een uur alleen gelaten." },
  { title: "Gezondheid", body: "Vraag om de dierenartsgegevens, niet om een samenvatting. Chronische aandoeningen zijn beheersbaar als je erover weet." },
  { title: "Gedrag", body: "De meeste 'problemen' zijn een hond die niet is geleerd, of bang is. Vraag welke hulp beschikbaar is." },
  { title: "Jouw huis", body: "Trappen, kinderen, katten, een drukke straat – zeg het allemaal hardop. Een goede match is belangrijker dan een snelle." },
  { title: "Daarna", body: "Vraag welke ondersteuning er is in de tweede week, wanneer de eerste opwinding is verdwenen en de echte hond tevoorschijn komt." },
];

/* -------------------------------------------------------------- The costs */

export interface CostGroup {
  id: string;
  title: string;
  body: string;
  items: { label: string; note: string }[];
}

export const costGroups: CostGroup[] = [
  {
    id: "before",
    title: "Voordat je hond arriveert",
    body: "De eenmalige uitgave. Het meeste gebeurt in een enkele veertien dagen, daarom verrast het mensen.",
    items: [
      { label: "Aankoop- of adoptiefee", note: "Varieert enorm per ras, land en route" },
      { label: "Mand en een bench indien je die gebruikt", note: "Koop de maat waar ze in groeien" },
      { label: "Voerbakken, halsband, tuigje, riem, ID-tag", note: "Wettelijke ID-vereisten verschillen per land" },
      { label: "Verzorgingskit", note: "Borstel, kam, nagelknipper, tandenborstel" },
      { label: "Speeltjes en kauwmateriaal", note: "Minder dan je denkt, vaker vervangen dan je denkt" },
      { label: "Eerste dierenartsbezoek", note: "Controle, vaccinaties, chip indien nog niet gedaan" },
    ],
  },
  {
    id: "monthly",
    title: "Elke maand",
    body: "De gestage kosten. De moeite waard om eerlijk op te schrijven voordat je je committeert, niet erna.",
    items: [
      { label: "Voer", note: "De grootste maandelijkse post, en het schaalt met grootte" },
      { label: "Snoepjes en kauwmateriaal", note: "Training draait erop in het eerste jaar" },
      { label: "Verzekering", note: "Goedkoper hoe jonger en gezonder ze zijn" },
      { label: "Verzorging", note: "Van niets tot een salonbezoek om de zes weken" },
      { label: "Routinezorg", note: "Ontworming, vlooien- en tekenbehandeling, nagels knippen" },
      { label: "Hulp tijdens werk", note: "Een uitlater of dagopvang, als je dagen lang zijn" },
    ],
  },
  {
    id: "unexpected",
    title: "Waar je op voorbereid moet zijn",
    body: "Het deel waar niemand voor begroot. Een beetje elke maand opzij zetten maakt deze draaglijk.",
    items: [
      { label: "Onverwachte veterinaire behandeling", note: "Blessures en ziekte komen zelden op een handig moment" },
      { label: "Tandheelkundige zorg", note: "Heel gebruikelijk op middelbare leeftijd, en niet goedkoop" },
      { label: "Nood- en buiten-kantooruren zorg", note: "Kost meer dan een geplande afspraak" },
      { label: "Vervangen van spullen", note: "Bedden, riemen en een of twee items waar je dol op was" },
    ],
  },
];

/* ---------------------------------------------------------------- Your home */

export const homeScenarios = [
  { id: "apartment", title: "Een appartement", body: "Perfect werkbaar. Denk aan trappen of een lift, buren, en waar je naartoe gaat voor de eerste wandeling van de dag." },
  { id: "house", title: "Een huis", body: "Ruimte binnenshuis is minder belangrijk dan je zou denken. Wat belangrijk is, is het wandelen binnen tien minuten van je deur." },
  { id: "garden", title: "Een tuin", body: "Fijn om te hebben, en geen vervanging voor een wandeling. Controleer het hek, de poort en alles wat groeit en niet gegeten mag worden." },
  { id: "city", title: "Stad", body: "Drukke trottoirs, verkeer, liften en cafés. Stads honden moeten vooral comfortabel zijn met lawaai." },
  { id: "suburb", title: "Voorstad", body: "Meestal het makkelijkst van allemaal: rustige straten, groen in de buurt, en ergens om stoom af te blazen in het weekend." },
  { id: "rural", title: "Platteland", body: "Ruimte en vrijheid, met vee, wilde dieren en een langere rit naar de dierenarts om rekening mee te houden." },
];

export const homeFactors = [
  "Trappen, en of je hond ze aan beide uiteinden van het leven zou kunnen beheren",
  "Een lift, en of ze zich er comfortabel in zullen voelen",
  "Buitenruimte, en hoe veilig die werkelijk is",
  "Groene gebieden binnen een gemakkelijke wandeling",
  "Ergens veilig om een hond te laten rennen",
  "Cafés, winkels en transport die honden verwelkomen",
];

export const lifeScenarios = [
  { id: "quiet", title: "Rustige huismus", body: "Stabiele routines en korte, regelmatige wandelingen. Een rustigere hond zal hier gelukkiger zijn dan een atleet." },
  { id: "outdoors", title: "Actief buitenleven", body: "Weekends op pad, weer geen bezwaar. Een fitte hond die met je mee kan opbouwen in afstand." },
  { id: "city", title: "Stadsleven", body: "Trottoirs, transport, drukte. Zelfvertrouwen rondom lawaai is belangrijker dan grootte." },
  { id: "family", title: "Gezinsleven", body: "Lawaai, bezoekers, schoolrondes. Tolerantie en een plek om je terug te trekken zijn wat telt." },
  { id: "home-office", title: "Thuiswerken", body: "Geweldig voor een hond – zolang ze ook leren om soms alleen te zijn." },
  { id: "retired", title: "Gepensioneerd of flexibel", body: "Tijd en routine, wat het meeste is wat een hond wil. Denk aan kracht aan de lijn." },
  { id: "travel", title: "Frequente reiziger", body: "Volledig mogelijk met een plan: een vaste oppas, of een hond die goed met je meereist." },
];

/* ------------------------------------------------------------- Preparation */

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

export const arrivalChecklist: ChecklistItem[] = [
  { id: "food", label: "Voer", note: "Begin met wat ze al eten, verander dan langzaam" },
  { id: "bowls", label: "Voerbakken", note: "Eén voor voer, één altijd vol met water" },
  { id: "collar", label: "Halsband" },
  { id: "tag", label: "ID-tag", note: "Je telefoonnummer, minimaal" },
  { id: "harness", label: "Tuigje" },
  { id: "lead", label: "Riem" },
  { id: "bed", label: "Mand", note: "Ergens rustig, buiten het doorgaande verkeer van het huis" },
  { id: "toys", label: "Een paar speeltjes" },
  { id: "grooming", label: "Verzorgingsspullen" },
  { id: "toothbrush", label: "Tandenborstel en hondentandpasta" },
  { id: "waste", label: "Poepzakjes" },
  { id: "cleaning", label: "Schoonmaakmiddelen", note: "Een enzymreiniger, voor de ongelukjes die zullen gebeuren" },
  { id: "travel", label: "Veilige reisuitrusting", note: "Voor de reis naar huis en daarna" },
  { id: "vet", label: "Dierenartsafspraak geboekt" },
  { id: "insurance", label: "Verzekering geregeld" },
  { id: "microchip", label: "Chipgegevens", note: "Geregistreerd op jouw naam, met je huidige telefoonnummer" },
  { id: "emergency", label: "Noodcontacten opgeschreven", note: "Je dierenarts, en de dichtstbijzijnde spoedkliniek" },
];

export const firstDay = [
  { title: "Houd het rustig", body: "Geen welkomstfeest. Alleen de mensen die hier wonen, die normaal praten." },
  { title: "Laat ze hun mand zien", body: "Breng ze naar de plek die van hen is, en laat ze op hun eigen tempo terugkomen." },
  { title: "Water, dan voer", body: "Water meteen. Voer als ze een beetje tot rust zijn gekomen, en hetzelfde voer als ze daarvoor hadden." },
  { title: "Laat ze verkennen", body: "Eén kamer tegelijk, zonder riem, met jou in de buurt en niet erbovenop." },
  { title: "Houd de wereld klein", body: "Het huis en de tuin zijn genoeg voor één dag. Al het andere kan wachten." },
  { title: "Begin met observeren", body: "Wanneer ze naar buiten moeten, waar ze kiezen om te slapen, wat hen ongemakkelijk maakt. Dit is het begin van hen kennen." },
];

export const firstWeek = [
  { title: "Een zachte routine", body: "Dezelfde tijden voor voer, wandelingen en slapen. Voorspelbaarheid is wat een hond het snelst tot rust brengt." },
  { title: "Hun naam", body: "Zeg het, en beloon ze als ze naar je kijken. Niets ingewikkelder dan dat nog." },
  { title: "De eerste kleine lessen", body: "Komen als je roept, en een paar minuten alleen zijn." },
  { title: "Zindelijkheidstraining", body: "Buiten na slapen, eten en spelen. Prijs het moment dat het gebeurt, bestraf nooit de ongelukjes." },
  { title: "Slapen", body: "Nieuwe honden slapen enorm veel. Laat ze. Puppy's hebben het grootste deel van de dag nodig." },
  { title: "De wereld ontmoeten", body: "In een tempo dat past bij hun leeftijd, en in lijn met het advies van je dierenarts over vaccinaties." },
  { title: "Samen zijn", body: "Rustig in dezelfde kamer zitten doet meer voor een band dan enige beweging." },
  { title: "Opmerken", body: "Eetlust, toiletgewoonten, energie. Je weet sneller dan je denkt wat normaal voor hen is." },
];
