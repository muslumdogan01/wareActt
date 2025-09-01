import { NextResponse } from "next/server";
export const runtime = "nodejs";

const WEBHOOK_URL = process.env.GS_WEBHOOK!;

export async function POST(req: Request) {
  try {
    const { email, hp } = await req.json();
    if (!email || !/.+@.+\..+/.test(email))
      return NextResponse.json({ ok:false, error:"Invalid email" }, { status:400 });

    // Honeypot
    if (hp && String(hp).trim() !== "") return NextResponse.json({ ok:true });

    const body = new URLSearchParams({ email });
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    const data = await res.json().catch(() => ({}));
    if (res.ok && data.ok) return NextResponse.json({ ok:true });

    return NextResponse.json({ ok:false, error:"Webhook failed" }, { status:500 });
  } catch (e) {
    return NextResponse.json({ ok:false, error:"Server error" }, { status:500 });
  }
}
