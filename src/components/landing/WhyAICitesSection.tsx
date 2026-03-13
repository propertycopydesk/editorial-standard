import { useScrollReveal } from "@/hooks/useScrollReveal";

const WhyAICitesSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/20">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Education</span>
          <h2 className="section-heading">Why AI Cites Some Agents and Ignores Others</h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            AI platforms don't pick agents randomly. They cite agents with <span className="font-semibold text-foreground">local authority</span> agents who've published dozens of helpful articles answering the exact questions buyers and sellers ask.
          </p>

          <p>
            When someone asks ChatGPT "How much is my Austin home worth?" or "Should I sell now or wait?" AI scans millions of websites looking for credible, recent, specific, and locally-relevant answers.
          </p>

          <p>
            If you have 50+ articles on your website answering these questions (with proper technical optimization so AI can understand them) you get cited.
          </p>

          <p>
            If you have 5 generic blog posts (or none), you're invisible.
          </p>

          <div className="space-y-4 pt-4">
            <p><span className="font-bold text-foreground">The problem:</span> Building that authority takes 6 months minimum.</p>
            <p><span className="font-bold text-foreground">The opportunity:</span> Most agents in your market haven't figured this out yet.</p>
            <p><span className="font-bold text-foreground">The urgency:</span> The agents who START NOW will own their market.</p>
          </div>

          <p>
            The agents who wait will get left behind or spend 18-24 months trying to catch up to whoever claimed the position first.
          </p>
        </div>

        {/* Competitive Moat Callout */}
        <div className="mt-12 bg-secondary/60 border border-border rounded-xl p-6">
          <p className="text-lg font-bold text-foreground mb-4">💡 THE COMPETITIVE MOAT</p>
          <p className="text-muted-foreground mb-4">It takes 6 months to build 50+ articles of local authority. Which means:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>Competitors starting TODAY won't catch you for 12-18 months</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>By then, you'll have 18 months of authority</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>They get left behind</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>You're always ahead</span>
            </li>
          </ul>
          <p className="text-foreground font-medium mt-4">This is infrastructure that compounds for years.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyAICitesSection;
