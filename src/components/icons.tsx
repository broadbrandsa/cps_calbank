import type { SVGProps } from "react";

/**
 * CPS-style inline icon set.
 * Lucide-style: 24x24 viewBox, fill none, stroke currentColor, stroke-width 1.8,
 * round caps and joins. Icons inherit currentColor so they take the accent
 * colour of their context.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Base>
);

export const ChevronDown = (p: IconProps) => (
  <Base {...p} strokeWidth={2}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);

export const ArrowDown = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p} strokeWidth={2.4}>
    <path d="M20 6 9 17l-5-5" />
  </Base>
);

export const Compass = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5.5-5.5 2 2-5.5z" />
  </Base>
);

export const Users = (p: IconProps) => (
  <Base {...p}>
    <path d="M16 18v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 16.5V18" />
    <circle cx="10" cy="7.5" r="3" />
    <path d="M20 18v-1.4a3.5 3.5 0 0 0-2.6-3.4" />
    <path d="M15.5 4.6a3 3 0 0 1 0 5.8" />
  </Base>
);

export const BarChart = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 20h16" />
    <rect x="6" y="11" width="3" height="6" rx="0.6" />
    <rect x="11" y="7" width="3" height="10" rx="0.6" />
    <rect x="16" y="13" width="3" height="4" rx="0.6" />
  </Base>
);

export const Layers = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </Base>
);

export const Cpu = (p: IconProps) => (
  <Base {...p}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2" />
  </Base>
);

export const ShieldCheck = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

export const Sparkles = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" />
    <path d="M18 15l.7 1.8L20.5 17.5 18.7 18.2 18 20l-.7-1.8L15.5 17.5 17.3 16.8 18 15Z" />
  </Base>
);

export const GraduationCap = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 4 10 5-10 5L2 9l10-5Z" />
    <path d="M6 11v4.5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5V11" />
  </Base>
);

export const TrendingUp = (p: IconProps) => (
  <Base {...p}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </Base>
);

export const Network = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="5" r="2.4" />
    <circle cx="5" cy="18" r="2.4" />
    <circle cx="19" cy="18" r="2.4" />
    <path d="M12 7.4v4M10.4 13.2 6.6 16M13.6 13.2 17.4 16" />
  </Base>
);

export const Brain = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 1.5 5A3 3 0 0 0 9 20Z" />
    <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-1.5 5A3 3 0 0 1 15 20Z" />
    <path d="M9 4v16M15 4v16" />
  </Base>
);

export const Target = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </Base>
);

export const Building = (p: IconProps) => (
  <Base {...p}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
  </Base>
);

export const Phone = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </Base>
);

export const Smartphone = (p: IconProps) => (
  <Base {...p}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
    <path d="M10.5 18.5h3" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </Base>
);

export const Globe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
  </Base>
);

export const MapPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);

export const Quote = (p: IconProps) => (
  <Base {...p} fill="currentColor" stroke="none">
    <path d="M9 7H5.5A2.5 2.5 0 0 0 3 9.5V13a2 2 0 0 0 2 2h2v-2H5.5a.5.5 0 0 1-.5-.5V11h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Zm10 0h-3.5A2.5 2.5 0 0 0 13 9.5V13a2 2 0 0 0 2 2h2v-2h-1.5a.5.5 0 0 1-.5-.5V11h3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z" />
  </Base>
);

export const Repeat = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 9a5 5 0 0 1 5-5h7" />
    <path d="m13 1 3 3-3 3" />
    <path d="M20 15a5 5 0 0 1-5 5H8" />
    <path d="m11 23-3-3 3-3" />
  </Base>
);

export const BookOpen = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 6c-1.5-1.3-3.8-2-6.5-2A1.5 1.5 0 0 0 4 5.5v12A1.5 1.5 0 0 0 5.5 19c2.7 0 5 .7 6.5 2 1.5-1.3 3.8-2 6.5-2a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 18.5 4C15.8 4 13.5 4.7 12 6Z" />
    <path d="M12 6v15" />
  </Base>
);

export const Gauge = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 18a8 8 0 1 1 16 0" />
    <path d="m12 14 4-4" />
    <circle cx="12" cy="14" r="1.2" fill="currentColor" />
  </Base>
);
