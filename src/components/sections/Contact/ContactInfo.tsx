import ContactMethod from "./ContactMethod";
import { Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        Let's work together
      </p>

      <div className="grid gap-10 lg:grid-cols-3">
        <div>
          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Have a project in mind? I'd love to hear from you
          </h2>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2 lg:flex-row">
          <div className="flex-1">
            <a
              className="cursor-pointer flex items-start gap-4 group rounded-2xl border border-transparent p-4 transition-all duration-300 hover:bg-blue-200 hover:-translate-y-1 hover:bg-blue-50/40 hover:shadow-md"
              href="mailto:sucitanjung2798@gmail.com"
            >
              <div className="mt-1 rounded-full border border-blue-500 p-3 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white">
                <Mail size={20} />
              </div>

              <div>
                <p className="font-semibold">Email</p>

                <p className="mt-1 text-neutral-600 transition-colors group-hover:text-neutral-900">
                  sucitanjung2701@gmail.com
                </p>
              </div>
            </a>
          </div>

          <div className="flex-1">
            <ContactMethod
              title="LinkedIn"
              value="linkedin.com/in/sucitjg2701"
              href="https://www.linkedin.com/in/sucitjg2701"
            />
          </div>

          <div className="flex-1">
            <ContactMethod
              title="GitHub"
              value="github.com/sucitanjung2798"
              href="https://github.com/sucitanjung2798"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
