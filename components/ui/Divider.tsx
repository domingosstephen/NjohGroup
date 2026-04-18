"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface DividerProps {
  className?: string;
  color?: "gold" | "graphite" | "stone";
  animated?: boolean;
}

const colorMap = {
  gold: "bg-njoh-gold/40",
  graphite: "bg-graphite",
  stone: "bg-stone/30",
};

/**
 * Animated horizontal line divider.
 * Draws from center on scroll entry.
 */
export function Divider({
  className = "",
  color = "graphite",
  animated = true,
}: DividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  if (!animated) {
    return <div className={`h-px ${colorMap[color]} ${className}`} aria-hidden="true" />;
  }

  return (
    <motion.div
      ref={ref}
      className={`h-px ${colorMap[color]} ${className}`}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
    />
  );
}
