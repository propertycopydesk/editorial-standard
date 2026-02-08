import { Check, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyFoundingPartnersSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <span className="section-tag">Full Transparency</span>
        
        <h2 className="section-heading">
          Why Founding Partners?
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Full transparency: We've spent 6 months and thousands of dollars building this system, but we have zero client results yet.
          </p>

          <div className="bg-card border border-border rounded-xl p-6 my-8">
            <p className="text-foreground font-semibold mb-4">Here's what we DO have:</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>200+ hours analyzing how ChatGPT recommends agents across 50 markets</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Reverse-engineered the exact patterns that trigger AI citations</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Tested the strategy on ourselves (we're ranking for "AI visibility for real estate" in ChatGPT)</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>Identified the gaps competitors who charge $20K/year miss</span>
              </div>
            </div>
          </div>

          <p>
            <span className="text-foreground font-semibold">What we need:</span> 3 agents willing to be first in exchange for massive discounts and lifetime pricing locks.
          </p>

          <p>
            <span className="text-foreground font-semibold">What you get:</span> Premium service at 40-60% off forever + the competitive advantage of being first in your market.
          </p>

          <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
            This offer closes the moment we fill 3 spots. After that, everyone pays full price ($2,499/month) with no lifetime lock.
          </p>

          <div className="bg-card border border-border rounded-xl p-6 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="text-accent font-bold text-sm">YOUR RISK:</div>
                <span className="text-foreground">Zero. (We guarantee 90 leads in 90 days or full refund.)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-accent font-bold text-sm">OUR RISK:</div>
                <span className="text-foreground">Everything. (Our reputation depends entirely on your success.)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFoundingPartnersSection;
