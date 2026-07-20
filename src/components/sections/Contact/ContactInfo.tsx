"use client";

import { motion } from "framer-motion";
import ContactMethod from "./ContactMethod";
import { containerVariants, fadeRight, fadeUp } from "./animate";
import ContactForm from "./ContactForm";

export default function ContactInfo() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      <motion.p
        variants={fadeUp}
        className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600"
      >
        Let&apos;s Connect
      </motion.p>

      <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Left Content */}
        <div>
          <motion.h2
            variants={fadeUp}
            className="text-md leading-relaxed text-neutral-500"
          >
            If you ever want to grab a coffee or just want a quick chat, you can
            find me on social media or simply send me a message here!
          </motion.h2>

          <motion.div className="mt-8 flex flex-wrap items-center gap-8 justify-center">
            <ContactMethod
              title="Instagram"
              href="https://www.instagram.com/"
            />

            <ContactMethod
              title="LinkedIn"
              href="https://www.linkedin.com/in/sucitjg2701"
            />

            <ContactMethod
              title="GitHub"
              href="https://github.com/sucitanjung2798"
            />
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div variants={fadeRight} className="lg:col-span-2">
          <ContactForm />
        </motion.div>
      </div>
    </motion.div>
  );
}
