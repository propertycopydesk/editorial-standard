import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const NewHeroSection = () => {
  const ref = useScrollReveal();

  const openAudit = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 relative">
      <div ref={ref} className="max-w-4xl mx-auto text-center scroll-reveal">
        {/* Main Headline */}
        <h1 className="text-hero font-bold text-foreground mb-6 leading-tight">
          When Sellers Ask ChatGPT for the Best Agent in Your Market,
          <br className="hidden md:block" />
          <span className="text-accent">Which Name Appears?</span>
        </h1>

        {/* Subheadline */}
        <p className="text-subhero text-muted-foreground max-w-3xl mx-auto mb-4">
          We build the local authority that gets you cited by search engines and AI: ChatGPT, Perplexity, Gemini, and Claude.
        </p>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
          First citations in 30-60 days. Market dominance in 6-12 months. Start now, own your market for the next decade.
        </p>

        <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-10">
          Most agents spend $10K/month on Zillow and Google PPC to stay visible in 2024. This is the $1,299/month hedge that ensures those dollars don't become worthless when AI replaces blue links in 2025.
        </p>

        {/* Primary CTA Button */}
        <Button
          onClick={openAudit}
          size="lg"
          className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold mb-4"
        >
          Get Your Free Audit
        </Button>

        {/* Secondary line */}
        <p className="text-sm text-muted-foreground mb-8">
          One agent per market · 2 founding partner spots remaining
        </p>

        {/* Trust line */}
        <p className="text-lg text-foreground font-medium max-w-2xl mx-auto border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r text-left">
          Everything we build lives on your domain, in your accounts, under your name. You own it, even if you leave.
        </p>
      </div>
    </section>
  );
};

export default NewHeroSection;
