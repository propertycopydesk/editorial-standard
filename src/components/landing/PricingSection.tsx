import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";

const BOOKING_URL = "https://cal.com/propertycopydesk/qualificationcall";

const PricingSection = () => {
  const openAudit = () => {
    analytics.ctaClick("Get AI Audit", "pricing");
    window.open(BOOKING_URL, "_blank");
  };

  const primaryFeatures = [
    "5 premium bot + human optimized articles per month",
    "AI citation tracking across ChatGPT, Perplexity, Gemini, Google",
    "Monthly strategy calls to review results and optimize",
    "First citation in 30 days or we keep working for free",
  ];

  const secondaryFeatures = [
    "Weekly group coaching calls (4-6 agents)",
    "Done-with-you content templates",
    "Citation tracking dashboard (Notion)",
    "Slack community support",
  ];

  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Headline */}
        <h2 className="text-3xl md:text-[40px] font-bold text-foreground text-center mb-4">
          Choose Your Path to AI Visibility
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-14">
          We only work with serious agents ready to dominate their market.
        </p>

        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Primary Card - Done-For-You */}
          <div className="lg:w-[70%] relative">
            {/* Badge */}
            <div className="absolute -top-3 left-8">
              <span className="bg-accent text-accent-foreground text-sm font-semibold px-3 py-1.5 rounded">
                Best for Fast Results
              </span>
            </div>

            <div className="border-[3px] border-accent rounded-xl p-8 md:p-10 bg-card shadow-lg">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Done-For-You AI Visibility
              </h3>
              <p className="text-base text-muted-foreground mb-6">
                We handle everything while you focus on closing deals
              </p>

              <p className="text-5xl font-bold text-foreground mb-8">
                $1,299<span className="text-xl font-normal text-muted-foreground">/month</span>
              </p>

              <ul className="space-y-3 mb-8">
                {primaryFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={openAudit}
                size="lg"
                className="w-full text-xl py-8 rounded-lg font-semibold shadow-md mb-6"
              >
                Get Your Free AI Audit →
              </Button>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground text-base mb-4">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  First citation in 30 days guaranteed
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent" />
                  Limited to 3 new clients per month
                </span>
              </div>

              <p className="text-sm text-muted-foreground/70 text-center">
                3-month minimum commitment
              </p>
            </div>
          </div>

          {/* Secondary Card - DIY Coaching */}
          <div className="lg:w-[30%] relative">
            {/* Badge */}
            <div className="absolute -top-3 left-8">
              <span className="bg-muted text-muted-foreground text-sm font-semibold px-3 py-1.5 rounded">
                For DIY-ers
              </span>
            </div>

            <div className="border border-border rounded-xl p-6 md:p-8 bg-card shadow-sm h-full flex flex-col">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                DIY Coaching Program
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Learn the system and implement it yourself
              </p>

              <p className="text-4xl font-bold text-foreground mb-6">
                $497<span className="text-lg font-normal text-muted-foreground">/month</span>
              </p>

              <ul className="space-y-2.5 mb-6 flex-grow">
                {secondaryFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-base text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-foreground hover:underline mb-5 block"
                onClick={() => analytics.ctaClick("Coaching Learn More", "pricing")}
              >
                Learn more about coaching →
              </a>

              <p className="text-sm text-muted-foreground italic text-center mb-2">
                Best for agents with more time than budget
              </p>

              <p className="text-sm text-muted-foreground/70 text-center">
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
