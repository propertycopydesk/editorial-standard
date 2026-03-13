import { Check, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const FoundingPartnerPricingSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="pricing" className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">The Investment</span>
          <h2 className="section-heading">Introductory Offer</h2>
          <p className="text-lg text-accent font-semibold">Locked for Life · 2 Spots Remaining</p>
        </div>

        {/* Two Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Build Phase */}
          <div className="relative bg-card border-2 border-accent rounded-2xl p-8 shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent text-accent-foreground">
                BUILD PHASE
              </span>
            </div>
            <div className="text-center mb-6 pt-4">
              <p className="text-sm text-muted-foreground mb-2">MONTHS 1-6</p>
              <div className="mb-2">
                <span className="text-5xl font-bold text-foreground">$999</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "9 new articles every month",
                "54 total articles by Month 6",
                "Full technical optimization",
                "60-80% AI citation rate",
                "Dominant market position",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-xs text-foreground font-medium">
                  Hit milestones or we work for free
                </p>
              </div>
            </div>
          </div>

          {/* Maintenance Phase */}
          <div className="relative bg-card border border-border rounded-2xl p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-foreground border border-border">
                MAINTENANCE
              </span>
            </div>
            <div className="text-center mb-6 pt-4">
              <p className="text-sm text-muted-foreground mb-2">MONTH 7+</p>
              <div className="mb-2">
                <span className="text-5xl font-bold text-foreground">$699</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-xs text-muted-foreground">(or cancel anytime)</p>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "3-4 new articles/month",
                "5-6 refreshed articles/month",
                "Defend #1 position",
                "Sustain 70-90% citation rate",
                "Keep competitors from catching you",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground text-center">
              Continue or cancel. You own everything.
            </p>
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto mb-12">
          <h3 className="text-lg font-bold text-foreground mb-4 text-center">
            YOUR YEAR 1 INVESTMENT (Introductory Offer)
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground mb-4">
            <div className="flex justify-between">
              <span>Months 1-6 (Build): $999 × 6</span>
              <span className="font-semibold text-foreground">$5,994</span>
            </div>
            <div className="flex justify-between">
              <span>Months 7-12 (Maintain): $699 × 6</span>
              <span className="font-semibold text-foreground">$4,194</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border text-foreground font-bold">
              <span>TOTAL YEAR 1</span>
              <span>$10,188</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            One seller closing at $10K commission = Year 1 paid for.
          </p>
          <p className="text-sm text-foreground font-medium mt-2">
            But this isn't about ROI on one deal. It's about owning your market before someone else does.
          </p>
        </div>

        {/* After Introductory Offers */}
        <div className="bg-secondary/50 border border-border rounded-xl p-6 max-w-2xl mx-auto mb-12">
          <h4 className="font-bold text-foreground mb-3 text-center">AFTER INTRODUCTORY OFFERS SELL OUT:</h4>
          <div className="text-sm text-muted-foreground text-center space-y-1">
            <p>Build Phase (Months 1-6): <span className="font-semibold text-foreground">$1,599/month</span></p>
            <p>Maintenance (Month 7+): <span className="font-semibold text-foreground">$1,299/month</span></p>
            <p>Year 1 Investment: <span className="font-semibold text-foreground">$17,388</span></p>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 text-accent font-bold">
            <Lock className="w-4 h-4" />
            <span>YOUR INTRODUCTORY OFFER SAVINGS: $7,200</span>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-1">(Locked in forever as long as you remain a client)</p>
        </div>

        {/* Cost Callout */}
        <div className="bg-accent/10 border-2 border-accent rounded-xl p-6 max-w-2xl mx-auto mb-8">
          <p className="text-lg font-bold text-foreground mb-3">💰 THE REAL COST ISN'T THE MONEY</p>
          <p className="text-muted-foreground mb-3">It's the opportunity cost of waiting.</p>
          <p className="text-muted-foreground mb-4">Every month you delay is a month:</p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>→ Competitors build authority you'll have to displace</li>
            <li>→ Sellers make shortlists without your name on them</li>
            <li>→ AI directs organic traffic to agents who claimed visibility first</li>
          </ul>
          <p className="text-foreground font-medium mt-4">
            In 6 months, you'll either own your market's AI visibility... or you'll be watching someone else own it while you're still buying Zillow leads.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => window.open(BOOKING_URL, "_blank")}
            className="btn-gold-shine text-lg py-6 px-10 rounded-lg font-semibold"
          >
            Get Your Free AI Visibility Check →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoundingPartnerPricingSection;
