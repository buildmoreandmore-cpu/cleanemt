import Link from "next/link";

type Phone = { display: string; tel: string };

export default function StickyDispatchBar({ phone }: { phone: Phone }) {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-bg/95 backdrop-blur border-t border-white/10 px-3 py-2.5 flex items-center gap-2"
      aria-label="Dispatch quick actions"
    >
      <a
        href={`tel:${phone.tel}`}
        className="flex-1 bg-accent text-white font-semibold uppercase tracking-wide text-[13px] py-3 text-center"
      >
        Call now
      </a>
      <Link
        href="/request"
        className="flex-1 border border-ink-soft/40 text-ink-soft font-semibold uppercase tracking-wide text-[13px] py-3 text-center"
      >
        Request crew
      </Link>
    </div>
  );
}
