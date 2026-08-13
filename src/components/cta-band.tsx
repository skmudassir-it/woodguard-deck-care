import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand() {
  return (
    <section className="glass relative overflow-hidden rounded-3xl shadow-lg shadow-primary/5">
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/images/cta.jpg"
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      </div>
      <div className="relative px-6 py-16 text-center sm:px-12">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-accent">
          Free on-site estimates
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold text-primary sm:text-4xl">
          Ready to protect your deck?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Tell us about your project and get a detailed, no-obligation quote
          within one business day — with honest recommendations, never upselling.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gradient-to-r from-[#5c4030] via-primary to-[#3a281d] shadow-lg shadow-primary/20 hover:from-[#4a3428] hover:to-[#2f2015]"
            )}
          >
            Get a Free Estimate
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
      </div>
    </section>
  );
}
