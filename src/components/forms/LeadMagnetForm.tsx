"use client";

import { useState } from "react";

export default function LeadMagnetForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, company, source: "facility-managers" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Couldn&rsquo;t deliver. Email us instead.");
      }
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn&rsquo;t deliver. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="border border-ink/15 bg-white p-6">
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-success">
          Sent
        </p>
        <p className="display text-2xl tracking-tight mt-2">
          Check your inbox.
        </p>
        <p className="text-sm text-ink/60 mt-2">
          The guide is on its way to {email}. If it&rsquo;s not there in 5 minutes,
          check spam.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-ink/15 bg-white p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="mono text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-1.5 block">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="mono text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-1.5 block">
            Company
          </label>
          <input
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="bg-bg hover:bg-accent disabled:opacity-50 text-ink-soft font-semibold uppercase tracking-wide text-sm px-5 py-3 w-full sm:w-auto transition-colors"
      >
        {submitting ? "Sending…" : "Send me the guide"}
      </button>
      {error && (
        <p
          className="mono text-[11px] uppercase tracking-[0.2em] text-accent"
          dangerouslySetInnerHTML={{ __html: error }}
        />
      )}
      <p className="mono text-[10px] uppercase tracking-widest text-ink/40">
        We email the PDF and one follow-up note. No phone calls.
      </p>
    </form>
  );
}
