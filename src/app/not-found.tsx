import Link from "next/link";
import { Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80vh] w-full max-w-3xl items-center justify-center px-4 pt-32 pb-20">
      <div className="glass w-full rounded-3xl p-10 text-center shadow-xl shadow-primary/10 sm:p-14">
        <p className="font-display text-7xl font-semibold text-primary sm:text-8xl">
          4<span className="text-accent">0</span>4
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-primary sm:text-3xl">
          This board is missing from the deck
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you are looking for does not exist or has been moved. Let us
          get you back on solid footing.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gradient-to-r from-[#5c4030] via-primary to-[#3a281d] shadow-lg shadow-primary/20 hover:from-[#4a3428] hover:to-[#2f2015]"
            )}
          >
            <Home className="mr-2 size-4" aria-hidden />
            Back to Home
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
