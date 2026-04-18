"use client";

import { motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { SpotlightBeam } from "@/components/ui/SpotlightBeam";
import { TopographicArc } from "@/components/brand/TopographicArc";

export function NpmHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-obsidian">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,162,76,0.08),transparent)]" />
      </div>

      <SpotlightBeam
        className="-top-20 -left-10 md:left-40 z-[2]"
        fill="#D4A24C"
      />

      <div className="absolute inset-0 flex items-end pointer-events-none z-[1]">
        <TopographicArc opacity={0.08} className="w-full" />
      </div>

      {/* Minimal nav */}
      <div className="relative z-10 flex items-center justify-between px-4 sm:px-8 lg:px-12 py-6">
        <Logo size="sm" />
        <a
          href="#register"
          className="hidden sm:inline-flex items-center gap-2 border border-njoh-gold/60 text-njoh-gold px-5 py-2.5 text-sm font-body uppercase tracking-wider hover:bg-njoh-gold hover:text-obsidian transition-colors duration-300"
        >
          Register your property
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
                NJOH PROPERTY MANAGEMENT
              </MonoLabel>
            </motion.div>

            <motion.h1
              className="mt-6 font-display text-[clamp(2rem,6vw,4.5rem)] text-ivory leading-[1.1] font-semibold"
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              The standard of management{" "}
              <br className="hidden sm:block" />
              <span className="text-njoh-gold">Cameroon&apos;s rental market deserves.</span>
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
              Serious property investors do not manage tenants themselves. They
              retain an institution that collects rent on time, enforces lease terms,
              and protects the value of the asset. That institution now exists in Cameroon.
            </motion.p>

            <motion.div
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 bg-njoh-gold text-obsidian px-8 py-4 text-base font-medium font-body uppercase tracking-wider hover:bg-gold-light transition-colors duration-300"
              >
                Register your property
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-ivory/20 text-ivory px-8 py-4 text-base font-medium font-body uppercase tracking-wider hover:border-ivory/40 transition-colors duration-300"
              >
                See the model
              </a>
            </motion.div>

            <motion.div
              className="mt-10 pt-8 border-t border-graphite/40 flex flex-wrap items-center gap-x-8 gap-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div>
                <MonoLabel className="text-ash/40">BASED IN</MonoLabel>
                <p className="text-ivory text-sm mt-1">Yaoundé, Cameroon</p>
              </div>
              <div>
                <MonoLabel className="text-ash/40">OPERATING SINCE</MonoLabel>
                <p className="text-ivory text-sm mt-1">2021</p>
              </div>
              <div>
                <MonoLabel className="text-ash/40">MODEL</MonoLabel>
                <p className="text-ivory text-sm mt-1">Fixed commission</p>
              </div>
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
