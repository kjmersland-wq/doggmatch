/**
 * Alt det, rejsen 'Få en hund' siger højt, i DoggMatch-stemmen.
 * Opbevaret uden for komponenterne, så det kan oversættes senere uden at røre
 * et eneste stykke layout.
 */

export interface JourneyStep {
  id: string;
  no: string;
  title: string;
  body: string;
  to: string;
}

export const journey: JourneyStep[] = [
  { id: "ready", no: "01", title: "Er en hund noget for mig?", body: "Et par ærlige spørgsmål om dine dage, dit hjem og de mennesker, der er omkring dig.", to: "/get-a-dog/ready" },
  { id: "find", no: "02", title: "Find min hund", body: "Se, hvilke racer der typisk passer til et liv som dit – og hvorfor.", to: "/find-my-dog" },
  { id: "choose", no: "03", title: "Vælg med omhu", body: "Hvalp eller voksen, opdrætter eller internat, og hvad du skal spørge om, før du siger ja.", to: "/get-a-dog/choose" },
  { id: "costs", no: "04", title: "Forstå forpligtelsen", body: "Hvad en hund virkelig koster, før den kommer, og hver måned derefter.", to: "/get-a-dog/costs" },
  { id: "prepare", no: "05", title: "Gør dig klar", body: "Indkøbene, dyrlægen, forsikringen – og at få styr på dit hjem.", to: "/get-a-dog/prepare" },
  { id: "welcome", no: "06", title: "Velkommen hjem", body: "Den første dag og den første uge, taget blidt.", to: "/get-a-dog/welcome-home" },
  { id: "mydog", no: "07", title: "Min hund", body: "Hele dens liv ét sted – mad, træning, sundhed, gåture og papirarbejde.", to: "/my-dog" },
];

/* ------------------------------------------------------------ Hvalp / voksen */

export const puppyVsAdult = {
  title: "Hvalp, eller en hund der allerede er voksen?",
  body: "Ingen af delene er bedre. Det er to ret forskellige første år, og den rigtige afhænger langt mere af dit liv end af hunden.",
  puppy: {
    title: "En hvalp",
    lead: "Du får lov at forme næsten alt – og du betaler for det med søvn.",
    good: [
      "Du ser alle stadier af, hvem de bliver",
      "Socialisering og vaner starter med dig",
      "Normalt lettere at introducere til andre kæledyr og børn",
      "Et langt liv forude sammen",
    ],
    hard: [
      "Afbrudte nætter, renlighedstræning og tyggeri, i månedsvis",
      "Har brug for selskab det meste af dagen i starten",
      "Personligheden er stadig et gæt, selv med en omhyggelig opdrætter",
      "Vaccinationer, neutralisering og tidlige dyrlægeomkostninger falder i det første år",
    ],
  },
  adult: {
    title: "En voksen hund",
    lead: "Meget mere af det, du ser, er det, du får.",
    good: [
      "Størrelse, pels og temperament er allerede tydeligt",
      "Mange er renlige og kan falde til alene",
      "Ofte roligere fra dag ét",
      "Hunderedningsorganisationer giver normalt en ærlig vurdering af hunden",
    ],
    hard: [
      "De ankommer med en historie, du måske kun delvist kender",
      "Nogle vaner kræver tålmodighed at ændre",
      "Færre år sammen, især med en ældre hund",
      "At falde til kan tage uger, ikke dage",
    ],
  },
  closing:
    "Hvis dine dage allerede er fyldte, er en voksen hund, der ved, hvordan man er hund, ofte det venligste valg – for dig og for den.",
};

/* -------------------------------------------------------------- Kilden */

