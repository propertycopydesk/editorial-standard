const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I went on a listing appointment and the seller said she found me on ChatGPT. $640K listing under agreement already!",
      name: "LeAnne Caswell",
      brokerage: "[Brokerage Name]",
    },
    {
      quote: "Got my second appointment from ChatGPT this month. Both were looking for an agent with a high list-to-sale price ratio. That's exactly what we optimized for.",
      name: "Richard Berman",
      brokerage: "[Brokerage Name]",
    },
    {
      quote: "Just set a listing appointment from ChatGPT. The seller specifically said I was 'top rated in the market.' We're now showing up in 50%+ of AI searches.",
      name: "Julian Picard",
      brokerage: "[Brokerage Name]",
    },
  ];

  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Headline */}
        <h2 className="text-3xl md:text-[40px] font-bold text-foreground text-center mb-14">
          What Agents Are Saying
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 shadow-sm"
            >
              {/* Avatar Placeholder */}
              <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-6" />

              {/* Quote */}
              <p className="text-lg text-foreground leading-relaxed mb-5">
                "{testimonial.quote}"
              </p>

              {/* Attribution */}
              <p className="text-base font-semibold text-foreground">
                — {testimonial.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonial.brokerage}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
