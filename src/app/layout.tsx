import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AKM Real Estate | Plots in Chennai",
  description:
    "CMDA-approved plots at best rates. AKM Real Estate offers prime residential and investment plots in Chennai's most promising locations.",
  keywords: [
    "plots in Chennai",
    "CMDA approved plots",
    "real estate Chennai",
    "AKM Real Estate",
    "residential plots",
    "investment plots",
    "Tambaram plots",
    "Chennai property",
  ],
  openGraph: {
    title: "AKM Real Estate | Plots in Chennai",
    description:
      "CMDA-approved plots at best rates. Prime locations, clear titles, secure investment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
