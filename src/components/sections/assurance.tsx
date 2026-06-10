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
              Recognised, applied, and{" "}
              <span className="gradient-accent">accredited</span>
            </>
          }
          lede="CPS programmes are recognised by the relevant South African regulators, and the relationship management programme is assessed through the Journey to Mastery, covering theory, practice, and workplace application."
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
                We design for behaviour that shows up in the work, not information recalled.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Learning is applied in real client conversations and assessed through the Journey to
                Mastery, so capability is demonstrated on the job, with marking and reporting included.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
