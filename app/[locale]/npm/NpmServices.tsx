"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";

const services = [
  {
    icon: "🏠",
    title: "Tenant Management",
    description:
      "Screening, onboarding, rent collection, complaints, renewals. We handle the full tenant lifecycle so you never have to chase a payment again.",
  },
  {
    icon: "🔧",
    title: "Maintenance & Repairs",
    description:
      "Predictive scheduling, vetted contractors, emergency response. Properties stay in top condition with costs under control.",
  },
  {
    icon: "📊",
    title: "Financial Reporting",
    description:
      "Monthly income statements, expense breakdowns, and tax-ready documentation. See exactly how your property is performing.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Operations",
    description:
      "Automated tenant communications, smart pricing, occupancy forecasting. Technology that makes your property work harder.",
  },
  {
    icon: "📋",
    title: "Leasing & Placement",
    description:
      "Professional marketing, viewings, screening, and lease execution. We fill vacancies fast with quality tenants.",
  },
  {
    icon: "📈",
    title: "Portfolio Advisory",
    description:
      "Market intelligence, capital improvement recommendations, and growth strategy for owners looking to scale.",
  },
];

export function NpmServices() {
  return (
    <section id="services" className="bg-ivory py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <FadeIn>
          <MonoLabel className="text-obsidian/50">WHAT WE DO</MonoLabel>
          <h2 className="mt-4 font-display text-[var(--text-h1)] text-obsidian leading-tight max-w-2xl">
            Everything your property needs. Nothing it doesn&apos;t.
          </h2>
          <GoldRule width="60px" className="mt-6" />
        </FadeIn>

        <StaggerContainer className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group border border-obsidian/10 p-4 sm:p-6 lg:p-8 h-full transition-all duration-300 hover:border-njoh-gold/30 hover:shadow-lg hover:shadow-njoh-gold/5">
                <span className="text-2xl" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
                <h3 className="mt-4 font-display text-lg text-obsidian leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-obsidian/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
