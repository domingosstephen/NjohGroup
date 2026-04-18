"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MonoLabel } from "./MonoLabel";
import { GoldRule } from "@/components/brand/GoldRule";

interface SectorCardProps {
  number: string;
  name: string;
  tagline: string;
  href: string;
  image: string;
  enterLabel?: string;
}

export function SectorCard({
  number,
  name,
  tagline,
  href,
  image,
  enterLabel = "Enter sector",
}: SectorCardProps) {
  return (
    <Link href={href} className="group relative block aspect-[4/3] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.5]"
        style={{ backgroundImage: `url('${image}')` }}
      />
      {/* Default overlay */}
      <div className="absolute inset-0 bg-obsidian/60 transition-opacity duration-500 group-hover:bg-obsidian/70" />

      {/* Border on hover */}
      <motion.div
        className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-njoh-gold/40"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-8">
        <div>
          <GoldRule width="40px" className="mb-4 opacity-60" />
          <MonoLabel className="text-stone/80">
            {number} — {name.toUpperCase()}
          </MonoLabel>
        </div>

        <div>
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] text-ivory leading-tight">
            {name}
          </h3>
          <p className="mt-2 text-sm text-ash leading-relaxed max-w-xs">
            {tagline}
          </p>

          {/* Hover reveal CTA */}
          <span className="mt-4 inline-flex items-center gap-2 text-sm text-njoh-gold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            {enterLabel} <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
