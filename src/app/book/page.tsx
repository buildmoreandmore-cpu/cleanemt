"use client";

import { useState } from "react";
import { calculateBookingPrice, formatCents } from "@/lib/pricing";

const timeSlots = Array.from({ length: 29 }, (_, i) => {
  const hour = Math.floor(i / 2) + 6;
  const min = i % 2 === 0 ? "00" : "30";
  const ampm = hour >= 12 ? "PM" : "AM";
  const h = hour > 12 ? hour - 12 : hour;
  return { value: `${String(hour).padStart(2, "0")}:${min}`, label: `${h}:${min} ${ampm}` };
});

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [workers, setWorkers] = useState(1);
  const [hours, setHours] = useState(4);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("09:00");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { total } = calculateBookingPrice(workers, hours);
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl font-bold mb-2">Book a Crew</h1>
      <p className="text-gray-500 mb-1">Step {step} of 4</p>
      <p className="text-sm text-gray-400 mb-8">Takes less than 2 minutes. No account required.</p>

      {/* Progress */}
      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-1.5 flex-1 rounded-full ${s <= step ? "bg-primary" : "bg-gray-200"}`}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Date</label>
            <input
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded-lg px-3 py-2.5 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Start Time</label>
            <select
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border rounded-lg px-3 py-2.5 text-sm"
            >
              {timeSlots.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Duration</label>
            <select
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full border rounded-lg px-3 py-2.5 text-sm"
            >
              <option value={2}>2 hours</option>
              <option value={4}>4 hours</option>
              <option value={6}>6 hours</option>
              <option value={8}>8 hours</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Workers</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setWorkers(Math.max(1, workers - 1))}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-lg"
              >
                -
              </button>
              <span className="font-mono text-xl w-8 text-center">{workers}</span>
              <button
                onClick={() => setWorkers(Math.min(10, workers + 1))}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-lg"
              >
                +
              </button>
            </div>
          </div>
          <div className="bg-secondary rounded-card p-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Total</span>
              <span className="font-heading text-2xl font-bold text-primary">{formatCents(total)}</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">No hidden fees. Price includes everything.</p>
          </div>
          <button
            onClick={() => date && setStep(2)}
            disabled={!date}
            className="w-full bg-primary hover:bg-primary-hover disabled:opacity-50 text-white font-semibold py-3 rounded-full transition-colors"
          >
            Next
          </button>
          <p className="text-xs text-gray-400 text-center">Questions? Call us at (555) 123-4567</p>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Street Address</label>
            <input type="text" placeholder="123 Main Street" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-semibold mb-1">City</label>
              <input type="text" placeholder="Atlanta" value={city} onChange={(e) => setCity(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">State</label>
              <input type="text" placeholder="GA" value={state} onChange={(e) => setState(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">ZIP</label>
              <input type="text" placeholder="30301" value={zip} onChange={(e) => setZip(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Special Instructions</label>
            <textarea placeholder="Building access, loading dock info, key areas to clean..." value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="flex-1 border border-gray-300 py-3 rounded-full font-semibold">Back</button>
            <button
              onClick={() => address && city && state && zip && setStep(3)}
              disabled={!address || !city || !state || !zip}
              className="flex-1 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white font-semibold py-3 rounded-full transition-colors"
            >
              Next
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center">Questions? Call us at (555) 123-4567</p>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Full Name</label>
            <input type="text" placeholder="Jane Smith" value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" placeholder="jane@email.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Phone</label>
            <input type="tel" placeholder="(555) 000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
          </div>
          <p className="text-xs text-gray-400">We&apos;ll only contact you about this booking.</p>
          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="flex-1 border border-gray-300 py-3 rounded-full font-semibold">Back</button>
            <button
              onClick={() => name && email && phone && setStep(4)}
              disabled={!name || !email || !phone}
              className="flex-1 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white font-semibold py-3 rounded-full transition-colors"
            >
              Next
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center">Questions? Call us at (555) 123-4567</p>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-5">
          <div className="bg-secondary rounded-card p-5 space-y-3 text-sm">
            <h3 className="font-heading font-bold text-lg mb-3">Order Summary</h3>
            <div className="flex justify-between"><span className="text-gray-600">Date</span><span>{date}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Time</span><span>{startTime}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Duration</span><span>{hours} hours</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Workers</span><span>{workers}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Location</span><span className="text-right">{address}, {city}, {state} {zip}</span></div>
            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span className="text-primary text-lg">{formatCents(total)}</span>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            You will be charged now. Workers are paid after job completion.
          </p>
          <div className="bg-white border rounded-card p-5">
            <p className="text-sm text-gray-500 text-center">Stripe payment integration — add your Stripe keys to enable</p>
          </div>
          <div className="flex justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              256-bit encryption
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Money-back guarantee
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              No hidden fees
            </span>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setStep(3)} className="flex-1 border border-gray-300 py-3 rounded-full font-semibold">Back</button>
            <button className="flex-1 bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-full transition-colors">
              Book &amp; Pay
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center">Questions? Call us at (555) 123-4567</p>
        </div>
      )}
    </div>
  );
}
