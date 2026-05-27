import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: {
    default: "AKC Realestate | CMDA-Approved Plots in Chennai",
    template: "%s | AKC Realestate",
  },
  description:
    "AKC Realestate offers CMDA-approved residential plots at the best rates in Chennai. Prime locations in Tambaram, Ponneri, Minjur, Tiruvallur. DTCP & RERA approved. Trusted since 2017. Site visits available.",
  keywords: [
    "AKC Realestate",
    "CMDA approved plots Chennai",
    "DTCP plots Chennai",
    "residential plots Chennai",
    "plots for sale Chennai",
    "real estate Chennai",
    "plot investment Chennai",
    "Tambaram plots",
    "Ponneri plots",
    "Minjur plots",
    "Tiruvallur plots",
    "gated community plots",
    "affordable plots Chennai",
    "AKC Real Estate",
  ],
  authors: [{ name: "AKC Realestate" }],
  creator: "AKC Realestate",
  publisher: "AKC Realestate",
  metadataBase: new URL("https://akcestates.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "AKC Realestate",
    title: "AKC Realestate | CMDA-Approved Plots in Chennai",
    description:
      "CMDA & DTCP approved residential plots in Chennai's prime locations. Trusted since 2017. 1,500+ plots sold. Site visits available.",
    url: "https://akcestates.vercel.app",
    locale: "en_IN",
    images: [
      {
        url: "https://social-collage.s3.ap-south-1.amazonaws.com/properties/1766728639600-pwcjtl.jpeg",
        width: 1200,
        height: 630,
        alt: "AKC Realestate - CMDA Approved Plots in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AKC Realestate | CMDA-Approved Plots in Chennai",
    description:
      "CMDA & DTCP approved residential plots in Chennai. Prime locations, trusted since 2017. Book a site visit today.",
    images: [
      "https://social-collage.s3.ap-south-1.amazonaws.com/properties/1766728639600-pwcjtl.jpeg",
    ],
  },
  category: "Real Estate",
  classification: "Business",
  verification: {
    google: "XaIQ84vAuRcnp_B1SSvuQ2iQHQ6ycNug9x4ac_q_PM0",
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
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
