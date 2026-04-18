"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";

export function NpmProblem() {
  const problems = [
    {
      before: "Chasing tenants for rent",
      after: "Automated collection with full tracking",
    },
    {
      before: "Surprise maintenance emergencies",
      after: "Predictive maintenance before problems hit",
    },
    {
      before: "No visibility into your investment",
      after: "Real-time dashboards and monthly reports",
    },
    {
      before: "Vacant units costing you money",
      after: "AI-optimized pricing and fast placement",
    },
  ];

  return (
    <section className="bg-graphite py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="max-w-2xl">
            <GoldRule width="40px" className="mb-6" />
            <h2 className="font-display text-[var(--text-h1)] text-ivory leading-tight">
              Property ownership in Cameroon shouldn&apos;t feel like a second job.
            </h2>
            <p className="mt-6 text-ash text-lg leading-relaxed">
              Most landlords and developers in Cameroon manage their own properties — or
              rely on informal arrangements that cost more than they save. The result: lost
              revenue, neglected buildings, and frustrated tenants.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {problems.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border border-graphite bg-obsidian/50 p-4 sm:p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <span className="text-terracotta shrink-0 mt-1 text-lg" aria-hidden="true">
                    &times;
                  </span>
                  <div>
                    <p className="text-ash/70 line-through text-sm">{item.before}</p>
                    <div className="flex items-start gap-3 mt-3">
                      <span className="text-njoh-gold shrink-0 mt-0.5" aria-hidden="true">
                        &check;
                      </span>
                      <p className="text-ivory font-medium text-sm sm:text-base">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
