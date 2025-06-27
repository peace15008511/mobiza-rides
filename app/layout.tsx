import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "MobiZA Rides - Delivery Bike Rentals",
  description:
    "Affordable, legal delivery bikes for MR D, Uber Eats, and Bolt Food riders from just R650/week. Apply online – fast, paperless process.",
  metadataBase: new URL("https://mobizarides.com"),
  openGraph: {
    title: "MobiZA Rides",
    description:
      "Get your delivery bike from Mobiza Rentals. No paperwork, no queues. 100% online – built for MR D, Uber Eats, and Bolt Food riders.",
    url: "https://mobizarides.com",
    siteName: "MobiZA Rides",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MobiZA Rides",
    description:
      "Rent a delivery bike from R650/week. Easy online application for food delivery riders. Start earning with Mobiza today.",
    creator: "@MobiZA_Rides", // Update if you have an actual Twitter handle
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
