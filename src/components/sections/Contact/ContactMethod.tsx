import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeUp } from "./animate";

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
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer flex items-start gap-4 group rounded-2xl border border-transparent p-4 transition-all duration-300 hover:bg-blue-200 hover:-translate-y-1 hover:bg-blue-50/40 hover:shadow-md"
      >
        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.1,
          }}
          transition={{
            duration: 0.2,
          }}
          className="mt-1 rounded-full border border-blue-500 p-3 text-primary group-hover:bg-blue-500 group-hover:text-white"
        >
          <Icon size={20} />
        </motion.div>

        <div>
          <motion.p
            initial={{
              opacity: 0.8,
            }}
            whileHover={{
              x: 4,
            }}
            className="font-semibold"
          >
            {title}
          </motion.p>

          <p className="mt-1 text-neutral-600 transition-colors group-hover:text-neutral-900">
            {value}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
