import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const FoundingPartnerFinalCTASection = () => {
  const ref = useScrollReveal();

  const bookAudit = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section className="section-padding bg-secondary/30 border-t border-border">
      <div ref={ref} className="container-editorial text-center scroll-reveal">
        <span className="section-tag">Ready?</span>
        
        <h2 className="section-heading max-w-3xl mx-auto">
          Two Spots. One Market. Yours or Theirs.
        </h2>

        <div className="max-w-2xl mx-auto mb-10 space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            There are genuinely two spots remaining because we work with three founding partners total and one audit is already scheduled.
          </p>
          <p>
            When these fill, this page goes to a waitlist for standard pricing at $2,499/month with no lifetime lock and no first-mover market protection.
          </p>
          <p className="text-foreground font-medium">
            The choice is simple: own your market now, or pay double to chase whoever claimed it first.
          </p>
        </div>

        {/* Two CTA options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            onClick={bookAudit}
            size="lg"
            className="btn-gold-shine text-lg py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold"
          >
            Book Your Free Market Audit
          </Button>
          <Button
            onClick={bookAudit}
            size="lg"
            variant="outline"
            className="text-lg py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold border-accent text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Claim Your Spot Directly
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-8">
          Next available start: March 17, 2026
        </p>

        {/* PS */}
        <p className="text-muted-foreground italic max-w-2xl mx-auto">
          P.S. Every day you wait, a competitor is building the authority in your market that you'll spend twice as much to catch up to. Or never catch up at all.
        </p>
      </div>
    </section>
  );
};

export default FoundingPartnerFinalCTASection;
