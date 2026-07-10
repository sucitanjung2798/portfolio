import Image from "next/image";
import { MapPin, BriefcaseBusiness, Globe } from "lucide-react";

import ProfileImage from "@/assets/profile-picture.jpg";
import { about } from "@/data/about";
import { workPrinciples } from "@/data/work";
import { techStack } from "@/data/tech-stack";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Label */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          About Me
        </p>

        {/* Top */}
        <div className="mt-6 grid gap-14 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="max-w-xl text-5xl font-bold leading-tight">
              {about.title}
            </h2>

            <p className="mt-8 max-w-xl leading-8 text-neutral-600">
              {about.description}
            </p>

            {/* Info */}
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />

                <span>{about.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <BriefcaseBusiness size={18} className="text-blue-600" />

                <span>{about.experience}</span>
              </div>

              <div className="flex items-center gap-2">
                <Globe size={18} className="text-blue-600" />

                <span>{about.availability}</span>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Tech Stack
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="overflow-hidden rounded-3xl border border-neutral-200">
              <Image
                src={ProfileImage}
                alt="Profile"
                className="aspect-square w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            How I Work
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {workPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-neutral-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon size={24} className="text-blue-600" />

                  <h3 className="mt-5 font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
