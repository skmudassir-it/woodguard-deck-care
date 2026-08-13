import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { FaqSection } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for deck cleaning, staining, sealing and annual care plans. Free on-site estimates and no hidden fees.",
  openGraph: {
    title: "Pricing — WoodGuard Deck Care",
    description: "Honest, transparent pricing for deck care.",
    images: ["/images/feature-2.jpg"],
  },
};

const tiers = [
  {
    name: "Clean & Restore",
    price: "$489",
    cadence: "one-time",
    highlight: false,
    blurb: "Deep clean and brighten a standard 400 sq ft deck, ready for a finish.",
    features: [
      "Two-step pH-balanced deep clean",
      "Brightening and mildew treatment",
      "Light sanding of raised grain",
      "Prep check of nails and fasteners",
      "Complete site cleanup included",
    ],
    cta: "Book This Service",
  },
  {
    name: "Stain & Seal",
    price: "$789",
    cadence: "one-time",
    highlight: true,
    blurb: "Full color and protection for a standard 400 sq ft deck, two coats included.",
    features: [
      "Everything in Clean & Restore",
      "Hand-applied premium stain",
      "Two coats on all horizontal surfaces",
      "UV-blocking topcoat",
      "2-year workmanship warranty",
    ],
    cta: "Book This Service",
  },
  {
    name: "Annual Care Plan",
    price: "$99",
    cadence: "per month",
    highlight: false,
    blurb: "Year-round protection with scheduled care and member-only savings.",
    features: [
      "Spring deep clean every year",
      "Fall inspection and touch-up sealing",
      "Priority scheduling",
      "10% off repairs",
      "5% off full stain projects",
    ],
    cta: "Join the Plan",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pt-40 pb-14 text-center">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Transparent pricing, no surprises
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Prices shown are for a standard 400 sq ft deck. Every project starts
            with a free on-site estimate — final quotes are always detailed and
            itemized.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 lg:grid-cols-3">
        {tiers.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <Card
              className={cn(
                "glass relative h-full rounded-3xl border-white/70 p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10",
                t.highlight && "border-accent/50 shadow-xl shadow-accent/10"
              )}
            >
              {t.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-oak-soft px-4 py-1 text-xs font-bold text-white shadow-md">
                  Most popular
                </span>
              )}
              <CardContent className="flex h-full flex-col p-8">
                <h2 className="font-display text-xl font-semibold text-primary">
                  {t.name}
                </h2>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold text-primary">
                    {t.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{t.cadence}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{t.blurb}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <Check className="size-3" aria-hidden />
                      </span>
                      <span className="text-sm text-primary/85">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-8 w-full",
                    t.highlight
                      ? "bg-gradient-to-r from-[#5c4030] via-primary to-[#3a281d] shadow-lg shadow-primary/20 hover:from-[#4a3428] hover:to-[#2f2015]"
                      : "border-primary/25 bg-white/60 backdrop-blur-xl"
                  )}
                >
                  {t.cta}
                  <ArrowRight className="ml-2 size-4" aria-hidden />
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 py-10">
        <FadeIn>
          <div className="glass flex items-start gap-4 rounded-3xl p-6">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent/5 text-accent">
              <Sparkles className="size-5" aria-hidden />
            </span>
            <div>
              <h2 className="font-display text-lg font-semibold text-primary">
                Custom quotes are free
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Two-story decks, unusual wood species, large composite patios or
                combined repairs — tell us about your project and we will prepare
                a detailed quote within one business day. No obligation, no
                pressure, ever.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary">
            Pricing questions
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <FaqSection />
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn>
          <CtaBand />
        </FadeIn>
      </section>
    </>
  );
}
