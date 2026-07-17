"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import Container from "@/components/Container";
import Section from "@/components/Section";

import { profile } from "@/data/profile";

import ProfilePicture from "@/assets/profile-picture4.png";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { container, fadeLeft, fadeRight } from "./animate";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const name = "Suci R. Tanjung";

  return (
    <Section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#EDF4FF] pt-20 md:pt-24"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-[120px]"
        />

        <div className="absolute top-20 left-16 h-24 w-24 bg-[radial-gradient(#BFD3FF_2px,transparent_2px)] [background-size:16px_16px]" />

        <div className="absolute bottom-16 right-20 h-24 w-24 bg-[radial-gradient(#BFD3FF_2px,transparent_2px)] [background-size:16px_16px]" />

        <svg
          className="absolute left-0 top-40 w-80 text-[#7DA8FF]"
          viewBox="0 0 400 220"
          fill="none"
        >
          <path
            d="M0 120C80 170 130 20 230 80C310 130 350 20 400 70"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        <svg
          className="absolute bottom-10 right-0 w-72 text-[#7DA8FF]"
          viewBox="0 0 300 200"
          fill="none"
        >
          <path
            d="M300 100C220 60 200 180 120 130C60 90 30 180 0 150"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <Container className="h-full flex flex-col">
        <div className="grid h-full items-center gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.span
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              {profile.role}
            </motion.span>

            <motion.h1
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="mt-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m
            </motion.h1>

            <h1 className="mt-2 text-4xl font-bold text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              <TypeAnimation
                sequence={[600, name, 2500]}
                speed={40}
                cursor={true}
                repeat={3}
              />
            </h1>

            <motion.p
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-xl text-lg leading-8 text-slate-600"
            >
              {profile.description}
            </motion.p>
          </motion.div>

          {/* Right */}
          <motion.section
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-[300px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[520px] xl:max-w-[620px]">
              {/* Blob + Image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 z-10 flex h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] -translate-x-1/2 -translate-y-1/2 items-end justify-center overflow-hidden rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-blue-200/50"
              >
                <Image
                  src={ProfilePicture}
                  alt="Profile"
                  priority
                  className="h-[240px] sm:h-[300px] md:h-[360px] lg:h-[430px] xl:h-[480px] w-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Left Dots */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-4 md:left-0 xl:left-4 top-20 z-30 grid grid-cols-4 gap-2 lg:gap-4"
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-blue-300"
                  />
                ))}
              </motion.div>

              {/* Right Dots */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-2 top-56 z-30 grid grid-cols-4 gap-2 lg:gap-4"
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-blue-300"
                  />
                ))}
              </motion.div>

              {/* Decorative Line */}
              <div className="absolute right-28 top-16 z-30 hidden xl:block md:hidden">
                <span className="mb-2 block h-10 w-1 rotate-30 rounded-full bg-blue-500" />
                <span className="mb-2 ml-6 block h-8 w-1 rotate-45 rounded-full bg-blue-500" />
                <span className="ml-10 block h-12 w-1 rotate-90 rounded-full bg-blue-500" />
              </div>

              {/* Curve */}
              <svg
                className="absolute bottom-28 left-0 z-30 hidden xl:block md:hidden"
                width="180"
                height="180"
                viewBox="0 0 180 180"
                fill="none"
              >
                <path
                  d="M0 170C50 130 90 120 120 150C140 170 160 150 160 120"
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>

              {/* Right Circle */}
              <div className="absolute bottom-36 right-8 z-30 hidden xl:block md:hidden">
                <div className="mb-4 h-8 w-8 rounded-full bg-blue-500" />
                <div className="ml-14 h-4 w-4 rounded-full bg-blue-400" />
              </div>
            </div>
          </motion.section>
        </div>
        <motion.a
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: showArrow ? 1 : 0,
            y: showArrow ? 0 : 20,
          }}
          transition={{
            delay: 1.3,
            duration: 0.5,
          }}
          href="#projects"
          className={`mb-4 self-center absolute bottom-[max(16px,env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-full border border-blue-100 bg-[#fff] p-3 shadow-lg transition-all duration-300 hover:-translate-x-1/2 hover:scale-110 hover:shadow-xl
    ${
      showArrow ? "animate-bounce opacity-100" : "pointer-events-none opacity-0"
    }
  `}
        >
          <ChevronDown size={28} strokeWidth={2.5} className="text-primary" />
        </motion.a>
      </Container>
    </Section>
  );
}
