import Link from "next/link";

/** Vertical "Quick info" tab fixed to the right edge, matching the reference design. */
export default function QuickInfoTab() {
  return (
    <Link
      href="/#contact"
      className="hidden sm:block sm:fixed sm:right-0 sm:top-1/2 z-30 sm:-translate-y-1/2 rounded-l-lg bg-bg-light px-2 py-4 text-xs font-medium uppercase tracking-wide text-text-dark shadow-lg"
      style={{ writingMode: "vertical-rl" }}
    >
      Quick info
    </Link>
  );
}
