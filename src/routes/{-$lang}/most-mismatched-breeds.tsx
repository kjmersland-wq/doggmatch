import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { MISMATCH_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/most-mismatched-breeds")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = MISMATCH_GUIDE.seo[locale] ?? MISMATCH_GUIDE.seo.en;
    return {
      ...localizedHead(ctx, MISMATCH_GUIDE.path, MISMATCH_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: MISMATCH_GUIDE.path },
          ],
          locale,
        ),
      ],
    };
  },
  component: () => <LifestyleGuide config={MISMATCH_GUIDE} />,
});
