import { useCopy } from "@/i18n";

/** One place that describes the whole site, used by the header on every screen size. */
export type NavItem = { to: string; label: string; hint: string };
export type NavGroup = { id: string; label: string; blurb: string; items: NavItem[] };

const en: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Get a dog",
    blurb: "Thinking about it? Start here and take your time.",
    items: [
      { to: "/get-a-dog", label: "The whole journey", hint: "From first thought to first night" },
      { to: "/get-a-dog/ready", label: "Am I ready?", hint: "An honest look at your everyday life" },
      { to: "/find-my-dog", label: "Find my dog", hint: "Two minutes, no account needed" },
      { to: "/get-a-dog/choose", label: "Choosing well", hint: "Puppy or adult, breeder or rescue" },
      { to: "/get-a-dog/costs", label: "What it costs", hint: "Before, monthly and the surprises" },
      { to: "/get-a-dog/prepare", label: "Getting ready", hint: "Your home, your days, your list" },
      { to: "/get-a-dog/welcome-home", label: "Welcome home", hint: "The first day and the first week" },
    ],
  },
  {
    id: "breeds",
    label: "Breeds",
    blurb: "Every breed described honestly — the lovely bits and the hard bits.",
    items: [
      { to: "/breeds", label: "All breeds", hint: "Browse and filter" },
      { to: "/compare", label: "Compare two", hint: "Side by side, no spin" },
      { to: "/dog-life", label: "Dog life near you", hint: "Walks, weather and everyday places" },
      { to: "/guides", label: "Guides", hint: "Calm reading on living with a dog" },
    ],
  },
  {
    id: "my-dog",
    label: "My Dog",
    blurb: "The home for your own dog's everyday life.",
    items: [
      { to: "/my-dog", label: "Today", hint: "What's worth doing today" },
      { to: "/my-dog/week", label: "My week", hint: "A gentle weekly rhythm" },
      { to: "/my-dog/nutrition", label: "Food & portions", hint: "How much, roughly" },
      { to: "/my-dog/food", label: "Can my dog eat this?", hint: "Safe, careful, avoid" },
      { to: "/my-dog/weight", label: "Weight & body", hint: "Track it kindly" },
      { to: "/my-dog/vet", label: "Vet & contacts", hint: "Visits and phone numbers" },
      { to: "/my-dog/print", label: "Print & save", hint: "Paper you can stick on the fridge" },
    ],
  },
  {
    id: "train",
    label: "Train",
    blurb: "Short, kind sessions you can actually do yourself.",
    items: [
      { to: "/train", label: "Today's session", hint: "Five minutes is plenty" },
      { to: "/train/library", label: "Lesson library", hint: "Step by step, with pictures" },
      { to: "/train/journey", label: "Your journey", hint: "How far you've come" },
      { to: "/train/setup", label: "Your dog's details", hint: "Age, breed, what you're working on" },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    blurb: "Car trips, hikes and crossing borders — safely.",
    items: [
      { to: "/travel", label: "Travel & adventures", hint: "Where you're heading" },
      { to: "/travel/car", label: "In the car", hint: "Safe setups and car sickness" },
      { to: "/travel/outdoors", label: "Outdoors", hint: "Hikes, paws, heat and cold" },
      { to: "/travel/abroad", label: "Travelling abroad", hint: "Country to country checker" },
    ],
  },
];

