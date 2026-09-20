export interface ServiceCardProps {
  name: string;
  slug: string;
  features?: string[];
  image?: string;
  intro?: { heading?: string; content?: string };
  className?: string;
  index?: number;
}