export const sources = {
  title: "Hvor skal din hund komme fra?",
  body: "Begge veje kan give dig en vidunderlig hund. Begge er værd et par omhyggelige spørgsmål. Ingen af dem er automatisk det rigtige svar.",
  breeder: {
    title: "En ansvarlig opdrætter",
    good: [
      "Du møder moderen og ser, hvordan hvalpene bliver opdraget",
      "Sundhedstest relevant for racen er normalt udført",
      "Du får et ret klart billede af voksen størrelse, pels og temperament",
      "En god opdrætter holder kontakten hele hundens liv",
    ],
    check: [
      "Bliver hvalpene opdraget i et hjem, midt i det almindelige familieliv?",
      "Hvilke sundhedstest er udført, og kan du se resultaterne?",
      "Hvor mange kuld har de, og af hvor mange racer?",
      "Vil de tage hunden tilbage, hvis dine omstændigheder nogensinde ændrer sig?",
    ],
  },
  rescue: {
    title: "Adoption eller internat",
    good: [
      "Voksne hunde kommer med en personlighed, du rent faktisk kan møde",
      "Gode internater vurderer og beskriver deres hunde ærligt",
      "Ofte allerede vaccineret, chippet og neutraliseret",
      "Støtte efter adoption er normalt en del af aftalen",
    ],
    check: [
      "Hvad ved de om hundens historie og tidligere hjem?",
      "Hvordan opfører hunden sig over for børn, andre hunde og katte?",
      "Hvilken sundhedsinformation følger med dem?",
      "Hvilken hjælp er der, hvis de første uger er svære?",
    ],
  },
};

export const breederQuestions = [
  "Må jeg møde moderen?",
  "Må jeg se, hvor hvalpene bliver opdraget?",
  "Hvilke sundhedstest er udført for denne race?",
  "Hvilken dyrlægebehandling har hvalpene fået indtil videre?",
  "Hvordan er de blevet socialiseret – hvad har de mødt og hørt?",
  "Hvilken støtte er der, efter jeg tager hvalpen med hjem?",
  "Hvilken dokumentation vil jeg modtage?",
  "Må jeg bruge et par dage på at beslutte mig?",
];

export const breederRedFlags = [
  "Du bliver presset til at betale eller beslutte dig med det samme",
  "Du kan ikke se, hvor hvalpene bor, eller møde moderen",
  "Sundheds- eller vaccinationsdokumentation mangler eller er vag",
  "Ligeud-spørgsmål får undvigende svar",
  "Et usædvanligt stort antal uafhængige kuld, eller mange racer på én gang",
  "En hvalp ser syg ud, eller er ekstremt bange for almindelige ting",
  "Historien ændrer sig mellem samtaler",
];

export const adoptionConsiderations = [
  { title: "Historie", body: "Nogle hunde ankommer med en fuld historie, andre med næsten ingen. Et godt internat vil ærligt fortælle dig, hvilken af delene det er." },
  { title: "Temperament", body: "Spørg, hvad de rent faktisk har observeret: over for fremmede, i snor, i bilen, alene i en time." },
  { title: "Sundhed", body: "Bed om dyrlægejournalerne, ikke et resumé. Løbende tilstande kan håndteres, når du kender til dem." },
  { title: "Adfærd", body: "De fleste 'problemer' er en hund, der ikke er blevet lært det, eller som er bange. Spørg, hvilken hjælp der er tilgængelig." },
  { title: "Dit hjem", body: "Trappe, børn, katte, en travl gade – sig det hele højt. Et godt match betyder mere end et hurtigt et." },
  { title: "Efterfølgende", body: "Spørg, hvilken støtte der findes i uge to, når den første begejstring har lagt sig, og den rigtige hund viser sig." },
];

/* -------------------------------------------------------------- Omkostningerne */

export interface CostGroup {
  id: string;
  title: string;
  body: string;
  items: { label: string; note: string }[];
}

