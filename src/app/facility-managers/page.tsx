import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import LiveDot from "@/components/ui/LiveDot";
import LeadMagnetForm from "@/components/forms/LeadMagnetForm";
import { CONTACT_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "For facility managers — Atlanta backup cleaning vendor",
  description:
    "When your nightly vendor missed, we&apos;re the backup that&apos;s already on your desk. Atlanta&apos;s 24/7 emergency commercial cleaning response. COI on demand within 1 hour.",
};

export default function FacilityManagersPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">For facility managers</SectionLabel>
          <h1 className="display-caps mt-6 text-7xl md:text-9xl lg:text-[10rem] leading-[0.88] tracking-tighter">
            Your nightly
            <br />
            vendor missed.
            <br />
            <span className="text-accent">Again.</span>
          </h1>
          <p className="mt-10 text-2xl md:text-3xl text-ink-soft/80 max-w-2xl leading-tight">
            We&rsquo;re the backup that&rsquo;s already on your desk.
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
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionLabel number="01">The math</SectionLabel>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl tracking-tighter text-balance">
              Your contract vendor runs a fixed route. We don&rsquo;t.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-ink/80 leading-relaxed lg:pt-2">
            <p>
              National franchise vendors lock you into multi-year contracts and
              run on a fixed nightly route. When something goes wrong outside
              that route &mdash; a flood, a biohazard, a no-show, a surprise inspection
              &mdash; their next available crew is 48 hours out. You eat the gap.
            </p>
            <p>
              We respond when your contracted vendor can&rsquo;t. Crew on-site within
              4 hours, COI to your certificate holder within an hour, full photo
              documentation before, during, and after. We don&rsquo;t poach your
              recurring contract; we just cover the gap.
            </p>
            <p>
              We earn the recurring contract by handling the emergency first.
              When you&rsquo;re ready to move the nightly scope, we&rsquo;ll quote it &mdash;
              usually 20&ndash;40% below the franchise rate you&rsquo;re paying now.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg text-ink-soft py-24 md:py-32 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            ["4 hr", "Response window · 24/7"],
            ["1 hr", "COI to certificate holder"],
            ["Net 30", "Standard payment terms · PO accepted"],
          ].map(([v, l]) => (
            <div key={l} className="bg-bg p-8">
              <p className="display text-5xl tracking-tighter">{v}</p>
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/60 mt-3">
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-soft py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <SectionLabel number="02">Lead magnet</SectionLabel>
          <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl tracking-tighter text-balance">
            The Atlanta facility manager&rsquo;s emergency cleaning guide.
          </h2>
          <p className="mt-4 text-lg text-ink/70 max-w-2xl">
            One-page PDF: every category we handle, response windows, COI process,
            and the questions to ask before you sign a backup vendor. No phone
            number required.
          </p>

          <div className="mt-10">
            <LeadMagnetForm />
          </div>
        </div>
      </section>

      <section className="bg-bg text-ink-soft py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="display-caps text-5xl md:text-7xl tracking-tighter">
            We&rsquo;re already moving.
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
