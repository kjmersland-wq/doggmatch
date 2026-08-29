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
      pl: "Szczotkowanie niemal codziennie oraz wizyta u groomera co 6–8 tygodni",
    });
  if (t.grooming === 3)
    return pick({
      en: "A proper brush a couple of times a week",
      no: "En ordentlig børsting et par ganger i uka",
      pl: "Porządne szczotkowanie kilka razy w tygodniu",
    });
  return pick({
    en: "A quick brush once a week is usually enough",
    no: "En rask børsting én gang i uka holder som regel",
    pl: "Szybkie szczotkowanie raz w tygodniu zwykle wystarcza",
  });
}

export function spaceNeeds(t: BreedTraits): string {
  if (t.apartmentSuitability >= 4)
    return pick({
      en: "Content in a flat, provided they get out often enough",
      no: "Trives i leilighet, så lenge den kommer nok ut",
      pl: "Dobrze się czuje w mieszkaniu, o ile wystarczająco często wychodzi",
    });
  if (t.apartmentSuitability === 3)
    return pick({
      en: "Manageable in a flat, easier with a garden or green space nearby",
      no: "Går fint i leilighet, enklere med hage eller grøntområde i nærheten",
      pl: "Radzi sobie w mieszkaniu, choć łatwiej z ogrodem lub zielenią w pobliżu",
    });
  return pick({
    en: "Really wants space — a garden and room to move suits them far better",
    no: "Trenger virkelig plass — hage og rom å bevege seg på passer den langt bedre",
    pl: "Naprawdę potrzebuje przestrzeni — ogród i miejsce do ruchu pasują mu o wiele lepiej",
  });
}

/** A plain description of a normal day, built from energy and stimulation needs. */
export function typicalDay(t: BreedTraits): string[] {
  const [lo, hi] = exerciseMinutes(t);
  const morning = pick({
    en: `A walk of ${Math.round(lo / 2)}–${Math.round(hi / 2)} minutes before the day starts properly.`,
    no: `En tur på ${Math.round(lo / 2)}–${Math.round(hi / 2)} minutter før dagen begynner for alvor.`,
    pl: `Spacer trwający ${Math.round(lo / 2)}–${Math.round(hi / 2)} minut, zanim dzień na dobre się zacznie.`,
  });
  const middle = band(
    t.aloneTolerance,
    pick({
      en: "Midday is the hard part — they'd rather not be left for long stretches, so most homes need a plan for it.",
      no: "Midt på dagen er det vanskeligste — den vil helst ikke være alene lenge, så de fleste hjem trenger en plan for det.",
      pl: "Środek dnia jest najtrudniejszy — wolałby nie zostawać sam na długo, więc większość domów potrzebuje na to planu.",
    }),
    pick({
      en: "A few quiet hours alone are fine once they've had a proper morning.",
      no: "Noen rolige timer alene går fint når morgenen har vært ordentlig.",
      pl: "Kilka spokojnych godzin w samotności to nic złego, gdy poranek był porządny.",
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
      pl: "To nie pies, który potrzebuje zagadek — bardziej liczy się towarzystwo i rutyna.",
    }),
    pick({
      en: "Ten minutes of training or a scent game keeps their head busy.",
      no: "Ti minutter trening eller et luktespill holder hodet i gang.",
      pl: "Dziesięć minut treningu albo zabawa węchowa utrzymuje umysł w ruchu.",
    }),
    pick({
      en: "Needs something to think about every day. Without it, walks alone won't be enough.",
      no: "Trenger noe å tenke på hver dag. Uten det holder ikke turer alene.",
    }),
  );
  const evening = pick({
    en: `A longer outing later on — ${lo}–${hi} minutes across the day in total — then settling down with you.`,
    no: `En lengre tur senere — ${lo}–${hi} minutter til sammen gjennom dagen — og så ro sammen med deg.`,
    pl: `Dłuższe wyjście później — łącznie ${lo}–${hi} minut w ciągu dnia — a potem odpoczynek razem z tobą.`,
  });
  return [morning, middle, mind, evening];
}

