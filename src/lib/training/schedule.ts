/**
 * Deterministic training plans and progress maths.
 *
 * Nothing here calls a model or an API. The same dog, the same progress and
 * the same date always produce exactly the same week, and every number can be
 * traced back to a rule you can read below.
 */
import { pick, type Locale } from "@/i18n";
import type { CategoryId, Lesson, SkillStatus } from "@/data/training/types";
import { rankLessons, type ScoredLesson } from "./plan";
import type { DogProfile, SessionRecord } from "./store";

export type SizeBand = "small" | "medium" | "large";

/* ------------------------------------------------------- session lengths */

/** How long a single session should realistically last for this dog. */
export function sessionMinutes(lesson: Lesson, dog: DogProfile | undefined): number {
  const base = lesson.duration;
  if (!dog) return base;
  const byAge = { puppy: 0.6, adolescent: 0.9, adult: 1, senior: 0.75 }[dog.ageStage] ?? 1;
  const size = dog.sizeBand ?? "medium";
  const bySize = size === "small" ? 0.9 : size === "large" ? 1.1 : 1;
  return Math.max(2, Math.round(base * byAge * bySize));
}

/** What we'd suggest per day if there were no time pressure at all. */
export function suggestedDailyMinutes(dog: DogProfile | undefined): number {
  if (!dog) return 15;
  const byAge = { puppy: 12, adolescent: 25, adult: 20, senior: 10 }[dog.ageStage] ?? 15;
  const size = dog.sizeBand ?? "medium";
  const bySize = size === "large" ? 4 : size === "small" ? -2 : 0;
  return Math.max(8, byAge + bySize);
}

/** The budget we actually plan against: never more time than the owner has. */
export function dailyBudget(dog: DogProfile | undefined): number {
  const suggested = suggestedDailyMinutes(dog);
  const available = dog?.minutesPerDay;
  return available ? Math.min(available, suggested) : suggested;
}

/* ------------------------------------------------------------ the week */

export interface PlannedSession extends ScoredLesson {
  minutes: number;
}

export interface PlannedDay {
  /** ISO date, day precision. */
  day: string;
  /** Short weekday label in the reader's language. */
  label: string;
  sessions: PlannedSession[];
  minutes: number;
  /** A deliberately lighter day — rest matters as much as repetition. */
  easy: boolean;
  done: boolean;
}

const WEEKDAY_LABELS = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  no: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
  pl: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "Sb"],
  dk: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
  se: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
  fi: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
  de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
  nl: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
} as const;

function addDays(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

function weekdayLabel(iso: string): string {
  const labels = pick<readonly string[]>(WEEKDAY_LABELS);
  const index = new Date(`${iso}T00:00:00Z`).getUTCDay();
  return labels[index] ?? "";
}

function dayNumber(iso: string): number {
  return iso.split("-").reduce((sum, part) => sum + Number(part), 0);
}

/**
 * Seven days starting today. Sessions are drawn from the ranked pool and
 * rotated day by day so nothing gets hammered, and each day stops as soon as
 * the time budget is used up.
 */
export function weeklyPlan(
  dog: DogProfile | undefined,
  progress: Record<string, SkillStatus>,
  sessions: SessionRecord[],
  startDay: string,
): PlannedDay[] {
  const ranked = rankLessons(dog, progress);
  const pool = ranked.slice(0, 8);
  const budget = dailyBudget(dog);
  const doneDays = new Set(sessions.map((s) => s.day));

  return Array.from({ length: 7 }, (_, i) => {
    const day = addDays(startDay, i);
    const easy = i === 6;
    const picks: PlannedSession[] = [];
    let minutes = 0;

    if (pool.length > 0) {
      const offset = (dayNumber(day) * 2) % pool.length;
      const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];
      const cap = easy ? Math.max(5, Math.round(budget * 0.5)) : budget;
      for (const item of rotated) {
        const m = sessionMinutes(item.lesson, dog);
        if (minutes + m > cap && picks.length > 0) continue;
        picks.push({ ...item, minutes: m });
        minutes += m;
        if (minutes >= cap || picks.length >= (easy ? 1 : 3)) break;
      }
    }

    return { day, label: weekdayLabel(day), sessions: picks, minutes, easy, done: doneDays.has(day) };
  });
}

