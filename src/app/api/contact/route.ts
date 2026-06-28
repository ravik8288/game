import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, inquiryType } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactReceiver = process.env.CONTACT_RECEIVER || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn("SMTP environment variables are not configured. Logging mail to console instead.");
      console.log("=== CONTACT MAIL SUBMISSION ===");
      console.log(`From: ${name} <${email}>`);
      console.log(`Type: ${inquiryType}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message:\n${message}`);
      console.log("===============================");

      return NextResponse.json({
        success: true,
        message: "Mail received successfully (logged to server console since SMTP is unconfigured)."
      });
    }

    // Create standard SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // To pass SPF checks, send as the authenticated user
      replyTo: email, // Set Reply-To to the user's input email
      to: contactReceiver,
      subject: `[VancedGames Support] ${subject || "Contact Form Submission"}`,
      text: `
Name: ${name}
Email: ${email}
Inquiry Type: ${inquiryType || "General Support"}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="border-bottom: 2px solid #06b6d4; padding-bottom: 8px;">VancedGames Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Inquiry Type:</strong> ${inquiryType || "General Support"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <p style="margin: 0; font-weight: bold;">Message:</p>
            <p style="margin-top: 5px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Mail sent successfully!"
    });
  } catch (error: any) {
    console.error("Nodemailer sendMail failed:", error);
    return NextResponse.json(
      { error: "Failed to send email. Check SMTP logs on server." },
      { status: 500 }
    );
  }
}
