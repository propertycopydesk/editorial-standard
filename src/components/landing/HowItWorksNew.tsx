import { useScrollReveal } from "@/hooks/useScrollReveal";

const HowItWorksNew = () => {
  const ref = useScrollReveal();

  const milestones = [
    {
      phase: "WEEK 1",
      description: "We launch your Google + Meta ad campaigns. Install tracking. Optimize your Google Business Profile.",
      result: "Your phone starts ringing.",
    },
    {
      phase: "MONTH 1",
      description: "Your first 9 BOFU articles go live. AI starts indexing. Retargeting brings back warm leads who didn't convert.",
      result: "20-35 qualified leads delivered.",
    },
    {
      phase: "MONTH 3",
      description: "ChatGPT and Perplexity start citing you. Organic traffic kicks in. Cost per lead drops 30%.",
      result: "35-55 leads per month (paid + organic synergy).",
    },
    {
      phase: "MONTH 6+",
      description: "You dominate both channels. 60% organic, 40% paid. Cost per lead drops 60% from Month 1.",
      result: "50-75 leads per month at fraction of initial cost.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">How It Works</span>
          <h2 className="section-heading">The 4-Milestone System</h2>
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
                  <p className="text-muted-foreground mb-3">{milestone.description}</p>
                  <p className="text-foreground font-medium">→ {milestone.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-muted-foreground mt-12">
          That's it. No complexity. Only results.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksNew;