const no: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Skaffe hund",
    blurb: "Går du og tenker på det? Begynn her, og ta deg god tid.",
    items: [
      { to: "/get-a-dog", label: "Hele reisen", hint: "Fra første tanke til første natt" },
      { to: "/get-a-dog/ready", label: "Er jeg klar?", hint: "Et ærlig blikk på hverdagen din" },
      { to: "/find-my-dog", label: "Finn min hund", hint: "To minutter, ingen konto" },
      { to: "/get-a-dog/choose", label: "Velge riktig", hint: "Valp eller voksen, oppdretter eller omplassering" },
      { to: "/get-a-dog/costs", label: "Hva det koster", hint: "Før, månedlig og overraskelsene" },
      { to: "/get-a-dog/prepare", label: "Bli klar", hint: "Hjemmet, dagene og lista di" },
      { to: "/get-a-dog/welcome-home", label: "Velkommen hjem", hint: "Den første dagen og den første uka" },
    ],
  },
  {
    id: "breeds",
    label: "Raser",
    blurb: "Alle raser beskrevet ærlig — både det fine og det krevende.",
    items: [
      { to: "/breeds", label: "Alle raser", hint: "Bla og filtrer" },
      { to: "/compare", label: "Sammenlign to", hint: "Side om side, uten pynt" },
      { to: "/dog-life", label: "Hundeliv der du bor", hint: "Turer, vær og hverdagssteder" },
      { to: "/guides", label: "Guider", hint: "Rolig lesing om livet med hund" },
    ],
  },
  {
    id: "my-dog",
    label: "Min hund",
    blurb: "Hjemmet for din egen hunds hverdag.",
    items: [
      { to: "/my-dog", label: "I dag", hint: "Hva som er verdt å gjøre i dag" },
      { to: "/my-dog/week", label: "Uka mi", hint: "En rolig ukerytme" },
      { to: "/my-dog/nutrition", label: "Fôr og porsjoner", hint: "Hvor mye, omtrent" },
      { to: "/my-dog/food", label: "Kan hunden spise dette?", hint: "Trygt, forsiktig, unngå" },
      { to: "/my-dog/weight", label: "Vekt og hold", hint: "Følg med, uten mas" },
      { to: "/my-dog/vet", label: "Veterinær og kontakter", hint: "Besøk og telefonnumre" },
      { to: "/my-dog/print", label: "Skriv ut og lagre", hint: "Papir du kan henge på kjøleskapet" },
    ],
  },
  {
    id: "train",
    label: "Trening",
    blurb: "Korte, vennlige økter du faktisk klarer selv.",
    items: [
      { to: "/train", label: "Dagens økt", hint: "Fem minutter holder" },
      { to: "/train/library", label: "Leksjonsbibliotek", hint: "Steg for steg, med bilder" },
      { to: "/train/journey", label: "Reisen deres", hint: "Hvor langt dere har kommet" },
      { to: "/train/setup", label: "Om hunden din", hint: "Alder, rase og hva dere øver på" },
    ],
  },
  {
    id: "travel",
    label: "Reise",
    blurb: "Bilturer, fjellturer og grensepasseringer — trygt.",
    items: [
      { to: "/travel", label: "Reise og opplevelser", hint: "Hvor dere skal" },
      { to: "/travel/car", label: "I bilen", hint: "Trygg sikring og bilsyke" },
      { to: "/travel/outdoors", label: "Ute i naturen", hint: "Turer, poter, varme og kulde" },
      { to: "/travel/abroad", label: "Reise til utlandet", hint: "Sjekk land for land" },
    ],
  },
];

