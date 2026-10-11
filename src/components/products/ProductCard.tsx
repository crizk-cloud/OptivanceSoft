import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { productHref, type Product } from "@/lib/products";
import { ProductVisual } from "./ProductVisual";

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
  const titleId = `${product.slug}-title`;
  return (
    <article
      aria-labelledby={titleId}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-[border-color,box-shadow] duration-200 hover:border-brand-200 hover:shadow-raised"
    >
      <ProductVisual slug={product.slug} className="h-40 border-b border-line" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <ProductIcon product={product} size="sm" />
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">{product.industry}</p>
        </div>
        <h3 id={titleId} className="mt-4 text-xl font-semibold tracking-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-brand-600">{product.category}</p>
        <p className="mt-3 flex-1 leading-relaxed text-muted">{product.description}</p>
        <Link
          href={productHref(product.slug)}
          className="mt-6 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-brand-600 after:absolute after:inset-0 hover:text-brand-700"
        >
          Learn more<span className="sr-only"> about {product.name}</span>
          <ArrowRight
            className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
