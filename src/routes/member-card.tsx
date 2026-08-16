import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Printer } from "lucide-react";
import { Button, ButtonLink } from "@/components/dogmatch/ui";
import { MemberCardBack, MemberCardFront } from "@/components/dogmatch/plus/member-card";
import { getMyMemberCard } from "@/lib/plus/member-card.functions";
import { useAuth } from "@/hooks/use-auth";
import { useMyDog } from "@/lib/care/store";
import { useDogDetails } from "@/lib/care/records";

const title = "Your DoggMatch+ member card | DoggMatch";
const description = "View and print your personal DoggMatch+ member card in standard card size.";

export const Route = createFileRoute("/member-card")({
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
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MemberCardPage,
});

function MemberCardPage() {
  const { user, loading } = useAuth();
  const dog = useMyDog();
  const details = useDogDetails(dog?.id);
  const fetchCard = useServerFn(getMyMemberCard);
  const [avatar, setAvatar] = useState<string | undefined>(undefined);

  useEffect(() => {
    const url = (user?.user_metadata?.["avatar_url"] as string | undefined) ?? undefined;
    setAvatar(url ?? details.photo ?? undefined);
  }, [user, details.photo]);

  const { data, isLoading } = useQuery({
    queryKey: ["member-card", user?.id ?? "anonymous"],
    queryFn: () => fetchCard({ data: {} }),
    enabled: Boolean(user),
  });

  if (!loading && !user) {
    return (
      <Empty
        heading="Sign in to see your card"
        body="Your member card lives with your DoggMatch+ membership, so we need to know it's you."
        to="/auth"
        label="Sign in"
      />
    );
  }

  if (loading || isLoading) {
    return <Empty heading="One moment…" body="Fetching your card." to="/account" label="Back to my account" />;
  }

  if (!data) {
    return (
      <Empty
        heading="This card comes with DoggMatch+"
        body="Join DoggMatch+ and your personal member card is made for you straight away."
        to="/plus"
        label="See DoggMatch+"
      />
    );
  }

  return (
    <div className="mc-print-root pb-20">
      <div className="no-print container-page flex flex-wrap items-center justify-between gap-4 pt-28 md:pt-32">
        <Link
          to="/account"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to my account
        </Link>
        <Button size="md" onClick={() => window.print()}>
          <Printer className="h-4 w-4" />
          Print my member card
        </Button>
      </div>

      <p className="no-print container-page mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        Printed at real card size — 85.6 × 54 mm. Print both sides on stiff paper, cut along the
        edge and fold, and it sits in a wallet like any other card.
      </p>

      <div className="container-page mt-10">
        <div className="mc-sheet">
          <MemberCardFront card={data} photo={avatar} />
          <MemberCardBack card={data} />
        </div>
      </div>
    </div>
  );
}

function Empty({ heading, body, to, label }: { heading: string; body: string; to: string; label: string }) {
  return (
    <div className="container-page pt-32 pb-32">
      <h1 className="display-xl max-w-2xl">{heading}</h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{body}</p>
      <ButtonLink to={to as never} size="lg" className="mt-8">
        {label}
      </ButtonLink>
    </div>
  );
}
