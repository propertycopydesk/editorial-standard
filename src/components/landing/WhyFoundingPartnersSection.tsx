import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const WhyFoundingPartnersSection = () => {
  const ref = useScrollReveal();

  const guarantees = [
    {
      day: "Day 30",
      items: [
        "9 articles published on your domain",
        "Google Business Profile fully optimized",
        "Schema markup implemented",
        "Baseline citation audit complete",
      ],
      miss: "Billing pauses. We work for free until all four are done.",
    },
    {
      day: "Day 60",
      items: [
        "18 articles published",
        "First AI citation detected (in at least 1 of 4 platforms: ChatGPT, Perplexity, Gemini, or Claude)",
        "Measurable organic traffic growth in Google Analytics",
      ],
      miss: "Billing pauses. We work for free until all three are done.",
    },
    {
      day: "Day 90",
      items: [
        "27 articles published",
        "30-50% AI citation rate across 4 platforms",
        "Ranking on page 1-2 for at least 5 high-intent local queries",
        "Organic traffic 5-10x from Month 1 baseline",
      ],
      miss: "Billing pauses. We work for free until all four are done.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Performance Accountability</span>
          <h2 className="section-heading">Our Guarantee: Hit Milestones or We Work for Free</h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
          <p>
            We're not offering refunds. We're offering something better: <span className="font-semibold text-foreground">performance accountability.</span>
          </p>
          <p>
            If we don't hit the milestones, we pause billing and work for free until we do. Your investment stays with you (everything we built is yours), but you stop paying until we deliver.
          </p>
        </div>

        {/* Milestone Guarantees */}
        <div className="space-y-6 mb-10">
          {guarantees.map((g, index) => (
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
              <p className="text-sm text-foreground font-medium bg-accent/5 rounded-lg p-2">
                <span className="font-bold">MISS IT?</span> {g.miss}
              </p>
            </div>
          ))}
        </div>

        {/* Caveat */}
        <div className="bg-secondary/50 border border-border rounded-xl p-5 mb-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-bold text-foreground">IMPORTANT CAVEAT:</span> If your website has zero domain authority (brand new site, manual penalties, or technical issues we can't control), the 90-day timeline may not be realistic. In Month 1, we'll audit your site's foundation. If there are blockers (broken backlinks, thin content, penalties), we'll notify you and adjust the timeline or help you fix them first.
          </p>
        </div>

        {/* Day 100 */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-foreground mb-2">Day 100</h3>
          <p className="text-muted-foreground text-sm">
            Unsatisfied for any reason? Cancel with no penalty. We hand you every article, every login, every file. You keep the asset we built together.
          </p>
        </div>

        {/* What we ask */}
        <div className="bg-accent/10 border-2 border-accent rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-foreground mb-3">WHAT WE ASK IN RETURN:</h4>
              <p className="text-sm text-muted-foreground mb-3">This is a partnership. For the guarantee to apply:</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>→ Approve content drafts within 48 hours</li>
                <li>→ Give us account access we need (Google Business, website backend, etc.)</li>
                <li>→ Respond to strategy questions within 24 hours</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                If you go silent for more than 7 days without explanation, the guarantee pauses. We can't build your authority without your participation.
              </p>
            </div>
          </div>
        </div>

        {/* Why no refunds */}
        <div className="text-muted-foreground leading-relaxed">
          <p className="text-foreground font-semibold mb-2">WHY NO REFUNDS?</p>
          <p className="text-sm">
            Because the asset we're building stays with you regardless. Every article lives on your domain forever. If we don't deliver, you stop paying—but you keep everything we built. That's worth more than a refund. You're not losing the investment. You're gaining an asset while we work for free to finish it.
          </p>
        </div>

        {/* Soft CTA */}
        <div className="text-center pt-8">
          <Button
            onClick={() => window.open(BOOKING_URL, "_blank")}
            variant="outline"
            className="border-accent text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            Book Your Free Market Audit →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyFoundingPartnersSection;
