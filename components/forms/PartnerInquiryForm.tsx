"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function PartnerInquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      title: formData.get("title"),
      institution: formData.get("institution"),
      institutionType: formData.get("institutionType"),
      country: formData.get("country"),
      sectors: formData.getAll("sectors"),
      nature: formData.get("nature"),
      dealSize: formData.get("dealSize"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/partners", {
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

  if (status === "success") {
    return (
      <div className="border border-njoh-gold/30 bg-graphite/30 p-4 sm:p-8 lg:p-12 text-center">
        <p className="text-ivory font-display text-lg">
          Thank you. Your inquiry has been received and will be routed to the appropriate team.
        </p>
        <p className="mt-2 text-ash text-sm">
          You will hear from us within five business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-graphite/50 border border-graphite text-ivory px-4 py-3 text-sm focus:border-njoh-gold focus:outline-none transition-colors";
  const labelClass = "block font-mono text-xs uppercase tracking-wider text-ash mb-2";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="p-name" className={labelClass}>Name *</label>
          <input id="p-name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="p-title" className={labelClass}>Title *</label>
          <input id="p-title" name="title" type="text" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="p-institution" className={labelClass}>Institution *</label>
          <input id="p-institution" name="institution" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="p-type" className={labelClass}>Institution type *</label>
          <select id="p-type" name="institutionType" required className={selectClass}>
            <option value="">Select...</option>
            <option value="sovereign-fund">Sovereign fund</option>
            <option value="institutional-investor">Institutional investor</option>
            <option value="family-office">Family office</option>
            <option value="dfi">Development finance institution</option>
            <option value="corporate-partner">Corporate partner</option>
            <option value="jv-operator">Joint venture operator</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="p-country" className={labelClass}>Country *</label>
        <input id="p-country" name="country" type="text" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Sector of interest *</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-2">
          {["Real Estate", "Outsourcing", "Agriculture", "Logistics", "Group-level", "Other"].map(
            (sector) => (
              <label key={sector} className="flex items-center gap-2 text-sm text-ash cursor-pointer hover:text-ivory transition-colors">
                <input
                  type="checkbox"
                  name="sectors"
                  value={sector.toLowerCase().replace(/\s+/g, "-")}
                  className="accent-njoh-gold"
                />
                {sector}
              </label>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="p-nature" className={labelClass}>Nature of inquiry *</label>
          <select id="p-nature" name="nature" required className={selectClass}>
            <option value="">Select...</option>
            <option value="investment">Investment</option>
            <option value="joint-venture">Joint venture</option>
            <option value="acquisition">Acquisition discussion</option>
            <option value="strategic-partnership">Strategic partnership</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="p-dealsize" className={labelClass}>Approximate deal size *</label>
          <select id="p-dealsize" name="dealSize" required className={selectClass}>
            <option value="">Select...</option>
            <option value="<1m">&lt; $1M</option>
            <option value="1-10m">$1–10M</option>
            <option value="10-50m">$10–50M</option>
            <option value="50m+">$50M+</option>
            <option value="not-applicable">Not applicable</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="p-message" className={labelClass}>Message *</label>
        <textarea
          id="p-message"
          name="message"
          required
          rows={6}
          className={`${inputClass} resize-none`}
        />
      </div>

      <p className="text-ash/40 text-xs font-mono uppercase tracking-wider">
        Please attach relevant documentation via email to partners@njohgroup.com after submission.
      </p>

      {status === "error" && (
        <p className="text-terracotta text-sm">Something went wrong. Please try again.</p>
      )}

      <Button variant="primary" size="lg" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit inquiry"}
      </Button>
    </form>
  );
}
