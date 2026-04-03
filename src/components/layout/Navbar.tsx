"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-xl font-bold text-navy">
          SameDayScrub
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/workers" className="text-sm text-gray-600 hover:text-navy">
            Join as Worker
          </Link>
          <Link href="/login" className="text-sm text-gray-600 hover:text-navy">
            Log In
          </Link>
          <Link
            href="/book"
            className="bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Book a Crew
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-3">
          <Link href="/workers" className="text-sm text-gray-600" onClick={() => setOpen(false)}>
            Join as Worker
          </Link>
          <Link href="/login" className="text-sm text-gray-600" onClick={() => setOpen(false)}>
            Log In
          </Link>
          <Link
            href="/book"
            className="bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Book a Crew
          </Link>
        </div>
      )}
    </nav>
  );
}