/** Who this dog genuinely suits, in the reader's own terms. */
export function bestSuitedFor(t: BreedTraits): string[] {
  const out: string[] = [];
  out.push(
    t.exerciseNeeds >= 4
      ? pick({ en: "People who are outdoors every day, whatever the weather", no: "Folk som er ute hver dag, uansett vær", pl: "Osoby, które są na zewnątrz codziennie, bez względu na pogodę" })
      : t.exerciseNeeds <= 2
        ? pick({ en: "Quieter homes and shorter, gentler walks", no: "Roligere hjem og kortere, mildere turer", pl: "Spokojniejsze domy i krótsze, łagodniejsze spacery" })
        : pick({ en: "An ordinary, active week — a decent walk morning and evening", no: "En vanlig, aktiv uke — en skikkelig tur morgen og kveld", pl: "Zwykły, aktywny tydzień — porządny spacer rano i wieczorem" }),
  );
  if (t.firstTimeSuitability >= 4)
    out.push(pick({ en: "First-time owners willing to put the early work in", no: "Førstegangseiere som er villige til å legge inn jobben tidlig", pl: "Początkujący właściciele gotowi włożyć pracę na starcie" }));
  else if (t.firstTimeSuitability <= 2)
    out.push(pick({ en: "People who have lived with a dog before", no: "Folk som har hatt hund før", pl: "Osoby, które miały już psa wcześniej" }));
  if (t.goodWithChildren >= 4)
    out.push(pick({ en: "Family homes with children around", no: "Familiehjem med barn rundt seg", pl: "Rodzinne domy z dziećmi w otoczeniu" }));
  if (t.apartmentSuitability >= 4)
    out.push(pick({ en: "Flats and town living", no: "Leilighet og byliv", pl: "Mieszkania i życie w mieście" }));
  if (t.independence >= 4)
    out.push(pick({ en: "Someone who likes a dog with its own opinions", no: "Noen som liker en hund med egne meninger", pl: "Osoby, które lubią psa z własnym zdaniem" }));
  if (t.affection >= 5)
    out.push(pick({ en: "Anyone who wants a dog close by, most of the day", no: "Alle som vil ha hunden tett på, mesteparten av dagen", pl: "Każdy, kto chce mieć psa blisko siebie przez większość dnia" }));
  return out;
}

/** Honest things to weigh up, again derived from the traits themselves. */
export function thingsToConsider(t: BreedTraits): string[] {
  const out: string[] = [];
  if (t.shedding >= 4)
    out.push(pick({ en: "Sheds a great deal — hair becomes part of the household", no: "Feller mye — hår blir en del av husholdningen", pl: "Bardzo dużo linieje — sierść staje się częścią domowego życia" }));
  if (t.grooming >= 4)
    out.push(pick({ en: "Coat care is ongoing and adds a real cost each year", no: "Pelsstell er kontinuerlig og koster reelt hvert år", pl: "Pielęgnacja sierści jest ciągła i co roku generuje realny koszt" }));
  if (t.barking >= 4)
    out.push(pick({ en: "Vocal by nature, which matters where neighbours are close", no: "Bjeffer av natur, noe som betyr mye der naboene er nære", pl: "Z natury głośny, co ma znaczenie, gdy sąsiedzi są blisko" }));
  if (t.aloneTolerance <= 2)
    out.push(pick({ en: "Finds long days alone genuinely hard", no: "Synes lange dager alene er reelt tungt", pl: "Naprawdę trudno mu znosić długie dni w samotności" }));
  if (t.strengthRequired >= 4)
    out.push(pick({ en: "Strong on the lead until loose-lead work is solid", no: "Sterk i bånd inntil båndtreningen sitter", pl: "Silny na smyczy, dopóki nauka chodzenia na luźnej smyczy nie zostanie utrwalona" }));
  if (t.mentalStimulation >= 4)
    out.push(pick({ en: "Boredom shows up fast, usually as unwanted behaviour", no: "Kjedsomhet viser seg fort, som regel som uønsket atferd", pl: "Nuda pojawia się szybko, zwykle w postaci niepożądanych zachowań" }));
  if (t.heatTolerance <= 2)
    out.push(pick({ en: "Struggles in hot weather — summer walks need rethinking", no: "Sliter i varmt vær — sommerturer må planlegges annerledes", pl: "Źle znosi upały — letnie spacery trzeba planować inaczej" }));
  if (t.coldTolerance <= 2)
    out.push(pick({ en: "Feels the cold, so winter needs a coat and shorter outings", no: "Fryser lett, så vinteren krever dekken og kortere turer", pl: "Łatwo marznie, więc zimą potrzebuje ubranka i krótszych spacerów" }));
  return out;
}

