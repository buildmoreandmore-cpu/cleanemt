"use client";

import { useEffect, useState } from "react";
import LiveDot from "./LiveDot";

const SAMPLE = [
  "Crew dispatched · Buckhead office tower · 18 min ago",
  "On-site · Midtown veterinary hospital · biohazard response",
  "Crew assembling · Marietta multifamily turnover · 4 units",
  "Job complete · Decatur restaurant · post-event 02:14",
  "Crew dispatched · Sandy Springs medical office · vendor no-show",
  "On-site · Inman Park retail · graffiti & vandalism response",
  "Crew dispatched · Alpharetta auto dealership · post-construction",
  "Job complete · Old Fourth Ward warehouse · flood remediation",
  "Crew assembling · Brookhaven country club · post-event turnover",
  "Crew dispatched · Smyrna day care · sanitization response",
];

export default function DispatchTicker() {
  // Render-only; deterministic order avoids hydration mismatch.
  const [items, setItems] = useState(SAMPLE);

  useEffect(() => {
    // Light shuffle on mount so each session feels operational.
    const shuffled = [...SAMPLE].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, []);

  return (
    <div className="border-t border-white/10 bg-bg overflow-hidden">
      <div className="flex items-center">
        <div className="px-4 py-3 border-r border-white/10 flex items-center gap-2 shrink-0">
          <LiveDot small />
          <span className="mono text-[10px] uppercase tracking-widest text-ink-soft/60">
            Live dispatch
          </span>
        </div>
        <div className="overflow-hidden flex-1 no-scrollbar">
          <div className="ticker-track flex whitespace-nowrap">
            {[...items, ...items].map((line, i) => (
              <span
                key={i}
                className="mono text-[11px] uppercase tracking-widest text-ink-soft/70 px-6 py-3 border-r border-white/5"
              >
                {line}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
