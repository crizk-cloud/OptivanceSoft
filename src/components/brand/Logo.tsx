import { cn } from "@/lib/cn";

/** Brand mark: a hexagonal "O" with a rising blue facet. */
export function LogoMark({ className, inverse }: { className?: string; inverse?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8 shrink-0", className)}>
      <rect
        width="32"
        height="32"
        rx="8"
        fill={inverse ? "#0B2440" : "#071A2F"}
        stroke={inverse ? "rgb(255 255 255 / 0.14)" : "none"}
      />
      <path
        d="M16 6.5 24.2 11.25v9.5L16 25.5l-8.2-4.75v-9.5Z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M12.4 19.6 19.6 12.4v7.2Z" fill="#0878F9" />
    </svg>
  );
}

export function Logo({ inverse, className }: { inverse?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark inverse={inverse} />
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
