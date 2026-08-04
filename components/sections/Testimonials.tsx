"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Marquee from "@/components/ui/Marquee";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-24 border-t border-text-dark/10 bg-bg-light px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal as="h2" id="testimonials-heading" className="text-3xl font-bold sm:text-5xl">
          What clients say
        </ScrollReveal>

        <ScrollReveal delay={100} className="mt-14">
          <Marquee
            items={testimonials}
            keyExtractor={(testimonial) => testimonial.id}
            speed={40}
            gap="gap-8"
            itemClassName="w-[300px] rounded-2xl border border-text-dark/10 bg-bg-light p-8 transition-transform duration-300 hover:-translate-y-1 sm:w-[380px] sm:p-10"
            renderItem={(testimonial) => (
              <>
                <div className="flex items-center gap-3">
                  <Image
                    src={testimonial.avatar}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium text-text-dark">{testimonial.name}</p>
                    <p className="text-sm text-text-muted">{testimonial.role}</p>
                  </div>
                </div>

                <div
                  className="mt-5 flex items-center gap-0.5"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className={starIndex < testimonial.rating ? "text-accent" : "text-text-muted/40"}
                      fill={starIndex < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>

                <p className="mt-6 leading-relaxed text-text-dark/80">&ldquo;{testimonial.quote}&rdquo;</p>
              </>
            )}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
