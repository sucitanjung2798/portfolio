import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {
  title: string;
  value: string;
  href: string;
};

const icons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
};

export default function ContactMethod({ title, value, href }: Props) {
  const Icon = icons[title as keyof typeof icons];

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer flex items-start gap-4 group rounded-2xl border border-transparent p-4 transition-all duration-300 hover:bg-blue-200 hover:-translate-y-1 hover:bg-blue-50/40 hover:shadow-md"
    >
      <div className="mt-1 rounded-full border border-blue-500 p-3 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white">
        <Icon size={20} />
      </div>

      <div>
        <p className="font-semibold">{title}</p>

        <p className="mt-1 text-neutral-600 transition-colors group-hover:text-neutral-900">
          {value}
        </p>
      </div>
    </Link>
  );
}
