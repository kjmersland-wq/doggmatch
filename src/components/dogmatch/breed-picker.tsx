import { breeds, type BreedId } from "@/data/breeds";
import { useCopy } from "@/i18n";
import { OBSERVED_KEYS, type BreedType, type ObservedTraits } from "@/lib/dogs/types";
import { cn } from "@/lib/utils";

export interface BreedSelection {
  breedType: BreedType;
  breedId: BreedId | "";
  mixBreedIds: BreedId[];
  mixUnknown: boolean;
  breedOther: string;
  observed: ObservedTraits;
}

export function emptySelection(): BreedSelection {
  return { breedType: "purebred", breedId: "", mixBreedIds: [], mixUnknown: false, breedOther: "", observed: {} };
}

/** Read an existing dog profile into the picker's shape. */
export function selectionFromDog(dog?: {
  breedType?: BreedType;
  breedId?: BreedId;
  mixBreedIds?: BreedId[];
  mixUnknown?: boolean;
  breedOther?: string;
  observed?: ObservedTraits;
}): BreedSelection {
  if (!dog) return emptySelection();
  return {
    breedType: dog.breedType ?? "purebred",
    breedId: dog.breedId ?? "",
    mixBreedIds: dog.mixBreedIds ?? [],
    mixUnknown: dog.mixUnknown ?? false,
    breedOther: dog.breedOther ?? "",
    observed: dog.observed ?? {},
  };
}

/** Turn the picker's shape into the fields the dog store stores. */
export function selectionToDog(s: BreedSelection) {
  const observed = Object.fromEntries(
    OBSERVED_KEYS.filter((k) => typeof s.observed[k] === "number").map((k) => [k, s.observed[k]]),
  ) as ObservedTraits;
  const hasObserved = Object.keys(observed).length > 0;

  if (s.breedType === "mixed") {
    const ids = s.mixUnknown ? [] : s.mixBreedIds;
    return {
      breedType: "mixed" as const,
      ...(ids.length ? { mixBreedIds: ids } : {}),
      ...(s.mixUnknown || ids.length === 0 ? { mixUnknown: true } : {}),
      ...(s.breedOther.trim() ? { breedOther: s.breedOther.trim() } : {}),
      ...(hasObserved ? { observed } : {}),
    };
  }
  return {
    breedType: "purebred" as const,
    ...(s.breedId ? { breedId: s.breedId } : {}),
    ...(s.breedOther.trim() ? { breedOther: s.breedOther.trim() } : {}),
    ...(hasObserved ? { observed } : {}),
  };
}

