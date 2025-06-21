import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import PackagesSection from "@/components/landing/PackagesSection";
import RequirementsSection from "@/components/landing/RequirementsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ReviewsSection from "@/components/landing/ReviewsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-28 bg-[#F5F3EF] px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24 lg:pb-36 text-center">
        <HeroSection />
        <AboutSection />
        <PackagesSection />
        <RequirementsSection />
        <HowItWorksSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
