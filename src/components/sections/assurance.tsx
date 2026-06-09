import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { accreditation } from "@/content/proposal";
import { ShieldCheck } from "@/components/icons";

const badges = [
  { src: "/images/badges/badge-saqa.png", alt: "SAQA registered" },
  { src: "/images/badges/badge-qcto.png", alt: "QCTO accredited" },
  { src: "/images/badges/badge-che.png", alt: "CHE accredited" },
  { src: "/images/badges/award-brandon-hall-hcm-gold.png", alt: "Brandon Hall HCM Excellence Gold" },
  { src: "/images/badges/award-brandon-hall-ld-silver.png", alt: "Brandon Hall L&D Excellence Silver" },
];

export function Assurance() {
  return (
    <section id="assurance" className="bg-surface-1 py-24">
      <div className="cps-container">
        <SectionHeading
          eyebrow="Assurance and accreditation"
          title={
            <>
              Recognised, measured, and{" "}
              <span className="gradient-accent">accredited</span>
            </>
          }
          lede="CPS programmes are recognised by the relevant South African regulators, and every cohort is measured for behavioural shift and business impact, so you can see the return on the investment."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {accreditation.map((a) => (
              <div key={a.title} className="rounded-3xl border border-border bg-white p-6">
                <ShieldCheck className="size-6 text-cps-blue-deep" />
                <h3 className="mt-3 text-base font-semibold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={100} className="flex flex-col rounded-3xl border border-border bg-white p-7">
            <p className="mono">Accreditation and awards</p>
            <div className="mt-6 grid grid-cols-3 items-center gap-6">
              {badges.map((b) => (
                <Image
                  key={b.alt}
                  src={b.src}
                  alt={b.alt}
                  width={120}
                  height={120}
                  className="h-16 w-auto object-contain"
                />
              ))}
            </div>
            <div className="mt-7 border-t border-border pt-6">
              <p className="text-[15px] font-semibold text-ink">
                The real return on learning is measured in changed behaviour, not information.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Programme impact surveys track shifts in mindset, behaviour, and application across the
                cohort, linked back to the client value and portfolio outcomes that matter to CalBank.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