export const costGroups: CostGroup[] = [
  {
    id: "before",
    title: "Før din hund ankommer",
    body: "Engangsudgiften. Det meste sker inden for en enkelt fjorten dage, hvilket er grunden til, at det overrasker folk.",
    items: [
      { label: "Købs- eller adoptionsgebyr", note: "Varierer enormt efter race, land og rute" },
      { label: "Seng og en kurv, hvis du bruger en", note: "Køb den størrelse, de vil vokse til" },
      { label: "Skåle, halsbånd, sele, snor, ID-mærke", note: "Lovpligtige ID-krav varierer fra land til land" },
      { label: "Pelsplejesæt", note: "Børste, kam, negleklipper, tandbørste" },
      { label: "Legetøj og tyggeben", note: "Færre end du tror, udskiftes oftere end du tror" },
      { label: "Første dyrlægebesøg", note: "Tjek, vaccinationer, chipmærkning, hvis det ikke allerede er gjort" },
    ],
  },
  {
    id: "monthly",
    title: "Hver måned",
    body: "Den faste udgift. Værd at skrive ærligt ned, før du forpligter dig, ikke efter.",
    items: [
      { label: "Mad", note: "Den største enkeltstående månedlige post, og den skalerer med størrelsen" },
      { label: "Godbidder og tyggeben", note: "Træning kører på dem i det første år" },
      { label: "Forsikring", note: "Billigere, jo yngre og sundere de er" },
      { label: "Pelspleje", note: "Fra ingenting til et salonbesøg hver sjette uge" },
      { label: "Rutinemæssig pleje", note: "Ormekur, loppe- og flåtbehandling, negleklip" },
      { label: "Hjælp mens du arbejder", note: "En hundelufter eller dagpleje, hvis dine dage er lange" },
    ],
  },
  {
    id: "unexpected",
    title: "Noget at være forberedt på",
    body: "Den del, ingen budgetterer for. Lidt sat til side hver måned gør disse overkommelige.",
    items: [
      { label: "Uventet dyrlægebehandling", note: "Skader og sygdomme ankommer sjældent belejligt" },
      { label: "Tandpleje", note: "Meget almindeligt i mellemlivet, og ikke billigt" },
      { label: "Nød- og akutbehandling uden for normal åbningstid", note: "Koster mere end en planlagt konsultation" },
      { label: "Udskiftning af ting", note: "Senge, liner og en eller to ting, du holdt af" },
    ],
  },
];

/* ---------------------------------------------------------------- Dit hjem */

export const homeScenarios = [
  { id: "apartment", title: "En lejlighed", body: "Perfekt fungerende. Tænk over trapper eller en elevator, naboer, og hvor du vil gå den første tur om dagen." },
  { id: "house", title: "Et hus", body: "Plads indendørs betyder mindre, end du ville forvente. Det vigtigste er gåturene inden for ti minutter fra din dør." },
  { id: "garden", title: "En have", body: "Dejligt at have, og ikke en erstatning for en gåtur. Tjek hegnet, porten og alt, der vokser, som ikke burde spises." },
  { id: "city", title: "By", body: "Travle fortove, trafik, elevatorer og caféer. Byhunde skal være komfortable med støj mere end noget andet." },
  { id: "suburb", title: "Forstad", body: "Normalt det nemmeste af det hele: rolige gader, grønt område i nærheden, og et sted at brænde energi af i weekenden." },
  { id: "rural", title: "Landligt", body: "Plads og frihed, med husdyr, vildt og en længere køretur til dyrlægen at tænke over." },
];

export const homeFactors = [
  "Trapper, og om din hund kunne klare dem i begge ender af livet",
  "En elevator, og om de vil være komfortable i en",
  "Udendørs plads, og hvor sikkert det virkelig er",
  "Grønne områder inden for en nem gåtur",
  "Et sted sikkert at lade en hund løbe",
  "Caféer, butikker og transport, der byder hunde velkommen",
];

export const lifeScenarios = [
  { id: "quiet", title: "Rolig hjemmehygge", body: "Stabile rutiner og korte, regelmæssige gåture. En roligere hund vil være gladere her end en atlet." },
  { id: "outdoors", title: "Aktiv udendørs", body: "Weekender på stier, vejret er ligegyldigt. En fit hund, der kan opbygge distance med dig." },
  { id: "city", title: "Byens liv", body: "Fortove, transport, menneskemængder. Selvtillid omkring støj betyder mere end størrelse." },
  { id: "family", title: "Familieliv", body: "Støj, besøgende, skolekørsler. Tolerance og et sted at trække sig tilbage er det, der tæller." },
  { id: "home-office", title: "Arbejder hjemmefra", body: "Vidunderligt for en hund – så længe de også lærer at være alene nogle gange." },
  { id: "retired", title: "Pensioneret eller fleksibel", body: "Tid og rutine, hvilket er det meste af det, en hund ønsker. Tænk over styrken i snoren." },
  { id: "travel", title: "Hyppig rejsende", body: "Helt muligt med en plan: en fast hundepasser, eller en hund der rejser godt med dig." },
];

