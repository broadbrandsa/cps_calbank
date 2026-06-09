import Link from "next/link";
import { ArrowRight } from "@/components/icons";

/** Compact dark page header, so the transparent nav reads well at the top. */
export function PageHeader({
  eyebrow,
  title,
  accent,
  lede,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  lede: string;
}) {
  return (
    <header className="section-dark pt-36 pb-20">
      <div className="cps-container">
        <span className="eyebrow on-dark mb-6">
          <span className="dot" />
          {eyebrow}
        </span>
        <h1 className="max-w-4xl text-[clamp(34px,5vw,64px)] font-semibold leading-[1.05] tracking-[-0.035em] text-white">
          {title}{" "}
          {accent && <span className="gradient-accent warm">{accent}</span>}
        </h1>
        <p className="mt-5 max-w-2xl text-[clamp(16px,1.5vw,20px)] leading-relaxed text-white/82">
          {lede}
        </p>
        <Link href="/" className="liquid-glass mt-8">
          <ArrowRight className="size-4 rotate-180" />
          Back to the proposal
        </Link>
      </div>
    </header>
  );
}
