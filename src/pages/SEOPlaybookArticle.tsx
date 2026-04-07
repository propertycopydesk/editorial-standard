import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import blogImage from "@/assets/blog-seo.webp";

// NOTE: Upload blog-seo.webp to src/assets/ before deploying.

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const ARTICLE_SCHEMA = '{"@context":"https://schema.org","@type":"Article","headline":"The SEO Playbook Just Split in Two. Here\'s What Actually Changed","description":"Traditional SEO optimizes for search engines. GEO optimizes for the AI that\'s replacing them. They\'re not the same game anymore — and confusing them will cost you.","image":"https://propertycopydesk.com/blog-seo.webp","author":{"@type":"Person","name":"Fatih","url":"https://propertycopydesk.com"},"publisher":{"@type":"Organization","name":"PropertyCopyDesk","url":"https://propertycopydesk.com"},"datePublished":"2026-04-11T00:00:00+00:00","dateModified":"2026-04-11T00:00:00+00:00","mainEntityOfPage":{"@type":"WebPage","@id":"https://propertycopydesk.com/blog/the-seo-playbook-just-split-in-two-heres-what-actually-changed"},"keywords":["SEO vs GEO","generative engine optimization","AI visibility","answer engine optimization"]}';

const FAQ_SCHEMA = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What\'s the difference between SEO and GEO?","acceptedAnswer":{"@type":"Answer","text":"Traditional SEO optimizes your website to rank higher on search engine results pages. GEO (Generative Engine Optimization) optimizes your content so AI systems understand it, trust it, and cite it when generating answers. Traditional SEO asks \'How do I rank on a page of links?\' GEO asks \'How do I become the answer the AI gives?\' The mechanics are fundamentally different."}},{"@type":"Question","name":"Why do AI-referred visitors convert so much higher?","acceptedAnswer":{"@type":"Answer","text":"AI search users arrive having already compared options and narrowed their choices. The AI did the research for them. By the time they click through to your site, they\'re further down the funnel than a typical Google visitor. Some benchmarks show 4.4x higher conversion rates for AI-referred traffic compared to traditional organic search."}},{"@type":"Question","name":"Can I ignore traditional SEO if I focus on GEO?","acceptedAnswer":{"@type":"Answer","text":"No. Traditional SEO and GEO share a foundation: quality content, technical soundness, and topical authority. Your technical SEO foundation (crawlability, site speed, clean HTML) still matters because AI crawlers use the same access patterns as traditional search crawlers. A page blocked from Googlebot is also blocked from AI model training data. Layer GEO on top of solid traditional SEO, don\'t replace it."}},{"@type":"Question","name":"What role do third-party sources play in AI visibility?","acceptedAnswer":{"@type":"Answer","text":"Enormous. Brand websites make up only 5-10% of the sources AI systems cite. The other 90-95% comes from review platforms, forums like Reddit and Quora, creator ecosystems on YouTube and TikTok, and Substack. A new \'trust layer\' draws heavily from these relevance signals, influencing nearly half of agentic search results. Getting mentioned by sources the AI already trusts matters more than perfecting your own blog."}}]}';

