import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  challengeStates,
  behaviouralChallenge,
  challengeNarrative,
  challengeQuote,
} from "@/content/proposal";
import { Quote } from "@/components/icons";

export function Challenge() {
  return (
    <section id="challenge" className="py-24">
      <div className="cps-container">
        <SectionHeading
          eyebrow="The business challenge"
          title={
            <>
              Solving for growth in a{" "}
              <span className="gradient-accent">competitive market</span>
            </>
          }
          lede="CalBank competes in a market where customer relationships, not products, decide who wins. The work is to grow those relationships, and the value inside them, at scale."
        />

        {/* Current state vs desired state */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-surface-card p-7 md:p-8">
            <p className="mono !text-cps-blue-deep">The current state</p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink">{challengeStates.current}</p>
          </Reveal>
          <Reveal delay={100} className="rounded-3xl border border-border bg-ink p-7 text-white md:p-8">
            <p className="mono !text-cps-yellow-warm">The desired state</p>
            <p className="mt-4 text-[17px] leading-relaxed text-white/90">{challengeStates.desired}</p>
          </Reveal>
        </div>

        {/* The behavioural challenge */}
        <Reveal className="mt-16">
          <h3 className="text-xl font-semibold text-ink">
            The transformation will require bankers to
          </h3>
        </Reveal>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {behaviouralChallenge.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 4) * 60}
              className="flex flex-col rounded-3xl border border-border bg-white p-6"
            >
              <span className="font-mono text-sm font-semibold text-cps-purple">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="mt-3 text-base font-semibold leading-snug text-ink">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Narrative + quote */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <Reveal className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {challengeNarrative.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal
            delay={120}
            className="rounded-4xl bg-gradient-to-br from-cps-blue/12 to-cps-purple/12 p-8"
          >
            <Quote className="size-8 text-cps-purple" />
            <p className="mt-4 text-[clamp(18px,2vw,24px)] font-medium leading-snug text-ink">
              {challengeQuote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
