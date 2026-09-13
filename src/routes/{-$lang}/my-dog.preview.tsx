import { localizedHead } from "@/lib/seo";
import { pageSeo } from "@/lib/seo/pages";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Lock, PawPrint } from "lucide-react";
import { useCopy } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";
import { Panel, RoutineRow, Stat, VetNote } from "@/components/dogmatch/care/parts";
import { estimatePortions } from "@/lib/care/portions";
import { withLangPrefix } from "@/lib/localized-path";
import { seoLinks, abs } from "@/lib/seo";

const title = "My Dog — a peek inside | DoggMatch";
const description =
  "See what everyday life in the My Dog hub looks like: today's little routine, a weekly rhythm, one training lesson and a real food portion example.";

export const Route = createFileRoute("/{-$lang}/my-dog/preview")({
  head: (ctx) => localizedHead(ctx, "/my-dog/preview", pageSeo.myDogPreview),
  component: MyDogPreview,
});

/**
 * English is the source language. Other locales fall back to English here
 * until the translations land — same pattern as the /plus journey stages.
 */
const copy = {
  en: {
    eyebrow: "My Dog · a peek inside",
    title: "This is what everyday life with your dog can look like",
    intro:
      "Before you add your own dog, have a wander through a real example. This is Luna — an adult dog, 18 kg, moderately active. Everything below is exactly how the hub works, just with her details instead of yours.",
    sampleNote: "Sample dog: Luna · adult · 18 kg · two meals a day",

    todayTitle: "Today",
    todayIntro:
      "A short daily routine, built around your dog. None of it has to be perfect — tick off what you've done and it resets tomorrow. Go on, try ticking one.",
    todayHint:
      "In the preview nothing is saved — once your dog is added, the days remember themselves.",
    routineItems: [
      { id: "fresh-water", label: "Fresh water", hint: "Clean bowl, topped up", done: true },
      { id: "measured-meals", label: "Meals measured", hint: "Weighed, not guessed", done: true },
      { id: "walk", label: "A proper walk", hint: "With time to sniff", done: false },
      { id: "play", label: "A bit of play", hint: "Ten minutes counts", done: false },
      { id: "teeth", label: "Teeth", hint: "Even thirty seconds helps", done: false },
      { id: "paw-check", label: "Paw check", hint: "After the walk", done: false },
    ],

    weekTitle: "One weekly rhythm",
    weekIntro:
      "Every dog gets a week that fits them — walks, training, food and care spread sensibly, so nothing piles up on one day. Here's Luna's.",
    weekDays: [
      { day: "Mon", focus: "Normal walk · quick brush" },
      { day: "Tue", focus: "Training: settle on a mat" },
      { day: "Wed", focus: "Longer walk · teeth" },
      { day: "Thu", focus: "Training: recall games" },
      { day: "Fri", focus: "Normal walk · paw check" },
      { day: "Sat", focus: "Adventure walk somewhere new" },
      { day: "Sun", focus: "Quiet day · weigh-in" },
    ],

    lessonTitle: "One training lesson, as it actually looks",
    lessonName: "Settle on a mat",
    lessonMeta: "5 minutes · beginner · indoors",
    lessonIntro:
      "Every lesson is short enough to do before dinner. This one teaches your dog to relax on their mat — quietly useful for cafés, visitors and busy evenings.",
    lessonSteps: [
      "Put the mat on the floor and drop a treat on it. Say nothing.",
      "When all four paws are on the mat, drop another treat between their feet.",
      "Wait for them to lie down, then calmly place a few treats on the mat, one at a time.",
      "After a minute, cheerfully release them and take the mat away. Done for today.",
    ],
    lessonTimer:
      "A built-in timer keeps the session honest — short sessions, often, beat long ones.",
    lessonCta: "Browse the training lessons",

    foodTitle: "A real food portion, worked out for her",
    foodIntro:
      "Portions come from her weight, age, activity and the food's energy — not a guess on the back of a bag. Here's Luna's day in numbers.",
    foodDailyKcal: "Daily energy",
    foodGramsDay: "Food per day",
    foodGramsMeal: "Per meal · 2 meals",
    foodTreats: "Treat budget",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "The same calculation runs for your dog the moment you tell us their weight and food. If they gain or lose, the portion adjusts with them.",

    unlockTitle: "What opens up with DoggMatch+",
    unlockIntro:
      "Everything above works with your own dog for free. DoggMatch+ is for people who want the whole day-to-day picture, kept for them.",
    unlockItems: [
      {
        title: "Saved days and weeks",
        body: "Your routine, week rhythm and progress remembered — across phone and computer.",
      },
      {
        title: "Weight and health records",
        body: "Weigh-ins, vet notes and a care calendar that nudges you before things slip.",
      },
      {
        title: "Full training library",
        body: "Every lesson and behaviour programme, with progression that follows your dog.",
      },
      {
        title: "Travel documents and printing",
        body: "The printable Dog Pack, vet summaries and travel checklists, ready when you need them.",
      },
    ],
    unlockCtaPrimary: "See DoggMatch+",
    unlockCtaSecondary: "Add your dog — it's free",
    unlockNote:
      "No pressure, and nothing here locks you in. The free version stays genuinely useful on its own — Plus is simply there when daily life gets busy.",

    backToResults: "Back to my matches",
  },
  no: {
    eyebrow: "Min hund · et lite innblikk",
    title: "Slik kan hverdagen med hunden din se ut",
    intro:
      "Før du legger til din egen hund, ta en titt på et ekte eksempel. Dette er Luna — en voksen hund, 18 kg, moderat aktiv. Alt nedenfor viser nøyaktig hvordan systemet fungerer, bare med hennes detaljer i stedet for dine.",
    sampleNote: "Eksempelhund: Luna · voksen · 18 kg · to måltider om dagen",

    todayTitle: "I dag",
    todayIntro:
      "En kort daglig rutine, bygget rundt hunden din. Ingenting trenger å være perfekt — kryss av det du har gjort, så nullstilles det i morgen. Bare prøv å krysse av én ting.",
    todayHint:
      "I forhåndsvisningen lagres ingenting — når hunden din er lagt til, husker dagene seg selv.",
    routineItems: [
      { id: "fresh-water", label: "Rent vann", hint: "Ren skål, fylt opp", done: true },
      { id: "measured-meals", label: "Måltider veid", hint: "Veiing, ikke gjetting", done: true },
      { id: "walk", label: "En skikkelig tur", hint: "Med tid til å snuse", done: false },
      { id: "play", label: "Litt lek", hint: "Ti minutter teller", done: false },
      { id: "teeth", label: "Tenner", hint: "Selv tretti sekunder hjelper", done: false },
      { id: "paw-check", label: "Potesjekk", hint: "Etter turen", done: false },
    ],

    weekTitle: "En ukentlig rytme",
    weekIntro:
      "Hver hund får en uke som passer for den — turer, trening, mat og stell fordelt fornuftig, slik at ingenting hoper seg opp på én dag. Her er Lunas.",
    weekDays: [
      { day: "Man", focus: "Normal tur · rask børsting" },
      { day: "Tir", focus: "Trening: roe seg på teppet" },
      { day: "Ons", focus: "Lengre tur · tenner" },
      { day: "Tor", focus: "Trening: innkalling-leker" },
      { day: "Fre", focus: "Normal tur · potesjekk" },
      { day: "Lør", focus: "Eventyrlig tur et nytt sted" },
      { day: "Søn", focus: "Rolig dag · veiing" },
    ],

    lessonTitle: "En treningsøkt, slik den faktisk ser ut",
    lessonName: "Ro deg på teppet",
    lessonMeta: "5 minutter · nybegynner · innendørs",
    lessonIntro:
      "Hver økt er kort nok til å gjøre før middag. Denne lærer hunden din å slappe av på teppet sitt — nyttig i kafeer, for besøkende og travle kvelder.",
    lessonSteps: [
      "Legg teppet på gulvet og slipp en godbit på det. Si ingenting.",
      "Når alle fire poter er på teppet, slipp en ny godbit mellom potene deres.",
      "Vent til de legger seg ned, og legg deretter rolig noen godbiter på teppet, én om gangen.",
      "Etter et minutt, slipp dem glade og ta bort teppet. Ferdig for i dag.",
    ],
    lessonTimer: "En innebygd tidtaker holder økten ærlig — korte økter, ofte, slår lange.",
    lessonCta: "Utforsk treningsøktene",

    foodTitle: "En ekte matporsjon, beregnet for henne",
    foodIntro:
      "Porsjoner beregnes ut fra vekt, alder, aktivitet og matens energi — ikke en gjetning på baksiden av en pose. Her er Lunas dag i tall.",
    foodDailyKcal: "Daglig energi",
    foodGramsDay: "Mat per dag",
    foodGramsMeal: "Per måltid · 2 måltider",
    foodTreats: "Godbitbudsjett",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "Samme utregning kjøres for hunden din i det øyeblikket du forteller oss vekt og mat. Hvis de legger på seg eller går ned, justeres porsjonen med dem.",

    unlockTitle: "Hva som åpnes med DoggMatch+",
    unlockIntro:
      "Alt ovenfor fungerer med din egen hund gratis. DoggMatch+ er for de som ønsker hele hverdagsbildet, lagret for dem.",
    unlockItems: [
      {
        title: "Lagrede dager og uker",
        body: "Din rutine, ukentlige rytme og fremgang huskes — på tvers av telefon og datamaskin.",
      },
      {
        title: "Vekt- og helsejournaler",
        body: "Veiinger, veterinærnotater og en omsorgskalender som minner deg på ting før de glipper.",
      },
      {
        title: "Full treningsbibliotek",
        body: "Hver økt og atferdsprosedyre, med progresjon som følger hunden din.",
      },
      {
        title: "Reisedokumenter og utskrift",
        body: "Den utskrivbare Hundepakken, veterinærsammendrag og sjekklister for reise, klare når du trenger dem.",
      },
    ],
    unlockCtaPrimary: "Se DoggMatch+",
    unlockCtaSecondary: "Legg til hunden din — det er gratis",
    unlockNote:
      "Ingen press, og ingenting her låser deg inne. Gratisversjonen forblir genuint nyttig på egen hånd — Plus er rett og slett der når hverdagen blir travel.",

    backToResults: "Tilbake til mine matcher",
  },
  pl: {
    eyebrow: "Mój pies · rzut oka do środka",
    title: "Tak może wyglądać codzienne życie z Twoim psem",
    intro:
      "Zanim zdecydujesz się na własnego psa, zajrzyj do prawdziwego przykładu. To Luna — dorosły pies, 18 kg, umiarkowanie aktywny. Wszystko poniżej działa dokładnie tak, jak nasz system, tylko z jej danymi zamiast Twoich.",
    sampleNote: "Przykładowy pies: Luna · dorosły · 18 kg · dwa posiłki dziennie",

    todayTitle: "Dziś",
    todayIntro:
      "Krótka codzienna rutyna, dopasowana do Twojego psa. Nic nie musi być idealne — zaznacz, co zrobiłeś, a jutro wszystko się zresetuje. Śmiało, spróbuj zaznaczyć jedno.",
    todayHint:
      "W podglądzie nic nie jest zapisywane — gdy dodasz swojego psa, dni będą zapamiętywane same.",
    routineItems: [
      { id: "fresh-water", label: "Świeża woda", hint: "Czysta miska, uzupełniona", done: true },
      { id: "measured-meals", label: "Porcje odmierzone", hint: "Zważone, nie na oko", done: true },
      { id: "walk", label: "Porządny spacer", hint: "Z czasem na węszenie", done: false },
      { id: "play", label: "Trochę zabawy", hint: "Dziesięć minut się liczy", done: false },
      { id: "teeth", label: "Zęby", hint: "Nawet trzydzieści sekund pomaga", done: false },
      { id: "paw-check", label: "Kontrola łap", hint: "Po spacerze", done: false },
    ],

    weekTitle: "Tygodniowy rytm",
    weekIntro:
      "Każdy pies ma tydzień dopasowany do siebie — spacery, treningi, jedzenie i pielęgnacja rozłożone rozsądnie, aby nic nie gromadziło się jednego dnia. Oto tydzień Luny.",
    weekDays: [
      { day: "Pon", focus: "Normalny spacer · szybkie szczotkowanie" },
      { day: "Wt", focus: "Trening: nauka spokojnego leżenia na macie" },
      { day: "Śr", focus: "Dłuższy spacer · pielęgnacja zębów" },
      { day: "Czw", focus: "Trening: zabawy przywołujące" },
      { day: "Pt", focus: "Normalny spacer · kontrola łap" },
      { day: "Sob", focus: "Wyprawa na nowy teren" },
      { day: "Niedz", focus: "Spokojny dzień · ważenie" },
    ],

    lessonTitle: "Jedna lekcja treningowa, jak wygląda w rzeczywistości",
    lessonName: "Nauka spokojnego leżenia na macie",
    lessonMeta: "5 minut · początkujący · w domu",
    lessonIntro:
      "Każda lekcja jest na tyle krótka, że można ją wykonać przed kolacją. Ta uczy psa relaksować się na swojej macie — przydatne w kawiarniach, podczas wizyt gości i w pracowite wieczory.",
    lessonSteps: [
      "Połóż matę na podłodze i upuść na nią smakołyk. Nic nie mów.",
      "Gdy wszystkie cztery łapy znajdą się na macie, upuść kolejny smakołyk między nimi.",
      "Poczekaj, aż się położy, a następnie spokojnie kładź na macie kilka smakołyków, jeden po drugim.",
      "Po minucie radośnie go uwolnij i zabierz matę. Koniec na dziś.",
    ],
    lessonTimer:
      "Wbudowany timer sprawia, że sesja jest efektywna — krótkie sesje, często, są lepsze od długich.",
    lessonCta: "Przeglądaj lekcje treningowe",

    foodTitle: "Realna porcja jedzenia, obliczona dla niej",
    foodIntro:
      "Porcje są obliczane na podstawie jej wagi, wieku, aktywności i energii karmy — nie zgadywane z tyłu opakowania. Oto dzień Luny w liczbach.",
    foodDailyKcal: "Dzienna energia",
    foodGramsDay: "Karma dziennie",
    foodGramsMeal: "Na posiłek · 2 posiłki",
    foodTreats: "Budżet na smakołyki",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "Ten sam algorytm działa dla Twojego psa od momentu podania jego wagi i rodzaju karmy. Jeśli przybierze lub schudnie, porcja dostosuje się do niego.",

    unlockTitle: "Co zyskujesz z DoggMatch+",
    unlockIntro:
      "Wszystko powyższe działa z Twoim psem za darmo. DoggMatch+ jest dla osób, które chcą mieć pełny obraz dnia codziennego, zapisany dla nich.",
    unlockItems: [
      {
        title: "Zapisane dni i tygodnie",
        body: "Twoja rutyna, tygodniowy rytm i postępy zapamiętywane — na telefonie i komputerze.",
      },
      {
        title: "Zapisy wagi i zdrowia",
        body: "Ważenia, notatki weterynaryjne i kalendarz opieki, który przypomina o rzeczach, zanim się o nich zapomni.",
      },
      {
        title: "Pełna biblioteka treningowa",
        body: "Każda lekcja i program zachowań, z postępem dopasowanym do Twojego psa.",
      },
      {
        title: "Dokumenty podróżne i drukowanie",
        body: "Pies Pack do druku, podsumowania weterynaryjne i listy kontrolne do podróży, gotowe, gdy ich potrzebujesz.",
      },
    ],
    unlockCtaPrimary: "Zobacz DoggMatch+",
    unlockCtaSecondary: "Dodaj swojego psa — to darmowe",
    unlockNote:
      "Bez presji i nic tutaj Cię nie ogranicza. Darmowa wersja pozostaje naprawdę użyteczna sama w sobie — Plus jest po prostu dostępny, gdy codzienne życie staje się bardziej wymagające.",

    backToResults: "Powrót do moich dopasowań",
  },
  dk: {
    eyebrow: "Min hund · et kig ind",
    title: "Sådan kan hverdagen med din hund se ud",
    intro:
      "Før du tilføjer din egen hund, så tag et kig på et ægte eksempel. Her er Luna — en voksen hund, 18 kg, moderat aktiv. Alt herunder fungerer præcis som hubben, bare med hendes detaljer i stedet for dine.",
    sampleNote: "Eksempelhund: Luna · voksen · 18 kg · to måltider om dagen",

    todayTitle: "I dag",
    todayIntro:
      "En kort daglig rutine, bygget op omkring din hund. Intet behøver at være perfekt — afkryds det, du har gjort, og det nulstilles i morgen. Kom, prøv at afkrydse en ting.",
    todayHint:
      "I forhåndsvisningen gemmes intet — når din hund er tilføjet, husker dagene sig selv.",
    routineItems: [
      { id: "fresh-water", label: "Frisk vand", hint: "Ren skål, fyldt op", done: true },
      { id: "measured-meals", label: "Afmålte måltider", hint: "Afvejet, ikke gættet", done: true },
      { id: "walk", label: "En ordentlig gåtur", hint: "Med tid til at snuse", done: false },
      { id: "play", label: "Lidt leg", hint: "Ti minutter tæller", done: false },
      { id: "teeth", label: "Tænder", hint: "Selv tredive sekunder hjælper", done: false },
      { id: "paw-check", label: "Pote-tjek", hint: "Efter gåturen", done: false },
    ],

    weekTitle: "En ugentlig rytme",
    weekIntro:
      "Hver hund får en uge, der passer til den — gåture, træning, mad og pleje fordelt fornuftigt, så intet hober sig op på én dag. Her er Lunas.",
    weekDays: [
      { day: "Man", focus: "Normal gåtur · hurtig børstning" },
      { day: "Tir", focus: "Træning: ligge på måtten" },
      { day: "Ons", focus: "Længere gåtur · tænder" },
      { day: "Tor", focus: "Træning: indkaldslege" },
      { day: "Fre", focus: "Normal gåtur · pote-tjek" },
      { day: "Lør", focus: "Eventyrgåtur et nyt sted" },
      { day: "Søn", focus: "Rolig dag · vejning" },
    ],

    lessonTitle: "En træningslektion, som den ser ud i virkeligheden",
    lessonName: "Ligge på måtten",
    lessonMeta: "5 minutter · begynder · indendørs",
    lessonIntro:
      "Hver lektion er kort nok til at kunne laves før aftensmaden. Denne lærer din hund at slappe af på sin måtte — stille og roligt nyttigt til caféer, besøg og travle aftener.",
    lessonSteps: [
      "Læg måtten på gulvet og læg en godbid på den. Sig ingenting.",
      "Når alle fire poter er på måtten, læg en ny godbid mellem dens poter.",
      "Vent til den lægger sig ned, og læg derefter roligt et par godbidder på måtten, én ad gangen.",
      "Efter et minut, giv den gladeligt lov til at rejse sig, og tag måtten væk. Færdig for i dag.",
    ],
    lessonTimer: "En indbygget timer holder sessionen ærlig — korte sessioner, ofte, slår lange.",
    lessonCta: "Se træningslektionerne",

    foodTitle: "En rigtig madportion, beregnet til hende",
    foodIntro:
      "Portionerne kommer fra hendes vægt, alder, aktivitet og madens energi — ikke et gæt på bagsiden af en pose. Her er Lunas dag i tal.",
    foodDailyKcal: "Daglig energi",
    foodGramsDay: "Mad pr. dag",
    foodGramsMeal: "Pr. måltid · 2 måltider",
    foodTreats: "Godbidder-budget",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "Den samme beregning kører for din hund i det øjeblik, du fortæller os dens vægt og mad. Hvis den tager på eller taber sig, justeres portionen med den.",

    unlockTitle: "Hvad der åbner sig med DoggMatch+",
    unlockIntro:
      "Alt ovenstående fungerer med din egen hund gratis. DoggMatch+ er for folk, der ønsker hele hverdagsbilledet, gemt for dem.",
    unlockItems: [
      {
        title: "Gemte dage og uger",
        body: "Din rutine, ugentlige rytme og fremskridt huskes — på tværs af telefon og computer.",
      },
      {
        title: "Vægt- og sundhedsjournaler",
        body: "Vejninger, dyrlægenoter og en plejekalender, der minder dig om ting, før de glemmes.",
      },
      {
        title: "Komplet træningsbibliotek",
        body: "Hver lektion og adfærdsprogram, med progression der følger din hund.",
      },
      {
        title: "Rejsedokumenter og print",
        body: "Den printbare Hundepakke, dyrlægeoversigter og tjeklister til rejser, klar når du har brug for dem.",
      },
    ],
    unlockCtaPrimary: "Se DoggMatch+",
    unlockCtaSecondary: "Tilføj din hund — det er gratis",
    unlockNote:
      "Intet pres, og intet her binder dig. Gratis-versionen forbliver oprigtigt nyttig i sig selv — Plus er simpelthen der, når hverdagen bliver travl.",

    backToResults: "Tilbage til mine matches",
  },
  se: {
    eyebrow: "Min hund · en titt inuti",
    title: "Så här kan vardagen med din hund se ut",
    intro:
      "Innan du lägger till din egen hund, ta en sväng genom ett verkligt exempel. Det här är Luna – en vuxen hund, 18 kg, måttligt aktiv. Allt nedan är exakt hur det fungerar, bara med hennes uppgifter istället för dina.",
    sampleNote: "Exempelhund: Luna · vuxen · 18 kg · två måltider om dagen",

    todayTitle: "Idag",
    todayIntro:
      "En kort daglig rutin, byggd kring din hund. Inget behöver vara perfekt – bocka av det du har gjort så nollställs det imorgon. Varsågod, prova att bocka av en.",
    todayHint:
      "I förhandsvisningen sparas inget – när din hund är tillagd kommer dagarna att minnas sig själva.",
    routineItems: [
      { id: "fresh-water", label: "Friskt vatten", hint: "Ren skål, påfylld", done: true },
      { id: "measured-meals", label: "Måltider uppmätta", hint: "Vägda, inte gissade", done: true },
      { id: "walk", label: "En ordentlig promenad", hint: "Med tid att nosa", done: false },
      { id: "play", label: "Lite lek", hint: "Tio minuter räknas", done: false },
      { id: "teeth", label: "Tänder", hint: "Även trettio sekunder hjälper", done: false },
      { id: "paw-check", label: "Tasskontroll", hint: "Efter promenaden", done: false },
    ],

    weekTitle: "En veckorytm",
    weekIntro:
      "Varje hund får en vecka som passar dem – promenader, träning, mat och skötsel utspritt vettigt, så att inget hopar sig på en dag. Här är Lunas.",
    weekDays: [
      { day: "Mån", focus: "Vanlig promenad · snabb borstning" },
      { day: "Tis", focus: "Träning: ligg på matta" },
      { day: "Ons", focus: "Längre promenad · tänder" },
      { day: "Tors", focus: "Träning: inkallningslekar" },
      { day: "Fre", focus: "Vanlig promenad · tasskontroll" },
      { day: "Lör", focus: "Äventyrspromenad någonstans nytt" },
      { day: "Sön", focus: "Lugn dag · vägning" },
    ],

    lessonTitle: "En träning, som den faktiskt ser ut",
    lessonName: "Ligg på matta",
    lessonMeta: "5 minuter · nybörjare · inomhus",
    lessonIntro:
      "Varje träning är tillräckligt kort för att göras före middagen. Den här lär din hund att slappna av på sin matta – tyst användbart för caféer, besökare och hektiska kvällar.",
    lessonSteps: [
      "Lägg ut mattan på golvet och släpp en godbit på den. Säg inget.",
      "När alla fyra tassar är på mattan, släpp en till godbit mellan deras fötter.",
      "Vänta tills de lägger sig, placera sedan lugnt några godbitar på mattan, en i taget.",
      "Efter en minut, släpp dem glatt och ta bort mattan. Klart för idag.",
    ],
    lessonTimer: "En inbyggd timer håller passet ärligt – korta pass, ofta, slår långa.",
    lessonCta: "Bläddra bland träningarna",

    foodTitle: "En verklig matportion, uträknad för henne",
    foodIntro:
      "Portionerna kommer från hennes vikt, ålder, aktivitet och matens energi – inte en gissning på baksidan av en påse. Här är Lunas dag i siffror.",
    foodDailyKcal: "Daglig energi",
    foodGramsDay: "Mat per dag",
    foodGramsMeal: "Per måltid · 2 måltider",
    foodTreats: "Godisbudget",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "Samma uträkning körs för din hund i samma ögonblick du berättar deras vikt och mat. Om de går upp eller ner, justeras portionen med dem.",

    unlockTitle: "Vad som låses upp med DoggMatch+",
    unlockIntro:
      "Allt ovan fungerar med din egen hund gratis. DoggMatch+ är för personer som vill ha hela dagsbilden, sparad för dem.",
    unlockItems: [
      {
        title: "Sparade dagar och veckor",
        body: "Din rutin, veckorytm och framsteg ihågkomna – över telefon och dator.",
      },
      {
        title: "Vikt- och hälsoregister",
        body: "Vägningar, veterinäranteckningar och en skötselkalender som påminner dig innan saker faller mellan stolarna.",
      },
      {
        title: "Fullständig träningsbibliotek",
        body: "Varje lektion och beteendeprogram, med progression som följer din hund.",
      },
      {
        title: "Resedokument och utskrifter",
        body: "Den utskrivbara Hundpaketet, veterinärsammanfattningar och checklistor för resor, redo när du behöver dem.",
      },
    ],
    unlockCtaPrimary: "Se DoggMatch+",
    unlockCtaSecondary: "Lägg till din hund – det är gratis",
    unlockNote:
      "Ingen press, och inget här låser dig. Gratisversionen förblir genuint användbar på egen hand – Plus finns helt enkelt där när vardagen blir hektisk.",

    backToResults: "Tillbaka till mina matchningar",
  },
  fi: {
    eyebrow: "Oma koirani · kurkistus kulissien taakse",
    title: "Tältä voi näyttää arki koirasi kanssa",
    intro:
      "Ennen kuin hankit oman koiran, tutustu tähän todelliseen esimerkkiin. Tässä on Luna – aikuinen koira, 18 kg, kohtalaisen aktiivinen. Kaikki alla oleva toimii täsmälleen samalla tavalla kuin sovellus, mutta hänen tietojensa pohjalta sinun tietojesi sijaan.",
    sampleNote: "Esimerkkikoira: Luna · aikuinen · 18 kg · kaksi ruokintaa päivässä",

    todayTitle: "Tänään",
    todayIntro:
      "Lyhyt päivittäinen rutiini, joka on rakennettu koirasi ympärille. Mikään ei tarvitse olla täydellistä – rastita tekemäsi, niin se nollautuu huomenna. Anna mennä, kokeile rastittaa yksi.",
    todayHint:
      "Esikatselussa mitään ei tallenneta – kun koirasi on lisätty, päivät muistavat itsensä.",
    routineItems: [
      { id: "fresh-water", label: "Raikasta vettä", hint: "Puhdas kuppi, täytetty", done: true },
      {
        id: "measured-meals",
        label: "Mitatut ruoka-annokset",
        hint: "Punittu, ei arvattu",
        done: true,
      },
      { id: "walk", label: "Kunnollinen lenkki", hint: "Aikaa haisteluun", done: false },
      { id: "play", label: "Pieni leikkihetki", hint: "Kymmenen minuuttia riittää", done: false },
      { id: "teeth", label: "Hampaat", hint: "Jo kolmekymmentä sekuntia auttaa", done: false },
      { id: "paw-check", label: "Tassujen tarkastus", hint: "Lenkin jälkeen", done: false },
    ],

    weekTitle: "Viikon rytmi",
    weekIntro:
      "Jokaiselle koiralle luodaan heille sopiva viikko – lenkit, koulutus, ruokinta ja hoito jaettuna järkevästi, jotta mikään ei kasaannu yhdelle päivälle. Tässä Lunan viikko.",
    weekDays: [
      { day: "Ma", focus: "Normaali lenkki · nopea harjaus" },
      { day: "Ti", focus: "Koulutus: rauhoittuminen matolle" },
      { day: "Ke", focus: "Pidempi lenkki · hampaat" },
      { day: "To", focus: "Koulutus: luoksetulopelit" },
      { day: "Pe", focus: "Normaali lenkki · tassujen tarkastus" },
      { day: "La", focus: "Seikkailulenkki uudessa paikassa" },
      { day: "Su", focus: "Rauhallinen päivä · punnitus" },
    ],

    lessonTitle: "Yksi koulutuskerta, sellaisena kuin se todellisuudessa on",
    lessonName: "Rauhoittuminen matolle",
    lessonMeta: "5 minuuttia · aloittelija · sisällä",
    lessonIntro:
      "Jokainen koulutuskerta on riittävän lyhyt tehtäväksi ennen illallista. Tämä opettaa koirallesi rauhoittumaan omalle matolleen – kätevää kahviloissa, vieraiden tullessa ja kiireisinä iltoina.",
    lessonSteps: [
      "Aseta matto lattialle ja pudota sille herkku. Älä sano mitään.",
      "Kun kaikki neljä tassua ovat matolla, pudota toinen herkku niiden jalkojen väliin.",
      "Odota, että koira käy makuulle, ja aseta sitten rauhallisesti muutama herkku matolle, yksi kerrallaan.",
      "Minuutin kuluttua vapauta koira iloisesti ja ota matto pois. Tältä päivältä valmis.",
    ],
    lessonTimer:
      "Sisäänrakennettu ajastin pitää harjoituksen reiluna – lyhyet harjoitukset usein ovat parempia kuin pitkät.",
    lessonCta: "Selaa koulutusohjeita",

    foodTitle: "Todellinen ruoka-annos, laskettuna hänelle",
    foodIntro:
      "Annoskoot perustuvat koiran painoon, ikään, aktiivisuuteen ja ruoan energiapitoisuuteen – ei pussin kyljestä arvattuun määrään. Tässä Lunan päivä numeroina.",
    foodDailyKcal: "Päivittäinen energia",
    foodGramsDay: "Ruokaa päivässä",
    foodGramsMeal: "Per ateria · 2 ateriaa",
    foodTreats: "Herkkubudjetti",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "Sama laskelma tehdään omalle koirallesi heti, kun kerrot meille sen painon ja ruoan. Jos koira lihoo tai laihtuu, annos mukautuu sen mukana.",

    unlockTitle: "Mitä DoggMatch+ avaa",
    unlockIntro:
      "Kaikki yllä oleva toimii oman koirasi kanssa ilmaiseksi. DoggMatch+ on ihmisille, jotka haluavat koko päivittäisen kuvan säilytettynä.",
    unlockItems: [
      {
        title: "Tallennut päivät ja viikot",
        body: "Rutiinisi, viikon rytmi ja edistymisesi muistetaan – puhelimella ja tietokoneella.",
      },
      {
        title: "Paino- ja terveystiedot",
        body: "Punnitukset, eläinlääkärin muistiinpanot ja hoitokalenteri, joka muistuttaa ennen kuin asiat unohtuvat.",
      },
      {
        title: "Täysi koulutuskirjasto",
        body: "Jokainen ohje ja käyttäytymisohjelma, edistymisen seurannalla, joka seuraa koiraasi.",
      },
      {
        title: "Matkustusasiakirjat ja tulostus",
        body: "Tulostettava Dog Pack, eläinlääkärien yhteenveto ja matkustuslistat, valmiina kun tarvitset niitä.",
      },
    ],
    unlockCtaPrimary: "Katso DoggMatch+",
    unlockCtaSecondary: "Lisää koirasi – se on ilmaista",
    unlockNote:
      "Ei painostusta, eikä mikään tässä lukitse sinua. Ilmaisversio pysyy aidosti hyödyllisenä itsessään – Plus on yksinkertaisesti olemassa, kun arki käy kiireiseksi.",

    backToResults: "Takaisin omiin osumiin",
  },
  de: {
    eyebrow: "Mein Hund · Ein Blick hinein",
    title: "So könnte der Alltag mit deinem Hund aussehen",
    intro:
      "Bevor du deinen eigenen Hund aufnimmst, wirf einen Blick auf ein echtes Beispiel. Das ist Luna – ein erwachsener Hund, 18 kg, mäßig aktiv. Alles unten zeigt genau, wie die App funktioniert, nur eben mit ihren Daten statt deinen.",
    sampleNote: "Beispielhund: Luna · erwachsen · 18 kg · zwei Mahlzeiten täglich",

    todayTitle: "Heute",
    todayIntro:
      "Ein kurzer Tagesablauf, der sich um deinen Hund dreht. Nichts davon muss perfekt sein – hake ab, was du erledigt hast, und morgen beginnt alles von vorn. Los, versuch mal, eins abzuhaken.",
    todayHint:
      "In der Vorschau wird nichts gespeichert – sobald dein Hund hinzugefügt ist, merken sich die Tage selbst. ",
    routineItems: [
      {
        id: "fresh-water",
        label: "Frisches Wasser",
        hint: "Saubere Schüssel, aufgefüllt",
        done: true,
      },
      {
        id: "measured-meals",
        label: "Abgewogene Mahlzeiten",
        hint: "Gewogen, nicht geschätzt",
        done: true,
      },
      {
        id: "walk",
        label: "Ein ordentlicher Spaziergang",
        hint: "Mit Zeit zum Schnüffeln",
        done: false,
      },
      { id: "play", label: "Ein bisschen spielen", hint: "Zehn Minuten zählen", done: false },
      { id: "teeth", label: "Zähne", hint: "Auch dreißig Sekunden helfen", done: false },
      { id: "paw-check", label: "Pfoten-Check", hint: "Nach dem Spaziergang", done: false },
    ],

    weekTitle: "Ein wöchentlicher Rhythmus",
    weekIntro:
      "Jeder Hund bekommt eine Woche, die zu ihm passt – Spaziergänge, Training, Futter und Pflege sind sinnvoll verteilt, damit sich nichts an einem Tag stapelt. Hier ist Lunas Woche.",
    weekDays: [
      { day: "Mo", focus: "Normaler Spaziergang · kurzes Bürsten" },
      { day: "Di", focus: "Training: Auf der Decke entspannen" },
      { day: "Mi", focus: "Längerer Spaziergang · Zähne" },
      { day: "Do", focus: "Training: Rückrufspiele" },
      { day: "Fr", focus: "Normaler Spaziergang · Pfoten-Check" },
      { day: "Sa", focus: "Abenteuer-Spaziergang an einem neuen Ort" },
      { day: "So", focus: "Ruhiger Tag · Wiegen" },
    ],

    lessonTitle: "Eine Trainingseinheit, wie sie wirklich aussieht",
    lessonName: "Auf der Decke entspannen",
    lessonMeta: "5 Minuten · Anfänger · drinnen",
    lessonIntro:
      "Jede Lektion ist kurz genug, um sie vor dem Abendessen zu machen. Diese hier bringt deinem Hund bei, sich auf seiner Decke zu entspannen – nützlich für Cafés, Besucher und geschäftige Abende.",
    lessonSteps: [
      "Lege die Decke auf den Boden und lass einen Leckerbissen darauf fallen. Sag nichts.",
      "Wenn alle vier Pfoten auf der Decke sind, lass einen weiteren Leckerbissen zwischen ihren Füßen fallen.",
      "Warte, bis sie sich hinlegen, und lege dann ruhig ein paar Leckerlis nacheinander auf die Decke.",
      "Nach einer Minute löse sie fröhlich auf und nimm die Decke weg. Das war's für heute.",
    ],
    lessonTimer:
      "Ein integrierter Timer sorgt für Ehrlichkeit bei der Einheit – kurze, häufige Einheiten sind besser als lange.",
    lessonCta: "Trainingslektionen durchstöbern",

    foodTitle: "Eine echte Futterportion, für sie berechnet",
    foodIntro:
      "Die Portionen ergeben sich aus Gewicht, Alter, Aktivität und der Energie des Futters – kein Rätselraten auf der Rückseite einer Tüte. Hier sind Lunas Tageswerte in Zahlen.",
    foodDailyKcal: "Tägliche Energie",
    foodGramsDay: "Futter pro Tag",
    foodGramsMeal: "Pro Mahlzeit · 2 Mahlzeiten",
    foodTreats: "Leckerli-Budget",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "Die gleiche Berechnung läuft für deinen Hund, sobald du uns sein Gewicht und sein Futter nennst. Wenn er zu- oder abnimmt, passt sich die Portion mit ihm an.",

    unlockTitle: "Was mit DoggMatch+ freigeschaltet wird",
    unlockIntro:
      "Alles oben Genannte funktioniert kostenlos mit deinem eigenen Hund. DoggMatch+ ist für Leute, die das komplette tägliche Bild haben möchten, das für sie gespeichert wird.",
    unlockItems: [
      {
        title: "Gespeicherte Tage und Wochen",
        body: "Deine Routine, dein Wochenrhythmus und dein Fortschritt werden gespeichert – auf Handy und Computer.",
      },
      {
        title: "Gewichts- und Gesundheitsaufzeichnungen",
        body: "Wiegen, Tierarztnotizen und ein Pflegekalender, der dich erinnert, bevor etwas vergessen wird.",
      },
      {
        title: "Vollständige Trainingsbibliothek",
        body: "Jede Lektion und jedes Verhaltenstraining, mit Fortschritt, der deinem Hund folgt.",
      },
      {
        title: "Reisedokumente und Ausdrucke",
        body: "Das ausdruckbare Hunde-Paket, Tierarztzusammenfassungen und Checklisten für Reisen, bereit, wenn du sie brauchst.",
      },
    ],
    unlockCtaPrimary: "DoggMatch+ ansehen",
    unlockCtaSecondary: "Hund hinzufügen – das ist kostenlos",
    unlockNote:
      "Kein Druck und nichts hier bindet dich. Die kostenlose Version bleibt für sich genommen wirklich nützlich – Plus ist einfach da, wenn der Alltag stressig wird.",

    backToResults: "Zurück zu meinen Matches",
  },
  fr: {
    eyebrow: "Mon chien · un aperçu",
    title: "Voici à quoi peut ressembler la vie de tous les jours avec votre chien",
    intro:
      "Avant d'ajouter votre propre chien, faites un tour dans un exemple concret. Voici Luna — une chienne adulte, 18 kg, moyennement active. Tout ce qui suit montre exactement comment fonctionne le hub, mais avec ses détails à elle au lieu des vôtres.",
    sampleNote: "Chien d'exemple : Luna · adulte · 18 kg · deux repas par jour",

    todayTitle: "Aujourd'hui",
    todayIntro:
      "Une courte routine quotidienne, conçue autour de votre chien. Rien ne doit être parfait — cochez ce que vous avez fait et ça se réinitialise demain. Allez-y, essayez d'en cocher un.",
    todayHint:
      "Dans l'aperçu, rien n'est sauvegardé — une fois votre chien ajouté, les jours se souviennent d'eux-mêmes.",
    routineItems: [
      { id: "fresh-water", label: "Eau fraîche", hint: "Gourde propre, remplie", done: true },
      { id: "measured-meals", label: "Repas mesurés", hint: "Pesés, pas estimés", done: true },
      { id: "walk", label: "Une vraie promenade", hint: "Avec le temps de renifler", done: false },
      { id: "play", label: "Un peu de jeu", hint: "Dix minutes, ça compte", done: false },
      { id: "teeth", hint: "Même trente secondes aident", done: false, label: "Dents" },
      {
        id: "paw-check",
        label: "Vérification des pattes",
        hint: "Après la promenade",
        done: false,
      },
    ],

    weekTitle: "Un rythme hebdomadaire",
    weekIntro:
      "Chaque chien a une semaine qui lui convient — promenades, éducation, nourriture et soins répartis judicieusement, pour que rien ne s'accumule un seul jour. Voici celle de Luna.",
    weekDays: [
      { day: "Lun", focus: "Promenade normale · brossage rapide" },
      { day: "Mar", focus: "Éducation : s'installer sur un tapis" },
      { day: "Mer", focus: "Promenade plus longue · dents" },
      { day: "Jeu", focus: "Éducation : jeux de rappel" },
      { day: "Ven", focus: "Promenade normale · vérification des pattes" },
      { day: "Sam", focus: "Promenade d'aventure dans un endroit nouveau" },
      { day: "Dim", focus: "Journée calme · pesée" },
    ],

    lessonTitle: "Une leçon d'éducation, telle qu'elle se présente réellement",
    lessonName: "S'installer sur un tapis",
    lessonMeta: "5 minutes · débutant · intérieur",
    lessonIntro:
      "Chaque leçon est assez courte pour être faite avant le dîner. Celle-ci apprend à votre chien à se détendre sur son tapis — utile discrètement pour les cafés, les visiteurs et les soirées chargées.",
    lessonSteps: [
      "Posez le tapis au sol et déposez une friandise dessus. Ne dites rien.",
      "Quand les quatre pattes sont sur le tapis, déposez une autre friandise entre ses pattes.",
      "Attendez qu'il s'allonge, puis placez calmement quelques friandises sur le tapis, une par une.",
      "Après une minute, libérez-le joyeusement et retirez le tapis. C'est fini pour aujourd'hui.",
    ],
    lessonTimer:
      "Un minuteur intégré rend la séance honnête — des séances courtes, fréquentes, battent les longues.",
    lessonCta: "Découvrir les leçons d'éducation",

    foodTitle: "Une vraie portion de nourriture, calculée pour elle",
    foodIntro:
      "Les portions proviennent de son poids, de son âge, de son activité et de l'énergie de la nourriture — pas d'une estimation au dos d'un paquet. Voici la journée de Luna en chiffres.",
    foodDailyKcal: "Énergie quotidienne",
    foodGramsDay: "Nourriture par jour",
    foodGramsMeal: "Par repas · 2 repas",
    foodTreats: "Budget friandises",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "Le même calcul s'applique à votre chien dès que vous nous indiquez son poids et sa nourriture. S'il prend ou perd du poids, la portion s'ajuste avec lui.",

    unlockTitle: "Ce qui s'ouvre avec DoggMatch+",
    unlockIntro:
      "Tout ce qui précède fonctionne avec votre propre chien gratuitement. DoggMatch+ est pour ceux qui veulent l'image complète du quotidien, conservée pour eux.",
    unlockItems: [
      {
        title: "Jours et semaines sauvegardés",
        body: "Votre routine, votre rythme hebdomadaire et vos progrès enregistrés — sur téléphone et ordinateur.",
      },
      {
        title: "Suivi du poids et de la santé",
        body: "Pesées, notes vétérinaires et un calendrier de soins qui vous rappelle les choses avant qu'elles ne soient oubliées.",
      },
      {
        title: "Bibliothèque complète d'éducation",
        body: "Chaque leçon et programme de comportement, avec une progression qui suit votre chien.",
      },
      {
        title: "Documents de voyage et impressions",
        body: "Le Pack Chien imprimable, les résumés vétérinaires et les listes de contrôle de voyage, prêts quand vous en avez besoin.",
      },
    ],
    unlockCtaPrimary: "Voir DoggMatch+",
    unlockCtaSecondary: "Ajouter votre chien — c'est gratuit",
    unlockNote:
      "Aucune pression, et rien ici ne vous engage. La version gratuite reste vraiment utile en soi — Plus est simplement là quand la vie quotidienne devient chargée.",

    backToResults: "Retour à mes correspondances",
  },
  nl: {
    eyebrow: "Mijn Hond · een kijkje achter de schermen",
    title: "Zo kan het dagelijks leven met jouw hond eruitzien",
    intro:
      "Voordat je je eigen hond toevoegt, neem een kijkje in een echt voorbeeld. Dit is Luna — een volwassen hond, 18 kg, matig actief. Alles hieronder werkt precies zoals de app, maar dan met haar gegevens in plaats van die van jou.",
    sampleNote: "Voorbeeldhond: Luna · volwassen · 18 kg · twee maaltijden per dag",

    todayTitle: "Vandaag",
    todayIntro:
      "Een korte dagelijkse routine, opgebouwd rondom je hond. Niets hoeft perfect te zijn — vink af wat je hebt gedaan en het reset morgen weer. Ga je gang, probeer er eentje af te vinken.",
    todayHint:
      "In de preview wordt niets opgeslagen — zodra je hond is toegevoegd, onthouden de dagen zichzelf.",
    routineItems: [
      { id: "fresh-water", label: "Vers water", hint: "Schone bak, bijgevuld", done: true },
      {
        id: "measured-meals",
        label: "Afwegen van maaltijden",
        hint: "Afwegen, niet gokken",
        done: true,
      },
      { id: "walk", label: "Een goede wandeling", hint: "Met tijd om te snuffelen", done: false },
      { id: "play", label: "Een beetje spelen", hint: "Tien minuten telt", done: false },
      { id: "teeth", label: "Tanden", hint: "Zelfs dertig seconden helpt", done: false },
      { id: "paw-check", label: "Poten controleren", hint: "Na de wandeling", done: false },
    ],

    weekTitle: "Eén wekelijks ritme",
    weekIntro:
      "Elke hond krijgt een week die bij hem past — wandelingen, training, voeding en verzorging verstandig verspreid, zodat niets op één dag ophoopt. Hier is die van Luna.",
    weekDays: [
      { day: "Ma", focus: "Normale wandeling · snelle borstelbeurt" },
      { day: "Di", focus: "Training: rustig op een kleedje" },
      { day: "Wo", focus: "Langere wandeling · tanden" },
      { day: "Do", focus: "Training: spelletjes voor terugroepen" },
      { day: "Vr", focus: "Normale wandeling · poten controleren" },
      { day: "Za", focus: "Avontuurlijke wandeling ergens nieuws" },
      { day: "Zo", focus: "Rustige dag · wegen" },
    ],

    lessonTitle: "Eén trainingsles, zoals die er echt uitziet",
    lessonName: "Rustig op een kleedje",
    lessonMeta: "5 minuten · beginner · binnen",
    lessonIntro:
      "Elke les is kort genoeg om te doen voor het eten. Deze leert je hond om rustig op zijn kleedje te ontspannen — handig voor cafés, bezoekers en drukke avonden.",
    lessonSteps: [
      "Leg het kleedje op de grond en leg er een snoepje op. Zeg niets.",
      "Als alle vier de poten op het kleedje staan, leg je nog een snoepje tussen hun poten.",
      "Wacht tot ze gaan liggen, leg dan rustig een paar snoepjes op het kleedje, één voor één.",
      "Na een minuut, maak je ze vrolijk los en haal je het kleedje weg. Klaar voor vandaag.",
    ],
    lessonTimer:
      "Een ingebouwde timer houdt de sessie eerlijk — korte sessies, vaak, zijn beter dan lange.",
    lessonCta: "Bekijk de trainingslessen",

    foodTitle: "Een echte portie voer, voor haar berekend",
    foodIntro:
      "Porties komen voort uit haar gewicht, leeftijd, activiteit en de energie van het voer — geen gok op de achterkant van een zak. Hier is Luna's dag in cijfers.",
    foodDailyKcal: "Dagelijkse energie",
    foodGramsDay: "Voer per dag",
    foodGramsMeal: "Per maaltijd · 2 maaltijden",
    foodTreats: "Snoepjesbudget",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "Dezelfde berekening geldt voor jouw hond zodra je ons hun gewicht en voer vertelt. Als ze aankomen of afvallen, past de portie zich aan.",

    unlockTitle: "Wat opent DoggMatch+?",
    unlockIntro:
      "Alles hierboven werkt gratis met je eigen hond. DoggMatch+ is voor mensen die het hele dagelijkse plaatje willen, dat voor hen bewaard wordt.",
    unlockItems: [
      {
        title: "Opgeslagen dagen en weken",
        body: "Je routine, weekritme en voortgang onthouden — op telefoon en computer.",
      },
      {
        title: "Gewichts- en gezondheidsdossiers",
        body: "Wegingen, dierenartsnotities en een zorgkalender die je herinnert voordat dingen misgaan.",
      },
      {
        title: "Volledige trainingsbibliotheek",
        body: "Elke les en gedragsprogramma, met voortgang die je hond volgt.",
      },
      {
        title: "Reisdocumenten en printen",
        body: "Het printbare Hondendossier, dierenarts-samenvattingen en reischecklists, klaar wanneer je ze nodig hebt.",
      },
    ],
    unlockCtaPrimary: "Bekijk DoggMatch+",
    unlockCtaSecondary: "Voeg je hond toe — het is gratis",
    unlockNote:
      "Geen druk, en niets hier dwingt je. De gratis versie blijft op zichzelf echt nuttig — Plus is er gewoon wanneer het dagelijks leven druk wordt.",

    backToResults: "Terug naar mijn matches",
  },
} as const;

