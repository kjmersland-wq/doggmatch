import { Link } from "@tanstack/react-router";
import { Eyebrow } from "@/components/dogmatch/ui";
import { quizQuestions } from "@/data/questions.locale";
import { useT } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

/**
 * Question 1 of the real quiz, shown on the homepage. Each answer is a plain
 * link to /find-my-dog?s=<value>: the quiz opens at question 2 with this answer
 * already stored. Same question, same answers, same engine — not a second quiz.
 */
export function FirstQuestion({
  eyebrow,
  sub,
  caption,
}: {
  eyebrow: string;
  sub: string;
  caption: string;
}) {
  const t = useT();
  const questions = quizQuestions();
  const q = questions[0];
  if (!q) return null;

  return (
    <section aria-labelledby="first-question-title" className="container-page mt-16 md:mt-20">
      <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <p className="mt-4 text-sm tabular-nums text-muted-foreground">
              {t.quiz.question} 1 {t.quiz.of} {questions.length}
            </p>
            <h2 id="first-question-title" className="display-md mt-3">
              {q.title}
            </h2>
            {q.help && (
              <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
                {q.help}
              </p>
            )}
            <p className="mt-4 text-sm text-muted-foreground">{sub}</p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {q.options.map((option) => (
              <li key={option.value}>
                <Link
                  to={withLangPrefix("/find-my-dog")}
                  search={{ s: option.value } as never}
                  className="flex h-full min-h-16 flex-col justify-center rounded-2xl border border-border bg-background px-5 py-4 transition-all duration-300 ease-out hover:border-accent hover:bg-accent-soft/50"
                >
                  <span className="block font-display text-[1.0625rem] leading-tight tracking-tight">
                    {option.label}
                  </span>
                  {option.hint && (
                    <span className="mt-1 block text-sm text-muted-foreground">{option.hint}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">{caption}</p>
      </div>
    </section>
  );
}
