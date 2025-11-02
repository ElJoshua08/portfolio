"use server";

import { SendEmailSchema } from "@/src/schemas/email/send";
import { sendEmail } from "@/src/services/email/send-email";

export async function contactViaEmail(data: SendEmailSchema) {
  const { error: ownSendError } = await sendEmail(
    "default",
    data.subject,
    `Message from: ${data.name}, \n ${data.subject}`
  );

  if (ownSendError) {
    return { error: "Something went wrong when sending the email." };
  }

  await sendEmail(
    data.email,
    "Thanks for reaching out!",
    "Hey, I got your message, you will get a response as soon as possible, thanks for reacing out to me :)"
  );

  return {};
}
