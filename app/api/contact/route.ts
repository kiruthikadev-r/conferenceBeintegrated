export const dynamic = "force-dynamic";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// small helper to escape HTML to avoid injection in the email body
function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}


type Body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();

    // Basic validation
    const email = (body.email || "").trim();
    const subject = (body.subject || "").trim();
    const message = (body.message || "").trim();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Minimal sanitization/normalization
    const firstName = (body.firstName || "").trim();
    const lastName = (body.lastName || "").trim();
    const senderName =
      `${firstName || ""} ${lastName || ""}`.trim() || "Anonymous";

    const MAIL_USER = process.env.MAIL_USER;
    const MAIL_PASS = process.env.MAIL_PASS;

    if (!MAIL_USER || !MAIL_PASS) {
      console.error("MAIL_USER or MAIL_PASS missing in environment");
      return NextResponse.json(
        { success: false, error: "Mail not configured" },
        { status: 500 }
      );
    }

    // Create transporter (Gmail app-password recommended)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: MAIL_USER, pass: MAIL_PASS },
    });

    // Build email content (HTML + plain text)
    const timeSent = new Date().toISOString(); // or format as you prefer
    const escapedSubject = escapeHtml(subject);
    const escapedMessage = escapeHtml(message).replace(/\n/g, "<br/>");
    const escapedSender = escapeHtml(senderName);
    const escapedEmail = escapeHtml(email);

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color:#111; line-height:1.4;">
        <h2 style="margin:0 0 8px 0;">New contact request</h2>
        <p style="margin:0 0 12px 0; color:#555;">
          <strong>Subject:</strong> ${escapedSubject}<br/>
          <strong>Received:</strong> ${timeSent}
        </p>

        <section style="background:#f8f9fb; padding:12px; border-radius:8px; margin-bottom:16px;">
          <p style="margin:0;"><strong>From:</strong> ${escapedSender} &lt;${escapedEmail}&gt;</p>
        </section>

        <h3 style="margin:0 0 8px 0;">Message</h3>
        <div style="padding:12px; border-radius:6px; background:#fff; border:1px solid #eee;">
          <p style="margin:0;">${escapedMessage}</p>
        </div>

        <hr style="margin:18px 0; border:none; border-top:1px solid #eee;" />

        <small style="color:#777;">This message was sent from your website contact form.</small>
      </div>
    `;

    const text = `Subject: ${subject}
From: ${senderName} <${email}>
Sent: ${timeSent}

Message:
${message}
`;

    // Send mail
    await transporter.sendMail({
      from: `"MedGlobal Contact" <${MAIL_USER}>`, // friendly sender name
      to: "priyakiruthi21@gmail.com", // destination
      replyTo: email, // reply directly to user
      subject: `[Website Contact] ${subject}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
