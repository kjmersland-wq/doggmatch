import { Link } from "@tanstack/react-router";
import { useCopy, useT } from "@/i18n";
import { BrandLock } from "./brand-logo";
import { CookieSettingsLink } from "@/components/dogmatch/cookie-consent";
import { withLangPrefix } from "@/lib/localized-path";

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
  dk: {
    blurb: "Et roligt og ærligt sted at finde ud af, hvilken hund der ville passe til dit liv.",
    food: "Foder og portioner",
    canEat: "Kan min hund spise dette?",
    partner: "Bliv partner",
    sources: "Kilder og metode",
  },
  se: {
    blurb: "En lugn och ärlig plats att ta reda på vilken hund som skulle passa ditt liv.",
    food: "Foder och portioner",
    canEat: "Kan min hund äta det här?",
    partner: "Bli partner",
    sources: "Källor och metod",
  },
  fi: {
    blurb: "Rauhallinen ja rehellinen paikka selvittää, mikä koira sopisi elämääsi.",
    food: "Ruokinta ja annokset",
    canEat: "Voiko koirani syödä tätä?",
    partner: "Ryhdy kumppaniksi",
    sources: "Lähteet ja menetelmä",
  },
  de: {
    blurb: "Ein ruhiger, ehrlicher Ort, um herauszufinden, welcher Hund zu deinem Leben passt.",
    food: "Futter & Portionen",
    canEat: "Darf mein Hund das essen?",
    partner: "Partner werden",
    sources: "Quellen & Methodik",
  },
  fr: {
    blurb: "Un endroit calme et honnête pour découvrir quel chien correspondrait à votre vie.",
    food: "Alimentation et portions",
    canEat: "Mon chien peut-il manger ça ?",
    partner: "Devenir partenaire",
    sources: "Sources et méthodologie",
  },
  nl: {
    blurb: "Een rustige, eerlijke plek om uit te zoeken welke hond bij jouw leven past.",
    food: "Voeding & porties",
    canEat: "Mag mijn hond dit eten?",
    partner: "Word partner",
    sources: "Bronnen & methodiek",
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
            <FooterLink to={withLangPrefix("/plus")}>DoggMatch+</FooterLink>
            <FooterLink to={withLangPrefix("/get-a-dog")}>{t.nav.getADog}</FooterLink>
            <FooterLink to={withLangPrefix("/find-my-dog")}>{t.nav.findMyDog}</FooterLink>
            <FooterLink to={withLangPrefix("/breeds")}>{t.nav.breeds}</FooterLink>
            <FooterLink to={withLangPrefix("/compare")}>{t.nav.compare}</FooterLink>
            <FooterLink to={withLangPrefix("/dog-life")}>{t.nav.dogLife}</FooterLink>
            <FooterLink to={withLangPrefix("/travel")}>{t.nav.travel}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t.footer.resources}>
            <FooterLink to={withLangPrefix("/guides")}>{t.footer.guides}</FooterLink>
            <FooterLink to={withLangPrefix("/guides")}>{t.footer.ownership}</FooterLink>
            <FooterLink to={withLangPrefix("/train")}>{t.footer.training}</FooterLink>
            <FooterLink to={withLangPrefix("/my-dog")}>{t.footer.health}</FooterLink>
            <FooterLink to={withLangPrefix("/my-dog/nutrition")}>{c.food}</FooterLink>
            <FooterLink to={withLangPrefix("/my-dog/food")}>{c.canEat}</FooterLink>
            <FooterLink to={withLangPrefix("/sources")}>{c.sources}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t.footer.company}>
            <FooterLink to={withLangPrefix("/about")}>{t.footer.about}</FooterLink>
            <FooterLink to={withLangPrefix("/contact")}>{t.footer.contact}</FooterLink>
            <FooterLink to={withLangPrefix("/partners")}>{c.partner}</FooterLink>
            <FooterLink to={withLangPrefix("/privacy")}>{t.footer.privacy}</FooterLink>
            <FooterLink to={withLangPrefix("/terms")}>{t.footer.terms}</FooterLink>
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
