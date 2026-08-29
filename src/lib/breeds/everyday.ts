import { pick } from "@/i18n";
import type { Breed, BreedTraits } from "@/data/breeds";

/**
 * What life with a dog actually looks like, derived from the same measurable
 * characteristics the matching engine uses. Nothing here is invented per breed:
 * every line follows deterministically from the trait values, so the breed
 * pages and the match result can never contradict each other.
 */

export interface EverydayFact {
  label: string;
  value: string;
  detail?: string;
}

const band = <T,>(value: number, low: T, mid: T, high: T): T =>
  value <= 2 ? low : value <= 3 ? mid : high;

/** Rough daily exercise, in minutes, as a range. */
export function exerciseMinutes(t: BreedTraits): [number, number] {
  const base = [20, 30, 45, 70, 100][Math.min(4, Math.max(0, Math.round(t.exerciseNeeds) - 1))]!;
  return [base, Math.round(base * 1.5)];
}

/** Weekly hands-on time: walks, training, coat care, play. */
export function weeklyHours(t: BreedTraits): [number, number] {
  const [lo, hi] = exerciseMinutes(t);
  const extras = (t.mentalStimulation + t.grooming) * 12;
  return [Math.round((lo * 7 + extras) / 60), Math.round((hi * 7 + extras * 1.4) / 60)];
}

export function groomingCadence(t: BreedTraits): string {
  if (t.grooming >= 4)
    return pick({
      en: "Brushing most days, plus a groomer every 6–8 weeks",
      no: "Børsting de fleste dager, og frisør hver 6.–8. uke",
    });
  if (t.grooming === 3)
    return pick({
      en: "A proper brush a couple of times a week",
      no: "En ordentlig børsting et par ganger i uka",
    });
  return pick({
    en: "A quick brush once a week is usually enough",
    no: "En rask børsting én gang i uka holder som regel",
  });
}

export function spaceNeeds(t: BreedTraits): string {
  if (t.apartmentSuitability >= 4)
    return pick({
      en: "Content in a flat, provided they get out often enough",
      no: "Trives i leilighet, så lenge den kommer nok ut",
    });
  if (t.apartmentSuitability === 3)
    return pick({
      en: "Manageable in a flat, easier with a garden or green space nearby",
      no: "Går fint i leilighet, enklere med hage eller grøntområde i nærheten",
    });
  return pick({
    en: "Really wants space — a garden and room to move suits them far better",
    no: "Trenger virkelig plass — hage og rom å bevege seg på passer den langt bedre",
  });
}

/** A plain description of a normal day, built from energy and stimulation needs. */
export function typicalDay(t: BreedTraits): string[] {
  const [lo, hi] = exerciseMinutes(t);
  const morning = pick({
    en: `A walk of ${Math.round(lo / 2)}–${Math.round(hi / 2)} minutes before the day starts properly.`,
    no: `En tur på ${Math.round(lo / 2)}–${Math.round(hi / 2)} minutter før dagen begynner for alvor.`,
  });
  const middle = band(
    t.aloneTolerance,
    pick({
      en: "Midday is the hard part — they'd rather not be left for long stretches, so most homes need a plan for it.",
      no: "Midt på dagen er det vanskeligste — den vil helst ikke være alene lenge, så de fleste hjem trenger en plan for det.",
    }),
    pick({
      en: "A few quiet hours alone are fine once they've had a proper morning.",
      no: "Noen rolige timer alene går fint når morgenen har vært ordentlig.",
    }),
    pick({
      en: "Happy to sleep through the middle of the day once the morning has been earned.",
      no: "Sover gjerne gjennom midten av dagen når morgenen er tjent inn.",
    }),
  );
  const mind = band(
    t.mentalStimulation,
    pick({
      en: "Not a dog that needs puzzles — company and routine matter more.",
      no: "Ikke en hund som trenger oppgaver — selskap og rutine betyr mer.",
    }),
    pick({
      en: "Ten minutes of training or a scent game keeps their head busy.",
      no: "Ti minutter trening eller et luktespill holder hodet i gang.",
    }),
    pick({
      en: "Needs something to think about every day. Without it, walks alone won't be enough.",
      no: "Trenger noe å tenke på hver dag. Uten det holder ikke turer alene.",
    }),
  );
  const evening = pick({
    en: `A longer outing later on — ${lo}–${hi} minutes across the day in total — then settling down with you.`,
    no: `En lengre tur senere — ${lo}–${hi} minutter til sammen gjennom dagen — og så ro sammen med deg.`,
  });
  return [morning, middle, mind, evening];
}

/** Who this dog genuinely suits, in the reader's own terms. */
export function bestSuitedFor(t: BreedTraits): string[] {
  const out: string[] = [];
  out.push(
    t.exerciseNeeds >= 4
      ? pick({ en: "People who are outdoors every day, whatever the weather", no: "Folk som er ute hver dag, uansett vær" })
      : t.exerciseNeeds <= 2
        ? pick({ en: "Quieter homes and shorter, gentler walks", no: "Roligere hjem og kortere, mildere turer" })
        : pick({ en: "An ordinary, active week — a decent walk morning and evening", no: "En vanlig, aktiv uke — en skikkelig tur morgen og kveld" }),
  );
  if (t.firstTimeSuitability >= 4)
    out.push(pick({ en: "First-time owners willing to put the early work in", no: "Førstegangseiere som er villige til å legge inn jobben tidlig" }));
  else if (t.firstTimeSuitability <= 2)
    out.push(pick({ en: "People who have lived with a dog before", no: "Folk som har hatt hund før" }));
  if (t.goodWithChildren >= 4)
    out.push(pick({ en: "Family homes with children around", no: "Familiehjem med barn rundt seg" }));
  if (t.apartmentSuitability >= 4)
    out.push(pick({ en: "Flats and town living", no: "Leilighet og byliv" }));
  if (t.independence >= 4)
    out.push(pick({ en: "Someone who likes a dog with its own opinions", no: "Noen som liker en hund med egne meninger" }));
  if (t.affection >= 5)
    out.push(pick({ en: "Anyone who wants a dog close by, most of the day", no: "Alle som vil ha hunden tett på, mesteparten av dagen" }));
  return out;
}

