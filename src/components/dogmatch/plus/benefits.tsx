import { Link } from "@tanstack/react-router";
import { activeBenefits, benefitCategories } from "@/data/plus/benefits";
import { Panel } from "@/components/dogmatch/care/parts";

/** Partner offers for members. Empty until the first partners are in place. */
export function MemberBenefits() {
  const list = activeBenefits();

  return (
    <Panel title="Member benefits">
      <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
        Small, useful savings from people we'd happily send a friend to — shops, groomers, trainers,
        insurers. We'd rather have five good ones than fifty forgettable ones.
      </p>

      {list.length === 0 ? (
        <div className="mt-6 rounded-[1.25rem] border border-dashed border-border p-6">
          <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
            Nothing here yet. We're talking to the first partners now, and as soon as an offer is
            worth your time it will appear on this page — no email needed.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {benefitCategories.map((c) => (
              <li
                key={c.id}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {c.label}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Run a dog-related business?{" "}
            <Link to="/partners" className="text-accent underline-offset-4 hover:underline">
              Become a DoggMatch Partner
            </Link>
            .
          </p>
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {list.map((b) => (
            <li key={b.id} className="rounded-[1.25rem] border border-border p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {benefitCategories.find((c) => c.id === b.category)?.label ?? b.category}
              </p>
              <h3 className="mt-2 font-display text-lg tracking-tight">{b.partner}</h3>
              <p className="mt-1 text-[0.9375rem] leading-relaxed text-accent">{b.offer}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.detail}</p>
              {b.where && <p className="mt-2 text-sm text-muted-foreground">{b.where}</p>}
              {b.code && (
                <p className="mt-3 font-mono text-sm">
                  Code: <span className="text-foreground">{b.code}</span>
                </p>
              )}
              {b.url && (
                <a
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm text-accent underline-offset-4 hover:underline"
                >
                  Go to {b.partner}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}
