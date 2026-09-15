/**
 * Everything the Get A Dog journey says out loud, in the DoggMatch voice.
 * Kept out of the components so it can be translated later without touching
 * a single piece of layout.
 */

export interface JourneyStep {
  id: string;
  no: string;
  title: string;
  body: string;
  to: string;
}

export const journey: JourneyStep[] = [
  { id: "ready", no: "01", title: "Är en hund rätt för mig?", body: "Några ärliga frågor om dina dagar, ditt hem och människorna runt omkring dig.", to: "/get-a-dog/ready" },
  { id: "find", no: "02", title: "Hitta min hund", body: "Se vilka raser som tenderar att passa ett liv som ditt – och varför.", to: "/find-my-dog" },
  { id: "choose", no: "03", title: "Välj med omsorg", body: "Valp eller vuxen, uppfödare eller omplacering, och vad du ska fråga innan du säger ja.", to: "/get-a-dog/choose" },
  { id: "costs", no: "04", title: "Förstå åtagandet", body: "Vad en hund verkligen kostar, innan de kommer och varje månad efteråt.", to: "/get-a-dog/costs" },
  { id: "prepare", no: "05", title: "Gör dig redo", body: "Inköpen, veterinären, försäkringen – och att ordna hemmet.", to: "/get-a-dog/prepare" },
  { id: "welcome", no: "06", title: "Välkommen hem", body: "Första dagen och första veckan, tagna varsamt.", to: "/get-a-dog/welcome-home" },
  { id: "mydog", no: "07", title: "Min hund", body: "Hela deras liv på ett ställe – mat, träning, hälsa, promenader och papper.", to: "/my-dog" },
];

/* ------------------------------------------------------------ Puppy / adult */

export const puppyVsAdult = {
  title: "Valp, eller en hund som redan vuxit upp?",
  body: "Ingen är bättre. Det är två helt olika första år, och det rätta beror mycket mer på ditt liv än på hunden.",
  puppy: {
    title: "En valp",
    lead: "Du får forma nästan allt – och du betalar det i sömn.",
    good: [
      "Du får se varje steg av vem de blir",
      "Socialisering och vanor börjar med dig",
      "Oftast lättare att introducera för andra husdjur och barn",
      "Ett långt liv tillsammans framför er",
    ],
    hard: [
      "Avbrutna nätter, rumsrensträning och tuggande, i månader",
      "Behöver sällskap större delen av dagen till en början",
      "Personligheten är fortfarande en gissning, även med en noggrann uppfödare",
      "Vaccinationer, kastrering och tidiga veterinärkostnader landar under första året",
    ],
  },
  adult: {
    title: "En vuxen hund",
    lead: "Mycket mer av vad du ser är vad du får.",
    good: [
      "Storlek, päls och temperament är redan tydliga",
      "Många är rumsrena och kan vara ensamma",
      "Ofta lugnare från dag ett",
      "Omplaceringshundar kommer oftast med en ärlig bedömning av hunden",
    ],
    hard: [
      "De kommer med en historia du kanske bara delvis känner till",
      "Vissa vanor tar tålamod att ändra",
      "Färre år tillsammans, särskilt med en äldre hund",
      "Att anpassa sig kan ta veckor, inte dagar",
    ],
  },
  closing:
    "Om dina dagar redan är fulla, är en vuxen hund som vet hur man är hund ofta det snällare valet – för dig och för dem.",
};

/* -------------------------------------------------------------- The source */

export const sources = {
  title: "Var kommer din hund ifrån?",
  body: "Båda vägarna kan ge dig en underbar hund. Båda är värda några noggranna frågor. Ingen är automatiskt det rätta svaret.",
  breeder: {
    title: "En ansvarsfull uppfödare",
    good: [
      "Du träffar mamman och ser hur valparna föds upp",
      "Hälsotestning relevant för rasen har oftast gjorts",
      "Du får en ganska tydlig bild av vuxen storlek, päls och temperament",
      "En bra uppfödare håller kontakten under hela hundens liv",
    ],
    check: [
      "Föds valparna upp i ett hem, runt normala hushållssysslor?",
      "Vilken hälsotestning har gjorts, och kan du se resultaten?",
      "Hur många kullar har de, och av hur många raser?",
      "Kommer de att ta tillbaka hunden om dina omständigheter någonsin förändras?",
    ],
  },
  rescue: {
    title: "Omplacering eller räddning",
    good: [
      "Vuxna hundar kommer med en personlighet du faktiskt kan möta",
      "Bra omplaceringshem bedömer och beskriver sina hundar ärligt",
      "Ofta redan vaccinerade, chippade och kastrerade",
      "Stöd efter adoption är oftast en del av paketet",
    ],
    check: [
      "Vad vet de om hundens historia och tidigare hem?",
      "Hur beter sig hunden runt barn, andra hundar och katter?",
      "Vilken hälsoinformation följer med dem?",
      "Vilken hjälp finns om de första veckorna är svåra?",
    ],
  },
};

