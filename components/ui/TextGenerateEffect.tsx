"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * TextGenerateEffect — inspired by Aceternity UI.
 * Words fade in one by one with a blur effect.
 * Perfect for mission statements and thesis lines.
 */
export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const wordsArray = words.split(" ");

  return (
    <div ref={ref} className={cn("font-display", className)}>
      <div className="leading-snug tracking-tight">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="inline-block mr-[0.25em]"
            initial={{
              opacity: 0,
              filter: filter ? "blur(10px)" : "none",
            }}
            animate={
              isInView
                ? { opacity: 1, filter: filter ? "blur(0px)" : "none" }
                : {}
            }
            transition={{
              duration: duration,
              ease: [0.16, 1, 0.3, 1],
              delay: idx * 0.06,
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
