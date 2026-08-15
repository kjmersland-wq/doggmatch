import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/dogmatch/ui";
import { DocPaper } from "@/components/dogmatch/print/doc";
import { buildDocument, documentsById, packOrder } from "@/lib/print/documents";
import { useDocContext } from "@/lib/print/context";

const title = "Your printable pages | DoggMatch";
const description = "A print-ready set of pages for your dog, made from what you've saved.";

export const Route = createFileRoute("/my-dog/pack")({
  validateSearch: (search: Record<string, unknown>) => ({
    docs: typeof search["docs"] === "string" && search["docs"] ? (search["docs"] as string) : "profile",
  }),
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
  component: PackPage,
});

function PackPage() {
  const { docs } = Route.useSearch();
  const ctx = useDocContext();

  const ids = docs.split(",").filter((id) => documentsById[id]);
  const sections = buildDocument(ids.length ? ids : ["profile"], ctx);
  const whole = ids.length >= packOrder.length - 1;
  const docTitle = whole
    ? "The DoggMatch Dog Pack"
    : ids.length === 1
      ? (documentsById[ids[0]!]?.title ?? "Dog pack")
      : "Dog pack";

  useEffect(() => {
    document.body.classList.add("bg-background");
    return () => document.body.classList.remove("bg-background");
  }, []);

  return (
    <div className="doc-print-root pb-16">
      <div className="no-print container-page flex flex-wrap items-center justify-between gap-4 pt-28 md:pt-32">
        <Link
          to="/my-dog/print"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Choose different pages
        </Link>
        <Button size="md" onClick={() => window.print()}>
          <Printer className="h-4 w-4" />
          Print or save as PDF
        </Button>
      </div>

      <p className="no-print container-page mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
        This is exactly how it will print. Choose "Save as PDF" in the print dialog if you'd rather
        keep it on your phone.
      </p>

      <div className="container-page mt-10 overflow-x-auto">
        <DocPaper
          title={docTitle}
          dogName={ctx.dog?.name ?? "My dog"}
          {...(ctx.breedName ? { breedName: ctx.breedName } : {})}
          {...(ctx.details.photo ? { photo: ctx.details.photo } : {})}
          subtitle={
            whole
              ? "Everything worth having on paper — who your dog is, what they eat, how your week runs, and who to call."
              : "Printed from DoggMatch. Fill in anything that's blank by hand."
          }
          sections={sections}
          date={ctx.today}
        />
      </div>
    </div>
  );
}