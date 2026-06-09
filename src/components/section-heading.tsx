import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/** Eyebrow + heading + optional lede, used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className={cn("eyebrow", dark && "on-dark")}>
        <span className="dot" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "text-[clamp(28px,3.4vw,46px)] font-semibold leading-[1.06] tracking-[-0.03em]",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "max-w-2xl text-[clamp(16px,1.4vw,19px)] leading-relaxed",
            align === "center" && "mx-auto",
            dark ? "text-white/80" : "text-muted-foreground",
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
