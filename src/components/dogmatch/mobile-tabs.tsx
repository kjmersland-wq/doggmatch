import { Link } from "@tanstack/react-router";
import { Compass, GraduationCap, Home, MapPin, Sparkles } from "lucide-react";
import { useT } from "@/i18n";

export function MobileTabs() {
  const t = useT();
  const items = [
    { to: "/", label: t.nav.home, Icon: Home },
    { to: "/find-my-dog", label: t.nav.match, Icon: Sparkles },
    { to: "/breeds", label: t.nav.explore, Icon: Compass },
    { to: "/train", label: t.nav.trainShort, Icon: GraduationCap },
    { to: "/dog-life", label: t.nav.nearby, Icon: MapPin },
  ];

  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
    >
      <ul className="grid grid-cols-5">
        {items.map(({ to, label, Icon }) => (
          <li key={label}>
            <Link
              to={to}
              className="flex min-h-14 flex-col items-center justify-center gap-1 py-2 text-[0.625rem] font-medium tracking-wide text-muted-foreground transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden="true" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
