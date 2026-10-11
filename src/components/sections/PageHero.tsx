import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

/** Header block for interior pages. */
export function PageHero({
  eyebrow,
  title,
  children,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <Container
        className={
          aside
            ? "grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24"
            : "py-16 sm:py-20 lg:py-24"
        }
      >
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-navy-950 sm:text-5xl">
            {title}
          </h1>
          {children && (
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-pretty text-muted">{children}</div>
          )}
        </div>
        {aside}
      </Container>
    </section>
  );
}
