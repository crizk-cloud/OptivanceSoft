import type { ProductSlug } from "@/lib/products";
import { cn } from "@/lib/cn";

/**
 * Small decorative illustration for each product, drawn with CSS so cards
 * stay consistent without stock imagery. Purely presentational.
 */
export function ProductVisual({
  slug,
  className,
  large,
}: {
  slug: ProductSlug;
  className?: string;
  large?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative overflow-hidden bg-surface bg-[radial-gradient(circle_at_1px_1px,rgb(16_37_66/0.07)_1px,transparent_0)] [background-size:16px_16px]",
        className,
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className={cn("flex w-full justify-center", large && "sm:scale-150")}>{visuals[slug]}</div>
      </div>
    </div>
  );
}

const line = "block h-1.5 rounded-full";

const visuals: Record<ProductSlug, React.ReactNode> = {
  "campus-call": (
    <div className="w-full max-w-[220px] space-y-2">
      <div className="flex items-end gap-2">
        <span className="size-6 shrink-0 rounded-full bg-brand-100 ring-2 ring-white" />
        <div className="w-3/4 space-y-1.5 rounded-xl rounded-bl-sm border border-line bg-white p-2.5 shadow-card">
          <span className={cn(line, "w-full bg-line-strong")} />
          <span className={cn(line, "w-2/3 bg-line")} />
        </div>
      </div>
      <div className="ml-auto w-2/3 space-y-1.5 rounded-xl rounded-br-sm bg-brand-600 p-2.5 shadow-card">
        <span className={cn(line, "w-full bg-white/70")} />
        <span className={cn(line, "w-1/2 bg-white/50")} />
      </div>
      <div className="flex items-end gap-2">
        <span className="size-6 shrink-0 rounded-full bg-navy-950/15 ring-2 ring-white" />
        <div className="w-1/2 rounded-xl rounded-bl-sm border border-line bg-white p-2.5 shadow-card">
          <span className={cn(line, "w-full bg-line-strong")} />
        </div>
      </div>
    </div>
  ),
  "athletix-school": (
    <div className="w-full max-w-[230px] rounded-xl border border-line bg-white p-3 shadow-card">
      <div className="mb-2 flex items-center justify-between">
        <span className={cn(line, "w-16 bg-ink/70")} />
        <span className="h-3 w-8 rounded bg-brand-50 ring-1 ring-brand-100" />
      </div>
      <div className="grid grid-cols-5 gap-1">
        {Array.from({ length: 15 }, (_, i) => (
          <span
            key={i}
            className={cn(
              "h-5 rounded-[4px]",
              [1, 7, 13].includes(i)
                ? "bg-brand-500"
                : [3, 9].includes(i)
                  ? "bg-brand-200"
                  : "bg-surface",
            )}
          />
        ))}
      </div>
    </div>
  ),
  "grow-manager": (
    <div className="w-full max-w-[230px]">
      <div className="grid grid-cols-4 gap-1.5 rounded-xl border border-line bg-white p-3 shadow-card">
        {Array.from({ length: 8 }, (_, i) => (
          <span
            key={i}
            className={cn(
              "aspect-[4/3] rounded-md",
              i === 2 ? "bg-brand-500" : i % 3 === 0 ? "bg-brand-200" : "bg-brand-100",
            )}
          />
        ))}
      </div>
      <div className="mx-3 -mt-2 flex items-center gap-2 rounded-lg border border-line bg-white px-2.5 py-2 shadow-card">
        <span className="size-2 rounded-full bg-brand-500" />
        <span className={cn(line, "flex-1 bg-line-strong")} />
        <span className={cn(line, "w-8 bg-brand-100")} />
      </div>
    </div>
  ),
  "service-hub": (
    <div className="w-full max-w-[230px] space-y-1.5">
      {[
        ["bg-brand-500", "w-3/4"],
        ["bg-brand-200", "w-1/2"],
        ["bg-line-strong", "w-2/3"],
      ].map(([dot, width], i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 rounded-lg border border-line bg-white p-2 shadow-card"
        >
          <span className="flex size-7 shrink-0 items-end justify-center gap-0.5 rounded-md bg-navy-950 p-1">
            <span className="h-2.5 w-1 rounded-[1px] bg-white/70" />
            <span className="h-4 w-1 rounded-[1px] bg-white" />
            <span className="h-3 w-1 rounded-[1px] bg-white/70" />
          </span>
          <span className="flex-1 space-y-1">
            <span className={cn(line, width, "bg-ink/60")} />
            <span className={cn(line, "w-1/3 bg-line")} />
          </span>
          <span className={cn("size-2 rounded-full", dot)} />
        </div>
      ))}
    </div>
  ),
};
