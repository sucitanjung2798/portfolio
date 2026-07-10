type Experience = {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="relative border-l border-neutral-200 pl-8">
      <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-blue-600" />

      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">{experience.position}</h3>

          <p className="mt-1 text-neutral-600">{experience.company}</p>
        </div>

        <span className="text-sm text-neutral-500">{experience.period}</span>
      </div>

      <p className="mt-6 leading-8 text-neutral-600">
        {experience.description}
      </p>

      <ul className="mt-6 space-y-3">
        {experience.responsibilities.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />

            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap gap-3">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
