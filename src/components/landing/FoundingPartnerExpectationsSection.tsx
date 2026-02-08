import { ArrowRight, Zap, TrendingUp, TrendingDown, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FoundingPartnerExpectationsSection = () => {
  const ref = useScrollReveal();

  const milestones = [
    {
      icon: Zap,
      period: "WEEK 1-2",
      title: "IMMEDIATE LEAD FLOW",
      items: [
        "Google + Meta ads launch Day 1",
        "First leads within 7 days (or we work free until you get them)",
        "Target: 20-30 leads in first 30 days"
      ]
    },
    {
      icon: TrendingUp,
      period: "MONTH 2-3",
      title: "AI VISIBILITY KICKS IN",
      items: [
        "ChatGPT/Perplexity start citing you",
        "Organic traffic compounds with paid ads",
        "Target: 35-55 leads/month (paid + organic synergy)"
      ]
    },
    {
      icon: TrendingDown,
      period: "MONTH 6",
      title: "COST EFFICIENCY",
      items: [
        "Cost per lead drops 40-60% as organic dominates",
        "You're getting leads at $30-40 vs. $95 in Month 1",
        "Target: 50-75 leads/month at fraction of initial cost"
      ]
    }
  ];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">What You Can Expect</span>
          <h2 className="section-heading">What Founding Partners Can Expect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't have client testimonials yet. We DO have a bulletproof system based on 6 months of research and testing.
          </p>
          <p className="text-foreground font-medium mt-4">
            Here's what we're guaranteeing for Founding Partners:
          </p>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 card-glow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                    {milestone.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {milestone.title}
                </h3>
                <ul className="space-y-2">
                  {milestone.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Guarantee Box */}
        <div className="bg-accent/10 border-2 border-accent rounded-xl p-8 max-w-3xl mx-auto mb-12">
          <div className="flex items-start gap-4">
            <Shield className="w-10 h-10 text-accent flex-shrink-0" />
            <div>
              <h4 className="text-xl font-bold text-foreground mb-3">THE GUARANTEE</h4>
              <p className="text-muted-foreground">
                If you don't get 90+ qualified leads in first 90 days, we work until you do 100% free of service fees. You only pay the ad spend you actually used.
              </p>
              <p className="text-foreground font-semibold mt-3">
                We're betting our entire business on this working.
              </p>
            </div>
          </div>
        </div>

        {/* Live Results Tracker */}
        <div className="bg-card border border-border rounded-xl p-8 max-w-2xl mx-auto">
          <h4 className="text-lg font-bold text-foreground mb-6 text-center">
            FOUNDING PARTNER PROGRESS <span className="text-sm font-normal text-muted-foreground">(Updated Weekly)</span>
          </h4>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border">
              <span className="text-foreground font-medium">Partner #1:</span>
              <span className="text-accent font-semibold">[Open - Your Spot?]</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border">
              <span className="text-foreground font-medium">Partner #2:</span>
              <span className="text-accent font-semibold">[Open - Your Spot?]</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border">
              <span className="text-foreground font-medium">Partner #3:</span>
              <span className="text-accent font-semibold">[Open - Your Spot?]</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Once filled, we'll update this section weekly with real results: leads generated, AI citations tracked, cost per lead trends. You'll see EXACTLY how this performs before we ever ask for full price.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundingPartnerExpectationsSection;
