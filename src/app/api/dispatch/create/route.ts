import { NextResponse } from "next/server";

// Lightweight ID — collision-resistant enough for a per-day dispatch number.
function makeJobId() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SDS-${ymd}-${rand}`;
}

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const phone = String(body.phone ?? "").trim();
  const address = String(body.address ?? "").trim();
  const category = String(body.category ?? "").trim();

  if (!phone || !address || !category) {
    return NextResponse.json(
      { error: "Phone, address, and category are required." },
      { status: 400 },
    );
  }

  const jobId = makeJobId();

  // TODO (backend integration):
  //   1. Insert row into Supabase `bookings` (rename to `jobs` in UI).
  //   2. Stripe PaymentIntent: capture $400 trip charge immediately,
  //      authorize hourly portion with manual_capture.
  //   3. Resend: dispatch confirmation email.
  //   4. Telegram dispatch: post to crew-lead pool with category/urgency/address.

  return NextResponse.json({ jobId });
}
