import Image from "next/image";

import Container from "@/components/Container";
import Section from "@/components/Section";

import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

import ProfilePicture from "@/assets/profile-picture2.png";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative overflow-hidden bg-[#EDF4FF] pt-28"
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
          className="absolute bottom-8 right-0 w-72 text-[#7DA8FF]"
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

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {profile.role}
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900 md:text-7xl">
              Hi, I'm
            </h1>
            <h1 className="mt-6 text-5xl font-bold text-red-500 md:text-7xl">
              Suci Tanjung
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              {profile.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                View Projects
              </Button>

          
            </div>

            {/* Tech Stack */}
            <div className="mt-14 flex flex-wrap gap-3">
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
            </div>
          </div>


          {/* Right */}
          <section className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[620px]">

              {/* Blob + Image */}
              <div className="absolute left-1/2 top-1/2 z-10 flex h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 items-end justify-center overflow-hidden rounded-[45%_55%_60%_40%/50%_40%_60%_50%] bg-blue-200/50">

                <Image
                  src={ProfilePicture}
                  alt="Profile"
                  priority
                  className="h-[480px] w-auto object-contain"
                />

              </div>

              {/* Left Dots */}
              <div className="absolute left-4 top-20 z-30 grid grid-cols-4 gap-4">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2 w-2 rounded-full bg-blue-300"
                  />
                ))}
              </div>

              {/* Right Dots */}
              <div className="absolute right-2 top-56 z-30 grid grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-2 w-2 rounded-full bg-blue-300"
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
                className="absolute bottom-30 left-0 z-30"
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
      </Container>
    </Section>
  );
}