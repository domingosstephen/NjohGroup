import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  locale?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { img: 32, text: "text-base", plc: "text-[0.5rem]" },
  md: { img: 40, text: "text-lg", plc: "text-[0.6rem]" },
  lg: { img: 52, text: "text-xl", plc: "text-[0.65rem]" },
};

export function Logo({
  variant = "light",
  className = "",
  locale = "en",
  size = "md",
}: LogoProps) {
  const href = locale === "en" ? "/" : `/${locale}`;
  const textColor =
    variant === "light" ? "text-ivory" : "text-obsidian";
  const s = sizes[size];

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Njoh Group PLC — Home"
    >
      {/* Logo mark — actual brand logo */}
      <div
        className="relative shrink-0 rounded-full overflow-hidden"
        style={{ width: s.img, height: s.img }}
      >
        <Image
          src="/brand/logo.jpg"
          alt="Njoh Group logo"
          width={s.img}
          height={s.img}
          className="object-cover"
          priority
        />
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-display ${s.text} font-semibold tracking-wide ${textColor}`}
        >
          NJOH GROUP
        </span>
        <span
          className={`font-mono ${s.plc} tracking-[0.15em] uppercase ${
            variant === "light" ? "text-ash" : "text-obsidian/50"
          }`}
        >
          PLC
        </span>
      </div>
    </Link>
  );
}
