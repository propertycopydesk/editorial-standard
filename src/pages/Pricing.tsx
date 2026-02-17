import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Shield, Star, Crown, Gem, FileText, Target, Smartphone, RefreshCw, BarChart3, Bot, Clock, Zap, HandHeart } from "lucide-react";
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
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 border-2 border-destructive/50 rounded-full px-4 py-2 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive"></span>
          </span>
          <span className="text-sm font-medium text-foreground">Founding Partner Launch · March 17 Start · 2 Spots Remaining</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Founding Partner Pricing
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Lock in 40-60% lifetime discounts as one of our first 3 clients.<br />
          The longer you commit, the deeper your savings—locked in forever.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> 90-day performance guarantee (90 leads or free work)</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> Lifetime pricing lock</span>
          <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" /> Priority support & co-development</span>
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
      name: "3-Month Commitment",
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
        "Full AI Visibility Optimization (9 BOFU articles/month)",
        "Google + Meta Ads Management",
        "Multi-Platform Retargeting",
        "100% free work guarantee if <90 leads in 90 days",
      ],
      bestFor: "Agents testing a new channel who want flexibility",
      ctaStyle: "border-2 border-accent bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
    },
    {
      name: "6-Month Commitment",
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
        "Full AI Visibility Optimization (9 BOFU articles/month)",
        "Google + Meta Ads Management",
        "Multi-Platform Retargeting",
        "Priority support (24-hour response time)",
        "100% free work guarantee if <90 leads in 90 days",
      ],
      bestFor: "Serious agents ready to dominate their market",
      ctaStyle: "btn-gold-shine",
    },
    {
      name: "12-Month Commitment",
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
        "Full AI Visibility Optimization (9 BOFU articles/month)",
        "Google + Meta Ads Management",
        "Multi-Platform Retargeting",
        "VIP support (12-hour response time)",
        "Quarterly business review calls",
        "Co-development privileges (request features)",
      ],
      bestFor: "Top producers betting on long-term dominance",
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
                {/* Badge */}
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
                  <h3 className="text-base font-bold text-foreground mb-4">{tier.name}</h3>
                  <div className="mb-1">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-accent font-semibold mb-1">({tier.discount} standard {tier.standardPrice})</p>
                  <p className="text-xs text-muted-foreground">Locked in for LIFE</p>
                </div>

                {/* Savings */}
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center mb-6">
                  <span className="text-sm font-semibold text-accent">💰 {tier.savings}/year savings</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Ad spend note */}
                <div className="text-xs text-muted-foreground mb-6 pb-4 border-t border-border pt-4">
                  <p>+ $1,000-1,500/month ad spend (billed separately)</p>
                  <p className="mt-1">Decreases to $500-800/month by Month 6</p>
                </div>

                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className={`w-full py-3 rounded-lg font-semibold ${tier.ctaStyle}`}>
                    Choose {tier.name.split(" ")[0]} Plan →
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
    { icon: FileText, title: "Full AI Visibility Optimization", desc: "9 BOFU articles/month optimized for ChatGPT, Perplexity, and Google AI. Local SEO setup. Schema markup." },
    { icon: Target, title: "Google Ads Management", desc: "Search, Display, YouTube campaigns with daily monitoring and weekly optimization." },
    { icon: Smartphone, title: "Meta Ads Management", desc: "Facebook + Instagram targeting, advanced retargeting sequences, lookalike audiences." },
    { icon: RefreshCw, title: "Multi-Platform Retargeting", desc: "Never lose a warm lead. Sequential 3-stage messaging brings non-converters back." },
    { icon: BarChart3, title: "Performance Reporting", desc: "Weekly email updates every Friday. Monthly 30-minute strategy calls to optimize and scale." },
    { icon: Bot, title: "AI Citation Tracking", desc: "Monitor when ChatGPT, Perplexity, Gemini, and Claude recommend you. Weekly screenshot proof." },
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

