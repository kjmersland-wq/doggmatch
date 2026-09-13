import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Lock, PawPrint } from "lucide-react";
import { useCopy } from "@/i18n";
import { Arrow, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";
import { Panel, RoutineRow, Stat, VetNote } from "@/components/dogmatch/care/parts";
import { estimatePortions } from "@/lib/care/portions";
import { withLangPrefix } from "@/lib/localized-path";
import { seoLinks, abs } from "@/lib/seo";

const title = "My Dog — a peek inside | DoggMatch";
const description =
  "See what everyday life in the My Dog hub looks like: today's little routine, a weekly rhythm, one training lesson and a real food portion example.";

export const Route = createFileRoute("/{-$lang}/my-dog/preview")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: abs("/my-dog/preview") },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/my-dog/preview"),
  }),
  component: MyDogPreview,
});

/**
 * English is the source language. Other locales fall back to English here
 * until the translations land — same pattern as the /plus journey stages.
 */
const copy = {
  en: {
    eyebrow: "My Dog · a peek inside",
    title: "This is what everyday life with your dog can look like",
    intro:
      "Before you add your own dog, have a wander through a real example. This is Luna — an adult dog, 18 kg, moderately active. Everything below is exactly how the hub works, just with her details instead of yours.",
    sampleNote: "Sample dog: Luna · adult · 18 kg · two meals a day",

    todayTitle: "Today",
    todayIntro:
      "A short daily routine, built around your dog. None of it has to be perfect — tick off what you've done and it resets tomorrow. Go on, try ticking one.",
    todayHint: "In the preview nothing is saved — once your dog is added, the days remember themselves.",
    routineItems: [
      { id: "fresh-water", label: "Fresh water", hint: "Clean bowl, topped up", done: true },
      { id: "measured-meals", label: "Meals measured", hint: "Weighed, not guessed", done: true },
      { id: "walk", label: "A proper walk", hint: "With time to sniff", done: false },
      { id: "play", label: "A bit of play", hint: "Ten minutes counts", done: false },
      { id: "teeth", label: "Teeth", hint: "Even thirty seconds helps", done: false },
      { id: "paw-check", label: "Paw check", hint: "After the walk", done: false },
    ],

    weekTitle: "One weekly rhythm",
    weekIntro:
      "Every dog gets a week that fits them — walks, training, food and care spread sensibly, so nothing piles up on one day. Here's Luna's.",
    weekDays: [
      { day: "Mon", focus: "Normal walk · quick brush" },
      { day: "Tue", focus: "Training: settle on a mat" },
      { day: "Wed", focus: "Longer walk · teeth" },
      { day: "Thu", focus: "Training: recall games" },
      { day: "Fri", focus: "Normal walk · paw check" },
      { day: "Sat", focus: "Adventure walk somewhere new" },
      { day: "Sun", focus: "Quiet day · weigh-in" },
    ],

    lessonTitle: "One training lesson, as it actually looks",
    lessonName: "Settle on a mat",
    lessonMeta: "5 minutes · beginner · indoors",
    lessonIntro:
      "Every lesson is short enough to do before dinner. This one teaches your dog to relax on their mat — quietly useful for cafés, visitors and busy evenings.",
    lessonSteps: [
      "Put the mat on the floor and drop a treat on it. Say nothing.",
      "When all four paws are on the mat, drop another treat between their feet.",
      "Wait for them to lie down, then calmly place a few treats on the mat, one at a time.",
      "After a minute, cheerfully release them and take the mat away. Done for today.",
    ],
    lessonTimer: "A built-in timer keeps the session honest — short sessions, often, beat long ones.",
    lessonCta: "Browse the training lessons",

    foodTitle: "A real food portion, worked out for her",
    foodIntro:
      "Portions come from her weight, age, activity and the food's energy — not a guess on the back of a bag. Here's Luna's day in numbers.",
    foodDailyKcal: "Daily energy",
    foodGramsDay: "Food per day",
    foodGramsMeal: "Per meal · 2 meals",
    foodTreats: "Treat budget",
    foodKcalUnit: "kcal",
    foodGramsUnit: "g",
    foodNote:
      "The same calculation runs for your dog the moment you tell us their weight and food. If they gain or lose, the portion adjusts with them.",

    unlockTitle: "What opens up with DoggMatch+",
    unlockIntro:
      "Everything above works with your own dog for free. DoggMatch+ is for people who want the whole day-to-day picture, kept for them.",
    unlockItems: [
      { title: "Saved days and weeks", body: "Your routine, week rhythm and progress remembered — across phone and computer." },
      { title: "Weight and health records", body: "Weigh-ins, vet notes and a care calendar that nudges you before things slip." },
      { title: "Full training library", body: "Every lesson and behaviour programme, with progression that follows your dog." },
      { title: "Travel documents and printing", body: "The printable Dog Pack, vet summaries and travel checklists, ready when you need them." },
    ],
    unlockCtaPrimary: "See DoggMatch+",
    unlockCtaSecondary: "Add your dog — it's free",
    unlockNote:
      "No pressure, and nothing here locks you in. The free version stays genuinely useful on its own — Plus is simply there when daily life gets busy.",

    backToResults: "Back to my matches",
  },
} as const;

