import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200",
        scrolled || open
          ? "border-b border-border bg-bg/92"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a href="#top" className="flex items-center gap-3 min-h-11">
          <img
            src="/wcp-badge.png"
            alt=""
            className="size-10 rounded-full object-cover"
          />
          <span className="text-sm font-semibold tracking-label uppercase text-fg">
            {SITE.short}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-label text-muted transition-colors duration-150 hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="default" size="cta">
            <a href="#contact">Book a shoot</a>
          </Button>
        </nav>

        <button
          type="button"
          className="relative flex size-11 items-center justify-center rounded-md text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu
            className={cn(
              "size-5 transition-[opacity,transform,filter] duration-200",
              open ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100",
            )}
          />
          <X
            className={cn(
              "absolute size-5 transition-[opacity,transform,filter] duration-200",
              open ? "scale-100 opacity-100" : "scale-[0.25] opacity-0 blur-[4px]",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-bg md:hidden"
      >
        <nav className="flex flex-col gap-1 px-5 py-6" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center text-2xl font-medium text-fg"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="cta" className="mt-4">
            <a href="#contact" onClick={() => setOpen(false)}>
              Book a shoot
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? h.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full origin-left bg-steel transition-transform duration-75 ease-out"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}