const SEOPlaybookArticle = () => {
  useEffect(() => {
    document.title = "The SEO Playbook Just Split in Two. Here's What Actually Changed | PropertyCopyDesk";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement("meta"); metaDesc.setAttribute("name", "description"); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute("content", "Traditional SEO optimizes for search engines. GEO optimizes for the AI that's replacing them. They're not the same game anymore — and confusing them will cost you.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://propertycopydesk.com/blog/the-seo-playbook-just-split-in-two-heres-what-actually-changed");

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.textContent = ARTICLE_SCHEMA;
    script1.id = "article-schema-10";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.textContent = FAQ_SCHEMA;
    script2.id = "faq-schema-10";
    document.head.appendChild(script2);

    return () => {
      document.getElementById("article-schema-10")?.remove();
      document.getElementById("faq-schema-10")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-40">
        <nav className="container-editorial py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex flex-col items-start">
              <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-foreground">
                PROPERTY
              </span>
              <div className="w-10 h-px bg-accent my-0.5" />
              <span className="font-serif text-[10px] md:text-xs tracking-[0.2em] text-foreground">
                COPY DESK
              </span>
            </Link>

            <div className="flex items-center gap-4 md:gap-6">
              <Link to="/" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/blog" className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="btn-gold-shine text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold"
              >
                <span className="hidden sm:inline">Get AI Visibility Check</span>
                <span className="sm:hidden">Free Audit</span>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-16">
        <article className="container-editorial">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-sans rounded-full mb-4">
              Technical
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              The SEO Playbook Just Split in Two. Here's What Actually Changed
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-8">
              <span>By Fatih</span>
              <span>·</span>
              <span>April 11, 2026</span>
              <span>·</span>
              <span>11 min read</span>
            </div>

            <div className="aspect-[1200/628] rounded-lg overflow-hidden bg-muted mb-10">
              <img
                src={blogImage}
                alt="The SEO Playbook Just Split in Two"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="space-y-8">

              {/* Opening */}
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                A homebuyer in Austin opens ChatGPT and types: "Who's the best real estate agent for first-time buyers near downtown?" No Google search. No scrolling through ten blue links. No clicking on ads. The AI returns three names, a brief explanation for each, and a link to learn more. If your business isn't one of those three names, you didn't lose a ranking. You lost the entire moment of decision.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                This is the shift happening right now, and it's forcing every business owner to answer a question that didn't exist two years ago: Are you optimizing for search engines, or for the AI that's replacing them? The honest answer? You need both. But the playbooks are different, and confusing them will cost you.
              </p>

              {/* Section 1 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Traditional SEO Still Works. It Also Has a Ceiling Now.</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Traditional SEO optimizes for crawlers and ranking signals. Backlinks, keyword density, page speed, meta descriptions, domain authority. You know the drill. You rank higher on Google's results page, you get more clicks, you get more traffic, you get more leads. That model still matters. Google processes billions of queries daily. Organic search still drives the majority of website traffic worldwide.
                  </p>
                  <p>
                    But here's the crack in the foundation: when AI Overviews appear in Google results, only about 8% of users click through to traditional results. Without those summaries, the click-through rate sits closer to 15%. That's nearly half the clicks evaporating when AI steps in.
                  </p>
                  <p>
                    And the shift is accelerating. Gartner forecasts that traditional search volume will drop 25% by 2026. ChatGPT now processes queries from hundreds of millions of weekly active users. Half of U.S. consumers already identify AI as their primary information source, ahead of traditional search. The traffic isn't disappearing. It's migrating to a place where your Google ranking might be irrelevant.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">GEO: The New Layer You Can't Ignore</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The industry is calling it Generative Engine Optimization (GEO), sometimes AI SEO or Answer Engine Optimization (AEO). Whatever the label, the core idea is the same: optimizing your content so that AI systems understand it, trust it, and cite it when generating answers.
                  </p>
                  <p>
                    Traditional SEO asks: "How do I rank on a page of links?" GEO asks: "How do I become the answer the AI gives?" The mechanics are different in ways that matter. Traditional SEO rewards position. You're either in the top ten results or you're not. Users scan titles, read descriptions, click one.
                  </p>
                  <p>
                    GEO rewards extraction. When someone asks Perplexity or ChatGPT a question, the AI synthesizes a paragraph with maybe three or four citations. If your content isn't one of those citations, you didn't exist for that query, regardless of your Google ranking. A page can rank #1 on Google and never appear in AI-generated answers for the same question.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">What AI Systems Actually Evaluate When Deciding What to Cite</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Entity clarity over keyword density.</strong> AI models process information through entity recognition. They identify your brand as an entity of a certain type in a certain category before analyzing keyword relevance. If your website clearly defines what you are, who you serve, and what problem you solve in plain, descriptive language, AI can extract and cite that.
                  </p>
                  <p>
                    <strong className="text-foreground">Third-party trust signals carry enormous weight.</strong> Brand websites make up only 5-10% of the sources AI systems cite. The other 90-95% comes from review platforms, forums like Reddit and Quora, creator ecosystems on YouTube and TikTok, and Substack. A new "trust layer" draws heavily from these relevance signals, influencing nearly half of agentic search results. Getting mentioned by the sources the AI already trusts matters more than perfecting your own blog.
                  </p>
                  <p>
                    <strong className="text-foreground">Structure for machine readability.</strong> FAQPage schema has shown roughly 3x higher citation rates in testing because it creates a direct mapping between a question and an authoritative answer. Structured data stacking with interconnected JSON-LD schema types can dramatically improve how AI systems parse your content.
                  </p>
                  <p>
                    <strong className="text-foreground">Answer-first content architecture.</strong> Traditional SEO often front-loads navigation, context, and background before the actual answer. AI retrieval systems prefer the opposite: the direct answer in the first paragraph, followed by supporting detail.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The Conversion Gap Should Wake You Up</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The numbers on AI-referred traffic are striking. Visitors arriving from AI search convert at dramatically higher rates than traditional organic visitors. Some benchmarks show 4.4x higher conversion rates. Across 329 ecommerce brands tracked in one recent study, LLM traffic posted the second-highest engagement rate of any channel at 2.69%, behind only SMS.
                  </p>
                  <p>
                    Why? Because AI search users arrive having already compared options and narrowed choices. The AI did the research for them. By the time they click through to your site, they're further down the funnel than a typical Google visitor. This means the stakes of being invisible to AI aren't just about traffic volume. You're losing the highest-intent visitors available.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Agentic Commerce: Where This Goes Next</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The shift gets more dramatic when you look at what's coming. Agentic commerce, where AI agents handle the entire purchase journey from discovery to checkout, could drive $190-385 billion in US e-commerce spending by 2030, representing 10-20% of the market.
                  </p>
                  <p>
                    We're already seeing this play out. ChatGPT now offers instant checkout where users can buy products directly within conversations. Google's Universal Commerce Protocol enables AI-powered shopping across search. Perplexity launched a free shopping experience with conversational product discovery.
                  </p>
                  <p>
                    The implications for any business: if your product data, reviews, and content aren't structured in ways AI agents can read and recommend, you're not losing a marketing channel. You're losing access to an entirely new buying surface, one that rewards the best answer rather than the biggest ad budget.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">What This Means For Your Business Right Now</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Don't abandon traditional SEO. Layer GEO on top of it.</strong> Your technical SEO foundation (crawlability, site speed, clean HTML) still matters because AI crawlers use the same access patterns as traditional search crawlers. A page blocked from Googlebot is also blocked from AI model training data. Fix the foundation, then add the GEO-specific layers.
                  </p>
                  <p>
                    <strong className="text-foreground">Rewrite for AI readability.</strong> Go through your key pages and restructure them. Lead with clear answers. Use the format "Best X for Y" or "Alternative to Z" explicitly. LLMs pull from explanatory content, not taglines. Clearly articulate the problem you solve, for whom, and in what context.
                  </p>
                  <p>
                    <strong className="text-foreground">Invest in third-party mentions.</strong> Your brand blog alone won't move the needle for AI visibility. Participate in niche forums, get cited on review platforms, earn mentions in Substacks and creator content relevant to your space. The AI trusts these sources more than your own marketing copy.
                  </p>
                  <p>
                    <strong className="text-foreground">Structure everything.</strong> Implement stacked schema markup. Add FAQPage schema to your key pages. Make sure your brand entity is defined consistently across your website with founding date, services, and geographic coverage.
                  </p>
                  <p>
                    <strong className="text-foreground">Monitor AI visibility as a separate metric.</strong> Tracking only traditional SEO metrics misses 35-45% of total search visibility. Start checking whether your brand appears when someone asks ChatGPT, Gemini, or Perplexity questions in your category.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The Bottom Line</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    AI SEO and traditional SEO aren't enemies. They share a foundation of quality content, technical soundness, and topical authority. But GEO adds critical requirements that traditional SEO doesn't address: entity-level brand optimization, answer-first content architecture, multi-platform AI visibility, and a fundamentally different measurement framework.
                  </p>
                  <p>
                    The brands winning in AI search right now aren't necessarily the ones with the best Google rankings. They're the ones the AI considers the default answer in their category. That distinction is worth sitting with.
                  </p>
                  <p>
                    The window to establish that position is open. The field is less competitive than traditional SEO precisely because most businesses haven't started yet. That advantage compounds over time and becomes harder to replicate as the category matures. Move now, or watch someone else become the AI's answer.
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "What's the difference between SEO and GEO?",
                      a: "Traditional SEO optimizes your website to rank higher on search engine results pages. GEO (Generative Engine Optimization) optimizes your content so AI systems understand it, trust it, and cite it when generating answers. Traditional SEO asks 'How do I rank on a page of links?' GEO asks 'How do I become the answer the AI gives?' The mechanics are fundamentally different."
                    },
                    {
                      q: "Why do AI-referred visitors convert so much higher?",
                      a: "AI search users arrive having already compared options and narrowed their choices. The AI did the research for them. By the time they click through to your site, they're further down the funnel than a typical Google visitor. Some benchmarks show 4.4x higher conversion rates for AI-referred traffic compared to traditional organic search."
                    },
                    {
                      q: "Can I ignore traditional SEO if I focus on GEO?",
                      a: "No. Traditional SEO and GEO share a foundation: quality content, technical soundness, and topical authority. Your technical SEO foundation (crawlability, site speed, clean HTML) still matters because AI crawlers use the same access patterns as traditional search crawlers. A page blocked from Googlebot is also blocked from AI model training data. Layer GEO on top of solid traditional SEO, don't replace it."
                    },
                    {
                      q: "What role do third-party sources play in AI visibility?",
                      a: "Enormous. Brand websites make up only 5-10% of the sources AI systems cite. The other 90-95% comes from review platforms, forums like Reddit and Quora, creator ecosystems on YouTube and TikTok, and Substack. A new 'trust layer' draws heavily from these relevance signals, influencing nearly half of agentic search results. Getting mentioned by sources the AI already trusts matters more than perfecting your own blog."
                    }
                  ].map(({ q, a }) => (
                    <div key={q} className="border-t border-border pt-6">
                      <h3 className="font-serif text-lg text-foreground mb-3">{q}</h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 text-center space-y-4">
                <h3 className="font-serif text-2xl text-foreground">Understand Your Position in AI Search</h3>
                <p className="font-sans text-muted-foreground">
                  Most businesses don't know if they're visible to AI yet. Find out where you stand and what needs to change.
                </p>
                <Button
                  onClick={() => window.open(BOOKING_URL, "_blank")}
                  className="btn-gold-shine py-3 px-8 rounded-lg font-semibold font-sans"
                >
                  Get Your AI Visibility Baseline
                </Button>
              </div>

            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default SEOPlaybookArticle;
