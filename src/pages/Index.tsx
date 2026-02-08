import NewHeader from "@/components/landing/NewHeader";
import NewHeroSection from "@/components/landing/NewHeroSection";
import StatsBar from "@/components/landing/StatsBar";
import NewProblemSection from "@/components/landing/NewProblemSection";
import WhyFoundingPartnersSection from "@/components/landing/WhyFoundingPartnersSection";
import HowItWorksNew from "@/components/landing/HowItWorksNew";
import FoundingPartnerExpectationsSection from "@/components/landing/FoundingPartnerExpectationsSection";
import FoundingPartnerPricingSection from "@/components/landing/FoundingPartnerPricingSection";
import WhyTrustUsSection from "@/components/landing/WhyTrustUsSection";
import FoundingPartnerFAQSection from "@/components/landing/FoundingPartnerFAQSection";
import FoundingPartnerFinalCTASection from "@/components/landing/FoundingPartnerFinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <NewHeader />

      <main>
        <NewHeroSection />
        <StatsBar />
        <NewProblemSection />
        <WhyFoundingPartnersSection />
        <HowItWorksNew />
        <FoundingPartnerExpectationsSection />
        <FoundingPartnerPricingSection />
        <WhyTrustUsSection />
        <FoundingPartnerFAQSection />
        <FoundingPartnerFinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
