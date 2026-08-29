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
import { useCopy } from "@/i18n";
import { noindexMeta } from "@/lib/seo";

const title = "Your DoggMatch+ member card | DoggMatch";
const description = "View and print your personal DoggMatch+ member card in standard card size.";

export const Route = createFileRoute("/member-card")({
  head: () => ({
    meta: [
      ...noindexMeta,
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

const copy = {
  en: {
    signInHeading: "Sign in to see your card",
    signInBody: "Your member card lives with your DoggMatch+ membership, so we need to know it's you.",
    signInLabel: "Sign in",
    loadingHeading: "One moment…",
    loadingBody: "Fetching your card.",
    backToAccount: "Back to my account",
    noCardHeading: "This card comes with DoggMatch+",
    noCardBody: "Join DoggMatch+ and your personal member card is made for you straight away.",
    seePlus: "See DoggMatch+",
    printCard: "Print my member card",
    printedNote:
      "Printed at real card size — 85.6 × 54 mm. Print both sides on stiff paper, cut along the edge and fold, and it sits in a wallet like any other card.",
  },
  no: {
    signInHeading: "Logg inn for å se kortet ditt",
    signInBody: "Medlemskortet ditt hører sammen med DoggMatch+-medlemskapet, så vi må vite at det er deg.",
    signInLabel: "Logg inn",
    loadingHeading: "Ett øyeblikk …",
    loadingBody: "Henter kortet ditt.",
    backToAccount: "Tilbake til kontoen min",
    noCardHeading: "Dette kortet følger med DoggMatch+",
    noCardBody: "Bli DoggMatch+-medlem, så lages ditt eget medlemskort med det samme.",
    seePlus: "Se DoggMatch+",
    printCard: "Skriv ut medlemskortet mitt",
    printedNote:
      "Trykket i ekte kortstørrelse — 85,6 × 54 mm. Skriv ut begge sider på stivt papir, klipp langs kanten og brett, så ligger det i lommeboken som et hvilket som helst kort.",
  },
  pl: {
    signInHeading: "Zaloguj się, aby zobaczyć swoją kartę",
    signInBody: "Karta członkowska jest powiązana z Twoim członkostwem DoggMatch+, więc musimy potwierdzić, że to Ty.",
    signInLabel: "Zaloguj się",
    loadingHeading: "Chwileczkę…",
    loadingBody: "Pobieramy Twoją kartę.",
    backToAccount: "Wróć do mojego konta",
    noCardHeading: "Ta karta jest częścią DoggMatch+",
    noCardBody: "Dołącz do DoggMatch+, a Twoja osobista karta członkowska zostanie od razu przygotowana.",
    seePlus: "Zobacz DoggMatch+",
    printCard: "Wydrukuj moją kartę członkowską",
    printedNote:
      "Wydrukowana w rzeczywistym rozmiarze karty — 85,6 × 54 mm. Wydrukuj obie strony na sztywnym papierze, wytnij wzdłuż krawędzi i złóż — zmieści się w portfelu jak każda inna karta.",
  },
} as const;

function MemberCardPage() {
  const c = useCopy(copy);
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
      <Empty heading={c.signInHeading} body={c.signInBody} to="/auth" label={c.signInLabel} />
    );
  }

  if (loading || isLoading) {
    return <Empty heading={c.loadingHeading} body={c.loadingBody} to="/account" label={c.backToAccount} />;
  }

  if (!data) {
    return (
      <Empty heading={c.noCardHeading} body={c.noCardBody} to="/plus" label={c.seePlus} />
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
          {c.backToAccount}
        </Link>
        <Button size="md" onClick={() => window.print()}>
          <Printer className="h-4 w-4" />
          {c.printCard}
        </Button>
      </div>

      <p className="no-print container-page mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {c.printedNote}
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
