import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { CardGrid, Checklist, Notice, PointList, SectionHead } from "@/components/dogmatch/journey/parts";
import { getDogContent } from "@/data/getdog/content";
import { useGetDog } from "@/lib/getdog/store";
import { useCopy } from "@/i18n";
import homePrepImage from "@/assets/illus-home-prep.jpg";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { withLangPrefix } from "@/lib/localized-path";

const title = "Get ready — your home, your days and the arrival checklist | DoggMatch";
const description =
  "What your home and your everyday life mean for a dog, honest answers about allergies and time alone, and a tickable arrival checklist you can print.";

export const Route = createFileRoute("/{-$lang}/get-a-dog/prepare")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/get-a-dog/prepare"),
  }),
  component: PreparePage,
});

const copy = {
  en: {
    eyebrow: "Get ready",
    title: "Getting everything ready.",
    intro:
      "Your home, your days, and the practical things that are far easier to sort out now than in the middle of a first week with a new dog.",
    homeEyebrow: "Your home",
    homeTitle: "Almost any home can be a good home.",
    homeBody:
      "Dogs care much less about square metres than people expect. What's within ten minutes of your front door matters far more.",
    worthChecking: "Worth checking",
    lifeEyebrow: "Your everyday life",
    lifeTitle: "What does an ordinary week look like for you?",
    lifeBody: "The dog has to fit the week you actually have, not the one you'd like to have. Find yourself below.",
    allergiesEyebrow: "Allergies",
    allergiesTitle: "What we can honestly say.",
    allergiesBody1:
      "Some breeds tend to shed less than others, and people with allergies sometimes find them easier to live with. But no dog is completely allergy-free. The proteins people react to are in saliva and skin as well as hair, and reactions vary enormously from person to person.",
    allergiesBody2:
      "If someone in your home has allergies, spend real time with the individual dog before you commit — several visits, not one — and talk to your doctor. That tells you far more than any breed list, including ours.",
    aloneEyebrow: "Time alone",
    aloneTitle: "How long is too long?",
    aloneBody:
      "Most adult dogs manage three or four hours alone comfortably once they've learned how. A puppy can't do that at first — they need someone there most of the day for the first months, and building up to being alone is a skill you teach slowly.",
    alonePoints: [
      "Practise short absences from the very first week, before there's any need",
      "A midday walker or a neighbour turns a difficult day into an easy one",
      "Daycare a couple of days a week suits some dogs and overwhelms others",
      "A dog who panics when left needs help early — it rarely improves on its own",
    ],
    checklistEyebrow: "Before they arrive",
    checklistTitle: "The arrival checklist.",
    checklistBody:
      "Tick things off as you get them. It saves as you go, on this device, so you can come back to it in a shop.",
    homePrepAlt: "An illustrated flat-lay of a dog bed, bowls, lead, harness and toys",
    printCta: "Print my arrival checklist",
    noteTitle: "One honest note",
    noteBody:
      "Buy less than you think. A bed, bowls, food, a harness, a lead and an ID tag will get you through the first week perfectly well. You'll learn what your dog actually likes soon enough.",
    welcomeCta: "The first days home",
  },
  no: {
    eyebrow: "Gjør deg klar",
    title: "Gjøre alt klart.",
    intro:
      "Hjemmet ditt, dagene dine, og de praktiske tingene som er langt lettere å ordne nå enn midt i den første uken med en ny hund.",
    homeEyebrow: "Hjemmet ditt",
    homeTitle: "Nesten ethvert hjem kan være et godt hjem.",
    homeBody:
      "Hunder bryr seg mye mindre om kvadratmeter enn folk tror. Det som ligger innen ti minutter fra døren din betyr langt mer.",
    worthChecking: "Verdt å sjekke",
    lifeEyebrow: "Hverdagen din",
    lifeTitle: "Hvordan ser en helt vanlig uke ut for deg?",
    lifeBody: "Hunden må passe inn i uken du faktisk har, ikke den du skulle ønske du hadde. Kjenn deg igjen nedenfor.",
    allergiesEyebrow: "Allergier",
    allergiesTitle: "Det vi ærlig kan si.",
    allergiesBody1:
      "Noen raser feller mindre enn andre, og folk med allergier synes noen ganger det er lettere å leve med dem. Men ingen hund er helt allergivennlig. Proteinene folk reagerer på finnes i spytt og hud i tillegg til pels, og reaksjoner varierer enormt fra person til person.",
    allergiesBody2:
      "Hvis noen i hjemmet ditt har allergier, bruk skikkelig tid sammen med den bestemte hunden før du bestemmer deg — flere besøk, ikke bare ett — og snakk med legen din. Det forteller deg langt mer enn noen raseliste, inkludert vår.",
    aloneEyebrow: "Alene hjemme",
    aloneTitle: "Hvor lenge er for lenge?",
    aloneBody:
      "De fleste voksne hunder klarer tre eller fire timer alene uten problemer når de først har lært det. En valp klarer ikke det til å begynne med — de trenger noen der mesteparten av dagen de første månedene, og det å bli alene er en ferdighet du lærer bort gradvis.",
    alonePoints: [
      "Øv på korte fravær helt fra første uke, før det er noe behov for det",
      "En hundelufter midt på dagen eller en nabo som stikker innom gjør en vanskelig dag lett",
      "Dagpass et par dager i uken passer noen hunder og overvelder andre",
      "En hund som får panikk når den blir forlatt trenger hjelp tidlig — det blir sjelden bedre av seg selv",
    ],
    checklistEyebrow: "Før hunden kommer hjem",
    checklistTitle: "Ankomstlisten.",
    checklistBody:
      "Kryss av etter hvert som du skaffer tingene. Den lagres underveis, på denne enheten, så du kan komme tilbake til den i en butikk.",
    homePrepAlt: "En illustrert oversikt over hundeseng, skåler, bånd, sele og leker",
    printCta: "Skriv ut ankomstlisten min",
    noteTitle: "Én ærlig merknad",
    noteBody:
      "Kjøp mindre enn du tror. En seng, skåler, mat, en sele, et bånd og et id-merke tar deg fint gjennom den første uken. Du finner ut hva hunden din faktisk liker snart nok.",
    welcomeCta: "De første dagene hjemme",
  },
  pl: {
    eyebrow: "Przygotuj się",
    title: "Przygotowanie wszystkiego.",
    intro:
      "Twój dom, Twoje dni i praktyczne sprawy, które dużo łatwiej ogarnąć teraz niż w środku pierwszego tygodnia z nowym psem.",
    homeEyebrow: "Twój dom",
    homeTitle: "Niemal każdy dom może być dobrym domem.",
    homeBody:
      "Psy dbają o metry kwadratowe dużo mniej, niż ludziom się wydaje. To, co jest w zasięgu dziesięciu minut od Twoich drzwi, liczy się dużo bardziej.",
    worthChecking: "Warto sprawdzić",
    lifeEyebrow: "Twoja codzienność",
    lifeTitle: "Jak wygląda dla Ciebie zwykły tydzień?",
    lifeBody: "Pies musi pasować do tygodnia, który naprawdę masz, a nie do tego, który chciałbyś mieć. Znajdź się poniżej.",
    allergiesEyebrow: "Alergie",
    allergiesTitle: "To, co możemy uczciwie powiedzieć.",
    allergiesBody1:
      "Niektóre rasy zwykle mniej linieją niż inne, a osoby z alergiami czasem uważają je za łatwiejsze do życia. Ale żaden pies nie jest w pełni bezpieczny dla alergików. Białka, na które reagują ludzie, znajdują się w ślinie i skórze, nie tylko w sierści, a reakcje bardzo różnią się między osobami.",
    allergiesBody2:
      "Jeśli ktoś w Twoim domu ma alergie, spędź naprawdę dużo czasu z konkretnym psem, zanim się zdecydujesz — kilka spotkań, nie jedno — i porozmawiaj ze swoim lekarzem. To powie Ci dużo więcej niż jakakolwiek lista ras, łącznie z naszą.",
    aloneEyebrow: "Czas w samotności",
    aloneTitle: "Jak długo to za długo?",
    aloneBody:
      "Większość dorosłych psów radzi sobie komfortowo trzy lub cztery godziny w samotności, gdy się już tego nauczą. Szczeniak na początku tego nie potrafi — potrzebuje kogoś przy sobie przez większość dnia w pierwszych miesiącach, a zostawanie samemu to umiejętność, której uczysz stopniowo.",
    alonePoints: [
      "Ćwicz krótkie nieobecności już od pierwszego tygodnia, zanim pojawi się taka potrzeba",
      "Ktoś, kto wyprowadzi psa w środku dnia, lub sąsiad, zamienia trudny dzień w łatwy",
      "Kilka dni w tygodniu w przedszkolu dla psów pasuje jednym psom, a przytłacza inne",
      "Pies, który wpada w panikę, gdy zostaje sam, potrzebuje pomocy wcześnie — to rzadko poprawia się samo",
    ],
    checklistEyebrow: "Zanim pies przyjedzie",
    checklistTitle: "Lista rzeczy na przyjazd.",
    checklistBody:
      "Odhaczaj po kolei, w miarę jak je zdobywasz. Zapisuje się na bieżąco, na tym urządzeniu, więc możesz wrócić do niej w sklepie.",
    homePrepAlt: "Ilustrowany układ legowiska, misek, smyczy, szelek i zabawek dla psa",
    printCta: "Wydrukuj moją listę na przyjazd",
    noteTitle: "Jedna uczciwa uwaga",
    noteBody:
      "Kup mniej, niż myślisz. Legowisko, miski, jedzenie, szelki, smycz i znaczek z danymi w zupełności wystarczą na pierwszy tydzień. Szybko dowiesz się, co Twój pies naprawdę lubi.",
    welcomeCta: "Pierwsze dni w domu",
  },
  dk: {
    eyebrow: "Gør dig klar",
    title: "Gør alt klar.",
    intro:
      "Dit hjem, dine dage, og de praktiske ting der er langt lettere at ordne nu end midt i den første uge med en ny hund.",
    homeEyebrow: "Dit hjem",
    homeTitle: "Næsten ethvert hjem kan være et godt hjem.",
    homeBody:
      "Hunde bekymrer sig meget mindre om kvadratmeter, end folk tror. Det der ligger inden for ti minutter fra din dør, betyder langt mere.",
    worthChecking: "Værd at tjekke",
    lifeEyebrow: "Din hverdag",
    lifeTitle: "Hvordan ser en helt almindelig uge ud for dig?",
    lifeBody: "Hunden skal passe ind i den uge du faktisk har, ikke den du ønsker du havde. Genkend dig selv nedenfor.",
    allergiesEyebrow: "Allergier",
    allergiesTitle: "Det vi ærligt kan sige.",
    allergiesBody1:
      "Nogle racer fælder mindre end andre, og folk med allergi synes nogle gange det er lettere at leve med dem. Men ingen hund er helt allergivenlig. Proteinerne folk reagerer på findes i spyt og hud såvel som i pels, og reaktioner varierer enormt fra person til person.",
    allergiesBody2:
      "Hvis nogen i dit hjem har allergi, så brug rigtig tid sammen med den bestemte hund, før du beslutter dig — flere besøg, ikke bare ét — og tal med din læge. Det fortæller dig langt mere end nogen raceliste, inklusive vores.",
    aloneEyebrow: "Tid alene",
    aloneTitle: "Hvor længe er for længe?",
    aloneBody:
      "De fleste voksne hunde klarer tre eller fire timer alene uden problemer, når de først har lært det. En hvalp kan ikke det i starten — den har brug for nogen der det meste af dagen de første måneder, og det at blive alene er en færdighed du lærer den gradvist.",
    alonePoints: [
      "Øv korte fravær helt fra første uge, før der er noget behov for det",
      "En, der lufter hunden midt på dagen, eller en nabo, gør en svær dag let",
      "Et par dage om ugen i pasning passer nogle hunde og overvælder andre",
      "En hund der går i panik, når den bliver forladt, har brug for hjælp tidligt — det bliver sjældent bedre af sig selv",
    ],
    checklistEyebrow: "Før hunden kommer hjem",
    checklistTitle: "Ankomstlisten.",
    checklistBody:
      "Kryds af, efterhånden som du skaffer tingene. Den gemmes undervejs, på denne enhed, så du kan vende tilbage til den i en butik.",
    homePrepAlt: "En illustreret oversigt over hundeseng, skåle, snor, sele og legetøj",
    printCta: "Udskriv min ankomstliste",
    noteTitle: "Én ærlig bemærkning",
    noteBody:
      "Køb mindre, end du tror. En seng, skåle, mad, en sele, en snor og et id-mærke bringer dig fint gennem den første uge. Du finder hurtigt ud af, hvad din hund egentlig kan lide.",
    welcomeCta: "De første dage hjemme",
  },
  se: {
    eyebrow: "Gör dig redo",
    title: "Att göra allt klart.",
    intro:
      "Ditt hem, dina dagar, och de praktiska sakerna som är mycket lättare att ordna nu än mitt i den första veckan med en ny hund.",
    homeEyebrow: "Ditt hem",
    homeTitle: "Nästan vilket hem som helst kan vara ett bra hem.",
    homeBody:
      "Hundar bryr sig mycket mindre om kvadratmeter än folk tror. Det som ligger inom tio minuter från din dörr betyder mycket mer.",
    worthChecking: "Värt att kolla upp",
    lifeEyebrow: "Din vardag",
    lifeTitle: "Hur ser en helt vanlig vecka ut för dig?",
    lifeBody: "Hunden måste passa in i veckan du faktiskt har, inte den du önskar att du hade. Känn igen dig själv nedan.",
    allergiesEyebrow: "Allergier",
    allergiesTitle: "Det vi ärligt kan säga.",
    allergiesBody1:
      "Vissa raser brukar fälla mindre än andra, och personer med allergi tycker ibland att det är lättare att leva med dem. Men ingen hund är helt allergivänlig. Proteinerna folk reagerar på finns i saliv och hud såväl som i päls, och reaktioner varierar enormt mellan personer.",
    allergiesBody2:
      "Om någon i ditt hem har allergi, spendera ordentligt med tid med den specifika hunden innan du bestämmer dig — flera besök, inte bara ett — och prata med din läkare. Det säger dig mycket mer än någon raslista, inklusive vår.",
    aloneEyebrow: "Tid ensam",
    aloneTitle: "Hur länge är för länge?",
    aloneBody:
      "De flesta vuxna hundar klarar tre eller fyra timmar ensamma utan problem när de väl har lärt sig det. En valp klarar inte det till att börja med — den behöver någon där större delen av dagen de första månaderna, och att vänja sig vid att vara ensam är en färdighet du lär den gradvis.",
    alonePoints: [
      "Öva korta frånvaron redan från första veckan, innan det finns något behov av det",
      "Någon som rastar mitt på dagen, eller en granne, gör en svår dag lätt",
      "Ett par dagar i veckan på hunddagis passar vissa hundar och överväldigar andra",
      "En hund som får panik när den lämnas behöver hjälp tidigt — det blir sällan bättre av sig själv",
    ],
    checklistEyebrow: "Innan hunden kommer hem",
    checklistTitle: "Ankomstlistan.",
    checklistBody:
      "Bocka av allt eftersom du skaffar det. Den sparas löpande, på den här enheten, så du kan gå tillbaka till den i en butik.",
    homePrepAlt: "En illustrerad översikt över hundbädd, skålar, koppel, sele och leksaker",
    printCta: "Skriv ut min ankomstlista",
    noteTitle: "En ärlig kommentar",
    noteBody:
      "Köp mindre än du tror. En bädd, skålar, mat, en sele, ett koppel och en id-bricka tar dig fint genom den första veckan. Du lär dig snart vad din hund faktiskt gillar.",
    welcomeCta: "De första dagarna hemma",
  },
  fi: {
    eyebrow: "Valmistaudu",
    title: "Kaiken valmisteleminen.",
    intro:
      "Kotisi, päiväsi ja käytännön asiat, jotka on paljon helpompi hoitaa nyt kuin kesken uuden koiran ensimmäisen viikon.",
    homeEyebrow: "Kotisi",
    homeTitle: "Lähes mikä tahansa koti voi olla hyvä koti.",
    homeBody:
      "Koirat välittävät neliömetreistä paljon vähemmän kuin ihmiset luulevat. Se, mikä on kymmenen minuutin päässä ovestasi, merkitsee paljon enemmän.",
    worthChecking: "Kannattaa tarkistaa",
    lifeEyebrow: "Arkesi",
    lifeTitle: "Miltä tavallinen viikko sinulla näyttää?",
    lifeBody: "Koiran on sovittava siihen viikkoon, joka sinulla oikeasti on, ei siihen, jonka toivoisit olevan. Tunnista itsesi alta.",
    allergiesEyebrow: "Allergiat",
    allergiesTitle: "Mitä voimme rehellisesti sanoa.",
    allergiesBody1:
      "Jotkin rodut karvaavat yleensä vähemmän kuin toiset, ja allergiset ihmiset kokevat ne joskus helpommiksi elää. Mutta yksikään koira ei ole täysin allergiaystävällinen. Proteiinit, joille ihmiset reagoivat, ovat syljessä ja ihossa yhtä lailla kuin karvassa, ja reaktiot vaihtelevat valtavasti ihmisestä toiseen.",
    allergiesBody2:
      "Jos jollakulla kotonasi on allergia, vietä kunnolla aikaa juuri sen koiran kanssa ennen päätöstä — useampi tapaaminen, ei vain yksi — ja puhu lääkärisi kanssa. Se kertoo paljon enemmän kuin mikään rotulista, mukaan lukien meidän.",
    aloneEyebrow: "Yksinoloaika",
    aloneTitle: "Kuinka pitkä on liian pitkä?",
    aloneBody:
      "Useimmat aikuiset koirat pärjäävät mukavasti kolme tai neljä tuntia yksin, kun ne ovat sen kerran oppineet. Pentu ei pysty siihen aluksi — se tarvitsee jonkun paikalle suurimman osan päivästä ensimmäisten kuukausien ajan, ja yksinolo on taito, jonka opetat vähitellen.",
    alonePoints: [
      "Harjoittele lyhyitä poissaoloja jo ensimmäisestä viikosta lähtien, ennen kuin siihen on mitään tarvetta",
      "Keskipäivän ulkoiluttaja tai naapuri muuttaa vaikean päivän helpoksi",
      "Pari päivää viikossa koirapäiväkodissa sopii joillekin koirille ja kuormittaa toisia",
      "Koira, joka menee paniikkiin jäädessään yksin, tarvitsee apua ajoissa — se harvoin paranee itsestään",
    ],
    checklistEyebrow: "Ennen koiran saapumista",
    checklistTitle: "Saapumislista.",
    checklistBody:
      "Rastita asiat sitä mukaa kuin hankit ne. Se tallentuu matkan varrella tälle laitteelle, joten voit palata siihen vaikka kaupassa.",
    homePrepAlt: "Kuvitettu asetelma koiranpedistä, ruokakupeista, hihnasta, valjaista ja leluista",
    printCta: "Tulosta saapumislistani",
    noteTitle: "Yksi rehellinen huomio",
    noteBody:
      "Osta vähemmän kuin luulet tarvitsevasi. Peti, kupit, ruoka, valjaat, hihna ja tunnistelaatta riittävät hyvin ensimmäiseen viikkoon. Opit pian, mistä koirasi oikeasti pitää.",
    welcomeCta: "Ensimmäiset päivät kotona",
  },
  de: {
    eyebrow: "Bereit machen",
    title: "Alles bereit machen.",
    intro:
      "Dein Zuhause, deine Tage und die praktischen Dinge, die sich jetzt viel leichter regeln lassen als mitten in der ersten Woche mit einem neuen Hund.",
    homeEyebrow: "Dein Zuhause",
    homeTitle: "Fast jedes Zuhause kann ein gutes Zuhause sein.",
    homeBody:
      "Hunden ist die Quadratmeterzahl viel egaler, als Menschen denken. Was in zehn Minuten von deiner Haustür erreichbar ist, zählt viel mehr.",
    worthChecking: "Wert, zu prüfen",
    lifeEyebrow: "Dein Alltag",
    lifeTitle: "Wie sieht eine ganz normale Woche für dich aus?",
    lifeBody: "Der Hund muss zu der Woche passen, die du wirklich hast, nicht zu der, die du gerne hättest. Erkenne dich unten wieder.",
    allergiesEyebrow: "Allergien",
    allergiesTitle: "Was wir ehrlich sagen können.",
    allergiesBody1:
      "Manche Rassen haaren tendenziell weniger als andere, und Menschen mit Allergien finden sie manchmal einfacher im Zusammenleben. Aber kein Hund ist völlig allergiefrei. Die Proteine, auf die Menschen reagieren, stecken in Speichel und Haut ebenso wie im Fell, und Reaktionen sind von Person zu Person sehr unterschiedlich.",
    allergiesBody2:
      "Wenn jemand in deinem Zuhause Allergien hat, verbring wirklich Zeit mit dem konkreten Hund, bevor du dich entscheidest — mehrere Besuche, nicht nur einen — und sprich mit deinem Arzt. Das sagt dir viel mehr als jede Rasseliste, auch unsere.",
    aloneEyebrow: "Zeit allein",
    aloneTitle: "Wie lange ist zu lange?",
    aloneBody:
      "Die meisten erwachsenen Hunde kommen problemlos drei bis vier Stunden allein zurecht, sobald sie es gelernt haben. Ein Welpe kann das anfangs nicht — er braucht in den ersten Monaten die meiste Zeit des Tages jemanden an seiner Seite, und Alleinsein ist eine Fähigkeit, die du langsam beibringst.",
    alonePoints: [
      "Übe kurze Abwesenheiten schon ab der ersten Woche, bevor es überhaupt nötig ist",
      "Ein Mittagsspaziergänger oder eine Nachbarin macht aus einem schwierigen Tag einen leichten",
      "Ein paar Tage die Woche in der Tagesbetreuung passt manchen Hunden, andere überfordert es",
      "Ein Hund, der beim Alleinsein in Panik gerät, braucht früh Hilfe — es bessert sich selten von allein",
    ],
    checklistEyebrow: "Bevor er einzieht",
    checklistTitle: "Die Checkliste für den Einzug.",
    checklistBody:
      "Hake Dinge ab, sobald du sie besorgt hast. Sie wird laufend auf diesem Gerät gespeichert, sodass du im Geschäft darauf zurückgreifen kannst.",
    homePrepAlt: "Eine illustrierte Übersicht aus Hundebett, Näpfen, Leine, Geschirr und Spielzeug",
    printCta: "Meine Einzugscheckliste drucken",
    noteTitle: "Eine ehrliche Anmerkung",
    noteBody:
      "Kauf weniger, als du denkst. Ein Bett, Näpfe, Futter, ein Geschirr, eine Leine und eine ID-Marke bringen dich problemlos durch die erste Woche. Du wirst bald genug herausfinden, was dein Hund wirklich mag.",
    welcomeCta: "Die ersten Tage zu Hause",
  },
  fr: {
    eyebrow: "Se préparer",
    title: "Tout préparer.",
    intro:
      "Votre maison, vos journées, et les aspects pratiques bien plus faciles à régler maintenant qu'en pleine première semaine avec un nouveau chien.",
    homeEyebrow: "Votre maison",
    homeTitle: "Presque tous les logements peuvent être un bon foyer.",
    homeBody:
      "Les chiens se soucient bien moins des mètres carrés qu'on ne le pense. Ce qui se trouve à dix minutes de votre porte compte bien davantage.",
    worthChecking: "À vérifier",
    lifeEyebrow: "Votre quotidien",
    lifeTitle: "À quoi ressemble une semaine ordinaire pour vous ?",
    lifeBody: "Le chien doit s'adapter à la semaine que vous avez réellement, pas à celle que vous aimeriez avoir. Reconnaissez-vous ci-dessous.",
    allergiesEyebrow: "Allergies",
    allergiesTitle: "Ce que nous pouvons dire honnêtement.",
    allergiesBody1:
      "Certaines races perdent généralement moins leurs poils que d'autres, et les personnes allergiques les trouvent parfois plus faciles à vivre. Mais aucun chien n'est totalement hypoallergénique. Les protéines auxquelles les gens réagissent se trouvent dans la salive et la peau autant que dans le poil, et les réactions varient énormément d'une personne à l'autre.",
    allergiesBody2:
      "Si quelqu'un chez vous est allergique, passez vraiment du temps avec ce chien précis avant de vous engager — plusieurs visites, pas une seule — et parlez-en à votre médecin. Cela vous en apprendra bien plus que n'importe quelle liste de races, y compris la nôtre.",
    aloneEyebrow: "Le temps seul",
    aloneTitle: "Combien de temps est trop long ?",
    aloneBody:
      "La plupart des chiens adultes gèrent confortablement trois ou quatre heures seuls, une fois qu'ils l'ont appris. Un chiot ne le peut pas au début — il a besoin de quelqu'un la majeure partie de la journée pendant les premiers mois, et apprendre à rester seul est une compétence qui se construit lentement.",
    alonePoints: [
      "Entraînez de courtes absences dès la première semaine, avant même qu'il y en ait besoin",
      "Une personne qui promène le chien à midi, ou un voisin, transforme une journée difficile en journée facile",
      "Quelques jours par semaine en garderie convient à certains chiens et en submerge d'autres",
      "Un chien qui panique quand on le laisse a besoin d'aide tôt — cela s'améliore rarement tout seul",
    ],
    checklistEyebrow: "Avant son arrivée",
    checklistTitle: "La liste pour son arrivée.",
    checklistBody:
      "Cochez les éléments au fur et à mesure. Elle s'enregistre en cours de route, sur cet appareil, pour que vous puissiez la retrouver en magasin.",
    homePrepAlt: "Une composition illustrée avec panier, gamelles, laisse, harnais et jouets pour chien",
    printCta: "Imprimer ma liste d'arrivée",
    noteTitle: "Une remarque honnête",
    noteBody:
      "Achetez moins que vous ne pensez. Un panier, des gamelles, de la nourriture, un harnais, une laisse et une médaille d'identification suffiront très bien pour la première semaine. Vous découvrirez bien assez tôt ce que votre chien aime vraiment.",
    welcomeCta: "Les premiers jours à la maison",
  },
  nl: {
    eyebrow: "Je klaarmaken",
    title: "Alles klaarmaken.",
    intro:
      "Je huis, je dagen, en de praktische dingen die nu veel makkelijker te regelen zijn dan midden in de eerste week met een nieuwe hond.",
    homeEyebrow: "Je huis",
    homeTitle: "Bijna elk huis kan een goed thuis zijn.",
    homeBody:
      "Honden geven veel minder om vierkante meters dan mensen denken. Wat binnen tien minuten van je voordeur ligt, telt veel zwaarder.",
    worthChecking: "Het waard om te checken",
    lifeEyebrow: "Je dagelijks leven",
    lifeTitle: "Hoe ziet een gewone week er voor jou uit?",
    lifeBody: "De hond moet passen bij de week die je echt hebt, niet bij de week die je zou willen hebben. Herken jezelf hieronder.",
    allergiesEyebrow: "Allergieën",
    allergiesTitle: "Wat we eerlijk kunnen zeggen.",
    allergiesBody1:
      "Sommige rassen verharen doorgaans minder dan andere, en mensen met allergieën vinden ze soms makkelijker om mee te leven. Maar geen enkele hond is helemaal allergievrij. De eiwitten waarop mensen reageren zitten in speeksel en huid net zo goed als in haar, en reacties verschillen enorm van persoon tot persoon.",
    allergiesBody2:
      "Als iemand in je huis allergieën heeft, breng dan echt tijd door met díe specifieke hond voordat je je vastlegt — meerdere bezoeken, niet één — en praat met je arts. Dat vertelt je veel meer dan welke rassenlijst dan ook, ook de onze.",
    aloneEyebrow: "Tijd alleen",
    aloneTitle: "Hoe lang is te lang?",
    aloneBody:
      "De meeste volwassen honden redden zich comfortabel drie tot vier uur alleen, zodra ze het geleerd hebben. Een puppy kan dat aanvankelijk niet — hij heeft de eerste maanden het grootste deel van de dag iemand nodig, en alleen leren zijn is een vaardigheid die je langzaam aanleert.",
    alonePoints: [
      "Oefen korte afwezigheden al vanaf de eerste week, voordat het nodig is",
      "Iemand die 's middags uitlaat, of een buur, maakt van een lastige dag een makkelijke",
      "Een paar dagen per week naar de dagopvang past sommige honden, en overweldigt andere",
      "Een hond die in paniek raakt als hij alleen wordt gelaten, heeft vroeg hulp nodig — het verbetert zelden vanzelf",
    ],
    checklistEyebrow: "Voordat hij thuiskomt",
    checklistTitle: "De aankomstlijst.",
    checklistBody:
      "Vink dingen af zodra je ze in huis hebt. Hij wordt onderweg opgeslagen, op dit apparaat, zodat je hem in de winkel weer kunt raadplegen.",
    homePrepAlt: "Een geïllustreerd overzicht van een hondenmand, bakjes, riem, tuigje en speeltjes",
    printCta: "Mijn aankomstlijst afdrukken",
    noteTitle: "Eén eerlijke opmerking",
    noteBody:
      "Koop minder dan je denkt. Een mand, bakjes, voer, een tuigje, een riem en een naamplaatje brengen je prima door de eerste week. Je komt snel genoeg erachter wat je hond echt lekker vindt.",
    welcomeCta: "De eerste dagen thuis",
  },
} as const;

