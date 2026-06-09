import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { platformCapabilities } from "@/content/proposal";
import { Check } from "@/components/icons";

export function Platform() {
  return (
    <section id="platform" className="bg-surface-1 py-24">
      <div className="cps-container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-5">
              <span className="dot" />
              The learning platform
            </span>
            <h2 className="text-[clamp(26px,3vw,40px)] font-semibold leading-tight tracking-[-0.03em] text-ink">
              CPS Learn, built for ease of use and access
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              CPS Learn delivers the programme in one place, with clear structure, fast feedback,
              progress visibility, and mobile access. It is designed so bankers and leaders can learn
              around the demands of a busy day.
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {platformCapabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex gap-2.5 rounded-2xl border border-border bg-white px-4 py-3 text-sm text-ink"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-cps-blue-deep" />
                  {cap}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="overflow-hidden rounded-4xl border border-border shadow-[var(--shadow-cps-lg)]">
              <Image
                src="/images/photos/microsoft-365.jpg"
                alt="A learner accessing the CPS Learn platform across devices"
                width={900}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-2 rounded-2xl bg-cps-yellow px-5 py-3 shadow-[var(--shadow-cps-cta)] sm:left-6">
              <p className="text-sm font-semibold text-black">Accessible 24 / 7 / 365</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
