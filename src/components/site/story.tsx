import {
  ACHIEVEMENTS,
  GROUND_VS_AIR,
  LIGHT_PILLARS,
  SCALE,
  SITE,
  STATS,
} from "@/lib/site";
import { Container, Kicker, Reveal, SectionTitle } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";

export function Manifesto() {
  return (
    <section id="manifesto" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <Kicker>West Coast Production</Kicker>
          <p className="mt-6 max-w-4xl text-section font-medium text-fg">
            {SITE.manifesto}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function Scale() {
  return (
    <section id="craft" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <Kicker>The scale of capture</Kicker>
          <SectionTitle className="mt-4 max-w-3xl">
            We work at the edge of the Atlantic
          </SectionTitle>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {SCALE.map((item, i) => (
            <Reveal key={item.n} delay={i * 80}>
              <p className="font-mono text-xs tracking-cinema text-steel">
                {item.n}
              </p>
              <h3 className="mt-4 text-3xl font-medium text-fg">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AtlanticLight() {
  return (
    <section className="relative isolate min-h-stage overflow-hidden">
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/cliffs.jpg"
        aria-hidden="true"
      >
        <source src="/atlantic.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/25" />
      <Container className="relative z-10 flex min-h-stage items-center py-24">
        <Reveal>
          <Kicker>West Coast Production</Kicker>
          <SectionTitle className="mt-4 max-w-xl">
            Harnessing Atlantic light
          </SectionTitle>
          <ul className="mt-10 max-w-md space-y-5">
            {LIGHT_PILLARS.map((line) => (
              <li
                key={line}
                className="border-t border-border pt-5 text-lg text-fg"
              >
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export function Builders() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <Kicker>West Coast Production</Kicker>
          <SectionTitle className="mt-4 max-w-3xl">
            We're cinematographers.{" "}
            <em className="font-serif font-normal italic text-steel">
              We've captured the impossible.
            </em>
          </SectionTitle>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <img
            src="/operator.jpg"
            alt="West Coast Production operator on an Irish cliff at blue hour"
            className="img-frame h-72 w-full rounded-xl object-cover sm:h-shot"
          />
          <img
            src="/drone.jpg"
            alt="Cinema camera drone in flight over the Atlantic"
            className="img-frame h-72 w-full rounded-xl object-cover sm:h-shot"
          />
        </div>
        <ul className="mt-14 grid gap-0 sm:grid-cols-2">
          {ACHIEVEMENTS.map((line, i) => (
            <li
              key={line}
              className="border-t border-border py-4 text-sm leading-relaxed text-muted sm:px-4 sm:odd:pl-0"
            >
              <span className="mr-3 font-mono text-xs tracking-label text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              {line}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function House() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/property.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-bg/80" />
      <Container className="relative z-10 py-28 sm:py-36">
        <Reveal>
          <Kicker>West Coast Production</Kicker>
          <SectionTitle className="mt-4 max-w-3xl">
            A production house built for air and earth
          </SectionTitle>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Combining aerial cinematography, FPV, 360°, 8K stills and reels under
            one roof — licensed, insured, and based on the Atlantic edge.
          </p>
          <Button asChild variant="outline" size="cta" className="mt-10">
            <a href="#work">See the work</a>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

export function Stats() {
  return (
    <section id="scale" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <Kicker>Scaling for massive capacity</Kicker>
          <SectionTitle className="mt-4 max-w-3xl">
            Production at the scale of the west
          </SectionTitle>
        </Reveal>
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 80}>
              <p className="text-stat font-medium text-fg">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-label text-muted">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function GroundVsAir() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <Kicker>West Coast Production</Kicker>
          <SectionTitle className="mt-4 max-w-3xl">
            The Atlantic edge is the only scalable studio
          </SectionTitle>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h3 className="text-xl font-medium text-muted">
              {GROUND_VS_AIR.ground.title}
            </h3>
            <ul className="mt-6 space-y-0">
              {GROUND_VS_AIR.ground.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-border py-4 text-fg/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h3 className="text-xl font-medium text-steel">
              {GROUND_VS_AIR.air.title}
            </h3>
            <ul className="mt-6 space-y-0">
              {GROUND_VS_AIR.air.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-border-strong py-4 text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
