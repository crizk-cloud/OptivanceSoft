import { Compass, PencilRuler, RefreshCw, Users, Wrench } from "lucide-react";
import type { Metadata } from "next";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { Feature } from "@/lib/content";
import { products } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About OptivanceSoft",
  description:
    "OptivanceSoft builds software designed to help organizations work smarter, simplify operations, and bring out their best. Learn about our mission and approach.",
  path: "/about",
});

const philosophy: Feature[] = [
  {
    icon: Wrench,
    title: "Practical technology",
    body: "We build for the real work organizations do every day, focusing on what genuinely helps rather than features for their own sake.",
  },
  {
    icon: PencilRuler,
    title: "Thoughtful design",
    body: "Clear, intuitive interfaces make software easier to adopt, so people can spend their time on their work instead of on the tool.",
  },
  {
    icon: RefreshCw,
    title: "Continuous improvement",
    body: "Our products keep evolving. We refine and improve them as we learn more about how they are used.",
  },
  {
    icon: Users,
    title: "Customer-focused development",
    body: "We listen to the organizations that use our software and let their needs guide what we build next.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About OptivanceSoft" title="Software that helps organizations bring out their best">
        <p>
          OptivanceSoft builds software designed to help organizations work smarter, simplify
          operations, and bring out their best.
        </p>
      </PageHero>

      <Section aria-labelledby="intro-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <SectionHeading id="intro-title" eyebrow="Who we are" title="A software company for many industries" />
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              OptivanceSoft creates practical digital products for organizations across multiple
              industries. Each of our products focuses on a specific field, from school
              communication and athletics to agriculture and real estate.
            </p>
            <p>
              What connects them is a shared approach: software should be useful, intuitive and
              dependable, and it should make the work of the people using it simpler.
            </p>
          </div>
        </div>
      </Section>

      <section id="vision" aria-labelledby="mission-title" className="scroll-mt-16 bg-navy-950 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-white/10 text-brand-300">
              <Compass className="size-6" aria-hidden strokeWidth={1.75} />
            </span>
            <h2
              id="mission-title"
              className="mt-5 text-sm font-semibold tracking-wide text-brand-300 uppercase"
            >
              Our mission
            </h2>
            <p className="mt-5 text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              “To make useful, intuitive software that helps people and organizations perform at
              their best.”
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" aria-labelledby="philosophy-title">
        <SectionHeading
          id="philosophy-title"
          eyebrow="Our philosophy"
          title="How we build software"
          description="Four principles guide every OptivanceSoft product."
        />
        <div className="mt-12">
          <FeatureGrid items={philosophy} />
        </div>
      </Section>

      <Section aria-labelledby="about-products-title">
        <SectionHeading
          id="about-products-title"
          eyebrow="Our products"
          title="Four products, one shared vision"
          description="Each product is designed for the organizations and people in its industry."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        flush
        title="See how OptivanceSoft can help your organization"
        body="Explore our products or get in touch with our team to talk about your needs."
      />
    </>
  );
}
