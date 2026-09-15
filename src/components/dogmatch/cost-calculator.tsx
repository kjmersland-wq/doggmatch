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
  dk: {
    title: "Hvad et år med denne hund koster",
    intro:
      "Et ærligt estimat, baseret på racens størrelse og pels. Juster de to ting, der virkelig påvirker prisen, og du vil se, hvordan prisintervallet ændrer sig.",
    level: "Hvor du bor",
    levels: { lower: "Land med lavere leveomkostninger", typical: "Land med mellemliggende leveomkostninger", higher: "By med højere leveomkostninger" },
    insurance: "Forsikring inkluderet",
    grooming: "Professionel pelspleje",
    yes: "Ja",
    no: "Nej",
    lines: {
      food: "Foder",
      vet: "Regelmæssig dyrlægepleje og forsikring",
      grooming: "Pelspleje",
      equipment: "Udstyr og forbrugsvarer",
      buffer: "Buffer til uforudsete udgifter",
    } as Record<CostLineId, string>,
    total: "Dit sandsynlige årsforbrug",
    perMonth: "ca. {amount} om måneden",
    note: "Reelle omkostninger varierer efter land, din hunds størrelse og appetit samt dens helbred. Sygdom, tandpleje og nødsituationer kan ligge et godt stykke over dette interval, hvilket er grunden til, at bufferen overhovedet er her.",
  },
  se: {
    title: "Vad ett år med den här hunden kostar",
    intro:
      "En ärlig uppskattning, baserad på rasens storlek och päls. Justera de två saker som verkligen påverkar siffran, så ser du hur intervallet ändras medan du gör det.",
    level: "Var du bor",
    levels: { lower: "Land med lägre kostnad", typical: "Land med mellanhöga kostnader", higher: "Stad med högre kostnad" },
    insurance: "Försäkring inkluderad",
    grooming: "Professionell pälsvård",
    yes: "Ja",
    no: "Nej",
    lines: {
      food: "Foder",
      vet: "Regelbunden veterinärvård och försäkring",
      grooming: "Pälsvård",
      equipment: "Utrustning och förbrukningsvaror",
      buffer: "Buffert för oförutsedda utgifter",
    } as Record<CostLineId, string>,
    total: "Ditt troliga år",
    perMonth: "ungefär {amount} i månaden",
    note: "Verkliga kostnader varierar beroende på land, din hunds storlek och aptit, samt dess hälsa. Sjukdom, tandvård och akuta händelser kan hamna långt över detta intervall, vilket är anledningen till att bufferten finns där överhuvudtaget.",
  },
  fi: {
    title: "Mitä koiravuosi maksaa",
    intro:
      "Rehellinen arvio, joka perustuu rodun kokoon ja turkkiin. Säädä kahta asiaa, jotka todella vaikuttavat hintaan, ja näet alueen muuttuvan lennossa.",
    level: "Missä asut",
    levels: { lower: "Edullisempi maa", typical: "Keskitason maa", higher: "Kalliimpi kaupunki" },
    insurance: "Vakuutus sisältyy",
    grooming: "Ammattimainen trimmaus",
    yes: "Kyllä",
    no: "Ei",
    lines: {
      food: "Ruoka",
      vet: "Rutiinieläinlääkärikäynnit ja vakuutus",
      grooming: "Trimmaus",
      equipment: "Varusteet ja kulutustavarat",
      buffer: "Puskuri yllättäville menoille",
    } as Record<CostLineId, string>,
    total: "Todennäköinen vuotesi",
    perMonth: "noin {amount} kuukaudessa",
    note: "Todelliset kustannukset vaihtelevat maan, oman koirasi koon ja ruokahalun sekä sen terveyden mukaan. Sairaudet, hammashoidot ja hätätapaukset voivat ylittää tämän alueen reilusti, minkä vuoksi puskuri on tässä ollenkaan.",
  },
  de: {
    title: "Was ein Jahr mit diesem Hund kostet",
    intro:
      "Eine ehrliche Schätzung, basierend auf der Größe und dem Fell dieser Rasse. Passen Sie die beiden Dinge an, die den Betrag wirklich beeinflussen, und Sie werden sehen, wie sich die Spanne verändert, während Sie fortfahren.",
    level: "Wo Sie leben",
    levels: { lower: "Land mit niedrigeren Kosten", typical: "Land mit mittleren Kosten", higher: "Stadt mit höheren Kosten" },
    insurance: "Versicherung inbegriffen",
    grooming: "Professionelle Fellpflege",
    yes: "Ja",
    no: "Nein",
    lines: {
      food: "Futter",
      vet: "Regelmäßige Tierarztbesuche und Versicherung",
      grooming: "Fellpflege",
      equipment: "Ausrüstung und Verbrauchsmaterialien",
      buffer: "Puffer für Unvorhergesehenes",
    } as Record<CostLineId, string>,
    total: "Ihr wahrscheinliches Jahr",
    perMonth: "etwa {amount} im Monat",
    note: "Die tatsächlichen Kosten variieren je nach Land, Größe und Appetit Ihres eigenen Hundes sowie dessen Gesundheit. Krankheiten, Zahnbehandlungen und Notfälle können weit über dieser Spanne liegen, weshalb der Puffer überhaupt vorhanden ist.",
  },
  fr: {
    title: "Combien coûte une année avec ce chien",
    intro:
      "Une estimation honnête, basée sur la taille et le pelage de cette race. Ajustez les deux éléments qui font vraiment varier le coût, et vous verrez la fourchette changer au fur et à mesure.",
    level: "Où vous vivez",
    levels: { lower: "Pays à faible coût", typical: "Pays de gamme moyenne", higher: "Ville à coût élevé" },
    insurance: "Assurance incluse",
    grooming: "Toilettage professionnel",
    yes: "Oui",
    no: "Non",
    lines: {
      food: "Nourriture",
      vet: "Soins vétérinaires de routine et assurance",
      grooming: "Toilettage",
      equipment: "Équipement et consommables",
      buffer: "Marge pour les imprévus",
    } as Record<CostLineId, string>,
    total: "Votre année probable",
    perMonth: "environ {amount} par mois",
    note: "Les coûts réels varient selon le pays, la taille et l'appétit de votre propre chien, ainsi que sa santé. Les maladies, les soins dentaires et les urgences peuvent se situer bien au-dessus de cette fourchette, c'est pourquoi la marge est là.",
  },
  nl: {
    title: "Wat een jaar met deze hond kost",
    intro:
      "Een eerlijke schatting, gebaseerd op het formaat en de vacht van dit ras. Pas de twee zaken aan die de prijs echt beïnvloeden, en zie hoe het bereik verandert terwijl je bezig bent.",
    level: "Waar je woont",
    levels: { lower: "Land met lagere kosten", typical: "Land met gemiddelde kosten", higher: "Stad met hogere kosten" },
    insurance: "Verzekering inbegrepen",
    grooming: "Professionele verzorging",
    yes: "Ja",
    no: "Nee",
    lines: {
      food: "Voeding",
      vet: "Reguliere dierenarts en verzekering",
      grooming: "Verzorging",
      equipment: "Materiaal en verbruiksartikelen",
      buffer: "Buffer voor onverwachte kosten",
    } as Record<CostLineId, string>,
    total: "Jouw waarschijnlijke jaarlijkse kosten",
    perMonth: "ongeveer €{amount} per maand",
    note: "Werkelijke kosten variëren per land, per formaat en eetlust van je eigen hond, en per gezondheid. Ziekte, tandheelkundige zorg en noodgevallen kunnen ruim boven dit bereik uitkomen, daarom is de buffer er überhaupt.",
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
  const euro = useEuro();
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
