"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  priority?: boolean;
}

/**
 * Image with subtle parallax scroll effect and optional dark overlay.
 * Used for hero backgrounds and sector band images.
 */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 0.2,
  overlay = true,
  priority = false,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div className="absolute inset-[-20%]" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-obsidian/40" aria-hidden="true" />
      )}
    </div>
  );
}
