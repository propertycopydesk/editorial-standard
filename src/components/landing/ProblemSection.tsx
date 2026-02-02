const ProblemSection = () => {
  return (
    <section className="bg-muted py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-[800px] text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-[40px] font-bold text-foreground leading-tight mb-8">
          The New Reality of Real Estate Lead Generation
        </h2>

        {/* Body paragraphs */}
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-foreground">
            Sellers don't Google 'realtor near me' anymore.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            They ask ChatGPT: 'Who's the best agent in [CITY] for selling my home?'
          </p>
          <p className="text-xl md:text-2xl text-foreground">
            And AI gives them <span className="font-bold">ONE name</span>. If it's not yours, you just lost a listing you'll never even know about.
          </p>
        </div>

        {/* Stat Callout */}
        <div className="mt-12">
          <p className="text-7xl font-bold text-foreground">64%</p>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto mt-4">
            of sellers now use AI to research agents before contacting them
          </p>
        </div>

        {/* Final Tagline */}
        <p className="text-xl text-muted-foreground italic mt-8">
          You could be nurturing a lead for 2 years... then they ask AI and hire your competitor in 30 seconds.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
