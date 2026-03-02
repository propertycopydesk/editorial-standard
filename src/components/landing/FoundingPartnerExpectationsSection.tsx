import { ArrowRight, Zap, TrendingUp, TrendingDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FoundingPartnerExpectationsSection = () => {
  const ref = useScrollReveal();

  const milestones = [
    {
      icon: Zap,
      period: "WEEKS 1-2",
      title: "Immediate Lead Flow",
      items: [
        "Google and Meta ads launch Day 1",
        "First leads arrive within 7 days or we pause billing and work free until they do",
        "Target: 20-30 qualified leads in the first 30 days"
      ]
    },
    {
      icon: TrendingUp,
      period: "MONTHS 2-3",
      title: "Authority Compounds",
      items: [
        "Your content starts doing work. AI platforms begin citing you",
        "Organic traffic layers on top of paid",
        "You're not dependent on ad spend alone to be seen",
        "Target: 35-55 leads per month"
      ]
    },
    {
      icon: TrendingDown,
      period: "MONTH 6",
      title: "You Own the Channel",
      items: [
        "The majority of your leads come from content you own, not platforms you rent",
        "Cost per lead has dropped 40-60%",
        "You have a market position that took competitors years to build—and you built it in six months",
        "Target: 50-75 leads per month at a fraction of Month 1 cost"
      ]
    }
  ];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">What to Expect</span>
          <h2 className="section-heading">What Founding Partners Can Expect</h2>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default FoundingPartnerExpectationsSection;