export const breederQuestions = [
  "Kan jag träffa mamman?",
  "Kan jag se var valparna föds upp?",
  "Vilken hälsotestning har gjorts för den här rasen?",
  "Vilken veterinärvård har valparna fått hittills?",
  "Hur har de socialiserats – vad har de mött och hört?",
  "Vilket stöd finns efter att jag tagit hem valpen?",
  "Vilken dokumentation kommer jag att få?",
  "Kan jag ta några dagar på mig att bestämma mig?",
];

export const breederRedFlags = [
  "Du pressas att betala eller bestämma dig omedelbart",
  "Du kan inte se var valparna bor, eller träffa mamman",
  "Hälso- eller vaccinationsdokumentation saknas eller är vag",
  "Raka frågor får undvikande svar",
  "Ett ovanligt stort antal orelaterade kullar, eller många raser samtidigt",
  "En valp ser sjuk ut, eller är extremt rädd för vanliga saker",
  "Berättelsen ändras mellan samtal",
];

export const adoptionConsiderations = [
  { title: "Historia", body: "Vissa hundar kommer med en fullständig historia, andra med nästan ingen. Ett bra omplaceringshem kommer att berätta ärligt vilken det är." },
  { title: "Temperament", body: "Fråga vad de faktiskt har sett: med främlingar, i koppel, i bilen, ensamma i en timme." },
  { title: "Hälsa", body: "Be om veterinäranteckningarna, inte en sammanfattning. Pågående tillstånd är hanterbara när du känner till dem." },
  { title: "Beteende", body: "De flesta 'problem' är en hund som inte har lärt sig, eller är rädd. Fråga vilken hjälp som finns tillgänglig." },
  { title: "Ditt hem", body: "Trappor, barn, katter, en livlig gata – säg allt det högt. En bra match är viktigare än en snabb." },
  { title: "Efteråt", body: "Fråga vilket stöd som finns i vecka två, när den första spänningen har lagt sig och den riktiga hunden visar sig." },
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
    title: "Innan din hund anländer",
    body: "Engångskostnaden. Det mesta sker under en enda vecka, vilket är varför det överraskar folk.",
    items: [
      { label: "Inköps- eller adoptionsavgift", note: "Varierar enormt beroende på ras, land och väg" },
      { label: "Säng och en bur om du använder en", note: "Köp den storlek de kommer att växa till" },
      { label: "Skålar, halsband, sele, koppel, ID-bricka", note: "Lagliga ID-krav skiljer sig åt mellan länder" },
      { label: "Pälsvårdsutrustning", note: "Borste, kam, klotång, tandborste" },
      { label: "Leksaker och tuggben", note: "Färre än du tror, ersätts oftare än du tror" },
      { label: "Första veterinärbesöket", note: "Kontroll, vaccinationer, chipmärkning där det inte redan gjorts" },
    ],
  },
  {
    id: "monthly",
    title: "Varje månad",
    body: "Den stadiga kostnaden. Värt att skriva ner ärligt innan du åtar dig, inte efter.",
    items: [
      { label: "Mat", note: "Den enskilt största månatliga posten, och den skalar med storlek" },
      { label: "Godis och tuggben", note: "Träning drivs av dem under första året" },
      { label: "Försäkring", note: "Billigare ju yngre och friskare de är" },
      { label: "Pälsvård", note: "Från ingenting till ett salongsbesök var sjätte vecka" },
      { label: "Rutinvård", note: "Avmaskning, fästing- och loppbehandling, kloklippning" },
      { label: "Hjälp medan du arbetar", note: "En hundvakt eller dagis, om dina dagar är långa" },
    ],
  },
  {
    id: "unexpected",
    title: "Något att vara beredd på",
    body: "Den del ingen budgeterar för. Lite sparat varje månad gör dessa hanterbara.",
    items: [
      { label: "Oväntad veterinärvård", note: "Skador och sjukdomar anländer sällan bekvämt" },
      { label: "Tandvård", note: "Mycket vanligt i medelåldern, och inte billigt" },
      { label: "Akut- och jourvård", note: "Kostnader mer än ett planerat besök" },
      { label: "Ersätta saker", note: "Sängar, koppel och en eller två saker du gillade" },
    ],
  },
];

/* ---------------------------------------------------------------- Your home */

export const homeScenarios = [
  { id: "apartment", title: "En lägenhet", body: "Perfekt fungerande. Tänk på trappor eller hiss, grannar och var du ska gå för den första promenaden på dagen." },
  { id: "house", title: "Ett hus", body: "Utrymme inomhus spelar mindre roll än du kan tro. Det som spelar roll är promenaderna inom tio minuter från din dörr." },
  { id: "garden", title: "En trädgård", body: "Härligt att ha, och ingen ersättning för en promenad. Kontrollera staketet, grinden och allt som växer som inte borde ätas." },
  { id: "city", title: "Stad", body: "Livliga trottoarer, trafik, hissar och kaféer. Stadshundar behöver vara bekväma med ljud mer än något annat." },
  { id: "suburb", title: "Förort", body: "Oftast det enklaste av allt: tysta gator, grönområden i närheten och någonstans att släppa ut energi på helgen." },
  { id: "rural", title: "Landsbygd", body: "Utrymme och frihet, med boskap, vilda djur och en längre bilresa till veterinären att tänka på." },
];

