"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
}

/** Small copy-to-clipboard button shown next to a plain-text email address. */
export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy email address"
      className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-text-light transition-transform hover:scale-105"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Copied!" : ""}
      </span>
    </button>
  );
}
