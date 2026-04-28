import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import CrewApplication from "@/components/forms/CrewApplication";

export const metadata: Metadata = {
  title: "Become crew — Atlanta emergency commercial cleaning jobs",
  description:
    "Crew leads and crew members for Atlanta&apos;s 24/7 emergency commercial cleaning response. $25–$45/hr depending on role and shift. Background check, reliable transportation required.",
};

export default function CrewPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">Become crew</SectionLabel>
          <h1 className="display-caps mt-6 text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
            Show up.
            <br />
            <span className="text-accent">Get paid.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-ink-soft/80 leading-relaxed">
            We dispatch crews across Atlanta metro 24/7 for emergency commercial
            response. We pay top of market for reliable people who show up
            on time and finish the work.
          </p>
        </div>
      </section>

      <section className="bg-bg-soft py-20 md:py-24 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {[
            ["$25–$32 / hr", "Crew member"],
            ["$35–$45 / hr", "Crew lead"],
            ["1.5–2×", "After-hours, weekend, holiday"],
          ].map(([v, l]) => (
            <div key={l} className="bg-bg-soft p-8">
              <p className="display text-3xl md:text-4xl tracking-tighter">{v}</p>
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50 mt-3">
                {l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-bg-soft py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel number="01">Requirements</SectionLabel>
            <ul className="mt-8 space-y-3 text-ink/80">
              {[
                "18+, legally authorized to work in the U.S.",
                "Pass a background check (we cover the cost).",
                "Reliable transportation; on-site anywhere in metro Atlanta within 90 minutes.",
                "Comfortable with biohazard, post-construction, and emergency response work.",
                "Smartphone for dispatch, photo documentation, and Telegram bot.",
                "Crew leads: 2+ years commercial cleaning experience and clean driving record.",
              ].map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="text-accent mono mt-1">∎</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel number="02">How we work</SectionLabel>
            <ul className="mt-8 space-y-3 text-ink/80">
              {[
                "Crew leads receive jobs first via Telegram bot. They claim the job and assemble their crew from the active worker pool.",
                "You&rsquo;re paid weekly. Overtime, holiday, and after-hours premiums apply automatically.",
                "We provide PPE and specialty equipment. You bring reliability.",
                "No mandatory shifts. You opt in to the categories and time windows you want.",
              ].map((r) => (
                <li key={r} className="flex gap-3">
                  <span className="text-accent mono mt-1">∎</span>
                  <span dangerouslySetInnerHTML={{ __html: r }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24 border-y border-ink/10">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <SectionLabel number="03">Apply</SectionLabel>
          <h2 className="display mt-6 text-4xl md:text-5xl tracking-tighter">
            Tell us about you.
          </h2>
          <p className="mt-4 text-ink/70">
            We respond within two business days. Background check kicks off after
            a short call.
          </p>

          <div className="mt-10">
            <CrewApplication />
          </div>
        </div>
      </section>
    </>
  );
}
