import { ArrowRight, Check, UserRound } from "lucide-react";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDashboard } from "@/components/products/ProductDashboard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Faq } from "@/components/ui/Faq";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { products, themeStyle, type Product } from "@/lib/products";

const ALL_PRODUCTS_HREF = "/#products";

/** Shared layout for every product landing page; content comes from `products.ts`. */
export function ProductPageTemplate({ product }: { product: Product }) {
  const Icon = product.icon;
  const related = products.filter((p) => p.slug !== product.slug);
  // Pre-selects this product in the contact form.
  const contactHref = `/contact?product=${product.slug}`;
  // Sections below the hero alternate white/surface, whichever optional ones render.
  let sectionIndex = 0;
  const nextTone = (): "white" | "surface" => (sectionIndex++ % 2 === 0 ? "white" : "surface");

  return (
    <div style={themeStyle(product)}>
      {/* Hero */}
      <section
        aria-labelledby="product-title"
        className="relative isolate overflow-hidden border-b border-line bg-surface"
      >
        <div
          aria-hidden="true"
          className="absolute -top-40 right-0 -z-10 size-[36rem] rounded-full bg-(--accent)/10 blur-3xl"
        />
        <Container className="pt-8 pb-16 sm:pb-20 lg:pb-24">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: ALL_PRODUCTS_HREF },
              { label: product.name },
            ]}
          />
          <div className="mt-10 grid items-center gap-14 lg:mt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-(--accent-strong) text-white">
                  <Icon className="size-5" aria-hidden strokeWidth={1.75} />
                </span>
                <p className="text-sm font-semibold tracking-wide text-(--accent-strong) uppercase">
                  {product.category}
                </p>
              </div>
              <h1
                id="product-title"
                className="mt-6 text-4xl font-semibold tracking-tight text-navy-950 sm:text-5xl"
              >
                {product.name}
              </h1>
              <p className="mt-4 text-2xl font-medium tracking-tight text-balance text-ink sm:text-[1.65rem] sm:leading-snug">
                {product.valueProp}
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">
                {product.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={contactHref} size="lg">
                  {product.ctaLabel}
                  <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
                <ButtonLink href={ALL_PRODUCTS_HREF} size="lg" variant="secondary">
                  View All Products
                </ButtonLink>
              </div>
            </div>
            <ProductDashboard product={product} />
          </div>
        </Container>
      </section>

      {/* Overview (optional) */}
      {product.overview && (
        <Section tone={nextTone()} aria-labelledby="overview-title">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeading accent id="overview-title" eyebrow="Overview" title={product.overview.title} />
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {product.overview.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Features */}
      <Section tone={nextTone()} aria-labelledby="features-title">
        <SectionHeading
          accent
          id="features-title"
          eyebrow={product.featuresHeading?.eyebrow ?? "Features"}
          title={product.featuresHeading?.title ?? `What ${product.name} helps you do`}
        />
        <ul
          className={cn(
            "mt-12 grid gap-6 sm:grid-cols-2",
            product.features.length === 4 ? "xl:grid-cols-4" : "lg:grid-cols-3",
          )}
        >
          {product.features.map(({ icon: FeatureIcon, title, body }) => (
            <li key={title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-(--accent-soft) text-(--accent-strong) ring-1 ring-(--accent-muted)">
                <FeatureIcon className="size-5" aria-hidden strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Governance (optional) */}
      {product.governance && (
        <Section tone={nextTone()} aria-labelledby="governance-title">
          <SectionHeading
            accent
            id="governance-title"
            eyebrow="Trust by design"
            title={product.governance.title}
            description={product.governance.intro}
          />
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {product.governance.items.map(({ icon: ItemIcon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-(--accent-soft) text-(--accent-strong) ring-1 ring-(--accent-muted)">
                  <ItemIcon className="size-5" aria-hidden strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Benefits */}
      <Section tone={nextTone()} aria-labelledby="benefits-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading
          accent
            id="benefits-title"
            eyebrow={product.benefitsHeading?.eyebrow ?? "Why it matters"}
            title={product.benefitsHeading?.title ?? "The problems it addresses"}
            description={
              product.benefitsHeading?.description ??
              `${product.name} is built around everyday challenges in ${product.industry.toLowerCase()}.`
            }
          />
          <ul className="space-y-4">
            {product.benefits.map((b) => (
              <li key={b.problem} className="flex gap-4 rounded-2xl border border-line bg-white p-6 shadow-card">
                <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-(--accent-strong) text-white">
                  <Check className="size-4" aria-hidden strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{b.problem}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted">{b.solution}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Audience */}
      <Section tone={nextTone()} aria-labelledby="audience-title">
        <SectionHeading accent id="audience-title" eyebrow="Who it’s for" title="Designed for" />
        <ul
          className={cn(
            "mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2",
            product.audience.length === 3
              ? "lg:grid-cols-3"
              : product.audience.length === 5
                ? "lg:grid-cols-3 xl:grid-cols-5"
                : "lg:grid-cols-4",
          )}
        >
          {product.audience.map((a) => (
            <li key={a.label} className="border-t-2 border-(--accent) pt-5">
              <div className="flex items-center gap-2">
                <UserRound className="size-4 text-(--accent-strong)" aria-hidden />
                <h3 className="font-semibold text-ink">{a.label}</h3>
              </div>
              <p className="mt-2 leading-relaxed text-muted">{a.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section tone={nextTone()} aria-labelledby="faq-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div>
            <Eyebrow accent>FAQ</Eyebrow>
            <h2 id="faq-title" className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Common questions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Don’t see your question? Our team is happy to help.
            </p>
          </div>
          <Faq items={product.faqs} />
        </div>
      </Section>

      <CtaBand
        title={`Interested in ${product.name}?`}
        body={`Request a demo and our team will show you how ${product.name} can support your organization.`}
        primary={{ label: product.ctaLabel, href: contactHref }}
        secondary={{ label: "View All Products", href: ALL_PRODUCTS_HREF }}
      />

      {/* Related products */}
      <Section tone="surface" aria-labelledby="related-title" className="border-t border-line">
        <SectionHeading id="related-title" eyebrow="Explore more" title="Other OptivanceSoft products" />
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
