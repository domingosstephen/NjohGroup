"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";

export function SystemDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Circle positions
  const circles = [
    { cx: 300, cy: 120, label: "REAL ESTATE" },
    { cx: 500, cy: 120, label: "LOGISTICS" },
    { cx: 300, cy: 300, label: "AGRICULTURE" },
    { cx: 500, cy: 300, label: "OUTSOURCING" },
  ];

  // Connecting lines
  const lines = [
    { x1: 340, y1: 120, x2: 460, y2: 120, delay: 0 },     // RE ↔ Logistics
    { x1: 300, y1: 160, x2: 300, y2: 260, delay: 0.15 },   // RE ↔ Agriculture
    { x1: 500, y1: 160, x2: 500, y2: 260, delay: 0.3 },    // Logistics ↔ Outsourcing
    { x1: 340, y1: 300, x2: 460, y2: 300, delay: 0.45 },   // Agriculture ↔ Outsourcing
    { x1: 340, y1: 140, x2: 460, y2: 280, delay: 0.6 },    // RE ↔ Outsourcing (diagonal)
    { x1: 340, y1: 280, x2: 460, y2: 140, delay: 0.75 },   // Agriculture ↔ Logistics (diagonal)
  ];

  return (
    <section className="bg-obsidian py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <FadeIn className="text-center mb-16">
          <GoldRule width="60px" className="mx-auto mb-6" />
          <h2 className="font-display text-[var(--text-h1)] text-ivory leading-tight">
            How they reinforce each other.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-ash text-[var(--text-body)] leading-relaxed">
            Every sector in the Group exists in relation to the others. Our real estate assets
            house our logistics operations. Our logistics network moves our agricultural output.
            Our outsourcing and technology arm provides the operating intelligence across all three.
          </p>
        </FadeIn>

        <div ref={ref} className="relative mx-auto max-w-2xl">
          <svg
            viewBox="0 0 800 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            role="img"
            aria-label="Diagram showing how Njoh Group's four sectors reinforce each other"
          >
            {/* Connecting lines */}
            {lines.map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="var(--color-njoh-gold)"
                strokeWidth="1"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{
                  duration: 0.8,
                  delay: line.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}

            {/* Sector circles */}
            {circles.map((circle, i) => (
              <g key={i}>
                <motion.circle
                  cx={circle.cx}
                  cy={circle.cy}
                  r="40"
                  fill="none"
                  stroke="var(--color-njoh-gold)"
                  strokeWidth="1"
                  opacity="0.2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
                <motion.circle
                  cx={circle.cx}
                  cy={circle.cy}
                  r="4"
                  fill="var(--color-njoh-gold)"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + i * 0.1,
                  }}
                />
                <motion.text
                  x={circle.cx}
                  y={circle.cy + 60}
                  textAnchor="middle"
                  fill="var(--color-stone)"
                  fontSize="10"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.1em"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  {circle.label}
                </motion.text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
