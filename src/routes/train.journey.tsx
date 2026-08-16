import { createFileRoute } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow } from "@/components/dogmatch/ui";
import { LessonCard, statusLabels } from "@/components/dogmatch/training/parts";
import { getLessons, getLessonsById } from "@/data/training/lessons";
import type { SkillStatus } from "@/data/training/types";
import { rankLessons } from "@/lib/training/plan";
import { streakDays, useActiveDog, useProgress, useTrainingState } from "@/lib/training/store";

const title = "Your training journey | DoggMatch";
const description =
  "Everything you and your dog have worked on, in one place — what's going well, what needs practice, and what to try next.";

export const Route = createFileRoute("/train/journey")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/train/journey" }],
  }),
  component: JourneyPage,
});

const order: SkillStatus[] = ["learned", "getting-there", "practising", "not-started"];

function JourneyPage() {
  const dog = useActiveDog();
  const state = useTrainingState();
  const progress = useProgress(dog?.id);
  const recent = [...state.sessions].reverse().slice(0, 8);
  const nextUp = rankLessons(dog, progress)
    .filter((s) => (progress[s.lesson.id] ?? "not-started") !== "learned")
    .slice(0, 3);

  const grouped = order.map((status) => ({
    status,
    items: getLessons().filter((l) => (progress[l.id] ?? "not-started") === status),
  }));

  return (
    <div className="container-page pt-28 pb-28 md:pt-36">
      <Eyebrow>Your journey</Eyebrow>
      <h1 className="display-lg mt-5 max-w-2xl">
        {dog ? `You and ${dog.name}, so far.` : "Your journey together, once you start."}
      </h1>

      {!dog ? (
        <>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Tell us about your dog and we'll keep track of what you've worked on. Nothing leaves this
            device.
          </p>
          <div className="mt-8">
            <ButtonLink to="/train/setup" size="lg">
              Tell us about your dog
              <Arrow />
            </ButtonLink>
          </div>
        </>
      ) : (
        <>
          <div className="mt-10 grid gap-8 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-3">
            <Stat value={String(state.sessions.length)} label="Sessions together" />
            <Stat
              value={String(Object.values(progress).filter((s) => s === "learned").length)}
              label="Skills learned"
            />
            <Stat value={String(streakDays(state.sessions))} label="Days in a row" />
          </div>

          <section className="mt-20">
            <h2 className="display-md">Where everything stands</h2>
            <div className="mt-8 space-y-10">
              {grouped.map((g) => (
                <div key={g.status}>
                  <h3 className="font-display text-lg tracking-tight">
                    {statusLabels[g.status]}{" "}
                    <span className="text-muted-foreground">({g.items.length})</span>
                  </h3>
                  {g.items.length === 0 ? (
                    <p className="mt-2 text-[0.9375rem] text-muted-foreground">Nothing here yet.</p>
                  ) : (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((l) => (
                        <li
                          key={l.id}
                          className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                        >
                          {l.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {recent.length > 0 && (
            <section className="mt-20">
              <h2 className="display-md">Recent sessions</h2>
              <ul className="mt-8 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
                {recent.map((s, i) => (
                  <li
                    key={`${s.lessonId}-${s.day}-${i}`}
                    className="flex flex-wrap items-center justify-between gap-3 bg-background p-6"
                  >
                    <span className="font-display text-lg tracking-tight">
                      {getLessonsById()[s.lessonId]?.title ?? s.lessonId}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {s.day} ·{" "}
                      {s.feeling === "great"
                        ? "Went really well"
                        : s.feeling === "good"
                          ? "Good enough"
                          : "Needs more practice"}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-20">
            <h2 className="display-md">What to try next</h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {nextUp.map((s) => (
                <li key={s.lesson.id}>
                  <LessonCard lesson={s.lesson} status={progress[s.lesson.id]} note={s.reason} />
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl tabular-nums tracking-tight text-accent">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
