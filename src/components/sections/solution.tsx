import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { opportunityShift, solutionIntro, learningForImpact } from "@/content/proposal";
import { ArrowRight } from "@/components/icons";

export function Solution() {
  return (
    <section id="solution" className="section-dark py-24">
      <div className="cps-container">
        <SectionHeading
          dark
          eyebrow="The opportunity to change"
          title={
            <>
              From transactional banking to{" "}
              <span className="gradient-accent warm">trusted, value-led advice</span>
            </>
          }
          lede={opportunityShift.body}
        />

        {/* The shift, rendered as a from/to band */}
        <Reveal className="mt-12 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="mono !text-white/55">From</p>
            <p className="mt-2 text-[clamp(18px,2vw,24px)] font-semibold text-white/80">
              {opportunityShift.from}
            </p>
          </div>
          <ArrowRight className="mx-auto size-7 shrink-0 rotate-90 text-cps-yellow-warm sm:rotate-0" />
          <div className="flex-1 rounded-3xl border border-cps-yellow/30 bg-cps-yellow/10 p-6">
            <p className="mono !text-cps-yellow-warm">To</p>
            <p className="mt-2 text-[clamp(18px,2vw,24px)] font-semibold text-white">
              {opportunityShift.to}
            </p>
          </div>
        </Reveal>

        {/* The solution + learning for impact */}
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="eyebrow on-dark mb-5">
              <span className="dot" />
              The solution
            </span>
            <h3 className="text-[clamp(24px,2.8vw,36px)] font-semibold leading-tight text-white">
              One sales intervention, two segment pathways
            </h3>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/78">
              {solutionIntro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mono !text-cps-yellow-warm">Learning for impact</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {learningForImpact.map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <h4 className="text-[15px] font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/72">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
