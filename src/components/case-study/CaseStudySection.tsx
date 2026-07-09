type CaseStudySectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function CaseStudySection({
  title,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="border-t border-border py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>

      <div className="mt-6 max-w-none leading-8 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
