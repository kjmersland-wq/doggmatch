import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { FIRST_TIME_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/best-dogs-for-first-time-owners")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = FIRST_TIME_GUIDE.seo[locale] ?? FIRST_TIME_GUIDE.seo.en;
    return {
      ...localizedHead(ctx, FIRST_TIME_GUIDE.path, FIRST_TIME_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: FIRST_TIME_GUIDE.path },
          ],
          locale,
        ),
      ],
    };
  },
  component: () => <LifestyleGuide config={FIRST_TIME_GUIDE} />,
});
