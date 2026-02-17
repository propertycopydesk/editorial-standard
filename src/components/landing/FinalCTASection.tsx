import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const FinalCTASection = () => {
  const openAudit = () => {
    analytics.ctaClick("Request Audit", "final-cta");
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-[900px] text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-[44px] font-bold text-primary-foreground leading-[1.2] mb-6">
          See Where You Rank in AI Search (Before Your Competitor Steals Another Listing)
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-[800px] mx-auto mb-10 leading-relaxed">
          Get a free AI visibility audit showing exactly where you rank when sellers ask ChatGPT, Perplexity, and Google AI for agent recommendations in your market.
        </p>

        {/* CTA Button */}
        <Button
          onClick={openAudit}
          size="lg"
          variant="secondary"
          className="text-xl md:text-[22px] py-8 px-12 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow mb-6 btn-gold-shine"
        >
          Request Your Free Audit →
        </Button>

        {/* Trust indicators */}
        <p className="text-base text-primary-foreground/70 mb-4">
          No credit card required • 15-minute Loom video walkthrough • Custom recommendations
        </p>

        {/* Scarcity indicator */}
        <p className="text-base font-medium text-primary-foreground">
          🔴 Only 2 audit slots available this week
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
