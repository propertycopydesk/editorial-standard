import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  badge: string;
  badgeColor?: "default" | "gold";
  price: string;
  originalPrice?: string;
  subtitle: string;
  features: string[];
  ctaText: string;
  ctaDisabled?: boolean;
  roiCallout?: string;
  note?: string;
  popular?: boolean;
  onCtaClick?: () => void;
}

const ServiceCard = ({
  badge,
  badgeColor = "default",
  price,
  originalPrice,
  subtitle,
  features,
  ctaText,
  ctaDisabled = false,
  roiCallout,
  note,
  popular = false,
  onCtaClick,
}: ServiceCardProps) => {
  return (
    <article
      className={`relative flex flex-col bg-card border rounded p-8 h-full transition-shadow duration-200 hover:shadow-lg ${
        popular ? "border-accent border-2 shadow-md" : "border-border"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 text-xs font-sans uppercase tracking-wider">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <span
          className={`inline-block px-3 py-1 text-xs font-sans uppercase tracking-wider ${
            badgeColor === "gold"
              ? "bg-accent/20 text-accent-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {badge}
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
            {price}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-lg">
              {originalPrice}
            </span>
          )}
        </div>
        <p className="mt-2 text-muted-foreground font-sans">{subtitle}</p>
      </div>

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
