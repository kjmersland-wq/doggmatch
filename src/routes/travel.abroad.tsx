import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Arrow, ButtonLink, Section } from "@/components/dogmatch/ui";
import { Notice, PointList, SectionHead } from "@/components/dogmatch/journey/parts";
import { getCountries, getTransportModes, getTravelTimeline, type Rule } from "@/data/travel/countries";
import { getBeforeYouLeave } from "@/data/travel/content";
import { useCopy } from "@/i18n";
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

const copy = {
  en: {
    eyebrow: "Crossing borders",
    title: "Travelling abroad with your dog.",
    intro:
      "Requirements depend entirely on where you're leaving from and where you're going. Tell us the route and we'll show what's usually needed — and where to confirm it properly.",
    heroAlt: "A dog waiting calmly beside a suitcase in an airy departure hall",
    journeyEyebrow: "Your journey",
    fromLabel: "Travelling from",
    toLabel: "Travelling to",
    dateLabel: "When are you going?",
    countryPlaceholder: "Choose a country",
    transportEyebrow: "How are you travelling?",
    datePrefix: "Some steps have waiting periods measured in weeks, so the date matters. Work backwards from",
    dateSuffix: "using the timeline below.",
    dateLocale: "en-GB",
    going: "Going",
    comingHome: "Coming home",
    noRulesTitle: "We don't hold verified rules for that route yet",
    noRulesBody:
      "Rather than guess, we'd point you at the official authority in the country you're travelling to. Their guidance is the only version that counts at the border.",
    timingEyebrow: "Timing",
    timingTitle: "Start earlier than feels necessary.",
    timingBody:
      "The most common reason a trip falls through is a waiting period nobody knew about. Nothing here is difficult — it just takes longer than you'd think.",
    timelineAlt: "An illustrated pet passport, microchip scanner and travel documents",
    beforeYouLeaveEyebrow: "Before you leave",
    beforeYouLeaveTitle: "The last check at the door.",
    onPaperEyebrow: "On paper",
    packTitle: "The Dog Travel Pack.",
    packBody:
      "Everything you'd want on you at a border or in a foreign vet's waiting room: your dog's details, microchip number, vaccinations, medication, feeding, emergency contacts and the checklist for this journey — on paper, working when your phone doesn't.",
    printCta: "Print my travel pack",
    myDogCta: "My Dog",
    finalNoticeTitle: "Please treat this as a starting point",
    finalNoticeBody:
      "Pet travel rules change, and they differ by the exact country you're leaving as well as the one you're entering. Everything here points at the official authority for the final word — always confirm with them, and with your vet, before you book.",
    withinEu: "Within the EU pet travel scheme",
    outsideEu: "Crossing into or out of the scheme",
    unknownLeg:
      "We don't hold verified rules for this direction, so we won't guess at them. The official source below is the one that counts.",
    required: "Required",
    recommended: "Strongly recommended",
    goodToHave: "Good to have",
    quarantine: "Quarantine",
    minimumAge: "Minimum age",
    checkItHere: "Check it here",
    lastCheckedPrefix: "We last checked this on",
  },
  no: {
    eyebrow: "Over landegrenser",
    title: "Reise til utlandet med hunden din.",
    intro:
      "Kravene avhenger helt av hvor du reiser fra og hvor du skal. Fortell oss ruten, så viser vi hva som vanligvis kreves — og hvor du kan bekrefte det ordentlig.",
    heroAlt: "En hund som venter rolig ved en koffert i en luftig avgangshall",
    journeyEyebrow: "Reisen din",
    fromLabel: "Reiser fra",
    toLabel: "Reiser til",
    dateLabel: "Når skal dere reise?",
    countryPlaceholder: "Velg et land",
    transportEyebrow: "Hvordan reiser dere?",
    datePrefix: "Noen krav har ventetider på flere uker, så datoen har betydning. Regn bakover fra",
    dateSuffix: "med tidslinjen under.",
    dateLocale: "nb-NO",
    going: "På vei ut",
    comingHome: "Hjemreise",
    noRulesTitle: "Vi har ikke verifiserte regler for den ruten ennå",
    noRulesBody:
      "Fremfor å gjette, viser vi til den offisielle myndigheten i landet dere skal til. Deres veiledning er den eneste som gjelder ved grensen.",
    timingEyebrow: "Tidsbruk",
    timingTitle: "Start tidligere enn du tror er nødvendig.",
    timingBody:
      "Den vanligste grunnen til at en reise ikke går som planlagt, er en ventetid ingen visste om. Ingenting her er vanskelig — det bare tar lengre tid enn man skulle tro.",
    timelineAlt: "Illustrasjon av hundepass, mikrochip-skanner og reisedokumenter",
    beforeYouLeaveEyebrow: "Før dere drar",
    beforeYouLeaveTitle: "Den siste sjekken i døra.",
    onPaperEyebrow: "På papir",
    packTitle: "Hundereisepakken.",
    packBody:
      "Alt du vil ha med deg ved en grense eller på venterommet hos en utenlandsk veterinær: hundens opplysninger, mikrochipnummer, vaksiner, medisiner, fôring, nødkontakter og sjekklisten for denne reisen — på papir, som fungerer når mobilen ikke gjør det.",
    printCta: "Skriv ut reisepakken min",
    myDogCta: "Min hund",
    finalNoticeTitle: "Bruk dette som et utgangspunkt",
    finalNoticeBody:
      "Regler for hundereiser endrer seg, og de varierer med nøyaktig hvilket land du reiser fra og hvilket du reiser til. Alt her peker mot den offisielle myndigheten for det endelige svaret — bekreft alltid med dem, og med veterinæren din, før dere bestiller.",
    withinEu: "Innenfor EUs ordning for kjæledyrreiser",
    outsideEu: "Krysser inn eller ut av ordningen",
    unknownLeg:
      "Vi har ikke verifiserte regler for denne retningen, så vi gjetter ikke. Den offisielle kilden under er den som gjelder.",
    required: "Kreves",
    recommended: "Anbefales sterkt",
    goodToHave: "Fint å ha",
    quarantine: "Karantene",
    minimumAge: "Minstealder",
    checkItHere: "Sjekk det her",
    lastCheckedPrefix: "Vi sjekket dette sist",
  },
} as const;

