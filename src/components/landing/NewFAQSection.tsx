import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const NewFAQSection = () => {
  const ref = useScrollReveal();

  const faqs = [
    {
      question: "Can you show proof that ChatGPT actually recommends specific agents?",
      answer: (
        <div className="space-y-4">
          <p className="font-semibold text-foreground">Yes. Here's what we can show you:</p>
          <p className="font-medium text-foreground">Before your sales call:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Live screen recording of ChatGPT/Perplexity searches in your market</li>
            <li>Screenshots showing which competitors are currently being recommended</li>
            <li>Your current visibility score (0-100%)</li>
          </ul>
          <p className="font-medium text-foreground">After you become a client:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Weekly citation reports showing exact prompts where you appear</li>
            <li>Before/after comparisons (Month 1 vs. Month 3 vs. Month 6)</li>
            <li>Screenshots of your citations with position tracking</li>
          </ul>
          <p>We can also connect you with current clients who've received calls from sellers who specifically said "ChatGPT recommended you."</p>
        </div>
      ),
    },
    {
      question: "How is \"AI visibility\" actually measured and verified?",
      answer: (
        <div className="space-y-4">
          <p className="font-semibold text-foreground">We track 3 metrics weekly:</p>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-foreground">1. Citation Rate (Primary Metric):</p>
              <p>We test 10 high-intent prompts in ChatGPT, Perplexity, Gemini, and Claude (40 total tests/week). Your score = % of searches where you're mentioned. <span className="font-medium text-foreground">Goal: 50%+ citation rate by Month 6.</span></p>
            </div>
            <div>
              <p className="font-medium text-foreground">2. Citation Position:</p>
              <p>When you ARE mentioned, what position? (#1, #2-3, #4-5, or just "listed"). <span className="font-medium text-foreground">Goal: Top 3 position in 30%+ of citations by Month 6.</span></p>
            </div>
            <div>
              <p className="font-medium text-foreground">3. Organic Traffic from AI Sources:</p>
              <p>Google Analytics tracking showing referrals from ChatGPT, Perplexity, etc. <span className="font-medium text-foreground">Goal: 50-100+ visitors/month from AI sources by Month 6.</span></p>
            </div>
          </div>
          <p>You'll receive weekly citation reports (screenshot-based proof), monthly trend analysis, and quarterly competitive benchmarking.</p>
        </div>
      ),
    },
    {
      question: "What exactly qualifies as a \"qualified lead\"?",
      answer: (
        <div className="space-y-4">
          <p className="font-semibold text-foreground">A qualified lead is someone who:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Lives in your service area</li>
            <li>Owns property or is actively looking to buy/sell</li>
            <li>Contacted you directly (phone call, form submission, or direct message)</li>
            <li>Expressed interest in your services (not just general information seeking)</li>
          </ul>
          <p className="font-semibold text-foreground mt-4">We don't count:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Spam inquiries</li>
            <li>Out-of-area contacts</li>
            <li>General questions with no intent to transact</li>
            <li>Wrong number calls</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What's the typical lead-to-closing conversion rate, and how does that affect my ROI?",
      answer: (
        <div className="space-y-4">
          <p><span className="font-medium text-foreground">Industry average for AI-sourced leads:</span> 8-12% conversion to close (higher than Zillow at 1-3%, lower than referrals at 20-30%).</p>
          <p className="font-semibold text-foreground">Here's the math for a typical client at Month 3:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>45 qualified leads</li>
            <li>8-12% conversion = 4-5 closings</li>
            <li>Average commission: $12,000</li>
            <li>Revenue: $48,000-60,000</li>
            <li>Your investment: $3,999/month service + $1,500 ad spend = $5,499</li>
            <li className="font-medium text-foreground">ROI: 773-991%</li>
          </ul>
          <p className="mt-2"><span className="font-medium text-foreground">Important:</span> Your conversion rate depends on your follow-up speed, sales skills, and market conditions - not just lead quality. We provide the leads; you close them.</p>
        </div>
      ),
    },
    {
      question: "Are these buyer leads, seller leads, or both?",
      answer: (
        <div className="space-y-4">
          <p><span className="font-semibold text-foreground">Primarily seller leads (70-80%)</span>, with some buyer leads (20-30%).</p>
          <p>Here's why: When AI recommends agents, it's typically in response to seller-focused queries like "Who should I hire to sell my home?" or "Best agent to list my house."</p>
          <p>Buyers tend to search differently (property-focused, not agent-focused), though we do capture some buyer leads through retargeting and local search campaigns.</p>
          <p><span className="font-medium text-foreground">If you primarily work with buyers, we adjust the strategy</span> - but seller leads convert 2-3x better from this approach.</p>
        </div>
      ),
    },
    {
      question: "The total first 3 months is $10,500-12,000. What if I don't close a single deal?",
      answer: (
        <div className="space-y-4">
          <p><span className="font-medium text-foreground">Honest answer:</span> If you get 100+ qualified seller leads in 90 days and close zero, the problem isn't the leads.</p>
          <p className="font-semibold text-foreground">Our Guarantee:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Minimum 100 qualified leads or we refund service fees</li>
            <li>If no AI citations appear in 30 days, we work for free until they do</li>
            <li>You can cancel after Month 3 (no long-term contract)</li>
          </ul>
          <p className="font-semibold text-foreground mt-4">The Math at Pessimistic Rates:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Industry average (8% conversion) = 8-11 closings = $96,000-132,000 in commissions</li>
            <li>Even at 3% conversion (low) = 3-4 closings = $36,000-48,000</li>
          </ul>
          <p className="mt-2"><span className="font-medium text-foreground">Real Talk:</span> If you can't close 3-4 deals from 100+ warm leads, the issue is sales skills or market timing - not lead quality.</p>
        </div>
      ),
    },
    {
      question: "If you \"work for free\" until I get citations, is there a time limit?",
      answer: (
        <div className="space-y-4">
          <p><span className="font-semibold text-foreground">No time limit</span>, but there's a performance requirement.</p>
          <p>If you don't get your first AI citation within 30 days, we continue service at no charge, diagnose why citations aren't appearing, adjust strategy and content, and keep working until you get consistent citations (appearing in at least 10% of searches).</p>
          <p className="font-semibold text-foreground">The catch: You must hold up your end:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Approve content within 48 hours when we send drafts</li>
            <li>Implement technical changes we recommend</li>
            <li>Respond to our strategy questions within 24-48 hours</li>
          </ul>
          <p><span className="font-medium text-foreground">Historical data:</span> 94% of clients get first citation within 30 days. The 6% who didn't either had technical website issues or didn't approve content quickly enough.</p>
        </div>
      ),
    },
    {
      question: "What if Google/ChatGPT changes their algorithm and this stops working?",
      answer: (
        <div className="space-y-4">
          <p><span className="font-medium text-foreground">This has happened 3 times in the last 12 months</span> - here's how we handled it:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium text-foreground">November 2024:</span> ChatGPT Search launched, changed citation patterns. Our response: Analyzed new patterns within 48 hours, clients back to baseline within 14 days.</li>
            <li><span className="font-medium text-foreground">January 2025:</span> Google AI Overviews changed local business criteria. Our response: Updated schema markup, no client saw &gt;10% drop.</li>
            <li><span className="font-medium text-foreground">February 2025:</span> Perplexity shifted to favor recent content. Our response: Increased publishing frequency, recovered within 7 days.</li>
          </ul>
          <p className="mt-2"><span className="font-semibold text-foreground">Our commitment:</span> We monitor algorithm changes daily, adjust strategies within 24-48 hours, and if a major change causes 30%+ drop lasting &gt;30 days, you can pause service with no penalty.</p>
          <p><span className="font-medium text-foreground">Long-term safety:</span> You get visibility across ChatGPT, Perplexity, Gemini, Claude, AND Google AI Overviews. If one changes, others stabilize you.</p>
        </div>
      ),
    },
    {
      question: "Will this work in my market? (I'm in a small town / major metro)",
      answer: (
        <div className="space-y-4">
          <p><span className="font-semibold text-foreground">Yes, with adjustments based on market size:</span></p>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-foreground">Small Markets (population &lt;100K):</p>
              <p>AI citations easier to achieve (less competition). Lower lead volume (15-30/month vs. 35-55). Lower ad spend needed ($500-1,000).</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Mid-Size Markets (100K-500K):</p>
              <p>Sweet spot for this strategy. Moderate competition, good lead volume. Expected: 35-55 leads/month.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Major Metros (500K+):</p>
              <p>Highest competition (need more content volume). Highest lead potential (50-90/month). Higher ad spend to compete ($2,000-3,000).</p>
            </div>
          </div>
          <p className="mt-2">We'll run a <span className="font-medium text-foreground">free audit</span> to assess your market specifically before you commit.</p>
        </div>
      ),
    },
    {
      question: "How much of my time is required each week?",
      answer: (
        <div className="space-y-4">
          <p><span className="font-semibold text-foreground">Minimal - this is a done-for-you service.</span></p>
          <p className="font-medium text-foreground">Weekly:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>15-20 minutes: Review and approve content drafts</li>
            <li>5-10 minutes: Respond to any strategic questions via email</li>
          </ul>
          <p className="font-medium text-foreground mt-3">Monthly:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>30 minutes: Strategy call to review performance and plan next month</li>
          </ul>
          <p className="font-medium text-foreground mt-3">What we handle:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>All content research and writing</li>
            <li>All ad creation and management</li>
            <li>All optimization and tracking</li>
            <li>All reporting</li>
          </ul>
          <p className="mt-2">If you need to spend more than 30-45 minutes/week on this, we're not doing our job.</p>
        </div>
      ),
    },
    {
      question: "Are you already working with another agent in my area?",
      answer: (
        <div className="space-y-4">
          <p><span className="font-semibold text-foreground">We do NOT offer market exclusivity</span> - here's why that's actually good for you:</p>
          <p className="font-medium text-foreground">The Competitor Approach:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>1 agent per market maximum</li>
            <li>If your market is taken, you're locked out forever</li>
            <li>Premium pricing ($1,399-2,599/month)</li>
            <li>You're paying for exclusivity, not results</li>
          </ul>
          <p className="font-medium text-foreground mt-3">Our Approach:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>No market exclusivity - great agents can coexist</li>
            <li>We focus on differentiation, not gatekeeping</li>
            <li>If we already work with an agent in your market, we tailor your positioning to highlight YOUR unique strengths</li>
            <li>Lower pricing because we're not charging for false scarcity</li>
          </ul>
          <p className="mt-2"><span className="font-medium text-foreground">Real Talk:</span> In a city of 200K+ people, there's room for 5-10 great agents. We'll disclose if we work with anyone in your immediate market during the sales call.</p>
        </div>
      ),
    },
    {
      question: "Your guarantee says \"minimum 100 total leads\" but the projection is 35-55/month. Which is accurate?",
      answer: (
        <div className="space-y-4">
          <p><span className="font-semibold text-foreground">Both are accurate</span> - here's why:</p>
          <p className="font-medium text-foreground">The Guarantee (minimum floor): 100 total qualified leads in first 3 months = ~33/month average.</p>
          <p>This is our minimum commitment. If you don't hit this, we refund your service fees (you only pay the ad spend you used).</p>
          <p className="font-medium text-foreground mt-3">The Projection (expected performance):</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Month 1: 25-35 leads</li>
            <li>Month 2: 35-45 leads</li>
            <li>Month 3: 40-55 leads</li>
            <li className="font-medium text-foreground">Total: 100-135 leads</li>
          </ul>
          <p className="mt-2">We under-promise (100 guarantee) and over-deliver (120+ typical). If you only get 100 leads, something went wrong and we either fix it or refund you.</p>
        </div>
      ),
    },
    {
      question: "Can I speak with a current client before signing up?",
      answer: (
        <div className="space-y-4">
          <p><span className="font-semibold text-foreground">Yes - with a caveat.</span></p>
          <p>Once you book a discovery call and we determine you're a good fit, we'll connect you with 1-2 clients in similar markets (not your direct competitors - we respect their privacy).</p>
          <p className="font-medium text-foreground">Why not before the call?</p>
          <p>Our clients are busy closing deals. We don't waste their time on unqualified leads who are just tire-kicking.</p>
          <p className="font-medium text-foreground mt-3">What you can ask them:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Lead quality and volume</li>
            <li>Responsiveness and support</li>
            <li>ROI and conversion rates</li>
            <li>Challenges and how we handled them</li>
          </ul>
          <p className="mt-2"><span className="font-medium text-foreground">Alternative:</span> We can share video testimonials immediately, including phone numbers and brokerage affiliations you can verify.</p>
        </div>
      ),
    },
  ];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">Questions</span>
          <h2 className="section-heading">Strategic Selection & Answers</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border py-1"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground text-left hover:no-underline py-6 gap-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Micro-CTA */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-lg text-muted-foreground">
              Still have questions?{" "}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                Book a free audit call →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFAQSection;