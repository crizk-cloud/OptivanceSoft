import { cn } from "@/lib/cn";

/**
 * Brand mark: a hexagonal "O" whose upper-right edge is picked out in brand
 * blue, suggesting forward movement. Paths mirror `src/app/icon.svg`.
 */
export function LogoMark({ className, inverse }: { className?: string; inverse?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8 shrink-0", className)}>
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="8"
        fill={inverse ? "#0B2440" : "#071A2F"}
        stroke={inverse ? "rgb(255 255 255 / 0.14)" : "none"}
      />
      <path
        d="M24.2 13.2v7.55L16 25.5l-8.2-4.75v-9.5L16 6.5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 6.5l8.2 4.75" fill="none" stroke="#0878F9" strokeWidth="3" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2.4" fill="#0878F9" />
    </svg>
  );
}

export function Logo({ inverse, className }: { inverse?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark inverse={inverse} />
      <span
        className={cn(
          "text-[1.0625rem] font-semibold tracking-[-0.015em] sm:text-lg",
          inverse ? "text-white" : "text-navy-950",
        )}
      >
        Optivance
        <span className={inverse ? "text-brand-300" : "text-brand-600"}>Soft</span>
      </span>
    </span>
  );
}
