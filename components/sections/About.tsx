"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Marquee from "@/components/ui/Marquee";

// EDIT ME: update this bio to describe yourself, your approach, and your skills.
const bio = {
  intro:
    "I'm Zunaiba, an AI Automation & Web/AI Designer who helps brands build websites and workflows that actually save time.",
  approach:
    "My approach is simple: understand the problem before writing a single line of code, design with intention rather than defaults, and automate the repetitive parts so the humans on a team can focus on the work that actually needs them.",
  creative:
    "Alongside development and automation, I also handle the creative side of a brand: AI-assisted video editing, AI image generation, logo design, and content writing. I keep visuals and voice consistent across every touchpoint, plus take on a range of other AI-driven creative work.",
  skills: [
    "Web Development",
    "AI-Powered Design",
    "Workflow Automation",
    "Branding",
    "UI/UX Design",
    "No-Code & Custom Code",
    "AI Video Editing",
    "AI Image Generation",
    "Logo Design",
    "Content Writing",
  ],
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-bg-light px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <ScrollReveal as="h2" id="about-heading" className="text-3xl font-bold sm:text-5xl">
          About me
        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-8 space-y-6 text-lg text-text-muted">
          <p>{bio.intro}</p>
          <p>{bio.approach}</p>
          <p>{bio.creative}</p>
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-10">
          <h3 className="text-xs font-medium uppercase tracking-wide text-text-muted">
            Skills
          </h3>
          <Marquee
          items={bio.skills}
          renderItem={(skill) => skill}
          className="mt-4"
          speed={36}
          gap="gap-4"
        />
        </ScrollReveal>
      </div>
    </section>
  );
}
