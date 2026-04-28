import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { INDUSTRIES } from "@/lib/industries";
import { CONTACT_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Industries we serve — Atlanta emergency commercial cleaning",
  description:
    "Industry-specific response protocols, certifications, and typical jobs for veterinary, multifamily, healthcare, retail, construction, hospitality, and government facilities across Atlanta.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">Industries</SectionLabel>
          <h1 className="display-caps mt-6 text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
            We work in
            <br />
            <span className="text-accent">every kind</span>
            <br />
            of building.
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-ink-soft/80 leading-relaxed">
            Every facility has its own protocols, vetting requirements, and pace.
            Here&rsquo;s how we work in each.
          </p>

          <nav className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-6">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.slug}
                href={`#${ind.slug}`}
                className="mono text-[12px] uppercase tracking-[0.18em] text-ink-soft/70 hover:text-accent transition-colors flex items-center gap-3 py-1"
              >
                <span className="text-ink-soft/40">{ind.num}</span>
                <span>{ind.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="bg-bg-soft">
        {INDUSTRIES.map((ind, i) => (
          <section
            key={ind.slug}
            id={ind.slug}
            className={`scroll-mt-20 border-t border-ink/10 ${
              i % 2 === 0 ? "bg-bg-soft" : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-6 py-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  {ind.num}
                </p>
                <h2 className="display mt-4 text-4xl md:text-5xl lg:text-6xl tracking-tighter text-balance">
                  {ind.name}
                </h2>
                <p className="mt-4 text-lg text-ink/70">{ind.hook}</p>
              </div>

              <div className="lg:col-span-7 space-y-8 lg:pt-2">
                <div>
                  <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50 mb-2">
                    Certifications & training
                  </p>
                  <p className="text-ink/80 leading-relaxed">{ind.certifications}</p>
                </div>
                <div>
                  <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50 mb-2">
                    Response protocols
                  </p>
                  <p className="text-ink/80 leading-relaxed">{ind.protocols}</p>
                </div>
                <div>
                  <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50 mb-2">
                    Typical jobs
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-ink/80">
                    {ind.typicalJobs.map((j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-accent">∎</span>
                        <span>{j}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/request"
                    className="bg-bg hover:bg-accent text-ink-soft font-semibold uppercase tracking-wide text-sm px-5 py-3 transition-colors"
                  >
                    Request a crew
                  </Link>
                  <a
                    href={`tel:${CONTACT_PHONE.tel}`}
                    className="border border-ink/20 hover:border-accent hover:text-accent text-ink font-semibold uppercase tracking-wide text-sm px-5 py-3 transition-colors"
                  >
                    Call {CONTACT_PHONE.display}
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-bg text-ink-soft py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="display-caps text-4xl sm:text-5xl md:text-7xl tracking-tighter">
            Don&rsquo;t see yours?
          </h2>
          <p className="mt-6 text-lg text-ink-soft/80 max-w-2xl mx-auto">
            If it&rsquo;s a commercial building in Atlanta metro, we work in it.
            Call &mdash; we&rsquo;ll talk through your protocol on the line.
          </p>
          <a
            href={`tel:${CONTACT_PHONE.tel}`}
            className="mono block text-3xl sm:text-4xl md:text-6xl tracking-tight mt-10 hover:text-accent transition-colors"
          >
            {CONTACT_PHONE.display}
          </a>
        </div>
      </section>
    </>
  );
}
