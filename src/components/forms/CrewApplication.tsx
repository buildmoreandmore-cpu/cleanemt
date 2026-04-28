"use client";

import { useState } from "react";

const ROLES = ["Crew member", "Crew lead"] as const;
const SHIFTS = [
  "Daytime weekdays",
  "Evenings",
  "Overnight",
  "Weekends",
  "All of the above",
];

export default function CrewApplication() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [role, setRole] = useState<(typeof ROLES)[number]>("Crew member");
  const [years, setYears] = useState("");
  const [transport, setTransport] = useState(false);
  const [shift, setShift] = useState(SHIFTS[0]);
  const [biohazardOk, setBiohazardOk] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/crew/apply", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          zip,
          role,
          years,
          transport,
          shift,
          biohazardOk,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Couldn&rsquo;t submit. Try again.");
      }
      setDone(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn&rsquo;t submit. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="border border-ink/15 bg-bg-soft p-6">
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-success">
          Received
        </p>
        <p className="display text-2xl tracking-tight mt-2">
          We&rsquo;ll be in touch in 1–2 business days.
        </p>
        <p className="text-sm text-ink/60 mt-2">
          Watch your phone &mdash; the call comes from a 404 number.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full name">
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
          />
        </Field>
        <Field label="Phone">
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
          />
        </Field>
      </div>
      <Field label="Email">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
        />
      </Field>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="ZIP">
          <input
            type="text"
            required
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
          />
        </Field>
        <Field label="Years experience">
          <input
            type="text"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
          />
        </Field>
      </div>
      <Field label="Role">
        <div className="grid grid-cols-2 gap-2">
          {ROLES.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`p-3 border text-sm uppercase tracking-wide transition-colors ${
                role === r
                  ? "border-accent bg-accent/5"
                  : "border-ink/20 hover:border-ink/40"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </Field>
      <Field label="Preferred shift">
        <select
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none bg-white"
        >
          {SHIFTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={transport}
          onChange={(e) => setTransport(e.target.checked)}
          className="mt-1 accent-accent"
        />
        <span className="text-sm text-ink/80">
          I have reliable transportation and can be on-site anywhere in
          metro Atlanta within 90 minutes.
        </span>
      </label>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={biohazardOk}
          onChange={(e) => setBiohazardOk(e.target.checked)}
          className="mt-1 accent-accent"
        />
        <span className="text-sm text-ink/80">
          I&rsquo;m comfortable with biohazard, post-construction, and emergency
          response work.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="bg-bg hover:bg-accent disabled:opacity-50 text-ink-soft font-semibold uppercase tracking-wide text-sm px-6 py-3 transition-colors"
      >
        {submitting ? "Submitting…" : "Submit application"}
      </button>

      {error && (
        <p
          className="mono text-[11px] uppercase tracking-[0.2em] text-accent"
          dangerouslySetInnerHTML={{ __html: error }}
        />
      )}
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mono text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-1.5 block">
        {label}
      </label>
      {children}
    </div>
  );
}
