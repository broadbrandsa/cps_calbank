import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { transitions, competencies } from "@/content/proposal";
import { Check } from "@/components/icons";

/** A subtle accent per transition, cycling through the CPS palette. */
const accents = [
  { tab: "bg-cps-dark/10 text-cps-dark", num: "text-cps-dark/40" },
  { tab: "bg-cps-blue/12 text-cps-blue-deep", num: "text-cps-blue/40" },
  { tab: "bg-cps-purple/10 text-cps-purple", num: "text-cps-purple/40" },
  { tab: "bg-cps-blue/12 text-cps-blue-deep", num: "text-cps-blue/40" },
];

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

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
