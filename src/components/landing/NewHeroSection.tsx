import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/qualificationcall";

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
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Limited Launch · March 17 Start · 2 Spots Remaining
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-hero font-bold text-foreground mb-6 leading-tight">
          Get 35-55 Qualified Leads This Month While Competitors Wait 6 Months for AI to Notice Them
        </h1>

        {/* Subheadline */}
        <p className="text-subhero text-muted-foreground max-w-3xl mx-auto mb-10">
          The only hybrid system that gets you leads in 7 days with paid ads while building your permanent AI rankings in the background. Real estate agents only. First leads guaranteed.
        </p>

        {/* Primary CTA Button */}
        <Button
          onClick={scrollToPricing}
          size="lg"
          className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold mb-8"
        >
          → Get Your First Leads in 7 Days
        </Button>

        {/* Trust Line */}
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <span>✓ First leads in 7 days or free work until you get leads</span>
          <span>✓ Real estate agents only (no other industries)</span>
          <span>✓ March 17 start · 2 spots left · 3-month guarantee</span>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
