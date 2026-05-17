import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import GallerySection from "@/components/GallerySection";
import CTABanner from "@/components/CTABanner";
import ReviewsSection from "@/components/ReviewsSection";
import AboutAKC from "@/components/AboutAKC";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
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
// force redeploy  
