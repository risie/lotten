// app/api/kontakt/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "../../../lib/schemas";

const appEmailClient = process.env.EMAIL_SENDING_CLIENT;
const appEmailClientPassword = process.env.EMAIL_SENDING_CLIENT_PASSWORD;
const adminEmail = process.env.EMAIL_RECIEVING_ORGANISATION;

export async function POST(req: NextRequest) {
  const formData = await req.json();

  // Server-side validation
  const validation = contactSchema.safeParse(formData);
  if (!validation.success) {
    return NextResponse.json(
      { message: "Invalid form data", errors: validation.error },
      { status: 400 },
    );
  }
  const { name, email, subject, message } = validation.data;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use any email service
    auth: {
      user: appEmailClient,
      pass: appEmailClientPassword,
    },
  });

  const mailOptions = {
    from: appEmailClient,
    to: adminEmail,
    replyTo: email, // Reply-to header
    subject: subject,
    text: `Namn: ${name}\nEmail: ${email}\n\nMeddelande:\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 },
    );
  }
}
