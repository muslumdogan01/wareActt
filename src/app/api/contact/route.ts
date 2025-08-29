import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const html = `
      <h2>New Contact Form</h2>
      <p><b>Name:</b> ${name || "-"}</p>
      <p><b>Company:</b> ${company || "-"}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await resend.emails.send({
      from: process.env.FROM_EMAIL!, // verified domain (örn: noreply@wareact.com)
      to: process.env.TO_EMAIL!,     // support@wareact.com
      subject: "📬 New Contact Form Submission",
      html,
      replyTo: email, // müşteri mailine direkt cevap verilebilsin diye
    });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
