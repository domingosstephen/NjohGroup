"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldGlow } from "@/components/ui/GoldGlow";
import { TopographicArc } from "@/components/brand/TopographicArc";

export function NpmTestimonial() {
  return (
    <section className="relative bg-obsidian py-[var(--section-padding-y)] overflow-hidden">
      {/* Decorative arc */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <TopographicArc opacity={0.06} className="w-full" />
      </div>
      <GoldGlow
        size="lg"
        intensity={0.06}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-8 text-center">
        <FadeIn>
          {/* [PLACEHOLDER — replace with real testimonial when available] */}
          <p className="font-display italic text-[clamp(1.25rem,3vw,2rem)] text-ivory leading-snug">
            &ldquo;Property management in Cameroon has operated informally for too
            long. We built NPM to prove that institutional-grade service is not
            only possible here — it is what the market demands.&rdquo;
          </p>
          <div className="mt-8">
            <p className="font-display text-ivory text-base">Njih Njoh Keka</p>
            <p className="text-ash text-sm mt-1">
              Founder & CEO, Njoh Group PLC
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
