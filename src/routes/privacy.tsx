import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "@/components/dogmatch/legal";

const title = "Privacy — how DoggMatch handles your data";
const description =
  "How DoggMatch collects, stores and protects your personal data, your rights under the GDPR, and who we share information with.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Your data, handled with care"
      intro="We ask for as little as we possibly can, we tell you plainly what we do with it, and you can ask us to delete it at any time. This page explains all of that in normal language."
      updated="16 August 2026"
    >
      <LegalSection title="Who is responsible for your data">
        <p>
          DoggMatch is built and run by KM TECH LABS in Kristiansand, Norway. KM TECH LABS is the
          data controller for personal data processed through this website, and decides why and how
          that data is used.
        </p>
        <p>
          Norway is part of the EEA, so the EU General Data Protection Regulation (GDPR) applies to
          us in full, along with the Norwegian Personal Data Act (personopplysningsloven). Our
          supervisory authority is the Norwegian Data Protection Authority (Datatilsynet).
        </p>
        <p>
          The easiest way to reach us about anything on this page is through our{" "}
          <Link to="/contact" className="text-foreground underline underline-offset-4">
            contact page
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="What we collect, and why">
        <p>
          Most of DoggMatch works without an account and without us storing anything about you. Your
          quiz answers, your dog profiles, your training progress and your care notes are kept in
          your own browser's local storage on your device — not on our servers.
        </p>
        <LegalList
          items={[
            <>
              <strong className="text-foreground">Quiz answers and dog profiles.</strong> Stored
              locally on your device so you can come back to them. We never see them. Clearing your
              browser data removes them.
            </>,
            <>
              <strong className="text-foreground">Account details.</strong> If you create an
              account, we store your email address and sign-in identity. Legal basis: performance of
              a contract (GDPR Art. 6(1)(b)).
            </>,
            <>
              <strong className="text-foreground">Membership details.</strong> For DoggMatch+ we
              store your subscription status, plan, member ID and valid-through date. Legal basis:
              performance of a contract.
            </>,
            <>
              <strong className="text-foreground">Payment details.</strong> Card data is handled
              entirely by Stripe. We never see or store your card number. We keep only the
              subscription reference we need to know whether your membership is active.
            </>,
            <>
              <strong className="text-foreground">Messages you send us.</strong> Your name, email,
              subject and message, so we can reply. Legal basis: legitimate interest in answering
              you (GDPR Art. 6(1)(f)).
            </>,
            <>
              <strong className="text-foreground">Technical data.</strong> Standard server logs such
              as IP address and browser type, kept briefly for security, abuse prevention and
              troubleshooting. Legal basis: legitimate interest in keeping the service safe.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="What we do not do">
        <LegalList
          items={[
            "We do not sell or rent your personal data to anyone.",
            "We do not use advertising trackers or third-party advertising cookies.",
            "We do not build behavioural profiles of you for marketing.",
            "We do not make automated decisions with legal or similarly significant effects. Your match result is a transparent calculation you can see the reasoning behind, and it has no legal consequences.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Cookies and local storage">
        <p>
          We only use what's strictly necessary to make the site work: a sign-in session, your
          light/dark preference, your language, and the local data described above. Under the
          ePrivacy Directive and Norwegian ekomlov, strictly necessary storage of this kind does not
          require consent, which is why you don't see a cookie banner. If we ever add analytics or
          marketing cookies, we will ask you first.
        </p>
      </LegalSection>

      <LegalSection title="Who processes data on our behalf">
        <p>
          We use a small number of carefully chosen providers, each bound by a data processing
          agreement under GDPR Art. 28:
        </p>
        <LegalList
          items={[
            <>
              <strong className="text-foreground">Hosting, database and authentication.</strong>{" "}
              Runs our servers, stores account and membership records, and handles sign-in.
            </>,
            <>
              <strong className="text-foreground">Stripe.</strong> Payments and subscription
              billing, as an independent controller for payment data.
            </>,
            <>
              <strong className="text-foreground">Google.</strong> Only if you choose to sign in
              with Google, and only for that sign-in.
            </>,
            <>
              <strong className="text-foreground">Email delivery.</strong> Used to send and receive
              the messages you write to us.
            </>,
          ]}
        />
      </LegalSection>

      <LegalSection title="Where your data is stored, and transfers outside the EEA">
        <p>
          We store personal data on servers within the EU/EEA wherever we can. Some of our providers
          are based in the United States. Where data does leave the EEA, the transfer relies on the
          European Commission's Standard Contractual Clauses, and where applicable the EU–US Data
          Privacy Framework, together with additional technical safeguards such as encryption in
          transit and at rest.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep things">
        <LegalList
          items={[
            "Local data on your device: until you clear it. It is yours, on your machine.",
            "Account and membership data: for as long as your account exists, then deleted or anonymised within 90 days of you closing it.",
            "Contact messages: up to 24 months, so we have context if you write again.",
            "Payment and invoice records: kept for 5 years, as Norwegian bookkeeping law (bokføringsloven) requires. Legal basis: legal obligation (GDPR Art. 6(1)(c)).",
            "Security logs: normally 90 days or less.",
          ]}
        />
      </LegalSection>

      <LegalSection title="How we protect it">
        <p>
          Data is encrypted in transit (TLS) and at rest by our hosting provider. Database access is
          restricted by row-level security rules, so an account can only ever reach its own records.
          Access to production systems is limited to the people who genuinely need it. If a breach
          ever puts your rights at risk, we will notify Datatilsynet within 72 hours and tell you
          directly where the law requires it.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>Under the GDPR you can ask us to:</p>
        <LegalList
          items={[
            "Tell you what we hold about you, and give you a copy (Art. 15).",
            "Correct anything that's wrong (Art. 16).",
            "Delete your data (Art. 17).",
            "Restrict how we use it (Art. 18).",
            "Send it to you or another provider in a portable format (Art. 20).",
            "Stop processing based on legitimate interest (Art. 21).",
            "Withdraw consent at any time, where processing is based on consent (Art. 7).",
          ]}
        />
        <p>
          Write to us through the{" "}
          <Link to="/contact" className="text-foreground underline underline-offset-4">
            contact page
          </Link>{" "}
          and we will respond within 30 days, free of charge. If you're not happy with how we
          handled it, you can complain to Datatilsynet or to the data protection authority in your
          own country.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          DoggMatch isn't intended for children. You need to be at least 16 to create an account. If
          you believe a child has given us personal data, tell us and we will remove it.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this notice">
        <p>
          If we change anything meaningful here, we'll update the date at the top of this page, and
          tell account holders by email when the change affects them.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
