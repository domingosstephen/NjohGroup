"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import Link from "next/link";

interface InsightsTeaserProps {
  dict: Record<string, unknown>;
  prefix: string;
}

function hp(dict: Record<string, unknown>, key: string): string {
  const homepage = dict.homepage as Record<string, string>;
  return homepage?.[key] ?? key;
}

// Placeholder articles for launch — State B (coming soon)
const placeholderArticles = [
  {
    category: "AFRICA THESIS",
    title: "Why the next fifty years belong to the continent",
    date: "Forthcoming",
  },
  {
    category: "SECTOR PERSPECTIVES",
    title: "The logistics gap: Africa's most undervalued infrastructure problem",
    date: "Forthcoming",
  },
  {
    category: "INDUSTRIAL STRATEGY",
    title: "Operational integration across emerging markets: lessons from the first three years",
    date: "Forthcoming",
  },
];

export function InsightsTeaser({ dict, prefix }: InsightsTeaserProps) {
  return (
    <section className="relative bg-ivory py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <FadeIn>
          <GoldRule width="60px" className="mb-6" />
          <h2 className="font-display text-[var(--text-h1)] text-obsidian leading-tight">
            {hp(dict, "insightsHeading")}
          </h2>
          <p className="mt-4 max-w-2xl text-obsidian/70 text-[var(--text-body-lg)] leading-relaxed">
            {hp(dict, "insightsSubhead")}
          </p>
        </FadeIn>

        <StaggerContainer className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
          {placeholderArticles.map((article, i) => (
            <StaggerItem key={i}>
              <div className="group relative border border-stone/20 p-4 sm:p-6 lg:p-8 h-full transition-all duration-300 hover:border-njoh-gold/30 bg-ivory">
                <MonoLabel className="text-obsidian/50">{article.category}</MonoLabel>
                <h3 className="mt-4 font-display text-xl text-obsidian leading-snug">
                  {article.title}
                </h3>
                <p className="mt-4 font-mono text-[0.6875rem] text-obsidian/40 uppercase tracking-wider">
                  {article.date}
                </p>
                {/* Gold underline animation on hover */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-njoh-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-12">
          <Link
            href={`${prefix}/insights`}
            className="inline-flex items-center gap-2 text-sm font-medium text-obsidian/70 hover:text-obsidian transition-colors group"
          >
            {hp(dict, "insightsLink")}
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
