import type { Metadata } from "next";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceCard from "@/components/ui/ServiceCard";
import PillButton from "@/components/ui/PillButton";

export const metadata: Metadata = {
  title: "Services | Zunaiba",
  description:
    "A closer look at AI-powered design, content, development, and automation services.",
};

export default function ServicesPage() {
  const offered = services.filter((service) => service.category === "service");
  const tools = services.filter((service) => service.category === "tool");

  return (
    <>
      <section className="px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal as="h1" className="text-4xl font-bold sm:text-6xl">
            Services
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-6 text-lg text-text-muted sm:text-xl">
            A closer look at how I combine AI tooling with hand-crafted
            execution across design, content, development, and automation.
          </ScrollReveal>
        </div>
      </section>

      <section
        id="services-offered"
        aria-labelledby="services-offered-heading"
        className="scroll-mt-24 border-t border-text-dark/10 px-6 py-20 sm:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <ScrollReveal as="h2" id="services-offered-heading" className="text-3xl font-bold sm:text-5xl">
            Services I offer
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-4 max-w-2xl text-lg text-text-muted">
            The deliverables you can hire me for. Each one ends with a
            finished asset, not just a tool demo.
          </ScrollReveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {offered.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="results"
        aria-labelledby="results-heading"
        className="scroll-mt-24 border-t border-text-dark/10 px-6 py-20 sm:px-12"
      >
        <div className="mx-auto max-w-3xl">
          <ScrollReveal className="gradient-border p-8 text-center sm:p-10">
            <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
              Real result
            </p>
            <h2 id="results-heading" className="mt-3 text-4xl font-bold text-text-dark sm:text-5xl">
              3 days → 4 min
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-dark/70">
              Turned a manual, multi-day lead-qualification process into an
              automated n8n workflow. What used to take three days of
              back-and-forth now runs end-to-end in about four minutes.
            </p>
            <a
              href="#automation"
              className="mt-5 inline-block text-sm font-medium text-link-accent underline underline-offset-4"
            >
              See the Automation service
            </a>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="ai-tools"
        aria-labelledby="ai-tools-heading"
        className="scroll-mt-24 border-t border-text-dark/10 px-6 py-20 sm:px-12"
      >
        <div className="mx-auto max-w-5xl">
          <ScrollReveal as="h2" id="ai-tools-heading" className="text-3xl font-bold sm:text-5xl">
            AI tools I work with
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-4 max-w-2xl text-lg text-text-muted">
            Part of my day-to-day toolkit, not something you purchase
            directly. This is how the services above get delivered.
          </ScrollReveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {tools.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 border-t border-text-dark/10 px-6 py-24 text-center sm:px-12">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal as="h2" className="text-3xl font-bold sm:text-5xl">
            Have a project in mind? Let&apos;s build it.
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-4 text-lg text-text-muted">
            Tell me a bit about what you need and I&apos;ll get back to you
            within a day or two.
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
