import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { CALMER_GUIDE } from "@/lib/guides/calmer";

/** A static route beats /guides/$slug, so this page is not a cluster support page. */
export const Route = createFileRoute("/{-$lang}/guides/a-calmer-companion")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = CALMER_GUIDE.seo[locale] ?? CALMER_GUIDE.seo.en;
    return {
      ...localizedHead(ctx, CALMER_GUIDE.path, CALMER_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: CALMER_GUIDE.path },
          ],
          locale,
        ),
      ],
    };
  },
  component: () => <LifestyleGuide config={CALMER_GUIDE} />,
});