const pl: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Zdobądź psa",
    blurb: "Zastanawiasz się nad tym? Zacznij tutaj i nie spiesz się.",
    items: [
      { to: "/get-a-dog", label: "Cała droga", hint: "Od pierwszej myśli do pierwszej nocy" },
      { to: "/get-a-dog/ready", label: "Czy jestem gotowy?", hint: "Szczere spojrzenie na twoją codzienność" },
      { to: "/find-my-dog", label: "Znajdź mojego psa", hint: "Dwie minuty, bez zakładania konta" },
      { to: "/get-a-dog/choose", label: "Dobry wybór", hint: "Szczeniak czy dorosły, hodowla czy schronisko" },
      { to: "/get-a-dog/costs", label: "Ile to kosztuje", hint: "Przed, co miesiąc i te niespodzianki" },
      { to: "/get-a-dog/prepare", label: "Przygotowania", hint: "Twój dom, twoje dni, twoja lista" },
      { to: "/get-a-dog/welcome-home", label: "Witaj w domu", hint: "Pierwszy dzień i pierwszy tydzień" },
    ],
  },
  {
    id: "breeds",
    label: "Rasy",
    blurb: "Każda rasa opisana szczerze — to, co piękne, i to, co trudne.",
    items: [
      { to: "/breeds", label: "Wszystkie rasy", hint: "Przeglądaj i filtruj" },
      { to: "/compare", label: "Porównaj dwie", hint: "Obok siebie, bez upiększeń" },
      { to: "/dog-life", label: "Życie z psem w twojej okolicy", hint: "Spacery, pogoda i codzienne miejsca" },
      { to: "/guides", label: "Poradniki", hint: "Spokojna lektura o życiu z psem" },
    ],
  },
  {
    id: "my-dog",
    label: "Mój pies",
    blurb: "Miejsce dla codzienności twojego psa.",
    items: [
      { to: "/my-dog", label: "Dziś", hint: "Co warto dziś zrobić" },
      { to: "/my-dog/week", label: "Mój tydzień", hint: "Spokojny rytm tygodnia" },
      { to: "/my-dog/nutrition", label: "Jedzenie i porcje", hint: "Ile mniej więcej" },
      { to: "/my-dog/food", label: "Czy mój pies może to zjeść?", hint: "Bezpieczne, ostrożnie, unikać" },
      { to: "/my-dog/weight", label: "Waga i kondycja", hint: "Śledź to z troską" },
      { to: "/my-dog/vet", label: "Weterynarz i kontakty", hint: "Wizyty i numery telefonów" },
      { to: "/my-dog/print", label: "Drukuj i zapisuj", hint: "Kartka, którą powiesisz na lodówce" },
    ],
  },
  {
    id: "train",
    label: "Trening",
    blurb: "Krótkie, łagodne sesje, które naprawdę da się zrobić samemu.",
    items: [
      { to: "/train", label: "Dzisiejsza sesja", hint: "Pięć minut w zupełności wystarczy" },
      { to: "/train/library", label: "Biblioteka lekcji", hint: "Krok po kroku, ze zdjęciami" },
      { to: "/train/journey", label: "Wasza droga", hint: "Jak daleko już zaszliście" },
      { to: "/train/setup", label: "Dane twojego psa", hint: "Wiek, rasa i nad czym pracujecie" },
    ],
  },
  {
    id: "travel",
    label: "Podróże",
    blurb: "Podróże samochodem, wędrówki i przekraczanie granic — bezpiecznie.",
    items: [
      { to: "/travel", label: "Podróże i przygody", hint: "Dokąd się wybieracie" },
      { to: "/travel/car", label: "W samochodzie", hint: "Bezpieczny montaż i choroba lokomocyjna" },
      { to: "/travel/outdoors", label: "Na dworze", hint: "Wędrówki, łapy, upał i zimno" },
      { to: "/travel/abroad", label: "Podróże za granicę", hint: "Sprawdzarka kraj po kraju" },
    ],
  },
];

const dk: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Få en hund",
    blurb: "Overvejer du det? Start her og tag dig god tid.",
    items: [
      { to: "/get-a-dog", label: "Hele rejsen", hint: "Fra første tanke til første nat" },
      { to: "/get-a-dog/ready", label: "Er jeg klar?", hint: "Et ærligt kig på din hverdag" },
      { to: "/find-my-dog", label: "Find min hund", hint: "To minutter, ingen konto nødvendig" },
      { to: "/get-a-dog/choose", label: "Vælg den rette", hint: "Hvalp eller voksen, opdrætter eller internat" },
      { to: "/get-a-dog/costs", label: "Hvad koster det?", hint: "Før, månedligt og overraskelserne" },
      { to: "/get-a-dog/prepare", label: "Gør klar", hint: "Dit hjem, dine dage, din liste" },
      { to: "/get-a-dog/welcome-home", label: "Velkommen hjem", hint: "Den første dag og den første uge" },
    ],
  },
  {
    id: "breeds",
    label: "Hunderacer",
    blurb: "Hver race beskrevet ærligt – de skønne sider og de udfordrende.",
    items: [
      { to: "/breeds", label: "Alle racer", hint: "Gennemse og filtrer" },
      { to: "/compare", label: "Sammenlign to", hint: "Side om side, uden filter" },
      { to: "/dog-life", label: "Hundeliv nær dig", hint: "Gåture, vejr og hverdagssteder" },
      { to: "/guides", label: "Guides", hint: "Rolig læsning om livet med hund" },
    ],
  },
  {
    id: "my-dog",
    label: "Min hund",
    blurb: "Hjemmet for din egen hunds hverdag.",
    items: [
      { to: "/my-dog", label: "I dag", hint: "Hvad der er værd at lave i dag" },
      { to: "/my-dog/week", label: "Min uge", hint: "En blid ugentlig rytme" },
      { to: "/my-dog/nutrition", label: "Mad & portioner", hint: "Hvor meget, cirka" },
      { to: "/my-dog/food", label: "Må min hund spise dette?", hint: "Sikkert, forsigtigt, undgå" },
      { to: "/my-dog/weight", label: "Vægt & krop", hint: "Følg det venligt" },
      { to: "/my-dog/vet", label: "Dyrlæge & kontakter", hint: "Besøg og telefonnumre" },
      { to: "/my-dog/print", label: "Print & gem", hint: "Papir du kan hænge på køleskabet" },
    ],
  },
  {
    id: "train",
    label: "Træn",
    blurb: "Korte, venlige sessioner du rent faktisk kan lave selv.",
    items: [
      { to: "/train", label: "Dagens træning", hint: "Fem minutter er rigeligt" },
      { to: "/train/library", label: "Lektioner", hint: "Trin for trin, med billeder" },
      { to: "/train/journey", label: "Din rejse", hint: "Hvor langt du er nået" },
      { to: "/train/setup", label: "Din hunds detaljer", hint: "Alder, race, hvad du arbejder på" },
    ],
  },
  {
    id: "travel",
    label: "Rejser",
    blurb: "Bilture, vandreture og grænseovergange – sikkert.",
    items: [
      { to: "/travel", label: "Rejser & eventyr", hint: "Hvor du er på vej hen" },
      { to: "/travel/car", label: "I bilen", hint: "Sikre løsninger og køresyge" },
      { to: "/travel/outdoors", label: "Udendørs", hint: "Vandreture, poter, varme og kulde" },
      { to: "/travel/abroad", label: "Rejser til udlandet", hint: "Tjekker fra land til land" },
    ],
  },
];

