import { Link, createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Arrow, ButtonLink, Badge, Eyebrow, Section } from "@/components/dogmatch/ui";
import { SectionHead } from "@/components/dogmatch/journey/parts";
import { JoinPlusButton } from "@/components/dogmatch/plus/join";
import { PartnerCodeField } from "@/components/dogmatch/plus/partner-code";
import { MemberCardShowcase } from "@/components/dogmatch/plus/card-showcase";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import heroImage from "@/assets/plus-hero.jpg";
import trainImage from "@/assets/train-recall.jpg";
import careImage from "@/assets/care-hero.jpg";
import foodImage from "@/assets/care-nutrition.jpg";
import dogLifeImage from "@/assets/dog-life.jpg";
import travelImage from "@/assets/travel-car.jpg";
import lunaImage from "@/assets/breed-labrador-retriever.jpg";
import maxImage from "@/assets/breed-cocker-spaniel.jpg";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { withLangPrefix } from "@/lib/localized-path";

const title = "DoggMatch+ | Premium Dog Life Membership";
const description =
  "DoggMatch+ brings your dog's training, health, nutrition, care, travel and everyday life together in one beautiful place.";
const url = "https://www.doggmatch.com/plus";

const seoCopy = {
  en: { title, description },
  no: {
    title: "DoggMatch+ | Medlemskap for hverdagen med hund",
    description:
      "DoggMatch+ samler hundens trening, helse, ernæring, stell, reiser og hverdag på ett fint sted.",
  },
  pl: {
    title: "DoggMatch+ | Członkostwo dla codziennego życia z psem",
    description:
      "DoggMatch+ zbiera szkolenie, zdrowie, żywienie, pielęgnację, podróże i codzienność Twojego psa w jednym pięknym miejscu.",
  },
  dk: {
    title: "DoggMatch+ | Medlemskab for hverdagen med hund",
    description:
      "DoggMatch+ samler din hunds træning, sundhed, ernæring, pleje, rejser og hverdag på ét smukt sted.",
  },
  se: {
    title: "DoggMatch+ | Medlemskap för vardagen med hund",
    description:
      "DoggMatch+ samlar din hunds träning, hälsa, kost, skötsel, resor och vardag på ett vackert ställe.",
  },
  fi: {
    title: "DoggMatch+ | Jäsenyys koiran kanssa elettävään arkeen",
    description:
      "DoggMatch+ kokoaa koirasi koulutuksen, terveyden, ruokinnan, hoidon, matkat ja arjen yhteen kauniiseen paikkaan.",
  },
  de: {
    title: "DoggMatch+ | Premium-Mitgliedschaft für das Leben mit Hund",
    description:
      "DoggMatch+ bringt Training, Gesundheit, Ernährung, Pflege, Reisen und den Alltag deines Hundes an einem schönen Ort zusammen.",
  },
  fr: {
    title: "DoggMatch+ | Abonnement premium pour la vie avec votre chien",
    description:
      "DoggMatch+ réunit l'éducation, la santé, l'alimentation, les soins, les voyages et le quotidien de votre chien en un seul bel endroit.",
  },
  nl: {
    title: "DoggMatch+ | Premium lidmaatschap voor het leven met je hond",
    description:
      "DoggMatch+ brengt training, gezondheid, voeding, verzorging, reizen en het dagelijks leven van je hond samen op één mooie plek.",
  },
};

/* ----------------------------------------- membership journey (8 stages) */
/* English is the source language; other locales fall back until translated. */

const stagesCopy = {
  en: {
    eyebrow: "From matching to everyday life",
    title: "One journey, from first search to daily life",
    body: "The free version helps you find the right dog. DoggMatch+ is everything that comes after — understanding, preparing, and living well with that dog, every single day.",
    freeLabel: "Free — find the right dog",
    freeLine:
      "The quiz, honest breed profiles, comparisons and yearly cost estimates. Yours to keep, no account needed.",
    plusLabel: "DoggMatch+ — live well with that dog, every day",
    plusLine:
      'Eight connected stages that carry you from "we think this is the one" to a calm, organised everyday life together.',
    stages: [
      {
        title: "Understand your dog",
        line: "Before anything else, get to know who you're living with.",
        examples: [
          "A personal profile built from your dog's breed, age and personality",
          "Plain-language notes on energy, sociability and typical quirks",
          "What your dog's breed was originally bred to do — and why it still shows",
        ],
      },
      {
        title: "Prepare for arrival",
        line: "The weeks before the dog comes home, handled calmly.",
        examples: [
          "A readiness checklist paced to your moving-in date",
          "Breed-aware shopping list — bed, lead, crate size and grooming tools",
          "Realistic first-year and yearly cost ranges for your specific breed",
        ],
      },
      {
        title: "Daily life — the My Dog hub",
        line: "One quiet place where your dog's whole day lives.",
        examples: [
          "Today's walks, meals, training and care on one simple screen",
          "Weekly plans that adapt as your dog grows from puppy to adult",
          "Separate profiles for every dog in the family",
        ],
      },
      {
        title: "Training",
        line: "Short, kind sessions that fit into an ordinary day.",
        examples: [
          "Step-by-step lessons with a built-in timer — most take five minutes",
          "Progress tracking from first sit to reliable recall",
          "Difficulty matched to your dog's age and your experience",
        ],
      },
      {
        title: "Food & weight",
        line: "Feeding that adjusts to the dog in front of you.",
        examples: [
          "Daily portion guidance based on weight, age and activity",
          "Weight tracking with gentle nudges if the curve drifts",
          "An honest food-safety list — what's fine, what's never fine",
        ],
      },
      {
        title: "Health & care calendar",
        line: "The small things, remembered for you.",
        examples: [
          "Vaccinations, worming and vet visits on one shared calendar",
          "Dental, coat, paws and nails — each with a simple routine",
          "A health diary that helps you spot changes over weeks, not guess",
        ],
      },
      {
        title: "Travel & documents",
        line: "Crossing borders without the last-minute paperwork panic.",
        examples: [
          "Country-to-country rules checked before you book anything",
          "Passport, chip and vaccination requirements in plain language",
          "A travel document pack ready to show at the border or the vet",
        ],
      },
      {
        title: "The printable Dog Pack",
        line: "Everything about your dog, on paper, for anyone who needs it.",
        examples: [
          "A one-page summary for the vet, sitter or kennel",
          "Feeding, medication and emergency contacts in one place",
          "Print it, save it as a PDF, or share it before you travel",
        ],
      },
    ],
    closing:
      "No pressure and no lock-in — the free result stays complete either way. DoggMatch+ is simply there when the dog comes home.",
  },
  no: {
    eyebrow: "Fra matching til hverdagen",
    title: "Én reise, fra første søk til dagligliv",
    body: "Gratisversjonen hjelper deg å finne den rette hunden. DoggMatch+ er alt som kommer etter – forståelse, forberedelse og et godt liv sammen med den hunden, hver eneste dag.",
    freeLabel: "Gratis – finn den rette hunden",
    freeLine:
      "Quizen, ærlige raseprofiler, sammenligninger og årlige kostnadsestimater. Ditt for alltid, ingen konto nødvendig.",
    plusLabel: "DoggMatch+ – lev godt med den hunden, hver dag",
    plusLine:
      "Åtte sammenkoblede faser som tar deg fra «vi tror dette er den rette» til et rolig, organisert hverdagsliv sammen.",
    stages: [
      {
        title: "Forstå hunden din",
        line: "Før noe annet, bli kjent med den du skal bo sammen med.",
        examples: [
          "En personlig profil bygget på hundens rase, alder og personlighet",
          "Enkel forklaring på energinivå, sosialitet og typiske særegenheter",
          "Hva hundens rase opprinnelig ble avlet for – og hvorfor det fortsatt vises",
        ],
      },
      {
        title: "Forbered deg på ankomst",
        line: "Ukene før hunden kommer hjem, håndtert rolig.",
        examples: [
          "En sjekkliste for klarhet, tilpasset innflyttingsdatoen din",
          "Rase-tilpasset handleliste – seng, bånd, burstørrelse og pleieverktøy",
          "Realistiske kostnadsanslag for første år og årlig for din spesifikke rase",
        ],
      },
      {
        title: "Hverdagsliv – My Dog-huben",
        line: "Ett rolig sted der hele hundens dag bor.",
        examples: [
          "Dagens turer, måltider, trening og stell på én enkel skjerm",
          "Ukentlige planer som tilpasses etter hvert som hunden din vokser fra valp til voksen",
          "Separate profiler for hver hund i familien",
        ],
      },
      {
        title: "Trening",
        line: "Korte, vennlige økter som passer inn i en vanlig dag.",
        examples: [
          "Steg-for-steg-leksjoner med innebygd tidtaker – de fleste tar fem minutter",
          "Fremdriftssporing fra første «sitt» til pålitelig innkalling",
          "Vanskelighetsgrad tilpasset hundens alder og din erfaring",
        ],
      },
      {
        title: "Mat & vekt",
        line: "Fôring som tilpasses hunden foran deg.",
        examples: [
          "Daglig porsjonsveiledning basert på vekt, alder og aktivitet",
          "Vektsporing med milde påminnelser hvis kurven avviker",
          "En ærlig liste over trygg mat – hva som er greit, hva som aldri er greit",
        ],
      },
      {
        title: "Helse & stell-kalender",
        line: "De små tingene, husket for deg.",
        examples: [
          "Vaksinasjoner, ormekur og veterinærbesøk på én delt kalender",
          "Tannpleie, pels, poter og klør – hver med en enkel rutine",
          "En helsedagbok som hjelper deg å oppdage endringer over uker, ikke gjette",
        ],
      },
      {
        title: "Reise & dokumenter",
        line: "Kryss grenser uten panikk for papirarbeid i siste liten.",
        examples: [
          "Regler for land-til-land sjekket før du bestiller noe",
          "Pass, chip og vaksinasjonskrav forklart enkelt",
          "En reisedokumentpakke klar til å vises ved grensen eller hos veterinæren",
        ],
      },
      {
        title: "Den utskrivbare Hundepakken",
        line: "Alt om hunden din, på papir, for alle som trenger det.",
        examples: [
          "En oppsummering på én side for veterinæren, passeren eller kennel",
          "Fôring, medisinering og nødnummer på ett sted",
          "Skriv den ut, lagre den som PDF, eller del den før du reiser",
        ],
      },
    ],
    closing:
      "Ingen press og ingen binding – gratisresultatet forblir komplett uansett. DoggMatch+ er rett og slett der når hunden kommer hjem.",
  },
  pl: {
    eyebrow: "Od dopasowania do codzienności",
    title: "Jedna podróż, od pierwszego wyszukiwania do życia na co dzień",
    body: "Darmowa wersja pomaga znaleźć odpowiedniego psa. DoggMatch+ to wszystko, co dzieje się później – zrozumienie, przygotowanie i dobre życie z tym psem, każdego dnia.",
    freeLabel: "Za darmo – znajdź odpowiedniego psa",
    freeLine:
      "Quiz, rzetelne profile ras, porównania i szacunkowe roczne koszty. Twoje na zawsze, bez konieczności zakładania konta.",
    plusLabel: "DoggMatch+ – żyj dobrze z tym psem, każdego dnia",
    plusLine:
      "Osiem połączonych etapów, które przeprowadzą Cię od „myślimy, że to ten” do spokojnego, zorganizowanego wspólnego życia.",
    stages: [
      {
        title: "Poznaj swojego psa",
        line: "Zanim cokolwiek innego, dowiedz się, z kim będziesz mieszkać.",
        examples: [
          "Osobisty profil stworzony na podstawie rasy, wieku i osobowości Twojego psa",
          "Proste wyjaśnienia dotyczące poziomu energii, socjalności i typowych zachowań",
          "Do czego pierwotnie hodowano daną rasę – i dlaczego nadal to widać",
        ],
      },
      {
        title: "Przygotuj się na przybycie",
        line: "Tygodnie przed przybyciem psa, spokojnie ogarnięte.",
        examples: [
          "Lista kontrolna gotowości, dopasowana do daty przeprowadzki",
          "Lista zakupów uwzględniająca rasę – legowisko, smycz, rozmiar klatki i narzędzia do pielęgnacji",
          "Realistyczne szacunki kosztów pierwszego roku i kosztów rocznych dla Twojej konkretnej rasy",
        ],
      },
      {
        title: "Codzienne życie – centrum Mój Pies",
        line: "Jedno spokojne miejsce, w którym toczy się cały dzień Twojego psa.",
        examples: [
          "Dzisiejsze spacery, posiłki, treningi i opieka na jednym prostym ekranie",
          "Tygodniowe plany, które dostosowują się w miarę dorastania psa od szczeniaka do dorosłego",
          "Oddzielne profile dla każdego psa w rodzinie",
        ],
      },
      {
        title: "Trening",
        line: "Krótkie, łagodne sesje, które pasują do zwykłego dnia.",
        examples: [
          "Lekcje krok po kroku z wbudowanym timerem – większość trwa pięć minut",
          "Śledzenie postępów od pierwszego „siad” do pewnego przywołania",
          "Poziom trudności dopasowany do wieku psa i Twojego doświadczenia",
        ],
      },
      {
        title: "Jedzenie i waga",
        line: "Karmienie, które dostosowuje się do psa przed Tobą.",
        examples: [
          "Dzienne wytyczne dotyczące porcji na podstawie wagi, wieku i aktywności",
          "Śledzenie wagi z delikatnymi przypomnieniami, jeśli waga odbiega od normy",
          "Rzetelna lista bezpiecznych pokarmów – co jest w porządku, co nigdy nie jest w porządku",
        ],
      },
      {
        title: "Kalendarz zdrowia i pielęgnacji",
        line: "Drobiazgi, o których pamiętamy za Ciebie.",
        examples: [
          "Szczepienia, odrobaczanie i wizyty u weterynarza w jednym, wspólnym kalendarzu",
          "Zęby, sierść, łapy i pazury – każdy z prostą rutyną",
          "Dziennik zdrowia, który pomaga zauważyć zmiany w ciągu tygodni, a nie zgadywać",
        ],
      },
      {
        title: "Podróże i dokumenty",
        line: "Przekraczanie granic bez paniki związanej z ostatnią chwilą i papierkową robotą.",
        examples: [
          "Zasady obowiązujące między krajami sprawdzane przed dokonaniem rezerwacji",
          "Wymagania dotyczące paszportu, chipa i szczepień wyjaśnione prostym językiem",
          "Zestaw dokumentów podróżnych gotowy do okazania na granicy lub u weterynarza",
        ],
      },
      {
        title: "Pies Pack do wydruku",
        line: "Wszystko o Twoim psie, na papierze, dla każdego, kto tego potrzebuje.",
        examples: [
          "Jednostronicowe podsumowanie dla weterynarza, opiekuna lub hotelu dla psów",
          "Karmienie, leki i kontakty alarmowe w jednym miejscu",
          "Wydrukuj, zapisz jako PDF lub udostępnij przed podróżą",
        ],
      },
    ],
    closing:
      "Bez presji i bez zobowiązań – darmowy wynik pozostaje kompletny w każdym przypadku. DoggMatch+ jest po prostu dostępny, gdy pies już przyjedzie do domu.",
  },
  dk: {
    eyebrow: "Fra match til hverdag",
    title: "Én rejse, fra første søgning til dagligdagen",
    body: "Gratisversionen hjælper dig med at finde den rette hund. DoggMatch+ er alt det, der kommer derefter — forståelse, forberedelse og et godt liv med hunden, hver eneste dag.",
    freeLabel: "Gratis — find den rette hund",
    freeLine:
      "Quizzen, ærlige raceprofiler, sammenligninger og estimater for årlige omkostninger. Dit til evig tid, ingen konto nødvendig.",
    plusLabel: "DoggMatch+ — lev godt med hunden, hver dag",
    plusLine:
      'Otte forbundne faser, der fører dig fra "vi tror, det er den" til en rolig, organiseret hverdag sammen.',
    stages: [
      {
        title: "Forstå din hund",
        line: "Først og fremmest, lær hvem du skal bo sammen med at kende.",
        examples: [
          "En personlig profil baseret på din hunds race, alder og personlighed",
          "Letforståelige noter om energiniveau, social adfærd og typiske særheder",
          "Hvad din hunds race oprindeligt blev avlet til — og hvorfor det stadig viser sig",
        ],
      },
      {
        title: "Forbered ankomsten",
        line: "Ugerne før hunden kommer hjem, håndteret roligt.",
        examples: [
          "En tjekliste for parathed, tilpasset din indflytningsdato",
          "Race-specifik indkøbsliste — seng, snor, kurvstørrelse og plejeværktøj",
          "Realistiske omkostningsintervaller for det første år og årligt for din specifikke race",
        ],
      },
      {
        title: 'Dagligdagen — "Min Hund"-hubben',
        line: "Ét roligt sted, hvor din hunds hele dag lever.",
        examples: [
          "Dagens gåture, måltider, træning og pleje på én simpel skærm",
          "Ugentlige planer, der tilpasser sig, efterhånden som din hund vokser fra hvalp til voksen",
          "Separate profiler for hver hund i familien",
        ],
      },
      {
        title: "Træning",
        line: "Korte, venlige sessioner, der passer ind i en almindelig dag.",
        examples: [
          "Trin-for-trin lektioner med indbygget timer — de fleste tager fem minutter",
          'Fremdriftssporing fra første "sit" til pålidelig indkaldelse',
          "Sværhedsgrad matchet til din hunds alder og din erfaring",
        ],
      },
      {
        title: "Mad & vægt",
        line: "Fodring, der tilpasser sig den hund, du har foran dig.",
        examples: [
          "Daglig portionsvejledning baseret på vægt, alder og aktivitet",
          "Vægtsporing med blide påmindelser, hvis kurven afviger",
          "En ærlig liste over fødevaresikkerhed — hvad der er okay, hvad der aldrig er okay",
        ],
      },
      {
        title: "Sundheds- & plejekalender",
        line: "De små ting, husket for dig.",
        examples: [
          "Vaccinationer, ormekur og dyrlægebesøg på én delt kalender",
          "Tænder, pels, poter og negle — hver med en simpel rutine",
          "En sundhedsdagbog, der hjælper dig med at spotte ændringer over uger, ikke gætte",
        ],
      },
      {
        title: "Rejser & dokumenter",
        line: "Kryds grænser uden panik over papirarbejde i sidste øjeblik.",
        examples: [
          "Regler fra land til land tjekket, før du booker noget",
          "Pas-, chip- og vaccinationskrav i letforståeligt sprog",
          "En rejsedokumentpakke klar til at vise ved grænsen eller dyrlægen",
        ],
      },
      {
        title: "Den printbare Hundepakke",
        line: "Alt om din hund, på papir, til alle der har brug for det.",
        examples: [
          "En opsummering på én side til dyrlægen, hundepasseren eller kennel",
          "Fodring, medicin og nødnumre samlet ét sted",
          "Print den, gem den som PDF, eller del den før du rejser",
        ],
      },
    ],
    closing:
      "Intet pres og ingen binding — det gratis resultat forbliver komplet uanset hvad. DoggMatch+ er der simpelthen, når hunden kommer hjem.",
  },
  se: {
    eyebrow: "Från matchning till vardagsliv",
    title: "En resa, från första sökning till vardagsliv",
    body: "Gratisversionen hjälper dig att hitta rätt hund. DoggMatch+ är allt som kommer sedan – att förstå, förbereda sig för och leva ett bra liv med den hunden, varje dag.",
    freeLabel: "Gratis – hitta rätt hund",
    freeLine:
      "Frågorna, ärliga rasprofiler, jämförelser och uppskattade årskostnader. Ditt att behålla, ingen inloggning behövs.",
    plusLabel: "DoggMatch+ – lev ett bra liv med den hunden, varje dag",
    plusLine:
      'Åtta sammankopplade steg som tar dig från "vi tror att det är den här" till ett lugnt, organiserat vardagsliv tillsammans.',
    stages: [
      {
        title: "Förstå din hund",
        line: "Innan något annat, lär känna vem du bor med.",
        examples: [
          "En personlig profil baserad på din hunds ras, ålder och personlighet",
          "Enkla förklaringar om energinivå, socialitet och typiska egenheter",
          "Vad din hunds ras ursprungligen avlades för – och varför det fortfarande syns",
        ],
      },
      {
        title: "Förbered för ankomst",
        line: "Veckorna innan hunden kommer hem, hanterade lugnt.",
        examples: [
          "En checklista för förberedelser, anpassad efter din inflyttningsdatum",
          "Inköpslista anpassad efter rasen – säng, koppel, burstorlek och pälsvårdsverktyg",
          "Realistiska kostnadsintervall för första året och per år för din specifika ras",
        ],
      },
      {
        title: "Vardagsliv – My Dog-navet",
        line: "En lugn plats där din hunds hela dag lever.",
        examples: [
          "Dagens promenader, måltider, träning och skötsel på en enkel skärm",
          "Veckoplaner som anpassas när din hund växer från valp till vuxen",
          "Separata profiler för varje hund i familjen",
        ],
      },
      {
        title: "Träning",
        line: "Korta, vänliga pass som passar in i en vanlig dag.",
        examples: [
          "Steg-för-steg-lektioner med inbyggd timer – de flesta tar fem minuter",
          "Framstegsspårning från första sitt till pålitlig inkallning",
          "Svårighetsgrad anpassad efter din hunds ålder och din erfarenhet",
        ],
      },
      {
        title: "Mat & vikt",
        line: "Utfodring som anpassas efter hunden framför dig.",
        examples: [
          "Daglig portionsguide baserad på vikt, ålder och aktivitet",
          "Vikthantering med milda påminnelser om kurvan avviker",
          "En ärlig lista över livsmedelssäkerhet – vad som är okej, vad som aldrig är okej",
        ],
      },
      {
        title: "Hälsa & skötselkalender",
        line: "De små sakerna, ihågkomna åt dig.",
        examples: [
          "Vaccinationer, avmaskning och veterinärbesök i en gemensam kalender",
          "Tänder, päls, tassar och klor – var och en med en enkel rutin",
          "En hälsodagbok som hjälper dig att upptäcka förändringar över veckor, inte gissa",
        ],
      },
      {
        title: "Resor & dokument",
        line: "Att korsa gränser utan panik för sista-minuten-papper.",
        examples: [
          "Regler för land-till-land kontrollerade innan du bokar något",
          "Pass, chip och vaccinationskrav på enkel svenska",
          "Ett resehandledningspaket redo att visas vid gränsen eller hos veterinären",
        ],
      },
      {
        title: "Den utskrivbara Hundpaketet",
        line: "Allt om din hund, på papper, för alla som behöver det.",
        examples: [
          "En sammanfattning på en sida för veterinären, hundvakten eller pensionatet",
          "Utfodring, medicinering och nödnummer på ett ställe",
          "Skriv ut det, spara det som PDF, eller dela det innan du reser",
        ],
      },
    ],
    closing:
      "Inget tryck och ingen bindning – det gratis resultat förblir komplett oavsett. DoggMatch+ finns helt enkelt där när hunden kommer hem.",
  },
  fi: {
    eyebrow: "Sopivasta arkeen",
    title: "Yksi matka, ensi etsinnästä jokapäiväiseen elämään",
    body: "Ilmaisversio auttaa sinua löytämään oikean koiran. DoggMatch+ on kaikki sen jälkeen – koiran ymmärtäminen, siihen valmistautuminen ja sen kanssa hyvin eläminen, joka ikinen päivä.",
    freeLabel: "Ilmainen – löydä oikea koira",
    freeLine:
      "Tietovisa, rehelliset rotukuvaukset, vertailut ja vuotuiset kustannusarviot. Sinun omaksi, ei vaadi tiliä.",
    plusLabel: "DoggMatch+ – elä hyvin koirasi kanssa, joka päivä",
    plusLine:
      'Kahdeksan yhdistettyä vaihetta, jotka johdattavat sinut "uskomme, että tämä on se oikea" -ajatuksesta rauhalliseen, järjestettyyn arkeen yhdessä.',
    stages: [
      {
        title: "Ymmärrä koiraasi",
        line: "Ennen kaikkea, tutustu siihen, kenen kanssa elät.",
        examples: [
          "Henkilökohtainen profiili koirasi rodun, iän ja persoonallisuuden perusteella",
          "Selkokieliset huomiot energiatasosta, sosiaalisuudesta ja tyypillisistä piirteistä",
          "Mihin koirasi rotua alun perin jalostettiin – ja miksi se näkyy edelleen",
        ],
      },
      {
        title: "Valmistaudu tuloon",
        line: "Viikot ennen koiran kotiintuloa, hoidettuna rauhallisesti.",
        examples: [
          "Valmiustarkistuslista rytmitettynä kotiintulopäivääsi",
          "Rotutietoinen ostoslista – peti, talutin, kuljetuskopan koko ja hoitovälineet",
          "Realistiset ensimmäisen vuoden ja vuotuiset kustannusarviot juuri sinun rodullesi",
        ],
      },
      {
        title: "Arki – Oma Koira -keskus",
        line: "Yksi rauhallinen paikka, jossa koirasi koko päivä elää.",
        examples: [
          "Päivän lenkit, ruokinnat, koulutukset ja hoito yhdellä yksinkertaisella näytöllä",
          "Viikko-ohjelmat, jotka mukautuvat koiran kasvaessa pennusta aikuiseksi",
          "Erilliset profiilit jokaiselle perheen koiralle",
        ],
      },
      {
        title: "Koulutus",
        line: "Lyhyitä, lempeitä harjoituksia, jotka sopivat tavalliseen päivään.",
        examples: [
          "Vaiheittaiset oppitunnit sisäänrakennetulla ajastimella – useimmat kestävät viisi minuuttia",
          "Edistymisen seuranta ensimmäisestä istumisesta luotettavaan luoksetuloon",
          "Vaikeustaso sovitettuna koirasi ikään ja sinun kokemukseesi",
        ],
      },
      {
        title: "Ruoka & paino",
        line: "Ruokinta, joka mukautuu edessäsi olevaan koiraan.",
        examples: [
          "Päivittäinen annosohje painon, iän ja aktiivisuuden mukaan",
          "Painon seuranta lempeillä muistutuksilla, jos käyrä poikkeaa",
          "Rehellinen ruokaturvallisuuslista – mikä on ok, mikä ei koskaan ole ok",
        ],
      },
      {
        title: "Terveys & hoitokalenteri",
        line: "Pienet asiat, muistettuna sinulle.",
        examples: [
          "Rokotukset, madotukset ja eläinlääkärikäynnit yhdellä jaetulla kalenterilla",
          "Hampaat, turkki, tassut ja kynnet – jokaiselle yksinkertainen rutiini",
          "Terveyspäiväkirja, joka auttaa sinua huomaamaan muutokset viikkojen aikana, ei arvailemaan",
        ],
      },
      {
        title: "Matkustus & dokumentit",
        line: "Rajojen ylitys ilman viime hetken paperityöpaniikkia.",
        examples: [
          "Maa-kohtaiset säännöt tarkistettuna ennen kuin varaat mitään",
          "Passi-, siru- ja rokotusvaatimukset selkokielellä",
          "Matkustusasiakirjapaketti valmiina näytettäväksi rajalla tai eläinlääkärissä",
        ],
      },
      {
        title: "Tulostettava Koirapaketti",
        line: "Kaikki koirastasi, paperilla, kaikille, jotka sitä tarvitsevat.",
        examples: [
          "Yhden sivun yhteenveto eläinlääkärille, hoitajalle tai kennelille",
          "Ruokinta-, lääkitys- ja hätäyhteystiedot yhdessä paikassa",
          "Tulosta se, tallenna PDF:ksi tai jaa se ennen matkaa",
        ],
      },
    ],
    closing:
      "Ei paineita eikä sitoumuksia – ilmainen tulos pysyy täydellisenä joka tapauksessa. DoggMatch+ on yksinkertaisesti olemassa, kun koira tulee kotiin.",
  },
  de: {
    eyebrow: "Vom Kennenlernen bis zum Alltag",
    title: "Ein Weg, von der ersten Suche bis zum täglichen Leben",
    body: "Die kostenlose Version hilft Ihnen, den richtigen Hund zu finden. DoggMatch+ ist alles, was danach kommt – den Hund verstehen, sich vorbereiten und gut mit ihm leben, jeden einzelnen Tag.",
    freeLabel: "Kostenlos – finden Sie den richtigen Hund",
    freeLine:
      "Der Quiz, ehrliche Rassenprofile, Vergleiche und jährliche Kostenschätzungen. Zum Behalten, kein Konto nötig.",
    plusLabel: "DoggMatch+ – leben Sie gut mit diesem Hund, jeden Tag",
    plusLine:
      "Acht miteinander verbundene Phasen, die Sie von „Wir glauben, das ist er/sie“ zu einem ruhigen, organisierten Alltag gemeinsam begleiten.",
    stages: [
      {
        title: "Verstehen Sie Ihren Hund",
        line: "Lernen Sie zuerst kennen, mit wem Sie zusammenleben.",
        examples: [
          "Ein persönliches Profil, erstellt aus Rasse, Alter und Persönlichkeit Ihres Hundes",
          "Erklärungen in einfacher Sprache zu Energielevel, Sozialverhalten und typischen Eigenheiten",
          "Wofür Ihre Hunderasse ursprünglich gezüchtet wurde – und warum sie sich immer noch zeigt",
        ],
      },
      {
        title: "Vorbereitung auf die Ankunft",
        line: "Die Wochen vor der Ankunft des Hundes, ruhig und gelassen.",
        examples: [
          "Eine Checkliste zur Vorbereitung, abgestimmt auf Ihr Einzugsdatum",
          "Rassespezifische Einkaufsliste – Bett, Leine, Körbchengröße und Pflegeutensilien",
          "Realistische Kosten für das erste Jahr und jährliche Kosten für Ihre spezifische Rasse",
        ],
      },
      {
        title: "Alltag – die „Mein Hund“-Zentrale",
        line: "Ein ruhiger Ort, an dem der ganze Tag Ihres Hundes stattfindet.",
        examples: [
          "Spaziergänge, Mahlzeiten, Training und Pflege des Tages auf einem einfachen Bildschirm",
          "Wochenpläne, die sich anpassen, wenn Ihr Hund vom Welpen zum Erwachsenen heranwächst",
          "Separate Profile für jeden Hund in der Familie",
        ],
      },
      {
        title: "Training",
        line: "Kurze, freundliche Einheiten, die in einen normalen Tag passen.",
        examples: [
          "Schritt-für-Schritt-Anleitungen mit integriertem Timer – die meisten dauern fünf Minuten",
          "Fortschrittsverfolgung vom ersten „Sitz“ bis zum zuverlässigen Rückruf",
          "Schwierigkeitsgrad angepasst an das Alter Ihres Hundes und Ihre Erfahrung",
        ],
      },
      {
        title: "Futter & Gewicht",
        line: "Fütterung, die sich an den Hund vor Ihnen anpasst.",
        examples: [
          "Tägliche Portionsangaben basierend auf Gewicht, Alter und Aktivität",
          "Gewichtskontrolle mit sanften Hinweisen, wenn die Kurve abweicht",
          "Eine ehrliche Liste zur Lebensmittelsicherheit – was ist in Ordnung, was ist niemals in Ordnung",
        ],
      },
      {
        title: "Gesundheits- & Pflegekalender",
        line: "Die kleinen Dinge, an die für Sie gedacht wird.",
        examples: [
          "Impfungen, Entwurmungen und Tierarztbesuche in einem gemeinsamen Kalender",
          "Zähne, Fell, Pfoten und Krallen – jeder mit einer einfachen Routine",
          "Ein Gesundheitstagebuch, das Ihnen hilft, Veränderungen über Wochen zu erkennen, statt zu raten",
        ],
      },
      {
        title: "Reisen & Dokumente",
        line: "Grenzen überqueren ohne den Last-Minute-Papierkram-Schreck.",
        examples: [
          "Länderübergreifende Regeln, geprüft, bevor Sie etwas buchen",
          "Pass-, Chip- und Impfanforderungen in einfacher Sprache",
          "Ein Reise-Dokumentenpaket, bereit zur Vorlage an der Grenze oder beim Tierarzt",
        ],
      },
      {
        title: "Das ausdruckbare Hunde-Paket",
        line: "Alles über Ihren Hund, auf Papier, für jeden, der es braucht.",
        examples: [
          "Eine Ein-Seiten-Zusammenfassung für den Tierarzt, Sitter oder die Pension",
          "Fütterung, Medikamente und Notfallkontakte an einem Ort",
          "Ausdrucken, als PDF speichern oder vor der Reise teilen",
        ],
      },
    ],
    closing:
      "Kein Druck und keine Verpflichtung – das kostenlose Ergebnis bleibt so oder so vollständig. DoggMatch+ ist einfach da, wenn der Hund nach Hause kommt.",
  },
  fr: {
    eyebrow: "De la recherche à la vie de tous les jours",
    title: "Un parcours, de la première recherche à la vie quotidienne",
    body: "La version gratuite vous aide à trouver le bon chien. DoggMatch+ est tout ce qui suit : comprendre, préparer et vivre en harmonie avec ce chien, chaque jour.",
    freeLabel: "Gratuit — trouvez le bon chien",
    freeLine:
      "Le quiz, des profils de races honnêtes, des comparaisons et des estimations de coûts annuels. À vous de garder, aucun compte nécessaire.",
    plusLabel: "DoggMatch+ — vivez en harmonie avec ce chien, chaque jour",
    plusLine:
      "Huit étapes connectées qui vous mènent de « nous pensons que c'est le bon » à une vie quotidienne calme et organisée ensemble.",
    stages: [
      {
        title: "Comprendre votre chien",
        line: "Avant toute chose, apprenez à connaître celui avec qui vous vivez.",
        examples: [
          "Un profil personnel basé sur la race, l'âge et la personnalité de votre chien",
          "Des notes en langage clair sur l'énergie, la sociabilité et les particularités typiques",
          "Ce pour quoi la race de votre chien a été initialement sélectionnée — et pourquoi cela se manifeste encore",
        ],
      },
      {
        title: "Préparer l'arrivée",
        line: "Les semaines avant l'arrivée du chien, gérées en toute sérénité.",
        examples: [
          "Une liste de préparation adaptée à votre date d'emménagement",
          "Liste de courses adaptée à la race — panier, laisse, taille de cage et outils de toilettage",
          "Estimations réalistes des coûts pour la première année et annuels pour votre race spécifique",
        ],
      },
      {
        title: "Vie quotidienne — le hub Mon Chien",
        line: "Un espace tranquille où se déroule la journée de votre chien.",
        examples: [
          "Les promenades, repas, entraînements et soins du jour sur un écran simple",
          "Des plans hebdomadaires qui s'adaptent à mesure que votre chien grandit, du chiot à l'adulte",
          "Des profils séparés pour chaque chien de la famille",
        ],
      },
      {
        title: "Éducation",
        line: "Des sessions courtes et bienveillantes qui s'intègrent dans une journée ordinaire.",
        examples: [
          "Leçons étape par étape avec un minuteur intégré — la plupart prennent cinq minutes",
          "Suivi des progrès, du premier « assis » au rappel fiable",
          "Difficulté adaptée à l'âge de votre chien et à votre expérience",
        ],
      },
      {
        title: "Alimentation & poids",
        line: "Une alimentation qui s'adapte au chien que vous avez devant vous.",
        examples: [
          "Guide des portions quotidiennes basé sur le poids, l'âge et l'activité",
          "Suivi du poids avec des rappels discrets si la courbe dévie",
          "Une liste honnête sur la sécurité alimentaire — ce qui est acceptable, ce qui ne l'est jamais",
        ],
      },
      {
        title: "Calendrier santé & soins",
        line: "Les petits détails, dont on se souvient pour vous.",
        examples: [
          "Vaccinations, vermifugations et visites chez le vétérinaire sur un calendrier partagé",
          "Dents, pelage, pattes et griffes — chacun avec une routine simple",
          "Un journal de santé qui vous aide à repérer les changements sur plusieurs semaines, sans deviner",
        ],
      },
      {
        title: "Voyages & documents",
        line: "Traverser les frontières sans la panique des papiers de dernière minute.",
        examples: [
          "Règles pays par pays vérifiées avant de réserver quoi que ce soit",
          "Passeport, puce électronique et exigences de vaccination expliqués simplement",
          "Un dossier de documents de voyage prêt à présenter à la frontière ou chez le vétérinaire",
        ],
      },
      {
        title: "Le Pack Chien imprimable",
        line: "Tout sur votre chien, sur papier, pour quiconque en a besoin.",
        examples: [
          "Un résumé d'une page pour le vétérinaire, le gardien ou le chenil",
          "Alimentation, médicaments et contacts d'urgence en un seul endroit",
          "Imprimez-le, enregistrez-le en PDF, ou partagez-le avant de voyager",
        ],
      },
    ],
    closing:
      "Aucune pression et aucun engagement — le résultat gratuit reste complet dans tous les cas. DoggMatch+ est simplement là quand le chien arrive à la maison.",
  },
  nl: {
    eyebrow: "Van match tot dagelijks leven",
    title: "Eén reis, van de eerste zoektocht tot het dagelijks leven",
    body: "De gratis versie helpt je de juiste hond te vinden. DoggMatch+ is alles wat daarna komt — begrijpen, voorbereiden en goed leven met die hond, elke dag weer.",
    freeLabel: "Gratis — vind de juiste hond",
    freeLine:
      "De quiz, eerlijke rasprofielen, vergelijkingen en jaarlijkse kostenramingen. Voor jou, zonder account nodig.",
    plusLabel: "DoggMatch+ — leef elke dag goed met die hond",
    plusLine:
      "Acht verbonden fasen die je begeleiden van 'we denken dat dit 'm is' naar een rustig, georganiseerd dagelijks leven samen.",
    stages: [
      {
        title: "Begrijp je hond",
        line: "Leer eerst wie je in huis haalt kennen.",
        examples: [
          "Een persoonlijk profiel op basis van ras, leeftijd en persoonlijkheid van je hond",
          "Duidelijke uitleg over energie, sociaal gedrag en typische eigenaardigheden",
          "Waar je hond oorspronkelijk voor gefokt is — en waarom dat nog steeds zichtbaar is",
        ],
      },
      {
        title: "Voorbereiden op de komst",
        line: "De weken voordat de hond thuiskomt, rustig geregeld.",
        examples: [
          "Een checklist voorbereiding, afgestemd op je verhuisdatum",
          "Ras-specifieke boodschappenlijst — mand, riem, benchmaat en verzorgingsspullen",
          "Realistische kostenramingen voor het eerste jaar en daarna, voor jouw specifieke ras",
        ],
      },
      {
        title: "Dagelijks leven — de 'Mijn Hond' hub",
        line: "Eén rustige plek waar de hele dag van je hond samenkomt.",
        examples: [
          "Wandelingen, maaltijden, training en verzorging van vandaag op één eenvoudig scherm",
          "Wekelijkse plannen die zich aanpassen naarmate je hond groeit van pup tot volwassen",
          "Aparte profielen voor elke hond in het gezin",
        ],
      },
      {
        title: "Training",
        line: "Korte, vriendelijke sessies die in een gewone dag passen.",
        examples: [
          "Stapsgewijze lessen met een ingebouwde timer — de meeste duren vijf minuten",
          "Voortgang bijhouden van de eerste zit tot betrouwbaar komen",
          "Moeilijkheidsgraad aangepast aan de leeftijd van je hond en jouw ervaring",
        ],
      },
      {
        title: "Voeding & gewicht",
        line: "Voeding die zich aanpast aan de hond voor je.",
        examples: [
          "Dagelijkse portie-advies op basis van gewicht, leeftijd en activiteit",
          "Gewicht bijhouden met zachte aanwijzingen als de curve afwijkt",
          "Een eerlijke lijst met voedselveiligheid — wat mag wel, wat mag nooit",
        ],
      },
      {
        title: "Gezondheid & zorg kalender",
        line: "De kleine dingen, voor jou onthouden.",
        examples: [
          "Vaccinaties, ontworming en dierenartsbezoeken op één gedeelde kalender",
          "Tanden, vacht, poten en nagels — elk met een eenvoudige routine",
          "Een gezondheidsdagboek dat je helpt veranderingen over weken te signaleren, niet te raden",
        ],
      },
      {
        title: "Reizen & documenten",
        line: "Grenzen over zonder de paniek van last-minute papierwerk.",
        examples: [
          "Regels per land gecheckt voordat je iets boekt",
          "Paspoort-, chip- en vaccinatievereisten in duidelijke taal",
          "Een reispapierenpakket klaar om te tonen bij de grens of de dierenarts",
        ],
      },
      {
        title: "Het printbare Hondenpakket",
        line: "Alles over je hond, op papier, voor iedereen die het nodig heeft.",
        examples: [
          "Een samenvatting van één pagina voor de dierenarts, oppas of kennel",
          "Voeding, medicatie en noodcontacten op één plek",
          "Print het, sla het op als PDF, of deel het voordat je op reis gaat",
        ],
      },
    ],
    closing:
      "Geen druk en geen verplichtingen — het gratis resultaat blijft hoe dan ook compleet. DoggMatch+ is er gewoon als de hond thuiskomt.",
  },
};

