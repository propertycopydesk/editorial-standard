const DifferentiationSection = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-[900px] mx-auto border-2 border-border rounded-xl p-8 md:p-14 text-center">
          {/* Icon */}
          <div className="text-4xl mb-6">💡</div>

          {/* Headline */}
          <h2 className="text-2xl md:text-[32px] font-bold text-primary mb-6">
            How We Are Different From Other AI SEO Agencies?
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-4 text-lg md:text-xl text-primary/70 leading-relaxed">
            <p>Most agencies only optimize for AI citations.</p>
            <p>
              Our services are optimized for the <span className="font-bold text-primary">bot-to-human handoff</span>: content that bots can parse, understand, and confidently recommend to humans.
            </p>
            <p className="font-semibold text-primary">
              That's the difference between vanity metrics and REVENUE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
