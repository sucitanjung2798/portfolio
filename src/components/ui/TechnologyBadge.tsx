type TechnologyBadgeProps = {
  label: string;
};

export default function TechnologyBadge({ label }: TechnologyBadgeProps) {
  return (
    <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100">
      {label}
    </span>
  );
}
