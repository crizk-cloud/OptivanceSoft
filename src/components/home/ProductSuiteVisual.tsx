import { ProductIcon } from "@/components/products/ProductCard";
import { products } from "@/lib/products";

/**
 * Decorative, CSS-only illustration of the product suite as an app window.
 * Uses abstract bars rather than numbers so nothing reads as a real metric.
 */
export function ProductSuiteVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl select-none">
      <div className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[2rem] bg-[radial-gradient(60%_60%_at_60%_40%,rgb(8_120_249/0.12),transparent)]" />

      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-raised">
        <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 h-2 w-32 rounded-full bg-line" />
        </div>

        <div className="grid grid-cols-[auto_1fr]">
          <div className="flex flex-col gap-2 border-r border-line p-3">
            {products.map((p, i) => (
              <div
                key={p.slug}
                className={i === 0 ? "rounded-lg bg-brand-50 p-1" : "rounded-lg p-1"}
              >
                <ProductIcon product={p} size="sm" />
              </div>
            ))}
          </div>

          <div className="space-y-4 p-5">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="h-2.5 w-28 rounded-full bg-ink/80" />
                <div className="h-2 w-40 rounded-full bg-line" />
              </div>
              <div className="h-7 w-20 rounded-md bg-brand-500" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[0.7, 0.45, 0.85].map((w, i) => (
                <div key={i} className="rounded-xl border border-line p-3">
                  <div className="h-2 w-10 rounded-full bg-line" />
                  <div className="mt-3 h-1.5 rounded-full bg-surface">
                    <div className="h-1.5 rounded-full bg-brand-500" style={{ width: `${w * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-line p-4">
              <div className="flex h-24 items-end gap-2">
                {[40, 62, 48, 75, 58, 88, 70, 94].map((h, i) => (
                  <div
                    key={i}
                    className={i === 7 ? "flex-1 rounded-t bg-brand-500" : "flex-1 rounded-t bg-brand-100"}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="size-6 rounded-full bg-surface ring-1 ring-line" />
                  <span className="h-2 flex-1 rounded-full bg-line" />
                  <span className="h-2 w-12 rounded-full bg-brand-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
