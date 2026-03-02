import { Check, Shield, Star, Crown, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const FoundingPartnerPricingSection = () => {
  const ref = useScrollReveal();

  const tiers = [
    {
      name: "MARKET ENTRY",
      subtitle: "3-Month Commitment",
      icon: Star,
      price: "$1,499",
      discount: "40% off",
      standardPrice: "$2,499",
      savings: "$12,000/year",
      features: [
        "Locked in for LIFE (as long as you remain a client)",
        "3-month minimum, then month-to-month",
        "Full local authority content (9 articles/month)",
        "Google + Meta Ads Management",
        "90-lead guarantee or full refund"
      ],
      adSpend: "$1,000-1,500/month",
      badge: null
    },
    {
      name: "MARKET AUTHORITY",
      subtitle: "6-Month Commitment",
      icon: Crown,
      price: "$1,249",
      discount: "50% off",
      standardPrice: "$2,499",
      savings: "$15,000/year",
      features: [
        "Locked in for LIFE (as long as you remain a client)",
        "6-month minimum, then month-to-month",
        "Full local authority content (9 articles/month)",
        "Google + Meta Ads Management",
        "Priority support (24-hour response time)",
        "90-lead guarantee or full refund"
      ],
      adSpend: "$1,000-1,500/month",
      badge: "RECOMMENDED"
    },
    {
      name: "MARKET DOMINANCE",
      subtitle: "12-Month Commitment",
      icon: Gem,
      price: "$999",
      discount: "60% off",
      standardPrice: "$2,499",
      savings: "$18,000/year",
      features: [
        "Locked in for LIFE (as long as you remain a client)",
        "12-month minimum, then month-to-month",
        "Full local authority content (9 articles/month)",
        "Google + Meta Ads Management",
        "VIP support (12-hour response time)",
        "Quarterly business review calls",
        "Co-development privileges (request features)"
      ],
      adSpend: "$1,000-1,500/month",
      badge: "BEST VALUE"
    }
  ];

  const scrollToPricing = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section id="pricing" className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-8">
          <span className="section-tag">The Investment</span>
          <h2 className="section-heading">Lock In Your Market Position at Founding Partner Pricing</h2>
        </div>

        {/* Framing paragraph */}
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          The agents who join now aren't just getting a discount. They're getting a first-mover advantage in their market. We work with one agent per market. Once your area is claimed, it's closed to competitors.
        </p>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            const isRecommended = tier.badge === "RECOMMENDED";
            return (
              <div
                key={index}
                className={`relative bg-card border-2 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
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
                      Founding Partner
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.subtitle}</p>
                  
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="text-sm text-accent font-semibold">
                    ({tier.discount} standard {tier.standardPrice} pricing)
                  </div>
                </div>

                {/* Savings */}
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center mb-6">
                  <span className="text-sm font-semibold text-accent">💰 {tier.savings} savings</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                  <p>+ {tier.adSpend} ad spend (billed separately)</p>
                  <p className="mt-1">→ Decreases to $500-800/month by Month 6 as organic traffic takes over</p>
                </div>

                <Button
                  onClick={scrollToPricing}
                  className={`w-full py-3 rounded-lg font-semibold ${
                    isRecommended ? 'btn-gold-shine' : 'border-2 border-accent bg-background text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  Get Your Free Market Audit →
                </Button>
              </div>
            );
          })}
        </div>

        {/* ROI Math — Rewritten */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            The Math
          </h3>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The math is straightforward. You need to close one deal to cover your first 90 days entirely. But that's besides the point of why serious agents are choosing this.
            </p>
            <p>
              They're choosing it because waiting has a cost that doesn't show up in a spreadsheet. Every month a competitor builds authority in your market is a month you'll spend twice as much to catch up. Or never catch up at all.
            </p>
            <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
              This isn't a lead gen expense. It's the cost of owning your market before someone else does.
            </p>
          </div>
        </div>

        {/* After Founding Spots Fill */}
        <div className="bg-secondary/50 border border-border rounded-xl p-6 mb-12 max-w-2xl mx-auto">
          <h4 className="font-bold text-foreground mb-3 text-center">AFTER FOUNDING PARTNER SPOTS FILL:</h4>
          <div className="text-sm text-muted-foreground text-center space-y-1">
            <p>Standard Pricing Returns: <span className="font-semibold text-foreground">$2,499/month</span> (no lifetime lock)</p>
            <p>No market exclusivity guarantee · Standard support (48-hour response)</p>
            <p className="text-foreground font-medium mt-3">
              Founding Partners save $12,000-18,000 every year compared to future clients.
            </p>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-accent/10 border-2 border-accent rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Shield className="w-10 h-10 text-accent flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">Our Guarantee is Simple Because We Mean It</h4>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                <p>
                  We're asking you to trust us with no client results yet. So we've structured the guarantee to remove every reason not to.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-foreground">Day 7:</span> First leads arrive or we pause billing and work free until they do.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-foreground">Day 90:</span> 90 qualified leads delivered or we work until you get 90, 100% free of service fees. You keep everything we built. You only pay the ad spend you actually used.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-foreground">Day 100:</span> Unsatisfied for any reason? Cancel, no penalty, no questions. We'll package up every piece of content, every campaign, every data file and hand it to you. You keep the asset we built together.
                    </span>
                  </div>
                </div>

                <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-card rounded-r">
                  One thing we ask in return: respond to content approvals within 24 hours and give us access to the accounts we need. If you go quiet for more than 3 days, the guarantee pauses. Fair trade.
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
            Get Your Free Market Audit
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            March 17 start · 2 Founding Partner spots remaining
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundingPartnerPricingSection;
