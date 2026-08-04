// Site-wide identity, navigation, and social links.
// Edit the values below — nothing here needs component/layout changes.

export const siteInfo = {
  name: "Zunaiba",
  role: "AI Automation & Web/AI Designer",
  tagline:
    "I design and build AI-powered websites and automated workflows for brands that want to move faster.",
  // EDIT ME: change if you want a different public contact address.
  email: "zunaibasultana567@gmail.com",
};

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: "hero", label: "Home", href: "/#hero" },
  { id: "about", label: "About", href: "/#about" },
  { id: "services", label: "Services", href: "/services" },
  { id: "gallery", label: "Case Studies", href: "/case-studies" },
  { id: "testimonials", label: "Testimonials", href: "/#testimonials" },
  { id: "faq", label: "FAQ", href: "/#faq" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

// EDIT ME: replace href values with your real profiles. Each already opens in
// a new tab (SocialLinks.tsx opens any href starting with "http") — just
// swap the username segment, keep the https:// prefix.
// `icon` must match a key mapped in components/ui/SocialLinks.tsx.
export const socialLinks: { label: string; href: string; icon: "Github" | "Linkedin" | "TwitterX" | "Mail" }[] = [
  { label: "GitHub", href: "https://github.com/zunaibasultana567-stack", icon: "Github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zunaiba-sheikh/", icon: "Linkedin" },
  { label: "X (Twitter)", href: "https://x.com/Zunaiba1234", icon: "TwitterX" },
  { label: "Email", href: `mailto:${siteInfo.email}`, icon: "Mail" },
];
