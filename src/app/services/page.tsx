import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Deck cleaning and restoration, wood staining and sealing, repairs, power washing, mildew protection, composite deck care and annual maintenance plans.",
  openGraph: {
    title: "Services — WoodGuard Deck Care",
    description:
      "Every service your deck needs, from deep cleaning to annual care plans.",
    images: ["/images/feature-2.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pt-40 pb-14 text-center">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Services
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Every service your deck needs
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Seven specialized services — or one complete care plan. Start with a
            free on-site estimate and honest recommendations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-r from-[#5c4030] via-primary to-[#3a281d] shadow-lg shadow-primary/20 hover:from-[#4a3428] hover:to-[#2f2015]"
              )}
            >
              Get a Free Quote
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary/25 bg-white/60 backdrop-blur-xl"
              )}
            >
              See Pricing
            </Link>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.08}>
              <Link href={`/services/${s.slug}`} className="group block h-full">
                <Card className="glass h-full overflow-hidden rounded-3xl border-white/70 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-xl group-hover:shadow-primary/10">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent/5 text-accent">
                        <s.icon className="size-4.5" aria-hidden />
                      </span>
                      <h2 className="font-display text-lg font-semibold text-primary">
                        {s.title}
                      </h2>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.tagline}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Learn more
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </CardContent>
                </Card>
              </Link>
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
