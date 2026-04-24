import NewHeader from "@/components/landing/NewHeader";
import NewHeroSection from "@/components/landing/NewHeroSection";
import NewProblemSection from "@/components/landing/NewProblemSection";
import WhyAICitesSection from "@/components/landing/WhyAICitesSection";
import HowItWorksNew from "@/components/landing/HowItWorksNew";
import DeliverablesSection from "@/components/landing/DeliverablesSection";
import WhoThisIsntForSection from "@/components/landing/WhoThisIsntForSection";
import FoundingPartnerPricingSection from "@/components/landing/FoundingPartnerPricingSection";
import FoundingPartnerFAQSection from "@/components/landing/FoundingPartnerFAQSection";
import FoundingPartnerFinalCTASection from "@/components/landing/FoundingPartnerFinalCTASection";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <NewHeader />

      <main>
        {/* Section 1: Hero */}
        <NewHeroSection />
        {/* Section 2: The Gap */}
        <NewProblemSection />
        {/* Section 3: Education */}
        <WhyAICitesSection />
        {/* Section 4: How It Works */}
        <HowItWorksNew />
        {/* Section 5: Deliverables */}
        <DeliverablesSection />
        {/* Section 6: Honest Assessment */}
        <WhoThisIsntForSection />
        {/* Section 7: The Investment */}
        <FoundingPartnerPricingSection />
        {/* Section 8: FAQ */}
        <FoundingPartnerFAQSection />
        {/* Section 9: Final CTA */}
        <FoundingPartnerFinalCTASection />
      </main>

      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
