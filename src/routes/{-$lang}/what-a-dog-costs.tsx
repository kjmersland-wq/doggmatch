import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/seo";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { COST_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/what-a-dog-costs")({
  head: (ctx) => localizedHead(ctx, COST_GUIDE.path, COST_GUIDE.seo),
  component: () => <LifestyleGuide config={COST_GUIDE} />,
});
