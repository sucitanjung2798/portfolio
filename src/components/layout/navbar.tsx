import Link from "next/link";
import { navigation } from "@/constants/navigation";
import Container from "@/components/Container";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#EDF4FF]/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          SRT.
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
