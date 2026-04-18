"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";

const differentiators = [
  {
    title: "AI-native, not AI-bolted",
    text: "Every workflow — from tenant communications to maintenance scheduling to financial reporting — runs through AI systems built into our core operations. This is not a feature we added; it is how we operate.",
  },
  {
    title: "Institutional grade, local knowledge",
    text: "We deliver the reporting standards and operational discipline of international property firms, but with teams on the ground in Cameroon who understand local market dynamics, regulations, and culture.",
  },
  {
    title: "Bilingual by default",
    text: "Cameroon is bilingual. So are we. Every tenant communication, every owner report, and every legal document works in both English and French — without translation delays.",
  },
  {
    title: "Backed by Njoh Group",
    text: "NPM is not a solo operation. It is the real estate arm of Njoh Group PLC — a pan-African holding company with presence in Cameroon, Brazil, and Spain. Your property is managed by an institution, not a freelancer.",
  },
];

export function NpmDifference() {
  return (
    <section className="bg-ivory py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <FadeIn>
          <MonoLabel className="text-obsidian/50">WHY NPM</MonoLabel>
          <h2 className="mt-4 font-display text-[var(--text-h1)] text-obsidian leading-tight max-w-2xl">
            Not just another property manager.
          </h2>
          <GoldRule width="60px" className="mt-6" />
        </FadeIn>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {differentiators.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex gap-4 sm:gap-6">
                <div className="shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-njoh-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-obsidian leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-obsidian/60 text-sm sm:text-base leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
