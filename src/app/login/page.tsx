"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="bg-bg-soft min-h-[80vh] py-16 md:py-24">
      <div className="max-w-sm mx-auto px-4 lg:px-6">
        <p className="mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
          Account
        </p>
        <h1 className="display text-4xl tracking-tighter mt-3 mb-8">Log in</h1>
        <form
          className="space-y-4 border border-ink/10 bg-white p-6"
          onSubmit={(e) => e.preventDefault()}
        >
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
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-ink/20 px-3 py-2.5 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-bg hover:bg-accent text-ink-soft font-semibold uppercase tracking-wide text-sm py-3 transition-colors"
          >
            Log in
          </button>
        </form>
        <p className="text-center text-sm text-ink/60 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-accent font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
