"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function NpmDifference() {
  return (
    <section className="bg-obsidian py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <FadeIn>
          <MonoLabel className="text-njoh-gold">THE MODEL</MonoLabel>
          <h2 className="mt-4 font-display text-[var(--text-h1)] text-ivory leading-tight max-w-2xl">
            A fixed commission. Full transparency. No hidden costs.
          </h2>
          <GoldRule width="60px" className="mt-6" />
        </FadeIn>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          {/* Left — the model */}
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div>
                <p className="text-ash text-[var(--text-body-lg)] leading-relaxed">
                  We charge a fixed percentage commission on rent collected. That is the only
                  fee you pay. There are no onboarding charges, no hidden management fees,
                  and no surprise deductions.
                </p>
              </div>
              <div>
                <p className="text-ash leading-relaxed">
                  If we do not collect rent, you do not pay commission. Our incentives are
                  aligned with yours: we succeed when your property performs.
                </p>
              </div>
              <div className="pt-6 border-t border-graphite/40">
                <p className="text-ivory font-display text-lg">
                  Commission is agreed during onboarding and fixed for the duration of
                  the management agreement. No renegotiation. No escalation clauses.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — what you get */}
          <FadeIn delay={0.2}>
            <div className="border border-graphite/40 p-6 sm:p-8 lg:p-10">
              <MonoLabel className="text-njoh-gold/60">INCLUDED IN YOUR COMMISSION</MonoLabel>
              <div className="mt-6 space-y-5">
                {[
                  "On-time rent collection and transfer to your account",
                  "Tenant vetting, placement, and lease execution",
                  "Enforcement of lease terms and house rules",
                  "Regular property inspections and maintenance coordination",
                  "Monthly financial reports and annual summaries",
                  "Tenant dispute resolution and escalation management",
                  "Vacancy marketing and rapid re-letting",
                  "Bilingual operations — English and French",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <GoldRule width="12px" className="mt-2.5 shrink-0" />
                    <p className="text-ivory text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