function MyDogPreview() {
  const c = useCopy(copy);
  const [ticked, setTicked] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(c.routineItems.map((r) => [r.id, r.done])),
  );

  const portions = estimatePortions(18, "adult", {
    neutered: true,
    activity: "moderate",
    foodEnergy: 360,
    mealsPerDay: 2,
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="display-lg mt-5 max-w-2xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">
        <PawPrint className="h-4 w-4 text-accent" aria-hidden="true" />
        {c.sampleNote}
      </p>

      {/* Today */}
      <div className="mt-14">
        <Panel title={c.todayTitle}>
          <p className="mb-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {c.todayIntro}
          </p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {c.routineItems.map((item) => (
              <li key={item.id}>
                <RoutineRow
                  label={item.label}
                  hint={item.hint}
                  done={ticked[item.id] ?? false}
                  onToggle={() => setTicked((s) => ({ ...s, [item.id]: !s[item.id] }))}
                />
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">{c.todayHint}</p>
        </Panel>
      </div>

      {/* Weekly rhythm */}
      <div className="mt-6">
        <Panel title={c.weekTitle}>
          <p className="mb-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {c.weekIntro}
          </p>
          <ol className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {c.weekDays.map((d) => (
              <li
                key={d.day}
                className="rounded-[1.15rem] border border-border bg-surface px-5 py-4"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-accent">{d.day}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-snug">{d.focus}</p>
              </li>
            ))}
          </ol>
        </Panel>
      </div>

      {/* Sample lesson */}
      <div className="mt-6">
        <Panel title={c.lessonTitle}>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-lg tracking-tight">{c.lessonName}</h3>
            <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {c.lessonMeta}
            </p>
          </div>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {c.lessonIntro}
          </p>
          <ol className="mt-5 space-y-3">
            {c.lessonSteps.map((step, i) => (
              <li key={i} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm tabular-nums text-accent"
                >
                  {i + 1}
                </span>
                <p className="pt-0.5 text-[0.9375rem] leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm text-muted-foreground">{c.lessonTimer}</p>
          <div className="mt-6">
            <ButtonLink to={withLangPrefix("/train")} tone="outline">
              {c.lessonCta}
              <Arrow />
            </ButtonLink>
          </div>
        </Panel>
      </div>

      {/* Food portion example */}
      <div className="mt-6">
        <Panel title={c.foodTitle}>
          <p className="mb-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {c.foodIntro}
          </p>
          {portions && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Stat label={c.foodDailyKcal} value={`${portions.dailyKcal} ${c.foodKcalUnit}`} />
              <Stat
                label={c.foodGramsDay}
                value={portions.gramsPerDay ? `${portions.gramsPerDay} ${c.foodGramsUnit}` : "—"}
              />
              <Stat
                label={c.foodGramsMeal}
                value={portions.gramsPerMeal ? `${portions.gramsPerMeal} ${c.foodGramsUnit}` : "—"}
              />
              <Stat label={c.foodTreats} value={`${portions.treatKcal} ${c.foodKcalUnit}`} />
            </div>
          )}
          <VetNote>{c.foodNote}</VetNote>
        </Panel>
      </div>

      {/* What Plus unlocks */}
      <div className="mt-14 rounded-[1.75rem] border border-border bg-surface p-8 md:p-12">
        <p className="eyebrow inline-flex items-center gap-2">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          DoggMatch+
        </p>
        <h2 className="display-md mt-4 max-w-xl">{c.unlockTitle}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{c.unlockIntro}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {c.unlockItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-border-strong"
            >
              <h3 className="font-display text-lg leading-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink to={withLangPrefix("/my-dog/setup")} size="lg">
            {c.unlockCtaSecondary}
            <Arrow />
          </ButtonLink>
          <ButtonLink to={withLangPrefix("/plus")} tone="outline" size="lg">
            {c.unlockCtaPrimary}
          </ButtonLink>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {c.unlockNote}
        </p>
      </div>
    </div>
  );
}
