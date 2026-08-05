"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { navLinks, siteInfo } from "@/data/site";
import PillButton from "@/components/ui/PillButton";

/** Unified top header: logo, inline nav links, and the primary Contact CTA. */
export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeId, setActiveId] = useState(navLinks[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const isActive = (linkHref: string, linkId: string) =>
    isHome ? activeId === linkId : pathname === linkHref;

  // The Contact CTA button below already covers this link, so the header nav
  // (unlike the footer nav) skips a redundant "Contact" text link.
  const headerNavLinks = navLinks.filter((link) => link.id !== "contact");

  return (
    <header className="sticky top-0 z-40 border-b border-text-dark/10 bg-bg-light">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-2 sm:px-12">
        <Link href="/" aria-label={`${siteInfo.name} home`} className="shrink-0">
          {/* TODO: swap public/images/logo-zs.png for a new file whenever you update your logo */}
          <Image
            src="/images/logo-zs.png"
            alt={`${siteInfo.name} logo`}
            width={72}
            height={72}
            className="rounded-lg"
            priority
          />
        </Link>

        <nav aria-label="Section navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {headerNavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href, link.id) ? "true" : undefined}
                  className={clsx(
                    "block rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors",
                    isActive(link.href, link.id)
                      ? "bg-accent text-text-light"
                      : "text-text-dark/70 hover:text-text-dark"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-text-dark md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <PillButton href="/#contact" className="shrink-0">
            Contact
          </PillButton>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile section navigation"
          className="absolute inset-x-0 top-full z-50 border-b border-text-dark/10 bg-bg-light px-6 py-4 shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {headerNavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive(link.href, link.id) ? "true" : undefined}
                  className={clsx(
                    "block rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors",
                    isActive(link.href, link.id)
                      ? "bg-accent text-text-light"
                      : "text-text-dark/70 hover:bg-text-dark/5 hover:text-text-dark"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
