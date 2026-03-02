import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const NewHeroSection = () => {
  const ref = useScrollReveal();

  const openAudit = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 relative">
      <div ref={ref} className="max-w-4xl mx-auto text-center scroll-reveal">
        {/* Main Headline */}
        <h1 className="text-hero font-bold text-foreground mb-6 leading-tight">
          Own Your Market Before AI Makes Every Agent Look the Same
        </h1>

        {/* Subheadline */}
        <p className="text-subhero text-muted-foreground max-w-3xl mx-auto mb-10">
          We build the local authority and lead pipeline that lets you command full commissions while other agents race to the bottom.
        </p>

        {/* Primary CTA Button */}
        <Button
          onClick={openAudit}
          size="lg"
          className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold mb-4"
        >
          Get Your Free Market Audit
        </Button>

        {/* Secondary line */}
        <p className="text-sm text-muted-foreground mb-8">
          March 17 start · 2 Founding Partner spots remaining
        </p>

        {/* Single trust line */}
        <p className="text-lg text-foreground font-medium">
          First leads in 7 days. Market authority that compounds for years.
        </p>
      </div>
    </section>
  );
};

export default NewHeroSection;
