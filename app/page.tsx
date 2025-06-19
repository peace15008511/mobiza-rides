import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/Home/HeroSection";
import AboutSection from "./components/Home/AboutSection";
import PackagesSection from "./components/Home/PackagesSection";
import RequirementsSection from "./components/Home/RequirementsSection";
import HowItWorksSection from "./components/Home/HowItWorksSection";
import ReviewsSection from "components/Home/ReviewsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-40 bg-[#F5F3EF] px-4 sm:px-6 lg:px-12 pb-16 sm:pb-24 lg:pb-36 text-center">
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
