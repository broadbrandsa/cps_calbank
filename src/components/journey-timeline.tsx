type Step = { n: number; title: string; detail: string };

/**
 * A learning-journey timeline: a horizontal numbered milestone rail (lg+) above
 * a detailed vertical step list. Shared by the retail and business pathways.
 */
export function JourneyTimeline({ intro, steps }: { intro: string; steps: readonly Step[] }) {
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
              <h4 className="text-base font-semibold leading-snug text-ink">{step.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
