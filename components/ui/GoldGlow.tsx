/**
 * Subtle radial gold glow — used behind key focal points like
 * founder portraits, map nodes, and hero accent moments.
 */
interface GoldGlowProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  intensity?: number;
}

const sizes = {
  sm: "w-32 h-32",
  md: "w-64 h-64",
  lg: "w-96 h-96",
};

export function GoldGlow({
  className = "",
  size = "md",
  intensity = 0.15,
}: GoldGlowProps) {
  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${sizes[size]} ${className}`}
      style={{
        background: `radial-gradient(circle, rgba(212,162,76,${intensity}) 0%, transparent 70%)`,
      }}
      aria-hidden="true"
    />
  );
}
