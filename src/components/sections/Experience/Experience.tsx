import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          Experience
        </p>

        <h2 className="mt-4 text-5xl font-bold">My Professional Journey</h2>

        <p className="mt-6 max-w-2xl leading-8 text-neutral-600">
          Building enterprise applications and collaborating with
          cross-functional teams to deliver scalable and maintainable software.
        </p>

        <div className="mt-16 space-y-20">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.period}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
