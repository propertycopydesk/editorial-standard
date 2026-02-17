import { Check, Shield, Star, Crown, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const FoundingPartnerPricingSection = () => {
  const ref = useScrollReveal();

  const tiers = [
    {
      name: "3-MONTH COMMITMENT",
      icon: Star,
      price: "$1,499",
      discount: "40% off",
      standardPrice: "$2,499",
      savings: "$12,000/year",
      features: [
        "Locked in for LIFE (as long as you remain a client)",
        "$12,000/year savings",
        "3-month minimum, then month-to-month",
        "100% refund guarantee if <100 leads in 90 days"
      ],
      bestFor: "Agents testing a new channel who want flexibility",
      adSpend: "$1,000-1,500/month",
      badge: null
    },
    {
      name: "6-MONTH COMMITMENT",
      icon: Crown,
      price: "$1,249",
      discount: "50% off",
      standardPrice: "$2,499",
      savings: "$15,000/year",
      features: [
        "Locked in for LIFE (as long as you remain a client)",
        "$15,000/year savings",
        "6-month minimum, then month-to-month",
        "100% refund guarantee if <100 leads in 90 days",
        "Priority support (24-hour response time)"
      ],
      bestFor: "Serious agents ready to dominate their market",
      adSpend: "$1,000-1,500/month",
      badge: "RECOMMENDED"
    },
    {
      name: "12-MONTH COMMITMENT",
      icon: Gem,
      price: "$999",
      discount: "60% off",
      standardPrice: "$2,499",
      savings: "$18,000/year",
      features: [
        "Locked in for LIFE (as long as you remain a client)",
        "$18,000/year savings",
        "12-month minimum, then month-to-month",
        "100% refund guarantee if <100 leads in 90 days",
        "VIP support (12-hour response time)",
        "Quarterly business review calls",
        "Co-development privileges (request features)"
      ],
      bestFor: "Top producers betting on long-term dominance",
      adSpend: "$1,000-1,500/month",
      badge: "BEST VALUE"
    }
  ];

  const includedFeatures = [
    { title: "Full AI Visibility Optimization", desc: "9 BOFU articles/month optimized for bot + human layers, local SEO setup, schema markup" },
    { title: "Google Ads Management", desc: "Search, Display, YouTube campaigns with daily monitoring + weekly optimization" },
    { title: "Meta Ads Management", desc: "Facebook + Instagram targeting, advanced retargeting sequences, lookalike audiences" },
    { title: "Multi-Platform Retargeting", desc: "Never lose a warm lead. Sequential messaging (3-stage nurture)" },
    { title: "Performance Reporting", desc: "Weekly email updates (every Friday), monthly strategy calls (30 min)" },
    { title: "AI Citation Tracking", desc: "Monitor ChatGPT, Perplexity, Gemini, Claude with weekly screenshot-based proof" },
  ];

  const scrollToPricing = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section id="pricing" className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">The Investment</span>
          <h2 className="section-heading">Founding Partner Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose Your Commitment, Lock In Your Discount Forever
          </p>
          <p className="text-muted-foreground mt-2">
            We're offering 3 tiers based on commitment length. The longer you commit, the deeper your discount—and it's locked in FOR LIFE.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            const isRecommended = tier.badge === "RECOMMENDED";
            return (
              <div
                key={index}
                className={`relative bg-card border-2 rounded-2xl p-6 ${
                  isRecommended ? 'border-accent shadow-lg' : 'border-border'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      isRecommended ? 'bg-accent text-accent-foreground' : 'bg-foreground text-background'
                    }`}>
                      {tier.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 pt-2">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      FOUNDING PARTNER
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-4">{tier.name}</h3>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-accent font-semibold">
                    ({tier.discount} standard {tier.standardPrice} pricing)
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                  <span className="font-medium text-foreground">Best for:</span> {tier.bestFor}
                </div>

                <div className="text-xs text-muted-foreground">
                  <p>+ {tier.adSpend} ad spend (billed separately)</p>
                  <p className="mt-1">→ Decreases to $500-800/month by Month 6 as organic traffic takes over</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* What's Included */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            WHAT'S INCLUDED (ALL TIERS)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground font-medium">{feature.title}</span>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Math Box */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            THE MATH (Why This Is a Steal)
          </h3>
          <p className="text-muted-foreground text-center mb-6">
            Let's use the 6-MONTH COMMITMENT tier as an example:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">YOUR INVESTMENT (Month 1-3):</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Service: $1,249/month × 3 = $3,747</li>
                <li>• Ad spend: $1,500/month × 3 = $4,500</li>
                <li className="font-semibold text-foreground">• TOTAL: $8,247</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">CONSERVATIVE OUTCOME:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 90 qualified leads in 90 days (guaranteed minimum)</li>
                <li>• 8% conversion = 7 closings</li>
                <li>• 7 × $12,000 avg commission = $84,000</li>
                <li className="font-semibold text-accent">• ROI: 919%</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Even at 3% conversion (pessimistic):</span> 3 closings × $12,000 = $36,000 → <span className="text-accent font-semibold">ROI: 337%</span>
            </p>
            <p className="text-foreground font-medium mt-2">
              You need to close just 1 deal to break even.
            </p>
          </div>
        </div>

        {/* After Founding Spots Fill */}
        <div className="bg-secondary/50 border border-border rounded-xl p-6 mb-12 max-w-2xl mx-auto">
          <h4 className="font-bold text-foreground mb-3 text-center">AFTER FOUNDING PARTNER SPOTS FILL:</h4>
          <div className="text-sm text-muted-foreground text-center space-y-1">
            <p>Standard Pricing Returns: <span className="font-semibold text-foreground">$2,499/month</span> (no lifetime lock)</p>
            <p>6-month minimum commitment • No co-development privileges • Standard support (48-hour response)</p>
            <p className="text-foreground font-medium mt-3">
              Founding Partners save $12,000-18,000 EVERY YEAR compared to future clients.
            </p>
          </div>
        </div>

        {/* Guarantee Box */}
        <div className="bg-accent/10 border-2 border-accent rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Shield className="w-10 h-10 text-accent flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">OUR FOUNDING PARTNER GUARANTEE</h4>
              <p className="text-muted-foreground mb-4">
                We're asking you to trust us without proven client results. So we're putting our money where our mouth is:
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">DAY 7:</span> If you don't receive your first qualified leads within 7 days of ad launch, we pause billing and work free until you do.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">DAY 30:</span> If ChatGPT/Perplexity don't show your first AI citation by Day 30, we pause billing and continue optimizing at no charge.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">DAY 90:</span> If you don't receive minimum 90 qualified leads in first 90 days, we refund 100% of service fees. You only pay the ad spend you actually used.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-foreground">DAY 100:</span> If you're unsatisfied for ANY reason, cancel with no penalty. We'll even help you transition to another provider and send you all your content/data.
                  </span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4 mb-4">
                <h5 className="font-semibold text-foreground mb-2">WHAT WE ASK FROM YOU:</h5>
                <p className="text-sm text-muted-foreground mb-2">This isn't a one-way street. For the guarantee to apply, we need:</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ Content approval within 48 hours</li>
                  <li>✓ Technical access to your website, Google Business Profile, etc.</li>
                  <li>✓ Response to our questions within 24 hours</li>
                  <li>✓ Permission to use your results in case studies (anonymized if you prefer)</li>
                  <li>✓ 1-2 referrals if you're satisfied with results</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-2 italic">
                  If you go radio silent for more than a week, the guarantee is void. Fair?
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-secondary/50 rounded-lg p-3">
                  <div className="text-sm font-bold text-foreground">YOUR RISK</div>
                  <div className="text-xs text-muted-foreground">$0 (We guarantee results or refund)</div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <div className="text-sm font-bold text-foreground">OUR RISK</div>
                  <div className="text-xs text-muted-foreground">Everything (Our reputation depends on your success)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToPricing}
            size="lg"
            className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold"
          >
            → Claim Your Founding Partner Spot
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Next available start: March 17, 2026 · Only 2 spots remaining
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            This offer closes the moment 3 spots fill. After that, it's gone forever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundingPartnerPricingSection;
