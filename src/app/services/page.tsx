import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { CONTACT_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Services — Emergency commercial cleaning Atlanta",
  description:
    "Biohazard, flood, post-construction, post-event, multifamily turnover, vandalism, vendor no-show coverage, and recurring commercial cleaning across Atlanta metro. Crew on-site within 4 hours.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg text-ink-soft pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">Service catalog</SectionLabel>
          <h1 className="display-caps mt-6 text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter max-w-5xl">
            What we
            <br />
            <span className="text-accent">handle.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl text-ink-soft/80 leading-relaxed">
            Every category below is a standing capability. Crew lead, equipment,
            and documentation chain ready before you finish the call.
          </p>

          <nav className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
            {SERVICE_CATEGORIES.map((c) => (
              <a
                key={c.slug}
                href={`#${c.slug}`}
                className="mono text-[12px] uppercase tracking-[0.18em] text-ink-soft/70 hover:text-accent transition-colors flex items-center gap-3 py-1"
              >
                <span className="text-ink-soft/40">{c.num}</span>
                <span>{c.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Categories */}
      <div className="bg-bg-soft">
        {SERVICE_CATEGORIES.map((c, i) => (
          <section
            key={c.slug}
            id={c.slug}
            className={`scroll-mt-20 border-t border-ink/10 ${
              i % 2 === 0 ? "bg-bg-soft" : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  {c.num}
                </p>
                <h2 className="display mt-4 text-4xl md:text-5xl lg:text-6xl tracking-tighter text-balance">
                  {c.title}
                </h2>
                <p className="mt-4 text-lg text-ink/70">{c.short}</p>
              </div>

              <div className="lg:col-span-7 lg:pt-2 space-y-5">
                {c.long.map((p) => (
                  <p
                    key={p.slice(0, 16)}
                    className="text-ink/80 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                ))}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 border-t border-ink/10 pt-6">
                  <div>
                    <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                      Response time
                    </p>
                    <p className="text-ink mt-2">{c.responseTime}</p>
                  </div>
                  <div>
                    <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                      Price range
                    </p>
                    <p className="text-ink mt-2">{c.priceRange}</p>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-3">
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

      {/* Final CTA */}
      <section className="bg-bg text-ink-soft py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 lg:px-6">
          <h2 className="display-caps text-5xl md:text-7xl tracking-tighter">
            Don&rsquo;t see your situation?
          </h2>
          <p className="mt-6 text-lg text-ink-soft/80 max-w-2xl mx-auto">
            Call. We dispatch first and quote on the line. If we can&rsquo;t handle it,
            we&rsquo;ll tell you who can.
          </p>
          <a
            href={`tel:${CONTACT_PHONE.tel}`}
            className="mono block text-4xl md:text-6xl tracking-tight mt-10 hover:text-accent transition-colors"
          >
            {CONTACT_PHONE.display}
          </a>
        </div>
      </section>
    </>
  );
}
