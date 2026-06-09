import { cn } from "@/lib/utils";

/**
 * Lightweight, dependency-free chart primitives drawn in the CPS design
 * language. Colour comes from the surrounding text colour (currentColor) or a
 * passed className, so they pick up the active theme (CalBank gold/navy on the
 * home page, CPS blue/purple on the Why CPS page).
 */

/** A donut ring showing a percentage, with the value in the centre. */
export function Donut({
  value,
  label,
  sublabel,
  className,
}: {
  value: number;
  label: string;
  sublabel?: string;
  className?: string;
}) {
  const r = 52;
  const circumference = 2 * Math.PI * r;
  const dash = (Math.max(0, Math.min(100, value)) / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center">
      <div className={cn("relative size-32", className)}>
        <svg viewBox="0 0 120 120" className="size-32 -rotate-90" aria-hidden="true">
          <circle cx="60" cy="60" r={r} fill="none" stroke="currentColor" strokeWidth="10" className="opacity-15" />
          <circle
            cx="60"
            cy="60"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-3xl font-semibold tracking-tight text-ink">
          {value}%
        </span>
      </div>
      <p className="mt-4 text-sm font-semibold text-ink">{label}</p>
      {sublabel && <p className="mt-0.5 text-xs text-muted-foreground">{sublabel}</p>}
    </div>
  );
}

/** A labelled horizontal bar. `pct` is the fill width (0–100). */
export function BarRow({
  label,
  valueLabel,
  pct,
  barClassName,
}: {
  label: string;
  valueLabel: string;
  pct: number;
  barClassName?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-[13px]">
        <span className="text-ink">{label}</span>
        <span className="font-semibold text-ink">{valueLabel}</span>
      </div>
      <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-black/[0.07]">
        <div
          className={cn("h-full rounded-full", barClassName)}
          style={{ width: `${Math.max(2, Math.min(100, pct))}%` }}
        />
      </div>
    </div>
  );
}
