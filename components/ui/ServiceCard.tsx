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
  ExternalLink,
  LucideIcon,
} from "lucide-react";
import { Service } from "@/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import ServiceMedia from "@/components/ui/ServiceMedia";
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

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

/** One service/tool card on the /services page, grouped by category. */
export default function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <ScrollReveal
      as="article"
      id={service.id}
      delay={delay}
      className="scroll-mt-24 rounded-2xl border border-text-dark/10 bg-bg-light p-6"
    >
      {service.media.src ? (
        <ServiceMedia media={service.media} title={service.title} />
      ) : (
        <MediaPlaceholder kind={service.media.kind} />
      )}

      <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-text-light">
        <Icon size={22} />
      </span>
      <h3 className="mt-4 text-xl font-semibold text-text-dark">{service.title}</h3>
      <p className="mt-3 text-text-dark/70">{service.longDescription}</p>

      {service.linkGroups && service.linkGroups.length > 0 && (
        <div className="mt-4 space-y-4">
          {service.linkGroups.map((group) => (
            <div key={group.heading}>
              <p className="text-xs font-semibold uppercase tracking-wide text-text-dark/50">
                {group.heading}
              </p>
              <ul className="mt-2 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-link-accent hover:underline"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {service.category === "service" && (
        <div className="mt-5 space-y-3 border-t border-text-dark/10 pt-5">
          {service.result && (
            <p className="text-sm font-medium text-accent">{service.result}</p>
          )}
          {service.price && (
            <p className="text-sm text-text-dark/60">{service.price}</p>
          )}
          <PillButton href="/#contact" className="mt-1">
            Get a quote
          </PillButton>
        </div>
      )}
    </ScrollReveal>
  );
}
