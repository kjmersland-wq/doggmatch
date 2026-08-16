import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { BrandLock } from "@/components/dogmatch/brand-logo";
import { checkMemberCard } from "@/lib/plus/member-card.functions";
import { useCopy, useLocale } from "@/i18n";

const title = "Membership check | DoggMatch";
const description = "Check that a DoggMatch+ member card is genuine and still valid.";

export const Route = createFileRoute("/verify/$memberId")({
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
  component: VerifyPage,
});

const copy = {
  en: {
    checking: "Checking…",
    active: "✓ Active member",
    validUntil: "Valid until:",
    ended: "Membership has ended",
    notFound: "Card not found",
  },
  no: {
    checking: "Sjekker …",
    active: "✓ Aktivt medlem",
    validUntil: "Gyldig til:",
    ended: "Medlemskapet er avsluttet",
    notFound: "Fant ikke kortet",
  },
} as const;

function VerifyPage() {
  const c = useCopy(copy);
  const { locale } = useLocale();
  const { memberId } = Route.useParams();
  const check = useServerFn(checkMemberCard);

  const { data, isLoading } = useQuery({
    queryKey: ["verify-member", memberId],
    queryFn: () => check({ data: { memberId } }),
  });

  const valid = data?.found && data.status === "active";

  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center pt-28 pb-24 text-center">
      <div className="w-full max-w-sm rounded-[1.75rem] border border-border bg-card p-8 md:p-10">
        <div className="flex justify-center">
          <BrandLock />
        </div>
        <p className="mt-6 font-display text-2xl tracking-tight">
          DoggMatch<span className="text-accent">+</span>
        </p>

        {isLoading ? (
          <p className="mt-6 text-muted-foreground">{c.checking}</p>
        ) : valid ? (
          <>
            <p className="mt-6 text-lg font-medium text-accent">{c.active}</p>
            {data?.found && data.validThrough && (
              <p className="mt-2 text-[0.9375rem] text-muted-foreground">
                {c.validUntil} {formatDate(data.validThrough, locale)}
              </p>
            )}
          </>
        ) : (
          <p className="mt-6 text-lg font-medium text-muted-foreground">
            {data?.found ? c.ended : c.notFound}
          </p>
        )}
      </div>
    </div>
  );
}

/** dd.mm.yyyy — the only detail we share publicly. */
function formatDate(value: string, _locale: "en" | "no") {
  const d = new Date(value);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
}
