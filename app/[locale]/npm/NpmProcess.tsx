"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";

const steps = [
  {
    number: "01",
    title: "Register your property",
    description:
      "Fill out the form below or contact us directly. We review your property details and schedule an assessment visit.",
  },
  {
    number: "02",
    title: "We assess and onboard",
    description:
      "Our team inspects the property, reviews existing tenancies, and prepares the management agreement. We agree the commission rate and terms.",
  },
  {
    number: "03",
    title: "Management begins",
    description:
      "We take over tenant relations, rent collection, compliance enforcement, and maintenance. You receive your first report within 30 days.",
  },
  {
    number: "04",
    title: "You receive income monthly",
    description:
      "Rent is collected, our commission is deducted, and the balance is transferred to you on a fixed date each month. Full financial reporting included.",
  },
];

export function NpmProcess() {
  return (
    <section id="how-it-works" className="bg-ivory py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <FadeIn>
          <MonoLabel className="text-obsidian/40">HOW IT WORKS</MonoLabel>
          <h2 className="mt-4 font-display text-[var(--text-h1)] text-obsidian leading-tight max-w-2xl">
            Four steps from registration to rental income.
          </h2>
          <GoldRule width="60px" className="mt-6" />
        </FadeIn>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12}>
              <div className="relative">
                {/* Connector line — visible on lg only */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-njoh-gold/20 -translate-x-3" />
                )}
                <span className="font-display text-[2.5rem] text-njoh-gold/15 leading-none">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-lg text-obsidian leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-obsidian/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