function PreparePage() {
  const c = useCopy(copy);
  const { arrivalChecklist, homeFactors, homeScenarios, lifeScenarios } = getDogContent();
  const state = useGetDog();
  const ticked = state.checked["arrival"] ?? [];

  return (
    <div className="pb-24">
      <section className="container-page max-w-3xl pt-28 md:pt-36">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="display-xl mt-6">{c.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      </section>

      {/* ------------------------------------------------------- Your home */}
      <Section className="pt-16 md:pt-20">
        <div className="container-page">
          <SectionHead eyebrow={c.homeEyebrow} title={c.homeTitle} body={c.homeBody} />
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <CardGrid items={homeScenarios.map((s) => ({ title: s.title, body: s.body }))} columns={2} />
            <div>
              <p className="eyebrow">{c.worthChecking}</p>
              <div className="mt-6 rounded-2xl border border-border bg-card p-7">
                <PointList items={homeFactors} />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- Everyday life */}
      <Section className="bg-surface pt-0">
        <div className="container-page pt-20 md:pt-28">
          <SectionHead eyebrow={c.lifeEyebrow} title={c.lifeTitle} body={c.lifeBody} />
          <div className="mt-12">
            <CardGrid items={lifeScenarios.map((s) => ({ title: s.title, body: s.body }))} />
          </div>
        </div>
      </Section>

      {/* -------------------------------------- Allergies and time alone */}
      <Section>
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">{c.allergiesEyebrow}</p>
            <h2 className="display-md mt-4">{c.allergiesTitle}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{c.allergiesBody1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{c.allergiesBody2}</p>
          </article>

          <article className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">{c.aloneEyebrow}</p>
            <h2 className="display-md mt-4">{c.aloneTitle}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{c.aloneBody}</p>
            <div className="mt-6">
              <PointList items={c.alonePoints} />
            </div>
          </article>
        </div>
      </Section>

      {/* ------------------------------------------------------- Checklist */}
      <Section className="pt-0">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHead eyebrow={c.checklistEyebrow} title={c.checklistTitle} body={c.checklistBody} />
              <p className="mt-8 font-display text-4xl tabular-nums tracking-tight text-accent">
                {ticked.length}
                <span className="text-xl text-muted-foreground"> / {arrivalChecklist.length}</span>
              </p>
              <div className="mt-8 hidden overflow-hidden rounded-[1.5rem] lg:block">
                <img
                  src={homePrepImage}
                  alt={c.homePrepAlt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-8">
                <ButtonLink to={withLangPrefix("/my-dog/print")} tone="outline">
                  {c.printCta}
                  <Arrow />
                </ButtonLink>
              </div>
            </div>

            <Checklist listId="arrival" items={arrivalChecklist} />
          </div>
        </div>
      </Section>

      <div className="container-page max-w-3xl">
        <Notice title={c.noteTitle}>{c.noteBody}</Notice>
        <div className="mt-10">
          <ButtonLink to={withLangPrefix("/get-a-dog/welcome-home")} size="lg">
            {c.welcomeCta}
            <Arrow />
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
