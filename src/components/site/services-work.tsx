import { useState } from "react";
import { SERVICES, WORK } from "@/lib/site";
import { Container, Kicker, Reveal, SectionTitle } from "@/components/site/reveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <Kicker>Producing for earth and Atlantic</Kicker>
          <SectionTitle className="mt-4 max-w-3xl">
            Aerial. FPV. 360°. 8K stills. Reels.
          </SectionTitle>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col">
            {SERVICES.map((service, i) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "border-t border-border py-5 text-left transition-colors duration-150 last:border-b",
                  i === active ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                <span className="block text-2xl font-medium tracking-tight sm:text-3xl">
                  {service.name}
                </span>
                <span className="mt-1 block text-sm text-muted">
                  {service.line}
                </span>
              </button>
            ))}
          </div>

          <Reveal>
            <div className="overflow-hidden rounded-xl bg-bg-elevated">
              <img
                key={current.id}
                src={current.image}
                alt={current.alt}
                className="img-frame aspect-video w-full object-cover"
              />
              <div className="p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-cinema text-steel">
                  {current.kicker}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  {current.body}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function Work() {
  const [open, setOpen] = useState<number | null>(null);
  const selected = open !== null ? WORK[open] : null;

  return (
    <section id="work" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <Reveal>
          <Kicker>Selected work</Kicker>
          <SectionTitle className="mt-4">West Coast Production</SectionTitle>
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-xl text-left"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="img-frame aspect-photo w-full object-cover transition-transform duration-500 ease-out-quart group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/50 to-transparent p-5 pt-16">
                <p className="text-sm font-medium text-fg">{item.title}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-label text-steel">
                  {item.meta}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Container>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="p-2 sm:p-3">
          {selected ? (
            <>
              <DialogTitle className="sr-only">{selected.title}</DialogTitle>
              <DialogDescription className="sr-only">
                {selected.meta}. {selected.alt}
              </DialogDescription>
              <img
                src={selected.src}
                alt={selected.alt}
                className="img-frame aspect-video w-full rounded-lg object-cover"
              />
              <div className="px-3 pb-3 pt-4 sm:px-4">
                <p className="text-lg font-medium text-fg">{selected.title}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-label text-muted">
                  {selected.meta}
                </p>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
