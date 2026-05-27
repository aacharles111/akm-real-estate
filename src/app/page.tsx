import HeroSection from "@/components/HeroSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import GallerySection from "@/components/GallerySection";
import CTABanner from "@/components/CTABanner";
import ReviewsSection from "@/components/ReviewsSection";
import AboutAKC from "@/components/AboutAKC";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "AKC Realestate",
    description:
      "AKC Realestate offers CMDA-approved residential plots at the best rates in Chennai. Trusted since 2017 with 1,500+ plots sold across Tambaram, Ponneri, Minjur, Medavakkam and more.",
    url: "https://akcestates.vercel.app",
    telephone: "+919941318518",
    email: "kalaanitas@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123, Main Road, Tambaram",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600045",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9249,
      longitude: 80.1,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: [
      "Tambaram",
      "Ponneri",
      "Minjur",
      "Medavakkam",
      "Chromepet",
      "Pallavaram",
      "OMR",
      "Tiruvallur",
    ],
    sameAs: [
      "https://facebook.com",
      "https://instagram.com",
    ],
    image:
      "https://social-collage.s3.ap-south-1.amazonaws.com/properties/1766728639600-pwcjtl.jpeg",
    priceRange: "₹₹",
  };

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ValuePropsSection />
      <GallerySection />
      <CTABanner />
      <ReviewsSection />
      <AboutAKC />
      <ContactSection />
      <Footer />
    </main>
  );
}
