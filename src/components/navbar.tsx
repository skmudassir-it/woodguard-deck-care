"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-white/70 px-4 py-2.5 shadow-md shadow-primary/5 transition-all duration-300",
          scrolled ? "glass-strong" : "glass"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#5c4030] to-[#33241a] text-primary-foreground">
            <ShieldCheck className="size-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            WoodGuard
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-primary/75 transition-colors hover:bg-primary/5 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className={buttonVariants({ size: "sm" })}>
            Get a Quote
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="text-left">
                <SheetTitle className="flex items-center gap-2 font-display text-lg">
                  <ShieldCheck className="size-5 text-accent" />
                  WoodGuard Deck Care
                </SheetTitle>
                <SheetDescription>
                  Deck cleaning, staining, sealing and care plans.
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-4 py-3 text-base font-medium text-primary/85 transition-colors hover:bg-primary/5"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "mt-4")}
                >
                  Get a Quote
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
