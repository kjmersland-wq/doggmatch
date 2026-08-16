import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { BrandLock } from "@/components/dogmatch/brand-logo";
import { checkMemberCard } from "@/lib/plus/member-card.functions";

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

function VerifyPage() {
  const { memberId } = Route.useParams();
  const check = useServerFn(checkMemberCard);

  const { data, isLoading } = useQuery({
    queryKey: ["verify-member", memberId],
    queryFn: () => check({ data: { memberId } }),
  });

  const valid = data?.found && data.status === "active";

  return (
    <div className="container-page pt-32 pb-32">
      <BrandLock />
      <h1 className="display-xl mt-8 max-w-2xl">
        {isLoading
          ? "Checking…"
          : valid
            ? "Yes — this is a member"
            : data?.found
              ? "This membership has ended"
              : "We can't find that card"}
      </h1>

      {!isLoading && (
        <div className="mt-8 max-w-md rounded-[1.5rem] border border-border bg-card p-6 md:p-8">
          <Line label="Member ID" value={data?.found ? data.memberId : memberId} />
          {data?.found && <Line label="Name" value={data.name} />}
          <Line
            label="Status"
            value={data?.found ? (valid ? "Active DoggMatch+ member" : "Ended") : "Not found"}
          />
          {data?.found && data.validThrough && (
            <Line
              label="Valid through"
              value={new Date(data.validThrough).toLocaleDateString(undefined, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            />
          )}
        </div>
      )}

      <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
        We only show what's needed to confirm a card. Nothing else about the member is shared here.
      </p>
    </div>
  );
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border/60 py-3 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-right text-[0.9375rem]">{value}</span>
    </div>
  );
}
