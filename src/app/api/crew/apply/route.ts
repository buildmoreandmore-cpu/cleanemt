import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const phone = String(body.phone ?? "").trim();
  const email = String(body.email ?? "").trim();
  const name = String(body.name ?? "").trim();

  if (!phone || !email || !name) {
    return NextResponse.json(
      { error: "Name, phone, and email are required." },
      { status: 400 },
    );
  }

  // TODO: persist to Supabase `crew_applications`, notify ops via Resend/Telegram.
  console.log("[crew-application]", body);

  return NextResponse.json({ ok: true });
}
