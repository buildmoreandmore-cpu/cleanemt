"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-sm mx-auto px-4 py-20">
      <h1 className="font-heading text-2xl font-bold mb-6 text-center">Create Account</h1>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border rounded-lg px-3 py-2.5 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border rounded-lg px-3 py-2.5 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full border rounded-lg px-3 py-2.5 text-sm" />
        </div>
        <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-full transition-colors">
          Sign Up
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account? <Link href="/login" className="text-primary font-semibold">Log In</Link>
      </p>
    </div>
  );
}
