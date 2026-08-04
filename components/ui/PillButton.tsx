import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

interface PillButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "solid" | "outline";
  showArrow?: boolean;
}

/** The black pill CTA button used for primary calls-to-action across the site.
 * Internal links (href starting with "/") render via next/link so navigating
 * to another page's anchor (e.g. "/#contact") is a client-side transition
 * rather than a hard reload — a hard reload combined with this site's
 * smooth-scroll and above-the-fold content shift can leave the browser
 * stranded above the target section. External/mailto/tel hrefs still use a
 * plain anchor. */
export default function PillButton({
  variant = "solid",
  showArrow = true,
  className,
  children,
  href,
  ...props
}: PillButtonProps) {
  const pillClassName = clsx(
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5",
    variant === "solid"
      ? "bg-accent text-text-light"
      : "border border-current text-inherit",
    className
  );

  const arrow = showArrow && (
    <span
      className={clsx(
        "flex h-6 w-6 items-center justify-center rounded-full",
        variant === "solid" ? "bg-text-light/10" : "bg-text-dark/10"
      )}
    >
      <ArrowRight size={14} />
    </span>
  );

  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={pillClassName}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <a href={href} className={pillClassName} {...props}>
      {children}
      {arrow}
    </a>
  );
}
