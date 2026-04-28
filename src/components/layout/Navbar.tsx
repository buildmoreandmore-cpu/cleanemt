"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import LiveDot from "@/components/ui/LiveDot";
import Wordmark from "@/components/ui/Wordmark";

type Phone = { display: string; tel: string };

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/facility-managers", label: "Facility managers" },
  { href: "/property-managers", label: "Property managers" },
  { href: "/about", label: "About" },
];

export default function Navbar({ phone }: { phone: Phone }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "bg-bg/95 backdrop-blur border-b border-white/10"
          : "bg-bg border-b border-white/5"
      } text-ink-soft`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Wordmark size="sm" />
          <LiveDot />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-ink-soft/70 hover:text-ink-soft transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right: phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${phone.tel}`}
            className="mono text-sm tracking-tight hover:text-accent transition-colors"
          >
            {phone.display}
          </a>
          <Link
            href="/request"
            className="bg-accent hover:bg-accent/90 text-white text-[13px] font-semibold uppercase tracking-wide px-4 py-2 transition-colors"
          >
            Request crew
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="square" strokeWidth={1.5} d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="square" strokeWidth={1.5} d="M4 7h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-bg px-4 py-5 flex flex-col gap-4">
          <a
            href={`tel:${phone.tel}`}
            className="mono text-2xl tracking-tight"
            onClick={() => setOpen(false)}
          >
            {phone.display}
          </a>
          <p className="mono text-[10px] uppercase tracking-widest text-ink-soft/50 -mt-3 flex items-center gap-2">
            <LiveDot small /> Available now · 24/7
          </p>
          <div className="border-t border-white/10 my-2" />
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-soft/80"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/request"
            onClick={() => setOpen(false)}
            className="bg-accent text-white text-sm font-semibold uppercase tracking-wide px-4 py-3 text-center mt-2"
          >
            Request crew
          </Link>
        </div>
      )}
    </header>
  );
}
