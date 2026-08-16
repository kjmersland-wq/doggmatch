/**
 * Norsk oversettelse av innholdet i Skaff hund-reisen. Samme struktur og
 * rekkefølge som content.en.ts, ord for ord tilpasset norsk hverdagsspråk.
 */

import type { JourneyStep, CostGroup, ChecklistItem } from "./content.en";

export const journey: JourneyStep[] = [
  { id: "ready", no: "01", title: "Er en hund riktig for meg?", body: "Noen ærlige spørsmål om hverdagen din, hjemmet ditt og folkene rundt deg.", to: "/get-a-dog/ready" },
  { id: "find", no: "02", title: "Finn min hund", body: "Se hvilke raser som ofte passer et liv som ditt — og hvorfor.", to: "/find-my-dog" },
  { id: "choose", no: "03", title: "Velg med omhu", body: "Valp eller voksen, oppdretter eller omplassering, og hva du bør spørre om før du sier ja.", to: "/get-a-dog/choose" },
  { id: "costs", no: "04", title: "Forstå forpliktelsen", body: "Hva en hund faktisk koster, før den kommer hjem og hver måned etterpå.", to: "/get-a-dog/costs" },
  { id: "prepare", no: "05", title: "Gjør deg klar", body: "Innkjøpene, veterinæren, forsikringen — og å få hjemmet klart.", to: "/get-a-dog/prepare" },
  { id: "welcome", no: "06", title: "Velkommen hjem", body: "Den første dagen og den første uken, tatt med ro.", to: "/get-a-dog/welcome-home" },
  { id: "mydog", no: "07", title: "Min hund", body: "Hele livet deres samlet ett sted — mat, trening, helse, turer og papirer.", to: "/my-dog" },
];

/* ------------------------------------------------------------ Valp / voksen */

export const puppyVsAdult = {
  title: "Valp, eller en hund som allerede er voksen?",
  body: "Ingen av delene er best. Det er to ganske forskjellige første år, og hva som passer avhenger langt mer av livet ditt enn av hunden.",
  puppy: {
    title: "En valp",
    lead: "Du får forme nesten alt selv — og du betaler for det i søvn.",
    good: [
      "Du får med deg hvert steg av hvem den blir",
      "Sosialisering og vaner starter med deg",
      "Ofte lettere å introdusere for andre dyr og barn",
      "Et langt liv sammen foran dere",
    ],
    hard: [
      "Avbrutte netter, potetrening og tygging, i flere måneder",
      "Trenger selskap store deler av dagen i starten",
      "Personligheten er fortsatt en gjetning, selv med en flink oppdretter",
      "Vaksiner, kastrering og tidlige veterinærkostnader kommer det første året",
    ],
  },
  adult: {
    title: "En voksen hund",
    lead: "Mye mer av det du ser, er det du får.",
    good: [
      "Størrelse, pels og gemytt er allerede tydelig",
      "Mange er renslige og klarer å være alene",
      "Ofte roligere fra dag én",
      "Omplasseringer kommer som regel med en ærlig vurdering av hunden",
    ],
    hard: [
      "Den kommer med en historie du kanskje bare kjenner delvis",
      "Enkelte vaner tar tålmodighet å endre",
      "Færre år sammen, spesielt med en eldre hund",
      "Å finne seg til rette kan ta uker, ikke dager",
    ],
  },
  closing:
    "Hvis hverdagen din allerede er full, er en voksen hund som kan være hund ofte det snilleste valget — for deg og for den.",
};

/* -------------------------------------------------------------- Kilden */

