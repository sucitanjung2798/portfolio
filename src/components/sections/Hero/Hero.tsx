"use client";

import Image from "next/image";

import Container from "@/components/Container";
import Section from "@/components/Section";

import { profile } from "@/data/profile";

import ProfilePicture from "@/assets/profile-picture4.png";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

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

  return (
    <Section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#EDF4FF] pt-24"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-200/20 blur-[120px]" />

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
        <div className="grid h-full items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {profile.role}
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-7xl">
              Hi, I'm
            </h1>

            <h1 className="mt-6 text-5xl font-bold md:text-7xl text-primary">
              Suci Tanjung
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              {profile.description}
            </p>

            {/* <div className="mt-6">
              <Button className="rounded-md flex items-center gap-2">
                <div>View Projects</div>
                <div>
                  <LucideMoveRight />
                </div>
              </Button>
            </div> */}

            {/* <div className="mt-14 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "React Query",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div> */}
          </div>

          {/* Right */}
          <section className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[580px] xl:max-w-[620px]">
              {/* Blob + Image */}
              <div className="absolute left-1/2 top-1/2 z-10 flex h-[380px] w-[380px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] -translate-x-1/2 -translate-y-1/2 items-end justify-center overflow-hidden rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-blue-200/50">
                <Image
                  src={ProfilePicture}
                  alt="Profile"
                  priority
                  className="h-[360px] lg:h-[430px] xl:h-[480px] w-auto object-contain"
                />
              </div>

              {/* Left Dots */}
              <div className="absolute left-4 top-20 z-30 grid grid-cols-4 gap-2 lg:gap-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-blue-300"
                  />
                ))}
              </div>

              {/* Right Dots */}
              <div className="absolute right-2 top-56 z-30 grid grid-cols-4 gap-2 lg:gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-blue-300"
                  />
                ))}
              </div>

              {/* Decorative Line */}
              <div className="absolute right-28 top-16 z-30">
                <span className="mb-2 block h-10 w-1 rotate-30 rounded-full bg-blue-500" />
                <span className="mb-2 ml-6 block h-8 w-1 rotate-45 rounded-full bg-blue-500" />
                <span className="ml-10 block h-12 w-1 rotate-90 rounded-full bg-blue-500" />
              </div>

              {/* Curve */}
              <svg
                className="absolute bottom-28 left-0 z-30"
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
              <div className="absolute bottom-36 right-8 z-30">
                <div className="mb-4 h-8 w-8 rounded-full bg-blue-500" />
                <div className="ml-14 h-4 w-4 rounded-full bg-blue-400" />
              </div>
            </div>
          </section>
        </div>
        <a
          href="#projects"
          className={`mb-4 self-center absolute bottom-[max(16px,env(safe-area-inset-bottom))] left-1/2 z-50 -translate-x-1/2 rounded-full border border-blue-100 bg-[#fff] p-3 shadow-lg transition-all duration-300 hover:-translate-x-1/2 hover:scale-110 hover:shadow-xl
    ${
      showArrow ? "animate-bounce opacity-100" : "pointer-events-none opacity-0"
    }
  `}
        >
          <ChevronDown size={28} strokeWidth={2.5} className="text-primary" />
        </a>
      </Container>
    </Section>
  );
}