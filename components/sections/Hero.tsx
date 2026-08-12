import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { siteInfo } from "@/data/site";
import PillButton from "@/components/ui/PillButton";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen scroll-mt-24 flex-col justify-center gap-10 bg-bg-light px-6 py-24 sm:px-12 lg:flex-row lg:items-center lg:gap-16"
    >
      <div className="relative mx-auto w-full max-w-lg shrink-0 lg:mx-0">
        <div className="profile-glow absolute inset-6 -z-10 rounded-full" aria-hidden="true" />
        <div
          className="profile-ring relative z-10 animate-fade-slide-up rounded-full p-1.5"
          style={{ animationDelay: "0ms" }}
        >
          <Image
            src="/images/profile-v4.png"
            alt={siteInfo.name}
            width={560}
            height={560}
            priority
            className="aspect-square w-full rounded-full object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
        <h1
          id="hero-heading"
          className="animate-fade-slide-up text-4xl font-bold leading-tight text-text-dark sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "120ms" }}
        >
          {siteInfo.role}
        </h1>
        <p
          className="animate-fade-slide-up mt-6 text-lg text-text-muted sm:text-xl"
          style={{ animationDelay: "240ms" }}
        >
          {siteInfo.tagline}
        </p>
        <div
          className="animate-fade-slide-up mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          style={{ animationDelay: "360ms" }}
        >
          <PillButton href="/services">View services</PillButton>
          <PillButton href="#contact" variant="outline" className="text-text-dark">
            Contact me
          </PillButton>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-bg-light text-text-dark shadow-lg transition-transform hover:translate-y-1 sm:left-12 sm:translate-x-0"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
