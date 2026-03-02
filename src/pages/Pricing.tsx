import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Shield, Star, Crown, Gem, FileText, Target, Smartphone, RefreshCw, BarChart3, Bot, Clock, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

/* ─── Sticky Header ─── */
const PricingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-editorial py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-foreground">PROPERTY</span>
            <div className="w-10 h-px bg-accent my-0.5" />
            <span className="font-serif text-[10px] md:text-xs tracking-[0.2em] text-foreground">COPY DESK</span>
          </Link>

          <div className="flex items-center gap-4 md:gap-6">
            <button onClick={() => scrollTo("how-it-works")} className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</button>
            <button onClick={() => scrollTo("faq")} className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</button>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">Book Free Audit</a>
            <Button onClick={() => scrollTo("pricing")} className="btn-gold-shine text-sm py-2 px-4 md:px-6 rounded-lg font-semibold">
              Claim Your Spot
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

/* ─── Hero Section ─── */
const PricingHero = () => {
  const ref = useScrollReveal();
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div ref={ref} className="container-editorial scroll-reveal text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Lock In Your Market Position at Founding Partner Pricing
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          The agents who join now aren't just getting a discount. They're getting a first-mover advantage in their market. We work with one agent per market. Once your area is claimed, it's closed to competitors.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> 90-day performance guarantee (90 leads or free work)</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> Lifetime pricing lock</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> One agent per market</span>
        </div>
      </div>
    </section>
  );
};