const copy = {
  en: {
    typeLabel: "Is your dog a single breed or a mix?",
    typeHint: "Either is completely fine — a mix just means we lean more on your dog than on a breed book.",
    purebred: "One breed",
    mixed: "Mixed breed",
    breedLabel: "Which breed?",
    notFromList: "Not from this list",
    breedOtherPlaceholder: "Terrier",
    mixBreedsLabel: "Do you know any of the breeds in the mix?",
    mixBreedsHint: "Pick as many as you know. We use them as background only — we won't pretend to know exactly what your dog is.",
    unknownMix: "Unknown mix",
    unknownMixHint: "Nobody knows, and that's fine. Everything still works.",
    mixOtherLabel: "What do you call them?",
    mixOtherPlaceholder: "Terrier mix from the shelter",
    observedLabel: "How would you describe your dog?",
    observedHint:
      "This is what we use first — your own dog, not a breed average. Skip anything you're not sure about.",
    skip: "Not sure",
    scales: {
      size: { label: "Size", low: "Tiny", high: "Giant" },
      energy: { label: "Energy", low: "Very calm", high: "Never stops" },
      exerciseNeeds: { label: "Exercise they need", low: "Short walks", high: "Hours a day" },
      trainability: { label: "How easily they learn", low: "Takes time", high: "Picks it up fast" },
      sociability: { label: "With people and dogs", low: "Reserved", high: "Loves everyone" },
      grooming: { label: "Coat care", low: "Wash and go", high: "Daily brushing" },
      shedding: { label: "Shedding", low: "Barely any", high: "Hair everywhere" },
      barking: { label: "How vocal", low: "Quiet", high: "Very vocal" },
    },
  },
  no: {
    typeLabel: "Er hunden din én rase eller en blanding?",
    typeHint: "Begge deler er helt fint — en blanding betyr bare at vi lener oss mer på hunden din enn på en rasebok.",
    purebred: "Én rase",
    mixed: "Blandingshund",
    breedLabel: "Hvilken rase?",
    notFromList: "Ikke på denne listen",
    breedOtherPlaceholder: "Terrier",
    mixBreedsLabel: "Vet du hvilke raser som er med i blandingen?",
    mixBreedsHint: "Velg så mange du vet om. Vi bruker dem bare som bakgrunn — vi later ikke som om vi vet nøyaktig hva hunden din er.",
    unknownMix: "Ukjent blanding",
    unknownMixHint: "Ingen vet, og det er helt greit. Alt fungerer likevel.",
    mixOtherLabel: "Hva pleier du å kalle den?",
    mixOtherPlaceholder: "Terrierblanding fra omplassering",
    observedLabel: "Hvordan vil du beskrive hunden din?",
    observedHint:
      "Det er dette vi bruker først — din egen hund, ikke et rasegjennomsnitt. Hopp over det du er usikker på.",
    skip: "Usikker",
    scales: {
      size: { label: "Størrelse", low: "Bitteliten", high: "Kjempestor" },
      energy: { label: "Energi", low: "Veldig rolig", high: "Stopper aldri" },
      exerciseNeeds: { label: "Mosjonsbehov", low: "Korte turer", high: "Timer hver dag" },
      trainability: { label: "Hvor lett den lærer", low: "Tar tid", high: "Skjønner det fort" },
      sociability: { label: "Med folk og hunder", low: "Reservert", high: "Elsker alle" },
      grooming: { label: "Pelsstell", low: "Nesten ingenting", high: "Børsting hver dag" },
      shedding: { label: "Røyting", low: "Nesten ingen hår", high: "Hår overalt" },
      barking: { label: "Hvor pratsom", low: "Stille", high: "Svært pratsom" },
    },
  },
  pl: {
    typeLabel: "Czy twój pies jest rasowy, czy to mieszaniec?",
    typeHint: "Obie odpowiedzi są w porządku — przy mieszańcu po prostu bardziej opieramy się na twoim psie niż na książce o rasach.",
    purebred: "Jedna rasa",
    mixed: "Mieszaniec",
    breedLabel: "Jaka rasa?",
    notFromList: "Nie ma jej na liście",
    breedOtherPlaceholder: "Terier",
    mixBreedsLabel: "Znasz rasy, które wchodzą w skład mieszanki?",
    mixBreedsHint: "Wybierz tyle, ile wiesz. Traktujemy to tylko jako tło — nie udajemy, że wiemy dokładnie, kim jest twój pies.",
    unknownMix: "Nieznana mieszanka",
    unknownMixHint: "Nikt nie wie i to zupełnie w porządku. Wszystko nadal działa.",
    mixOtherLabel: "Jak go nazywacie?",
    mixOtherPlaceholder: "Mieszaniec teriera ze schroniska",
    observedLabel: "Jak opisałbyś swojego psa?",
    observedHint:
      "Tego używamy w pierwszej kolejności — twojego własnego psa, a nie średniej dla rasy. Pomiń to, czego nie jesteś pewien.",
    skip: "Nie wiem",
    scales: {
      size: { label: "Rozmiar", low: "Malutki", high: "Ogromny" },
      energy: { label: "Energia", low: "Bardzo spokojny", high: "Nigdy nie ustaje" },
      exerciseNeeds: { label: "Potrzeba ruchu", low: "Krótkie spacery", high: "Godziny dziennie" },
      trainability: { label: "Jak łatwo się uczy", low: "Potrzebuje czasu", high: "Łapie w lot" },
      sociability: { label: "Z ludźmi i psami", low: "Powściągliwy", high: "Kocha wszystkich" },
      grooming: { label: "Pielęgnacja sierści", low: "Umyj i gotowe", high: "Codzienne szczotkowanie" },
      shedding: { label: "Linienie", low: "Prawie wcale", high: "Sierść wszędzie" },
      barking: { label: "Jak głośny", low: "Cichy", high: "Bardzo głośny" },
    },
  },
  dk: {
    typeLabel: "Er hunden din af én race eller en blanding?",
    typeHint: "Begge dele er helt fint — en blanding betyder bare, at vi læner os mere op ad din hund end op ad en racebog.",
    purebred: "Én race",
    mixed: "Blandingshund",
    breedLabel: "Hvilken race?",
    notFromList: "Ikke på denne liste",
    breedOtherPlaceholder: "Terrier",
    mixBreedsLabel: "Kender du nogle af racerne i blandingen?",
    mixBreedsHint: "Vælg lige så mange, du kender. Vi bruger dem kun som baggrund — vi lader ikke som om, vi ved præcis, hvad din hund er.",
    unknownMix: "Ukendt blanding",
    unknownMixHint: "Ingen ved det, og det er helt fint. Alt fungerer stadig.",
    mixOtherLabel: "Hvad kalder du den?",
    mixOtherPlaceholder: "Terrierblanding fra internatet",
    observedLabel: "Hvordan vil du beskrive din hund?",
    observedHint:
      "Det er det, vi bruger først — din egen hund, ikke et racegennemsnit. Spring over det, du er usikker på.",
    skip: "Ved ikke",
    scales: {
      size: { label: "Størrelse", low: "Bitte lille", high: "Kæmpestor" },
      energy: { label: "Energi", low: "Meget rolig", high: "Stopper aldrig" },
      exerciseNeeds: { label: "Motionsbehov", low: "Korte gåture", high: "Timer hver dag" },
      trainability: { label: "Hvor let den lærer", low: "Tager tid", high: "Fanger det hurtigt" },
      sociability: { label: "Med folk og hunde", low: "Tilbageholdende", high: "Elsker alle" },
      grooming: { label: "Pelspleje", low: "Vask og gå", high: "Daglig børstning" },
      shedding: { label: "Fældning", low: "Næsten intet", high: "Hår overalt" },
      barking: { label: "Hvor gøende", low: "Stille", high: "Meget gøende" },
    },
  },
  se: {
    typeLabel: "Är din hund av en ren ras eller en blandning?",
    typeHint: "Båda är helt okej — en blandning betyder bara att vi lutar oss mer mot din hund än mot en rasbok.",
    purebred: "En ras",
    mixed: "Blandras",
    breedLabel: "Vilken ras?",
    notFromList: "Finns inte på listan",
    breedOtherPlaceholder: "Terrier",
    mixBreedsLabel: "Vet du vilka raser som ingår i blandningen?",
    mixBreedsHint: "Välj så många du känner till. Vi använder dem bara som bakgrund — vi låtsas inte veta exakt vad din hund är.",
    unknownMix: "Okänd blandning",
    unknownMixHint: "Ingen vet, och det är helt okej. Allt fungerar ändå.",
    mixOtherLabel: "Vad brukar ni kalla den?",
    mixOtherPlaceholder: "Terrierblandning från omplacering",
    observedLabel: "Hur skulle du beskriva din hund?",
    observedHint:
      "Det här använder vi först — din egen hund, inte ett rasgenomsnitt. Hoppa över det du är osäker på.",
    skip: "Osäker",
    scales: {
      size: { label: "Storlek", low: "Pytteliten", high: "Jättestor" },
      energy: { label: "Energi", low: "Väldigt lugn", high: "Stannar aldrig" },
      exerciseNeeds: { label: "Motionsbehov", low: "Korta promenader", high: "Timmar varje dag" },
      trainability: { label: "Hur lätt den lär sig", low: "Tar tid", high: "Fattar snabbt" },
      sociability: { label: "Med folk och hundar", low: "Reserverad", high: "Älskar alla" },
      grooming: { label: "Pälsvård", low: "Tvätta och kör", high: "Daglig borstning" },
      shedding: { label: "Fällning", low: "Knappt något", high: "Hår överallt" },
      barking: { label: "Hur skällig", low: "Tyst", high: "Mycket skällig" },
    },
  },
  fi: {
    typeLabel: "Onko koirasi rotukoira vai sekarotuinen?",
    typeHint: "Molemmat sopivat mainiosti — sekarotuisen kohdalla nojaamme vain enemmän koirasi omiin piirteisiin kuin rotukirjaan.",
    purebred: "Yksi rotu",
    mixed: "Sekarotuinen",
    breedLabel: "Mikä rotu?",
    notFromList: "Ei tällä listalla",
    breedOtherPlaceholder: "Terrieri",
    mixBreedsLabel: "Tiedätkö, mitkä rodut ovat sekoituksessa mukana?",
    mixBreedsHint: "Valitse niin monta kuin tiedät. Käytämme niitä vain taustatietona — emme väitä tietävämme tarkalleen, mikä koirasi on.",
    unknownMix: "Tuntematon sekoitus",
    unknownMixHint: "Kukaan ei tiedä, ja se on ihan hyvä juttu. Kaikki toimii silti.",
    mixOtherLabel: "Mitä kutsutte sitä?",
    mixOtherPlaceholder: "Terrierisekoitus löytöeläintalosta",
    observedLabel: "Miten kuvailisit koiraasi?",
    observedHint:
      "Tätä käytämme ensin — omaa koiraasi, ei rotukeskiarvoa. Ohita kohdat, joista et ole varma.",
    skip: "En ole varma",
    scales: {
      size: { label: "Koko", low: "Pikkuruinen", high: "Jättikokoinen" },
      energy: { label: "Energisyys", low: "Hyvin rauhallinen", high: "Ei pysähdy koskaan" },
      exerciseNeeds: { label: "Liikuntatarve", low: "Lyhyitä lenkkejä", high: "Tunteja päivässä" },
      trainability: { label: "Kuinka helposti oppii", low: "Vie aikaa", high: "Oppii nopeasti" },
      sociability: { label: "Ihmisten ja koirien kanssa", low: "Varautunut", high: "Rakastaa kaikkia" },
      grooming: { label: "Turkinhoito", low: "Pesu ja valmista", high: "Päivittäinen harjaus" },
      shedding: { label: "Karvanlähtö", low: "Tuskin lainkaan", high: "Karvaa kaikkialla" },
      barking: { label: "Haukkuherkkyys", low: "Hiljainen", high: "Hyvin haukkuvainen" },
    },
  },
} as const;

