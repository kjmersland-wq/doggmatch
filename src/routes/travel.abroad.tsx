import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { Notice, PointList, SectionHead } from "@/components/dogmatch/journey/parts";
import { countries, transportModes, travelTimeline, type Rule } from "@/data/travel/countries";
import { beforeYouLeave } from "@/data/travel/content.en";
import { checkRoute, type Leg } from "@/lib/travel/rules";
import { getDogStore, useGetDog } from "@/lib/getdog/store";
import { cn } from "@/lib/utils";
import abroadImage from "@/assets/travel-abroad.jpg";
import illus from "@/assets/illus-travel-abroad.jpg";

const title = "Travelling abroad with your dog — country to country | DoggMatch";
const description =
  "Tell us where you're travelling from, where you're going and when. We'll show what's usually required — microchip, rabies, passport, tapeworm — and link the official source.";

export const Route = createFileRoute("/travel/abroad")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/travel/abroad" }],
  }),
  component: AbroadPage,
});

function AbroadPage() {
  const state = useGetDog();
  const trip = state.trip;
  const check = useMemo(
    () => checkRoute({ from: trip.from, to: trip.to, transit: trip.transit }),
    [trip.from, trip.to, trip.transit],
  );
  const ready = Boolean(trip.from && trip.to);

  return (
    <div className="pb-24">
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="eyebrow">Crossing borders</p>
            <h1 className="display-xl mt-6">Travelling abroad with your dog.</h1>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Requirements depend entirely on where you're leaving from and where you're going. Tell us
              the route and we'll show what's usually needed — and where to confirm it properly.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img src={abroadImage} alt="A dog waiting calmly beside a suitcase in an airy departure hall" width={1600} height={1100} fetchPriority="high" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- The form */}
      <Section className="pt-14 md:pt-20">
        <div className="container-page">
          <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10">
            <p className="eyebrow">Your journey</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Field label="Travelling from">
                <Select
                  value={trip.from ?? ""}
                  onChange={(v) => getDogStore.setTrip({ from: v || undefined })}
                  placeholder="Choose a country"
                />
              </Field>
              <Field label="Travelling to">
                <Select
                  value={trip.to ?? ""}
                  onChange={(v) => getDogStore.setTrip({ to: v || undefined })}
                  placeholder="Choose a country"
                />
              </Field>
              <Field label="When are you going?">
                <input
                  type="date"
                  value={trip.date ?? ""}
                  onChange={(e) => getDogStore.setTrip({ date: e.target.value || undefined })}
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-[0.9375rem] outline-none transition-colors focus:border-accent"
                />
              </Field>
            </div>

            <div className="mt-8">
              <p className="eyebrow">How are you travelling?</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {transportModes.map((mode) => {
                  const on = trip.transport === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => getDogStore.setTrip({ transport: on ? undefined : mode.id })}
                      className={cn(
                        "h-11 rounded-full border px-5 text-[0.9375rem] transition-colors",
                        on ? "border-accent bg-accent text-accent-foreground" : "border-border hover:border-border-strong",
                      )}
                    >
                      {mode.label}
                    </button>
                  );
                })}
              </div>
              {trip.transport && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {transportModes.find((m) => m.id === trip.transport)?.note}
                </p>
              )}
            </div>

            {trip.date && (
              <p className="mt-8 text-sm text-muted-foreground">
                Some steps have waiting periods measured in weeks, so the date matters. Work backwards
                from {new Date(trip.date).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })} using the timeline below.
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- The answer */}
      {ready && (
        <Section className="pt-0">
          <div className="container-page">
            {check.outbound ? <LegPanel leg={check.outbound} heading="Going" /> : null}
            {check.ret ? (
              <div className="mt-12">
                <LegPanel leg={check.ret} heading="Coming home" />
              </div>
            ) : null}

            {!check.outbound && (
              <Notice title="We don't hold verified rules for that route yet">
                Rather than guess, we'd point you at the official authority in the country you're
                travelling to. Their guidance is the only version that counts at the border.
              </Notice>
            )}
          </div>
        </Section>
      )}

      {/* --------------------------------------------------------- Timeline */}
      <Section className={cn("bg-surface", ready ? "pt-0" : "")}>
        <div className="container-page pt-20 md:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <SectionHead
                eyebrow="Timing"
                title="Start earlier than feels necessary."
                body="The most common reason a trip falls through is a waiting period nobody knew about. Nothing here is difficult — it just takes longer than you'd think."
              />
              <ol className="mt-10 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
                {travelTimeline.map((row) => (
                  <li key={row.when} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 bg-background p-6">
                    <span className="font-display text-[0.9375rem] text-accent">{row.when}</span>
                    <span className="flex-1 text-[0.9375rem] text-muted-foreground">{row.what}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] lg:sticky lg:top-28 lg:self-start">
              <img src={illus} alt="An illustrated pet passport, microchip scanner and travel documents" width={1200} height={1200} loading="lazy" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- Travel pack */}
      <Section className="pt-0">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Before you leave" title="The last check at the door." />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <PointList items={beforeYouLeave} />
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">On paper</p>
            <h2 className="display-md mt-4">The Dog Travel Pack.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Everything you'd want on you at a border or in a foreign vet's waiting room: your dog's
              details, microchip number, vaccinations, medication, feeding, emergency contacts and the
              checklist for this journey — on paper, working when your phone doesn't.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/my-dog/print" size="lg">
                Print my travel pack
                <Arrow />
              </ButtonLink>
              <ButtonLink to="/my-dog" tone="outline" size="lg">
                My Dog
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <div className="container-page max-w-3xl">
        <Notice title="Please treat this as a starting point">
          Pet travel rules change, and they differ by the exact country you're leaving as well as the one
          you're entering. Everything here points at the official authority for the final word — always
          confirm with them, and with your vet, before you book.
        </Notice>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------- Fragments */

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 w-full rounded-xl border border-border bg-background px-4 text-[0.9375rem] outline-none transition-colors focus:border-accent"
    >
      <option value="">{placeholder}</option>
      {countries.map((c) => (
        <option key={c.code} value={c.code}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

function LegPanel({ leg, heading }: { leg: Leg; heading: string }) {
  return (
    <div className="rounded-[1.75rem] border border-border bg-card p-8 md:p-12">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="eyebrow">{heading}</p>
          <h2 className="display-lg mt-3">
            {leg.from.name} <span className="text-accent">→</span> {leg.to.name}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">
          {leg.withinEu ? "Within the EU pet travel scheme" : "Crossing into or out of the scheme"}
        </p>
      </div>

      {!leg.known ? (
        <p className="mt-8 leading-relaxed text-muted-foreground">
          We don't hold verified rules for this direction, so we won't guess at them. The official
          source below is the one that counts.
        </p>
      ) : (
        <>
          <RuleGroup title="Required" rules={leg.required} accent />
          <RuleGroup title="Strongly recommended" rules={leg.recommended} />
          <RuleGroup title="Good to have" rules={leg.goodToHave} />

          {leg.ruleSet && (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-surface p-6">
                <p className="eyebrow">Quarantine</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{leg.ruleSet.quarantine}</p>
              </div>
              <div className="rounded-2xl bg-surface p-6">
                <p className="eyebrow">Minimum age</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{leg.ruleSet.minimumAge}</p>
              </div>
            </div>
          )}

          {leg.ruleSet?.notes?.length ? (
            <ul className="mt-8 space-y-3">
              {leg.ruleSet.notes.map((note) => (
                <li key={note} className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
        </>
      )}

      <div className="mt-10 border-t border-border pt-6">
        <p className="eyebrow">Check it here</p>
        <ul className="mt-4 space-y-3">
          {leg.sources.map((s) => (
            <li key={s.url} className="text-[0.9375rem]">
              <a
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                className="font-medium underline decoration-accent underline-offset-4 hover:text-accent"
              >
                {s.name}
              </a>
              <span className="text-muted-foreground"> — {s.country}. We last checked this on {s.lastChecked}.</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RuleGroup({ title, rules, accent }: { title: string; rules: Rule[]; accent?: boolean }) {
  if (rules.length === 0) return null;
  return (
    <div className="mt-10">
      <p className={cn("eyebrow", accent && "text-accent")}>{title}</p>
      <ul className="mt-5 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
        {rules.map((rule) => (
          <li key={rule.id} className="bg-background p-6">
            <p className="font-display text-[1.0625rem] leading-tight tracking-tight">{rule.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{rule.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}