const se: NavGroup[] = [
  {
    id: "skaffa-hund",
    label: "Skaffa hund",
    blurb: "Funderingar? Börja här och ta det lugnt.",
    items: [
      { to: "/skaffa-hund", label: "Hela resan", hint: "Från första tanke till första natten" },
      { to: "/skaffa-hund/redo", label: "Är jag redo?", hint: "En ärlig titt på din vardag" },
      { to: "/hitta-hund", label: "Hitta min hund", hint: "Två minuter, inget konto behövs" },
      { to: "/skaffa-hund/val", label: "Välj rätt", hint: "Valp eller vuxen, uppfödare eller omplacering" },
      { to: "/skaffa-hund/kostnad", label: "Vad det kostar", hint: "Innan, varje månad och överraskningarna" },
      { to: "/skaffa-hund/forbered", label: "Gör dig redo", hint: "Ditt hem, dina dagar, din lista" },
      { to: "/skaffa-hund/valkommen-hem", label: "Välkommen hem", hint: "Första dagen och första veckan" },
    ],
  },
  {
    id: "raser",
    label: "Raser",
    blurb: "Varje ras beskriven ärligt – det fina och det tuffa.",
    items: [
      { to: "/raser", label: "Alla raser", hint: "Bläddra och filtrera" },
      { to: "/jamfor", label: "Jämför två", hint: "Sida vid sida, utan krångel" },
      { to: "/hundliv", label: "Hundliv nära dig", hint: "Promenader, väder och vardagsplatser" },
      { to: "/guider", label: "Guider", hint: "Lugn läsning om livet med hund" },
    ],
  },
  {
    id: "min-hund",
    label: "Min hund",
    blurb: "Hemmet för din egen hunds vardag.",
    items: [
      { to: "/min-hund", label: "Idag", hint: "Vad som är värt att göra idag" },
      { to: "/min-hund/vecka", label: "Min vecka", hint: "En mjuk veckorytm" },
      { to: "/min-hund/nutrition", label: "Mat & portioner", hint: "Hur mycket, ungefär" },
      { to: "/min-hund/mat", label: "Kan min hund äta detta?", hint: "Säkert, försiktigt, undvik" },
      { to: "/min-hund/vikt", label: "Vikt & kropp", hint: "Följ det snällt" },
      { to: "/min-hund/veterinar", label: "Veterinär & kontakter", hint: "Besök och telefonnummer" },
      { to: "/min-hund/skriv-ut", label: "Skriv ut & spara", hint: "Papper att sätta på kylskåpet" },
    ],
  },
  {
    id: "trana",
    label: "Träna",
    blurb: "Korta, snälla pass som du faktiskt kan göra själv.",
    items: [
      { to: "/trana", label: "Dagens pass", hint: "Fem minuter räcker gott" },
      { to: "/trana/bibliotek", label: "Lektionsbibliotek", hint: "Steg för steg, med bilder" },
      { to: "/trana/resa", label: "Din resa", hint: "Hur långt du har kommit" },
      { to: "/trana/installningar", label: "Din hunds detaljer", hint: "Ålder, ras, vad du jobbar på" },
    ],
  },
  {
    id: "resa",
    label: "Resa",
    blurb: "Bilresor, vandringar och gränspassager – tryggt.",
    items: [
      { to: "/resa", label: "Resor & äventyr", hint: "Vart du är på väg" },
      { to: "/resa/bil", label: "I bilen", hint: "Säkra lösningar och åksjuka" },
      { to: "/resa/utomhus", label: "Utomhus", hint: "Vandringar, tassar, värme och kyla" },
      { to: "/resa/utomlands", label: "Resa utomlands", hint: "Land-för-land-koll" },
    ],
  },
];

