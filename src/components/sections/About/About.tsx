import Image from "next/image";
import { MapPin, BriefcaseBusiness, Globe } from "lucide-react";

import ProfileImage from "@/assets/about-image.png";
import { about } from "@/data/about";
import { techStack } from "@/data/tech-stack";
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section
      id="about"
      className="relative overflow-hidden bg-[#EDF4FF] py-20 lg:min-h-[100svh] lg:flex lg:items-center"
    >
      <Container>
        <div>
          {/* Section Label */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            About Me
          </p>

          {/* Top */}
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left */}
            <div className="order-2 lg:order-1">
              <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {about.title}
              </h2>

              <p className="mt-8 max-w-xl text-base leading-7 text-neutral-600">
                {about.description}
              </p>

              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600">
                I enjoy building clean, responsive, and user-friendly
                interfaces. I'm passionate about writing maintainable code and
                continuously learning new technologies.
              </p>

              {/* Info */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <MapPin size={18} className="text-blue-600" />

                  <span>{about.location}</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <BriefcaseBusiness size={18} className="text-blue-600" />

                  <span>{about.experience}</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <Globe size={18} className="text-blue-600" />

                  <span>{about.availability}</span>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Tech Stack
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {techStack.map((tech) => {
                    const Icon = tech.icon;

                    return (
                      <span
                        key={tech.name}
                        className="flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                      >
                        <Icon className="text-lg" />
                        <span>{tech.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative flex items-center justify-center order-1 lg:order-2">
              <div className="relative h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] lg:h-[500px] lg:w-[500px]">
                {/* Background Blob */}
                <div className="absolute inset-0 rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-[#EDF4FF]" />

                {/* Blur */}
                <div className="absolute left-10 top-10 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72 rounded-full bg-blue-200/40 blur-3xl" />

                {/* Dots */}
                <div className="absolute md:-left-8 left-0 md:top-12 top-2 z-20 grid grid-cols-4 gap-3">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-2 w-2 rounded-full bg-blue-300"
                    />
                  ))}
                </div>

                {/* Decorative Line */}
                <div className="absolute right-8 top-6 z-20 hidden md:block">
                  <span className="mb-2 block h-10 w-1 rotate-12 rounded-full bg-blue-500" />
                  <span className="mb-2 ml-4 block h-8 w-1 -rotate-120 rounded-full bg-blue-500" />
                  <span className="ml-8 block h-12 w-1 rotate-90 rounded-full bg-blue-500" />
                </div>

                {/* Circle */}
                <div className="absolute md:bottom-12 bottom-0 md:right-4 right-2 z-20">
                  <div className="mb-3 h-8 w-8 rounded-full bg-blue-500" />
                  <div className="ml-10 h-4 w-4 rounded-full bg-blue-300" />
                </div>

                {/* Curve */}
                <svg
                  className="absolute bottom-8 left-0 z-20 hidden md:block"
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

                {/* Image */}
                <div className="absolute inset-4 sm:inset-5 lg:inset-6 z-10 overflow-hidden rounded-[45%_55%_60%_40%/50%_40%_60%_50%] shadow-2xl">
                  <Image
                    src={ProfileImage}
                    alt="Profile"
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
