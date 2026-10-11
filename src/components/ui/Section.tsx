import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "white" | "surface" | "navy";

const tones: Record<Tone, string> = {
  white: "bg-white",
  surface: "bg-surface",
  navy: "bg-navy-950 text-white",
};

export function Section({
  tone = "white",
  className,
  children,
  ...props
}: { tone?: Tone } & ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("py-20 sm:py-24 lg:py-28", tones[tone], className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, inverse }: { children: ReactNode; inverse?: boolean }) {
  return (
    <p
      className={cn(
        "text-sm font-semibold tracking-wide uppercase",
        inverse ? "text-brand-300" : "text-brand-600",
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  inverse,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
          inverse ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty",
            inverse ? "text-muted-dark" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
