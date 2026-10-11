import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import logoCompact from "../../../public/brand/optivancesoft-logo-compact.svg";
import logoCompactReversed from "../../../public/brand/optivancesoft-logo-compact-reversed.svg";

/**
 * Official OptivanceSoft logo (vector artwork in docs/brand/vector).
 * Uses the mark + wordmark lockup without the slogan line, which is too small
 * to read at header size; when `tagline` is set the slogan is rendered as text,
 * aligned under the wordmark as in the full lockup.
 */
export function Logo({
  inverse,
  tagline,
  priority,
  className,
}: {
  /** Reversed (light text) artwork for dark backgrounds. */
  inverse?: boolean;
  /** Show "Software that brings out your best." under the wordmark. */
  tagline?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex flex-col", className)}>
      <Image
        src={inverse ? logoCompactReversed : logoCompact}
        alt={site.name}
        loading={priority ? "eager" : undefined}
        unoptimized
        className={cn("w-auto self-start select-none", tagline ? "h-11" : "h-9 sm:h-10")}
      />
      {tagline && (
        <span
          className={cn(
            // The wordmark starts 21.3% into the lockup (47px at h-11); align the slogan with it.
            "-mt-1 pl-[2.95rem] text-[0.5rem] sm:text-[0.5625rem] leading-none font-medium tracking-[0.24em] whitespace-nowrap uppercase",
            inverse ? "text-[#C9D6E8]" : "text-[#4A5B72]",
          )}
        >
          {site.tagline}
        </span>
      )}
    </span>
  );
}
