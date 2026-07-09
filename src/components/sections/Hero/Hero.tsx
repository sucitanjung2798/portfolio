import Container from "@/components/Container";
import Section from "@/components/Section";
import StatItem from "@/components/ui/StatItem";

import { profile } from "@/data/profile";
import Button from "../../ui/Button";

export default function Hero() {
  return (
    <Section className="pt-28" id="hero">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary">
              {profile.role}
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              {profile.tagline}
            </h1>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">
              {profile.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="default" className="bg-foreground text-primary-foreground hover:bg-primary/90">
                View Projects
              </Button>

              <Button variant="outline" className="border-foreground text-foreground hover:bg-primary/10">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-1">
            {profile.stats.map((stat) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