const fi: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Hanki koira",
    blurb: "Mietitkö koiraa? Aloita tästä ja ota aikaa.",
    items: [
      { to: "/get-a-dog", label: "Koko matka", hint: "Ensimmäisestä ajatuksesta ensimmäiseen yöhön" },
      { to: "/get-a-dog/ready", label: "Olenko valmis?", hint: "Rehellinen katsaus arkeesi" },
      { to: "/find-my-dog", label: "Etsi koirani", hint: "Kaksi minuuttia, ei vaadi tiliä" },
      { to: "/get-a-dog/choose", label: "Valitse viisaasti", hint: "Pentua vai aikuista, kasvattajalta vai kodinvaihtajalta" },
      { to: "/get-a-dog/costs", label: "Mitä se maksaa", hint: "Ennen, kuukausittain ja yllätykset" },
      { to: "/get-a-dog/prepare", label: "Valmistautuminen", hint: "Kotisi, päiväsi, listasi" },
      { to: "/get-a-dog/welcome-home", label: "Tervetuloa kotiin", hint: "Ensimmäinen päivä ja ensimmäinen viikko" },
    ],
  },
  {
    id: "breeds",
    label: "Rodut",
    blurb: "Jokainen rotu kuvattuna rehellisesti – ihanat puolet ja haastavat puolet.",
    items: [
      { to: "/breeds", label: "Kaikki rodut", hint: "Selaa ja suodata" },
      { to: "/compare", label: "Vertaa kahta", hint: "Rinnakkain, ilman kaunistelua" },
      { to: "/dog-life", label: "Koiran elämä lähelläsi", hint: "Lenkit, sää ja arjen paikat" },
      { to: "/guides", label: "Oppaita", hint: "Rauhallista lukemista koiran kanssa elämisestä" },
    ],
  },
  {
    id: "my-dog",
    label: "Oma koirani",
    blurb: "Oman koirasi arjen koti.",
    items: [
      { to: "/my-dog", label: "Tänään", hint: "Mitä tänään kannattaa tehdä" },
      { to: "/my-dog/week", label: "Oma viikkoni", hint: "Lempeä viikoittainen rytmi" },
      { to: "/my-dog/nutrition", label: "Ruoka & annokset", hint: "Kuinka paljon, suurin piirtein" },
      { to: "/my-dog/food", label: "Voiko koirani syödä tätä?", hint: "Turvallista, varovasti, vältä" },
      { to: "/my-dog/weight", hint: "Seuraa sitä lempeästi", label: "Paino & keho" },
      { to: "/my-dog/vet", label: "Eläinlääkäri & yhteystiedot", hint: "Käynnit ja puhelinnumerot" },
      { to: "/my-dog/print", label: "Tulosta & tallenna", hint: "Paperia, jonka voit laittaa jääkaappiin" },
    ],
  },
  {
    id: "train",
    label: "Koulutus",
    blurb: "Lyhyitä, lempeitä harjoituksia, joita voit oikeasti tehdä itse.",
    items: [
      { to: "/train", label: "Päivän harjoitus", hint: "Viisi minuuttia riittää mainiosti" },
      { to: "/train/library", label: "Harjoituskirjasto", hint: "Vaihe vaiheelta, kuvien kanssa" },
      { to: "/train/journey", label: "Oma matkasi", hint: "Kuinka pitkälle olet päässyt" },
      { to: "/train/setup", label: "Koirasi tiedot", hint: "Ikä, rotu, mitä harjoittelette" },
    ],
  },
  {
    id: "travel",
    label: "Matkustaminen",
    blurb: "Automatkat, vaellukset ja rajojen ylittäminen – turvallisesti.",
    items: [
      { to: "/travel", label: "Matkat & seikkailut", hint: "Minne olet menossa" },
      { to: "/travel/car", label: "Autossa", hint: "Turvalliset järjestelyt ja matkapahoinvointi" },
      { to: "/travel/outdoors", label: "Ulkona", hint: "Vaellukset, tassut, kuuma ja kylmä" },
      { to: "/travel/abroad", label: "Matkustaminen ulkomaille", hint: "Maa maalta -tarkistus" },
    ],
  },
];

