import { createFileRoute } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { BrochureSheet, useBrochureCopy } from "@/components/dogmatch/brochure";
import { abs, noindexMeta } from "@/lib/seo";

const title = "DoggMatch A5 brochure — print ready | DoggMatch";
const description =
  "The printable DoggMatch A5 leaflet for pet shops, groomers, trainers and vet clinics. Four pages, 148 × 210 mm, ready for PDF or press.";

export const Route = createFileRoute("/brochure")({
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
    ],
    links: [{ rel: "canonical", href: abs("/brochure") }],
  }),
  component: BrochurePage,
});

function BrochurePage() {
  const c = useBrochureCopy();
  return (
    <main className="doc-print-root bg-muted/40 py-10">
      <div className="no-print mx-auto max-w-2xl px-6 pb-10 text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight">{c.printTitle}</h1>
        <p className="mt-3 text-muted-foreground">{c.printLead}</p>
        <button
          type="button"
          onClick={() => window.print()}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground"
        >
          <Printer className="h-4 w-4" aria-hidden />
          {c.printBtn}
        </button>
      </div>
      <BrochureSheet />
    </main>
  );
}
