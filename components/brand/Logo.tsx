import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  locale?: string;
}

export function Logo({
  variant = "light",
  className = "",
  locale = "en",
}: LogoProps) {
  const href = locale === "en" ? "/" : `/${locale}`;
  const textColor =
    variant === "light" ? "text-ivory" : "text-obsidian";
  const goldColor = "text-njoh-gold";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Njoh Group PLC — Home"
    >
      {/* Logo mark — stylized N with arc motif */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Circle frame */}
          <circle
            cx="20"
            cy="20"
            r="19"
            stroke="currentColor"
            strokeWidth="1"
            className={goldColor}
            opacity="0.3"
          />
          {/* Stylized N */}
          <path
            d="M13 28V12L27 28V12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={goldColor}
          />
          {/* Small arc at top */}
          <path
            d="M10 8 C15 5, 25 5, 30 8"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeLinecap="round"
            className={goldColor}
            opacity="0.6"
          />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-wide ${textColor}`}
        >
          NJOH GROUP
        </span>
        <span
          className={`font-mono text-[0.6rem] tracking-[0.15em] uppercase ${
            variant === "light" ? "text-ash" : "text-stone"
          }`}
        >
          PLC
        </span>
      </div>
    </Link>
  );
}
