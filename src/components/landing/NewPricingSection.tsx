import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/qualificationcall";

const NewPricingSection = () => {
  const ref = useScrollReveal();

  const features = [
    { title: "Full AI Visibility Optimization", desc: "9 BOFU articles/month + local SEO + citations" },
    { title: "Google Ads Management", desc: "Search, Display, YouTube campaigns" },
    { title: "Meta Ads Management", desc: "Facebook + Instagram targeting & retargeting" },
    { title: "Multi-Platform Retargeting", desc: "Never lose a warm lead: we bring them back" },
    { title: "Conversion Tracking & Analytics", desc: "Know exactly where every lead came from" },
    { title: "Weekly Performance Reports", desc: "Full transparency on leads, cost per lead, ROI" },
    { title: "AI Citation Tracking", desc: "Monitor when ChatGPT, Perplexity, Gemini mention you" },
    { title: "Bi-Weekly Strategy Calls", desc: "Optimize, adjust, and scale based on results" },
  ];

  const scrollToPricing = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section id="pricing" className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">The Investment</span>
          <h2 className="section-heading">One System. Immediate Results. Compounding ROI.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No contracts beyond 3 months. No hidden fees. Only the exact system to get you leads THIS week while building permanent AI visibility.
          </p>
        </div>

        {/* Pricing Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-accent rounded-2xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Monthly Service Fee</span>
              <div className="mt-4">
                <span className="text-5xl md:text-6xl font-bold text-foreground">$2,499</span>
                <span className="text-xl text-muted-foreground"> per month</span>
              </div>
              <p className="text-muted-foreground mt-2">3-month minimum commitment</p>
              <p className="text-sm text-muted-foreground mt-2">
                + $1,000-1,500/month ad spend (billed separately, decreases over time)
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-foreground font-medium">{feature.title}</span>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee Box */}
            <div className="bg-secondary/50 border border-border rounded-xl p-6 mb-10">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-3">OUR IRON-CLAD 90-DAY GUARANTEE</h4>
                  <p className="text-muted-foreground mb-4">
                    We guarantee three measurable outcomes by Day 90:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-muted-foreground mb-4">
                    <li>Qualified leads delivered (minimum 100 total)</li>
                    <li>AI citations tracked (ChatGPT, Perplexity, or Gemini)</li>
                    <li>Cost per lead declining (documented in reports)</li>
                  </ol>
                  <p className="text-foreground font-medium">
                    If we don't deliver all three, we work until promises are fulfilled. 100% free of charge. Without any service fees. No questions asked. We're that confident this works.
                  </p>
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
                → Get Your First Leads in 7 Days
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Next available start: March 17, 2026 · Only 2 spots remaining
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewPricingSection;
