import { Zap } from "lucide-react";

const DifferentiationSection = () => {
  return (
    <section className="bg-background py-8 md:py-14">
      <div className="container mx-auto px-6">
        <div className="max-w-[900px] mx-auto border-2 border-border rounded-lg p-8 md:p-14 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <Zap className="w-12 h-12 text-accent" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-[32px] font-bold text-foreground mb-6">
            Why We're Different From Other AI SEO Agencies
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Most agencies optimize for AI citations—and stop there.
            </p>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              We optimize for AI citations <span className="font-bold">AND</span> human conversion. You get more recommendations from AI <span className="font-bold">AND</span> more of those people actually hire you.
            </p>
            <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
              That's the difference between vanity metrics and revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
