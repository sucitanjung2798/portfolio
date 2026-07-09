import { CheckCircle2 } from "lucide-react";

type ResponsibilitiesListProps = {
  items: string[];
};

export default function ResponsibilitiesList({
  items,
}: ResponsibilitiesListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <CheckCircle2 size={18} className="mt-1 shrink-0 text-green-600" />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
