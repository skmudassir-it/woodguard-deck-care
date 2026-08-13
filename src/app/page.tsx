import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { EmblaCarousel, EmblaSlide } from "@/components/embla-carousel";
import { FaqSection } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/services";
import { projects, stats, testimonials } from "@/lib/content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Deck Staining, Sealing & Restoration",
  description:
    "WoodGuard Deck Care protects and restores outdoor wood — deep cleaning, rich staining, durable sealing, repairs and annual care plans across Maplewood, Lakeview and beyond.",
  openGraph: {
    title: "WoodGuard Deck Care — Deck Staining, Sealing & Restoration",
    description:
      "Protecting and restoring outdoor wood with premium finishes and annual care plans.",
    images: ["/images/og.jpg"],
  },
};

const features = [
  {
    icon: Sparkles,
    title: "Premium finishes",
    text: "Hand-applied stains and UV-blocking sealants from trusted professional lines — never rushed, never watered down.",
  },
  {
    icon: ShieldCheck,
    title: "Weatherproof protection",
    text: "Breathable water-repellent systems that bead moisture and stop rot, mildew and sun damage at the source.",
  },
  {
    icon: Leaf,
    title: "Eco-friendly products",
    text: "Low-VOC, wood-safe cleaners and finishes that protect your family, your pets and your landscaping.",
  },
  {
    icon: Award,
    title: "Workmanship guarantee",
    text: "Every project is backed by our workmanship guarantee and a two-year warranty on stain and seal work.",
  },
  {
    icon: Waves,
    title: "Gentle, thorough cleaning",
    text: "pH-balanced two-step cleaning that lifts years of grime without gouging or bleaching your wood.",
  },
  {
    icon: CalendarCheck,
    title: "Annual care plans",
    text: "Scheduled cleanings and inspections keep your deck perfect year-round — and members save on every repair.",
  },
];

const whyUs = [
  "Two-coat hand application on all horizontal surfaces",
  "Stain colors matched to your home and wood species",
  "Landscaping protected and site left spotless",
  "Honest recommendations — we will tell you if you do not need a re-stain",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WoodGuard Deck Care",
  image: "https://woodguard-deck-care.amsitservices.com/images/og.jpg",
  url: "https://woodguard-deck-care.amsitservices.com",
  telephone: "+1-555-012-3456",
  email: "hello@woodguarddecks.com",
  priceRange: "$$",
  description:
    "Professional deck cleaning, staining, sealing and restoration with annual maintenance plans.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4820 Timberline Ave",
    addressLocality: "Maplewood",
    addressRegion: "OR",
    postalCode: "97015",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.4295, longitude: -122.5712 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/woodguarddeckcare",
    "https://www.instagram.com/woodguarddeckcare",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 pt-36 pb-20 lg:grid-cols-2 lg:items-center lg:pt-44">
        <FadeIn>
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-primary/80">
            <ShieldCheck className="size-3.5 text-accent" />
            Licensed &amp; insured · Free estimates
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Deck care that keeps your wood{" "}
            <span className="italic text-accent">beautiful</span> for decades.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Deep cleaning, rich staining and durable sealing — plus repairs and
            annual care plans that protect your investment season after season.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-gradient-to-r from-[#5c4030] via-primary to-[#3a281d] shadow-lg shadow-primary/20 hover:from-[#4a3428] hover:to-[#2f2015]"
              )}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 size-4" aria-hidden />
            </Link>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-primary/25 bg-white/60 backdrop-blur-xl"
              )}
            >
              Explore Services
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex gap-0.5 text-accent" aria-label="Rated 4.9 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" aria-hidden />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              4.9 from 200+ homeowners across the valley
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="glass relative rounded-3xl p-2.5 shadow-xl shadow-primary/10">
            <Image
              src="/images/hero.jpg"
              alt="Backyard wooden deck freshly sealed with rich walnut stain in warm afternoon sunlight"
              width={1280}
              height={800}
              priority
              className="aspect-[16/10] w-full rounded-[1.25rem] object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="glass-strong absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                <ShieldCheck className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">UV-blocking sealants</p>
                <p className="text-xs text-muted-foreground">2-year workmanship warranty</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Feature grid */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <Card className="glass h-full rounded-3xl border-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="p-6">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent/5 text-accent">
                    <f.icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Stats strip */}
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

      {/* Services grid */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            What we do
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Complete deck care, start to finish
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            From the first deep clean to the final protective coat — and every
            repair in between.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                      <h3 className="font-display text-lg font-semibold text-primary">
                        {s.title}
                      </h3>
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

      {/* Why us with feature image */}
      <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 lg:grid-cols-2">
        <FadeIn>
          <div className="glass relative rounded-3xl p-2.5 shadow-xl shadow-primary/10">
            <Image
              src="/images/feature-1.jpg"
              alt="Cozy wooden deck at dusk with warm string lights after sealing"
              width={1280}
              height={800}
              className="aspect-[16/11] w-full rounded-[1.25rem] object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Why WoodGuard
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Craftsmanship you can walk on
          </h2>
          <p className="mt-4 text-muted-foreground">
            A beautiful deck is the result of patient prep, quality products and
            honest advice. That is exactly what we deliver on every project.
          </p>
          <ul className="mt-6 space-y-3">
            {whyUs.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                <span className="text-sm text-primary/85">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className={cn(buttonVariants({ variant: "outline" }), "mt-8 border-primary/25 bg-white/60 backdrop-blur-xl")}
          >
            More About Us
          </Link>
        </FadeIn>
      </section>

      {/* Projects slider */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Recent work
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Transformations we are proud of
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <EmblaCarousel>
            {projects.map((p) => (
              <EmblaSlide key={p.title}>
                <Card className="glass h-full overflow-hidden rounded-3xl border-white/70">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display text-lg font-semibold text-primary">
                      {p.title}
                    </h3>
                    <p className="text-sm text-accent">{p.location}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.result}
                    </p>
                  </CardContent>
                </Card>
              </EmblaSlide>
            ))}
          </EmblaCarousel>
        </FadeIn>
      </section>

      {/* Testimonials slider */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Homeowners love their decks again
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <EmblaCarousel>
            {testimonials.map((t) => (
              <EmblaSlide key={t.name}>
                <Card className="glass flex h-full flex-col rounded-3xl border-white/70 p-6">
                  <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" aria-hidden />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-primary/85">
                    “{t.quote}”
                  </p>
                  <div className="mt-5 border-t border-primary/10 pt-4">
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.location}</p>
                  </div>
                </Card>
              </EmblaSlide>
            ))}
          </EmblaCarousel>
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-primary sm:text-4xl">
            Questions, answered
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <FaqSection />
        </FadeIn>
      </section>

      {/* Final CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <FadeIn>
          <CtaBand />
        </FadeIn>
      </section>
    </>
  );
}
