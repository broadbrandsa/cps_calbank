import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  bankerJourney,
  bankerJourneyIntro,
  leaderJourney,
  leaderJourneyIntro,
} from "@/content/proposal";

type Step = { n: number; title: string; detail: string };

function Timeline({ intro, steps }: { intro: string; steps: readonly Step[] }) {
  return (
    <div className="rounded-4xl border border-border bg-white p-6 md:p-8">
      <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">{intro}</p>

      {/* Horizontal milestone rail (lg+) */}
      <div className="mt-9 hidden lg:block">
        <div className="relative flex justify-between gap-2">
          <div
            className="absolute inset-x-5 top-5 h-0.5 bg-gradient-to-r from-cps-blue/30 to-cps-yellow"
            aria-hidden="true"
          />
          {steps.map((step) => (
            <div key={step.n} className="relative z-10 flex flex-1 flex-col items-center text-center">
              <span className="inline-flex size-10 items-center justify-center rounded-full border-2 border-cps-blue/30 bg-white font-mono text-sm font-semibold text-cps-blue-deep">
                {step.n}
              </span>
              <span className="mt-2.5 px-1 text-[11px] font-medium leading-tight text-muted-foreground">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ol className="mt-8 space-y-3">
        {steps.map((step, i) => (
          <li
            key={step.n}
            className="group relative flex gap-5 rounded-3xl border border-border bg-surface-card p-5 transition duration-300 hover:border-cps-blue/40 hover:bg-white md:p-6"
          >
            <div className="flex flex-col items-center">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-cps-blue/10 font-mono text-base font-semibold text-cps-blue-deep">
                {step.n}
              </span>
              {i < steps.length - 1 && (
                <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
              )}
            </div>
            <div className="pb-1">
              <h3 className="text-base font-semibold leading-snug text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="cps-container">
        <SectionHeading
          eyebrow="The learning journey"
          title={
            <>
              Two parallel journeys that turn capability into{" "}
              <span className="gradient-accent">sustained performance</span>
            </>
          }
          lede="Bankers follow a journey to mastery while their line managers run a parallel enablement journey, so what is learned in the programme shows up in real client conversations."
        />

        <Reveal className="mt-12">
          <Tabs defaultValue="banker" className="gap-6">
            <TabsList className="h-auto flex-wrap gap-2 rounded-full bg-surface-1 p-1.5">
              <TabsTrigger
                value="banker"
                className="h-auto rounded-full px-5 py-2.5 text-[13px] data-active:bg-ink data-active:text-white"
              >
                Banker journey
              </TabsTrigger>
              <TabsTrigger
                value="leader"
                className="h-auto rounded-full px-5 py-2.5 text-[13px] data-active:bg-ink data-active:text-white"
              >
                Leader enablement journey
              </TabsTrigger>
            </TabsList>
            <TabsContent value="banker">
              <Timeline intro={bankerJourneyIntro} steps={bankerJourney} />
            </TabsContent>
            <TabsContent value="leader">
              <Timeline intro={leaderJourneyIntro} steps={leaderJourney} />
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
