import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const WhyFoundingPartnersSection = () => {
  const ref = useScrollReveal();

  const milestones = [
    {
      day: "Month 3: First Citation",
      items: [
        "You appear when ChatGPT, Google AI, or Perplexity is asked for agent recommendations in your market—at least once",
      ],
      miss: "Billing pauses. We work for free until you do.",
    },
    {
      day: "Month 6: 60-80% Citation Rate",
      items: [
        "You're cited 6-8 times out of every 10 AI searches in your market",
      ],
      miss: "Billing pauses. We work for free until you hit it.",
    },
    {
      day: "Month 6: Unsatisfied for Any Reason?",
      items: [
        "Cancel with no penalty. We hand you every article, every login, every file. The asset we built together stays yours.",
      ],
      miss: null,
    },
  ];

  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Performance Accountability</span>
          <h2 className="section-heading">Our Guarantee: You Risk Nothing</h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
          <p>
            We're asking you to trust us without client testimonials yet. So we've structured the guarantee to remove every reason not to.
          </p>
        </div>

        {/* Milestone Guarantees */}
        <div className="space-y-6 mb-10">
          {milestones.map((g, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-accent mb-3">{g.day}</h3>
              <ul className="space-y-2 mb-3">
                {g.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {g.miss && (
                <p className="text-sm text-foreground font-medium bg-accent/5 rounded-lg p-2">
                  <span className="font-bold">MISS IT?</span> {g.miss}
                </p>
              )}
            </div>
          ))}
        </div>

        <p className="text-foreground font-semibold text-lg mb-6 text-center">
          You're not losing your investment. You're gaining an asset while we work for free to complete it.
        </p>

        {/* Example */}
        <div className="bg-secondary/50 border border-border rounded-xl p-5 mb-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-bold text-foreground">Example:</span> If we build 36 articles in Month 4 but haven't gotten your first citation yet, billing pauses BUT you keep those 36 articles. They're worth $5,000-7,000 if you hired a content agency. We keep working at no cost to you until that citation appears.
          </p>
        </div>

        {/* Why we structure it this way */}
        <div className="bg-accent/10 border-2 border-accent rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-foreground mb-3">🛡️ WHY WE STRUCTURE IT THIS WAY</h4>
              <p className="text-sm text-muted-foreground mb-3">Traditional refunds don't make sense here because you KEEP everything we build.</p>
              <p className="text-sm text-muted-foreground mb-2">If we fail to hit milestones:</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>→ Billing pauses (you stop paying)</li>
                <li>→ We keep working for free until we deliver</li>
                <li>→ You own all the content (stays on your domain forever)</li>
              </ul>
              <p className="text-sm text-foreground font-medium mt-3">
                Your worst case: You own a $10,000-15,000 content asset and we're working for free to finish what we promised.
              </p>
            </div>
          </div>
        </div>

        {/* Soft CTA */}
        <div className="text-center pt-4">
          <Button
            onClick={() => window.open(BOOKING_URL, "_blank")}
            variant="outline"
            className="border-accent text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Book Your Free Audit →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyFoundingPartnersSection;
