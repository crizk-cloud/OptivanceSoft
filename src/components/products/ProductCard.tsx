import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { productHref, themeStyle, type Product } from "@/lib/products";

export function ProductIcon({ product, size = "md" }: { product: Product; size?: "sm" | "md" }) {
  const Icon = product.icon;
  return (
    <span
      style={themeStyle(product)}
      className={
        size === "sm"
          ? "inline-flex size-8 items-center justify-center rounded-lg bg-(--accent-soft) text-(--accent-strong) ring-1 ring-(--accent-muted)"
          : "inline-flex size-11 items-center justify-center rounded-xl bg-(--accent-soft) text-(--accent-strong) ring-1 ring-(--accent-muted)"
      }
    >
      <Icon className={size === "sm" ? "size-4" : "size-5"} aria-hidden strokeWidth={1.75} />
    </span>
  );
}

/**
 * Product card: industry photo with the product's icon badge overlapping its
 * lower edge, then name, category, description and a Learn more link.
 */
export function ProductCard({ product }: { product: Product }) {
  const titleId = `${product.slug}-title`;
  const Icon = product.icon;
  return (
    <article
      aria-labelledby={titleId}
      style={themeStyle(product)}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-(--accent-muted) hover:shadow-raised motion-safe:hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
        />
      </div>
      <div className="relative flex flex-1 flex-col px-6 pb-6">
        <span className="-mt-7 mb-4 inline-flex size-14 items-center justify-center self-start rounded-2xl bg-(--accent) text-white shadow-lg ring-4 ring-white">
          <Icon className="size-6" aria-hidden strokeWidth={2} />
        </span>
        <h3 id={titleId} className="text-xl font-bold tracking-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-1 text-[0.95rem] font-medium text-ink/80">{product.category}</p>
        <p className="mt-3 flex-1 leading-relaxed text-muted">{product.description}</p>
        <Link
          href={productHref(product.slug)}
          className="mt-6 inline-flex items-center gap-1.5 self-start rounded-md text-sm font-semibold text-brand-600 after:absolute after:inset-0 hover:text-brand-700"
        >
          Learn More<span className="sr-only"> about {product.name}</span>
          <ArrowRight
            className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
