import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, HandHeart, Leaf, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { CtaBand } from "@/components/cta-band";
import { stats } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "WoodGuard Deck Care has protected and restored outdoor wood for over a decade — a small team obsessed with prep, products and honest advice.",
  openGraph: {
    title: "About Us — WoodGuard Deck Care",
    description:
      "A decade of protecting outdoor wood with craftsmanship and honesty.",
    images: ["/images/about.jpg"],
  },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We tell you what your deck actually needs — even when that means a smaller project and a smaller invoice.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    text: "Patient prep, quality products and hand application. We finish decks the way we would want our own finished.",
  },
  {
    icon: HandHeart,
    title: "Respect",
    text: "For your home, your time and your landscape. We protect plants, clean up completely and show up when we say we will.",
  },
  {
    icon: Leaf,
    title: "Stewardship",
    text: "Low-VOC, wood-safe products and honest guidance that extend the life of your wood — and keep it out of landfills.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-40 pb-16 lg:grid-cols-2">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            About us
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            The deck is where life happens. We keep it beautiful.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            WoodGuard Deck Care started with one pressure washer, one truck and a
            simple belief: outdoor wood deserves the same care as the rest of your
            home. Twelve years and 850 decks later, that belief still drives
            everything we do.
          </p>
          <p className="mt-4 text-muted-foreground">
            We are a small, local team of trained applicators — no subcontractors,
            no call centers. The person who quotes your job is often the person
            who stains your deck.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-r from-[#5c4030] via-primary to-[#3a281d] shadow-lg shadow-primary/20 hover:from-[#4a3428] hover:to-[#2f2015]"
              )}
            >
              Work With Us
            </Link>
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary/25 bg-white/60 backdrop-blur-xl"
              )}
            >
              See Our Work
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <div className="glass relative rounded-3xl p-2.5 shadow-xl shadow-primary/10">
            <Image
              src="/images/about.jpg"
              alt="The WoodGuard Deck Care team at work on a large wooden deck"
              width={1280}
              height={800}
              className="aspect-[16/10] w-full rounded-[1.25rem] object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8">
        <FadeIn>
          <div className="glass grid grid-cols-2 gap-6 rounded-3xl p-8 sm:p-10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "text-center",
                  i > 0 && "lg:border-l lg:border-primary/10"
                )}
              >
                <p className="font-display text-4xl font-semibold text-primary">
                  {s.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            What we stand for
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Four values, every single job
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <Card className="glass h-full rounded-3xl border-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="p-6">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent/5 text-accent">
                    <v.icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn>
          <CtaBand />
        </FadeIn>
      </section>
    </>
  );
}
