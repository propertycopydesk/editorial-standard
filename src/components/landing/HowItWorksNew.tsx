import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

const HowItWorksNew = () => {
  const ref = useScrollReveal();

  const milestones = [
    {
      phase: "MONTH 1",
      title: "Foundation (Days 1-30)",
      whatWeBuild: [
        "9 AI-optimized articles targeting high-intent local queries",
        "Google Business Profile optimized for local authority signals",
        "Schema markup implemented (tells AI how to read your content)",
        "NAP consistency fixed across all citations",
        "Competitive baseline audit (who's beating you and why)",
      ],
      whatYouSee: [
        "Articles published and indexed by Google within 7-14 days",
        "First search impressions appearing in Google Search Console",
        "Content structured to answer the exact questions AI platforms parse",
      ],
      guarantee: [
        "9 articles published OR (if your domain has manual penalties/zero authority) we'll identify technical blockers and adjust timeline",
        "Google Business Profile fully optimized or we work for free",
        "Schema markup live on your domain or we work for free",
      ],
    },
    {
      phase: "MONTH 2",
      title: "Momentum (Days 31-60)",
      whatWeBuild: [
        "9 more articles (deeper neighborhood/transaction-specific content)",
        "Internal linking structure that signals topical authority",
        "First round of local backlink outreach (credible local citations)",
        "FAQ schema targeting question-based queries AI loves",
      ],
      whatYouSee: [
        "Google organic traffic starts appearing (5-10 visitors/week initially)",
        "First AI citation checks show your name appearing 10-20% of the time",
        "Search Console shows ranking for 20-30 long-tail local queries",
      ],
      note: "We prioritize Perplexity first because it uses real-time web retrieval. ChatGPT is slower—it relies on training snapshots. You'll see Perplexity citations in Week 4-6, ChatGPT in Week 8-12.",
      guarantee: [
        "First AI citation detected (in at least 1 of 4 platforms) or we work for free",
        "18 total articles published or we work for free",
        "Measurable organic traffic growth or we work for free",
      ],
    },
    {
      phase: "MONTH 3",
      title: "Compounding (Days 61-90)",
      whatWeBuild: [
        "9 more articles (27 total—enough content for AI to recognize domain authority)",
        "Advanced schema (LocalBusiness, FAQPage, Article structured data)",
        "Competitive displacement content (directly target competitors' weak spots)",
        "Monthly citation tracking report showing your market position",
      ],
      whatYouSee: [
        "AI citation rate increases to 30-50% (appearing in 3-5 out of 10 tests)",
        "Organic traffic 2-3x Month 1 baseline",
        "Google ranking on first page for 5-10 high-intent local queries",
        "First organic inquiries from people who found you through AI-sourced content",
      ],
      guarantee: [
        "30-50% AI citation rate or we work for free",
        "27 articles published or we work for free",
        "Measurable competitive displacement or we work for free",
      ],
    },
    {
      phase: "MONTH 6+",
      title: "Market Dominance",
      whatYouOwn: [
        "50+ articles of local authority content on your domain",
        "60-80% AI citation rate (you appear in 6-8 out of 10 searches)",
        "Top 3 ranking for high-intent local queries in Google",
        "A competitive moat that takes competitors 12-18 months to replicate",
      ],
      whyItMatters: "In 6 months, you've built what takes most agents 2-3 years to stumble into organically, if they ever build it at all. A competitor starting TODAY won't displace you for 12-18 months minimum. They can't displace you if you continue strengthening authority. That's a moat. And in a contracting market where every listing matters, being the agent AI recommends is the difference between surviving and exiting.",
    },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-8">
          <span className="section-tag">How It Works</span>
          <h2 className="section-heading">The 90-Day System That Builds What AI Recognizes</h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          AI platforms don't cite you because you asked nicely. They cite you because your content signals authority in ways their algorithms can measure. We reverse-engineered how ChatGPT, Perplexity, Gemini, and Claude decide who to recommend. Then we built a system that creates exactly what they're looking for—and we do it faster than competitors can replicate.
        </p>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-10">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-accent/40 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                  <span className="text-accent font-bold text-sm">{index + 1}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-accent mb-1">{milestone.phase}</h3>
                  <h4 className="text-lg font-semibold text-foreground mb-4">{milestone.title}</h4>

                  {milestone.whatWeBuild && (
                    <div className="mb-4">
                      <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">What We Build:</p>
                      <ul className="space-y-1.5">
                        {milestone.whatWeBuild.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-accent mt-0.5">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {milestone.whatYouSee && (
                    <div className="mb-4">
                      <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">What You See:</p>
                      <ul className="space-y-1.5">
                        {milestone.whatYouSee.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-accent mt-0.5">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {milestone.note && (
                    <p className="text-sm text-muted-foreground italic bg-secondary/50 rounded-lg p-3 mb-4">
                      <span className="font-semibold text-foreground">Note:</span> {milestone.note}
                    </p>
                  )}

                  {milestone.whatYouOwn && (
                    <div className="mb-4">
                      <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">What You Own:</p>
                      <ul className="space-y-1.5">
                        {milestone.whatYouOwn.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                            <span className="text-accent mt-0.5">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {milestone.whyItMatters && (
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                      {milestone.whyItMatters}
                    </p>
                  )}

                  {milestone.guarantee && (
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mt-4">
                      <p className="text-sm font-bold text-accent uppercase tracking-wide mb-2">Milestone Guarantee:</p>
                      <ul className="space-y-1.5">
                        {milestone.guarantee.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ownership callout */}
        <div className="max-w-3xl mx-auto mt-12 bg-accent/10 border-2 border-accent rounded-xl p-6">
          <p className="text-foreground font-medium text-center">
            📌 <span className="font-bold">EVERYTHING WE BUILD IS YOURS:</span> Every article lives on your domain. Every optimization lives in your accounts. Every piece of content, keyword list, and tracking setup belongs to you from the moment we create it. If you cancel, you take it all with you. No vendor lock-in. No proprietary platforms. This is your asset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksNew;
