export interface StatItemProps {
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  description: string;
  stats: StatItemProps[];
}
