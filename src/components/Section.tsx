import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement>;

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20 md:py-28", className)} {...props}>
      {children}
    </section>
  );
}
