import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FoundingPartnerFAQSection = () => {
  const ref = useScrollReveal();

  const topFaqs = [
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

Google takes 7-14 days to index each article. AI platforms crawl Google's index. This timeline can't be rushed—which is exactly why it becomes a moat.

If this could be done in 2 weeks, every agent would do it. The fact that it takes 6 months is WHY competitors can't replicate it quickly.

Patience isn't a weakness here. It's the competitive advantage.`,
    },
    {
      question: "What if I cancel—do I lose everything?",
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
AI visibility = get CITED when ChatGPT/Perplexity answers questions directly

Different algorithms. Different strategies. Different outcomes.

We optimize for both simultaneously—rank in Google AND get cited by AI.

Most SEO agencies don't understand AI citation yet. They're optimizing for yesterday's search behavior.`,
    },
  ];

  const additionalFaqs = [
    {
      question: "Can I see proof this works?",
      answer: `We don't have client testimonials yet—you'd be founding partner #1, #2, or #3.

What we have:
→ 6 months of research testing this across 50 markets
→ $12,000 invested validating the strategy before offering it
→ A milestone-based guarantee (we work for free if we don't deliver)
→ Direct founder access (not a support team)

Your results become our proof. The founding partner discount reflects that risk.`,
    },
    {
      question: "Will this work in my market?",
      answer: `Yes, with adjustments based on market size:

Small markets (<100K population): Less competition, faster to dominate. Lower lead volume (20-35/month at steady state). Perfect for agents who don't need high volume.

Mid-size markets (100K-500K): Sweet spot for this system. Moderate competition, strong lead volume. Expected 40-60 organic leads/month at steady state.

Major metros (500K+): Highest competition, most content needed. Largest lead potential (60-90/month). Biggest competitive moat once established.

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

That's it. Everything else—research, writing, optimization, tracking, reporting—is handled by us.

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
→ Within 6 months: Rejoin at founding partner pricing
→ After 6 months: Rejoin at standard pricing ($1,599/month)

Exception: If WE fail to deliver (miss milestones) and you cancel as a result, you can rejoin at founding partner pricing anytime within 12 months.`,
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
          {/* Top 5 FAQs - Always Visible */}
          <div className="space-y-6 mb-12">
            {topFaqs.map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Additional FAQ - Expandable */}
          <h3 className="text-lg font-semibold text-foreground mb-4">More Questions</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {additionalFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
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
