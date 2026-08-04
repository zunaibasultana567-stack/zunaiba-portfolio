import Link from "next/link";
import {
  ImageIcon,
  Video,
  Type,
  Bot,
  MessageSquare,
  Sparkles,
  FileText,
  Terminal,
  Globe,
  Workflow,
  LucideIcon,
} from "lucide-react";
import { services, Service } from "@/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PillButton from "@/components/ui/PillButton";

const iconMap: Record<Service["icon"], LucideIcon> = {
  ImageIcon,
  Video,
  Type,
  Bot,
  MessageSquare,
  Sparkles,
  FileText,
  Terminal,
  Globe,
  Workflow,
};

const cardTints = ["bg-card-pink", "bg-card-blue", "bg-card-gray", "bg-card-lavender", "bg-card-mint"];

/** Brief service cards on the homepage, each linking to the full /services page. */
export default function ServicesOverview() {
  return (
    <section
      id="services-overview"
      aria-labelledby="services-overview-heading"
      className="scroll-mt-24 border-t border-text-dark/10 bg-bg-light px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal as="h2" id="services-overview-heading" className="text-3xl font-bold sm:text-5xl">
          What I can help with
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal
                key={service.id}
                delay={i * 60}
                className={`group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 ${
                  cardTints[i % cardTints.length]
                }`}
              >
                <Link href={`/services#${service.id}`} className="block">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-text-light">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-text-dark/70">{service.shortDescription}</p>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200} className="mt-10 text-center">
          <PillButton href="/services" className="inline-flex">
            View all services
          </PillButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
