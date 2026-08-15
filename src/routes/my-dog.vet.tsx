import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Arrow, Button, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, VetNote } from "@/components/dogmatch/care/parts";
import { recordsStore, useVisits, type VetVisit } from "@/lib/care/records";
import { useCareProfile, useMyDog, todayKey } from "@/lib/care/store";

const title = "Vet visit notes — questions and what you were told | DoggMatch";
const description =
  "Write down what you've noticed and what you want to ask before a vet appointment, then print it and take it with you.";

export const Route = createFileRoute("/my-dog/vet")({
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
    links: [{ rel: "canonical", href: "/my-dog/vet" }],
  }),
  component: VetPage,
});

const fieldClass =
  "mt-2 w-full rounded-[0.9rem] border border-border bg-background px-4 py-3 text-[0.9375rem] outline-none transition-colors focus:border-border-strong";

function VetPage() {
  const dog = useMyDog();
  const care = useCareProfile(dog?.id);
  const visits = useVisits(dog?.id);
  const [draft, setDraft] = useState<Omit<VetVisit, "id">>({
    date: todayKey(),
    reason: "",
    ...(care.weightKg ? { weightKg: care.weightKg } : {}),
    questions: "",
    notes: "",
    followUp: "",
    next: "",
  });

  const set = (patch: Partial<VetVisit>) => setDraft((d) => ({ ...d, ...patch }));

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>Vet visits</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">
          {dog ? `Taking ${dog.name} to the vet` : "Taking your dog to the vet"}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          It's easy to forget half of what you meant to say once you're in the room. Write it down
          here, print it, and take it with you.
        </p>
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Panel title="Before we go">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Date</span>
                <input
                  type="date"
                  value={draft.date}
                  onChange={(e) => set({ date: e.target.value })}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Weight (kg)</span>
                <input
                  type="number"
                  step="0.1"
                  value={draft.weightKg ?? ""}
                  onChange={(e) =>
                    setDraft((d) => {
                      const next = { ...d };
                      if (e.target.value) next.weightKg = Number(e.target.value);
                      else delete next.weightKg;
                      return next;
                    })
                  }
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Why we're going</span>
              <textarea rows={2} value={draft.reason ?? ""} onChange={(e) => set({ reason: e.target.value })} className={fieldClass} />
            </label>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">What I want to ask</span>
              <textarea rows={4} value={draft.questions ?? ""} onChange={(e) => set({ questions: e.target.value })} className={fieldClass} />
            </label>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">What we were told</span>
              <textarea rows={4} value={draft.notes ?? ""} onChange={(e) => set({ notes: e.target.value })} className={fieldClass} />
            </label>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Follow-up</span>
                <input value={draft.followUp ?? ""} onChange={(e) => set({ followUp: e.target.value })} className={fieldClass} />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Next appointment</span>
                <input type="date" value={draft.next ?? ""} onChange={(e) => set({ next: e.target.value })} className={fieldClass} />
              </label>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => {
                  if (dog) recordsStore.saveVisit(dog.id, draft);
                }}
              >
                Save this visit
              </Button>
              <ButtonLink to="/my-dog/pack" search={{ docs: "vet" }} tone="outline" size="lg">
                Print it
                <Arrow />
              </ButtonLink>
            </div>
            {!dog && (
              <p className="mt-4 text-sm text-muted-foreground">
                Add your dog first if you'd like this kept for next time.
              </p>
            )}
          </Panel>

          <div className="grid content-start gap-6">
            <Panel title="Visits you've saved">
              {visits.length === 0 ? (
                <p className="text-[0.9375rem] text-muted-foreground">
                  Nothing saved yet. Once you've been, keep the notes here — it helps to look back.
                </p>
              ) : (
                <ul className="grid gap-3">
                  {visits.map((v) => (
                    <li key={v.id} className="rounded-[1rem] border border-border bg-surface px-4 py-3">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="text-[0.9375rem] tabular-nums">{v.date}</span>
                        <button
                          type="button"
                          onClick={() => dog && recordsStore.removeVisit(dog.id, v.id)}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          Remove
                        </button>
                      </div>
                      {v.reason && <p className="mt-1 text-sm text-muted-foreground">{v.reason}</p>}
                    </li>
                  ))}
                </ul>
              )}
            </Panel>

            <VetNote>
              This information is entered by you to help organise your observations and questions for
              a veterinary visit. Your vet is the one who can examine your dog and advise you.
            </VetNote>
          </div>
        </div>
      </Section>
    </div>
  );
}