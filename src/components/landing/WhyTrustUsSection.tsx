import { Check, Search, DollarSign, Shield, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyTrustUsSection = () => {
  const ref = useScrollReveal();

  const credibilityPoints = [
    {
      icon: Search,
      title: "WE'VE DONE THE RESEARCH",
      items: [
        "200+ hours testing ChatGPT across 50 real estate markets",
        "Analyzed 1,000+ searches to identify citation patterns",
        "Reverse-engineered the top 100 AI-recommended agents",
        "Tested 50+ optimization strategies (15 worked, 35 failed)"
      ]
    },
    {
      icon: DollarSign,
      title: "WE'VE INVESTED REAL MONEY",
      items: [
        "Thousands in research and tool development",
        "Testing paid ad strategies",
        "6 months full-time building this system"
      ]
    },
    {
      icon: Shield,
      title: "WE'RE BETTING OUR REPUTATION",
      items: [
        "Public results tracker (updated weekly)",
        "100% free work guarantee (no questions asked)",
        "Direct access to founders (not hidden behind support)"
      ]
    },
    {
      icon: Lightbulb,
      title: "WE'VE IDENTIFIED THE GAP",
      items: [
        "Competitors only do organic or paid ads",
        "They make you wait 60-90 days for first results",
        "Or your leads stop coming when you kill paid ads",
        "We get you leads in 7 days WHILE building organic"
      ]
    }
  ];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">Our Credibility</span>
          <h2 className="section-heading">Why Trust Us If We Have No Client Results Yet?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fair question. Here's our credibility:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {credibilityPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">{point.title}</h3>
                </div>
                <ul className="space-y-2">
                  {point.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-secondary/50 border border-border rounded-xl p-8 max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">What we DON'T have:</span> Client testimonials (yet).
          </p>
          <p className="text-muted-foreground mb-4">
            <span className="font-semibold text-foreground">What we DO have:</span>
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• The strategy (proven through our own testing)</li>
            <li>• The guarantee (removes all your risk)</li>
            <li>• The motivation (we're betting everything on this)</li>
          </ul>
          <p className="text-foreground font-medium mt-6 border-t border-border pt-6">
            You'll be Founding Partner #1, #2, or #3.
          </p>
          <p className="text-muted-foreground">
            Your results will become our case studies.<br />
            Your success will build our business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
