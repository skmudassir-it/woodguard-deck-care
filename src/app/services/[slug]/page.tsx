import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: service.title,
    description: service.tagline,
    openGraph: {
      title: `${service.title} — WoodGuard Deck Care`,
      description: service.tagline,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug);
  const Icon = service.icon;

  return (
    <>
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 pt-40 pb-16 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <Link href="/services" className="transition-colors hover:text-accent">
              Services
            </Link>
            <span className="mx-2 text-primary/30">/</span>
            <span className="text-primary/70">{service.title}</span>
          </nav>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accent/5 text-accent">
              <Icon className="size-6" aria-hidden />
            </span>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              {service.title}
            </h1>
          </div>
          <p className="mt-5 text-lg text-muted-foreground">{service.tagline}</p>
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
        <FadeIn delay={0.12}>
          <div className="glass relative rounded-3xl p-2.5 shadow-xl shadow-primary/10">
            <Image
              src={service.image}
              alt={service.title}
              width={1280}
              height={800}
              className="aspect-[16/10] w-full rounded-[1.25rem] object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 lg:grid-cols-2">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-primary">
            What to expect
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
            {service.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Card className="glass rounded-3xl border-white/70">
            <CardContent className="p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-primary">
                Included in every {service.title.toLowerCase()} project
              </h2>
              <ul className="mt-5 space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                    <span className="text-sm text-primary/85">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-primary">
            More services
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="glass group flex items-center gap-3 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accent/5 text-accent">
                  <o.icon className="size-4.5" aria-hidden />
                </span>
                <span className="text-sm font-medium text-primary">{o.title}</span>
                <ArrowRight
                  className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12">
        <FadeIn>
          <CtaBand />
        </FadeIn>
      </section>
    </>
  );
}
