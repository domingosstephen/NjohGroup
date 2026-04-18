"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function NpmProblem() {
  return (
    <section className="bg-ivory py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[700px] px-4 sm:px-8 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
        <FadeIn>
          <MonoLabel className="text-obsidian/40">THE PROBLEM</MonoLabel>
          <h2 className="mt-4 font-display text-[var(--text-h1)] text-obsidian leading-tight">
            Owning rental property in Cameroon is rewarding. Managing it is not.
          </h2>
          <GoldRule width="40px" className="mt-6" />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-8 text-obsidian/70">
            Tenants pay late — or not at all. Lease terms go unenforced. Maintenance
            issues pile up. You spend your time chasing problems instead of earning
            from your investment. And the informal arrangements most landlords rely on
            offer no accountability, no reporting, and no recourse.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-6 text-obsidian/70">
            Your property is a serious asset. It deserves serious management.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="mt-6 font-medium text-obsidian">
            Njoh Property Management exists to solve this. You register your property
            with us. We take over the full operational burden — rent collection, tenant
            compliance, maintenance, reporting — for a fixed, transparent commission.
            You receive your rental income on time, every month.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
