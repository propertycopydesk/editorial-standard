import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const NewHeroSection = () => {
  const ref = useScrollReveal();

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 relative">
      <div ref={ref} className="max-w-4xl mx-auto text-center scroll-reveal">
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Founding Partner Launch · March 17 Start · 2 Spots Remaining
          </span>
        </div>

        {/* Main Headline - 5 lines for desktop */}
        <h1 className="text-hero font-bold text-foreground mb-6 leading-tight">
          <span className="block">Get 35-55 Qualified Leads</span>
          <span className="block">This Month</span>
          <span className="block">While Competitors Wait</span>
          <span className="block">6 Months</span>
          <span className="block">for AI to Notice Them</span>
        </h1>

        {/* Subheadline */}
        <p className="text-subhero text-muted-foreground max-w-3xl mx-auto mb-4">
          The <span className="font-semibold text-foreground">ONLY</span> hybrid system that gets you leads in 7 days with paid ads while building your permanent AI rankings in the background.
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          We're launching with <span className="font-semibold text-foreground">3 Founding Partners</span> who get lifetime discounts up to 60% off. Real estate agents only.
        </p>

        {/* Primary CTA Button */}
        <Button
          onClick={scrollToPricing}
          size="lg"
          className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold mb-8"
        >
          → Claim Your Founding Partner Spot
        </Button>

        {/* Trust Line */}
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span>✓ First leads in 7 days or free work until you do</span>
          <span>✓ Founding Partner pricing: $999-1,499/mo (locked in for life)</span>
          <span>✓ March 17 start · 2 founding spots remaining</span>
          <span>✓ 100% pro bono work if we don't deliver 90 leads in 90 days</span>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
