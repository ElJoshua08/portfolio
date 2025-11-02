"use client";

import { PageContent } from "@/components/page-content";
import { PageDecoration } from "@/components/page-decoration";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { sendEmailSchema, SendEmailSchema } from "@/src/schemas/email/send";
import { contactViaEmail } from "@/src/use-cases/contact-via-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactPage() {
  const form = useForm<SendEmailSchema>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const [cooldown, setCooldown] = useState(0);
  const isSubmitting = form.formState.isSubmitting;

  // cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const interval = setInterval(() => setCooldown((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [cooldown]);

  // Handlers
  async function handleSubmit(data: SendEmailSchema) {
    if (cooldown > 0) return; // block accidental resends

    const { error } = await contactViaEmail(data);

    if (error) {
      toast.error("Wooops, something went wrong.", {
        action: {
          label: "Copy email",
          onClick: () => {
            navigator.clipboard.writeText("devbyjoshua@gmail.com");
          },
        },
      });
      return;
    }

    toast.success("Message sent successfully!");
    form.reset();

    // Start a 30-second cooldown
    setCooldown(30);
  }

  return (
    <PageContent>
      {/* <PageDecoration numberOfElements={3} /> */}

      <div className="flex items-center justify-center h-full flex-col gap-y-6">
        <span className="text-2xl font-bold tracking-wider">
          Let&apos;s get in touch!
        </span>

        <Card className="md:min-w-xl bg-card">
          <CardContent>
            <Form {...form}>
              <div className="flex flex-col gap-y-10">
                <div className="flex gap-x-10 flex-wrap">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1 min-w-fit">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe :)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="What do you need?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hire">Hire Me</SelectItem>
                              <SelectItem value="collaborate">
                                Let&apos;s collaborate
                              </SelectItem>
                              <SelectItem value="feedback">
                                Any feedback?
                              </SelectItem>
                              <SelectItem value="consultation">
                                Need consultation?
                              </SelectItem>
                              <SelectItem value="other">
                                Other / General inquiry
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="ilovejohndoe@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="I like yu :D"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Form>
          </CardContent>

          {/* Footer */}
          <CardFooter className="flex justify-between items-center mt-4 border-t">
            <div className="text-muted-foreground text-sm fade-in-100">
              {cooldown > 0 && <>Wait {cooldown}s</>}
            </div>
            <Button
              className="min-w-[120px] flex items-center justify-center gap-2"
              onClick={form.handleSubmit(handleSubmit)}
              disabled={isSubmitting || cooldown > 0}
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Send <ChevronRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </PageContent>
  );
}
