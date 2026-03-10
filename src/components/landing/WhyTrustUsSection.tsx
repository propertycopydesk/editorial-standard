import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyTrustUsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Our Credibility</span>
          <h2 className="section-heading">Why Trust Us Without Client Results</h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>Fair question. Here's the honest answer.</p>

          <div>
            <p className="text-foreground font-semibold mb-3">WHAT WE'VE DONE:</p>
            <p className="mb-2">6 months of research before charging a dollar:</p>
            <ul className="space-y-1.5 text-sm">
              <li>→ Analyzed AI citation patterns across 50 U.S. real estate markets</li>
              <li>→ Reverse-engineered how ChatGPT, Perplexity, Gemini, and Claude decide who to recommend</li>
              <li>→ Tested 50+ content optimization strategies and kept the 15 that actually worked</li>
              <li>→ Documented exactly what schema markup, internal linking, and content depth trigger citations</li>
            </ul>
            <p className="text-sm text-foreground font-medium mt-2">$12,000+ invested in validation before offering this to anyone.</p>
          </div>

          <div>
            <p className="text-foreground font-semibold mb-2">WHAT WE DON'T HAVE:</p>
            <p>Client testimonials. Case studies. Success stories.</p>
            <p>You're founding partner #1, #2, or #3. Your results become our proof.</p>
          </div>

          <div>
            <p className="text-foreground font-semibold mb-2">WHY WE'RE NOT SELLING LEADS:</p>
            <p>You've been burned by "lead gen" companies. We get it. They sell you garbage contacts, hold your data hostage, and disappear when the leads dry up.</p>
            <p>That's not this. We're not a lead vendor. We're building an asset YOU own, on YOUR domain, that compounds for years. If you cancel tomorrow, you keep everything we built.</p>
            <p>That's the difference between renting leads and owning authority.</p>
          </div>

          <div>
            <p className="text-foreground font-semibold mb-2">WHAT WE'RE OFFERING INSTEAD:</p>
            <ul className="space-y-1.5 text-sm">
              <li>✓ A milestone-based guarantee (hit targets or we work for free)</li>
              <li>✓ A public results tracker updated weekly once you launch</li>
              <li>✓ Direct founder access (not a support team, not a sales rep)</li>
              <li>✓ Founding partner discount because we need proof of concept</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-foreground font-semibold mb-2">THE TRADE IS CLEAR:</p>
            <p className="text-sm">You get first-mover market advantage, a permanent discount, and everything we build stays yours even if you cancel. We get case studies that let us charge full price to everyone after you.</p>
          </div>

          <div>
            <p className="text-foreground font-semibold mb-2">WHY THIS MATTERS IN A RECESSION:</p>
            <p>The agents who move when opportunity cost is low and competition is asleep are the ones who survive when markets tighten.</p>
            <p>The window to claim AI visibility in your market before five other agents figure this out is open now. It won't stay open.</p>
            <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r mt-4">
              You're not betting on us. You're betting on whether authority matters when commission compression arrives. We think it does. The guarantee says we'll prove it or work for free trying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
