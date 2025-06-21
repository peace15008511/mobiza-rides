import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import PackagesSection from "@/components/home/PackagesSection";
import RequirementsSection from "@/components/home/RequirementsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import ReviewsSection from "@/components/home/ReviewsSection";

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
