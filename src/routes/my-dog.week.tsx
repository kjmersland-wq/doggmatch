import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Arrow, Button, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, VetNote } from "@/components/dogmatch/care/parts";
import { buildWeek, dayNames, kindLabel } from "@/lib/care/week";
import { recordsStore, useWeekOverride } from "@/lib/care/records";
import { useCareProfile, useMyDog } from "@/lib/care/store";
import { useProgress } from "@/lib/training/store";

const title = "My Dog Week — a simple week with your dog | DoggMatch";
const description =
  "A calm weekly overview built from your dog's age, breed, activity and training: walks, short sessions, meals and the bits of care that are easy to forget.";

export const Route = createFileRoute("/my-dog/week")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/my-dog/week" }],
  }),
  component: WeekPage,
});

function WeekPage() {
  const dog = useMyDog();
  const care = useCareProfile(dog?.id);
  const progress = useProgress(dog?.id);
  const override = useWeekOverride(dog?.id);
  const week = buildWeek(dog, care, progress, override);
  const [adding, setAdding] = useState<number | undefined>(undefined);
  const [text, setText] = useState("");

  const todayIndex = (new Date().getDay() + 6) % 7;

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>My Dog Week</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">
          {dog ? `${dog.name}'s week` : "A week with your dog"}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Here's what you may want to remember this week. It's put together from what you've told us
          about your dog — nothing is fixed, so take out anything that doesn't suit your days.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink to="/my-dog/print" size="lg">
            Print this week
            <Arrow />
          </ButtonLink>
          {(override.removed.length > 0 || override.added.length > 0) && dog && (
            <Button tone="outline" size="lg" onClick={() => recordsStore.restoreWeek(dog.id)}>
              Put the suggestions back
            </Button>
          )}
        </div>
      </section>

      <Section className="container-page">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {week.map((day) => (
            <Panel
              key={day.index}
              title={day.name}
              className={day.index === todayIndex ? "border-accent/50" : ""}
              action={
                day.index === todayIndex ? (
                  <span className="text-sm text-accent">Today</span>
                ) : undefined
              }
            >
              <ul className="grid gap-2">
                {day.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start gap-3 rounded-[1rem] border border-border bg-surface px-4 py-3"
                  >
                    <span className="mt-[3px] shrink-0 text-xs uppercase tracking-[0.12em] text-accent">
                      {kindLabel(item.kind)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.9375rem]">{item.label}</span>
                      {item.detail && (
                        <span className="block text-sm text-muted-foreground">{item.detail}</span>
                      )}
                    </span>
                    {dog && (
                      <button
                        type="button"
                        aria-label={`Remove ${item.label} from ${day.name}`}
                        onClick={() => recordsStore.removeWeekItem(dog.id, item.id)}
                        className="shrink-0 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {dog && adding === day.index ? (
                <form
                  className="mt-4 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (text.trim()) recordsStore.addWeekItem(dog.id, day.index, text.trim());
                    setText("");
                    setAdding(undefined);
                  }}
                >
                  <input
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Puppy class, long walk…"
                    className="w-full rounded-full border border-border bg-background px-4 py-2 text-[0.9375rem] outline-none focus:border-border-strong"
                  />
                  <Button type="submit" size="md">
                    Add
                  </Button>
                </form>
              ) : (
                dog && (
                  <button
                    type="button"
                    onClick={() => setAdding(day.index)}
                    className="mt-4 text-sm text-accent underline-offset-4 hover:underline"
                  >
                    Add something of your own
                  </button>
                )
              )}
            </Panel>
          ))}
        </div>

        {!dog && (
          <p className="mt-8 text-sm text-muted-foreground">
            This week is generic until you tell us about your dog.{" "}
            <a href="/my-dog/setup" className="text-accent underline-offset-4 hover:underline">
              Add your dog
            </a>{" "}
            and it'll fit them properly.
          </p>
        )}

        <div className="mt-10 max-w-2xl">
          <VetNote>
            Days like these are a rhythm, not a rulebook. Some weeks are busier than others, and a
            missed walk or a skipped brush isn't a failure — it's just life with a dog.
          </VetNote>
        </div>
      </Section>

      <p className="container-page text-sm text-muted-foreground">
        Suggestions for {dayNames.length} days, worked out from your dog's details — never from a
        guess or a model.
      </p>
    </div>
  );
}