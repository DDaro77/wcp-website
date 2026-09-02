import { useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { SITE } from "@/lib/site";

export function Hero() {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <section
      id="top"
      className="relative isolate flex h-svh flex-col justify-end overflow-hidden"
    >
      <video
        className="absolute inset-0 size-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero.jpg"
        aria-hidden="true"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/30" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start px-5 pb-24 pt-24 sm:px-8">
        <img
          src="/wcp-badge.png"
          alt="West Coast Production"
          className="mb-6 size-16 rounded-full object-cover sm:size-20"
        />
        <p className="font-mono text-xs uppercase tracking-cinema text-steel">
          Ireland · {SITE.coords}
        </p>
        <h1 className="metal mt-3 text-hero font-semibold uppercase">WCP</h1>
        <p className="mt-1 text-lg font-medium uppercase tracking-cinema text-fg sm:text-xl">
          West Coast Production
        </p>
        <p className="mt-6 max-w-xl text-lg text-fg/90 sm:text-xl">
          {SITE.tagline}
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button size="cta" onClick={() => setReelOpen(true)} className="min-h-12">
            <Play className="size-3.5 ml-0.5" />
            Watch reel
          </Button>
          <Button asChild variant="outline" size="cta" className="min-h-12">
            <a href="#contact">Book a shoot</a>
          </Button>
        </div>
      </div>

      <a
        href="#manifesto"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-muted transition-colors hover:text-fg"
        aria-label="Scroll to manifesto"
      >
        <ChevronDown className="size-5 animate-bounce" />
      </a>

      <Dialog open={reelOpen} onOpenChange={setReelOpen}>
        <DialogContent className="overflow-hidden p-2 sm:p-3">
          <DialogTitle className="sr-only">West Coast Production reel</DialogTitle>
          <DialogDescription className="sr-only">
            Aerial cinematography reel along the Irish west coast.
          </DialogDescription>
          <video
            className="aspect-video w-full rounded-lg object-cover img-frame"
            controls
            autoPlay
            playsInline
            poster="/hero.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </DialogContent>
      </Dialog>
    </section>
  );
}
