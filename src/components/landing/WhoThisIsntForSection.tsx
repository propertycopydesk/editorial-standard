import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhoThisIsntForSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/30 border-y border-border">
      <div ref={ref} className="container-editorial max-w-4xl scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Honest Assessment</span>
          <h2 className="section-heading">This Service Isn't For Everyone.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* NOT For */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-bold text-foreground mb-5">This IS NOT For Agents Who:</h3>
            <ul className="space-y-5">
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">❌</span>
                  <div>
                    <span className="font-semibold text-foreground">Do &lt;10 deals/year</span>
                    <p className="text-sm text-muted-foreground mt-1">You need immediate lead flow, not 6-month authority building. Focus on Zillow leads, open houses, and cold calling until you're established.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">❌</span>
                  <div>
                    <span className="font-semibold text-foreground">Need leads THIS WEEK to survive</span>
                    <p className="text-sm text-muted-foreground mt-1">We build authority, not instant lead flow. If your business is in crisis mode, you need a different solution short-term.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">❌</span>
                  <div>
                    <span className="font-semibold text-foreground">Want to "set it and forget it"</span>
                    <p className="text-sm text-muted-foreground mt-1">You'll need to approve content (30 min/week) and provide market input. This is a partnership, cooperation is required.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">❌</span>
                  <div>
                    <span className="font-semibold text-foreground">Are unwilling to invest in long-term assets</span>
                    <p className="text-sm text-muted-foreground mt-1">If you only think month-to-month, this won't make sense. We're building infrastructure that compounds for years.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <span className="text-destructive font-bold mt-0.5">❌</span>
                  <div>
                    <span className="font-semibold text-foreground">Markets under 50K population</span>
                    <p className="text-sm text-muted-foreground mt-1">Not enough search volume to justify the investment. Small towns work better with traditional networking and referrals.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* IS For */}
          <div className="bg-card border border-accent/30 rounded-xl p-6">
            <h3 className="font-bold text-foreground mb-5">This IS For Agents Who:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <span className="text-accent font-bold mt-0.5">✓</span>
                <span><span className="font-semibold text-foreground">Do 10-15+ deals/year</span> and think 12-24 months ahead</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <span className="text-accent font-bold mt-0.5">✓</span>
                <span><span className="font-semibold text-foreground">Currently spend $1,500+ on marketing</span> who want to build assets, not rent visibility</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <span className="text-accent font-bold mt-0.5">✓</span>
                <span><span className="font-semibold text-foreground">See commission compression coming</span> and want a competitive moat</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <span className="text-accent font-bold mt-0.5">✓</span>
                <span><span className="font-semibold text-foreground">Are in markets 100K+ population</span> with enough search volume</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <span className="text-accent font-bold mt-0.5">✓</span>
                <span><span className="font-semibold text-foreground">Understand that authority beats advertising</span> long-term</span>
              </li>
            </ul>
            <p className="text-sm text-foreground font-medium mt-6 pt-4 border-t border-border">
              If this is you, keep reading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsntForSection;
