import { useScrollReveal } from "@/hooks/useScrollReveal";

const NewProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <span className="section-tag">The Shift is Already Here</span>
        <h2 className="section-heading">AI Is Already Deciding Which Agents Get Found</h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-foreground font-semibold">
            Before you dismiss this: We know agents use ChatGPT every day—for listing descriptions, emails, social posts. That's admin. We're talking about something different: when BUYERS use ChatGPT as a search engine to find YOU. That's already happening, and most agents don't realize it yet.
          </p>

          <p>
            Right now, a seller in your market is asking ChatGPT:
          </p>

          <p className="text-xl text-foreground font-medium italic text-center py-4">
            "Who's the best realtor to sell my home in [your city]?"
          </p>

          <p>
            ChatGPT gives them <span className="font-semibold text-foreground">ONE</span> name.
          </p>

          <p>
            If it's not yours, you don't exist. They'll never know you were an option.
          </p>

          <p>
            This isn't some future trend. It's happening today. We've tested it across 50 U.S. markets. AI platforms such as ChatGPT, Perplexity, Gemini, Claude are citing the same 3-5 agents per market, over and over. Everyone else is invisible.
          </p>

          <p className="text-foreground font-semibold">Here's what you are missing:</p>

          <p>
            You can't game this. You can't buy an ad that makes ChatGPT recommend you. You can't optimize a landing page and suddenly appear in Perplexity's top results.
          </p>

          <p>
            The only thing that gets you cited is <span className="font-semibold text-foreground">genuine local authority.</span> Content AI platforms recognize as credible, specific, and locally relevant. The kind that takes 60-90 days to build and 6-12 months to dominate with.
          </p>

          <p>
            Which means every day you wait is a day a competitor is building a lead you can't catch.
          </p>

          <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
            <span className="font-bold">And here's the part that makes this urgent:</span> In a contracting market with 20-30% fewer listings, the sellers who DO exist aren't browsing five agent websites. They're asking AI for ONE recommendation and booking that person. If you're not that person, the listing goes to whoever claimed the AI visibility you could have owned six months ago.
          </p>

          <p className="text-foreground font-medium">
            The window to build this before everyone else figures it out is open. It won't stay open.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewProblemSection;
