"use client";

import { useState } from "react";
import LiveDot from "@/components/ui/LiveDot";
import { CONTACT_PHONE } from "@/lib/contact";
import { SERVICE_CATEGORIES } from "@/lib/services";

type Urgency = "now" | "today" | "scheduled";

const URGENCY_OPTIONS: { value: Urgency; label: string; sub: string }[] = [
  { value: "now", label: "Now", sub: "4-hour response" },
  { value: "today", label: "Today, but flexible", sub: "within 12 hours" },
  { value: "scheduled", label: "Schedule for a specific time", sub: "custom window" },
];

const CLARIFIERS: Record<string, string> = {
  biohazard: "Approximate area and contamination type? (blood, OD, unattended death, infectious)",
  flood: "Water source and approximate square footage affected?",
  "post-construction": "Phase (rough / final / white-glove) and square footage?",
  "post-event": "Venue type, expected guest count, load-out time?",
  multifamily: "Number of units, post-eviction status, common areas affected?",
  vandalism: "Surfaces affected (glass, brick, signage) and PD report number if available?",
  "vendor-no-show": "Building type, square footage, and what was the vendor scope?",
  emergency: "What happened? Brief 1–2 line description.",
  recurring: "Building type and square footage. We&rsquo;ll quote a recurring scope after first response.",
};

