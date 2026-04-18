"use client";

import { useEffect, useRef } from "react";

interface SpotlightProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Cursor-following radial gradient spotlight.
 * Adds a warm, cinematic depth on dark sections.
 * Extremely subtle — like gallery lighting.
 */
export function Spotlight({
  className = "",
  size = 600,
  color = "rgba(212, 162, 76, 0.04)",
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function handleMouseMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--spotlight-x", `${x}px`);
      el.style.setProperty("--spotlight-y", `${y}px`);
    }

    const parent = el.parentElement;
    if (!parent) return;

    parent.addEventListener("mousemove", handleMouseMove);
    return () => parent.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${className}`}
      style={{
        background: `radial-gradient(${size}px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${color}, transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}
