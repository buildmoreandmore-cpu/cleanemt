import type { Metadata } from "next";
import {
  IBM_Plex_Sans_Condensed,
  IBM_Plex_Sans,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyDispatchBar from "@/components/layout/StickyDispatchBar";
import { CONTACT_PHONE } from "@/lib/contact";

const display = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleanemt.com"),
  title: {
    default: "CleanEMT — Crew on-site in 4 hours. Guaranteed.",
    template: "%s | CleanEMT",
  },
  description:
    "Atlanta's 24/7 emergency commercial cleaning response. Vetted, fully-insured crews dispatched within 4 hours for biohazard, flood, post-construction, vendor no-show, and any-condition cleanup.",
  openGraph: {
    title: "CleanEMT — Crew on-site in 4 hours. Guaranteed.",
    description:
      "Atlanta's 24/7 emergency commercial cleaning response. Crew on-site within 4 hours, any condition, any hour.",
    url: "https://cleanemt.com",
    siteName: "CleanEMT",
    type: "website",
  },
  other: {
    "theme-color": "#0E0E10",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body antialiased bg-bg-soft text-ink`}
      >
        <Navbar phone={CONTACT_PHONE} />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyDispatchBar phone={CONTACT_PHONE} />
      </body>
    </html>
  );
}
