import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Analytics from "@/components/Analytics";

// Geist for the whole site: crisp at small sizes, calm at display sizes.
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Labels (eyebrows, section numbers, small caps) use the same face with
// tracking and uppercase, so --font-mono points to Geist as well. Real
// monospace is kept for code.
const labels = Geist({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const code = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Mozhgan Akbari · Product Designer",
  description: "Product designer specializing in enterprise UX, design systems, and data-driven interfaces that reduce friction and scale with complexity.",
  keywords: ["product designer", "UX designer", "design systems", "enterprise UX", "B2B design"],
  authors: [{ name: "Mozhgan Akbari" }],
  openGraph: {
    title: "Mozhgan Akbari · Product Designer",
    description: "Product designer specializing in enterprise UX, design systems, and data-driven interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${labels.variable} ${code.variable}`}>
      <body>
        <Analytics />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
