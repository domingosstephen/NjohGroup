"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
  text: string;
  className?: string;
  speed?: number;
  separator?: string;
}

/**
 * Infinite scrolling text marquee — used as a section divider
 * with a bold statement (e.g., sector names, thesis line).
 * Pure CSS + Framer for the smoothest possible performance.
 */
export function MarqueeText({
  text,
  className = "",
  speed = 20,
  separator = " · ",
}: MarqueeTextProps) {
  // Duplicate the content for seamless loop
  const content = Array(4)
    .fill(`${text}${separator}`)
    .join("");

  return (
    <div
      className={`overflow-hidden whitespace-nowrap py-6 ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="inline-block"
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <span className="font-display text-[clamp(2rem,5vw,4rem)] text-graphite/40 uppercase tracking-wider">
          {content}
          {content}
        </span>
      </motion.div>
    </div>
  );
}
