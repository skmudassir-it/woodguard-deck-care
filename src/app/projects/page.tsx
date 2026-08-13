import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from recent deck restorations, stain and seal projects and poolside transformations by WoodGuard Deck Care.",
  openGraph: {
    title: "Projects — WoodGuard Deck Care",
    description: "Recent deck transformations, board by board.",
    images: ["/images/project-1.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pt-40 pb-14 text-center">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Case studies
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Real decks, real transformations
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A few recent projects — the challenge, the scope and the result.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-10 px-4 py-8">
        {projects.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.05}>
            <Card
              className={cn(
                "glass overflow-hidden rounded-3xl border-white/70",
                i % 2 === 1 && "lg:[direction:rtl]"
              )}
            >
              <div className="grid lg:grid-cols-2 lg:[direction:ltr]">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[22rem]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <CardContent className="p-8 sm:p-10 lg:[direction:ltr]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                      {p.location}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary/70">
                      <Clock className="size-3.5" aria-hidden />
                      {p.duration}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-primary">
                    {p.title}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.scope.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-primary/15 bg-white/60 px-3 py-1 text-xs text-primary/75"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 flex items-start gap-2.5 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                    {p.result}
                  </p>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants(),
                      "mt-7 bg-gradient-to-r from-[#5c4030] via-primary to-[#3a281d] shadow-lg shadow-primary/20 hover:from-[#4a3428] hover:to-[#2f2015]"
                    )}
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 size-4" aria-hidden />
                  </Link>
                </CardContent>
              </div>
            </Card>
          </FadeIn>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn>
          <CtaBand />
        </FadeIn>
      </section>
    </>
  );
}
