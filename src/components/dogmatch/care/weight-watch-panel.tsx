import { watchWeight, WEIGHT_THRESHOLDS, type WeightChange } from "@/lib/care/weight-watch";
import type { WeightEntry } from "@/lib/care/store";
import { useCopy } from "@/i18n";
import { cn } from "@/lib/utils";

/**
 * A calm read on the weight log: what changed, over how long, and whether it
 * is worth a word with the vet. Thresholds are fixed and shown to the reader.
 */

const copy = {
  en: {
    title: "How the trend looks",
    none: "Two entries a few weeks apart and the trend starts telling you something.",
    month: "Last month",
    quarter: "Last three months",
    overall: "Since you started",
    over: (days: number) => `over ${days} days`,
    steadyTitle: "Steady, which is exactly what you want",
    steadyBody: "Nothing here needs changing. Keep weighing roughly once a month.",
    watchTitle: "Worth keeping an eye on",
    watchBody: (pct: number, days: number) =>
      `That's ${pct}% in ${days} days. Not alarming on its own, but if it wasn't deliberate, hold the portions steady and weigh again in two weeks.`,
    vetTitle: "Worth mentioning to your vet",
    vetBody: (pct: number, days: number) =>
      `A change of ${pct}% in ${days} days is more than everyday variation. If you didn't plan it — especially if it's weight coming off — book a check-up rather than adjusting food on your own.`,
    rule: `We flag anything past ${WEIGHT_THRESHOLDS.watchPercent}%, and suggest a vet past ${WEIGHT_THRESHOLDS.vetPercent}%. Same numbers for every dog, every time.`,
    vetAlso:
      "Call sooner if weight loss comes with drinking more, being sick, low energy or a change in appetite.",
    fed: "Currently feeding",
  },
  no: {
    title: "Slik ser trenden ut",
    none: "To målinger med noen uker mellom, så begynner trenden å si deg noe.",
    month: "Siste måned",
    quarter: "Siste tre måneder",
    overall: "Siden du startet",
    over: (days: number) => `over ${days} dager`,
    steadyTitle: "Stabilt, som er akkurat det du vil ha",
    steadyBody: "Ingenting her trenger endring. Fortsett å veie omtrent én gang i måneden.",
    watchTitle: "Verdt å følge med på",
    watchBody: (pct: number, days: number) =>
      `Det er ${pct} % på ${days} dager. Ikke alarmerende i seg selv, men hvis det ikke var meningen: hold porsjonene som de er og vei igjen om to uker.`,
    vetTitle: "Verdt å nevne for veterinæren",
    vetBody: (pct: number, days: number) =>
      `En endring på ${pct} % på ${days} dager er mer enn vanlig variasjon. Hvis du ikke planla det — særlig hvis vekten går ned — bestill en sjekk heller enn å justere maten selv.`,
    rule: `Vi flagger alt over ${WEIGHT_THRESHOLDS.watchPercent} %, og foreslår veterinær over ${WEIGHT_THRESHOLDS.vetPercent} %. Samme tall for hver hund, hver gang.`,
    vetAlso:
      "Ring tidligere hvis vekttap kommer sammen med mer drikking, oppkast, lite energi eller endret matlyst.",
    fed: "Fôrer nå med",
  },
  pl: {
    title: "Jak wygląda trend",
    none: "Dwa wpisy w odstępie kilku tygodni i trend zacznie coś mówić.",
    month: "Ostatni miesiąc",
    quarter: "Ostatnie trzy miesiące",
    overall: "Od początku",
    over: (days: number) => `przez ${days} dni`,
    steadyTitle: "Stabilnie, czyli dokładnie tak, jak chcesz",
    steadyBody: "Nic tu nie wymaga zmiany. Waż dalej mniej więcej raz w miesiącu.",
    watchTitle: "Warto obserwować",
    watchBody: (pct: number, days: number) =>
      `To ${pct}% w ${days} dni. Samo w sobie nie jest niepokojące, ale jeśli nie było zamierzone — utrzymaj porcje i zważ ponownie za dwa tygodnie.`,
    vetTitle: "Warto wspomnieć weterynarzowi",
    vetBody: (pct: number, days: number) =>
      `Zmiana o ${pct}% w ${days} dni to więcej niż zwykłe wahania. Jeśli tego nie planowałeś — zwłaszcza przy spadku wagi — umów wizytę, zamiast samemu zmieniać karmę.`,
    rule: `Oznaczamy wszystko powyżej ${WEIGHT_THRESHOLDS.watchPercent}%, a powyżej ${WEIGHT_THRESHOLDS.vetPercent}% sugerujemy weterynarza. Te same liczby dla każdego psa, za każdym razem.`,
    vetAlso:
      "Zadzwoń wcześniej, jeśli spadkowi wagi towarzyszy większe pragnienie, wymioty, brak energii lub zmiana apetytu.",
    fed: "Obecnie karmisz",
  },
} as const;

function Row({ label, change }: { label: string; change?: WeightChange }) {
  const c = useCopy(copy);
  if (!change) return null;
  const sign = change.changeKg > 0 ? "+" : "";
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border py-3 last:border-0">
      <span className="text-[0.9375rem] text-muted-foreground">{label}</span>
      <span className="tabular-nums">
        {sign}
        {change.changeKg} kg
        <span className="ml-2 text-sm text-muted-foreground">
          ({sign}
          {change.percent}% {c.over(change.days)})
        </span>
      </span>
    </li>
  );
}

export function WeightWatchPanel({
  entries,
  foodBrand,
}: {
  entries: WeightEntry[];
  foodBrand?: string;
}) {
  const c = useCopy(copy);
  const watch = watchWeight(entries);

  if (!watch.overall) {
    return <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.none}</p>;
  }

  const driver = watch.driver;
  const level = watch.level;
  const title = level === "vet" ? c.vetTitle : level === "watch" ? c.watchTitle : c.steadyTitle;
  const body =
    level === "steady" || !driver
      ? c.steadyBody
      : level === "vet"
        ? c.vetBody(Math.abs(driver.percent), driver.days)
        : c.watchBody(Math.abs(driver.percent), driver.days);

  return (
    <div>
      <h3 className="font-display text-lg tracking-tight">{c.title}</h3>
      <ul className="mt-3">
        <Row label={c.month} {...(watch.month ? { change: watch.month } : {})} />
        <Row label={c.quarter} {...(watch.quarter ? { change: watch.quarter } : {})} />
        <Row label={c.overall} {...(watch.overall ? { change: watch.overall } : {})} />
      </ul>

      <div
        className={cn(
          "mt-5 rounded-[1.25rem] border p-5",
          level === "vet"
            ? "border-destructive/45 bg-destructive/10"
            : level === "watch"
              ? "border-border-strong bg-surface"
              : "border-accent/40 bg-accent-soft",
        )}
      >
        <p className="font-display text-[1.0625rem] tracking-tight">{title}</p>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{body}</p>
        {level === "vet" && (
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.vetAlso}</p>
        )}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.rule}</p>
      {foodBrand && (
        <p className="mt-2 text-sm text-muted-foreground">
          {c.fed}: <span className="text-foreground">{foodBrand}</span>
        </p>
      )}
    </div>
  );
}
