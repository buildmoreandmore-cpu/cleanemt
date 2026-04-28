import Link from "next/link";
import LiveDot from "@/components/ui/LiveDot";
import SectionLabel from "@/components/ui/SectionLabel";
import DispatchTicker from "@/components/ui/DispatchTicker";
import Wordmark from "@/components/ui/Wordmark";
import { CONTACT_PHONE } from "@/lib/contact";

const services = [
  { num: "01", label: "Biohazard & trauma", desc: "Blood, bodily fluids, infectious response. OSHA-compliant. Discreet." },
  { num: "02", label: "Flood & water damage", desc: "Extraction, drying, antimicrobial. Crew on-site before the carpet sets." },
  { num: "03", label: "Post-construction", desc: "Rough, final, and white-glove. Walkthrough-ready by your deadline." },
  { num: "04", label: "Sewage & hazmat", desc: "Backups, septic failures, contamination. Containment-first protocols." },
  { num: "05", label: "Vandalism & graffiti", desc: "Same-day response so the storefront opens tomorrow." },
  { num: "06", label: "Post-event turnover", desc: "Venues, ballrooms, country clubs. Reset for the next booking." },
  { num: "07", label: "Vendor no-show coverage", desc: "Your nightly cleaner missed. We&rsquo;re already moving." },
  { num: "08", label: "Move-out & multifamily", desc: "Units, common areas, post-eviction. By morning, ready to lease." },
  { num: "09", label: "Mold, parvo, infectious", desc: "Vet hospitals, day cares, animal facilities. Full PPE, full protocol." },
];

