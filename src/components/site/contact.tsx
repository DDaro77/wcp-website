import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { Check, Instagram, Phone, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Container, Kicker, Reveal, SectionTitle } from "@/components/site/reveal";
import { PROJECT_TYPES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Tell us who to reply to."),
  email: z.string().email("A real email helps us send the brief back."),
  type: z.string().min(1, "Pick a project type."),
  location: z.string().min(2, "Where are we flying?"),
  message: z.string().min(12, "A few lines on the shoot is enough."),
});

type Fields = z.infer<typeof schema>;

const empty: Fields = {
  name: "",
  email: "",
  type: "Hotel & Tourism",
  location: "",
  message: "",
};

export function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(fields);
    if (!parsed.success) {
      const next: Partial<Record<keyof Fields, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof Fields]) {
          next[key as keyof Fields] = issue.message;
        }
      }
      setErrors(next);
      return;
    }

    const existing = JSON.parse(
      localStorage.getItem("wcp-inquiries") ?? "[]",
    ) as unknown[];
    existing.push({ ...parsed.data, at: new Date().toISOString() });
    localStorage.setItem("wcp-inquiries", JSON.stringify(existing));
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <Kicker>The next step</Kicker>
            <SectionTitle className="mt-4">Your reel starts on the west</SectionTitle>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              West Coast Production is licensed by the Irish Aviation Authority
              and fully insured. Hotels, tourism, property, commercial, FPV,
              360° — one operation.
            </p>
            <div className="mt-10 space-y-5">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex min-h-11 items-center gap-3 text-fg transition-colors hover:text-steel"
              >
                <Phone className="size-4 text-steel" />
                <span className="text-lg">{SITE.phoneDisplay}</span>
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 text-fg transition-colors hover:text-steel"
              >
                <Instagram className="size-4 text-steel" />
                <span>{SITE.instagramHandle}</span>
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center gap-3 text-fg transition-colors hover:text-steel"
              >
                <Youtube className="size-4 text-steel" />
                <span>West Coast Production on YouTube</span>
              </a>
              <p className="font-mono text-xs uppercase tracking-cinema text-muted">
                {SITE.location}
                <br />
                {SITE.coords}
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            {sent ? (
              <div className="flex min-h-80 flex-col justify-center rounded-xl border border-border bg-bg-elevated p-8">
                <Check className="size-8 text-steel" />
                <h3 className="mt-4 text-2xl font-medium text-fg">
                  Brief received.
                </h3>
                <p className="mt-3 max-w-md text-muted">
                  West Coast Production has your shoot notes. Prefer to talk
                  now?
                </p>
                <Button asChild size="cta" className="mt-8 w-fit">
                  <a href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay}</a>
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <Field label="Name" error={errors.name}>
                  <Input
                    name="name"
                    autoComplete="name"
                    value={fields.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <Input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={fields.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@studio.com"
                  />
                </Field>
                <div className="space-y-2">
                  <Label>Project type</Label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {PROJECT_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => set("type", type)}
                        className={cn(
                          "min-h-11 rounded-md border px-3 text-left text-sm transition-colors duration-150",
                          fields.type === type
                            ? "border-steel bg-fg/5 text-fg"
                            : "border-border text-muted hover:text-fg",
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <Field label="Location" error={errors.location}>
                  <Input
                    name="location"
                    value={fields.location}
                    onChange={(e) => set("location", e.target.value)}
                    placeholder="Cliffs, hotel, estate, county…"
                  />
                </Field>
                <Field label="The brief" error={errors.message}>
                  <Textarea
                    name="message"
                    value={fields.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="What are we capturing, and when?"
                  />
                </Field>
                <Button type="submit" size="cta" className="w-full sm:w-auto">
                  Send brief
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
      {error ? <p className="text-sm text-muted">{error}</p> : null}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <img
            src="/wcp-badge.png"
            alt=""
            className="size-14 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-label text-fg">
              West Coast Production
            </p>
            <p className="mt-1 font-serif italic text-muted">{SITE.motto}</p>
          </div>
        </div>
        <p className="font-mono text-xs uppercase tracking-label text-subtle">
          Ireland · {SITE.coords}
        </p>
      </Container>
    </footer>
  );
}
