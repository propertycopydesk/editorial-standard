import { Zap } from "lucide-react";

const DifferentiationSection = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-[900px] mx-auto border-2 border-border rounded-xl p-8 md:p-14 text-center">
          {/* Icon */}
          <Zap className="w-10 h-10 text-accent mx-auto mb-6" />

          {/* Headline */}
          <h2 className="text-2xl md:text-[32px] font-bold text-foreground mb-6">
            Why We're Different From Other AI SEO Agencies
          </h2>

          {/* Body paragraphs */}
          <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>Most agencies optimize for AI citations and stop there.</p>
            <p>
              We optimize for AI citations <span className="font-bold text-foreground">AND</span> human conversion. You get more recommendations from AI <span className="font-bold text-foreground">AND</span> more of those people actually hire you.
            </p>
            <p className="font-semibold text-foreground">
              That's the difference between vanity metrics and revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
