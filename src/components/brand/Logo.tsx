import { cn } from "@/lib/cn";

/** Brand mark: a rounded tile with an open ring and a rising accent. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8 shrink-0", className)}>
      <rect width="32" height="32" rx="8" fill="#071A2F" />
      <path
        d="M22.5 11.2A8 8 0 1 0 24 16"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="23.2" cy="9.6" r="2.6" fill="#0878F9" />
    </svg>
  );
}

export function Logo({ inverse, className }: { inverse?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={inverse ? "rounded-lg ring-1 ring-white/15" : undefined} />
      <span
        className={cn(
          "text-lg font-semibold tracking-tight",
          inverse ? "text-white" : "text-navy-950",
        )}
      >
        Optivance
        <span className={inverse ? "text-brand-300" : "text-brand-600"}>Soft</span>
      </span>
    </span>
  );
}
