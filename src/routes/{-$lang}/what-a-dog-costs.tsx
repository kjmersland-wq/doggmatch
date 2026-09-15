import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { COST_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/what-a-dog-costs")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = COST_GUIDE.seo[locale] ?? COST_GUIDE.seo.en;
    return {
      ...localizedHead(ctx, COST_GUIDE.path, COST_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: COST_GUIDE.path },
          ],
          locale,
        ),
      ],
    };
  },
  component: () => <LifestyleGuide config={COST_GUIDE} />,
});
