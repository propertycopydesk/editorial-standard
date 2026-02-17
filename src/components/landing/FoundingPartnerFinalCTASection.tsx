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
          Founding Partner Spots Are Filling
        </h2>

        {/* Live Availability */}
        <div className="max-w-md mx-auto mb-10">
          <p className="text-muted-foreground mb-4">Real-time availability:</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
              <span className="text-foreground font-medium">Spot 1:</span>
              <span className="text-accent font-semibold">[OPEN - Claim This Spot]</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
              <span className="text-foreground font-medium">Spot 2:</span>
              <span className="text-accent font-semibold">[OPEN - Claim This Spot]</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
              <span className="text-foreground font-medium">Spot 3:</span>
              <span className="text-muted-foreground">[RESERVED - Audit Scheduled for March 12]</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Once all 3 spots fill, this page will redirect to a waitlist for standard pricing ($2,499/month, no lifetime lock).
          </p>
          <p className="text-foreground font-medium mt-2">
            Next available start date: March 17, 2026
          </p>
        </div>

        {/* Two Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          <div className="bg-card border-2 border-accent rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">OPTION 1: Free AI Visibility Audit</h3>
            <p className="text-sm text-muted-foreground mb-4">(Recommended)</p>
            <ul className="text-sm text-muted-foreground text-left space-y-2 mb-6">
              <li>→ 15-minute call where we:</li>
              <li className="pl-4">• Show you live ChatGPT searches in your market</li>
              <li className="pl-4">• Identify which competitors are dominating AI search</li>
              <li className="pl-4">• Reveal your current visibility score (0-100%)</li>
              <li className="pl-4">• Discuss which Founding Partner tier fits your goals</li>
            </ul>
            <Button
              onClick={bookAudit}
              className="w-full btn-gold-shine font-semibold"
            >
              Book Free Audit Call →
            </Button>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-foreground mb-3">OPTION 2: Skip the Audit</h3>
            <p className="text-sm text-muted-foreground mb-4">Claim Your Spot Directly</p>
            <ul className="text-sm text-muted-foreground text-left space-y-2 mb-6">
              <li>→ If you're ready to commit, we'll send:</li>
              <li className="pl-4">• Founding Partner agreement (choose your tier)</li>
              <li className="pl-4">• Onboarding questionnaire (15 minutes)</li>
              <li className="pl-4">• Kickoff call scheduling (March 17 launch)</li>
            </ul>
            <Button
              onClick={bookAudit}
              variant="outline"
              className="w-full font-semibold"
            >
              Claim Founding Partner Spot →
            </Button>
          </div>
        </div>

        {/* Decision Comparison */}
        <div className="bg-card border border-border rounded-xl p-8 max-w-3xl mx-auto mb-10">
          <h3 className="text-xl font-bold text-foreground mb-6">THE DECISION:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="font-semibold text-muted-foreground mb-3">WAIT (and pay full price):</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• March 18: All 3 Founding Partner spots filled</li>
                <li>• March 25: First client gets AI citation</li>
                <li>• April 15: First case study published</li>
                <li>• May 1: We open for standard clients at $2,499/month</li>
                <li className="text-foreground">• Result: You pay $30,000/year for the same service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">ACT NOW (and lock in founder pricing):</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Today: Claim one of 2 remaining spots</li>
                <li>• March 17: Service launches, ads go live</li>
                <li>• March 24: You get your first leads (7 days or free)</li>
                <li>• April 15: ChatGPT starts citing you</li>
                <li>• June 1: You've paid $7,494 total (vs. $15,000 others will pay)</li>
                <li className="text-accent font-medium">• Forever: You're locked in at 50% off for life</li>
              </ul>
            </div>
          </div>

          <p className="text-foreground font-bold text-center mt-6">Your choice.</p>
        </div>

        {/* Final CTA */}
        <Button
          onClick={bookAudit}
          size="lg"
          className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold mb-6"
        >
          → Book Free Audit Call
        </Button>

        {/* Contact */}
        <p className="text-muted-foreground mb-2">
          Questions? <a href="mailto:fatih@propertycopydesk.com" className="text-accent hover:underline">fatih@propertycopydesk.com</a>
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          Average response time: &lt;4 hours
        </p>

        {/* PS */}
        <p className="text-muted-foreground italic max-w-2xl mx-auto">
          P.S. Every day you wait, your competitors are getting listing appointments from AI recommendations you're not receiving. Start now or watch them win.
        </p>
      </div>
    </section>
  );
};

export default FoundingPartnerFinalCTASection;
