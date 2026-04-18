"use client";

import { cn } from "@/lib/utils";

/**
 * TextShimmer — inspired by motion-primitives.
 * A sweeping shimmer/highlight effect across text.
 * Used sparingly on the company name or key headings.
 */
export function TextShimmer({
  children,
  className,
  duration = 3,
}: {
  children: string;
  className?: string;
  duration?: number;
}) {
  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent",
        "bg-[length:200%_100%] animate-shimmer",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(
          110deg,
          var(--color-njoh-gold) 35%,
          var(--color-gold-light) 50%,
          var(--color-njoh-gold) 65%
        )`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </span>
  );
}
