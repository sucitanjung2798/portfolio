import Container from "@/components/common/container";
import Section from "@/components/common/section";
import SectionHeading from "@/components/common/section-heading";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <SectionHeading
            title="Building modern digital experiences."
            description="This is a temporary page to verify our design system."
          />
        </Container>
      </Section>
    </main>
  );
}
