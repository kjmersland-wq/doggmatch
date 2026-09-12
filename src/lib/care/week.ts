import { pick } from "@/i18n";
import type { SkillStatus } from "@/data/training/types";
import type { DogProfile } from "@/lib/training/store";
import { resolveDogTraits } from "@/lib/dogs/profile";
import { rankLessons } from "@/lib/training/plan";
import type { CareProfile } from "@/lib/care/store";
import type { WeekOverride } from "@/lib/care/records";

/**
 * My Dog Week — one calm view of the days ahead, built from what we already
 * know about this dog. Same dog, same answers, same week: it never guesses and
 * there's no model involved. Anything here can be removed or added to.
 */

export type WeekKind = "walk" | "training" | "food" | "care" | "play" | "rest" | "own";

export interface WeekItem {
  id: string;
  kind: WeekKind;
  label: string;
  detail?: string;
}

export interface WeekDay {
  index: number;
  name: string;
  items: WeekItem[];
}

const DAY_NAMES = {
  en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  no: ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"],
  pl: ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
  dk: ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"],
  se: ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"],
  fi: ["Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai", "Sunnuntai"],
};

/** Day names in the reader's language. Read at call time, never cached. */
export function getDayNames(): string[] {
  return pick(DAY_NAMES);
}

const kindLabels: Record<WeekKind, { en: string; no: string; pl: string; dk: string; se: string; fi: string }> = {
  walk: { en: "Walk", no: "Tur", pl: "Spacer", dk: "Gåtur", se: "Promenad", fi: "Lenkki" },
  training: { en: "Training", no: "Trening", pl: "Trening", dk: "Træning", se: "Träning", fi: "Harjoittelu" },
  food: { en: "Food", no: "Mat", pl: "Jedzenie", dk: "Mad", se: "Mat", fi: "Ruoka" },
  care: { en: "Care", no: "Stell", pl: "Pielęgnacja", dk: "Pleje", se: "Skötsel", fi: "Hoito" },
  play: { en: "Play", no: "Lek", pl: "Zabawa", dk: "Leg", se: "Lek", fi: "Leikki" },
  rest: { en: "Rest", no: "Hvile", pl: "Odpoczynek", dk: "Hvile", se: "Vila", fi: "Lepo" },
  own: { en: "Yours", no: "Ditt eget", pl: "Twoje", dk: "Dit eget", se: "Ditt eget", fi: "Omasi" },
};

export function kindLabel(kind: WeekKind): string {
  return pick(kindLabels[kind]);
}

