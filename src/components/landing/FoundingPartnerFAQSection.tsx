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
      question: "Can you show me what AI search actually looks like in my market right now?",
      answer: `Yes, and we do this on every audit call before you spend a dollar.

Before you commit:
• Screen recordings of ChatGPT and Perplexity searches using real buyer and seller queries in your market
• Which competitors are being cited and how consistently
• Your current authority gap — what's missing from your online presence that's causing AI platforms to overlook you
• A plain-English explanation of what it would take to close that gap

After you become a client:
• Weekly performance reports showing lead volume, source breakdown, and organic traffic trends
• AI citation tracking as one signal among several — we monitor ChatGPT, Perplexity, Gemini, and Google AI Overviews
• Monthly before/after comparisons showing authority growth across all channels

The audit is free and takes 15 minutes. If your market is already saturated or the opportunity isn't there, we'll tell you that too.`
    },
    {
      question: "How do you track and report performance?",
      answer: `We track four things weekly and report on all of them every Friday:

1. Lead Volume and Quality — Total qualified leads delivered, broken down by source (paid search, paid social, organic). This is the primary metric everything else feeds.

2. Cost Per Lead Trends — Starts higher in Month 1 (paid-only). Drops 30-40% by Month 3 as organic compounds. Drops 50-60% by Month 6 as authority content carries more of the load.

3. Organic Traffic Growth — Google Analytics showing traffic from search, AI referrals, and direct. This is the long-term indicator that your authority is building.

4. AI Citation Tracking — We test high-intent prompts weekly across ChatGPT, Perplexity, Gemini, and Claude and track when and where your name appears. This isn't the headline metric — it's a directional signal that the content is working.

You'll receive a weekly email every Friday, a 30-minute monthly strategy call, and a quarterly review covering competitive positioning. No dashboards to learn, no logins to check. We send it to you.`
    },
    {
      question: "What exactly qualifies as a \"qualified lead\"?",
      answer: `A qualified lead is someone who:
• Lives in your service area
• Owns property or is actively looking to buy or sell
• Contacted you directly — phone call, form submission, or direct message
• Expressed intent to transact, not just asking a general question

We don't count:
• Spam inquiries
• Out-of-area contacts
• General information requests with no transaction intent
• Wrong number calls

If a lead is borderline, we err on the side of not counting it. We'd rather under-report and over-deliver than pad your numbers with leads that don't close.`
    },
    {
      question: "What's the typical lead-to-closing conversion rate, and how does that affect my ROI?",
      answer: `Inbound leads generated through content and paid search typically convert at 6-12%, depending on your follow-up speed, market conditions, and sales process. That's meaningfully higher than Zillow (1-3%) but lower than referrals (20-30%).

The math at steady state (Month 3):
• 45 qualified leads
• 8% conversion = 3-4 closings
• Average commission: varies by market, assume $10,000-15,000
• Your investment: ~$5,500/month (service + ad spend)
• ROI: 545-1,000% depending on conversion and commission size

Even at 3% conversion, you're closing 1-2 deals per month. You need one closing in the first 90 days to break even on the entire founding period.

One thing worth saying plainly: your conversion rate depends on what you do with the lead after it arrives. We deliver people who are ready to have a conversation. Closing them is your part of the job.`
    },
    {
      question: "Are these buyer leads, seller leads, or both?",
      answer: `Primarily seller leads (70-80%), with buyer leads making up the remainder.

When someone is ready to list, they search for agents by name or reputation — "best agent to sell my home in [city]" — which maps directly to the authority content we build. Buyers tend to search by property first, agent second, which is why the buyer volume is lower but still present through retargeting and local search.

Seller leads also tend to convert faster and at higher commission value, which is why we lean the content strategy in that direction by default.

If you primarily work with buyers, tell us on the audit call. We adjust the content focus and ad targeting accordingly.`
    },
    {
      question: "The first 3 months is $7,500-10,500. What if I don't close a single deal?",
      answer: `Honest answer: if you receive 90+ qualified leads in 90 days and close zero, the problem isn't the leads.

That said, here's how the risk is structured:

The guarantee covers the lead volume, not the closing. We commit to 90 qualified leads in 90 days. If we don't deliver, we refund 100% of service fees. You only pay the ad spend you actually used.

The math on downside: At 3% conversion — the pessimistic floor — 90 leads produces 2-3 closings. That covers your entire investment for the founding period and typically then some.

The real risk: Investing $7,500-10,500, getting 90+ leads, and failing to follow up effectively. That's a risk we can't guarantee against. What we can tell you is that no one who follows up consistently with 90 warm inbound leads closes zero.

If you genuinely can't convert warm inbound seller leads, this engagement will help you identify that quickly and cheaply. Most agents find the opposite — the system becomes a mirror that shows them where their process actually breaks down, which is worth knowing.`
    },
    {
      question: "What does \"work for free\" actually mean in your guarantee?",
      answer: `There are two triggers. Here's exactly what each one covers:

Day 7 — First Lead Trigger: If you don't receive your first qualified lead within 7 days of your ad campaigns going live, we pause billing immediately. We continue running and optimizing the campaigns at no charge until that first lead arrives. You don't ask, we pause automatically.

Day 90 — Total Lead Trigger: If you haven't received 90 qualified leads by Day 90, we refund 100% of service fees. You keep everything we built — every article, every campaign — and you only pay the ad spend you actually used.

There's no Day 30 citation milestone tied to billing. We removed that because AI indexing timelines vary by market and we won't hold your billing hostage to a metric outside our direct control.

What we need from you for the guarantee to apply: Content approvals returned within 48 hours, access to the accounts we need to do the work, and responses to strategy questions within 24 hours. If you go quiet for more than a week, the guarantee pauses. We can't build your authority without your participation.`
    },
    {
      question: "Will this work in my market?",
      answer: `Yes, with adjustments based on market size and competition level.

Small markets (population under 100K): Less competition means authority is easier to build. Lead volume is lower (15-30/month) but you need fewer of them to dominate. Ad spend is also lower ($500-800/month). These markets often have the fastest path to becoming the obvious local choice.

Mid-size markets (100K-500K): The sweet spot for this system. Moderate competition, strong lead volume, clear opportunity to become the dominant local authority. Expected 35-55 leads per month at steady state.

Major metros (500K+): Highest competition requires more content volume and higher ad spend ($2,000-3,000/month). Lead potential is highest (50-90/month) and the authority you build has the most durable competitive moat because it's hardest to replicate.

We assess your specific market on the audit call before you commit. If the opportunity isn't meaningful, we'll tell you.`
    },
    {
      question: "Are you working with other agents in my market?",
      answer: `No. One agent per market.

When your market is claimed, we close it. We don't take on competitors in the same area, adjust your positioning to "coexist," or manage multiple relationships in the same geography. That would directly undermine the market ownership we're helping you build.

This is also why the founding partner window matters. The first agent to claim a market gets it permanently. Once the spot is taken, the next agent who asks us about that market gets put on a waitlist and told it's not available.

On the audit call, we'll confirm your market's availability before we discuss anything else. If it's already claimed, we'll tell you immediately.`
    },
    {
      question: "How much of my time is required each week?",
      answer: `Less than an hour, if we're doing our job.

Weekly:
• 15-20 minutes to review and approve content drafts
• 5-10 minutes to respond to any strategic questions

Monthly:
• 30-minute strategy call to review performance and plan the next month

As needed:
• Respond to leads (that part is on you — it's the whole point)
• Occasional technical access for implementation

Everything else — research, writing, ad creation, optimization, reporting, tracking — is handled by us. If you're spending more than 45 minutes a week on this system, we're not doing our job and you should tell us.`
    },
    {
      question: "What happens to everything you build if I cancel?",
      answer: `You own all of it.

Every article lives on your domain. Every ad account is in your name. Every piece of content, campaign structure, keyword list, tracking setup, and data file belongs to you from the moment we create it.

When you cancel, we prepare a complete transition package: a documented handover of all assets, login credentials, campaign notes, and content strategy. You walk away with a working system, not a dependency.

We build this way deliberately. Agencies that hold your assets hostage are renting you their leverage. We'd rather you stay because the results are working, not because leaving is too painful.`
    },
    {
      question: "Will this still work if AI search changes again?",
      answer: `Yes. Here's why.

The thing that gets you cited by ChatGPT today is the same thing that got you ranked by Google five years ago and will get you found by whatever platform exists five years from now: genuine local authority content that people and machines recognize as credible and relevant.

We're not exploiting a loophole in how ChatGPT works. We're building the underlying asset — authoritative, specific, locally-relevant content on your domain — that every AI platform uses as an input when deciding who to recommend.

Google's algorithm changed constantly. Agents who owned their content survived every update. Facebook changed reach and ad targeting. Agents who owned their list survived. Zillow changed their terms. Agents who owned their direct relationships survived.

We're building you the same thing — an asset that lives on your domain, in your accounts, under your name, that no platform can take away when they update their rules.`
    },
    {
      question: "What if Google or ChatGPT changes their algorithm?",
      answer: `We monitor algorithm changes across Google, ChatGPT, Perplexity, and other platforms daily. When something significant shifts, we adjust strategy within 24-48 hours. You don't need to track this yourself.

More importantly, we don't build single-platform dependency. Your leads come from Google Search, Meta ads, organic search, AI referrals, and direct traffic. If one channel softens, the others stabilize you.

If a major algorithm change causes a sustained 30%+ drop in lead volume lasting more than 30 days, you can pause service with no penalty while we diagnose and restructure.

The deeper answer is the same as above: the content we build is the input that all platforms use. That doesn't become worthless when an algorithm changes. It becomes more valuable as the shortcut-seekers get filtered out.`
    },
    {
      question: "Your guarantee says \"minimum 90 leads\" but the projection is 35-55 per month. Which is accurate?",
      answer: `Both. They measure different things.

The guarantee (90 leads in 90 days) is our minimum commitment — roughly 30 per month average. If you don't hit this floor, we refund service fees, no questions asked. This is what we're willing to be held accountable to contractually.

The projection (35-55 per month) is expected performance once the system is running. The monthly progression typically looks like:
• Month 1: 25-35 leads
• Month 2: 35-45 leads
• Month 3: 40-55 leads
• Total: 100-135 leads

We guarantee the floor and work toward the projection. If you only hit 90 leads, something underperformed and we either diagnose and fix it or refund you. The guarantee isn't the goal — it's the safety net.`
    },
    {
      question: "Why are you offering such steep discounts?",
      answer: `Three reasons, all straightforward.

We need proof of concept. We've validated this system through our own testing and research, but we don't have client results yet. Your success becomes the case studies that let us charge full price to everyone after you.

We need a feedback loop. Early clients surface things you can't find in internal testing. What's the onboarding friction? Where does the reporting confuse people? What does a real agent actually need versus what we assumed? You'll shape the product.

We need referrals. If this delivers what we're promising, we'll ask for 1-2 referrals to fellow agents you respect. That's the currency we're asking for in exchange for the discount.

What you get in return: 40-60% off for life, first-mover market claim, and direct founder access for as long as you're a client. After three spots fill, that's gone. Standard pricing at $2,499/month with no lifetime lock and no market priority.

This isn't charity. It's a trade with clear terms on both sides.`
    },
    {
      question: "How is this different from just being a beta tester?",
      answer: `A beta tester gets experimental service at a discount. A founding partner gets a proven strategy at a discount.

The research is done. Six months, 200+ hours, 50 markets analyzed, 50+ strategies tested. We kept the 15 that worked. You're not funding the research phase — you're getting early access to its output.

The difference in practice: a beta tester has no guarantee because the service is genuinely unproven. We're offering a 90-lead or full-refund guarantee because we're confident enough in the system to put that in writing.

You're a first-mover, not a guinea pig. The discount reflects the trust you're placing in us without a client track record — not the experimental nature of what we're building.`
    },
    {
      question: "What happens to my pricing if I cancel and rejoin later?",
      answer: `You lose founding partner pricing permanently.

The lifetime lock applies only as long as you remain a continuous client. If you cancel — for any reason other than us failing to deliver on the guarantee — and later rejoin, you rejoin at standard pricing ($2,499/month).

One exception: If we fail to deliver 90 leads in 90 days and you cancel as a result, you can rejoin at founding partner pricing within six months. If we didn't hold up our end, you shouldn't lose your rate over it.

This is a one-time offer tied to being in the first three spots. It doesn't come back.`
    },
    {
      question: "Can I speak with a current client before signing up?",
      answer: `Not yet — there are no current clients. That's the entire premise of the founding partner structure and we're not going to pretend otherwise.

Here's what we can offer instead:
• A live audit showing you exactly what AI search looks like in your market right now — real searches, real results, no slides
• Full transparency on our research methodology and what we tested before building this
• Direct access to the founders on the strategy call — not a sales rep reading from a script
• References from people who've worked with us in other capacities, if that's useful

Once founding partners are generating results, this page will be updated with real metrics and real testimonials. The people reading this in Month 4 will have that. You don't — and the founding partner pricing reflects exactly that asymmetry.`
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-16">
          <span className="section-tag">Questions</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
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

          {/* Contact in FAQ only */}
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
