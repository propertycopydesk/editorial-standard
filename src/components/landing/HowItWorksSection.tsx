const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Bot-Optimized Content",
      description: "We create structured, citation-worthy content that AI platforms understand and trust. This gets you into ChatGPT's recommendations.",
    },
    {
      number: "02",
      title: "Human-Optimized Conversion",
      description: "Getting cited is great—but meaningless if visitors don't convert. We ensure your content persuades humans to call you.",
    },
    {
      number: "03",
      title: "Real-Time Citation Tracking",
      description: "We monitor ChatGPT, Perplexity, Gemini, and Google AI to see exactly when and how you're being recommended.",
    },
  ];

  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[1100px]">
        {/* Headline */}
        <h2 className="text-3xl md:text-[40px] font-bold text-foreground text-center mb-4">
          How We Make AI Recommend You
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground text-center max-w-[900px] mx-auto mb-14">
          We optimize your content so AI platforms trust you as the local expert—then ensure the people AI sends actually hire you.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border-2 border-accent mb-4">
                <span className="text-5xl font-bold text-accent">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mt-4 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-muted-foreground leading-relaxed max-w-[320px] mx-auto md:mx-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
