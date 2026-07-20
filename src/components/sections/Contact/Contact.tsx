

import Container from "@/components/Container";
import Section from "@/components/Section";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="relative flex items-center overflow-hidden"
    >
      <Container>
        <ContactInfo />
      </Container>
    </Section>
  );
}
