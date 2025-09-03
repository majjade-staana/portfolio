


type SubProject = {
  title: string;
  tech?: string[];
  link?: string | null;
  status?: string;
};

type Project = {
  title: string;
  description: string;
  image?: string | null;
  demo?: string | null;
  code?: string | null;
  tech?: string[];
  company?: string;
  type: string;
  projects?: SubProject[];
  highlight?: boolean
};

export type { SubProject, Project };