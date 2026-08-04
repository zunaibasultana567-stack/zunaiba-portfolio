// Project showcase content.
//
// EDIT ME: swap these placeholder entries for your real projects.
// Each `media` entry is a path into /public — drop real screenshots into
// public/images/projects/ (or real clips into public/videos/projects/)
// and update the `src` paths below. No other code needs to change.

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  liveUrl: string;
  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Placeholder Project One",
    description:
      "Short one-liner describing the project, the problem it solved, and the result.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    media: [
      {
        type: "image",
        src: "/images/projects/project-1-cover.svg",
        alt: "Placeholder Project One cover image",
      },
      {
        type: "image",
        src: "/images/projects/project-1-detail.svg",
        alt: "Placeholder Project One detail view",
      },
      // To add a video slide, drop the file in public/videos/projects/
      // and uncomment the entry below:
      // { type: "video", src: "/videos/projects/project-1-demo.mp4", alt: "Placeholder Project One demo" },
    ],
  },
  {
    id: "project-two",
    title: "Placeholder Project Two",
    description:
      "Short one-liner describing the project, the problem it solved, and the result.",
    tools: ["React", "Framer", "AI Agents"],
    liveUrl: "https://example.com",
    media: [
      {
        type: "image",
        src: "/images/projects/project-2-cover.svg",
        alt: "Placeholder Project Two cover image",
      },
      {
        type: "image",
        src: "/images/projects/project-2-detail.svg",
        alt: "Placeholder Project Two detail view",
      },
    ],
  },
  {
    id: "project-three",
    title: "Placeholder Project Three",
    description:
      "Short one-liner describing the project, the problem it solved, and the result.",
    tools: ["Automation", "No-code", "Branding"],
    liveUrl: "https://example.com",
    media: [
      {
        type: "image",
        src: "/images/projects/project-3-cover.svg",
        alt: "Placeholder Project Three cover image",
      },
      {
        type: "image",
        src: "/images/projects/project-3-detail.svg",
        alt: "Placeholder Project Three detail view",
      },
    ],
  },
];
