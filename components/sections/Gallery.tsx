"use client";

import { galleryItems } from "@/data/gallery";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Marquee from "@/components/ui/Marquee";
import GalleryCard from "@/components/ui/GalleryCard";
import PillButton from "@/components/ui/PillButton";

export default function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="scroll-mt-24 border-t border-text-dark/10 bg-bg-light px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal as="h2" id="gallery-heading" className="text-3xl font-bold sm:text-5xl">
          Case Studies
        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-14">
          <Marquee
            items={galleryItems}
            keyExtractor={(item) => item.id}
            speed={90}
            gap="gap-6"
            itemClassName="relative h-64 overflow-hidden rounded-2xl sm:h-80"
            renderItem={(item) => <GalleryCard item={item} />}
          />
        </ScrollReveal>

        <ScrollReveal delay={200} className="mt-10 text-center">
          <PillButton href="/case-studies" className="inline-flex">
            View all case studies
          </PillButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
