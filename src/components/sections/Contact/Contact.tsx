

import Container from "@/components/Container";
import Section from "@/components/Section";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <Section
      id="contact"
      className="mt-10 relative flex items-center overflow-hidden bg-[#EDF4FF]"
    >
      <Container>
        <ContactInfo />
      </Container>
    </Section>
  );
}
