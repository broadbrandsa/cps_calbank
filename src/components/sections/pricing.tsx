import { Reveal } from "@/components/reveal";
import { tracks } from "@/content/proposal";
import { ArrowRight } from "@/components/icons";
import { BarRow } from "@/components/charts";

const MAX_FEE = 18000;

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-1 py-24">
      <div className="cps-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow mb-5">
            <span className="dot" />
            Programme pricing
          </span>
          <h2 className="text-[clamp(28px,3.4vw,46px)] font-semibold leading-tight tracking-[-0.03em] text-ink">
            Clear pricing, per delegate
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each track is priced per banker, with line managers enabled in parallel at a separate
            per-delegate rate. Cohorts start at 20 bankers.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
          {tracks.map((track, i) => (
            <Reveal
              key={track.id}
              delay={i * 100}
              className="flex flex-col overflow-hidden rounded-4xl border border-border bg-white shadow-[var(--shadow-cps-md)]"
            >
              <div className="bg-ink px-7 py-7 text-white">
                <div className="flex items-center gap-2">
                  <span className="pill !bg-white/10 !text-white/80 !border-white/15">
                    {track.badge}
                  </span>
                </div>
                <p className="mt-3 text-[17px] font-semibold leading-snug">{track.name}</p>
              </div>
              <div className="grid flex-1 grid-cols-2 divide-x divide-border">
                <div className="p-6">
                  <p className="mono">Relationship managers</p>
                  <p className="mt-3 text-[clamp(26px,3.4vw,38px)] font-semibold leading-none tracking-tight text-cps-blue-deep">
                    {track.banker.price}
                  </p>
                  <p className="mt-2 text-[13px] text-muted-foreground">{track.banker.unit}</p>
                </div>
                <div className="p-6">
                  <p className="mono">Line managers</p>
                  <p className="mt-3 text-[clamp(26px,3.4vw,38px)] font-semibold leading-none tracking-tight text-cps-purple">
                    {track.leader.price}
                  </p>
                  <p className="mt-2 text-[13px] text-muted-foreground">{track.leader.unit}</p>
                </div>
              </div>
              <div className="border-t border-border px-6 py-4">
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  Includes facilitation, LMS fees, online learning material, registration, student
                  and academic support, and reporting. Banker pricing also includes Journey to
                  Mastery marking.
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Investment at a glance */}
        <Reveal className="mx-auto mt-6 max-w-5xl rounded-4xl border border-border bg-white p-7 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="mono">Per-delegate investment at a glance</p>
            <div className="flex items-center gap-5 text-[12px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-cps-yellow" /> Relationship managers
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-cps-blue" /> Line managers
              </span>
            </div>
          </div>
          <div className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {tracks.map((track) => (
              <div key={track.id} className="space-y-3">
                <p className="text-[13px] font-semibold text-ink">
                  {track.name} <span className="text-muted-foreground">({track.badge})</span>
                </p>
                <BarRow
                  label="Relationship managers"
                  valueLabel={track.banker.price}
                  pct={(track.banker.amount / MAX_FEE) * 100}
                  barClassName="bg-cps-yellow"
                />
                <BarRow
                  label="Line managers"
                  valueLabel={track.leader.price}
                  pct={(track.leader.amount / MAX_FEE) * 100}
                  barClassName="bg-cps-blue"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] leading-relaxed text-muted-foreground">
            Enabling a line manager costs a fraction of a banker&apos;s programme, so the leader
            journey that makes the learning stick is an affordable add to every cohort.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-muted-foreground">
            The programme is positioned for Category B on the skills development matrix, on endorsement
            from your verification agencies.
          </p>
          <a href="#contact" className="btn-yellow mt-6 inline-flex">
            Request a cohort proposal
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
