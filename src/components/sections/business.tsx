import { Reveal } from "@/components/reveal";
import { Segmented } from "@/components/segmented";
import { JourneyTimeline } from "@/components/journey-timeline";
import { PriceCard } from "@/components/price-card";
import {
  business,
  businessShifts,
  businessOutcomes,
  businessTracks,
  businessLeaderJourney,
  businessLeaderJourneyIntro,
} from "@/content/proposal";
import { Check, Users, Compass } from "@/components/icons";

type Track = (typeof businessTracks)[number];

function TrackPanel({ track }: { track: Track }) {
  return (
    <div className="space-y-8">
      <div className="rounded-4xl border border-border bg-surface-1 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="pill pill-blue">{track.badge}</span>
          <span className="mono">{track.audience}</span>
        </div>
        <h4 className="mt-4 text-[clamp(20px,2.2vw,28px)] font-semibold leading-tight text-ink">
          {track.name}
        </h4>
        <p className="mt-3 max-w-2xl text-muted-foreground">{track.blurb}</p>
      </div>

      <JourneyTimeline
        intro={`An 8-step trusted-advisor journey for ${track.audience.toLowerCase()}, with a parallel leader enablement journey.`}
        steps={track.journey}
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <PriceCard
          icon={Users}
          role={track.banker.role}
          price={track.banker.price}
          unit={track.banker.unit}
          cohort={track.banker.cohort}
          includes={track.banker.includes}
          highlight
        />
        <PriceCard
          icon={Compass}
          role={track.leader.role}
          price={track.leader.price}
          unit={track.leader.unit}
          cohort={track.leader.cohort}
          includes={track.leader.includes}
        />
      </div>
    </div>
  );
}

export function Business() {
  return (
    <section id="business" className="py-24">
      <div className="cps-container">
        {/* Segment header */}
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow">
            <span className="dot" />
            {business.segment}
          </span>
          <h2 className="text-[clamp(28px,3.4vw,46px)] font-semibold leading-[1.06] tracking-[-0.03em] text-ink">
            <span className="gradient-accent">{business.programme}</span>
          </h2>
          <p className="mono !text-cps-purple">{business.tagline}</p>
          <p className="max-w-2xl text-[clamp(16px,1.4vw,19px)] leading-relaxed text-muted-foreground">
            {business.intro}
          </p>
        </Reveal>

        {/* The four shifts */}
        <Reveal className="mt-12">
          <p className="mono mb-4">Bridging knowledge and performance, the relationship manager shifts</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {businessShifts.map((s) => (
              <div
                key={s}
                className="flex gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-[15px] text-ink"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-cps-blue-deep" />
                {s}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Business outcomes */}
        <Reveal className="mt-16">
          <h3 className="text-xl font-semibold text-ink">What the business pathway delivers</h3>
        </Reveal>
        <div className="mt-7 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {businessOutcomes.map((o, i) => (
            <Reveal key={o.title} delay={(i % 4) * 60} className="bg-white p-7">
              <h4 className="text-base font-semibold text-cps-purple">{o.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Two tracks: journey + pricing per track */}
        <Reveal className="mt-16">
          <h3 className="text-xl font-semibold text-ink">Two tracks, each with its own journey and pricing</h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Choose the track that matches your segment, or run both. The modules differ between SME
            and Business, Commercial & Corporate.
          </p>
        </Reveal>
        <Reveal className="mt-6">
          <Segmented
            segments={businessTracks.map((t) => ({
              id: t.id,
              label: t.name,
              content: <TrackPanel track={t} />,
            }))}
          />
        </Reveal>

        {/* Parallel leader enablement */}
        <Reveal className="mt-16">
          <h3 className="text-xl font-semibold text-ink">Activating line managers as performance multipliers</h3>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            A parallel leader enablement journey runs alongside both tracks, so team capability
            translates into sustained workplace performance.
          </p>
        </Reveal>
        <Reveal className="mt-6">
          <JourneyTimeline intro={businessLeaderJourneyIntro} steps={businessLeaderJourney} />
        </Reveal>
      </div>
    </section>
  );
}
