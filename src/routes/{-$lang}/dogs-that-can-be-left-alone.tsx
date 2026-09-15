import { createFileRoute } from "@tanstack/react-router";
import { localizedHead, headLocale, breadcrumbLd } from "@/lib/seo";
import { guidesCrumb } from "@/lib/seo/pages";
import { LifestyleGuide } from "@/components/dogmatch/lifestyle-guide";
import { ALONE_GUIDE } from "@/lib/guides/lifestyle";

export const Route = createFileRoute("/{-$lang}/dogs-that-can-be-left-alone")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const seo = ALONE_GUIDE.seo[locale] ?? ALONE_GUIDE.seo.en;
    return {
      ...localizedHead(ctx, ALONE_GUIDE.path, ALONE_GUIDE.seo),
      scripts: [
        breadcrumbLd(
          [
            { name: "DoggMatch", path: "/" },
            { name: guidesCrumb[locale] ?? "Guides", path: "/guides" },
            { name: seo.title.split(" | ")[0] ?? seo.title, path: ALONE_GUIDE.path },
          ],
          locale,
        ),
      ],
    };
  },
  component: () => <LifestyleGuide config={ALONE_GUIDE} />,
});
