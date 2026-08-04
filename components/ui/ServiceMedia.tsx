"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Service } from "@/data/services";
import { useInView } from "@/hooks/useInView";

interface ServiceMediaProps {
  media: Service["media"];
  title: string;
}

const isVideoSrc = (src: string) => src.endsWith(".mp4");

/** Renders a service's real photo or video. Non-autoplay videos keep their
 * audio but start at a moderate volume rather than full blast, so playback
 * stays visitor-initiated rather than interrupting. Autoplay videos start
 * muted and looping (browsers block unmuted autoplay), with controls so a
 * visitor can unmute if they want sound. The video `src` itself is only
 * attached once the card scrolls into view, so it doesn't start downloading
 * on page load. */
export default function ServiceMedia({ media, title }: ServiceMediaProps) {
  const { ref: videoRef, inView } = useInView<HTMLVideoElement>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = 0.4;
    if (inView && media.autoPlay) {
      video.play().catch(() => {});
    }
  }, [inView, videoRef, media.autoPlay]);

  if (!media.src) return null;

  if (isVideoSrc(media.src)) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
        {media.autoPlay ? (
          <video
            ref={videoRef}
            src={inView ? media.src : undefined}
            poster={media.poster}
            preload="none"
            muted
            loop
            playsInline
            controls
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            src={inView ? media.src : undefined}
            poster={media.poster}
            preload="none"
            controls
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
      <Image
        src={media.src}
        alt={`${title} example output`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
