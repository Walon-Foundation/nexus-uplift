import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "hello@nexusuplift.org";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "contact@nexusuplift.org";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, role } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Nexus Uplift Contact] ${subject}`,
      text: [
        `From: ${name} <${email}>`,
        `Role: ${role}`,
        `Subject: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact route]", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
