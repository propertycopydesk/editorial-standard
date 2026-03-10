import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DeliverablesSection = () => {
  const ref = useScrollReveal();

  const deliverables = [
    {
      title: "9 AI-Optimized Articles",
      content: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1">What It Is:</p>
            <p>Blog posts written to answer the exact questions sellers and buyers ask—like "How much is my home worth in [your city]" or "Best neighborhoods in [city] for families."</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Why It Matters:</p>
            <p>When someone asks ChatGPT or Google these questions, YOUR articles show up as the answer. This is how you get cited.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Format:</p>
            <ul className="space-y-1 ml-1">
              <li>→ 1,500-2,000 words each</li>
              <li>→ Published on YOUR website (you own it)</li>
              <li>→ Topics researched from actual search data in your market</li>
              <li>→ Optimized for both human readers and AI platforms</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Examples:</p>
            <ul className="space-y-1 ml-1 italic">
              <li>→ "Austin Real Estate Market Update [Current Month]"</li>
              <li>→ "How to Sell Your Home Fast in Phoenix: 2026 Guide"</li>
              <li>→ "Is Now a Good Time to Sell? Nashville Market Analysis"</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Google Business Profile Optimization",
      content: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1">What It Is:</p>
            <p>Your Google listing—the thing that shows up when someone searches "realtors near me" on Google Maps.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">What We Do:</p>
            <ul className="space-y-1 ml-1">
              <li>→ Add/update professional photos</li>
              <li>→ Verify hours and service areas</li>
              <li>→ Write compelling business description</li>
              <li>→ Set up review collection strategy</li>
              <li>→ Add weekly posts (keeps profile active)</li>
              <li>→ Optimize for local search ranking</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Why It Matters:</p>
            <p>76% of local mobile searches result in a phone call within 24 hours. This is often the first thing sellers see when researching you.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Schema Markup Implementation",
      content: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1">What It Is:</p>
            <p>Special code added to your website that tells AI and Google exactly what your content is about.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">In Plain English:</p>
            <p>HTML is what humans see when they visit your site. Schema is what AI reads to understand who you are and what you do.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">What We Add:</p>
            <ul className="space-y-1 ml-1">
              <li>→ LocalBusiness schema (tells AI you're a real estate agent in [city])</li>
              <li>→ Person schema (your credentials, specializations, service areas)</li>
              <li>→ FAQ schema (helps AI extract answers from your content)</li>
              <li>→ Article schema (helps AI understand each piece of content)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Why It Matters:</p>
            <p>Without this, AI might not recognize you're a local expert—even if you have great content.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Monthly AI Citation Tracking (5 Platforms)",
      content: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1">What It Is:</p>
            <p>We test whether AI platforms recommend you when someone asks "best realtor in [your city]."</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">How We Do It:</p>
            <ul className="space-y-1 ml-1">
              <li>→ 10 different buyer/seller questions</li>
              <li>→ Tested across 5 platforms (Google AI, ChatGPT, Microsoft Copilot, Perplexity, Gemini)</li>
              <li>→ = 50 total tests per month</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">What You Get:</p>
            <p>Weekly report showing:</p>
            <ul className="space-y-1 ml-1">
              <li>→ "You were cited 6 out of 10 times in ChatGPT"</li>
              <li>→ "You appeared 3rd out of 5 recommendations in Google AI"</li>
              <li>→ "Citation rate increased 15% from last month"</li>
              <li>→ Competitive comparison (who's beating you, who you're beating)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Platforms We Track:</p>
            <ul className="space-y-1 ml-1">
              <li>✓ Google AI Overviews (82% of real estate searches)</li>
              <li>✓ ChatGPT (34% usage, growing fast)</li>
              <li>✓ Microsoft Copilot (18% usage, strong in 45+ demographic)</li>
              <li>✓ Perplexity (12% usage, tech-savvy buyers)</li>
              <li>✓ Gemini (28% usage, integrated into Google/Android)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Competitive Displacement Strategy",
      content: (
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1">What It Is:</p>
            <p>We identify which competitors are beating you in AI search and create content specifically designed to outrank them.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">How It Works:</p>
            <ul className="space-y-1 ml-1">
              <li>→ We test AI platforms to see who's getting cited in your market</li>
              <li>→ We analyze their content to find gaps and weaknesses</li>
              <li>→ We create better, more comprehensive content on those exact topics</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Example:</p>
            <p>If Competitor X ranks for "luxury homes in Scottsdale," we write a more detailed, better-optimized article on luxury Scottsdale real estate that displaces them.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Result:</p>
            <p>You don't just get cited. You get cited MORE and HIGHER than competitors.</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Deliverables</span>
          <h2 className="section-heading">What You Get Every Month (Months 1-6)</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {deliverables.map((item, index) => (
              <AccordionItem
                key={index}
                value={`deliverable-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
