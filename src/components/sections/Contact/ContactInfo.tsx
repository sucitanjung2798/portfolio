import ContactMethod from "./ContactMethod";

export default function ContactInfo() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        Contact
      </p>

      <h2 className="mt-4 text-5xl font-bold leading-tight">
        Let's build something amazing together.
      </h2>

      <p className="mt-6 max-w-md text-neutral-600 leading-8">
        I'm always open to discussing new opportunities, interesting projects,
        or just having a chat about technology.
      </p>

      <div className="mt-16 space-y-8">
        <ContactMethod title="Email" value="sucitanjung2701@gmail.com" />

        <ContactMethod title="LinkedIn" value="linkedin.com/in/sucitjg2701" />

        <ContactMethod title="GitHub" value="github.com/sucitanjung2798" />

        <ContactMethod title="Location" value="Medan, Indonesia" />
      </div>
    </div>
  );
}
