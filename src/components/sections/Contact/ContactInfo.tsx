import ContactMethod from "./ContactMethod";

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
            <ContactMethod title="Email" value="sucitanjung2701@gmail.com" />
          </div>

          <div className="flex-1">
            <ContactMethod
              title="LinkedIn"
              value="linkedin.com/in/sucitjg2701"
            />
          </div>

          <div className="flex-1">
            <ContactMethod title="GitHub" value="github.com/sucitanjung2798" />
          </div>
        </div>
      </div>
    </div>
  );
}
