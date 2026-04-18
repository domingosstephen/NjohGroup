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
    title: "Build something that matters.",
    description:
      "You will not be optimising click-through rates or tweaking ad funnels. You will be building the institutions that serve a continent of 2.5 billion people. The work is hard, the timeline is long, and the stakes are real.",
  },
  {
    title: "AI-native from day one.",
    description:
      "Every team at Njoh Group uses AI as infrastructure — not as a side project. You will work with the most advanced tools available, applied to problems that genuinely matter: logistics routing, agricultural yield prediction, property intelligence, workforce operations.",
  },
  {
    title: "A diaspora-connected team.",
    description:
      "Our team spans Yaoundé, São Paulo, and Madrid. We are Cameroonian, Brazilian, European, and global — bound by a shared belief in what Africa is becoming. You will work alongside people who chose this mission.",
  },
  {
    title: "Ownership and autonomy.",
    description:
      "We are a small team building across four sectors. There are no layers of middle management, no approval chains that take weeks. If you are good, you will have more responsibility here than anywhere else — from your first month.",
  },
  {
    title: "Long-term thinking, real compensation.",
    description:
      "We are building for decades, and we want people who think the same way. We offer competitive compensation, equity participation, and the kind of career trajectory that only comes from being early at something important.",
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
        subtitle="We are looking for people who want to build something that lasts."
        height="60vh"
      />

      {/* Why Work Here */}
      <section className="bg-ivory py-[var(--section-padding-y)]">
        <div className="mx-auto max-w-[700px] px-6 text-obsidian font-body text-[var(--text-body-lg)] leading-[1.7]">
          <FadeIn>
            <MonoLabel className="text-stone">WHY WORK HERE</MonoLabel>
            <GoldRule width="40px" className="my-4" />
          </FadeIn>

          {WHY_WORK_HERE.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <div className={i === 0 ? "mt-8" : "mt-14"}>
                <h3 className="font-display text-xl text-obsidian">
                  {item.title}
                </h3>
                <p className="mt-4 text-stone leading-relaxed">
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
            <div className="mt-8 border border-graphite/30 p-12 text-center">
              <h3 className="font-display text-xl text-ivory">
                No open roles at this time.
              </h3>
              <p className="mt-4 text-ash leading-relaxed max-w-lg mx-auto">
                We are always looking for exceptional people. If you believe you
                can contribute to Njoh Group&apos;s mission, submit your
                information below and we will reach out when a relevant role
                opens.
              </p>
            </div>
          </FadeIn>

          {/* Talent pipeline form placeholder */}
          <FadeIn delay={0.2}>
            <div className="mt-12 border border-graphite/30 p-8">
              <h3 className="font-display text-lg text-ivory">
                Join the talent pipeline.
              </h3>
              <p className="mt-2 text-sm text-ash">
                Tell us about yourself and we will keep you in mind for future
                opportunities.
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
                    <option>AI & Technology</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-xs text-ash uppercase tracking-widest font-body mb-2">
                  Why Njoh Group?
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
                <p className="mt-3 text-xs text-stone">
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
            <MonoLabel className="text-stone">
              EQUAL OPPORTUNITY EMPLOYER
            </MonoLabel>
            <GoldRule width="40px" className="mx-auto my-6" />
            <p className="text-stone leading-relaxed">
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
