"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface MarqueeProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  /** Scroll speed in pixels per second. */
  speed?: number;
  /** Tailwind gap utility applied between items and between the two looping tracks. */
  gap?: string;
  /** Classes applied to each item's wrapping <li>. Defaults to the pill style. */
  itemClassName?: string;
  className?: string;
}

/**
 * Continuous horizontal auto-scroll strip, looping seamlessly by duplicating
 * the item list and animating translateX(0 -> -50%) on the combined track.
 */
export default function Marquee<T,>({
  items,
  renderItem,
  keyExtractor,
  speed = 60,
  gap = "gap-3",
  itemClassName = "rounded-full bg-card-gray px-4 py-2 text-sm font-medium text-text-dark",
  className,
}: MarqueeProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0) setDuration(halfWidth / speed);
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [items, speed]);

  const keyFor = (item: T, i: number) =>
    keyExtractor ? keyExtractor(item, i) : (item as unknown as string);

  return (
    <div className={clsx("overflow-hidden", className)}>
      <div
        ref={trackRef}
        className={clsx("flex w-max animate-marquee hover:[animation-play-state:paused]", gap)}
        style={{ animationDuration: `${duration}s` }}
      >
        <ul className={clsx("flex shrink-0", gap)}>
          {items.map((item, i) => (
            <li key={keyFor(item, i)} className={clsx("shrink-0", itemClassName)}>
              {renderItem(item)}
            </li>
          ))}
        </ul>
        <ul aria-hidden="true" className={clsx("flex shrink-0", gap)}>
          {items.map((item, i) => (
            <li key={`dup-${keyFor(item, i)}`} className={clsx("shrink-0", itemClassName)}>
              {renderItem(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