function walkLine(dog: DogProfile | undefined, care: CareProfile): { label: string; detail: string } {
  const energy = resolveDogTraits(dog).traits.exerciseNeeds;
  const activity = care.activity ?? "moderate";
  if (dog?.ageStage === "puppy") {
    return pick({
      en: { label: "Two short walks", detail: "Short and sniffy — little legs tire quickly" },
      no: { label: "To korte turer", detail: "Korte og med masse snusing — små bein blir fort slitne" },
      pl: { label: "Dwa krótkie spacery", detail: "Krótkie i pełne obwąchiwania — małe łapki szybko się męczą" },
      dk: { label: "To korte gåture", detail: "Korte og med masser af snusen — små ben bliver hurtigt trætte" },
      se: { label: "Två korta promenader", detail: "Korta och med mycket nosande — små ben blir snabbt trötta" },
      fi: { label: "Kaksi lyhyttä lenkkiä", detail: "Lyhyitä ja haistelun täyteisiä — pienet jalat väsyvät nopeasti" },
    });
  }
  if (dog?.ageStage === "senior") {
    return pick({
      en: { label: "A gentle walk", detail: "Their pace, not yours" },
      no: { label: "En rolig tur", detail: "I hundens tempo, ikke ditt" },
      pl: { label: "Spokojny spacer", detail: "W tempie psa, nie Twoim" },
      dk: { label: "En rolig gåtur", detail: "I hundens tempo, ikke dit" },
      se: { label: "En lugn promenad", detail: "I hundens takt, inte din" },
      fi: { label: "Rauhallinen lenkki", detail: "Koiran tahdissa, ei sinun" },
    });
  }
  if (energy >= 4 && activity !== "gentle") {
    return pick({
      en: { label: "A long walk", detail: "This one needs a proper leg-stretch" },
      no: { label: "En lang tur", detail: "Denne hunden trenger å få strukket på beina" },
      pl: { label: "Długi spacer", detail: "Ten pies naprawdę potrzebuje się solidnie wybiegać" },
      dk: { label: "En lang gåtur", detail: "Denne hund har brug for at strække benene ordentligt" },
      se: { label: "En lång promenad", detail: "Den här hunden behöver sträcka på benen ordentligt" },
      fi: { label: "Pitkä lenkki", detail: "Tämä koira tarvitsee kunnon jaloittelun" },
    });
  }
  if (energy <= 2 || activity === "gentle") {
    return pick({
      en: { label: "An easy walk", detail: "Steady, with time to sniff" },
      no: { label: "En lett tur", detail: "Rolig, med tid til å snuse" },
      pl: { label: "Łagodny spacer", detail: "Spokojnie, z czasem na obwąchiwanie" },
      dk: { label: "En let gåtur", detail: "Roligt tempo, med tid til at snuse" },
      se: { label: "En lätt promenad", detail: "Lugnt tempo, med tid att nosa" },
      fi: { label: "Kevyt lenkki", detail: "Rauhallista menoa, aikaa haistella" },
    });
  }
  return pick({
    en: { label: "A good walk", detail: "Half an hour or so, with sniffing time" },
    no: { label: "En god tur", detail: "En halvtimes tid, med tid til å snuse" },
    pl: { label: "Dobry spacer", detail: "Około pół godziny, z czasem na obwąchiwanie" },
    dk: { label: "En god gåtur", detail: "Cirka en halv time, med tid til at snuse" },
    se: { label: "En bra promenad", detail: "En halvtimme eller så, med tid att nosa" },
    fi: { label: "Hyvä lenkki", detail: "Noin puoli tuntia, haisteluajan kanssa" },
  });
}

function groomDays(dog: DogProfile | undefined): number[] {
  const grooming = resolveDogTraits(dog).traits.grooming;
  if (grooming >= 4) return [0, 2, 4, 6];
  if (grooming === 3) return [1, 4];
  return [3];
}

