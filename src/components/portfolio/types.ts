// types.ts

export type ProjectCategory = 'فروشگاهی' | 'شرکتی' | 'SaaS' | 'لندینگ' | 'محصولی';
export type Filter = ProjectCategory | 'all' | null;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;
  previewImage?: string;
}

export interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}