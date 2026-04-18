import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { EMAILS } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface PartnersPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PartnersPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Institutional Inquiries",
    description:
      "Explore partnership opportunities with Njoh Group PLC — for governments, investors, institutions, and strategic partners.",
    locale: locale as Locale,
    path: "/partners",
  });
}

const INSTITUTION_TYPES = [
  "Government / Sovereign Entity",
  "Development Finance Institution (DFI)",
  "Private Equity / Venture Capital",
  "Family Office",
  "Corporate / Strategic Partner",
  "Multilateral Organisation",
  "Academic / Research Institution",
  "Other",
] as const;

const SECTORS = [
  "Real Estate",
  "Outsourcing",
  "Agriculture",
  "Logistics",
  "AI & Technology",
  "Cross-Sector",
] as const;

const NATURE_OPTIONS = [
  "Joint Venture / Co-Investment",
  "Strategic Partnership",
  "Capital Investment",
  "Technical Partnership",
  "Government Collaboration",
  "Research Partnership",
  "Other",
] as const;

const DEAL_SIZE_OPTIONS = [
  "Under $500K",
  "$500K – $2M",
  "$2M – $10M",
  "$10M – $50M",
  "$50M+",
  "Not applicable",
] as const;

export default async function PartnersPage({ params }: PartnersPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <PageHero
        label="INSTITUTIONAL INQUIRIES"
        title="Partnership with Njoh Group."
        subtitle="We partner with governments, institutions, and investors who share our long-term vision for Africa."
        height="60vh"
      />

      {/* Qualification Text */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">WHO WE PARTNER WITH</MonoLabel>
            <GoldRule width="40px" className="my-4" />
            <p className="mt-6">
              Njoh Group PLC is a holding company building across four sectors:
              real estate, outsourcing, agriculture, and logistics. We seek
              partners who bring patient capital, institutional credibility,
              sector expertise, or strategic access that accelerates our mission.
            </p>
            <p className="mt-6">
              We are selective. We do not pursue partnerships for the sake of
              scale — we pursue them for the sake of building better
              institutions. If your organisation shares our timeline and our
              values, we would like to hear from you.
            </p>
            <p className="mt-6 text-obsidian/60">
              All inquiries are reviewed by the founder&apos;s office. We aim to
              respond within five business days.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[800px] px-6">
          <FadeIn>
            <MonoLabel className="text-ash">PARTNERSHIP INQUIRY</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              Tell us about your institution.
            </h2>
            <GoldRule width="40px" className="my-6" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    Full name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ivory text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    Title / Role *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ivory text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    Institution *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ivory text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    Institution type *
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ash text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  >
                    <option>Select type</option>
                    {INSTITUTION_TYPES.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ivory text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                  disabled
                />
              </div>

              <div>
                <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                  Sector(s) of interest
                </label>
                <div className="flex flex-wrap gap-3 mt-1">
                  {SECTORS.map((sector) => (
                    <label
                      key={sector}
                      className="flex items-center gap-2 px-4 py-2 border border-graphite text-sm text-ash font-body cursor-not-allowed opacity-60"
                    >
                      <input
                        type="checkbox"
                        className="accent-njoh-gold"
                        disabled
                      />
                      {sector}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    Nature of inquiry
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ash text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  >
                    <option>Select nature</option>
                    {NATURE_OPTIONS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    Indicative deal size
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ash text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  >
                    <option>Select range</option>
                    {DEAL_SIZE_OPTIONS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ivory text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors resize-none"
                  placeholder="Describe the partnership or investment you are interested in exploring."
                  disabled
                />
              </div>

              <div>
                <p className="text-xs text-ash mb-4">
                  File uploads (pitch decks, term sheets, etc.) will be
                  supported in a future update. For now, please email
                  attachments directly to{" "}
                  <a
                    href={`mailto:${EMAILS.partners}`}
                    className="text-njoh-gold hover:text-gold-light transition-colors"
                  >
                    {EMAILS.partners}
                  </a>
                </p>
              </div>

              <div>
                <Button variant="primary" size="lg">
                  Submit inquiry
                </Button>
                <p className="mt-3 text-xs text-ash">
                  Form integration coming soon. In the meantime, email{" "}
                  <a
                    href={`mailto:${EMAILS.partners}`}
                    className="text-njoh-gold hover:text-gold-light transition-colors"
                  >
                    {EMAILS.partners}
                  </a>
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* Confirmation text */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">WHAT HAPPENS NEXT</MonoLabel>
            <GoldRule width="40px" className="mx-auto my-6" />
            <p className="text-obsidian/70 leading-relaxed">
              All partnership inquiries are reviewed by the founder&apos;s
              office. We evaluate alignment with our mission, sector fit,
              timeline compatibility, and institutional credibility. Qualified
              inquiries will receive a response within five business days. We
              treat every inquiry with discretion and confidentiality.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
