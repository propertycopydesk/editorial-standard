import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const FoundingPartnerPricingSection = () => {
  const ref = useScrollReveal();

  const openAudit = () => {
    window.open(BOOKING_URL, "_blank");
  };

  const features = [
    "9 AI-optimized articles per month",
    "Google Business Profile optimization",
    "Schema markup & technical SEO",
    "Monthly AI citation tracking (4 platforms)",
    "Competitive displacement strategy",
    "Everything published on YOUR domain",
    "Direct founder access (not support team)",
    "One agent per market protection",
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-8">
          <span className="section-tag">The Investment</span>
          <h2 className="section-heading">One Price. One Commitment. Own Your Market.</h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          We work with one agent per market. The first agent to claim a market owns it. Forever. Founding Partner pricing: <span className="text-foreground font-semibold">$1,299/month</span>, locked for life. After three founding partners fill, this goes to a waitlist at $2,499/month standard pricing with no lifetime lock and no market exclusivity guarantee. The discount isn't charity. It's a trade: you give us proof of concept and case studies. We give you first-mover advantage and a 48% permanent discount.
        </p>

        {/* Single Pricing Card */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="relative bg-card border-2 border-accent rounded-2xl p-8 shadow-lg">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent text-accent-foreground">
                FOUNDING PARTNER
              </span>
            </div>

            <div className="text-center mb-6 pt-4">
              <div className="mb-4">
                <span className="text-5xl font-bold text-foreground">$1,299</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-accent font-semibold">Locked for life</p>
            </div>

            <ul className="space-y-3 mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-2">
                <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium">
                  Hit 30-60-90 day milestones or we work for free until you do.
                </p>
              </div>
            </div>

            <div className="text-xs text-muted-foreground text-center mb-6 pb-4 border-b border-border">
              After 3 spots fill: $2,499/month (no lock, no exclusivity)
            </div>

            <Button
              onClick={openAudit}
              className="w-full btn-gold-shine py-3 rounded-lg font-semibold text-lg"
            >
              Get Your Free Audit →
            </Button>
          </div>
        </div>

        {/* ROI / Cost of Waiting */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            The Cost of Waiting
          </h3>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              You're already spending $10K-15K/month on marketing (Zillow, Google PPC, social media). That spend stays visible in 2024's search paradigm.
            </p>
            <p>
              But when Google flips the switch to AI Overviews (SGE) in 2025, your $10K/month becomes noise. The 3-5 agents who built authority in 2024-2025 get cited. Everyone else gets ignored.
            </p>
            <p>
              This $1,299/month isn't an "extra cost." It's insurance. The cost of keeping your current $10K/month relevant when the search landscape shifts.
            </p>

            <div className="bg-secondary/50 border border-border rounded-lg p-4">
              <p className="text-sm font-bold text-foreground mb-2">What it costs if you DON'T build this:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>→ Competitor builds it in Q1 2025 (90 days of progress)</li>
                <li>→ You start in Q2 2025 (you're 90 days behind)</li>
                <li>→ By Q4 2025, they have 9 months of authority, you have 6 months</li>
                <li>→ They own AI citations. You're playing catch-up at 2-3x the cost.</li>
              </ul>
              <p className="text-sm text-foreground font-semibold mt-3">
                The first-mover advantage in AI visibility isn't just valuable. It's compounding.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-foreground mb-2">What we CAN promise:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>→ Month 1: 9 articles published + GBP optimized + schema live</li>
                <li>→ Month 2: First AI citation detected (10-20% rate)</li>
                <li>→ Month 3: 30-50% AI citation rate + measurable organic traffic</li>
              </ul>
            </div>

            <p>
              If ONE seller finds you through AI search in Month 3-6 instead of your competitor, and you close that listing at $10K commission, you've covered 7-8 months of service.
            </p>

            <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
              The question isn't "what's the ROI of building authority." It's "what's the cost of NOT building it while competitors do." In a recession, when there are 20-30% fewer listings and sellers are asking AI for ONE recommendation, being that recommendation isn't optional. This is infrastructure, not a lead faucet.
            </p>
          </div>
        </div>

        {/* After Founding Spots */}
        <div className="bg-secondary/50 border border-border rounded-xl p-6 max-w-2xl mx-auto">
          <h4 className="font-bold text-foreground mb-3 text-center">⚠️ WHAT CHANGES AFTER FOUNDING PARTNERS FILL:</h4>
          <div className="text-sm text-muted-foreground text-center space-y-1">
            <p>Standard pricing: <span className="font-semibold text-foreground">$2,499/month</span> (no lifetime lock)</p>
            <p>Market exclusivity: May work with multiple agents per market</p>
            <p>Founding perks: Gone (no co-development input, standard support)</p>
            <p className="text-foreground font-medium mt-3">
              The 48% discount reflects the risk you're taking without client testimonials yet. The window closes when three spots fill. That's capacity, not scarcity tactics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingPartnerPricingSection;
