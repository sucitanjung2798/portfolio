import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { fadeUp } from "./animate";

type Props = {
  title: string;
  href: string;
};

const icons = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Instagram: FaInstagram
};

export default function ContactMethod({ title, href }: Props) {
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
        className="w-fit cursor-pointer flex items-center gap-4 group"
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
      </Link>
    </motion.div>
  );
}
