import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { Panel } from "@/components/dogmatch/care/parts";
import { DogSwitcher } from "@/components/dogmatch/care/hub";
import { useMyDog } from "@/lib/care/store";
import { useTrainingState } from "@/lib/training/store";
import { AccountMembership } from "@/components/dogmatch/plus/membership";
import { MemberBenefits } from "@/components/dogmatch/plus/benefits";
import { useMembership } from "@/hooks/use-membership";

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

function AccountPage() {
  const dog = useMyDog();
  const { dogs } = useTrainingState();
  const { membership } = useMembership();

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>My Account</Eyebrow>
        <h1 className="display-xl mt-6 max-w-2xl">Your side of things</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          This page is about you — your details, your language, what you'd like to hear from us.
          Everything about your dog lives over in{" "}
          <Link to="/my-dog" className="text-accent underline-offset-4 hover:underline">
            My Dog
          </Link>
          .
        </p>
      </section>

      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-2">
          <AccountMembership />

          <Panel title="Preferences">
            <Row label="Units" value="Metric (kg, km)" />
            <Row label="Reminders" value="Off" />
            <Row label="Email from us" value="Off" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We'd rather send nothing than send something you didn't ask for.
            </p>
          </Panel>

          <Panel title="Privacy">
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              Your dog's details, weights, training progress and notes stay in this browser. Nothing
              is uploaded, sold or shared. Clearing your browser data will clear them too — so if
              something matters, print it and keep a copy.
            </p>
            <ButtonLink to="/my-dog/print" tone="outline" size="md" className="mt-5">
              Print & save
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
        <Panel title={dogs.length > 1 ? "Your dogs" : "Your dog"}>
          <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
            {dogs.length
              ? "Switch between them here, or add another. Each dog keeps their own food, health, training and documents."
              : "You haven't added a dog yet. It only takes a minute, and everything else follows from it."}
          </p>
          <DogSwitcher {...(dog ? { active: dog } : {})} />
          <div className="mt-6">
            <ButtonLink to="/my-dog/setup" size="lg">
              {dogs.length ? "Add another dog" : "Add your dog"}
              <Arrow />
            </ButtonLink>
          </div>
        </Panel>
      </Section>
    </div>
  );
}