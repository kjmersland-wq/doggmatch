import { SectionHead } from "@/components/dogmatch/journey/parts";
import { Section } from "@/components/dogmatch/ui";
import { MemberCardBack, MemberCardFront } from "@/components/dogmatch/plus/member-card";
import { benefitCategories } from "@/data/plus/benefits";
import type { MemberCard } from "@/lib/plus/member-card.functions";

/** A made-up card, only for showing what members get. Not a real membership. */
const sampleCard: MemberCard = {
  memberId: "DM-4F7K-92QX",
  name: "Kari Nordmann",
  status: "active",
  plan: "yearly",
  validThrough: "2027-08-16T00:00:00.000Z",
};

/** Shows the member card and the partner offers we're working on. */
export function MemberCardShowcase() {
  return (
    <Section className="container-page pt-0">
      <SectionHead
        eyebrow="Yours as a member"
        title="A member card you can actually hold"
        body="Every member gets a personal DoggMatch+ card. Print it at real card size, keep it in your wallet, and anyone can scan the code on the back to see that it's genuine."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
        <div className="rounded-[2rem] border border-border bg-surface p-6 md:p-10">
          <div className="mc-sheet justify-center">
            <MemberCardFront card={sampleCard} />
            <MemberCardBack card={sampleCard} />
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Example card. Names, ID and dates are made up.
          </p>
        </div>

        <div className="max-w-lg">
          <ul className="grid gap-4">
            {[
              ["Your name and a unique member ID", "Something like DM-4F7K-92QX — yours alone."],
              ["Status and valid-through date", "So it's always clear the membership is live."],
              ["Your photo when we have one", "Taken from your account or your dog's profile."],
              ["A code on the back", "Scan it and a simple page confirms the card is real."],
              ["Printed at 85.6 × 54 mm", "Exactly the size of a bank card, on stiff paper."],
            ].map(([head, body]) => (
              <li key={head} className="rounded-[1.25rem] border border-border p-5">
                <p className="font-display text-lg tracking-tight">{head}</p>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-[1.25rem] border border-dashed border-border p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-accent">Coming soon</p>
            <h3 className="mt-2 font-display text-xl tracking-tight">Member discounts</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              We're talking to the first partners now, and member discounts will most likely land
              soon. When an offer is genuinely worth your time, it simply appears on your account
              page — no email, no fuss.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {benefitCategories.map((c) => (
                <li
                  key={c.id}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {c.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
