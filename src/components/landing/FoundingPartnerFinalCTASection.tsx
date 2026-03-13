import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const FoundingPartnerFinalCTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/30 border-t border-border">
      <div ref={ref} className="container-editorial text-center scroll-reveal">
        <span className="section-tag">Ready?</span>

        <h2 className="section-heading max-w-3xl mx-auto">
          Two Spots. One Market. Claim It Before Your Competitor Does.
        </h2>

        <div className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed space-y-4">
          <p>
            We're not running countdown timers or fake urgency.
          </p>
          <p>
            There are genuinely 2 spots remaining because we work with 3 introductory offer clients total and one audit is already scheduled.
          </p>
          <p>
            When these fill, this page goes to a waitlist for standard pricing at $1,599/month with no lifetime lock and no market protection.
          </p>
          <p className="text-foreground font-semibold text-xl">
            The choice is simple:
          </p>
          <p>
            Own your market's AI visibility now at $999/month (locked forever)... or pay $1,599/month to compete with whoever claimed it first.
          </p>
        </div>

        <Button
          onClick={() => window.open(BOOKING_URL, "_blank")}
          size="lg"
          className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold mb-4"
        >
          Get Your Free AI Visibility Check
        </Button>

        <p className="text-sm text-muted-foreground mb-2">
          See exactly where you rank when AI recommends agents
        </p>
        <p className="text-xs text-muted-foreground mb-8">
          15-minute audit · No pitch · One agent per market
        </p>

        <div className="max-w-xl mx-auto text-left bg-card border border-border rounded-xl p-6">
          <p className="text-sm font-semibold text-foreground mb-3">On the call, we'll show you:</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span><span className="font-medium text-foreground">Live test:</span> Who ChatGPT recommends in your market (and where you rank)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span><span className="font-medium text-foreground">Your authority gap:</span> What's missing that's keeping AI from citing you</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span><span className="font-medium text-foreground">Competitive analysis:</span> Which agents are beating you and how</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span><span className="font-medium text-foreground">Custom strategy:</span> What it would take to dominate your market</span>
            </li>
          </ul>
          <p className="text-xs text-muted-foreground mt-4 text-center">No obligation. No pitch. Just data.</p>
        </div>
      </div>
    </section>
  );
};

export default FoundingPartnerFinalCTASection;
