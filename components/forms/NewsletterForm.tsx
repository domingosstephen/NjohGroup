"use client";

import { useState } from "react";

interface NewsletterFormProps {
  dict: Record<string, unknown>;
}

function cm(dict: Record<string, unknown>, key: string): string {
  const common = dict.common as Record<string, string>;
  return common?.[key] ?? key;
}

export function NewsletterForm({ dict }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
      <p className="text-njoh-gold text-sm font-medium">
        Thank you — you&apos;ll hear from us when we publish.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:max-w-md">
      <input
        name="email"
        type="email"
        required
        placeholder={cm(dict, "emailPlaceholder")}
        className="flex-1 bg-graphite/50 border border-graphite text-ivory px-4 py-3 text-sm focus:border-njoh-gold focus:outline-none transition-colors placeholder:text-ash/50"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-njoh-gold text-obsidian px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gold-light transition-colors disabled:opacity-50"
      >
        {cm(dict, "subscribe")}
      </button>
    </form>
  );
}
