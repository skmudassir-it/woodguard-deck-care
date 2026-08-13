import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  Droplets,
  Hammer,
  Layers,
  Paintbrush,
  ShieldCheck,
  Waves,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  features: string[];
  image: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "deck-cleaning-and-restoration",
    title: "Deck Cleaning & Restoration",
    tagline: "Bring weathered, gray wood back to life with a deep clean and brightening treatment.",
    description: [
      "Years of sun, rain and foot traffic leave decks looking tired — gray, stained and rough to the touch. Our two-step cleaning and restoration process strips away embedded dirt, mildew and old failed finishes, then brightens the wood so it accepts a new protective coat evenly.",
      "We use pH-balanced, wood-safe cleaners rather than harsh bleaches, so your deck comes out looking fresh without damaging the fibers. Restoration is the foundation of every great finish — and the first step in almost every project we take on.",
    ],
    features: [
      "Deep two-step clean with wood-safe pH-balanced products",
      "Brightening treatment to lift gray and water stains",
      "Mildew and algae removal, including between boards",
      "Light sanding and spot-levelling of raised grain",
      "Debris, nail and staple check across the full surface",
      "Ready for staining or sealing within 24–48 hours",
    ],
    image: "/images/service-1.jpg",
    icon: Waves,
  },
  {
    slug: "wood-staining-and-sealing",
    title: "Wood Staining & Sealing",
    tagline: "Rich, even color and durable protection applied by hand — never rushed.",
    description: [
      "A great stain job is all in the prep and the application. We hand-apply premium semi-transparent and solid-body stains with pads and brushes, working the finish into the grain for even color that lasts. Every project is finished with a UV-blocking sealer matched to your wood type and climate.",
      "Choose from a curated palette of warm oak, walnut, cedar and driftwood tones — or bring us a sample and we will color-match it. Two coats are always included on horizontal surfaces for maximum durability.",
    ],
    features: [
      "Hand application with pads and brushes for even coverage",
      "Premium semi-transparent and solid-body stain lines",
      "Curated palette of warm oak, walnut, cedar and gray tones",
      "Two coats on all horizontal surfaces, always included",
      "UV-blocking topcoat matched to wood type and climate",
      "Dry-to-touch in hours, fully cured and walkable in days",
    ],
    image: "/images/service-2.jpg",
    icon: Paintbrush,
  },
  {
    slug: "deck-repair-and-board-replacement",
    title: "Deck Repair & Board Replacement",
    tagline: "Rotted boards, popped nails, wobbly rails — repaired properly, not patched.",
    description: [
      "Damaged boards don't just look bad — they compromise the whole structure and create safety hazards. We inspect every joist, fastener and rail connection, then replace rotted or split boards with pressure-treated or cedar lumber matched to your existing deck.",
      "We also address popped nails, splintering edges, loose balusters and squeaky boards. Small repairs now prevent expensive full rebuilds later, and every repair comes with our workmanship guarantee.",
    ],
    features: [
      "Full structural inspection of joists, beams and connections",
      "Rotted and split board replacement with matched lumber",
      "Popped nail and screw re-securing across the surface",
      "Baluster, railing and stair tread reinforcement",
      "Splinter sanding and edge rounding for barefoot safety",
      "Workmanship guarantee on all repair work",
    ],
    image: "/images/service-3.jpg",
    icon: Hammer,
  },
  {
    slug: "power-washing",
    title: "Power Washing",
    tagline: "Targeted pressure washing that removes grime without shredding your wood.",
    description: [
      "There is a fine line between cleaning a deck and damaging it with pressure. We use wide fan tips, controlled pressure and the right distance for your wood species — removing dirt, mildew, pollen and old finish remnants without gouging the soft grain.",
      "Power washing is often the fastest way to transform a deck, patio or fence. We protect nearby landscaping and surfaces, contain runoff, and always follow with a wood-safe rinse.",
    ],
    features: [
      "Pressure matched to your wood species and condition",
      "Wide-fan nozzles to prevent grain gouging",
      "Driveways, patios, fences and siding also welcome",
      "Landscaping and surface protection as standard",
      "Eco-friendly cleaning agents with contained runoff",
      "Same-visit quote for stain and seal follow-up",
    ],
    image: "/images/service-4.jpg",
    icon: Droplets,
  },
  {
    slug: "mildew-and-weather-protection",
    title: "Mildew & Weather Protection",
    tagline: "Water-repellent sealants that stop mildew, moss and moisture damage at the source.",
    description: [
      "Moisture is the number one enemy of outdoor wood. Our weather-protection treatment applies a breathable, water-repellent sealant that makes water bead and roll off instead of soaking in — dramatically slowing rot, warping and mildew growth.",
      "We combine the sealant with an anti-microbial wash that eliminates existing mold and mildew colonies. The result is a deck that dries faster, stays cleaner and needs far less maintenance between seasons.",
    ],
    features: [
      "Anti-microbial wash to eliminate mold and mildew colonies",
      "Breathable water-repellent sealant that beads moisture",
      "UV-inhibitor package to slow sun graying",
      "Ideal for shaded decks prone to moss and algae",
      "Prevents rot, warping and splitting at the source",
      "Reapply intervals of 2–3 years on most wood species",
    ],
    image: "/images/service-5.jpg",
    icon: ShieldCheck,
  },
  {
    slug: "composite-deck-care",
    title: "Composite Deck Care",
    tagline: "Specialized cleaning and protection formulated for composite and PVC decks.",
    description: [
      "Composite decks are lower maintenance — not no maintenance. They trap dirt in their grain pattern, stain from leaf tannins and can fade unevenly in the sun. We use composite-safe cleaners and protectants that restore color without voiding your manufacturer warranty.",
      "Our composite care includes deep cleaning, stain lifting, and an optional UV protectant that keeps boards looking uniform for years. We also inspect fasteners, hidden clips and trim for wear.",
    ],
    features: [
      "Composite-safe cleaning that won't void warranties",
      "Leaf tannin, rust and food stain lifting",
      "Gentle low-pressure methods that won't etch boards",
      "UV protectant to slow fading and even out color",
      "Fastener, clip and trim inspection included",
      "Annual care plans available for composite decks",
    ],
    image: "/images/service-6.jpg",
    icon: Layers,
  },
  {
    slug: "annual-maintenance-plans",
    title: "Annual Maintenance Plans",
    tagline: "Never think about your deck again — scheduled care that keeps it perfect year-round.",
    description: [
      "The decks that look new for a decade are the ones on a maintenance schedule. Our annual plans pair a spring deep-clean with a fall inspection and touch-up, so small issues are caught before they become expensive repairs.",
      "Members get priority scheduling, a 10% discount on repairs and a 5% discount on full stain projects. Most decks need professional attention once or twice a year — let us handle it automatically.",
    ],
    features: [
      "Spring deep clean and brightening every year",
      "Fall inspection with fasteners, joints and sealant check",
      "Touch-up sealing on high-wear areas",
      "Priority scheduling for members",
      "10% off repairs and 5% off stain projects",
      "Seasonal care reminders and weather alerts",
    ],
    image: "/images/service-7.jpg",
    icon: CalendarCheck,
  },
];

export const SERVICE_NAMES = services.map((s) => s.title);
