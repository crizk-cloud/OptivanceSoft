import { ArrowRight, Layers, ShieldCheck, Users } from "lucide-react";
import { ProductSuiteVisual } from "@/components/home/ProductSuiteVisual";
import { ProductCard } from "@/components/products/ProductCard";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Section, SectionHeading } from "@/components/ui/Section";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

const principles = [
  {
    icon: Layers,
    title: "Built for the industry",
    body: "Each product is designed around the workflows of the sector it serves, rather than adapted from a generic tool.",
  },
  {
    icon: Users,
    title: "Made for the people using it",
    body: "Clear interfaces for staff, families, managers and teams, so the software supports their work instead of adding to it.",
  },
  {
    icon: ShieldCheck,
    title: "Dependable by design",
    body: "We treat reliability, data care and long-term maintainability as part of the product, not an afterthought.",
  },
];

export default function HomePage() {
  const { email, phone, location } = site.contact;
  const hasContact = Boolean(email || phone || location);

  return (
    <>
      <section aria-labelledby="hero-title" className="relative overflow-hidden bg-surface">
        <div className="absolute inset-x-0 top-0 h-px bg-line" />
        <Container className="grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-32">
          <div>
            <Eyebrow>{site.name}</Eyebrow>
            <h1
              id="hero-title"
              className="mt-4 text-4xl font-semibold tracking-tight text-balance text-navy-950 sm:text-5xl lg:text-6xl"
            >
              Software that brings out your best.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
              We build focused products for schools, athletic programs, agriculture and real
              estate — each designed to help the people in that industry do their best work.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#products" size="lg">
                Explore our products
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/#contact" size="lg" variant="secondary">
                Talk to us
              </ButtonLink>
            </div>
          </div>
          <ProductSuiteVisual />
        </Container>
      </section>

      <Section id="products" aria-labelledby="products-title" className="scroll-mt-16">
        <SectionHeading
          id="products-title"
          eyebrow="Products"
          title="Four products, each built for its industry"
          description="From the classroom to the field to the property portfolio, every OptivanceSoft product focuses on one domain and does it well."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Section>

      <Section id="approach" tone="surface" aria-labelledby="approach-title">
        <SectionHeading
          id="approach-title"
          eyebrow="Our approach"
          title="Focused software, built to be relied on"
          description="Our philosophy is simple: software should bring out the best in the people and organisations that use it."
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-navy-950 text-white">
                <Icon className="size-5" aria-hidden strokeWidth={1.75} />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" tone="navy" aria-labelledby="contact-title">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionHeading
            id="contact-title"
            inverse
            eyebrow="Contact"
            title="Let’s find the right product for your organisation"
            description="Tell us about your school, farm or property business and we’ll help you see how OptivanceSoft can support it."
          />
          {hasContact ? (
            <dl className="space-y-4 text-muted-dark lg:justify-self-end">
              {email && (
                <div>
                  <dt className="text-sm font-semibold text-white">Email</dt>
                  <dd>
                    <a href={`mailto:${email}`} className="hover:text-white">
                      {email}
                    </a>
                  </dd>
                </div>
              )}
              {phone && (
                <div>
                  <dt className="text-sm font-semibold text-white">Phone</dt>
                  <dd>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                      {phone}
                    </a>
                  </dd>
                </div>
              )}
              {location && (
                <div>
                  <dt className="text-sm font-semibold text-white">Location</dt>
                  <dd>{location}</dd>
                </div>
              )}
            </dl>
          ) : (
            <p className="text-muted-dark lg:justify-self-end">
              Contact details will be published here shortly.
            </p>
          )}
        </div>
      </Section>
    </>
  );
}
