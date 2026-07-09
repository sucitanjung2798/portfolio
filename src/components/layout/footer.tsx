import Container from "@/components/common/container";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:justify-between">
        <p>© 2026 Suci R. Tanjung</p>

        <p>Built with Next.js & Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
