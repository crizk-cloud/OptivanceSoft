import Image from "next/image";
import { themeStyle, type Product } from "@/lib/products";

/** Real product screenshot in a light browser-style frame (used instead of the illustrative preview). */
export function ProductScreenshot({ product }: { product: Product }) {
  const shot = product.screenshot;
  if (!shot) return null;
  return (
    <figure style={themeStyle(product)} className="w-full">
      <div className="relative">
        <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-(--accent)/10 blur-2xl" />
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-raised">
          <div aria-hidden="true" className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </div>
          <Image
            src={shot.src}
            alt={shot.alt}
            loading="eager"
            placeholder="blur"
            sizes="(min-width: 1280px) 640px, (min-width: 1024px) 52vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-muted">{shot.caption}</figcaption>
    </figure>
  );
}
