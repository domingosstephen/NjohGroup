"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";

const steps = [
  {
    number: "01",
    title: "Property Assessment",
    description:
      "We visit your property, assess its condition, review current tenancy, and identify immediate opportunities to improve revenue and reduce costs.",
    duration: "1–2 days",
  },
  {
    number: "02",
    title: "Onboarding & Setup",
    description:
      "We set up your property in our management system, transition tenant relationships, establish maintenance protocols, and configure reporting.",
    duration: "1 week",
  },
  {
    number: "03",
    title: "Active Management",
    description:
      "Rent collection, tenant communications, maintenance, and reporting begin immediately. You receive your first monthly report within 30 days.",
    duration: "Ongoing",
  },
  {
    number: "04",
    title: "Optimisation",
    description:
      "Over time, we identify capital improvements, adjust pricing, and implement strategies that increase your property's value and income.",
    duration: "Continuous",
  },
];

export function NpmProcess() {
  return (
    <section className="bg-obsidian py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <FadeIn>
          <MonoLabel className="text-njoh-gold">HOW IT WORKS</MonoLabel>
          <h2 className="mt-4 font-display text-[var(--text-h1)] text-ivory leading-tight max-w-2xl">
            From handshake to first report in 30 days.
          </h2>
          <GoldRule width="60px" className="mt-6" />
        </FadeIn>

        <div className="mt-10 sm:mt-16 space-y-0">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="group relative flex gap-4 sm:gap-8 lg:gap-12 py-6 sm:py-8 border-b border-graphite/40 last:border-b-0">
                {/* Step number */}
                <div className="shrink-0 w-12 sm:w-16">
                  <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] text-njoh-gold/30 group-hover:text-njoh-gold/60 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="font-display text-lg sm:text-xl text-ivory leading-snug">
                      {step.title}
                    </h3>
                    <MonoLabel className="text-njoh-gold/60 shrink-0">
                      {step.duration}
                    </MonoLabel>
                  </div>
                  <p className="mt-3 text-ash text-sm sm:text-base leading-relaxed max-w-2xl">
                    {step.description}
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
