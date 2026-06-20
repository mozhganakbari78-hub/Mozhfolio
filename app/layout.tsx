import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mozhgan Akbari — Product Designer",
  description: "Product designer specializing in enterprise UX, design systems, and data-driven interfaces that reduce friction and scale with complexity.",
  keywords: ["product designer", "UX designer", "design systems", "enterprise UX", "B2B design"],
  authors: [{ name: "Mozhgan Akbari" }],
  openGraph: {
    title: "Mozhgan Akbari — Product Designer",
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
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
