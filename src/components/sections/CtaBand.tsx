import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand({
  title = "Ready to Find the Right Solution for Your Organization?",
  body = "Explore our products or get in touch with our team to learn how OptivanceSoft can help you achieve more.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950 px-6 py-14 sm:px-12 sm:py-16 lg:px-16">
          {/* Subtle abstract texture: fine grid plus a soft brand glow and arcs. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_left,black,transparent_75%)]"
          />
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-24 -z-10 size-[28rem] rounded-full bg-brand-500/25 blur-3xl"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="absolute -right-20 -bottom-40 -z-10 hidden w-[30rem] text-white/10 md:block"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="200" cy="200" r="120" />
            <circle cx="200" cy="200" r="160" />
            <circle cx="200" cy="200" r="199" />
          </svg>

          <div className="max-w-2xl">
            <h2
              id="cta-title"
              className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-dark">{body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#products" size="lg">
                Explore Our Products
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" size="lg" variant="inverse">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
