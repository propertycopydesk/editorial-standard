import { ArrowRight } from "lucide-react";

const ProblemSection = () => {
  const botContent = [
    "Machine-readable",
    "Structured data",
    "Entity-focused",
    "Citation-worthy",
  ];

  const humanContent = [
    "Emotionally resonant",
    "Trust-building",
    "Conversion-focused",
    "Brand storytelling",
  ];

  const funnelSteps = [
    { label: "Bot Awareness", sublabel: "GEO" },
    { label: "Bot Evaluation", sublabel: "Structured Data" },
    { label: "Bot Recommendation", sublabel: "Citation Signals" },
    { label: "Human Decision", sublabel: "Human-Readable Content" },
    { label: "Human Purchase", sublabel: "Conversion Optimization" },
  ];

  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[900px] text-center">
        {/* Main Headline */}
        <h2 className="text-3xl md:text-[44px] font-bold text-primary leading-tight mb-8 md:whitespace-nowrap">
          Stop chasing leads. Become the answer.
        </h2>

        {/* Body paragraphs */}
        <div className="space-y-6 mb-12">
          <p className="text-xl md:text-2xl font-semibold text-primary md:whitespace-nowrap">
            AI SEO puts you in front of ready-to-buy clients searching on AI platforms.
          </p>
          <p className="text-xl md:text-2xl text-primary">
            AI-generated leads convert 9x better than traditional search
          </p>
        </div>

        {/* Stat Callout */}
        <div className="mb-16">
          <p className="text-7xl font-bold text-primary">62%</p>
          <p className="text-lg text-primary/60 max-w-[600px] mx-auto mt-4">
            of people trust AI over friends & family for real estate advice
          </p>
        </div>

        {/* Two Types of Content Section */}
        <h3 className="text-2xl md:text-[36px] font-bold text-primary mb-10">
          We provide TWO types of content you NEED
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Bot-Optimized */}
          <div className="bg-card border border-border rounded-lg p-8 text-left">
            <h4 className="text-xl font-bold text-primary mb-4">
              Bot-Optimized Content
            </h4>
            <ul className="space-y-2">
              {botContent.map((item, index) => (
                <li key={index} className="text-primary/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Human-Optimized */}
          <div className="bg-card border border-border rounded-lg p-8 text-left">
            <h4 className="text-xl font-bold text-primary mb-4">
              Human-Optimized Content
            </h4>
            <ul className="space-y-2">
              {humanContent.map((item, index) => (
                <li key={index} className="text-primary/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-lg md:text-xl text-primary/70 font-medium mb-16 space-y-2">
          <p>Most marketers only do one or the other.</p>
          <p>You need <span className="font-bold text-primary">BOTH</span> because 82% of Americans use AI for housing market info.</p>
        </div>

        {/* Funnel Infographic */}
        <div className="bg-card border border-border rounded-xl p-6 md:p-10">
          <h4 className="text-xl md:text-2xl font-bold text-primary mb-8">
            The New Real Estate Marketing Funnel
          </h4>
          
          {/* Desktop Funnel - Centered layout */}
          <div className="hidden md:flex flex-col items-center">
            <div className="flex items-center justify-center gap-4">
              {/* First two stacked */}
              <div className="flex flex-col gap-2">
                {funnelSteps.slice(0, 2).map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-accent/10 border border-accent rounded-lg px-4 py-3 min-w-[140px]">
                      <p className="text-sm font-semibold text-primary">{step.label}</p>
                      <p className="text-xs text-primary/60 mt-1">[{step.sublabel}]</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
              
              {/* Remaining three in a row */}
              {funnelSteps.slice(2).map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center">
                    <div className="bg-accent/10 border border-accent rounded-lg px-4 py-3 min-w-[140px]">
                      <p className="text-sm font-semibold text-primary">{step.label}</p>
                      <p className="text-xs text-primary/60 mt-1">[{step.sublabel}]</p>
                    </div>
                  </div>
                  {index < 2 && (
                    <ArrowRight className="w-5 h-5 text-accent mx-2 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Funnel */}
          <div className="md:hidden space-y-3">
            {funnelSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-accent/10 border border-accent rounded-lg px-4 py-3 w-full max-w-[280px]">
                  <p className="text-sm font-semibold text-primary">{step.label}</p>
                  <p className="text-xs text-primary/60 mt-1">[{step.sublabel}]</p>
                </div>
                {index < funnelSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-accent my-2 rotate-90" />
                )}
              </div>
            ))}
          </div>
          
          {/* Focus Section */}
          <div className="mt-10 pt-8 border-t border-border">
            <h5 className="text-lg md:text-xl font-semibold text-primary mb-4">
              Want AI to recommend YOU? Focus on:
            </h5>
            <div className="flex flex-wrap justify-center gap-4 text-base md:text-lg text-primary">
              <span>✓ Strategic content creation</span>
              <span>✓ Brand mentions</span>
              <span>✓ Citations</span>
              <span>✓ Authority building</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
