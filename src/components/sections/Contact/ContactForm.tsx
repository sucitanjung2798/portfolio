import { ArrowRight, Coffee, Mail } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-8 lg:p-10">
      <h3 className="text-2xl font-semibold">Send me a message</h3>

      {/* Name & Email */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Your Name</label>

          <input
            type="text"
            placeholder="Suci R. Tanjung"
            className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none transition focus:border-neutral-900"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Your Email</label>

          <input
            type="email"
            placeholder="suci@example.com"
            className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none transition focus:border-neutral-900"
          />
        </div>
      </div>

      {/* Subject */}

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">Subject</label>

        <input
          type="text"
          placeholder="Project Collaboration"
          className="h-12 w-full rounded-xl border border-neutral-200 px-4 outline-none transition focus:border-neutral-900"
        />
      </div>

      {/* Message */}

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium">Message</label>

        <textarea
          rows={6}
          placeholder="Tell me about your project or just say hi!"
          className="w-full resize-none rounded-xl border border-neutral-200 p-4 outline-none transition focus:border-neutral-900"
        />
      </div>

      {/* Button */}

      <button
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
          transition
          hover:bg-neutral-800
        "
      >
        Send Message
        <ArrowRight size={18} />
      </button>

      {/* Bottom */}

      <div className="mt-10 flex flex-col gap-6 border-t border-neutral-200 pt-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-semibold">Other ways to reach me</p>

          <p className="mt-1 text-sm text-neutral-500">
            Prefer a different way? Choose what works best.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://linkedin.com/in/sucitjg2701"
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-sm transition hover:bg-neutral-50"
          >
            <Mail size={18} />
            LinkedIn
          </a>

          <a
            href="mailto:sucitanjung2701@gmail.com"
            className="flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-sm transition hover:bg-neutral-50"
          >
            <Mail size={18} />
            Email
          </a>

          <button className="flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-sm transition hover:bg-neutral-50">
            <Coffee size={18} />
            Coffee Chat
          </button>
        </div>
      </div>
    </div>
  );
}
