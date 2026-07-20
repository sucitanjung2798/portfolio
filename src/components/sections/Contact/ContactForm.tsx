"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      toast.success("Message sent successfully!", {
        description: "Thank you! I'll get back to you as soon as possible.",
      });

      reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl border border-neutral-200 bg-white p-8 lg:p-10"
    >
      {/* Name & Email */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Your Name</label>

          <input
            {...register("name")}
            type="text"
            placeholder="Suci R. Tanjung"
            className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none transition focus:border-blue-500"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Your Email</label>

          <input
            {...register("email")}
            type="email"
            placeholder="suci@example.com"
            className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none transition focus:border-blue-500"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">Subject</label>

        <input
          {...register("subject")}
          type="text"
          placeholder="Frontend Development Project"
          className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none transition focus:border-blue-500"
        />

        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">Message</label>

        <textarea
          {...register("message")}
          rows={6}
          placeholder="Hi Suci! I'm looking for a Frontend Developer..."
          className="w-full resize-none rounded-xl border border-neutral-200 p-4 outline-none transition focus:border-blue-500"
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Button */}

      <button
        type="submit"
        disabled={loading}
        className="
          mt-6
          flex
          h-12
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-neutral-900
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-neutral-800
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
