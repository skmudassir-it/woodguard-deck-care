"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmblaCarousel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const frame = requestAnimationFrame(onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      cancelAnimationFrame(frame);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={className}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Previous slide"
          className="flex size-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary shadow-sm transition-all hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Next slide"
          className="flex size-11 items-center justify-center rounded-full border border-primary/15 bg-white/70 text-primary shadow-sm transition-all hover:border-accent/50 hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}

export function EmblaSlide({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("embla__slide", className)}>{children}</div>;
}
