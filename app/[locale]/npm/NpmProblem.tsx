"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function NpmProblem() {
  return (
    <section className="bg-ivory py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[700px] px-4 sm:px-8 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
        <FadeIn>
          <MonoLabel className="text-obsidian/40">THE CONTEXT</MonoLabel>
          <h2 className="mt-4 font-display text-[var(--text-h1)] text-obsidian leading-tight">
            A serious asset managed informally is an asset at risk.
          </h2>
          <GoldRule width="40px" className="mt-6" />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-8 text-obsidian/70">
            Across Cameroon, rental properties worth hundreds of millions of francs
            are managed through informal arrangements — no enforceable lease terms,
            no financial reporting, no maintenance schedules. The owner bears the risk
            of a serious investment while accepting the oversight of an informal one.
            Over time, the property loses value. The owner loses standing.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-obsidian/70">
            Institutional property owners — in any mature market — do not operate this way. They never have.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-6 font-medium text-obsidian">
            Njoh Property Management was established to bring institutional-grade
            management to Cameroon&apos;s rental market. A registered property is a
            professionally managed property — with enforced leases, scheduled
            maintenance, monthly financial reporting, and rent collected and
            transferred on a fixed date. The standard the asset deserves.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
