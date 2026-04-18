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
    number: "01",
    title: "Rent Collection",
    description:
      "We ensure rent is collected on time, every month. Tenants receive clear payment schedules and reminders. You receive your income on a fixed date, minus our commission — no delays, no excuses.",
  },
  {
    number: "02",
    title: "Tenant Compliance",
    description:
      "Lease terms are enforced. House rules are respected. We handle disputes, inspections, and escalations professionally — so your property is treated with the care it deserves.",
  },
  {
    number: "03",
    title: "Tenant Screening & Placement",
    description:
      "We vet prospective tenants thoroughly before placement — employment verification, references, background checks. The right tenant from day one means fewer problems later.",
  },
  {
    number: "04",
    title: "Maintenance & Upkeep",
    description:
      "Regular inspections, preventive maintenance, and responsive repairs. We coordinate with vetted contractors and keep your property in excellent condition — protecting its long-term value.",
  },
  {
    number: "05",
    title: "Financial Reporting",
    description:
      "Monthly statements showing income, expenses, and net returns. Full transparency into how your property is performing. No hidden fees. No opaque accounting.",
  },
  {
    number: "06",
    title: "Lease Administration",
    description:
      "Drafting, renewals, terminations, and legal compliance. We manage the paperwork and ensure every tenancy is properly documented and enforceable.",
  },
];

export function NpmServices() {
  return (
    <section id="services" className="bg-obsidian py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <FadeIn>
          <MonoLabel className="text-njoh-gold">WHAT WE HANDLE</MonoLabel>
          <h2 className="mt-4 font-display text-[var(--text-h1)] text-ivory leading-tight max-w-2xl">
            Register your property. We manage everything else.
          </h2>
          <GoldRule width="60px" className="mt-6" />
        </FadeIn>

        <StaggerContainer className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-graphite/30">
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <div className="bg-obsidian p-6 sm:p-8 lg:p-10 h-full group">
                <MonoLabel className="text-njoh-gold/50 group-hover:text-njoh-gold transition-colors duration-300">
                  {service.number}
                </MonoLabel>
                <h3 className="mt-4 font-display text-lg text-ivory leading-snug">
                  {service.title}
                </h3>
                <p className="mt-4 text-ash text-sm leading-relaxed">
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