/* -------------------------------------------------- why this one matters */

const WHY_BY_CATEGORY: Record<CategoryId, Record<Locale, string>> = {
  "puppy-foundations": {
    en: "The early weeks shape how safe your dog feels later. Small, kind repetitions now save you a lot of worry in a year's time.",
    no: "De første ukene former hvor trygg hunden føler seg senere. Små, vennlige gjentakelser nå sparer deg for mye bekymring om et år.",
    pl: "Pierwsze tygodnie kształtują to, jak bezpiecznie pies czuje się później. Drobne, łagodne powtórki teraz oszczędzą wam wielu zmartwień za rok.",
    dk: "De første uger former, hvor tryg din hund føler sig senere. Små, venlige gentagelser nu sparer dig for mange bekymringer om et år.",
    se: "De första veckorna formar hur trygg din hund känner sig senare. Små, vänliga upprepningar nu sparar dig mycket oro om ett år.",
    fi: "Ensimmäiset viikot muovaavat sitä, kuinka turvalliseksi koirasi myöhemmin olonsa tuntee. Pienet, lempeät toistot nyt säästävät sinut monelta huolelta vuoden päästä.",
    de: "Die ersten Wochen prägen, wie sicher sich dein Hund später fühlt. Kleine, freundliche Wiederholungen jetzt ersparen dir in einem Jahr viele Sorgen.",
    fr: "Les premières semaines façonnent la confiance de votre chien pour la suite. De petites répétitions bienveillantes aujourd’hui vous épargnent bien des soucis dans un an.",
    nl: "De eerste weken bepalen hoe veilig je hond zich later voelt. Kleine, vriendelijke herhalingen nu besparen je over een jaar veel zorgen.",
  },
  "everyday-manners": {
    en: "This is the stuff you use every single day — doorways, guests, mealtimes. It quietly makes life together easier.",
    no: "Dette bruker dere hver eneste dag — døråpninger, gjester, måltider. Det gjør hverdagen sammen enklere, helt stille.",
    pl: "To rzeczy, których używacie codziennie — drzwi, goście, posiłki. Po cichu ułatwiają wspólne życie.",
    dk: "Det her bruger I hver eneste dag — døråbninger, gæster, måltider. Det gør stille og roligt livet sammen lettere.",
    se: "Det här använder ni varenda dag — dörröppningar, gäster, måltider. Det gör i all tysthet livet tillsammans enklare.",
    fi: "Näitä käytätte joka ikinen päivä — ovilla, vieraiden tullessa, ruoka-aikaan. Ne helpottavat yhteistä arkea huomaamatta.",
    de: "Das braucht ihr jeden Tag — an der Tür, bei Besuch, zu den Mahlzeiten. Es macht das Zusammenleben ganz leise leichter.",
    fr: "Ce sont les choses que vous utilisez chaque jour — la porte, les invités, les repas. Elles facilitent la vie commune en toute discrétion.",
    nl: "Dit gebruik je elke dag — bij de deur, met gasten, bij het eten. Het maakt samenleven ongemerkt makkelijker.",
  },
  walking: {
    en: "Walks are most of your week. A dog who can walk calmly gets taken more places — and sees more of the world.",
    no: "Turer er det meste av uken deres. En hund som går rolig blir med flere steder — og ser mer av verden.",
    pl: "Spacery to większość waszego tygodnia. Pies, który idzie spokojnie, trafia w więcej miejsc — i widzi więcej świata.",
    dk: "Gåture fylder det meste af jeres uge. En hund, der går roligt, kommer med flere steder hen — og ser mere af verden.",
    se: "Promenader är det mesta av er vecka. En hund som går lugnt får följa med på fler ställen — och ser mer av världen.",
    fi: "Lenkit ovat suurin osa viikkoanne. Rauhallisesti kulkeva koira pääsee mukaan useampiin paikkoihin — ja näkee enemmän maailmaa.",
    de: "Spaziergänge sind der größte Teil eurer Woche. Ein Hund, der ruhig mitgeht, darf öfter mit — und sieht mehr von der Welt.",
    fr: "Les promenades occupent l’essentiel de votre semaine. Un chien qui marche calmement vous suit partout — et découvre davantage le monde.",
    nl: "Wandelingen zijn het grootste deel van jullie week. Een hond die rustig loopt, mag vaker mee — en ziet meer van de wereld.",
  },
  home: {
    en: "A dog who can settle at home is a dog who can relax anywhere. Calm is a skill, and it can be practised.",
    no: "En hund som kan slappe av hjemme, kan slappe av hvor som helst. Ro er en ferdighet, og den kan øves opp.",
    pl: "Pies, który potrafi się wyciszyć w domu, wyciszy się wszędzie. Spokój to umiejętność, którą można ćwiczyć.",
    dk: "En hund, der kan slappe af derhjemme, kan slappe af alle steder. Ro er en færdighed, og den kan øves.",
    se: "En hund som kan slappna av hemma kan slappna av överallt. Lugn är en färdighet, och den går att öva.",
    fi: "Koira, joka osaa rauhoittua kotona, osaa rauhoittua missä vain. Rauhallisuus on taito, ja sitä voi harjoitella.",
    de: "Ein Hund, der zu Hause zur Ruhe kommt, kann überall entspannen. Ruhe ist eine Fähigkeit, und sie lässt sich üben.",
    fr: "Un chien qui sait se poser à la maison sait se détendre partout. Le calme est une compétence, et elle s’entraîne.",
    nl: "Een hond die thuis tot rust komt, kan overal ontspannen. Rust is een vaardigheid, en die kun je oefenen.",
  },
  socialisation: {
    en: "Good experiences with people, dogs and noise build a dog who copes instead of reacting. This is prevention, not repair.",
    no: "Gode opplevelser med folk, hunder og lyder bygger en hund som takler i stedet for å reagere. Dette er forebygging, ikke reparasjon.",
    pl: "Dobre doświadczenia z ludźmi, psami i hałasem budują psa, który sobie radzi, zamiast reagować. To profilaktyka, nie naprawa.",
    dk: "Gode oplevelser med mennesker, hunde og lyde bygger en hund, der klarer sig i stedet for at reagere. Det er forebyggelse, ikke reparation.",
    se: "Bra upplevelser med människor, hundar och ljud bygger en hund som klarar sig i stället för att reagera. Det här är förebyggande, inte lagning.",
    fi: "Hyvät kokemukset ihmisistä, koirista ja äänistä kasvattavat koiran, joka pärjää sen sijaan, että reagoisi. Tämä on ennaltaehkäisyä, ei korjaamista.",
    de: "Gute Erfahrungen mit Menschen, Hunden und Geräuschen formen einen Hund, der gelassen bleibt, statt zu reagieren. Das ist Vorbeugung, keine Reparatur.",
    fr: "De bonnes expériences avec les gens, les chiens et les bruits forment un chien qui gère au lieu de réagir. C’est de la prévention, pas de la réparation.",
    nl: "Goede ervaringen met mensen, honden en geluiden vormen een hond die het aankan in plaats van te reageren. Dit is voorkomen, niet repareren.",
  },
  "recall-safety": {
    en: "This is the one that keeps your dog safe. Every rep you do in the garden is credit in the bank for the day it really counts.",
    no: "Dette er den som holder hunden din trygg. Hver repetisjon i hagen er penger i banken den dagen det virkelig gjelder.",
    pl: "To właśnie ta umiejętność chroni psa. Każde powtórzenie w ogrodzie to oszczędność na dzień, w którym naprawdę się liczy.",
    dk: "Det her er den, der holder din hund sikker. Hver gentagelse i haven er penge i banken til den dag, det virkelig gælder.",
    se: "Det här är den som håller din hund trygg. Varje repetition i trädgården är pengar på banken inför dagen då det verkligen gäller.",
    fi: "Tämä pitää koirasi turvassa. Jokainen toisto pihalla on säästöä sitä päivää varten, jolloin sillä on todella väliä.",
    de: "Das ist die Übung, die deinen Hund schützt. Jede Wiederholung im Garten ist ein Guthaben für den Tag, an dem es wirklich darauf ankommt.",
    fr: "C’est ce qui garde votre chien en sécurité. Chaque répétition au jardin est une réserve pour le jour où cela comptera vraiment.",
    nl: "Dit is degene die je hond veilig houdt. Elke herhaling in de tuin is geld op de bank voor de dag dat het er echt toe doet.",
  },
  "tricks-games": {
    en: "Tricks aren't showing off — they teach your dog how to learn, and they're a fine way to spend five happy minutes together.",
    no: "Triks handler ikke om å vise seg fram — de lærer hunden å lære, og er en fin måte å bruke fem gode minutter sammen.",
    pl: "Sztuczki to nie popisy — uczą psa, jak się uczyć, i to miły sposób na pięć wspólnych, radosnych minut.",
    dk: "Tricks handler ikke om at vise sig — de lærer din hund at lære, og de er en dejlig måde at bruge fem glade minutter sammen på.",
    se: "Trick handlar inte om att visa upp sig — de lär din hund att lära sig, och de är ett fint sätt att dela fem glada minuter.",
    fi: "Temput eivät ole esittämistä — ne opettavat koiraasi oppimaan, ja ne ovat mukava tapa viettää viisi iloista minuuttia yhdessä.",
    de: "Tricks sind keine Angeberei — sie bringen deinem Hund das Lernen bei und sind eine schöne Art, fünf fröhliche Minuten zusammen zu verbringen.",
    fr: "Les tours ne sont pas de l’esbroufe — ils apprennent à votre chien à apprendre, et c’est une jolie façon de partager cinq minutes joyeuses.",
    nl: "Trucjes zijn geen show — ze leren je hond hoe hij moet leren, en het is een fijne manier om samen vijf vrolijke minuten door te brengen.",
  },
  "mental-stimulation": {
    en: "Ten minutes of thinking tires a dog more kindly than an hour of running, and it helps on days when a long walk isn't possible.",
    no: "Ti minutter med tenking sliter ut en hund mer skånsomt enn en time med løping, og hjelper på dager der lang tur ikke går.",
    pl: "Dziesięć minut myślenia męczy psa łagodniej niż godzina biegania i ratuje dni, gdy długi spacer nie wchodzi w grę.",
    dk: "Ti minutters tænkearbejde trætter en hund mere skånsomt end en times løb, og det hjælper på dage, hvor en lang tur ikke kan lade sig gøre.",
    se: "Tio minuters tänkande tröttar en hund mer skonsamt än en timmes springande, och det hjälper de dagar då en lång promenad inte går.",
    fi: "Kymmenen minuuttia aivotyötä väsyttää koiran lempeämmin kuin tunnin juoksu, ja se auttaa päivinä, joina pitkä lenkki ei onnistu.",
    de: "Zehn Minuten Kopfarbeit machen einen Hund sanfter müde als eine Stunde Rennen und helfen an Tagen, an denen kein langer Spaziergang drin ist.",
    fr: "Dix minutes de réflexion fatiguent un chien plus en douceur qu’une heure de course, et cela aide les jours où une longue balade est impossible.",
    nl: "Tien minuten denkwerk maakt een hond vriendelijker moe dan een uur rennen, en het helpt op dagen dat een lange wandeling er niet in zit.",
  },
};