function AbroadPage() {
  const c = useCopy(copy);
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
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="display-xl mt-6">{c.title}</h1>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img src={abroadImage} alt={c.heroAlt} width={1600} height={1100} fetchPriority="high" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- The form */}
      <Section className="pt-14 md:pt-20">
        <div className="container-page">
          <div className="rounded-[1.75rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10">
            <p className="eyebrow">{c.journeyEyebrow}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <Field label={c.fromLabel}>
                <Select
                  value={trip.from ?? ""}
                  onChange={(v) => getDogStore.setTrip({ from: v || undefined })}
                  placeholder={c.countryPlaceholder}
                />
              </Field>
              <Field label={c.toLabel}>
                <Select
                  value={trip.to ?? ""}
                  onChange={(v) => getDogStore.setTrip({ to: v || undefined })}
                  placeholder={c.countryPlaceholder}
                />
              </Field>
              <Field label={c.dateLabel}>
                <input
                  type="date"
                  value={trip.date ?? ""}
                  onChange={(e) => getDogStore.setTrip({ date: e.target.value || undefined })}
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-[0.9375rem] outline-none transition-colors focus:border-accent"
                />
              </Field>
            </div>

            <div className="mt-8">
              <p className="eyebrow">{c.transportEyebrow}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {getTransportModes().map((mode) => {
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
                  {getTransportModes().find((m) => m.id === trip.transport)?.note}
                </p>
              )}
            </div>

            {trip.date && (
              <p className="mt-8 text-sm text-muted-foreground">
                {c.datePrefix}{" "}
                {new Date(trip.date).toLocaleDateString(c.dateLocale, { day: "numeric", month: "long", year: "numeric" })} {c.dateSuffix}
              </p>
            )}
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- The answer */}
      {ready && (
        <Section className="pt-0">
          <div className="container-page">
            {check.outbound ? <LegPanel leg={check.outbound} heading={c.going} copy={c} /> : null}
            {check.ret ? (
              <div className="mt-12">
                <LegPanel leg={check.ret} heading={c.comingHome} copy={c} />
              </div>
            ) : null}

            {!check.outbound && (
              <Notice title={c.noRulesTitle}>{c.noRulesBody}</Notice>
            )}
          </div>
        </Section>
      )}

      {/* --------------------------------------------------------- Timeline */}
      <Section className={cn("bg-surface", ready ? "pt-0" : "")}>
        <div className="container-page pt-20 md:pt-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div>
              <SectionHead eyebrow={c.timingEyebrow} title={c.timingTitle} body={c.timingBody} />
              <ol className="mt-10 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
                {getTravelTimeline().map((row) => (
                  <li key={row.when} className="flex flex-wrap items-baseline gap-x-6 gap-y-1 bg-background p-6">
                    <span className="font-display text-[0.9375rem] text-accent">{row.when}</span>
                    <span className="flex-1 text-[0.9375rem] text-muted-foreground">{row.what}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] lg:sticky lg:top-28 lg:self-start">
              <img src={illus} alt={c.timelineAlt} width={1200} height={1200} loading="lazy" className="aspect-square w-full object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------- Travel pack */}
      <Section className="pt-0">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow={c.beforeYouLeaveEyebrow} title={c.beforeYouLeaveTitle} />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <PointList items={getBeforeYouLeave()} />
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
            <p className="eyebrow">{c.onPaperEyebrow}</p>
            <h2 className="display-md mt-4">{c.packTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{c.packBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/my-dog/print" size="lg">
                {c.printCta}
                <Arrow />
              </ButtonLink>
              <ButtonLink to="/my-dog" tone="outline" size="lg">
                {c.myDogCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <div className="container-page max-w-3xl">
        <Notice title={c.finalNoticeTitle}>{c.finalNoticeBody}</Notice>
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
      {getCountries().map((c) => (
        <option key={c.code} value={c.code}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

type AbroadCopy = (typeof copy)["en"];

function LegPanel({ leg, heading, copy: c }: { leg: Leg; heading: string; copy: AbroadCopy }) {
  return (
    <div className="rounded-[1.75rem] border border-border bg-card p-8 md:p-12">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <p className="eyebrow">{heading}</p>
          <h2 className="display-lg mt-3">
            {leg.from.name} <span className="text-accent">→</span> {leg.to.name}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">{leg.withinEu ? c.withinEu : c.outsideEu}</p>
      </div>

      {!leg.known ? (
        <p className="mt-8 leading-relaxed text-muted-foreground">{c.unknownLeg}</p>
      ) : (
        <>
          <RuleGroup title={c.required} rules={leg.required} accent />
          <RuleGroup title={c.recommended} rules={leg.recommended} />
          <RuleGroup title={c.goodToHave} rules={leg.goodToHave} />

          {leg.ruleSet && (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-surface p-6">
                <p className="eyebrow">{c.quarantine}</p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{leg.ruleSet.quarantine}</p>
              </div>
              <div className="rounded-2xl bg-surface p-6">
                <p className="eyebrow">{c.minimumAge}</p>
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
        <p className="eyebrow">{c.checkItHere}</p>
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
              <span className="text-muted-foreground">
                {" "}
                — {s.country}. {c.lastCheckedPrefix} {s.lastChecked}.
              </span>
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
