import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { transitions, competencies } from "@/content/proposal";
import { Check, ArrowRight } from "@/components/icons";

/** A subtle accent per transition, cycling through the CPS palette. */
const accents = [
  { tab: "bg-cps-dark/10 text-cps-dark", num: "text-cps-dark/40" },
  { tab: "bg-cps-blue/12 text-cps-blue-deep", num: "text-cps-blue/40" },
  { tab: "bg-cps-purple/10 text-cps-purple", num: "text-cps-purple/40" },
  { tab: "bg-cps-blue/12 text-cps-blue-deep", num: "text-cps-blue/40" },
];

const shortNames = ["Client-centric", "Problem-solver", "Value-creator", "Value-conversationist"];

/** A horizontal progression rail: capable banker, through four shifts, to trusted advisor. */
function ProgressionRail() {
  return (
    <Reveal className="mt-12 rounded-3xl border border-border bg-white p-6 md:p-7">
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
        <span className="rounded-full bg-surface-2 px-4 py-2 text-[13px] font-medium text-ink">
          Capable banker
        </span>
        {transitions.map((t, i) => (
          <div key={t.n} className="flex items-center gap-2">
            <ArrowRight className="size-4 shrink-0 text-cps-blue/40" />
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-[13px] text-ink">
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-cps-blue/12 font-mono text-[11px] font-semibold text-cps-blue-deep">
                {t.n}
              </span>
              {shortNames[i]}
            </span>
          </div>
        ))}
        <ArrowRight className="size-4 shrink-0 text-cps-yellow" />
        <span className="rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-white">
          Trusted advisor
        </span>
      </div>
    </Reveal>
  );
}

export function Transitions() {
  return (
    <section id="transitions" className="py-24">
      <div className="cps-container">
        <SectionHeading
          eyebrow="Four learning transitions"
          title={
            <>
              Bridging knowledge and performance in{" "}
              <span className="gradient-accent">four shifts</span>
            </>
          }
          lede="Each transition is a deliberate shift in how a banker thinks, behaves, and creates value. Together they turn a capable banker into a trusted advisor."
        />

        <ProgressionRail />

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {transitions.map((t, i) => {
            const a = accents[i % accents.length];
            return (
              <Reveal
                key={t.n}
                delay={(i % 4) * 70}
                className="flex flex-col rounded-3xl border border-border bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-cps-sm)]"
              >
                <div className="flex items-center justify-between">
                  <span className={`mono rounded-full px-3 py-1 ${a.tab}`}>Transition {t.n}</span>
                  <span className={`font-mono text-3xl font-semibold ${a.num}`}>{t.n}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-ink">{t.name}</h3>
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
            );
          })}
        </div>

        {/* Critical competencies linked to outcomes */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-xl font-semibold text-ink">
              Critical competencies, linked to sales, service, and growth outcomes
            </h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              The programme targets the competencies that show up directly in client-centric selling
              and service.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {competencies.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 60} className="bg-white p-7">
                <h4 className="text-base font-semibold text-cps-purple">{c.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
