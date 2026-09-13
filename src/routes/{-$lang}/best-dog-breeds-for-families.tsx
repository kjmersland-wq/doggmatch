import { Link, createFileRoute } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { Arrow, Eyebrow } from "@/components/dogmatch/ui";
import { localizedHead, seoLinks } from "@/lib/seo";
import { breeds, type BreedId } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { ShareBar, SectionShare } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const PATH = "/best-dog-breeds-for-families";

const seoCopy = {
  en: {
    title: "Best dog breeds for families — an honest shortlist | DoggMatch",
    description:
      "The best dog breeds for families with children, chosen for steady temperament rather than reputation — with the honest trade-offs of each, in plain language.",
  },
  no: {
    title: "De beste hunderasene for familier — en ærlig liste | DoggMatch",
    description:
      "De beste hunderasene for familier med barn, valgt for rolig gemytt fremfor rykte — med de ærlige fordelene og ulempene ved hver, på vanlig norsk.",
  },
  pl: {
    title: "Najlepsze rasy psów dla rodzin — szczera lista | DoggMatch",
    description:
      "Najlepsze rasy psów dla rodzin z dziećmi, wybrane ze względu na łagodne usposobienie, a nie opinię — z uczciwymi zaletami i wadami każdej z nich.",
  },
  dk: {
    title: "Bedste hunderacer til familier — en ærlig liste | DoggMatch",
    description:
      "De bedste hunderacer til familier med børn, valgt for stabilt temperament frem for ry — med de ærlige fordele og ulemper ved hver enkelt, i klart sprog.",
  },
  se: {
    title: "Bästa hundraserna för familjer — en ärlig lista | DoggMatch",
    description:
      "De bästa hundraserna för familjer med barn, valda för stabilt temperament snarare än rykte — med de ärliga för- och nackdelarna för var och en, i klarspråk.",
  },
  fi: {
    title: "Parhaat koirarodut lapsiperheille — rehellinen lista | DoggMatch",
    description:
      "Parhaat koirarodut lapsiperheille, valittu vakaan luonteen perusteella maineen sijaan — jokaisen rehellisin hyvin ja huonoin puolin, selkokielellä.",
  },
  de: {
    title: "Die besten Hunderassen für Familien — eine ehrliche Auswahl | DoggMatch",
    description:
      "Die besten Hunderassen für Familien mit Kindern, ausgewählt wegen ihres stabilen Wesens statt ihres Rufs — mit den ehrlichen Kompromissen jeder einzelnen, in klarer Sprache.",
  },
  fr: {
    title: "Les meilleures races de chiens pour les familles — une sélection honnête | DoggMatch",
    description:
      "Les meilleures races de chiens pour les familles avec enfants, choisies pour leur tempérament stable plutôt que leur réputation — avec les compromis honnêtes de chacune, en langage clair.",
  },
  nl: {
    title: "De beste hondenrassen voor gezinnen — een eerlijke shortlist | DoggMatch",
    description:
      "De beste hondenrassen voor gezinnen met kinderen, gekozen om hun stabiele karakter in plaats van hun reputatie — met de eerlijke afwegingen van elk, in duidelijke taal.",
  },
};

export const Route = createFileRoute("/{-$lang}/best-dog-breeds-for-families")({
  head: (ctx) => localizedHead(ctx, PATH, seoCopy),
  component: FamilyBreedsPage,
});

