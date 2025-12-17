import { z } from "zod";

export const sendEmailSchema = z.object({
  name: z.string().min(3, "Too smoll >:(").max(50, "Too long >:d"),
  email: z.email({ error: "Not an email :/" }),
  subject: z.string().min(1, "Choose a subject").max(30),
  message: z.string().min(3, "Too smoll >:(").max(500, "Too long >:d"),
});

export type SendEmailSchema = z.infer<typeof sendEmailSchema>;
