import NewHeader from "@/components/landing/NewHeader";
import NewHeroSection from "@/components/landing/NewHeroSection";
import NewProblemSection from "@/components/landing/NewProblemSection";
import HowItWorksNew from "@/components/landing/HowItWorksNew";
import FoundingPartnerExpectationsSection from "@/components/landing/FoundingPartnerExpectationsSection";
import WhoThisIsntForSection from "@/components/landing/WhoThisIsntForSection";
import FoundingPartnerPricingSection from "@/components/landing/FoundingPartnerPricingSection";
import WhyFoundingPartnersSection from "@/components/landing/WhyFoundingPartnersSection";
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
        <NewProblemSection />
        <HowItWorksNew />
        <FoundingPartnerExpectationsSection />
        <WhoThisIsntForSection />
        <FoundingPartnerPricingSection />
        <WhyFoundingPartnersSection />
        <WhyTrustUsSection />
        <FoundingPartnerFAQSection />
        <FoundingPartnerFinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
