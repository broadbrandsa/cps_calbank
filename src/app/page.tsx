import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Challenge } from "@/components/sections/challenge";
import { Solution } from "@/components/sections/solution";
import { Pathways } from "@/components/sections/pathways";
import { Retail } from "@/components/sections/retail";
import { Business } from "@/components/sections/business";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="calbank-theme flex min-h-full flex-1 flex-col">
      <a href="#challenge" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Challenge />
        <Solution />
        <Pathways />
        <Retail />
        <Business />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
