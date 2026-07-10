import Container from "@/components/Container";
import Section from "@/components/Section";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";



export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="grid gap-10 lg:grid-cols-5">

          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>

        </div>
      </Container>
    </Section>
  );
}