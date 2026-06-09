"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Segment = { id: string; label: string; content: ReactNode };

/**
 * A clean segmented tab control. Self-contained so it does not inherit the
 * base-ui focus ring / shadow defaults that clashed with the pill styling.
 * Active segment is a solid ink pill; inactive segments are muted text.
 */
export function Segmented({
  segments,
  defaultId,
  align = "start",
  className,
}: {
  segments: Segment[];
  defaultId?: string;
  align?: "start" | "center";
  className?: string;
}) {
  const [active, setActive] = useState(defaultId ?? segments[0]?.id);
  const baseId = useId();

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Select an option"
        className={cn(
          "inline-flex max-w-full flex-wrap gap-1.5 rounded-full border border-border bg-white p-1.5 shadow-[var(--shadow-cps-sm)]",
          align === "center" && "mx-auto",
        )}
      >
        {segments.map((s) => {
          const selected = s.id === active;
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${s.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${s.id}`}
              onClick={() => setActive(s.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40",
                selected ? "bg-ink text-white" : "text-muted-foreground hover:text-ink",
              )}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        {segments.map((s) => (
          <div
            key={s.id}
            role="tabpanel"
            id={`${baseId}-panel-${s.id}`}
            aria-labelledby={`${baseId}-tab-${s.id}`}
            hidden={s.id !== active}
          >
            {s.id === active && s.content}
          </div>
        ))}
      </div>
    </div>
  );
}
