import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { pathways } from "@/content/proposal";
import { ArrowRight, Users, Building } from "@/components/icons";

const icons = { retail: Users, business: Building } as const;

export function Pathways() {
  return (
    <section id="pathways" className="py-24">
      <div className="cps-container">
        <SectionHeading
          eyebrow="Two pathways, one ecosystem"
          title={
            <>
              Separate pathways for{" "}
              <span className="gradient-accent">retail and business banking</span>
            </>
          }
          lede="Retail and business banking face different realities, so each gets its own pathway, outcomes, and pricing, delivered as one sales intervention across the ecosystem and enabled by leaders in both segments."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pathways.map((p, i) => {
            const Icon = icons[p.id];
            return (
              <Reveal key={p.id} delay={i * 100}>
                <a
                  href={p.href}
                  className="group flex h-full flex-col rounded-4xl border border-border bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-cps-blue/40 hover:shadow-[var(--shadow-cps-md)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-cps-blue/10 text-cps-blue-deep">
                      <Icon className="size-6" />
                    </span>
                    <span className="pill pill-blue">{p.segment}</span>
                  </div>
                  <h3 className="mt-6 text-[clamp(22px,2.4vw,30px)] font-semibold leading-tight text-ink">
                    {p.programme}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                    <div>
                      <dt className="mono">Who</dt>
                      <dd className="mt-1 text-[13px] text-ink">{p.audience}</dd>
                    </div>
                    <div>
                      <dt className="mono">From</dt>
                      <dd className="mt-1 text-[13px] text-ink">{p.priceFrom}</dd>
                    </div>
                  </dl>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cps-blue-deep">
                    See the {p.segment.toLowerCase()} pathway
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