export const Route = createFileRoute("/{-$lang}/plus")({
  head: (ctx) => localizedHead(ctx, "/plus", seoCopy),
  component: PlusPage,
});

/* ------------------------------------------------------------- small bits */

function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Rail({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div
      aria-label={label}
      className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
    >
      {children}
    </div>
  );
}

function RailItem({ children }: { children: ReactNode }) {
  return <div className="w-[78vw] shrink-0 snap-start sm:w-auto">{children}</div>;
}

function Tick() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="mt-[3px] h-4 w-4 shrink-0 text-accent"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5 8 14.5 16 6" />
    </svg>
  );
}

function Stars({ filled, label }: { filled: number; label: string }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={cn("h-3.5 w-3.5", i < filled ? "text-accent" : "text-border-strong")}
          fill="currentColor"
          aria-hidden
        >
          <path d="m10 1.8 2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

/* -------------------------------------------------------------- page data */

const copy = {
  en: {
    flow: [
      "Find your dog",
      "Understand your dog",
      "Prepare for your dog",
      "Live with your dog",
      "Look after your dog",
      "Enjoy life together",
    ],
    myDogSections: [
      { to: "/my-dog/care/everyday-check", label: "Health", line: "The quick daily once-over" },
      { to: "/my-dog/nutrition", label: "Food", line: "Portions and meals" },
      { to: "/train", label: "Training", line: "Today's short session" },
      { to: "/my-dog/care/dental", label: "Dental", line: "A minute a day" },
      { to: "/my-dog/care/coat", label: "Coat & care", line: "Brushing and bathing" },
      { to: "/my-dog/care/paws", label: "Paws & nails", line: "Pads and winter" },
      { to: "/my-dog/weight", label: "Weight", line: "A kind, simple record" },
      { to: "/my-dog/care/wellbeing", label: "Activity", line: "Movement and rest" },
      { to: "/train/library", label: "Behaviour", line: "One lesson at a time" },
      { to: "/my-dog/week", label: "My Week", line: "Your weekly rhythm" },
      { to: "/travel", label: "Travel", line: "Car, hikes and borders" },
      { to: "/my-dog/print", label: "Documents", line: "Paper for the fridge" },
    ],
    programmes: [
      { title: "Puppy basics", line: "The first weeks, gently" },
      { title: "Recall", line: "Coming back, every time you ask" },
      { title: "Loose-leash walking", line: "Walks without the tug of war" },
      { title: "Calm behaviour", line: "Settling on a mat" },
      { title: "Everyday manners", line: "Doors, greetings, waiting" },
      { title: "Focus", line: "Their name, their attention" },
      { title: "Stay", line: "A second longer each time" },
      { title: "Socialisation", line: "New places at their pace" },
    ],
    careItems: [
      { title: "Health journal", line: "Notice changes over weeks, not guesses." },
      { title: "Weight", line: "The hands-on check plus a simple log." },
      { title: "Dental", line: "Teeth and gums, thirty seconds at a time." },
      { title: "Coat & skin", line: "Coat type, brushing rhythm, lumps and mats." },
      { title: "Paws & nails", line: "Pads, nails, salt and hot pavement." },
      { title: "Care calendar", line: "Quiet nudges when something's due." },
      { title: "Vet notes", line: "What you asked, what you were told." },
      { title: "Health summary", line: "One page to take with you." },
    ],
    foodItems: [
      { title: "Food & feeding plan", line: "How much, roughly, for your dog." },
      { title: "Feeding routine", line: "Meals a day, times that suit you." },
      { title: "Food tracking", line: "What they eat, kept in one place." },
      { title: "Weight connection", line: "Portions that follow the weight log." },
      { title: "Treats", line: "Kept to a sensible slice of the day." },
      { title: "Water", line: "Clean and topped up, always." },
      { title: "Food safety", line: "Safe, careful or avoid — 55+ foods." },
    ],
    week: [
      { day: "Monday", items: ["Walk", "Training", "Dental"] },
      { day: "Tuesday", items: ["Walk", "Mental stimulation"] },
      { day: "Wednesday", items: ["Training", "Grooming"] },
      { day: "Thursday", items: ["Long walk", "Paw check"] },
      { day: "Friday", items: ["Walk", "Training", "Dental"] },
      { day: "Saturday", items: ["Adventure", "Weigh-in"] },
      { day: "Sunday", items: ["Sniffy walk", "Quiet time"] },
    ],
    dogLife: [
      "Parks",
      "Walking areas",
      "Dog-friendly places",
      "Trainers",
      "Groomers",
      "Vets",
      "Dog-friendly stays",
    ],
    travelItems: [
      "Car travel",
      "Long walks",
      "Hiking",
      "Holidays",
      "International travel",
      "Travel checklist",
      "Travel documents",
      "Country-to-country requirements",
    ],
    packContents: [
      "Dog profile",
      "Owner information",
      "Important contacts",
      "Travel checklist",
      "Health information",
      "Documents",
      "Emergency information",
    ],
    docs: [
      "Complete Dog Pack",
      "Health summary",
      "Training plan",
      "Food & feeding plan",
      "Weekly plan",
      "Important contacts",
      "Vet visit notes",
      "Travel pack",
      "Grooming checklist",
    ],
    journey: [
      "Thinking about a dog",
      "Find my dog",
      "Get ready",
      "Welcome home",
      "My Dog",
      "Train",
      "Feed",
      "Care",
      "Travel",
      "Enjoy life",
    ],
    freeList: [
      "Is a dog right for me?",
      "Find my dog",
      "Basic breed information",
      "Getting a dog guides",
      "Basic Dog Life",
      "Selected free guides",
    ],
    plusList: [
      "Everything in Free",
      "My Dog",
      "Complete training",
      "Health & care",
      "Food & feeding",
      "My Week",
      "Care calendar",
      "Advanced Dog Life",
      "Travel tools",
      "International travel checker",
      "Complete Dog Pack",
      "Printable documents",
      "Multiple dogs",
      "A fuller match report",
      "Progress over time",
    ],
    firstWeek: [
      { day: "Day 1", title: "Create My Dog", line: "Give your dog a place of their own." },
      {
        day: "Day 2",
        title: "Set up care",
        line: "Add feeding, dental, grooming and everyday routines.",
      },
      {
        day: "Day 3",
        title: "Start training",
        line: "Choose a programme and take the first small step.",
      },
      { day: "Day 4", title: "Build My Week", line: "Bring walks, training and care together." },
      {
        day: "Day 5",
        title: "Explore Dog Life",
        line: "Find places and services that fit your life with your dog.",
      },
      { day: "Day 6", title: "Plan your next trip", line: "Get your travel checklist ready." },
      {
        day: "Day 7",
        title: "Create your Dog Pack",
        line: "Keep the important things together, on screen or on paper.",
      },
    ],
    faqs: [
      {
        q: "What is DoggMatch+?",
        a: "It's the membership side of DoggMatch. Free helps you find the right dog. DoggMatch+ helps you look after that dog day to day — training, food, health, routines, travel and documents, all in one place.",
      },
      {
        q: "What do I get with DoggMatch+?",
        a: "My Dog, the full training programmes, health and care, food and feeding, My Week, the care calendar, travel tools, the complete Dog Pack and printable documents — plus a fuller match report.",
      },
      {
        q: "What stays free?",
        a: "Everything you need to find the right dog. Is a dog right for me?, Find my dog, breed information, the getting-a-dog guides, basic Dog Life and our free guides stay free.",
      },
      {
        q: "Can I use DoggMatch+ for more than one dog?",
        a: "Yes. You can keep a separate profile for each dog and switch between them, so nothing gets muddled.",
      },
      {
        q: "Can I print my dog's information?",
        a: "Yes. The Dog Pack and the individual documents — health summary, feeding plan, weekly plan, contacts, travel pack — are all made to print cleanly on A4 or save as a PDF.",
      },
      {
        q: "Can I use DoggMatch when travelling?",
        a: "Yes. There's car travel, hiking and holiday guidance, a country-to-country checker for travelling abroad, and a travel pack you can take with you on paper.",
      },
      {
        q: "Is DoggMatch veterinary advice?",
        a: "No. We offer general guidance about life with a dog. For anything medical, or if you're worried about your dog, please talk to your vet.",
      },
      {
        q: "Can I cancel my membership?",
        a: "Yes, whenever you like. Open your account page and you can change or cancel your membership yourself — it stays active until the end of the period you've already paid for.",
      },
      {
        q: "Can I choose monthly or yearly membership?",
        a: "Yes — €7.99 a month, or €59.99 a year, which works out at about €5 a month. You can switch between them later from your account.",
      },
      {
        q: "What happens when I join?",
        a: "You'll create My Dog, add a few details, and everything else on the site starts to fit around that dog. There's a gentle first week to walk you through it.",
      },
    ],
    starsLabel: (filled: number) => `${filled} of 5`,
    hero: {
      eyebrow: "Membership",
      lead: "More than finding your dog. A better life together.",
      body: "Your DoggMatch journey doesn't end when you find the right dog. Premium gives you the tools, plans and personal space to help you give your dog a happy, healthy and well-organised life.",
      heroAlt: "A woman resting her forehead against her labrador at sunset",
      exploreCta: "Explore DoggMatch+",
      seeAllCta: "See everything included",
    },
    coreMessage: "brings it all together.",
    myDog: {
      eyebrow: "The centre of it all",
      title: "Your dog. Your space.",
      body: "My Dog is your dog's personal home inside DoggMatch. Everything you keep track of lives here — and everything else on the site feeds into it.",
      lunaAlt: "Luna, a labrador retriever",
      lunaName: "Luna",
      lunaBreedAge: "Labrador Retriever · 3 years",
      today: "Today",
      sideTitle: "Everything about your dog, in one place",
      sideBody:
        "Health, food, training, dental, coat, paws, weight, activity, behaviour, your week, travel and documents. You don't have to fill it all in. Add what's useful, and the rest waits quietly until you need it.",
      cta: "See My Dog",
    },
    productMessage: {
      titleLine1: "Find your dog.",
      titleLine2: "Then live life together.",
      body: "Finding the right dog is only the beginning. DoggMatch+ gives you one place to look after the everyday things that matter — from training and feeding to health, travel, routines and the little moments in between.",
    },
    training: {
      trainAlt: "A man practising recall with his dog in a field",
      eyebrow: "Train together",
      title: "Small steps. Real progress.",
      body: "Structured programmes built from short, kind sessions you can actually fit into a normal day. No shouting, no gadgets, no promises about how fast it'll go.",
      lunaName: "Luna",
      recall: "Recall",
      progressNote: "4 sessions completed this week.",
      railLabel: "Training programmes",
      libraryCta: "Open the lesson library",
    },
    healthCare: {
      eyebrow: "Health & care",
      title: "Look after the little things",
      body: "Keep the important things together, notice changes over time, and stay organised. DoggMatch isn't a veterinary service — when something worries you, your vet is the right call.",
      careAlt: "An owner calmly checking over her dog at home",
    },
    food: {
      foodAlt: "A measured bowl of food being prepared for a waiting dog",
      eyebrow: "Feed well",
      title: "Make feeding easier to understand",
      body: "Portions worked out from your dog's weight, age and how active they are — then kept in step with the weight log. Sensible, evidence-informed, no fads.",
      portionsCta: "Food & portions",
      safetyCta: "Can my dog eat this?",
    },
    myWeek: {
      eyebrow: "My Week",
      title: "Your week with your dog",
      body: "Bring training, care, activity and everyday routines together, so nothing important quietly slips.",
      cta: "Open My Week",
    },
    dogLifeSection: {
      eyebrow: "Dog life",
      title: "Life beyond the home",
      body: "The everyday map of a dog's life near you — where to walk, where you're welcome and who to call.",
      cta: "Explore Dog Life",
      dogLifeAlt: "A dog and owner on a coastal path in the early morning",
    },
    travel: {
      travelAlt: "A dog safely harnessed in the back of a car before a trip",
      eyebrow: "Travel",
      title: "Take your dog with you",
      body: "From the school run to crossing a border. Rules are based on current official requirements and do change — always check with the authorities before you travel.",
      checkerEyebrow: "International travel checker",
      route: "Norway → Poland",
      checkerItems: [
        "Microchip",
        "Rabies vaccination",
        "Pet passport",
        "Destination requirements",
        "Return requirements",
      ],
      checkCta: "Check your route",
    },
    print: {
      eyebrow: "Print & save",
      title: "Some things are better on paper.",
      body: "Keep the important information with you — at home, in the car, at the vet or when someone else is looking after your dog.",
      cardBrand: "DoggMatch",
      cardTitle: "Dog Travel Pack",
      cardDog: "Luna · Labrador Retriever",
      createCta: "Create travel pack",
      printCta: "See what you can print",
    },
    multipleDogs: {
      eyebrow: "Multiple dogs",
      title: "One home. Every dog.",
      body: "Premium supports more than one dog, each with their own profile, routines, training, health and documents. Switching between them takes one tap.",
      dogs: [
        { name: "Luna", breed: "Labrador Retriever" },
        { name: "Max", breed: "Cocker Spaniel" },
      ],
    },
    personalisation: {
      title: "Everything feels more relevant to your dog",
      body: "DoggMatch doesn't need clever machines to make this personal. Your dog's breed, age, size, activity, your lifestyle, your routines and whatever you choose to tell us quietly shape what you see — which lessons come up, how much food is roughly right, what your week suggests.",
    },
    journeySection: {
      eyebrow: "The whole journey",
      title: "From first thought to a long life together",
      closing: "— everything connected in one place.",
    },
    compare: {
      eyebrow: "Free and Premium",
      title: "What's free, and what comes with Premium",
      body: "Everything you need to find the right dog stays free. Premium is for the life that comes after.",
      freeLabel: "Free",
      freeHeadline: "For finding the right dog.",
      freeQuote: "\u201CFind the dog that's right for me.\u201D",
      plusLabel: "DoggMatch+",
      plusHeadline: "For life with your dog.",
      plusQuote: "\u201CNow help me give that dog a really good life.\u201D",
    },
    value: {
      eyebrow: "Why DoggMatch+",
      title: "Three simple reasons",
      items: [
        { title: "One place", body: "Everything about your dog's life, together." },
        { title: "Useful every day", body: "Not just something you visit once." },
        { title: "Built around your dog", body: "Your dog's information shapes the experience." },
      ],
    },
    firstWeekSection: {
      eyebrow: "Your first week with DoggMatch+",
      title: "A simple start to life with DoggMatch+.",
      body: "Nothing to rush. A little each day, and by the end of the week your dog has a home here.",
    },
    membership: {
      eyebrow: "Membership",
      body: "One membership, everything included. Choose the rhythm that suits you.",
      monthlyLabel: "Monthly",
      monthlyPrice: "€7.99",
      monthlyUnit: "/ month",
      monthlyBody: "Everything in DoggMatch+, month by month.",
      monthlyJoin: "Join monthly",
      yearlyLabel: "Yearly",
      bestValue: "Best value",
      yearlyPrice: "€59.99",
      yearlyUnit: "/ year",
      yearlyHighlight: "Just €5 a month when billed yearly",
      yearlyBody: "Save €35.89 a year compared with paying monthly.",
      yearlyJoin: "Join yearly — best value",
      openLine: "Membership is open.",
      openBody:
        "Payment is handled securely by Stripe. You can change or cancel your membership yourself at any time from your account.",
    },
    faqSection: {
      eyebrow: "Questions",
      title: "The things people usually ask",
      body: "Short, honest answers. If there's something else you'd like to know, just write to us.",
      stillWondering: "Still wondering about something?",
      getInTouch: "Get in touch",
    },
    finalCta: {
      title: "Your dog is more than a match.",
      body: "DoggMatch helps you find the dog that's right for you. DoggMatch+ helps you give that dog a really good life.",
      join: "Join DoggMatch+",
      find: "Find My Dog",
    },
  },
  fi: {
    flow: [
      "Etsi koirasi",
      "Ymmärrä koiraasi",
      "Valmistaudu koiraasi",
      "Elä koirasi kanssa",
      "Pidä huolta koirastasi",
      "Nauttikaa elämästä yhdessä",
    ],
    myDogSections: [
      { to: "/my-dog/care/everyday-check", label: "Terveys", line: "Nopea päivittäinen tarkastus" },
      { to: "/my-dog/nutrition", label: "Ruokinta", line: "Annoskoot ja ateriat" },
      { to: "/train", label: "Koulutus", line: "Päivän lyhyt harjoitus" },
      { to: "/my-dog/care/dental", label: "Hampaat", line: "Minuutti päivässä" },
      { to: "/my-dog/care/coat", label: "Turkki & hoito", line: "Harjaus ja pesu" },
      { to: "/my-dog/care/paws", label: "Tassut & kynnet", line: "Anturat ja talvi" },
      { to: "/my-dog/weight", label: "Paino", line: "Hellä, yksinkertainen seuranta" },
      { to: "/my-dog/care/wellbeing", label: "Aktiivisuus", line: "Liikunta ja lepo" },
      { to: "/train/library", label: "Käytös", line: "Yksi oppitunti kerrallaan" },
      { to: "/my-dog/week", label: "Oma Viikko", line: "Viikon rytmi" },
      { to: "/travel", label: "Matkustus", line: "Auto, retket ja rajat" },
      { to: "/my-dog/print", label: "Asiakirjat", line: "Paperit jääkaappiin" },
    ],
    programmes: [
      { title: "Pennun perusteet", line: "Ensimmäiset viikot, hellävaraisesti" },
      { title: "Luoksetulo", line: "Tulee luokse joka kerta kun pyydät" },
      { title: "Vapaana kulkeva hihna", line: "Lenkit ilman hinausta" },
      { title: "Rauhallinen käytös", line: "Rauhoittuminen alustalle" },
      { title: "Arjen tavat", line: "Ovet, tervehdykset, odottaminen" },
      { title: "Keskittyminen", line: "Nimi, huomio" },
      { title: "Paikka", line: "Sekunti pidempään joka kerta" },
      { title: "Sosiaalistaminen", line: "Uudet paikat omaan tahtiin" },
    ],
    careItems: [
      { title: "Terveyspäiväkirja", line: "Huomaa muutokset viikkojen aikana, ei arvailuja." },
      { title: "Paino", line: "Käsin tehtävä tarkastus ja yksinkertainen loki." },
      { title: "Hampaat", line: "Hampaat ja ikenet, kolmekymmentä sekuntia kerrallaan." },
      { title: "Turkki & iho", line: "Turkin tyyppi, harjausrutiini, kyhmyt ja takkuuntuminen." },
      { title: "Tassut & kynnet", line: "Anturat, kynnet, suola ja kuuma asfaltti." },
      { title: "Hoitokalenteri", line: "Lempeät muistutukset, kun jotain on vuorossa." },
      { title: "Eläinlääkärikäynnin muistiinpanot", line: "Mitä kysyit, mitä sinulle kerrottiin." },
      { title: "Terveysyhteenveto", line: "Yksi sivu mukaasi." },
    ],
    foodItems: [
      { title: "Ruoka & ruokintasuunnitelma", line: "Kuinka paljon, karkeasti, koirallesi." },
      { title: "Ruokintarutiini", line: "Ateriat päivässä, aikoihin jotka sopivat sinulle." },
      { title: "Ruokintaseuranta", line: "Mitä he syövät, yhdessä paikassa." },
      { title: "Painoyhteys", line: "Annoskoot, jotka seuraavat painolokia." },
      { title: "Herkut", line: "Pidetty järkevänä osana päivää." },
      { title: "Vesi", line: "Puhtaana ja täytettynä, aina." },
      { title: "Ruokaturvallisuus", line: "Turvallinen, varovainen tai vältettävä — 55+ ruokaa." },
    ],
    week: [
      { day: "Maanantai", items: ["Lenkki", "Koulutus", "Hampaat"] },
      { day: "Tiistai", items: ["Lenkki", "Mielen virkistys"] },
      { day: "Keskiviikko", items: ["Koulutus", "Turkinhoito"] },
      { day: "Torstai", items: ["Pitkä lenkki", "Tassutarkastus"] },
      { day: "Perjantai", items: ["Lenkki", "Koulutus", "Hampaat"] },
      { day: "Lauantai", items: ["Seikkailu", "Painon tarkistus"] },
      { day: "Sunnuntai", items: ["Hajulenkkki", "Rauhoittumishetki"] },
    ],
    dogLife: [
      "Puistot",
      "Lenkkeilyalueet",
      "Koiraystävälliset paikat",
      "Kouluttajat",
      "Turkinhoitajat",
      "Eläinlääkärit",
      "Koiraystävälliset majoitukset",
    ],
    travelItems: [
      "Automatkustus",
      "Pitkät lenkit",
      "Vaellus",
      "Lomat",
      "Kansainvälinen matkustus",
      "Matkustuslista",
      "Matkustusasiakirjat",
      "Maasta toiseen vaadittavat asiat",
    ],
    packContents: [
      "Koiraprofiili",
      "Omistajan tiedot",
      "Tärkeät yhteystiedot",
      "Matkustuslista",
      "Terveystiedot",
      "Asiakirjat",
      "Hätätilannetiedot",
    ],
    docs: [
      "Täydellinen koirapaketti",
      "Terveysyhteenveto",
      "Koulutussuunnitelma",
      "Ruoka- ja ruokintasuunnitelma",
      "Viikko-ohjelma",
      "Tärkeät yhteystiedot",
      "Eläinlääkärikäynnin muistiinpanot",
      "Matkapaketti",
      "Turkinhoitoluettelo",
    ],
    journey: [
      "Ajatus koirasta",
      "Etsi koirani",
      "Valmistaudu",
      "Tervetuloa kotiin",
      "Oma Koira",
      "Koulutus",
      "Ruokinta",
      "Hoito",
      "Matkustus",
      "Nauti elämästä",
    ],
    freeList: [
      "Sopiiko koira minulle?",
      "Etsi koirani",
      "Perusrotutiedot",
      "Opas koiran hankintaan",
      "Perus koira-elämä",
      "Valitut ilmaiset oppaat",
    ],
    plusList: [
      "Kaikki ilmaisessa",
      "Oma Koira",
      "Täydellinen koulutus",
      "Terveys & hoito",
      "Ruoka & ruokinta",
      "Oma Viikko",
      "Hoitokalenteri",
      "Edistynyt koira-elämä",
      "Matkustustyökalut",
      "Kansainvälinen matkustusseuranta",
      "Täydellinen koirapaketti",
      "Tulostettavat asiakirjat",
      "Useampi koira",
      "Tarkempi match-raportti",
      "Edistyminen ajan myötä",
    ],
    firstWeek: [
      { day: "Päivä 1", title: "Luo Oma Koira", line: "Anna koirallesi oma paikka." },
      {
        day: "Päivä 2",
        title: "Aseta hoito",
        line: "Lisää ruokinta, hampaat, turkinhoito ja päivittäiset rutiinit.",
      },
      {
        day: "Päivä 3",
        title: "Aloita koulutus",
        line: "Valitse ohjelma ja ota ensimmäinen pieni askel.",
      },
      { day: "Päivä 4", title: "Rakenna Oma Viikko", line: "Yhdistä lenkit, koulutus ja hoito." },
      {
        day: "Päivä 5",
        title: "Tutustu koira-elämään",
        line: "Löydä paikkoja ja palveluita, jotka sopivat elämääsi koirasi kanssa.",
      },
      {
        day: "Päivä 6",
        title: "Suunnittele seuraava matkasi",
        line: "Valmistele matkustuslistasi.",
      },
      {
        day: "Päivä 7",
        title: "Luo Koirapakettisi",
        line: "Pidä tärkeät asiat yhdessä, ruudulla tai paperilla.",
      },
    ],
    faqs: [
      {
        q: "Mikä on DoggMatch+?",
        a: "Se on DoggMatchin jäsenosa. Ilmainen auttaa sinua löytämään oikean koiran. DoggMatch+ auttaa sinua hoitamaan sitä koiraa päivittäin — koulutus, ruoka, terveys, rutiinit, matkustus ja asiakirjat, kaikki yhdessä paikassa.",
      },
      {
        q: "Mitä saan DoggMatch+:lla?",
        a: "Oma Koira, täydelliset koulutusohjelmat, terveys ja hoito, ruoka ja ruokinta, Oma Viikko, hoitokalenteri, matkustustyökalut, täydellinen Koirapaketti ja tulostettavat asiakirjat — sekä tarkempi match-raportti.",
      },
      {
        q: "Mikä pysyy ilmaisena?",
        a: "Kaikki mitä tarvitset oikean koiran löytämiseen. Sopiiko koira minulle?, Etsi koirani, rotutiedot, koiran hankinta-oppaat, perus koira-elämä ja ilmaiset oppaamme pysyvät ilmaisina.",
      },
      {
        q: "Voinko käyttää DoggMatch+:aa useammalle kuin yhdelle koiralle?",
        a: "Kyllä. Voit pitää erillisen profiilin jokaiselle koiralle ja vaihtaa niiden välillä, jotta mikään ei mene sekaisin.",
      },
      {
        q: "Voinko tulostaa koirani tiedot?",
        a: "Kyllä. Koirapaketti ja yksittäiset asiakirjat — terveysyhteenveto, ruokintasuunnitelma, viikko-ohjelma, yhteystiedot, matkapaketti — on kaikki suunniteltu tulostettavaksi siististi A4-kokoisena tai tallennettavaksi PDF-muodossa.",
      },
      {
        q: "Voinko käyttää DoggMatch+:aa matkustaessani?",
        a: "Kyllä. Tarjolla on opastusta autolla matkustamiseen, vaellukseen ja lomamatkoihin, maasta toiseen -tarkistus ulkomaille matkustamiseen ja matkapaketti, jonka voit ottaa mukaasi paperilla.",
      },
      {
        q: "Onko DoggMatch eläinlääketieteellistä neuvontaa?",
        a: "Ei. Tarjoamme yleistä ohjeistusta elämään koiran kanssa. Jos jokin asia huolestuttaa sinua tai koiraasi, ota yhteyttä eläinlääkäriisi.",
      },
      {
        q: "Voinko peruuttaa jäsenyyteni?",
        a: "Kyllä, milloin tahansa. Avaa tilisivusi ja voit muuttaa tai peruuttaa jäsenyytesi itse — se pysyy aktiivisena maksamasi kauden loppuun asti.",
      },
      {
        q: "Voinko valita kuukausi- vai vuosilaskutuksen?",
        a: "Kyllä — 7,99 € kuukaudessa tai 59,99 € vuodessa, mikä tekee noin 5 € kuukaudessa. Voit vaihtaa niiden välillä myöhemmin tililtäsi.",
      },
      {
        q: "Mitä tapahtuu, kun liityn?",
        a: "Luot Oman Koiran, lisäät muutaman tiedon, ja kaikki muu sivustolla alkaa mukautua kyseisen koiran mukaan. Ensimmäinen viikko opastaa sinua lempeästi.",
      },
    ],
    starsLabel: (filled: number) => `${filled} / 5`,
    hero: {
      eyebrow: "Jäsenyys",
      lead: "Enemmän kuin vain koiran löytäminen. Parempi elämä yhdessä.",
      body: "DoggMatch-matkasi ei pääty, kun löydät oikean koiran. Premium tarjoaa työkalut, suunnitelmat ja henkilökohtaisen tilan, jotka auttavat sinua antamaan koirallesi onnellisen, terveen ja hyvin järjestetyn elämän.",
      heroAlt: "Nainen nojaa otsallaan labradoriinsa auringonlaskussa",
      exploreCta: "Tutustu DoggMatch+:aan",
      seeAllCta: "Katso kaikki sisältyvät",
    },
    coreMessage: "yhdistää kaiken.",
    myDog: {
      eyebrow: "Kaiken keskipiste",
      title: "Sinun koirasi. Sinun tilasi.",
      body: "Oma Koira on koirasi henkilökohtainen koti DoggMatchin sisällä. Kaikki mitä seuraat, elää täällä — ja kaikki muu sivustolla syöttää tietoa tänne.",
      lunaAlt: "Luna, labradorinnoutaja",
      lunaName: "Luna",
      lunaBreedAge: "Labradorinnoutaja · 3 vuotta",
      today: "Tänään",
      sideTitle: "Kaikki koirastasi, yhdessä paikassa",
      sideBody:
        "Terveys, ruoka, koulutus, hampaat, turkki, tassut, paino, aktiivisuus, käytös, oma viikko, matkustus ja asiakirjat. Sinun ei tarvitse täyttää kaikkea. Lisää se, mikä on hyödyllistä, ja loput odottavat hiljaa, kunnes tarvitset sitä.",
      cta: "Katso Oma Koira",
    },
    productMessage: {
      titleLine1: "Etsi koirasi.",
      titleLine2: "Eläkää sitten yhdessä.",
      body: "Oikean koiran löytäminen on vasta alkua. DoggMatch+ tarjoaa yhden paikan hoitaa tärkeitä arjen asioita — koulutuksesta ja ruokinnasta terveyteen, matkustamiseen, rutiineihin ja pieniin hetkiin välissä.",
    },
    training: {
      trainAlt: "Mies harjoittelee luoksetuloa koiransa kanssa pellolla",
      eyebrow: "Kouluta yhdessä",
      title: "Pieniä askelia. Todellista edistystä.",
      body: "Jäsennellyt ohjelmat, jotka on rakennettu lyhyistä, ystävällisistä sessioista, jotka voit todella sovittaa normaaliin päivään. Ei huutamista, ei apuvälineitä, ei lupauksia siitä, kuinka nopeasti se etenee.",
      lunaName: "Luna",
      recall: "Luoksetulo",
      progressNote: "4 harjoitusta suoritettu tällä viikolla.",
      railLabel: "Koulutusohjelmat",
      libraryCta: "Avaa oppituntikirjasto",
    },
    healthCare: {
      eyebrow: "Terveys & hoito",
      title: "Pidä huolta pienistä asioista",
      body: "Pidä tärkeät asiat yhdessä, huomaa muutokset ajan myötä ja pysy järjestäytyneenä. DoggMatch ei ole eläinlääkäripalvelu — kun jokin huolestuttaa sinua, eläinlääkäri on oikea taho.",
      careAlt: "Omistaja tarkastaa rauhallisesti koiraansa kotona",
    },
    food: {
      foodAlt: "Mitattu ruokakuppi valmistellaan odottavalle koiralle",
      eyebrow: "Ruoki hyvin",
      title: "Tee ruokinnasta helpommin ymmärrettävää",
      body: "Annoskoot laskettu koirasi painon, iän ja aktiivisuuden perusteella — sitten pidetty tahdissa painolokin kanssa. Järkevää, näyttöön perustuvaa, ei muotivillityksiä.",
      portionsCta: "Ruoka & annoskoot",
      safetyCta: "Voiko koirani syödä tätä?",
    },
    myWeek: {
      eyebrow: "Oma Viikko",
      title: "Sinun viikkosi koirasi kanssa",
      body: "Yhdistä koulutus, hoito, aktiivisuus ja päivittäiset rutiinit, jotta mikään tärkeä ei lipsahda huomaamatta.",
      cta: "Avaa Oma Viikko",
    },
    dogLifeSection: {
      eyebrow: "Koiran elämä",
      title: "Elämä kodin ulkopuolella",
      body: "Arjen kartta koiran elämästä lähelläsi — minne mennä lenkille, minne olet tervetullut ja kenelle soittaa.",
      cta: "Tutustu koira-elämään",
      dogLifeAlt: "Koira ja omistaja rannikkopolulla aikaisin aamulla",
    },
    travel: {
      travelAlt: "Koira turvallisesti valjastettuna auton takaosassa ennen matkaa",
      eyebrow: "Matkustus",
      title: "Ota koirasi mukaan",
      body: "Koulureissusta rajan ylitykseen. Säännöt perustuvat nykyisiin virallisiin vaatimuksiin ja muuttuvat — tarkista aina viranomaisilta ennen matkustamista.",
      checkerEyebrow: "Kansainvälinen matkustusseuranta",
      route: "Norja → Puola",
      checkerItems: [
        "Mikrosiru",
        "Rabiesrokote",
        "Lemmikkipassi",
        "Kohdemaan vaatimukset",
        "Paluuvaatimukset",
      ],
      checkCta: "Tarkista reittisi",
    },
    print: {
      eyebrow: "Tulosta & tallenna",
      title: "Jotkut asiat ovat parempia paperilla.",
      body: "Pidä tärkeät tiedot mukanasi — kotona, autossa, eläinlääkärissä tai kun joku muu hoitaa koiraasi.",
      cardBrand: "DoggMatch",
      cardTitle: "Koiran matkapaketti",
      cardDog: "Luna · Labradorinnoutaja",
      createCta: "Luo matkapaketti",
      printCta: "Katso mitä voit tulostaa",
    },
    multipleDogs: {
      eyebrow: "Useampi koira",
      title: "Yksi koti. Jokainen koira.",
      body: "Premium tukee useampaa kuin yhtä koiraa, jokaisella oma profiili, rutiinit, koulutus, terveys ja asiakirjat. Niiden välillä vaihtaminen vie yhden napautuksen.",
      dogs: [
        { name: "Luna", breed: "Labradorinnoutaja" },
        { name: "Max", breed: "Cocker Spanieli" },
      ],
    },
    personalisation: {
      title: "Kaikki tuntuu merkityksellisemmältä koirallesi",
      body: "DoggMatch ei tarvitse älykkäitä koneita tehdäkseen tästä henkilökohtaista. Koirasi rotu, ikä, koko, aktiivisuus, elämäntyylisi, rutiinisi ja kaikki mitä päätät kertoa meille, muokkaavat hiljaa sitä, mitä näet — mitkä oppitunnit tulevat esiin, kuinka paljon ruokaa on karkeasti sopivaa, mitä viikkosi ehdottaa.",
    },
    journeySection: {
      eyebrow: "Koko matka",
      title: "Ensimmäisestä ajatuksesta pitkään yhteiseen elämään",
      closing: "— kaikki yhdistettynä yhdessä paikassa.",
    },
    compare: {
      eyebrow: "Ilmainen ja Premium",
      title: "Mikä on ilmaista ja mikä tulee Premiumin mukana",
      body: "Kaikki mitä tarvitset oikean koiran löytämiseen pysyy ilmaisena. Premium on elämää varten, joka tulee sen jälkeen.",
      freeLabel: "Ilmainen",
      freeHeadline: "Oikean koiran löytämiseen.",
      freeQuote: "\u201CLöydä koira, joka sopii minulle.\u201D",
      plusLabel: "DoggMatch+",
      plusHeadline: "Elämään koirasi kanssa.",
      plusQuote: "\u201CNyt auta minua antamaan sille koiralle todella hyvä elämä.\u201D",
    },
    value: {
      eyebrow: "Miksi DoggMatch+",
      title: "Kolme yksinkertaista syytä",
      items: [
        { title: "Yksi paikka", body: "Kaikki koirasi elämästä, yhdessä." },
        { title: "Hyödyllinen joka päivä", body: "Ei vain jotain, jota käytät kerran." },
        { title: "Rakennettu koirasi ympärille", body: "Koirasi tiedot muokkaavat kokemusta." },
      ],
    },
    firstWeekSection: {
      eyebrow: "Ensimmäinen viikkosi DoggMatch+:n kanssa",
      title: "Helppo alku elämään DoggMatch+:n kanssa.",
      body: "Ei ole kiirettä. Vähän joka päivä, ja viikon loppuun mennessä koirallasi on täällä kotinsa.",
    },
    membership: {
      eyebrow: "Jäsenyys",
      body: "Yksi jäsenyys, kaikki sisältyy. Valitse sinulle sopiva rytmi.",
      monthlyLabel: "Kuukausi",
      monthlyPrice: "7,99",
      monthlyUnit: "/ kk",
      monthlyBody: "Kaikki DoggMatch+:ssa, kuukausittain.",
      monthlyJoin: "Liity kuukausijäseneksi",
      yearlyLabel: "Vuosi",
      bestValue: "Paras hinta",
      yearlyPrice: "59,99",
      yearlyUnit: "/ vuosi",
      yearlyHighlight: "Vain 5 € kuukaudessa, kun laskutetaan vuosittain",
      yearlyBody: "Säästä 35,89 € vuodessa verrattuna kuukausimaksuun.",
      yearlyJoin: "Liity vuodella — paras hinta",
      openLine: "Jäsenyys on avoin.",
      openBody:
        "Maksut hoidetaan turvallisesti Stripellä. Voit muuttaa tai peruuttaa jäsenyytesi itse milloin tahansa tililtäsi.",
    },
    faqSection: {
      eyebrow: "Kysymyksiä",
      title: "Asiat, joita ihmiset yleensä kysyvät",
      body: "Lyhyitä, rehellisiä vastauksia. Jos on jotain muuta, mitä haluaisit tietää, kirjoita meille.",
      stillWondering: "Mietitkö vielä jotain?",
      getInTouch: "Ota yhteyttä",
    },
    finalCta: {
      title: "Koirasi on enemmän kuin pelkkä match.",
      body: "DoggMatch auttaa sinua löytämään oikean koiran. DoggMatch+ auttaa sinua antamaan sille koiralle todella hyvän elämän.",
      join: "Liity DoggMatch+:aan",
      find: "Etsi Minun Koirani",
    },
  },
  no: {
    flow: [
      "Finn hunden din",
      "Bli kjent med hunden din",
      "Gjør deg klar for hunden din",
      "Lev med hunden din",
      "Ta vare på hunden din",
      "Nyt livet sammen",
    ],
    myDogSections: [
      { to: "/my-dog/care/everyday-check", label: "Helse", line: "Den raske daglige sjekken" },
      { to: "/my-dog/nutrition", label: "Mat", line: "Porsjoner og måltider" },
      { to: "/train", label: "Trening", line: "Dagens korte økt" },
      { to: "/my-dog/care/dental", label: "Tenner", line: "Ett minutt om dagen" },
      { to: "/my-dog/care/coat", label: "Pels & stell", line: "Børsting og bading" },
      { to: "/my-dog/care/paws", label: "Poter & klør", line: "Trynepute og vinter" },
      { to: "/my-dog/weight", label: "Vekt", line: "En enkel, snill oversikt" },
      { to: "/my-dog/care/wellbeing", label: "Aktivitet", line: "Bevegelse og hvile" },
      { to: "/train/library", label: "Atferd", line: "Én leksjon om gangen" },
      { to: "/my-dog/week", label: "Min uke", line: "Din ukentlige rytme" },
      { to: "/travel", label: "Reise", line: "Bil, turer og grenser" },
      { to: "/my-dog/print", label: "Dokumenter", line: "Papir til kjøleskapet" },
    ],
    programmes: [
      { title: "Valpebasics", line: "De første ukene, i rolig tempo" },
      { title: "Innkalling", line: "Kommer tilbake, hver gang du ber om det" },
      { title: "Gå fint i bånd", line: "Turer uten dragkamp" },
      { title: "Ro i kroppen", line: "Slappe av på et teppe" },
      { title: "Hverdagsmanerer", line: "Dører, hilsing, venting" },
      { title: "Fokus", line: "Navnet sitt, oppmerksomheten sin" },
      { title: "Bli", line: "Ett sekund lenger for hver gang" },
      { title: "Sosialisering", line: "Nye steder i hundens eget tempo" },
    ],
    careItems: [
      { title: "Helsejournal", line: "Legg merke til endringer over uker, ikke gjetting." },
      { title: "Vekt", line: "Den håndfaste sjekken pluss en enkel logg." },
      { title: "Tenner", line: "Tenner og tannkjøtt, tretti sekunder om gangen." },
      { title: "Pels & hud", line: "Pelstype, børsterytme, kuler og filt." },
      { title: "Poter & klør", line: "Trynepute, klør, salt og varm asfalt." },
      { title: "Stellkalender", line: "Stille påminnelser når noe er på tide." },
      { title: "Veterinærnotater", line: "Hva du spurte om, hva du fikk vite." },
      { title: "Helseoversikt", line: "Én side å ta med deg." },
    ],
    foodItems: [
      { title: "Mat- og fôringsplan", line: "Omtrent hvor mye, for din hund." },
      { title: "Fôringsrutine", line: "Måltider om dagen, tider som passer deg." },
      { title: "Matlogg", line: "Det hunden spiser, samlet ett sted." },
      { title: "Kobling til vekt", line: "Porsjoner som følger vektloggen." },
      { title: "Belønninger", line: "Holdt til en fornuftig del av dagen." },
      { title: "Vann", line: "Rent og fylt opp, alltid." },
      { title: "Mattrygghet", line: "Trygt, forsiktig eller unngå — 55+ matvarer." },
    ],
    week: [
      { day: "Mandag", items: ["Tur", "Trening", "Tenner"] },
      { day: "Tirsdag", items: ["Tur", "Mental stimulering"] },
      { day: "Onsdag", items: ["Trening", "Stell"] },
      { day: "Torsdag", items: ["Lang tur", "Potesjekk"] },
      { day: "Fredag", items: ["Tur", "Trening", "Tenner"] },
      { day: "Lørdag", items: ["Eventyr", "Veiing"] },
      { day: "Søndag", items: ["Snusetur", "Rolig stund"] },
    ],
    dogLife: [
      "Parker",
      "Turområder",
      "Hundevennlige steder",
      "Trenere",
      "Hundefrisører",
      "Veterinærer",
      "Hundevennlige overnattinger",
    ],
    travelItems: [
      "Bilreise",
      "Lange turer",
      "Fjellturer",
      "Ferier",
      "Utenlandsreise",
      "Reisesjekkliste",
      "Reisedokumenter",
      "Krav fra land til land",
    ],
    packContents: [
      "Hundeprofil",
      "Eierinformasjon",
      "Viktige kontakter",
      "Reisesjekkliste",
      "Helseinformasjon",
      "Dokumenter",
      "Nødinformasjon",
    ],
    docs: [
      "Komplett hundepakke",
      "Helseoversikt",
      "Treningsplan",
      "Mat- og fôringsplan",
      "Ukeplan",
      "Viktige kontakter",
      "Notater fra veterinærbesøk",
      "Reisepakke",
      "Stellsjekkliste",
    ],
    journey: [
      "Vurderer hund",
      "Finn min hund",
      "Gjør deg klar",
      "Velkommen hjem",
      "Min hund",
      "Trening",
      "Fôring",
      "Stell",
      "Reise",
      "Nyt livet",
    ],
    freeList: [
      "Er en hund riktig for meg?",
      "Finn min hund",
      "Grunnleggende raseinformasjon",
      "Guider for å skaffe hund",
      "Grunnleggende hundeliv",
      "Utvalgte gratis guider",
    ],
    plusList: [
      "Alt i Gratis",
      "Min hund",
      "Komplett trening",
      "Helse & stell",
      "Mat & fôring",
      "Min uke",
      "Stellkalender",
      "Utvidet hundeliv",
      "Reiseverktøy",
      "Sjekk for utenlandsreise",
      "Komplett hundepakke",
      "Utskrivbare dokumenter",
      "Flere hunder",
      "En fyldigere matchrapport",
      "Fremgang over tid",
    ],
    firstWeek: [
      { day: "Dag 1", title: "Opprett Min hund", line: "Gi hunden din et eget sted." },
      {
        day: "Dag 2",
        title: "Sett opp stell",
        line: "Legg til fôring, tenner, pels og hverdagsrutiner.",
      },
      {
        day: "Dag 3",
        title: "Start trening",
        line: "Velg et program og ta det første lille steget.",
      },
      { day: "Dag 4", title: "Bygg Min uke", line: "Samle turer, trening og stell på ett sted." },
      {
        day: "Dag 5",
        title: "Utforsk hundeliv",
        line: "Finn steder og tjenester som passer livet ditt med hund.",
      },
      { day: "Dag 6", title: "Planlegg neste tur", line: "Gjør reisesjekklisten din klar." },
      {
        day: "Dag 7",
        title: "Lag hundepakken din",
        line: "Ha det viktigste samlet, på skjerm eller på papir.",
      },
    ],
    faqs: [
      {
        q: "Hva er DoggMatch+?",
        a: "Det er medlemsdelen av DoggMatch. Gratis hjelper deg å finne riktig hund. DoggMatch+ hjelper deg å ta vare på den hunden dag for dag — trening, mat, helse, rutiner, reise og dokumenter, alt på ett sted.",
      },
      {
        q: "Hva får jeg med DoggMatch+?",
        a: "Min hund, de fullstendige treningsprogrammene, helse og stell, mat og fôring, Min uke, stellkalenderen, reiseverktøy, den komplette hundepakken og utskrivbare dokumenter — pluss en fyldigere matchrapport.",
      },
      {
        q: "Hva forblir gratis?",
        a: "Alt du trenger for å finne riktig hund. Er en hund riktig for meg?, Finn min hund, raseinformasjon, guidene for å skaffe hund, grunnleggende hundeliv og de gratis guidene våre forblir gratis.",
      },
      {
        q: "Kan jeg bruke DoggMatch+ for mer enn én hund?",
        a: "Ja. Du kan ha en egen profil for hver hund og bytte mellom dem, så ingenting blandes sammen.",
      },
      {
        q: "Kan jeg skrive ut informasjon om hunden min?",
        a: "Ja. Hundepakken og de enkelte dokumentene — helseoversikt, fôringsplan, ukeplan, kontakter, reisepakke — er alle laget for å skrives pent ut på A4 eller lagres som PDF.",
      },
      {
        q: "Kan jeg bruke DoggMatch på reise?",
        a: "Ja. Det finnes veiledning for bilreise, fjellturer og ferier, en sjekk for krav fra land til land ved utenlandsreise, og en reisepakke du kan ta med deg på papir.",
      },
      {
        q: "Er DoggMatch veterinærfaglig rådgivning?",
        a: "Nei. Vi gir generell veiledning om livet med hund. Ved alt medisinsk, eller hvis du er bekymret for hunden din, snakk med veterinæren din.",
      },
      {
        q: "Kan jeg si opp medlemskapet mitt?",
        a: "Ja, når du vil. Åpne kontosiden din, så kan du endre eller si opp medlemskapet ditt selv — det forblir aktivt ut perioden du allerede har betalt for.",
      },
      {
        q: "Kan jeg velge månedlig eller årlig medlemskap?",
        a: "Ja — 79 kr i måneden, eller 599 kr i året, som utgjør omtrent 50 kr i måneden. Du kan bytte mellom dem senere fra kontoen din.",
      },
      {
        q: "Hva skjer når jeg blir medlem?",
        a: "Du oppretter Min hund, legger til noen detaljer, og alt annet på siden begynner å tilpasse seg den hunden. Det er en rolig første uke som guider deg gjennom det.",
      },
    ],
    starsLabel: (filled: number) => `${filled} av 5`,
    hero: {
      eyebrow: "Medlemskap",
      lead: "Mer enn å finne hunden din. Et bedre liv sammen.",
      body: "DoggMatch-reisen din slutter ikke når du finner riktig hund. Premium gir deg verktøyene, planene og det personlige rommet du trenger for å gi hunden din et lykkelig, sunt og ryddig liv.",
      heroAlt: "En kvinne hviler pannen mot labradoren sin i solnedgangen",
      exploreCta: "Utforsk DoggMatch+",
      seeAllCta: "Se alt som er inkludert",
    },
    coreMessage: "samler alt på ett sted.",
    myDog: {
      eyebrow: "Midtpunktet i alt",
      title: "Din hund. Ditt rom.",
      body: "Min hund er hundens personlige hjem inne i DoggMatch. Alt du holder styr på bor her — og alt annet på siden spiller inn i det.",
      lunaAlt: "Luna, en labrador retriever",
      lunaName: "Luna",
      lunaBreedAge: "Labrador retriever · 3 år",
      today: "I dag",
      sideTitle: "Alt om hunden din, på ett sted",
      sideBody:
        "Helse, mat, trening, tenner, pels, poter, vekt, aktivitet, atferd, uken din, reise og dokumenter. Du trenger ikke fylle ut alt. Legg til det som er nyttig, resten venter stille til du trenger det.",
      cta: "Se Min hund",
    },
    productMessage: {
      titleLine1: "Finn hunden din.",
      titleLine2: "Lev så livet sammen.",
      body: "Å finne riktig hund er bare begynnelsen. DoggMatch+ gir deg ett sted å ta vare på hverdagsting som betyr noe — fra trening og fôring til helse, reise, rutiner og de små øyeblikkene innimellom.",
    },
    training: {
      trainAlt: "En mann trener innkalling med hunden sin på en eng",
      eyebrow: "Tren sammen",
      title: "Små steg. Ekte fremgang.",
      body: "Strukturerte program bygget av korte, snille økter du faktisk kan få inn i en vanlig dag. Ingen roping, ingen dingser, ingen løfter om hvor fort det går.",
      lunaName: "Luna",
      recall: "Innkalling",
      progressNote: "4 økter fullført denne uken.",
      railLabel: "Treningsprogrammer",
      libraryCta: "Åpne leksjonsbiblioteket",
    },
    healthCare: {
      eyebrow: "Helse & stell",
      title: "Ta vare på de små tingene",
      body: "Ha det viktige samlet, legg merke til endringer over tid, og hold orden. DoggMatch er ikke en veterinærtjeneste — når noe bekymrer deg, er veterinæren riktig valg.",
      careAlt: "En eier sjekker rolig over hunden sin hjemme",
    },
    food: {
      foodAlt: "En avmålt bolle med mat gjøres klar til en ventende hund",
      eyebrow: "Fôr riktig",
      title: "Gjør fôring enklere å forstå",
      body: "Porsjoner regnet ut fra hundens vekt, alder og aktivitetsnivå — holdt i takt med vektloggen. Fornuftig, kunnskapsbasert, ingen fluevekt-trender.",
      portionsCta: "Mat & porsjoner",
      safetyCta: "Kan hunden min spise dette?",
    },
    myWeek: {
      eyebrow: "Min uke",
      title: "Uken din med hunden din",
      body: "Samle trening, stell, aktivitet og hverdagsrutiner på ett sted, så ingenting viktig sniker seg unna.",
      cta: "Åpne Min uke",
    },
    dogLifeSection: {
      eyebrow: "Hundeliv",
      title: "Livet utenfor hjemmet",
      body: "Hverdagskartet over hundelivet i nærheten av deg — hvor du kan gå tur, hvor du er velkommen og hvem du skal ringe.",
      cta: "Utforsk hundeliv",
      dogLifeAlt: "En hund og eier på en kyststi tidlig om morgenen",
    },
    travel: {
      travelAlt: "En hund trygt sikret i baksetet før en tur",
      eyebrow: "Reise",
      title: "Ta hunden din med deg",
      body: "Fra skoleveien til å krysse en grense. Reglene bygger på gjeldende offisielle krav og endres — sjekk alltid med myndighetene før du reiser.",
      checkerEyebrow: "Sjekk for utenlandsreise",
      route: "Norge → Polen",
      checkerItems: [
        "Mikrochip",
        "Rabiesvaksine",
        "Kjæledyrpass",
        "Krav i mottakerland",
        "Krav ved retur",
      ],
      checkCta: "Sjekk ruten din",
    },
    print: {
      eyebrow: "Skriv ut & lagre",
      title: "Noe er bedre på papir.",
      body: "Ha den viktige informasjonen med deg — hjemme, i bilen, hos veterinæren eller når noen andre passer hunden din.",
      cardBrand: "DoggMatch",
      cardTitle: "Hundens reisepakke",
      cardDog: "Luna · Labrador retriever",
      createCta: "Lag reisepakke",
      printCta: "Se hva du kan skrive ut",
    },
    multipleDogs: {
      eyebrow: "Flere hunder",
      title: "Ett hjem. Hver hund.",
      body: "Premium støtter mer enn én hund, hver med sin egen profil, rutiner, trening, helse og dokumenter. Å bytte mellom dem tar ett trykk.",
      dogs: [
        { name: "Luna", breed: "Labrador retriever" },
        { name: "Max", breed: "Cocker spaniel" },
      ],
    },
    personalisation: {
      title: "Alt føles mer relevant for hunden din",
      body: "DoggMatch trenger ikke smarte maskiner for å gjøre dette personlig. Hundens rase, alder, størrelse, aktivitet, livsstilen din, rutinene dine og alt du velger å fortelle oss former stille det du ser — hvilke leksjoner som dukker opp, omtrent hvor mye mat som er riktig, hva uken din foreslår.",
    },
    journeySection: {
      eyebrow: "Hele reisen",
      title: "Fra første tanke til et langt liv sammen",
      closing: "— alt koblet sammen på ett sted.",
    },
    compare: {
      eyebrow: "Gratis og Premium",
      title: "Hva som er gratis, og hva som følger med Premium",
      body: "Alt du trenger for å finne riktig hund forblir gratis. Premium er for livet som kommer etterpå.",
      freeLabel: "Gratis",
      freeHeadline: "For å finne riktig hund.",
      freeQuote: "\u201CFinn hunden som passer for meg.\u201D",
      plusLabel: "DoggMatch+",
      plusHeadline: "For livet med hunden din.",
      plusQuote: "\u201CNå hjelp meg å gi den hunden et virkelig godt liv.\u201D",
    },
    value: {
      eyebrow: "Hvorfor DoggMatch+",
      title: "Tre enkle grunner",
      items: [
        { title: "Ett sted", body: "Alt om hundens liv, samlet." },
        { title: "Nyttig hver dag", body: "Ikke bare noe du besøker én gang." },
        { title: "Bygget rundt hunden din", body: "Hundens informasjon former opplevelsen." },
      ],
    },
    firstWeekSection: {
      eyebrow: "Din første uke med DoggMatch+",
      title: "En enkel start på livet med DoggMatch+.",
      body: "Ingenting å skynde seg med. Litt hver dag, og innen uken er omme har hunden din et hjem her.",
    },
    membership: {
      eyebrow: "Medlemskap",
      body: "Ett medlemskap, alt inkludert. Velg rytmen som passer deg.",
      monthlyLabel: "Månedlig",
      monthlyPrice: "79 kr",
      monthlyUnit: "/ måned",
      monthlyBody: "Alt i DoggMatch+, måned for måned.",
      monthlyJoin: "Bli medlem månedlig",
      yearlyLabel: "Årlig",
      bestValue: "Best verdi",
      yearlyPrice: "599 kr",
      yearlyUnit: "/ år",
      yearlyHighlight: "Bare 50 kr i måneden ved årlig fakturering",
      yearlyBody: "Spar 359 kr i året sammenlignet med månedlig betaling.",
      yearlyJoin: "Bli medlem årlig — best verdi",
      openLine: "Medlemskapet er åpent.",
      openBody:
        "Betaling håndteres trygt av Stripe. Du kan endre eller si opp medlemskapet ditt selv, når som helst, fra kontoen din.",
    },
    faqSection: {
      eyebrow: "Spørsmål",
      title: "Det folk vanligvis lurer på",
      body: "Korte, ærlige svar. Hvis det er noe annet du lurer på, bare skriv til oss.",
      stillWondering: "Lurer du fortsatt på noe?",
      getInTouch: "Ta kontakt",
    },
    finalCta: {
      title: "Hunden din er mer enn en match.",
      body: "DoggMatch hjelper deg å finne hunden som passer for deg. DoggMatch+ hjelper deg å gi den hunden et virkelig godt liv.",
      join: "Bli medlem av DoggMatch+",
      find: "Finn min hund",
    },
  },
  pl: {
    flow: [
      "Znajdź swojego psa",
      "Poznaj swojego psa",
      "Przygotuj się na psa",
      "Żyj razem ze swoim psem",
      "Dbaj o swojego psa",
      "Ciesz się życiem razem",
    ],
    myDogSections: [
      { to: "/my-dog/care/everyday-check", label: "Zdrowie", line: "Szybki codzienny przegląd" },
      { to: "/my-dog/nutrition", label: "Jedzenie", line: "Porcje i posiłki" },
      { to: "/train", label: "Trening", line: "Dzisiejsza krótka sesja" },
      { to: "/my-dog/care/dental", label: "Zęby", line: "Minuta dziennie" },
      { to: "/my-dog/care/coat", label: "Sierść i pielęgnacja", line: "Szczotkowanie i kąpiel" },
      { to: "/my-dog/care/paws", label: "Łapy i pazury", line: "Poduszki i zima" },
      { to: "/my-dog/weight", label: "Waga", line: "Prosty, przyjazny zapis" },
      { to: "/my-dog/care/wellbeing", label: "Aktywność", line: "Ruch i odpoczynek" },
      { to: "/train/library", label: "Zachowanie", line: "Jedna lekcja naraz" },
      { to: "/my-dog/week", label: "Mój tydzień", line: "Twój tygodniowy rytm" },
      { to: "/travel", label: "Podróże", line: "Samochód, wędrówki i granice" },
      { to: "/my-dog/print", label: "Dokumenty", line: "Papiery na lodówkę" },
    ],
    programmes: [
      { title: "Podstawy dla szczeniaka", line: "Pierwsze tygodnie, delikatnie" },
      { title: "Przywołanie", line: "Wraca za każdym razem, gdy poprosisz" },
      { title: "Chodzenie luźno przy nodze", line: "Spacery bez przeciągania" },
      { title: "Spokojne zachowanie", line: "Usadowienie się na macie" },
      { title: "Codzienne maniery", line: "Drzwi, powitania, czekanie" },
      { title: "Skupienie", line: "Jego imię, jego uwaga" },
      { title: "Zostań", line: "O sekundę dłużej za każdym razem" },
      { title: "Socjalizacja", line: "Nowe miejsca w tempie psa" },
    ],
    careItems: [
      { title: "Dziennik zdrowia", line: "Zauważaj zmiany na przestrzeni tygodni, nie zgaduj." },
      { title: "Waga", line: "Sprawdzenie dotykiem plus prosty zapis." },
      { title: "Zęby", line: "Zęby i dziąsła, po trzydzieści sekund naraz." },
      { title: "Sierść i skóra", line: "Typ sierści, rytm szczotkowania, guzki i kołtuny." },
      { title: "Łapy i pazury", line: "Poduszki, pazury, sól i gorący chodnik." },
      { title: "Kalendarz opieki", line: "Ciche przypomnienia, gdy zbliża się termin." },
      { title: "Notatki od weterynarza", line: "O co pytałeś/aś, co usłyszałeś/aś." },
      { title: "Podsumowanie zdrowia", line: "Jedna strona do zabrania ze sobą." },
    ],
    foodItems: [
      { title: "Plan jedzenia i karmienia", line: "Ile mniej więcej, dla Twojego psa." },
      { title: "Rutyna karmienia", line: "Posiłki dziennie, pory, które Ci pasują." },
      { title: "Śledzenie jedzenia", line: "To, co je, zebrane w jednym miejscu." },
      { title: "Powiązanie z wagą", line: "Porcje dopasowane do zapisu wagi." },
      { title: "Przysmaki", line: "Utrzymane w rozsądnej części dnia." },
      { title: "Woda", line: "Czysta i uzupełniona, zawsze." },
      {
        title: "Bezpieczeństwo jedzenia",
        line: "Bezpieczne, ostrożnie lub unikać — ponad 55 produktów.",
      },
    ],
    week: [
      { day: "Poniedziałek", items: ["Spacer", "Trening", "Zęby"] },
      { day: "Wtorek", items: ["Spacer", "Stymulacja umysłowa"] },
      { day: "Środa", items: ["Trening", "Pielęgnacja"] },
      { day: "Czwartek", items: ["Długi spacer", "Sprawdzenie łap"] },
      { day: "Piątek", items: ["Spacer", "Trening", "Zęby"] },
      { day: "Sobota", items: ["Przygoda", "Ważenie"] },
      { day: "Niedziela", items: ["Spacer węchowy", "Spokojna chwila"] },
    ],
    dogLife: [
      "Parki",
      "Miejsca na spacery",
      "Miejsca przyjazne psom",
      "Trenerzy",
      "Groomerzy",
      "Weterynarze",
      "Noclegi przyjazne psom",
    ],
    travelItems: [
      "Podróż samochodem",
      "Długie spacery",
      "Wędrówki",
      "Wakacje",
      "Podróże zagraniczne",
      "Lista podróżna",
      "Dokumenty podróżne",
      "Wymagania między krajami",
    ],
    packContents: [
      "Profil psa",
      "Informacje o właścicielu",
      "Ważne kontakty",
      "Lista podróżna",
      "Informacje zdrowotne",
      "Dokumenty",
      "Informacje na wypadek nagłej sytuacji",
    ],
    docs: [
      "Kompletna Paczka dla psa",
      "Podsumowanie zdrowia",
      "Plan treningowy",
      "Plan jedzenia i karmienia",
      "Plan tygodniowy",
      "Ważne kontakty",
      "Notatki z wizyty u weterynarza",
      "Pakiet podróżny",
      "Lista pielęgnacyjna",
    ],
    journey: [
      "Myślenie o psie",
      "Znajdź mojego psa",
      "Przygotuj się",
      "Witaj w domu",
      "Mój pies",
      "Trenuj",
      "Karm",
      "Pielęgnuj",
      "Podróżuj",
      "Ciesz się życiem",
    ],
    freeList: [
      "Czy pies jest dla mnie odpowiedni?",
      "Znajdź mojego psa",
      "Podstawowe informacje o rasach",
      "Poradniki o zdobyciu psa",
      "Podstawowe Życie z psem",
      "Wybrane bezpłatne poradniki",
    ],
    plusList: [
      "Wszystko z wersji bezpłatnej",
      "Mój pies",
      "Pełny trening",
      "Zdrowie i opieka",
      "Jedzenie i karmienie",
      "Mój tydzień",
      "Kalendarz opieki",
      "Rozszerzone Życie z psem",
      "Narzędzia podróżne",
      "Sprawdzarka podróży międzynarodowych",
      "Kompletna Paczka dla psa",
      "Dokumenty do wydruku",
      "Wiele psów",
      "Pełniejszy raport dopasowania",
      "Postępy w czasie",
    ],
    firstWeek: [
      { day: "Dzień 1", title: "Utwórz Mój pies", line: "Daj swojemu psu własne miejsce." },
      {
        day: "Dzień 2",
        title: "Skonfiguruj opiekę",
        line: "Dodaj karmienie, zęby, pielęgnację i codzienne rutyny.",
      },
      {
        day: "Dzień 3",
        title: "Rozpocznij trening",
        line: "Wybierz program i zrób pierwszy mały krok.",
      },
      {
        day: "Dzień 4",
        title: "Zbuduj Mój tydzień",
        line: "Połącz spacery, trening i opiekę w jedno.",
      },
      {
        day: "Dzień 5",
        title: "Odkryj Życie z psem",
        line: "Znajdź miejsca i usługi dopasowane do Twojego życia z psem.",
      },
      { day: "Dzień 6", title: "Zaplanuj następny wyjazd", line: "Przygotuj listę podróżną." },
      {
        day: "Dzień 7",
        title: "Utwórz swoją Paczkę dla psa",
        line: "Trzymaj najważniejsze rzeczy razem, na ekranie lub na papierze.",
      },
    ],
    faqs: [
      {
        q: "Czym jest DoggMatch+?",
        a: "To część członkowska DoggMatch. Wersja bezpłatna pomaga znaleźć odpowiedniego psa. DoggMatch+ pomaga dbać o tego psa dzień po dniu — trening, jedzenie, zdrowie, rutyny, podróże i dokumenty, wszystko w jednym miejscu.",
      },
      {
        q: "Co dostaję z DoggMatch+?",
        a: "Mój pies, pełne programy treningowe, zdrowie i opiekę, jedzenie i karmienie, Mój tydzień, kalendarz opieki, narzędzia podróżne, kompletną Paczkę dla psa i dokumenty do wydruku — a do tego pełniejszy raport dopasowania.",
      },
      {
        q: "Co pozostaje bezpłatne?",
        a: "Wszystko, czego potrzebujesz, by znaleźć odpowiedniego psa. Czy pies jest dla mnie odpowiedni?, Znajdź mojego psa, informacje o rasach, poradniki o zdobyciu psa, podstawowe Życie z psem i nasze bezpłatne poradniki pozostają darmowe.",
      },
      {
        q: "Czy mogę korzystać z DoggMatch+ dla więcej niż jednego psa?",
        a: "Tak. Możesz mieć osobny profil dla każdego psa i przełączać się między nimi, więc nic się nie pomiesza.",
      },
      {
        q: "Czy mogę wydrukować informacje o moim psie?",
        a: "Tak. Paczka dla psa oraz poszczególne dokumenty — podsumowanie zdrowia, plan karmienia, plan tygodniowy, kontakty, pakiet podróżny — są przygotowane tak, by ładnie drukowały się na A4 lub zapisywały jako PDF.",
      },
      {
        q: "Czy mogę korzystać z DoggMatch w podróży?",
        a: "Tak. Znajdziesz wskazówki dotyczące podróży samochodem, wędrówek i wakacji, sprawdzarkę wymagań między krajami przy podróży za granicę oraz pakiet podróżny, który możesz zabrać ze sobą na papierze.",
      },
      {
        q: "Czy DoggMatch to porada weterynaryjna?",
        a: "Nie. Oferujemy ogólne wskazówki dotyczące życia z psem. W sprawach medycznych albo gdy martwisz się o psa, porozmawiaj ze swoim weterynarzem.",
      },
      {
        q: "Czy mogę anulować członkostwo?",
        a: "Tak, kiedy tylko zechcesz. Otwórz stronę swojego konta i samodzielnie zmień lub anuluj członkostwo — pozostaje ono aktywne do końca opłaconego już okresu.",
      },
      {
        q: "Czy mogę wybrać członkostwo miesięczne lub roczne?",
        a: "Tak — 7,99 € miesięcznie albo 59,99 € rocznie, co wychodzi na około 5 € miesięcznie. Możesz później przełączać się między nimi z poziomu konta.",
      },
      {
        q: "Co się dzieje, gdy dołączam?",
        a: "Utworzysz Mój pies, dodasz kilka szczegółów, a reszta strony zacznie dopasowywać się do tego psa. Czeka na Ciebie spokojny pierwszy tydzień, który przeprowadzi Cię krok po kroku.",
      },
    ],
    starsLabel: (filled: number) => `${filled} z 5`,
    hero: {
      eyebrow: "Członkostwo",
      lead: "Coś więcej niż znalezienie psa. Lepsze życie razem.",
      body: "Twoja podróż z DoggMatch nie kończy się na znalezieniu odpowiedniego psa. Premium daje Ci narzędzia, plany i osobistą przestrzeń, by pomóc Ci zapewnić psu szczęśliwe, zdrowe i uporządkowane życie.",
      heroAlt: "Kobieta opierająca czoło o swojego labradora o zachodzie słońca",
      exploreCta: "Odkryj DoggMatch+",
      seeAllCta: "Zobacz, co jest w zestawie",
    },
    coreMessage: "łączy to wszystko w jedno.",
    myDog: {
      eyebrow: "Serce tego wszystkiego",
      title: "Twój pies. Twoja przestrzeń.",
      body: "Mój pies to osobisty dom Twojego psa wewnątrz DoggMatch. Wszystko, co śledzisz, mieszka tutaj — i wszystko inne na stronie do tego wraca.",
      lunaAlt: "Luna, labrador retriever",
      lunaName: "Luna",
      lunaBreedAge: "Labrador retriever · 3 lata",
      today: "Dzisiaj",
      sideTitle: "Wszystko o Twoim psie, w jednym miejscu",
      sideBody:
        "Zdrowie, jedzenie, trening, zęby, sierść, łapy, waga, aktywność, zachowanie, Twój tydzień, podróże i dokumenty. Nie musisz wypełniać wszystkiego. Dodaj to, co przydatne, a reszta poczeka cicho, aż będzie potrzebna.",
      cta: "Zobacz Mój pies",
    },
    productMessage: {
      titleLine1: "Znajdź swojego psa.",
      titleLine2: "A potem żyjcie razem.",
      body: "Znalezienie odpowiedniego psa to dopiero początek. DoggMatch+ daje Ci jedno miejsce, w którym zadbasz o codzienne sprawy, które się liczą — od treningu i karmienia po zdrowie, podróże, rutyny i te drobne chwile pomiędzy.",
    },
    training: {
      trainAlt: "Mężczyzna ćwiczy przywołanie ze swoim psem na łące",
      eyebrow: "Trenujcie razem",
      title: "Małe kroki. Prawdziwe postępy.",
      body: "Uporządkowane programy złożone z krótkich, łagodnych sesji, które naprawdę zmieścisz w zwykłym dniu. Bez krzyku, bez gadżetów, bez obietnic co do tempa.",
      lunaName: "Luna",
      recall: "Przywołanie",
      progressNote: "4 sesje ukończone w tym tygodniu.",
      railLabel: "Programy treningowe",
      libraryCta: "Otwórz bibliotekę lekcji",
    },
    healthCare: {
      eyebrow: "Zdrowie i opieka",
      title: "Zadbaj o drobne sprawy",
      body: "Trzymaj ważne informacje razem, zauważaj zmiany w czasie i miej porządek. DoggMatch nie jest usługą weterynaryjną — gdy coś Cię niepokoi, właściwym wyborem jest weterynarz.",
      careAlt: "Właścicielka spokojnie sprawdzająca swojego psa w domu",
    },
    food: {
      foodAlt: "Odmierzona miska jedzenia przygotowywana dla czekającego psa",
      eyebrow: "Karm dobrze",
      title: "Ułatw sobie zrozumienie karmienia",
      body: "Porcje wyliczone na podstawie wagi, wieku i aktywności psa — utrzymywane w zgodzie z zapisem wagi. Sensowne, oparte na wiedzy, bez modnych trendów.",
      portionsCta: "Jedzenie i porcje",
      safetyCta: "Czy mój pies może to zjeść?",
    },
    myWeek: {
      eyebrow: "Mój tydzień",
      title: "Twój tydzień z psem",
      body: "Połącz trening, opiekę, aktywność i codzienne rutyny w jedno, by nic ważnego nie umknęło niezauważone.",
      cta: "Otwórz Mój tydzień",
    },
    dogLifeSection: {
      eyebrow: "Życie z psem",
      title: "Życie poza domem",
      body: "Codzienna mapa życia psa w Twojej okolicy — gdzie spacerować, gdzie jesteś mile widziany i do kogo zadzwonić.",
      cta: "Odkryj Życie z psem",
      dogLifeAlt: "Pies i właściciel na nadmorskim szlaku wczesnym rankiem",
    },
    travel: {
      travelAlt: "Pies bezpiecznie zapięty w tylnej części samochodu przed podróżą",
      eyebrow: "Podróże",
      title: "Zabierz swojego psa ze sobą",
      body: "Od codziennego dowożenia dzieci do szkoły po przekraczanie granicy. Zasady opierają się na aktualnych oficjalnych wymaganiach i się zmieniają — zawsze sprawdzaj je u odpowiednich instytucji przed podróżą.",
      checkerEyebrow: "Sprawdzarka podróży międzynarodowych",
      route: "Norwegia → Polska",
      checkerItems: [
        "Mikrochip",
        "Szczepienie przeciw wściekliźnie",
        "Paszport dla zwierząt",
        "Wymagania kraju docelowego",
        "Wymagania przy powrocie",
      ],
      checkCta: "Sprawdź swoją trasę",
    },
    print: {
      eyebrow: "Drukuj i zapisuj",
      title: "Niektóre rzeczy lepiej sprawdzają się na papierze.",
      body: "Miej ważne informacje przy sobie — w domu, w samochodzie, u weterynarza albo gdy ktoś inny opiekuje się Twoim psem.",
      cardBrand: "DoggMatch",
      cardTitle: "Pakiet podróżny psa",
      cardDog: "Luna · Labrador retriever",
      createCta: "Utwórz pakiet podróżny",
      printCta: "Zobacz, co możesz wydrukować",
    },
    multipleDogs: {
      eyebrow: "Wiele psów",
      title: "Jeden dom. Każdy pies.",
      body: "Premium obsługuje więcej niż jednego psa, każdy z własnym profilem, rutynami, treningiem, zdrowiem i dokumentami. Przełączanie między nimi to jedno dotknięcie.",
      dogs: [
        { name: "Luna", breed: "Labrador retriever" },
        { name: "Max", breed: "Cocker spaniel" },
      ],
    },
    personalisation: {
      title: "Wszystko wydaje się bardziej dopasowane do Twojego psa",
      body: "DoggMatch nie potrzebuje sprytnych maszyn, żeby to spersonalizować. Rasa, wiek, rozmiar i aktywność Twojego psa, Twój styl życia, Twoje rutyny i wszystko, co zechcesz nam powiedzieć, po cichu kształtują to, co widzisz — jakie lekcje się pojawiają, ile mniej więcej jedzenia jest odpowiednie, co sugeruje Twój tydzień.",
    },
    journeySection: {
      eyebrow: "Cała podróż",
      title: "Od pierwszej myśli po długie wspólne życie",
      closing: "— wszystko połączone w jednym miejscu.",
    },
    compare: {
      eyebrow: "Bezpłatne i Premium",
      title: "Co jest bezpłatne, a co przychodzi z Premium",
      body: "Wszystko, czego potrzebujesz, by znaleźć odpowiedniego psa, pozostaje bezpłatne. Premium jest dla życia, które nadchodzi później.",
      freeLabel: "Bezpłatne",
      freeHeadline: "Do znalezienia odpowiedniego psa.",
      freeQuote: "\u201CZnajdź psa, który jest dla mnie odpowiedni.\u201D",
      plusLabel: "DoggMatch+",
      plusHeadline: "Do życia z Twoim psem.",
      plusQuote: "\u201CTeraz pomóż mi zapewnić temu psu naprawdę dobre życie.\u201D",
    },
    value: {
      eyebrow: "Dlaczego DoggMatch+",
      title: "Trzy proste powody",
      items: [
        { title: "Jedno miejsce", body: "Wszystko o życiu Twojego psa, razem." },
        { title: "Przydatne każdego dnia", body: "Nie coś, co odwiedzasz tylko raz." },
        {
          title: "Zbudowane wokół Twojego psa",
          body: "Informacje o Twoim psie kształtują to doświadczenie.",
        },
      ],
    },
    firstWeekSection: {
      eyebrow: "Twój pierwszy tydzień z DoggMatch+",
      title: "Prosty start życia z DoggMatch+.",
      body: "Nigdzie się nie śpiesz. Po trochu każdego dnia, a pod koniec tygodnia Twój pies będzie miał tu swój dom.",
    },
    membership: {
      eyebrow: "Członkostwo",
      body: "Jedno członkostwo, wszystko w zestawie. Wybierz rytm, który Ci odpowiada.",
      monthlyLabel: "Miesięcznie",
      monthlyPrice: "7,99 €",
      monthlyUnit: "/ miesiąc",
      monthlyBody: "Wszystko w DoggMatch+, miesiąc po miesiącu.",
      monthlyJoin: "Dołącz miesięcznie",
      yearlyLabel: "Rocznie",
      bestValue: "Najlepsza oferta",
      yearlyPrice: "59,99 €",
      yearlyUnit: "/ rok",
      yearlyHighlight: "Tylko 5 € miesięcznie przy rozliczeniu rocznym",
      yearlyBody: "Oszczędzasz 35,89 € rocznie w porównaniu z płatnością miesięczną.",
      yearlyJoin: "Dołącz rocznie — najlepsza oferta",
      openLine: "Członkostwo jest otwarte.",
      openBody:
        "Płatności są bezpiecznie obsługiwane przez Stripe. Możesz samodzielnie zmienić lub anulować członkostwo w dowolnym momencie z poziomu swojego konta.",
    },
    faqSection: {
      eyebrow: "Pytania",
      title: "To, o co pytają nas najczęściej",
      body: "Krótkie, szczere odpowiedzi. Jeśli chcesz wiedzieć coś jeszcze, po prostu do nas napisz.",
      stillWondering: "Wciąż się nad czymś zastanawiasz?",
      getInTouch: "Skontaktuj się",
    },
    finalCta: {
      title: "Twój pies to coś więcej niż dopasowanie.",
      body: "DoggMatch pomaga Ci znaleźć psa, który jest dla Ciebie odpowiedni. DoggMatch+ pomaga Ci zapewnić temu psu naprawdę dobre życie.",
      join: "Dołącz do DoggMatch+",
      find: "Znajdź mojego psa",
    },
  },
  dk: {
    flow: [
      "Find din hund",
      "Forstå din hund",
      "Gør dig klar til din hund",
      "Lev med din hund",
      "Pas på din hund",
      "Nyd livet sammen",
    ],
    myDogSections: [
      { to: "/my-dog/care/everyday-check", label: "Sundhed", line: "Det hurtige daglige tjek" },
      { to: "/my-dog/nutrition", label: "Mad", line: "Portioner og måltider" },
      { to: "/train", label: "Træning", line: "Dagens korte session" },
      { to: "/my-dog/care/dental", label: "Tænder", line: "Et minut om dagen" },
      { to: "/my-dog/care/coat", label: "Pels & pleje", line: "Børstning og bad" },
      { to: "/my-dog/care/paws", label: "Poter & kløer", line: "Trædepuder og vinter" },
      { to: "/my-dog/weight", label: "Vægt", line: "Et enkelt, venligt overblik" },
      { to: "/my-dog/care/wellbeing", label: "Aktivitet", line: "Bevægelse og hvile" },
      { to: "/train/library", label: "Adfærd", line: "Én lektion ad gangen" },
      { to: "/my-dog/week", label: "Min uge", line: "Din ugentlige rytme" },
      { to: "/travel", label: "Rejser", line: "Bil, ture og grænser" },
      { to: "/my-dog/print", label: "Dokumenter", line: "Papir til køleskabet" },
    ],
    programmes: [
      { title: "Hvalpe-basics", line: "De første uger, i roligt tempo" },
      { title: "Indkald", line: "Kommer tilbage, hver gang du beder om det" },
      { title: "Gå pænt i snor", line: "Gåture uden trækkeri" },
      { title: "Ro i kroppen", line: "At falde til ro på et tæppe" },
      { title: "Hverdagsmanerer", line: "Døre, hilsner, at vente" },
      { title: "Fokus", line: "Sit navn, sin opmærksomhed" },
      { title: "Bliv", line: "Et sekund længere hver gang" },
      { title: "Socialisering", line: "Nye steder i hundens eget tempo" },
    ],
    careItems: [
      { title: "Sundhedsjournal", line: "Læg mærke til ændringer over uger, ikke gætterier." },
      { title: "Vægt", line: "Det håndgribelige tjek plus en enkel log." },
      { title: "Tænder", line: "Tænder og tandkød, tredive sekunder ad gangen." },
      { title: "Pels & hud", line: "Pelstype, børsterytme, knuder og filt." },
      { title: "Poter & kløer", line: "Trædepuder, kløer, salt og varm asfalt." },
      { title: "Plejekalender", line: "Stille påmindelser, når noget skal gøres." },
      { title: "Dyrlægenotater", line: "Hvad du spurgte om, hvad du fik at vide." },
      { title: "Sundhedsoversigt", line: "Én side, du kan tage med dig." },
    ],
    foodItems: [
      { title: "Mad- og fodringsplan", line: "Omtrent hvor meget, til din hund." },
      { title: "Fodringsrutine", line: "Måltider om dagen, tidspunkter der passer dig." },
      { title: "Madlog", line: "Det, hunden spiser, samlet ét sted." },
      { title: "Kobling til vægt", line: "Portioner der følger vægtloggen." },
      { title: "Godbidder", line: "Holdt til en fornuftig del af dagen." },
      { title: "Vand", line: "Rent og fyldt op, altid." },
      { title: "Madsikkerhed", line: "Sikkert, forsigtigt eller undgå — 55+ fødevarer." },
    ],
    week: [
      { day: "Mandag", items: ["Gåtur", "Træning", "Tænder"] },
      { day: "Tirsdag", items: ["Gåtur", "Mental stimulering"] },
      { day: "Onsdag", items: ["Træning", "Pleje"] },
      { day: "Torsdag", items: ["Lang gåtur", "Potetjek"] },
      { day: "Fredag", items: ["Gåtur", "Træning", "Tænder"] },
      { day: "Lørdag", items: ["Eventyr", "Vejning"] },
      { day: "Søndag", items: ["Snusetur", "Rolig stund"] },
    ],
    dogLife: [
      "Parker",
      "Gåture",
      "Hundevenlige steder",
      "Trænere",
      "Groomere",
      "Dyrlæger",
      "Hundevenlige overnatninger",
    ],
    travelItems: [
      "Bilrejser",
      "Lange gåture",
      "Vandreture",
      "Ferier",
      "Udlandsrejser",
      "Rejsetjekliste",
      "Rejsedokumenter",
      "Krav fra land til land",
    ],
    packContents: [
      "Hundeprofil",
      "Ejerinformation",
      "Vigtige kontakter",
      "Rejsetjekliste",
      "Sundhedsinformation",
      "Dokumenter",
      "Nødinformation",
    ],
    docs: [
      "Komplet hundepakke",
      "Sundhedsoversigt",
      "Træningsplan",
      "Mad- og fodringsplan",
      "Ugeplan",
      "Vigtige kontakter",
      "Notater fra dyrlægebesøg",
      "Rejsepakke",
      "Plejetjekliste",
    ],
    journey: [
      "Overvejer hund",
      "Find min hund",
      "Gør dig klar",
      "Velkommen hjem",
      "Min hund",
      "Træning",
      "Fodring",
      "Pleje",
      "Rejser",
      "Nyd livet",
    ],
    freeList: [
      "Er en hund det rette for mig?",
      "Find min hund",
      "Grundlæggende raseinformation",
      "Guides til at skaffe hund",
      "Grundlæggende hundeliv",
      "Udvalgte gratis guides",
    ],
    plusList: [
      "Alt i Gratis",
      "Min hund",
      "Komplet træning",
      "Sundhed & pleje",
      "Mad & fodring",
      "Min uge",
      "Plejekalender",
      "Udvidet hundeliv",
      "Rejseværktøjer",
      "Tjek for udlandsrejse",
      "Komplet hundepakke",
      "Dokumenter til print",
      "Flere hunde",
      "En fyldigere matchrapport",
      "Fremskridt over tid",
    ],
    firstWeek: [
      { day: "Dag 1", title: "Opret Min hund", line: "Giv din hund sit eget sted." },
      {
        day: "Dag 2",
        title: "Sæt pleje op",
        line: "Tilføj fodring, tænder, pels og hverdagsrutiner.",
      },
      {
        day: "Dag 3",
        title: "Start træning",
        line: "Vælg et program og tag det første lille skridt.",
      },
      { day: "Dag 4", title: "Byg Min uge", line: "Saml gåture, træning og pleje ét sted." },
      {
        day: "Dag 5",
        title: "Udforsk hundeliv",
        line: "Find steder og tjenester, der passer til livet med din hund.",
      },
      { day: "Dag 6", title: "Planlæg din næste tur", line: "Gør din rejsetjekliste klar." },
      {
        day: "Dag 7",
        title: "Opret din hundepakke",
        line: "Hav det vigtigste samlet, på skærm eller papir.",
      },
    ],
    faqs: [
      {
        q: "Hvad er DoggMatch+?",
        a: "Det er medlemsdelen af DoggMatch. Gratis hjælper dig med at finde den rette hund. DoggMatch+ hjælper dig med at passe på den hund dag for dag — træning, mad, sundhed, rutiner, rejser og dokumenter, alt sammen ét sted.",
      },
      {
        q: "Hvad får jeg med DoggMatch+?",
        a: "Min hund, de fulde træningsprogrammer, sundhed og pleje, mad og fodring, Min uge, plejekalenderen, rejseværktøjer, den komplette hundepakke og dokumenter til print — plus en fyldigere matchrapport.",
      },
      {
        q: "Hvad forbliver gratis?",
        a: "Alt, du behøver for at finde den rette hund. Er en hund det rette for mig?, Find min hund, raseinformation, guides til at skaffe hund, grundlæggende hundeliv og vores gratis guides forbliver gratis.",
      },
      {
        q: "Kan jeg bruge DoggMatch+ til mere end én hund?",
        a: "Ja. Du kan have en separat profil til hver hund og skifte mellem dem, så intet bliver blandet sammen.",
      },
      {
        q: "Kan jeg printe information om min hund?",
        a: "Ja. Hundepakken og de enkelte dokumenter — sundhedsoversigt, fodringsplan, ugeplan, kontakter, rejsepakke — er alle lavet til at printe pænt på A4 eller gemme som PDF.",
      },
      {
        q: "Kan jeg bruge DoggMatch, når jeg rejser?",
        a: "Ja. Der er vejledning til bilrejser, vandreture og ferier, et tjek for krav fra land til land ved udlandsrejser, og en rejsepakke, du kan tage med dig på papir.",
      },
      {
        q: "Er DoggMatch dyrlægefaglig rådgivning?",
        a: "Nej. Vi giver generel vejledning om livet med hund. Ved alt medicinsk, eller hvis du er bekymret for din hund, så tal med din dyrlæge.",
      },
      {
        q: "Kan jeg opsige mit medlemskab?",
        a: "Ja, når som helst. Åbn din kontoside, og du kan selv ændre eller opsige dit medlemskab — det forbliver aktivt til udgangen af den periode, du allerede har betalt for.",
      },
      {
        q: "Kan jeg vælge månedligt eller årligt medlemskab?",
        a: "Ja — 7,99 € om måneden, eller 59,99 € om året, hvilket svarer til cirka 5 € om måneden. Du kan skifte mellem dem senere fra din konto.",
      },
      {
        q: "Hvad sker der, når jeg bliver medlem?",
        a: "Du opretter Min hund, tilføjer nogle få detaljer, og alt andet på siden begynder at tilpasse sig den hund. Der er en rolig første uge, der guider dig igennem det.",
      },
    ],
    starsLabel: (filled: number) => `${filled} af 5`,
    hero: {
      eyebrow: "Medlemskab",
      lead: "Mere end at finde din hund. Et bedre liv sammen.",
      body: "Din DoggMatch-rejse slutter ikke, når du finder den rette hund. Premium giver dig værktøjerne, planerne og det personlige rum til at give din hund et lykkeligt, sundt og velorganiseret liv.",
      heroAlt: "En kvinde hviler sin pande mod sin labrador ved solnedgang",
      exploreCta: "Udforsk DoggMatch+",
      seeAllCta: "Se alt, hvad der er inkluderet",
    },
    coreMessage: "samler det hele.",
    myDog: {
      eyebrow: "Midtpunktet i det hele",
      title: "Din hund. Dit rum.",
      body: "Min hund er din hunds personlige hjem inde i DoggMatch. Alt, du holder styr på, bor her — og alt andet på siden spiller ind i det.",
      lunaAlt: "Luna, en labrador retriever",
      lunaName: "Luna",
      lunaBreedAge: "Labrador retriever · 3 år",
      today: "I dag",
      sideTitle: "Alt om din hund, ét sted",
      sideBody:
        "Sundhed, mad, træning, tænder, pels, poter, vægt, aktivitet, adfærd, din uge, rejser og dokumenter. Du behøver ikke udfylde det hele. Tilføj det, der er nyttigt, resten venter stille, til du får brug for det.",
      cta: "Se Min hund",
    },
    productMessage: {
      titleLine1: "Find din hund.",
      titleLine2: "Lev så livet sammen.",
      body: "At finde den rette hund er kun begyndelsen. DoggMatch+ giver dig ét sted at passe på de hverdagsting, der betyder noget — fra træning og fodring til sundhed, rejser, rutiner og de små øjeblikke imellem.",
    },
    training: {
      trainAlt: "En mand øver indkald med sin hund på en mark",
      eyebrow: "Træn sammen",
      title: "Små skridt. Reelle fremskridt.",
      body: "Strukturerede programmer bygget af korte, venlige sessioner, du rent faktisk kan få plads til i en almindelig dag. Ingen råben, ingen dimser, ingen løfter om, hvor hurtigt det går.",
      lunaName: "Luna",
      recall: "Indkald",
      progressNote: "4 sessioner gennemført denne uge.",
      railLabel: "Træningsprogrammer",
      libraryCta: "Åbn lektionsbiblioteket",
    },
    healthCare: {
      eyebrow: "Sundhed & pleje",
      title: "Pas på de små ting",
      body: "Hold det vigtige samlet, læg mærke til ændringer over tid, og hold styr på det. DoggMatch er ikke en dyrlægetjeneste — når noget bekymrer dig, er din dyrlæge det rette valg.",
      careAlt: "En ejer tjekker roligt sin hund derhjemme",
    },
    food: {
      foodAlt: "En afmålt skål mad gøres klar til en ventende hund",
      eyebrow: "Fodr godt",
      title: "Gør fodring nemmere at forstå",
      body: "Portioner udregnet fra din hunds vægt, alder og aktivitetsniveau — holdt i takt med vægtloggen. Fornuftigt, evidensbaseret, ingen fluepapirtrends.",
      portionsCta: "Mad & portioner",
      safetyCta: "Kan min hund spise dette?",
    },
    myWeek: {
      eyebrow: "Min uge",
      title: "Din uge med din hund",
      body: "Saml træning, pleje, aktivitet og hverdagsrutiner ét sted, så intet vigtigt stille glider væk.",
      cta: "Åbn Min uge",
    },
    dogLifeSection: {
      eyebrow: "Hundeliv",
      title: "Livet uden for hjemmet",
      body: "Hverdagskortet over en hunds liv i nærheden af dig — hvor du kan gå tur, hvor du er velkommen, og hvem du skal ringe til.",
      cta: "Udforsk hundeliv",
      dogLifeAlt: "En hund og ejer på en kyststi tidligt om morgenen",
    },
    travel: {
      travelAlt: "En hund sikkert fastspændt bagi en bil før en tur",
      eyebrow: "Rejser",
      title: "Tag din hund med dig",
      body: "Fra skoleture til at krydse en grænse. Reglerne bygger på aktuelle officielle krav og ændrer sig — tjek altid med myndighederne, før du rejser.",
      checkerEyebrow: "Tjek for udlandsrejse",
      route: "Norge → Polen",
      checkerItems: [
        "Mikrochip",
        "Rabiesvaccination",
        "Kæledyrspas",
        "Krav i modtagerlandet",
        "Krav ved hjemrejse",
      ],
      checkCta: "Tjek din rute",
    },
    print: {
      eyebrow: "Print & gem",
      title: "Nogle ting er bedre på papir.",
      body: "Hav den vigtige information med dig — derhjemme, i bilen, hos dyrlægen, eller når nogen andre passer din hund.",
      cardBrand: "DoggMatch",
      cardTitle: "Hundens rejsepakke",
      cardDog: "Luna · Labrador retriever",
      createCta: "Opret rejsepakke",
      printCta: "Se, hvad du kan printe",
    },
    multipleDogs: {
      eyebrow: "Flere hunde",
      title: "Ét hjem. Hver hund.",
      body: "Premium understøtter mere end én hund, hver med sin egen profil, rutiner, træning, sundhed og dokumenter. At skifte mellem dem tager ét tryk.",
      dogs: [
        { name: "Luna", breed: "Labrador retriever" },
        { name: "Max", breed: "Cocker spaniel" },
      ],
    },
    personalisation: {
      title: "Alt føles mere relevant for din hund",
      body: "DoggMatch behøver ikke smarte maskiner for at gøre dette personligt. Din hunds race, alder, størrelse, aktivitet, din livsstil, dine rutiner og alt, du vælger at fortælle os, former stille det, du ser — hvilke lektioner der dukker op, omtrent hvor meget mad der er rigtigt, hvad din uge foreslår.",
    },
    journeySection: {
      eyebrow: "Hele rejsen",
      title: "Fra første tanke til et langt liv sammen",
      closing: "— alt forbundet ét sted.",
    },
    compare: {
      eyebrow: "Gratis og Premium",
      title: "Hvad der er gratis, og hvad der følger med Premium",
      body: "Alt, du behøver for at finde den rette hund, forbliver gratis. Premium er til livet, der kommer bagefter.",
      freeLabel: "Gratis",
      freeHeadline: "Til at finde den rette hund.",
      freeQuote: "“Find hunden, der er rigtig for mig.”",
      plusLabel: "DoggMatch+",
      plusHeadline: "Til livet med din hund.",
      plusQuote: "“Hjælp mig nu med at give den hund et rigtig godt liv.”",
    },
    value: {
      eyebrow: "Hvorfor DoggMatch+",
      title: "Tre enkle grunde",
      items: [
        { title: "Ét sted", body: "Alt om din hunds liv, samlet." },
        { title: "Nyttigt hver dag", body: "Ikke bare noget, du besøger én gang." },
        { title: "Bygget omkring din hund", body: "Din hunds information former oplevelsen." },
      ],
    },
    firstWeekSection: {
      eyebrow: "Din første uge med DoggMatch+",
      title: "En enkel start på livet med DoggMatch+.",
      body: "Intet at skynde sig med. Lidt hver dag, og ved ugens udgang har din hund et hjem her.",
    },
    membership: {
      eyebrow: "Medlemskab",
      body: "Ét medlemskab, alt inkluderet. Vælg den rytme, der passer dig.",
      monthlyLabel: "Månedligt",
      monthlyPrice: "€7.99",
      monthlyUnit: "/ måned",
      monthlyBody: "Alt i DoggMatch+, måned for måned.",
      monthlyJoin: "Bliv medlem månedligt",
      yearlyLabel: "Årligt",
      bestValue: "Bedste værdi",
      yearlyPrice: "€59.99",
      yearlyUnit: "/ år",
      yearlyHighlight: "Kun €5 om måneden ved årlig fakturering",
      yearlyBody: "Spar €35,89 om året sammenlignet med månedlig betaling.",
      yearlyJoin: "Bliv medlem årligt — bedste værdi",
      openLine: "Medlemskabet er åbent.",
      openBody:
        "Betaling håndteres sikkert af Stripe. Du kan selv ændre eller opsige dit medlemskab når som helst fra din konto.",
    },
    faqSection: {
      eyebrow: "Spørgsmål",
      title: "De ting, folk plejer at spørge om",
      body: "Korte, ærlige svar. Hvis der er noget andet, du gerne vil vide, så skriv bare til os.",
      stillWondering: "Undrer du dig stadig over noget?",
      getInTouch: "Kontakt os",
    },
    finalCta: {
      title: "Din hund er mere end en match.",
      body: "DoggMatch hjælper dig med at finde hunden, der er rigtig for dig. DoggMatch+ hjælper dig med at give den hund et rigtig godt liv.",
      join: "Bliv medlem af DoggMatch+",
      find: "Find min hund",
    },
  },
  se: {
    flow: [
      "Hitta din hund",
      "Lär känna din hund",
      "Förbered dig för din hund",
      "Lev med din hund",
      "Ta hand om din hund",
      "Njut av livet tillsammans",
    ],
    myDogSections: [
      { to: "/my-dog/care/everyday-check", label: "Hälsa", line: "Den snabba dagliga koll" },
      { to: "/my-dog/nutrition", label: "Mat", line: "Portioner och måltider" },
      { to: "/train", label: "Träning", line: "Dagens korta pass" },
      { to: "/my-dog/care/dental", label: "Tänder", line: "En minut om dagen" },
      { to: "/my-dog/care/coat", label: "Päls & skötsel", line: "Borstning och bad" },
      { to: "/my-dog/care/paws", label: "Tassar & klor", line: "Trampdynor och vinter" },
      { to: "/my-dog/weight", label: "Vikt", line: "En enkel, snäll översikt" },
      { to: "/my-dog/care/wellbeing", label: "Aktivitet", line: "Rörelse och vila" },
      { to: "/train/library", label: "Beteende", line: "En lektion i taget" },
      { to: "/my-dog/week", label: "Min vecka", line: "Din veckorytm" },
      { to: "/travel", label: "Resor", line: "Bil, turer och gränser" },
      { to: "/my-dog/print", label: "Dokument", line: "Papper till kylskåpet" },
    ],
    programmes: [
      { title: "Valpgrunder", line: "De första veckorna, i lugn takt" },
      { title: "Inkallning", line: "Kommer tillbaka, varje gång du ber om det" },
      { title: "Gå fint i koppel", line: "Promenader utan dragkamp" },
      { title: "Lugnt beteende", line: "Att slappna av på en filt" },
      { title: "Vardagsmanér", line: "Dörrar, hälsningar, att vänta" },
      { title: "Fokus", line: "Sitt namn, sin uppmärksamhet" },
      { title: "Stanna", line: "En sekund längre varje gång" },
      { title: "Socialisering", line: "Nya platser i hundens eget tempo" },
    ],
    careItems: [
      { title: "Hälsojournal", line: "Lägg märke till förändringar över veckor, inte gissningar." },
      { title: "Vikt", line: "Den handfasta kollen plus en enkel logg." },
      { title: "Tänder", line: "Tänder och tandkött, trettio sekunder i taget." },
      { title: "Päls & hud", line: "Pälstyp, borstningsrytm, knölar och tovor." },
      { title: "Tassar & klor", line: "Trampdynor, klor, salt och het asfalt." },
      { title: "Skötselkalender", line: "Tysta påminnelser när något ska göras." },
      { title: "Veterinäranteckningar", line: "Vad du frågade om, vad du fick veta." },
      { title: "Hälsosammanfattning", line: "En sida att ta med dig." },
    ],
    foodItems: [
      { title: "Mat- och utfodringsplan", line: "Ungefär hur mycket, för din hund." },
      { title: "Utfodringsrutin", line: "Måltider om dagen, tider som passar dig." },
      { title: "Matloggning", line: "Det hunden äter, samlat på ett ställe." },
      { title: "Koppling till vikt", line: "Portioner som följer viktloggen." },
      { title: "Godis", line: "Hållet till en rimlig del av dagen." },
      { title: "Vatten", line: "Rent och påfyllt, alltid." },
      { title: "Matsäkerhet", line: "Säkert, försiktigt eller undvik — 55+ livsmedel." },
    ],
    week: [
      { day: "Måndag", items: ["Promenad", "Träning", "Tänder"] },
      { day: "Tisdag", items: ["Promenad", "Mental stimulans"] },
      { day: "Onsdag", items: ["Träning", "Skötsel"] },
      { day: "Torsdag", items: ["Lång promenad", "Tasskoll"] },
      { day: "Fredag", items: ["Promenad", "Träning", "Tänder"] },
      { day: "Lördag", items: ["Äventyr", "Vägning"] },
      { day: "Söndag", items: ["Nosarpromenad", "Lugn stund"] },
    ],
    dogLife: [
      "Parker",
      "Promenadstråk",
      "Hundvänliga platser",
      "Hundtränare",
      "Groomers",
      "Veterinärer",
      "Hundvänliga övernattningar",
    ],
    travelItems: [
      "Bilresor",
      "Långa promenader",
      "Vandringar",
      "Semestrar",
      "Utlandsresor",
      "Resechecklista",
      "Resedokument",
      "Krav från land till land",
    ],
    packContents: [
      "Hundprofil",
      "Ägarinformation",
      "Viktiga kontakter",
      "Resechecklista",
      "Hälsoinformation",
      "Dokument",
      "Information vid nödsituation",
    ],
    docs: [
      "Komplett hundpaket",
      "Hälsosammanfattning",
      "Träningsplan",
      "Mat- och utfodringsplan",
      "Veckoplan",
      "Viktiga kontakter",
      "Anteckningar från veterinärbesök",
      "Resepaket",
      "Skötselchecklista",
    ],
    journey: [
      "Funderar på hund",
      "Hitta min hund",
      "Förbered dig",
      "Välkommen hem",
      "Min hund",
      "Träning",
      "Utfodring",
      "Skötsel",
      "Resor",
      "Njut av livet",
    ],
    freeList: [
      "Passar en hund mig?",
      "Hitta min hund",
      "Grundläggande rasinformation",
      "Guider för att skaffa hund",
      "Grundläggande hundliv",
      "Utvalda gratisguider",
    ],
    plusList: [
      "Allt i Gratis",
      "Min hund",
      "Komplett träning",
      "Hälsa & skötsel",
      "Mat & utfodring",
      "Min vecka",
      "Skötselkalender",
      "Utökat hundliv",
      "Reseverktyg",
      "Kontroll för utlandsresa",
      "Komplett hundpaket",
      "Utskrivbara dokument",
      "Flera hundar",
      "En fylligare matchrapport",
      "Framsteg över tid",
    ],
    firstWeek: [
      { day: "Dag 1", title: "Skapa Min hund", line: "Ge din hund en egen plats." },
      {
        day: "Dag 2",
        title: "Ställ in skötsel",
        line: "Lägg till utfodring, tänder, päls och vardagsrutiner.",
      },
      {
        day: "Dag 3",
        title: "Börja träna",
        line: "Välj ett program och ta det första lilla steget.",
      },
      {
        day: "Dag 4",
        title: "Bygg Min vecka",
        line: "Samla promenader, träning och skötsel på ett ställe.",
      },
      {
        day: "Dag 5",
        title: "Utforska hundliv",
        line: "Hitta platser och tjänster som passar livet med din hund.",
      },
      { day: "Dag 6", title: "Planera din nästa resa", line: "Gör din resechecklista klar." },
      {
        day: "Dag 7",
        title: "Skapa ditt hundpaket",
        line: "Ha det viktigaste samlat, på skärm eller på papper.",
      },
    ],
    faqs: [
      {
        q: "Vad är DoggMatch+?",
        a: "Det är medlemsdelen av DoggMatch. Gratis hjälper dig hitta rätt hund. DoggMatch+ hjälper dig ta hand om den hunden dag för dag — träning, mat, hälsa, rutiner, resor och dokument, allt på ett ställe.",
      },
      {
        q: "Vad får jag med DoggMatch+?",
        a: "Min hund, de fullständiga träningsprogrammen, hälsa och skötsel, mat och utfodring, Min vecka, skötselkalendern, reseverktyg, det kompletta hundpaketet och utskrivbara dokument — plus en fylligare matchrapport.",
      },
      {
        q: "Vad förblir gratis?",
        a: "Allt du behöver för att hitta rätt hund. Passar en hund mig?, Hitta min hund, rasinformation, guiderna för att skaffa hund, grundläggande hundliv och våra gratisguider förblir gratis.",
      },
      {
        q: "Kan jag använda DoggMatch+ för mer än en hund?",
        a: "Ja. Du kan ha en separat profil för varje hund och växla mellan dem, så inget blandas ihop.",
      },
      {
        q: "Kan jag skriva ut information om min hund?",
        a: "Ja. Hundpaketet och de enskilda dokumenten — hälsosammanfattning, utfodringsplan, veckoplan, kontakter, resepaket — är alla gjorda för att skrivas ut snyggt på A4 eller sparas som PDF.",
      },
      {
        q: "Kan jag använda DoggMatch på resande fot?",
        a: "Ja. Det finns vägledning för bilresor, vandringar och semestrar, en kontroll av krav från land till land vid utlandsresor, och ett resepaket du kan ta med dig på papper.",
      },
      {
        q: "Är DoggMatch veterinärmedicinsk rådgivning?",
        a: "Nej. Vi ger allmän vägledning om livet med hund. Vid allt medicinskt, eller om du är orolig för din hund, prata med din veterinär.",
      },
      {
        q: "Kan jag säga upp mitt medlemskap?",
        a: "Ja, när du vill. Öppna din kontosida, så kan du själv ändra eller säga upp ditt medlemskap — det förblir aktivt ut den period du redan har betalat för.",
      },
      {
        q: "Kan jag välja månads- eller årsmedlemskap?",
        a: "Ja — 7,99 € i månaden, eller 59,99 € om året, vilket blir ungefär 5 € i månaden. Du kan växla mellan dem senare från ditt konto.",
      },
      {
        q: "Vad händer när jag går med?",
        a: "Du skapar Min hund, lägger till några detaljer, och allt annat på sajten börjar anpassa sig efter den hunden. Det finns en lugn första vecka som guidar dig genom det.",
      },
    ],
    starsLabel: (filled: number) => `${filled} av 5`,
    hero: {
      eyebrow: "Medlemskap",
      lead: "Mer än att hitta din hund. Ett bättre liv tillsammans.",
      body: "Din DoggMatch-resa slutar inte när du hittar rätt hund. Premium ger dig verktygen, planerna och det personliga utrymmet för att ge din hund ett lyckligt, friskt och välordnat liv.",
      heroAlt: "En kvinna vilar sin panna mot sin labrador i solnedgången",
      exploreCta: "Utforska DoggMatch+",
      seeAllCta: "Se allt som ingår",
    },
    coreMessage: "samlar allt.",
    myDog: {
      eyebrow: "Mittpunkten i allt",
      title: "Din hund. Ditt utrymme.",
      body: "Min hund är din hunds personliga hem inuti DoggMatch. Allt du håller koll på bor här — och allt annat på sajten spelar in i det.",
      lunaAlt: "Luna, en labrador retriever",
      lunaName: "Luna",
      lunaBreedAge: "Labrador retriever · 3 år",
      today: "Idag",
      sideTitle: "Allt om din hund, på ett ställe",
      sideBody:
        "Hälsa, mat, träning, tänder, päls, tassar, vikt, aktivitet, beteende, din vecka, resor och dokument. Du behöver inte fylla i allt. Lägg till det som är användbart, resten väntar tyst tills du behöver det.",
      cta: "Se Min hund",
    },
    productMessage: {
      titleLine1: "Hitta din hund.",
      titleLine2: "Lev sedan livet tillsammans.",
      body: "Att hitta rätt hund är bara början. DoggMatch+ ger dig ett ställe att ta hand om de vardagssaker som betyder något — från träning och utfodring till hälsa, resor, rutiner och de små stunderna däremellan.",
    },
    training: {
      trainAlt: "En man övar inkallning med sin hund på en äng",
      eyebrow: "Träna tillsammans",
      title: "Små steg. Verkliga framsteg.",
      body: "Strukturerade program byggda av korta, snälla pass som du faktiskt kan få in i en vanlig dag. Inget skrikande, inga prylar, inga löften om hur snabbt det går.",
      lunaName: "Luna",
      recall: "Inkallning",
      progressNote: "4 pass genomförda den här veckan.",
      railLabel: "Träningsprogram",
      libraryCta: "Öppna lektionsbiblioteket",
    },
    healthCare: {
      eyebrow: "Hälsa & skötsel",
      title: "Ta hand om de små sakerna",
      body: "Håll det viktiga samlat, lägg märke till förändringar över tid och håll ordning. DoggMatch är ingen veterinärtjänst — när något oroar dig är veterinären rätt val.",
      careAlt: "En ägare kollar lugnt igenom sin hund hemma",
    },
    food: {
      foodAlt: "En avmätt skål mat förbereds för en väntande hund",
      eyebrow: "Utfodra väl",
      title: "Gör utfodring lättare att förstå",
      body: "Portioner uträknade från din hunds vikt, ålder och aktivitetsnivå — hållna i takt med viktloggen. Förnuftigt, kunskapsbaserat, inga modenycker.",
      portionsCta: "Mat & portioner",
      safetyCta: "Kan min hund äta det här?",
    },
    myWeek: {
      eyebrow: "Min vecka",
      title: "Din vecka med din hund",
      body: "Samla träning, skötsel, aktivitet och vardagsrutiner på ett ställe, så att inget viktigt tyst glider undan.",
      cta: "Öppna Min vecka",
    },
    dogLifeSection: {
      eyebrow: "Hundliv",
      title: "Livet utanför hemmet",
      body: "Vardagskartan över en hunds liv nära dig — var du kan gå promenader, var du är välkommen och vem du ska ringa.",
      cta: "Utforska hundliv",
      dogLifeAlt: "En hund och ägare på en kuststig tidigt på morgonen",
    },
    travel: {
      travelAlt: "En hund säkert fastspänd i baksätet före en resa",
      eyebrow: "Resor",
      title: "Ta din hund med dig",
      body: "Från vardagspromenader till att korsa en gräns. Reglerna bygger på gällande officiella krav och ändras — kontrollera alltid med myndigheterna innan du reser.",
      checkerEyebrow: "Kontroll för utlandsresa",
      route: "Norge → Polen",
      checkerItems: [
        "Mikrochip",
        "Rabiesvaccination",
        "Djurpass",
        "Krav i mottagarlandet",
        "Krav vid återresa",
      ],
      checkCta: "Kontrollera din rutt",
    },
    print: {
      eyebrow: "Skriv ut & spara",
      title: "Vissa saker är bättre på papper.",
      body: "Ha den viktiga informationen med dig — hemma, i bilen, hos veterinären eller när någon annan tar hand om din hund.",
      cardBrand: "DoggMatch",
      cardTitle: "Hundens resepaket",
      cardDog: "Luna · Labrador retriever",
      createCta: "Skapa resepaket",
      printCta: "Se vad du kan skriva ut",
    },
    multipleDogs: {
      eyebrow: "Flera hundar",
      title: "Ett hem. Varje hund.",
      body: "Premium stödjer mer än en hund, var och en med sin egen profil, rutiner, träning, hälsa och dokument. Att växla mellan dem tar ett tryck.",
      dogs: [
        { name: "Luna", breed: "Labrador retriever" },
        { name: "Max", breed: "Cocker spaniel" },
      ],
    },
    personalisation: {
      title: "Allt känns mer relevant för din hund",
      body: "DoggMatch behöver inga smarta maskiner för att göra det här personligt. Din hunds ras, ålder, storlek, aktivitet, din livsstil, dina rutiner och allt du väljer att berätta för oss formar tyst det du ser — vilka lektioner som dyker upp, ungefär hur mycket mat som är rätt, vad din vecka föreslår.",
    },
    journeySection: {
      eyebrow: "Hela resan",
      title: "Från första tanken till ett långt liv tillsammans",
      closing: "— allt kopplat samman på ett ställe.",
    },
    compare: {
      eyebrow: "Gratis och Premium",
      title: "Vad som är gratis, och vad som ingår i Premium",
      body: "Allt du behöver för att hitta rätt hund förblir gratis. Premium är för livet som kommer efteråt.",
      freeLabel: "Gratis",
      freeHeadline: "För att hitta rätt hund.",
      freeQuote: "”Hitta hunden som passar mig.”",
      plusLabel: "DoggMatch+",
      plusHeadline: "För livet med din hund.",
      plusQuote: "”Hjälp mig nu ge den hunden ett riktigt bra liv.”",
    },
    value: {
      eyebrow: "Varför DoggMatch+",
      title: "Tre enkla skäl",
      items: [
        { title: "Ett ställe", body: "Allt om din hunds liv, samlat." },
        { title: "Användbart varje dag", body: "Inte bara något du besöker en gång." },
        { title: "Byggt kring din hund", body: "Din hunds information formar upplevelsen." },
      ],
    },
    firstWeekSection: {
      eyebrow: "Din första vecka med DoggMatch+",
      title: "En enkel start på livet med DoggMatch+.",
      body: "Inget att stressa med. Lite varje dag, och i slutet av veckan har din hund ett hem här.",
    },
    membership: {
      eyebrow: "Medlemskap",
      body: "Ett medlemskap, allt ingår. Välj den rytm som passar dig.",
      monthlyLabel: "Månadsvis",
      monthlyPrice: "€7,99",
      monthlyUnit: "/ månad",
      monthlyBody: "Allt i DoggMatch+, månad för månad.",
      monthlyJoin: "Gå med månadsvis",
      yearlyLabel: "Årsvis",
      bestValue: "Bäst värde",
      yearlyPrice: "€59,99",
      yearlyUnit: "/ år",
      yearlyHighlight: "Bara €5 i månaden vid årsfakturering",
      yearlyBody: "Spara €35,89 per år jämfört med månadsbetalning.",
      yearlyJoin: "Gå med årsvis — bäst värde",
      openLine: "Medlemskapet är öppet.",
      openBody:
        "Betalning hanteras säkert av Stripe. Du kan själv ändra eller säga upp ditt medlemskap när som helst från ditt konto.",
    },
    faqSection: {
      eyebrow: "Frågor",
      title: "Det folk brukar undra över",
      body: "Korta, ärliga svar. Om det är något annat du vill veta, skriv bara till oss.",
      stillWondering: "Undrar du fortfarande över något?",
      getInTouch: "Kontakta oss",
    },
    finalCta: {
      title: "Din hund är mer än en match.",
      body: "DoggMatch hjälper dig hitta hunden som är rätt för dig. DoggMatch+ hjälper dig ge den hunden ett riktigt bra liv.",
      join: "Gå med i DoggMatch+",
      find: "Hitta min hund",
    },
  },
  de: {
    flow: [
      "Finde deinen Hund",
      "Verstehe deinen Hund",
      "Bereite dich auf deinen Hund vor",
      "Lebe mit deinem Hund",
      "Kümmere dich um deinen Hund",
      "Genießt das Leben zusammen",
    ],
    myDogSections: [
      {
        to: "/my-dog/care/everyday-check",
        label: "Gesundheit",
        line: "Der schnelle tägliche Rundumblick",
      },
      { to: "/my-dog/nutrition", label: "Futter", line: "Portionen und Mahlzeiten" },
      { to: "/train", label: "Training", line: "Die kurze Einheit von heute" },
      { to: "/my-dog/care/dental", label: "Zähne", line: "Eine Minute am Tag" },
      { to: "/my-dog/care/coat", label: "Fell & Pflege", line: "Bürsten und Baden" },
      { to: "/my-dog/care/paws", label: "Pfoten & Krallen", line: "Ballen und Winter" },
      { to: "/my-dog/weight", label: "Gewicht", line: "Eine einfache, freundliche Übersicht" },
      { to: "/my-dog/care/wellbeing", label: "Aktivität", line: "Bewegung und Ruhe" },
      { to: "/train/library", label: "Verhalten", line: "Eine Lektion nach der anderen" },
      { to: "/my-dog/week", label: "Meine Woche", line: "Dein Wochenrhythmus" },
      { to: "/travel", label: "Reisen", line: "Auto, Wanderungen und Grenzen" },
      { to: "/my-dog/print", label: "Dokumente", line: "Papier für den Kühlschrank" },
    ],
    programmes: [
      { title: "Welpengrundlagen", line: "Die ersten Wochen, ganz sanft" },
      { title: "Rückruf", line: "Zurückkommen, jedes Mal wenn du rufst" },
      { title: "Lockere Leine", line: "Spaziergänge ohne Ziehen" },
      { title: "Ruhiges Verhalten", line: "Entspannen auf einer Decke" },
      { title: "Alltagsmanieren", line: "Türen, Begrüßungen, Warten" },
      { title: "Fokus", line: "Sein Name, seine Aufmerksamkeit" },
      { title: "Bleib", line: "Jedes Mal eine Sekunde länger" },
      { title: "Sozialisierung", line: "Neue Orte im eigenen Tempo" },
    ],
    careItems: [
      { title: "Gesundheitstagebuch", line: "Veränderungen über Wochen bemerken, statt zu raten." },
      { title: "Gewicht", line: "Der handfeste Check plus ein einfaches Protokoll." },
      { title: "Zähne", line: "Zähne und Zahnfleisch, jeweils dreißig Sekunden." },
      { title: "Fell & Haut", line: "Felltyp, Bürstrhythmus, Knoten und Verfilzungen." },
      { title: "Pfoten & Krallen", line: "Ballen, Krallen, Salz und heißer Asphalt." },
      { title: "Pflegekalender", line: "Sanfte Erinnerungen, wenn etwas ansteht." },
      { title: "Tierarztnotizen", line: "Was du gefragt hast, was dir gesagt wurde." },
      { title: "Gesundheitsübersicht", line: "Eine Seite zum Mitnehmen." },
    ],
    foodItems: [
      { title: "Futter- & Fütterungsplan", line: "Ungefähr wie viel, für deinen Hund." },
      { title: "Fütterungsroutine", line: "Mahlzeiten pro Tag, zu Zeiten, die dir passen." },
      { title: "Futterprotokoll", line: "Was er isst, an einem Ort gesammelt." },
      { title: "Verbindung zum Gewicht", line: "Portionen, die dem Gewichtsprotokoll folgen." },
      { title: "Leckerlis", line: "Auf einen vernünftigen Teil des Tages begrenzt." },
      { title: "Wasser", line: "Sauber und immer aufgefüllt." },
      {
        title: "Futtersicherheit",
        line: "Sicher, mit Vorsicht oder vermeiden — 55+ Lebensmittel.",
      },
    ],
    week: [
      { day: "Montag", items: ["Spaziergang", "Training", "Zähne"] },
      { day: "Dienstag", items: ["Spaziergang", "Mentale Beschäftigung"] },
      { day: "Mittwoch", items: ["Training", "Fellpflege"] },
      { day: "Donnerstag", items: ["Langer Spaziergang", "Pfotencheck"] },
      { day: "Freitag", items: ["Spaziergang", "Training", "Zähne"] },
      { day: "Samstag", items: ["Abenteuer", "Wiegen"] },
      { day: "Sonntag", items: ["Schnüffelspaziergang", "Ruhige Zeit"] },
    ],
    dogLife: [
      "Parks",
      "Gassi-Gebiete",
      "Hundefreundliche Orte",
      "Trainer",
      "Hundefriseure",
      "Tierärzte",
      "Hundefreundliche Unterkünfte",
    ],
    travelItems: [
      "Autofahrten",
      "Lange Spaziergänge",
      "Wandern",
      "Urlaub",
      "Auslandsreisen",
      "Reisecheckliste",
      "Reisedokumente",
      "Anforderungen von Land zu Land",
    ],
    packContents: [
      "Hundeprofil",
      "Halterinformationen",
      "Wichtige Kontakte",
      "Reisecheckliste",
      "Gesundheitsinformationen",
      "Dokumente",
      "Notfallinformationen",
    ],
    docs: [
      "Komplettes Hundepaket",
      "Gesundheitsübersicht",
      "Trainingsplan",
      "Futter- & Fütterungsplan",
      "Wochenplan",
      "Wichtige Kontakte",
      "Notizen vom Tierarztbesuch",
      "Reisepaket",
      "Pflege-Checkliste",
    ],
    journey: [
      "Überlegst du dir einen Hund",
      "Meinen Hund finden",
      "Bereit machen",
      "Willkommen zu Hause",
      "Mein Hund",
      "Trainieren",
      "Füttern",
      "Pflege",
      "Reisen",
      "Das Leben genießen",
    ],
    freeList: [
      "Passt ein Hund zu mir?",
      "Meinen Hund finden",
      "Grundlegende Rasseninformationen",
      "Ratgeber zur Hundeanschaffung",
      "Grundlegendes Hundeleben",
      "Ausgewählte kostenlose Ratgeber",
    ],
    plusList: [
      "Alles aus Free",
      "Mein Hund",
      "Komplettes Training",
      "Gesundheit & Pflege",
      "Futter & Fütterung",
      "Meine Woche",
      "Pflegekalender",
      "Erweitertes Hundeleben",
      "Reisetools",
      "Prüfung für Auslandsreisen",
      "Komplettes Hundepaket",
      "Ausdruckbare Dokumente",
      "Mehrere Hunde",
      "Ein ausführlicherer Match-Bericht",
      "Fortschritt über die Zeit",
    ],
    firstWeek: [
      { day: "Tag 1", title: "Mein Hund anlegen", line: "Gib deinem Hund einen eigenen Platz." },
      {
        day: "Tag 2",
        title: "Pflege einrichten",
        line: "Füge Fütterung, Zahnpflege, Fellpflege und Alltagsroutinen hinzu.",
      },
      {
        day: "Tag 3",
        title: "Mit dem Training beginnen",
        line: "Wähle ein Programm und mach den ersten kleinen Schritt.",
      },
      {
        day: "Tag 4",
        title: "Meine Woche aufbauen",
        line: "Bringe Spaziergänge, Training und Pflege zusammen.",
      },
      {
        day: "Tag 5",
        title: "Hundeleben entdecken",
        line: "Finde Orte und Services, die zu deinem Leben mit deinem Hund passen.",
      },
      {
        day: "Tag 6",
        title: "Deine nächste Reise planen",
        line: "Mach deine Reisecheckliste fertig.",
      },
      {
        day: "Tag 7",
        title: "Dein Hundepaket erstellen",
        line: "Halte das Wichtigste zusammen, auf dem Bildschirm oder auf Papier.",
      },
    ],
    faqs: [
      {
        q: "Was ist DoggMatch+?",
        a: "Das ist die Mitgliedschaftsseite von DoggMatch. Free hilft dir, den richtigen Hund zu finden. DoggMatch+ hilft dir, dich Tag für Tag um diesen Hund zu kümmern — Training, Futter, Gesundheit, Routinen, Reisen und Dokumente, alles an einem Ort.",
      },
      {
        q: "Was bekomme ich mit DoggMatch+?",
        a: "Mein Hund, die vollständigen Trainingsprogramme, Gesundheit und Pflege, Futter und Fütterung, Meine Woche, den Pflegekalender, Reisetools, das komplette Hundepaket und ausdruckbare Dokumente — plus einen ausführlicheren Match-Bericht.",
      },
      {
        q: "Was bleibt kostenlos?",
        a: "Alles, was du brauchst, um den richtigen Hund zu finden. Passt ein Hund zu mir?, Meinen Hund finden, Rasseninformationen, die Ratgeber zur Hundeanschaffung, das grundlegende Hundeleben und unsere kostenlosen Ratgeber bleiben kostenlos.",
      },
      {
        q: "Kann ich DoggMatch+ für mehr als einen Hund nutzen?",
        a: "Ja. Du kannst für jeden Hund ein eigenes Profil führen und zwischen ihnen wechseln, sodass nichts durcheinandergerät.",
      },
      {
        q: "Kann ich die Informationen zu meinem Hund ausdrucken?",
        a: "Ja. Das Hundepaket und die einzelnen Dokumente — Gesundheitsübersicht, Fütterungsplan, Wochenplan, Kontakte, Reisepaket — sind alle so gestaltet, dass sie sauber auf A4 gedruckt oder als PDF gespeichert werden können.",
      },
      {
        q: "Kann ich DoggMatch auf Reisen nutzen?",
        a: "Ja. Es gibt Hinweise zu Autofahrten, Wanderungen und Urlaub, eine Prüfung der Anforderungen von Land zu Land für Auslandsreisen und ein Reisepaket, das du auf Papier mitnehmen kannst.",
      },
      {
        q: "Ist DoggMatch tierärztliche Beratung?",
        a: "Nein. Wir bieten allgemeine Hinweise zum Leben mit Hund. Bei allem Medizinischen oder wenn du dir Sorgen um deinen Hund machst, wende dich bitte an deinen Tierarzt.",
      },
      {
        q: "Kann ich meine Mitgliedschaft kündigen?",
        a: "Ja, jederzeit. Öffne deine Kontoseite, dort kannst du deine Mitgliedschaft selbst ändern oder kündigen — sie bleibt bis zum Ende des bereits bezahlten Zeitraums aktiv.",
      },
      {
        q: "Kann ich zwischen monatlicher und jährlicher Mitgliedschaft wählen?",
        a: "Ja — 7,99 € im Monat oder 59,99 € im Jahr, was etwa 5 € im Monat entspricht. Du kannst später jederzeit über dein Konto wechseln.",
      },
      {
        q: "Was passiert, wenn ich beitrete?",
        a: "Du legst Mein Hund an, fügst ein paar Details hinzu, und alles andere auf der Seite beginnt, sich um diesen Hund herum einzurichten. Eine sanfte erste Woche führt dich durch die ersten Schritte.",
      },
    ],
    starsLabel: (filled: number) => `${filled} von 5`,
    hero: {
      eyebrow: "Mitgliedschaft",
      lead: "Mehr als nur deinen Hund zu finden. Ein besseres Leben zusammen.",
      body: "Deine DoggMatch-Reise endet nicht, wenn du den richtigen Hund gefunden hast. Premium gibt dir die Werkzeuge, Pläne und den persönlichen Raum, um deinem Hund ein glückliches, gesundes und gut organisiertes Leben zu ermöglichen.",
      heroAlt: "Eine Frau lehnt bei Sonnenuntergang ihre Stirn an ihren Labrador",
      exploreCta: "DoggMatch+ entdecken",
      seeAllCta: "Alles Enthaltene ansehen",
    },
    coreMessage: "bringt alles zusammen.",
    myDog: {
      eyebrow: "Der Mittelpunkt von allem",
      title: "Dein Hund. Dein Raum.",
      body: "Mein Hund ist das persönliche Zuhause deines Hundes innerhalb von DoggMatch. Alles, was du im Blick behältst, lebt hier — und alles andere auf der Seite fließt hier ein.",
      lunaAlt: "Luna, eine Labrador Retriever Hündin",
      lunaName: "Luna",
      lunaBreedAge: "Labrador Retriever · 3 Jahre",
      today: "Heute",
      sideTitle: "Alles über deinen Hund, an einem Ort",
      sideBody:
        "Gesundheit, Futter, Training, Zähne, Fell, Pfoten, Gewicht, Aktivität, Verhalten, deine Woche, Reisen und Dokumente. Du musst nicht alles ausfüllen. Füge hinzu, was nützlich ist, der Rest wartet still, bis du es brauchst.",
      cta: "Mein Hund ansehen",
    },
    productMessage: {
      titleLine1: "Finde deinen Hund.",
      titleLine2: "Dann lebt das Leben gemeinsam.",
      body: "Den richtigen Hund zu finden ist nur der Anfang. DoggMatch+ gibt dir einen Ort, um dich um die alltäglichen Dinge zu kümmern, die zählen — von Training und Fütterung bis zu Gesundheit, Reisen, Routinen und den kleinen Momenten dazwischen.",
    },
    training: {
      trainAlt: "Ein Mann übt Rückruf mit seinem Hund auf einer Wiese",
      eyebrow: "Gemeinsam trainieren",
      title: "Kleine Schritte. Echter Fortschritt.",
      body: "Strukturierte Programme aus kurzen, freundlichen Einheiten, die tatsächlich in einen normalen Tag passen. Kein Schreien, keine Hilfsmittel, keine Versprechen, wie schnell es geht.",
      lunaName: "Luna",
      recall: "Rückruf",
      progressNote: "4 Einheiten diese Woche abgeschlossen.",
      railLabel: "Trainingsprogramme",
      libraryCta: "Lektionsbibliothek öffnen",
    },
    healthCare: {
      eyebrow: "Gesundheit & Pflege",
      title: "Kümmere dich um die kleinen Dinge",
      body: "Halte das Wichtige zusammen, bemerke Veränderungen über die Zeit und bleib organisiert. DoggMatch ist kein tierärztlicher Dienst — wenn dir etwas Sorgen macht, ist dein Tierarzt die richtige Anlaufstelle.",
      careAlt: "Eine Halterin untersucht ihren Hund ruhig zu Hause",
    },
    food: {
      foodAlt: "Eine abgemessene Schüssel Futter wird für einen wartenden Hund vorbereitet",
      eyebrow: "Gut füttern",
      title: "Fütterung leichter verständlich machen",
      body: "Portionen, berechnet nach Gewicht, Alter und Aktivitätslevel deines Hundes — und im Takt mit dem Gewichtsprotokoll gehalten. Vernünftig, evidenzbasiert, keine Modetrends.",
      portionsCta: "Futter & Portionen",
      safetyCta: "Darf mein Hund das essen?",
    },
    myWeek: {
      eyebrow: "Meine Woche",
      title: "Deine Woche mit deinem Hund",
      body: "Bringe Training, Pflege, Aktivität und Alltagsroutinen zusammen, damit nichts Wichtiges still untergeht.",
      cta: "Meine Woche öffnen",
    },
    dogLifeSection: {
      eyebrow: "Hundeleben",
      title: "Das Leben jenseits des Zuhauses",
      body: "Die alltägliche Karte des Hundelebens in deiner Nähe — wo man laufen kann, wo man willkommen ist und wen man anrufen kann.",
      cta: "Hundeleben entdecken",
      dogLifeAlt: "Ein Hund und sein Halter auf einem Küstenweg am frühen Morgen",
    },
    travel: {
      travelAlt: "Ein Hund, sicher angeschnallt auf dem Rücksitz eines Autos vor einer Fahrt",
      eyebrow: "Reisen",
      title: "Nimm deinen Hund mit",
      body: "Vom Schulweg bis zum Grenzübertritt. Die Regeln basieren auf aktuellen offiziellen Anforderungen und ändern sich — prüfe vor der Reise immer bei den Behörden.",
      checkerEyebrow: "Prüfung für Auslandsreisen",
      route: "Norwegen → Polen",
      checkerItems: [
        "Mikrochip",
        "Tollwutimpfung",
        "Heimtierausweis",
        "Anforderungen des Ziellandes",
        "Anforderungen bei der Rückreise",
      ],
      checkCta: "Route prüfen",
    },
    print: {
      eyebrow: "Drucken & speichern",
      title: "Manches ist besser auf Papier.",
      body: "Trage die wichtigen Informationen bei dir — zu Hause, im Auto, beim Tierarzt oder wenn jemand anderes auf deinen Hund aufpasst.",
      cardBrand: "DoggMatch",
      cardTitle: "Hunde-Reisepaket",
      cardDog: "Luna · Labrador Retriever",
      createCta: "Reisepaket erstellen",
      printCta: "Sieh, was du drucken kannst",
    },
    multipleDogs: {
      eyebrow: "Mehrere Hunde",
      title: "Ein Zuhause. Jeder Hund.",
      body: "Premium unterstützt mehr als einen Hund, jeder mit eigenem Profil, eigenen Routinen, Training, Gesundheit und Dokumenten. Zwischen ihnen wechseln geht mit einem Fingertipp.",
      dogs: [
        { name: "Luna", breed: "Labrador Retriever" },
        { name: "Max", breed: "Cocker Spaniel" },
      ],
    },
    personalisation: {
      title: "Alles fühlt sich relevanter für deinen Hund an",
      body: "DoggMatch braucht keine schlauen Maschinen, um das persönlich zu machen. Rasse, Alter, Größe und Aktivität deines Hundes, dein Lebensstil, deine Routinen und alles, was du uns mitteilst, prägen still, was du siehst — welche Lektionen erscheinen, wie viel Futter ungefähr richtig ist, was deine Woche vorschlägt.",
    },
    journeySection: {
      eyebrow: "Die ganze Reise",
      title: "Vom ersten Gedanken bis zu einem langen gemeinsamen Leben",
      closing: "— alles an einem Ort verbunden.",
    },
    compare: {
      eyebrow: "Free und Premium",
      title: "Was kostenlos ist und was mit Premium kommt",
      body: "Alles, was du brauchst, um den richtigen Hund zu finden, bleibt kostenlos. Premium ist für das Leben danach.",
      freeLabel: "Free",
      freeHeadline: "Um den richtigen Hund zu finden.",
      freeQuote: "\u201CFinde den Hund, der zu mir passt.\u201D",
      plusLabel: "DoggMatch+",
      plusHeadline: "Für das Leben mit deinem Hund.",
      plusQuote: "\u201CHilf mir jetzt, diesem Hund ein richtig gutes Leben zu geben.\u201D",
    },
    value: {
      eyebrow: "Warum DoggMatch+",
      title: "Drei einfache Gründe",
      items: [
        { title: "Ein Ort", body: "Alles über das Leben deines Hundes, an einem Ort." },
        { title: "Jeden Tag nützlich", body: "Nicht nur etwas, das du einmal besuchst." },
        {
          title: "Auf deinen Hund zugeschnitten",
          body: "Die Informationen deines Hundes prägen das Erlebnis.",
        },
      ],
    },
    firstWeekSection: {
      eyebrow: "Deine erste Woche mit DoggMatch+",
      title: "Ein einfacher Start ins Leben mit DoggMatch+.",
      body: "Nichts, wobei du dich beeilen musst. Jeden Tag ein bisschen, und am Ende der Woche hat dein Hund hier ein Zuhause.",
    },
    membership: {
      eyebrow: "Mitgliedschaft",
      body: "Eine Mitgliedschaft, alles inklusive. Wähle den Rhythmus, der zu dir passt.",
      monthlyLabel: "Monatlich",
      monthlyPrice: "€7,99",
      monthlyUnit: "/ Monat",
      monthlyBody: "Alles in DoggMatch+, Monat für Monat.",
      monthlyJoin: "Monatlich beitreten",
      yearlyLabel: "Jährlich",
      bestValue: "Bester Wert",
      yearlyPrice: "€59,99",
      yearlyUnit: "/ Jahr",
      yearlyHighlight: "Nur €5 im Monat bei jährlicher Abrechnung",
      yearlyBody: "Spare €35,89 im Jahr im Vergleich zur monatlichen Zahlung.",
      yearlyJoin: "Jährlich beitreten — bester Wert",
      openLine: "Die Mitgliedschaft ist offen.",
      openBody:
        "Die Zahlung wird sicher über Stripe abgewickelt. Du kannst deine Mitgliedschaft jederzeit selbst über dein Konto ändern oder kündigen.",
    },
    faqSection: {
      eyebrow: "Fragen",
      title: "Was Menschen meistens fragen",
      body: "Kurze, ehrliche Antworten. Wenn du noch etwas anderes wissen möchtest, schreib uns einfach.",
      stillWondering: "Fragst du dich noch etwas?",
      getInTouch: "Kontaktiere uns",
    },
    finalCta: {
      title: "Dein Hund ist mehr als ein Match.",
      body: "DoggMatch hilft dir, den Hund zu finden, der zu dir passt. DoggMatch+ hilft dir, diesem Hund ein richtig gutes Leben zu geben.",
      join: "DoggMatch+ beitreten",
      find: "Meinen Hund finden",
    },
  },
  fr: {
    flow: [
      "Trouvez votre chien",
      "Comprenez votre chien",
      "Préparez-vous",
      "Vivez avec votre chien",
      "Prenez soin de votre chien",
      "Profitez de la vie ensemble",
    ],
    myDogSections: [
      { to: "/my-dog/care/everyday-check", label: "Santé", line: "Le petit contrôle quotidien" },
      { to: "/my-dog/nutrition", label: "Nourriture", line: "Portions et repas" },
      { to: "/train", label: "Éducation", line: "La séance courte du jour" },
      { to: "/my-dog/care/dental", label: "Dents", line: "Une minute par jour" },
      { to: "/my-dog/care/coat", label: "Pelage & soins", line: "Brossage et bain" },
      { to: "/my-dog/care/paws", label: "Pattes & griffes", line: "Coussinets et hiver" },
      { to: "/my-dog/weight", label: "Poids", line: "Un suivi simple et bienveillant" },
      { to: "/my-dog/care/wellbeing", label: "Activité", line: "Mouvement et repos" },
      { to: "/train/library", label: "Comportement", line: "Une leçon à la fois" },
      { to: "/my-dog/week", label: "Ma semaine", line: "Votre rythme hebdomadaire" },
      { to: "/travel", label: "Voyages", line: "Voiture, randonnées et frontières" },
      { to: "/my-dog/print", label: "Documents", line: "Du papier pour le frigo" },
    ],
    programmes: [
      { title: "Bases pour chiot", line: "Les premières semaines, en douceur" },
      { title: "Rappel", line: "Revenir, à chaque fois qu'on l'appelle" },
      { title: "Marche en laisse détendue", line: "Des balades sans bras de fer" },
      { title: "Calme", line: "S'installer sur un tapis" },
      { title: "Bonnes manières au quotidien", line: "Portes, salutations, attente" },
      { title: "Concentration", line: "Son nom, son attention" },
      { title: "Reste", line: "Une seconde de plus à chaque fois" },
      { title: "Socialisation", line: "De nouveaux endroits, à son rythme" },
    ],
    careItems: [
      {
        title: "Journal de santé",
        line: "Repérer les changements sur des semaines, pas au hasard.",
      },
      { title: "Poids", line: "Le contrôle manuel, plus un suivi simple." },
      { title: "Dents", line: "Dents et gencives, trente secondes à la fois." },
      { title: "Pelage & peau", line: "Type de pelage, rythme de brossage, nœuds et grosseurs." },
      { title: "Pattes & griffes", line: "Coussinets, griffes, sel et trottoir brûlant." },
      {
        title: "Calendrier de soins",
        line: "Des petits rappels discrets quand quelque chose approche.",
      },
      { title: "Notes du vétérinaire", line: "Ce que vous avez demandé, ce qu'on vous a répondu." },
      { title: "Résumé santé", line: "Une page à emporter avec vous." },
    ],
    foodItems: [
      { title: "Plan alimentaire", line: "Combien, à peu près, pour votre chien." },
      { title: "Routine des repas", line: "Repas par jour, à des horaires qui vous conviennent." },
      { title: "Suivi alimentaire", line: "Ce qu'il mange, regroupé au même endroit." },
      { title: "Lien avec le poids", line: "Des portions qui suivent le suivi de poids." },
      { title: "Friandises", line: "Gardées à une part raisonnable de la journée." },
      { title: "Eau", line: "Propre et toujours disponible." },
      {
        title: "Sécurité alimentaire",
        line: "Sûr, à surveiller ou à éviter — plus de 55 aliments.",
      },
    ],
    week: [
      { day: "Lundi", items: ["Promenade", "Éducation", "Dents"] },
      { day: "Mardi", items: ["Promenade", "Stimulation mentale"] },
      { day: "Mercredi", items: ["Éducation", "Toilettage"] },
      { day: "Jeudi", items: ["Longue promenade", "Contrôle des pattes"] },
      { day: "Vendredi", items: ["Promenade", "Éducation", "Dents"] },
      { day: "Samedi", items: ["Aventure", "Pesée"] },
      { day: "Dimanche", items: ["Balade renifleuse", "Moment calme"] },
    ],
    dogLife: [
      "Parcs",
      "Zones de promenade",
      "Lieux acceptant les chiens",
      "Éducateurs",
      "Toiletteurs",
      "Vétérinaires",
      "Hébergements pour chiens",
    ],
    travelItems: [
      "Voyage en voiture",
      "Longues promenades",
      "Randonnée",
      "Vacances",
      "Voyages internationaux",
      "Check-list de voyage",
      "Documents de voyage",
      "Exigences d'un pays à l'autre",
    ],
    packContents: [
      "Profil du chien",
      "Informations sur le propriétaire",
      "Contacts importants",
      "Check-list de voyage",
      "Informations santé",
      "Documents",
      "Informations d'urgence",
    ],
    docs: [
      "Pack complet du chien",
      "Résumé santé",
      "Plan d'éducation",
      "Plan alimentaire",
      "Plan hebdomadaire",
      "Contacts importants",
      "Notes de visite chez le vétérinaire",
      "Pack de voyage",
      "Check-list toilettage",
    ],
    journey: [
      "Envisager d'avoir un chien",
      "Trouver mon chien",
      "Se préparer",
      "L'accueillir",
      "Mon chien",
      "Éduquer",
      "Nourrir",
      "Soigner",
      "Voyager",
      "Profiter de la vie",
    ],
    freeList: [
      "Un chien est-il fait pour moi ?",
      "Trouver mon chien",
      "Informations de base sur les races",
      "Guides pour adopter un chien",
      "Dog Life de base",
      "Une sélection de guides gratuits",
    ],
    plusList: [
      "Tout ce qui est dans Gratuit",
      "Mon chien",
      "Éducation complète",
      "Santé & soins",
      "Alimentation",
      "Ma semaine",
      "Calendrier de soins",
      "Dog Life avancé",
      "Outils de voyage",
      "Vérificateur de voyage international",
      "Pack complet du chien",
      "Documents imprimables",
      "Plusieurs chiens",
      "Un rapport de compatibilité plus complet",
      "Une évolution suivie dans le temps",
    ],
    firstWeek: [
      {
        day: "Jour 1",
        title: "Créer Mon chien",
        line: "Offrez à votre chien un espace bien à lui.",
      },
      {
        day: "Jour 2",
        title: "Mettre en place les soins",
        line: "Ajoutez alimentation, dents, toilettage et routines quotidiennes.",
      },
      {
        day: "Jour 3",
        title: "Commencer l'éducation",
        line: "Choisissez un programme et faites le premier petit pas.",
      },
      {
        day: "Jour 4",
        title: "Construire Ma semaine",
        line: "Réunissez promenades, éducation et soins.",
      },
      {
        day: "Jour 5",
        title: "Explorer Dog Life",
        line: "Trouvez des lieux et services adaptés à votre vie avec votre chien.",
      },
      {
        day: "Jour 6",
        title: "Préparer votre prochain voyage",
        line: "Préparez votre check-list de voyage.",
      },
      {
        day: "Jour 7",
        title: "Créer votre Pack du chien",
        line: "Gardez l'essentiel réuni, à l'écran ou sur papier.",
      },
    ],
    faqs: [
      {
        q: "Qu'est-ce que DoggMatch+ ?",
        a: "C'est la partie abonnement de DoggMatch. Gratuit vous aide à trouver le bon chien. DoggMatch+ vous aide à vous en occuper au quotidien — éducation, nourriture, santé, routines, voyages et documents, tout au même endroit.",
      },
      {
        q: "Qu'est-ce que j'obtiens avec DoggMatch+ ?",
        a: "Mon chien, les programmes d'éducation complets, la santé et les soins, l'alimentation, Ma semaine, le calendrier de soins, les outils de voyage, le Pack du chien complet et des documents imprimables — ainsi qu'un rapport de compatibilité plus complet.",
      },
      {
        q: "Qu'est-ce qui reste gratuit ?",
        a: "Tout ce dont vous avez besoin pour trouver le bon chien. « Un chien est-il fait pour moi ? », Trouver mon chien, les informations sur les races, les guides pour adopter un chien, Dog Life de base et nos guides gratuits restent gratuits.",
      },
      {
        q: "Puis-je utiliser DoggMatch+ pour plusieurs chiens ?",
        a: "Oui. Vous pouvez garder un profil distinct pour chaque chien et passer de l'un à l'autre, sans rien mélanger.",
      },
      {
        q: "Puis-je imprimer les informations de mon chien ?",
        a: "Oui. Le Pack du chien et les documents individuels — résumé santé, plan alimentaire, plan hebdomadaire, contacts, pack de voyage — sont tous conçus pour s'imprimer proprement sur A4 ou s'enregistrer en PDF.",
      },
      {
        q: "Puis-je utiliser DoggMatch en voyage ?",
        a: "Oui. Il y a des conseils pour la voiture, la randonnée et les vacances, un vérificateur d'un pays à l'autre pour les voyages à l'étranger, et un pack de voyage à emporter sur papier.",
      },
      {
        q: "DoggMatch est-il un avis vétérinaire ?",
        a: "Non. Nous proposons des conseils généraux sur la vie avec un chien. Pour tout ce qui est médical, ou si votre chien vous inquiète, parlez-en à votre vétérinaire.",
      },
      {
        q: "Puis-je résilier mon abonnement ?",
        a: "Oui, à tout moment. Ouvrez la page de votre compte, vous pouvez modifier ou résilier votre abonnement vous-même — il reste actif jusqu'à la fin de la période déjà payée.",
      },
      {
        q: "Puis-je choisir un abonnement mensuel ou annuel ?",
        a: "Oui — 7,99 € par mois, ou 59,99 € par an, soit environ 5 € par mois. Vous pouvez changer de formule plus tard depuis votre compte.",
      },
      {
        q: "Que se passe-t-il quand je m'inscris ?",
        a: "Vous créez Mon chien, ajoutez quelques informations, et tout le reste du site s'organise autour de ce chien. Une première semaine en douceur vous guide pas à pas.",
      },
    ],
    starsLabel: (filled: number) => `${filled} sur 5`,
    hero: {
      eyebrow: "Abonnement",
      lead: "Plus que trouver votre chien. Une vie meilleure ensemble.",
      body: "Votre parcours DoggMatch ne s'arrête pas une fois le bon chien trouvé. Premium vous donne les outils, les plans et l'espace personnel pour offrir à votre chien une vie heureuse, saine et bien organisée.",
      heroAlt: "Une femme posant son front contre son labrador au coucher du soleil",
      exploreCta: "Découvrir DoggMatch+",
      seeAllCta: "Voir tout ce qui est inclus",
    },
    coreMessage: "réunit tout cela.",
    myDog: {
      eyebrow: "Le cœur de tout",
      title: "Votre chien. Votre espace.",
      body: "Mon chien est l'espace personnel de votre chien au sein de DoggMatch. Tout ce que vous suivez vit ici — et tout le reste du site s'y rattache.",
      lunaAlt: "Luna, une labrador retriever",
      lunaName: "Luna",
      lunaBreedAge: "Labrador Retriever · 3 ans",
      today: "Aujourd'hui",
      sideTitle: "Tout sur votre chien, au même endroit",
      sideBody:
        "Santé, nourriture, éducation, dents, pelage, pattes, poids, activité, comportement, votre semaine, voyages et documents. Vous n'avez pas besoin de tout remplir. Ajoutez ce qui vous est utile, le reste attend tranquillement.",
      cta: "Voir Mon chien",
    },
    productMessage: {
      titleLine1: "Trouvez votre chien.",
      titleLine2: "Puis vivez la vie ensemble.",
      body: "Trouver le bon chien n'est qu'un début. DoggMatch+ vous offre un seul endroit pour vous occuper de l'essentiel au quotidien — de l'éducation à l'alimentation, en passant par la santé, les voyages, les routines et les petits moments entre les deux.",
    },
    training: {
      trainAlt: "Un homme travaillant le rappel avec son chien dans un champ",
      eyebrow: "Éduquer ensemble",
      title: "Petits pas. Vrais progrès.",
      body: "Des programmes structurés faits de séances courtes et bienveillantes que vous pouvez vraiment glisser dans une journée normale. Pas de cris, pas de gadgets, pas de promesses sur la vitesse des progrès.",
      lunaName: "Luna",
      recall: "Rappel",
      progressNote: "4 séances effectuées cette semaine.",
      railLabel: "Programmes d'éducation",
      libraryCta: "Ouvrir la bibliothèque de leçons",
    },
    healthCare: {
      eyebrow: "Santé & soins",
      title: "Prenez soin des petites choses",
      body: "Gardez l'essentiel réuni, repérez les changements dans le temps, et restez organisé. DoggMatch n'est pas un service vétérinaire — quand quelque chose vous inquiète, votre vétérinaire est le bon interlocuteur.",
      careAlt: "Une propriétaire examinant calmement son chien à la maison",
    },
    food: {
      foodAlt: "Une gamelle de nourriture mesurée préparée pour un chien qui attend",
      eyebrow: "Bien nourrir",
      title: "Rendre l'alimentation plus facile à comprendre",
      body: "Des portions calculées selon le poids, l'âge et l'activité de votre chien — puis ajustées au fil du suivi de poids. Sensé, fondé sur des données, sans effet de mode.",
      portionsCta: "Nourriture & portions",
      safetyCta: "Mon chien peut-il manger ça ?",
    },
    myWeek: {
      eyebrow: "Ma semaine",
      title: "Votre semaine avec votre chien",
      body: "Réunissez éducation, soins, activité et routines quotidiennes, pour que rien d'important ne passe entre les mailles.",
      cta: "Ouvrir Ma semaine",
    },
    dogLifeSection: {
      eyebrow: "Dog Life",
      title: "La vie au-delà de la maison",
      body: "La carte du quotidien de la vie avec un chien près de chez vous — où se promener, où vous êtes bienvenu et qui appeler.",
      cta: "Explorer Dog Life",
      dogLifeAlt: "Un chien et son propriétaire sur un sentier côtier tôt le matin",
    },
    travel: {
      travelAlt: "Un chien harnaché en sécurité à l'arrière d'une voiture avant un trajet",
      eyebrow: "Voyages",
      title: "Emmenez votre chien avec vous",
      body: "Du trajet à l'école au passage d'une frontière. Les règles s'appuient sur les exigences officielles actuelles et changent — vérifiez toujours auprès des autorités avant de voyager.",
      checkerEyebrow: "Vérificateur de voyage international",
      route: "Norvège → Pologne",
      checkerItems: [
        "Puce électronique",
        "Vaccination antirabique",
        "Passeport pour animaux",
        "Exigences de destination",
        "Exigences de retour",
      ],
      checkCta: "Vérifiez votre itinéraire",
    },
    print: {
      eyebrow: "Imprimer & enregistrer",
      title: "Certaines choses sont mieux sur papier.",
      body: "Gardez les informations importantes avec vous — à la maison, en voiture, chez le vétérinaire ou quand quelqu'un d'autre garde votre chien.",
      cardBrand: "DoggMatch",
      cardTitle: "Pack de voyage du chien",
      cardDog: "Luna · Labrador Retriever",
      createCta: "Créer un pack de voyage",
      printCta: "Voir ce que vous pouvez imprimer",
    },
    multipleDogs: {
      eyebrow: "Plusieurs chiens",
      title: "Un espace. Chaque chien.",
      body: "Premium prend en charge plusieurs chiens, chacun avec son propre profil, ses routines, son éducation, sa santé et ses documents. Passer de l'un à l'autre se fait en un geste.",
      dogs: [
        { name: "Luna", breed: "Labrador Retriever" },
        { name: "Max", breed: "Cocker Spaniel" },
      ],
    },
    personalisation: {
      title: "Tout paraît plus pertinent pour votre chien",
      body: "DoggMatch n'a pas besoin de machines savantes pour rendre cela personnel. La race, l'âge, la taille et l'activité de votre chien, votre mode de vie, vos routines et tout ce que vous choisissez de nous dire façonnent discrètement ce que vous voyez — quelles leçons apparaissent, quelle quantité de nourriture est à peu près juste, ce que votre semaine suggère.",
    },
    journeySection: {
      eyebrow: "Tout le parcours",
      title: "De la première idée à une longue vie ensemble",
      closing: "— tout connecté au même endroit.",
    },
    compare: {
      eyebrow: "Gratuit et Premium",
      title: "Ce qui est gratuit, et ce qui vient avec Premium",
      body: "Tout ce dont vous avez besoin pour trouver le bon chien reste gratuit. Premium, c'est pour la vie qui suit.",
      freeLabel: "Gratuit",
      freeHeadline: "Pour trouver le bon chien.",
      freeQuote: "\u201CTrouver le chien qui me correspond.\u201D",
      plusLabel: "DoggMatch+",
      plusHeadline: "Pour la vie avec votre chien.",
      plusQuote: "\u201CMaintenant, aidez-moi à offrir une vraiment bonne vie à ce chien.\u201D",
    },
    value: {
      eyebrow: "Pourquoi DoggMatch+",
      title: "Trois raisons simples",
      items: [
        { title: "Un seul endroit", body: "Tout ce qui concerne la vie de votre chien, réuni." },
        { title: "Utile chaque jour", body: "Pas seulement un endroit qu'on visite une fois." },
        {
          title: "Construit autour de votre chien",
          body: "Les informations de votre chien façonnent l'expérience.",
        },
      ],
    },
    firstWeekSection: {
      eyebrow: "Votre première semaine avec DoggMatch+",
      title: "Un début simple avec DoggMatch+.",
      body: "Rien à précipiter. Un peu chaque jour, et à la fin de la semaine, votre chien a un espace bien à lui ici.",
    },
    membership: {
      eyebrow: "Abonnement",
      body: "Un seul abonnement, tout inclus. Choisissez le rythme qui vous convient.",
      monthlyLabel: "Mensuel",
      monthlyPrice: "7,99 €",
      monthlyUnit: "/ mois",
      monthlyBody: "Tout DoggMatch+, mois après mois.",
      monthlyJoin: "S'abonner au mois",
      yearlyLabel: "Annuel",
      bestValue: "Meilleure offre",
      yearlyPrice: "59,99 €",
      yearlyUnit: "/ an",
      yearlyHighlight: "Seulement 5 € par mois en facturation annuelle",
      yearlyBody: "Économisez 35,89 € par an par rapport au paiement mensuel.",
      yearlyJoin: "S'abonner à l'année — meilleure offre",
      openLine: "L'abonnement est ouvert.",
      openBody:
        "Le paiement est géré en toute sécurité par Stripe. Vous pouvez modifier ou résilier votre abonnement vous-même, à tout moment, depuis votre compte.",
    },
    faqSection: {
      eyebrow: "Questions",
      title: "Ce que l'on nous demande souvent",
      body: "Des réponses courtes et honnêtes. S'il y a autre chose que vous aimeriez savoir, écrivez-nous simplement.",
      stillWondering: "Une question sans réponse ?",
      getInTouch: "Nous contacter",
    },
    finalCta: {
      title: "Votre chien, c'est bien plus qu'un match.",
      body: "DoggMatch vous aide à trouver le chien qui vous correspond. DoggMatch+ vous aide à lui offrir une vraiment bonne vie.",
      join: "Rejoindre DoggMatch+",
      find: "Trouver mon chien",
    },
  },
  nl: {
    flow: [
      "Vind je hond",
      "Begrijp je hond",
      "Bereid je voor",
      "Leef met je hond",
      "Zorg voor je hond",
      "Geniet samen van het leven",
    ],
    myDogSections: [
      {
        to: "/my-dog/care/everyday-check",
        label: "Gezondheid",
        line: "De snelle dagelijkse check",
      },
      { to: "/my-dog/nutrition", label: "Voeding", line: "Porties en maaltijden" },
      { to: "/train", label: "Training", line: "De korte sessie van vandaag" },
      { to: "/my-dog/care/dental", label: "Gebit", line: "Eén minuutje per dag" },
      { to: "/my-dog/care/coat", label: "Vacht & verzorging", line: "Borstelen en baden" },
      { to: "/my-dog/care/paws", label: "Poten & nagels", line: "Kussentjes en winter" },
      { to: "/my-dog/weight", label: "Gewicht", line: "Een vriendelijk, eenvoudig overzicht" },
      { to: "/my-dog/care/wellbeing", label: "Activiteit", line: "Beweging en rust" },
      { to: "/train/library", label: "Gedrag", line: "Eén les tegelijk" },
      { to: "/my-dog/week", label: "Mijn week", line: "Jouw wekelijkse ritme" },
      { to: "/travel", label: "Reizen", line: "Auto, wandelingen en grenzen" },
      { to: "/my-dog/print", label: "Documenten", line: "Papier voor aan de koelkast" },
    ],
    programmes: [
      { title: "Puppybasis", line: "De eerste weken, rustig aan" },
      { title: "Terugroepen", line: "Terugkomen, elke keer dat je het vraagt" },
      { title: "Losse lijn wandelen", line: "Wandelen zonder trekken" },
      { title: "Rustig gedrag", line: "Tot rust komen op een mat" },
      { title: "Dagelijkse omgangsvormen", line: "Deuren, begroetingen, wachten" },
      { title: "Focus", line: "Zijn naam, zijn aandacht" },
      { title: "Blijf", line: "Elke keer een seconde langer" },
      { title: "Socialisatie", line: "Nieuwe plekken op zijn eigen tempo" },
    ],
    careItems: [
      { title: "Gezondheidsdagboek", line: "Veranderingen opmerken over weken, niet gokken." },
      { title: "Gewicht", line: "De handmatige check plus een eenvoudig logboek." },
      { title: "Gebit", line: "Tanden en tandvlees, dertig seconden per keer." },
      { title: "Vacht & huid", line: "Vachttype, borstelritme, klitten en bultjes." },
      { title: "Poten & nagels", line: "Kussentjes, nagels, zout en heet asfalt." },
      { title: "Zorgkalender", line: "Rustige herinneringen wanneer iets aan de beurt is." },
      { title: "Dierenartsnotities", line: "Wat je vroeg, wat je te horen kreeg." },
      { title: "Gezondheidsoverzicht", line: "Eén pagina om mee te nemen." },
    ],
    foodItems: [
      { title: "Voedings- en voerplan", line: "Hoeveel, ongeveer, voor jouw hond." },
      { title: "Voerroutine", line: "Maaltijden per dag, op tijden die jou uitkomen." },
      { title: "Voeding bijhouden", line: "Wat hij eet, allemaal op één plek." },
      { title: "Koppeling met gewicht", line: "Porties die het gewichtslogboek volgen." },
      { title: "Snoepjes", line: "Binnen een verstandig deel van de dag gehouden." },
      { title: "Water", line: "Schoon en altijd aangevuld." },
      { title: "Voedselveiligheid", line: "Veilig, oppassen of vermijden — 55+ voedingsmiddelen." },
    ],
    week: [
      { day: "Maandag", items: ["Wandeling", "Training", "Gebit"] },
      { day: "Dinsdag", items: ["Wandeling", "Mentale prikkeling"] },
      { day: "Woensdag", items: ["Training", "Verzorging"] },
      { day: "Donderdag", items: ["Lange wandeling", "Poten check"] },
      { day: "Vrijdag", items: ["Wandeling", "Training", "Gebit"] },
      { day: "Zaterdag", items: ["Avontuur", "Wegen"] },
      { day: "Zondag", items: ["Snuffelwandeling", "Rustmoment"] },
    ],
    dogLife: [
      "Parken",
      "Wandelgebieden",
      "Hondvriendelijke plekken",
      "Trainers",
      "Trimsalons",
      "Dierenartsen",
      "Hondvriendelijke overnachtingen",
    ],
    travelItems: [
      "Autoreizen",
      "Lange wandelingen",
      "Wandelen",
      "Vakanties",
      "Internationale reizen",
      "Reischecklist",
      "Reisdocumenten",
      "Vereisten per land",
    ],
    packContents: [
      "Hondprofiel",
      "Eigenaarsgegevens",
      "Belangrijke contacten",
      "Reischecklist",
      "Gezondheidsinformatie",
      "Documenten",
      "Noodinformatie",
    ],
    docs: [
      "Compleet hondenpakket",
      "Gezondheidsoverzicht",
      "Trainingsplan",
      "Voedings- en voerplan",
      "Weekplan",
      "Belangrijke contacten",
      "Notities dierenartsbezoek",
      "Reispakket",
      "Verzorgingschecklist",
    ],
    journey: [
      "Overwegen een hond te nemen",
      "Mijn hond vinden",
      "Je voorbereiden",
      "Thuiskomst",
      "Mijn hond",
      "Trainen",
      "Voeden",
      "Verzorgen",
      "Reizen",
      "Genieten van het leven",
    ],
    freeList: [
      "Is een hond iets voor mij?",
      "Mijn hond vinden",
      "Basisinformatie over rassen",
      "Gidsen voor het nemen van een hond",
      "Dog Life basis",
      "Uitgekozen gratis gidsen",
    ],
    plusList: [
      "Alles uit Gratis",
      "Mijn hond",
      "Volledige training",
      "Gezondheid & verzorging",
      "Voeding",
      "Mijn week",
      "Zorgkalender",
      "Uitgebreide Dog Life",
      "Reistools",
      "Internationale reischecker",
      "Compleet hondenpakket",
      "Afdrukbare documenten",
      "Meerdere honden",
      "Een uitgebreider matchrapport",
      "Voortgang over tijd",
    ],
    firstWeek: [
      { day: "Dag 1", title: "Maak Mijn hond aan", line: "Geef je hond een eigen plek." },
      {
        day: "Dag 2",
        title: "Stel verzorging in",
        line: "Voeg voeding, gebit, verzorging en dagelijkse routines toe.",
      },
      {
        day: "Dag 3",
        title: "Begin met trainen",
        line: "Kies een programma en zet de eerste kleine stap.",
      },
      {
        day: "Dag 4",
        title: "Bouw Mijn week op",
        line: "Breng wandelingen, training en verzorging samen.",
      },
      {
        day: "Dag 5",
        title: "Ontdek Dog Life",
        line: "Vind plekken en diensten die passen bij het leven met je hond.",
      },
      { day: "Dag 6", title: "Plan je volgende reis", line: "Maak je reischecklist klaar." },
      {
        day: "Dag 7",
        title: "Maak je hondenpakket aan",
        line: "Houd de belangrijke dingen samen, op het scherm of op papier.",
      },
    ],
    faqs: [
      {
        q: "Wat is DoggMatch+?",
        a: "Dit is het lidmaatschapsgedeelte van DoggMatch. Gratis helpt je de juiste hond te vinden. DoggMatch+ helpt je om dag in dag uit voor die hond te zorgen — training, voeding, gezondheid, routines, reizen en documenten, allemaal op één plek.",
      },
      {
        q: "Wat krijg ik met DoggMatch+?",
        a: "Mijn hond, de volledige trainingsprogramma's, gezondheid en verzorging, voeding, Mijn week, de zorgkalender, reistools, het complete hondenpakket en afdrukbare documenten — plus een uitgebreider matchrapport.",
      },
      {
        q: "Wat blijft gratis?",
        a: "Alles wat je nodig hebt om de juiste hond te vinden. Is een hond iets voor mij?, Mijn hond vinden, rasinformatie, de gidsen voor het nemen van een hond, Dog Life basis en onze gratis gidsen blijven gratis.",
      },
      {
        q: "Kan ik DoggMatch+ voor meer dan één hond gebruiken?",
        a: "Ja. Je kunt voor elke hond een apart profiel bijhouden en ertussen wisselen, zonder dat iets door elkaar loopt.",
      },
      {
        q: "Kan ik de informatie van mijn hond afdrukken?",
        a: "Ja. Het hondenpakket en de losse documenten — gezondheidsoverzicht, voerplan, weekplan, contacten, reispakket — zijn allemaal gemaakt om netjes op A4 af te drukken of als pdf op te slaan.",
      },
      {
        q: "Kan ik DoggMatch gebruiken tijdens het reizen?",
        a: "Ja. Er is uitleg over autoreizen, wandelen en vakanties, een checker per land voor reizen naar het buitenland, en een reispakket dat je op papier kunt meenemen.",
      },
      {
        q: "Is DoggMatch veterinair advies?",
        a: "Nee. Wij bieden algemene informatie over het leven met een hond. Voor alles wat medisch is, of als je je zorgen maakt om je hond, praat je het beste met je dierenarts.",
      },
      {
        q: "Kan ik mijn lidmaatschap opzeggen?",
        a: "Ja, wanneer je maar wilt. Open je accountpagina en je kunt je lidmaatschap zelf wijzigen of opzeggen — het blijft actief tot het einde van de periode die je al hebt betaald.",
      },
      {
        q: "Kan ik kiezen voor een maandelijks of jaarlijks lidmaatschap?",
        a: "Ja — € 7,99 per maand, of € 59,99 per jaar, wat neerkomt op ongeveer € 5 per maand. Je kunt later vanuit je account wisselen.",
      },
      {
        q: "Wat gebeurt er als ik lid word?",
        a: "Je maakt Mijn hond aan, vult een paar gegevens in, en al het andere op de site gaat zich rond die hond schikken. Een rustige eerste week begeleidt je er stap voor stap doorheen.",
      },
    ],
    starsLabel: (filled: number) => `${filled} van 5`,
    hero: {
      eyebrow: "Lidmaatschap",
      lead: "Meer dan je hond vinden. Een beter leven samen.",
      body: "Je DoggMatch-reis stopt niet zodra je de juiste hond hebt gevonden. Premium geeft je de tools, plannen en persoonlijke ruimte om je hond een gelukkig, gezond en goed georganiseerd leven te geven.",
      heroAlt: "Een vrouw die haar voorhoofd tegen haar labrador legt bij zonsondergang",
      exploreCta: "Ontdek DoggMatch+",
      seeAllCta: "Bekijk alles wat inbegrepen is",
    },
    coreMessage: "brengt het allemaal samen.",
    myDog: {
      eyebrow: "Het middelpunt van alles",
      title: "Jouw hond. Jouw ruimte.",
      body: "Mijn hond is het persoonlijke thuis van je hond binnen DoggMatch. Alles wat je bijhoudt, leeft hier — en al het andere op de site sluit erop aan.",
      lunaAlt: "Luna, een labrador retriever",
      lunaName: "Luna",
      lunaBreedAge: "Labrador Retriever · 3 jaar",
      today: "Vandaag",
      sideTitle: "Alles over je hond, op één plek",
      sideBody:
        "Gezondheid, voeding, training, gebit, vacht, poten, gewicht, activiteit, gedrag, je week, reizen en documenten. Je hoeft niet alles in te vullen. Voeg toe wat nuttig is, de rest wacht rustig tot je het nodig hebt.",
      cta: "Bekijk Mijn hond",
    },
    productMessage: {
      titleLine1: "Vind je hond.",
      titleLine2: "En leef daarna samen verder.",
      body: "De juiste hond vinden is nog maar het begin. DoggMatch+ geeft je één plek om voor de dagelijkse dingen te zorgen die ertoe doen — van training en voeding tot gezondheid, reizen, routines en de kleine momenten ertussenin.",
    },
    training: {
      trainAlt: "Een man oefent terugroepen met zijn hond in een veld",
      eyebrow: "Samen trainen",
      title: "Kleine stappen. Echte vooruitgang.",
      body: "Gestructureerde programma's opgebouwd uit korte, vriendelijke sessies die echt in een gewone dag passen. Geen geschreeuw, geen gadgets, geen beloftes over hoe snel het gaat.",
      lunaName: "Luna",
      recall: "Terugroepen",
      progressNote: "4 sessies deze week afgerond.",
      railLabel: "Trainingsprogramma's",
      libraryCta: "Open de lessenbibliotheek",
    },
    healthCare: {
      eyebrow: "Gezondheid & verzorging",
      title: "Let op de kleine dingen",
      body: "Houd de belangrijke dingen samen, merk veranderingen op over tijd, en blijf georganiseerd. DoggMatch is geen veterinaire dienst — als iets je zorgen baart, is je dierenarts de juiste persoon om te bellen.",
      careAlt: "Een eigenaar die haar hond rustig thuis nakijkt",
    },
    food: {
      foodAlt: "Een afgemeten bak voeding die klaargemaakt wordt voor een wachtende hond",
      eyebrow: "Goed voeden",
      title: "Voeding makkelijker te begrijpen maken",
      body: "Porties berekend op basis van het gewicht, de leeftijd en activiteit van je hond — en vervolgens afgestemd op het gewichtslogboek. Verstandig, onderbouwd, zonder hypes.",
      portionsCta: "Voeding & porties",
      safetyCta: "Mag mijn hond dit eten?",
    },
    myWeek: {
      eyebrow: "Mijn week",
      title: "Jouw week met je hond",
      body: "Breng training, verzorging, activiteit en dagelijkse routines samen, zodat niets belangrijks er stilletjes tussendoor glipt.",
      cta: "Open Mijn week",
    },
    dogLifeSection: {
      eyebrow: "Dog Life",
      title: "Het leven buiten huis",
      body: "De dagelijkse kaart van het leven met een hond bij jou in de buurt — waar je kunt wandelen, waar je welkom bent en wie je kunt bellen.",
      cta: "Ontdek Dog Life",
      dogLifeAlt: "Een hond en eigenaar op een kustpad vroeg in de ochtend",
    },
    travel: {
      travelAlt: "Een hond die veilig vastzit op de achterbank van een auto voor een reis",
      eyebrow: "Reizen",
      title: "Neem je hond overal mee naartoe",
      body: "Van het schoolritje tot het oversteken van een grens. Regels zijn gebaseerd op actuele officiële vereisten en veranderen — controleer voor het reizen altijd bij de autoriteiten.",
      checkerEyebrow: "Internationale reischecker",
      route: "Noorwegen → Polen",
      checkerItems: [
        "Chip",
        "Rabiësvaccinatie",
        "Dierenpaspoort",
        "Vereisten bestemming",
        "Vereisten terugreis",
      ],
      checkCta: "Controleer je route",
    },
    print: {
      eyebrow: "Afdrukken & opslaan",
      title: "Sommige dingen zijn beter op papier.",
      body: "Houd de belangrijke informatie bij je — thuis, in de auto, bij de dierenarts of wanneer iemand anders op je hond past.",
      cardBrand: "DoggMatch",
      cardTitle: "Reispakket voor je hond",
      cardDog: "Luna · Labrador Retriever",
      createCta: "Maak reispakket aan",
      printCta: "Bekijk wat je kunt afdrukken",
    },
    multipleDogs: {
      eyebrow: "Meerdere honden",
      title: "Eén thuis. Elke hond.",
      body: "Premium ondersteunt meer dan één hond, elk met een eigen profiel, routines, training, gezondheid en documenten. Wisselen tussen honden gaat met één tik.",
      dogs: [
        { name: "Luna", breed: "Labrador Retriever" },
        { name: "Max", breed: "Cocker Spaniel" },
      ],
    },
    personalisation: {
      title: "Alles voelt relevanter voor jouw hond",
      body: "DoggMatch heeft geen slimme machines nodig om dit persoonlijk te maken. Het ras, de leeftijd, de grootte en activiteit van je hond, jouw levensstijl, jouw routines en alles wat je zelf kiest te vertellen, vormen stilletjes wat je te zien krijgt — welke lessen naar boven komen, hoeveel voeding ongeveer klopt, wat je week voorstelt.",
    },
    journeySection: {
      eyebrow: "De hele reis",
      title: "Van de eerste gedachte tot een lang leven samen",
      closing: "— alles verbonden op één plek.",
    },
    compare: {
      eyebrow: "Gratis en Premium",
      title: "Wat gratis is, en wat je krijgt met Premium",
      body: "Alles wat je nodig hebt om de juiste hond te vinden, blijft gratis. Premium is voor het leven daarna.",
      freeLabel: "Gratis",
      freeHeadline: "Om de juiste hond te vinden.",
      freeQuote: "\u201CVind de hond die bij mij past.\u201D",
      plusLabel: "DoggMatch+",
      plusHeadline: "Voor het leven met je hond.",
      plusQuote: "\u201CHelp me nu om die hond een echt goed leven te geven.\u201D",
    },
    value: {
      eyebrow: "Waarom DoggMatch+",
      title: "Drie eenvoudige redenen",
      items: [
        { title: "Eén plek", body: "Alles over het leven van je hond, samen op één plek." },
        { title: "Elke dag nuttig", body: "Niet iets wat je maar één keer bezoekt." },
        { title: "Opgebouwd rond je hond", body: "De informatie van je hond bepaalt de ervaring." },
      ],
    },
    firstWeekSection: {
      eyebrow: "Jouw eerste week met DoggMatch+",
      title: "Een eenvoudige start met DoggMatch+.",
      body: "Niets om te haasten. Elke dag een beetje, en aan het eind van de week heeft je hond hier een thuis.",
    },
    membership: {
      eyebrow: "Lidmaatschap",
      body: "Eén lidmaatschap, alles inbegrepen. Kies het ritme dat bij je past.",
      monthlyLabel: "Maandelijks",
      monthlyPrice: "€ 7,99",
      monthlyUnit: "/ maand",
      monthlyBody: "Alles van DoggMatch+, maand na maand.",
      monthlyJoin: "Word maandelijks lid",
      yearlyLabel: "Jaarlijks",
      bestValue: "Beste deal",
      yearlyPrice: "€ 59,99",
      yearlyUnit: "/ jaar",
      yearlyHighlight: "Slechts € 5 per maand bij jaarlijkse facturatie",
      yearlyBody: "Bespaar € 35,89 per jaar vergeleken met maandelijks betalen.",
      yearlyJoin: "Word jaarlijks lid — beste deal",
      openLine: "Het lidmaatschap staat open.",
      openBody:
        "Betaling wordt veilig verwerkt door Stripe. Je kunt je lidmaatschap op elk moment zelf wijzigen of opzeggen vanuit je account.",
    },
    faqSection: {
      eyebrow: "Vragen",
      title: "Wat mensen meestal vragen",
      body: "Korte, eerlijke antwoorden. Is er iets anders dat je wilt weten, schrijf ons dan gewoon.",
      stillWondering: "Nog iets onduidelijk?",
      getInTouch: "Neem contact op",
    },
    finalCta: {
      title: "Je hond is meer dan een match.",
      body: "DoggMatch helpt je de hond te vinden die bij jou past. DoggMatch+ helpt je die hond een echt goed leven te geven.",
      join: "Word lid van DoggMatch+",
      find: "Vind Mijn hond",
    },
  },
} as const;

/* ------------------------------------------------------------------- page */

function PlusPage() {
  const c = useCopy(copy);
  const s = useCopy(stagesCopy);
  return (
    <div className="overflow-x-clip pb-24">
      {/* 2 — Hero */}
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="animate-rise max-w-xl">
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-7">
              DoggMatch<span className="text-accent">+</span>
            </h1>
            <p className="mt-6 font-display text-2xl leading-snug tracking-tight md:text-3xl">
              {c.hero.lead}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{c.hero.body}</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#included"
                className="group inline-flex h-14 select-none items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)]"
              >
                {c.hero.exploreCta}
                <Arrow />
              </a>
              <a
                href="#compare"
                className="inline-flex h-14 select-none items-center justify-center rounded-full border border-border-strong px-8 text-base font-medium text-foreground transition-colors duration-300 hover:bg-surface"
              >
                {c.hero.seeAllCta}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={heroImage}
              alt={c.hero.heroAlt}
              width={1600}
              height={1104}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3 — Core message */}
      <Section className="container-page">
        <div className="rounded-[2rem] border border-border bg-surface p-8 md:p-14">
          <ol className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
            {c.flow.map((step, i) => (
              <li key={step} className="bg-background p-7">
                <span className="font-display text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-lg leading-tight tracking-tight">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center font-display text-2xl tracking-tight md:text-3xl">
            DoggMatch<span className="text-accent">+</span> {c.coreMessage}
          </p>
        </div>
      </Section>

      {/* 3b — The membership journey in 8 stages */}
      <Section className="container-page pt-0">
        <div className="max-w-2xl">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h2 className="display-lg mt-6">{s.title}</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{s.body}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-background p-7">
            <p className="eyebrow">{s.freeLabel}</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {s.freeLine}
            </p>
          </div>
          <div className="rounded-2xl border border-border-strong bg-surface p-7">
            <p className="eyebrow text-accent">{s.plusLabel}</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {s.plusLine}
            </p>
          </div>
        </div>

        <ol className="mt-8 grid gap-5 md:grid-cols-2">
          {s.stages.map((stage, i) => (
            <li
              key={stage.title}
              className="rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-soft)] md:p-9"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-tight md:text-2xl">{stage.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {stage.line}
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                {stage.examples.map((ex) => (
                  <li key={ex} className="flex gap-3 text-sm leading-relaxed">
                    <Tick />
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
          {s.closing}
        </p>
      </Section>

      {/* 4 — My Dog */}
      <Section id="included" className="container-page scroll-mt-24 pt-0">
        <SectionHead eyebrow={c.myDog.eyebrow} title={c.myDog.title} body={c.myDog.body} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          {/* device mockup */}
          <div className="rounded-[2rem] border border-border bg-surface p-5 shadow-[var(--shadow-lift)] md:p-8">
            <div className="rounded-[1.4rem] border border-border bg-background p-6 md:p-8">
              <div className="flex items-center gap-3">
                <img
                  src={lunaImage}
                  alt={c.myDog.lunaAlt}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-lg leading-none tracking-tight">
                    {c.myDog.lunaName}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.myDog.lunaBreedAge}</p>
                </div>
                <span className="ml-auto">
                  <Badge tone="accent">{c.myDog.today}</Badge>
                </span>
              </div>
              <ul className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-3">
                {c.myDogSections.map((s) => (
                  <li key={s.label} className="bg-background">
                    <Link
                      to={s.to as never}
                      className="block h-full p-4 transition-colors hover:bg-surface"
                    >
                      <span className="text-[0.9375rem] font-medium">{s.label}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        {s.line}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-lg">
            <h3 className="display-md">{c.myDog.sideTitle}</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">{c.myDog.sideBody}</p>
            <div className="mt-8">
              <ButtonLink to={withLangPrefix("/my-dog")} size="lg">
                {c.myDog.cta}
                <Arrow />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 4b — Central product message */}
      <Section className="container-page pt-0">
        <div className="rounded-[2rem] border border-border bg-surface p-8 md:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="display-lg">
              {c.productMessage.titleLine1}
              <br />
              {c.productMessage.titleLine2}
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              {c.productMessage.body}
            </p>
          </div>
        </div>
      </Section>

      {/* 5 — Training */}
      <Section className="bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={trainImage}
                alt={c.training.trainAlt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <SectionHead
                eyebrow={c.training.eyebrow}
                title={c.training.title}
                body={c.training.body}
              />
              <Card className="mt-8 max-w-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg leading-none tracking-tight">
                      {c.training.lunaName}
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{c.training.recall}</p>
                  </div>
                  <Stars filled={4} label={c.starsLabel(4)} />
                </div>
                <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong">
                  <div className="h-full w-[72%] rounded-full bg-accent" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.training.progressNote}</p>
              </Card>
            </div>
          </div>

          <Rail label={c.training.railLabel}>
            {c.programmes.map((p) => (
              <RailItem key={p.title}>
                <Card className="h-full">
                  <h3 className="font-display text-lg leading-tight tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
                </Card>
              </RailItem>
            ))}
          </Rail>
          <div className="mt-8">
            <ButtonLink to={withLangPrefix("/train/library")} tone="outline" size="lg">
              {c.training.libraryCta}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* 6 — Health & care */}
      <Section className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHead
              eyebrow={c.healthCare.eyebrow}
              title={c.healthCare.title}
              body={c.healthCare.body}
            />
            <ul className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {c.careItems.map((item) => (
                <li key={item.title} className="bg-background p-6">
                  <h3 className="text-[0.9375rem] font-medium">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.line}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={careImage}
              alt={c.healthCare.careAlt}
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 7 — Food */}
      <Section className="bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={foodImage}
              alt={c.food.foodAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHead eyebrow={c.food.eyebrow} title={c.food.title} body={c.food.body} />
            <ul className="mt-9 space-y-3">
              {c.foodItems.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <Tick />
                  <span className="text-[0.9375rem]">
                    <span className="font-medium">{f.title}</span>
                    <span className="text-muted-foreground"> — {f.line}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to={withLangPrefix("/my-dog/nutrition")} tone="outline">
                {c.food.portionsCta}
              </ButtonLink>
              <ButtonLink to={withLangPrefix("/my-dog/food")} tone="outline">
                {c.food.safetyCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 8 — My Week */}
      <Section className="container-page">
        <SectionHead eyebrow={c.myWeek.eyebrow} title={c.myWeek.title} body={c.myWeek.body} />
        <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:snap-none md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-7">
          {c.week.map((d) => (
            <div key={d.day} className="w-[62vw] shrink-0 snap-start md:w-auto">
              <Card className="h-full p-6">
                <p className="eyebrow">{d.day}</p>
                <ul className="mt-5 space-y-2.5">
                  {d.items.map((i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      {i}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink to={withLangPrefix("/my-dog/week")} size="lg">
            {c.myWeek.cta}
            <Arrow />
          </ButtonLink>
        </div>
      </Section>

      {/* 9 — Dog life */}
      <Section className="bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHead
              eyebrow={c.dogLifeSection.eyebrow}
              title={c.dogLifeSection.title}
              body={c.dogLifeSection.body}
            />
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {c.dogLife.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-border-strong px-4 py-2 text-sm text-foreground"
                >
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ButtonLink to={withLangPrefix("/dog-life")} tone="outline" size="lg">
                {c.dogLifeSection.cta}
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={dogLifeImage}
              alt={c.dogLifeSection.dogLifeAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 10 — Travel */}
      <Section className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={travelImage}
              alt={c.travel.travelAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHead eyebrow={c.travel.eyebrow} title={c.travel.title} body={c.travel.body} />
            <ul className="mt-9 grid gap-2.5 sm:grid-cols-2">
              {c.travelItems.map((t) => (
                <li key={t} className="flex gap-3 text-[0.9375rem]">
                  <Tick />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Card className="mt-14 max-w-xl">
          <Eyebrow>{c.travel.checkerEyebrow}</Eyebrow>
          <p className="mt-5 font-display text-2xl tracking-tight">{c.travel.route}</p>
          <ul className="mt-6 space-y-3">
            {c.travel.checkerItems.map((r) => (
              <li key={r} className="flex gap-3 text-[0.9375rem]">
                <Tick />
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink to={withLangPrefix("/travel/abroad")}>
              {c.travel.checkCta}
              <Arrow />
            </ButtonLink>
          </div>
        </Card>
      </Section>

      {/* 11 + 12 — Travel pack and print */}
      <Section className="bg-surface">
        <div className="container-page">
          <SectionHead eyebrow={c.print.eyebrow} title={c.print.title} body={c.print.body} />

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
            {/* travel pack preview */}
            <div className="rounded-[2rem] border border-border bg-background p-6 shadow-[var(--shadow-lift)] md:p-8">
              <div className="mx-auto max-w-sm rounded-lg border border-border bg-background p-7 shadow-[var(--shadow-soft)]">
                <p className="eyebrow">{c.print.cardBrand}</p>
                <p className="mt-4 font-display text-xl tracking-tight">{c.print.cardTitle}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.print.cardDog}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {c.packContents.map((p) => (
                    <li key={p} className="flex items-center justify-between text-sm">
                      <span>{p}</span>
                      <span className="h-px w-16 bg-border" aria-hidden />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 text-center">
                <ButtonLink to={withLangPrefix("/my-dog/pack")} size="lg">
                  {c.print.createCta}
                  <Arrow />
                </ButtonLink>
              </div>
            </div>

            <div>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {c.docs.map((d) => (
                  <li key={d} className="bg-background p-6">
                    <span
                      className="block h-10 w-8 rounded-[3px] border border-border-strong bg-surface"
                      aria-hidden
                    />
                    <p className="mt-4 text-[0.9375rem] font-medium">{d}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink to={withLangPrefix("/my-dog/print")} tone="outline" size="lg">
                  {c.print.printCta}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 13 — Multiple dogs */}
      <Section className="container-page">
        <SectionHead
          eyebrow={c.multipleDogs.eyebrow}
          title={c.multipleDogs.title}
          body={c.multipleDogs.body}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
          {[
            { ...c.multipleDogs.dogs[0], img: lunaImage },
            { ...c.multipleDogs.dogs[1], img: maxImage },
          ].map((d) => (
            <Card key={d.name} className="flex items-center gap-5">
              <img
                src={d.img}
                alt={`${d.name}, a ${d.breed}`}
                width={160}
                height={160}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-xl leading-none tracking-tight">{d.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d.breed}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 14 — Personalisation */}
      <Section className="container-page pt-0">
        <div className="rounded-[2rem] border border-border bg-surface p-8 md:p-14">
          <div className="max-w-2xl">
            <h2 className="display-lg">{c.personalisation.title}</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">{c.personalisation.body}</p>
          </div>
        </div>
      </Section>

      {/* 14b — Member card and benefits */}
      <MemberCardShowcase />

      {/* 15 — Journey */}
      <Section className="container-page pt-0">
        <SectionHead eyebrow={c.journeySection.eyebrow} title={c.journeySection.title} />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {c.journey.map((j, i) => (
            <li key={j} className="bg-background p-6">
              <span className="font-display text-sm tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[0.9375rem] font-medium">{j}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 font-display text-2xl tracking-tight">
          DoggMatch<span className="text-accent">+</span> {c.journeySection.closing}
        </p>
      </Section>

      {/* 16 — Comparison */}
      <Section id="compare" className="bg-surface scroll-mt-24">
        <div className="container-page">
          <SectionHead eyebrow={c.compare.eyebrow} title={c.compare.title} body={c.compare.body} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <p className="eyebrow">{c.compare.freeLabel}</p>
              <p className="mt-4 font-display text-xl tracking-tight">{c.compare.freeHeadline}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.compare.freeQuote}</p>
              <ul className="mt-7 space-y-3">
                {c.freeList.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.9375rem]">
                    <Tick />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border-border-strong">
              <p className="eyebrow text-accent">{c.compare.plusLabel}</p>
              <p className="mt-4 font-display text-xl tracking-tight">{c.compare.plusHeadline}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.compare.plusQuote}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {c.plusList.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.9375rem]">
                    <Tick />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* 17 — Value */}
      <Section className="container-page">
        <SectionHead eyebrow={c.value.eyebrow} title={c.value.title} />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
          {c.value.items.map((v) => (
            <li key={v.title} className="bg-background p-9">
              <h3 className="display-md">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 17b — Your first week */}
      <Section className="container-page pt-0">
        <SectionHead
          eyebrow={c.firstWeekSection.eyebrow}
          title={c.firstWeekSection.title}
          body={c.firstWeekSection.body}
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border md:grid-cols-2">
          {c.firstWeek.map((d, i) => (
            <li
              key={d.day}
              className={cn(
                "flex gap-6 bg-background p-7 md:p-9",
                i === c.firstWeek.length - 1 && "md:col-span-2",
              )}
            >
              <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border-strong font-display text-sm tabular-nums text-accent">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="eyebrow">{d.day}</p>
                <h3 className="display-md mt-2">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{d.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 18 + 19 — Price */}
      <Section id="membership" className="container-page scroll-mt-24 pt-0">
        <div className="max-w-2xl">
          <Eyebrow>{c.membership.eyebrow}</Eyebrow>
          <h2 className="display-lg mt-6">
            DoggMatch<span className="text-accent">+</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{c.membership.body}</p>
        </div>
        <div className="mt-12 grid gap-6 lg:max-w-4xl lg:grid-cols-2">
          <Card className="flex flex-col">
            <p className="eyebrow">{c.membership.monthlyLabel}</p>
            <p className="mt-6 font-display text-4xl tracking-tight">
              {c.membership.monthlyPrice}{" "}
              <span className="text-lg font-normal text-muted-foreground">
                {c.membership.monthlyUnit}
              </span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {c.membership.monthlyBody}
            </p>
            <div className="mt-auto">
              <JoinPlusButton plan="monthly" tone="outline" label={c.membership.monthlyJoin} />
            </div>
          </Card>
          <Card className="relative flex flex-col border-border-strong bg-surface">
            <div className="flex items-center gap-3">
              <p className="eyebrow">{c.membership.yearlyLabel}</p>
              <Badge tone="accent">{c.membership.bestValue}</Badge>
            </div>
            <p className="mt-6 font-display text-4xl tracking-tight">
              {c.membership.yearlyPrice}{" "}
              <span className="text-lg font-normal text-muted-foreground">
                {c.membership.yearlyUnit}
              </span>
            </p>
            <p className="mt-4 font-display text-lg tracking-tight text-accent">
              {c.membership.yearlyHighlight}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {c.membership.yearlyBody}
            </p>
            <div className="mt-auto">
              <JoinPlusButton plan="yearly" label={c.membership.yearlyJoin} />
            </div>
          </Card>
        </div>
        <PartnerCodeField className="mt-10 max-w-xl rounded-3xl border border-border p-6" />
        <div className="mt-8 max-w-xl">
          <p className="font-display text-lg tracking-tight">{c.membership.openLine}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {c.membership.openBody}
          </p>
        </div>
      </Section>

      {/* 19c — FAQ */}
      <Section className="container-page pt-0">
        <SectionHead
          eyebrow={c.faqSection.eyebrow}
          title={c.faqSection.title}
          body={c.faqSection.body}
        />
        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border">
          {c.faqs.map((f) => (
            <details
              key={f.q}
              className="group border-b border-border bg-background last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-6 md:p-8">
                <h3 className="font-display text-lg leading-snug tracking-tight md:text-xl">
                  {f.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border-strong text-accent transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-7 leading-relaxed text-muted-foreground md:px-8 md:pb-9 md:pr-16">
                {f.a}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-[0.9375rem] text-muted-foreground">
          {c.faqSection.stillWondering}{" "}
          <Link
            to={withLangPrefix("/contact")}
            className="underline underline-offset-4 hover:text-foreground"
          >
            {c.faqSection.getInTouch}
          </Link>
          .
        </p>
      </Section>

      {/* 20 — Final CTA */}
      <Section className="container-page pt-0">
        <div className="rounded-[2rem] bg-primary p-10 text-primary-foreground md:p-16">
          <div className="max-w-2xl">
            <h2 className="display-lg">{c.finalCta.title}</h2>
            <p className="mt-6 text-lg leading-relaxed opacity-80">{c.finalCta.body}</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#membership"
                className="group inline-flex h-14 w-full select-none items-center justify-center gap-2.5 rounded-full bg-accent px-6 text-center text-[0.9375rem] font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)] sm:w-auto sm:px-8 sm:text-base"
              >
                {c.finalCta.join}
                <Arrow />
              </a>
              <ButtonLink
                to={withLangPrefix("/find-my-dog")}
                size="lg"
                className="w-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                tone="ghost"
              >
                {c.finalCta.find}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
