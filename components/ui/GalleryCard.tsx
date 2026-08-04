"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";
import { useInView } from "@/hooks/useInView";

interface GalleryCardProps {
  item: GalleryItem;
  /** "marquee" (default) relies on the parent track's own sizing/clipping.
   * "grid" is self-contained (fixed aspect ratio, own clipping) so cards line
   * up evenly inside a CSS grid regardless of native asset dimensions. */
  variant?: "marquee" | "grid";
}

const marqueeSizeClasses = "h-64 w-auto rounded-2xl object-cover sm:h-80";
const gridSizeClasses = "absolute inset-0 h-full w-full object-cover";

/** Gallery card: a real photo, or a video that autoplays muted and looping
 * once it scrolls into view. Used both in the homepage marquee and the
 * /case-studies grid. */
export default function GalleryCard({ item, variant = "marquee" }: GalleryCardProps) {
  const { ref, inView } = useInView<HTMLVideoElement>();

  useEffect(() => {
    if (inView) {
      ref.current?.play().catch(() => {});
    }
  }, [inView, ref]);

  const caption = (
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent px-3 pb-2 pt-6">
      <span className="text-xs font-medium uppercase tracking-wide text-text-light">
        {item.category}
      </span>
    </div>
  );

  const media =
    item.type === "image" ? (
      <Image
        src={item.src}
        alt={item.alt}
        width={variant === "marquee" ? item.width : undefined}
        height={variant === "marquee" ? item.height : undefined}
        fill={variant === "grid"}
        sizes={
          variant === "grid"
            ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            : undefined
        }
        className={variant === "marquee" ? marqueeSizeClasses : gridSizeClasses}
      />
    ) : (
      <video
        ref={ref}
        src={inView ? item.src : undefined}
        poster={item.poster}
        preload="none"
        muted
        loop
        playsInline
        className={variant === "marquee" ? marqueeSizeClasses : gridSizeClasses}
      />
    );

  if (variant === "grid") {
    const aspectRatio = item.width && item.height ? `${item.width} / ${item.height}` : "16 / 9";
    return (
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ aspectRatio }}
      >
        {media}
        {caption}
      </div>
    );
  }

  return (
    <>
      {media}
      {caption}
    </>
  );
}