export const sources = {
  title: "Hvor kommer hunden din fra?",
  body: "Begge veier kan gi deg en fantastisk hund. Begge fortjener noen grundige spørsmål. Ingen av dem er automatisk det rette svaret.",
  breeder: {
    title: "En ansvarlig oppdretter",
    good: [
      "Du møter tispa og ser hvordan valpene vokser opp",
      "Relevant helsetesting for rasen er som regel gjort",
      "Du får et ganske klart bilde av voksen størrelse, pels og gemytt",
      "En god oppdretter holder kontakt gjennom hele hundens liv",
    ],
    check: [
      "Vokser valpene opp i et hjem, med vanlig husholdningsliv rundt seg?",
      "Hvilken helsetesting er gjort, og kan du få se resultatene?",
      "Hvor mange kull har de, og av hvor mange raser?",
      "Tar de tilbake hunden hvis livssituasjonen din endrer seg?",
    ],
  },
  rescue: {
    title: "Omplassering eller redning",
    good: [
      "Voksne hunder kommer med et gemytt du faktisk kan møte",
      "Gode organisasjoner vurderer og beskriver hundene sine ærlig",
      "Ofte allerede vaksinert, chippet og kastrert",
      "Oppfølging etter omplassering er som regel en del av avtalen",
    ],
    check: [
      "Hva vet de om hundens historie og forrige hjem?",
      "Hvordan oppfører hunden seg rundt barn, andre hunder og katter?",
      "Hvilken helseinformasjon følger med?",
      "Hvilken hjelp finnes hvis de første ukene blir tunge?",
    ],
  },
};

export const breederQuestions = [
  "Kan jeg møte tispa?",
  "Kan jeg se hvor valpene vokser opp?",
  "Hvilken helsetesting er gjort for denne rasen?",
  "Hvilken veterinærbehandling har valpene fått så langt?",
  "Hvordan har de blitt sosialisert — hva har de møtt og hørt?",
  "Hvilken støtte finnes etter at jeg tar med valpen hjem?",
  "Hvilken dokumentasjon får jeg?",
  "Kan jeg få noen dager til å tenke meg om?",
];

export const breederRedFlags = [
  "Du blir presset til å betale eller bestemme deg med en gang",
  "Du får ikke se hvor valpene bor, eller møte tispa",
  "Helse- eller vaksinasjonsdokumentasjon mangler eller er vag",
  "Enkle spørsmål får unnvikende svar",
  "Uvanlig mange kull uten slektskap, eller mange raser samtidig",
  "En valp virker syk, eller er ekstremt redd for helt vanlige ting",
  "Historien endrer seg fra samtale til samtale",
];

export const adoptionConsiderations = [
  { title: "Historie", body: "Noen hunder kommer med en full historie, andre med nesten ingen. En god organisasjon forteller deg ærlig hvilken av delene det er." },
  { title: "Gemytt", body: "Spør hva de faktisk har sett: med fremmede, i bånd, i bilen, alene en time." },
  { title: "Helse", body: "Be om veterinærjournalen, ikke bare et sammendrag. Løpende tilstander er håndterbare når du vet om dem." },
  { title: "Atferd", body: "De fleste «problemer» er en hund som ikke har blitt lært opp, eller som er redd. Spør hvilken hjelp som finnes." },
  { title: "Hjemmet ditt", body: "Trapper, barn, katter, en travel gate — si alt høyt. En god match betyr mer enn en rask en." },
  { title: "Etterpå", body: "Spør hvilken støtte som finnes i uke to, når den første spenningen har lagt seg og den ekte hunden viser seg." },
];

/* -------------------------------------------------------------- Kostnadene */

