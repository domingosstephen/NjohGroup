"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectorCard } from "@/components/ui/SectorCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { GoldRule } from "@/components/brand/GoldRule";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import { SECTORS } from "@/lib/constants";

interface SectorsGridProps {
  dict: Record<string, unknown>;
  prefix: string;
}

const sectorImages = [
  // PLACEHOLDER — replace with Njoh Group commissioned photography
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", // Real Estate
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", // Outsourcing
  "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80", // Agriculture
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", // Logistics
];

function hp(dict: Record<string, unknown>, key: string): string {
  const homepage = dict.homepage as Record<string, string>;
  return homepage?.[key] ?? key;
}

function sec(dict: Record<string, unknown>, key: string): string {
  const sectors = dict.sectors as Record<string, string>;
  return sectors?.[key] ?? key;
}

export function SectorsGrid({ dict, prefix }: SectorsGridProps) {
  return (
    <section className="group relative bg-obsidian py-[var(--section-padding-y)] overflow-hidden">
      {/* Cursor-follow spotlight on the grid */}
      <Spotlight className="z-0" size={800} color="rgba(212, 162, 76, 0.03)" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-12">
        <FadeIn>
          <GoldRule width="60px" className="mb-6" />
          <h2 className="font-display text-[var(--text-h1)] text-ivory leading-tight">
            {hp(dict, "sectorsHeading")}
          </h2>
          <p className="mt-4 max-w-2xl text-ash text-[var(--text-body-lg)] leading-relaxed">
            {hp(dict, "sectorsSubhead")}
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {SECTORS.map((sector, i) => (
            <StaggerItem key={sector.slug}>
              <SectorCard
                number={sector.number}
                name={sector.name}
                tagline={sector.tagline}
                href={`${prefix}/sectors/${sector.slug}`}
                image={sectorImages[i]}
                enterLabel={sec(dict, "enterSector")}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-12">
          <Link
            href={`${prefix}/sectors/emerging`}
            className="inline-flex items-center gap-2 text-sm text-stone hover:text-njoh-gold transition-colors group"
          >
            {hp(dict, "sectorsEmerging")}
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
