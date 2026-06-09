import { Reveal } from "@/components/reveal";
import { contact } from "@/content/proposal";
import { Phone, Mail, Globe, MapPin, Quote, ArrowRight } from "@/components/icons";

const details = [
  { icon: Phone, label: "Office", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Globe, label: "Web", value: contact.website, href: `https://${contact.website}` },
  { icon: MapPin, label: "Visit", value: contact.address },
];

export function Contact() {
  return (
    <section id="contact" className="section-dark py-24">
      <div className="cps-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="eyebrow on-dark mb-6">
              <span className="dot" />
              The next steps
            </span>
            <h2 className="text-[clamp(30px,3.6vw,52px)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              Let&apos;s activate CalBank&apos;s{" "}
              <span className="gradient-accent warm">trusted advisors</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/78">
              We would welcome the chance to walk CalBank through the programme, shape a first cohort,
              and align the journey with your segments and targets. You do not need to have everything
              figured out before speaking to CPS. We will help you understand the next step.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-cps-yellow text-base font-semibold text-black">
                IB
              </span>
              <div>
                <p className="text-[15px] font-semibold text-white">{contact.name}</p>
                <p className="mono !text-cps-yellow-warm">{contact.role}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {details.map((d) => {
                const Icon = d.icon;
                const inner = (
                  <div className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-white/25">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cps-blue-bright">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="mono !text-white/55">{d.label}</p>
                      <p className="mt-0.5 text-[15px] text-white">{d.value}</p>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={d.label}>{inner}</div>
                );
              })}
            </div>

            <a href={`mailto:${contact.email}`} className="btn-yellow mt-9">
              Start the conversation
              <ArrowRight className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={120} className="glass-card p-9 md:p-12">
            <Quote className="size-9 text-cps-yellow-warm" />
            <blockquote className="mt-5 text-[clamp(20px,2.2vw,28px)] font-medium leading-snug text-white">
              {contact.quote}
            </blockquote>
            <p className="mono mt-6 !text-white/55">Cornerstone Performance Solutions</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
