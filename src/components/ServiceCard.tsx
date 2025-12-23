import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  turnaround: string;
}

interface PricingBreakdown {
  label: string;
  price: string;
}

interface ServiceCardProps {
  badge: string;
  badgeColor?: "default" | "gold";
  price: string;
  priceSubtext?: string;
  originalPrice?: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  ctaDisabled?: boolean;
  roiCallout?: string;
  note?: string;
  popular?: boolean;
  pricingTiers?: PricingTier[];
  pricingBreakdown?: PricingBreakdown[];
  goldNote?: string;
  selectedTier?: number;
  onTierSelect?: (index: number) => void;
  onCtaClick?: () => void;
}

const ServiceCard = ({
  badge,
  badgeColor = "default",
  price,
  priceSubtext,
  originalPrice,
  subtitle,
  features,
  ctaText,
  ctaDisabled = false,
  roiCallout,
  note,
  popular = false,
  pricingTiers,
  pricingBreakdown,
  goldNote,
  selectedTier = 0,
  onTierSelect,
  onCtaClick,
}: ServiceCardProps) => {
  return (
    <article
      className={`relative flex flex-col bg-card border rounded p-6 md:p-8 h-full transition-shadow duration-200 hover:shadow-lg ${
        popular ? "border-accent border-2 shadow-md" : "border-border"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 text-xs font-sans uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 text-xs font-sans uppercase tracking-wider ${
            badgeColor === "gold"
              ? "bg-accent/20 text-accent"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {badge}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-2 flex-wrap">
          {originalPrice && (
            <span className="text-muted-foreground line-through text-lg">
              {originalPrice}
            </span>
          )}
          <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            {price}
          </span>
        </div>
        {priceSubtext && (
          <p className="mt-1 text-sm text-muted-foreground font-sans">{priceSubtext}</p>
        )}
        <p className="mt-2 text-muted-foreground font-sans">{subtitle}</p>
      </div>

      {/* Pricing Tiers for Solo Agents */}
      {pricingTiers && (
        <div className="space-y-2 mb-6">
          {pricingTiers.map((tier, index) => (
            <button
              key={index}
              onClick={() => onTierSelect?.(index)}
              className={`w-full flex items-center justify-between p-3 border rounded text-left transition-all ${
                selectedTier === index
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-accent/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedTier === index ? "border-accent" : "border-muted-foreground"
                  }`}
                >
                  {selectedTier === index && (
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  )}
                </div>
                <div>
                  <span className="font-sans text-sm font-medium text-foreground">
                    {tier.name}
                  </span>
                  <span className="font-sans text-xs text-muted-foreground ml-2">
                    ({tier.turnaround})
                  </span>
                </div>
              </div>
              <span className="font-sans font-semibold text-foreground">
                {tier.price}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Pricing Breakdown for Teams */}
      {pricingBreakdown && (
        <div className="bg-muted rounded p-4 mb-6">
          <p className="text-xs font-sans uppercase tracking-wider text-muted-foreground mb-3">
            Pricing by Team Size
          </p>
          <div className="space-y-2">
            {pricingBreakdown.map((item, index) => (
              <div key={index} className="flex justify-between text-sm font-sans">
                <span className="text-foreground">{item.label}</span>
                <span className="text-foreground font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-foreground font-sans text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {roiCallout && (
        <div className="bg-muted border-l-4 border-accent p-4 mb-6">
          <p className="text-sm font-sans text-foreground">{roiCallout}</p>
        </div>
      )}

      {goldNote && (
        <div className="bg-accent/20 border border-accent rounded p-4 mb-6">
          <p className="text-sm font-sans text-foreground">{goldNote}</p>
        </div>
      )}

      {note && (
        <p className="text-xs text-muted-foreground font-sans mb-6 italic">
          {note}
        </p>
      )}

      <Button
        variant={popular ? "editorial-gold" : "editorial"}
        size="lg"
        className="w-full"
        disabled={ctaDisabled}
        onClick={onCtaClick}
      >
        {ctaText}
      </Button>
    </article>
  );
};

export default ServiceCard;
