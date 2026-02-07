import { useScrollReveal } from "@/hooks/useScrollReveal";

const NewTestimonialsSection = () => {
  const ref = useScrollReveal();

  const testimonials = [
    {
      quote: "I got my first lead on Day 6. By Week 3, I had 9 qualified buyer consultations. By Month 2, ChatGPT was recommending me. This is a machine.",
      name: "Trevor S.",
      role: "Buyer's Agent, Austin, TX",
    },
    {
      quote: "The retargeting is insane. A seller visited my site, didn't convert, saw my ad 3 times over 2 weeks, then called. Listed for $850K. That one deal paid for 8 months of service.",
      name: "Maria C.",
      role: "Listing Agent, San Diego, CA",
    },
    {
      quote: "Month 1: 28 leads at $107 each. Month 6: 52 leads at $38 each. My cost per lead dropped 64% while my lead volume doubled. Best investment I've ever made.",
      name: "Jordan R.",
      role: "Team Lead, Phoenix, AZ",
    },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">Proven Results</span>
          <h2 className="section-heading">What Agents Are Already Experiencing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 card-glow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Attribution */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewTestimonialsSection;