export const costGroups: CostGroup[] = [
  {
    id: "before",
    title: "Før hunden din kommer hjem",
    body: "Engangskostnaden. Mesteparten skjer i løpet av to uker, og det er derfor folk blir overrasket.",
    items: [
      { label: "Kjøps- eller omplasseringsavgift", note: "Varierer enormt etter rase, land og vei" },
      { label: "Seng og eventuelt bur", note: "Kjøp størrelsen den skal vokse inn i" },
      { label: "Skåler, halsbånd, sele, bånd, id-merke", note: "Krav til id varierer fra land til land" },
      { label: "Stellutstyr", note: "Børste, kam, klosaks, tannbørste" },
      { label: "Leker og tyggesaker", note: "Færre enn du tror, byttes oftere enn du tror" },
      { label: "Første veterinærbesøk", note: "Sjekk, vaksiner, id-merking der det ikke allerede er gjort" },
    ],
  },
  {
    id: "monthly",
    title: "Hver måned",
    body: "Den jevne kostnaden. Verdt å skrive ned ærlig før du bestemmer deg, ikke etterpå.",
    items: [
      { label: "Mat", note: "Den klart største månedlige posten, og den skalerer med størrelse" },
      { label: "Godbiter og tyggesaker", note: "Treningen går på dem det første året" },
      { label: "Forsikring", note: "Billigere jo yngre og friskere den er" },
      { label: "Stell", note: "Fra ingenting til frisørbesøk hver sjette uke" },
      { label: "Rutinepleie", note: "Ormekur, flått- og loppebehandling, klipping av klør" },
      { label: "Hjelp mens du jobber", note: "Luftetjeneste eller dagpass, hvis dagene dine er lange" },
    ],
  },
  {
    id: "unexpected",
    title: "Noe å være forberedt på",
    body: "Delen ingen budsjetterer for. Litt satt til side hver måned gjør dette til å leve med.",
    items: [
      { label: "Uventet veterinærbehandling", note: "Skader og sykdom kommer sjelden beleilig" },
      { label: "Tannbehandling", note: "Svært vanlig i middelalder, og ikke billig" },
      { label: "Akutt- og vakthjelp", note: "Koster mer enn en planlagt time" },
      { label: "Å bytte ut ting", note: "Senger, bånd og et par ting du var glad i" },
    ],
  },
];

/* ---------------------------------------------------------------- Hjemmet ditt */

export const homeScenarios = [
  { id: "apartment", title: "En leilighet", body: "Fullt gjennomførbart. Tenk på trapper eller heis, naboer, og hvor du skal gå den første turen for dagen." },
  { id: "house", title: "Et hus", body: "Plass innendørs betyr mindre enn du tror. Det som teller er turmulighetene ti minutter fra døra." },
  { id: "garden", title: "En hage", body: "Fint å ha, og ikke en erstatning for en tur. Sjekk gjerdet, porten og alt som vokser der som ikke bør spises." },
  { id: "city", title: "By", body: "Travle fortau, trafikk, heiser og kafeer. Bynhunder trenger å være komfortable med lyd mer enn noe annet." },
  { id: "suburb", title: "Forstad", body: "Ofte den enkleste av alle: rolige gater, grøntområder i nærheten, og et sted å boltre seg i helgene." },
  { id: "rural", title: "Landlig", body: "Plass og frihet, men med husdyr, vilt og lengre kjøretur til veterinæren å tenke på." },
];

export const homeFactors = [
  "Trapper, og om hunden din vil klare dem både som ung og gammel",
  "Heis, og om den blir komfortabel med det",
  "Uteplass, og hvor sikret den faktisk er",
  "Grøntområder innen en enkel spasertur",
  "Et trygt sted å la en hund løpe fritt",
  "Kafeer, butikker og transport som ønsker hunder velkommen",
];

export const lifeScenarios = [
  { id: "quiet", title: "Rolig hjemmemenneske", body: "Faste rutiner og korte, jevnlige turer. En roligere hund vil trives bedre her enn en atlet." },
  { id: "outdoors", title: "Aktiv ute", body: "Helger på stier, vær er ingen hindring. En sprek hund som kan bygge opp distanse sammen med deg." },
  { id: "city", title: "Byliv", body: "Fortau, transport, folkemengder. Trygghet rundt lyd betyr mer enn størrelse." },
  { id: "family", title: "Familieliv", body: "Støy, besøk, skoleskyss. Tålmodighet og et sted å trekke seg tilbake til er det som teller." },
  { id: "home-office", title: "Hjemmekontor", body: "Fantastisk for en hund — så lenge den også lærer å være alene innimellom." },
  { id: "retired", title: "Pensjonist eller fleksibel", body: "Tid og rutine, som er mesteparten av det en hund ønsker seg. Tenk på styrke i bånd." },
  { id: "travel", title: "Reiser mye", body: "Fullt mulig med en plan: en fast passer, eller en hund som reiser godt sammen med deg." },
];

