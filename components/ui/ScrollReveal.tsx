"use client";

import { ReactNode, ElementType } from "react";
import clsx from "clsx";
import { useInView } from "@/hooks/useInView";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Optional stagger delay in ms, useful for revealing a list one by one. */
  delay?: number;
  as?: ElementType;
}

/** Fades and slides content up the first time it scrolls into view. */
export default function ScrollReveal({
  children,
  className,
  id,
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      id={id}
      className={clsx(
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
