import { Logo } from "@/components/brand/Logo";
import { TopographicArc } from "@/components/brand/TopographicArc";
import { EMAILS } from "@/lib/constants";

export function NpmFooter() {
  return (
    <footer className="relative bg-obsidian border-t border-graphite/30 py-10 sm:py-14">
      <div className="absolute top-0 left-0 right-0 -translate-y-1/2 pointer-events-none">
        <TopographicArc opacity={0.1} strokeWidth={0.5} />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
          <div>
            <Logo size="sm" />
            <p className="mt-3 text-ash text-xs max-w-xs">
              Njoh Property Management is a subsidiary of Njoh Group PLC.
              Professional property management for Cameroon and beyond.
            </p>
          </div>

          <div className="text-center sm:text-right">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-ash/60">
              YAOUNDÉ, CAMEROON
            </p>
            <a
              href={`mailto:${EMAILS.general}`}
              className="mt-2 block text-sm text-ash hover:text-njoh-gold transition-colors"
            >
              {EMAILS.general}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-graphite/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[0.5rem] uppercase tracking-[0.1em] text-ash/40">
            © 2026 Njoh Group PLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/legal/privacy" className="font-mono text-[0.5rem] uppercase tracking-[0.1em] text-ash/40 hover:text-ivory transition-colors">
              Privacy
            </a>
            <a href="/legal/terms" className="font-mono text-[0.5rem] uppercase tracking-[0.1em] text-ash/40 hover:text-ivory transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