/* ------------------------------------------------------------- Forberedelser */

export const arrivalChecklist: ChecklistItem[] = [
  { id: "food", label: "Mat", note: "Start med det den allerede spiser, og bytt gradvis" },
  { id: "bowls", label: "Skåler", note: "Én til mat, én alltid full av vann" },
  { id: "collar", label: "Halsbånd" },
  { id: "tag", label: "Id-merke", note: "Telefonnummeret ditt, som et minimum" },
  { id: "harness", label: "Sele" },
  { id: "lead", label: "Bånd" },
  { id: "bed", label: "Seng", note: "Et rolig sted, utenfor gjennomgangstrafikken i huset" },
  { id: "toys", label: "Noen leker" },
  { id: "grooming", label: "Stellutstyr" },
  { id: "toothbrush", label: "Tannbørste og tannkrem for hund" },
  { id: "waste", label: "Poser til bæsj" },
  { id: "cleaning", label: "Rengjøringsmidler", note: "Et enzymrengjøringsmiddel, for uhellene som kommer til å skje" },
  { id: "travel", label: "Trygt reiseutstyr", note: "Til turen hjem og for turer etterpå" },
  { id: "vet", label: "Veterinærtime bestilt" },
  { id: "insurance", label: "Forsikring ordnet" },
  { id: "microchip", label: "Chip-informasjon", note: "Registrert på deg, med gjeldende telefonnummer" },
  { id: "emergency", label: "Nødkontakter skrevet ned", note: "Veterinæren din, og nærmeste vaktklinikk" },
];

export const firstDay = [
  { title: "Hold det rolig", body: "Ingen velkomstfest. Bare dem som bor der, som snakker vanlig." },
  { title: "Vis dem sengen sin", body: "Ta dem med til stedet som er deres, og la dem komme tilbake dit i eget tempo." },
  { title: "Vann, så mat", body: "Vann med en gang. Mat når de har roet seg litt, og samme mat som de hadde fra før." },
  { title: "La dem utforske", body: "Ett rom om gangen, uten bånd, med deg i nærheten uten å henge over dem." },
  { title: "Hold verden liten", body: "Huset og hagen er mer enn nok for én dag. Alt annet kan vente." },
  { title: "Begynn å observere", body: "Når de trenger ut, hvor de velger å sove, hva som gjør dem urolige. Dette er begynnelsen på å bli kjent med dem." },
];

export const firstWeek = [
  { title: "En mild rutine", body: "Samme tider for mat, turer og legging. Forutsigbarhet er det som roer en hund raskest." },
  { title: "Navnet deres", body: "Si det, og beløn dem for å se på deg. Ikke noe mer komplisert enn det ennå." },
  { title: "De første små leksjonene", body: "Å komme når de blir kalt, og å være komfortabel alene noen minutter av gangen." },
  { title: "Toalettrutine", body: "Ut etter søvn, mat og lek. Ros i det øyeblikket det skjer, kjeft aldri på uhell." },
  { title: "Søvn", body: "Nye hunder sover enormt mye. La dem. Valper trenger mesteparten av dagen." },
  { title: "Å møte verden", body: "I et tempo som passer alderen deres, og i tråd med veterinærens råd om vaksiner." },
  { title: "Å være sammen", body: "Å sitte stille i samme rom gjør mer for båndet enn noen trening." },
  { title: "Å legge merke til", body: "Matlyst, toalettvaner, energi. Du vil vite hva som er normalt for dem raskere enn du tror." },
];
