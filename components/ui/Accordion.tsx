"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { FaqItem } from "@/data/faq";

interface AccordionProps {
  items: FaqItem[];
}

/** Single-open-at-a-time FAQ accordion, following the WAI-ARIA accordion pattern. */
export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `${item.id}-trigger`;
        const panelId = `${item.id}-panel`;

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-text-light/15 p-6 transition-colors hover:border-text-light/30"
          >
            <h3>
              <button
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 text-left text-lg font-medium"
                suppressHydrationWarning
              >
                {item.question}
                <ChevronDown
                  size={20}
                  className={clsx(
                    "shrink-0 transition-transform duration-300",
                    isOpen && "rotate-180 text-accent-light"
                  )}
                />
              </button>
            </h3>
            <div
              className={clsx(
                "grid transition-[grid-template-rows] duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="pt-3 pr-10 text-text-light/70"
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
