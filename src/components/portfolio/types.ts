// types.ts
export type ProjectCategory = 'فروشگاهی' | 'شرکتی' | 'SaaS' | 'لندینگ' | 'محصولی';

export type Filter = ProjectCategory | 'all' | null;

export interface ProjectLink {
  website?: string;
  github?: string;
  caseStudy?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  coverImage: string;
  previewImage: string;
  technologies: string[];
  services: string[];
  highlights: string[];
  links?: ProjectLink;
  // Future-proof field for additional gallery images
  gallery?: {
    id: string;
    src: string;
    alt?: string;
    caption?: string;
  }[];
}

export interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isActive?: boolean;
}

export interface DrawerProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export interface PortfolioFiltersProps {
  activeFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}

export interface ProjectGridProps {
  projects: Project[];
  activeProjectId?: string;
  onSelect: (project: Project) => void;
}