import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/seo";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { ALONE_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/dogs-that-can-be-left-alone")({
  head: (ctx) => localizedHead(ctx, ALONE_GUIDE.path, { en: ALONE_GUIDE.seo }),
  component: () => <LifestyleGuide config={ALONE_GUIDE} />,
});
