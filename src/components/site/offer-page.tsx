import { Contact, Footer } from "@/components/site/contact";
import { Nav, ScrollProgress } from "@/components/site/nav";
import { Container, Kicker, SectionTitle } from "@/components/site/reveal";
import { SITE } from "@/lib/site";

export type OfferPageData = {
  path: string;
  kicker: string;
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  forWhom: { title: string; body: string }[];
  stronger: { title: string; body: string }[];
  includes: string[];
  related: { href: string; label: string; line: string }[];
};

export function OfferPage({ page }: { page: OfferPageData }) {
  return (
    <div className="relative min-h-svh bg-bg text-fg">
      <div className="film-grain" aria-hidden="true" />
      <ScrollProgress />
      <Nav />
      <main>
        <section className="pt-28 sm:pt-36">
          <Container>
            <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <Kicker>{page.kicker}</Kicker>
                <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-fg sm:text-5xl">
                  {page.h1}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                  {page.lead}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/#contact"
                    className="inline-flex min-h-11 items-center rounded-md bg-fg px-5 text-sm font-medium text-bg"
                  >
                    Book a shoot
                  </a>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="inline-flex min-h-11 items-center rounded-md border border-border px-5 text-sm font-medium text-fg"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <img
                src={page.image}
                alt={page.imageAlt}
                width={1200}
                height={800}
                className="img-frame aspect-[4/3] w-full rounded-xl object-cover"
              />
            </div>
          </Container>
        </section>

        <section className="border-t border-border py-20 sm:py-28">
          <Container>
            <Kicker>Who this is for</Kicker>
            <SectionTitle className="mt-4 max-w-3xl">
              A commercial brief, not a generic aerial gallery.
            </SectionTitle>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {page.forWhom.map((item) => (
                <article key={item.title} className="border-t border-border pt-5">
                  <h2 className="text-xl font-medium tracking-tight text-fg">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-border py-20 sm:py-28">
          <Container>
            <Kicker>Why this approach</Kicker>
            <SectionTitle className="mt-4 max-w-3xl">
              One crew, planned around the finished film.
            </SectionTitle>
            <div className="mt-12 grid gap-10 lg:grid-cols-3">
              {page.stronger.map((item) => (
                <article key={item.title}>
                  <h2 className="text-xl font-medium tracking-tight text-fg">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-border py-20 sm:py-28">
          <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Kicker>What you actually get</Kicker>
              <SectionTitle className="mt-4">
                One Clare studio. Ground, air, and the cut.
              </SectionTitle>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                West Coast Production is based in {SITE.location}. Licensed by
                the Irish Aviation Authority. Fully insured for commercial
                operations. The same crew plans the flight, holds the camera,
                and cuts the film.
              </p>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {page.includes.map((line) => (
                <li key={line} className="py-4 text-sm leading-relaxed text-fg">
                  {line}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="border-t border-border py-16">
          <Container>
            <Kicker>Related work</Kicker>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {page.related.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-border p-5 transition-colors hover:border-steel"
                >
                  <span className="block text-lg font-medium text-fg">
                    {item.label}
                  </span>
                  <span className="mt-2 block text-sm text-muted">{item.line}</span>
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">
              See the films on the{" "}
              <a href="/#work" className="text-fg underline underline-offset-4">
                studio page
              </a>{" "}
              and on{" "}
              <a
                href={SITE.youtube}
                className="text-fg underline underline-offset-4"
              >
                YouTube
              </a>
              .
            </p>
          </Container>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
