import type { Locale } from "@/i18n/locale";

/**
 * Small localized fragments used to build <title> tags for page families whose
 * titles combine a data-driven name with a fixed phrase. Keeping them here means
 * a Dutch page never gets an English tail on its title.
 */
const all = <T,>(x: Record<Locale, T>) => x;

/** "[Food] — a straight answer" */
export const foodTitleSuffix = all({
  en: "a straight answer",
  no: "et ærlig svar",
  pl: "prosta odpowiedź",
  dk: "et ærligt svar",
  se: "ett ärligt svar",
  fi: "suora vastaus",
  de: "eine klare Antwort",
  fr: "une réponse claire",
  nl: "een eerlijk antwoord",
});

/** Breadcrumb name for the food index. */
export const foodCrumb = all({
  en: "Can dogs eat that?",
  no: "Kan hunder spise det?",
  pl: "Czy psy mogą to jeść?",
  dk: "Må hunde spise det?",
  se: "Får hundar äta det?",
  fi: "Voiko koira syödä sen?",
  de: "Dürfen Hunde das essen?",
  fr: "Un chien peut-il manger ça ?",
  nl: "Mogen honden dat eten?",
});

/** "[Topic] — My Dog" (care pages) */
export const careTitleSuffix = all({
  en: "My Dog",
  no: "Min hund",
  pl: "Mój pies",
  dk: "Min hund",
  se: "Min hund",
  fi: "Oma koirani",
  de: "Mein Hund",
  fr: "Mon chien",
  nl: "Mijn hond",
});

/** "[Lesson] — Train Your Dog" */
export const lessonTitleSuffix = all({
  en: "Train Your Dog",
  no: "Tren hunden din",
  pl: "Trenuj swojego psa",
  dk: "Træn din hund",
  se: "Träna din hund",
  fi: "Kouluta koiraasi",
  de: "Trainiere deinen Hund",
  fr: "Éduquez votre chien",
  nl: "Train je hond",
});

/** Breed page title tail: "[Breed] — temperament, daily life and costs | DoggMatch" */
export const breedTitleDescriptor = all({
  en: "temperament, daily life and costs",
  no: "vesen, hverdag og kostnader",
  pl: "charakter, codzienność i koszty",
  dk: "temperament, hverdag og udgifter",
  se: "temperament, vardag och kostnader",
  fi: "luonne, arki ja kustannukset",
  de: "Wesen, Alltag und Kosten",
  fr: "tempérament, quotidien et coûts",
  nl: "karakter, dagelijks leven en kosten",
});

/** /get-a-dog/breed/[breed] — title and description templates ({n} = breed name). */
export const getDogBreedSeo = all({
  en: {
    title: "Getting ready for a {n} — what to know before you commit",
    description:
      "What a {n} will actually ask of you: exercise, training, grooming, being alone, cost and the first weeks — drawn from their real traits, not a sales pitch.",
  },
  no: {
    title: "Klar for {n}? Dette bør du vite før du bestemmer deg",
    description:
      "Hva {n} faktisk krever av deg: mosjon, trening, pelsstell, tid alene, kostnader og de første ukene – bygget på rasens egenskaper, ikke på salgssnakk.",
  },
  pl: {
    title: "{n} – co warto wiedzieć, zanim się zdecydujesz",
    description:
      "Czego {n} naprawdę od ciebie oczekuje: ruch, szkolenie, pielęgnacja, samotność, koszty i pierwsze tygodnie – na podstawie prawdziwych cech rasy, a nie reklamy.",
  },
  dk: {
    title: "Klar til {n}? Det bør du vide, før du beslutter dig",
    description:
      "Hvad {n} reelt kræver af dig: motion, træning, pleje, tid alene, udgifter og de første uger – bygget på racens egenskaber, ikke på salgssnak.",
  },
  se: {
    title: "Redo för {n}? Det här bör du veta innan du bestämmer dig",
    description:
      "Vad {n} faktiskt kräver av dig: motion, träning, pälsvård, tid ensam, kostnader och de första veckorna – byggt på rasens egenskaper, inte på säljsnack.",
  },
  fi: {
    title: "{n} – mitä kannattaa tietää ennen päätöstä",
    description:
      "Mitä {n} todella vaatii sinulta: liikunta, koulutus, hoito, yksinolo, kulut ja ensimmäiset viikot – rodun todellisten ominaisuuksien pohjalta, ei myyntipuheena.",
  },
  de: {
    title: "{n}: Das solltest du wissen, bevor du dich entscheidest",
    description:
      "Was {n} wirklich von dir verlangt: Bewegung, Erziehung, Pflege, Alleinsein, Kosten und die ersten Wochen – aus den echten Eigenschaften der Rasse, kein Verkaufsgespräch.",
  },
  fr: {
    title: "{n} : ce qu'il faut savoir avant de s'engager",
    description:
      "Ce que {n} attend vraiment de vous : exercice, éducation, toilettage, temps seul, coût et premières semaines – à partir des vrais traits de la race, sans discours commercial.",
  },
  nl: {
    title: "{n}: wat je moet weten voordat je beslist",
    description:
      "Wat {n} echt van je vraagt: beweging, training, verzorging, alleen zijn, kosten en de eerste weken – gebaseerd op de echte eigenschappen van het ras, geen verkooppraatje.",
  },
});

/** Breadcrumb name for the lesson library. */
export const libraryCrumb = all({
  en: "Library",
  no: "Bibliotek",
  pl: "Biblioteka",
  dk: "Bibliotek",
  se: "Bibliotek",
  fi: "Kirjasto",
  de: "Bibliothek",
  fr: "Bibliothèque",
  nl: "Bibliotheek",
});
