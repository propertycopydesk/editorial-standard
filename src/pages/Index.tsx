import NewHeader from "@/components/landing/NewHeader";
import NewHeroSection from "@/components/landing/NewHeroSection";
import StatsBar from "@/components/landing/StatsBar";
import NewProblemSection from "@/components/landing/NewProblemSection";
import HowItWorksNew from "@/components/landing/HowItWorksNew";
import BenefitsSection from "@/components/landing/BenefitsSection";
import NewTestimonialsSection from "@/components/landing/NewTestimonialsSection";
import NewPricingSection from "@/components/landing/NewPricingSection";
import NewFAQSection from "@/components/landing/NewFAQSection";
import NewFinalCTASection from "@/components/landing/NewFinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <NewHeader />

      <main>
        <NewHeroSection />
        <StatsBar />
        <NewProblemSection />
        <HowItWorksNew />
        <BenefitsSection />
        <NewTestimonialsSection />
        <NewPricingSection />
        <NewFAQSection />
        <NewFinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
