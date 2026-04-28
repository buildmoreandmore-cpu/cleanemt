import SectionLabel from "@/components/ui/SectionLabel";
import LiveDot from "@/components/ui/LiveDot";

export default function WorkerDashboardPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-12 md:pt-28">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">Crew console</SectionLabel>
          <h1 className="display-caps mt-6 text-5xl md:text-7xl tracking-tighter">
            Your assignments.
          </h1>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 lg:px-6">
          <div className="border border-ink/10 bg-white p-10">
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50 flex items-center gap-2">
              <LiveDot small /> Application status · Pending review
            </p>
            <h2 className="display text-3xl md:text-4xl tracking-tighter mt-4">
              Welcome.
            </h2>
            <p className="text-ink/70 mt-3 max-w-xl">
              Once your background check clears, dispatchable jobs will appear
              here: address, category, ETA, crew lead phone. The Telegram bot
              also posts to your channel.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
