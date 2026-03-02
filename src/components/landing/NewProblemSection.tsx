import { useScrollReveal } from "@/hooks/useScrollReveal";

const NewProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <span className="section-tag">The Compression is Already Happening</span>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            AI is <span className="font-semibold text-foreground">not</span> a threat to your commission. It accelerated one that was already coming.
          </p>

          <p>
            Buyer agent commissions are compressing. Seller leads are going to whoever shows up first in search—whether that's Google, ChatGPT, or Perplexity. Information asymmetry, the thing that made a 5-6% commission defensible for decades, is disappearing.
          </p>

          <p>
            The agents who survive this aren't the ones who adapt fastest to whatever platform is trending. They're the ones who already own their local market's trust before the compression fully arrives.
          </p>

          <p>
            Right now, you probably don't.
          </p>

          <p>
            Not because you're bad at your job. Because nobody built you the system to do it.
          </p>

          <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
            What most agents miss: getting found by AI search is a byproduct of genuine local authority. It's not a tactic. You can't shortcut it. And you can't start building it tomorrow—it takes 60-90 days to compound. Every day you wait is another day a competitor is getting there first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewProblemSection;
