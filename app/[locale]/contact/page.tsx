import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { EMAILS, OFFICES } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Contact",
    description:
      "Get in touch with Njoh Group PLC — general inquiries, partnerships, press, and careers.",
    locale: locale as Locale,
    path: "/contact",
  });
}

const ROUTING_CARDS = [
  {
    label: "GENERAL INQUIRIES",
    title: "General questions about Njoh Group.",
    email: EMAILS.general,
    description: "For general information, introductions, or questions about the Group.",
  },
  {
    label: "INSTITUTIONAL PARTNERSHIPS",
    title: "Partner with us.",
    email: EMAILS.partners,
    description: "For governments, investors, institutions, and strategic partners.",
    href: "/partners",
  },
  {
    label: "PRESS & MEDIA",
    title: "Media inquiries.",
    email: EMAILS.press,
    description: "For journalists, publications, and media organisations.",
    href: "/press",
  },
  {
    label: "CAREERS",
    title: "Work with us.",
    email: EMAILS.careers,
    description: "For job inquiries, talent pipeline registration, and recruitment.",
    href: "/careers",
  },
] as const;

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <PageHero
        label="CONTACT"
        title="How to reach us."
        height="40vh"
      />

      {/* Routing Cards */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">REACH THE RIGHT TEAM</MonoLabel>
            <GoldRule width="40px" className="my-4" />
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROUTING_CARDS.map((card, i) => (
              <FadeIn key={card.label} delay={i * 0.05}>
                <div className="border border-stone/20 p-8 hover:border-njoh-gold/40 transition-colors h-full">
                  <MonoLabel className="text-obsidian/50">{card.label}</MonoLabel>
                  <h3 className="mt-3 font-display text-lg text-obsidian">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-obsidian/60 leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${card.email}`}
                      className="text-sm text-njoh-gold hover:text-gold-light transition-colors font-body"
                    >
                      {card.email}
                    </a>
                    {"href" in card && card.href && (
                      <a
                        href={`${prefix}${card.href}`}
                        className="text-sm text-obsidian/60 hover:text-obsidian transition-colors font-body"
                      >
                        Visit page &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-ash">OUR OFFICES</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              Where to find us.
            </h2>
            <GoldRule width="40px" className="my-6" />
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICES.map((office, i) => (
              <FadeIn key={office.city} delay={i * 0.1}>
                <div className="border border-graphite/30 p-8">
                  <MonoLabel className="text-njoh-gold">
                    {office.label}
                  </MonoLabel>
                  <h3 className="mt-3 font-display text-xl text-ivory">
                    {office.city}
                  </h3>
                  <p className="mt-1 text-sm text-ash">{office.country}</p>
                  <p className="mt-4 text-sm text-ash leading-relaxed">
                    {office.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">SEND A MESSAGE</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-obsidian leading-snug">
              Write to us directly.
            </h2>
            <GoldRule width="40px" className="my-6" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-obsidian/60 uppercase tracking-widest font-body mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-stone/20 bg-white text-obsidian text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-xs text-obsidian/60 uppercase tracking-widest font-body mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-stone/20 bg-white text-obsidian text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-obsidian/60 uppercase tracking-widest font-body mb-2">
                  Company / Organisation
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-stone/20 bg-white text-obsidian text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                  disabled
                />
              </div>
              <div>
                <label className="block text-xs text-obsidian/60 uppercase tracking-widest font-body mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-stone/20 bg-white text-obsidian text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors resize-none"
                  disabled
                />
              </div>
              <div>
                <Button variant="primary" size="lg">
                  Send message
                </Button>
                <p className="mt-3 text-xs text-obsidian/50">
                  Form integration coming soon. In the meantime, email{" "}
                  <a
                    href={`mailto:${EMAILS.general}`}
                    className="text-njoh-gold hover:text-gold-light transition-colors"
                  >
                    {EMAILS.general}
                  </a>
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
