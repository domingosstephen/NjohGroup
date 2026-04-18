"use client";

import { motion } from "framer-motion";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { GoldRule } from "@/components/brand/GoldRule";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  meta?: string;
  height?: "full" | "70vh" | "60vh" | "50vh" | "40vh";
  className?: string;
  children?: React.ReactNode;
}

const heightMap = {
  full: "min-h-screen",
  "70vh": "min-h-[70vh]",
  "60vh": "min-h-[60vh]",
  "50vh": "min-h-[50vh]",
  "40vh": "min-h-[40vh]",
};

export function PageHero({
  label,
  title,
  subtitle,
  meta,
  height = "60vh",
  className = "",
  children,
}: PageHeroProps) {
  return (
    <section
      className={`relative ${heightMap[height]} flex items-end bg-obsidian overflow-hidden ${className}`}
    >
      {/* Subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian to-graphite/30" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 pb-16 pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <MonoLabel className="text-ash">{label}</MonoLabel>
        </motion.div>

        <motion.h1
          className="mt-6 font-display text-[var(--text-display)] lg:text-[var(--text-hero)] text-ivory leading-tight max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-6 font-display italic text-[var(--text-h2)] text-ash leading-snug max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="origin-left mt-8"
        >
          <GoldRule width="60px" />
        </motion.div>

        {meta && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-6"
          >
            <MonoLabel className="text-ash/60">{meta}</MonoLabel>
          </motion.div>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="mt-4"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
