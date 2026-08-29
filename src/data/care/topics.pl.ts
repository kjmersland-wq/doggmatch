import type { CareTopic } from "./types";

const vetOrgs = {
  wsava: { label: "Globalne wytyczne dotyczące żywienia i higieny jamy ustnej", org: "World Small Animal Veterinary Association" },
  avdc: { label: "Poradnik pielęgnacji zębów w domu", org: "American Veterinary Dental College" },
  rspca: { label: "Porady dotyczące codziennej pielęgnacji psa", org: "RSPCA" },
  aaha: { label: "Wytyczne dotyczące etapów życia i profilaktyki", org: "American Animal Hospital Association" },
  bva: { label: "Porady dla opiekunów dotyczące zdrowia i dobrostanu", org: "British Veterinary Association" },
} as const;

export const careTopicsPl: CareTopic[] = [
  /* ------------------------------------------------------------- Dental */
  {
    id: "dental",
    title: "Zdrowa buzia ma znaczenie",
    promise: "Kilka spokojnych minut, kilka razy w tygodniu, i pyszczek twojego psa będzie o wiele bardziej komfortowy.",
    category: "dental",
    intro: [
      "Większość psów ma jakiś problem z zębami już w wieku kilku lat, a łatwo to przeoczyć, bo psy rzadko robią z tego wielką sprawę.",
      "Dobra wiadomość: szczotkowanie to najbardziej skuteczna rzecz, jaką możesz zrobić w domu, a niemal każdy pies może się do tego przyzwyczaić, jeśli robisz to powoli.",
    ],
    steps: [
      {
        title: "Najpierw niech się przyjrzy",
        body: "Połóż szczoteczkę na podłodze i pozwól psu ją obwąchać. Nic więcej się nie dzieje. Ten krok jest ważniejszy, niż się wydaje.",
        visual: "brush-1",
      },
      {
        title: "Dotknij pyszczka, potem zębów",
        body: "Unieś wargę na sekundę, pochwal, puść. Potem przejedź palcem po zewnętrznej stronie zębów. Krótko i wesoło.",
        visual: "brush-1",
      },
      {
        title: "Dodaj pastę do zębów dla psów",
        body: "Pozwól psu zlizać trochę z palca — większość ma smak mięsny lub drobiowy i psy zwykle je lubią. Nigdy nie używaj pasty do zębów dla ludzi; nie jest przeznaczona do połykania.",
      },
      {
        title: "Wyszczotkuj kilka zębów",
        body: "Małe kółka po zewnętrznej powierzchni, tam gdzie najbardziej odkłada się płytka. Największe znaczenie mają zęby trzonowe z tyłu i kły. Wewnętrzne powierzchnie mogą poczekać — odkłada się na nich mniej osadu, a większość psów tego nie lubi.",
        visual: "brush-2",
      },
      {
        title: "Skończ, zanim pies będzie miał dość",
        body: "Trzydzieści sekund to dobra sesja na początek. Przerwij, gdy pies wciąż uważa, że to w porządku, i buduj od tego dalej.",
      },
    ],
    routine: [
      { day: "Dzień 1", body: "Pozwól psu obwąchać szczoteczkę. To cała sesja." },
      { day: "Dzień 2", body: "Delikatnie dotknij pyszczka na sekundę lub dwie, potem smakołyk." },
      { day: "Dzień 3", body: "Odrobina bezpiecznej dla psa pasty do zębów z palca." },
      { day: "Dzień 4", body: "Przejedź palcem lub szczoteczką po kilku przednich zębach." },
      { day: "Dzień 5", body: "Wyszczotkuj krótko jedną stronę pyszczka." },
      { day: "Dzień 6", body: "Obie strony, wciąż krótko. Chwal na bieżąco." },
      { day: "Dzień 7", body: "Zwykła, krótka sesja. Potem kontynuuj, najlepiej niemal codziennie." },
    ],
    sections: [
      {
        title: "Co naprawdę pomaga",
        body: "Szczotkowanie ma za sobą najsilniejsze dowody. Wszystko inne to przydatny dodatek, a nie zamiennik.",
        points: [
          "Miękka szczoteczka, nakładka na palec albo nawet gazik — cokolwiek pies toleruje",
          "Tylko pasta do zębów dla psów",
          "Codziennie jest idealnie, ale kilka razy w tygodniu też pomaga",
          "Gryzaki i karmy z pieczęcią weterynaryjnej organizacji dentystycznej mogą wspomagać szczotkowanie",
        ],
      },
      {
        title: "O kościach i twardych gryzakach",
        body: "Twarde gryzienie nie czyści zębów w niezawodny sposób, a bardzo twarde przedmioty często powodują pęknięcia zębów — rogi, kopyta, twardy nylon, gotowane kości, kostki lodu.",
        points: [
          "Ogólna zasada: jeśli nie zostawisz wgniecenia paznokciem kciuka, przedmiot jest pewnie za twardy",
          "Gotowane kości mogą się rozszczepiać i lepiej ich unikać",
          "Zawsze pilnuj psa przy gryzakach i zabierz je, gdy zrobią się na tyle małe, że można je połknąć",
          "Weterynarz powie ci, które gryzaki lokalnie sprawiają najwięcej problemów",
        ],
      },
      {
        title: "Profesjonalne czyszczenie",
        body: "Część osadu można usunąć tylko w znieczuleniu, ze zdjęciami rentgenowskimi pokazującymi, co dzieje się pod linią dziąsła. To nie porażka z twojej strony — to część normalnej opieki dla wielu psów.",
      },
    ],
    watchFor: [
      "Uporczywie nieprzyjemny oddech, a nie zwykły \"psi\" zapach",
      "Czerwone, obrzmiałe lub krwawiące dziąsła",
      "Żucie tylko po jednej stronie albo upuszczanie jedzenia",
      "Złamany lub przebarwiony ząb",
      "Więcej ślinienia niż zwykle",
      "Łapanie się łapą za pysk albo odwracanie głowy, gdy dotykasz jego pyszczka",
      "Obrzęk na pysku lub pod okiem",
    ],
    whenToAskVet:
      "Jeśli zauważysz coś z tego, warto umówić wizytę. Ból zęba łatwo przeoczyć, bo większość psów mimo bólu dalej normalnie je.",
    ageNotes: {
      puppy: "Szczenięta tracą mleczne zęby od około czwartego miesiąca życia. Zacznij oswajanie już teraz — szczeniak, dla którego szczoteczka to coś normalnego, to prezent dla ciebie na przyszłość.",
      senior: "Starsze pyszczki wymagają częstszych kontroli, a ból zęba to częsty powód, dla którego starszy pies wydaje się wolniejszy albo bardziej marudny.",
    },
    sources: [vetOrgs.avdc, vetOrgs.wsava],
  },

  /* --------------------------------------------------------- Coat & skin */
  {
    id: "coat",
    title: "Sierść i skóra",
    promise: "Poznaj, co jest normą u twojego psa, a szybko zauważysz, kiedy coś nie jest w porządku.",
    category: "coat",
    intro: [
      "Szczotkowanie to nie tylko wygląd. Właśnie dzięki niemu większość osób pierwsza zauważa guzek, bolesne miejsce, kleszcza czy filc tworzący się w niewygodnym miejscu.",
      "To, jak często, zależy dużo bardziej od typu sierści niż od rasy z metryczki — a psy mieszane mogą mieć różnie.",
    ],
    sections: [
      {
        title: "Krótka, gładka sierść",
        body: "Szybkie szczotkowanie raz w tygodniu gumową rękawicą lub szczotką z włosiem ogranicza wypadanie sierści i większości psów sprawia przyjemność.",
        points: ["Linieje przez cały rok, często bardziej, niż ludzie się spodziewają", "Kąp tylko wtedy, gdy pies naprawdę jest brudny", "Skórę łatwo obejrzeć — wykorzystaj to"],
      },
      {
        title: "Długa sierść",
        body: "Wymaga porządnego szczotkowania kilka razy w tygodniu, aż do samej skóry, a nie tylko po wierzchu.",
        points: ["Filc tworzy się za uszami, pod nogami i wokół obroży", "Grzebień pokaże ci prawdę, której szczotka nie pokaże", "Przycinanie sierści przy łapach i z tyłu utrzymuje czystość"],
      },
      {
        title: "Kręcona sierść",
        body: "Kręcona sierść mało linieje, co oznacza, że wypadające włosy zostają w niej i cicho tworzą filc.",
        points: ["Szczotkuj i czesz co dzień lub co drugi dzień", "Regularne wizyty u groomera, zwykle co sześć do ośmiu tygodni", "Filc ciągnie skórę i boli — usuwaj go wcześnie"],
      },
      {
        title: "Podwójna sierść",
        body: "Miękki podszerstek pod bardziej szorstkim włosem okrywowym. Wylinka jest intensywna dwa razy w roku i znajdziesz sierść wszędzie.",
        points: ["Grabie do podszerstka bardzo się przydają wiosną i jesienią", "Nie goli się podwójnej sierści, chyba że zaleci to weterynarz", "Dużo szczotkowania jest lepsze niż częste kąpiele"],
      },
      {
        title: "Sierść szorstka (drutowata)",
        body: "Szorstka, odporna na warunki atmosferyczne sierść zachowuje swoją strukturę dzięki wyskubywaniu ręcznemu, a nie strzyżeniu.",
        points: ["Wyczesuj brodę i nogi", "Strzyżenie z czasem zmiękcza sierść", "Warto znaleźć groomera, który zna się na tym typie sierści"],
      },
    ],
    steps: [
      {
        title: "Zacznij od rąk",
        body: "Przejedź rękami po psie, zanim wyciągniesz szczotkę. Sprawdzasz w ten sposób guzki, strupki, bolesne miejsca i wszystko, co utknęło w sierści.",
      },
      {
        title: "Szczotkuj partiami",
        body: "Pracuj na małych fragmentach, aż do samej skóry. Trzymaj włosy nad filcem, żeby nie ciągnąć za skórę podczas pracy.",
      },
      {
        title: "Sprawdź niewygodne miejsca",
        body: "Za uszami, pod pachami, tył nóg, ogon i pod obrożą. Filc niemal zawsze zaczyna się tam, gdzie coś się ociera.",
      },
      {
        title: "Zakończ czymś przyjemnym",
        body: "Smakołyk, drapanie, zabawa. Pielęgnacja powinna być czymś, na co pies czeka, a nie czymś, co znosi.",
      },
    ],
    watchFor: [
      "Drapanie, lizanie lub gryzienie się, które jest nowe albo stałe",
      "Czerwona skóra, krostki, strupy lub gorące miejsce",
      "Przerzedzająca się sierść albo wypadająca w kępkach",
      "Zapach, którego wcześniej nie było",
      "Łuszcząca się lub tłusta skóra",
      "Guzki, albo guzek, który się zmienił",
    ],
    whenToAskVet:
      "Świąd ma wiele możliwych przyczyn — pasożyty, alergie, infekcje, czasem coś zupełnie innego. Jeśli się utrzymuje, weterynarz pomoże ustalić przyczynę, zamiast zgadywania z szamponami.",
    ageNotes: {
      puppy: "Sierść szczeniąt zmienia się wraz z wiekiem. Szczotkowanie teraz to głównie nauka, że dotykanie jest przyjemne.",
      senior: "Starsze psy często pielęgnują się mniej same i mają skórę bardziej łuszczącą się lub guzkowatą. Delikatne, częste szczotkowanie sprawdza się lepiej niż długie sesje.",
    },
    sources: [vetOrgs.rspca, vetOrgs.bva],
  },

  /* ---------------------------------------------------------- Paws & nails */
  {
    id: "paws",
    title: "Łapy i pazury",
    promise: "Trzydzieści sekund po spacerze wystarczy, by wychwycić większość drobnych problemów, zanim staną się bolesne.",
    category: "paws",
    intro: [
      "Łapy sporo znoszą, a psy są w ich sprawie bardzo cierpliwe. Szybkie spojrzenie po spacerze to jeden z najłatwiejszych nawyków do wyrobienia.",
      "Zbyt długie pazury zmieniają sposób, w jaki pies stoi, i mogą utrudniać chodzenie, więc warto nad nimi panować.",
    ],
    steps: [
      {
        title: "Trzymaj łapę delikatnie",
        body: "Podeprzyj ją od spodu, zamiast ściskać. Jeśli pies się odsuwa, pozwól mu na to — spróbuj ponownie później, ze smakołykiem w drugiej ręce.",
        visual: "paw-check",
      },
      {
        title: "Zajrzyj między poduszki",
        body: "Nasiona traw, żwir, sól drogowa i drobne kamyki uwielbiają się tam gromadzić. Zimą płucz i osuszaj łapy po chodnikach posypanych solą.",
        visual: "paw-check",
      },
      {
        title: "Sprawdź poduszki",
        body: "Powinny być elastyczne. Pęknięcia, rozerwania, zaczerwienienie albo łapa cieplejsza od pozostałych zasługują na bliższe przyjrzenie się.",
      },
      {
        title: "Sprawdź sierść między poduszkami",
        body: "U psów o owłosionych łapach łatwo się filcuje i zbiera zanieczyszczenia. Ostrożne przycięcie na wysokości poduszek pomaga też z przyczepnością.",
      },
      {
        title: "Przycinaj po odrobinie",
        body: "Zdejmuj tylko sam czubek, potem przerwij. Mało i często jest dużo bezpieczniejsze niż jedna duża sesja — nagradzaj spokojnie przez cały czas.",
        visual: "nails",
      },
    ],
    sections: [
      {
        title: "Pazury bez dramatu",
        body: "Jeśli słyszysz stukanie na twardej podłodze, pazury są pewnie trochę za długie. Większość psów potrzebuje przycięcia co trzy do sześciu tygodni.",
        points: [
          "Dotykaj łap codziennie, żeby cążki nie były zaskoczeniem",
          "Przycinaj tylko sam czubek — żywica jest dalej, niż ludziom się wydaje",
          "Ciemne pazury: obcinaj mniejsze plasterki i przestań, gdy przecięta powierzchnia zaczyna wyglądać na kredowobiałą",
          "Przerwij, jeśli pies się denerwuje. Nic tu nie jest warte walki",
          "Może to zrobić groomer albo weterynarz i nie ma w tym nic wstydliwego",
        ],
      },
      {
        title: "Chodniki i pogoda",
        body: "Przyłóż grzbiet dłoni do chodnika na siedem sekund. Jeśli nie wytrzymasz, jest za gorąco dla łap — idź na spacer wcześnie rano lub wieczorem.",
        points: ["Zimowa sól i piasek drażnią poduszki — płucz i osuszaj po spacerze", "Długie spacery po nierównym terenie mogą obetrzeć poduszki", "Głęboki śnieg zbija się w kulki lodu w owłosionych łapach"],
      },
    ],
    watchFor: [
      "Kulawizna albo ciągłe lizanie jednej łapy",
      "Popękana, krwawiąca lub obrzmiała poduszka",
      "Naderwany lub złamany pazur",
      "Zaczerwienienie lub nieprzyjemny zapach między palcami",
      "Niechęć do chodzenia po powierzchni, po której wcześniej nie było problemu",
    ],
    whenToAskVet:
      "Naderwany pazur, głębokie skaleczenie albo utrzymująca się kulawizna to powód do telefonu. Jeśli obetniesz pazur za krótko i zacznie krwawić, zwykle pomaga puder hemostatyczny i delikatny ucisk — zadzwoń do weterynarza, jeśli krwawienie nie ustaje.",
    sources: [vetOrgs.rspca, vetOrgs.aaha],
  },

  /* -------------------------------------------------------------- Ears */
  {
    id: "ears",
    title: "Uszy",
    promise: "Zajrzyj, powąchaj. To niemal cała pielęgnacja uszu.",
    category: "health",
    intro: [
      "Zdrowe uszy w środku są bladoróżowe i prawie bez zapachu. Znajomość tej normy to cały sekret.",
      "Uszy nie potrzebują głębokiego czyszczenia jako rutyny. Grzebanie wewnątrz zdrowego ucha zwykle wywołuje problemy, którym miało zapobiegać.",
    ],
    sections: [
      {
        title: "Cotygodniowe spojrzenie",
        body: "Unieś małżowinę, zajrzyj do środka, powąchaj. Kilka sekund, skoro i tak już razem siedzicie.",
        points: ["Bladoróżowy kolor, brak silnego zapachu, brak wydzieliny", "Trochę woszczyny to norma", "Osusz uszy po pływaniu albo kąpieli"],
      },
      {
        title: "Jeśli weterynarz dał ci środek do czyszczenia",
        body: "Używaj tego konkretnego produktu zgodnie z instrukcją. Nigdy nie wpychaj patyczków kosmetycznych w głąb kanału słuchowego — wepchniesz zanieczyszczenia jeszcze głębiej.",
      },
      {
        title: "Uszy wymagające większej uwagi",
        body: "Opadające uszy, owłosione kanały słuchowe i psy, które dużo pływają, są bardziej narażone na problemy. To kwestia konkretnego psa, nie tylko rasy.",
      },
    ],
    watchFor: [
      "Drożdżowy lub kwaśny zapach",
      "Zaczerwienienie lub obrzęk wewnątrz małżowiny",
      "Brązowa, żółta lub krwista wydzielina",
      "Drapanie ucha albo ocieranie go o kanapę",
      "Potrząsanie głową lub przechylanie jej",
      "Cofanie się przy dotyku ucha",
    ],
    whenToAskVet:
      "Zapalenia uszu bolą i rzadko ustępują same. Jeśli coś wygląda albo pachnie nie tak, pokaż to weterynarzowi, zamiast próbować kropli zalegających w szufladzie.",
    sources: [vetOrgs.rspca],
  },

  /* -------------------------------------------------------------- Eyes */
  {
    id: "eyes",
    title: "Oczy",
    promise: "Jasne, czyste i równe. Tego właśnie szukasz.",
    category: "health",
    intro: [
      "Szybkie spojrzenie na oczy psa, kiedy witacie się rano, wystarcza na większość dni.",
      "Oczy potrafią szybko przejść od lekkiego podrażnienia do poważnego bólu, więc warto być tu trochę czujnym.",
    ],
    sections: [
      {
        title: "Jak wygląda norma",
        body: "Czyste i jasne, białka bez przekrwienia, źrenice równej wielkości, brak mrużenia. Trochę przezroczystej lub szarej wydzieliny łzowej w kącikach to zwykle nic groźnego.",
      },
      {
        title: "Codzienna pielęgnacja",
        body: "Zetrzyj zaschniętą wydzielinę wilgotną watą i czystą wodą, jedna przecierka na oko. Trzymaj długą sierść przyciętą z dala od oczu. Nie stosuj kropli do oczu przeznaczonych dla ludzi.",
      },
      {
        title: "Psy o płaskich pyszczkach",
        body: "Wystające oczy są bardziej narażone na urazy, wysychanie i owrzodzenia. Jeśli twój pies ma krótki pyszczek, zaglądaj trochę częściej.",
      },
    ],
    watchFor: [
      "Mrużenie oka lub trzymanie go zamkniętego",
      "Utrzymujące się zaczerwienienie",
      "Zielona lub żółta wydzielina",
      "Zmętnienie lub zmiana koloru",
      "Ocieranie pyszczka o podłogę",
      "Każda nagła zmiana albo wpadanie na przedmioty",
    ],
    whenToAskVet:
      "Bolesne albo nagle zmienione oko to telefon jeszcze tego samego dnia. Problemy ze wzrokiem mają lepsze rokowania, gdy są wykryte wcześnie.",
    sources: [vetOrgs.bva],
  },

  /* ---------------------------------------------------- Body condition */
  {
    id: "body-condition",
    title: "Kondycja ciała",
    promise: "Liczba na wadze znaczy mniej niż to, jak pies wygląda i jak się czuje pod twoimi rękami.",
    category: "weight",
    intro: [
      "Dwa psy o tej samej wadze mogą być w zupełnie innej formie. Kondycję ciała weterynarze oceniają w ten sposób, i możesz się tego nauczyć w około minutę.",
      "To wskazówka, nie diagnoza. Rasa i budowa zmieniają, jak wygląda 'właściwa' kondycja — chart i labrador w idealnej formie wyglądają zupełnie inaczej.",
    ],
    steps: [
      {
        title: "Wyczuj żebra",
        body: "Przesuń opuszki palców wzdłuż boku psa. Powinieneś łatwo wyczuć żebra pod cienką warstwą, trochę jak wyczuwanie kości na grzbiecie własnej dłoni.",
        visual: "body-condition",
      },
      {
        title: "Spójrz z góry",
        body: "Stojąc nad psem, poszukaj delikatnego zwężenia za żebrami. Prosty lub wybrzuszony kontur sugeruje trochę nadwyżki.",
        visual: "body-condition",
      },
      {
        title: "Spójrz z boku",
        body: "Brzuch powinien podciągać się w stronę tylnych łap, a nie biec równo z klatką piersiową.",
      },
      {
        title: "Rób to co miesiąc",
        body: "Zmiany pełzną powoli. Robienie tego tego samego dnia każdego miesiąca sprawia, że dryf staje się widoczny, gdy jest jeszcze niewielki.",
      },
    ],
    sections: [
      {
        title: "Trochę za dużo",
        body: "Żebra trudne do wyczucia, talia trudna do zauważenia, brzuch biegnie płasko. Małe zmiany działają: zmierz porcję jedzenia, policz smakołyki, dodaj dziesięć minut spaceru.",
      },
      {
        title: "W sam raz",
        body: "Żebra łatwe do wyczucia, widoczna talia, podciągnięty brzuch. Rób dalej to, co robisz.",
      },
      {
        title: "Trochę za chudo",
        body: "Widoczne żebra, kręgosłup lub biodra, bardzo mało tkanki okrywowej. Warto zrobić kontrolę u weterynarza, a nie po prostu dokładać jedzenia — niewyjaśniona utrata wagi zasługuje na przyjrzenie się.",
      },
    ],
    whenToAskVet:
      "Weterynarz pomoże prawidłowo ocenić kondycję ciała i omówi plan, jeśli trzeba zrzucić wagę. Nagłe lub niewyjaśnione zmiany wagi zawsze zasługują na rozmowę.",
    sources: [vetOrgs.wsava, vetOrgs.aaha],
  },

  /* -------------------------------------------------------- Wellbeing */
  {
    id: "wellbeing",
    title: "Dobry dzień dla psa",
    promise: "Spacer, trochę zabawy, jedzenie, dużo snu i czas z tobą znaczą bardzo dużo.",
    category: "wellbeing",
    intro: [
      "Dobre życie psa nie musi być skomplikowane ani drogie. Większość tego to rutyna, towarzystwo i wystarczająco dużo odpoczynku.",
      "Jeśli masz zmienić tylko jedną rzecz, zwykle jest to sen. Wiele 'problemów z zachowaniem' to zmęczony pies, który nigdy nie ma szansy naprawdę się wyłączyć.",
    ],
    sections: [
      {
        title: "Sen",
        body: "Psy śpią o wiele więcej, niż większości ludzi się wydaje. Szczenięta często potrzebują 18 do 20 godzin dziennie, dorosłe psy około 12 do 14, a starsze zwykle jeszcze więcej.",
        points: ["Spokojne miejsce z dala od drzwi wejściowych i ruchu w domu", "Drzemki w ciągu dnia to norma, nie lenistwo", "Ciągła stymulacja jest dla psa męcząca, a nie wzbogacająca"],
      },
      {
        title: "Węszenie i myślenie",
        body: "Dziesięć minut porządnego węszenia może uspokoić psa bardziej niż godzina biegania. Pozwól, żeby spacery czasem były powolne.",
        points: ["Rozsyp kolację w trawie", "Ukryj smakołyki w pokoju i pozwól psu ich poszukać", "Zabawka z jedzeniem albo zwinięty ręcznik z kawałkami karmy w środku", "Nowe, spokojne miejsca do zwiedzania"],
      },
      {
        title: "Towarzystwo",
        body: "Psy są zwierzętami społecznymi. Większość ma trudności z długimi okresami samotności, a bycie samemu to umiejętność, której trzeba uczyć stopniowo, a nie zakładać z góry.",
      },
      {
        title: "Przewidywalne dni",
        body: "Mniej więcej regularne spacery, posiłki i pory snu ułatwiają odczytanie dnia. Nie musi to być co do minuty.",
      },
      {
        title: "Spokojny czas",
        body: "Czas, kiedy niczego się od psa nie wymaga — bez treningu, bez gości, bez zabaw. Każdy pies potrzebuje trochę takiego czasu w ciągu dnia.",
      },
    ],
    ageNotes: {
      puppy: "Szczenięta szybko się przemęczają, a to wygląda jak niegrzeczność — gryzienie, szalone bieganie, ignorowanie wszystkiego. Zwykle pomaga więcej snu.",
      adolescent: "Nastoletnie psy potrzebują prawdziwych ujść energii: węszenia, żucia, treningu, zabawy. Nuda objawia się zamiast tego gryzieniem twoich rzeczy.",
      senior: "Krótsze, częstsze spacery, miększe posłanie i delikatne zagadki umysłowe pasują starszym psom bardziej niż długie wyjścia.",
    },
    sources: [vetOrgs.rspca],
  },

  /* --------------------------------------------------- Everyday check */
  {
    id: "everyday-check",
    title: "Poznaj, co jest normą u twojego psa",
    promise: "Zauważysz zmianę dużo wcześniej niż ktokolwiek inny. To naprawdę cenne.",
    category: "health",
    intro: [
      "Nie musisz badać swojego psa. Wystarczy ogólne wyczucie jego normy — ile je, pije, rusza się i śpi.",
      "Kiedy coś się zmienia, możliwość powiedzenia 'to zaczęło się we wtorek' bardzo pomaga weterynarzowi.",
    ],
    sections: [
      {
        title: "Apetyt",
        body: "Większość psów je dość przewidywalnie. Ominięcie jednego posiłku się zdarza; brak jedzenia przez dzień lub dłużej zasługuje na uwagę.",
      },
      {
        title: "Picie",
        body: "Wyraźny wzrost lub spadek ilości wypijanej wody to jeden z bardziej użytecznych wczesnych sygnałów. Jeśli nie jesteś pewien, zmierz przez kilka dni, ile trafia do miski.",
      },
      {
        title: "Energia",
        body: "Spowolnienie to nie tylko wiek. Niechęć do schodów, sztywność po odpoczynku lub mniejsze zainteresowanie spacerami to często dyskomfort.",
      },
      {
        title: "Nawyki toaletowe",
        body: "Zwracaj uwagę na zmiany częstotliwości, parcie na stolec albo luźny stolec trwający dłużej niż dzień. Niezbyt przyjemny temat, ale przydatny.",
      },
      {
        title: "Waga i sierść",
        body: "Comiesięczne ważenie, comiesięczne sprawdzenie rękami. Jakość sierści często zmienia się jako pierwsza.",
      },
      {
        title: "Zachowanie",
        body: "Chowanie się, lgnięcie do ciebie, rozdrażnienie lub niepokój w nocy mogą być oznakami bólu, a nie nastroju.",
      },
    ],
    whenToAskVet:
      "Jedna drobna zmiana jednego dnia to zwykle nic poważnego. Zmiana trwająca dłużej niż dzień lub dwa, albo kilka zmian naraz, jest warta telefonu.",
    sources: [vetOrgs.aaha],
  },

  /* -------------------------------------------- Something seems different */
  {
    id: "something-different",
    title: "Coś wydaje się inne?",
    promise: "Spokojne miejsce, żeby ustalić, czy to sytuacja \"poczekaj i obserwuj\", czy \"zadzwoń do weterynarza\".",
    category: "health",
    intro: [
      "To ogólne informacje, nie diagnoza. Niektóre zmiany są niegroźne, a inne nie, i różnica często nie jest widoczna z zewnątrz.",
      "Jeśli się martwisz, albo zmiana pojawiła się nagle lub gwałtownie, skontaktuj się z weterynarzem. Sam niepokój to wystarczający powód do telefonu.",
    ],
    sections: [
      {
        title: "Nie chce jeść",
        body: "Jeden pominięty posiłek u psa, który poza tym jest w dobrej formie, to coś częstego. Zadzwoń do weterynarza, jeśli trwa to dłużej niż około 24 godziny, jeśli szczeniak pomija posiłki, albo jeśli towarzyszą temu wymioty, ospałość lub wzdęty brzuch.",
      },
      {
        title: "Pije dużo więcej lub mniej",
        body: "Wyraźna zmiana trwająca dłużej niż kilka dni jest warta zbadania, a nie tylko obserwacji. Zanotuj sobie mniej więcej ile.",
      },
      {
        title: "Wymioty",
        body: "Jeden epizod wymiotów, po którym pies wraca do normy, często sam mija. Zadzwoń, jeśli powtarzają się, jeśli pies nie jest w stanie utrzymać wody, jeśli jest krew, jeśli usiłuje zwymiotować, ale nic nie wychodzi, albo jeśli mógł coś połknąć.",
      },
      {
        title: "Biegunka",
        body: "Łagodna i krótkotrwała to coś częstego. Zadzwoń, jeśli trwa dłużej niż dzień lub dwa, zawiera krew, albo towarzyszą jej wymioty, ból lub apatyczny, zmęczony pies — a wcześniej u szczeniąt i starszych psów, które szybko się odwadniają.",
      },
      {
        title: "Kaszel",
        body: "Sporadyczny kaszel po pociągnięciu smyczą to co innego niż kaszel, który się nie kończy. Uporczywy kaszel, kaszel w nocy albo jakiekolwiek trudności z oddychaniem wymagają wizyty u weterynarza.",
      },
      {
        title: "Świąd",
        body: "Ciągłe drapanie się, lizanie lub gryzienie jest nieprzyjemne i zwykle ma przyczynę wartą znalezienia — pasożyty, infekcja skóry albo alergia. Rzadko ustępuje samym szamponem.",
      },
      {
        title: "Kulawizna",
        body: "Lekką kulawiznę, która ustępuje w ciągu dnia po odpoczynku, można obserwować. Niekulejąca, ale niechętna do obciążania łapa, wyraźny ból, obrzęk lub utrzymująca się kulawizna powinny zostać sprawdzone.",
      },
      {
        title: "Nietypowe zmęczenie",
        body: "Spokojny dzień się zdarza. Pies, który nie chce wstać, jest niestabilny albo wyraźnie bardziej osowiały niż zwykle, powinien zostać sprawdzony niezwłocznie.",
      },
    ],
    whenToAskVet:
      "Twój weterynarz woli usłyszeć od ciebie wcześniej niż później. Opisanie, co się zmieniło, kiedy to się zaczęło i co jest inne niż zwykle, to dokładnie to, czego potrzebuje.",
    sources: [vetOrgs.bva, vetOrgs.aaha],
  },

  /* ---------------------------------------------------------- Emergency */
  {
    id: "emergency",
    title: "Kiedy nie można czekać",
    promise: "Krótka lista sytuacji, w których trzeba natychmiast zadzwonić do weterynarza, o każdej porze.",
    category: "health",
    intro: [
      "Trzymaj numer swojego weterynarza i najbliższej lecznicy dyżurnej w miejscu, do którego znajdziesz drogę bez zastanowienia. Zapisz je w telefonie już teraz.",
      "W tych sytuacjach: najpierw zadzwoń, potem jedź. Nie czekaj, żeby zobaczyć, jak sprawy się rozwiną, i nie próbuj domowych sposobów.",
    ],
    sections: [
      {
        title: "Zadzwoń do weterynarza natychmiast",
        body: "Każda z tych sytuacji oznacza potrzebę pilnej pomocy fachowej, dzień czy noc.",
        points: [
          "Trudności z oddychaniem, dławienie się, sine lub bardzo blade dziąsła",
          "Zapaść, utrata przytomności lub nagłe osłabienie",
          "Krwawienie, którego nie da się zatrzymać",
          "Podejrzenie zatrucia lub zjedzenie czegoś niebezpiecznego",
          "Napad drgawek albo powtarzające się napady",
          "Potrącenie przez samochód, upadek lub jakiekolwiek poważne obrażenie",
          "Parcie na mocz bez efektu",
          "Obrzmiały, twardy brzuch z odruchami wymiotnymi bez wymiotów",
          "Objawy udaru cieplnego: intensywne dyszenie, wyraźny niepokój, zapaść w upale",
          "Nagły, silny ból, albo pies, który w ogóle nie może się uspokoić",
        ],
      },
      {
        title: "Podejrzenie zatrucia",
        body: "Zadzwoń natychmiast do weterynarza lub na infolinię ds. zatruć zwierząt i podaj, co, ile i kiedy. Zabierz ze sobą opakowanie. Nie próbuj wywoływać wymiotów, chyba że każe ci to weterynarz — przy niektórych substancjach to tylko pogarsza sytuację.",
      },
      {
        title: "W drodze",
        body: "Zapewnij psu spokój, ciepło i bezruch. Jedź ostrożnie. Zadzwoń wcześniej, żeby lecznica była na was przygotowana.",
      },
    ],
    whenToAskVet:
      "Jeśli czytasz to i zastanawiasz się, czy to się liczy — zadzwoń. Nikomu w lecznicy weterynaryjnej nie przeszkadza telefon, który okazuje się drobiazgiem.",
    sources: [vetOrgs.bva, vetOrgs.rspca],
  },
];
