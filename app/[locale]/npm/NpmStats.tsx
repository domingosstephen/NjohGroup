"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function NpmStats() {
  return (
    <section className="bg-graphite py-12 sm:py-16 border-y border-njoh-gold/10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {[
            { value: "2021", label: "Operating since" },
            { value: "Fixed", label: "Commission model" },
            { value: "Monthly", label: "Income transfers" },
            { value: "EN / FR", label: "Bilingual service" },
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] text-njoh-gold leading-none">
                  {stat.value}
                </p>
                <MonoLabel as="p" className="mt-3 text-ash/60">
                  {stat.label}
                </MonoLabel>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