/** A short, plain-language answer to "why are we doing this?". */
export function whyItMatters(lesson: Lesson): string {
  return pick(WHY_BY_CATEGORY[lesson.category] ?? WHY_BY_CATEGORY["everyday-manners"]);
}

/* ------------------------------------------------------------- progress */

export interface ProgressSummary {
  sessions: number;
  sessionsThisWeek: number;
  learned: number;
  practising: number;
  total: number;
  streak: number;
  bestStreak: number;
  /** Last 7 days, oldest first: did you train that day? */
  week: { day: string; label: string; done: boolean; today: boolean }[];
}

export function progressSummary(
  sessions: SessionRecord[],
  progress: Record<string, SkillStatus>,
  totalLessons: number,
  todayIso: string,
): ProgressSummary {
  const days = new Set(sessions.map((s) => s.day));

  let streak = 0;
  for (let i = 0; ; i += 1) {
    if (!days.has(addDays(todayIso, -i))) {
      // Today not being done yet shouldn't wipe yesterday's streak.
      if (i === 0) continue;
      break;
    }
    streak += 1;
  }

  const sorted = [...days].sort();
  let bestStreak = 0;
  let run = 0;
  let previous = "";
  for (const day of sorted) {
    run = previous && addDays(previous, 1) === day ? run + 1 : 1;
    previous = day;
    if (run > bestStreak) bestStreak = run;
  }

  const week = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(todayIso, i - 6);
    return { day, label: weekdayLabel(day), done: days.has(day), today: day === todayIso };
  });

  const statuses = Object.values(progress);
  return {
    sessions: sessions.length,
    sessionsThisWeek: week.filter((d) => d.done).length,
    learned: statuses.filter((s) => s === "learned").length,
    practising: statuses.filter((s) => s === "practising" || s === "getting-there").length,
    total: totalLessons,
    streak,
    bestStreak,
    week,
  };
}

