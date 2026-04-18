"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { OFFICES } from "@/lib/constants";

interface FootprintMapProps {
  dict: Record<string, unknown>;
}

function hp(dict: Record<string, unknown>, key: string): string {
  const homepage = dict.homepage as Record<string, string>;
  return homepage?.[key] ?? key;
}

// Map node positions (percentage-based on the SVG viewbox)
const nodePositions = [
  { x: 540, y: 290, office: OFFICES[0] }, // Yaoundé
  { x: 360, y: 410, office: OFFICES[1] }, // São Paulo
  { x: 490, y: 230, office: OFFICES[2] }, // Madrid
];

export function FootprintMap({ dict }: FootprintMapProps) {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="relative bg-obsidian py-[var(--section-padding-y)] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <FadeIn className="text-center mb-16">
          <GoldRule width="60px" className="mx-auto mb-6" />
          <h2 className="font-display text-[var(--text-h1)] text-ivory leading-tight">
            {hp(dict, "footprintHeading")}
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="relative mx-auto max-w-4xl">
            <svg
              viewBox="0 0 900 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              role="img"
              aria-label="Njoh Group global presence map showing Yaoundé, São Paulo, and Madrid"
            >
              {/* Simplified world map outline — topographic line style */}
              {/* Africa */}
              <path
                d="M480,220 C490,200 520,190 540,195 C560,200 570,210 575,230 C580,250 578,280 570,300 C565,315 555,330 540,340 C530,345 515,340 508,330 C500,315 495,295 490,275 C485,255 478,240 480,220Z"
                stroke="var(--color-ash)"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              {/* Europe */}
              <path
                d="M460,180 C470,170 485,165 500,168 C515,170 525,180 530,190 C520,185 510,182 495,185 C480,188 468,185 460,180Z"
                stroke="var(--color-ash)"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              {/* South America */}
              <path
                d="M320,300 C330,280 345,270 355,275 C365,280 375,300 378,320 C380,340 375,360 365,380 C358,395 345,410 335,420 C325,425 320,415 318,400 C315,380 310,350 312,330 C314,315 316,308 320,300Z"
                stroke="var(--color-ash)"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              {/* North America */}
              <path
                d="M200,160 C230,140 270,130 310,140 C340,148 355,165 350,185 C345,200 330,210 310,215 C290,218 265,215 245,210 C225,205 210,195 200,180 C195,172 196,166 200,160Z"
                stroke="var(--color-ash)"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              {/* Asia */}
              <path
                d="M580,170 C610,155 650,150 690,158 C720,165 745,180 760,200 C770,215 765,230 750,240 C730,250 700,248 675,240 C650,232 630,220 615,205 C600,190 588,178 580,170Z"
                stroke="var(--color-ash)"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />

              {/* Connecting lines between nodes */}
              {/* Yaoundé to São Paulo */}
              <motion.line
                x1={nodePositions[0].x}
                y1={nodePositions[0].y}
                x2={nodePositions[1].x}
                y2={nodePositions[1].y}
                stroke="var(--color-njoh-gold)"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              {/* Yaoundé to Madrid */}
              <motion.line
                x1={nodePositions[0].x}
                y1={nodePositions[0].y}
                x2={nodePositions[2].x}
                y2={nodePositions[2].y}
                stroke="var(--color-njoh-gold)"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              {/* São Paulo to Madrid */}
              <motion.line
                x1={nodePositions[1].x}
                y1={nodePositions[1].y}
                x2={nodePositions[2].x}
                y2={nodePositions[2].y}
                stroke="var(--color-njoh-gold)"
                strokeWidth="0.8"
                strokeDasharray="4 4"
                opacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
              />

              {/* Nodes */}
              {nodePositions.map((node, i) => (
                <g key={i}>
                  {/* Pulse ring */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="12"
                    fill="none"
                    stroke="var(--color-njoh-gold)"
                    strokeWidth="0.5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 2] }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                  {/* Gold dot */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    fill="var(--color-njoh-gold)"
                    className="cursor-pointer"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                    whileHover={{ scale: 1.5 }}
                    onMouseEnter={() => setActiveNode(i)}
                    onMouseLeave={() => setActiveNode(null)}
                  />
                  {/* Glow */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="8"
                    fill="var(--color-njoh-gold)"
                    opacity="0.15"
                    className="pointer-events-none"
                  />
                </g>
              ))}
            </svg>

            {/* Hover cards */}
            <AnimatePresence>
              {activeNode !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bg-graphite border border-njoh-gold/20 px-4 py-3 pointer-events-none"
                  style={{
                    left: `${(nodePositions[activeNode].x / 900) * 100}%`,
                    top: `${(nodePositions[activeNode].y / 500) * 100 - 15}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <MonoLabel className="text-njoh-gold text-[0.6rem]">
                    {nodePositions[activeNode].office.label}
                  </MonoLabel>
                  <p className="text-ivory text-sm font-display mt-1">
                    {nodePositions[activeNode].office.city},{" "}
                    {nodePositions[activeNode].office.country}
                  </p>
                  <p className="text-ash text-xs mt-1">
                    {nodePositions[activeNode].office.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