const de: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Ein Hund soll's sein",
    blurb: "Du denkst darüber nach? Hier fängst du an und nimmst dir Zeit.",
    items: [
      { to: "/get-a-dog", label: "Der ganze Weg", hint: "Vom ersten Gedanken bis zur ersten Nacht" },
      { to: "/get-a-dog/ready", label: "Bin ich bereit?", hint: "Ein ehrlicher Blick auf deinen Alltag" },
      { to: "/find-my-dog", label: "Finde meinen Hund", hint: "Zwei Minuten, kein Konto nötig" },
      { to: "/get-a-dog/choose", label: "Die richtige Wahl", hint: "Welpe oder erwachsen, Züchter oder Tierheim" },
      { to: "/get-a-dog/costs", label: "Was kostet das?", hint: "Vorher, monatlich und die Überraschungen" },
      { to: "/get-a-dog/prepare", label: "Vorbereitung", hint: "Dein Zuhause, deine Tage, deine Liste" },
      { to: "/get-a-dog/welcome-home", label: "Willkommen Zuhause", hint: "Der erste Tag und die erste Woche" },
    ],
  },
  {
    id: "breeds",
    label: "Rassen",
    blurb: "Jede Rasse ehrlich beschrieben – die schönen Seiten und die Herausforderungen.",
    items: [
      { to: "/breeds", label: "Alle Rassen", hint: "Stöbern und filtern" },
      { to: "/compare", label: "Zwei vergleichen", hint: "Nebeneinander, ohne Schnickschnack" },
      { to: "/dog-life", label: "Hundeleben bei dir", hint: "Spaziergänge, Wetter und Orte im Alltag" },
      { to: "/guides", label: "Ratgeber", hint: "Ruhige Lektüre zum Zusammenleben mit Hund" },
    ],
  },
  {
    id: "my-dog",
    label: "Mein Hund",
    blurb: "Das Zuhause für den Alltag deines eigenen Hundes.",
    items: [
      { to: "/my-dog", label: "Heute", hint: "Was sich heute lohnt" },
      { to: "/my-dog/week", label: "Meine Woche", hint: "Ein sanfter Wochenrhythmus" },
      { to: "/my-dog/nutrition", label: "Futter & Mengen", hint: "Wie viel, ungefähr" },
      { to: "/my-dog/food", label: "Darf mein Hund das essen?", hint: "Sicher, vorsichtig, vermeiden" },
      { to: "/my-dog/weight", label: "Gewicht & Körper", hint: "Freundlich im Blick behalten" },
      { to: "/my-dog/vet", label: "Tierarzt & Kontakte", hint: "Besuche und Telefonnummern" },
      { to: "/my-dog/print", label: "Ausdrucken & speichern", hint: "Papier zum Aufhängen am Kühlschrank" },
    ],
  },
  {
    id: "train",
    label: "Training",
    blurb: "Kurze, liebevolle Einheiten, die du wirklich umsetzen kannst.",
    items: [
      { to: "/train", label: "Die heutige Einheit", hint: "Fünf Minuten reichen völlig" },
      { to: "/train/library", label: "Übungsbibliothek", hint: "Schritt für Schritt, mit Bildern" },
      { to: "/train/journey", label: "Dein Weg", hint: "Wie weit du schon gekommen bist" },
      { to: "/train/setup", label: "Details deines Hundes", hint: "Alter, Rasse, woran du arbeitest" },
    ],
  },
  {
    id: "travel",
    label: "Reisen",
    blurb: "Autofahrten, Wanderungen und Grenzübertritte – sicher.",
    items: [
      { to: "/travel", label: "Reisen & Abenteuer", hint: "Wohin es geht" },
      { to: "/travel/car", label: "Im Auto", hint: "Sichere Lösungen und Reiseübelkeit" },
      { to: "/travel/outdoors", label: "Draußen", hint: "Wanderungen, Pfoten, Hitze und Kälte" },
      { to: "/travel/abroad", label: "Reisen ins Ausland", hint: "Länderübergreifender Check" },
    ],
  },
];