const industries = [
  "Veterinary hospitals",
  "Multifamily property",
  "Auto dealerships",
  "Medical & dental",
  "Restaurants & food service",
  "Office & coworking",
  "Construction & GCs",
  "Retail & big-box",
  "Schools & day care",
  "Industrial & warehouse",
  "Country clubs & venues",
  "Government & nonprofit",
];

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-bg text-ink-soft min-h-[88vh] flex flex-col relative">
        <div className="max-w-7xl mx-auto w-full px-4 lg:px-6 pt-10 pb-6 flex items-start justify-between gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Wordmark size="md" />
              <LiveDot />
            </div>
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-ink-soft/55 mt-1">
              Emergency Mitigation Team
            </p>
          </div>
          <div className="text-right hidden md:block">
            <a
              href={`tel:${CONTACT_PHONE.tel}`}
              className="mono text-2xl lg:text-3xl tracking-tight hover:text-accent transition-colors block"
            >
              {CONTACT_PHONE.display}
            </a>
            <p className="mono text-[10px] uppercase tracking-[0.2em] text-ink-soft/50 mt-1 flex items-center gap-2 justify-end">
              <LiveDot small /> Available now · 24/7
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 lg:px-6 flex-1 flex flex-col justify-center pt-8 pb-16">
          <p className="reveal mono text-[11px] uppercase tracking-[0.25em] text-accent mb-6">
            <span className="inline-flex items-center gap-2">
              <LiveDot small /> Emergency Mitigation Team · Atlanta · 24/7
            </span>
          </p>
          <h1 className="reveal reveal-1 display-caps text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[8.4rem] xl:text-[10rem] leading-[0.92] max-w-[18ch]">
            Crew on-site
            <br />
            in 4 hours.
          </h1>
          <p className="reveal reveal-2 mt-6 text-xl md:text-2xl text-ink-soft/80 max-w-2xl">
            Atlanta&rsquo;s 24/7 emergency commercial cleaning response.
            Any condition. Any hour. Vetted. Insured.
          </p>

          <div className="reveal reveal-3 mt-10 flex flex-wrap gap-3 items-center">
            <a
              href={`tel:${CONTACT_PHONE.tel}`}
              className="bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wide text-sm px-6 py-3.5 inline-flex items-center gap-3"
            >
              <span>Call now</span>
              <span className="mono text-xs opacity-80">{CONTACT_PHONE.display}</span>
            </a>
            <Link
              href="/request"
              className="border border-ink-soft/40 hover:border-ink-soft text-ink-soft font-semibold uppercase tracking-wide text-sm px-6 py-3.5 inline-flex items-center gap-2"
            >
              Request a crew <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          <div className="reveal reveal-4 mt-10 flex flex-wrap gap-x-6 gap-y-2 mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/60">
            <span>4-hour guarantee</span>
            <span className="opacity-30">·</span>
            <span>$2M insured</span>
            <span className="opacity-30">·</span>
            <span>Bonded crew</span>
            <span className="opacity-30">·</span>
            <span>COI in 1 hour</span>
          </div>
        </div>

        <DispatchTicker />
      </section>

      {/* BRAND DEFINITION — what EMT means here */}
      <section className="bg-bg-soft border-b border-ink/10 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <Wordmark size="lg" />
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-ink/60 mt-2">
              Emergency Mitigation Team · for commercial spaces
            </p>
          </div>
          <p className="text-ink/75 text-base md:text-lg max-w-md leading-relaxed">
            EMTs respond first. With the right gear. In the right time. For
            commercial buildings, that&rsquo;s us.
          </p>
        </div>
      </section>

      {/* SECTION 2 — THE WEDGE */}
      <section className="bg-bg-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel number="01">The wedge</SectionLabel>
            <h2 className="display mt-6 text-5xl md:text-6xl lg:text-7xl text-ink leading-[0.95] tracking-tighter text-balance">
              Your nightly vendor doesn&rsquo;t answer at 9pm.
              <span className="text-accent"> We do.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-2 space-y-6 text-lg leading-relaxed text-ink/80 max-w-2xl">
            <p>
              Recurring janitorial vendors run on fixed routes. When something goes
              wrong outside their schedule &mdash; a flood, a biohazard, a no-show, an
              event mess, a surprise inspection tomorrow &mdash; they can&rsquo;t help you
              for 48 hours. We can be there in four.
            </p>
            <p>
              CleanEMT is built for the moment when &ldquo;we&rsquo;ll come tomorrow&rdquo; is
              not an answer. We dispatch a vetted crew anywhere in Atlanta metro
              within four hours, any hour of any day, for any condition.
            </p>
            <p>
              One emergency call. Once you&rsquo;ve worked with us, we handle the rest of
              the year too.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors pt-4"
            >
              See what we handle <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE HANDLE */}
      <section className="bg-bg text-ink-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <SectionLabel number="02" tone="dark">What we handle</SectionLabel>
              <h2 className="display mt-6 text-5xl md:text-6xl lg:text-7xl tracking-tighter">
                Conditions regular janitorial won&rsquo;t.
              </h2>
            </div>
            <Link
              href="/services"
              className="mono text-[12px] uppercase tracking-[0.2em] text-ink-soft/70 hover:text-accent transition-colors"
            >
              Full service catalog &rarr;
            </Link>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
            {services.map((s) => (
              <li
                key={s.num}
                className="group border-r border-b border-white/10 p-6 lg:p-8 hover:bg-white/[0.03] transition-colors"
              >
                <Link
                  href={`/services#${s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/g, "")}`}
                  className="block"
                >
                  <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/40 mb-6">
                    {s.num}
                  </p>
                  <h3 className="display text-2xl md:text-3xl tracking-tight mb-3">
                    {s.label}
                  </h3>
                  <p
                    className="text-sm text-ink-soft/60 max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-300 ease-out"
                    dangerouslySetInnerHTML={{ __html: s.desc }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 4 — INDUSTRIES */}
      <section className="bg-bg-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="03">Where we work</SectionLabel>
          <h2 className="display mt-6 text-5xl md:text-6xl lg:text-7xl tracking-tighter max-w-4xl text-balance">
            We work in every kind of building in Atlanta.
          </h2>

          <div className="mt-14 -mx-4 lg:-mx-6 overflow-hidden border-y border-ink/10">
            <div className="ticker-track flex whitespace-nowrap py-6">
              {[...industries, ...industries].map((label, i) => (
                <span
                  key={i}
                  className="display text-3xl md:text-5xl lg:text-6xl tracking-tighter px-8 text-ink/80"
                >
                  {label}
                  <span className="text-accent mx-6">&middot;</span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/industries"
              className="mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
            >
              See industry-specific protocols &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT WORKS */}
      <section className="bg-bg text-ink-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="04" tone="dark">How it works</SectionLabel>
          <h2 className="display mt-6 text-5xl md:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
            Three steps. No marketplace.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                num: "01",
                title: "Call or request.",
                body: "Tell us the address, what happened, when you need us.",
              },
              {
                num: "02",
                title: "We dispatch.",
                body: "Vetted crew lead en route within 30 minutes. On-site within 4 hours.",
              },
              {
                num: "03",
                title: "You sign off.",
                body: "Photo documentation before, during, after. Payment released after approval.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-bg p-8 lg:p-10">
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  {step.num}
                </p>
                <h3 className="display text-3xl lg:text-4xl tracking-tight mt-6">
                  {step.title}
                </h3>
                <p className="text-ink-soft/70 mt-4 text-base leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 mono text-[11px] uppercase tracking-[0.2em] text-ink-soft/60 text-balance max-w-2xl">
            No subscriptions. No commitments. Pay per job. Recurring available
            after the first response.
          </p>
        </div>
      </section>

      {/* SECTION 6 — PRICING HONESTY */}
      <section className="bg-bg-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="05">Pricing</SectionLabel>
          <h2 className="display mt-6 text-5xl md:text-6xl lg:text-7xl tracking-tighter max-w-4xl text-balance">
            We are not the cheapest.
            <br />
            We are the fastest.
          </h2>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Trip charge",
                value: "$400",
                meta: "Crew on-site within 4 hours.",
              },
              {
                label: "Per worker / hour",
                value: "$85–$125",
                meta: "Daylight standard rate.",
              },
              {
                label: "Specialty / after-hours",
                value: "1.5×–3×",
                meta: "Quoted on call.",
              },
            ].map((p) => (
              <div
                key={p.label}
                className="border border-ink/10 p-8 bg-white"
              >
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  {p.label}
                </p>
                <p className="display text-5xl lg:text-6xl tracking-tighter mt-6">
                  {p.value}
                </p>
                <p className="text-sm text-ink/70 mt-3">{p.meta}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-lg text-ink/80 leading-relaxed">
            If you need a $50 nightly tidy, we&rsquo;re not your company. If you need
            it handled today, by people who show up, you&rsquo;re in the right place.
          </p>

          <div className="mt-8">
            <Link
              href="/pricing"
              className="mono text-[12px] uppercase tracking-[0.2em] text-ink hover:text-accent transition-colors"
            >
              See full pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FOR FACILITY MANAGERS */}
      <section className="bg-bg text-ink-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <SectionLabel number="06" tone="dark">For facility managers</SectionLabel>
            <p className="display-caps mt-6 text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tighter text-balance">
              Your nightly
              <br />
              vendor missed.
              <br />
              <span className="text-accent">Again.</span>
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end space-y-8">
            <div className="space-y-6 text-lg text-ink-soft/80 leading-relaxed">
              <p>We are the backup that&rsquo;s already on your desk.</p>
              <p>We respond when your contracted vendor can&rsquo;t.</p>
              <p>We earn the recurring contract by handling the emergency first.</p>
            </div>
            <Link
              href="/facility-managers"
              className="border border-ink-soft/40 hover:border-accent hover:text-accent text-ink-soft font-semibold uppercase tracking-wide text-sm px-6 py-4 inline-flex items-center justify-between gap-3 self-start max-w-md w-full"
            >
              <span>Atlanta FM&rsquo;s emergency cleaning guide</span>
              <span aria-hidden>&darr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — TRUST & INSURANCE */}
      <section className="bg-bg-soft py-16 md:py-20 border-y border-ink/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "$2M", label: "General liability · standard" },
            { value: "$5M", label: "Healthcare coverage available" },
            { value: "100%", label: "Workers&rsquo; comp on every crew" },
            { value: "1 hr", label: "COI on demand" },
          ].map((t) => (
            <div key={t.label}>
              <p className="display text-5xl lg:text-6xl tracking-tighter">
                {t.value}
              </p>
              <p
                className="mono text-[11px] uppercase tracking-[0.2em] text-ink/60 mt-3"
                dangerouslySetInnerHTML={{ __html: t.label }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="bg-bg text-ink-soft py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
          <SectionLabel number="07" tone="dark">
            <span className="block text-center w-full">Dispatch</span>
          </SectionLabel>
          <h2 className="display-caps mt-8 text-6xl md:text-8xl lg:text-[9rem] xl:text-[11rem] leading-[0.9] tracking-tighter text-balance max-w-5xl mx-auto">
            Something happened.
            <br />
            <span className="text-accent">We&rsquo;re already moving.</span>
          </h2>

          <a
            href={`tel:${CONTACT_PHONE.tel}`}
            className="mono block text-5xl md:text-7xl lg:text-8xl tracking-tight mt-14 hover:text-accent transition-colors"
          >
            {CONTACT_PHONE.display}
          </a>
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-ink-soft/50 mt-4 flex items-center gap-2 justify-center">
            <LiveDot small /> Available now · 24/7
          </p>

          <div className="mt-12">
            <Link
              href="/request"
              className="mono text-[12px] uppercase tracking-[0.2em] text-ink-soft/70 hover:text-accent transition-colors border-b border-current pb-1"
            >
              Or request a crew online &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
