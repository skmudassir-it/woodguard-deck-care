import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Request a free on-site estimate from WoodGuard Deck Care. Deck cleaning, staining, sealing, repairs and annual care plans.",
  openGraph: {
    title: "Contact — WoodGuard Deck Care",
    description: "Get a free, no-obligation quote within one business day.",
    images: ["/images/feature-2.jpg"],
  },
};

const contactItems = [
  {
    icon: Phone,
    label: "Call or text",
    value: "(555) 012-3456",
    href: "tel:+15550123456",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@woodguarddecks.com",
    href: "mailto:hello@woodguarddecks.com",
  },
  {
    icon: MapPin,
    label: "Service area",
    value: "4820 Timberline Ave, Maplewood — serving Maplewood, Lakeview, Fairfield & beyond",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-4 pt-40 pb-14 text-center">
        <FadeIn>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Get your free quote
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tell us about your deck and we will respond within one business day
            with a detailed, no-obligation estimate.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 lg:grid-cols-5">
        <FadeIn className="lg:col-span-2">
          <div className="space-y-5">
            {contactItems.map((c) => (
              <Card
                key={c.label}
                className="glass rounded-3xl border-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent/5 text-accent">
                    <c.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </h2>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="mt-1 block font-medium text-primary transition-colors hover:text-accent"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed text-primary">
                        {c.value}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="glass rounded-3xl p-6">
              <h2 className="font-display text-lg font-semibold text-primary">
                Hours
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Monday – Saturday: 7:00am – 6:00pm
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Sunday: emergency repairs only
              </p>
              <p className="mt-4 rounded-xl bg-white/50 px-3 py-2 text-xs text-muted-foreground">
                Licensed &amp; insured · Free estimates · Serving the whole valley
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-3">
          <Card className="glass rounded-3xl border-white/70">
            <CardContent className="p-6 sm:p-10">
              <h2 className="font-display text-2xl font-semibold text-primary">
                Request a free estimate
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form and we will get back to you within one business
                day.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </section>
    </>
  );
}