const fr: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Adopter un chien",
    blurb: "Vous y pensez ? Commencez ici et prenez votre temps.",
    items: [
      { to: "/get-a-dog", label: "Tout le parcours", hint: "De la première idée à la première nuit" },
      { to: "/get-a-dog/ready", label: "Suis-je prêt(e) ?", hint: "Un regard honnête sur votre quotidien" },
      { to: "/find-my-dog", label: "Trouver mon chien", hint: "Deux minutes, sans inscription" },
      { to: "/get-a-dog/choose", label: "Bien choisir", hint: "Chiot ou adulte, éleveur ou refuge" },
      { to: "/get-a-dog/costs", label: "Quel budget prévoir ?", hint: "Avant, mensuel et les imprévus" },
      { to: "/get-a-dog/prepare", label: "Se préparer", hint: "Votre maison, vos journées, votre liste" },
      { to: "/get-a-dog/welcome-home", label: "Bienvenue à la maison", hint: "Le premier jour et la première semaine" },
    ],
  },
  {
    id: "breeds",
    label: "Races",
    blurb: "Chaque race décrite honnêtement — les joies et les défis.",
    items: [
      { to: "/breeds", label: "Toutes les races", hint: "Parcourir et filtrer" },
      { to: "/compare", label: "Comparer deux races", hint: "Côte à côte, sans détours" },
      { to: "/dog-life", label: "La vie de chien près de chez vous", hint: "Balades, météo et lieux du quotidien" },
      { to: "/guides", label: "Guides", hint: "Lectures apaisantes sur la vie avec un chien" },
    ],
  },
  {
    id: "my-dog",
    label: "Mon chien",
    blurb: "L'espace dédié à la vie de tous les jours de votre compagnon.",
    items: [
      { to: "/my-dog", label: "Aujourd'hui", hint: "Ce qui vaut la peine aujourd'hui" },
      { to: "/my-dog/week", label: "Ma semaine", hint: "Un rythme hebdomadaire doux" },
      { to: "/my-dog/nutrition", label: "Alimentation et portions", hint: "Quelle quantité, en gros" },
      { to: "/my-dog/food", label: "Mon chien peut-il manger ça ?", hint: "Sûr, avec prudence, à éviter" },
      { to: "/my-dog/weight", label: "Poids et silhouette", hint: "Suivi bienveillant" },
      { to: "/my-dog/vet", label: "Vétérinaire et contacts", hint: "Visites et numéros de téléphone" },
      { to: "/my-dog/print", label: "Imprimer et sauvegarder", hint: "Du papier à afficher sur le frigo" },
    ],
  },
  {
    id: "train",
    label: "Éducation",
    blurb: "Des séances courtes et bienveillantes que vous pouvez vraiment faire.",
    items: [
      { to: "/train", label: "Séance du jour", hint: "Cinq minutes suffisent amplement" },
      { to: "/train/library", label: "Bibliothèque d'exercices", hint: "Pas à pas, avec des images" },
      { to: "/train/journey", label: "Votre parcours", hint: "Le chemin parcouru" },
      { to: "/train/setup", label: "Détails de votre chien", hint: "Âge, race, sur quoi vous travaillez" },
    ],
  },
  {
    id: "travel",
    label: "Voyages",
    blurb: "Trajets en voiture, randonnées et passages de frontières — en toute sécurité.",
    items: [
      { to: "/travel", label: "Voyages et aventures", hint: "Où vous allez" },
      { to: "/travel/car", label: "En voiture", hint: "Aménagements sûrs et mal des transports" },
      { to: "/travel/outdoors", label: "En extérieur", hint: "Randonnées, pattes, chaleur et froid" },
      { to: "/travel/abroad", label: "Voyager à l'étranger", hint: "Vérificateur pays par pays" },
    ],
  },
];

