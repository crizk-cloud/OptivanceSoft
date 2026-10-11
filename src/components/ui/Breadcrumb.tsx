import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="inline-block rounded-sm py-1 transition-colors hover:text-ink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "font-medium text-ink" : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="size-3.5 text-line-strong" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
