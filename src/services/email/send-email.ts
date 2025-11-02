"use server";

import { transporter } from "@/src/services/email/utils";

export async function sendEmail(email: string, subject: string, body: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject,
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${body}</p>
      `,
    });
  } catch (error) {
    console.error(error);
  }
}
