import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalList, LegalPage, LegalSection } from "@/components/dogmatch/legal";

const title = "Terms of Service — DoggMatch";
const description =
  "The terms for using DoggMatch and DoggMatch+: what the service is, how membership and billing work, your right to cancel, and the limits of our advice.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="The terms, in plain language"
      intro="These are the terms you agree to when you use DoggMatch. We've tried to write them the way we'd explain them to you in person, without hiding anything in the small print."
      updated="16 August 2026"
    >
      <LegalSection title="Who we are">
        <p>
          DoggMatch is built and run by KM TECH LABS, Kristiansand, Norway. When we say "we" or "us"
          below, that's who we mean. When we say "you", we mean whoever is using the site.
        </p>
      </LegalSection>

      <LegalSection title="What DoggMatch is">
        <p>
          DoggMatch helps you work out which dog might suit your life, and helps you look after the
          dog you already have. Everything we show you comes from a transparent calculation based on
          what you tell us and what each breed typically needs. It is general guidance, not a
          professional assessment.
        </p>
      </LegalSection>

      <LegalSection title="Important: this is not veterinary or legal advice">
        <p>
          Our health, nutrition, training and travel material is general information. Every dog is
          different. Always talk to your vet about anything medical, and always check the official
          rules of the countries you're travelling to and from — border and import requirements
          change, and only the authorities can confirm what applies to you. You are responsible for
          decisions you make about your dog.
        </p>
      </LegalSection>

      <LegalSection title="Your account">
        <p>
          Most of DoggMatch works without an account. If you create one, keep your sign-in details
          to yourself, give us accurate information, and let us know if you think someone else has
          got into your account. You need to be at least 16 years old. You can close your account
          whenever you like.
        </p>
      </LegalSection>

      <LegalSection title="DoggMatch+ membership and billing">
        <LegalList
          items={[
            "DoggMatch+ costs €7.99 per month or €59.99 per year. Prices include VAT where it applies.",
            "Payments are handled by Stripe. We never see your card details.",
            "Membership renews automatically at the end of each period until you cancel.",
            "You can cancel at any time from your account. Your membership then stays active until the end of the period you've already paid for, and doesn't renew after that.",
            "If we change the price, we'll tell you at least 30 days before it affects you, and you can cancel before it takes effect.",
            "If a payment fails, we may pause membership features until it goes through.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Your right to withdraw (EU/EEA consumers)">
        <p>
          As a consumer in the EU/EEA you have 14 days to withdraw from a purchase, under the
          Consumer Rights Directive and the Norwegian Right of Withdrawal Act (angrerettloven). To
          use it, just tell us through the{" "}
          <Link to="/contact" className="text-foreground underline underline-offset-4">
            contact page
          </Link>{" "}
          within 14 days of subscribing, and we'll refund you.
        </p>
        <p>
          Because DoggMatch+ gives you immediate access to digital content, you agree that we start
          delivering straight away. If you then withdraw within the 14 days, we may deduct a fair
          amount for the part of the period you've already used.
        </p>
      </LegalSection>

      <LegalSection title="How you may use the site">
        <p>Please don't:</p>
        <LegalList
          items={[
            "Scrape, copy or resell our content, breed data or matching results.",
            "Try to break, overload or get around the security of the service.",
            "Use the site for anything unlawful, or upload anything harmful.",
            "Present DoggMatch results as professional veterinary or breeding advice.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Content and ownership">
        <p>
          The DoggMatch name, logo, design, written material, breed content and matching logic
          belong to KM TECH LABS and are protected by copyright and trademark law. You may use them
          for your own personal, non-commercial use — including printing your own documents and
          member card. Anything you create in DoggMatch, such as your dog profiles and notes, stays
          yours.
        </p>
      </LegalSection>

      <LegalSection title="Availability">
        <p>
          We work hard to keep DoggMatch up, but we don't promise it will never be unavailable. We
          may update, change or discontinue features. If we ever shut down a paid feature you're
          subscribed to, we'll refund the unused part of your period.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          Nothing here limits your statutory consumer rights, and nothing limits our liability for
          death, personal injury, gross negligence or intent. Beyond that, and to the extent the law
          allows, we're not liable for indirect or consequential loss, and our total liability is
          limited to what you've paid us in the 12 months before the claim.
        </p>
      </LegalSection>

      <LegalSection title="Privacy">
        <p>
          How we handle your personal data is explained in our{" "}
          <Link to="/privacy" className="text-foreground underline underline-offset-4">
            privacy notice
          </Link>
          , which follows the GDPR.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          If we change these terms in a way that matters to you, we'll let members know by email at
          least 30 days beforehand. Carrying on using DoggMatch after that means you accept the new
          terms.
        </p>
      </LegalSection>

      <LegalSection title="Law and disputes">
        <p>
          These terms are governed by Norwegian law, with Kristiansand tingrett as the ordinary
          venue. If you're a consumer, you keep the protection of the mandatory law of the country
          you live in, and you can bring a case there.
        </p>
        <p>
          You can also take a complaint to the Norwegian Consumer Authority
          (Forbrukertilsynet)/Forbrukerrådet, or use the European Commission's online dispute
          resolution platform. We'd much rather you just{" "}
          <Link to="/contact" className="text-foreground underline underline-offset-4">
            write to us
          </Link>{" "}
          first — most things are easy to sort out.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
