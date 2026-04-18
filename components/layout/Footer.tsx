import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { TopographicArc } from "@/components/brand/TopographicArc";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { OFFICES, EMAILS, SOCIAL, type Locale } from "@/lib/constants";
import { t } from "@/lib/i18n";

interface FooterProps {
  locale: Locale;
  dict: Record<string, unknown>;
}

export function Footer({ locale, dict }: FooterProps) {
  const prefix = locale === "en" ? "" : `/${locale}`;

  const sectorLinks = [
    { label: "Real Estate", href: `${prefix}/sectors/real-estate` },
    { label: "Outsourcing", href: `${prefix}/sectors/outsourcing` },
    { label: "Agriculture", href: `${prefix}/sectors/agriculture` },
    { label: "Logistics", href: `${prefix}/sectors/logistics` },
    { label: "Emerging Focus", href: `${prefix}/sectors/emerging` },
  ];

  const companyLinks = [
    { label: t(dict, "nav.vision"), href: `${prefix}/vision` },
    { label: t(dict, "nav.group"), href: `${prefix}/group` },
    { label: t(dict, "nav.leadership"), href: `${prefix}/leadership` },
    { label: t(dict, "nav.insights"), href: `${prefix}/insights` },
    { label: t(dict, "nav.careers"), href: `${prefix}/careers` },
    { label: "Press & media", href: `${prefix}/press` },
    { label: t(dict, "nav.partnerCta"), href: `${prefix}/partners` },
  ];

  return (
    <footer className="relative bg-obsidian border-t border-graphite/30" role="contentinfo">
      {/* Topographic arc border */}
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2">
        <TopographicArc opacity={0.15} color="var(--color-njoh-gold)" strokeWidth={0.5} />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-20 pb-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Logo locale={locale} />
            <p className="mt-4 text-sm text-ash leading-relaxed max-w-xs">
              {t(dict, "footer.tagline")}
            </p>
            <div className="mt-6 space-y-1">
              {OFFICES.map((office) => (
                <p key={office.city} className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-stone/60">
                  {office.city}, {office.country}
                </p>
              ))}
            </div>
            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ash hover:text-njoh-gold transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Sectors */}
          <div>
            <MonoLabel as="p" className="text-stone mb-6">
              {t(dict, "nav.sectors")}
            </MonoLabel>
            <ul className="space-y-3">
              {sectorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ash hover:text-ivory transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <MonoLabel as="p" className="text-stone mb-6">
              Group
            </MonoLabel>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ash hover:text-ivory transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <MonoLabel as="p" className="text-stone mb-6">
              Correspondence
            </MonoLabel>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${EMAILS.general}`}
                  className="text-sm text-ash hover:text-ivory transition-colors duration-200"
                >
                  {EMAILS.general}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ash hover:text-ivory transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px bg-graphite/50" />

        {/* Bottom bar */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ash/60">
            {t(dict, "footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={`${prefix}/legal/privacy`}
              className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ash/60 hover:text-ivory transition-colors"
            >
              {t(dict, "footer.privacy")}
            </Link>
            <Link
              href={`${prefix}/legal/terms`}
              className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ash/60 hover:text-ivory transition-colors"
            >
              {t(dict, "footer.terms")}
            </Link>
            <Link
              href={`${prefix}/legal/cookies`}
              className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ash/60 hover:text-ivory transition-colors"
            >
              {t(dict, "footer.cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
