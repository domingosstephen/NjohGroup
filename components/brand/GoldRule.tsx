interface GoldRuleProps {
  width?: string;
  className?: string;
}

export function GoldRule({ width = "60px", className = "" }: GoldRuleProps) {
  return (
    <div
      className={`h-px bg-njoh-gold ${className}`}
      style={{ width }}
      aria-hidden="true"
    />
  );
}
