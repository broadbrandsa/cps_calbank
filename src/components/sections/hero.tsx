import Image from "next/image";
import { academy } from "@/content/proposal";
import { ArrowRight } from "@/components/icons";

export function Hero() {
  const meta = [
    "Relationship management",
    "Leader-led",
    "Two programmes",
    "Four transitions",
    "Powered by CPS Learn",
  ];

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src="/images/photos/brooke-cagle.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[62%_center] [filter:saturate(0.95)_contrast(1.04)_brightness(0.62)] scale-[1.06]"
      />
      {/* Multi-layer dark + CalBank brand-tint overlay (gold top-right, navy wash) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 600px at 82% 12%, rgba(253,211,0,0.22), transparent 60%), radial-gradient(720px 600px at 8% 95%, rgba(43,53,80,0.42), transparent 60%), linear-gradient(100deg, rgba(20,26,40,0.92) 0%, rgba(20,26,40,0.72) 45%, rgba(20,26,40,0.5) 100%), linear-gradient(0deg, rgba(20,26,40,0.9) 0%, transparent 42%)",
        }}
      />

      <div className="cps-container w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <span className="eyebrow on-dark mb-6">
            <span className="dot" />
            {academy.kicker}
          </span>

          <h1 className="text-white text-[clamp(40px,6vw,76px)] font-semibold leading-[1.02] tracking-[-0.035em]">
            The {academy.name}, activating{" "}
            <span className="gradient-accent warm">relationship managers as trusted advisors</span>
          </h1>

          <p className="mt-6 max-w-2xl text-[clamp(17px,1.5vw,21px)] leading-relaxed text-white/82">
            {academy.promise}
          </p>

          <p className="mono mt-5 !text-white/70">{academy.strapline}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#solution" className="btn-yellow">
              Explore the opportunity
              <ArrowRight className="size-4" />
            </a>
            <a href="#tracks" className="liquid-glass">
              See the two programmes
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/12 pt-6">
            {meta.map((m) => (
              <li key={m} className="mono !text-white/65">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