const copy = {
  en: {
    eyebrow: "Choosing a dog",
    h1: "The best dog breeds for families",
    intro:
      "Ask ten people for the best family dog and you'll get ten answers — usually the dog they grew up with. So here's our honest version: the breeds below are steady, forgiving and genuinely enjoy living with children. But the individual dog matters more than the breed name on the kennel club paper, and no breed makes children and dogs safe together on its own. That part is on us adults.",
    whatMattersTitle: "What actually matters",
    whatMatters: [
      "A steady, forgiving temperament beats any reputation. You want a dog who shrugs off a clumsy pat, an unexpected hug, a toy grabbed mid-chew.",
      "Size cuts both ways. A big, joyful dog can flatten a toddler by accident; a tiny one can be hurt by rough play. Medium and steady is often the easiest place to start.",
      "Energy should match your family's real week, not your best intentions. A breed that needs two hours of running a day is wonderful — if someone actually has those two hours.",
      "Puppies and toddlers at the same time is two full-time jobs. Many families have a far calmer start with a dog who is already a year or two old.",
    ],
    rulesTitle: "The rules that matter more than the breed",
    rules: [
      "Never bother a dog who is eating, sleeping or in its bed.",
      "An adult is always in the room when young children and dogs are together.",
      "Children learn to read the dog — a turned head or a yawn means 'give me space'.",
    ],
    listTitle: "Our family shortlist",
    listIntro:
      "Eight breeds that consistently score well with children in our data, with the honest trade-offs. Crossbreeds with these parents often do just as well.",
    childrenLabel: "With children",
    firstTimeLabel: "First-time owners",
    sheddingLabel: "Shedding",
    energyLabel: "Energy",
    readProfile: "Read the full profile",
    allergyNote:
      "A quick word on allergies: no dog is truly hypoallergenic. Some shed less and spread less dander around the house, which helps many families — but spend time with the actual dog before you decide.",
    quizTitle: "Your family is the other half of the match",
    quizBody:
      "The best breed on paper still has to fit your week — your home, your time, your children's ages. Our quiz weighs all of it and shows you the reasoning behind every match.",
    quizCta: "Take the compatibility quiz",
    compareCta: "Compare breeds side by side",
    levelLabels: ["Very low", "Low", "Moderate", "High", "Very high"],
  },
  no: {
    eyebrow: "Å velge hund",
    h1: "De beste hunderasene for familier",
    intro:
      "Spør ti personer om den beste familiehunden, og du får ti svar — som regel hunden de selv vokste opp med. Så her er vår ærlige versjon: rasene under er rolige, overbærende og trives virkelig med barn. Men den enkelte hunden betyr mer enn rasenavnet på stamtavlen, og ingen rase gjør barn og hund trygge sammen av seg selv. Den delen er på oss voksne.",
    whatMattersTitle: "Det som faktisk betyr noe",
    whatMatters: [
      "Et rolig, overbærende gemytt slår ethvert rykte. Du vil ha en hund som rister av seg en klønete klapp, en uventet klem, et leketøy som blir tatt midt i tyggingen.",
      "Størrelse svinger begge veier. En stor, livsglad hund kan velte en smårolling ved et uhell; en bitte liten en kan bli skadet av røff lek. Middels stor og rolig er ofte det enkleste stedet å starte.",
      "Energien bør passe familiens faktiske uke, ikke de beste intensjonene. En rase som trenger to timer med løping om dagen er fantastisk — hvis noen faktisk har de to timene.",
      "Valp og småbarn samtidig er to fulltidsjobber. Mange familier får en langt roligere start med en hund som allerede er et år eller to.",
    ],
    rulesTitle: "Reglene som betyr mer enn rasen",
    rules: [
      "Forstyrr aldri en hund som spiser, sover eller ligger i senga si.",
      "En voksen er alltid i rommet når små barn og hund er sammen.",
      "Barna lærer å lese hunden — et bortvendt hode eller et gjespe betyr «gi meg litt rom».",
    ],
    listTitle: "Vår familieliste",
    listIntro:
      "Åtte raser som gjentatte ganger skårer godt med barn i dataene våre, med de ærlige fordelene og ulempene. Blandinger med disse foreldrene gjør det ofte like bra.",
    childrenLabel: "Med barn",
    firstTimeLabel: "Førstegangseiere",
    sheddingLabel: "Røyting",
    energyLabel: "Energi",
    readProfile: "Les hele profilen",
    allergyNote:
      "Et lite ord om allergier: ingen hund er helt allergivennlig. Noen røyter mindre og sprer mindre hudeskjell i huset, noe som hjelper mange familier — men tilbring tid med den faktiske hunden før du bestemmer deg.",
    quizTitle: "Familien din er den andre halvparten av matchingen",
    quizBody:
      "Den beste rasen på papiret må fortsatt passe uken deres — hjemmet, tiden og barnas alder. Quizen vår veier alt sammen og viser deg begrunnelsen bak hvert eneste forslag.",
    quizCta: "Ta kompatibilitetsquizen",
    compareCta: "Sammenlign raser side ved side",
    levelLabels: ["Veldig lav", "Lav", "Moderat", "Høy", "Veldig høy"],
  },
  pl: {
    eyebrow: "Wybór psa",
    h1: "Najlepsze rasy psów dla rodzin",
    intro:
      "Zapytaj dziesięć osób o najlepszego psa rodzinnego, a usłyszysz dziesięć odpowiedzi — zwykle będzie to pies z ich dzieciństwa. Oto nasza szczera wersja: rasy poniżej są spokojne, wyrozumiałe i naprawdę lubią żyć z dziećmi. Ale konkretny pies znaczy więcej niż nazwa rasy w metryce, a żadna rasa sama nie zadba o bezpieczeństwo dzieci i psa. To zadanie dla nas, dorosłych.",
    whatMattersTitle: "Co naprawdę ma znaczenie",
    whatMatters: [
      "Spokojne, wyrozumiałe usposobienie jest ważniejsze niż reputacja. Szukaj psa, który bez problemu zniesie niezdarną pieszczotę, niespodziewany uścisk czy zabawkę odebraną w trakcie żucia.",
      "Wielkość działa w obie strony. Duży, radosny pies może niechcący przewrócić malucha; bardzo mały może ucierpieć przy szorstkiej zabawie. Średni i spokojny to często najłatwiejszy początek.",
      "Energia powinna pasować do prawdziwego tygodnia rodziny, nie do najlepszych intencji. Rasa potrzebująca dwóch godzin biegania dziennie jest wspaniała — jeśli ktoś naprawdę ma te dwie godziny.",
      "Szczeniak i małe dziecko jednocześnie to dwa etaty. Wiele rodzin ma znacznie spokojniejszy start z psem, który ma już rok czy dwa.",
    ],
    rulesTitle: "Zasady ważniejsze niż rasa",
    rules: [
      "Nigdy nie przeszkadzaj psu, który je, śpi albo leży w swoim legowisku.",
      "Gdy małe dzieci i pies są razem, dorosły jest zawsze w pokoju.",
      "Dzieci uczą się czytać psa — odwrócona głowa albo ziewnięcie znaczy „daj mi trochę miejsca”.",
    ],
    listTitle: "Nasza rodzinna lista",
    listIntro:
      "Osiem ras, które w naszych danych stale dobrze wypadają z dziećmi — z uczciwymi zaletami i wadami. Mieszańce z tymi rasami często radzą sobie równie dobrze.",
    childrenLabel: "Z dziećmi",
    firstTimeLabel: "Dla początkujących",
    sheddingLabel: "Linienie",
    energyLabel: "Energia",
    readProfile: "Zobacz pełny profil",
    allergyNote:
      "Słówko o alergiach: żaden pies nie jest w pełni hipoalergiczny. Niektóre rasy mniej linieją i rozsiewają mniej naskórka, co pomaga wielu rodzinom — ale spędź czas z konkretnym psem, zanim zdecydujesz.",
    quizTitle: "Twoja rodzina to druga połowa dopasowania",
    quizBody:
      "Najlepsza rasa na papierze wciąż musi pasować do waszego tygodnia — domu, czasu i wieku dzieci. Nasz quiz waży to wszystko i pokazuje uzasadnienie każdego dopasowania.",
    quizCta: "Wypełnij quiz dopasowania",
    compareCta: "Porównaj rasy obok siebie",
    levelLabels: ["Bardzo niski", "Niski", "Umiarkowany", "Wysoki", "Bardzo wysoki"],
  },
  dk: {
    eyebrow: "At vælge en hund",
    h1: "De bedste hunderacer til familier",
    intro:
      "Spørg ti mennesker om den bedste familiehund, og du får ti svar — som regel hunden, de selv voksede op med. Så her er vores ærlige version: racerne nedenfor er stabile, overbærende og trives virkelig med børn. Men den enkelte hund betyder mere end racenavnet på papiret, og ingen race gør børn og hunde trygge sammen af sig selv. Den del er op til os voksne.",
    whatMattersTitle: "Det, der faktisk betyder noget",
    whatMatters: [
      "Et stabilt, overbærende temperament slår enhver ry. Du vil have en hund, der ryster en klodset klap, et uventet kram og en leg der bliver taget midt i tygningen, af sig.",
      "Størrelse går begge veje. En stor, glad hund kan vælte en toddler ved et uheld; en meget lille en kan komme til skade ved rå leg. Mellemstor og stabil er ofte det letteste sted at starte.",
      "Energien skal passe til familiens virkelige uge, ikke de bedste hensigter. En race, der har brug for to timers løb om dagen, er vidunderlig — hvis nogen rent faktisk har de to timer.",
      "Hvalp og småbørn på samme tid er to fuldtidsjob. Mange familier får en langt roligere start med en hund, der allerede er et år eller to.",
    ],
    rulesTitle: "Reglerne der betyder mere end racen",
    rules: [
      "Forstyr aldrig en hund, der spiser, sover eller ligger i sin seng.",
      "En voksen er altid i rummet, når små børn og hunde er sammen.",
      "Børn lærer at læse hunden — et bortvendt hoved eller et gab betyder \"giv mig plads\".",
    ],
    listTitle: "Vores familieliste",
    listIntro:
      "Otte racer, der konsekvent scorer godt med børn i vores data, med de ærlige fordele og ulemper. Blandingshunde med disse forældre klarer sig ofte lige så godt.",
    childrenLabel: "Med børn",
    firstTimeLabel: "Førstegangsejere",
    sheddingLabel: "Fældning",
    energyLabel: "Energi",
    readProfile: "Læs hele profilen",
    allergyNote:
      "Et hurtigt ord om allergier: ingen hund er helt allergivenlig. Nogle fælder mindre og spreder mindre hudskæl i huset, hvilket hjælper mange familier — men brug tid med den faktiske hund, før du beslutter dig.",
    quizTitle: "Din familie er den anden halvdel af matchet",
    quizBody:
      "Den bedste race på papiret skal stadig passe til jeres uge — jeres hjem, jeres tid, jeres børns alder. Vores quiz vejer det hele og viser dig begrundelsen bag hvert match.",
    quizCta: "Tag kompatibilitetsquizzen",
    compareCta: "Sammenlign racer side om side",
    levelLabels: ["Meget lav", "Lav", "Moderat", "Høj", "Meget høj"],
  },
  se: {
    eyebrow: "Att välja hund",
    h1: "De bästa hundraserna för familjer",
    intro:
      "Fråga tio personer om den bästa familjehunden, och du får tio svar — oftast hunden de själva växte upp med. Så här är vår ärliga version: raserna nedan är stabila, överseende och trivs verkligen med barn. Men den enskilda hunden betyder mer än rasnamnet på papperet, och ingen ras gör barn och hundar trygga tillsammans på egen hand. Den delen är upp till oss vuxna.",
    whatMattersTitle: "Det som faktiskt spelar roll",
    whatMatters: [
      "Ett stabilt, överseende temperament slår vilket rykte som helst. Du vill ha en hund som skakar av sig en klumpig klapp, en oväntad kram, en leksak som tas mitt i tuggandet.",
      "Storlek går åt båda hållen. En stor, glad hund kan råka välta en småbarn; en väldigt liten kan skadas av grov lek. Mellanstor och stabil är ofta det enklaste stället att börja.",
      "Energin ska matcha familjens verkliga vecka, inte de bästa föresatserna. En ras som behöver två timmars löpning om dagen är underbar — om någon faktiskt har de två timmarna.",
      "Valp och småbarn samtidigt är två heltidsjobb. Många familjer får en betydligt lugnare start med en hund som redan är ett eller två år gammal.",
    ],
    rulesTitle: "Reglerna som spelar större roll än rasen",
    rules: [
      "Stör aldrig en hund som äter, sover eller ligger i sin bädd.",
      "En vuxen är alltid i rummet när små barn och hundar är tillsammans.",
      "Barn lär sig läsa hunden — ett bortvänt huvud eller en gäspning betyder \"ge mig utrymme\".",
    ],
    listTitle: "Vår familjelista",
    listIntro:
      "Åtta raser som konsekvent presterar bra med barn i vår data, med de ärliga för- och nackdelarna. Blandraser med dessa föräldrar klarar sig ofta lika bra.",
    childrenLabel: "Med barn",
    firstTimeLabel: "Förstagångsägare",
    sheddingLabel: "Fällning",
    energyLabel: "Energi",
    readProfile: "Läs hela profilen",
    allergyNote:
      "Ett kort ord om allergier: ingen hund är helt allergivänlig. Vissa fäller mindre och sprider mindre hudflagor i hemmet, vilket hjälper många familjer — men tillbringa tid med den faktiska hunden innan du bestämmer dig.",
    quizTitle: "Din familj är andra halvan av matchningen",
    quizBody:
      "Den bästa rasen på papper måste ändå passa er vecka — ert hem, er tid, era barns åldrar. Vårt quiz väger allt och visar dig resonemanget bakom varje matchning.",
    quizCta: "Gör kompatibilitetstestet",
    compareCta: "Jämför raser sida vid sida",
    levelLabels: ["Mycket låg", "Låg", "Måttlig", "Hög", "Mycket hög"],
  },
  fi: {
    eyebrow: "Koiran valitseminen",
    h1: "Parhaat koirarodut lapsiperheille",
    intro:
      "Kysy kymmeneltä ihmiseltä paras perhekoira, ja saat kymmenen vastausta — yleensä sen koiran, jonka kanssa he itse kasvoivat. Tässä siis meidän rehellinen versiomme: alla olevat rodut ovat vakaita, ymmärtäväisiä ja viihtyvät aidosti lasten kanssa. Mutta yksittäinen koira merkitsee enemmän kuin rotunimi paperissa, eikä mikään rotu tee lapsista ja koirista turvallisia yhdessä yksinään. Se osuus on meidän aikuisten vastuulla.",
    whatMattersTitle: "Mikä oikeasti merkitsee",
    whatMatters: [
      "Vakaa, ymmärtäväinen luonne voittaa minkä tahansa maineen. Haluat koiran, joka ei välitä kömpelöstä taputuksesta, yllättävästä halauksesta tai kesken pureskelun napatusta lelusta.",
      "Koko vaikuttaa molempiin suuntiin. Iso, iloinen koira voi vahingossa kaataa taaperon; hyvin pieni voi loukkaantua rajusta leikistä. Keskikokoinen ja vakaa on usein helpoin lähtökohta.",
      "Energian tulisi vastata perheen todellista viikkoa, ei parhaita aikeita. Rotu, joka tarvitsee kaksi tuntia juoksua päivässä, on ihana — jos jollakulla oikeasti on ne kaksi tuntia.",
      "Pentu ja taapero samaan aikaan on kaksi kokopäivätyötä. Monilla perheillä alku on paljon rauhallisempi koiran kanssa, joka on jo vuoden tai kaksi vanha.",
    ],
    rulesTitle: "Säännöt, jotka merkitsevät rotua enemmän",
    rules: [
      "Älä koskaan häiritse koiraa, joka syö, nukkuu tai on omalla petipaikallaan.",
      "Aikuinen on aina huoneessa, kun pienet lapset ja koirat ovat yhdessä.",
      "Lapset oppivat lukemaan koiraa — poiskäännetty pää tai haukottelu tarkoittaa \"anna minulle tilaa\".",
    ],
    listTitle: "Perhelistamme",
    listIntro:
      "Kahdeksan rotua, jotka pärjäävät johdonmukaisesti hyvin lasten kanssa tiedoissamme, rehellisin hyvin ja huonoin puolin. Näiden vanhempien sekarotuiset pärjäävät usein yhtä hyvin.",
    childrenLabel: "Lasten kanssa",
    firstTimeLabel: "Ensikertalaisille",
    sheddingLabel: "Karvanlähtö",
    energyLabel: "Energia",
    readProfile: "Lue koko profiili",
    allergyNote:
      "Pieni sana allergioista: yksikään koira ei ole täysin allergiaystävällinen. Jotkin karvaavat vähemmän ja levittävät vähemmän hilsettä kotiin, mikä auttaa monia perheitä — mutta vietä aikaa oikean koiran kanssa ennen päätöstä.",
    quizTitle: "Perheesi on täsmäyksen toinen puoli",
    quizBody:
      "Paperilla parhaankin rodun täytyy silti sopia viikkoonne — kotiinne, aikaanne, lastenne ikään. Kyselymme punnitsee kaiken tämän ja näyttää perustelut jokaisen täsmäyksen takana.",
    quizCta: "Tee yhteensopivuuskysely",
    compareCta: "Vertaile rotuja rinnakkain",
    levelLabels: ["Erittäin matala", "Matala", "Kohtalainen", "Korkea", "Erittäin korkea"],
  },
  de: {
    eyebrow: "Einen Hund wählen",
    h1: "Die besten Hunderassen für Familien",
    intro:
      "Fragen Sie zehn Menschen nach dem besten Familienhund, und Sie erhalten zehn Antworten — meist den Hund, mit dem sie selbst aufgewachsen sind. Hier also unsere ehrliche Version: Die Rassen unten sind stabil, nachsichtig und genießen das Leben mit Kindern wirklich. Aber der einzelne Hund zählt mehr als der Rassename auf dem Papier, und keine Rasse macht Kinder und Hunde von allein sicher zusammen. Das ist unsere Aufgabe als Erwachsene.",
    whatMattersTitle: "Was wirklich zählt",
    whatMatters: [
      "Ein stabiles, nachsichtiges Wesen schlägt jeden Ruf. Sie wollen einen Hund, der einen tollpatschigen Klaps, eine unerwartete Umarmung oder ein mitten im Kauen weggenommenes Spielzeug locker wegsteckt.",
      "Größe wirkt in beide Richtungen. Ein großer, fröhlicher Hund kann ein Kleinkind versehentlich umwerfen; ein sehr kleiner kann bei grobem Spiel verletzt werden. Mittelgroß und stabil ist oft der einfachste Startpunkt.",
      "Die Energie sollte zur tatsächlichen Woche Ihrer Familie passen, nicht zu Ihren besten Absichten. Eine Rasse, die zwei Stunden Laufen am Tag braucht, ist wunderbar — wenn jemand diese zwei Stunden auch wirklich hat.",
      "Welpe und Kleinkind gleichzeitig sind zwei Vollzeitjobs. Viele Familien haben einen deutlich ruhigeren Start mit einem Hund, der bereits ein oder zwei Jahre alt ist.",
    ],
    rulesTitle: "Die Regeln, die wichtiger sind als die Rasse",
    rules: [
      "Stören Sie nie einen Hund, der isst, schläft oder in seinem Bett liegt.",
      "Ein Erwachsener ist immer im Raum, wenn kleine Kinder und Hunde zusammen sind.",
      "Kinder lernen, den Hund zu lesen — ein abgewendeter Kopf oder ein Gähnen bedeutet „gib mir Raum“.",
    ],
    listTitle: "Unsere Familien-Auswahl",
    listIntro:
      "Acht Rassen, die in unseren Daten durchweg gut mit Kindern abschneiden, mit den ehrlichen Kompromissen. Mischlinge mit diesen Eltern schneiden oft genauso gut ab.",
    childrenLabel: "Mit Kindern",
    firstTimeLabel: "Für Erstbesitzer",
    sheddingLabel: "Haarausfall",
    energyLabel: "Energie",
    readProfile: "Das vollständige Profil lesen",
    allergyNote:
      "Ein kurzes Wort zu Allergien: Kein Hund ist wirklich hypoallergen. Manche haaren weniger und verteilen weniger Hautschuppen im Haus, was vielen Familien hilft — aber verbringen Sie Zeit mit dem konkreten Hund, bevor Sie sich entscheiden.",
    quizTitle: "Ihre Familie ist die andere Hälfte des Matchings",
    quizBody:
      "Die beste Rasse auf dem Papier muss trotzdem zu Ihrer Woche passen — Ihrem Zuhause, Ihrer Zeit, dem Alter Ihrer Kinder. Unser Quiz wägt all das ab und zeigt Ihnen die Begründung hinter jedem Match.",
    quizCta: "Den Kompatibilitäts-Quiz machen",
    compareCta: "Rassen nebeneinander vergleichen",
    levelLabels: ["Sehr niedrig", "Niedrig", "Mäßig", "Hoch", "Sehr hoch"],
  },
  fr: {
    eyebrow: "Choisir un chien",
    h1: "Les meilleures races de chiens pour les familles",
    intro:
      "Demandez à dix personnes quel est le meilleur chien de famille, et vous obtiendrez dix réponses — généralement le chien avec lequel elles ont grandi. Voici donc notre version honnête : les races ci-dessous sont stables, indulgentes et apprécient réellement de vivre avec des enfants. Mais le chien en tant qu'individu compte plus que le nom de la race sur le pedigree, et aucune race ne rend seule enfants et chiens sûrs ensemble. Cette partie nous incombe, à nous, les adultes.",
    whatMattersTitle: "Ce qui compte vraiment",
    whatMatters: [
      "Un tempérament stable et indulgent bat n'importe quelle réputation. Vous voulez un chien qui encaisse une caresse maladroite, une étreinte inattendue, un jouet arraché en pleine mastication.",
      "La taille joue dans les deux sens. Un grand chien joyeux peut accidentellement renverser un tout-petit ; un très petit peut être blessé par un jeu brutal. Une taille moyenne et un tempérament stable sont souvent le point de départ le plus simple.",
      "L'énergie doit correspondre à la semaine réelle de votre famille, pas à vos meilleures intentions. Une race qui a besoin de deux heures de course par jour est merveilleuse — si quelqu'un a réellement ces deux heures.",
      "Un chiot et un tout-petit en même temps, ce sont deux emplois à temps plein. De nombreuses familles connaissent un début bien plus calme avec un chien déjà âgé d'un an ou deux.",
    ],
    rulesTitle: "Les règles plus importantes que la race",
    rules: [
      "Ne dérangez jamais un chien qui mange, dort ou est dans son panier.",
      "Un adulte est toujours présent dans la pièce quand de jeunes enfants et des chiens sont ensemble.",
      "Les enfants apprennent à lire le chien — une tête détournée ou un bâillement signifie « laisse-moi de l'espace ».",
    ],
    listTitle: "Notre sélection familiale",
    listIntro:
      "Huit races qui obtiennent systématiquement de bons résultats avec les enfants dans nos données, avec les compromis honnêtes. Les chiens croisés issus de ces parents s'en sortent souvent tout aussi bien.",
    childrenLabel: "Avec les enfants",
    firstTimeLabel: "Pour débutants",
    sheddingLabel: "Mue",
    energyLabel: "Énergie",
    readProfile: "Lire le profil complet",
    allergyNote:
      "Un mot rapide sur les allergies : aucun chien n'est vraiment hypoallergénique. Certains perdent moins leurs poils et dispersent moins de squames dans la maison, ce qui aide de nombreuses familles — mais passez du temps avec le chien en question avant de vous décider.",
    quizTitle: "Votre famille est l'autre moitié du match",
    quizBody:
      "La meilleure race sur le papier doit tout de même s'adapter à votre semaine — votre maison, votre temps, l'âge de vos enfants. Notre quiz pèse tout cela et vous montre le raisonnement derrière chaque correspondance.",
    quizCta: "Faire le quiz de compatibilité",
    compareCta: "Comparer les races côte à côte",
    levelLabels: ["Très faible", "Faible", "Modérée", "Élevée", "Très élevée"],
  },
  nl: {
    eyebrow: "Een hond kiezen",
    h1: "De beste hondenrassen voor gezinnen",
    intro:
      "Vraag tien mensen naar de beste gezinshond, en u krijgt tien antwoorden — meestal de hond waarmee ze zelf zijn opgegroeid. Dus hier is onze eerlijke versie: de rassen hieronder zijn stabiel, toegeeflijk en genieten echt van het leven met kinderen. Maar de individuele hond telt meer dan de rasnaam op het stamboompapier, en geen enkel ras maakt kinderen en honden op zichzelf veilig samen. Dat deel is aan ons, de volwassenen.",
    whatMattersTitle: "Wat er echt toe doet",
    whatMatters: [
      "Een stabiel, toegeeflijk karakter verslaat elke reputatie. U wilt een hond die een onhandig aaitje, een onverwachte knuffel of een speelgoedje dat midden in het kauwen wordt afgepakt, gewoon van zich af laat glijden.",
      "Grootte werkt in beide richtingen. Een grote, vrolijke hond kan per ongeluk een peuter omverwerpen; een heel kleine kan gewond raken bij ruw spel. Middelgroot en stabiel is vaak het makkelijkste startpunt.",
      "De energie moet passen bij de echte week van uw gezin, niet bij uw beste bedoelingen. Een ras dat twee uur rennen per dag nodig heeft is prachtig — als iemand die twee uur ook daadwerkelijk heeft.",
      "Een puppy en een peuter tegelijk zijn twee voltijdbanen. Veel gezinnen hebben een veel rustigere start met een hond die al een jaar of twee oud is.",
    ],
    rulesTitle: "De regels die belangrijker zijn dan het ras",
    rules: [
      "Stoor nooit een hond die eet, slaapt of in zijn mand ligt.",
      "Er is altijd een volwassene in de kamer als jonge kinderen en honden samen zijn.",
      "Kinderen leren de hond te lezen — een afgewend hoofd of een geeuw betekent 'geef me ruimte'.",
    ],
    listTitle: "Onze gezinsshortlist",
    listIntro:
      "Acht rassen die in onze gegevens consequent goed scoren bij kinderen, met de eerlijke afwegingen. Kruisingen met deze ouders doen het vaak net zo goed.",
    childrenLabel: "Met kinderen",
    firstTimeLabel: "Voor beginners",
    sheddingLabel: "Verharen",
    energyLabel: "Energie",
    readProfile: "Het volledige profiel lezen",
    allergyNote:
      "Een kort woord over allergieën: geen enkele hond is echt hypoallergeen. Sommige verharen minder en verspreiden minder huidschilfers in huis, wat veel gezinnen helpt — maar breng tijd door met de specifieke hond voordat u beslist.",
    quizTitle: "Uw gezin is de andere helft van de match",
    quizBody:
      "Het beste ras op papier moet nog steeds bij uw week passen — uw huis, uw tijd, de leeftijd van uw kinderen. Onze quiz weegt dit allemaal af en laat u de redenering achter elke match zien.",
    quizCta: "Doe de compatibiliteitsquiz",
    compareCta: "Rassen naast elkaar vergelijken",
    levelLabels: ["Zeer laag", "Laag", "Gemiddeld", "Hoog", "Zeer hoog"],
  },
};

