import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { fiveCornerstones, methodologyIntro } from "@/content/proposal";

export function Methodology() {
  return (
    <section id="methodology" className="py-24">
      <div className="cps-container">
        <SectionHeading
          eyebrow="The 5 cornerstones of BIL"
          title={
            <>
              Ensuring learning translates into{" "}
              <span className="gradient-accent">measurable behaviour change</span>
            </>
          }
          lede={methodologyIntro}
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {fiveCornerstones.map((c, i) => (
            <Reveal
              key={c.n}
              delay={i * 60}
              className="flex flex-col rounded-3xl border border-border bg-surface-card p-6"
            >
              <span className="font-mono text-4xl font-semibold text-cps-blue/30">{c.n}</span>
              <h3 className="mt-3 text-base font-semibold leading-snug text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
