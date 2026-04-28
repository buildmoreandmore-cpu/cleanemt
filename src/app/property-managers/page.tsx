import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import LiveDot from "@/components/ui/LiveDot";
import { CONTACT_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "For property managers — Multifamily turnover & after-hours response",
  description:
    "Unit turnover, common-area emergencies, post-eviction biohazard, and after-hours response across Atlanta multifamily. On-site within 4 hours. Volume tiers for 10+ unit/month operators.",
};

const services = [
  {
    num: "01",
    title: "Standard make-ready turnover",
    body:
      "Move-out to lease-ready, full unit deep clean, appliance detail, carpet and tile. By morning if needed.",
  },
  {
    num: "02",
    title: "Post-eviction biohazard",
    body:
      "Soiled units, hoarding, infestation. OSHA bloodborne-pathogen protocols, sealed disposal chain, photo documentation.",
  },
  {
    num: "03",
    title: "Common-area emergencies",
    body:
      "Lobby flood, hallway sewage backup, trash chute reset, after-hours leasing-office cleanup.",
  },
  {
    num: "04",
    title: "After-hours response",
    body:
      "9pm flood. 2am vendor no-show. Surprise corporate walk-through tomorrow. We&rsquo;re on the line, 24/7.",
  },
];

export default function PropertyManagersPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">For property managers</SectionLabel>
          <h1 className="display-caps mt-6 text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
            Unit turnover.
            <br />
            Common-area
            <br />
            emergencies.
            <br />
            <span className="text-accent">Handled.</span>
          </h1>
          <p className="mt-10 text-xl md:text-2xl text-ink-soft/80 max-w-2xl leading-relaxed">
            On-site at your multifamily property within 4 hours, any hour, any condition.
            Volume tiers for operators running 10+ units a month.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`tel:${CONTACT_PHONE.tel}`}
              className="bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wide text-sm px-6 py-3.5"
            >
              Call dispatch · {CONTACT_PHONE.display}
            </a>
            <Link
              href="/request"
              className="border border-ink-soft/40 hover:border-ink-soft text-ink-soft font-semibold uppercase tracking-wide text-sm px-6 py-3.5"
            >
              Request a crew
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="01">What we cover</SectionLabel>
          <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl tracking-tighter max-w-3xl text-balance">
            Built for the moments your nightly cleaner can&rsquo;t cover.
          </h2>

          <ul className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            {services.map((s) => (
              <li key={s.num} className="bg-bg-soft p-8">
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  {s.num}
                </p>
                <h3 className="display text-2xl md:text-3xl tracking-tight mt-4">
                  {s.title}
                </h3>
                <p
                  className="text-ink/75 mt-3 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg text-ink-soft py-24 md:py-32 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            ["$185–$420", "Per unit · standard turnover"],
            ["10+", "Units per month · volume tier"],
            ["Net 30", "Standard PM terms"],
          ].map(([v, l]) => (
            <div key={l} className="bg-bg p-8">
              <p className="display text-4xl md:text-5xl tracking-tighter">{v}</p>
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/60 mt-3">
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionLabel number="02">For multi-property operators</SectionLabel>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl tracking-tighter text-balance">
              One dispatcher across your whole portfolio.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-ink/80 leading-relaxed lg:pt-2">
            <p>
              You manage a dozen properties &mdash; we ride one phone number. Crew lead
              briefed before they arrive on each site&rsquo;s access protocols, key
              handling, and resident-facing standards.
            </p>
            <p>
              We hold capacity for backup-vendor calls. If your contracted nightly
              cleaner misses, we&rsquo;re the redundancy. One bill, one COI, one point of
              contact across every property in your portfolio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg text-ink-soft py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="display-caps text-5xl md:text-7xl tracking-tighter">
            Tonight&rsquo;s turnover.
            <br />
            <span className="text-accent">Or tomorrow morning&rsquo;s.</span>
          </h2>
          <a
            href={`tel:${CONTACT_PHONE.tel}`}
            className="mono block text-4xl md:text-6xl tracking-tight mt-10 hover:text-accent transition-colors"
          >
            {CONTACT_PHONE.display}
          </a>
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-ink-soft/50 mt-4 flex items-center gap-2 justify-center">
            <LiveDot small /> Available now · 24/7
          </p>
        </div>
      </section>
    </>
  );
}
