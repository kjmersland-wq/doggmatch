import { useState } from "react";
import { useCopy, useLocale, INTL_LOCALE } from "@/i18n";
import { cn } from "@/lib/utils";
import type { Breed } from "@/data/breeds";
import {
  DEFAULT_COST_OPTIONS,
  yearlyCost,
  type CostLevel,
  type CostLineId,
  type CostOptions,
} from "@/lib/breeds/costs";

const copy = {
  en: {
    title: "What a year with this dog costs",
    intro:
      "An honest estimate, built from this breed's size and coat. Adjust the two things that really move the number, and you'll see the range change as you go.",
    level: "Where you live",
    levels: { lower: "Lower cost country", typical: "Mid-range country", higher: "Higher cost city" },
    insurance: "Insurance included",
    grooming: "Professional grooming",
    yes: "Yes",
    no: "No",
    lines: {
      food: "Food",
      vet: "Routine vet care and insurance",
      grooming: "Grooming",
      equipment: "Equipment and consumables",
      buffer: "Buffer for the unexpected",
    } as Record<CostLineId, string>,
    total: "Your likely year",
    perMonth: "about {amount} a month",
    note: "Real costs vary by country, by the size and appetite of your own dog, and by their health. Illness, dental work and emergencies can sit well above this range, which is why the buffer is here at all.",
  },
  no: {
    title: "Hva et år med denne hunden koster",
    intro:
      "Et ærlig anslag, bygget på rasens størrelse og pels. Juster de to tingene som virkelig betyr noe, så ser du rammen endre seg underveis.",
    level: "Der du bor",
    levels: { lower: "Land med lavere kostnader", typical: "Rundt europeisk snitt", higher: "By med høye priser" },
    insurance: "Forsikring inkludert",
    grooming: "Profesjonell pelsstell",
    yes: "Ja",
    no: "Nei",
    lines: {
      food: "Fôr",
      vet: "Vanlig veterinærstell og forsikring",
      grooming: "Pelsstell",
      equipment: "Utstyr og forbruk",
      buffer: "Buffer for det uventede",
    } as Record<CostLineId, string>,
    total: "Ditt sannsynlige år",
    perMonth: "omtrent {amount} i måneden",
    note: "Reelle kostnader varierer med land, med størrelsen og appetitten til akkurat din hund, og med helsa. Sykdom, tannbehandling og akutte ting kan ligge godt over denne rammen — derfor finnes bufferen.",
  },
  pl: {
    title: "Ile kosztuje rok z tym psem",
    intro:
      "Uczciwy szacunek oparty na wielkości i sierści tej rasy. Zmień dwie rzeczy, które naprawdę wpływają na kwotę, a zobaczysz, jak zakres się zmienia.",
    level: "Gdzie mieszkasz",
    levels: { lower: "Kraj o niższych kosztach", typical: "Około średniej europejskiej", higher: "Drogie miasto" },
    insurance: "Ubezpieczenie wliczone",
    grooming: "Profesjonalny groomer",
    yes: "Tak",
    no: "Nie",
    lines: {
      food: "Karma",
      vet: "Rutynowa opieka weterynaryjna i ubezpieczenie",
      grooming: "Pielęgnacja",
      equipment: "Sprzęt i materiały",
      buffer: "Zapas na nieprzewidziane",
    } as Record<CostLineId, string>,
    total: "Twój prawdopodobny rok",
    perMonth: "około {amount} miesięcznie",
    note: "Realne koszty zależą od kraju, od wielkości i apetytu twojego psa oraz od jego zdrowia. Choroby, leczenie zębów i nagłe przypadki mogą znacznie przekroczyć ten zakres — dlatego właśnie jest tu zapas.",
  },
} as const;

/** Euro is the shared base currency; separators follow the reader's language. */
function useEuro() {
  const { locale } = useLocale();
  const fmt = new Intl.NumberFormat(INTL_LOCALE[locale], {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
  return (n: number) => fmt.format(Math.round(n));
}

function Chip({
  active,
  children,
  ...props
}: React.ComponentProps<"button"> & { active: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function CostCalculator({ breed, className }: { breed: Breed; className?: string }) {
  const c = useCopy(copy);
  const [options, setOptions] = useState<CostOptions>(DEFAULT_COST_OPTIONS);
  const estimate = yearlyCost(breed, options);
  const set = (patch: Partial<CostOptions>) => setOptions((o) => ({ ...o, ...patch }));
  const levels: CostLevel[] = ["lower", "typical", "higher"];

  return (
    <div className={cn("rounded-2xl border border-border bg-card p-8 md:p-10", className)}>
      <h2 className="display-md">{c.title}</h2>
      <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">{c.intro}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div>
          <p className="eyebrow">{c.level}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {levels.map((l) => (
              <Chip key={l} active={options.level === l} onClick={() => set({ level: l })}>
                {c.levels[l]}
              </Chip>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">{c.insurance}</p>
          <div className="mt-3 flex gap-2">
            <Chip active={options.insurance} onClick={() => set({ insurance: true })}>
              {c.yes}
            </Chip>
            <Chip active={!options.insurance} onClick={() => set({ insurance: false })}>
              {c.no}
            </Chip>
          </div>
        </div>
        <div>
          <p className="eyebrow">{c.grooming}</p>
          <div className="mt-3 flex gap-2">
            <Chip
              active={options.professionalGrooming}
              onClick={() => set({ professionalGrooming: true })}
            >
              {c.yes}
            </Chip>
            <Chip
              active={!options.professionalGrooming}
              onClick={() => set({ professionalGrooming: false })}
            >
              {c.no}
            </Chip>
          </div>
        </div>
      </div>

      <dl className="mt-10 divide-y divide-border border-y border-border">
        {estimate.lines.map((line) => (
          <div key={line.id} className="flex items-baseline justify-between gap-6 py-4">
            <dt className="text-[0.9375rem] leading-relaxed">{c.lines[line.id]}</dt>
            <dd className="whitespace-nowrap font-display text-base tabular-nums">
              {euro(line.low)}–{euro(line.high)}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
        <p className="eyebrow">{c.total}</p>
        <p className="font-display text-3xl tracking-tight tabular-nums">
          {euro(estimate.low)}–{euro(estimate.high)}
        </p>
      </div>
      <p className="mt-1 text-right text-sm text-muted-foreground">
        {c.perMonth.replace("{amount}", `${euro(estimate.low / 12)}–${euro(estimate.high / 12)}`)}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
    </div>
  );
}
