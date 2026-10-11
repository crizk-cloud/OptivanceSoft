import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type Action = { label: string; href: string };

/**
 * Full-width closing call to action on a deep blue gradient with layered
 * mountain silhouettes (decorative SVG, no image download).
 */
export function CtaBand({
  eyebrow = "Let’s build a smarter tomorrow",
  title = "Ready to Find the Right Solution for Your Organization?",
  body = "Explore our products or get in touch with our team to learn how OptivanceSoft can help you achieve more.",
  primary = { label: "Explore Our Products", href: "/#products" },
  secondary = { label: "Contact Us", href: "/contact" },
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primary?: Action;
  secondary?: Action;
}) {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#0B3C7A_0%,#0A2C5C_55%,#071A2F_100%)]"
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 -z-10 h-48 w-full sm:h-56"
      >
        <path
          d="M0 210 L120 150 L230 190 L360 110 L470 170 L600 95 L720 160 L840 105 L960 175 L1080 120 L1200 180 L1320 130 L1440 170 V320 H0Z"
          fill="#1B4F95"
          opacity=".45"
        />
        <path
          d="M0 250 L140 190 L260 235 L400 170 L520 225 L660 160 L780 220 L900 175 L1040 235 L1170 180 L1300 230 L1440 200 V320 H0Z"
          fill="#123E7A"
          opacity=".7"
        />
        <path
          d="M0 290 L160 245 L300 280 L450 235 L600 285 L760 245 L900 290 L1050 250 L1200 290 L1340 255 L1440 280 V320 H0Z"
          fill="#071A2F"
        />
      </svg>

      <Container className="py-20 text-center sm:py-24">
        <p className="text-sm font-semibold tracking-[0.18em] text-brand-300 uppercase">{eyebrow}</p>
        <h2
          id="cta-title"
          className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl"
        >
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-[#C9D6E8]">{body}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={primary.href} size="lg" variant="inverse">
            {primary.label}
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href={secondary.href} size="lg" variant="outlineInverse">
            {secondary.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
