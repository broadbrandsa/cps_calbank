import type { ComponentType, SVGProps } from "react";
import { Check } from "@/components/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/** A per-delegate pricing card used by both segment pathways. */
export function PriceCard({
  icon: Icon,
  role,
  price,
  unit,
  cohort,
  includes,
  highlight,
}: {
  icon: Icon;
  role: string;
  price: string;
  unit: string;
  cohort: string;
  includes: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-4xl border border-cps-blue/30 bg-white p-7 shadow-[var(--shadow-cps-md)]"
          : "rounded-4xl border border-border bg-surface-card p-7"
      }
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-cps-blue/10 text-cps-blue-deep">
          <Icon className="size-5" />
        </span>
        <p className="mono">{role}</p>
      </div>
      <p className="mt-6 text-[clamp(32px,4vw,46px)] font-semibold leading-none tracking-tight text-ink">
        {price}
      </p>
      <p className="mt-2 text-muted-foreground">{unit}</p>
      <p className="mt-1 text-[13px] text-cps-purple">{cohort}</p>
      <div className="mt-6 border-t border-border pt-5">
        <p className="mono mb-3">What is included</p>
        <ul className="space-y-2">
          {includes.split(", ").map((part) => (
            <li key={part} className="flex gap-2.5 text-[13px] leading-snug text-ink">
              <Check className="mt-0.5 size-3.5 shrink-0 text-cps-blue-deep" />
              {part.replace(/\.$/, "")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
