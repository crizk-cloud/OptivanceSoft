import type { Feature } from "@/lib/content";
import { cn } from "@/lib/cn";

export function FeatureGrid({
  items,
  columns = 4,
  variant = "card",
}: {
  items: Feature[];
  columns?: 2 | 4;
  variant?: "card" | "inline";
}) {
  return (
    <ul
      className={cn(
        "grid gap-6",
        columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2",
      )}
    >
      {items.map(({ icon: Icon, title, body }) =>
        variant === "inline" ? (
          <li key={title} className="flex gap-4">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-brand-500 shadow-card ring-1 ring-line">
              <Icon className="size-6" aria-hidden strokeWidth={2} />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-1 leading-relaxed text-muted">{body}</p>
            </div>
          </li>
        ) : (
        <li
          key={title}
          className="rounded-2xl border border-line bg-white p-6 shadow-card"
        >
          <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy-950 text-white">
            <Icon className="size-5" aria-hidden strokeWidth={1.75} />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{body}</p>
        </li>
        ),
      )}
    </ul>
  );
}
