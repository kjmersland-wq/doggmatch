import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/seo";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { MISMATCH_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/most-mismatched-breeds")({
  head: (ctx) => localizedHead(ctx, MISMATCH_GUIDE.path, MISMATCH_GUIDE.seo),
  component: () => <LifestyleGuide config={MISMATCH_GUIDE} />,
});
