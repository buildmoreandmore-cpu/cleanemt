import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import LiveDot from "@/components/ui/LiveDot";

export default function DashboardPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-12 md:pt-28">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">My dispatches</SectionLabel>
          <h1 className="display-caps mt-6 text-5xl md:text-7xl tracking-tighter">
            Your jobs.
          </h1>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="border border-ink/10 bg-white p-10 text-center">
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50 flex items-center gap-2 justify-center">
              <LiveDot small /> No jobs on file
            </p>
            <h2 className="display text-3xl md:text-4xl tracking-tighter mt-4">
              You haven&rsquo;t requested a crew yet.
            </h2>
            <p className="text-ink/70 max-w-md mx-auto mt-3">
              When you dispatch your first crew, the timeline shows up here:
              confirmed, en route, on-site, signed off.
            </p>
            <Link
              href="/request"
              className="inline-block bg-bg hover:bg-accent text-ink-soft font-semibold uppercase tracking-wide text-sm px-6 py-3 mt-8 transition-colors"
            >
              Request a crew
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
