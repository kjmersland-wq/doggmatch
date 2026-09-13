import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/** Rasetekst på norsk, knyttet til de samme stabile rase-id-ene. */
export const breedContentNo: Partial<Record<BreedId, BreedContent>> = {
  "labrador-retriever": {
    displayName: "Labrador retriever",
    summary:
      "En åpen, matglad brukshund som har blitt selve familiehunden — av gode grunner — og som fortsatt trenger noe ekte å gjøre for å ha det bra.",
    strengths: [
      "Elsker å være sammen med folk",
      "Lærer fort, særlig for en godbit",
      "Herlig selskap i hverdagen",
      "Blir gjerne med på alt som er aktivt",
      "Faller som regel godt inn i familielivet",
    ],
    considerations: [
      "Feller hele året",
      "Trenger en god del mosjon hver dag",
      "Stor og sterk i bånd",
      "Kjeder seg uten noe å bryne hodet på",
    ],
  },
  "golden-retriever": {
    displayName: "Golden retriever",
    summary:
      "Mild, samarbeidsvillig og utrolig tålmodig. En golden ber om selskap mer enn den ber om noe annet.",
    strengths: [
      "Nydelig mild med barn",
      "Elsker å lære når det er en belønning i det",
      "Vennlig med både folk og andre hunder",
      "Trives best ute i kjøligere vær",
    ],
    considerations: [
      "Feller kraftig et par ganger i året",
      "Trenger jevnlig børsting",
      "Synes varmen er tung",
      "Liker ikke lange dager alene",
    ],
  },
  poodle: {
    displayName: "Puddel (stor)",
    summary:
      "En atletisk og uvanlig klok hund bak en elegant pels. Trives med å løse oppgaver og med et tett samarbeid.",
    strengths: [
      "Feller svært lite",
      "Lærer ting bemerkelsesverdig fort",
      "Klarer seg fint i leilighet, så lenge den kommer nok ut",
      "Leken uten å være kaotisk",
    ],
    considerations: [
      "Tur til hundefrisøren hver 6.–8. uke",
      "Trenger noe å tenke på, ikke bare turer",
      "Kan bli utrygg av mye alenetid",
      "Pelsstellet koster over årene",
    ],
  },
  "french-bulldog": {
    displayName: "Fransk bulldog",
    summary:
      "En kompakt, komisk og dypt hengiven byhund med beskjedent mosjonsbehov og reelle helseutfordringer.",
    strengths: [
      "Stortrives i leilighet",
      "Trenger ikke mye mosjon",
      "Kjærlig, og alltid i nærheten av deg",
      "Roligere enn de fleste små hunder",
    ],
    considerations: [
      "Kan slite med pusten i varme eller ved anstrengelse",
      "Veterinærregningene blir gjerne høyere gjennom livet",
      "Liker ikke å være alene",
      "Velg en oppdretter som helsetester grundig",
    ],
  },
  "border-collie": {
    displayName: "Border collie",
    summary:
      "Den mest lærevillige hunden de fleste ikke burde ha. Skarp, intens og ulykkelig uten jobb hver dag.",
    strengths: [
      "Lærer nesten alt du gidder å lære bort",
      "Strålende til hundesport, nesearbeid og problemløsing",
      "Knytter seg sterkt til sin person",
      "På sitt beste hos virkelig aktive folk",
    ],
    considerations: [
      "Trenger mye mosjon og mye å tenke på",
      "Sjelden fornøyd i leilighet eller rolig rutine",
      "Kan gjete barn eller jage sykler",
      "Kjedsomhet blir fort til problemer",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier king charles spaniel",
    summary:
      "En liten, myk følgesvenn som helst vil være der du er. Rolig selskap heller enn et prosjekt.",
    strengths: [
      "Mild med barn og eldre",
      "Helt fornøyd i et lite hjem",
      "Kommer godt overens med andre dyr",
      "Trenger ikke lange turer",
    ],
    considerations: [
      "Kjente arvelige hjerte- og nevrologiske problemer",
      "Sjelden fornøyd alene over tid",
      "Ører og pels trenger jevnlig stell",
      "Spør alltid om helsetesting av foreldrene",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "En spurter som sover mesteparten av dagen. Stille, ren og overraskende godt egnet i rolige hjem.",
    strengths: [
      "Herlig rolig innendørs",
      "Enkel pels, og bjeffer sjelden",
      "Et par korte spurter holder",
      "Mange leter etter nytt hjem via omplassering",
    ],
    considerations: [
      "Sterk jaktlyst på små dyr",
      "Løping uten bånd krever godt inngjerdet område",
      "Fryser lett, trenger varme og myk seng",
      "Tynn hud, så kutt og skrubbsår skjer fort",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba inu",
    summary:
      "Selvstendig, nøye og selvhjulpen. En shiba respekterer deg heller enn å adlyde deg.",
    strengths: [
      "Takler alenetid bedre enn de fleste",
      "Ren, nesten kattelignende",
      "Liten, men robust",
      "Lever ofte lenge",
    ],
    considerations: [
      "Selvstendig, og innkalling krever ekte arbeid",
      "Feller enorme mengder pels to ganger i året",
      "Ofte reservert mot andre hunder",
      "Ikke den enkleste første hunden",
    ],
  },
  "german-shepherd": {
    displayName: "Schäfer",
    summary:
      "Alvorlig, årvåken og dypt lojal. En schäfer vil ha en jobb, en rutine og noen det er verdt å jobbe for.",
    strengths: [
      "Lærer fort og husker godt",
      "Hengiven mot sine egne",
      "Fantastisk når den er godt sosialisert",
      "På sitt beste med en oppgave hver dag",
    ],
    considerations: [
      "Feller hele året, og kraftig to ganger i året",
      "Trenger en time eller mer med ekte arbeid daglig",
      "Kan bli skeptisk til fremmede uten tidlig trening",
      "Spør oppdretteren om hofter og albuer",
    ],
  },
  dachshund: {
    displayName: "Dachs",
    summary:
      "Liten, morsom og modigere enn beina skulle tilsi. Stor personlighet som liker å være tett på deg.",
    strengths: [
      "Passer fint i et lite hjem",
      "Trenger ikke lange turer",
      "Kvikk og full av karakter",
      "Godt selskap, alltid under føttene",
    ],
    considerations: [
      "Sårbar rygg — ingen trapper eller hopp fra sofaen",
      "Liker lyden av sin egen stemme",
      "Setter seg på bakbeina og diskuterer treningen",
      "Legger lett på seg",
    ],
  },
  beagle: {
    displayName: "Beagle",
    summary:
      "En nese på fire bein. Blid, sosial og nesten umulig å overtale bort fra en god lukt.",
    strengths: [
      "Ekte vennlig mot alle",
      "Robust og grei med barn",
      "Elsker andre hunder",
      "Kort pels, enkel å stelle",
    ],
    considerations: [
      "Innkalling er hardt arbeid — nesen vinner som regel",
      "Uler og gjør seg hørt når den kjeder seg",
      "Spiser alt som ligger framme",
      "Trenger sikkert inngjerdet hage",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker spaniel",
    summary:
      "Bløte øyne, travle poter og uendelig samarbeidsvilje. En cocker er lykkeligst når den gjør noe sammen med deg.",
    strengths: [
      "Kjærlig og ivrig etter å samarbeide",
      "Elsker nesearbeid og lek",
      "Klarer både by og land",
      "Fin størrelse for de fleste hjem",
    ],
    considerations: [
      "Ørene må sjekkes og rengjøres ofte",
      "Pelsen floker seg uten jevnlig børsting",
      "Blir urolig uten noe å gjøre",
      "Liker ikke lange dager alene",
    ],
  },
  chihuahua: {
    displayName: "Chihuahua",
    summary:
      "Bitteliten, frimodig og helt viet til én eller to personer. Liten hund, meninger i full størrelse.",
    strengths: [
      "Perfekt for leilighet",
      "Trenger svært lite mosjon",
      "Lever lenge, ofte langt opp i tenårene",
      "Enkel å ta med på reise",
    ],
    considerations: [
      "Skjør — ingen hund for hardhendt håndtering",
      "Bjeffer på alt ukjent",
      "Fryser fort",
      "Trenger ekte sosialisering for å være avslappet",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Dvergschnauzer",
    summary:
      "Skjegg, skarp hjerne og stille selvfølelse. En terrierhjerne i en ryddig pels som feller lite.",
    strengths: [
      "Feller svært lite",
      "Kvikk og lærer fort",
      "Passer både leilighet og hus",
      "Robust til liten hund å være",
    ],
    considerations: [
      "Klipp hver 6.–8. uke",
      "Bjeffer på døra, posten og vinden",
      "Ikke særlig glad i smådyr",
      "Legger lett på seg",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Berner sennenhund",
    summary:
      "Enorm, mild og rolig. En berner er mykt selskap for en familie med plass og litt sans for hundehår.",
    strengths: [
      "Nydelig tålmodig med barn",
      "Rolig innendørs til så stor hund å være",
      "Elsker kaldt vær",
      "Godlynt og trygg",
    ],
    considerations: [
      "Kortere liv enn de fleste raser",
      "Mye pels, over hele huset",
      "Koster mer i fôr, forsikring og behandling",
      "Sliter tungt i varme",
    ],
  },
  "australian-shepherd": {
    displayName: "Australian shepherd",
    summary:
      "Rask, atletisk og alltid observant. En aussie trenger en hensikt mer enn den trenger en hage.",
    strengths: [
      "Skarp på alt du lærer den",
      "Elsker hundesport, triks og nesearbeid",
      "Knytter seg tett til sin person",
      "Vakker og hardfør ute",
    ],
    considerations: [
      "Trenger timer med aktivitet, hver dag",
      "Gjeter barn, sykler og joggere",
      "Kjeder seg fort, og sier fra",
      "Passer sjelden i leilighet",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack russell terrier",
    summary:
      "Liten, rask og fullstendig overbevist om seg selv. Herlig moro hvis du liker en hund med motor.",
    strengths: [
      "Tøff, frisk og lever lenge",
      "Får plass i et lite hjem",
      "Uendelig leken",
      "Takler alenetid bedre enn de fleste",
    ],
    considerations: [
      "Jager alt som er lite og kvikt",
      "Graver, og mener alvor",
      "Kan være kranglete med andre hunder",
      "Trenger langt mer mosjon enn størrelsen tilsier",
    ],
  },
  "siberian-husky": {
    displayName: "Siberian husky",
    summary:
      "Vakker, vennlig og bygd for å løpe hele dagen. En husky gjør sjelden som du sier bare fordi du spør.",
    strengths: [
      "Sosial med både folk og hunder",
      "Skapt for kulde og lange distanser",
      "Bjeffer sjelden",
      "Ren, med lite hundelukt",
    ],
    considerations: [
      "Rømmer fra hagen og kommer ikke tilbake",
      "Innkalling er et livslangt prosjekt",
      "Feller alt to ganger i året, overalt",
      "Lider i varmt klima",
    ],
  },
  boxer: {
    displayName: "Boxer",
    summary:
      "En klovn som aldri helt blir voksen. Livlig, varmhjertet og alltid midt i begivenhetene.",
    strengths: [
      "Fantastisk med barn",
      "Leken langt opp i årene",
      "Kort pels, enkel å stelle",
      "Lærer godt med vennlig og oppmuntrende trening",
    ],
    considerations: [
      "Sprettende og sterk — hopper opp",
      "Blir fort overopphetet med kort snute",
      "Noen alvorlige helseproblemer i rasen",
      "Sikler",
    ],
  },
  rottweiler: {
    displayName: "Rottweiler",
    summary:
      "Kraftig, sindig og stille selvsikker. En rottweiler trenger en eier som vet hva han eller hun driver med.",
    strengths: [
      "Trygg og stødig når den er godt oppdratt",
      "Lærer fort og jobber villig",
      "Lojal og beskyttende mot familien",
      "Enkel pels",
    ],
    considerations: [
      "Svært sterk — treningen må sitte",
      "Trenger nøye sosialisering fra dag én",
      "Forsikring og fôr koster mer",
      "Enkelte steder har restriksjoner",
    ],
  },
  whippet: {
    displayName: "Whippet",
    summary:
      "En sofahund med spurterkropp. Stille, kjærlig og bemerkelsesverdig lett å leve med.",
    strengths: [
      "Rolig og lite krevende hjemme",
      "Nesten ikke pelsstell",
      "To korte spurter om dagen holder",
      "Mild og stille",
    ],
    considerations: [
      "Jager alt som løper",
      "Trenger inngjerdet område for løping uten bånd",
      "Fryser lett — dekken og pledd",
      "Tynn hud som lett revner",
    ],
  },
  "shih-tzu": {
    displayName: "Shih tzu",
    summary:
      "Skapt til å være selskapshund, og veldig god til det. Fornøyd på et fang, fornøyd i en liten leilighet.",
    strengths: [
      "Ideell for bylivet",
      "Vennlig mot nesten alle",
      "Feller svært lite",
      "Trenger ikke lange turer",
    ],
    considerations: [
      "Daglig børsting, eller klipp den kort",
      "Kort snute gjør varme farlig",
      "Øynene må følges med og tørkes",
      "Renslighetstrening kan kreve tålmodighet",
    ],
  },
  pug: {
    displayName: "Mops",
    summary:
      "Komisk, kjærlig og alltid i skyggen din. En mops ber om selskap langt mer enn om mosjon.",
    strengths: [
      "Elsker alle, hunder inkludert",
      "Trives i det minste hjem",
      "Lettlivet og morsom",
      "Trenger lite mosjon",
    ],
    considerations: [
      "Pusteproblemer er vanlig",
      "Varme kan være farlig",
      "Legger svært lett på seg",
      "Rynker og øyne trenger daglig stell",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon frisé",
    summary:
      "En liten hvit sky med godt humør. Sosial, kvikk og lykkeligst med folk rundt seg.",
    strengths: [
      "Feller svært lite",
      "Vennlig med barn og andre hunder",
      "Passer i leilighet og liten hage",
      "Lærer fort og elsker ros",
    ],
    considerations: [
      "Hundefrisør hver 4.–6. uke",
      "Takler virkelig dårlig å være alene",
      "Hud og ører trenger oppfølging",
      "Renslighetstrening krever konsekvens",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire bull terrier",
    summary:
      "Muskuløs, bløthjertet og kjent for å være glad i barn. En staffie elsker menneskene sine uten forbehold.",
    strengths: [
      "Herlig familiehund når den er godt oppdratt",
      "Kort pels, svært enkelt stell",
      "Robust og leken",
      "Vil gjerne gjøre deg til lags",
    ],
    considerations: [
      "Kan være vanskelig med andre hunder",
      "Sterk for størrelsen i bånd",
      "Tygger i stykker myke leker og senger",
      "Møter fordommer og restriksjoner enkelte steder",
    ],
  },
  vizsla: {
    displayName: "Vizsla",
    summary:
      "Borrelåshunden. Atletisk, følsom og aldri mer enn en meter unna deg.",
    strengths: [
      "Vakker, stille og ren",
      "Strålende turkamerat på løping og fjelltur",
      "Svært kjærlig",
      "Nesten ikke pelsstell",
    ],
    considerations: [
      "Kan ikke være alene lenge",
      "Trenger en til to timer hard mosjon daglig",
      "Sensitiv for skarpe stemmer",
      "Fryser på vinterturer",
    ],
  },
  samoyed: {
    displayName: "Samojedhund",
    summary:
      "Den smilende snøhunden. Sosial, pratsom og vakker — og en enorm mengde pels.",
    strengths: [
      "Ekte vennlig mot alle",
      "Elsker kulde og snø",
      "Leken og familiekjær",
      "Sjelden aggressiv",
    ],
    considerations: [
      "Feller helt utrolige mengder",
      "Børsting flere ganger i uka",
      "Prater, uler og klager",
      "Blir fort for varm om sommeren",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshireterrier",
    summary:
      "Bitteliten, skarp og full av terrier. En yorkie er modigere enn noen venter.",
    strengths: [
      "Feller nesten ikke",
      "Perfekt størrelse for leilighet",
      "Kvikk og lærer fort",
      "Lever ofte lenge",
    ],
    considerations: [
      "Pelsen trenger daglig stell, eller kort klipp",
      "Bjeffer på alt",
      "Sped — lett å tråkke på",
      "Renslighetstrening kan ta tid",
    ],
  },
};
