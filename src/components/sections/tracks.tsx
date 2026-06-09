import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Segmented } from "@/components/segmented";
import { tracks } from "@/content/proposal";
import { Check, Users, Compass } from "@/components/icons";

type Track = (typeof tracks)[number];

function RoleCard({
  icon: Icon,
  role,
  price,
  unit,
  cohort,
  includes,
  highlight,
}: {
  icon: typeof Users;
  role: string;
  price: string;
  unit: string;
  cohort: string;
  includes: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-4xl border border-cps-blue/30 bg-white p-7 shadow-[var(--shadow-cps-md)]"
          : "rounded-4xl border border-border bg-surface-card p-7"
      }
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-cps-blue/10 text-cps-blue-deep">
          <Icon className="size-5" />
        </span>
        <p className="mono">{role}</p>
      </div>
      <p className="mt-6 text-[clamp(32px,4vw,46px)] font-semibold leading-none tracking-tight text-ink">
        {price}
      </p>
      <p className="mt-2 text-muted-foreground">{unit}</p>
      <p className="mt-1 text-[13px] text-cps-purple">{cohort}</p>
      <div className="mt-6 border-t border-border pt-5">
        <p className="mono mb-3">What is included</p>
        <ul className="space-y-2">
          {includes.split(", ").map((part) => (
            <li key={part} className="flex gap-2.5 text-[13px] leading-snug text-ink">
              <Check className="mt-0.5 size-3.5 shrink-0 text-cps-blue-deep" />
              {part.replace(/\.$/, "")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TrackPanel({ track }: { track: Track }) {
  return (
    <div className="rounded-4xl border border-border bg-surface-1 p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="pill pill-blue">{track.badge}</span>
        <span className="mono">{track.audience}</span>
      </div>
      <h3 className="mt-4 text-[clamp(22px,2.4vw,30px)] font-semibold leading-tight text-ink">
        {track.name}
      </h3>
      <p className="mt-3 max-w-2xl text-muted-foreground">{track.blurb}</p>

      <div className="mt-7 grid gap-5 lg:grid-cols-2">
        <RoleCard
          icon={Users}
          role="Relationship managers"
          price={track.banker.price}
          unit={track.banker.unit}
          cohort={track.banker.cohort}
          includes={track.banker.includes}
          highlight
        />
        <RoleCard
          icon={Compass}
          role="Line managers"
          price={track.leader.price}
          unit={track.leader.unit}
          cohort={track.leader.cohort}
          includes={track.leader.includes}
        />
      </div>
    </div>
  );
}

export function Tracks() {
  return (
    <section id="tracks" className="bg-surface-1 py-24">
      <div className="cps-container">
        <SectionHeading
          eyebrow="The two programmes"
          title={
            <>
              One academy,{" "}
              <span className="gradient-accent">two relationship management tracks</span>
            </>
          }
          lede="The Academy of Trusted Advisors runs two programmes, each pairing a banker journey with a parallel leader enablement journey. Choose the track that matches your segment, or run both."
        />

        <Reveal className="mt-12">
          <Segmented
            align="center"
            className="w-full"
            segments={tracks.map((t) => ({
              id: t.id,
              label: t.name,
              content: <TrackPanel track={t} />,
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}
