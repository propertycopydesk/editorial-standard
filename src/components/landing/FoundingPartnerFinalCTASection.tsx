import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const FoundingPartnerFinalCTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/30 border-t border-border">
      <div ref={ref} className="container-editorial text-center scroll-reveal">
        <span className="section-tag">Ready?</span>

        <h2 className="section-heading max-w-3xl mx-auto">
          Get Your Free AI Visibility Audit
        </h2>

        <div className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed space-y-3">
          <p>15-minute call where we:</p>
          <ul className="text-left max-w-md mx-auto space-y-2 text-base">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>Show you live ChatGPT searches in your market</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>Reveal which competitors are already cited</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>Identify your current AI visibility score (0-100%)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>Explain exactly how we'd build your authority</span>
            </li>
          </ul>
          <p className="text-foreground font-medium">No pitch. No pressure. Just data.</p>
        </div>

        <Button
          onClick={() => window.open(BOOKING_URL, "_blank")}
          size="lg"
          className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold mb-6"
        >
          Book Your Free Audit
        </Button>

        <p className="text-sm text-muted-foreground">
          One agent per market · 2 founding spots remaining
        </p>
      </div>
    </section>
  );
};

export default FoundingPartnerFinalCTASection;
