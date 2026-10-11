import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-150 ease-out focus-visible:outline-offset-2 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-55 disabled:active:translate-y-0 aria-disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-md active:bg-brand-700",
  secondary:
    "border border-line-strong bg-white text-ink shadow-sm hover:border-brand-200 hover:bg-brand-50",
  ghost: "text-ink hover:bg-surface",
  inverse: "bg-white text-navy-950 shadow-sm hover:bg-brand-50",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

type StyleProps = { variant?: Variant; size?: Size };

function buttonClasses({ variant = "primary", size = "md" }: StyleProps = {}) {
  return cn(base, variants[variant], sizes[size]);
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: StyleProps & ComponentPropsWithoutRef<typeof Link>) {
  return <Link className={cn(buttonClasses({ variant, size }), className)} {...props} />;
}

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: StyleProps & ComponentPropsWithoutRef<"button">) {
  return (
    <button type={type} className={cn(buttonClasses({ variant, size }), className)} {...props} />
  );
}
