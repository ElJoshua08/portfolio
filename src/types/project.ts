export type Project = {
  title: string;
  description: string;
  links: {
    github?: string;
    website?: string;
  };
  images: {
    thumbnails: {
      phone: string;
      tablet: string;
      desktop: string;
    };
  };
  tools: Tool[];
  projectDate: Date;
};

export type Tool = {
  name: string;
  description: string;
  url: string;
};
