import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const WhyFoundingPartnersSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <span className="section-tag">Full Transparency</span>
        
        <h2 className="section-heading">
          Why Founding Partners?
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Full transparency: We've spent 6 months and significant money building this system, but we have zero client results yet.
          </p>

          <p>
            <span className="text-foreground font-semibold">What we need:</span> 3 agents willing to be first in exchange for lifetime pricing locks and first-mover market protection.
          </p>

          <p>
            <span className="text-foreground font-semibold">What you get:</span> 40-60% off forever, your market claimed before competitors, and direct founder access for as long as you're a client.
          </p>

          <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
            This isn't charity. It's a trade with clear terms on both sides. Your success becomes our proof of concept. After three spots fill, standard pricing returns at $2,499/month with no lifetime lock and no market priority.
          </p>

          <div className="bg-card border border-border rounded-xl p-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="text-accent font-bold text-sm">YOUR RISK:</div>
                <span className="text-foreground">Zero. (90 leads in 90 days or full refund.)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-accent font-bold text-sm">OUR RISK:</div>
                <span className="text-foreground">Everything. (Our reputation depends entirely on your success.)</span>
              </div>
            </div>
          </div>

          {/* Soft CTA */}
          <div className="text-center pt-4">
            <Button
              onClick={() => window.open(BOOKING_URL, "_blank")}
              variant="outline"
              className="border-accent text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              Book Your Free Market Audit →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFoundingPartnersSection;
