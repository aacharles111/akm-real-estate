import HeroSection from "@/components/HeroSection";
import ValuePropsSection from "@/components/ValuePropsSection";
import GallerySection from "@/components/GallerySection";
import CTABanner from "@/components/CTABanner";
import ReviewsSection from "@/components/ReviewsSection";
import AboutAKM from "@/components/AboutAKM";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ValuePropsSection />
      <GallerySection />
      <CTABanner />
      <ReviewsSection />
      <AboutAKM />
      <ContactSection />
      <Footer />
    </main>
  );
}
