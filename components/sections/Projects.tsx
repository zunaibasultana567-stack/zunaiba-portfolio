import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCarousel from "@/components/ui/ProjectCarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 bg-bg-light px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal as="h2" id="projects-heading" className="text-3xl font-bold sm:text-5xl">
          Selected work
        </ScrollReveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.id}
              delay={i * 100}
              className="group rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-2xl transition-shadow duration-300 group-hover:shadow-xl">
                <ProjectCarousel media={project.media} title={project.title} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-text-dark">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">{project.description}</p>

              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full bg-text-dark/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-text-dark/70"
                  >
                    {tool}
                  </li>
                ))}
              </ul>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-link-accent hover:underline"
              >
                View live
                <ExternalLink size={14} />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
