import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woodguard-deck-care.amsitservices.com"),
  title: {
    default: "WoodGuard Deck Care | Deck Staining, Sealing & Restoration",
    template: "%s | WoodGuard Deck Care",
  },
  description:
    "Professional deck cleaning, staining, sealing and restoration. WoodGuard Deck Care protects and restores outdoor wood with premium finishes, repairs and annual care plans.",
  keywords: [
    "deck staining",
    "deck sealing",
    "deck cleaning",
    "power washing",
    "deck repair",
    "wood restoration",
    "composite deck care",
    "deck maintenance",
  ],
  openGraph: {
    type: "website",
    siteName: "WoodGuard Deck Care",
    title: "WoodGuard Deck Care | Deck Staining, Sealing & Restoration",
    description:
      "Protecting and restoring outdoor wood with premium finishes and annual care plans.",
    url: "https://woodguard-deck-care.amsitservices.com",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "WoodGuard Deck Care — freshly sealed wooden deck at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WoodGuard Deck Care | Deck Staining, Sealing & Restoration",
    description:
      "Protecting and restoring outdoor wood with premium finishes and annual care plans.",
    images: ["/images/og.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#4a3428",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${fraunces.variable} min-h-screen font-sans antialiased`}
      >
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[34rem] w-[34rem] rounded-full bg-accent/25 blur-3xl" />
          <div className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-oak-soft/20 blur-3xl" />
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
