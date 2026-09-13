import type { CareTopic } from "./types";

const vetOrgs = {
  wsava: { label: "Globale retningslinjer for ernæring og tandpleje", org: "World Small Animal Veterinary Association" },
  avdc: { label: "Vejledning til hjemmetandpleje", org: "American Veterinary Dental College" },
  rspca: { label: "Råd om daglig hundepleje", org: "RSPCA" },
  aaha: { label: "Retningslinjer for livsstadie og forebyggende pleje", org: "American Animal Hospital Association" },
  bva: { label: "Vejledning til ejere om sundhed og trivsel", org: "British Veterinary Association" },
} as const;

export const careTopicsDk: CareTopic[] = [
  /* ------------------------------------------------------------- Dental */
  {
    id: "dental",
    title: "En sund mund betyder noget",
    promise: "Et par blide minutter, et par gange om ugen, og din hunds mund forbliver meget mere behagelig.",
    category: "dental",
    intro: [
      "De fleste hunde har en eller anden form for tandproblemer, når de er et par år gamle, og det er let at overse, fordi hunde sjældent brokker sig over det.",
      "De gode nyheder: tandbørstning er det absolut mest nyttige, du kan gøre derhjemme, og næsten alle hunde kan lære at nyde det, hvis du tager det langsomt.",
    ],
    steps: [
      {
        title: "Lad dem kigge på den først",
        body: "Læg tandbørsten på gulvet, og lad din hund snuse til den. Der sker ikke andet. Denne del er vigtigere, end den lyder.",
        visual: "brush-1",
      },
      {
        title: "Rør ved læberne, så tænderne",
        body: "Løft en læbe et sekund, ros, slip. Derefter en finger langs ydersiden af tænderne. Hold det kort og muntert.",
        visual: "brush-1",
      },
      {
        title: "Tilsæt hundetandpasta",
        body: "Lad dem slikke lidt af din finger – de fleste er med kød- eller fjerkræssmag, og hunde kan generelt godt lide dem. Brug aldrig mennesketandpasta; den er ikke beregnet til at blive slugt.",
      },
      {
        title: "Børst et par tænder",
        body: "Små cirkler langs ydersiden, hvor plakken samler sig mest. De store tænder bagtil og hjørnetænderne betyder mest. Indersiden kan vente – der samler sig mindre plak, og de fleste hunde bryder sig ikke om det.",
        visual: "brush-2",
      },
      {
        title: "Afslut, før de har fået nok",
        body: "Tredive sekunder er en god start. Stop, mens din hund stadig synes, det er fint, og byg op derfra.",
      },
    ],
    routine: [
      { day: "Dag 1", body: "Lad din hund snuse til tandbørsten. Det er hele seancen." },
      { day: "Dag 2", body: "Rør forsigtigt ved deres læber et sekund eller to, giv derefter en godbid." },
      { day: "Dag 3", body: "En smagsprøve på hundesikker tandpasta fra din finger." },
      { day: "Dag 4", body: "Kør en finger eller børste langs et par af de forreste tænder." },
      { day: "Dag 5", body: "Børst den ene side af munden, kortvarigt." },
      { day: "Dag 6", body: "Begge sider, stadig kort. Ros undervejs." },
      { day: "Dag 7", body: "En normal lille seance. Fortsæt derefter, de fleste dage hvis du kan." },
    ],
    sections: [
      {
        title: "Hvad der rent faktisk hjælper",
        body: "Tandbørstning er det, der har den stærkeste evidens bag sig. Alt andet er et nyttigt supplement, ikke en erstatning.",
        points: [
          "En blød børste, en fingerbørste eller endda gaze – hvad end din hund tolererer",
          "Kun hundetandpasta",
          "Dagligt er ideelt, et par gange om ugen hjælper stadig",
          "Tyggesager og foder med et veterinært tandplejesegl kan hjælpe sammen med tandbørstning",
        ],
      },
      {
        title: "Om ben og hårde tyggesager",
        body: "Hård tygning renser ikke pålideligt tænderne, og meget hårde genstande er en almindelig årsag til knækkede tænder – gevirer, klove, hård nylon, kogte ben, isterninger.",
        points: [
          "En grov tommelfingerregel: hvis du ikke kunne lave en fordybning med din negl, er det sandsynligvis for hårdt",
          "Kogte ben kan splintre og bør undgås",
          "Overvåg enhver tyggesag, og tag den væk, når den bliver lille nok til at blive slugt",
          "Din dyrlæge kan fortælle dig, hvilke tyggesager de ser forårsage problemer lokalt",
        ],
      },
      {
        title: "Professionel rengøring",
        body: "Noget plak kan kun fjernes under bedøvelse, med røntgenbilleder for at se, hvad der sker under tandkødsranden. Det er ikke en fejl fra din side – det er en del af den normale pleje for mange hunde.",
      },
    ],
    watchFor: [
      "Ånde, der er vedvarende dårlig, ikke bare hundelugt",
      "Rødt, hævet eller blødende tandkød",
      "Tyggende på den ene side, eller taber mad",
      "En knækket eller misfarvet tand",
      "Mere savl end normalt",
      "Poter mod munden, eller vender sig væk, når du rører ved ansigtet",
      "Hævelse i ansigtet eller under et øje",
    ],
    whenToAskVet:
      "Hvis du bemærker noget af dette, er det værd at booke en tid til undersøgelse. Tandpine er let at overse, fordi de fleste hunde spiser lige igennem det.",
    ageNotes: {
      puppy: "Hvalpe taber deres mælketænder fra omkring fire måneders alderen. Start håndteringen nu – en hvalp, der synes, tandbørster er normale, er en gave til dit fremtidige jeg.",
      senior: "Ældre hunde har brug for hyppigere tjek, og tandpine er en almindelig årsag til, at en ældre hund virker langsommere eller mere gnaven.",
    },
    sources: [vetOrgs.avdc, vetOrgs.wsava],
  },

  /* --------------------------------------------------------- Coat & skin */
  {
    id: "coat",
    title: "Pels & hud",
    promise: "Lær hvad der er normalt for din hund, og du vil hurtigt bemærke, når det ikke er det.",
    category: "coat",
    intro: [
      "Børstning handler ikke kun om udseendet. Det er sådan, de fleste mennesker først bemærker en knude, et ømt område, en flåt eller en filt, der dannes et akavet sted.",
      "Hvor ofte afhænger langt mere af pelsen end racenavnet på papirerne – og blandingshunde kan falde ind overalt.",
    ],
    sections: [
      {
        title: "Korte, glatte pelse",
        body: "En hurtig børstning en gang om ugen med en gummihandske eller en børste holder løse hår nede og føles godt for de fleste hunde.",
        points: ["Fælder året rundt, ofte mere end folk forventer", "Bad kun, når de rent faktisk er beskidte", "Huden er let at se – brug det"],
      },
      {
        title: "Lange pelse",
        body: "Kræver ordentlig børstning flere gange om ugen, helt ned til huden i stedet for kun at køre overfladen.",
        points: ["Filt dannes bag ørerne, under benene og omkring kraven", "En kam fortæller dig sandheden, en børste ikke", "Trimning omkring poter og bagdel holder tingene rene"],
      },
      {
        title: "Krøllede pelse",
        body: "Krøller fælder ikke meget, hvilket betyder, at de løse hår bliver i pelsen og filtrer stille og roligt.",
        points: ["Børst og kam hver dag eller to", "Regelmæssige plejeaftaler, normalt hver sjette til ottende uge", "Filt trækker i huden og gør ondt – fjern det tidligt"],
      },
      {
        title: "Dobbeltpelse",
        body: "En blød underpels under en grovere dækpels. Den falder kraftigt af to gange om året, og du finder den overalt.",
        points: ["En underuldskam tjener sit formål om foråret og efteråret", "Barber ikke en dobbeltpels, medmindre en dyrlæge råder til det", "Rigelig børstning slår hyppig badning"],
      },
      {
        title: "Rå pelse",
        body: "Hårde, vejrbestandige pelse, der bevarer deres tekstur med håndstripping snarere end klipning.",
        points: ["Kam skægget og benene igennem", "Klipning blødgør pelsen over tid", "En hundefrisør, der kender pelstypen, er værd at finde"],
      },
    ],
    steps: [
      {
        title: "Start med dine hænder",
        body: "Kør dine hænder over din hund, før børsten kommer frem. Du mærker efter knuder, sårskorper, ømme pletter og alt, der sidder fast i pelsen.",
      },
      {
        title: "Børst i sektioner",
        body: "Arbejd i små områder, helt ned til huden. Hold håret over en filt, så du ikke trækker i huden, mens du arbejder.",
      },
      {
        title: "Tjek de akavede steder",
        body: "Bag ørerne, armhulerne, bagsiden af benene, halen og under kraven. Filt starter næsten altid, hvor ting gnider.",
      },
      {
        title: "Afslut med noget rart",
        body: "En godbid, et kærtegn, et spil. Pelspleje skal være noget, din hund ser frem til, ikke udholder.",
      },
    ],
    watchFor: [
      "Kradsen, slikken eller bid, der er nyt eller konstant",
      "Rød hud, pletter, sårskorper eller et varmt område",
      "Hårtab eller hår, der falder af i pletter",
      "En lugt, der ikke var der før",
      "Skællet eller fedtet hud",
      "Knuder, eller en knude, der har ændret sig",
    ],
    whenToAskVet:
      "Kløe har mange mulige årsager – parasitter, allergier, infektioner, nogle gange noget helt andet. Hvis det er vedvarende, kan din dyrlæge finde ud af, hvad det er, i stedet for at du gætter på shampooer.",
    ageNotes: {
      puppy: "Hvalpepelse ændrer sig, efterhånden som de vokser. Børstning nu handler mest om at lære dem, at det er behageligt at blive håndteret.",
      senior: "Ældre hunde plejer sig selv mindre og får ofte mere skællet eller knudret hud. Blid, hyppig børstning slår lange sessioner.",
    },
    sources: [vetOrgs.rspca, vetOrgs.bva],
  },

  /* ---------------------------------------------------------- Paws & nails */
  {
    id: "paws",
    title: "Poter & kløer",
    promise: "Tredive sekunder efter en gåtur fanger de fleste små problemer, før de bliver ømme.",
    category: "paws",
    intro: [
      "Poterne får en del tæsk, og hunde er stoiske omkring dem. Et hurtigt kig efter gåture er en af de nemmeste vaner at opbygge.",
      "Kløer, der er for lange, ændrer, hvordan en hund står, og kan gøre det ubehageligt at gå, så det er værd at holde øje med.",
    ],
    steps: [
      {
        title: "Hold poten forsigtigt",
        body: "Støt den nedefra i stedet for at klemme. Hvis din hund trækker sig, så lad dem – prøv så igen senere med en godbid i din anden hånd.",
        visual: "paw-check",
      },
      {
        title: "Kig mellem trædepuderne",
        body: "Græsfrø, grus, vejsalt og små sten elsker at gemme sig der. Om vinteren, skyl og tør poterne efter gåture på saltede fortove.",
        visual: "paw-check",
      },
      {
        title: "Mærk på trædepuderne",
        body: "De skal være smidige. Revner, sprækker, rødme eller en pote, der er varmere end de andre, er værd at kigge nærmere på.",
      },
      {
        title: "Tjek pelsen mellem trædepuderne",
        body: "Hos hunde med behårede poter filtrer den og samler ting op. En forsigtig trimning i niveau med trædepuderne hjælper også meget med grebet.",
      },
      {
        title: "Klip små mængder",
        body: "Tag kun spidsen af, stop så. Lidt og ofte er langt sikrere end én stor seance, og beløn roligt hele vejen igennem.",
        visual: "nails",
      },
    ],
    sections: [
      {
        title: "Kløer, uden drama",
        body: "Hvis du kan høre klik på et hårdt gulv, er de sandsynligvis lidt lange. De fleste hunde har brug for en klipning hver tredje til sjette uge.",
        points: [
          "Rør ved poterne hver dag, så klips ikke kommer som en overraskelse",
          "Klip kun selve spidsen – pulpaen sidder længere nede, end folk tror",
          "Mørke kløer: tag mindre stykker og stop, når snitfladen ser kalkagtig ud",
          "Stop, hvis din hund bliver urolig. Intet af dette er værd en kamp",
          "En hundefrisør eller dyreassistent kan gøre det, og der er ingen skam i det overhovedet",
        ],
      },
      {
        title: "Fortove og vejr",
        body: "Tryk bagsiden af din hånd på fortovet i syv sekunder. Hvis du ikke kan holde den der, er det for varmt for poter – gå tidligt eller sent i stedet.",
        points: ["Vinterens salt og grus irriterer trædepuderne – skyl og tør efter", "Lange gåture på ujævnt terræn kan slide trædepuderne ømme", "Dyb sne pakker sig til isklumper i behårede poter"],
      },
    ],
    watchFor: [
      "Halthed, eller slikken på én pote igen og igen",
      "En revnet, blødende eller hævet trædepude",
      "En klo, der er flækket eller knækket tilbage",
      "Rødme eller en dårlig lugt mellem tæerne",
      "Tøven med at gå på et underlag, de var fine med før",
    ],
    whenToAskVet:
      "En flækket klo, et dybt snit eller vedvarende halthed er et opkald værd. Hvis du klipper en klo for kort, og den bløder, stopper det normalt med blodstillende pulver og let tryk – ring til din dyrlæge, hvis det ikke gør.",
    sources: [vetOrgs.rspca, vetOrgs.aaha],
  },

  /* -------------------------------------------------------------- Ears */
  {
    id: "ears",
    title: "Ører",
    promise: "Tag et kig, tag en snus. Det er det meste af øreplejen.",
    category: "health",
    intro: [
      "Sunde ører er lyse-pink indeni, uden megen lugt. At kende den baseline er hele tricket.",
      "Ører behøver ikke dyb rengøring som rutine. At stikke rundt inde i et sundt øre har en tendens til at forårsage de problemer, det skal forhindre.",
    ],
    sections: [
      {
        title: "Det ugentlige kig",
        body: "Løft flappen, kig indeni, tag en snus. Et par sekunder, mens I allerede sidder sammen.",
        points: ["Lyse-pink, ingen stærk lugt, ingen udflåd", "Lidt voks er normalt", "Tør ørerne efter svømning eller bad"],
      },
      {
        title: "Hvis din dyrlæge har givet dig rensemiddel",
        body: "Brug deres produkt og deres instruktioner. Stik aldrig vatpinde ned i øregangen – du pakker affald længere ind.",
      },
      {
        title: "Ører, der kræver mere opmærksomhed",
        body: "Hængende ører, behårede øregange og hunde, der svømmer meget, er mere tilbøjelige til problemer. Det handler om den enkelte hund, ikke kun racen.",
      },
    ],
    watchFor: [
      "En gæret eller sur lugt",
      "Rødme eller hævelse indeni flappen",
      "Brun, gul eller blodig udflåd",
      "Kradsen ved et øre, eller gnider det langs sofaen",
      "Hovedrysten eller -hældning",
      "Flincher, når du rører ved øret",
    ],
    whenToAskVet:
      "Øreinfektioner er smertefulde og heler sjældent af sig selv. Hvis noget ser eller lugter forkert, så få det undersøgt i stedet for at prøve dråber, du har liggende.",
    sources: [vetOrgs.rspca],
  },

  /* -------------------------------------------------------------- Eyes */
  {
    id: "eyes",
    title: "Øjne",
    promise: "Klare, rene og ens. Det er det, du skal kigge efter.",
    category: "health",
    intro: [
      "Et hurtigt kig på din hunds øjne, mens du siger godmorgen, er nok de fleste dage.",
      "Øjne kan hurtigt gå fra let irriteret til alvorligt smertefuldt, så det er en af de ting, der er værd at være lidt forsigtig med.",
    ],
    sections: [
      {
        title: "Hvordan normal ser ud",
        body: "Klart og lyst, hvide, der ikke er blodskudte, pupiller af samme størrelse, ingen sammenknebne øjne. Lidt klar eller grå tåreflåd i hjørnerne er normalt intet.",
      },
      {
        title: "Daglig pleje",
        body: "Tør skorper væk med fugtig vatrondel og rent vand, én vatrondel pr. øje. Hold langt hår trimmet væk fra øjnene. Brug ikke menneske-øjendråber.",
      },
      {
        title: "Fladansigtede hunde",
        body: "Fremtrædende øjne er mere udsatte for slag, udtørring og sår. Hvis din hund har en kort snude, så kig lidt oftere.",
      },
    ],
    watchFor: [
      "Sammenknebne øjne eller holder et øje lukket",
      "Rødme, der bliver ved",
      "Grøn eller gul udflåd",
      "Uklarhed eller en ændring i farven",
      "Gnidning af ansigtet langs jorden",
      "Enhver pludselig ændring, eller at støde ind i ting",
    ],
    whenToAskVet:
      "Et smertefuldt eller pludseligt ændret øje kræver et opkald samme dag. Synsproblemer får bedre resultater, når de ses tidligt.",
    sources: [vetOrgs.bva],
  },

  /* ---------------------------------------------------- Body condition */
  {
    id: "body-condition",
    title: "Kropskondition",
    promise: "Tallet på vægten betyder mindre end, hvordan din hund ser ud og føles under dine hænder.",
    category: "weight",
    intro: [
      "To hunde af samme vægt kan være i helt forskellig form. Kropskondition er, hvordan dyrlæger bedømmer det, og du kan lære det på cirka et minut.",
      "Dette er en vejledning, ikke en diagnose. Race og bygning ændrer, hvordan 'rigtigt' ser ud – en Greyhound og en Labrador i perfekt kondition ligner intet hinanden.",
    ],
    steps: [
      {
        title: "Mærk ribbenene",
        body: "Kør fingerspidserne langs din hunds side. Du skal nemt kunne mærke ribbenene under et tyndt lag, lidt som at mærke knoglerne på bagsiden af din hånd.",
        visual: "body-condition",
      },
      {
        title: "Kig oppefra",
        body: "Stå over din hund, og kig efter en let indsnævring bag ribbenene. En lige eller buet silhuet antyder lidt ekstra.",
        visual: "body-condition",
      },
      {
        title: "Kig fra siden",
        body: "Maven skal trække sig op mod bagbenene i stedet for at løbe i niveau med brystet.",
      },
      {
        title: "Gør det månedligt",
        body: "Ændringer sniger sig langsomt ind. At gøre dette på samme dag hver måned gør afvigelsen tydelig, mens den stadig er lille.",
      },
    ],
    sections: [
      {
        title: "Lidt overvægtig",
        body: "Ribben svære at mærke, talje svær at se, mave løber fladt. Små ændringer virker: mål maden, tæl godbidderne, tilføj ti minutters gåtur.",
      },
      {
        title: "Cirka rigtig",
        body: "Ribben nemme at mærke, synlig talje, mave trukket ind. Fortsæt med det, du gør.",
      },
      {
        title: "Lidt tynd",
        body: "Ribben, rygrad eller hofter stikker frem, meget lidt dækning. Værd at få tjekket af dyrlægen i stedet for bare mere mad – uforklarligt vægttab fortjener et kig.",
      },
    ],
    whenToAskVet:
      "Din dyrlæge kan hjælpe dig med at tjekke kropskondition ordentligt og kan tale om en plan, hvis der er vægt, der skal tabes. Pludselige eller uforklarlige ændringer i vægt fortjener altid en samtale.",
    sources: [vetOrgs.wsava, vetOrgs.aaha],
  },

  /* -------------------------------------------------------- Wellbeing */
  {
    id: "wellbeing",
    title: "En god dag for en hund",
    promise: "En gåtur, lidt leg, noget mad, masser af søvn og tid med dig betyder meget.",
    category: "wellbeing",
    intro: [
      "Et godt liv for en hund behøver ikke være kompliceret eller dyrt. Det meste er rutine, selskab og nok hvile.",
      "Hvis du kun ændrer én ting, er det som regel søvn. Mange 'adfærdsproblemer' skyldes en træt hund, der aldrig får mulighed for at slappe helt af.",
    ],
    sections: [
      {
        title: "Søvn",
        body: "Hunde sover langt mere, end de fleste forventer. Hvalpe har ofte brug for 18 til 20 timer om dagen, voksne et sted omkring 12 til 14, og ældre hunde normalt mere igen.",
        points: ["Et stille sted væk fra hoveddøren og husets trafik", "Lure i løbet af dagen er normalt, ikke dovenskab", "Konstant stimulering er udmattende for en hund, ikke berigende"],
      },
      {
        title: "Sniffen og tænkning",
        body: "Ti minutters ordentlig sniffen kan berolige en hund mere end en times løb. Lad gåturene være langsomme nogle gange.",
        points: ["Spred aftensmaden i græsset", "Gem godbidder rundt i et rum og lad dem søge", "Et madpuslespil eller en rullet håndklæde med foder i", "Nye, rolige steder at udforske"],
      },
      {
        title: "Selskab",
        body: "Hunde er sociale. De fleste har svært ved lange perioder alene, og at være alene er en færdighed, der skal læres gradvist i stedet for at blive antaget.",
      },
      {
        title: "Forudsigelige dage",
        body: "Cirka regelmæssige gåture, måltider og sengetider gør livet lettere at aflæse. Det behøver ikke være præcist på minuttet.",
      },
      {
        title: "Stille tid",
        body: "Tid, hvor der ikke bliver bedt om noget af dem – ingen træning, ingen gæster, ingen spil. Enhver hund har brug for noget af det i løbet af dagen.",
      },
    ],
    ageNotes: {
      puppy: "Hvalpe bliver hurtigt overtrætte, og det ligner uartigheder – bid, zoomies, ignorerer alt. Mere søvn løser det normalt.",
      adolescent: "Teenagehunde har brug for rigtige afløb: sniffen, tyggen, træning, leg. Kedsomhed viser sig i stedet ved at tygge på dine ting.",
      senior: "Kortere, hyppigere gåture, blødere sengetøj og blide hjernespil passer bedre til ældre hunde end lange udflugter.",
    },
    sources: [vetOrgs.rspca],
  },

  /* --------------------------------------------------- Everyday check */
  {
    id: "everyday-check",
    title: "Kend din hunds normal",
    promise: "Du vil bemærke en ændring længe før nogen andre gør. Det er virkelig værdifuldt.",
    category: "health",
    intro: [
      "Du behøver ikke undersøge din hund. Du skal bare have en grov fornemmelse af deres normal – hvor meget de spiser, drikker, bevæger sig og sover.",
      "Når noget ændrer sig, hjælper det din dyrlæge enormt at kunne sige 'det her startede tirsdag'.",
    ],
    sections: [
      {
        title: "Appetit",
        body: "De fleste hunde er ret forudsigelige spisere. At springe et måltid over sker; at miste appetitten i en dag eller mere er værd at være opmærksom på.",
      },
      {
        title: "Drikke",
        body: "En klar stigning eller fald i drikke er et af de mere nyttige tidlige tegn, der findes. Hvis du er i tvivl, så mål, hvad der kommer i skålen i et par dage.",
      },
      {
        title: "Energi",
        body: "At sænke tempoet er ikke kun alder. Tøven på trapper, stivhed efter hvile eller mindre interesse for gåture er ofte ubehag.",
      },
      {
        title: "Toiletvaner",
        body: "Bemærk ændringer i hyppighed, anstrengelse eller løs afføring, der varer mere end en dag. Ikke et behageligt emne, men et nyttigt.",
      },
      {
        title: "Vægt og pels",
        body: "Månedlig vægt, månedlig hands-on tjek. Pelskvalitet ændrer sig ofte, før noget andet gør.",
      },
      {
        title: "Adfærd",
        body: "At gemme sig, klamhed, irritabilitet eller rastløshed om natten kan alle være tegn på smerte snarere end humør.",
      },
    ],
    whenToAskVet:
      "Én lille ændring på én dag er normalt intet. En ændring, der varer mere end en dag eller to, eller flere ændringer på én gang, er et opkald værd.",
    sources: [vetOrgs.aaha],
  },

  /* -------------------------------------------- Something seems different */
  {
    id: "something-different",
    title: "Noget virker anderledes?",
    promise: "Et roligt sted at finde ud af, om dette er noget, man kan vente og se på, eller om man skal ringe til dyrlægen.",
    category: "health",
    intro: [
      "Dette er generel information, ikke en diagnose. Nogle ændringer er harmløse, og nogle er det ikke, og forskellen er ofte ikke tydelig udefra.",
      "Hvis du er bekymret, eller ændringen kom pludseligt eller alvorligt, så kontakt din dyrlæge. Bekymring i sig selv er en god nok grund til at ringe.",
    ],
    sections: [
      {
        title: "Mister appetitten",
        body: "Et springet måltid hos en ellers kvik hund er almindeligt. Ring til din dyrlæge, hvis det varer mere end ca. 24 timer, hvis en hvalp springer måltider over, eller hvis der er opkastning, sløvhed eller en hævet mave sammen med det.",
      },
      {
        title: "Drikker meget mere eller mindre",
        body: "En klar ændring, der varer mere end et par dage, er værd at undersøge i stedet for at observere. Noter cirka, hvor meget.",
      },
      {
        title: "Opkastning",
        body: "Én opkastning, så tilbage til normal, falder ofte til ro. Ring, hvis det er gentaget, hvis de ikke kan holde vand nede, hvis der er blod, hvis de prøver at kaste op uden at producere noget, eller hvis de muligvis har slugt noget.",
      },
      {
        title: "Diarré",
        body: "Mild og kortvarig er almindeligt. Ring, hvis det varer ud over en dag eller to, indeholder blod, eller kommer med opkastning, smerte eller en flad, træt hund – og hurtigere for hvalpe og ældre hunde, der dehydrerer hurtigt.",
      },
      {
        title: "Hoste",
        body: "En lejlighedsvis hoste efter at have trukket i snoren er anderledes end en hoste, der fortsætter. Vedvarende hoste, hoste om natten, eller enhver vejrtrækningsbesvær kræver en dyrlæge.",
      },
      {
        title: "Kløe",
        body: "Konstant kradsen, slikken eller bid er ubehageligt og har normalt en årsag, der er værd at finde – parasitter, hudinfektion eller allergi. Det løser sig sjældent med shampoo alene.",
      },
      {
        title: "Halthed",
        body: "Mild halthed, der falder til ro inden for en dag med hvile, kan observeres. Ikke-vægtbærende halthed, tydelig smerte, hævelse eller en halthed, der varer, bør undersøges.",
      },
      {
        title: "Usædvanlig træthed",
        body: "En stille dag sker. En hund, der ikke vil rejse sig, er ustabil, eller er meget fladere end normalt, bør undersøges hurtigt.",
      },
    ],
    whenToAskVet:
      "Din dyrlæge vil hellere høre fra dig tidligt end sent. At beskrive, hvad der ændrede sig, hvornår det startede, og hvad der er anderledes end normalt, er præcis, hvad de har brug for.",
    sources: [vetOrgs.bva, vetOrgs.aaha],
  },

  /* ---------------------------------------------------------- Emergency */
  {
    id: "emergency",
    title: "Når det ikke kan vente",
    promise: "Den korte liste over ting, der betyder, at man skal ringe til en dyrlæge med det samme, på alle tidspunkter.",
    category: "health",
    intro: [
      "Hav din dyrlæges nummer og din nærmeste akutklinik et sted, du kan finde dem uden at tænke. Gem dem i din telefon nu.",
      "I disse situationer, ring først og kom ind. Vent ikke med at se, hvordan tingene udvikler sig, og prøv ikke hjemmemidler.",
    ],
    sections: [
      {
        title: "Ring til en dyrlæge straks",
        body: "Alt dette betyder akut professionel hjælp, dag eller nat.",
        points: [
          "Åndedrætsbesvær, kvælning eller blå eller meget blege gummer",
          "Kollaps, bevidstløshed eller pludselig svaghed",
          "Blødning, der ikke stopper",
          "Mistanke om forgiftning, eller at have spist noget, de ikke burde have",
          "Et anfald, eller gentagne anfald",
          "At være blevet ramt af en bil, et fald eller enhver alvorlig skade",
          "Anstrenger sig for at urinere og producerer intet",
          "En hævet, hård mave med gaben og ingen opkastning",
          "Tegn på hedeslag: kraftig hungen, nød, kollaps i varmen",
          "Pludselig alvorlig smerte, eller en hund, der slet ikke kan falde til ro",
        ],
      },
      {
        title: "Mistanke om forgiftning",
        body: "Ring til din dyrlæge eller en dyreforgiftningslinje med det samme, og fortæl dem hvad, hvor meget og hvornår. Tag emballagen med dig. Forsøg ikke at få din hund til at kaste op, medmindre en dyrlæge beder dig om det – med visse stoffer forårsager det mere skade.",
      },
      {
        title: "På vej",
        body: "Hold din hund rolig, varm og stille. Kør forsigtigt. Ring i forvejen, så klinikken er klar til dig.",
      },
    ],
    whenToAskVet:
      "Hvis du læser dette og undrer dig over, om det tæller, så ring. Ingen på en dyreklinik har noget imod et opkald, der viser sig at være intet.",
    sources: [vetOrgs.bva, vetOrgs.rspca],
  },
];
