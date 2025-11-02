"use server";

import { transporter } from "@/src/services/email/utils";

export async function sendEmail(email: string, subject: string, body: string) {
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASSWORD);

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email === "default" ? process.env.EMAIL_USER : email,
      subject,
      html: body,
    });
  } catch (error) {
    return { error: error || "Unknown error occurred" };
  }

  return {};
}
