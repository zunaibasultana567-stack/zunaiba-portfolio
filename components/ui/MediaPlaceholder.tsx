import { ImageIcon, Video, Images } from "lucide-react";
import clsx from "clsx";

interface MediaPlaceholderProps {
  kind: "image" | "video" | "image-or-video";
  className?: string;
}

/**
 * Clearly-marked upload slot for media the site owner will add later.
 * Deliberately NOT a pastel card tint — a dark/charcoal-tinted dashed box so
 * it reads as "media slot" rather than "content card" at a glance.
 */
export default function MediaPlaceholder({ kind, className }: MediaPlaceholderProps) {
  const Icon = kind === "video" ? Video : kind === "image-or-video" ? Images : ImageIcon;
  const label =
    kind === "video"
      ? "Upload video here"
      : kind === "image-or-video"
        ? "Upload image or video here"
        : "Upload image here";

  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={clsx(
        "flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-text-on-dark-muted/40 bg-bg-dark text-text-on-dark-muted",
        className
      )}
    >
      <Icon size={32} />
      <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
    </div>
  );
}
