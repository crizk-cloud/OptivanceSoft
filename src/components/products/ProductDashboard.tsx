import { themeStyle, type Product } from "@/lib/products";

/**
 * Illustrative interface preview for a product page. The navigation uses the
 * product's real feature names; the content area is abstract so it never
 * pretends to show real data or an actual screenshot.
 */
export function ProductDashboard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <figure style={themeStyle(product)} className="w-full">
      <div aria-hidden="true" className="relative select-none">
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-(--accent)/10 blur-2xl" />
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-raised">
          <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </div>
          <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] max-sm:grid-cols-1">
            <div className="border-r border-line bg-navy-950 p-4 max-sm:hidden">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="inline-flex size-6 items-center justify-center rounded-md bg-(--accent)">
                  <Icon className="size-3.5" strokeWidth={2} />
                </span>
                <span className="truncate">{product.name}</span>
              </div>
              <ul className="mt-5 space-y-1 text-xs">
                {product.features.slice(0, 6).map((f, i) => (
                  <li
                    key={f.title}
                    className={
                      i === 0
                        ? "truncate rounded-md bg-white/10 px-2 py-1.5 font-medium text-white"
                        : "truncate px-2 py-1.5 text-muted-dark"
                    }
                  >
                    {f.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">{product.features[0].title}</p>
                  <span className="mt-1.5 block h-1.5 w-28 rounded-full bg-line" />
                </div>
                <span className="h-7 w-20 shrink-0 rounded-md bg-(--accent-strong)" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[0.7, 0.45, 0.85].map((w, i) => (
                  <div key={i} className="rounded-xl border border-line p-3">
                    <span className="block h-1.5 w-10 rounded-full bg-line-strong" />
                    <div className="mt-3 h-1.5 rounded-full bg-surface">
                      <div className="h-1.5 rounded-full bg-(--accent)" style={{ width: `${w * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 rounded-xl border border-line p-4">
                {[0.9, 0.65, 0.8, 0.55].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span
                      className={
                        i === 0
                          ? "size-7 shrink-0 rounded-lg bg-(--accent-soft) ring-1 ring-(--accent-muted)"
                          : "size-7 shrink-0 rounded-lg bg-surface ring-1 ring-line"
                      }
                    />
                    <span className="h-2 rounded-full bg-line" style={{ width: `${w * 70}%` }} />
                    <span
                      className={
                        i === 0
                          ? "ml-auto h-5 w-14 shrink-0 rounded-full bg-(--accent-soft)"
                          : "ml-auto h-5 w-14 shrink-0 rounded-full bg-surface"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-muted">
        Illustrative preview — not an actual product screenshot.
      </figcaption>
    </figure>
  );
}