/** Cost and time framing for the page — indicative, never a quote. */
export function commitmentFacts(breed: Breed): EverydayFact[] {
  const t = breed.traits;
  const [exLo, exHi] = exerciseMinutes(t);
  const [hLo, hHi] = weeklyHours(t);
  return [
    {
      label: pick({ en: "Exercise", no: "Mosjon", pl: "Ruch" }),
      value: pick({ en: `${exLo}–${exHi} min a day`, no: `${exLo}–${exHi} min per dag`, pl: `${exLo}–${exHi} min dziennie` }),
    },
    {
      label: pick({ en: "Your time", no: "Din tid", pl: "Twój czas" }),
      value: pick({ en: `${hLo}–${hHi} hours a week`, no: `${hLo}–${hHi} timer i uka`, pl: `${hLo}–${hHi} godzin tygodniowo` }),
      detail: pick({
        en: "Walks, training, coat care and play together",
        no: "Turer, trening, pelsstell og lek til sammen",
        pl: "Spacery, trening, pielęgnacja sierści i zabawa razem",
      }),
    },
    {
      label: pick({ en: "Space", no: "Plass", pl: "Przestrzeń" }),
      value: spaceNeeds(t),
    },
    {
      label: pick({ en: "Coat care", no: "Pelsstell", pl: "Pielęgnacja sierści" }),
      value: groomingCadence(t),
    },
    {
      label: pick({ en: "Typical yearly cost", no: "Typisk årlig kostnad", pl: "Typowy roczny koszt" }),
      value: `€${breed.annualCost[0]}–${breed.annualCost[1]}`,
      detail: pick({
        en: "Food, insurance, routine vet care and grooming. Illness and emergencies come on top.",
        no: "Fôr, forsikring, vanlig veterinærstell og pelsstell. Sykdom og akutte ting kommer i tillegg.",
        pl: "Karma, ubezpieczenie, rutynowa opieka weterynaryjna i pielęgnacja. Choroby i nagłe przypadki dochodzą osobno.",
      }),
    },
    {
      label: pick({ en: "Lifespan", no: "Levealder", pl: "Długość życia" }),
      value: pick({
        en: `${breed.lifespan[0]}–${breed.lifespan[1]} years`,
        no: `${breed.lifespan[0]}–${breed.lifespan[1]} år`,
        pl: `${breed.lifespan[0]}–${breed.lifespan[1]} lat`,
      }),
      detail: pick({
        en: "The whole of that time is the commitment, not just the puppy year.",
        no: "Hele den tiden er forpliktelsen, ikke bare valpeåret.",
        pl: "Cały ten czas jest zobowiązaniem, nie tylko rok szczeniaka.",
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
        pl: "Większe psy mają większe obciążenie stawów i zwykle żyją krócej.",
      }),
    );
  if (t.heatTolerance <= 2)
    parts.push(
      pick({
        en: "Breathing and heat regulation deserve particular attention in this breed.",
        no: "Pust og varmeregulering fortjener særlig oppmerksomhet hos denne rasen.",
        pl: "Oddychanie i regulacja temperatury zasługują na szczególną uwagę u tej rasy.",
      }),
    );
  parts.push(
    pick({
      en: "Ask any breeder or rescue which health screening the parents have had, and speak to a vet before you commit.",
      no: "Spør enhver oppdretter eller omplasserer hvilke helseundersøkelser foreldrene har tatt, og snakk med en veterinær før du bestemmer deg.",
      pl: "Zapytaj hodowcę lub organizację adopcyjną, jakie badania zdrowotne przeszli rodzice, i porozmawiaj z weterynarzem, zanim się zdecydujesz.",
    }),
  );
  return parts.join(" ");
}
