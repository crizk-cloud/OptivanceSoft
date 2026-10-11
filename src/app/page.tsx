import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { HeroDevices } from "@/components/home/HeroDevices";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { benefits, highlights } from "@/lib/content";
import { products } from "@/lib/products";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `${site.name} — Software for Schools, Sports Programs, Farms and Property`,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

/**
 * Structured data limited to verified facts: name, website, logo and the
 * approved description. No address, founding date or reviews.
 */
function OrganizationJsonLd() {
  const url = siteUrl().origin;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: site.name,
        url,
        logo: `${url}/icon.svg`,
        description: site.positioning,
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: site.name,
        url,
        publisher: { "@id": `${url}/#organization` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for "<" so it cannot close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-surface">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(rgb(16_37_66/0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(16_37_66/0.045)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]"
        />
        <Container className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:gap-12 lg:py-28">
          <div>
            <Eyebrow>Software that brings out your best.</Eyebrow>
            <h1
              id="hero-title"
              className="mt-4 text-4xl font-semibold tracking-tight text-balance text-navy-950 sm:text-5xl xl:text-6xl"
            >
              Powering Smarter Operations Across{" "}
              <span className="text-brand-500">Every Industry</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              OptivanceSoft develops powerful, easy-to-use software that helps schools, sports
              programs, farms, and property businesses work smarter, communicate better, and
              achieve more.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#products" size="lg">
                Explore Our Products
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/about" size="lg" variant="secondary">
                About Our Company
              </ButtonLink>
            </div>
          </div>
          <HeroDevices />
        </Container>
      </section>

      <Section id="products" aria-labelledby="products-title">
        <SectionHeading
          id="products-title"
          eyebrow="Our Products"
          title="Purpose-Built Software for Real-World Results"
          description="Four powerful solutions. Different industries. One shared vision — helping you achieve more with technology."
          align="center"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="why-optivancesoft" tone="surface" aria-labelledby="why-title">
        <SectionHeading
          id="why-title"
          eyebrow="Why OptivanceSoft"
          title="Built for Real People. Designed for Real Results."
          description="We focus on the everyday work of the organizations we serve, and build software that makes that work simpler."
        />
        <div className="mt-12">
          <FeatureGrid items={benefits} />
        </div>
      </Section>

      <Section aria-labelledby="overview-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow>Company Overview</Eyebrow>
            <h2
              id="overview-title"
              className="mt-3 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl"
            >
              A Smarter Future, Across More Industries
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-muted">
              From classrooms to playing fields, from farms to properties, OptivanceSoft helps
              organizations operate more efficiently and achieve their goals.
            </p>
            <ButtonLink href="/about" variant="secondary" className="mt-8">
              Learn about OptivanceSoft
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
          <FeatureGrid items={highlights} columns={2} variant="plain" />
        </div>
      </Section>

      <CtaBand flush />
    </>
  );
}