export function buildWeek(
  dog: DogProfile | undefined,
  care: CareProfile,
  progress: Record<string, SkillStatus>,
  override: WeekOverride = { removed: [], added: [] },
): WeekDay[] {
  const walk = walkLine(dog, care);
  const meals = care.mealsPerDay ?? (dog?.ageStage === "puppy" ? 3 : 2);
  const ranked = rankLessons(dog, progress).slice(0, 5);
  const brushDays = groomDays(dog);
  const mental = resolveDogTraits(dog).traits.mentalStimulation;

  const days: WeekDay[] = getDayNames().map((name, index) => {
    const items: WeekItem[] = [];

    items.push({ id: `walk-${index}`, kind: "walk", label: walk.label, detail: walk.detail });
    items.push({
      id: `food-${index}`,
      kind: "food",
      label:
        meals === 1
          ? pick({ en: "One measured meal", no: "Ett oppmålt måltid", pl: "Jeden odmierzony posiłek", dk: "Ét afmålt måltid", se: "En avmätt måltid", fi: "Yksi mitattu ateria" })
          : pick({ en: `${meals} measured meals`, no: `${meals} oppmålte måltider`, pl: `${meals} odmierzone posiłki`, dk: `${meals} afmålte måltider`, se: `${meals} avmätta måltider`, fi: `${meals} mitattua ateriaa` }),
      detail: pick({ en: "Weighed rather than guessed", no: "Veid, ikke gjettet", pl: "Zważone, a nie odmierzone na oko", dk: "Vejet, ikke gættet", se: "Vägt, inte gissat", fi: "Punnittu, ei arvattu" }),
    });

    // Training on most days, resting the mind on Sunday.
    if (index !== 6 && ranked.length) {
      const lesson = ranked[index % ranked.length]!;
      items.push({
        id: `train-${index}`,
        kind: "training",
        label: lesson.lesson.title,
        detail: pick({ en: "Five minutes is plenty", no: "Fem minutter holder lenge", pl: "Pięć minut w zupełności wystarczy", dk: "Fem minutter er rigeligt", se: "Fem minuter räcker gott", fi: "Viisi minuuttia riittää hyvin" }),
      });
    }

    if (index % 2 === 0) {
      items.push({ id: `teeth-${index}`, kind: "care", label: pick({ en: "Teeth", no: "Tenner", pl: "Zęby", dk: "Tænder", se: "Tänder", fi: "Hampaat" }), detail: pick({ en: "Even thirty seconds helps", no: "Selv tretti sekunder hjelper", pl: "Nawet trzydzieści sekund robi różnicę", dk: "Selv tredive sekunder hjælper", se: "Även trettio sekunder hjälper", fi: "Jo kolmekymmentä sekuntia auttaa" }) });
    }
    if (brushDays.includes(index)) {
      items.push({ id: `brush-${index}`, kind: "care", label: pick({ en: "Brush", no: "Børsting", pl: "Szczotkowanie", dk: "Børstning", se: "Borstning", fi: "Harjaus" }), detail: pick({ en: "And a feel for lumps or mats", no: "Og kjenn etter kuler eller floker", pl: "I sprawdź, czy nie ma zgrubień lub kołtunów", dk: "Og mærk efter knuder eller filtret pels", se: "Och känn efter knölar eller tovor", fi: "Ja tunnustele kyhmyjä tai takkuja" }) });
    }
    if (mental >= 4 && (index === 1 || index === 4)) {
      items.push({ id: `game-${index}`, kind: "play", label: pick({ en: "A thinking game", no: "En tenkelek", pl: "Zabawa na myślenie", dk: "En tænkeleg", se: "En tänkarlek", fi: "Ajattelupeli" }), detail: pick({ en: "Scatter feed, or hide a toy", no: "Strø ut fôret, eller gjem en leke", pl: "Rozrzuć jedzenie albo schowaj zabawkę", dk: "Spred foderet ud, eller gem et stykke legetøj", se: "Sprid ut fodret, eller göm en leksak", fi: "Levitä ruoka ympäriinsä tai piilota lelu" }) });
    }
    if (index === 6) {
      items.push({ id: `rest-${index}`, kind: "rest", label: pick({ en: "A slow day", no: "En rolig dag", pl: "Spokojny dzień", dk: "En rolig dag", se: "En lugn dag", fi: "Rauhallinen päivä" }), detail: pick({ en: "Nothing asked of them", no: "Ingenting kreves av hunden", pl: "Nic od niego nie wymagamy", dk: "Intet krævet af hunden", se: "Inget krävs av hunden", fi: "Koiralta ei vaadita mitään" }) });
      items.push({ id: `check-${index}`, kind: "care", label: pick({ en: "Nose-to-tail check", no: "Sjekk fra snute til hale", pl: "Przegląd od nosa po ogon", dk: "Tjek fra snude til hale", se: "Koll från nos till svans", fi: "Tarkastus kuonosta häntään" }), detail: pick({ en: "Ears, eyes, paws, skin", no: "Ører, øyne, poter, hud", pl: "Uszy, oczy, łapy, skóra", dk: "Ører, øjne, poter, hud", se: "Öron, ögon, tassar, hud", fi: "Korvat, silmät, tassut, iho" }) });
    }
    if (index === 0) {
      items.push({ id: `weigh-${index}`, kind: "care", label: pick({ en: "Weigh-in (every few weeks)", no: "Veiing (med noen ukers mellomrom)", pl: "Ważenie (co kilka tygodni)", dk: "Vejning (hver anden-tredje uge)", se: "Vägning (var och varannan vecka)", fi: "Punnitus (muutaman viikon välein)" }), detail: pick({ en: "Only takes a minute", no: "Tar bare et minutt", pl: "Zajmuje tylko minutę", dk: "Tager kun et minut", se: "Tar bara en minut", fi: "Vie vain minuutin" }) });
    }

    return { index, name: name!, items };
  });

  for (const item of override.added) {
    const day = days[item.day];
    if (day) day.items.push({ id: item.id, kind: "own", label: item.label });
  }
  const removed = new Set(override.removed);
  return days.map((d) => ({ ...d, items: d.items.filter((i) => !removed.has(i.id)) }));
}