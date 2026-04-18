"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  dict: Record<string, unknown>;
}

function cm(dict: Record<string, unknown>, key: string): string {
  const common = dict.common as Record<string, string>;
  return common?.[key] ?? key;
}

export function ContactForm({ dict }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value || undefined,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-njoh-gold/30 bg-graphite/30 p-8 text-center">
        <p className="text-ivory font-display text-lg">{cm(dict, "thankYou")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-wider text-ash mb-2">
            {cm(dict, "name")} *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full bg-graphite/50 border border-graphite text-ivory px-4 py-3 text-sm focus:border-njoh-gold focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-wider text-ash mb-2">
            {cm(dict, "email")} *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full bg-graphite/50 border border-graphite text-ivory px-4 py-3 text-sm focus:border-njoh-gold focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-company" className="block font-mono text-xs uppercase tracking-wider text-ash mb-2">
          {cm(dict, "company")}
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          className="w-full bg-graphite/50 border border-graphite text-ivory px-4 py-3 text-sm focus:border-njoh-gold focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-wider text-ash mb-2">
          {cm(dict, "message")} *
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          className="w-full bg-graphite/50 border border-graphite text-ivory px-4 py-3 text-sm focus:border-njoh-gold focus:outline-none transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-terracotta text-sm">Something went wrong. Please try again.</p>
      )}

      <Button variant="primary" size="lg" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : cm(dict, "submit")}
      </Button>
    </form>
  );
}