/**
 * An honest, warm line about where you are. Never congratulates you for
 * nothing, never scolds you for a quiet week.
 */
export function encouragement(summary: ProgressSummary): string {
  const c = pick({
    en: {
      none: "Nothing logged yet — that's fine. One five-minute session today is a real start.",
      first: "One session in. That's genuinely how every trained dog started.",
      quiet: "It's been a quiet few days. Pick the shortest lesson and do it once — that's enough to be back.",
      building: (n: number) => `${n} days in a row. Short and regular beats long and rare, every time.`,
      steady: (n: number) => `${n} sessions together so far. You're building a habit, not chasing a finish line.`,
    },
    no: {
      none: "Ingenting logget ennå — helt greit. Én økt på fem minutter i dag er en ekte start.",
      first: "Én økt inne. Slik startet faktisk hver eneste godt trente hund.",
      quiet: "Det har vært stille noen dager. Velg den korteste leksjonen og gjør den én gang — det holder for å være i gang igjen.",
      building: (n: number) => `${n} dager på rad. Kort og jevnlig slår langt og sjeldent, hver gang.`,
      steady: (n: number) => `${n} økter sammen så langt. Dere bygger en vane, ikke jager en målstrek.`,
    },
    pl: {
      none: "Nic jeszcze nie zapisano — i dobrze. Jedna pięciominutowa sesja dziś to prawdziwy początek.",
      first: "Pierwsza sesja za wami. Tak właśnie zaczynał każdy dobrze ułożony pies.",
      quiet: "Ostatnie dni były spokojne. Wybierz najkrótszą lekcję i zrób ją raz — to wystarczy, by wrócić.",
      building: (n: number) => `${n} dni z rzędu. Krótko i regularnie wygrywa z długo i rzadko, za każdym razem.`,
      steady: (n: number) => `${n} wspólnych sesji. Budujecie nawyk, a nie gonicie metę.`,
    },
    dk: {
      none: "Intet logget endnu — helt i orden. Én træning på fem minutter i dag er en ægte start.",
      first: "Én træning er klaret. Sådan startede hver eneste veltrænede hund faktisk.",
      quiet: "Det har været stille et par dage. Vælg den korteste lektion og lav den én gang — så er I i gang igen.",
      building: (n: number) => `${n} dage i træk. Kort og jævnligt slår langt og sjældent, hver gang.`,
      steady: (n: number) => `${n} træninger sammen indtil nu. I bygger en vane, I jagter ikke en målstreg.`,
    },
    se: {
      none: "Inget loggat än — helt okej. Ett pass på fem minuter i dag är en riktig start.",
      first: "Ett pass avklarat. Precis så började varje vältränad hund.",
      quiet: "Det har varit lugnt några dagar. Välj den kortaste lektionen och gör den en gång — det räcker för att vara igång igen.",
      building: (n: number) => `${n} dagar i rad. Kort och ofta slår långt och sällan, varje gång.`,
      steady: (n: number) => `${n} pass tillsammans hittills. Ni bygger en vana, ni jagar ingen mållinje.`,
    },
    fi: {
      none: "Mitään ei ole vielä kirjattu — ei haittaa. Yksi viiden minuutin harjoitus tänään on oikea alku.",
      first: "Yksi harjoitus tehty. Juuri näin jokainen hyvin koulutettu koira on aloittanut.",
      quiet: "Muutama päivä on mennyt hiljaisesti. Valitse lyhin oppitunti ja tee se kerran — se riittää paluuseen.",
      building: (n: number) => `${n} päivää putkeen. Lyhyesti ja säännöllisesti voittaa pitkän ja harvoin, joka kerta.`,
      steady: (n: number) => `${n} yhteistä harjoitusta tähän mennessä. Rakennatte tapaa, ette jahtaa maaliviivaa.`,
    },
    de: {
      none: "Noch nichts eingetragen — völlig in Ordnung. Eine Übungseinheit von fünf Minuten heute ist ein echter Anfang.",
      first: "Die erste Einheit ist geschafft. Genau so hat jeder gut erzogene Hund angefangen.",
      quiet: "Die letzten Tage waren ruhig. Nimm die kürzeste Lektion und mach sie einmal — das reicht, um wieder dabei zu sein.",
      building: (n: number) => `${n} Tage am Stück. Kurz und regelmäßig schlägt lang und selten, jedes Mal.`,
      steady: (n: number) => `${n} gemeinsame Einheiten bisher. Ihr baut eine Gewohnheit auf, statt einer Ziellinie hinterherzujagen.`,
    },
    fr: {
      none: "Rien d’enregistré pour l’instant — c’est très bien. Une séance de cinq minutes aujourd’hui, c’est un vrai début.",
      first: "Une séance de faite. C’est exactement ainsi qu’a commencé chaque chien bien éduqué.",
      quiet: "Ces derniers jours ont été calmes. Choisissez la leçon la plus courte et faites-la une fois — cela suffit pour reprendre.",
      building: (n: number) => `${n} jours d’affilée. Court et régulier bat long et rare, à chaque fois.`,
      steady: (n: number) => `${n} séances ensemble jusqu’ici. Vous construisez une habitude, pas une course vers la ligne d’arrivée.`,
    },
    nl: {
      none: "Nog niets gelogd — helemaal prima. Eén sessie van vijf minuten vandaag is een echt begin.",
      first: "Eén sessie gedaan. Zo is elke goed getrainde hond begonnen.",
      quiet: "Het was een paar dagen rustig. Kies de kortste les en doe hem één keer — dat is genoeg om weer bezig te zijn.",
      building: (n: number) => `${n} dagen op rij. Kort en regelmatig wint het van lang en zelden, elke keer.`,
      steady: (n: number) => `${n} sessies samen tot nu toe. Jullie bouwen een gewoonte op, geen race naar de finish.`,
    },
  });

  if (summary.sessions === 0) return c.none;
  if (summary.sessions === 1) return c.first;
  if (summary.streak >= 2) return c.building(summary.streak);
  if (summary.sessionsThisWeek === 0) return c.quiet;
  return c.steady(summary.sessions);
}