/* ─── Pricing Cards ─── */
const PricingCards = () => {
  const ref = useScrollReveal();

  const tiers = [
    {
      name: "Market Entry",
      subtitle: "3-Month Commitment",
      icon: Star,
      price: "$1,499",
      discount: "40% off",
      standardPrice: "$2,499",
      savings: "$12,000",
      badge: "Best for Flexibility",
      badgeStyle: "bg-secondary text-foreground",
      cardStyle: "border-border",
      features: [
        "3-month minimum, then month-to-month",
        "Full local authority content (9 articles/month)",
        "Google + Meta Ads Management",
        "Multi-Platform Retargeting",
        "90-lead guarantee or full refund",
      ],
      ctaStyle: "border-2 border-accent bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
    },
    {
      name: "Market Authority",
      subtitle: "6-Month Commitment",
      icon: Crown,
      price: "$1,249",
      discount: "50% off",
      standardPrice: "$2,499",
      savings: "$15,000",
      badge: "RECOMMENDED",
      badgeStyle: "bg-accent text-accent-foreground",
      cardStyle: "border-accent shadow-xl scale-[1.02]",
      features: [
        "6-month minimum, then month-to-month",
        "Full local authority content (9 articles/month)",
        "Google + Meta Ads Management",
        "Multi-Platform Retargeting",
        "Priority support (24-hour response time)",
        "90-lead guarantee or full refund",
      ],
      ctaStyle: "btn-gold-shine",
    },
    {
      name: "Market Dominance",
      subtitle: "12-Month Commitment",
      icon: Gem,
      price: "$999",
      discount: "60% off",
      standardPrice: "$2,499",
      savings: "$18,000",
      badge: "Best Value",
      badgeStyle: "bg-foreground text-background",
      cardStyle: "border-border",
      features: [
        "12-month minimum, then month-to-month",
        "Full local authority content (9 articles/month)",
        "Google + Meta Ads Management",
        "Multi-Platform Retargeting",
        "VIP support (12-hour response time)",
        "Quarterly business review calls",
        "Co-development privileges (request features)",
      ],
      ctaStyle: "border-2 border-accent bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div ref={ref} className="container-editorial scroll-reveal">
        <p className="text-center text-accent text-sm font-semibold uppercase tracking-widest mb-12">Choose Your Commitment</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <div
                key={i}
                className={`relative bg-card border-2 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${tier.cardStyle}`}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap ${tier.badgeStyle}`}>
                    {tier.badge}
                  </span>
                </div>

                <div className="text-center pt-4 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-accent" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Founding Partner</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.subtitle}</p>
                  <div className="mb-1">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-accent font-semibold mb-1">({tier.discount} standard {tier.standardPrice})</p>
                  <p className="text-xs text-muted-foreground">Locked in for LIFE</p>
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center mb-6">
                  <span className="text-sm font-semibold text-accent">💰 {tier.savings}/year savings</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-muted-foreground mb-6 pb-4 border-t border-border pt-4">
                  <p>+ $1,000-1,500/month ad spend (billed separately)</p>
                  <p className="mt-1">Decreases to $500-800/month by Month 6</p>
                </div>

                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className={`w-full py-3 rounded-lg font-semibold ${tier.ctaStyle}`}>
                    Get Your Free Market Audit →
                  </Button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── What's Included ─── */
const WhatsIncluded = () => {
  const ref = useScrollReveal();
  const features = [
    { icon: FileText, title: "Full Local Authority Content", desc: "9 articles/month written for your market, neighborhoods, and transaction types. Optimized for AI citation and organic search." },
    { icon: Target, title: "Google Ads Management", desc: "Search, Display, YouTube campaigns with daily monitoring and weekly optimization." },
    { icon: Smartphone, title: "Meta Ads Management", desc: "Facebook + Instagram targeting, advanced retargeting sequences, lookalike audiences." },
    { icon: RefreshCw, title: "Multi-Platform Retargeting", desc: "Never lose a warm lead. Sequential 3-stage messaging brings non-converters back." },
    { icon: BarChart3, title: "Performance Reporting", desc: "Weekly email updates every Friday. Monthly 30-minute strategy calls to optimize and scale." },
    { icon: Bot, title: "AI Citation Tracking", desc: "Monitor when ChatGPT, Perplexity, Gemini, and Claude recommend you. Weekly tracking." },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">What's Included in All Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── ROI Section ─── */
const ROISection = () => {
  const ref = useScrollReveal();
  return (
    <section className="section-padding bg-secondary/30">
      <div ref={ref} className="container-editorial scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">The Math</h2>

        <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            The math is straightforward. You need to close one deal to cover your first 90 days entirely. But that's besides the point of why serious agents are choosing this.
          </p>
          <p>
            They're choosing it because waiting has a cost that doesn't show up in a spreadsheet. Every month a competitor builds authority in your market is a month you'll spend twice as much to catch up. Or never catch up at all.
          </p>
          <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
            This isn't a lead gen expense. It's the cost of owning your market before someone else does.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ─── Feature Comparison Table ─── */
const ComparisonTable = () => {
  const ref = useScrollReveal();
  const rows = [
    { label: "Local Authority Content (9 articles/month)", values: ["✓", "✓", "✓"] },
    { label: "Google Ads Management", values: ["✓", "✓", "✓"] },
    { label: "Meta Ads Management", values: ["✓", "✓", "✓"] },
    { label: "Multi-Platform Retargeting", values: ["✓", "✓", "✓"] },
    { label: "Performance Reporting (Weekly)", values: ["✓", "✓", "✓"] },
    { label: "AI Citation Tracking", values: ["✓", "✓", "✓"] },
    { label: "Monthly Strategy Calls", values: ["✓", "✓", "✓"] },
    { section: "SUPPORT & GUARANTEES" },
    { label: "90-Day Performance Guarantee", values: ["✓", "✓", "✓"] },
    { label: "Response Time", values: ["48 hours", "24 hours", "12 hours"] },
    { label: "Quarterly Business Reviews", values: ["—", "—", "✓"] },
    { label: "Co-Development Privileges", values: ["—", "—", "✓"] },
    { section: "PRICING" },
    { label: "Monthly Cost", values: ["$1,499", "$1,249", "$999"], bold: true },
    { label: "Annual Savings vs. Standard", values: ["$12,000", "$15,000", "$18,000"] },
    { label: "Minimum Commitment", values: ["3 months", "6 months", "12 months"] },
    { label: "Pricing Lock", values: ["LIFETIME", "LIFETIME", "LIFETIME"], bold: true },
  ];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Compare Plans Side-by-Side</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 pr-4 text-sm font-semibold text-muted-foreground w-2/5">Feature</th>
                <th className="text-center py-4 px-2 text-sm font-semibold text-foreground">Market Entry</th>
                <th className="text-center py-4 px-2 text-sm font-semibold text-accent">Market Authority</th>
                <th className="text-center py-4 px-2 text-sm font-semibold text-foreground">Market Dominance</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                if ("section" in row) {
                  return (
                    <tr key={i}>
                      <td colSpan={4} className="pt-6 pb-2 text-xs font-bold text-accent uppercase tracking-wider">{row.section}</td>
                    </tr>
                  );
                }
                return (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-sm text-muted-foreground">{row.label}</td>
                    {row.values?.map((v, j) => (
                      <td key={j} className={`py-3 px-2 text-center text-sm ${row.bold ? "font-bold text-foreground" : v === "✓" ? "text-accent font-bold" : v === "—" ? "text-muted-foreground/40" : "text-foreground"}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

/* ─── Guarantee Section ─── */
const GuaranteeSection = () => {
  const ref = useScrollReveal();
  const milestones = [
    { day: "DAY 7", icon: Clock, text: "First leads arrive or we pause billing and work free until they do." },
    { day: "DAY 90", icon: Shield, text: "90 qualified leads delivered or we work until you get 90, 100% free of service fees. You keep everything we built. You only pay the ad spend you actually used." },
    { day: "DAY 100", icon: HandHeart, text: "Unsatisfied for any reason? Cancel, no penalty, no questions. We'll package up every piece of content, every campaign, every data file and hand it to you." },
  ];

  return (
    <section className="section-padding bg-accent/5">
      <div ref={ref} className="container-editorial scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Our Guarantee is Simple Because We Mean It</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          We're asking you to trust us with no client results yet. So we've structured the guarantee to remove every reason not to.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-lg font-bold text-foreground mb-3">{m.day}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </div>
            );
          })}
        </div>

        {/* Requirements */}
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 mb-8">
          <h3 className="font-bold text-foreground mb-4">What We Ask in Return:</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Respond to content approvals within 24 hours and give us access to the accounts we need. If you go quiet for more than 3 days, the guarantee pauses. Fair trade.
          </p>
        </div>

        {/* Risk comparison */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-sm font-bold text-foreground">YOUR RISK</p>
            <p className="text-xs text-muted-foreground">$0 (We guarantee results or refund)</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <p className="text-sm font-bold text-foreground">OUR RISK</p>
            <p className="text-xs text-muted-foreground">Everything (Our reputation depends on your success)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── FAQ Section ─── */
const PricingFAQ = () => {
  const ref = useScrollReveal();

  const faqs = [
    {
      q: "Can you show me what AI search actually looks like in my market right now?",
      a: "Yes, and we do this on every audit call before you spend a dollar. We show you live screen recordings of ChatGPT and Perplexity searches in your market, which competitors are being cited, your current authority gap, and a plain-English explanation of what it would take to close that gap. The audit is free and takes 15 minutes. If your market is already saturated, we'll tell you."
    },
    {
      q: "How do you track and report performance?",
      a: "We track four things weekly: 1) Lead Volume and Quality — broken down by source. 2) Cost Per Lead Trends — drops 30-40% by Month 3, 50-60% by Month 6. 3) Organic Traffic Growth — the long-term indicator your authority is building. 4) AI Citation Tracking — a directional signal, not the headline metric. Weekly email every Friday, monthly strategy call, quarterly competitive review. No dashboards to learn."
    },
    {
      q: "What exactly qualifies as a \"qualified lead\"?",
      a: "Someone who lives in your service area, owns property or is actively looking to buy/sell, contacted you directly, and expressed intent to transact. We don't count spam, out-of-area contacts, general information requests, or wrong number calls. If borderline, we err on not counting it."
    },
    {
      q: "What's the typical lead-to-closing conversion rate?",
      a: "Inbound leads typically convert at 6-12%, higher than Zillow (1-3%) but lower than referrals (20-30%). At steady state (Month 3): 45 leads × 8% = 3-4 closings × $10-15K commission. Even at 3%, you need one closing in the first 90 days to break even entirely. Your conversion rate depends on what you do with the lead after it arrives."
    },
    {
      q: "Are these buyer leads, seller leads, or both?",
      a: "Primarily seller leads (70-80%). When someone is ready to list, they search by agent name or reputation — which maps directly to the authority content we build. Seller leads convert faster and at higher commission value. If you primarily work with buyers, tell us on the audit call and we adjust accordingly."
    },
    {
      q: "The first 3 months is $7,500-10,500. What if I don't close a single deal?",
      a: "If you receive 90+ qualified leads and close zero, the problem isn't the leads. The guarantee covers lead volume: 90 leads or we refund 100% of service fees. At 3% conversion (pessimistic floor), 90 leads produces 2-3 closings — covering your entire investment. No one who follows up consistently with 90 warm inbound leads closes zero."
    },
    {
      q: "What does \"work for free\" actually mean?",
      a: "Two triggers: Day 7 — if no leads within 7 days of ad launch, we pause billing automatically and work free until they arrive. Day 90 — if you haven't received 90 leads, we refund 100% of service fees. No Day 30 citation milestone — AI indexing timelines vary and we won't hold billing hostage to a metric outside our direct control."
    },
    {
      q: "Will this work in my market?",
      a: "Yes. Small markets (<100K): easier authority, lower volume (15-30/month), lower ad spend. Mid-size (100K-500K): the sweet spot, 35-55 leads/month. Major metros (500K+): highest competition but highest potential (50-90/month). We assess your market on the audit call before you commit."
    },
    {
      q: "Are you working with other agents in my market?",
      a: "No. One agent per market. When your market is claimed, we close it. The first agent to claim gets it permanently. On the audit call, we confirm availability before discussing anything else."
    },
    {
      q: "How much of my time is required each week?",
      a: "Less than an hour. Weekly: 15-20 min reviewing content + 5-10 min for strategic questions. Monthly: 30-min strategy call. Everything else — research, writing, ads, optimization, reporting — is handled by us."
    },
    {
      q: "What happens to everything you build if I cancel?",
      a: "You own all of it. Every article, ad account, campaign, keyword list, and data file. We prepare a complete transition package. You walk away with a working system, not a dependency."
    },
    {
      q: "Will this still work if AI search changes?",
      a: "Yes. We're building genuine local authority content — the underlying asset every AI platform uses as input. Google's algorithm changed constantly; agents who owned content survived. We don't build single-platform dependency."
    },
    {
      q: "Your guarantee says \"90 leads\" but projection is 35-55/month. Which is accurate?",
      a: "Both. The guarantee (90 in 90 days) is the floor — roughly 30/month. The projection (35-55/month) is expected performance. Typical total: 100-135 leads in 3 months. We guarantee the floor and work toward the projection."
    },
    {
      q: "Why are you offering such steep discounts?",
      a: "Three reasons: we need proof of concept (your success = our case studies), a feedback loop (you shape the product), and referrals. In exchange: 40-60% off for life, first-mover market claim, and direct founder access. This isn't charity — it's a trade with clear terms."
    },
    {
      q: "How is this different from being a beta tester?",
      a: "A beta tester gets experimental service. A founding partner gets a proven strategy at a discount. The research is done — 6 months, 200+ hours, 50 markets. We're offering a 90-lead guarantee because we're confident enough to put it in writing. You're a first-mover, not a guinea pig."
    },
    {
      q: "What happens to my pricing if I cancel and rejoin?",
      a: "You lose founding partner pricing permanently. One exception: if we fail to deliver 90 leads and you cancel as a result, you can rejoin at founding partner pricing within six months. This is a one-time offer tied to the first three spots."
    },
    {
      q: "Can I speak with a current client before signing up?",
      a: "Not yet — there are no current clients. That's the premise of the founding partner structure. We offer instead: a live audit of your market, full transparency on our methodology, and direct access to the founders. The founding partner pricing reflects exactly that asymmetry."
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50">
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5 text-sm md:text-base">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

/* ─── Credibility Section ─── */
const CredibilitySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/30">
      <div ref={ref} className="container-editorial scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Why Trust Us Without Client Results</h2>
        <p className="text-center text-muted-foreground mb-12">Fair question. Here's the honest answer.</p>
        
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
          <p>
            We spent 6 months and significant money building this system before charging a dollar for it. We analyzed how AI recommends agents across 50 markets. We reverse-engineered citation patterns. We tested 50+ optimization approaches and kept the 15 that actually worked.
          </p>
          <p>
            We don't have client testimonials. What we have is a system we believe in enough to guarantee entirely, a results tracker that will be updated every week once Founding Partners launch, and direct access to the founders—on a call, not a support ticket.
          </p>
          <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
            Your results become our case studies. Your market position becomes our proof of concept. Instead of hiding behind a free trial, we're betting our entire business on your success.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ─── Final CTA ─── */
const FinalCTA = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-gradient-to-b from-accent/10 to-accent/5">
      <div ref={ref} className="container-editorial scroll-reveal text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">Two Spots. One Market. Yours or Theirs.</h2>
        
        <div className="max-w-2xl mx-auto mb-10 space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            There are genuinely two spots remaining because we work with three founding partners total and one audit is already scheduled.
          </p>
          <p>
            When these fill, this page goes to a waitlist for standard pricing at $2,499/month with no lifetime lock and no first-mover market protection.
          </p>
          <p className="text-foreground font-medium">
            The choice is simple: own your market now, or pay double to chase whoever claimed it first.
          </p>
        </div>

        {/* Two CTA options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="btn-gold-shine text-lg py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold">
              Book Your Free Market Audit
            </Button>
          </a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="text-lg py-6 md:py-8 px-8 md:px-12 rounded-lg font-semibold border-accent text-foreground hover:bg-accent hover:text-accent-foreground">
              Claim Your Spot Directly
            </Button>
          </a>
        </div>

        <p className="text-sm text-muted-foreground mb-8">
          Next available start: March 17, 2026
        </p>

        <p className="text-muted-foreground italic max-w-2xl mx-auto">
          P.S. Every day you wait, a competitor is building the authority in your market that you'll spend twice as much to catch up to.
        </p>
      </div>
    </section>
  );
};

/* ─── Main Pricing Page ─── */
const Pricing = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <PricingHeader />
      <main>
        <PricingHero />
        <PricingCards />
        <WhatsIncluded />
        <ROISection />
        <ComparisonTable />
        <GuaranteeSection />
        <PricingFAQ />
        <CredibilitySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
