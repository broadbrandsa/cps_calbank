import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Challenge } from "@/components/sections/challenge";
import { Solution } from "@/components/sections/solution";
import { Transitions } from "@/components/sections/transitions";
import { Tracks } from "@/components/sections/tracks";
import { Journey } from "@/components/sections/journey";
import { Pricing } from "@/components/sections/pricing";
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
        <Transitions />
        <Tracks />
        <Journey />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
