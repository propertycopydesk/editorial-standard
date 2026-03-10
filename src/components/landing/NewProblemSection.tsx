import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const NewProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="section-tag">The Gap</span>
          <h2 className="section-heading">Don't Believe Us? Test It Yourself.</h2>
        </div>

        {/* Interactive Callout Box */}
        <div className="max-w-2xl mx-auto mb-16 bg-primary text-primary-foreground rounded-xl p-8 text-center">
          <p className="text-2xl font-bold mb-4">📱 OPEN CHATGPT RIGHT NOW</p>
          <p className="text-lg mb-2">
            Ask it: <span className="italic">"Best realtor in [your city]"</span>
          </p>
          <p className="text-primary-foreground/80">
            See whose names come up. Then ask yourself: How many of YOUR seller leads did this exact search before calling someone else?
          </p>
        </div>

        {/* Body Copy */}
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed mb-16">
          <p className="text-foreground font-semibold text-xl">
            Here's what's happening while you're buying $80 Zillow leads:
          </p>

          <div className="bg-secondary/50 border border-border rounded-xl p-6 space-y-3">
            <p><span className="font-bold text-foreground">In 2025:</span> 31% of home buyers used AI to research agents before making first contact.</p>
            <p><span className="font-bold text-foreground">By 2027:</span> 65% will use AI as their primary research tool.</p>
            <p><span className="font-bold text-foreground">Right now:</span> Google shows AI-generated answers at the top of 82% of real estate searches.</p>
            <p className="text-foreground font-semibold pt-2 border-t border-border">Translation: If AI doesn't know you exist, most buyers and sellers won't either.</p>
          </div>

          <p>
            And here's the part that should terrify you: The agents AI IS recommending? They claimed their visibility 6 months ago. While you were focused on this month's closings, they were building the authority that's feeding them free, organic seller leads today.
          </p>

          <p className="text-foreground font-medium">
            The gap between "cited by AI" and "invisible to AI" isn't small. It's existential.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-accent/10 border-2 border-accent rounded-xl p-6">
            <h3 className="text-lg font-bold text-accent mb-4">Agents AI Recommends</h3>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                <span>40-60 organic inquiries/month from AI-sourced traffic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                <span>Zero ad spend required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                <span>Sellers pre-qualified (already did research, ready to interview)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">→</span>
                <span>No competition (AI gave YOUR name specifically)</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary/50 border border-border rounded-xl p-6">
            <h3 className="text-lg font-bold text-muted-foreground mb-4">Agents AI Ignores</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">→</span>
                <span>Paying $60-150 per Zillow lead</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">→</span>
                <span>Competing with 5 other agents for same lead</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">→</span>
                <span>1-3% conversion rate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">→</span>
                <span>Treadmill never stops</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Soft CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open(BOOKING_URL, "_blank")}
            variant="outline"
            className="border-accent text-foreground hover:bg-accent hover:text-accent-foreground"
          >
            See Where You Rank →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewProblemSection;
