import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel } from "@/components/dogmatch/care/parts";
import { DogSwitcher } from "@/components/dogmatch/care/hub";
import { useMyDog } from "@/lib/care/store";
import { useTrainingState } from "@/lib/training/store";
import { AccountMembership } from "@/components/dogmatch/plus/membership";
import { MemberBenefits } from "@/components/dogmatch/plus/benefits";
import { useMembership } from "@/hooks/use-membership";
import { useCopy } from "@/i18n";

const title = "My Account — Your details and preferences | DoggMatch";
const description =
  "Your name, your language, what you'd like to hear from us, and how your information is kept. Your dog's own pages live under My Dog.";

export const Route = createFileRoute("/account")({
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
    links: [{ rel: "canonical", href: "/account" }],
  }),
  component: AccountPage,
});

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border/60 py-3 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-right text-[0.9375rem]">{value}</span>
    </div>
  );
}

const copy = {
  en: {
    eyebrow: "My Account",
    heading: "Your side of things",
    introPrefix: "This page is about you — your details, your language, what you'd like to hear from us. Everything about your dog lives over in",
    myDogLink: "My Dog",
    preferences: "Preferences",
    units: "Units",
    unitsValue: "Metric (kg, km)",
    reminders: "Reminders",
    off: "Off",
    emailFromUs: "Email from us",
    preferencesNote: "We'd rather send nothing than send something you didn't ask for.",
    privacy: "Privacy",
    privacyBody:
      "Your dog's details, weights, training progress and notes stay in this browser. Nothing is uploaded, sold or shared. Clearing your browser data will clear them too — so if something matters, print it and keep a copy.",
    printSave: "Print & save",
    yourDogs: "Your dogs",
    yourDog: "Your dog",
    switchBody: "Switch between them here, or add another. Each dog keeps their own food, health, training and documents.",
    noDogBody: "You haven't added a dog yet. It only takes a minute, and everything else follows from it.",
    addAnother: "Add another dog",
    addYours: "Add your dog",
  },
  no: {
    eyebrow: "Min konto",
    heading: "Din side av saken",
    introPrefix: "Denne siden handler om deg — dine detaljer, ditt språk, hva du ønsker å høre fra oss. Alt om hunden din finner du under",
    myDogLink: "Min hund",
    preferences: "Innstillinger",
    units: "Enheter",
    unitsValue: "Metrisk (kg, km)",
    reminders: "Påminnelser",
    off: "Av",
    emailFromUs: "E-post fra oss",
    preferencesNote: "Vi sender heller ingenting enn noe du ikke har bedt om.",
    privacy: "Personvern",
    privacyBody:
      "Hundens detaljer, vekt, treningsfremgang og notater lagres i denne nettleseren. Ingenting lastes opp, selges eller deles. Sletter du nettleserdataene, forsvinner de også — så skriv ut det som er viktig, og ta vare på en kopi.",
    printSave: "Skriv ut og lagre",
    yourDogs: "Hundene dine",
    yourDog: "Hunden din",
    switchBody: "Bytt mellom dem her, eller legg til en til. Hver hund har sin egen mat, helse, trening og dokumenter.",
    noDogBody: "Du har ikke lagt til noen hund ennå. Det tar bare et minutt, og alt annet følger av det.",
    addAnother: "Legg til en hund til",
    addYours: "Legg til hunden din",
  },
} as const;

function AccountPage() {
  const c = useCopy(copy);
  const dog = useMyDog();
  const { dogs } = useTrainingState();
  const { membership } = useMembership();

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-2xl">{c.heading}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {c.introPrefix}{" "}
          <Link to="/my-dog" className="text-accent underline-offset-4 hover:underline">
            {c.myDogLink}
          </Link>
          .
        </p>
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-2">
          <AccountMembership />

          <Panel title={c.preferences}>
            <Row label={c.units} value={c.unitsValue} />
            <Row label={c.reminders} value={c.off} />
            <Row label={c.emailFromUs} value={c.off} />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.preferencesNote}</p>
          </Panel>

          <Panel title={c.privacy}>
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.privacyBody}</p>
            <ButtonLink to="/my-dog/print" tone="outline" size="md" className="mt-5">
              {c.printSave}
            </ButtonLink>
          </Panel>
        </div>
      </Section>

      {membership.subscribed && (
        <Section className="container-page">
          <MemberBenefits />
        </Section>
      )}

      <Section className="container-page">
        <Panel title={dogs.length > 1 ? c.yourDogs : c.yourDog}>
          <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {dogs.length ? c.switchBody : c.noDogBody}
          </p>
          <DogSwitcher {...(dog ? { active: dog } : {})} />
          <div className="mt-6">
            <ButtonLink to="/my-dog/setup" size="lg">
              {dogs.length ? c.addAnother : c.addYours}
              <Arrow />
            </ButtonLink>
          </div>
        </Panel>
      </Section>
    </div>
  );
}
