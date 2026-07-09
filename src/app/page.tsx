import Container from "@/components/common/container";
import Section from "@/components/common/section";

export default function Home() {
  return (
    <main>
      <Section>
        <Container>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
            Frontend Engineer
          </p>

          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight">
            Building modern digital experiences that scale.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-8">
            Nearly 4 years of experience building enterprise applications using
            React.js, Next.js, TypeScript, and modern frontend technologies.
          </p>
        </Container>
      </Section>
    </main>
  );
}
