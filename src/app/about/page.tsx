import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import LiveDot from "@/components/ui/LiveDot";
import { CONTACT_PHONE, SERVICE_AREA } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About — Atlanta&apos;s 24/7 emergency commercial cleaning response",
  description:
    "CleanEMT is Atlanta metro&apos;s 24/7 emergency commercial cleaning response company. Vetted crews, $2M general liability minimum, COI on demand within 1 hour.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">About</SectionLabel>
          <h1 className="display-caps mt-6 text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
            We arrive.
            <br />
            We handle it.
            <br />
            <span className="text-accent">We leave.</span>
          </h1>
        </div>
      </section>

      <section className="bg-bg-soft py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 lg:px-6 space-y-8 text-lg leading-relaxed text-ink/80">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/55 mb-3">
              The name
            </p>
            <p className="display text-3xl md:text-4xl tracking-tighter text-ink leading-[1.05]">
              EMT &mdash; <span className="text-accent">Emergency Mitigation Team</span>.
              Same standard as the EMTs you call when something happens to a
              person, applied to what happens in a building.
            </p>
            <p className="mt-5 text-ink/75">
              The name is deliberate. EMTs respond first, in the right gear, in
              the right time, no matter what they walk into. We do the same
              &mdash; for floods, biohazards, post-event chaos, surprise
              inspections, and the calls your nightly vendor missed.
            </p>
          </div>

          <p>
            CleanEMT is a commercial cleaning response company built for the
            moment when the recurring vendor can&rsquo;t help &mdash; the flood, the
            biohazard, the no-show, the post-event mess, the surprise inspection.
            We dispatch a vetted crew anywhere in {SERVICE_AREA} within four
            hours, any hour of any day, for any condition.
          </p>
          <p>
            We are not a marketplace. We are not an app. We are a real company
            with real crew leads who arrive in marked vehicles with the equipment
            and certifications the job requires. Crew members are
            background-checked, bonded, and trained for biohazard, post-construction,
            and outbreak-grade response. Our standard insurance carries $2M
            general liability and workers&rsquo; comp on every crew member; healthcare
            facilities are covered up to $5M on request.
          </p>
          <p>
            We earn the recurring contract by handling the emergency first. If
            we&rsquo;ve been in your building once, we know the floors, the access
            points, and the staff. If you decide to move your nightly scope to us
            after we&rsquo;ve helped, we&rsquo;ll quote it &mdash; usually 20&ndash;40% below the
            national franchise vendor you&rsquo;re paying now.
          </p>
        </div>
      </section>

      <section className="bg-bg text-ink-soft py-20 md:py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">Insurance & compliance</SectionLabel>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["$2M", "General liability · standard"],
              ["$5M", "Healthcare coverage available"],
              ["100%", "Workers&rsquo; comp · every crew member"],
              ["1 hr", "COI on demand to certificate holder"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="display text-5xl lg:text-6xl tracking-tighter">{v}</p>
                <p
                  className="mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/60 mt-3"
                  dangerouslySetInnerHTML={{ __html: l }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg text-ink-soft py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="display-caps text-5xl md:text-7xl tracking-tighter">
            Reach the dispatcher.
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
          <div className="mt-10">
            <Link
              href="/request"
              className="border border-ink-soft/40 hover:border-accent hover:text-accent text-ink-soft font-semibold uppercase tracking-wide text-sm px-6 py-3.5 inline-block"
            >
              Request a crew online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