export default function RequestFlow() {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [category, setCategory] = useState<string>("");
  const [clarifier, setClarifier] = useState("");
  const [urgency, setUrgency] = useState<Urgency>("now");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [address, setAddress] = useState("");
  const [accessNotes, setAccessNotes] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const today = new Date().toISOString().split("T")[0];
  const totalSteps = 6;
  const stepNum = jobId ? 6 : step;

  const selectedCategory = SERVICE_CATEGORIES.find((s) => s.slug === category);
  const clarifierPrompt = CLARIFIERS[category] || "";

  function next() {
    if (step < 5) setStep((step + 1) as typeof step);
  }
  function back() {
    if (step > 1) setStep((step - 1) as typeof step);
  }

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/dispatch/create", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          category,
          clarifier,
          urgency,
          scheduledDate: urgency === "scheduled" ? scheduledDate : null,
          scheduledTime: urgency === "scheduled" ? scheduledTime : null,
          address,
          accessNotes,
          name,
          company,
          phone,
          email,
        }),
      });
      const data = (await res.json()) as { jobId?: string; error?: string };
      if (!res.ok || !data.jobId) {
        throw new Error(data.error || "Dispatch failed. Call us instead.");
      }
      setJobId(data.jobId);
      setStep(6);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Dispatch failed. Call us instead.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white border border-ink/10">
      {/* Progress */}
      <div className="border-b border-ink/10 px-6 py-4 flex items-center justify-between">
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
          Step {stepNum} / {totalSteps}
        </p>
        <div className="flex gap-1">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <span
              key={i}
              className={`h-1 w-6 ${i < stepNum ? "bg-accent" : "bg-ink/10"}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8">
        {/* STEP 1 — What happened */}
        {step === 1 && (
          <div className="space-y-6">
            <Header
              num="01"
              title="What happened?"
              sub="Pick the closest match. We&rsquo;ll refine on the call."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICE_CATEGORIES.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setCategory(c.slug)}
                  className={`text-left p-4 border transition-colors ${
                    category === c.slug
                      ? "border-accent bg-accent/5"
                      : "border-ink/15 hover:border-ink/40"
                  }`}
                >
                  <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                    {c.num}
                  </p>
                  <p className="display text-xl tracking-tight mt-2">{c.title}</p>
                </button>
              ))}
              <button
                type="button"
                onClick={() => setCategory("emergency")}
                className={`text-left p-4 border transition-colors ${
                  category === "emergency" && !selectedCategory
                    ? "border-accent bg-accent/5"
                    : "border-ink/15 hover:border-ink/40"
                }`}
              >
                <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  ∎
                </p>
                <p className="display text-xl tracking-tight mt-2">
                  Other / not sure
                </p>
              </button>
            </div>

            {category && clarifierPrompt && (
              <div>
                <Label>Quick detail</Label>
                <textarea
                  rows={2}
                  value={clarifier}
                  onChange={(e) => setClarifier(e.target.value)}
                  placeholder={clarifierPrompt.replace(/&rsquo;/g, "'")}
                  className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
                />
              </div>
            )}

            <Footer
              onNext={next}
              nextDisabled={!category}
            />
          </div>
        )}

        {/* STEP 2 — When */}
        {step === 2 && (
          <div className="space-y-6">
            <Header num="02" title="When do you need us?" />
            <div className="space-y-2">
              {URGENCY_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setUrgency(opt.value)}
                  className={`w-full text-left p-5 border transition-colors flex items-center justify-between ${
                    urgency === opt.value
                      ? "border-accent bg-accent/5"
                      : "border-ink/15 hover:border-ink/40"
                  }`}
                >
                  <span>
                    <span className="display text-2xl tracking-tight block">
                      {opt.label}
                    </span>
                    <span className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                      {opt.sub}
                    </span>
                  </span>
                  <span
                    className={`w-4 h-4 border ${
                      urgency === opt.value
                        ? "border-accent bg-accent"
                        : "border-ink/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            {urgency === "scheduled" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label>Date</Label>
                  <input
                    type="date"
                    min={today}
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <Label>Time</Label>
                  <input
                    type="time"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                    className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
            )}

            <Footer
              onBack={back}
              onNext={next}
              nextDisabled={
                urgency === "scheduled" && (!scheduledDate || !scheduledTime)
              }
            />
          </div>
        )}

        {/* STEP 3 — Where */}
        {step === 3 && (
          <div className="space-y-6">
            <Header
              num="03"
              title="Where?"
              sub="Atlanta metro service area."
            />
            <div>
              <Label>Address</Label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Building name, street, city, ZIP"
                className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
                autoComplete="street-address"
              />
              <p className="mono text-[11px] uppercase tracking-widest text-ink/40 mt-2">
                Address autocomplete enabled with Google Places key.
              </p>
            </div>
            <div>
              <Label>Anything we should know?</Label>
              <textarea
                rows={3}
                value={accessNotes}
                onChange={(e) => setAccessNotes(e.target.value)}
                placeholder="Access codes, contact on-site, what to bring."
                className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
              />
            </div>
            <Footer
              onBack={back}
              onNext={next}
              nextDisabled={!address.trim()}
            />
          </div>
        )}

        {/* STEP 4 — Who */}
        {step === 4 && (
          <div className="space-y-6">
            <Header num="04" title="Who do we call?" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <Label>Name</Label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <Label>Company</Label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
                />
              </div>
            </div>
            <div>
              <Label required>Phone</Label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                placeholder="(404) 000-0000"
                className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <Label>Email</Label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
              />
            </div>
            <Footer
              onBack={back}
              onNext={next}
              nextDisabled={!phone.trim()}
            />
          </div>
        )}

        {/* STEP 5 — Confirm */}
        {step === 5 && (
          <div className="space-y-6">
            <Header
              num="05"
              title="Confirm and authorize."
              sub="$400 trip charge captured now. Hourly authorized, captured after sign-off."
            />
            <Summary
              category={selectedCategory?.title || category || "Other"}
              clarifier={clarifier}
              urgency={urgency}
              scheduledDate={scheduledDate}
              scheduledTime={scheduledTime}
              address={address}
              accessNotes={accessNotes}
              name={name}
              company={company}
              phone={phone}
              email={email}
            />

            <div className="border border-ink/15 p-5">
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50 mb-2">
                Charges
              </p>
              <div className="flex items-baseline justify-between">
                <span className="text-ink/80">Trip charge (now)</span>
                <span className="display text-2xl">$400</span>
              </div>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-ink/80">Hourly (authorized, captured at sign-off)</span>
                <span className="mono">$85–$125 / hr × workers</span>
              </div>
              <p className="text-xs text-ink/60 mt-3 leading-relaxed">
                We charge the $400 trip fee now. Hourly work is captured only
                after you sign off on the completed job. No subscriptions.
                No surprises.
              </p>
            </div>

            {error && (
              <p className="mono text-[11px] uppercase tracking-[0.2em] text-accent border border-accent/40 px-3 py-2">
                {error}
              </p>
            )}

            <Footer
              onBack={back}
              onSubmit={submit}
              submitting={submitting}
            />
          </div>
        )}

        {/* STEP 6 — Confirmation */}
        {step === 6 && jobId && (
          <DispatchConfirmation
            jobId={jobId}
            urgency={urgency}
            address={address}
            phone={phone}
          />
        )}
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function Header({
  num,
  title,
  sub,
}: {
  num: string;
  title: string;
  sub?: string;
}) {
  return (
    <div>
      <p className="mono text-[11px] uppercase tracking-[0.2em] text-accent">
        Step {num}
      </p>
      <h2 className="display text-3xl md:text-4xl tracking-tighter mt-2">
        {title}
      </h2>
      {sub && <p className="text-sm text-ink/60 mt-2">{sub}</p>}
    </div>
  );
}

