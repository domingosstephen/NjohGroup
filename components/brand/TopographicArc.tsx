"use client";

import { motion } from "framer-motion";

interface TopographicArcProps {
  className?: string;
  opacity?: number;
  color?: string;
  animate?: boolean;
  width?: string | number;
  strokeWidth?: number;
}

export function TopographicArc({
  className = "",
  opacity = 0.1,
  color = "var(--color-njoh-gold)",
  animate = false,
  width = "100%",
  strokeWidth = 1,
}: TopographicArcProps) {
  const pathData =
    "M0,80 C120,20 240,100 360,60 C480,20 600,90 720,50 C840,10 960,70 1080,40 C1200,10 1320,60 1440,30";

  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width, opacity }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Primary arc */}
      <motion.path
        d={pathData}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={animate ? { pathLength: 0, opacity: 0 } : undefined}
        animate={animate ? { pathLength: 1, opacity: 1 } : undefined}
        transition={
          animate
            ? {
                pathLength: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.3 },
              }
            : undefined
        }
      />
      {/* Secondary arc — offset for depth */}
      <motion.path
        d="M0,95 C160,45 280,110 420,75 C560,40 680,100 800,65 C920,30 1060,80 1200,55 C1340,30 1400,50 1440,45"
        stroke={color}
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
        fill="none"
        style={{ opacity: 0.4 }}
        initial={animate ? { pathLength: 0, opacity: 0 } : undefined}
        animate={animate ? { pathLength: 1, opacity: 0.4 } : undefined}
        transition={
          animate
            ? {
                pathLength: {
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                },
                opacity: { duration: 0.3, delay: 0.2 },
              }
            : undefined
        }
      />
      {/* Tertiary arc — most subtle */}
      <motion.path
        d="M0,55 C200,15 340,80 520,45 C700,10 820,70 960,35 C1100,0 1260,50 1440,20"
        stroke={color}
        strokeWidth={strokeWidth * 0.3}
        strokeLinecap="round"
        fill="none"
        style={{ opacity: 0.2 }}
        initial={animate ? { pathLength: 0, opacity: 0 } : undefined}
        animate={animate ? { pathLength: 1, opacity: 0.2 } : undefined}
        transition={
          animate
            ? {
                pathLength: {
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                },
                opacity: { duration: 0.3, delay: 0.4 },
              }
            : undefined
        }
      />
    </svg>
  );
}
