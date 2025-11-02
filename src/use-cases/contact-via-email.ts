"use server";

import { ThanksEmail } from "@/components/email/thanks-email";
import { UserMessageEmail } from "@/components/email/user-message-email";
import { SendEmailSchema } from "@/src/schemas/email/send";
import { sendEmail } from "@/src/services/email/send-email";
import { render } from "@react-email/components";

export async function contactViaEmail(data: SendEmailSchema) {
  const userMessageEmail = await render(
    UserMessageEmail({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    })
  );

  const { error: ownSendError } = await sendEmail(
    "default",
    data.subject,
    userMessageEmail
  );

  if (ownSendError) {
    return { error: "Something went wrong when sending the email." };
  }

  const thanksEmail = await render(
    ThanksEmail({
      name: data.name,
    })
  );

  await sendEmail(data.email, "Thanks for reaching out!", thanksEmail);

  return {};
}
