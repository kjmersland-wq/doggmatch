import { BrandLock } from "@/components/dogmatch/brand-logo";
import type { Block, DocSection } from "@/lib/print/types";
import { useCopy } from "@/i18n";

const copy = {
  en: { writtenDown: "Written down" },
  no: { writtenDown: "Skrevet ut" },
  pl: { writtenDown: "Zapisano" },
  dk: { writtenDown: "Skrevet" },
  se: { writtenDown: "Skrivet" },
  fi: { writtenDown: "Kirjoitettu" },
} as const;

/**
 * The DoggMatch page template every printable shares: a quiet cover, the same
 * section rhythm, and a footer with the dog's name, the date and a page number.
 * It's built to look right on an ordinary home printer, in colour or not.
 */

export function DocPaper({
  title,
  dogName,
  breedName,
  photo,
  subtitle,
  sections,
  date,
}: {
  title: string;
  dogName: string;
  breedName?: string;
  photo?: string;
  subtitle?: string;
  sections: DocSection[];
  date: string;
}) {
  const pages = paginate(sections);
  const total = pages.length + 1;

  return (
    <div className="doc-paper">
      <article className="doc-page">
        <div className="doc-cover">
          <BrandLock className="doc-logo" markClassName="h-9 w-9" wordmarkClassName="text-2xl" />
          <p className="doc-kicker">{title}</p>
          <h1 className="doc-dogname">{dogName}</h1>
          {breedName && <p className="doc-breed">{breedName}</p>}
          {photo && <img src={photo} alt="" className="doc-photo" />}
          {subtitle && <p className="doc-subtitle">{subtitle}</p>}
        </div>
        <Footer dogName={dogName} date={date} page={1} total={total} />
      </article>

      {pages.map((page, i) => (
        <article className="doc-page" key={i}>
          <header className="doc-runhead">
            <BrandLock className="doc-runlogo" markClassName="h-5 w-5" wordmarkClassName="text-sm" />
            <span>
              {dogName}
              {breedName ? ` · ${breedName}` : ""}
            </span>
          </header>
          <div className="doc-body">
            {page.map((section, si) => (
              <section className="doc-section" key={`${i}-${si}`}>
                <h2 className="doc-heading">{section.heading}</h2>
                {section.intro && <p className="doc-intro">{section.intro}</p>}
                {section.blocks.map((block, bi) => (
                  <BlockView key={bi} block={block} />
                ))}
              </section>
            ))}
          </div>
          <Footer dogName={dogName} date={date} page={i + 2} total={total} />
        </article>
      ))}
    </div>
  );
}

function Footer({ dogName, date, page, total }: { dogName: string; date: string; page: number; total: number }) {
  const c = useCopy(copy);
  return (
    <footer className="doc-footer">
      <span>
        {dogName} · DoggMatch
      </span>
      <span>{c.writtenDown} {date}</span>
      <span>
        {page} / {total}
      </span>
    </footer>
  );
}

/** Sections marked newPage start a fresh sheet; the rest flow together. */
function paginate(sections: DocSection[]): DocSection[][] {
  const pages: DocSection[][] = [];
  let current: DocSection[] = [];
  for (const section of sections) {
    if (section.newPage && current.length) {
      pages.push(current);
      current = [];
    }
    current.push(section);
  }
  if (current.length) pages.push(current);
  return pages;
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "text":
      return <p className="doc-text">{block.text}</p>;
    case "note":
      return <p className="doc-note">{block.text}</p>;
    case "fields":
      return (
        <dl className="doc-fields">
          {block.fields.map((f, i) => (
            <div key={i} className={f.wide ? "doc-field doc-field-wide" : "doc-field"}>
              <dt>{f.label}</dt>
              <dd>{f.value ? <span className="doc-value">{f.value}</span> : <span className="doc-blank" />}</dd>
            </div>
          ))}
        </dl>
      );
    case "checklist":
      return (
        <ul className={block.columns === 1 ? "doc-checklist doc-checklist-one" : "doc-checklist"}>
          {(block.items.length ? block.items : ["", "", ""]).map((item, i) => (
            <li key={i}>
              <span className="doc-box" />
              <span>{item || <span className="doc-blank" />}</span>
            </li>
          ))}
        </ul>
      );
    case "week":
      return (
        <table className="doc-week">
          <tbody>
            {block.days.map((d) => (
              <tr key={d.name}>
                <th scope="row">{d.name}</th>
                <td>
                  {d.items.length ? (
                    <ul>
                      {d.items.map((item, i) => (
                        <li key={i}>
                          <span className="doc-box" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span className="doc-blank" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "planner":
      return (
        <table className="doc-planner">
          <thead>
            <tr>
              <th />
              {block.rows.map((r) => (
                <th key={r}>{r}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.days.map((d) => (
              <tr key={d}>
                <th scope="row">{d}</th>
                {block.rows.map((r) => (
                  <td key={r} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    case "lines":
      return (
        <div className="doc-lines">
          {block.label && <p className="doc-lines-label">{block.label}</p>}
          {Array.from({ length: block.count }).map((_, i) => (
            <span className="doc-line" key={i} />
          ))}
        </div>
      );
    default:
      return null;
  }
}