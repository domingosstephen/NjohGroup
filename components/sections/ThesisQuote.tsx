"use client";

import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

interface ThesisQuoteProps {
  dict: Record<string, unknown>;
  prefix: string;
}

function hp(dict: Record<string, unknown>, key: string): string {
  const homepage = dict.homepage as Record<string, string>;
  return homepage?.[key] ?? key;
}

export function ThesisQuote({ dict, prefix }: ThesisQuoteProps) {
  return (
    <section className="relative bg-ivory py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <blockquote>
          <TextGenerateEffect
            words={`"${hp(dict, "thesisQuote")}"`}
            className="text-obsidian italic text-[clamp(1.5rem,4vw,3.5rem)]"
            duration={0.6}
          />
        </blockquote>
        <FadeIn delay={1.5}>
          <p className="mt-6 text-stone italic text-sm">
            {hp(dict, "thesisAttribution")}
          </p>
        </FadeIn>
        <FadeIn delay={1.8}>
          <Link
            href={`${prefix}/vision`}
            className="mt-8 inline-flex items-center gap-2 font-body text-sm font-medium text-obsidian/70 hover:text-obsidian transition-colors group"
          >
            {hp(dict, "thesisLink")}
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