function MyDogPreview() {
  const c = useCopy(copy);
  const [ticked, setTicked] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(c.routineItems.map((r) => [r.id, r.done])),
  );

  const portions = estimatePortions(18, "adult", {
    neutered: true,
    activity: "moderate",
    foodEnergy: 360,
    mealsPerDay: 2,
  });

  return (
    <div className="mx-auto w-full max-w-4xl px-5 pb-24 pt-28 md:px-8 md:pt-36">
      <Eyebrow>{c.eyebrow}</Eyebrow>
      <h1 className="display-lg mt-5 max-w-2xl">{c.title}</h1>
      <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground">
        <PawPrint className="h-4 w-4 text-accent" aria-hidden="true" />
        {c.sampleNote}
      </p>

      {/* Today */}
      <div className="mt-14">
        <Panel title={c.todayTitle}>
          <p className="mb-5 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {c.todayIntro}
          </p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {c.routineItems.map((item) => (
              <li key={item.id}>
                <RoutineRow
                  label={item.label}
                  hint={item.hint}
                  done={ticked[item.id] ?? false}
                  onToggle={() => setTicked((s) => ({ ...s, [item.id]: !s[item.id] }))}
                />
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">{c.todayHint}</p>
        </Panel>
      </div>

      {/* Weekly rhythm */}
      <div className="mt-6">
        <Panel title={c.weekTitle}>
          <p className="mb-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {c.weekIntro}
          </p>
          <ol className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {c.weekDays.map((d) => (
              <li
                key={d.day}
                className="rounded-[1.15rem] border border-border bg-surface px-5 py-4"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-accent">{d.day}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-snug">{d.focus}</p>
              </li>
            ))}
          </ol>
        </Panel>
      </div>

      {/* Sample lesson */}
      <div className="mt-6">
        <Panel title={c.lessonTitle}>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-lg tracking-tight">{c.lessonName}</h3>
            <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {c.lessonMeta}
            </p>
          </div>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {c.lessonIntro}
          </p>
          <ol className="mt-5 space-y-3">
            {c.lessonSteps.map((step, i) => (
              <li key={i} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm tabular-nums text-accent"
                >
                  {i + 1}
                </span>
                <p className="pt-0.5 text-[0.9375rem] leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm text-muted-foreground">{c.lessonTimer}</p>
          <div className="mt-6">
            <ButtonLink to={withLangPrefix("/train")} tone="outline">
              {c.lessonCta}
              <Arrow />
            </ButtonLink>
          </div>
        </Panel>
      </div>

      {/* Food portion example */}
      <div className="mt-6">
        <Panel title={c.foodTitle}>
          <p className="mb-6 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground">
            {c.foodIntro}
          </p>
          {portions && (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Stat label={c.foodDailyKcal} value={`${portions.dailyKcal} ${c.foodKcalUnit}`} />
              <Stat
                label={c.foodGramsDay}
                value={portions.gramsPerDay ? `${portions.gramsPerDay} ${c.foodGramsUnit}` : "—"}
              />
              <Stat
                label={c.foodGramsMeal}
                value={portions.gramsPerMeal ? `${portions.gramsPerMeal} ${c.foodGramsUnit}` : "—"}
              />
              <Stat label={c.foodTreats} value={`${portions.treatKcal} ${c.foodKcalUnit}`} />
            </div>
          )}
          <VetNote>{c.foodNote}</VetNote>
        </Panel>
      </div>

      {/* What Plus unlocks */}
      <div className="mt-14 rounded-[1.75rem] border border-border bg-surface p-8 md:p-12">
        <p className="eyebrow inline-flex items-center gap-2">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          DoggMatch+
        </p>
        <h2 className="display-md mt-4 max-w-xl">{c.unlockTitle}</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{c.unlockIntro}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {c.unlockItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-border-strong"
            >
              <h3 className="font-display text-lg leading-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <ButtonLink to={withLangPrefix("/my-dog/setup")} size="lg">
            {c.unlockCtaSecondary}
            <Arrow />
          </ButtonLink>
          <ButtonLink to={withLangPrefix("/plus")} tone="outline" size="lg">
            {c.unlockCtaPrimary}
          </ButtonLink>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {c.unlockNote}
        </p>
      </div>
    </div>
  );
}
