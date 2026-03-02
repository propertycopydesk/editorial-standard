import { useScrollReveal } from "@/hooks/useScrollReveal";

const HowItWorksNew = () => {
  const ref = useScrollReveal();

  const milestones = [
    {
      phase: "WEEK 1",
      description: "Your paid ads launch on Day 1. Google and Meta campaigns go live, tracking installs, your Google Business Profile is optimized. Your phone starts ringing within 7 days. This is the bridge that gets you leads while the long-term system builds.",
    },
    {
      phase: "MONTH 1",
      description: "Your first 9 local authority articles go live. These aren't generic real estate content. They're written specifically for your market, your neighborhoods, your transaction types. The kind of content that gets you cited, linked, and remembered. AI starts indexing. Warm leads from your ads get retargeted.",
    },
    {
      phase: "MONTH 3",
      description: "Your market presence starts compounding. ChatGPT, Perplexity, and Google AI Overviews begin surfacing your name. Organic traffic layers on top of paid. Cost per lead drops. You're no longer entirely dependent on ad spend to stay visible.",
    },
    {
      phase: "MONTH 6+",
      description: "You own the channel. 60% of your leads are coming organically from content you own, not rented visibility on Zillow or referral platforms that can change terms overnight. Your authority is a market asset. It stays with you whether you continue with us or not.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">How It Works</span>
          <h2 className="section-heading">The System That Builds What You Actually Own</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-accent to-transparent" />
              )}
              
              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-accent mb-2">{milestone.phase}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ownership callout */}
        <div className="max-w-2xl mx-auto mt-12 bg-accent/10 border-2 border-accent rounded-xl p-6 text-center">
          <p className="text-foreground font-medium">
            Everything we build lives on your domain, in your accounts, under your name. You own it. If you leave, you take it with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksNew;
