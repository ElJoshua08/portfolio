import { ComponentType, SVGProps } from "react";

export type Project = {
  title: string;
  description: string;
  links: {
    github?: string;
    website?: string;
  };
  images: {
    dark: {
      thumbnails: {
        phone: string;
        tablet: string;
        desktop: string;
      };
    };
    light: {
      thumbnails: {
        phone: string;
        tablet: string;
        desktop: string;
      };
    };
  };
  tools: Tool[];
  projectDate: Date;
};

export type Tool = {
  name: string;
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};
