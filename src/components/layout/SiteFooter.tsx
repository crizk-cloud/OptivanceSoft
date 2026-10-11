import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { products } from "@/lib/products";
import { mainNav, site } from "@/lib/site";
import { CopyrightYear } from "./CopyrightYear";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-muted-dark">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo inverse />
            <p className="mt-4 text-sm leading-relaxed">{site.tagline}</p>
          </div>

          <nav aria-labelledby="footer-products">
            <h2 id="footer-products" className="text-sm font-semibold text-white">
              Products
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/#${p.slug}`} className="transition-colors hover:text-white">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className="text-sm font-semibold text-white">
              Company
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNav
                .filter((item) => item.label !== "Products")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm">
          <p>
            © <CopyrightYear /> {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
