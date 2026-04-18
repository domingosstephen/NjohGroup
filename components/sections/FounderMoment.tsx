"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { PullQuote } from "@/components/ui/PullQuote";
import { GoldGlow } from "@/components/ui/GoldGlow";
import { TopographicArc } from "@/components/brand/TopographicArc";
import Link from "next/link";

interface FounderMomentProps {
  dict: Record<string, unknown>;
  prefix: string;
}

function hp(dict: Record<string, unknown>, key: string): string {
  const homepage = dict.homepage as Record<string, string>;
  return homepage?.[key] ?? key;
}

export function FounderMoment({ dict, prefix }: FounderMomentProps) {
  return (
    <section className="relative bg-ivory py-[var(--section-padding-y)] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left — Portrait */}
          <FadeIn direction="left">
            <div className="relative flex justify-center">
              {/* Arc behind portrait */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <TopographicArc
                  opacity={0.12}
                  color="var(--color-njoh-gold)"
                  className="w-[140%] -translate-y-4"
                />
              </div>
              {/* Gold glow */}
              <GoldGlow
                size="lg"
                intensity={0.1}
                className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              {/* Portrait circle */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border border-njoh-gold/20">
                {/* PLACEHOLDER — replace with Njoh Group commissioned photography */}
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale-[30%] sepia-[10%]"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80')",
                  }}
                />
              </div>
            </div>
          </FadeIn>

          {/* Right — Content */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <MonoLabel className="text-obsidian/50">{hp(dict, "founderLabel")}</MonoLabel>

              <div className="mt-6">
                <PullQuote size="md" className="[&_p]:text-obsidian [&_*]:text-obsidian">
                  {hp(dict, "founderQuote")}
                </PullQuote>
              </div>

              <p className="mt-8 text-base text-obsidian/70 leading-relaxed">
                {hp(dict, "founderBio")}
              </p>

              <Link
                href={`${prefix}/leadership/njih-njoh-keka`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-obsidian/70 hover:text-obsidian transition-colors group"
              >
                {hp(dict, "founderLink")}
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
