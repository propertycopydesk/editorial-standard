import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/qualificationcall";

const NewFinalCTASection = () => {
  const ref = useScrollReveal();

  const scrollToPricing = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section className="section-padding bg-secondary/30 border-t border-border">
      <div ref={ref} className="container-editorial text-center scroll-reveal">
        <span className="section-tag">Ready?</span>
        
        <h2 className="section-heading max-w-3xl mx-auto">
          The Next 90 Days Will Define Your Year
        </h2>

        <div className="text-lg text-muted-foreground space-y-2 mb-10 max-w-2xl mx-auto">
          <p>Start today → Get leads Week 1 (guaranteed) → Build permanent AI visibility simultaneously → Own your market by Q2 2026</p>
          <p className="text-foreground font-medium">The decision is yours. But the window is closing.</p>
        </div>

        <Button
          onClick={scrollToPricing}
          size="lg"
          className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold mb-6"
        >
          → Get Your First Leads in 7 Days
        </Button>

        <p className="text-sm text-muted-foreground mb-8">
          Next available start: March 17, 2026<br />
          Only 2 spots remaining
        </p>

        <p className="text-muted-foreground italic max-w-2xl mx-auto">
          P.S. Every day you wait, your competitors are getting listing appointments from AI recommendations you're not receiving. Start now or watch them win.
        </p>
      </div>
    </section>
  );
};

export default NewFinalCTASection;
