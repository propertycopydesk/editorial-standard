import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Check, X, Shield, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

// Simulated claimed markets
const CLAIMED_MARKETS = ["Miami, FL"];
const MAJOR_CITIES = [
  "Select your city", "Atlanta, GA", "Austin, TX", "Boston, MA", "Charlotte, NC",
  "Chicago, IL", "Columbus, OH", "Dallas, TX", "Denver, CO", "Detroit, MI",
  "Houston, TX", "Indianapolis, IN", "Jacksonville, FL", "Las Vegas, NV",
  "Los Angeles, CA", "Miami, FL", "Minneapolis, MN", "Nashville, TN",
  "New York, NY", "Orlando, FL", "Philadelphia, PA", "Phoenix, AZ",
  "Portland, OR", "Raleigh, NC", "Sacramento, CA", "San Antonio, TX",
  "San Diego, CA", "San Francisco, CA", "San Jose, CA", "Scottsdale, AZ",
  "Seattle, WA", "Tampa, FL", "Washington, DC",
];

const FoundingPartnerFAQSection = () => {
  const ref = useScrollReveal();
  const [selectedCity, setSelectedCity] = useState("");
  const [checkResult, setCheckResult] = useState<"available" | "claimed" | null>(null);

  const handleCheck = () => {
    if (!selectedCity || selectedCity === "Select your city") return;
    setCheckResult(CLAIMED_MARKETS.includes(selectedCity) ? "claimed" : "available");
  };

  // TIER 2: Always visible FAQs
  const alwaysVisibleFaqs = [
    {
      question: "Why not just buy Zillow leads?",
      answer: `Zillow charges $60-150 per lead. You compete with 5 other agents for the same lead. Conversion rate: 1-3%.

This builds authority that generates FREE organic leads. No competition (AI gives YOUR name specifically). Higher conversion (they already researched you before calling).

Cost per lead on Zillow: $80
Cost per lead after Month 6 with AI visibility: $0

One is a rental. One is an asset you own forever.`,
    },
    {
      question: "What if AI platforms change their algorithm?",
      answer: `We monitor 5 platforms daily. When changes happen, we adapt within 24-48 hours.

More importantly: local authority content is what ALL platforms use as input when deciding who to recommend. We're not exploiting a loophole. We're building the underlying asset.

Google changed. Facebook changed. Zillow changed their terms. Agents who owned their content survived every one. We're building you the same thing.`,
    },
    {
      question: "Why does it take 6 months?",
      answer: `AI needs 30-50 articles to recognize you as authoritative. That's 9/month × 6 months.

Google takes 7-14 days to index each article. AI platforms crawl Google's index. This timeline can't be rushed, which is exactly why it becomes a moat.

If this could be done in 2 weeks, every agent would do it. The fact that it takes 6 months is WHY competitors can't replicate it quickly.

Patience isn't a weakness here. It's the competitive advantage.`,
    },
    {
      question: "What if I cancel, do I lose everything?",
      answer: `No. Every article lives on YOUR domain. Every optimization stays in YOUR accounts.

Cancel anytime and keep:
→ All 50+ articles we wrote (worth $10,000-15,000)
→ Schema markup implementation
→ Google Business Profile optimization
→ All tracking and analytics setup

We're building YOUR asset, not ours. If you leave, you take it with you.`,
    },
    {
      question: "How is this different from regular SEO?",
      answer: `Regular SEO = rank in Google search results (10 blue links)
AI visibility = get CITED when ChatGPT/Google AI answers questions directly

Different algorithms. Different strategies. Different outcomes.

We optimize for both simultaneously, rank in Google AND get cited by AI.

Most SEO agencies don't understand AI citation yet. They're optimizing for yesterday's search behavior.`,
    },
  ];

  // TIER 3: Additional expandable FAQs
  const additionalFaqs = [
    {
      question: "Can I see proof this works?",
      answer: `We don't have client testimonials yet, you'd be introductory offer client #1, #2, or #3.

What we have:
→ 6 months of research testing this across 50 markets
→ Thousands invested validating the strategy before offering it
→ A milestone-based guarantee (we work for free if we don't deliver)
→ Direct founder access (not a support team)

Your results become our proof. The introductory offer discount reflects that risk.`,
    },
    {
      question: "Will this work in my market?",
      answer: `Yes, with adjustments based on market size:

Small markets (<100K population):
→ Less competition, faster to dominate
→ Lower lead volume (20-35/month at steady state)
→ Perfect for agents who don't need high volume

Mid-size markets (100K-500K):
→ Sweet spot for this system
→ Moderate competition, strong lead volume
→ Expected 40-60 organic leads/month at steady state

Major metros (500K+):
→ Highest competition, most content needed
→ Largest lead potential (60-90/month)
→ Biggest competitive moat once established

We assess your specific market on the audit call before you commit.`,
    },
    {
      question: "What's the time commitment for me?",
      answer: `Less than 45 minutes per week:

Weekly:
→ 20-30 minutes to review and approve article drafts
→ 5-10 minutes to answer strategic questions

Monthly:
→ 30-minute strategy call

That's it. Everything else: research, writing, optimization, tracking, and reporting is handled by us.

If you're spending more than 1 hour/week on this, we're not doing our job.`,
    },
    {
      question: "Do you guarantee a certain number of leads?",
      answer: `No. We guarantee AI VISIBILITY (citations), not lead volume.

Here's why: We can control whether AI cites you. We can't control how many people search, how many convert, or how you follow up.

What we guarantee:
→ Month 3: First AI citation
→ Month 6: 60-80% citation rate
→ Everything built lives on your domain

What we've observed (but can't guarantee): Agents with 60-80% citation rates typically see 40-60 organic inquiries per month by Month 6-9. But that depends on market size, seasonality, and your follow-up system.`,
    },
    {
      question: "Can I pause and resume later?",
      answer: `You can cancel anytime and keep everything we built.

If you want to resume:
→ Within 6 months: Rejoin at introductory offer pricing
→ After 6 months: Rejoin at standard pricing ($1,599/month)

Exception: If WE fail to deliver (miss milestones) and you cancel as a result, you can rejoin at introductory offer pricing anytime within 12 months.`,
    },
    {
      question: "What about markets under 100K population?",
      answer: `We typically don't recommend this service for markets under 50K population. Not enough search volume to justify the investment.

Markets 50K-100K: Case-by-case basis. We'll assess on the audit call whether there's sufficient search volume. Sometimes yes (affluent suburbs), sometimes no (rural areas).

Your marketing dollars are better spent on traditional networking, referrals, and local sponsorships in very small markets.`,
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">Questions</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* ═══════════════════════════════════════════ */}
          {/* TIER 1: Moved sections as expandable Q&A */}
          {/* ═══════════════════════════════════════════ */}
          <Accordion type="single" collapsible className="space-y-4 mb-16">
            {/* Q1: Timeline */}
            <AccordionItem value="tier1-0" className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                What's the realistic timeline?
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6 text-sm text-muted-foreground">
                  <p>Here's the honest timeline with no hype:</p>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">Months 1-2: FOUNDATION</p>
                    <p>We build 18 articles, optimize your Google Business Profile, implement schema markup. You'll see articles indexed within 7-14 days and first organic visitors (5-20/week).</p>
                  </div>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">Months 3-4: MOMENTUM</p>
                    <p>36 total articles published. First AI citations appearing (10-30% rate). Organic traffic 3-5x from Month 1. You're ranking on page 1-2 for local queries.</p>
                  </div>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">Months 5-6: DOMINANCE</p>
                    <p>54 total articles. 60-80% AI citation rate. Organic traffic 10-15x from Month 1. First organic seller inquiries arriving. Competitors 6 months behind you.</p>
                  </div>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">Month 7+: MAINTENANCE (Optional)</p>
                    <p>Continue at $699/month to defend position, or cancel and keep everything.</p>
                  </div>

                  <p className="text-foreground font-medium">The build phase takes 6 months. There's no shortcut, which is exactly why it becomes a competitive moat.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Q2: Guarantee */}
            <AccordionItem value="tier1-1" className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                What do you guarantee with your service?
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-5 text-sm text-muted-foreground">
                  <p>We're asking you to trust us without client testimonials yet. So we've structured the guarantee to remove every reason not to. We guarantee milestones, not magic:</p>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">Month 3: First Citation</h4>
                    <div className="flex items-start gap-2 mb-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>You appear when ChatGPT, Google AI, or Perplexity is asked for agent recommendations in your market, at least once</span>
                    </div>
                    <p className="text-foreground font-medium bg-accent/5 rounded p-2 text-xs"><span className="font-bold">MISS IT?</span> Billing pauses. We work for free until you do.</p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">Month 6: 60-80% Citation Rate</h4>
                    <div className="flex items-start gap-2 mb-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>You're cited 6-8 times out of every 10 AI searches in your market</span>
                    </div>
                    <p className="text-foreground font-medium bg-accent/5 rounded p-2 text-xs"><span className="font-bold">MISS IT?</span> Billing pauses. We work for free until you hit it.</p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-bold text-accent mb-2">Month 6: Unsatisfied for Any Reason?</h4>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Cancel with no penalty. We hand you every article, every login, every file. The asset we built together stays yours.</span>
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-foreground mb-1">Why no refunds?</p>
                        <p>Because the asset we're building stays with you regardless. If we don't deliver, you stop paying but you keep everything we built. Your worst case: You own a $10,000-15,000 content asset and we're working for free to finish what we promised.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Q3: Market Exclusivity */}
            <AccordionItem value="tier1-2" className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                What if you are working with my competitor?
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-5 text-sm text-muted-foreground">
                  <p className="text-foreground font-semibold text-base">We're not.</p>
                  <p>We work with <span className="font-bold text-foreground">ONE</span> agent per market. When your market is claimed, we close it. Forever.</p>
                  <p>We turn away your competitors. We don't "adjust positioning to coexist." We don't work with multiple agents in the same city. First agent to claim it owns it.</p>

                  {/* Market Availability Checker */}
                  <div className="bg-secondary/50 border border-border rounded-xl p-6 my-4">
                    <h4 className="text-base font-bold text-foreground text-center mb-4">IS YOUR MARKET STILL AVAILABLE?</h4>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                      <select
                        value={selectedCity}
                        onChange={(e) => { setSelectedCity(e.target.value); setCheckResult(null); }}
                        className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        {MAJOR_CITIES.map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                      <Button onClick={handleCheck} className="btn-gold-shine font-semibold text-sm">
                        Check Availability
                      </Button>
                    </div>
                    {checkResult === "available" && (
                      <div className="text-center space-y-3 animate-in fade-in duration-300">
                        <div className="flex items-center justify-center gap-2 text-green-600">
                          <Check className="w-5 h-5" />
                          <span className="text-base font-bold">{selectedCity} — AVAILABLE</span>
                        </div>
                        <p className="text-xs text-muted-foreground">1 introductory offer spot remaining</p>
                        <Button onClick={() => window.open(BOOKING_URL, "_blank")} className="btn-gold-shine font-semibold">
                          Claim Your Market →
                        </Button>
                      </div>
                    )}
                    {checkResult === "claimed" && (
                      <div className="text-center space-y-3 animate-in fade-in duration-300">
                        <div className="flex items-center justify-center gap-2 text-destructive">
                          <X className="w-5 h-5" />
                          <span className="text-base font-bold">{selectedCity} — CLAIMED</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Market claimed recently</p>
                        <Button onClick={() => window.open(BOOKING_URL, "_blank")} variant="outline" className="border-accent text-foreground hover:bg-accent hover:text-accent-foreground">
                          Join Waitlist (Standard Pricing: $1,599/mo)
                        </Button>
                      </div>
                    )}
                  </div>

                  <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
                    This isn't a sales tactic. It's capacity. One agent per market. Period.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Q4: Partnership */}
            <AccordionItem value="tier1-3" className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                What do you need from me?
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-5 text-sm text-muted-foreground">
                  <p>This is a partnership. We can't build your authority without your participation.</p>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">Content Approval (30 min/week):</p>
                    <p>We send the articles. You approve or request changes within 2-3 business days. We're not asking you to write, only review so content represents you accurately.</p>
                  </div>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">Strategic Input (5 min/month):</p>
                    <p className="mb-2">Occasionally we need your market knowledge:</p>
                    <ul className="space-y-1 ml-1">
                      <li>→ "Which neighborhoods are hot right now?"</li>
                      <li>→ "Any seasonal trends we should write about?"</li>
                      <li>→ "What questions are buyers asking you lately?"</li>
                    </ul>
                    <p className="mt-2">Your insights keep content relevant.</p>
                  </div>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">Account Access (one-time setup):</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">We need logins to:</p>
                        <ul className="space-y-1 text-xs">
                          <li className="flex items-center gap-1"><Check className="w-3 h-3 text-accent" /> Google Business Profile</li>
                          <li className="flex items-center gap-1"><Check className="w-3 h-3 text-accent" /> Your website backend</li>
                          <li className="flex items-center gap-1"><Check className="w-3 h-3 text-accent" /> Google Search Console</li>
                          <li className="flex items-center gap-1"><Check className="w-3 h-3 text-accent" /> Google Analytics</li>
                          <li className="flex items-center gap-1"><Check className="w-3 h-3 text-accent" /> Domain registrar (if needed)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">We DON'T need:</p>
                        <ul className="space-y-1 text-xs">
                          <li className="flex items-center gap-1"><X className="w-3 h-3 text-destructive/60" /> CRM, email, social media passwords, MLS access</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <p className="font-bold text-foreground mb-1">If Life Gets Busy:</p>
                    <p>Need a week to review? Just let us know. But if content sits unapproved for weeks or we can't reach you, we pause work (and billing) until we're back in sync.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Q5: Maintenance */}
            <AccordionItem value="tier1-4" className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                What happens if I stop after Month 6?
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-5 text-sm text-muted-foreground">
                  <p className="text-foreground font-medium">Your $6K investment erodes within 18 months if you don't maintain.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-secondary/50 border border-border rounded-lg p-4">
                      <p className="font-bold text-destructive/80 mb-3">IF YOU CANCEL AFTER MONTH 6:</p>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">Months 7-12:</p>
                          <ul className="space-y-1 text-xs">
                            <li>→ Your 54 articles age (12+ months old)</li>
                            <li>→ Google rankings decline 15-30%</li>
                            <li>→ Competitors publish fresher content and displace you</li>
                            <li>→ AI citation rates drop 10-20%</li>
                            <li>→ No seasonal content (miss spring/holiday markets)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">Months 13-18:</p>
                          <ul className="space-y-1 text-xs">
                            <li>→ Articles now 18+ months old</li>
                            <li>→ Rankings dropped 30-40%</li>
                            <li>→ Citation rates dropped 30-50%</li>
                            <li>→ Competitor who started 6 months after you catches up</li>
                            <li>→ Your investment erodes to nothing</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent/5 border border-accent/30 rounded-lg p-4">
                      <p className="font-bold text-accent mb-3">IF YOU CONTINUE MAINTENANCE ($699/month):</p>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">Months 7-12:</p>
                          <ul className="space-y-1 text-xs">
                            <li>→ Content stays fresh (updated quarterly)</li>
                            <li>→ Rankings maintain or improve</li>
                            <li>→ Citation rates sustain at 70-90%</li>
                            <li>→ Competitors can't displace you</li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-1">Months 13-18:</p>
                          <ul className="space-y-1 text-xs">
                            <li>→ Articles constantly refreshed</li>
                            <li>→ Rankings stable or growing</li>
                            <li>→ Competitor 12-18 months behind (can't catch up)</li>
                            <li>→ Your moat is insurmountable</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs"><span className="font-semibold text-foreground">THE DATA:</span> HubSpot study shows blogs that stop publishing see 15-30% traffic decline within 6 months. Ahrefs study: 94% of top-ranking pages are regularly updated.</p>
                  <p className="text-foreground font-medium">At $699/month, maintenance is cheaper than rebuilding and protects a $10K investment.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Q6: Credibility */}
            <AccordionItem value="tier1-5" className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                Why should I trust you?
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-5 text-sm text-muted-foreground">
                  <p>Fair question. We don't have client testimonials yet. You'd be client #1, #2, or #3.</p>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">What we have:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /><span>6 months of research testing this across 50 markets before offering it</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /><span>Thousands invested validating the strategy</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /><span>A milestone-based guarantee (we work for free if we don't deliver)</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /><span>Direct founder access (not a support team reading from scripts)</span></li>
                    </ul>
                  </div>

                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="font-bold text-foreground mb-2">What we're offering:</p>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /><span>38% lifetime discount (introductory offer vs. standard pricing)</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /><span>Asset ownership (you keep everything if you cancel)</span></li>
                      <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /><span>No risk (billing pauses if we miss milestones, you keep content)</span></li>
                    </ul>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <p className="font-bold text-foreground mb-1">The trade:</p>
                    <p>You give us proof of concept and case studies. We give you first-mover market advantage and permanent pricing lock.</p>
                    <p className="mt-2">Your results become our credibility. That's why the guarantee is structured to remove all your risk.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* ═══════════════════════════════════════════ */}
          {/* TIER 2: Always Visible FAQs */}
          {/* ═══════════════════════════════════════════ */}
          <div className="space-y-6 mb-12">
            {alwaysVisibleFaqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* TIER 3: Additional Expandable FAQs */}
          {/* ═══════════════════════════════════════════ */}
          <h3 className="text-lg font-semibold text-foreground mb-4">More Questions</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {additionalFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`tier3-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 whitespace-pre-line leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground">
              Still have questions? <a href="mailto:fatih@propertycopydesk.com" className="text-accent hover:underline">fatih@propertycopydesk.com</a> · Response time: &lt;4 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingPartnerFAQSection;
