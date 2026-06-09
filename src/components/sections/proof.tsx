import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Donut } from "@/components/charts";
import { trustPoints, whyCpsNarrative, clientLogos, ownership } from "@/content/proposal";

const ownershipColors = ["text-cps-blue-deep", "text-cps-purple"];

export function Proof() {
  return (
    <section id="proof" className="py-24">
      <div className="cps-container">
        <SectionHeading
          eyebrow="Why CPS is trusted"
          title={
            <>
              Trusted to deliver frontline{" "}
              <span className="gradient-accent">performance at scale</span>
            </>
          }
          lede="We do not design and deliver training. We enable behavioural change at scale, built for the realities of a modern bank where time is limited, pressure is constant, and performance cannot pause for learning."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {whyCpsNarrative.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={100} className="grid grid-cols-2 gap-4">
            {trustPoints.map((t) => (
              <div
                key={t.stat}
                className="flex flex-col rounded-3xl border border-border bg-surface-card p-6"
              >
                <span className="text-[clamp(24px,2.8vw,34px)] font-semibold leading-none tracking-tight text-cps-blue-deep">
                  {t.stat}
                </span>
                <span className="mt-3 text-[13px] leading-snug text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Transformation — B-BBEE ownership */}
        <Reveal className="mt-8 rounded-4xl border border-border bg-surface-card p-7 md:p-9">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="eyebrow mb-4">
                <span className="dot" />
                Transformation
              </span>
              <h3 className="text-[clamp(20px,2.2vw,28px)] font-semibold leading-tight text-ink">
                A Level 1 B-BBEE contributor you can partner with confidently
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                Working with CPS strengthens your own procurement and transformation scorecard, with
                meaningful black and black women ownership behind the business.
              </p>
            </div>
            <div className="flex justify-center gap-8 sm:gap-12">
              {ownership.map((o, i) => (
                <Donut
                  key={o.label}
                  value={o.value}
                  label={o.label}
                  className={ownershipColors[i % ownershipColors.length]}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Client logos */}
        <Reveal className="mt-16">
          <p className="mono text-center">Trusted by leading financial institutions across Africa</p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {clientLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={120}
                height={36}
                className="h-7 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-8"
                unoptimized={logo.src.endsWith(".gif")}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