function Label({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="mono text-[11px] uppercase tracking-[0.2em] text-ink/60 mb-1.5 block">
      {children}
      {required && <span className="text-accent ml-1">·</span>}
    </label>
  );
}

function Footer({
  onBack,
  onNext,
  onSubmit,
  nextDisabled,
  submitting,
}: {
  onBack?: () => void;
  onNext?: () => void;
  onSubmit?: () => void;
  nextDisabled?: boolean;
  submitting?: boolean;
}) {
  return (
    <div className="flex gap-3 pt-2">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="border border-ink/20 hover:border-ink text-ink font-semibold uppercase tracking-wide text-sm px-5 py-3"
        >
          Back
        </button>
      )}
      {onNext && (
        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
          className="flex-1 bg-bg hover:bg-accent disabled:opacity-40 disabled:hover:bg-bg text-ink-soft font-semibold uppercase tracking-wide text-sm px-5 py-3 transition-colors"
        >
          Continue
        </button>
      )}
      {onSubmit && (
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="flex-1 bg-accent hover:bg-accent/90 disabled:opacity-50 text-white font-semibold uppercase tracking-wide text-sm px-5 py-3 transition-colors"
        >
          {submitting ? "Dispatching…" : "Dispatch crew · $400"}
        </button>
      )}
    </div>
  );
}

function Summary(props: {
  category: string;
  clarifier: string;
  urgency: Urgency;
  scheduledDate: string;
  scheduledTime: string;
  address: string;
  accessNotes: string;
  name: string;
  company: string;
  phone: string;
  email: string;
}) {
  const urgencyLabel =
    props.urgency === "now"
      ? "Now · 4-hour response"
      : props.urgency === "today"
        ? "Today · within 12 hours"
        : `Scheduled · ${props.scheduledDate} ${props.scheduledTime}`;

  const rows: [string, string][] = [
    ["Category", props.category],
    ...(props.clarifier ? [["Detail", props.clarifier] as [string, string]] : []),
    ["When", urgencyLabel],
    ["Where", props.address],
    ...(props.accessNotes ? [["Access", props.accessNotes] as [string, string]] : []),
    ["Contact", `${props.name || "—"}${props.company ? ` · ${props.company}` : ""}`],
    ["Phone", props.phone],
    ...(props.email ? [["Email", props.email] as [string, string]] : []),
  ];

  return (
    <div className="border border-ink/10 divide-y divide-ink/10">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-12 gap-3 px-4 py-3">
          <p className="col-span-4 mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
            {k}
          </p>
          <p className="col-span-8 text-sm text-ink/85 break-words">{v || "—"}</p>
        </div>
      ))}
    </div>
  );
}

function DispatchConfirmation({
  jobId,
  urgency,
  address,
  phone,
}: {
  jobId: string;
  urgency: Urgency;
  address: string;
  phone: string;
}) {
  const eta =
    urgency === "now"
      ? "Within 4 hours"
      : urgency === "today"
        ? "Within 12 hours"
        : "Scheduled window";

  const timeline = [
    "Confirmed",
    "Crew assigned",
    "En route",
    "On-site",
    "Job complete",
    "Signed off",
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-accent flex items-center gap-2">
          <LiveDot small /> Dispatched
        </p>
        <h2 className="display-caps text-4xl md:text-5xl tracking-tighter mt-3">
          Crew on the way.
        </h2>
        <p className="mt-3 text-ink/70">
          Job <span className="mono">{jobId}</span> · ETA {eta}.
          We&rsquo;ve sent the timeline to {phone} via SMS and email.
        </p>
      </div>

      <div className="border border-ink/10 p-5">
        <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
          Crew lead
        </p>
        <p className="display text-2xl mt-2">Assigning…</p>
        <p className="text-sm text-ink/60 mt-1">
          Lead name and direct phone delivered as soon as dispatch picks them up.
        </p>
        <a
          href={`tel:${CONTACT_PHONE.tel}`}
          className="mono text-sm tracking-tight mt-4 inline-flex items-center gap-2 hover:text-accent transition-colors"
        >
          <span aria-hidden>↳</span> Call dispatcher · {CONTACT_PHONE.display}
        </a>
      </div>

      <ol className="border-t border-ink/10">
        {timeline.map((t, i) => (
          <li
            key={t}
            className="border-b border-ink/10 px-4 py-3 flex items-center gap-3"
          >
            <span
              className={`mono text-[11px] uppercase tracking-[0.2em] ${
                i === 0 ? "text-accent" : "text-ink/40"
              } w-8`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={i === 0 ? "text-ink" : "text-ink/60"}>{t}</span>
          </li>
        ))}
      </ol>

      <p className="mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
        Address · {address}
      </p>
    </div>
  );
}
