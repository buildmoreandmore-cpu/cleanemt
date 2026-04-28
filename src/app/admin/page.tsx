import SectionLabel from "@/components/ui/SectionLabel";

export default function AdminPage() {
  return (
    <>
      <section className="bg-bg text-ink-soft pt-20 pb-12 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <SectionLabel number="∎" tone="dark">Admin</SectionLabel>
          <h1 className="display-caps mt-6 text-4xl sm:text-5xl md:text-7xl tracking-tighter">
            Dispatch console.
          </h1>
        </div>
      </section>

      <section className="bg-bg-soft py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10 mb-10">
            {[
              { label: "Today", value: "$0" },
              { label: "This week", value: "$0" },
              { label: "This month", value: "$0" },
            ].map((s) => (
              <div key={s.label} className="bg-bg-soft p-6">
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  {s.label}
                </p>
                <p className="display text-4xl tracking-tighter mt-3">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="border border-ink/10 bg-white p-8">
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
              Connect Supabase
            </p>
            <p className="text-ink/70 mt-3">
              Wire `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
              then run `supabase/schema.sql` to populate dispatcher data here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
