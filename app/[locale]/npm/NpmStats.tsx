"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { MonoLabel } from "@/components/ui/MonoLabel";

const stats = [
  { value: 2021, label: "Operating since", prefix: "", suffix: "" },
  { value: 48, label: "Hour response time", prefix: "<", suffix: "h" },
  { value: 100, label: "Transparent reporting", prefix: "", suffix: "%" },
  { value: 2, label: "Languages (EN & FR)", prefix: "", suffix: "" },
];

export function NpmStats() {
  return (
    <section className="bg-graphite py-12 sm:py-16 border-y border-njoh-gold/10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-display text-[clamp(1.75rem,4vw,3rem)] text-njoh-gold leading-none">
                  <NumberTicker
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    delay={0.3 + i * 0.15}
                  />
                </div>
                <MonoLabel as="p" className="mt-3 text-ash/70">
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
