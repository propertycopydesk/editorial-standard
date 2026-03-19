import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const NewHeroSection = () => {
  const ref = useScrollReveal();

  const openAudit = () => {
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 relative">
      <div ref={ref} className="max-w-5xl mx-auto scroll-reveal">
        {/* Main Headline */}
        <div className="text-center mb-10">
          <h1 className="text-hero font-bold text-foreground mb-2 leading-tight">
            A prospect just asked AI for the best realtor in your city.
            <br />
            <span className="text-accent">You DID NOT come up.</span>
          </h1>
        </div>

        {/* ChatGPT Screenshot Mockup */}
        <div className="max-w-2xl mx-auto mb-10 rounded-xl border border-border bg-card shadow-lg overflow-hidden">
          {/* ChatGPT Header Bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/60 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/40" />
              <div className="w-3 h-3 rounded-full bg-accent/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <span className="text-xs text-muted-foreground font-medium ml-2">ChatGPT</span>
          </div>

          <div className="p-5 space-y-4">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%]">
                <p className="text-sm">Who's the best realtor to sell my home in Austin, Texas?</p>
              </div>
            </div>

            {/* AI Response */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Here are several agents and teams that repeatedly rank near the top based on sales volume and reviews:
              </p>

              <div className="space-y-4">
                <div className="bg-secondary/40 rounded-lg p-3">
                  <p className="text-sm font-semibold text-foreground">1️⃣ Eric Bramlett — Bramlett Partners</p>
                  <p className="text-xs text-muted-foreground mt-1">⭐ 5.0 rating with 1200+ reviews · 2900+ lifetime sales</p>
                  <p className="text-xs text-muted-foreground">One of Austin's highest-volume agents. Strong at marketing listings and selling quickly.</p>
                  <p className="text-xs text-accent mt-1">Best for: selling homes efficiently in mid- to high-value neighborhoods.</p>
                </div>

                <div className="bg-secondary/40 rounded-lg p-3">
                  <p className="text-sm font-semibold text-foreground">2️⃣ Ross Speed & Lindsay Neuren — Speed Neuren Group (Compass)</p>
                  <p className="text-xs text-muted-foreground mt-1">Top 1% of Austin real estate teams · 40+ years combined experience</p>
                  <p className="text-xs text-muted-foreground">Known for luxury homes, relocations, and new builds.</p>
                  <p className="text-xs text-accent mt-1">Best for: higher-end homes or relocation buyers.</p>
                </div>

                <div className="bg-secondary/40 rounded-lg p-3">
                  <p className="text-sm font-semibold text-foreground">3️⃣ Kent Redding — Berkshire Hathaway Texas Realty</p>
                  <p className="text-xs text-muted-foreground mt-1">23+ years experience · Ranked top 0.08% of Austin agents</p>
                  <p className="text-xs text-muted-foreground">Strong negotiation results.</p>
                  <p className="text-xs text-accent mt-1">Best for: sellers who want a veteran negotiator.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subheadline */}
        <div className="text-center mb-8">
          <p className="text-subhero text-foreground font-medium max-w-3xl mx-auto mb-2">
            Every day, 20-40 sellers in your market are making their shortlist this way.
          </p>
          <p className="text-subhero text-muted-foreground max-w-3xl mx-auto">
            If you're not on it, you don't exist.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="text-center mb-6">
          <Button
            onClick={openAudit}
            size="lg"
            className="btn-gold-shine text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold mb-3"
          >
            Get Your Free AI Visibility Check
          </Button>
          <p className="text-sm text-muted-foreground mb-1">
            See exactly where you rank when AI recommends agents in your market
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            15-minute audit · No pitch · One agent per market
          </p>
          <button
            data-tally-open="D4eE7N"
            data-tally-layout="modal"
            data-tally-emoji-text="🌀"
            data-tally-emoji-animation="spin"
            data-tally-auto-close="3000"
            data-tally-form-events-forwarding="1"
            className="text-sm text-muted-foreground hover:text-accent underline underline-offset-2 transition-colors cursor-pointer"
          >
            Not ready for a call? Get a free AI Visibility Score instead →
          </button>
        </div>

        {/* Trust Lines */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-accent" />
            One agent per market (we turn away your competitors)
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-accent" />
            Everything we build lives on YOUR domain (you own it forever)
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-accent" />
            2 introductory offer spots remaining
          </span>
        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