interface Props {
  value: BreedSelection;
  onChange: (next: BreedSelection) => void;
  /** Wrapper for one labelled block — supplied by the host page so styling matches. */
  Field: (props: { label: string; hint?: string; children: React.ReactNode }) => React.ReactElement;
}

export function BreedPicker({ value, onChange, Field }: Props) {
  const c = useCopy(copy);
  const set = (patch: Partial<BreedSelection>) => onChange({ ...value, ...patch });
  const mixed = value.breedType === "mixed";

  return (
    <>
      <Field label={c.typeLabel} hint={c.typeHint}>
        <div className="flex flex-wrap gap-3">
          <Pill on={!mixed} onClick={() => set({ breedType: "purebred" })} label={c.purebred} />
          <Pill on={mixed} onClick={() => set({ breedType: "mixed" })} label={c.mixed} />
        </div>
      </Field>

      {!mixed ? (
        <Field label={c.breedLabel}>
          <div className="flex flex-wrap gap-3">
            <select
              value={value.breedId}
              onChange={(e) => set({ breedId: e.target.value as BreedId | "" })}
              className="h-14 rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none focus:border-accent"
            >
              <option value="">{c.notFromList}</option>
              {breeds.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
            {!value.breedId && (
              <input
                value={value.breedOther}
                onChange={(e) => set({ breedOther: e.target.value })}
                placeholder={c.breedOtherPlaceholder}
                className="h-14 w-full max-w-xs rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
              />
            )}
          </div>
        </Field>
      ) : (
        <>
          <Field label={c.mixBreedsLabel} hint={c.mixBreedsHint}>
            <div className="space-y-4">
              <Pill
                on={value.mixUnknown}
                onClick={() => set({ mixUnknown: !value.mixUnknown, mixBreedIds: [] })}
                label={c.unknownMix}
              />
              <p className="text-sm text-muted-foreground">{c.unknownMixHint}</p>
              {!value.mixUnknown && (
                <div className="flex flex-wrap gap-2">
                  {breeds.map((b) => {
                    const on = value.mixBreedIds.includes(b.id);
                    return (
                      <button
                        key={b.id}
                        type="button"
                        aria-pressed={on}
                        onClick={() =>
                          set({
                            mixBreedIds: on
                              ? value.mixBreedIds.filter((id) => id !== b.id)
                              : [...value.mixBreedIds, b.id],
                          })
                        }
                        className={cn(
                          "rounded-full border px-4 py-2 text-sm transition-colors",
                          on
                            ? "border-foreground bg-foreground text-background"
                            : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                        )}
                      >
                        {b.name}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </Field>

          <Field label={c.mixOtherLabel}>
            <input
              value={value.breedOther}
              onChange={(e) => set({ breedOther: e.target.value })}
              placeholder={c.mixOtherPlaceholder}
              className="h-14 w-full max-w-sm rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
            />
          </Field>
        </>
      )}

      <Field label={c.observedLabel} hint={c.observedHint}>
        <div className="space-y-6">
          {OBSERVED_KEYS.map((key) => {
            const scale = c.scales[key];
            const current = value.observed[key];
            return (
              <div key={key}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-[0.95rem] font-medium">{scale.label}</span>
                  <button
                    type="button"
                    onClick={() => {
                      const next = { ...value.observed };
                      delete next[key];
                      set({ observed: next });
                    }}
                    className={cn(
                      "text-xs transition-colors",
                      current === undefined
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {c.skip}
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      aria-label={`${scale.label}: ${n}`}
                      aria-pressed={current === n}
                      onClick={() => set({ observed: { ...value.observed, [key]: n } })}
                      className={cn(
                        "h-10 w-10 rounded-full border text-sm tabular-nums transition-colors",
                        current === n
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                      )}
                    >
                      {n}
                    </button>
                  ))}
                  <span className="ml-1 text-xs text-muted-foreground">
                    1 = {scale.low} · 5 = {scale.high}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Field>
    </>
  );
}

function Pill({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={cn(
        "rounded-full border px-5 py-3 text-[0.95rem] transition-colors",
        on
          ? "border-foreground bg-foreground text-background"
          : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
