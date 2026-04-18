"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  goldWord?: string;
}

/**
 * Premium text reveal — each word fades up with staggered timing.
 * Optionally highlights a word in Njoh Gold.
 */
export function TextReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "h1",
  goldWord,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = children.split(" ");

  return (
    <Tag ref={ref as React.Ref<HTMLHeadingElement>} className={`${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className={`inline-block ${
              goldWord && word.replace(/[.,!?;:]/g, "").toLowerCase() === goldWord.toLowerCase()
                ? "text-njoh-gold"
                : ""
            }`}
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.04,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
