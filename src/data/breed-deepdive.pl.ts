import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

export const breedDeepDivePl: Partial<Record<BreedId, BreedDeepDive>> = {
  "labrador-retriever": {
    originalPurpose:
      "Labrador wywodzi się od psów wodnych z Nowej Fundlandii, a w Wielkiej Brytanii dopracowano go jako aportera, który z radością przynosi zwierzynę z lądu i z lodowatej wody. Stąd ta miłość do pływania.",
    healthConsiderations:
      "Dobry hodowca chętnie pokaże Ci wyniki badań stawów biodrowych i łokciowych oraz testy DNA w kierunku postępującego zaniku siatkówki (prcd-PRA) i zapaści wysiłkowej (EIC). Na co dzień najważniejsza jest waga: wiele labradorów ma wariant genu związany z większym apetytem, więc odmierzanie porcji pomaga im dłużej zachować formę.",
    poorMatchFor: [
      "Marzysz o kanapie bez psiej sierści",
      "Codzienny spacer i odrobina szkolenia trudno zmieściłyby się w Twoim tygodniu",
      "Pies zostawałby sam w domu przez cały dzień pracy, przez większość dni",
    ],
    keyTradeoffs: [
      "Cudownie łatwy w szkoleniu, bo jedzenie tak wiele dla niego znaczy, a ten sam apetyt oznacza pilnowanie linii",
      "Wita niemal każdego jak przyjaciela: wspaniałe towarzystwo, ale raczej nie pies stróżujący",
    ],
  },
  "french-bulldog": {
    originalPurpose:
      "Buldog francuski pochodzi od małych angielskich buldogów, które koronczarki zabrały do Francji w XIX wieku. Paryżanie się w nich zakochali i od tamtej pory są psami do towarzystwa.",
    healthConsiderations:
      "Ta urocza płaska twarz może utrudniać oddychanie (BOAS), więc zapytaj, czy rodzice mieli ocenę dróg oddechowych, i wybierz szczeniaka z dobrze otwartymi nozdrzami. Kręgosłup, fałdy skóry i uszy wymagają trochę więcej troski, a wiele miotów rodzi się przez cesarskie cięcie. Zaplanuj dobre ubezpieczenie i dbaj, by pies nie przegrzewał się w upały.",
    poorMatchFor: [
      "Szukasz towarzysza do biegania, wędrówek albo na upalne lato",
      "Niespodziewany rachunek od weterynarza na kilkanaście tysięcy złotych byłby dla Ciebie dużym obciążeniem",
      "Twoje mieszkanie latem mocno się nagrzewa i trudno je schłodzić",
    ],
    keyTradeoffs: [
      "Mały, cichy i zadowolony z krótkich spacerów, ale utrzymanie go w zdrowiu może kosztować więcej niż w przypadku niemal każdej innej rasy",
      "Twarz, która wszystkich rozczula, stoi też za większością jego problemów zdrowotnych",
    ],
  },
  "border-collie": {
    originalPurpose:
      "Border collie pochodzi ze wzgórz na pograniczu Anglii i Szkocji, gdzie zganiał owce na rozległych zboczach, reagując na sygnały pasterza stojącego daleko.",
    healthConsiderations:
      "Na szczęście to rasa o mocnym zdrowiu. Poproś o wyniki badań bioder, badanie oczu i testy DNA w kierunku anomalii oka collie (CEA), zespołu uwięzionych neutrofili (TNS) i neuronalnej ceroidolipofuscynozy. Zdarza się padaczka, a wiele psów jest wrażliwych na głośne dźwięki, więc spokojny dom bardzo pomaga.",
    poorMatchFor: [
      "Szukasz psa rodzinnego, któremu wystarczą spacery i który nie potrzebuje zajęcia dla głowy",
      "Mieszkasz przy ruchliwej ulicy, gdzie przejeżdżające auta i rowery kusiłyby do pogoni",
      "Leniwe weekendy na kanapie to Twój ideał",
    ],
    keyTradeoffs: [
      "Być może najbardziej pojętny pies na świecie, a bez zadania sam wymyśli sobie projekty",
      "Jego wrażliwość czyni go wspaniałym partnerem, ale głośny, chaotyczny dom szybko go męczy",
    ],
  },
  "cavalier-king-charles-spaniel": {
    originalPurpose:
      "Cavaliera odtworzono w Anglii w latach 20. XX wieku, by przypominał małe spaniele z obrazów dworu Karola II, i od początku jest oddanym psem do towarzystwa.",
    healthConsiderations:
      "Problemy z sercem często widuje się w tej rasie, zwykle od średniego wieku, więc zapytaj hodowcę, jakie badania serca mieli oboje rodzice. Syringomielia to inna choroba, o której często mówi się w przypadku cavalierów, warto więc zapytać i o nią. Przeczytaj profil rasy i zapytaj weterynarza, jakie badania mają sens. Ogólne wskazówki, nie porada weterynaryjna.",
    poorMatchFor: [
      "Twój cavalier zostawałby sam przez większą część każdego dnia roboczego",
      "Regularne badania serca, a może i leczenie do końca życia, nie mieszczą się w budżecie",
      "Chcesz psa, który da znać, że ktoś stoi pod drzwiami",
    ],
    keyTradeoffs: [
      "Jeden z najłagodniejszych i najłatwiejszych charakterów, połączony z jednym z bardziej wymagających profili zdrowotnych",
      "Kocha każdego, kogo spotka: cudownie w domu, beznadziejnie w roli stróża",
    ],
  },
  "german-shepherd": {
    originalPurpose:
      "Rasę ustalono w Niemczech w 1899 roku jako wszechstronnego psa pasterskiego, a wkrótce pracowała już jako przewodnik, pies poszukiwawczy oraz u boku policji i wojska.",
    healthConsiderations:
      "Poproś o wyniki badań bioder i łokci oraz test DNA w kierunku mielopatii zwyrodnieniowej. Może pojawić się skręt żołądka, zewnątrzwydzielnicza niewydolność trzustki oraz wrażliwy żołądek lub skóra. Lepiej wybierać linie o prostej, zrównoważonej budowie niż o mocno opadającym grzbiecie.",
    poorMatchFor: [
      "To Twój pierwszy pies i nie masz jeszcze planu na szkolenie i socjalizację",
      "Chcesz psa, który z natury jest spokojny wobec obcych",
      "Mnóstwo sierści i silny pies na smyczy by Cię wykończyły",
    ],
    keyTradeoffs: [
      "Głęboko lojalny i opiekuńczy, a spokojna, konsekwentna socjalizacja utrzymuje tę opiekuńczość w rozsądnych granicach",
      "Szkolenie go to czysta przyjemność, a bez regularnych zadań jest naprawdę nieszczęśliwy",
    ],
  },
  dachshund: {
    originalPurpose:
      "Jamnika wyhodowano w Niemczech do podążania za borsukiem (Dachs) pod ziemią: to mały, nieustraszony myśliwy z głosem, który słychać aż z nory.",
    healthConsiderations:
      "Problemy z kręgosłupem (dyskopatia, IVDD) dotykają sporej części jamników i mogą być poważne. Najlepsze, co możesz dla niego zrobić: dbać o szczupłą sylwetkę, nosić go po schodach i łagodnie oduczać skakania. Linie szorstkowłose mają zwykle mniej kłopotów z kręgosłupem. Dla niektórych odmian istnieją testy DNA w kierunku choroby oczu (cord1-PRA) i choroby Lafory.",
    poorMatchFor: [
      "Mieszkasz kilka pięter wyżej bez windy",
      "Potrzebujesz cichego psa w budynku z cienkimi ścianami",
      "Najmłodsi domownicy chcieliby ciągle podnosić psa i nosić go na rękach",
    ],
    keyTradeoffs: [
      "Na tyle mały, że pójdzie z Tobą wszędzie, a przy tym ma głos i pewność siebie dużo większego psa",
      "Bystry i niezależny, więc przywołanie i nauka czystości zwykle wymagają trochę więcej cierpliwości",
    ],
  },
  beagle: {
    originalPurpose:
      "Beagle to brytyjski pies gończy pracujący w sforze, wyhodowany do tropienia zajęcy, za którym myśliwi podążali pieszo. Nos wciąż rządzi jego światem.",
    healthConsiderations:
      "Dobra wiadomość: beagle są zwykle zdrowe i długowieczne. Może pojawić się padaczka, niedoczynność tarczycy i problemy z kręgosłupem, a dla zespołu Musladina-Luekego istnieje test DNA. Beagle łatwo tyją, a ich piękne długie uszy wymagają regularnego sprawdzania.",
    poorMatchFor: [
      "Marzysz o psie, którego wszędzie bezpiecznie spuścisz ze smyczy",
      "Sąsiadom przeszkadzałoby trochę wycia, gdy nie ma Cię w domu",
      "Twój ogród nie jest porządnie ogrodzony",
    ],
    keyTradeoffs: [
      "Przyjazny wobec ludzi i psów, ale nos zwykle wygrywa z tym, o co go właśnie poprosiłeś",
      "Na tyle kompaktowy, że pasuje do większości domów, z wytrzymałością pracującego psa gończego",
    ],
  },
  "cocker-spaniel": {
    originalPurpose:
      "Cocker to brytyjski pies płochacz, wyhodowany do wypłaszania słonek (woodcock) z gęstych zarośli i aportowania ich. Stąd jego nazwa.",
    healthConsiderations:
      "Uszy to codzienny obowiązek: częste osuszanie i sprawdzanie oszczędza psu wiele dyskomfortu. Poproś o wyniki badań bioder i testy DNA w kierunku postępującego zaniku siatkówki (prcd-PRA) i rodzinnej nefropatii, choroby nerek. Linie użytkowe i wystawowe bardzo różnią się energią, więc zapytaj, z którą masz do czynienia.",
    poorMatchFor: [
      "Regularne szczotkowanie i strzyżenie szybko spadłyby na dalszy plan",
      "Twój cocker zostawałby sam przez długie dni pracy",
      "Chcesz spokojnego psa, ale zakochałeś się w szczeniaku z linii użytkowej",
    ],
    keyTradeoffs: [
      "Radosny i chętny do współpracy, a linie użytkowe są dużo bardziej żywiołowe, niż sugeruje ta łagodna twarz",
      "Piękna sierść, która potrzebuje pomocy groomera, żeby taka pozostała",
    ],
  },
  chihuahua: {
    originalPurpose:
      "Chihuahua nosi nazwę meksykańskiego stanu i prawdopodobnie wywodzi się od małych psów do towarzystwa z dawnego Meksyku. Jako rasę towarzyszącą hoduje się ją od końca XIX wieku.",
    healthConsiderations:
      "Najwięcej troski wymagają zęby: codzienne szczotkowanie i od czasu do czasu profesjonalne czyszczenie robią ogromną różnicę. Mogą wystąpić problemy z rzepką i zastawkami serca, a bardzo małe szczenięta bywają narażone na niski poziom cukru. Dobra wiadomość: 15 lat i więcej to zupełna norma.",
    poorMatchFor: [
      "W domu są maluchy lub małe dzieci",
      "Chcesz psa, który jest spokojny i cichy, gdy przychodzą goście",
      "Zimy są u Ciebie mroźne, a wolisz nie ubierać psa na każdy spacer",
    ],
    keyTradeoffs: [
      "Mały pod względem miejsca i kosztów, a przy tym na tyle delikatny, że wymaga ostrożnego obchodzenia się",
      "Całkowicie oddany swojemu człowiekowi, wobec reszty świata często nieufny albo gadatliwy",
    ],
  },
  "bernese-mountain-dog": {
    originalPurpose:
      "Berneński pies pasterski był psem gospodarskim w szwajcarskim kantonie Berno: ciągnął wózki z mlekiem, prowadził krowy i życzliwie pilnował obejścia.",
    healthConsiderations:
      "Najtrudniejsze w kochaniu bernera jest to, że jego życie bywa krótkie, a nowotwory, zwłaszcza mięsak histiocytarny, niestety zdarzają się często. Poproś o wyniki badań bioder i łokci oraz test DNA w kierunku mielopatii zwyrodnieniowej i naucz się rozpoznawać objawy skrętu żołądka.",
    poorMatchFor: [
      "Mieszkasz w ciepłym klimacie albo na najwyższym piętrze bez windy",
      "Siedem do dziesięciu wspólnych lat wydawałoby Ci się za krótko",
      "Koszty weterynarza i karmy dla dużego psa nadwyrężyłyby Twój budżet",
    ],
    keyTradeoffs: [
      "Łagodny, cierpliwy olbrzym, z którym spędzisz mniej czasu, niż byś chciał",
      "Spokojny jako dorosły po długim, rozbrykanym okresie dojrzewania, a sierść jest wszędzie przez cały rok",
    ],
  },
};
