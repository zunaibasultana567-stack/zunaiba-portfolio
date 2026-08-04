import Image from "next/image";
import Link from "next/link";
import { navLinks, siteInfo } from "@/data/site";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-text-on-dark/10 bg-bg-dark px-6 py-12 text-text-on-dark sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${siteInfo.name} logo`}
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="font-medium">{siteInfo.name}</span>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-on-dark-muted">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href} className="hover:text-text-on-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks className="flex items-center gap-1 text-text-on-dark" />
      </div>

      <p className="mt-8 text-center text-xs text-text-on-dark-muted">
        &copy;{year} {siteInfo.name}. All rights reserved.
      </p>
    </footer>
  );
}
