import { useScrollReveal } from "@/hooks/useScrollReveal";

const NewProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <span className="section-tag">The Problem</span>
        
        <h2 className="section-heading">
          Right Now, While You're Reading This
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            A seller in your market just asked ChatGPT: "Who's the best realtor to sell my home?"
          </p>
          
          <p>
            ChatGPT didn't say your name. It recommended your competitor. The one who started optimizing for AI search 90 days ago. The one who's getting listing appointments you'll never even know existed. Because you are probably not optimized for AI visibility.
          </p>

          <p>
            Here's what is most overlooked about AI visibility: It takes 60-90 days to kick in. That's 3 months of being invisible to ChatGPT, Perplexity, and Google AI Overview. 3 months of sellers finding other agents. 3 months of lost commissions. 3 months of watching competitors win.
          </p>

          <p>
            Unless you do what 96% of agents aren't doing: Get leads TODAY with paid ads while building your permanent AI visibility in the background.
          </p>

          <p className="text-foreground font-medium">
            By the time competitors get their first AI citation, you'll already have 100+ leads and be dominating both paid AND organic channels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewProblemSection;
