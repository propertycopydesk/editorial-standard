import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Shield } from "lucide-react";

const HowItWorksNew = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-8">
          <span className="section-tag">The System</span>
          <h2 className="section-heading">The 6-Month System That Gets You Cited</h2>
        </div>

        {/* Milestones Callout */}
        <div className="max-w-3xl mx-auto mb-16 bg-accent/10 border-2 border-accent rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-bold text-foreground mb-3">MILESTONES</p>
              <p className="text-muted-foreground mb-4">Instead of promising vague "results," we promise concrete deliverables:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">→</span>
                  <span><span className="font-semibold text-foreground">Month 3:</span> First AI citation detected (you appear in ChatGPT/Google AI at least once)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">→</span>
                  <span><span className="font-semibold text-foreground">Month 6:</span> 60-80% citation rate (you appear 6-8 times out of every 10 searches)</span>
                </li>
              </ul>
              <p className="text-foreground font-medium mt-4">If we miss any milestone, billing pauses and we work for free until we hit it. You don't lose money. We don't get paid until we deliver.</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Month 1-2 */}
          <TimelinePhase
            phase="MONTH 1-2"
            title="Foundation"
            whatWeBuild={[
              "18 AI-optimized articles published on YOUR domain",
              "Google Business Profile fully optimized",
              "Schema markup implemented (tells AI who you are and what you do)",
              "Technical setup complete (all systems tracking and measuring)",
            ]}
            whatYouSee={[
              "Articles indexed by Google within 7-14 days",
              "Your Google Business Profile ranking higher in local map pack",
              "First organic visitors from search (5-20/week initially)",
            ]}
            guarantees={[
              "18 articles published or we work for free",
              "Google Business Profile optimized or we work for free",
              "Schema markup live or we work for free",
            ]}
            index={0}
          />

          {/* Month 3-4 */}
          <TimelinePhase
            phase="MONTH 3-4"
            title="Momentum"
            whatWeBuild={[
              "18 more articles (36 total—enough for AI to recognize topical depth)",
              "Competitive analysis (who's beating you, how we displace them)",
              "Internal linking structure (helps AI understand your expertise)",
            ]}
            whatYouSee={[
              "First AI citations appearing (10-30% rate across platforms)",
              "Organic traffic 3-5x from Month 1",
              "Ranking on page 1-2 for local search queries",
            ]}
            guarantees={[
              "First AI citation detected (in ChatGPT, Google AI, or Perplexity) or we work for free",
              "36 total articles published or we work for free",
              "Measurable organic traffic growth or we work for free",
            ]}
            index={1}
          />

          {/* Month 5-6 */}
          <TimelinePhase
            phase="MONTH 5-6"
            title="Dominance"
            whatWeBuild={[
              "18 more articles (54 total: authority threshold reached)",
              "Competitive displacement content (target weak spots in competitors' coverage)",
              "Seasonal and trending content (capture peak search periods)",
            ]}
            whatYouSee={[
              "60-80% AI citation rate (appearing 6-8 times out of 10 searches)",
              "Organic traffic 10-15x from Month 1",
              "First organic seller inquiries from AI-sourced traffic",
              "Competitors behind you by 6 months (insurmountable gap)",
            ]}
            guarantees={[
              "60-80% AI citation rate or we work for free",
              "54 total articles published or we work for free",
              "Dominant position in your market or we work for free",
            ]}
            index={2}
          />

          {/* Month 7+ */}
          <div className="relative">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary border-2 border-border flex items-center justify-center">
                <span className="text-muted-foreground font-bold text-sm">4</span>
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-muted-foreground mb-1">MONTH 7+</h3>
                <h4 className="text-lg font-semibold text-foreground mb-4">Maintenance (Optional)</h4>
                <div className="mb-4">
                  <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">What We Build:</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-accent mt-0.5">→</span>
                      <span>3-4 NEW articles/month (seasonal, trending topics, competitive defense)</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-accent mt-0.5">→</span>
                      <span>5-6 UPDATED articles/month (refresh old content with new data, market trends)</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-accent mt-0.5">→</span>
                      <span>Same 9 total pieces/month, different mix</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">Why It Matters:</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-accent mt-0.5">→</span>
                      <span>Content older than 12 months loses 15-30% of rankings (Google favors fresh content)</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-accent mt-0.5">→</span>
                      <span>Competitors who keep publishing will displace you within 9-12 months if you stop</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-accent mt-0.5">→</span>
                      <span>AI platforms favor recently updated content (recency signal)</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-foreground font-medium bg-secondary/50 rounded-lg p-3">
                  You can cancel anytime. Keep all 54+ articles we built (yours forever). OR continue maintenance to defend your position at $699/month. Your choice at Month 6.
                </p>
              </div>
            </div>
          </div>
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

interface TimelinePhaseProps {
  phase: string;
  title: string;
  whatWeBuild: string[];
  whatYouSee: string[];
  guarantees: string[];
  index: number;
}

const TimelinePhase = ({ phase, title, whatWeBuild, whatYouSee, guarantees, index }: TimelinePhaseProps) => (
  <div className="relative">
    {index < 2 && (
      <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-accent/40 to-transparent" />
    )}
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
        <span className="text-accent font-bold text-sm">{index + 1}</span>
      </div>
      <div className="flex-1 pb-8">
        <h3 className="text-xl font-bold text-accent mb-1">{phase}</h3>
        <h4 className="text-lg font-semibold text-foreground mb-4">{title}</h4>

        <div className="mb-4">
          <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">What We Build:</p>
          <ul className="space-y-1.5">
            {whatWeBuild.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                <span className="text-accent mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <p className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">What You'll See:</p>
          <ul className="space-y-1.5">
            {whatYouSee.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                <span className="text-accent mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
          <p className="text-sm font-bold text-accent uppercase tracking-wide mb-2">Milestone Guarantee:</p>
          <ul className="space-y-1.5">
            {guarantees.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorksNew;
