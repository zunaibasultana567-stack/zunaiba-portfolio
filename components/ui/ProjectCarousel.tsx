"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { ProjectMedia } from "@/data/projects";

interface ProjectCarouselProps {
  media: ProjectMedia[];
  title: string;
}

/** Hand-rolled image/video carousel — no external carousel library. */
export default function ProjectCarousel({ media, title }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const goTo = (i: number) => {
    setIndex(((i % media.length) + media.length) % media.length);
  };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Pause every video except the one currently in view.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) video.pause();
    });
  }, [index]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${title} media`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden rounded-2xl bg-text-dark/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {media.map((item, i) => (
            <div key={item.src} className="relative h-full w-full shrink-0">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  controls
                  className="h-full w-full object-cover"
                >
                  <track kind="captions" />
                </video>
              )}
            </div>
          ))}
        </div>
      </div>

      {media.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-bg-light/90 text-text-dark shadow transition-transform hover:scale-105"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-bg-light/90 text-text-dark shadow transition-transform hover:scale-105"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {media.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={clsx(
                  "h-2 w-2 rounded-full transition-colors",
                  i === index ? "bg-accent" : "bg-text-light/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