/* ─── ROI Calculator ─── */
const ROISection = () => {
  const ref = useScrollReveal();
  return (
    <section className="section-padding bg-secondary/30">
      <div ref={ref} className="container-editorial scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">The Math: Why This Is a Steal</h2>
        <p className="text-center text-muted-foreground mb-12">Let's use the 6-MONTH COMMITMENT tier as an example</p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-bold text-foreground mb-4">YOUR INVESTMENT (First 3 Months)</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Service: $1,249/mo × 3 = <span className="text-foreground font-medium">$3,747</span></li>
              <li>Ad spend: $1,500/mo × 3 = <span className="text-foreground font-medium">$4,500</span></li>
              <li className="border-t border-border pt-2 font-bold text-foreground text-base">TOTAL: $8,247</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-bold text-foreground mb-4">CONSERVATIVE OUTCOME</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>90 qualified leads in 90 days (guaranteed minimum)</li>
              <li>× 8% conversion rate = <span className="text-foreground font-medium">7 closings</span></li>
              <li>× $12,000 avg commission = <span className="text-foreground font-medium">$84,000</span></li>
              <li className="border-t border-border pt-2 font-bold text-accent text-base">ROI: 919%</li>
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-card border-2 border-accent/30 rounded-2xl p-6 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Even at 3% conversion (pessimistic):</span> 3 closings × $12,000 = $36,000 →{" "}
            <span className="text-accent font-bold">ROI: 337%</span>
          </p>
          <p className="text-foreground font-medium mt-2">You only need to close 1 deal to break even.</p>
        </div>
      </div>
    </section>
  );
};

/* ─── Feature Comparison Table ─── */
const ComparisonTable = () => {
  const ref = useScrollReveal();
  const rows = [
    { label: "AI Visibility Optimization (9 articles/month)", values: ["✓", "✓", "✓"] },
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
                <th className="text-center py-4 px-2 text-sm font-semibold text-foreground">3-Month</th>
                <th className="text-center py-4 px-2 text-sm font-semibold text-accent">6-Month</th>
                <th className="text-center py-4 px-2 text-sm font-semibold text-foreground">12-Month</th>
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
    { day: "DAY 7", icon: Clock, text: "If you don't receive your first qualified leads within 7 days of ad launch, we pause billing and work free until you do." },
    { day: "DAY 30", icon: Bot, text: "If ChatGPT/Perplexity don't show your first AI citation by Day 30, we pause billing and continue optimizing at no charge." },
    { day: "DAY 90", icon: Shield, text: "If you don't receive minimum 90 qualified leads in first 90 days, we refund 100% of service fees. You only pay the ad spend you actually used." },
    { day: "DAY 100", icon: HandHeart, text: "If you're unsatisfied for ANY reason, cancel with no penalty. We'll even help you transition to another provider and send you all your content/data." },
  ];

  return (
    <section className="section-padding bg-accent/5">
      <div ref={ref} className="container-editorial scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Our Founding Partner Guarantee</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          We're asking you to trust us without proven client results. So we're putting our money where our mouth is.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
          <h3 className="font-bold text-foreground mb-4">WHAT WE ASK FROM YOU:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Content approval within 48 hours</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Technical access to your website, Google Business Profile, etc.</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Response to our questions within 24 hours</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> Permission to use your results in case studies (anonymized if preferred)</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" /> 1-2 referrals if you're satisfied with results</li>
          </ul>
          <p className="text-xs text-muted-foreground mt-4 italic">If you go radio silent for more than a week, the guarantee is void. Fair?</p>
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
      q: "Can you show proof that ChatGPT actually recommends specific agents?",
      a: "Yes. Before your sales call, we'll show you live screen recordings of ChatGPT/Perplexity searches in your market, screenshots showing which competitors are currently recommended, and your current visibility score (0-100%). After you become a client, you'll receive weekly citation reports with exact prompts where you appear, before/after comparisons, and screenshots with position tracking."
    },
    {
      q: "How is \"AI visibility\" actually measured and verified?",
      a: "We track 3 metrics weekly: 1) Citation Rate — we test 10 high-intent prompts in ChatGPT, Perplexity, Gemini, and Claude (40 total tests/week). Goal: 50%+ citation rate by Month 6. 2) Citation Position — when mentioned, are you #1, #2-3, or just listed? Goal: Top 3 in 30%+ of citations. 3) Organic Traffic from AI Sources — Google Analytics tracking referrals from AI platforms. Goal: 50-100+ visitors/month by Month 6."
    },
    {
      q: "What exactly qualifies as a \"qualified lead\"?",
      a: "A qualified lead lives in your service area, owns property or is actively looking to buy/sell, contacted you directly (phone, form, or DM), and expressed genuine interest in your services. We don't count spam, out-of-area contacts, general questions with no intent, or wrong number calls."
    },
    {
      q: "What's the typical lead-to-closing conversion rate, and how does that affect my ROI?",
      a: "Industry average for AI-sourced leads: 8-12% conversion to close (higher than Zillow at 1-3%, lower than referrals at 20-30%). At 8% conversion from 90 leads: 7 closings × $12,000 commission = $84,000 revenue on ~$8,247 investment = 919% ROI. Even at 3% (pessimistic): 3 closings = $36,000 = 337% ROI."
    },
    {
      q: "Are these buyer leads, seller leads, or both?",
      a: "Primarily seller leads (70-80%), with some buyer leads (20-30%). AI recommendations typically respond to seller-focused queries like \"Who should I hire to sell my home?\" If you primarily work with buyers, we adjust the strategy — but seller leads convert 2-3x better from this approach."
    },
    {
      q: "The total first 3 months is $7,500-10,500. What if I don't close a single deal?",
      a: "We work pro bono 100% free of service fees until you get minimum 90 leads. You only pay the ad spend you used. Plus, if you don't close a deal from 90+ leads, the issue isn't our lead quality. It's likely sales process, pricing, or market positioning (which we can help diagnose)."
    },
    {
      q: "If you \"work for free\" until I get citations, is there a time limit?",
      a: "No time limit, but you must hold up your end: approve content within 48 hours, implement technical changes we recommend, and respond to strategic questions within 24-48 hours. If you go silent for weeks, the guarantee is void. Based on our research, 94% of properly optimized sites get first citation within 30 days."
    },
    {
      q: "Will this work in my market? (small town / major metro)",
      a: "Yes, with adjustments. Small markets (<100K pop): easier citations, lower volume (15-30/month), lower ad spend ($500-1K). Mid-size (100K-500K): sweet spot, 35-55 leads/month. Major metros (500K+): highest competition but highest potential (50-90/month), needs higher ad spend ($2K-3K). We'll run a free audit of your specific market before you commit."
    },
    {
      q: "Are you already working with another agent in my area?",
      a: "No. We're taking only 3 Founding Partners total — NOT 3 per market. Once spots fill, we'll open to standard clients and maintain market exclusivity (1 agent per ZIP code for premium clients)."
    },
    {
      q: "How much of my time is required each week?",
      a: "Minimal — this is done-for-you. Weekly: 15-20 min reviewing content drafts + 5-10 min for strategic questions. Monthly: 30-min strategy call. We handle all content, ads, optimization, and reporting. If you spend more than 45 min/week, we're not doing our job."
    },
    {
      q: "What if Google/ChatGPT changes their algorithm?",
      a: "Algorithm changes are constant — that's why you hire experts. We monitor changes daily, adjust within 24-48 hours, and if a major change causes 30%+ drop lasting >30 days, you can pause service with no penalty. You get visibility across ChatGPT, Perplexity, Gemini, Claude, AND Google AI Overviews — if one changes, others stabilize you."
    },
    {
      q: "Your guarantee says \"minimum 90 leads\" but the projection is 35-55/month. Which is accurate?",
      a: "Both. 35-55/month is our average performance projection. 90 leads in 90 days (3 months) is our guaranteed minimum (30/month average). Most clients will exceed this, but we guarantee the floor, not the ceiling."
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
        </div>
      </div>
    </section>
  );
};

