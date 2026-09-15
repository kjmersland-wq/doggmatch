import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { LOW_SHEDDING_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/low-shedding-dogs")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = LOW_SHEDDING_GUIDE.seo[locale] ?? LOW_SHEDDING_GUIDE.seo.en;
    return {
      ...localizedHead(ctx, LOW_SHEDDING_GUIDE.path, LOW_SHEDDING_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: LOW_SHEDDING_GUIDE.path },
          ],
          locale,
        ),
      ],
    };
  },
  component: () => <LifestyleGuide config={LOW_SHEDDING_GUIDE} />,
});
