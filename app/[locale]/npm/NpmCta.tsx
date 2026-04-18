"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";

export function NpmCta() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: "NPM Property Registration",
      message: `
Phone: ${(form.elements.namedItem("phone") as HTMLInputElement).value || "Not provided"}
Property Type: ${(form.elements.namedItem("propertyType") as HTMLSelectElement).value}
Number of Units: ${(form.elements.namedItem("units") as HTMLInputElement).value || "Not specified"}
Location: ${(form.elements.namedItem("location") as HTMLInputElement).value}
Notes: ${(form.elements.namedItem("message") as HTMLTextAreaElement).value || "None"}
      `.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-graphite/50 border border-graphite text-ivory px-4 py-3 text-sm focus:border-njoh-gold focus:outline-none transition-colors duration-200 placeholder:text-ash/40";

  return (
    <section id="register" className="bg-ivory py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20">
          {/* Left */}
          <FadeIn>
            <div>
              <MonoLabel className="text-obsidian/40">PROPERTY REGISTRATION</MonoLabel>
              <h2 className="mt-4 font-display text-[var(--text-h1)] text-obsidian leading-tight">
                Formal management begins with a formal process.
              </h2>
              <GoldRule width="60px" className="mt-6" />
              <p className="mt-6 text-obsidian/70 text-lg leading-relaxed">
                Property registration is the first step toward institutional
                management. Whether the asset is a single unit in Yaoundé or a
                portfolio across Cameroon, the process is the same.
              </p>
              <p className="mt-4 text-obsidian/60 leading-relaxed">
                Submit your property details below. Our team will contact you
                within 48 hours to conduct an initial assessment.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Initial property assessment at no cost",
                  "Commission agreed during onboarding and fixed thereafter",
                  "Rental income transferred on a set monthly date",
                  "Full financial reporting from commencement",
                  "Standard-notice termination — no lock-in period",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <GoldRule width="12px" className="mt-2.5 shrink-0" />
                    <p className="text-obsidian/70 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-obsidian/10">
                <MonoLabel className="text-obsidian/40">PREFER TO WRITE DIRECTLY?</MonoLabel>
                <p className="mt-3 text-obsidian">
                  <a href="mailto:contact@njohgroup.com" className="hover:text-njoh-gold transition-colors duration-200">
                    contact@njohgroup.com
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.2}>
            <div className="bg-obsidian p-6 sm:p-8 lg:p-10">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center min-h-[400px]">
                  <GoldRule width="40px" className="mb-6" />
                  <p className="text-ivory font-display text-xl">Property registration received.</p>
                  <p className="mt-4 text-ash text-sm max-w-xs leading-relaxed">
                    Our team will review your details and contact you within 48 hours
                    to schedule a property assessment.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <MonoLabel className="text-njoh-gold/60">PROPERTY DETAILS</MonoLabel>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                    <div>
                      <label htmlFor="npm-name" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash/60 mb-2">
                        Full name *
                      </label>
                      <input id="npm-name" name="name" type="text" required className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="npm-email" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash/60 mb-2">
                        Email *
                      </label>
                      <input id="npm-email" name="email" type="email" required className={inputClass} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="npm-phone" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash/60 mb-2">
                        Phone
                      </label>
                      <input id="npm-phone" name="phone" type="tel" className={inputClass} placeholder="+237..." />
                    </div>
                    <div>
                      <label htmlFor="npm-type" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash/60 mb-2">
                        Property type *
                      </label>
                      <select id="npm-type" name="propertyType" required className={`${inputClass} appearance-none cursor-pointer`}>
                        <option value="">Select...</option>
                        <option value="residential-single">Residential — single unit</option>
                        <option value="residential-multi">Residential — multiple units</option>
                        <option value="commercial">Commercial</option>
                        <option value="mixed-use">Mixed-use</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="npm-units" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash/60 mb-2">
                        Number of rental units
                      </label>
                      <input id="npm-units" name="units" type="text" className={inputClass} placeholder="e.g., 6" />
                    </div>
                    <div>
                      <label htmlFor="npm-location" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash/60 mb-2">
                        Property location *
                      </label>
                      <input id="npm-location" name="location" type="text" required className={inputClass} placeholder="e.g., Yaoundé, Bastos" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="npm-message" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash/60 mb-2">
                      Additional notes
                    </label>
                    <textarea
                      id="npm-message"
                      name="message"
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Current tenancy status, specific concerns, etc."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-terracotta text-sm">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-njoh-gold text-obsidian py-4 text-sm font-medium font-body uppercase tracking-wider hover:bg-gold-light transition-colors duration-300 disabled:opacity-50"
                  >
                    {status === "submitting" ? "Registering..." : "Register my property"}
                  </button>

                  <p className="text-ash/30 text-xs text-center font-mono tracking-wider">
                    No cost to register. No obligation to proceed.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
