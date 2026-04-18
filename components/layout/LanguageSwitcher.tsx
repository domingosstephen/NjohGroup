"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LOCALES, DEFAULT_LOCALE, type Locale } from "@/lib/constants";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({
  currentLocale,
  className = "",
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  function getLocalizedPath(locale: Locale) {
    // Remove current locale prefix if any
    let path = pathname;
    for (const loc of LOCALES) {
      if (path.startsWith(`/${loc}/`) || path === `/${loc}`) {
        path = path.slice(loc.length + 1) || "/";
        break;
      }
    }
    // Add new locale prefix (default locale uses root)
    if (locale === DEFAULT_LOCALE) return path;
    return `/${locale}${path === "/" ? "" : path}`;
  }

  return (
    <div className={`flex items-center gap-1 ${className}`} role="navigation" aria-label="Language">
      {LOCALES.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && (
            <span className="text-graphite mx-1 select-none" aria-hidden="true">
              |
            </span>
          )}
          <Link
            href={getLocalizedPath(locale)}
            className={`font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
              locale === currentLocale
                ? "text-njoh-gold"
                : "text-ash hover:text-ivory"
            }`}
            aria-current={locale === currentLocale ? "true" : undefined}
            aria-label={
              locale === "en"
                ? "English"
                : locale === "fr"
                  ? "Français"
                  : "Português"
            }
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
