import { ProjectChallenge } from "@/types/project";

type ChallengesListProps = {
  challenges: ProjectChallenge[];
};

export default function ChallengesList({ challenges }: ChallengesListProps) {
  return (
    <div className="space-y-6">
      {challenges.map((challenge) => (
        <article
          key={challenge.title}
          className="rounded-2xl border border-border p-6"
        >
          <h3 className="text-xl font-semibold">{challenge.title}</h3>

          <p className="mt-4 leading-7 text-muted-foreground">
            {challenge.solution}
          </p>
        </article>
      ))}
    </div>
  );
}
