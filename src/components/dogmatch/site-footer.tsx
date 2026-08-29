import { Link } from "@tanstack/react-router";
import { useCopy, useT } from "@/i18n";
import { BrandLock } from "./brand-logo";
import { CookieSettingsLink } from "@/components/dogmatch/cookie-consent";

const copy = {
  en: {
    blurb: "A calm, honest place to work out which dog would suit your life.",
    food: "Food & portions",
    canEat: "Can my dog eat this?",
    partner: "Partner with us",
    sources: "Sources & methodology",
  },
  no: {
    blurb: "Et rolig og ærlig sted å finne ut hvilken hund som ville passet livet ditt.",
    food: "Fôr og porsjoner",
    canEat: "Kan hunden spise dette?",
    partner: "Bli partner",
    sources: "Kilder og metode",
  },
  pl: {
    blurb: "Spokojne i szczere miejsce, by odkryć, jaki pies pasowałby do twojego życia.",
    food: "Jedzenie i porcje",
    canEat: "Czy mój pies może to zjeść?",
    partner: "Zostań partnerem",
    sources: "Źródła i metodologia",
  },
};

export function SiteFooter() {
  const t = useT();
  const c = useCopy(copy);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <BrandLock markClassName="h-10 w-10" wordmarkClassName="text-2xl" />
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {t.brand.secondary} {c.blurb}
            </p>
          </div>

          <FooterColumn title={t.footer.discover}>
            <FooterLink to="/plus">DoggMatch+</FooterLink>
            <FooterLink to="/get-a-dog">{t.nav.getADog}</FooterLink>
            <FooterLink to="/find-my-dog">{t.nav.findMyDog}</FooterLink>
            <FooterLink to="/breeds">{t.nav.breeds}</FooterLink>
            <FooterLink to="/compare">{t.nav.compare}</FooterLink>
            <FooterLink to="/dog-life">{t.nav.dogLife}</FooterLink>
            <FooterLink to="/travel">{t.nav.travel}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t.footer.resources}>
            <FooterLink to="/guides">{t.footer.guides}</FooterLink>
            <FooterLink to="/guides">{t.footer.ownership}</FooterLink>
            <FooterLink to="/train">{t.footer.training}</FooterLink>
            <FooterLink to="/my-dog">{t.footer.health}</FooterLink>
            <FooterLink to="/my-dog/nutrition">{c.food}</FooterLink>
            <FooterLink to="/my-dog/food">{c.canEat}</FooterLink>
            <FooterLink to="/sources">{c.sources}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t.footer.company}>
            <FooterLink to="/about">{t.footer.about}</FooterLink>
            <FooterLink to="/contact">{t.footer.contact}</FooterLink>
            <FooterLink to="/partners">{c.partner}</FooterLink>
            <FooterLink to="/privacy">{t.footer.privacy}</FooterLink>
            <FooterLink to="/terms">{t.footer.terms}</FooterLink>
            <li>
              <CookieSettingsLink className="text-left text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground" />
            </li>
          </FooterColumn>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col gap-4 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {t.brand.name}. {t.footer.rights}
            </p>
            <p className="max-w-md md:text-right">{t.footer.note}</p>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            {t.footer.builtBy}{" "}
            <span className="font-medium tracking-[0.02em] text-foreground">KM TECH LABS</span>,
            org.nr. 934 044 029, {t.footer.builtIn}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </Link>
    </li>
  );
}