/* ------------------------------------------------------------- Forberedelse */

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

export const arrivalChecklist: ChecklistItem[] = [
  { id: "food", label: "Mad", note: "Start med det, de allerede spiser, skift derefter langsomt" },
  { id: "bowls", label: "Skåle", note: "En til mad, en altid fyldt med vand" },
  { id: "collar", label: "Halsbånd" },
  { id: "tag", label: "ID-mærke", note: "Dit telefonnummer, som minimum" },
  { id: "harness", label: "Sele" },
  { id: "lead", label: "Snor" },
  { id: "bed", label: "Seng", note: "Et roligt sted, væk fra husets gennemgang" },
  { id: "toys", label: "Et par stykker legetøj" },
  { id: "grooming", label: "Pelsplejeprodukter" },
  { id: "toothbrush", label: "Tandbørste og hundetandpasta" },
  { id: "waste", label: "Affaldsposer" },
  { id: "cleaning", label: "Rengøringsmidler", note: "En enzymbaseret rengøringsmiddel, til de uheld, der vil ske" },
  { id: "travel", label: "Sikkert rejseudstyr", note: "Til turen hjem såvel som bagefter" },
  { id: "vet", label: "Dyrlægetid booket" },
  { id: "insurance", label: "Forsikring arrangeret" },
  { id: "microchip", label: "Chipmærkningsdetaljer", note: "Registreret i dit navn, med dit nuværende telefonnummer" },
  { id: "emergency", label: "Nødkontakter skrevet ned", note: "Din dyrlæge og den nærmeste akutklinik uden for normal åbningstid" },
];

export const firstDay = [
  { title: "Hold det stille", body: "Ingen velkomstkomité. Kun de mennesker, der bor her, taler normalt." },
  { title: "Vis dem deres seng", body: "Tag dem til det sted, der er deres, og lad dem vende tilbage til det i deres eget tempo." },
  { title: "Vand, så mad", body: "Vand med det samme. Mad, når de har faldet lidt til, og den samme mad, som de fik før." },
  { title: "Lad dem udforske", body: "Ét rum ad gangen, uden snor, med dig i nærheden og ikke svævende." },
  { title: "Hold verden lille", body: "Huset og haven er rigeligt til én dag. Alt andet kan vente." },
  { title: "Begynd at observere", body: "Hvornår de skal ud, hvor de vælger at sove, hvad der gør dem utilpasse. Dette er begyndelsen på at kende dem." },
];

export const firstWeek = [
  { title: "En blid rutine", body: "Samme tidspunkter for mad, gåture og sengetid. Forudsigelighed er det, der falder en hund hurtigst til ro." },
  { title: "Deres navn", body: "Sig det, og beløn dem for at kigge på dig. Intet mere kompliceret end det endnu." },
  { title: "De første små lektioner", body: "Komme, når de kaldes, og være komfortable alene i et par minutter ad gangen." },
  { title: "Toilet-rutine", body: "Udenfor efter søvn, mad og leg. Ros øjeblikket, det sker, skæld aldrig ud over uheldene." },
  { title: "Søvn", body: "Nye hunde sover enormt meget. Lad dem. Hvalpe har brug for det meste af dagen." },
  { title: "Møde verden", body: "I et tempo, der passer til deres alder, og i overensstemmelse med din dyrlæges råd om vaccinationer." },
  { title: "At være sammen", body: "At sidde stille i samme rum gør mere for et bånd end nogen motion." },
  { title: "At bemærke", body: "Appetit, toiletvaner, energi. Du vil vide, hvad der er normalt for dem, hurtigere end du tror." },
];
