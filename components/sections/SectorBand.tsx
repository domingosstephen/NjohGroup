"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { GoldRule } from "@/components/brand/GoldRule";
import Link from "next/link";

interface SectorBandProps {
  number: string;
  name: string;
  tagline: string;
  thesis: string;
  status: string;
  href: string;
  image: string;
  imagePosition: "left" | "right";
  background: "ivory" | "obsidian";
  enterLabel?: string;
}

export function SectorBand({
  number,
  name,
  tagline,
  thesis,
  status,
  href,
  image,
  imagePosition,
  background,
  enterLabel = "Enter the sector",
}: SectorBandProps) {
  const isDark = background === "obsidian";
  const textColor = isDark ? "text-ivory" : "text-obsidian";
  const subtextColor = isDark ? "text-ash" : "text-stone";
  const bgColor = isDark ? "bg-obsidian" : "bg-ivory";

  return (
    <section className={`relative ${bgColor} min-h-[60vh] flex items-center`}>
      <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-0">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
            imagePosition === "right" ? "" : "lg:[direction:rtl]"
          }`}
        >
          {/* Content */}
          <div className={`flex items-center py-16 lg:py-24 px-6 lg:px-16 ${imagePosition === "right" ? "" : "lg:[direction:ltr]"}`}>
            <FadeIn direction={imagePosition === "left" ? "right" : "left"}>
              <div className="max-w-lg">
                <MonoLabel className={isDark ? "text-njoh-gold" : "text-stone"}>
                  {number} — {name.toUpperCase()}
                </MonoLabel>
                <h2 className={`mt-4 font-display text-[var(--text-h1)] leading-tight ${textColor}`}>
                  {name}
                </h2>
                <p className={`mt-2 font-display italic text-lg ${subtextColor}`}>
                  &ldquo;{tagline}&rdquo;
                </p>
                <GoldRule width="40px" className="my-6" />
                <p className={`text-base leading-relaxed ${subtextColor}`}>{thesis}</p>
                <MonoLabel
                  as="p"
                  className={`mt-6 ${isDark ? "text-ash/60" : "text-stone/60"}`}
                >
                  STATUS: {status}
                </MonoLabel>
                <Link
                  href={href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-njoh-gold hover:text-gold-light transition-colors group"
                >
                  {enterLabel}
                  <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <div className={`relative min-h-[300px] lg:min-h-0 ${imagePosition === "right" ? "" : "lg:[direction:ltr]"}`}>
            {/* PLACEHOLDER — replace with Njoh Group commissioned photography */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
            <div
              className={`absolute inset-0 ${
                isDark ? "bg-obsidian/20" : "bg-ivory/10"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
