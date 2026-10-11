import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import heroImage from "@/assets/hero-devices.jpg";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { benefits, stats } from "@/lib/content";
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
        logo: `${url}/brand/optivancesoft-mark.png`,
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
        {/* Wide screens: the photo fills the banner, faded on the left behind the text. */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 hidden xl:block">
          <Image
            src={heroImage}
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#F5F8FC_0%,rgb(245_248_252/0.95)_36%,rgb(245_248_252/0.6)_52%,rgb(245_248_252/0)_68%)]" />
        </div>
        <Container className="py-14 sm:py-20 xl:flex xl:min-h-[38rem] xl:items-center xl:py-24">
          <div className="max-w-2xl xl:max-w-[33rem] 2xl:max-w-2xl">
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
              <ButtonLink href="/about" size="lg" variant="outline">
                About Our Company
              </ButtonLink>
            </div>
          </div>
        </Container>
        {/* Smaller screens: the photo sits below the text (same source, so one download). */}
        <div className="relative aspect-[16/10] max-h-[32rem] w-full xl:hidden">
          <Image
            src={heroImage}
            alt="Laptop, tablet and phone on a desk displaying software dashboards"
            fill
            loading="eager"
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[75%_center]"
          />
        </div>
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
          eyebrow="Why Choose OptivanceSoft"
          title="Built for Real People. Designed for Real Results."
          align="center"
        />
        <div className="mt-12">
          <FeatureGrid items={benefits} variant="inline" />
        </div>
      </Section>

      <Section aria-labelledby="overview-title">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
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
            <ButtonLink href="/about" className="mt-8">
              Our Story
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
          <ul className="grid grid-cols-2 gap-y-10 self-center sm:grid-cols-4 sm:divide-x sm:divide-line">
            {stats.map(({ icon: Icon, value, label }) => (
              <li key={label} className="flex flex-col items-center px-4 text-center">
                <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-50 text-brand-500 ring-1 ring-brand-100">
                  <Icon className="size-6" aria-hidden strokeWidth={1.75} />
                </span>
                <span className="mt-4 text-3xl font-bold tracking-tight text-ink">{value}</span>
                <span className="mt-1 text-sm text-muted">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
