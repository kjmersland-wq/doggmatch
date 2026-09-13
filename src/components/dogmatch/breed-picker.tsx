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
  dk: {
    typeLabel: "Er din hund en raceren eller en blandingshund?",
    typeHint: "Begge dele er helt fint – en blandingshund betyder bare, at vi lægger mere vægt på din hund end på en racebog.",
    purebred: "Én race",
    mixed: "Blandingshund",
    breedLabel: "Hvilken race?",
    notFromList: "Ikke fra listen",
    breedOtherPlaceholder: "Terrier",
    mixBreedsLabel: "Kender du nogle af racerne i blandingen?",
    mixBreedsHint: "Vælg så mange, du kender. Vi bruger dem kun som baggrund – vi vil ikke lade som om, vi ved præcis, hvad din hund er.",
    unknownMix: "Ukendt blanding",
    unknownMixHint: "Ingen ved det, og det er helt okay. Alt fungerer stadig.",
    mixOtherLabel: "Hvad kalder du dem?",
    mixOtherPlaceholder: "Terrierblanding fra internatet",
    observedLabel: "Hvordan vil du beskrive din hund?",
    observedHint:
      "Det er det, vi bruger først – din egen hund, ikke et racegennemsnit. Spring over alt, du er usikker på.",
    skip: "Usikker",
    scales: {
      size: { label: "Størrelse", low: "Meget lille", high: "Kæmpe stor" },
      energy: { label: "Energi", low: "Meget rolig", high: "Stopper aldrig" },
      exerciseNeeds: { label: "Motion de har brug for", low: "Korte gåture", high: "Timer om dagen" },
      trainability: { label: "Hvor let de lærer", low: "Tager tid", high: "Fanger det hurtigt" },
      sociability: { label: "Med mennesker og hunde", low: "Reserveret", high: "Elsker alle" },
      grooming: { label: "Pelspleje", low: "Vask og gå", high: "Daglig børstning" },
      shedding: { label: "Fældning", low: "Næsten ingen", high: "Hår overalt" },
      barking: { label: "Hvor snakkesalig", low: "Stille", high: "Meget snakkesalig" },
    },
  },
  se: {
    typeLabel: "Är din hund en renrasig eller en blandras?",
    typeHint: "Båda går jättebra – en blandras betyder bara att vi litar mer på din hund än på en rasbok.",
    purebred: "En ras",
    mixed: "Blandras",
    breedLabel: "Vilken ras?",
    notFromList: "Inte från listan",
    breedOtherPlaceholder: "Terrier",
    mixBreedsLabel: "Känner du till några av raserna i blandningen?",
    mixBreedsHint: "Välj så många du känner till. Vi använder dem bara som bakgrund – vi kommer inte att låtsas veta exakt vad din hund är.",
    unknownMix: "Okänd blandning",
    unknownMixHint: "Ingen vet, och det är helt okej. Allt fungerar ändå.",
    mixOtherLabel: "Vad kallar du dem?",
    mixOtherPlaceholder: "Terrierblandning från hundhemmet",
    observedLabel: "Hur skulle du beskriva din hund?",
    observedHint:
      "Det här är vad vi utgår från först – din egen hund, inte ett genomsnitt för rasen. Hoppa över det du är osäker på.",
    skip: "Osäker",
    scales: {
      size: { label: "Storlek", low: "Jätteliten", high: "Gigantisk" },
      energy: { label: "Energi", low: "Väldigt lugn", high: "Stannar aldrig" },
      exerciseNeeds: { label: "Hur mycket motion de behöver", low: "Korta promenader", high: "Timmar om dagen" },
      trainability: { label: "Hur lätt de lär sig", low: "Tar tid", high: "Lär sig snabbt" },
      sociability: { label: "Mot människor och hundar", low: "Tillbakadragen", high: "Älskar alla" },
      grooming: { label: "Pälsvård", low: "Tvätta och klart", high: "Daglig borstning" },
      shedding: { label: "Fällning", low: "Nästan ingen", high: "Hår överallt" },
      barking: { label: "Hur pratglad", low: "Tystlåten", high: "Mycket pratglad" },
    },
  },
  fi: {
    typeLabel: "Onko koirasi puhdasrotuinen vai sekarotuinen?",
    typeHint: "Kumpikin on täysin ok – jos koirasi on sekarotuinen, luotamme enemmän sinun arvioosi kuin rotukirjaan.",
    purebred: "Yksi rotu",
    mixed: "Sekarotuinen",
    breedLabel: "Mikä rotu?",
    notFromList: "Ei listalta",
    breedOtherPlaceholder: "Terrieri",
    mixBreedsLabel: "Tiedätkö mitään koirasi roduista?",
    mixBreedsHint: "Valitse niin monta kuin tiedät. Käytämme niitä vain taustatietona – emme väitä tietävämme tarkalleen, millainen koirasi on.",
    unknownMix: "Tuntematon sekoitus",
    unknownMixHint: "Kukaan ei tiedä, ja sekin on ihan ok. Kaikki toimii silti.",
    mixOtherLabel: "Millä nimellä kutsut heitä?",
    mixOtherPlaceholder: "Terrierisekoitus löytöeläintalosta",
    observedLabel: "Miten kuvailisit koiraasi?",
    observedHint:
      "Tätä käytämme ensisijaisesti – sinun omaa koiraasi, emme rotumääritelmää. Ohita kaikki, mistä et ole varma.",
    skip: "En ole varma",
    scales: {
      size: { label: "Koko", low: "Pikkuinen", high: "Jättimäinen" },
      energy: { label: "Energisyys", low: "Hyvin rauhallinen", high: "Ei pysähdy koskaan" },
      exerciseNeeds: { label: "Liikunnan tarve", low: "Lyhyet lenkit", high: "Tunteja päivässä" },
      trainability: { label: "Kuinka helposti oppii", low: "Vie aikaa", high: "Oppii nopeasti" },
      sociability: { label: "Ihmisten ja koirien kanssa", low: "Varautunut", high: "Rakastaa kaikkia" },
      grooming: { label: "Turkinhoito", low: "Pese ja mene", high: "Päivittäinen harjaus" },
      shedding: { label: "Karvanlähtö", low: "Melkein ei ollenkaan", high: "Karvaa kaikkialla" },
      barking: { label: "Kuinka äänekäs", low: "Hiljainen", high: "Hyvin äänekäs" },
    },
  },
  de: {
    typeLabel: "Ist Ihr Hund eine Rasse oder ein Mischling?",
    typeHint: "Beides ist völlig in Ordnung – ein Mischling bedeutet nur, dass wir uns mehr auf Ihren Hund als auf ein Rassebuch verlassen.",
    purebred: "Rassehund",
    mixed: "Mischling",
    breedLabel: "Welche Rasse?",
    notFromList: "Nicht aus dieser Liste",
    breedOtherPlaceholder: "Terrier",
    mixBreedsLabel: "Kennen Sie einige der Rassen im Mix?",
    mixBreedsHint: "Wählen Sie so viele aus, wie Sie kennen. Wir verwenden sie nur als Hintergrundinformation – wir werden nicht so tun, als würden wir genau wissen, was Ihr Hund ist.",
    unknownMix: "Unbekannter Mix",
    unknownMixHint: "Niemand weiß es, und das ist in Ordnung. Alles funktioniert trotzdem.",
    mixOtherLabel: "Wie nennen Sie ihn/sie?",
    mixOtherPlaceholder: "Terrier-Mix vom Tierheim",
    observedLabel: "Wie würden Sie Ihren Hund beschreiben?",
    observedHint:
      "Das ist es, was wir zuerst verwenden – Ihr eigener Hund, nicht ein Rassedurchschnitt. Überspringen Sie alles, worüber Sie sich nicht sicher sind.",
    skip: "Nicht sicher",
    scales: {
      size: { label: "Größe", low: "Winzig", high: "Riesig" },
      energy: { label: "Energie", low: "Sehr ruhig", high: "Hört nie auf" },
      exerciseNeeds: { label: "Bewegungsbedarf", low: "Kurze Spaziergänge", high: "Stunden am Tag" },
      trainability: { label: "Wie leicht er lernt", low: "Braucht Zeit", high: "Lernt schnell" },
      sociability: { label: "Mit Menschen und Hunden", low: "Zurückhaltend", high: "Liebt jeden" },
      grooming: { label: "Fellpflege", low: "Waschen und fertig", high: "Tägliches Bürsten" },
      shedding: { label: "Haaren", low: "Kaum", high: "Überall Haare" },
      barking: { label: "Wie laut", low: "Ruhig", high: "Sehr laut" },
    },
  },
  fr: {
    typeLabel: "Votre chien est-il de race pure ou un croisé ?",
    typeHint: "Les deux sont tout à fait acceptables — un croisé signifie simplement que nous nous fions davantage à votre chien qu'à un livre des races.",
    purebred: "Une seule race",
    mixed: "Croisé",
    breedLabel: "Quelle race ?",
    notFromList: "Pas dans cette liste",
    breedOtherPlaceholder: "Terrier",
    mixBreedsLabel: "Connaissez-vous certaines des races qui composent le mélange ?",
    mixBreedsHint: "Choisissez autant que vous le souhaitez. Nous les utilisons uniquement à titre indicatif — nous ne prétendrons pas savoir exactement ce qu'est votre chien.",
    unknownMix: "Mélange inconnu",
    unknownMixHint: "Personne ne sait, et ce n'est pas grave. Tout fonctionne quand même.",
    mixOtherLabel: "Comment les appelez-vous ?",
    mixOtherPlaceholder: "Croisé terrier du refuge",
    observedLabel: "Comment décririez-vous votre chien ?",
    observedHint:
      "C'est ce que nous utilisons en premier — votre propre chien, pas une moyenne de race. Ignorez tout ce dont vous n'êtes pas sûr.",
    skip: "Pas sûr",
    scales: {
      size: { label: "Taille", low: "Minuscule", high: "Géant" },
      energy: { label: "Énergie", low: "Très calme", high: "Ne s'arrête jamais" },
      exerciseNeeds: { label: "Exercice nécessaire", low: "Courtes promenades", high: "Heures par jour" },
      trainability: { label: "Facilité d'apprentissage", low: "Prend du temps", high: "Apprend vite" },
      sociability: { label: "Avec les gens et les chiens", low: "Réservé", high: "Adore tout le monde" },
      grooming: { label: "Entretien du pelage", low: "Lavage et c'est tout", high: "Brossage quotidien" },
      shedding: { label: "Perte de poils", low: "Presque rien", high: "Poils partout" },
      barking: { label: "Niveau sonore", low: "Silencieux", high: "Très bavard" },
    },
  },
  nl: {
    typeLabel: "Is uw hond een rashond of een kruising?",
    typeHint: "Beide is helemaal prima – een kruising betekent alleen dat we meer naar uw hond kijken dan naar een rassenboek.",
    purebred: "Eén ras",
    mixed: "Kruising",
    breedLabel: "Welk ras?",
    notFromList: "Niet uit deze lijst",
    breedOtherPlaceholder: "Terriër",
    mixBreedsLabel: "Kent u een van de rassen in de kruising?",
    mixBreedsHint: "Kies zoveel als u weet. We gebruiken ze alleen als achtergrond – we zullen niet doen alsof we precies weten wat uw hond is.",
    unknownMix: "Onbekende kruising",
    unknownMixHint: "Niemand weet het, en dat is prima. Alles werkt nog steeds.",
    mixOtherLabel: "Hoe noemt u ze?",
    mixOtherPlaceholder: "Terriër mix van het asiel",
    observedLabel: "Hoe zou u uw hond omschrijven?",
    observedHint:
      "Dit is wat we als eerste gebruiken – uw eigen hond, niet een gemiddelde van een ras. Sla alles over waar u niet zeker van bent.",
    skip: "Niet zeker",
    scales: {
      size: { label: "Grootte", low: "Piepklein", high: "Reusachtig" },
      energy: { label: "Energie", low: "Heel rustig", high: "Stopt nooit" },
      exerciseNeeds: { label: "Beweging die ze nodig hebben", low: "Korte wandelingen", high: "Uren per dag" },
      trainability: { label: "Hoe makkelijk ze leren", low: "Kost tijd", high: "Pikt het snel op" },
      sociability: { label: "Met mensen en honden", low: "Gereserveerd", high: "Houdt van iedereen" },
      grooming: { label: "Vachtverzorging", low: "Wassen en gaan", high: "Dagelijks borstelen" },
      shedding: { label: "Verharen", low: "Nauwelijks", high: "Overal haar" },
      barking: { label: "Hoe vocaal", low: "Stil", high: "Heel vocaal" },
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
