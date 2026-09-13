import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/seo";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { FIRST_TIME_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/best-dogs-for-first-time-owners")({
  head: (ctx) => localizedHead(ctx, FIRST_TIME_GUIDE.path, { en: FIRST_TIME_GUIDE.seo }),
  component: () => <LifestyleGuide config={FIRST_TIME_GUIDE} />,
});