export const homeFactors = [
  "Trappor, och om din hund skulle klara dem i båda livets ändar",
  "En hiss, och om de kommer att vara bekväma i en",
  "Uteplats, och hur säker den verkligen är",
  "Grönområden inom en lätt promenad",
  "Någonstans säkert att låta en hund springa",
  "Kaféer, butiker och transporter som välkomnar hundar",
];

export const lifeScenarios = [
  { id: "quiet", title: "Lugn hemmamänniska", body: "Stabila rutiner och korta, regelbundna promenader. En lugnare hund kommer att vara lyckligare här än en atlet." },
  { id: "outdoors", title: "Aktiv utomhus", body: "Helger på stigar, väder spelar ingen roll. En frisk hund som kan bygga upp distans med dig." },
  { id: "city", title: "Stadsliv", body: "Trottoarer, transporter, folkmassor. Självförtroende kring ljud är viktigare än storlek." },
  { id: "family", title: "Familjeliv", body: "Ljud, besökare, skolskjutsar. Tolerans och en plats att dra sig tillbaka till är vad som räknas." },
  { id: "home-office", title: "Arbeta hemifrån", body: "Underbart för en hund – så länge de också lär sig att vara ensamma ibland." },
  { id: "retired", title: "Pensionerad eller flexibel", body: "Tid och rutin, vilket är det mesta av vad en hund vill ha. Tänk på styrkan i kopplet." },
  { id: "travel", title: "Frekvent resenär", body: "Helt möjligt med en plan: en regelbunden hundvakt, eller en hund som reser bra med dig." },
];

/* ------------------------------------------------------------- Preparation */

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

export const arrivalChecklist: ChecklistItem[] = [
  { id: "food", label: "Mat", note: "Börja med vad de redan äter, ändra sedan långsamt" },
  { id: "bowls", label: "Skålar", note: "En för mat, en alltid fylld med vatten" },
  { id: "collar", label: "Halsband" },
  { id: "tag", label: "ID-bricka", note: "Ditt telefonnummer, som minimum" },
  { id: "harness", label: "Sele" },
  { id: "lead", label: "Koppel" },
  { id: "bed", label: "Säng", note: "Någonstans lugnt, borta från husets genomfart" },
  { id: "toys", label: "Några leksaker" },
  { id: "grooming", label: "Pälsvårdsutrustning" },
  { id: "toothbrush", label: "Tandborste och hundtandkräm" },
  { id: "waste", label: "Bajspåsar" },
  { id: "cleaning", label: "Rengöringsmedel", note: "Ett enzymatiskt rengöringsmedel, för de olyckor som kommer att hända" },
  { id: "travel", label: "Säker reseutrustning", note: "För resan hem såväl som efteråt" },
  { id: "vet", label: "Veterinärbesök bokat" },
  { id: "insurance", label: "Försäkring ordnad" },
  { id: "microchip", label: "Chipmärkningsuppgifter", note: "Registrerad i ditt namn, med ditt nuvarande telefonnummer" },
  { id: "emergency", label: "Nödkontakter nedskrivna", note: "Din veterinär, och närmaste jourklinik" },
];

export const firstDay = [
  { title: "Håll det lugnt", body: "Ingen välkomstfest. Bara de som bor här, som pratar normalt." },
  { title: "Visa dem deras säng", body: "Ta dem till platsen som är deras, och låt dem komma tillbaka dit i sin egen takt." },
  { title: "Vatten, sedan mat", body: "Vatten direkt. Mat när de har lugnat sig lite, och samma mat som de hade innan." },
  { title: "Låt dem utforska", body: "Ett rum i taget, utan koppel, med dig i närheten och inte svävande." },
  { title: "Håll världen liten", body: "Huset och trädgården räcker gott för en dag. Allt annat kan vänta." },
  { title: "Börja observera", body: "När de behöver gå ut, var de väljer att sova, vad som gör dem oroliga. Detta är början på att känna dem." },
];

export const firstWeek = [
  { title: "En mild rutin", body: "Samma tider för mat, promenader och säng. Förutsägbarhet är det som lugnar en hund snabbast." },
  { title: "Deras namn", body: "Säg det, och belöna dem för att de tittar på dig. Inget mer komplicerat än så än." },
  { title: "De första små lektionerna", body: "Komma när de kallas på, och vara bekväma ensamma under några minuter åt gången." },
  { title: "Toalett-rutin", body: "Utomhus efter sömn, mat och lek. Beröm ögonblicket det händer, skäll aldrig för olyckor." },
  { title: "Sömn", body: "Nya hundar sover enormt mycket. Låt dem. Valpar behöver större delen av dagen." },
  { title: "Möta världen", body: "I en takt som passar deras ålder, och i linje med din veterinärs råd om vaccinationer." },
  { title: "Att vara tillsammans", body: "Att sitta tyst i samma rum gör mer för ett band än någon motion." },
  { title: "Lägga märke till", body: "Aptit, toalettvanor, energi. Du kommer att veta vad som är normalt för dem snabbare än du tror." },
];
