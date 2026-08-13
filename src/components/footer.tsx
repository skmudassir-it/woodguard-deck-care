import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { services } from "@/lib/services";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-6xl px-4 pb-8">
      <div className="glass rounded-3xl p-8 shadow-lg shadow-primary/5 sm:p-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#5c4030] to-[#33241a] text-primary-foreground">
                <ShieldCheck className="size-5" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                WoodGuard
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Protecting and restoring outdoor wood for over a decade — cleaning,
              staining, sealing and care plans that keep decks beautiful for
              years.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-primary/15 bg-white/60 text-primary transition-colors hover:border-accent/50 hover:text-accent"
              >
                <i className="fa-brands fa-facebook-f" aria-hidden />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-primary/15 bg-white/60 text-primary transition-colors hover:border-accent/50 hover:text-accent"
              >
                <i className="fa-brands fa-instagram" aria-hidden />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex size-10 items-center justify-center rounded-full border border-primary/15 bg-white/60 text-primary transition-colors hover:border-accent/50 hover:text-accent"
              >
                <i className="fa-brands fa-youtube" aria-hidden />
              </a>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                aria-label="Google reviews"
                className="flex size-10 items-center justify-center rounded-full border border-primary/15 bg-white/60 text-primary transition-colors hover:border-accent/50 hover:text-accent"
              >
                <i className="fa-brands fa-google" aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                4820 Timberline Ave, Maplewood
              </li>
              <li>
                <a
                  href="tel:+15550123456"
                  className="flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Phone className="size-4 shrink-0 text-accent" />
                  (555) 012-3456
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@woodguarddecks.com"
                  className="flex items-center gap-2.5 transition-colors hover:text-accent"
                >
                  <Mail className="size-4 shrink-0 text-accent" />
                  hello@woodguarddecks.com
                </a>
              </li>
            </ul>
            <p className="mt-4 rounded-xl bg-white/50 px-3 py-2 text-xs text-muted-foreground">
              Mon–Sat, 7am–6pm · Licensed &amp; insured
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-primary/10 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 WoodGuard Deck Care. All rights reserved.</p>
          <p>Proudly serving Maplewood, Lakeview, Fairfield &amp; beyond.</p>
        </div>
      </div>
    </footer>
  );
}
