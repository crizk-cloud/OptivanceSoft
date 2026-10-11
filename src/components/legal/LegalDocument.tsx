import { FileWarning } from "lucide-react";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Container } from "@/components/ui/Container";

export type LegalSection = { heading: string; content: ReactNode };

/**
 * Layout for legal pages. While `draft` is true a prominent banner marks the
 * text as unreviewed; set it to false only after business/legal approval.
 */
export function LegalDocument({
  title,
  intro,
  sections,
  draft = true,
}: {
  title: string;
  intro: ReactNode;
  sections: LegalSection[];
  draft?: boolean;
}) {
  return (
    <div className="bg-white">
      <Container className="max-w-3xl py-12 sm:py-16">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: title }]} />

        {draft && (
          <div
            role="note"
            className="mt-8 flex gap-3 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900"
          >
            <FileWarning className="mt-0.5 size-5 shrink-0" aria-hidden />
            <p>
              <strong>Draft — not yet in effect.</strong> This is an initial draft that requires
              business and legal review before publication. Text in [brackets] must be completed
              or confirmed.
            </p>
          </div>
        )}

        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-muted">Last updated: [date of publication]</p>
        <div className="mt-8 text-lg leading-relaxed text-muted">{intro}</div>

        <nav aria-labelledby="toc-title" className="mt-10 rounded-xl border border-line bg-surface p-5">
          <h2 id="toc-title" className="text-sm font-semibold text-ink">
            Contents
          </h2>
          <ol className="mt-3 grid list-decimal gap-x-8 gap-y-1.5 pl-5 text-sm sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#section-${i + 1}`} className="inline-block py-0.5 text-brand-600 hover:underline">
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 space-y-10">
          {sections.map((s, i) => (
            <section key={s.heading} id={`section-${i + 1}`} aria-labelledby={`section-${i + 1}-title`} className="scroll-mt-24">
              <h2 id={`section-${i + 1}-title`} className="text-xl font-semibold text-ink">
                {i + 1}. {s.heading}
              </h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
                {s.content}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
