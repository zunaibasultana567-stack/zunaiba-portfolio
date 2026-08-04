"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element has scrolled into view, using the native
 * IntersectionObserver API. Reveals once and stops observing — sections
 * shouldn't re-animate every time the user scrolls back up past them.
 */
export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
        ...options,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
