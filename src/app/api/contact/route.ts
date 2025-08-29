import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY missing");
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const html = `
      <h2>New Contact Form</h2>
      <p><b>Name:</b> ${name || "-"}</p>
      <p><b>Company:</b> ${company || "-"}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Message:</b><br/>${String(message).replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from: process.env.FROM_EMAIL || "noreply@mail.wareact.com",
      to: process.env.TO_EMAIL || "support@wareact.com",
      subject: "📬 New message from WareAct website",
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
