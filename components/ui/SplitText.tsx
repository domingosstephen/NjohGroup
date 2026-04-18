"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  letterDelay?: number;
}

/**
 * Character-by-character reveal for short headline moments.
 * More dramatic than TextReveal — use for 1-3 word hero moments only.
 */
export function SplitText({
  children,
  className = "",
  delay = 0,
  as: Tag = "span",
  letterDelay = 0.02,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const chars = children.split("");

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className} aria-label={children}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 20, filter: "blur(4px)" }
          }
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * letterDelay,
          }}
          aria-hidden="true"
        >
          {char}
        </motion.span>
      ))}
    </Tag>
  );
}
