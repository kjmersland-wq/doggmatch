import { createFileRoute } from "@tanstack/react-router";
import { localizedHead } from "@/lib/seo";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { APARTMENT_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/best-apartment-dogs")({
  head: (ctx) => localizedHead(ctx, APARTMENT_GUIDE.path, APARTMENT_GUIDE.seo),
  component: () => <LifestyleGuide config={APARTMENT_GUIDE} />,
});
