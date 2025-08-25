import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, needs, message } = body;

  if (!name || !email || !phone || !needs || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // set in .env.local
        pass: process.env.MAIL_PASS, // set in .env.local (App Password)
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_USER, // your email
      subject: `New Contact Request - ${needs}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Needs: ${needs}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
