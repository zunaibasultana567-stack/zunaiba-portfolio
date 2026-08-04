"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Service } from "@/data/services";

interface ServiceMediaProps {
  media: Service["media"];
  title: string;
}

const isVideoSrc = (src: string) => src.endsWith(".mp4");

/** Renders a service's real photo or video. Non-autoplay videos keep their
 * audio but start at a moderate volume rather than full blast, so playback
 * stays visitor-initiated rather than interrupting. Autoplay videos start
 * muted and looping (browsers block unmuted autoplay), with controls so a
 * visitor can unmute if they want sound. */
export default function ServiceMedia({ media, title }: ServiceMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.4;
    }
  }, []);

  if (!media.src) return null;

  if (isVideoSrc(media.src)) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
        {media.autoPlay ? (
          <video
            ref={videoRef}
            src={media.src}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            src={media.src}
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
        className="object-cover"
      />
    </div>
  );
}
