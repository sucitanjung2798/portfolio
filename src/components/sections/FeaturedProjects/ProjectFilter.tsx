type ProjectFilterProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function ProjectFilter({
  categories,
  active,
  onChange,
}: ProjectFilterProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            active === category
              ? "bg-neutral-900 text-white"
              : "border border-neutral-200 hover:bg-neutral-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
