import { generatePageMetadata } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { PageHero } from "@/components/sections/PageHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { GoldRule } from "@/components/brand/GoldRule";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { Button } from "@/components/ui/Button";
import { EMAILS } from "@/lib/constants";
import type { Locale } from "@/lib/constants";

interface CareersPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: CareersPageProps) {
  const { locale } = await params;
  return generatePageMetadata({
    title: "Careers at Njoh Group",
    description:
      "Work on the institutions Africa will need. Explore careers at Njoh Group PLC.",
    locale: locale as Locale,
    path: "/careers",
  });
}

const WHY_WORK_HERE = [
  {
    title: "The mission is large and the horizon is long.",
    description:
      "The Group exists to build the institutional infrastructure that a continent of 2.5 billion people will require. The work demands patience, rigour, and a tolerance for complexity that most organisations cannot sustain.",
  },
  {
    title: "Technology enables the work, not the other way around.",
    description:
      "Every division uses machine learning, automation, and computational analysis as standard operating tools — applied to logistics routing, agricultural yield forecasting, property intelligence, and workforce coordination. The technology serves the institutional mandate.",
  },
  {
    title: "A distributed, internationally composed organisation.",
    description:
      "The Group's personnel are based across Yaoundé, São Paulo, and Madrid. The team is Cameroonian, Brazilian, European, and international — unified by a shared institutional commitment to Africa's economic development.",
  },
  {
    title: "The nature of early-stage institutional work.",
    description:
      "A compact organisation operating across four sectors requires individuals who exercise independent judgment. Responsibility at the Group is commensurate with capability, not tenure. The organisational structure is flat by design.",
  },
  {
    title: "Compensation reflects the commitment required.",
    description:
      "The Group's compensation framework includes market-appropriate remuneration and equity participation. The positions available are suited to individuals whose professional horizon extends well beyond the conventional cycle.",
  },
] as const;

export default async function CareersPage({ params }: CareersPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const prefix = locale === "en" ? "" : `/${locale}`;

  return (
    <>
      <PageHero
        label="CAREERS AT NJOH GROUP"
        title="Work on the institutions Africa will need."
        subtitle="The Group seeks individuals whose standards and ambition are equal to the mandate."
        height="60vh"
      />

      {/* Why Work Here */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">WHAT THE WORK REQUIRES</MonoLabel>
            <GoldRule width="40px" className="my-4" />
          </FadeIn>

          {WHY_WORK_HERE.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className={i === 0 ? "mt-8" : "mt-14"}>
                <h3 className="font-display text-xl text-obsidian">
                  {item.title}
                </h3>
                <p className="mt-4 text-obsidian/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-obsidian py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <FadeIn>
            <MonoLabel className="text-ash">OPEN ROLES</MonoLabel>
            <h2 className="mt-4 font-display text-[var(--text-h2)] text-ivory leading-snug">
              Current openings.
            </h2>
            <GoldRule width="40px" className="my-6" />
          </FadeIn>

          {/* Empty state */}
          <FadeIn delay={0.1}>
            <div className="mt-8 border border-graphite/30 p-6 sm:p-8 lg:p-12 text-center">
              <h3 className="font-display text-xl text-ivory">
                No positions are currently listed.
              </h3>
              <p className="mt-4 text-ash leading-relaxed max-w-lg mx-auto">
                The Group maintains a standing registry of qualified
                candidates. Individuals who wish to be considered for future
                appointments may submit their credentials through the form
                below. The registry is reviewed when positions arise.
              </p>
            </div>
          </FadeIn>

          {/* Talent pipeline form placeholder */}
          <FadeIn delay={0.2}>
            <div className="mt-8 sm:mt-12 border border-graphite/30 p-4 sm:p-6 lg:p-8">
              <h3 className="font-display text-lg text-ivory">
                Register for consideration.
              </h3>
              <p className="mt-2 text-sm text-ash">
                Submit your credentials to the Group&apos;s candidate
                registry. Qualified registrants will be contacted as
                positions become available.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ivory text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ivory text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    LinkedIn profile
                  </label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ivory text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                    Area of interest
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ash text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors"
                    disabled
                  >
                    <option>Select a sector</option>
                    <option>Real Estate</option>
                    <option>Outsourcing</option>
                    <option>Agriculture</option>
                    <option>Logistics</option>
                    <option>Group Operations</option>
                    <option>Technology & Systems</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                  Statement of interest
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-graphite/30 border border-graphite text-ivory text-sm font-body focus:outline-none focus:border-njoh-gold transition-colors resize-none"
                  disabled
                />
              </div>
              <div className="mt-6">
                <Button variant="primary" size="md">
                  Submit
                </Button>
                <p className="mt-3 text-xs text-obsidian/50">
                  Form integration coming soon. In the meantime, email{" "}
                  <a
                    href={`mailto:${EMAILS.careers}`}
                    className="text-njoh-gold hover:text-gold-light transition-colors"
                  >
                    {EMAILS.careers}
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Equal Opportunity */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-center">
          <FadeIn>
            <MonoLabel className="text-obsidian/50">
              EQUAL OPPORTUNITY EMPLOYER
            </MonoLabel>
            <GoldRule width="40px" className="mx-auto my-6" />
            <p className="text-obsidian/70 leading-relaxed">
              Njoh Group PLC is an equal opportunity employer. We evaluate
              candidates based on merit, capability, and alignment with our
              mission — regardless of race, gender, sexual orientation, religion,
              nationality, age, or disability. We believe that diversity of
              background and thought is a structural advantage, and we build our
              teams accordingly.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
