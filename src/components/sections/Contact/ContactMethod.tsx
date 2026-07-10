import { Mail, MapPin } from "lucide-react";

type Props = {
  title: string;
  value: string;
};

const icons = {
  Email: Mail,
  LinkedIn: Mail,
  GitHub: Mail,
  Location: MapPin,
};

export default function ContactMethod({ title, value }: Props) {
  const Icon = icons[title as keyof typeof icons];

  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 rounded-full border border-neutral-200 p-2">
        <Icon size={18} />
      </div>

      <div>
        <p className="font-semibold">{title}</p>

        <p className="mt-1 text-neutral-600">{value}</p>
      </div>
    </div>
  );
}
