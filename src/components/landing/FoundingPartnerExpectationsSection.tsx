import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FoundingPartnerExpectationsSection = () => {
  const ref = useScrollReveal();

  const phases = [
    {
      period: "DAYS 1-30",
      title: "Foundation Phase",
      happening: [
        "We're publishing 9 articles, optimizing your Google Business Profile, implementing schema markup, and fixing NAP consistency issues",
        "Google is indexing your content (takes 7-14 days)",
        "AI platforms are beginning to crawl your domain",
      ],
      youllSee: [
        "Articles live on your website",
        "First search impressions in Google Search Console",
        "Your Google Business Profile showing up higher in local pack",
      ],
      wontSee: [
        "High organic traffic (you're at 5-15 visitors/week max)",
        "Consistent AI citations (too early—AI needs more content to trust you)",
        "Organic leads (authority hasn't compounded yet)",
      ],
      whyItMatters: "You're building infrastructure. Competitors aren't. Every week you're ahead is a week they're behind.",
    },
    {
      period: "DAYS 31-60",
      title: "Momentum Phase",
      happening: [
        "18 articles published (enough content for AI to recognize topical depth)",
        "Backlink outreach driving first external citations",
        "Internal linking establishing domain authority signals",
      ],
      youllSee: [
        "First AI citations appearing (10-20% citation rate in Perplexity/ChatGPT)",
        "Organic traffic 2-3x from Month 1",
        "Ranking on page 1-2 for long-tail local queries",
      ],
      wontSee: [
        "High-volume organic traffic (still building)",
        "Consistent AI citations (30-50% is the threshold, you're at 10-20%)",
      ],
      whyItMatters: "This is the \"trough of disillusionment.\" Authority is building but hasn't crossed the compounding threshold yet. Most agents quit here. The ones who don't own the market.",
    },
    {
      period: "DAYS 61-90",
      title: "Compounding Phase",
      happening: [
        "27 articles published (AI now recognizes you as authoritative on local real estate)",
        "Citation rate accelerating (30-50% across 4 platforms)",
        "Google ranking you for high-intent queries",
      ],
      youllSee: [
        "AI citing you 3-5 times out of every 10 searches",
        "Organic traffic 5-10x from Month 1 baseline",
        "First organic inquiries from AI-sourced traffic",
        "Competitors behind you by 60-90 days minimum",
      ],
      whyItMatters: "You've crossed the compounding threshold. Authority is now working FOR you, not against you. From here, it accelerates.",
    },
    {
      period: "MONTHS 4-6",
      title: "Dominance Phase",
      youOwn: [
        "50+ articles on your domain",
        "60-80% AI citation rate (market leader position)",
        "Top 3 ranking for competitive local keywords",
        "A 6-month head start on any competitor trying to catch you",
      ],
      moat: "A competitor starting today needs 6-12 months to catch you. By then, you'll have 12-18 months of authority. They're always chasing. In a contracting market, being the agent AI recommends isn't a nice-to-have. It's survival.",
    },
  ];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-8">
          <span className="section-tag">Realistic Timeline</span>
          <h2 className="section-heading">The Honest Timeline: What Founding Partners Can Expect</h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          We're not promising instant leads or overnight authority. We're promising a defensible market position built on a timeline that creates a competitive moat.
        </p>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-glow"
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                {phase.period}
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1 mb-4">
                {phase.title}
              </h3>

              {phase.happening && (
                <div className="mb-3">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-2">What's Happening:</p>
                  <ul className="space-y-1.5">
                    {phase.happening.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <ArrowRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.youllSee && (
                <div className="mb-3">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-2">What You'll See:</p>
                  <ul className="space-y-1.5">
                    {phase.youllSee.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <ArrowRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.wontSee && (
                <div className="mb-3">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">What You Won't See Yet:</p>
                  <ul className="space-y-1.5">
                    {phase.wontSee.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground/70 text-sm">
                        <span className="text-muted-foreground/50 mt-0.5">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {phase.youOwn && (
                <div className="mb-3">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-2">What You Own:</p>
                  <ul className="space-y-1.5">
                    {phase.youOwn.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <ArrowRight className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-sm text-foreground font-medium mt-4 pt-3 border-t border-border">
                {phase.whyItMatters || phase.moat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundingPartnerExpectationsSection;
