"use client";

import { PageContent } from "@/components/page-content";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ProjectsPage() {
  const form = useForm<SendEmailSchema>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Handlers

  async function handleSubmit(data: SendEmailSchema) {
    console.log("Submitting form data:", data);
  }

  return (
    <PageContent showContent={showContent}>
      <div className="flex items-center justify-center h-full flex-col gap-y-6">
        <span className="text-2xl font-bold tracking-wider">
          Let&apos;s get in touch!
        </span>

        <Card className="min-w-xl">
          <CardContent>
            <Form {...form}>
              <div className="flex flex-col gap-y-10">
                <div className="flex gap-x-10">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
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
          <CardFooter className="flex justify-end mt-4 border-t">
            <Button
              className="min-w-[120px]"
              onClick={form.handleSubmit(handleSubmit)}
            >
              Send <ChevronRight />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </PageContent>
  );
}
