import NewHeader from "@/components/landing/NewHeader";
import NewHeroSection from "@/components/landing/NewHeroSection";
import NewProblemSection from "@/components/landing/NewProblemSection";
import WhyAICitesSection from "@/components/landing/WhyAICitesSection";
import HowItWorksNew from "@/components/landing/HowItWorksNew";
import DeliverablesSection from "@/components/landing/DeliverablesSection";
import FoundingPartnerExpectationsSection from "@/components/landing/FoundingPartnerExpectationsSection";
import WhoThisIsntForSection from "@/components/landing/WhoThisIsntForSection";
import WhyFoundingPartnersSection from "@/components/landing/WhyFoundingPartnersSection";
import MarketExclusivitySection from "@/components/landing/MarketExclusivitySection";
import FoundingPartnerPricingSection from "@/components/landing/FoundingPartnerPricingSection";
import MaintenanceSection from "@/components/landing/MaintenanceSection";
import PartnershipSection from "@/components/landing/PartnershipSection";
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
        <WhyAICitesSection />
        <HowItWorksNew />
        <DeliverablesSection />
        <FoundingPartnerExpectationsSection />
        <WhoThisIsntForSection />
        <WhyFoundingPartnersSection />
        <MarketExclusivitySection />
        <FoundingPartnerPricingSection />
        <MaintenanceSection />
        <PartnershipSection />
        <WhyTrustUsSection />
        <FoundingPartnerFAQSection />
        <FoundingPartnerFinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
