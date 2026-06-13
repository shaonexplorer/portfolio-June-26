"use client";

import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { toast } from "sonner";

// ---------------------------------------------------------------
// Validation schema (zod) – defines required fields and formats.
// ---------------------------------------------------------------
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/**
 * ContactForm – a modern, animated contact section.
 *
 * Features:
 * • React Hook Form with Zod resolver for type‑safe validation.
 * • Shadcn UI components for consistent styling.
 * • Toast notifications on success / error.
 * • GSAP entry animation (fade‑in & slight upward movement).
 */
export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const formRef = useRef<HTMLDivElement>(null);

  // ---------------------------------------------------------------
  // GSAP animation – runs once when the component mounts.
  // ---------------------------------------------------------------
  useEffect(() => {
    if (formRef.current) {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });
    }
  }, []);

  // ---------------------------------------------------------------
  // Simulated submit – replace with real API call as needed.
  // ---------------------------------------------------------------
  const onSubmit = async (data: ContactFormValues) => {
    const baseApi = process.env.NEXT_PUBLIC_MAIL_API as string;
    try {
      // TODO: integrate with backend (e.g., /api/contact)
      const result = await fetch(baseApi, {
        method: "POST", // 👈 Must specify POST for sending data
        headers: {
          "Content-Type": "application/json", // 👈 Tells the backend you're sending JSON
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          text: data.message,
        }),
      });

      if (!result.ok) {
        throw new Error(`Server error: ${result.status}`);
      } else toast.success("Your message has been delivered successfully.");

      const responseData = await result.json();
      console.log({ responseData });
      reset();
    } catch (error) {
      toast.error("Error sending message");
    }
  };

  return (
    <section ref={formRef} className="flex-1">
      {/* <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Contact Me
      </h2> */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Name */}
          <div className="flex-1">
            <Input
              placeholder="Your name"
              {...register("name")}
              className={cn(
                "!min-h-[40px]",
                errors.name && "border-destructive",
              )}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex-1">
            <Input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className={cn(
                "!min-h-[40px]",
                errors.email && "border-destructive",
              )}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div>
          <Input
            placeholder="Subject"
            {...register("subject")}
            className={cn(
              "!min-h-[40px]",
              errors.subject && "border-destructive",
            )}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-destructive">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <Textarea
            placeholder="Your message…"
            rows={5}
            {...register("message")}
            className={cn(
              "resize-none min-h-[180px]",
              errors.message && "border-destructive",
            )}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-destructive">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </section>
  );
};
