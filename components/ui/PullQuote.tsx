import { GoldRule } from "@/components/brand/GoldRule";

interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
  size?: "md" | "lg";
}

export function PullQuote({
  children,
  attribution,
  className = "",
  size = "lg",
}: PullQuoteProps) {
  return (
    <blockquote className={`relative ${className}`}>
      <GoldRule width="40px" className="mb-6" />
      <p
        className={`font-display italic text-ivory leading-snug ${
          size === "lg" ? "text-[clamp(1.5rem,2.5vw,2rem)]" : "text-xl"
        }`}
      >
        &ldquo;{children}&rdquo;
      </p>
      {attribution && (
        <footer className="mt-4 font-body text-sm text-ash italic">
          {attribution}
        </footer>
      )}
    </blockquote>
  );
}
