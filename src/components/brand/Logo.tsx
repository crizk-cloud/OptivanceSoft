import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import markSrc from "../../../public/brand/optivancesoft-mark.png";

/**
 * Official OptivanceSoft mark (hexagonal ribbon "O"), taken from the supplied
 * logo artwork in docs/brand. Decorative where it sits next to the wordmark.
 */
export function LogoMark({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={markSrc}
      alt=""
      aria-hidden="true"
      sizes="48px"
      priority={priority}
      className={cn("size-9 shrink-0 select-none", className)}
    />
  );
}

/**
 * Logo lockup: mark + uppercase wordmark ("OPTIVANCE" + "SOFT"), optionally
 * with the slogan underneath, matching the supplied brand artwork.
 */
export function Logo({
  inverse,
  tagline,
  priority,
  className,
}: {
  /** Light text for dark backgrounds. */
  inverse?: boolean;
  /** Show "Software that brings out your best." under the wordmark. */
  tagline?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark priority={priority} className={tagline ? "size-11" : undefined} />
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-[1.0625rem] leading-none font-extrabold tracking-[-0.01em] uppercase sm:text-[1.1875rem]",
            inverse ? "text-white" : "text-navy-950",
          )}
        >
          Optivance
          <span className={inverse ? "text-[#3B8EFF]" : "text-brand-500"}>Soft</span>
        </span>
        {tagline && (
          <span
            className={cn(
              "mt-1.5 text-[0.5rem] leading-none font-medium tracking-[0.26em] whitespace-nowrap uppercase sm:text-[0.5625rem]",
              inverse ? "text-muted-dark" : "text-muted",
            )}
          >
            {site.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
