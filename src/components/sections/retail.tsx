import { Reveal } from "@/components/reveal";
import { Segmented } from "@/components/segmented";
import { JourneyTimeline } from "@/components/journey-timeline";
import { PriceCard } from "@/components/price-card";
import {
  retail,
  retailTransitions,
  retailCompetencies,
  retailBankerJourney,
  retailBankerJourneyIntro,
  retailLeaderJourney,
  retailLeaderJourneyIntro,
} from "@/content/proposal";
import { Check, Users, Compass } from "@/components/icons";

const accents = [
  "bg-cps-dark/10 text-cps-dark",
  "bg-cps-blue/12 text-cps-blue-deep",
  "bg-cps-purple/10 text-cps-purple",
  "bg-cps-blue/12 text-cps-blue-deep",
];

export function Retail() {
  return (
    <section id="retail" className="bg-surface-1 py-24">
      <div className="cps-container">
        {/* Segment header */}
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow">
            <span className="dot" />
            {retail.segment}
          </span>
          <h2 className="text-[clamp(28px,3.4vw,46px)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
            <span className="gradient-accent">{retail.programme}</span>
          </h2>
          <p className="mono !text-cps-purple">{retail.tagline}</p>
          <p className="max-w-2xl text-[clamp(16px,1.4vw,19px)] leading-relaxed text-muted-foreground">
            {retail.intro}
          </p>
          <div className="flex flex-wrap gap-2">
            {retail.audiences.map((a) => (
              <span key={a} className="pill pill-blue">
                {a}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Four transitions */}
        <Reveal className="mt-14">
          <h3 className="text-xl font-semibold text-ink">
            The four transitions, from transactional engagement to client value
          </h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Each transition is a deliberate shift in how a frontline banker thinks, behaves, and
            creates value, contextualised across sales, service, and collections.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {retailTransitions.map((t, i) => (
            <Reveal
              key={t.n}
              delay={(i % 4) * 70}
              className="flex flex-col rounded-3xl border border-border bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span className={`mono rounded-full px-3 py-1 ${accents[i % accents.length]}`}>
                  Transition {t.n}
                </span>
                <span className="font-mono text-3xl font-semibold text-cps-blue/30">{t.n}</span>
              </div>
              <h4 className="mt-4 text-lg font-semibold leading-snug text-ink">{t.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[13px] leading-snug text-ink">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-cps-blue-deep" />
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        {/* The 8-week journey */}
        <Reveal className="mt-16">
          <h3 className="text-xl font-semibold text-ink">An 8-week behavioural shift journey</h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Bankers follow a leader-enabled journey, with line managers running a parallel
            enablement journey so capability shows up in real client conversations.
          </p>
        </Reveal>
        <Reveal className="mt-6">
          <Segmented
            segments={[
              {
                id: "banker",
                label: "Banker journey",
                content: <JourneyTimeline intro={retailBankerJourneyIntro} steps={retailBankerJourney} />,
              },
              {
                id: "leader",
                label: "Leader enablement journey",
                content: <JourneyTimeline intro={retailLeaderJourneyIntro} steps={retailLeaderJourney} />,
              },
            ]}
          />
        </Reveal>

        {/* Frontline competencies / outcomes */}
        <Reveal className="mt-16">
          <h3 className="text-xl font-semibold text-ink">
            Critical frontline competencies, linked to sales, service, and collections
          </h3>
        </Reveal>
        <div className="mt-7 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {retailCompetencies.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 60} className="bg-white p-7">
              <h4 className="text-base font-semibold text-cps-purple">{c.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Retail pricing */}
        <Reveal className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="text-xl font-semibold text-ink">Retail banking pricing</h3>
            <p className="mono">{retail.pricing.duration}</p>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <PriceCard
              icon={Users}
              role={retail.pricing.banker.role}
              price={retail.pricing.banker.price}
              unit={retail.pricing.banker.unit}
              cohort={retail.pricing.banker.cohort}
              includes={retail.pricing.banker.includes}
              highlight
            />
          </Reveal>
          <Reveal delay={100}>
            <PriceCard
              icon={Compass}
              role={retail.pricing.leader.role}
              price={retail.pricing.leader.price}
              unit={retail.pricing.leader.unit}
              cohort={retail.pricing.leader.cohort}
              includes={retail.pricing.leader.includes}
            />
          </Reveal>
        </div>
        <Reveal className="mt-5">
          <p className="text-[13px] text-muted-foreground">{retail.pricing.category}</p>
        </Reveal>
      </div>
    </section>
  );
}
