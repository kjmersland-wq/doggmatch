import type { CareTopic } from "./types";

const vetOrgs = {
  wsava: { label: "Global nutrition and dental guidelines", org: "World Small Animal Veterinary Association" },
  avdc: { label: "Home dental care guidance", org: "American Veterinary Dental College" },
  rspca: { label: "Everyday dog care advice", org: "RSPCA" },
  aaha: { label: "Life stage and preventive care guidelines", org: "American Animal Hospital Association" },
  bva: { label: "Owner guidance on health and welfare", org: "British Veterinary Association" },
} as const;

export const careTopicsSe: CareTopic[] = [
  /* ------------------------------------------------------------- Dental */
  {
    id: "dental",
    title: "En frisk mun är viktig",
    promise: "Några lugna minuter, några gånger i veckan, så håller sig din hunds mun mycket bekvämare.",
    category: "dental",
    intro: [
      "De flesta hundar har någon form av tandproblem när de är några år gamla, och det är lätt att missa eftersom hundar sällan klagar över det.",
      "De goda nyheterna: tandborstning är det absolut mest användbara du kan göra hemma, och nästan alla hundar kan lära sig att gilla det om du tar det lugnt.",
    ],
    steps: [
      {
        title: "Låt dem titta på den först",
        body: "Lägg tandborsten på golvet och låt din hund nosa på den. Inget annat händer. Den här delen är viktigare än den låter.",
        visual: "brush-1",
      },
      {
        title: "Rör vid läpparna, sedan tänderna",
        body: "Lyft en läpp en sekund, beröm, släpp. Sedan en finger längs utsidan av tänderna. Håll det kort och glatt.",
        visual: "brush-1",
      },
      {
        title: "Lägg till hundtandkräm",
        body: "Låt dem slicka lite från ditt finger – de flesta är med kött- eller fågelsmak, och hundar gillar dem generellt. Använd aldrig mänsklig tandkräm; den är inte gjord för att sväljas.",
      },
      {
        title: "Borsta några tänder",
        body: "Små cirklar längs utsidan, där plack byggs upp mest. De stora tänderna baktill och hörntänderna är viktigast. Insidan kan vänta – där byggs det upp mindre och de flesta hundar ogillar det.",
        visual: "brush-2",
      },
      {
        title: "Avsluta innan de fått nog",
        body: "Trettio sekunder är en bra session i början. Sluta medan din hund fortfarande tycker att det är okej, och bygg upp därifrån.",
      },
    ],
    routine: [
      { day: "Dag 1", body: "Låt din hund nosa på tandborsten. Det är hela sessionen." },
      { day: "Dag 2", body: "Rör försiktigt vid deras läppar en sekund eller två, sedan en godbit." },
      { day: "Dag 3", body: "En smak av hundsäker tandkräm från ditt finger." },
      { day: "Dag 4", body: "Dra ett finger eller en borste längs några framtänder." },
      { day: "Dag 5", body: "Borsta ena sidan av munnen, kort." },
      { day: "Dag 6", body: "Båda sidor, fortfarande kort. Beröm medan du borstar." },
      { day: "Dag 7", body: "En normal liten session. Fortsätt sedan så, de flesta dagar om du kan." },
    ],
    sections: [
      {
        title: "Vad som faktiskt hjälper",
        body: "Borstning är det som har starkast bevis bakom sig. Allt annat är ett användbart extra, inte en ersättning.",
        points: [
          "En mjuk borste, en fingerborste eller till och med gasbinda – vad din hund tolererar",
          "Endast hundtandkräm",
          "Dagligen är idealiskt, några gånger i veckan hjälper fortfarande",
          "Tuggben och foder med en veterinärdentalstämpel kan hjälpa vid sidan av borstning",
        ],
      },
      {
        title: "Om ben och hårda tuggben",
        body: "Hårt tuggande rengör inte tänderna på ett pålitligt sätt, och mycket hårda föremål är en vanlig orsak till frakturerade tänder – horn, klövar, hård nylon, kokta ben, isbitar.",
        points: [
          "En grov tumregel: om du inte kunde buckla det med en nagel, är det förmodligen för hårt",
          "Kokta ben kan splittras och bör undvikas",
          "Övervaka alla tuggben, och ta bort det när det blir litet nog att sväljas",
          "Din veterinär kan tala om vilka tuggben de ser orsakar problem lokalt",
        ],
      },
      {
        title: "Professionell rengöring",
        body: "Viss beläggning kan bara tas bort under narkos, med röntgen för att se vad som händer under tandköttskanten. Det är inte ett misslyckande från din sida – det är en del av normal vård för många hundar.",
      },
    ],
    watchFor: [
      "Andedräkt som är ihållande dålig, inte bara hundaktig",
      "Rött, svullet eller blödande tandkött",
      "Tuggar på ena sidan, eller tappar mat",
      "En trasig eller missfärgad tand",
      "Mer dregling än vanligt",
      "Pälsar sig mot munnen, eller vänder bort när du rör vid ansiktet",
      "Svullnad i ansiktet eller under ett öga",
    ],
    whenToAskVet:
      "Om du märker något av detta är det värt att boka en undersökning. Tandvärk är lätt att missa eftersom de flesta hundar fortsätter att äta trots det.",
    ageNotes: {
      puppy: "Valpar tappar sina mjölktänder från cirka fyra månaders ålder. Börja hanteringen nu – en valp som tycker att tandborstar är normalt är en gåva till ditt framtida jag.",
      senior: "Äldre munnar behöver kontrolleras oftare, och tandvärk är en vanlig anledning till att en äldre hund verkar långsammare eller grinigare.",
    },
    sources: [vetOrgs.avdc, vetOrgs.wsava],
  },

  /* --------------------------------------------------------- Coat & skin */
  {
    id: "coat",
    title: "Päls & hud",
    promise: "Lär känna vad som är normalt för din hund, så märker du snabbt när det inte är det.",
    category: "coat",
    intro: [
      "Borstning handlar inte bara om utseendet. Det är så de flesta först märker en knöl, ett sår, en fästing eller en tova som bildas någonstans opassande.",
      "Hur ofta beror mycket mer på pälsen än rasnamnet på pappret – och blandraser kan hamna var som helst.",
    ],
    sections: [
      {
        title: "Korta, släta pälsar",
        body: "En snabb borstning en gång i veckan med en gummihandske eller borste håller löst hår nere och känns bra för de flesta hundar.",
        points: ["Fäller året runt, ofta mer än folk förväntar sig", "Bada bara när de faktiskt är smutsiga", "Huden är lätt att se – använd det"],
      },
      {
        title: "Långa pälsar",
        body: "Behöver ordentlig borstning flera gånger i veckan, ända ner till huden snarare än att bara borsta ytan.",
        points: ["Tovor bildas bakom öronen, under armarna och runt halsbandet", "En kam talar sanningen som en borste inte gör", "Trimning runt tassar och bakdel håller rent"],
      },
      {
        title: "Lockiga pälsar",
        body: "Lockar fäller inte mycket, vilket innebär att löst hår stannar kvar i pälsen och tovar sig tyst.",
        points: ["Borsta och kamma varannan dag", "Regelbundna pälsvårdsbesök, oftast var sjätte till åttonde vecka", "Tovor drar i huden och gör ont – få bort dem tidigt"],
      },
      {
        title: "Dubbla pälsar",
        body: "En mjuk underpäls under en grövre täckpäls. Den fälls kraftigt två gånger om året och du hittar den överallt.",
        points: ["En underullskam är guld värd på våren och hösten", "Raka inte en dubbelpäls om inte en veterinär råder dig till det", "Massor av borstning slår frekvent bad"],
      },
      {
        title: "Sträva pälsar",
        body: "Hårda, väderbeständiga pälsar som behåller sin textur med handplockning snarare än klippning.",
        points: ["Kamma igenom skägg och ben", "Klippning mjukar upp pälsen över tid", "En hundfrisör som känner till pälstypen är värd att hitta"],
      },
    ],
    steps: [
      {
        title: "Börja med händerna",
        body: "Kör händerna över din hund innan borsten kommer fram. Du känner efter knölar, sårskorpor, ömma fläckar och allt som sitter fast i pälsen.",
      },
      {
        title: "Borsta i sektioner",
        body: "Arbeta i små områden, ända ner till huden. Håll håret ovanför en tova så att du inte drar i huden medan du arbetar.",
      },
      {
        title: "Kontrollera de svåra ställena",
        body: "Bakom öronen, armhålorna, baksidan av benen, svansen och under halsbandet. Tovor börjar nästan alltid där saker gnider.",
      },
      {
        title: "Avsluta med något trevligt",
        body: "En godbit, en klapp, en lek. Pälsvård bör vara något din hund ser fram emot, inte uthärdar.",
      },
    ],
    watchFor: [
      "Kliande, slickande eller tuggande som är nytt eller konstant",
      "Röd hud, prickar, sårskorpor eller en varm fläck",
      "Håravfall eller att pälsen tunnas ut i fläckar",
      "En lukt som inte fanns där förut",
      "Fjällande eller fet hud",
      "Knölar, eller en knöl som har förändrats",
    ],
    whenToAskVet:
      "Klåda har många möjliga orsaker – parasiter, allergier, infektioner, ibland något helt annat. Om det är ihållande kan din veterinär reda ut vilken, istället för att du gissar på schampon.",
    ageNotes: {
      puppy: "Valppälsar förändras när de växer. Borstning nu handlar mest om att lära dem att bli hanterade är behagligt.",
      senior: "Äldre hundar sköter sig själva mindre och får ofta flagnande eller knöligare hud. Skonsam, frekvent borstning slår långa sessioner.",
    },
    sources: [vetOrgs.rspca, vetOrgs.bva],
  },

  /* ---------------------------------------------------------- Paws & nails */
  {
    id: "paws",
    title: "Tassar & klor",
    promise: "Trettio sekunder efter en promenad fångar de flesta små problemen innan de blir ömma.",
    category: "paws",
    intro: [
      "Tassar får utstå mycket och hundar är stoiska när det gäller dem. En snabb titt efter promenader är en av de enklaste vanorna att bygga upp.",
      "Klor som är för långa ändrar hur en hund står och kan göra promenader obekväma, så de är värda att hålla koll på.",
    ],
    steps: [
      {
        title: "Håll tassen försiktigt",
        body: "Stöd den underifrån snarare än att greppa. Om din hund drar sig undan, låt dem – försök sedan igen senare med en godbit i din andra hand.",
        visual: "paw-check",
      },
      {
        title: "Titta mellan trampdynorna",
        body: "Gräsfrön, grus, vägsalt och små stenar älskar att gömma sig där. På vintern, skölj och torka tassarna efter saltade trottoarer.",
        visual: "paw-check",
      },
      {
        title: "Känn på trampdynorna",
        body: "De ska vara smidiga. Sprickor, sår, rodnad eller en tass som är varmare än de andra är värda en närmare titt.",
      },
      {
        title: "Kontrollera pälsen mellan trampdynorna",
        body: "Hos hundar med lurviga tassar tovar den sig och samlar smuts. En försiktig trimning i nivå med trampdynorna hjälper också mycket med greppet.",
      },
      {
        title: "Klipp små mängder",
        body: "Ta bara av spetsen, sedan stopp. Lite och ofta är mycket säkrare än en stor session, och belöna lugnt hela tiden.",
        visual: "nails",
      },
    ],
    sections: [
      {
        title: "Klor, utan dramatik",
        body: "Om du hör klickande på ett hårt golv är de förmodligen lite långa. De flesta hundar behöver en klippning var tredje till sjätte vecka.",
        points: [
          "Rör vid tassarna varje dag så att klotången inte blir en överraskning",
          "Klipp bara den allra yttersta spetsen – pulpan sitter längre ner än folk tror",
          "Mörka klor: ta mindre bitar och sluta när snittytan ser kritaktig ut",
          "Sluta om din hund blir upprörd. Ingenting av detta är värt en strid",
          "En hundfrisör eller veterinärsjuksköterska kan göra det, och det finns ingen skam i det alls",
        ],
      },
      {
        title: "Trottoarer och väder",
        body: "Tryck baksidan av din hand mot trottoaren i sju sekunder. Om du inte kan hålla den där är det för varmt för tassar – gå tidigt eller sent istället.",
        points: ["Vinter salt och grus irriterar trampdynorna – skölj och torka efteråt", "Långa promenader på grov mark kan nöta trampdynorna", "Djup snö packas till isbollar i lurviga tassar"],
      },
    ],
    watchFor: [
      "Hälta, eller att slicka en tass om och om igen",
      "En sprucken, blödande eller svullen trampdyna",
      "En klo som är trasig eller avbruten",
      "Rodnad eller en dålig lukt mellan tårna",
      "Motvilja att gå på en yta de tidigare var okej med",
    ],
    whenToAskVet:
      "En trasig klo, ett djupt sår eller ihållande hälta är ett samtal värt att göra. Om du klipper en klo för kort och den blöder, brukar alunpulver och lätt tryck lugna det – ring din veterinär om det inte gör det.",
    sources: [vetOrgs.rspca, vetOrgs.aaha],
  },

  /* -------------------------------------------------------------- Ears */
  {
    id: "ears",
    title: "Öron",
    promise: "Ta en titt, ta en lukt. Det är det mesta av öronvården.",
    category: "health",
    intro: [
      "Friska öron är blekrosa inuti, utan mycket lukt. Att känna till den baslinjen är hela tricket.",
      "Öron behöver inte djuprengöras rutinmässigt. Att peta runt inuti ett friskt öra tenderar att orsaka de problem det är tänkt att förebygga.",
    ],
    sections: [
      {
        title: "Veckans titt",
        body: "Lyft fliken, titta inuti, ta en lukt. Några sekunder medan ni redan sitter tillsammans.",
        points: ["Blekrosa, ingen stark lukt, ingen flytning", "Lite vax är normalt", "Torka öronen efter simning eller bad"],
      },
      {
        title: "Om din veterinär har gett dig rengöring",
        body: "Använd deras produkt och deras instruktioner. Skjut aldrig in bomullspinnar i hörselgången – du packar skräp längre in.",
      },
      {
        title: "Öron som behöver mer uppmärksamhet",
        body: "Hängande öron, håriga hörselgångar och hundar som simmar mycket är mer benägna att få problem. Det handlar om den individuella hunden, inte bara rasen.",
      },
    ],
    watchFor: [
      "En jästig eller sur lukt",
      "Rodnad eller svullnad inuti fliken",
      "Brun, gul eller blodig flytning",
      "Kliar sig vid ett öra, eller gnider det mot soffan",
      "Huvudskakningar eller lutningar",
      "Rycker till när du rör vid örat",
    ],
    whenToAskVet:
      "Öroninfektioner är smärtsamma och läker sällan ut av sig själva. Om något ser eller luktar fel, låt det undersökas istället för att försöka med droppar du har i en låda.",
    sources: [vetOrgs.rspca],
  },

  /* -------------------------------------------------------------- Eyes */
  {
    id: "eyes",
    title: "Ögon",
    promise: "Klart, ljusa och lika. Det är vad du letar efter.",
    category: "health",
    intro: [
      "En snabb titt på din hunds ögon medan du säger hej på morgonen räcker för de flesta dagar.",
      "Ögon kan snabbt gå från milt irriterade till allvarligt smärtsamma, så de är en av de saker som är värda att vara lite försiktig med.",
    ],
    sections: [
      {
        title: "Hur normalt ser ut",
        body: "Klart och ljust, vita som inte är blodsprängda, pupiller av samma storlek, ingen kisning. Lite klar eller grå tårvätska i hörnen är oftast inget.",
      },
      {
        title: "Vardagsvård",
        body: "Torka bort skorpor med fuktad bomull och rent vatten, en torkning per öga. Håll lång päls trimmad bort från ögonen. Använd inte mänskliga ögondroppar.",
      },
      {
        title: "Plattnosade hundar",
        body: "Framträdande ögon är mer utsatta för stötar, uttorkning och sår. Om din hund har en kort nos, titta lite oftare.",
      },
    ],
    watchFor: [
      "Kisning eller att hålla ett öga stängt",
      "Rodnad som kvarstår",
      "Grön eller gul flytning",
      "Gråhet eller en färgförändring",
      "Gnuggar ansiktet mot marken",
      "Någon plötslig förändring, eller att stöta in i saker",
    ],
    whenToAskVet:
      "Ett smärtsamt eller plötsligt förändrat öga är ett samtal som kräver samma dag. Synproblem får bättre resultat när de ses tidigt.",
    sources: [vetOrgs.bva],
  },

  /* ---------------------------------------------------- Body condition */
  {
    id: "body-condition",
    title: "Kroppskondition",
    promise: "Siffran på vågen spelar mindre roll än hur din hund ser ut och känns under dina händer.",
    category: "weight",
    intro: [
      "Två hundar av samma vikt kan vara i helt olika form. Kroppskondition är hur veterinärer bedömer det, och du kan lära dig det på ungefär en minut.",
      "Det här är en guide, inte en diagnos. Ras och byggnad förändrar hur 'rätt' ser ut – en Greyhound och en Labrador i perfekt kondition ser ingenting lika ut.",
    ],
    steps: [
      {
        title: "Känn revbenen",
        body: "Kör fingertopparna längs din hunds sida. Du ska lätt känna revbenen under ett tunt lager, lite som att känna benen på baksidan av din hand.",
        visual: "body-condition",
      },
      {
        title: "Titta ovanifrån",
        body: "Stå över din hund, leta efter en mjuk förträngning bakom revbenen. En rak eller utbuktande kontur tyder på lite extra.",
        visual: "body-condition",
      },
      {
        title: "Titta från sidan",
        body: "Magen ska dras upp mot bakbenen snarare än att löpa i nivå med bröstet.",
      },
      {
        title: "Gör det varje månad",
        body: "Förändringar smyger sig på långsamt. Att göra detta samma dag varje månad gör avvikelsen tydlig medan den fortfarande är liten.",
      },
    ],
    sections: [
      {
        title: "Lite tung",
        body: "Revben svåra att känna, midja svår att se, mage som löper platt. Små förändringar fungerar: mät maten, räkna godbitarna, lägg till tio minuters promenad.",
      },
      {
        title: "Lagom",
        body: "Revben lätta att känna, synlig midja, mage indragen. Fortsätt som du gör.",
      },
      {
        title: "Lite tunn",
        body: "Revben, ryggrad eller höfter sticker ut, väldigt lite täckning. Värt en veterinärkontroll snarare än bara mer mat – oförklarlig viktnedgång förtjänar en titt.",
      },
    ],
    whenToAskVet:
      "Din veterinär kan hjälpa dig att kontrollera kroppskonditionen ordentligt, och kan diskutera en plan om det finns vikt att gå ner. Plötsliga eller oförklarliga viktförändringar förtjänar alltid ett samtal.",
    sources: [vetOrgs.wsava, vetOrgs.aaha],
  },

  /* -------------------------------------------------------- Wellbeing */
  {
    id: "wellbeing",
    title: "En bra dag för en hund",
    promise: "En promenad, lite lek, lite mat, massor av sömn och tid med dig betyder mycket.",
    category: "wellbeing",
    intro: [
      "Ett bra liv för en hund behöver inte vara komplicerat eller dyrt. Det mesta är rutin, sällskap och tillräckligt med vila.",
      "Om du bara ändrar en sak, är det oftast sömn. Många 'beteendeproblem' är en trött hund som aldrig får chansen att ordentligt koppla av.",
    ],
    sections: [
      {
        title: "Sömn",
        body: "Hundar sover mycket mer än de flesta förväntar sig. Valpar behöver ofta 18 till 20 timmar om dagen, vuxna någonstans runt 12 till 14, och äldre hundar vanligtvis mer igen.",
        points: ["En tyst plats bort från ytterdörren och husets trafik", "Vilor på dagen är normalt, inte lathet", "Konstant stimulans är utmattande för en hund, inte berikande"],
      },
      {
        title: "Nosande och tänkande",
        body: "Tio minuters ordentligt nosande kan lugna en hund mer än en timmes löpning. Låt promenader vara långsamma ibland.",
        points: ["Sprid ut middagen i gräset", "Göm godbitar runt ett rum och låt dem söka", "En matpussel eller en hoprullad handduk med torrfoder i", "Nya, lugna platser att utforska"],
      },
      {
        title: "Sällskap",
        body: "Hundar är sociala. De flesta kämpar med långa perioder ensamma, och att vara ensam är en färdighet som måste läras ut gradvis snarare än antas.",
      },
      {
        title: "Förutsägbara dagar",
        body: "Ungefär regelbundna promenader, måltider och läggdags gör livet lättare att läsa. Det behöver inte vara på minuten.",
      },
      {
        title: "Lugn tid",
        body: "Tid då ingenting efterfrågas av dem – ingen träning, inga besökare, inga lekar. Varje hund behöver lite av det under dagen.",
      },
    ],
    ageNotes: {
      puppy: "Valpar blir övertrötta snabbt och det ser ut som bus – bitande, rusande, ignorerar allt. Mer sömn löser oftast det.",
      adolescent: "Tonårshundar behöver verkliga utlopp: nosande, tuggande, träning, lek. Uttråkning visar sig som att tugga på dina saker istället.",
      senior: "Kortare, mer frekventa promenader, mjukare bäddar och lugna hjärnspel passar äldre hundar bättre än långa utflykter.",
    },
    sources: [vetOrgs.rspca],
  },

  /* --------------------------------------------------- Everyday check */
  {
    id: "everyday-check",
    title: "Lär känna vad som är normalt för din hund",
    promise: "Du kommer att märka en förändring långt innan någon annan gör det. Det är genuint värdefullt.",
    category: "health",
    intro: [
      "Du behöver inte undersöka din hund. Du behöver bara en grov känsla för deras normala – hur mycket de äter, dricker, rör sig och sover.",
      "När något förändras, hjälper det din veterinär enormt att kunna säga 'det här började på tisdag'.",
    ],
    sections: [
      {
        title: "Aptit",
        body: "De flesta hundar är ganska förutsägbara ätare. Att hoppa över en måltid händer; att tappa aptiten i en dag eller mer är värt uppmärksamhet.",
      },
      {
        title: "Drickande",
        body: "En tydlig ökning eller minskning av drickande är ett av de mer användbara tidiga tecknen som finns. Om du är osäker, mät vad som går i skålen under ett par dagar.",
      },
      {
        title: "Energi",
        body: "Att sakta ner är inte bara ålder. Motvilja i trappor, stelhet efter vila eller mindre intresse för promenader är ofta obehag.",
      },
      {
        title: "Toalettvanor",
        body: "Notera förändringar i frekvens, ansträngning, eller lös avföring som varar mer än en dag. Inte ett trevligt ämne, men ett användbart.",
      },
      {
        title: "Vikt och päls",
        body: "Månatlig vikt, månatlig handkontroll. Pälskvaliteten förändras ofta innan något annat gör det.",
      },
      {
        title: "Beteende",
        body: "Att gömma sig, klamra sig fast, irritabilitet eller rastlöshet på natten kan alla vara tecken på smärta snarare än humör.",
      },
    ],
    whenToAskVet:
      "En liten förändring en dag är oftast inget. En förändring som varar mer än en dag eller två, eller flera förändringar samtidigt, är värd ett telefonsamtal.",
    sources: [vetOrgs.aaha],
  },

  /* -------------------------------------------- Something seems different */
  {
    id: "something-different",
    title: "Något verkar annorlunda?",
    promise: "En lugn plats att reda ut om detta är ett 'vänta och se', eller ett 'ring veterinären'.",
    category: "health",
    intro: [
      "Det här är allmän information, inte en diagnos. Vissa förändringar är ofarliga och vissa är det inte, och skillnaden är ofta inte uppenbar utifrån.",
      "Om du är orolig, eller om förändringen kom plötsligt eller allvarligt, kontakta din veterinär. Oro i sig är en god nog anledning att ringa.",
    ],
    sections: [
      {
        title: "Appetitlös",
        body: "En hoppad måltid hos en annars pigg hund är vanligt. Ring din veterinär om det är mer än cirka 24 timmar, om en valp hoppar över måltider, eller om det finns kräkningar, slöhet eller en svullen mage vid sidan av det.",
      },
      {
        title: "Dricker mycket mer eller mindre",
        body: "En tydlig förändring som varar mer än ett par dagar är värd att undersöka snarare än att bara observera. Notera ungefär hur mycket.",
      },
      {
        title: "Kräkningar",
        body: "En kräkning, sedan tillbaka till normalt, går ofta över. Ring om det är upprepat, om de inte kan behålla vatten, om det finns blod, om de försöker kräkas utan att producera något, eller om de kan ha svalt något.",
      },
      {
        title: "Diarré",
        body: "Mild och kortvarig är vanlig. Ring om det varar längre än en dag eller två, innehåller blod, eller kommer med kräkningar, smärta eller en slapp, trött hund – och tidigare för valpar och äldre hundar, som blir uttorkade snabbt.",
      },
      {
        title: "Hosta",
        body: "En enstaka hosta efter att ha dragit i kopplet är annorlunda än en hosta som fortsätter. Ihållande hosta, hosta på natten, eller någon andningssvårighet behöver en veterinär.",
      },
      {
        title: "Klåda",
        body: "Konstant kliande, slickande eller tuggande är obekvämt och har oftast en orsak som är värd att hitta – parasiter, hudinfektion eller allergi. Det läker sällan med schampo ensamt.",
      },
      {
        title: "Hälta",
        body: "Mild hälta som lägger sig inom en dag med vila kan observeras. Hälta utan att belasta, uppenbar smärta, svullnad eller en hälta som varar bör undersökas.",
      },
      {
        title: "Ovanlig trötthet",
        body: "En lugn dag händer. En hund som inte vill resa sig, är ostadig, eller är mycket plattare än vanligt bör undersökas snabbt.",
      },
    ],
    whenToAskVet:
      "Din veterinär vill hellre höra från dig tidigt än sent. Att beskriva vad som förändrades, när det började och vad som skiljer sig från normalt är precis vad de behöver.",
    sources: [vetOrgs.bva, vetOrgs.aaha],
  },

  /* ---------------------------------------------------------- Emergency */
  {
    id: "emergency",
    title: "När det inte kan vänta",
    promise: "Den korta listan över saker som innebär att ringa en veterinär omedelbart, oavsett tid på dygnet.",
    category: "health",
    intro: [
      "Ha din veterinärs nummer och din närmaste jourklinik någonstans du kan hitta dem utan att tänka. Spara dem i din telefon nu.",
      "I dessa situationer, ring först och åk in. Vänta inte för att se hur saker utvecklas, och försök inte med huskurer.",
    ],
    sections: [
      {
        title: "Ring en veterinär omedelbart",
        body: "Något av detta kräver akut professionell hjälp, dag som natt.",
        points: [
          "Andningssvårigheter, kvävning, eller blå eller mycket bleka tandkött",
          "Kollaps, medvetslöshet, eller plötslig svaghet",
          "Blödning som inte slutar",
          "Misstänkt förgiftning, eller att ha ätit något de inte borde ha",
          "Ett anfall, eller upprepade anfall",
          "Att ha blivit påkörd av en bil, ett fall, eller någon allvarlig skada",
          "Anstränger sig för att urinera och producerar inget",
          "En svullen, hård mage med kväljningar och ingen kräkning",
          "Värmeslagstecken: kraftig flämtning, ångest, kollaps i värmen",
          "Plötslig svår smärta, eller en hund som inte kan lugna sig alls",
        ],
      },
      {
        title: "Misstänkt förgiftning",
        body: "Ring din veterinär eller en djurgiftlinje omedelbart, och tala om vad, hur mycket och när. Ta med förpackningen. Försök inte att få din hund att kräkas om inte en veterinär säger åt dig att göra det – med vissa ämnen orsakar det mer skada.",
      },
      {
        title: "På väg",
        body: "Håll din hund lugn, varm och stilla. Kör försiktigt. Ring i förväg så att kliniken är redo för dig.",
      },
    ],
    whenToAskVet:
      "Om du läser detta och undrar om det räknas, ring. Ingen på en veterinärklinik har något emot ett samtal som visar sig vara ingenting.",
    sources: [vetOrgs.bva, vetOrgs.rspca],
  },
];
