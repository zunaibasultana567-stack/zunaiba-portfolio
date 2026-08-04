import type { Metadata } from "next";
import { caseStudyItems } from "@/data/caseStudies";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GalleryCard from "@/components/ui/GalleryCard";
import PillButton from "@/components/ui/PillButton";

export const metadata: Metadata = {
  title: "Case Studies | Zunaiba",
  description:
    "AI website, automation, and content projects, organized by category.",
};

const categories = ["AI Website", "AI Automation", "AI Content"] as const;

export default function CaseStudiesPage() {
  return (
    <>
      <section className="px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal as="h1" className="text-4xl font-bold sm:text-6xl">
            Case Studies
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-6 text-lg text-text-muted sm:text-xl">
            A closer look at real website, automation, and content projects,
            organized by category.
          </ScrollReveal>
        </div>
      </section>

      {categories.map((category) => {
        const items = caseStudyItems.filter((item) => item.category === category);
        if (items.length === 0) return null;

        return (
          <section
            key={category}
            id={category.toLowerCase().replace(/\s+/g, "-")}
            aria-labelledby={`${category.toLowerCase().replace(/\s+/g, "-")}-heading`}
            className="scroll-mt-24 border-t border-text-dark/10 px-6 py-20 sm:px-12"
          >
            <div className="mx-auto max-w-6xl">
              <ScrollReveal
                as="h2"
                id={`${category.toLowerCase().replace(/\s+/g, "-")}-heading`}
                className="text-3xl font-bold sm:text-5xl"
              >
                {category}
              </ScrollReveal>

              <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
                {items.map((item, i) => (
                  <ScrollReveal
                    key={item.id}
                    delay={i * 80}
                    className="mb-6 break-inside-avoid"
                  >
                    <GalleryCard item={item} variant="grid" />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="scroll-mt-24 border-t border-text-dark/10 px-6 py-24 text-center sm:px-12">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal as="h2" className="text-3xl font-bold sm:text-5xl">
            Like what you see? Let&apos;s build yours.
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-4 text-lg text-text-muted">
            Tell me about the outcome you&apos;re aiming for, and I&apos;ll
            follow up soon with next steps.
          </ScrollReveal>
          <ScrollReveal delay={200} className="mt-8">
            <PillButton href="/#contact" className="inline-flex">
              Get in touch
            </PillButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
