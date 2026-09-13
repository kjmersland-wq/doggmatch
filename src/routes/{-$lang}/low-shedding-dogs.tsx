import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/seo";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { LOW_SHEDDING_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/low-shedding-dogs")({
  head: (ctx) => localizedHead(ctx, LOW_SHEDDING_GUIDE.path, LOW_SHEDDING_GUIDE.seo),
  component: () => <LifestyleGuide config={LOW_SHEDDING_GUIDE} />,
});
