import { Zap, TrendingUp, TrendingDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BenefitsSection = () => {
  const ref = useScrollReveal();

  const benefits = [
    {
      icon: Zap,
      title: "LEADS START WEEK 1",
      description: "We launch Google + Meta ads on Day 1. Your phone rings Week 1. No 60-day waiting period while competitors steal your listings.",
    },
    {
      icon: TrendingUp,
      title: "AI VISIBILITY BY MONTH 2",
      description: "ChatGPT, Perplexity, and Google AI start recommending you by Week 4-6. Permanent. Compounding. Forever.",
    },
    {
      icon: TrendingDown,
      title: "COSTS DROP 70% BY MONTH 12",
      description: "Month 1: $95 per lead (paid ads). Month 6: $35 per lead (paid + organic). Month 12: $18 per lead (mostly organic). Your ROI compounds every single month.",
    },
  ];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">What You Get</span>
          <h2 className="section-heading">Three Outcomes That Matter</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 card-glow text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
