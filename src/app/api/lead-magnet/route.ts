import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const source = String(body.source ?? "unknown");

  if (!email || !company) {
    return NextResponse.json(
      { error: "Email and company are required." },
      { status: 400 },
    );
  }

  // TODO: log to Supabase `leads` table; trigger Resend with the PDF attachment.
  console.log("[lead-magnet]", { email, company, source });

  return NextResponse.json({ ok: true });
}
