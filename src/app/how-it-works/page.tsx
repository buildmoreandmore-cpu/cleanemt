import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import LiveDot from "@/components/ui/LiveDot";
import { CONTACT_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "How it works — Crew on-site in 4 hours",
  description:
    "Three steps. Call or request. We dispatch a vetted crew within 30 minutes, on-site within 4 hours. Photo documentation. Payment released after sign-off.",
};

const steps = [
  {
    num: "01",
    title: "Call or request a crew.",
    body:
      "Tell us the address, what happened, and how soon you need us. The dispatcher quotes the trip charge and an estimated worker count on the call.",
    detail:
      "Phone is fastest. The online form takes under 90 seconds and routes to the same dispatcher.",
  },
  {
    num: "02",
    title: "We dispatch within minutes.",
    body:
      "A vetted crew lead is en route within 30 minutes of confirmation, on-site within 4 hours. You receive their name, phone number, and estimated arrival window via SMS and email.",
    detail:
      "Crew leads carry COI, equipment, and any specialty supplies for your job category.",
  },
  {
    num: "03",
    title: "We handle it. You sign off.",
    body:
      "Photo documentation before, during, and after. The crew lead walks you (or your contact on-site) through the work. You sign off; payment is captured.",
    detail:
      "We use Stripe manual capture: the trip charge is captured at booking; the hourly portion is held and only captured after your sign-off.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-12 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">How it works</SectionLabel>
          <h1 className="display-caps mt-6 text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
            Three steps.
            <br />
            <span className="text-accent">No marketplace.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-ink-soft/80 leading-relaxed">
            We&rsquo;re a commercial cleaning company that picks up the phone. There is
            no app to download. There is no worker to choose. We dispatch.
          </p>
        </div>
      </section>

      <section className="bg-bg text-ink-soft pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <ol className="border-t border-white/10">
            {steps.map((s) => (
              <li
                key={s.num}
                className="border-b border-white/10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                <div className="lg:col-span-3">
                  <p className="mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    Step {s.num}
                  </p>
                </div>
                <div className="lg:col-span-9 space-y-6">
                  <h2 className="display text-4xl md:text-5xl lg:text-6xl tracking-tighter text-balance">
                    {s.title}
                  </h2>
                  <p className="text-lg text-ink-soft/80 leading-relaxed max-w-3xl">
                    {s.body}
                  </p>
                  <p className="text-sm text-ink-soft/60 leading-relaxed max-w-3xl">
                    {s.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bg-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎">After dispatch</SectionLabel>
          <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl tracking-tighter max-w-3xl">
            You see every move.
          </h2>

          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
            {[
              ["Confirmed", "Job ID issued, dispatcher on the line."],
              ["Crew assigned", "Crew lead name & phone delivered to you."],
              ["En route", "Live ETA from the crew lead&rsquo;s vehicle."],
              ["On-site", "Photo log starts; you receive a check-in SMS."],
              ["Job complete", "Photo log delivered with sign-off form."],
              ["Signed off", "Hourly portion captured; receipt issued."],
            ].map(([label, body]) => (
              <li key={label} className="bg-bg-soft p-6">
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50 flex items-center gap-2">
                  <LiveDot small /> {label}
                </p>
                <p
                  className="text-ink/80 mt-3"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg text-ink-soft py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="display-caps text-4xl sm:text-5xl md:text-7xl tracking-tighter">
            Ready when you are.
          </h2>
          <a
            href={`tel:${CONTACT_PHONE.tel}`}
            className="mono block text-3xl sm:text-4xl md:text-6xl tracking-tight mt-10 hover:text-accent transition-colors"
          >
            {CONTACT_PHONE.display}
          </a>
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
