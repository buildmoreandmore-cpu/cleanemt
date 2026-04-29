import Link from "next/link";
import LiveDot from "@/components/ui/LiveDot";
import Wordmark from "@/components/ui/Wordmark";
import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  COI_EMAIL,
  HQ_ADDRESS,
} from "@/lib/contact";

const services = [
  { href: "/services#emergency", label: "Emergency same-day" },
  { href: "/services#biohazard", label: "Biohazard & trauma" },
  { href: "/services#post-construction", label: "Post-construction" },
  { href: "/services#post-event", label: "Post-event turnover" },
  { href: "/services#multifamily", label: "Multifamily turnover" },
  { href: "/services#flood", label: "Flood, water & sewage" },
  { href: "/services#vandalism", label: "Vandalism & graffiti" },
  { href: "/services#vendor-no-show", label: "Vendor no-show coverage" },
  { href: "/services#recurring", label: "Recurring commercial" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/facility-managers", label: "For facility managers" },
  { href: "/property-managers", label: "For property managers" },
  { href: "/crew", label: "Crew jobs" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="bg-bg text-ink-soft">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Wordmark size="md" />
            <LiveDot animate={false} />
          </div>
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-ink-soft/55 mb-4">
            Emergency Mitigation Team
          </p>
          <p className="text-ink-soft/70 text-sm max-w-xs leading-relaxed mb-6">
            Atlanta&apos;s 24/7 emergency commercial cleaning response.
            Crew on-site within 4 hours. Any condition, any hour.
          </p>
          <p className="mono text-[11px] uppercase tracking-widest text-ink-soft/50">
            {HQ_ADDRESS}
          </p>
          <p className="mono text-[11px] uppercase tracking-widest text-ink-soft/50 mt-1">
            GA business license · $2M GL · workers&apos; comp
          </p>
        </div>

        <div>
          <h4 className="mono text-[11px] uppercase tracking-widest text-ink-soft/50 mb-4">
            Services
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-soft/80">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-accent transition-colors">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mono text-[11px] uppercase tracking-widest text-ink-soft/50 mb-4">
            Company
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-soft/80 mb-6">
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-accent transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${CONTACT_PHONE.tel}`}
            className="mono text-2xl tracking-tight block hover:text-accent transition-colors"
          >
            {CONTACT_PHONE.display}
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-ink-soft/70 hover:text-accent transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="mono text-[11px] uppercase tracking-widest text-ink-soft/50">
            &copy; {new Date().getFullYear()} CleanEMT LLC
          </p>
          <a
            href={`mailto:${COI_EMAIL}`}
            className="mono text-[11px] uppercase tracking-widest text-ink-soft/60 hover:text-accent transition-colors"
          >
            Request COI
          </a>
          <p className="mono text-[11px] uppercase tracking-widest text-ink-soft/60 flex items-center gap-2">
            <LiveDot small /> Available now · 24/7
          </p>
        </div>
      </div>
    </footer>
  );
}
