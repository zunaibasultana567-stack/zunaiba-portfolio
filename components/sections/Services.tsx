import { Code2, Sparkles, LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, LucideIcon> = { Code2, Sparkles };

const cardTints = ["bg-card-pink", "bg-card-blue", "bg-card-gray", "bg-card-lavender", "bg-card-mint"];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-bg-light px-6 py-24 text-text-dark sm:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal as="h2" id="services-heading" className="text-3xl font-bold sm:text-5xl">
          I can help you with
        </ScrollReveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal
                key={service.id}
                delay={i * 120}
                className={`rounded-2xl p-8 ${cardTints[i % cardTints.length]}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-text-light">
                  {Icon && <Icon size={22} />}
                </span>
                <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-text-dark/70">{service.shortDescription}</p>
                <p className="mt-5 text-sm text-text-dark/60">{service.longDescription}</p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
