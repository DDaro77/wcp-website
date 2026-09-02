import { Nav, ScrollProgress } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import {
  AtlanticLight,
  Builders,
  GroundVsAir,
  House,
  Manifesto,
  Scale,
  Stats,
} from "@/components/site/story";
import { Services, Work } from "@/components/site/services-work";
import { Contact, Footer } from "@/components/site/contact";

export function SitePage() {
  return (
    <div className="relative min-h-svh bg-bg text-fg">
      <div className="film-grain" aria-hidden="true" />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Scale />
        <AtlanticLight />
        <Builders />
        <House />
        <Stats />
        <Services />
        <Work />
        <GroundVsAir />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
