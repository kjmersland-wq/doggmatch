import { useT } from "@/i18n";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import type { UserProfile } from "@/lib/matching/types";

type AllergyKey = "none" | "mild" | "significant" | "unsure";
type WellbeingKey = "no" | "some" | "important" | "very";

const ALLERGY_KEYS: readonly AllergyKey[] = ["none", "mild", "significant", "unsure"];
const WELLBEING_KEYS: readonly WellbeingKey[] = ["no", "some", "important", "very"];

function keyOf<T extends string>(value: string | undefined, allowed: readonly T[], fallback: T): T {
  return allowed.includes(value as T) ? (value as T) : fallback;
}

/**
 * Explains, in plain words, how the two newest dimensions moved the result —
 * plus the honest limits of each. Rendered under the score breakdown.
 */
export function MatchNotes({ profile }: { profile: UserProfile }) {
  const t = useT();
  const n = t.matchNotes;
  const allergy = keyOf(profile["allergy"], ALLERGY_KEYS, "none");
  const wellbeing = keyOf(profile["wellbeing"], WELLBEING_KEYS, "no");

  return (
    <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
      <section className="bg-card p-8 md:p-10">
        <h3 className="font-display text-lg leading-tight tracking-tight">{n.allergyTitle}</h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
          {n.allergy[allergy]}
        </p>
        <p className="mt-5 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
          {n.allergyDisclaimer}
        </p>
        <SourcesLink category="allergy" className="mt-5" />
      </section>
      <section className="bg-card p-8 md:p-10">
        <h3 className="font-display text-lg leading-tight tracking-tight">{n.wellbeingTitle}</h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
          {n.wellbeing[wellbeing]}
        </p>
        <p className="mt-5 border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
          {n.wellbeingDisclaimer}
        </p>
        <SourcesLink category="wellbeing" className="mt-5" />
      </section>
    </div>
  );
}