import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Arrow, Button, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel, VetNote } from "@/components/dogmatch/care/parts";
import { recordsStore, useVisits, type VetVisit } from "@/lib/care/records";
import { useCareProfile, useMyDog, todayKey } from "@/lib/care/store";
import { useCopy } from "@/i18n";

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

const copy = {
  en: {
    eyebrow: "Vet visits",
    titleFor: (name: string) => `Taking ${name} to the vet`,
    titleFallback: "Taking your dog to the vet",
    intro:
      "It's easy to forget half of what you meant to say once you're in the room. Write it down here, print it, and take it with you.",
    beforeWeGo: "Before we go",
    date: "Date",
    weight: "Weight (kg)",
    reason: "Why we're going",
    questions: "What I want to ask",
    notes: "What we were told",
    followUp: "Follow-up",
    next: "Next appointment",
    saveVisit: "Save this visit",
    printIt: "Print it",
    addDogNote: "Add your dog first if you'd like this kept for next time.",
    visitsSavedTitle: "Visits you've saved",
    noVisits: "Nothing saved yet. Once you've been, keep the notes here — it helps to look back.",
    remove: "Remove",
    vetNote:
      "This information is entered by you to help organise your observations and questions for a veterinary visit. Your vet is the one who can examine your dog and advise you.",
  },
  no: {
    eyebrow: "Veterinærbesøk",
    titleFor: (name: string) => `Ta ${name} til veterinæren`,
    titleFallback: "Ta hunden din til veterinæren",
    intro:
      "Det er lett å glemme halvparten av det du hadde tenkt å si når du først står der. Skriv det ned her, skriv det ut, og ta det med deg.",
    beforeWeGo: "Før vi drar",
    date: "Dato",
    weight: "Vekt (kg)",
    reason: "Hvorfor vi skal dit",
    questions: "Det jeg vil spørre om",
    notes: "Det vi fikk beskjed om",
    followUp: "Oppfølging",
    next: "Neste time",
    saveVisit: "Lagre dette besøket",
    printIt: "Skriv ut",
    addDogNote: "Legg til hunden din først hvis du vil ha dette lagret til neste gang.",
    visitsSavedTitle: "Besøk du har lagret",
    noVisits: "Ingenting lagret ennå. Når du har vært der, ta vare på notatene her — det er nyttig å se tilbake på.",
    remove: "Fjern",
    vetNote:
      "Denne informasjonen skrives inn av deg for å organisere dine observasjoner og spørsmål til et veterinærbesøk. Veterinæren din er den som kan undersøke hunden din og gi deg råd.",
  },
} as const;

function VetPage() {
  const c = useCopy(copy);
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
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">
          {dog ? c.titleFor(dog.name) : c.titleFallback}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Panel title={c.beforeWeGo}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.date}</span>
                <input
                  type="date"
                  value={draft.date}
                  onChange={(e) => set({ date: e.target.value })}
                  className={fieldClass}
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.weight}</span>
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
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.reason}</span>
              <textarea rows={2} value={draft.reason ?? ""} onChange={(e) => set({ reason: e.target.value })} className={fieldClass} />
            </label>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.questions}</span>
              <textarea rows={4} value={draft.questions ?? ""} onChange={(e) => set({ questions: e.target.value })} className={fieldClass} />
            </label>
            <label className="mt-4 block">
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.notes}</span>
              <textarea rows={4} value={draft.notes ?? ""} onChange={(e) => set({ notes: e.target.value })} className={fieldClass} />
            </label>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.followUp}</span>
                <input value={draft.followUp ?? ""} onChange={(e) => set({ followUp: e.target.value })} className={fieldClass} />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.next}</span>
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
                {c.saveVisit}
              </Button>
              <ButtonLink to="/my-dog/pack" search={{ docs: "vet" } as never} tone="outline" size="lg">
                {c.printIt}
                <Arrow />
              </ButtonLink>
            </div>
            {!dog && (
              <p className="mt-4 text-sm text-muted-foreground">{c.addDogNote}</p>
            )}
          </Panel>

          <div className="grid content-start gap-6">
            <Panel title={c.visitsSavedTitle}>
              {visits.length === 0 ? (
                <p className="text-[0.9375rem] text-muted-foreground">{c.noVisits}</p>
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
                          {c.remove}
                        </button>
                      </div>
                      {v.reason && <p className="mt-1 text-sm text-muted-foreground">{v.reason}</p>}
                    </li>
                  ))}
                </ul>
              )}
            </Panel>

            <VetNote>{c.vetNote}</VetNote>
          </div>
        </div>
      </Section>
    </div>
  );
}
