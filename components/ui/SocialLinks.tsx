import { Mail, LucideIcon } from "lucide-react";
import { ComponentType, SVGProps } from "react";
import { Github, Linkedin, TwitterX } from "@/components/ui/icons";
import { socialLinks } from "@/data/site";

const iconMap: Record<string, LucideIcon | ComponentType<SVGProps<SVGSVGElement>>> = {
  Github,
  Linkedin,
  TwitterX,
  Mail,
};

interface SocialLinksProps {
  className?: string;
}

/** Small row of social icons, sourced from data/site.ts. */
export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-current/10"
          >
            {Icon && <Icon size={16} />}
          </a>
        );
      })}
    </div>
  );
}
