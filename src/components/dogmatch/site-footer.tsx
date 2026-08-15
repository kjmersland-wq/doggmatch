import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n";
import { BrandLock } from "./brand-logo";

export function SiteFooter() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <BrandLock markClassName="h-10 w-10" wordmarkClassName="text-2xl" />
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
              {t.brand.secondary} A transparent compatibility platform for people choosing a dog.
            </p>
          </div>

          <FooterColumn title={t.footer.discover}>
            <FooterLink to="/find-my-dog">{t.nav.findMyDog}</FooterLink>
            <FooterLink to="/breeds">{t.nav.breeds}</FooterLink>
            <FooterLink to="/compare">{t.nav.compare}</FooterLink>
            <FooterLink to="/dog-life">{t.nav.dogLife}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t.footer.resources}>
            <FooterLink to="/guides">{t.footer.guides}</FooterLink>
            <FooterLink to="/guides">{t.footer.ownership}</FooterLink>
            <FooterLink to="/guides">{t.footer.training}</FooterLink>
            <FooterLink to="/guides">{t.footer.health}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t.footer.company}>
            <FooterLink to="/about">{t.footer.about}</FooterLink>
            <FooterLink to="/about">{t.footer.contact}</FooterLink>
            <FooterLink to="/about">{t.footer.privacy}</FooterLink>
            <FooterLink to="/about">{t.footer.terms}</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {t.brand.name}. {t.footer.rights}
          </p>
          <p className="max-w-md md:text-right">{t.footer.note}</p>
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
