import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

interface PillButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "solid" | "outline";
  showArrow?: boolean;
}

/** The black pill CTA button used for primary calls-to-action across the site. */
export default function PillButton({
  variant = "solid",
  showArrow = true,
  className,
  children,
  ...props
}: PillButtonProps) {
  return (
    <a
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5",
        variant === "solid"
          ? "bg-accent text-text-light"
          : "border border-current text-inherit",
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <span
          className={clsx(
            "flex h-6 w-6 items-center justify-center rounded-full",
            variant === "solid" ? "bg-text-light/10" : "bg-text-dark/10"
          )}
        >
          <ArrowRight size={14} />
        </span>
      )}
    </a>
  );
}
