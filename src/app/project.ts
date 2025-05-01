export interface Project {
  id: string;
  name: string;
  image?: string;
  technologies: string[];
  description?: string;
  url?: string;
  sources?: string;
  stars?: number;
  archived?: boolean;
}
