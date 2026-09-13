/**
 * Page titles and descriptions in every language we publish in.
 *
 * These are the pages that used to carry an English-only title and an English
 * canonical, which quietly told search engines the localized paths were copies
 * of the English one. Each entry is written the way someone would search in
 * their own language — calm and plain, never keyword-stuffed.
 */
import type { SeoCopy } from "@/lib/seo";

type PageSeo = {
  en: SeoCopy;
  no: SeoCopy;
  pl: SeoCopy;
  dk: SeoCopy;
  se: SeoCopy;
  fi: SeoCopy;
  de: SeoCopy;
  fr: SeoCopy;
  nl: SeoCopy;
};

export const pageSeo = {
  getDogChoose: {
    en: {
      title: "Puppy or adult, breeder or rescue | DoggMatch",
      description:
        "An honest comparison of puppies and adult dogs, what to ask a breeder, the red flags worth noticing, and what to think about when you adopt.",
    },
    no: {
      title: "Valp eller voksen, oppdretter eller omplassering | DoggMatch",
      description:
        "En ærlig sammenligning av valp og voksen hund, hva du bør spørre oppdretteren om, hvilke varsellamper som gjelder, og hva du bør tenke på ved omplassering.",
    },
    pl: {
      title: "Szczeniak czy dorosły pies, hodowla czy adopcja | DoggMatch",
      description:
        "Szczere porównanie szczeniaka i dorosłego psa, o co zapytać hodowcę, na jakie sygnały ostrzegawcze zwrócić uwagę i co przemyśleć przed adopcją.",
    },
    dk: {
      title: "Hvalp eller voksen, opdrætter eller internat | DoggMatch",
      description:
        "En ærlig sammenligning af hvalpe og voksne hunde, hvad du bør spørge opdrætteren om, hvilke advarselslamper der findes, og hvad du skal overveje ved adoption.",
    },
    se: {
      title: "Valp eller vuxen, uppfödare eller omplacering | DoggMatch",
      description:
        "En ärlig jämförelse mellan valp och vuxen hund, vad du bör fråga uppfödaren, vilka varningstecken som finns och vad du bör tänka på vid omplacering.",
    },
    fi: {
      title: "Pentu vai aikuinen, kasvattaja vai löytökoti | DoggMatch",
      description:
        "Rehellinen vertailu pennusta ja aikuisesta koirasta, mitä kysyä kasvattajalta, mitkä varoitusmerkit kannattaa huomata ja mitä miettiä ennen adoptiota.",
    },
    de: {
      title: "Welpe oder erwachsener Hund, Züchter oder Tierheim | DoggMatch",
      description:
        "Ein ehrlicher Vergleich von Welpen und erwachsenen Hunden, welche Fragen ein Züchter beantworten sollte, welche Warnzeichen es gibt und was bei einer Adoption zählt.",
    },
    fr: {
      title: "Chiot ou adulte, élevage ou adoption | DoggMatch",
      description:
        "Une comparaison honnête entre chiot et chien adulte, les questions à poser à un éleveur, les signaux qui doivent alerter et ce qu'il faut peser avant d'adopter.",
    },
    nl: {
      title: "Pup of volwassen hond, fokker of asiel | DoggMatch",
      description:
        "Een eerlijke vergelijking tussen pups en volwassen honden, wat je een fokker moet vragen, welke signalen te denken geven en waar je bij adoptie op let.",
    },
  },

  getDogCosts: {
    en: {
      title: "What a dog really costs, month by month | DoggMatch",
      description:
        "An honest look at the cost of a dog: the one-off spend before they arrive, the steady monthly cost, and the vet bills worth being ready for.",
    },
    no: {
      title: "Hva en hund faktisk koster, måned for måned | DoggMatch",
      description:
        "Et ærlig blikk på hva en hund koster: engangsutgiftene før den flytter inn, de faste månedlige kostnadene i kroner, og veterinærregningene det lønner seg å være forberedt på.",
    },
    pl: {
      title: "Ile naprawdę kosztuje pies, miesiąc po miesiącu | DoggMatch",
      description:
        "Szczere spojrzenie na koszty psa: jednorazowe wydatki przed jego przyjściem, stałe koszty miesięczne w złotówkach i rachunki od weterynarza, na które warto być gotowym.",
    },
    dk: {
      title: "Hvad en hund egentlig koster, måned for måned | DoggMatch",
      description:
        "Et ærligt blik på, hvad en hund koster: engangsudgifterne inden den flytter ind, de faste månedlige udgifter i kroner, og de dyreregninger det er værd at være klar til.",
    },
    se: {
      title: "Vad en hund faktiskt kostar, månad för månad | DoggMatch",
      description:
        "En ärlig bild av vad en hund kostar: engångskostnaderna innan den flyttar in, de fasta månadskostnaderna i kronor och veterinärräkningarna det lönar sig att vara redo för.",
    },
    fi: {
      title: "Mitä koira oikeasti maksaa, kuukausi kerrallaan | DoggMatch",
      description:
        "Rehellinen katsaus koiran kustannuksiin: kertaluonteiset hankinnat ennen muuttoa, tasainen kuukausikulu euroina ja eläinlääkärilaskut, joihin kannattaa varautua.",
    },
    de: {
      title: "Was ein Hund wirklich kostet, Monat für Monat | DoggMatch",
      description:
        "Ein ehrlicher Blick auf die Kosten: die einmaligen Anschaffungen vor dem Einzug, die laufenden Kosten pro Monat in Euro und die Tierarztrechnungen, auf die man vorbereitet sein sollte.",
    },
    fr: {
      title: "Ce qu'un chien coûte vraiment, mois après mois | DoggMatch",
      description:
        "Un regard honnête sur le coût d'un chien : les dépenses uniques avant son arrivée, le budget mensuel en euros et les frais vétérinaires auxquels il vaut mieux se préparer.",
    },
    nl: {
      title: "Wat een hond echt kost, maand na maand | DoggMatch",
      description:
        "Een eerlijk beeld van de kosten: de eenmalige uitgaven voor de komst, de vaste maandlasten in euro's en de dierenartsrekeningen waar je beter op voorbereid bent.",
    },
  },

  getDogPrepare: {
    en: {
      title: "Getting your home ready for a dog | DoggMatch",
      description:
        "What your home and your everyday life mean for a dog, honest answers about allergies and time alone, and a tickable arrival checklist you can print.",
    },
    no: {
      title: "Gjør hjemmet klart til hund | DoggMatch",
      description:
        "Hva hjemmet og hverdagen din betyr for en hund, ærlige svar om allergi og tid alene, og en sjekkliste du kan huke av og skrive ut før den flytter inn.",
    },
    pl: {
      title: "Jak przygotować dom na przyjście psa | DoggMatch",
      description:
        "Co twój dom i codzienność oznaczają dla psa, szczere odpowiedzi o alergiach i samotności, oraz lista rzeczy do odhaczenia, którą możesz wydrukować.",
    },
    dk: {
      title: "Gør hjemmet klar til en hund | DoggMatch",
      description:
        "Hvad dit hjem og din hverdag betyder for en hund, ærlige svar om allergi og tid alene, og en tjekliste du kan sætte flueben ved og printe ud.",
    },
    se: {
      title: "Gör hemmet redo för en hund | DoggMatch",
      description:
        "Vad ditt hem och din vardag betyder för en hund, ärliga svar om allergi och ensamtid, och en checklista du kan bocka av och skriva ut.",
    },
    fi: {
      title: "Valmista koti koiraa varten | DoggMatch",
      description:
        "Mitä kotisi ja arkesi merkitsevät koiralle, rehelliset vastaukset allergiasta ja yksinolosta, sekä muistilista, jonka voit rastia ja tulostaa.",
    },
    de: {
      title: "Das Zuhause auf einen Hund vorbereiten | DoggMatch",
      description:
        "Was dein Zuhause und dein Alltag für einen Hund bedeuten, ehrliche Antworten zu Allergien und Alleinsein und eine Checkliste zum Abhaken und Ausdrucken.",
    },
    fr: {
      title: "Préparer votre maison à l'arrivée d'un chien | DoggMatch",
      description:
        "Ce que votre logement et votre quotidien signifient pour un chien, des réponses honnêtes sur les allergies et la solitude, et une liste à cocher et imprimer.",
    },
    nl: {
      title: "Je huis klaarmaken voor een hond | DoggMatch",
      description:
        "Wat je huis en je dagen voor een hond betekenen, eerlijke antwoorden over allergie en alleen thuis zijn, en een checklist om af te vinken en te printen.",
    },
  },

  getDogReady: {
    en: {
      title: "Are you ready for a dog? A calm check | DoggMatch",
      description:
        "Twelve honest questions about your days, your home, your money and the people around you — and a warm, useful answer. No pass mark, no pressure.",
    },
    no: {
      title: "Er du klar for hund? En rolig sjekk | DoggMatch",
      description:
        "Tolv ærlige spørsmål om hverdagen, hjemmet, økonomien og menneskene rundt deg — og et varmt, nyttig svar. Ingen beståttgrense, ingen press.",
    },
    pl: {
      title: "Czy jesteś gotowy na psa? Spokojny test | DoggMatch",
      description:
        "Dwanaście szczerych pytań o twoje dni, dom, budżet i bliskich — oraz ciepła, użyteczna odpowiedź. Bez ocen i bez presji.",
    },
    dk: {
      title: "Er du klar til en hund? Et roligt tjek | DoggMatch",
      description:
        "Tolv ærlige spørgsmål om din hverdag, dit hjem, din økonomi og menneskene omkring dig — og et varmt, brugbart svar. Ingen beståelsesgrænse, intet pres.",
    },
    se: {
      title: "Är du redo för en hund? En lugn koll | DoggMatch",
      description:
        "Tolv ärliga frågor om din vardag, ditt hem, din ekonomi och människorna runt dig — och ett varmt, användbart svar. Ingen gräns för godkänt, ingen press.",
    },
    fi: {
      title: "Oletko valmis koiraan? Rauhallinen tarkistus | DoggMatch",
      description:
        "Kaksitoista rehellistä kysymystä arjestasi, kodistasi, rahoistasi ja läheisistäsi — ja lämmin, käyttökelpoinen vastaus. Ei läpäisyrajaa, ei painetta.",
    },
    de: {
      title: "Bist du bereit für einen Hund? Ein ruhiger Check | DoggMatch",
      description:
        "Zwölf ehrliche Fragen zu deinem Alltag, deinem Zuhause, deinem Geld und den Menschen um dich herum — und eine warme, brauchbare Antwort. Ohne Bestehensgrenze.",
    },
    fr: {
      title: "Êtes-vous prêt pour un chien ? Un test posé | DoggMatch",
      description:
        "Douze questions honnêtes sur vos journées, votre logement, votre budget et vos proches — et une réponse chaleureuse et utile. Sans note, sans pression.",
    },
    nl: {
      title: "Ben je klaar voor een hond? Een rustige check | DoggMatch",
      description:
        "Twaalf eerlijke vragen over je dagen, je huis, je budget en de mensen om je heen — en een warm, bruikbaar antwoord. Geen cijfer, geen druk.",
    },
  },

  getDogWelcome: {
    en: {
      title: "The first day and week with your dog | DoggMatch",
      description:
        "A calm, step-by-step guide to bringing your dog home: the journey, the first evening, sleep, the first small lessons, and settling into a routine.",
    },
    no: {
      title: "Den første dagen og uka med hunden | DoggMatch",
      description:
        "En rolig guide steg for steg til å hente hunden hjem: turen, den første kvelden, søvnen, de første små øvelsene og veien inn i en rutine sammen.",
    },
    pl: {
      title: "Pierwszy dzień i tydzień z psem | DoggMatch",
      description:
        "Spokojny przewodnik krok po kroku: droga do domu, pierwszy wieczór, spanie, pierwsze drobne ćwiczenia i wchodzenie we wspólny rytm dnia.",
    },
    dk: {
      title: "Den første dag og uge med hunden | DoggMatch",
      description:
        "En rolig guide trin for trin til at hente hunden hjem: turen, den første aften, søvnen, de første små øvelser og vejen ind i en fælles rutine.",
    },
    se: {
      title: "Första dagen och veckan med hunden | DoggMatch",
      description:
        "En lugn guide steg för steg till att hämta hem hunden: resan, första kvällen, sömnen, de första små övningarna och vägen in i en gemensam rutin.",
    },
    fi: {
      title: "Ensimmäinen päivä ja viikko koiran kanssa | DoggMatch",
      description:
        "Rauhallinen opas vaihe vaiheelta: matka kotiin, ensimmäinen ilta, nukkuminen, ensimmäiset pienet harjoitukset ja yhteisen rytmin löytyminen.",
    },
    de: {
      title: "Der erste Tag und die erste Woche mit Hund | DoggMatch",
      description:
        "Eine ruhige Anleitung Schritt für Schritt: die Fahrt nach Hause, der erste Abend, der Schlaf, die ersten kleinen Übungen und der Weg in einen Alltag zu zweit.",
    },
    fr: {
      title: "Le premier jour et la première semaine | DoggMatch",
      description:
        "Un guide posé, étape par étape : le trajet, la première soirée, le sommeil, les premiers petits apprentissages et l'installation d'une routine commune.",
    },
    nl: {
      title: "De eerste dag en week met je hond | DoggMatch",
      description:
        "Een rustige gids stap voor stap: de rit naar huis, de eerste avond, de nacht, de eerste kleine oefeningen en het vinden van een gezamenlijk ritme.",
    },
  },

  myDog: {
    en: {
      title: "My Dog — everyday health, food and care | DoggMatch",
      description:
        "A calm place to look after your dog properly: food and portions, weight, teeth, coat, paws and the little daily things that add up.",
    },
    no: {
      title: "Min hund — helse, fôr og stell til hverdags | DoggMatch",
      description:
        "Et rolig sted for å ta godt vare på hunden: fôr og porsjoner, vekt, tenner, pels, poter og alle de små tingene som betyr noe i hverdagen.",
    },
    pl: {
      title: "Mój pies — zdrowie, karma i codzienna opieka | DoggMatch",
      description:
        "Spokojne miejsce, by dobrze zadbać o psa: karma i porcje, waga, zęby, sierść, łapy i wszystkie drobiazgi, które składają się na codzienność.",
    },
    dk: {
      title: "Min hund — sundhed, foder og daglig pleje | DoggMatch",
      description:
        "Et roligt sted at passe godt på hunden: foder og portioner, vægt, tænder, pels, poter og alle de små ting, der betyder noget i hverdagen.",
    },
    se: {
      title: "Min hund — hälsa, foder och daglig omsorg | DoggMatch",
      description:
        "En lugn plats för att sköta om hunden ordentligt: foder och portioner, vikt, tänder, päls, tassar och alla små saker som betyder något i vardagen.",
    },
    fi: {
      title: "Oma koira — terveys, ruoka ja arjen hoito | DoggMatch",
      description:
        "Rauhallinen paikka hoitaa koiraa kunnolla: ruoka ja annokset, paino, hampaat, turkki, tassut ja kaikki pienet arjen asiat.",
    },
    de: {
      title: "Mein Hund — Gesundheit, Futter und Pflege | DoggMatch",
      description:
        "Ein ruhiger Ort, um gut für den Hund zu sorgen: Futter und Portionen, Gewicht, Zähne, Fell, Pfoten und die kleinen Dinge, die den Alltag ausmachen.",
    },
    fr: {
      title: "Mon chien — santé, alimentation et soins | DoggMatch",
      description:
        "Un endroit posé pour bien s'occuper de son chien : rations, poids, dents, pelage, coussinets et tous les petits gestes du quotidien.",
    },
    nl: {
      title: "Mijn hond — gezondheid, voeding en verzorging | DoggMatch",
      description:
        "Een rustige plek om goed voor je hond te zorgen: voeding en porties, gewicht, gebit, vacht, voetzolen en alle kleine dagelijkse dingen.",
    },
  },

  myDogFood: {
    en: {
      title: "Can my dog eat this? Straight answers | DoggMatch",
      description:
        "Search any food and get a straight answer: fine in small amounts, be careful, or don't give this. Written for the moment something hits the kitchen floor.",
    },
    no: {
      title: "Kan hunden min spise dette? Klare svar | DoggMatch",
      description:
        "Søk opp en matvare og få et tydelig svar: greit i små mengder, vær forsiktig, eller ikke gi dette. Skrevet for øyeblikket noe treffer kjøkkengulvet.",
    },
    pl: {
      title: "Czy pies może to zjeść? Jasne odpowiedzi | DoggMatch",
      description:
        "Wyszukaj produkt i dostań jasną odpowiedź: można w małych ilościach, ostrożnie albo nie podawaj. Napisane na chwilę, gdy coś spadnie na podłogę w kuchni.",
    },
    dk: {
      title: "Må min hund spise det her? Klare svar | DoggMatch",
      description:
        "Søg på en fødevare og få et klart svar: fint i små mængder, vær forsigtig, eller giv det ikke. Skrevet til det øjeblik, hvor noget rammer køkkengulvet.",
    },
    se: {
      title: "Får min hund äta det här? Raka svar | DoggMatch",
      description:
        "Sök på en matvara och få ett tydligt svar: okej i små mängder, var försiktig, eller ge inte detta. Skrivet för stunden då något landar på köksgolvet.",
    },
    fi: {
      title: "Saako koira syödä tätä? Selvät vastaukset | DoggMatch",
      description:
        "Hae ruoka-ainetta ja saat selvän vastauksen: pieninä määrinä ok, ole varovainen tai älä anna tätä. Kirjoitettu hetkeen, jolloin jotain putoaa lattialle.",
    },
    de: {
      title: "Darf mein Hund das fressen? Klare Antworten | DoggMatch",
      description:
        "Suche ein Lebensmittel und bekomme eine klare Antwort: in kleinen Mengen in Ordnung, Vorsicht, oder besser gar nicht. Für den Moment, wenn etwas herunterfällt.",
    },
    fr: {
      title: "Mon chien peut-il manger ça ? Réponses claires | DoggMatch",
      description:
        "Cherchez un aliment et obtenez une réponse nette : possible en petite quantité, prudence, ou à éviter. Écrit pour l'instant où quelque chose tombe par terre.",
    },
    nl: {
      title: "Mag mijn hond dit eten? Heldere antwoorden | DoggMatch",
      description:
        "Zoek een voedingsmiddel en krijg een helder antwoord: prima in kleine hoeveelheden, voorzichtig, of niet geven. Geschreven voor het moment dat er iets valt.",
    },
  },

  myDogNutrition: {
    en: {
      title: "How much to feed your dog | DoggMatch",
      description:
        "Work out roughly how much to feed your dog each day, how often to feed, and how to change food without upsetting their stomach.",
    },
    no: {
      title: "Hvor mye skal hunden ha å spise? | DoggMatch",
      description:
        "Finn ut omtrent hvor mye hunden bør ha hver dag, hvor ofte den bør spise, og hvordan du bytter fôr uten å sette magen ut av spill.",
    },
    pl: {
      title: "Ile karmy potrzebuje twój pies | DoggMatch",
      description:
        "Oblicz orientacyjnie, ile pies powinien dostawać dziennie, jak często go karmić i jak zmieniać karmę, nie psując mu żołądka.",
    },
    dk: {
      title: "Hvor meget skal hunden have at spise? | DoggMatch",
      description:
        "Find ud af, hvor meget hunden nogenlunde skal have hver dag, hvor ofte den bør spise, og hvordan du skifter foder uden at ødelægge maven.",
    },
    se: {
      title: "Hur mycket ska hunden äta? | DoggMatch",
      description:
        "Räkna ut ungefär hur mycket hunden bör få varje dag, hur ofta den bör äta och hur du byter foder utan att ställa till det för magen.",
    },
    fi: {
      title: "Kuinka paljon koiralle pitää syöttää? | DoggMatch",
      description:
        "Laske suurin piirtein päivittäinen ruokamäärä, kuinka usein koiran kannattaa syödä ja miten vaihdat ruoan vatsaa sekoittamatta.",
    },
    de: {
      title: "Wie viel Futter braucht mein Hund? | DoggMatch",
      description:
        "Berechne ungefähr, wie viel dein Hund täglich braucht, wie oft er fressen sollte und wie du das Futter umstellst, ohne den Magen zu belasten.",
    },
    fr: {
      title: "Quelle quantité donner à son chien ? | DoggMatch",
      description:
        "Estimez la ration quotidienne de votre chien, le nombre de repas par jour et la façon de changer d'alimentation sans lui déranger l'estomac.",
    },
    nl: {
      title: "Hoeveel moet je hond eten? | DoggMatch",
      description:
        "Bereken ongeveer hoeveel je hond per dag nodig heeft, hoe vaak hij moet eten en hoe je van voer wisselt zonder zijn maag van slag te maken.",
    },
  },

  myDogPreview: {
    en: {
      title: "A peek inside the My Dog hub | DoggMatch",
      description:
        "See what everyday life in My Dog looks like: today's little routine, a weekly rhythm, one training lesson and a real food portion example.",
    },
    no: {
      title: "Et innblikk i Min hund | DoggMatch",
      description:
        "Se hvordan hverdagen i Min hund ser ut: dagens lille rutine, en ukesrytme, én treningsøkt og et ekte eksempel på fôrporsjon.",
    },
    pl: {
      title: "Zajrzyj do sekcji Mój pies | DoggMatch",
      description:
        "Zobacz, jak wygląda codzienność w Mój pies: dzisiejszy drobny rytuał, rytm tygodnia, jedna lekcja treningu i prawdziwy przykład porcji karmy.",
    },
    dk: {
      title: "Et kig ind i Min hund | DoggMatch",
      description:
        "Se, hvordan hverdagen i Min hund ser ud: dagens lille rutine, en ugerytme, én træningsøvelse og et rigtigt eksempel på en foderportion.",
    },
    se: {
      title: "En titt in i Min hund | DoggMatch",
      description:
        "Se hur vardagen i Min hund ser ut: dagens lilla rutin, en veckorytm, en träningslektion och ett riktigt exempel på en foderportion.",
    },
    fi: {
      title: "Kurkistus Oma koira -osioon | DoggMatch",
      description:
        "Katso, miltä arki Oma koira -osiossa näyttää: päivän pieni rutiini, viikon rytmi, yksi treeniharjoitus ja aito esimerkki ruoka-annoksesta.",
    },
    de: {
      title: "Ein Blick in den Bereich Mein Hund | DoggMatch",
      description:
        "So sieht der Alltag in Mein Hund aus: die kleine Routine für heute, ein Wochenrhythmus, eine Trainingseinheit und ein echtes Beispiel für eine Futterportion.",
    },
    fr: {
      title: "Un aperçu de l'espace Mon chien | DoggMatch",
      description:
        "Voyez à quoi ressemble le quotidien dans Mon chien : la petite routine du jour, un rythme hebdomadaire, une leçon et un exemple concret de ration.",
    },
    nl: {
      title: "Een kijkje in Mijn hond | DoggMatch",
      description:
        "Zie hoe het dagelijks leven in Mijn hond eruitziet: het kleine ritueel van vandaag, een weekritme, één trainingsles en een echt voorbeeld van een portie.",
    },
  },

  myDogWeek: {
    en: {
      title: "A simple week with your dog | DoggMatch",
      description:
        "A calm weekly overview built from your dog's age, breed, activity and training: walks, short sessions, meals and the care that's easy to forget.",
    },
    no: {
      title: "En enkel uke med hunden din | DoggMatch",
      description:
        "En rolig ukesoversikt bygget på hundens alder, rase, aktivitet og trening: turer, korte økter, måltider og stellet som er lett å glemme.",
    },
    pl: {
      title: "Prosty tydzień z twoim psem | DoggMatch",
      description:
        "Spokojny plan tygodnia oparty na wieku, rasie, aktywności i treningu psa: spacery, krótkie sesje, posiłki i pielęgnacja, o której łatwo zapomnieć.",
    },
    dk: {
      title: "En enkel uge med din hund | DoggMatch",
      description:
        "Et roligt ugeoverblik bygget på hundens alder, race, aktivitet og træning: ture, korte øvelser, måltider og den pleje, man let glemmer.",
    },
    se: {
      title: "En enkel vecka med din hund | DoggMatch",
      description:
        "En lugn veckoöversikt byggd på hundens ålder, ras, aktivitet och träning: promenader, korta pass, måltider och skötseln som är lätt att glömma.",
    },
    fi: {
      title: "Yksinkertainen viikko koiran kanssa | DoggMatch",
      description:
        "Rauhallinen viikkonäkymä koiran iän, rodun, aktiivisuuden ja treenin pohjalta: lenkit, lyhyet harjoitukset, ruokailut ja helposti unohtuva hoito.",
    },
    de: {
      title: "Eine einfache Woche mit deinem Hund | DoggMatch",
      description:
        "Eine ruhige Wochenübersicht aus Alter, Rasse, Aktivität und Training: Spaziergänge, kurze Einheiten, Mahlzeiten und die Pflege, die man leicht vergisst.",
    },
    fr: {
      title: "Une semaine simple avec votre chien | DoggMatch",
      description:
        "Un aperçu hebdomadaire posé, construit sur l'âge, la race, l'activité et l'entraînement : balades, séances courtes, repas et soins vite oubliés.",
    },
    nl: {
      title: "Een eenvoudige week met je hond | DoggMatch",
      description:
        "Een rustig weekoverzicht op basis van leeftijd, ras, activiteit en training: wandelingen, korte sessies, maaltijden en verzorging die je snel vergeet.",
    },
  },

  myDogWeight: {
    en: {
      title: "Dog weight and body shape check | DoggMatch",
      description:
        "Learn the simple hands-on body condition check vets use, and keep a quiet record of your dog's weight over time.",
    },
    no: {
      title: "Vekt og hold — sjekken veterinæren bruker | DoggMatch",
      description:
        "Lær den enkle håndsjekken veterinærer bruker for å vurdere hold, og hold en stille oversikt over vekten til hunden din over tid.",
    },
    pl: {
      title: "Waga i kondycja psa — prosty test | DoggMatch",
      description:
        "Naucz się prostego badania dotykiem, którego używają weterynarze, i prowadź spokojny zapis wagi psa w czasie.",
    },
    dk: {
      title: "Vægt og huld — tjekket dyrlægen bruger | DoggMatch",
      description:
        "Lær det enkle håndtjek, dyrlæger bruger til at vurdere huld, og hold et roligt overblik over hundens vægt over tid.",
    },
    se: {
      title: "Vikt och hull — kollen veterinären gör | DoggMatch",
      description:
        "Lär dig den enkla handkollen veterinärer använder för att bedöma hull, och håll en lugn logg över hundens vikt över tid.",
    },
    fi: {
      title: "Paino ja kunto — eläinlääkärin tarkistus | DoggMatch",
      description:
        "Opi yksinkertainen käsin tehtävä kuntoluokitus, jota eläinlääkärit käyttävät, ja pidä rauhallista kirjaa koirasi painosta.",
    },
    de: {
      title: "Gewicht und Körperform prüfen | DoggMatch",
      description:
        "Lerne den einfachen Handgriff, mit dem Tierärzte den Körperzustand beurteilen, und führe in Ruhe Buch über das Gewicht deines Hundes.",
    },
    fr: {
      title: "Poids et silhouette : le contrôle du vétérinaire | DoggMatch",
      description:
        "Apprenez le contrôle tactile simple qu'utilisent les vétérinaires, et gardez tranquillement une trace du poids de votre chien.",
    },
    nl: {
      title: "Gewicht en conditie van je hond checken | DoggMatch",
      description:
        "Leer de eenvoudige handcheck die dierenartsen gebruiken, en houd rustig bij hoe het gewicht van je hond zich ontwikkelt.",
    },
  },

  trainJourney: {
    en: {
      title: "Your dog training journey | DoggMatch",
      description:
        "Everything you and your dog have worked on, in one place — what's going well, what needs practice, and what to try next.",
    },
    no: {
      title: "Treningsreisen din | DoggMatch",
      description:
        "Alt du og hunden har jobbet med, samlet på ett sted — hva som går bra, hva som trenger øving, og hva dere kan prøve videre.",
    },
    pl: {
      title: "Twoja droga treningowa z psem | DoggMatch",
      description:
        "Wszystko, nad czym pracowaliście, w jednym miejscu — co idzie dobrze, co wymaga ćwiczeń i co spróbować dalej.",
    },
    dk: {
      title: "Jeres træningsrejse | DoggMatch",
      description:
        "Alt, du og hunden har arbejdet med, samlet ét sted — hvad der går godt, hvad der skal øves, og hvad I kan prøve som det næste.",
    },
    se: {
      title: "Er träningsresa | DoggMatch",
      description:
        "Allt du och hunden har jobbat med, samlat på ett ställe — vad som går bra, vad som behöver övas och vad ni kan testa härnäst.",
    },
    fi: {
      title: "Teidän treenimatkanne | DoggMatch",
      description:
        "Kaikki, mitä sinä ja koirasi olette harjoitelleet, yhdessä paikassa — mikä sujuu, mikä kaipaa toistoja ja mitä kokeilla seuraavaksi.",
    },
    de: {
      title: "Euer Trainingsweg | DoggMatch",
      description:
        "Alles, woran ihr gearbeitet habt, an einem Ort — was gut läuft, was noch Übung braucht und was als Nächstes dran ist.",
    },
    fr: {
      title: "Votre parcours d'éducation | DoggMatch",
      description:
        "Tout ce que vous avez travaillé avec votre chien, au même endroit — ce qui avance bien, ce qui demande de la pratique et la suite.",
    },
    nl: {
      title: "Jullie trainingsreis | DoggMatch",
      description:
        "Alles waar jij en je hond aan gewerkt hebben, op één plek — wat goed gaat, wat oefening nodig heeft en wat jullie hierna kunnen proberen.",
    },
  },

  trainLibrary: {
    en: {
      title: "Every dog training lesson | DoggMatch",
      description:
        "Browse every DoggMatch lesson: puppy foundations, everyday manners, walking, recall, calm at home, tricks and brain games.",
    },
    no: {
      title: "Alle treningsøvelser | DoggMatch",
      description:
        "Bla gjennom alle DoggMatch-øvelsene: valpegrunnlag, hverdagsmanerer, gåing i bånd, innkalling, ro hjemme, triks og hjernetrim.",
    },
    pl: {
      title: "Wszystkie lekcje treningu psa | DoggMatch",
      description:
        "Przejrzyj wszystkie lekcje DoggMatch: podstawy dla szczeniaka, codzienne maniery, chodzenie na smyczy, przywołanie, spokój w domu, sztuczki i zabawy.",
    },
    dk: {
      title: "Alle træningsøvelser | DoggMatch",
      description:
        "Gennemse alle DoggMatch-øvelser: hvalpens fundament, hverdagsmanerer, gåtur i snor, indkald, ro derhjemme, tricks og hjernegymnastik.",
    },
    se: {
      title: "Alla träningslektioner | DoggMatch",
      description:
        "Bläddra bland alla DoggMatch-lektioner: valpens grunder, vardagsmanér, gå i koppel, inkallning, lugn hemma, trick och hjärngympa.",
    },
    fi: {
      title: "Kaikki koulutusharjoitukset | DoggMatch",
      description:
        "Selaa kaikkia DoggMatch-harjoituksia: pennun perusteet, arjen tavat, hihnassa kävely, luoksetulo, rauhoittuminen kotona, temput ja aivotyö.",
    },
    de: {
      title: "Alle Trainingseinheiten | DoggMatch",
      description:
        "Alle DoggMatch-Übungen auf einen Blick: Welpengrundlagen, Alltagsmanieren, Leinenführigkeit, Rückruf, Ruhe zu Hause, Tricks und Kopfarbeit.",
    },
    fr: {
      title: "Toutes les leçons d'éducation | DoggMatch",
      description:
        "Parcourez toutes les leçons DoggMatch : bases du chiot, bonnes manières, marche en laisse, rappel, calme à la maison, tours et jeux de réflexion.",
    },
    nl: {
      title: "Alle trainingslessen | DoggMatch",
      description:
        "Blader door alle DoggMatch-lessen: basis voor pups, dagelijkse manieren, aan de lijn lopen, terugkomen, rust in huis, trucjes en breinwerk.",
    },
  },

  travelAbroad: {
    en: {
      title: "Travelling abroad with your dog | DoggMatch",
      description:
        "Tell us where you're travelling from and to. We'll show what's usually required — microchip, rabies, passport, tapeworm — and link the official source.",
    },
    no: {
      title: "Reise til utlandet med hund | DoggMatch",
      description:
        "Fortell hvor dere reiser fra og til, så viser vi hva som vanligvis kreves — microchip, rabiesvaksine, pass og bendelorm — med lenke til offisiell kilde.",
    },
    pl: {
      title: "Podróż z psem za granicę | DoggMatch",
      description:
        "Powiedz, skąd i dokąd jedziecie, a pokażemy, co zwykle jest wymagane — mikroczip, szczepienie na wściekliznę, paszport, tasiemiec — z linkiem do źródła.",
    },
    dk: {
      title: "Rejse til udlandet med hund | DoggMatch",
      description:
        "Fortæl hvor I rejser fra og til, så viser vi, hvad der normalt kræves — chip, rabiesvaccine, pas og bændelorm — med link til den officielle kilde.",
    },
    se: {
      title: "Resa utomlands med hund | DoggMatch",
      description:
        "Berätta varifrån och vart ni reser, så visar vi vad som brukar krävas — chip, rabiesvaccin, pass och bandmask — med länk till den officiella källan.",
    },
    fi: {
      title: "Ulkomaanmatka koiran kanssa | DoggMatch",
      description:
        "Kerro mistä ja minne matkustatte, niin näytämme mitä yleensä vaaditaan — siru, rabiesrokote, passi ja heisimatolääkitys — ja linkin viralliseen lähteeseen.",
    },
    de: {
      title: "Mit dem Hund ins Ausland reisen | DoggMatch",
      description:
        "Sag uns, woher und wohin ihr reist. Wir zeigen, was üblicherweise verlangt wird — Chip, Tollwutimpfung, Heimtierausweis, Bandwurm — samt offizieller Quelle.",
    },
    fr: {
      title: "Voyager à l'étranger avec son chien | DoggMatch",
      description:
        "Dites-nous d'où et vers où vous partez : nous montrons ce qui est habituellement exigé — puce, vaccin antirabique, passeport, ténia — et la source officielle.",
    },
    nl: {
      title: "Met je hond naar het buitenland | DoggMatch",
      description:
        "Vertel waarvandaan en waarheen je reist. Wij tonen wat meestal nodig is — chip, rabiësvaccin, paspoort, lintworm — met een link naar de officiële bron.",
    },
  },

  travelCar: {
    en: {
      title: "Travelling by car with your dog | DoggMatch",
      description:
        "How to secure a dog in a car, first journeys for a nervous dog, car sickness, long drives and breaks — and the honest truth about hot cars.",
    },
    no: {
      title: "Bilkjøring med hund, trygt | DoggMatch",
      description:
        "Hvordan sikre hunden i bilen, de første turene for en utrygg hund, bilsyke, lange kjøreturer og pauser — og den ærlige sannheten om varme biler.",
    },
    pl: {
      title: "Podróż samochodem z psem | DoggMatch",
      description:
        "Jak bezpiecznie zabezpieczyć psa w aucie, pierwsze jazdy z niepewnym psem, choroba lokomocyjna, długie trasy i przerwy — i prawda o nagrzanym samochodzie.",
    },
    dk: {
      title: "Køre bil med hunden, sikkert | DoggMatch",
      description:
        "Sådan sikrer du hunden i bilen, de første ture med en utryg hund, køresyge, lange ture og pauser — og den ærlige sandhed om varme biler.",
    },
    se: {
      title: "Åka bil med hunden, tryggt | DoggMatch",
      description:
        "Så säkrar du hunden i bilen, första resorna med en osäker hund, åksjuka, långa körningar och pauser — och sanningen om varma bilar.",
    },
    fi: {
      title: "Autolla koiran kanssa, turvallisesti | DoggMatch",
      description:
        "Miten kiinnität koiran autoon, ensimmäiset matkat epävarman koiran kanssa, matkapahoinvointi, pitkät ajot ja tauot — ja totuus kuumasta autosta.",
    },
    de: {
      title: "Mit dem Hund sicher Auto fahren | DoggMatch",
      description:
        "Wie du den Hund im Auto sicherst, erste Fahrten mit einem unsicheren Hund, Reiseübelkeit, lange Strecken und Pausen — und die Wahrheit über heiße Autos.",
    },
    fr: {
      title: "Voyager en voiture avec son chien | DoggMatch",
      description:
        "Comment attacher son chien en voiture, les premiers trajets pour un chien inquiet, le mal des transports, les longues routes — et la vérité sur la chaleur.",
    },
    nl: {
      title: "Veilig met je hond in de auto | DoggMatch",
      description:
        "Hoe je een hond veilig vervoert, eerste ritten met een onzekere hond, wagenziekte, lange ritten en pauzes — en de eerlijke waarheid over warme auto's.",
    },
  },

  travelOutdoors: {
    en: {
      title: "Walks, hikes and weather with your dog | DoggMatch",
      description:
        "Building up to longer walks, hot and cold weather, paw care on tarmac and grit, water safety, and what to take on a holiday with your dog.",
    },
    no: {
      title: "Turer, fjelltur og vær med hund | DoggMatch",
      description:
        "Bygge opp til lengre turer, varme og kulde, potestell på asfalt og strøsand, sikkerhet i vann, og hva du bør ha med på ferie med hund.",
    },
    pl: {
      title: "Spacery, wędrówki i pogoda z psem | DoggMatch",
      description:
        "Jak budować dłuższe trasy, upał i mróz, pielęgnacja łap na asfalcie i soli, bezpieczeństwo nad wodą i co zabrać na wakacje z psem.",
    },
    dk: {
      title: "Gåture, vandreture og vejr med hund | DoggMatch",
      description:
        "Sådan bygger I op til længere ture, varme og kulde, potepleje på asfalt og grus, sikkerhed i vand, og hvad I skal have med på ferie med hund.",
    },
    se: {
      title: "Promenader, vandring och väder med hund | DoggMatch",
      description:
        "Bygga upp till längre turer, värme och kyla, tassvård på asfalt och grus, säkerhet i vatten, och vad du tar med på semester med hund.",
    },
    fi: {
      title: "Lenkit, vaellukset ja sää koiran kanssa | DoggMatch",
      description:
        "Miten kasvatatte lenkkien pituutta, helle ja pakkanen, tassujen hoito asfaltilla ja hiekoituksessa, vesiturvallisuus ja mitä ottaa lomalle mukaan.",
    },
    de: {
      title: "Spaziergänge, Wandern und Wetter mit Hund | DoggMatch",
      description:
        "Längere Runden aufbauen, Hitze und Kälte, Pfotenpflege auf Asphalt und Streusalz, Sicherheit am Wasser und was in den Urlaub mit Hund gehört.",
    },
    fr: {
      title: "Balades, randonnées et météo avec son chien | DoggMatch",
      description:
        "Allonger les sorties progressivement, chaleur et froid, soin des coussinets sur bitume et sel, sécurité près de l'eau et quoi emporter en vacances.",
    },
    nl: {
      title: "Wandelen, hiken en weer met je hond | DoggMatch",
      description:
        "Rustig opbouwen naar langere wandelingen, hitte en kou, voetzoolverzorging op asfalt en strooizout, veiligheid bij water en wat mee op vakantie gaat.",
    },
  },
} satisfies Record<string, PageSeo>;

export type PageSeoKey = keyof typeof pageSeo;

/** "Guides" as the breadcrumb trail names it, in each language. */
export const guidesCrumb: Record<string, string> = {
  en: "Guides",
  no: "Guider",
  pl: "Poradniki",
  dk: "Guider",
  se: "Guider",
  fi: "Oppaat",
  de: "Ratgeber",
  fr: "Guides",
  nl: "Gidsen",
};
