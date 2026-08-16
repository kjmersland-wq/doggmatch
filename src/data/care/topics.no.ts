import type { CareTopic } from "./types";

const vetOrgs = {
  wsava: { label: "Globale retningslinjer for ernæring og tannhelse", org: "World Small Animal Veterinary Association" },
  avdc: { label: "Veiledning for tannpleie hjemme", org: "American Veterinary Dental College" },
  rspca: { label: "Råd om hverdagslig hundestell", org: "RSPCA" },
  aaha: { label: "Retningslinjer for livsfase og forebyggende helsestell", org: "American Animal Hospital Association" },
  bva: { label: "Råd til eiere om helse og velferd", org: "British Veterinary Association" },
} as const;

export const careTopicsNo: CareTopic[] = [
  /* ------------------------------------------------------------- Dental */
  {
    id: "dental",
    title: "En sunn munn betyr mye",
    promise: "Noen få rolige minutter, et par ganger i uka, og hundens munn blir mye mer behagelig.",
    category: "dental",
    intro: [
      "De fleste hunder har en eller annen form for tannproblem allerede i ung alder, og det er lett å overse fordi hunder sjelden lager mye oppstyr av det.",
      "Den gode nyheten: pussing er det aller mest nyttige du kan gjøre hjemme, og nesten alle hunder kan lære å like det hvis du tar det i sitt eget tempo.",
    ],
    steps: [
      {
        title: "La dem se på den først",
        body: "Legg tannbørsten på gulvet og la hunden snuse på den. Ikke noe mer skjer. Dette steget betyr mer enn det høres ut som.",
        visual: "brush-1",
      },
      {
        title: "Ta på leppene, så tennene",
        body: "Løft en leppe et sekund, ros, slipp. Deretter en finger langs utsiden av tennene. Hold det kort og lystig.",
        visual: "brush-1",
      },
      {
        title: "Bruk hundetannkrem",
        body: "La hunden slikke litt av fingeren din — de fleste smaker kjøtt eller kylling, og hunder liker dem stort sett godt. Bruk aldri tannkrem for mennesker; den er ikke laget for å svelges.",
      },
      {
        title: "Puss noen tenner",
        body: "Små sirkler langs utsiden av tennene, der det danner seg mest tannbelegg. Jekslene bak og hjørnetennene betyr mest. Innsiden kan vente — der samler det seg mindre belegg, og de fleste hunder liker det dårlig.",
        visual: "brush-2",
      },
      {
        title: "Avslutt før hunden har fått nok",
        body: "Tretti sekunder er en fin økt i starten. Stopp mens hunden fortsatt synes dette er greit, og bygg deretter opp derfra.",
      },
    ],
    routine: [
      { day: "Dag 1", body: "La hunden snuse på tannbørsten. Det er hele økten." },
      { day: "Dag 2", body: "Ta forsiktig på leppene et par sekunder, så en godbit." },
      { day: "Dag 3", body: "En smak hundetannkrem fra fingeren din." },
      { day: "Dag 4", body: "Kjør en finger eller børste langs noen av fortennene." },
      { day: "Dag 5", body: "Puss den ene siden av munnen, kort." },
      { day: "Dag 6", body: "Begge sider, fortsatt kort. Ros underveis." },
      { day: "Dag 7", body: "En vanlig, liten økt. Fortsett så gjerne mesteparten av dagene." },
    ],
    sections: [
      {
        title: "Det som faktisk hjelper",
        body: "Pussing er det tiltaket med klart best dokumentert effekt. Alt annet er et nyttig tillegg, ikke en erstatning.",
        points: [
          "En myk børste, en fingerbørste eller til og med gasbind — det hunden din godtar",
          "Kun tannkrem laget for hund",
          "Daglig er ideelt, men noen ganger i uka hjelper også",
          "Tyggeprodukter og fôr med veterinærgodkjent tannmerke kan hjelpe i tillegg til pussing",
        ],
      },
      {
        title: "Om bein og harde tyggesaker",
        body: "Hard tygging renser ikke tennene på en pålitelig måte, og svært harde gjenstander er en vanlig årsak til brukne tenner — gevir, klover, hard nylon, kokte bein, isbiter.",
        points: [
          "En grei tommelfingerregel: hvis du ikke kan lage et merke med tommelneglen, er det trolig for hardt",
          "Kokte bein kan splintres og bør unngås",
          "Ha alltid tilsyn med tyggesaker, og ta dem bort når de blir små nok til å svelges",
          "Veterinæren kan fortelle deg hvilke tyggesaker de ser skaper problemer lokalt",
        ],
      },
      {
        title: "Profesjonell rens",
        body: "Noe belegg kan bare fjernes under narkose, med røntgen for å se hva som skjer under tannkjøttet. Det er ikke en fiasko fra din side — det er en del av vanlig stell for mange hunder.",
      },
    ],
    watchFor: [
      "Ånde som er vedvarende ille, ikke bare vanlig hundeånde",
      "Rødt, hovent eller blødende tannkjøtt",
      "Tygging på bare én side, eller at hunden mister mat ut av munnen",
      "En brukket eller misfarget tann",
      "Mer sikling enn vanlig",
      "Klor på munnen, eller at hunden vender seg bort når du tar på ansiktet",
      "Hevelse i ansiktet eller under et øye",
    ],
    whenToAskVet:
      "Legger du merke til noe av dette, er det verdt å bestille time for en titt. Tannsmerter er lette å overse, siden de fleste hunder fortsetter å spise som normalt likevel.",
    ageNotes: {
      puppy: "Valper mister melketennene sine fra rundt fire måneder. Start håndteringen nå — en valp som synes tannbørster er helt normalt, er en gave til deg selv senere.",
      senior: "Eldre munner trenger hyppigere sjekk, og tannsmerter er en vanlig årsak til at en eldre hund virker treg eller grinete.",
    },
    sources: [vetOrgs.avdc, vetOrgs.wsava],
  },

  /* --------------------------------------------------------- Coat & skin */
  {
    id: "coat",
    title: "Pels og hud",
    promise: "Bli kjent med hva som er normalt for hunden din, så merker du raskt når noe ikke er det.",
    category: "coat",
    intro: [
      "Børsting handler ikke bare om utseende. Det er slik de fleste først legger merke til en kul, et sårt sted, et flått eller filt som har begynt å danne seg et upraktisk sted.",
      "Hvor ofte avhenger langt mer av pelstypen enn rasen som står på papirene — og blandingshunder kan havne hvor som helst.",
    ],
    sections: [
      {
        title: "Kort, glatt pels",
        body: "En rask børst en gang i uka med en gummivott eller børste holder løshår nede og føles godt for de fleste hunder.",
        points: ["Feller hele året, ofte mer enn folk forventer", "Bad bare når hunden faktisk er skitten", "Huden er lett å se — bruk det"],
      },
      {
        title: "Lang pels",
        body: "Trenger skikkelig børsting flere ganger i uka, helt inn til huden og ikke bare på overflaten.",
        points: ["Filt danner seg bak ørene, under beina og rundt halsbåndet", "En kam avslører det en børste ikke gjør", "Klipping rundt poter og bak holder ting rent"],
      },
      {
        title: "Krøllete pels",
        body: "Krøller feller lite, noe som betyr at løshåret blir værende i pelsen og danner filt uten at man merker det.",
        points: ["Børst og kam hver dag eller annenhver dag", "Faste stelltimer, vanligvis hver sjette til åttende uke", "Filt drar i huden og gjør vondt — fjern det tidlig"],
      },
      {
        title: "Dobbel pels",
        body: "En myk underull under en grovere dekkpels. Den felles kraftig to ganger i året, og du finner den overalt.",
        points: ["En underullsrake gjør nytte for seg om våren og høsten", "Ikke barber en dobbel pels med mindre en veterinær anbefaler det", "Mye børsting slår hyppig bading"],
      },
      {
        title: "Ruhåret pels",
        body: "Grov, værbestandig pels som beholder strukturen best med håndlugging fremfor klipping.",
        points: ["Kam gjennom skjegg og bein", "Klipping mykner pelsen over tid", "Det er verdt å finne en frisør som kjenner pelstypen"],
      },
    ],
    steps: [
      {
        title: "Start med hendene",
        body: "Kjør hendene over hunden før børsten kommer fram. Du kjenner etter kuler, skorper, sårt hud og alt som har satt seg fast i pelsen.",
      },
      {
        title: "Børst i avsnitt",
        body: "Jobb i små flekker, helt ned til huden. Hold håret over en filtklump så du ikke drar i huden mens du jobber.",
      },
      {
        title: "Sjekk de vanskelige stedene",
        body: "Bak ørene, i armhulene, baksiden av beina, halen og under halsbåndet. Filt starter nesten alltid der noe gnisser.",
      },
      {
        title: "Avslutt med noe hyggelig",
        body: "En godbit, en klapp, en lek. Stell bør være noe hunden din ser fram til, ikke noe den bare holder ut.",
      },
    ],
    watchFor: [
      "Kløing, sliking eller tygging som er nytt eller vedvarende",
      "Rød hud, kviser, skorper eller et varmt område",
      "Hår som tynnes eller faller av i flekker",
      "En lukt som ikke var der før",
      "Flass eller fettete hud",
      "Kuler, eller en kul som har forandret seg",
    ],
    whenToAskVet:
      "Kløe kan ha mange årsaker — parasitter, allergier, infeksjoner, av og til noe helt annet. Er det vedvarende, kan veterinæren finne ut hva det er, i stedet for at du gjetter deg fram med sjampoer.",
    ageNotes: {
      puppy: "Valpepels endrer seg etter hvert som de vokser. Børsting nå handler mest om å lære dem at det er behagelig å bli håndtert.",
      senior: "Eldre hunder steller ofte seg selv mindre og får lettere flassete eller kulete hud. Skånsom, hyppig børsting er bedre enn lange økter.",
    },
    sources: [vetOrgs.rspca, vetOrgs.bva],
  },

  /* ---------------------------------------------------------- Paws & nails */
  {
    id: "paws",
    title: "Poter og klør",
    promise: "Tretti sekunder etter en tur fanger opp de fleste små problemene før de blir vonde.",
    category: "paws",
    intro: [
      "Poter tåler en støyt, og hunder er tålmodige med dem. Et raskt blikk etter turer er en av de enkleste vanene å bygge opp.",
      "For lange klør endrer måten hunden står på og kan gjøre det ubehagelig å gå, så det er verdt å holde styr på dem.",
    ],
    steps: [
      {
        title: "Hold poten forsiktig",
        body: "Støtt den nedenfra i stedet for å ta et fast tak. Trekker hunden seg unna, la den det — prøv igjen senere med en godbit i den andre hånden.",
        visual: "paw-check",
      },
      {
        title: "Se mellom poteputene",
        body: "Grasfrø, grus, veisalt og småstein elsker å samle seg der. Om vinteren, skyll og tørk potene etter strødde fortau.",
        visual: "paw-check",
      },
      {
        title: "Kjenn på poteputene",
        body: "De skal være myke. Sprekker, rifter, rødhet eller en pote som er varmere enn de andre er verdt en nærmere titt.",
      },
      {
        title: "Sjekk pelsen mellom poteputene",
        body: "Hos loddne hunder filtres den lett og fanger opp rusk. En forsiktig klipp i høyde med putene hjelper også med grepet.",
      },
      {
        title: "Klipp bittesmå biter",
        body: "Ta bare av tuppen, så stopp. Litt og ofte er langt tryggere enn én stor økt, og gi ro og ros hele veien gjennom.",
        visual: "nails",
      },
    ],
    sections: [
      {
        title: "Klør, uten drama",
        body: "Hører du klikking på et hardt gulv, er de trolig litt for lange. De fleste hunder trenger klipp hver tredje til sjette uke.",
        points: [
          "Ta på potene hver dag, så klipperen ikke blir en overraskelse",
          "Klipp bare den aller ytterste spissen — blodåren sitter lenger inne enn folk tror",
          "Mørke klør: ta mindre skiver og stopp når snittflaten ser kritt-hvit ut",
          "Stopp hvis hunden blir stresset. Ingenting her er verdt en kamp",
          "En frisør eller veterinærsykepleier kan gjøre det, og det er ingenting flaut med det",
        ],
      },
      {
        title: "Fortau og vær",
        body: "Press baksiden av hånden mot fortauet i sju sekunder. Klarer du ikke holde den der, er det for varmt for poter — gå tur tidlig eller sent i stedet.",
        points: ["Vintersalt og strøgrus irriterer poteputer — skyll og tørk etterpå", "Lange turer på ruglete underlag kan gjøre poteputer såre", "Dyp snø klumper seg til isklumper i loddne poter"],
      },
    ],
    watchFor: [
      "Halting, eller at hunden slikker samme pote om og om igjen",
      "En sprukken, blødende eller hoven potepute",
      "En klo som har revnet eller knekt av",
      "Rødhet eller vond lukt mellom tærne",
      "Motvilje mot å gå på et underlag hunden var komfortabel med før",
    ],
    whenToAskVet:
      "En revet klo, et dypt kutt eller vedvarende halting er verdt en telefon. Klipper du en klo for kort og den blør, hjelper som regel styptisk pulver og et forsiktig trykk — ring veterinæren hvis det ikke stopper.",
    sources: [vetOrgs.rspca, vetOrgs.aaha],
  },

  /* -------------------------------------------------------------- Ears */
  {
    id: "ears",
    title: "Ører",
    promise: "Ta en titt, ta en snuse. Det er stort sett hele ørestellet.",
    category: "health",
    intro: [
      "Friske ører er lyserosa på innsiden, uten mye lukt. Å kjenne den normaltilstanden er hele trikset.",
      "Ører trenger ikke dyprensing som rutine. Å pirke inni et friskt øre pleier å skape de problemene rensingen skulle forebygge.",
    ],
    sections: [
      {
        title: "Den ukentlige titten",
        body: "Løft øreflippen, se inn, ta en snuse. Noen sekunder mens dere uansett sitter sammen.",
        points: ["Lyserosa, ingen sterk lukt, ingen utflod", "Litt voks er normalt", "Tørk ørene etter bading eller svømming"],
      },
      {
        title: "Hvis veterinæren har gitt deg rensemiddel",
        body: "Bruk produktet og instruksjonene deres. Skyv aldri bomullspinner ned i øregangen — da presser du bare rusk lenger inn.",
      },
      {
        title: "Ører som trenger ekstra oppmerksomhet",
        body: "Hengeører, hårete øreganger og hunder som svømmer mye er mer utsatt for problemer. Det handler om den enkelte hunden, ikke bare rasen.",
      },
    ],
    watchFor: [
      "En gjærete eller sur lukt",
      "Rødhet eller hevelse inne i øreflippen",
      "Brun, gul eller blodig utflod",
      "Kløing på et øre, eller gnikking mot sofaen",
      "Hoderisting eller at hodet holdes skjevt",
      "Rykk til når du tar på øret",
    ],
    whenToAskVet:
      "Ørebetennelser gjør vondt og går sjelden over av seg selv. Ser eller lukter noe rart, få det sjekket i stedet for å prøve dråper du har liggende i en skuff.",
    sources: [vetOrgs.rspca],
  },

  /* -------------------------------------------------------------- Eyes */
  {
    id: "eyes",
    title: "Øyne",
    promise: "Klare, blanke og like. Det er det du ser etter.",
    category: "health",
    intro: [
      "Et raskt blikk på hundens øyne mens dere hilser på hverandre om morgenen er nok de fleste dager.",
      "Øyne kan gå fra lett irritert til alvorlig smertefullt raskt, så det er noe det er verdt å være litt på vakt overfor.",
    ],
    sections: [
      {
        title: "Slik ser normalt ut",
        body: "Klart og blankt, det hvite ikke blodsprengt, pupillene like store, ingen sammenknipning. Litt klar eller grå tårevæske i krokene er som regel ingenting.",
      },
      {
        title: "Hverdagslig stell",
        body: "Tørk bort skorper med fuktig bomullsdott og rent vann, en tørk per øye. Hold langt hår klipt vekk fra øynene. Ikke bruk øyedråper laget for mennesker.",
      },
      {
        title: "Flatnesede hunder",
        body: "Utstående øyne er mer utsatt for støt, uttørking og sår. Har hunden din et kort snuteparti, sjekk litt oftere.",
      },
    ],
    watchFor: [
      "Sammenknipning eller at et øye holdes lukket",
      "Rødhet som varer ved",
      "Grønn eller gul utflod",
      "Grumsete øye eller en fargeendring",
      "Gniing av ansiktet mot bakken",
      "Enhver plutselig endring, eller at hunden dulter borti ting",
    ],
    whenToAskVet:
      "Et smertefullt eller plutselig endret øye er en samme-dags-telefon. Synsproblemer får bedre utfall når de oppdages tidlig.",
    sources: [vetOrgs.bva],
  },

  /* ---------------------------------------------------- Body condition */
  {
    id: "body-condition",
    title: "Holdstatus",
    promise: "Tallet på vekta betyr mindre enn hvordan hunden ser ut og føles under hendene dine.",
    category: "weight",
    intro: [
      "To hunder med samme vekt kan være i helt forskjellig form. Holdstatus er slik veterinærer vurderer det, og du kan lære det på rundt et minutt.",
      "Dette er en veiledning, ikke en diagnose. Rase og kroppsbygning endrer hvordan 'riktig' ser ut — en mynde og en labrador i perfekt hold ser slett ikke like ut.",
    ],
    steps: [
      {
        title: "Kjenn på ribbeina",
        body: "Kjør fingertuppene langs hundens side. Du skal lett kjenne ribbeina under et tynt lag, litt som å kjenne knokene på oversiden av din egen hånd.",
        visual: "body-condition",
      },
      {
        title: "Se ovenfra",
        body: "Stå over hunden og se etter en tydelig innsnevring bak ribbeina. Et rett eller utstående omriss tyder på litt ekstra.",
        visual: "body-condition",
      },
      {
        title: "Se fra siden",
        body: "Magen skal trekke seg opp mot bakbeina, ikke gå flatt i linje med brystkassa.",
      },
      {
        title: "Gjør det månedlig",
        body: "Endringer sniker seg inn sakte. Gjør dette på samme dag hver måned, så blir en gradvis endring tydelig mens den fortsatt er liten.",
      },
    ],
    sections: [
      {
        title: "Litt over vekt",
        body: "Ribbein vanskelig å kjenne, midje vanskelig å se, mage som går flatt. Små endringer virker: mål maten, tell godbitene, legg til ti minutter gåtur.",
      },
      {
        title: "Passelig",
        body: "Ribbein lett å kjenne, synlig midje, mage som trekker seg opp. Fortsett som du gjør.",
      },
      {
        title: "Litt for tynn",
        body: "Ribbein, ryggrad eller hofter som stikker ut, svært lite dekke. Verdt en veterinærsjekk fremfor bare mer mat — uforklarlig vekttap fortjener en titt.",
      },
    ],
    whenToAskVet:
      "Veterinæren kan hjelpe deg å sjekke holdstatus ordentlig, og kan legge en plan hvis hunden trenger å gå ned i vekt. Plutselige eller uforklarlige vektendringer fortjener alltid en samtale.",
    sources: [vetOrgs.wsava, vetOrgs.aaha],
  },

  /* -------------------------------------------------------- Wellbeing */
  {
    id: "wellbeing",
    title: "En god dag for en hund",
    promise: "En tur, litt lek, litt mat, mye søvn og tid sammen med deg betyr mye.",
    category: "wellbeing",
    intro: [
      "Et godt liv for en hund trenger ikke være komplisert eller dyrt. Mesteparten handler om rutine, selskap og nok hvile.",
      "Hvis du bare skal endre én ting, er det som regel søvn. Mange 'atferdsproblemer' er egentlig en sliten hund som aldri får sjansen til å slå helt av.",
    ],
    sections: [
      {
        title: "Søvn",
        body: "Hunder sover langt mer enn de fleste tror. Valper trenger ofte 18 til 20 timer i døgnet, voksne rundt 12 til 14, og eldre hunder som regel enda mer.",
        points: ["Et rolig sted vekk fra inngangsdøren og trafikken i huset", "Blunder i løpet av dagen er normalt, ikke latskap", "Konstant stimulering er slitsomt for en hund, ikke berikende"],
      },
      {
        title: "Snuse og tenke",
        body: "Ti minutter med skikkelig snusing kan roe en hund mer enn en time med løping. La turene være rolige innimellom.",
        points: ["Spre middagen ut i gresset", "Gjem godbiter rundt i et rom og la hunden lete", "Et aktivitetsleketøy eller et rullet håndkle med tørrfôr i", "Nye, rolige steder å utforske"],
      },
      {
        title: "Selskap",
        body: "Hunder er sosiale. De fleste sliter med lange perioder alene, og det å være alene er en ferdighet som må læres gradvis, ikke tas for gitt.",
      },
      {
        title: "Forutsigbare dager",
        body: "Noenlunde faste turer, måltider og leggetider gjør livet lettere å lese. Det trenger ikke være på minuttet.",
      },
      {
        title: "Stille tid",
        body: "Tid hvor det ikke kreves noe av hunden — ingen trening, ingen besøk, ingen leker. Alle hunder trenger litt av det i løpet av dagen.",
      },
    ],
    ageNotes: {
      puppy: "Valper blir fort overtrøtte, og det ser ut som ulydighet — biting, ville løperunder, at de ignorerer alt. Mer søvn løser det som regel.",
      adolescent: "Tenåringshunder trenger reelle utløp: snusing, tygging, trening, lek. Kjedsomhet viser seg gjerne som tygging på tingene dine i stedet.",
      senior: "Kortere, hyppigere turer, mykere liggeunderlag og skånsomme hjernespill passer eldre hunder bedre enn lange turer.",
    },
    sources: [vetOrgs.rspca],
  },

  /* --------------------------------------------------- Everyday check */
  {
    id: "everyday-check",
    title: "Kjenn hva som er normalt for hunden din",
    promise: "Du legger merke til en endring lenge før noen andre gjør det. Det er genuint verdifullt.",
    category: "health",
    intro: [
      "Du trenger ikke undersøke hunden din. Du trenger bare en grei følelse for hva som er normalt — hvor mye den spiser, drikker, beveger seg og sover.",
      "Når noe endrer seg, hjelper det veterinæren enormt at du kan si 'dette startet på tirsdag'.",
    ],
    sections: [
      {
        title: "Matlyst",
        body: "De fleste hunder er ganske forutsigbare spisere. Å hoppe over ett måltid skjer; å ikke spise i en dag eller mer er verdt oppmerksomhet.",
      },
      {
        title: "Drikking",
        body: "En tydelig økning eller nedgang i drikking er et av de mer nyttige tidlige tegnene som finnes. Er du usikker, mål hva som havner i bollen et par dager.",
      },
      {
        title: "Energi",
        body: "Å bli tregere handler ikke bare om alder. Motvilje mot trapper, stivhet etter hvile eller mindre interesse for turer er ofte ubehag.",
      },
      {
        title: "Toalettvaner",
        body: "Merk deg endringer i hyppighet, tresking eller løs avføring som varer mer enn en dag. Ikke et hyggelig tema, men et nyttig et.",
      },
      {
        title: "Vekt og pels",
        body: "Månedlig veiing, månedlig sjekk med hendene. Pelskvalitet endrer seg ofte før noe annet gjør det.",
      },
      {
        title: "Atferd",
        body: "Gjemme seg, klengete atferd, irritabilitet eller uro om natta kan alle være tegn på smerte snarere enn humør.",
      },
    ],
    whenToAskVet:
      "Én liten endring på én dag er som regel ingenting. En endring som varer mer enn en dag eller to, eller flere endringer samtidig, er verdt en telefon.",
    sources: [vetOrgs.aaha],
  },

  /* -------------------------------------------- Something seems different */
  {
    id: "something-different",
    title: "Virker noe annerledes?",
    promise: "Et rolig sted å tenke gjennom om dette er noe å vente og se an, eller noe å ringe veterinæren om.",
    category: "health",
    intro: [
      "Dette er generell informasjon, ikke en diagnose. Noen endringer er ufarlige og andre ikke, og forskjellen er ofte ikke åpenbar utenfra.",
      "Er du bekymret, eller kom endringen plutselig eller kraftig, ta kontakt med veterinæren. Bekymring alene er grunn god nok til å ringe.",
    ],
    sections: [
      {
        title: "Spiser ikke som vanlig",
        body: "Ett hoppet over måltid hos en ellers opplagt hund er vanlig. Ring veterinæren hvis det varer mer enn rundt 24 timer, hvis en valp hopper over måltider, eller hvis det følger med oppkast, slapphet eller en oppblåst mage.",
      },
      {
        title: "Drikker mye mer eller mindre",
        body: "En tydelig endring som varer mer enn et par dager er verdt å undersøke framfor bare å observere. Noter deg omtrent hvor mye.",
      },
      {
        title: "Oppkast",
        body: "Ett oppkast, så tilbake til normalt, går ofte over av seg selv. Ring hvis det gjentar seg, hvis hunden ikke klarer å holde på vann, hvis det er blod, hvis den kaster opp uten å få noe opp, eller hvis den kan ha svelget noe den ikke skulle.",
      },
      {
        title: "Diaré",
        body: "Mild og kortvarig er vanlig. Ring hvis det varer mer enn en dag eller to, inneholder blod, eller kommer sammen med oppkast, smerte eller en flat, sliten hund — og tidligere for valper og eldre hunder, som blir uttørket raskt.",
      },
      {
        title: "Hoste",
        body: "En enkelt hoste etter å ha dratt i bånd er noe annet enn en hoste som fortsetter. Vedvarende hoste, hoste om natta, eller pustebesvær av noe slag trenger veterinær.",
      },
      {
        title: "Kløing",
        body: "Konstant kløing, sliking eller tygging er ubehagelig og har som regel en årsak verdt å finne — parasitter, hudinfeksjon eller allergi. Det går sjelden over med bare sjampo.",
      },
      {
        title: "Halting",
        body: "Mild halting som gir seg innen en dag med hvile kan følges med på. Manglende vektbæring, tydelig smerte, hevelse eller halting som varer bør sjekkes.",
      },
      {
        title: "Uvanlig tretthet",
        body: "En stille dag hender. En hund som ikke vil reise seg, virker ustø, eller er mye slappere enn vanlig bør sjekkes raskt.",
      },
    ],
    whenToAskVet:
      "Veterinæren din vil heller høre fra deg tidlig enn sent. Å beskrive hva som endret seg, når det startet og hva som er annerledes enn normalt er akkurat det de trenger.",
    sources: [vetOrgs.bva, vetOrgs.aaha],
  },

  /* ---------------------------------------------------------- Emergency */
  {
    id: "emergency",
    title: "Når det ikke kan vente",
    promise: "Den korte listen over ting som betyr at du ringer veterinæren med en gang, uansett tid på døgnet.",
    category: "health",
    intro: [
      "Ha veterinærens nummer og nærmeste vaktklinikk et sted du finner uten å tenke deg om. Lagre dem i telefonen nå.",
      "I disse situasjonene: ring først og dra inn. Ikke vent for å se hvordan det utvikler seg, og ikke prøv hjemmemedisin.",
    ],
    sections: [
      {
        title: "Ring en veterinær umiddelbart",
        body: "Noen av disse betyr behov for akutt profesjonell hjelp, dag eller natt.",
        points: [
          "Pustevansker, kveling, eller blå eller svært bleke slimhinner",
          "Kollaps, bevisstløshet, eller plutselig svakhet",
          "Blødning som ikke stopper",
          "Mistenkt forgiftning, eller at hunden har spist noe den ikke skulle",
          "Et anfall, eller gjentatte anfall",
          "Å bli påkjørt, et fall, eller enhver alvorlig skade",
          "Presser for å late vannet uten å få noe ut",
          "En hoven, hard mage med brekninger og uten oppkast",
          "Tegn på heteslag: tung pusting, tydelig ubehag, kollaps i varmen",
          "Plutselig kraftig smerte, eller en hund som ikke klarer å slå seg til ro i det hele tatt",
        ],
      },
      {
        title: "Mistenkt forgiftning",
        body: "Ring veterinæren eller en giftlinje for dyr umiddelbart, og fortell hva, hvor mye og når. Ta med emballasjen. Ikke prøv å få hunden til å kaste opp med mindre en veterinær sier du skal — med enkelte stoffer gjør det bare mer skade.",
      },
      {
        title: "På vei dit",
        body: "Hold hunden rolig, varm og stille. Kjør forsiktig. Ring på forhånd så klinikken er klar til å ta imot dere.",
      },
    ],
    whenToAskVet:
      "Leser du dette og lurer på om det teller, så ring. Ingen på en veterinærklinikk har noe imot en telefon som viser seg å være ingenting.",
    sources: [vetOrgs.bva, vetOrgs.rspca],
  },
];
