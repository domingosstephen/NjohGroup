"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { TopographicArc } from "@/components/brand/TopographicArc";
import type { Locale } from "@/lib/constants";

interface NavigationProps {
  locale: Locale;
  dict: Record<string, unknown>;
  isHomepage?: boolean;
}

function getNavString(dict: Record<string, unknown>, key: string): string {
  const nav = dict.nav as Record<string, string> | undefined;
  return nav?.[key] ?? key;
}

export function Navigation({ locale, dict, isHomepage = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const prefix = locale === "en" ? "" : `/${locale}`;
  const links = [
    { label: getNavString(dict, "vision"), href: `${prefix}/vision` },
    { label: getNavString(dict, "sectors"), href: `${prefix}/sectors` },
    { label: getNavString(dict, "leadership"), href: `${prefix}/leadership` },
    { label: getNavString(dict, "group"), href: `${prefix}/group` },
    { label: getNavString(dict, "insights"), href: `${prefix}/insights` },
    { label: getNavString(dict, "careers"), href: `${prefix}/careers` },
    { label: getNavString(dict, "contact"), href: `${prefix}/contact` },
  ];

  const showSolid = !isHomepage || scrolled;

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-njoh-gold focus:text-obsidian focus:px-4 focus:py-2 focus:font-mono focus:text-sm"
      >
        Skip to main content
      </a>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          showSolid
            ? "bg-obsidian/95 backdrop-blur-md border-b border-graphite/50"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-12 py-4"
          aria-label="Main navigation"
        >
          <Logo locale={locale} />

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-body text-sm text-stone hover:text-ivory transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-njoh-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher currentLocale={locale} />
            <Button
              variant="secondary"
              size="sm"
              href={`${prefix}/partners`}
            >
              {getNavString(dict, "partnerCta")} <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden relative w-12 h-12 flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <motion.span
                className="block h-px bg-ivory origin-center"
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 3.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px bg-ivory"
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px bg-ivory origin-center"
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -3.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-obsidian flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Topographic arc as subtle bg */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
              <TopographicArc opacity={0.06} className="w-[200%] -translate-y-1/4" />
            </div>

            <div className="relative flex-1 flex flex-col justify-center items-center gap-8 pt-20 pb-12">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-xl sm:text-2xl text-ivory hover:text-njoh-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Button
                  variant="secondary"
                  size="md"
                  href={`${prefix}/partners`}
                  onClick={() => setMobileOpen(false)}
                >
                  {getNavString(dict, "partnerCta")} &rarr;
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <LanguageSwitcher currentLocale={locale} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