/** Breeds that score best for family life: children first, then first-time ease. */
const familyBreeds = breeds
  .filter((b) => b.traits.goodWithChildren >= 4)
  .sort(
    (a, b) =>
      b.traits.goodWithChildren + b.traits.firstTimeSuitability -
      (a.traits.goodWithChildren + a.traits.firstTimeSuitability),
  )
  .slice(0, 8);

function LevelDot({ level, label }: { level: number; label: string }) {
  const tone =
    level >= 4
      ? "bg-accent"
      : level === 3
        ? "bg-amber-500"
        : "bg-muted-foreground/40";
  return (
    <span className="inline-flex items-center gap-1.5" title={label}>
      <span className={`h-2.5 w-2.5 rounded-full ${tone}`} aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </span>
  );
}

function FamilyBreedsPage() {
  const c = useCopy(copy);
  const content = breedContent();


  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {c.h1}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      <div className="mt-6">
        <ShareBar path={PATH} title={c.h1} />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          {c.whatMattersTitle}
        </h2>
        <ul className="mt-5 space-y-3">
          {c.whatMatters.map((point) => (
            <li key={point} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-3xl border border-border bg-surface p-7 sm:p-9">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          {c.rulesTitle}
        </h2>
        <ul className="mt-5 space-y-3">
          {c.rules.map((rule) => (
            <li key={rule} className="flex gap-3 text-muted-foreground leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {rule}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          {c.listTitle}
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">{c.listIntro}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {familyBreeds.map((breed) => {
            const bc = content[breed.id as BreedId];
            return (
              <div
                key={breed.id}
                className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {bc?.displayName ?? breed.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {bc?.summary ?? ""}
                </p>
                <dl className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <dt>{c.childrenLabel}</dt>
                    <dd>
                      <LevelDot
                        level={breed.traits.goodWithChildren}
                        label={c.levelLabels[breed.traits.goodWithChildren - 1] ?? ""}
                      />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>{c.firstTimeLabel}</dt>
                    <dd>
                      <LevelDot
                        level={breed.traits.firstTimeSuitability}
                        label={c.levelLabels[breed.traits.firstTimeSuitability - 1] ?? ""}
                      />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>{c.sheddingLabel}</dt>
                    <dd>
                      <LevelDot
                        level={breed.traits.shedding}
                        label={c.levelLabels[breed.traits.shedding - 1] ?? ""}
                      />
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt>{c.energyLabel}</dt>
                    <dd>
                      <LevelDot
                        level={breed.traits.energy}
                        label={c.levelLabels[breed.traits.energy - 1] ?? ""}
                      />
                    </dd>
                  </div>
                </dl>
                <Link
                  to={withLangPrefix("/breeds/$breedId")}
                  params={{ breedId: breed.id }}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  {c.readProfile}
                  <Arrow className="h-3.5 w-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.allergyNote}</p>
        <SectionShare anchor="family-shortlist" title={c.listTitle} />
      </section>

      <section className="mt-14 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10">
        <h2 className="font-display text-2xl font-semibold">{c.quizTitle}</h2>
        <p className="mt-4 leading-relaxed opacity-90">{c.quizBody}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to={withLangPrefix("/find-my-dog")}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            {c.quizCta}
          </Link>
          <Link
            to={withLangPrefix("/compare")}
            className="inline-flex h-12 items-center justify-center rounded-full border border-primary-foreground/30 px-7 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
          >
            {c.compareCta}
          </Link>
        </div>
      </section>
    </article>
  );
}
