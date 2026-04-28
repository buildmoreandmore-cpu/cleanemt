import type { Metadata } from "next";
import RequestFlow from "@/components/request/RequestFlow";
import LiveDot from "@/components/ui/LiveDot";
import { CONTACT_PHONE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Request a crew — On-site within 4 hours",
  description:
    "Tell the dispatcher what happened, where, and when. Crew on-site within 4 hours, any condition, any hour. $400 trip charge captured at booking.",
};

export default function RequestPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-12 pb-6 md:pt-16">
        <div className="max-w-3xl mx-auto px-4 lg:px-6 flex items-center justify-between gap-4">
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-ink-soft/60 flex items-center gap-2">
            <LiveDot small /> Dispatch · 24/7
          </p>
          <a
            href={`tel:${CONTACT_PHONE.tel}`}
            className="mono text-base md:text-lg tracking-tight hover:text-accent transition-colors"
          >
            {CONTACT_PHONE.display}
          </a>
        </div>
      </section>

      <section className="bg-bg text-ink-soft pb-16">
        <div className="max-w-3xl mx-auto px-4 lg:px-6 pt-4">
          <h1 className="display-caps text-5xl md:text-7xl tracking-tighter leading-[0.92]">
            Request a crew.
          </h1>
          <p className="mt-4 text-ink-soft/70 max-w-xl">
            On the phone is faster &mdash; this form takes about 90 seconds.
            We dispatch as soon as you submit.
          </p>
        </div>
      </section>

      <section className="bg-bg-soft py-12 md:py-16 -mt-px">
        <div className="max-w-3xl mx-auto px-4 lg:px-6">
          <RequestFlow />
        </div>
      </section>
    </>
  );
}
