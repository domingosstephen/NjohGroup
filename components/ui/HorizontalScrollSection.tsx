"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Converts vertical scroll into horizontal movement for a
 * premium showcase feel. Used for sector previews or image galleries.
 */
export function HorizontalScrollSection({
  children,
  className = "",
}: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div ref={containerRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div className="flex gap-8 pl-12" style={{ x }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
