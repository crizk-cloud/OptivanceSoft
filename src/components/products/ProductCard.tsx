import type { Product } from "@/lib/products";

export function ProductIcon({ product, size = "md" }: { product: Product; size?: "sm" | "md" }) {
  const Icon = product.icon;
  return (
    <span
      className={
        size === "sm"
          ? "inline-flex size-8 items-center justify-center rounded-lg bg-brand-50 text-brand-500 ring-1 ring-brand-100"
          : "inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-500 ring-1 ring-brand-100"
      }
    >
      <Icon className={size === "sm" ? "size-4" : "size-5"} aria-hidden strokeWidth={1.75} />
    </span>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article
      id={product.slug}
      aria-labelledby={`${product.slug}-title`}
      className="group flex h-full scroll-mt-24 flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-[border-color,box-shadow] duration-200 hover:border-brand-200 hover:shadow-raised sm:p-7"
    >
      <div className="flex items-center justify-between gap-4">
        <ProductIcon product={product} />
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
          {product.industry}
        </span>
      </div>
      <h3 id={`${product.slug}-title`} className="mt-6 text-xl font-semibold tracking-tight text-ink">
        {product.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-600">{product.summary}</p>
      <p className="mt-4 leading-relaxed text-muted">{product.description}</p>
    </article>
  );
}