/** Honest things to weigh up, again derived from the traits themselves. */
export function thingsToConsider(t: BreedTraits): string[] {
  const out: string[] = [];
  if (t.shedding >= 4)
    out.push(pick({ en: "Sheds a great deal — hair becomes part of the household", no: "Feller mye — hår blir en del av husholdningen" }));
  if (t.grooming >= 4)
    out.push(pick({ en: "Coat care is ongoing and adds a real cost each year", no: "Pelsstell er kontinuerlig og koster reelt hvert år" }));
  if (t.barking >= 4)
    out.push(pick({ en: "Vocal by nature, which matters where neighbours are close", no: "Bjeffer av natur, noe som betyr mye der naboene er nære" }));
  if (t.aloneTolerance <= 2)
    out.push(pick({ en: "Finds long days alone genuinely hard", no: "Synes lange dager alene er reelt tungt" }));
  if (t.strengthRequired >= 4)
    out.push(pick({ en: "Strong on the lead until loose-lead work is solid", no: "Sterk i bånd inntil båndtreningen sitter" }));
  if (t.mentalStimulation >= 4)
    out.push(pick({ en: "Boredom shows up fast, usually as unwanted behaviour", no: "Kjedsomhet viser seg fort, som regel som uønsket atferd" }));
  if (t.heatTolerance <= 2)
    out.push(pick({ en: "Struggles in hot weather — summer walks need rethinking", no: "Sliter i varmt vær — sommerturer må planlegges annerledes" }));
  if (t.coldTolerance <= 2)
    out.push(pick({ en: "Feels the cold, so winter needs a coat and shorter outings", no: "Fryser lett, så vinteren krever dekken og kortere turer" }));
  return out;
}

/** Cost and time framing for the page — indicative, never a quote. */
export function commitmentFacts(breed: Breed): EverydayFact[] {
  const t = breed.traits;
  const [exLo, exHi] = exerciseMinutes(t);
  const [hLo, hHi] = weeklyHours(t);
  return [
    {
      label: pick({ en: "Exercise", no: "Mosjon" }),
      value: pick({ en: `${exLo}–${exHi} min a day`, no: `${exLo}–${exHi} min per dag` }),
    },
    {
      label: pick({ en: "Your time", no: "Din tid" }),
      value: pick({ en: `${hLo}–${hHi} hours a week`, no: `${hLo}–${hHi} timer i uka` }),
      detail: pick({
        en: "Walks, training, coat care and play together",
        no: "Turer, trening, pelsstell og lek til sammen",
      }),
    },
    {
      label: pick({ en: "Space", no: "Plass" }),
      value: spaceNeeds(t),
    },
    {
      label: pick({ en: "Coat care", no: "Pelsstell" }),
      value: groomingCadence(t),
    },
    {
      label: pick({ en: "Typical yearly cost", no: "Typisk årlig kostnad" }),
      value: `€${breed.annualCost[0]}–${breed.annualCost[1]}`,
      detail: pick({
        en: "Food, insurance, routine vet care and grooming. Illness and emergencies come on top.",
        no: "Fôr, forsikring, vanlig veterinærstell og pelsstell. Sykdom og akutte ting kommer i tillegg.",
      }),
    },
    {
      label: pick({ en: "Lifespan", no: "Levealder" }),
      value: pick({
        en: `${breed.lifespan[0]}–${breed.lifespan[1]} years`,
        no: `${breed.lifespan[0]}–${breed.lifespan[1]} år`,
      }),
      detail: pick({
        en: "The whole of that time is the commitment, not just the puppy year.",
        no: "Hele den tiden er forpliktelsen, ikke bare valpeåret.",
      }),
    },
  ];
}

/** Health framing that stays honest without pretending to be veterinary advice. */
export function healthNote(t: BreedTraits): string {
  const parts: string[] = [];
  if (t.size >= 4)
    parts.push(
      pick({
        en: "Larger dogs carry more joint wear and tend to have shorter lives.",
        no: "Større hunder får mer slitasje på ledd og lever gjerne kortere.",
      }),
    );
  if (t.heatTolerance <= 2)
    parts.push(
      pick({
        en: "Breathing and heat regulation deserve particular attention in this breed.",
        no: "Pust og varmeregulering fortjener særlig oppmerksomhet hos denne rasen.",
      }),
    );
  parts.push(
    pick({
      en: "Ask any breeder or rescue which health screening the parents have had, and speak to a vet before you commit.",
      no: "Spør enhver oppdretter eller omplasserer hvilke helseundersøkelser foreldrene har tatt, og snakk med en veterinær før du bestemmer deg.",
    }),
  );
  return parts.join(" ");
}
