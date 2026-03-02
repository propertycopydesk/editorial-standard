import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyTrustUsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Our Credibility</span>
          <h2 className="section-heading">Why Trust Us Without Client Results</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>Fair question. Here's the honest answer.</p>
          
          <p>
            We spent 6 months and significant money building this system before charging a dollar for it. We analyzed how AI recommends agents across 50 markets. We reverse-engineered citation patterns. We tested 50+ optimization approaches and kept the 15 that actually worked.
          </p>

          <p>
            We don't have client testimonials. What we have is a system we believe in enough to guarantee entirely, a results tracker that will be updated every week once Founding Partners launch, and direct access to the founders—on a call, not a support ticket.
          </p>

          <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
            Your results become our case studies. Your market position becomes our proof of concept. Instead of hiding behind a free trial, we're betting our entire business on your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUsSection;
