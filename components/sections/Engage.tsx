"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { CTACard } from "@/components/ui/CTACard";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { EMAILS } from "@/lib/constants";

interface EngageProps {
  dict: Record<string, unknown>;
  prefix: string;
}

function hp(dict: Record<string, unknown>, key: string): string {
  const homepage = dict.homepage as Record<string, string>;
  return homepage?.[key] ?? key;
}

export function Engage({ dict, prefix }: EngageProps) {
  const cards = [
    {
      title: hp(dict, "engagePartners"),
      href: `${prefix}/partners`,
    },
    {
      title: hp(dict, "engagePress"),
      href: `${prefix}/press`,
    },
    {
      title: hp(dict, "engageCareers"),
      href: `${prefix}/careers`,
    },
    {
      title: hp(dict, "engageContact"),
      href: `${prefix}/contact`,
    },
  ];

  return (
    <section className="relative bg-obsidian py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 text-center">
        <FadeIn>
          <h2 className="font-display text-[var(--text-display)] text-ivory leading-tight">
            {hp(dict, "engageHeading")}
          </h2>
          <p className="mt-4 text-ash text-[var(--text-body-lg)] leading-relaxed max-w-xl mx-auto">
            {hp(dict, "engageSubhead")}
          </p>
        </FadeIn>

        <StaggerContainer className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {cards.map((card) => (
            <StaggerItem key={card.href}>
              <CTACard title={card.title} href={card.href} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5} className="mt-12">
          <p className="text-sm text-ash">
            {hp(dict, "engageEmail")}{" "}
            <a
              href={`mailto:${EMAILS.general}`}
              className="text-stone hover:text-njoh-gold transition-colors"
            >
              {EMAILS.general}
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
