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
      company: "NPM Landing Page Inquiry",
      message: `
Phone: ${(form.elements.namedItem("phone") as HTMLInputElement).value}
Property Type: ${(form.elements.namedItem("propertyType") as HTMLSelectElement).value}
Units: ${(form.elements.namedItem("units") as HTMLInputElement).value}
Location: ${(form.elements.namedItem("location") as HTMLInputElement).value}
Message: ${(form.elements.namedItem("message") as HTMLTextAreaElement).value}
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
    "w-full bg-graphite/50 border border-graphite text-ivory px-4 py-3 text-sm focus:border-njoh-gold focus:outline-none transition-colors placeholder:text-ash/40";

  return (
    <section id="contact" className="bg-obsidian py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20">
          {/* Left — messaging */}
          <FadeIn>
            <div>
              <MonoLabel className="text-njoh-gold">LET&apos;S TALK</MonoLabel>
              <h2 className="mt-4 font-display text-[var(--text-h1)] text-ivory leading-tight">
                Ready to hand over the keys?
              </h2>
              <GoldRule width="60px" className="mt-6" />
              <p className="mt-6 text-ash text-lg leading-relaxed">
                Whether you own a single apartment in Yaoundé or a portfolio of
                commercial buildings across Cameroon, we&apos;d like to show you what
                professional management looks like.
              </p>
              <p className="mt-4 text-ash leading-relaxed">
                Fill out the form and a member of our team will contact you within
                48 hours with a tailored proposal.
              </p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-njoh-gold shrink-0" />
                  <span className="text-ivory text-sm">Free property assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-njoh-gold shrink-0" />
                  <span className="text-ivory text-sm">No lock-in contracts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-njoh-gold shrink-0" />
                  <span className="text-ivory text-sm">Results within 30 days</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-graphite/40">
                <MonoLabel className="text-ash/50">PREFER TO CALL?</MonoLabel>
                <p className="mt-3 text-ivory">
                  <a href="mailto:contact@njohgroup.com" className="hover:text-njoh-gold transition-colors">
                    contact@njohgroup.com
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.2}>
            {status === "success" ? (
              <div className="border border-njoh-gold/30 bg-graphite/30 p-6 sm:p-10 text-center flex flex-col items-center justify-center h-full min-h-[300px]">
                <div className="w-12 h-12 rounded-full border-2 border-njoh-gold flex items-center justify-center mb-6">
                  <span className="text-njoh-gold text-xl">✓</span>
                </div>
                <p className="text-ivory font-display text-xl">Thank you.</p>
                <p className="mt-3 text-ash text-sm max-w-xs">
                  We&apos;ve received your inquiry and will get back to you within 48 hours
                  with a tailored proposal.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="npm-name" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash mb-2">
                      Full name *
                    </label>
                    <input id="npm-name" name="name" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="npm-email" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash mb-2">
                      Email *
                    </label>
                    <input id="npm-email" name="email" type="email" required className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="npm-phone" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash mb-2">
                      Phone
                    </label>
                    <input id="npm-phone" name="phone" type="tel" className={inputClass} placeholder="+237..." />
                  </div>
                  <div>
                    <label htmlFor="npm-type" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash mb-2">
                      Property type *
                    </label>
                    <select id="npm-type" name="propertyType" required className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="">Select...</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="mixed-use">Mixed-use</option>
                      <option value="land">Land / Development</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="npm-units" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash mb-2">
                      Number of units
                    </label>
                    <input id="npm-units" name="units" type="text" className={inputClass} placeholder="e.g., 4 apartments" />
                  </div>
                  <div>
                    <label htmlFor="npm-location" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash mb-2">
                      Location *
                    </label>
                    <input id="npm-location" name="location" type="text" required className={inputClass} placeholder="e.g., Yaoundé, Bastos" />
                  </div>
                </div>

                <div>
                  <label htmlFor="npm-message" className="block font-mono text-[0.625rem] uppercase tracking-wider text-ash mb-2">
                    Tell us about your property
                  </label>
                  <textarea
                    id="npm-message"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Current situation, what you're looking for..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-terracotta text-sm">Something went wrong. Please try again or email us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-njoh-gold text-obsidian py-4 text-base font-medium uppercase tracking-wider hover:bg-gold-light transition-colors disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Request a proposal"}
                </button>

                <p className="text-ash/40 text-xs text-center">
                  No commitment. We&apos;ll review your property and come back with a tailored plan.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
