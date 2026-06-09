import type { Metadata } from "next";
import { Nav } from "@/components/sections/nav";
import { PageHeader } from "@/components/sections/page-header";
import { Methodology } from "@/components/sections/methodology";
import { Platform } from "@/components/sections/platform";
import { Proof } from "@/components/sections/proof";
import { Assurance } from "@/components/sections/assurance";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Why CPS | Academy of Trusted Advisors proposal",
  description:
    "Why Cornerstone Performance Solutions is trusted to deliver relationship management performance at scale: the 5 cornerstones of BIL methodology, the CPS Learn platform, proof of capability, and full assurance and accreditation.",
  robots: { index: false, follow: false },
};

export default function WhyCpsPage() {
  return (
    <>
      <a href="#methodology" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Nav />
      <main className="flex-1">
        <PageHeader
          eyebrow="Why CPS"
          title="The methodology, the platform, and the assurance"
          accent="behind every cohort"
          lede="We do not design and deliver training. We enable behavioural change at scale. Here is how our methodology works, the platform that carries it, the track record behind it, and the assurance that underpins every programme."
        />
        <Methodology />
        <Platform />
        <Proof />
        <Assurance />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
