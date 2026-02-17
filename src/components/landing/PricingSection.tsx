import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const PricingSection = () => {
  const openAudit = () => {
    analytics.ctaClick("Get AI Audit", "pricing");
    window.open(BOOKING_URL, "_blank");
  };

  const primaryFeatures = [
    "6 premium bot + human optimized articles per month",
    "AI citation tracking across ChatGPT, Perplexity, Gemini, Grok",
    "Monthly strategy calls to review results and optimize",
    "First citation in 30 days or we keep working for free",
  ];

  const secondaryFeatures = [
    "Weekly group coaching calls (4-6 agents)",
    "Done-with-you content templates",
    "Citation tracking dashboard (Notion)",
    "Discord community support",
  ];

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Headline */}
        <h2 className="text-3xl md:text-[40px] font-bold text-primary text-center mb-4">
          Choose Your Path to AI Visibility
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-primary/60 text-center mb-14">
          We only work with serious agents ready to dominate their market.
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Primary Card - Get AI Visibility */}
          <div className="lg:w-[70%] relative">
            {/* Badge */}
            <div className="absolute -top-3 left-8">
              <span className="bg-accent text-accent-foreground text-sm font-semibold px-3 py-1.5 rounded">
                Best for Fast Results
              </span>
            </div>

            <div className="border-[3px] border-accent rounded-xl p-8 md:p-10 bg-card shadow-lg">
              <h3 className="text-3xl font-bold text-primary mb-2">
                Get AI Visibility
              </h3>
              <p className="text-base text-primary/60 mb-6">
                We handle everything while you focus on closing deals
              </p>

              <p className="text-5xl font-bold text-primary mb-8">
                $1,299<span className="text-xl font-normal text-primary/60">/month</span>
              </p>

              <ul className="space-y-3 mb-8">
                {primaryFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-primary">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={openAudit}
                size="lg"
                className="w-full text-xl py-8 rounded-lg font-semibold shadow-md mb-6 btn-gold-shine"
              >
                Get Your Free AI Audit →
              </Button>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary/60 text-base mb-4">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  First citation in 30 days guaranteed
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  Limited to 3 new clients per month
                </span>
              </div>

              <p className="text-sm text-primary/50 text-center">
                3-month minimum commitment
              </p>
            </div>
          </div>

          {/* Secondary Card - Coaching Program */}
          <div className="lg:w-[30%] relative">
            {/* Badge */}
            <div className="absolute -top-3 left-8">
              <span className="bg-muted text-primary/60 text-sm font-semibold px-3 py-1.5 rounded">
                Have More Time?
              </span>
            </div>

            <div className="border border-border rounded-xl p-6 md:p-8 bg-card shadow-sm h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Coaching Program
              </h3>
              <p className="text-sm text-primary/60 mb-5">
                Learn the system and implement it yourself
              </p>

              <p className="text-4xl font-bold text-primary mb-6">
                $497<span className="text-lg font-normal text-primary/60">/month</span>
              </p>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {secondaryFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-base text-primary">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-primary hover:underline mb-5 block"
                onClick={() => analytics.ctaClick("Coaching Learn More", "pricing")}
              >
                Learn more about coaching →
              </a>

              <p className="text-sm text-primary/60 italic text-center mb-2">
                Best for agents with more time than budget
              </p>

              <p className="text-sm text-primary/50 text-center">
                6-month commitment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