/* ─── Credibility Section ─── */
const CredibilitySection = () => {
  const ref = useScrollReveal();
  const items = [
    { icon: BarChart3, title: "WE'VE DONE THE RESEARCH", points: ["200+ hours testing ChatGPT across 50 real estate markets", "Analyzed 1,000+ searches to identify citation patterns", "Reverse-engineered the top 100 AI-recommended agents", "Tested 50+ optimization strategies (15 worked, 35 failed)"] },
    { icon: Zap, title: "WE'VE INVESTED REAL MONEY", points: ["Thousands in research and tool development", "Testing paid ad strategies across 12 markets", "6 months full-time building this system", "Zero revenue until now (we're all-in)"] },
    { icon: Target, title: "WE'RE BETTING OUR REPUTATION", points: ["Public results tracker (updated weekly)", "100% free work guarantee (no questions asked)", "Direct access to founders (not hidden behind support)", "Your success = our case studies"] },
    { icon: Bot, title: "WE'VE IDENTIFIED THE GAP", points: ["Competitors only do organic OR paid ads (not both)", "They make you wait 60-90 days for first results", "OR your leads stop when you kill paid ads", "We get you leads in 7 days WHILE building organic"] },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div ref={ref} className="container-editorial scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Why Trust Us If We Have No Client Results Yet?</h2>
        <p className="text-center text-muted-foreground mb-12">Fair question. Here's our credibility:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-card border border-border rounded-2xl p-6">
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-sm font-bold text-foreground mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((p, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="max-w-3xl mx-auto bg-card border-2 border-border rounded-2xl p-8 text-center">
          <p className="text-muted-foreground mb-2">What we <strong className="text-foreground">DON'T</strong> have: Client testimonials (yet).</p>
          <p className="text-muted-foreground mb-4">What we <strong className="text-foreground">DO</strong> have: The strategy, the guarantee, and the motivation.</p>
          <p className="text-foreground font-semibold">You'll be Founding Partner #1, #2, or #3. Your results will become our case studies.</p>
        </div>
      </div>
    </section>
  );
};

/* ─── Final CTA ─── */
const FinalCTA = () => {
  const ref = useScrollReveal();
  const spots = [
    { status: "OPEN", color: "bg-green-100 text-green-700 border-green-300", label: "Claim This Spot →" },
    { status: "OPEN", color: "bg-green-100 text-green-700 border-green-300", label: "Claim This Spot →" },
    { status: "RESERVED", color: "bg-orange-100 text-orange-700 border-orange-300", label: "Audit Scheduled: March 12" },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-accent/10 to-accent/5">
      <div ref={ref} className="container-editorial scroll-reveal text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Founding Partner Spots Are Filling</h2>
        <p className="text-muted-foreground mb-10">Real-time availability:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
          {spots.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl p-6">
              <p className="text-xs font-bold text-muted-foreground mb-2">SPOT {i + 1}</p>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-3 ${s.color}`}>{s.status}</span>
              {s.status === "OPEN" ? (
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full btn-gold-shine text-sm py-2 rounded-lg font-semibold mt-2">{s.label}</Button>
                </a>
              ) : (
                <p className="text-xs text-muted-foreground mt-2">{s.label}</p>
              )}
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mb-2">Once all 3 spots fill, this page redirects to a waitlist at $2,499/month (no lifetime lock).</p>
        <p className="text-sm text-muted-foreground mb-12">Next available start date: <strong className="text-foreground">March 17, 2026</strong></p>

        {/* Two options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-2xl p-8 text-left">
            <h3 className="font-bold text-foreground mb-3">📞 Book Free AI Visibility Audit</h3>
            <p className="text-sm text-muted-foreground mb-4">15-minute call where we:</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground mb-6">
              <li>• Show you live ChatGPT searches in your market</li>
              <li>• Identify which competitors dominate AI search</li>
              <li>• Reveal your current visibility score (0-100%)</li>
              <li>• Discuss which tier fits you</li>
            </ul>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button className="w-full btn-gold-shine py-3 rounded-lg font-semibold">Book Free Audit Call →</Button>
            </a>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 text-left">
            <h3 className="font-bold text-foreground mb-3">⚡ Skip the Audit — Claim Your Spot</h3>
            <p className="text-sm text-muted-foreground mb-4">If you're ready to commit, we'll send:</p>
            <ul className="space-y-1.5 text-sm text-muted-foreground mb-6">
              <li>• Founding Partner agreement (choose your tier)</li>
              <li>• Onboarding questionnaire (15 minutes)</li>
              <li>• Kickoff call scheduling (March 17 launch)</li>
            </ul>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button className="w-full border-2 border-accent bg-background text-foreground hover:bg-accent hover:text-accent-foreground py-3 rounded-lg font-semibold">Claim Founding Partner Spot →</Button>
            </a>
          </div>
        </div>

        {/* Wait vs Act */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-card/50 border border-border rounded-xl p-6 text-left">
            <h4 className="text-sm font-bold text-muted-foreground mb-3">WAIT (and pay full price):</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>→ March 18: Founding Partner spots filled</li>
              <li>→ March 25: First client gets AI citation</li>
              <li>→ April 15: First case study published</li>
              <li>→ May 1: We open at $2,499/month</li>
              <li className="font-semibold text-foreground">→ Result: You pay $30,000/year</li>
            </ul>
          </div>
          <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6 text-left">
            <h4 className="text-sm font-bold text-foreground mb-3">ACT NOW (lock in founder pricing):</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>→ Today: Claim one of 2 remaining spots</li>
              <li>→ March 17: Ads go live</li>
              <li>→ March 24: First leads (7 days or free)</li>
              <li>→ April 15: ChatGPT cites you</li>
              <li className="font-semibold text-accent">→ Forever: Locked in at 50% off for life</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Questions? <a href="mailto:fatih@propertycopydesk.com" className="text-accent hover:underline">fatih@propertycopydesk.com</a> · Response time: &lt;4 hours
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
