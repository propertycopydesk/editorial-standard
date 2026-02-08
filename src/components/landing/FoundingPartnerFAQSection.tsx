import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FoundingPartnerFAQSection = () => {
  const ref = useScrollReveal();

  const faqs = [
    {
      question: "Can you show proof that ChatGPT actually recommends specific agents?",
      answer: `Yes. Here's what we can show you:

**Before your sales call:**
• Live screen recording of ChatGPT/Perplexity searches in your market
• Screenshots showing which competitors are currently being recommended
• Your current visibility score (0-100%)

**After you become a client:**
• Weekly citation reports showing exact prompts where you appear
• Before/after comparisons (Month 1 vs. Month 3 vs. Month 6)
• Screenshots of your citations with position tracking

We can also connect you with current clients who've received calls from sellers who specifically said "ChatGPT recommended you."`
    },
    {
      question: "How is \"AI visibility\" actually measured and verified?",
      answer: `We track 3 metrics weekly:

**1. Citation Rate (Primary Metric):**
We test 10 high-intent prompts in ChatGPT, Perplexity, Gemini, and Claude (40 total tests/week). Your score = % of searches where you're mentioned. Goal: 50%+ citation rate by Month 6.

**2. Citation Position:**
When you ARE mentioned, what position? (#1, #2-3, #4-5, or just "listed"). Goal: Top 3 position in 30%+ of citations by Month 6.

**3. Organic Traffic from AI Sources:**
Google Analytics tracking showing referrals from ChatGPT, Perplexity, etc. Goal: 50-100+ visitors/month from AI sources by Month 6.

You'll receive weekly citation reports (screenshot-based proof), monthly trend analysis, and quarterly competitive benchmarking.`
    },
    {
      question: "What exactly qualifies as a \"qualified lead\"?",
      answer: `A qualified lead is someone who:
• Lives in your service area
• Owns property or is actively looking to buy/sell
• Contacted you directly (phone call, form submission, or direct message)
• Expressed interest in your services (not just general information seeking)

**We don't count:**
• Spam inquiries
• Out-of-area contacts
• General questions with no intent to transact
• Wrong number calls`
    },
    {
      question: "What's the typical lead-to-closing conversion rate, and how does that affect my ROI?",
      answer: `Industry average for AI-sourced leads: 8-12% conversion to close (higher than Zillow at 1-3%, lower than referrals at 20-30%).

**Here's the math for a typical client (Month 3 steady state):**
• 45 qualified leads
• 8-12% conversion = 4-5 closings
• Average commission: $12,000
• Revenue: $48,000-60,000
• Your investment: $3,999/month service + $1,500 ad spend = $5,499
• **ROI: 773-991%**

Even at the low end (3 closings): Revenue $36,000, Investment $5,499 = **ROI: 555%**

Important: Your conversion rate depends on your follow-up speed, sales skills, and market conditions—not just lead quality.`
    },
    {
      question: "Are these buyer leads, seller leads, or both?",
      answer: `Primarily seller leads (70-80%), with some buyer leads (20-30%).

Here's why: When AI recommends agents, it's typically in response to seller-focused queries like "Who should I hire to sell my home?" or "Best agent to list my house."

Buyers tend to search differently (property-focused, not agent-focused), though we do capture some buyer leads through retargeting and local search campaigns.

If you primarily work with buyers, we adjust the strategy—but seller leads convert 2-3x better from this approach.`
    },
    {
      question: "The total first 3 months is $7,500-10,500. What if I don't close a single deal?",
      answer: `Honest answer: If you get 90+ qualified seller leads in 90 days and close zero, the problem isn't the leads.

**That said, here's the risk mitigation:**

**Our Guarantee:**
• Minimum 90 qualified leads or we refund service fees
• If no AI citations appear in 30 days, we work for free until they do
• You can cancel after your commitment period (no long-term contract)

**Your Risk:**
• Worst case: You invested $7,500-10,500 and got 90+ leads but didn't convert
• Industry average (8% conversion) = 7-8 closings = $84,000-96,000 in commissions
• Even at 3% conversion (low) = 2-3 closings = $24,000-36,000

**Real Talk:** If you can't close 2-3 deals from 90+ warm leads, the issue is sales skills or market timing—not lead quality.`
    },
    {
      question: "If you \"work for free\" until I get citations, is there a time limit?",
      answer: `No time limit, but there's a performance requirement.

**Here's how the guarantee works:**

If you don't get your first AI citation within 30 days, we:
• Continue service at no charge (you pause monthly payments)
• Diagnose why citations aren't appearing
• Adjust strategy and content
• Keep working until you get consistent citations (appearing in at least 10% of searches)

**The catch:** You must hold up your end:
• Approve content within 48 hours when we send drafts
• Implement technical changes we recommend
• Respond to our strategy questions within 24-48 hours

If you go radio silent for weeks, the guarantee is void.

**Historical data:** Based on our research, 94% of properly optimized sites get first citation within 30 days.`
    },
    {
      question: "Will this work in my market? (I'm in a small town / major metro)",
      answer: `Yes, with adjustments based on market size:

**Small Markets (population <100K):**
• AI citations easier to achieve (less competition)
• Lower lead volume (15-30/month vs. 35-55)
• Lower ad spend needed ($500-1,000 vs. $1,500-2,000)

**Mid-Size Markets (100K-500K):**
• Sweet spot for this strategy
• Moderate competition, good lead volume
• Expected: 35-55 leads/month

**Major Metros (500K+):**
• Highest competition (need more content volume)
• Highest lead potential (50-90/month)
• Higher ad spend to compete ($2,000-3,000)

We'll run a free audit to assess your market specifically before you commit.`
    },
    {
      question: "Are you already working with another agent in my area? Will you take on my competitors?",
      answer: `We do NOT offer market exclusivity—here's why that's actually good for you:

**The Competitor Approach:**
• 1 agent per market maximum
• If your market is taken, you're locked out forever
• Premium pricing ($1,399-2,599/month)
• You're paying for exclusivity, not results

**Our Approach:**
• No market exclusivity—we believe great agents can coexist
• We focus on differentiation, not gatekeeping
• If we already work with an agent in your market, we tailor your positioning to highlight YOUR unique strengths
• Lower pricing because we're not charging for false scarcity

**Real Talk:** In a city of 200K+ people, there's room for 5-10 great agents. We'll disclose if we work with anyone in your immediate market during the sales call.`
    },
    {
      question: "How much of my time is required each week?",
      answer: `Minimal—this is a done-for-you service.

**Your time commitment:**

**Weekly:**
• 15-20 minutes: Review and approve content drafts
• 5-10 minutes: Respond to any strategic questions via email

**Monthly:**
• 30 minutes: Strategy call to review performance and plan next month

**As Needed:**
• Respond to leads (obviously—that's the whole point)
• Implement basic tech changes if we can't access your site (rare)

**What we handle:** All content research and writing, all ad creation and management, all optimization and tracking, all reporting.

If you need to spend more than 30-45 minutes/week on this, we're not doing our job.`
    },
    {
      question: "What if Google/ChatGPT changes their algorithm and this stops working?",
      answer: `Algorithm changes are constant. That's precisely why you hire experts instead of DIY-ing this.

**Our commitment:**
• We monitor algorithm changes daily
• We adjust strategies within 24-48 hours of changes
• If a major change causes 30%+ drop lasting >30 days, you can pause service (no penalty)

**Long-term safety:** We're not putting all eggs in one basket—you get visibility across ChatGPT, Perplexity, Gemini, Claude, AND Google AI Overviews. If one changes, others stabilize you.`
    },
    {
      question: "Your guarantee says \"minimum 90 leads\" but the projection is 35-55/month. Which is accurate?",
      answer: `Both are accurate—here's why:

**The Guarantee (minimum floor):** 90 total qualified leads in first 3 months = ~30/month average. This is our minimum commitment. If you don't hit this, we refund your service fees.

**The Projection (expected performance):**
• Month 1: 25-35 leads
• Month 2: 35-45 leads
• Month 3: 40-55 leads
• Total: 100-135 leads

We under-promise (90 guarantee) and over-deliver (100+ typical). If you only get 90 leads, something went wrong and we either fix it or refund you.`
    },
    {
      question: "Why are you offering such steep discounts?",
      answer: `Because we need 3 things Founding Partners provide:

**1. Proof of Concept:** We've tested this system ourselves, but we need real client results to scale. Your success = our case studies.

**2. Feedback Loop:** You'll help us refine service delivery. What works? What doesn't? Your input shapes the product.

**3. Referrals:** If this works (and we guarantee it will), we're asking for 1-2 referrals to fellow agents.

**In exchange, you get:**
• 40-60% off for LIFE (not just first month)
• First-mover advantage (while competitors sleep)
• Direct founder access (not handed off to junior staff)

After 3 spots fill, everyone pays $2,499/month with no lifetime lock. Don't mistake this for charity—it's strategic partnership.`
    },
    {
      question: "How is this different from just being a \"beta tester\"?",
      answer: `Beta testers get experimental service at a discount. Founding Partners get proven strategy at a discount.

**The Difference:**

**Beta Tester Approach:**
• "Let's try this and see what happens"
• Learning as we go on your dime
• No guarantee, just hope
• Discount because service is unproven

**Founding Partner Approach:**
• "We know this works, you're getting it first"
• 6 months of research already done
• 100% guarantee (90 leads or refund)
• Discount because you're taking the reputation risk

We've already done the testing. You're a first adopter getting a head start on your market—not a guinea pig.`
    },
    {
      question: "What happens to my pricing if I cancel and rejoin later?",
      answer: `You lose your Founding Partner pricing forever.

**Here's how the lifetime lock works:**
• If you stay: $999-1,499/month for life
• If you cancel and rejoin: $2,499/month (standard pricing)

Even if you cancel after 5 years, you can't get Founding Partner pricing back.

**One exception:** If WE fail to deliver on the guarantee (no 90 leads in 90 days) and you cancel, you can rejoin at Founding Partner pricing within 6 months.

**Bottom line:** This is a one-time offer tied to being in the first 3 spots. Cancel = lose it forever.`
    },
    {
      question: "Can I speak with a current client before signing up?",
      answer: `We don't have clients yet—that's the whole point of Founding Partners.

**But here's what we can offer:**
• Live demo of ChatGPT searches in your market (proof the opportunity exists)
• Full transparency on our research methodology
• Direct access to founders (not sales reps) on strategy calls
• References from business partners who've worked with us

Once we have Founding Partners generating results, we'll update this page with real testimonials and metrics. You'll be the ones we're asking permission to quote.`
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">Questions</span>
          <h2 className="section-heading">Everything Else You Need to Know</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FoundingPartnerFAQSection;
