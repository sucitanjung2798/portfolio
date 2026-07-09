export type StatItemProps = {
  value: string;
  label: string;
};

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bold tracking-tight">{value}</span>

      <span className="mt-2 text-sm leading-6 text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
