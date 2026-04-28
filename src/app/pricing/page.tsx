import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { CONTACT_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Pricing — Trip charge $400, $85–$125 per worker / hour",
  description:
    "Transparent pricing for emergency commercial cleaning in Atlanta. Trip charge $400. $85–$125 per worker per hour. After-hours and specialty surcharges quoted on call.",
};

const tiers = [
  {
    label: "Trip charge",
    price: "$400",
    desc: "Crew dispatched within 4 hours. Captured at booking.",
  },
  {
    label: "Per worker / hour",
    price: "$85–$125",
    desc: "Daylight standard rate. Authorized at booking, captured at sign-off.",
  },
  {
    label: "After-hours, weekend, holiday",
    price: "1.5×–2×",
    desc: "Multiplier on hourly rate. Trip charge unchanged.",
  },
  {
    label: "Specialty surcharges",
    price: "2×–3×",
    desc: "Biohazard, blood, sewage, post-construction, mold, hoarding. Quoted on call.",
  },
  {
    label: "Recurring contracts",
    price: "Custom",
    desc: "Generally 20–40% below national franchise vendors for equivalent scope.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">Pricing</SectionLabel>
          <h1 className="display-caps mt-6 text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
            We are not
            <br />
            the cheapest.
            <br />
            <span className="text-accent">We are the fastest.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-ink-soft/80 leading-relaxed">
            Most cleaning companies hide their numbers. We don&rsquo;t. Here&rsquo;s how
            emergency response is priced &mdash; before you call.
          </p>
        </div>
      </section>

      <section className="bg-bg-soft py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <ul className="border-t border-ink/10">
            {tiers.map((t) => (
              <li
                key={t.label}
                className="border-b border-ink/10 py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline"
              >
                <div className="md:col-span-4">
                  <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                    {t.label}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="display text-5xl md:text-6xl tracking-tighter">
                    {t.price}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-ink/70 leading-relaxed">{t.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bg text-ink-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <SectionLabel number="∎" tone="dark">How payment works</SectionLabel>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl tracking-tighter text-balance">
              Trip charged at booking. Hourly captured after sign-off.
            </h2>
          </div>
          <div className="lg:col-span-6 space-y-5 text-ink-soft/80 leading-relaxed text-lg">
            <p>
              The $400 trip charge is captured immediately on a card so the crew
              dispatches. The hourly portion is authorized but held &mdash; we don&rsquo;t
              capture it until you (or your on-site contact) sign off on the
              completed job.
            </p>
            <p>
              No subscriptions. No monthly minimums. No surprise auto-renewals.
              Stripe manual capture handles the hold; if the job runs short, the
              authorization is released.
            </p>
            <p>
              We invoice on PO and net-30 for facility managers, property managers,
              and government accounts on file.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-accent text-ink py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <p className="display-caps text-3xl md:text-5xl lg:text-6xl tracking-tighter text-balance max-w-5xl">
            If you need a $50 nightly tidy, we&rsquo;re not your company.
            <br />
            If you need it handled today, by people who show up, you&rsquo;re in the
            right place.
          </p>
        </div>
      </section>

      <section className="bg-bg text-ink-soft py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="display-caps text-4xl sm:text-5xl md:text-7xl tracking-tighter">
            Quote on the line.
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
