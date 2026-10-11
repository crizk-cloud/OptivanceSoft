import type { Feature } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FeatureGrid({
  items,
  columns = 4,
  variant = "card",
}: {
  items: Feature[];
  columns?: 2 | 4;
  variant?: "card" | "plain";
}) {
  return (
    <ul
      className={cn(
        "grid gap-6",
        columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2",
      )}
    >
      {items.map(({ icon: Icon, title, body }) => (
        <li
          key={title}
          className={
            variant === "card"
              ? "rounded-2xl border border-line bg-white p-6 shadow-card"
              : "border-t border-line-strong pt-6"
          }
        >
          <span
            className={
              variant === "card"
                ? "inline-flex size-11 items-center justify-center rounded-xl bg-navy-950 text-white"
                : "inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-500 ring-1 ring-brand-100"
            }
          >
            <Icon className="size-5" aria-hidden strokeWidth={1.75} />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{body}</p>
        </li>
      ))}
    </ul>
  );
}
