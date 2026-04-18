"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Logo } from "@/components/brand/Logo";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SpotlightBeam } from "@/components/ui/SpotlightBeam";

export function NpmHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-obsidian">
      {/* Background — warm Cameroon cityscape */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 10, ease: "linear" }}
      >
        {/* PLACEHOLDER — replace with Cameroon property photography */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/80 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 to-transparent" />
      </motion.div>

      <SpotlightBeam
        className="-top-20 -left-10 md:left-40 z-[2]"
        fill="#D4A24C"
      />

      {/* Minimal nav */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-6">
        <Logo size="sm" />
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 bg-njoh-gold text-obsidian px-5 py-2.5 text-sm font-medium uppercase tracking-wider hover:bg-gold-light transition-colors"
        >
          Get a quote
        </a>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 pb-12 sm:pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MonoLabel className="text-njoh-gold">
                NJOH PROPERTY MANAGEMENT · CAMEROON
              </MonoLabel>
            </motion.div>

            <motion.h1
              className="mt-6 font-display text-[clamp(2rem,6vw,4.5rem)] text-ivory leading-[1.1] font-semibold"
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              Your property in Cameroon,{" "}
              <span className="text-njoh-gold">managed like an institution.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="origin-left mt-6"
            >
              <GoldRule width="60px" />
            </motion.div>

            <motion.p
              className="mt-6 text-ash text-lg sm:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              We manage residential and commercial properties with AI-powered
              operations, transparent reporting, and the professionalism your
              investment deserves. Based in Yaoundé. Operating since 2021.
            </motion.p>

            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-njoh-gold text-obsidian px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-gold-light transition-colors"
              >
                Get started today
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-njoh-gold text-njoh-gold px-8 py-4 text-base font-medium uppercase tracking-wider hover:bg-njoh-gold/10 transition-colors"
              >
                See our services
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {["AI-Powered Operations", "Bilingual (EN/FR)", "Since 2021"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ash/60"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-transparent to-njoh-gold/50"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
