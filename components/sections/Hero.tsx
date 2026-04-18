"use client";

import { motion } from "framer-motion";
import { TopographicArc } from "@/components/brand/TopographicArc";
import { Button } from "@/components/ui/Button";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { GoldGlow } from "@/components/ui/GoldGlow";
import { SpotlightBeam } from "@/components/ui/SpotlightBeam";
import { AnimatedGridPattern } from "@/components/ui/AnimatedGridPattern";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface HeroProps {
  dict: Record<string, unknown>;
  prefix: string;
}

function hp(dict: Record<string, unknown>, key: string): string {
  const homepage = dict.homepage as Record<string, string>;
  return homepage?.[key] ?? key;
}

export function Hero({ dict, prefix }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-obsidian">
      {/* Background image with Ken Burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 8, ease: "linear" }}
      >
        {/* PLACEHOLDER — replace with Njoh Group commissioned photography */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1920&q=80')",
          }}
        />
        {/* Gradient overlays — dramatic vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
      </motion.div>

      {/* Animated grid pattern — subtle living texture */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.08}
        duration={5}
        repeatDelay={1}
        className="absolute inset-0 z-[2] fill-njoh-gold/[0.03] stroke-njoh-gold/[0.03]"
      />

      {/* Spotlight beam — directional gold light from top-left */}
      <SpotlightBeam
        className="-top-40 left-0 md:-top-20 md:left-60 z-[3]"
        fill="#D4A24C"
      />

      {/* Topographic arc — draws in on load */}
      <div className="absolute inset-0 flex items-center pointer-events-none z-[4]">
        <TopographicArc
          animate
          opacity={0.25}
          color="var(--color-njoh-gold)"
          strokeWidth={1}
          className="w-full"
        />
      </div>

      {/* Subtle gold glow behind text */}
      <GoldGlow
        size="lg"
        intensity={0.06}
        className="-left-20 top-1/2 -translate-y-1/2 z-[5]"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            className="font-display font-semibold leading-tight"
            style={{ fontSize: "var(--text-hero)" }}
          >
            <motion.span
              className="block text-ivory"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              {hp(dict, "heroHeadline1")}
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            >
              {hp(dict, "heroHeadline2").split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    word.replace(/[.,!?]/g, "").toLowerCase() ===
                    hp(dict, "heroHeadlineGoldWord").toLowerCase()
                      ? "text-njoh-gold"
                      : "text-ivory"
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </motion.span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="mt-8 max-w-xl text-[var(--text-body-lg)] leading-relaxed text-ash"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          >
            {hp(dict, "heroSubhead")}
          </motion.p>

          {/* CTAs with magnetic effect */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
          >
            <MagneticButton strength={0.15}>
              <Button variant="primary" size="lg" href={`${prefix}/vision`}>
                {hp(dict, "heroCta1")}
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Button variant="secondary" size="lg" href={`${prefix}/sectors`}>
                {hp(dict, "heroCta2")}
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom-left metadata */}
        <motion.div
          className="absolute bottom-8 left-6 lg:left-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <MonoLabel className="text-ash/60">
            {hp(dict, "heroMeta")}
          </MonoLabel>
        </motion.div>

        {/* Scroll indicator — animated line */}
        <motion.div
          className="absolute bottom-8 right-6 lg:right-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-transparent via-njoh-gold/40 to-njoh-gold/80"
            animate={{ scaleY: [0, 1, 0], y: [0, 0, 16] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