const nl: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Een hond adopteren",
    blurb: "Er over nadenken? Begin hier en neem je tijd.",
    items: [
      { to: "/get-a-dog", label: "De hele reis", hint: "Van het eerste idee tot de eerste nacht" },
      { to: "/get-a-dog/ready", label: "Ben ik er klaar voor?", hint: "Een eerlijke blik op je dagelijkse leven" },
      { to: "/find-my-dog", label: "Vind mijn hond", hint: "Twee minuten, geen account nodig" },
      { to: "/get-a-dog/choose", label: "Goed kiezen", hint: "Puppy of volwassen, fokker of asiel" },
      { to: "/get-a-dog/costs", label: "Wat het kost", hint: "Vooraf, maandelijks en de verrassingen" },
      { to: "/get-a-dog/prepare", label: "Je voorbereiden", hint: "Je huis, je dagen, je boodschappenlijstje" },
      { to: "/get-a-dog/welcome-home", label: "Welkom thuis", hint: "De eerste dag en de eerste week" },
    ],
  },
  {
    id: "breeds",
    label: "Rassen",
    blurb: "Elk ras eerlijk beschreven — de leuke kanten en de minder leuke kanten.",
    items: [
      { to: "/breeds", label: "Alle rassen", hint: "Blader en filter" },
      { to: "/compare", label: "Vergelijk twee", hint: "Naast elkaar, zonder poespas" },
      { to: "/dog-life", label: "Hondenleven bij jou in de buurt", hint: "Wandelingen, weer en dagelijkse plekken" },
      { to: "/guides", label: "Gidsen", hint: "Rustig lezen over leven met een hond" },
    ],
  },
  {
    id: "my-dog",
    label: "Mijn Hond",
    blurb: "De plek voor het dagelijkse leven van je eigen hond.",
    items: [
      { to: "/my-dog", label: "Vandaag", hint: "Wat vandaag de moeite waard is" },
      { to: "/my-dog/week", label: "Mijn week", hint: "Een rustig weekritme" },
      { to: "/my-dog/nutrition", label: "Voer & porties", hint: "Hoeveel, ongeveer" },
      { to: "/my-dog/food", label: "Mag mijn hond dit eten?", hint: "Veilig, voorzichtig, vermijden" },
      { to: "/my-dog/weight", label: "Gewicht & lichaam", hint: "Volg het vriendelijk" },
      { to: "/my-dog/vet", label: "Dierenarts & contacten", hint: "Bezoeken en telefoonnummers" },
      { to: "/my-dog/print", label: "Print & bewaar", hint: "Papier dat je op de koelkast kunt plakken" },
    ],
  },
  {
    id: "train",
    label: "Trainen",
    blurb: "Korte, vriendelijke oefeningen die je echt zelf kunt doen.",
    items: [
      { to: "/train", label: "Oefening van vandaag", hint: "Vijf minuten is genoeg" },
      { to: "/train/library", label: "Lesbibliotheek", hint: "Stap voor stap, met foto's" },
      { to: "/train/journey", label: "Jouw reis", hint: "Hoe ver je al bent gekomen" },
      { to: "/train/setup", label: "Details van je hond", hint: "Leeftijd, ras, waar je aan werkt" },
    ],
  },
  {
    id: "travel",
    label: "Reizen",
    blurb: "Autotrips, wandelingen en grensovergangen — veilig.",
    items: [
      { to: "/travel", label: "Reizen & avonturen", hint: "Waar je naartoe gaat" },
      { to: "/travel/car", label: "In de auto", hint: "Veilige opstellingen en wagenziekte" },
      { to: "/travel/outdoors", label: "Buiten", hint: "Wandelingen, poten, hitte en kou" },
      { to: "/travel/abroad", label: "Reizen naar het buitenland", hint: "Land-naar-land checker" },
    ],
  },
];

export const navGroupsByLocale = { en, no, pl, dk, se, fi, de, fr, nl };

/** The navigation in the reader's language. */
export function useNavGroups(): NavGroup[] {
  return useCopy(navGroupsByLocale);
}

/** English fallback, for anything outside a React render. */
export const navGroups = en;
