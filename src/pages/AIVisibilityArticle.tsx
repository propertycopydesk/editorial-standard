import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import blogImage from "@/assets/blog-ai-visibility.webp";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const ARTICLE_SCHEMA = '{"@context":"https://schema.org","@type":"Article","headline":"Why Your Real Estate Website Doesn\'t Show Up in ChatGPT","description":"You searched for your name in ChatGPT and got nothing. Here are the 4 specific reasons AI doesn\'t know your real estate website exists — and how to fix each one in 60-90 days.","image":"https://propertycopydesk.com/blog-ai-visibility.webp","author":{"@type":"Person","name":"Fatih","url":"https://propertycopydesk.com"},"publisher":{"@type":"Organization","name":"PropertyCopyDesk","url":"https://propertycopydesk.com"},"datePublished":"2026-03-18T00:00:00+00:00","dateModified":"2026-03-18T00:00:00+00:00","mainEntityOfPage":{"@type":"WebPage","@id":"https://propertycopydesk.com/blog/why-your-real-estate-website-doesnt-show-up-in-chatgpt"},"keywords":["why doesn\'t chatgpt recommend me","real estate website AI visibility","chatgpt not showing my business"]}';

const FAQ_SCHEMA = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Why does ChatGPT recommend my competitor but not me?","acceptedAnswer":{"@type":"Answer","text":"Your competitor almost certainly has more indexed content on your shared market and specialty. AI models assign recommendations based on topical authority, which comes from volume of relevant, interconnected content. If they\'ve published 25 articles on selling homes in your market and you have 3 blog posts, that gap is the reason."}},{"@type":"Question","name":"Does paying for Zillow ads help with AI visibility?","acceptedAnswer":{"@type":"Answer","text":"No. Zillow ads place you in front of users on Zillow\'s platform. AI citations are determined by what AI crawlers find on your own website and in the broader web index. Zillow leads are rented visibility. AI citations require owned visibility, built through content you control on your own domain."}},{"@type":"Question","name":"What\'s the fastest way to get noticed by AI search?","acceptedAnswer":{"@type":"Answer","text":"Publish a cluster of 5-7 tightly focused articles on your market and specialty in the first two weeks, add FAQPage schema to each, optimize your Google Business Profile, and submit every URL to Google Search Console immediately after publishing. Some agents see first described citations inside 45 days with this approach."}},{"@type":"Question","name":"Do I need to hire someone to fix my AI visibility?","acceptedAnswer":{"@type":"Answer","text":"Not necessarily. The technical setup — schema markup, Search Console submission, GBP optimization — takes 2-4 hours and most of it is free. The ongoing commitment is content. Publishing 2-3 focused articles per week requires either your time or someone else\'s. The strategy isn\'t complicated. The execution is what most agents don\'t sustain."}}]}';

const AIVisibilityArticle = () => {
  useEffect(() => {
    document.title = "Why Your Real Estate Website Doesn't Show Up in ChatGPT | PropertyCopyDesk";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement("meta"); metaDesc.setAttribute("name", "description"); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute("content", "You searched for your name in ChatGPT and got nothing. Here are the 4 specific reasons AI doesn't know your real estate website exists — and how to fix each one in 60-90 days.");

    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://propertycopydesk.com/blog/why-your-real-estate-website-doesnt-show-up-in-chatgpt");

    // Add JSON-LD schemas
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.textContent = ARTICLE_SCHEMA;
    script1.id = "article-schema-2";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.textContent = FAQ_SCHEMA;
    script2.id = "faq-schema-2";
    document.head.appendChild(script2);

    return () => {
      document.getElementById("article-schema-2")?.remove();
      document.getElementById("faq-schema-2")?.remove();
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
            {/* Article Header */}
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-sans rounded-full mb-4">
              AI Visibility
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              Why Your Real Estate Website Doesn't Show Up in ChatGPT
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-8">
              <span>By Fatih</span>
              <span>·</span>
              <span>March 18, 2026</span>
              <span>·</span>
              <span>9 min read</span>
            </div>

            <div className="aspect-[1200/628] rounded-lg overflow-hidden bg-muted mb-10">
              <img
                src={blogImage}
                alt="Why Your Real Estate Website Doesn't Show Up in ChatGPT"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Article Body */}
            <div className="space-y-8">
              {/* Opening */}
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                You searched for your name in ChatGPT. You tried your market. You typed "best real estate agent in [your city]." Someone else showed up. Maybe multiple competitors. Not you. That's an AI visibility problem, and it has a specific cause. Here's what's blocking you and how to fix it.
              </p>

              {/* Section: 4 Reasons */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The 4 Reasons AI Doesn't Know You Exist</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">No topical authority.</strong> AI models associate agents with markets and specialties based on content volume and interconnection. If your website has 3 pages, a contact form, and an IDX feed, that's not enough signal. You're not demonstrating expertise. You're just present. Topical authority requires 20-30 interconnected articles on a specific subject, published consistently. Without them, AI has no basis to recommend you over someone who has published 25 articles on your market.
                  </p>
                  <p>
                    <strong className="text-foreground">No schema markup.</strong> Schema is structured data that tells AI crawlers what your content is about. Without it, a crawler has to guess. With it, you're explicitly telling Google, Bing, and every AI that indexes from them: this is an article, this is the author, here are the FAQs. Most real estate websites have zero schema. That's a significant gap.
                  </p>
                  <p>
                    <strong className="text-foreground">Thin or duplicated content.</strong> IDX feeds are auto-generated. Market report templates are shared across thousands of agents. AI models are trained on unique content, and they weight original, authoritative writing over aggregated listing data. If your "About" page is 80 words and your blog hasn't been updated since 2023, that's thin content.
                  </p>
                  <p>
                    <strong className="text-foreground">Weak local signals.</strong> For location-specific AI queries, local signals matter. That means a fully optimized Google Business Profile, NAP consistency (name, address, phone number identical across all directories), and content that explicitly addresses your market by name, neighborhood, and property type. Vague, generic content doesn't build local authority.
                  </p>
                </div>
              </section>

              {/* Section: What AI Crawlers Look For */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">What AI Crawlers Actually Look For on Your Website</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Three things determine whether AI indexes your content: crawlability, relevance signals, and authority indicators.
                  </p>
                  <p>
                    <strong className="text-foreground">Crawlability</strong> means your site can be indexed. If your website blocks crawlers, uses JavaScript-heavy rendering without server-side support, or doesn't have a sitemap submitted to Google Search Console, you're starting from zero regardless of content quality.
                  </p>
                  <p>
                    <strong className="text-foreground">Relevance signals</strong> are what tell AI your site is about real estate in a specific market. Every article you publish on a focused topic adds one. Structured data amplifies those signals. Internal links between related articles reinforce them. The more tightly clustered your content, the stronger the association AI builds between your domain and your specialty.
                  </p>
                  <p>
                    <strong className="text-foreground">Authority indicators</strong> are the external signals: backlinks from credible sources, a verified Google Business Profile, and citations in other published content. You don't need hundreds of backlinks. You need a few credible ones. A local newspaper, a real estate publication, or your brokerage's website linking to yours carries more weight than 50 low-quality directory links.
                  </p>
                </div>
              </section>

              {/* Section: Minimum Viable AI Presence */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The Minimum Viable AI Presence for a Real Estate Agent</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The baseline for consistent AI citations is lower than most agents expect, but it's still a real investment.
                  </p>
                  <p>
                    You need 20-30 articles on a focused topic cluster, all interconnected with internal links. You need Article and FAQPage schema on every published piece. You need a fully optimized Google Business Profile with accurate category, a detailed description, regular posts, and NAP data that matches every other platform. And you need your site indexed in Google Search Console with your sitemap submitted.
                  </p>
                  <p>
                    That's the foundation. No paid ads. No backlink campaigns at the start. No PR outreach. The minimum viable AI presence is a content and technical infrastructure play, and most agents are not building it.
                  </p>
                  <p>
                    Domain authority is a factor, but it builds naturally from the content layer. According to Ahrefs, domain authority plateaus after 40-50 quality articles. Get to 30 focused articles and you're in striking distance of meaningful AI visibility in most markets.
                  </p>
                </div>
              </section>

              {/* Section: Test */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">A Simple Test to Check Your AI Visibility Right Now</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Do this in the next 10 minutes. Open ChatGPT, Perplexity, and Gemini in three separate tabs.
                  </p>
                  <p>
                    In each, search: "Who are the best real estate agents in [your market]?" Then search: "Who should I use to sell my home in [your neighborhood]?" Then search: "Top real estate agents in [your city] for [your specialty]."
                  </p>
                  <p>
                    Note who appears. If competitors show up and you don't, they have more topical authority, stronger local signals, or more indexed content. If no agent appears in your market, you're looking at unclaimed territory. That's not a problem. That's a window.
                  </p>
                  <p>
                    Run the same search with your name directly: "Is [your name] a good real estate agent?" If AI returns no information, your content footprint is too thin to draw from. That's the baseline you're starting from.
                  </p>
                </div>
              </section>

              {/* Section: Fix in 60-90 Days */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">How to Fix This in 60-90 Days</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Week 1:</strong> Audit your Google Business Profile. Update your category to "Real Estate Agent" (not "Realtor" or "Real Estate Agency"). Write a 750-word description covering your markets, specialties, and client types. Schedule two posts per week for the next 30 days.
                  </p>
                  <p>
                    <strong className="text-foreground">Weeks 2-5:</strong> Publish 2-3 articles per week on your target market and specialty. Use FAQ sections in every article. Submit each URL to Google Search Console immediately after publishing to accelerate indexing.
                  </p>
                  <p>
                    <strong className="text-foreground">Week 6:</strong> Add Article schema and FAQPage schema to every published piece. Run them through Google's Rich Results Test. Fix any errors before moving on.
                  </p>
                  <p>
                    <strong className="text-foreground">Weeks 7-8:</strong> Build internal links between your articles. Submit your sitemap. Run the AI visibility test from above again. By day 60, AI platforms will have indexed your content cluster. First citations typically appear between day 60 and 90. For a full breakdown of the build, see the <Link to="/blog/how-real-estate-agents-get-cited-by-chatgpt" className="text-accent hover:underline font-medium">AI citation guide here</Link>.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "Why does ChatGPT recommend my competitor but not me?",
                      a: "Your competitor almost certainly has more indexed content on your shared market and specialty. AI models assign recommendations based on topical authority, which comes from volume of relevant, interconnected content. If they've published 25 articles on selling homes in your market and you have 3 blog posts, that gap is the reason."
                    },
                    {
                      q: "Does paying for Zillow ads help with AI visibility?",
                      a: "No. Zillow ads place you in front of users on Zillow's platform. AI citations are determined by what AI crawlers find on your own website and in the broader web index. Zillow leads are rented visibility. AI citations require owned visibility, built through content you control on your own domain."
                    },
                    {
                      q: "What's the fastest way to get noticed by AI search?",
                      a: "Publish a cluster of 5-7 tightly focused articles on your market and specialty in the first two weeks, add FAQPage schema to each, optimize your Google Business Profile, and submit every URL to Google Search Console immediately after publishing. Some agents see first described citations inside 45 days with this approach."
                    },
                    {
                      q: "Do I need to hire someone to fix my AI visibility?",
                      a: "Not necessarily. The technical setup — schema markup, Search Console submission, GBP optimization — takes 2-4 hours and most of it is free. The ongoing commitment is content. Publishing 2-3 focused articles per week requires either your time or someone else's. The strategy isn't complicated. The execution is what most agents don't sustain."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-border pb-6 last:border-0">
                      <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Bottom Line */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The Bottom Line</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The agents appearing in AI search in 2026 aren't there because they paid for placement. They're there because they built a content infrastructure before most competitors started paying attention. The gap between agents with AI visibility and those without is widening. Most markets still have open territory. If your website isn't showing up now, the window to claim your market without significant competition is still open, but it's closing.
                  </p>
                  <p>
                    If you want this done for you, <Link to="/" className="text-accent hover:underline font-medium">PropertyCopyDesk</Link> handles the full build, including content, schema, GBP optimization, and citation tracking, for one agent per market.
                  </p>
                </div>
              </section>

              {/* CTA Box */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
                <p className="font-serif text-xl text-foreground mb-3">Want this done for you?</p>
                <p className="font-sans text-muted-foreground mb-6">We build AI visibility for one agent per market. See if yours is available.</p>
                <Button
                  onClick={() => window.open(BOOKING_URL, "_blank")}
                  className="btn-gold-shine text-base py-3 px-8 rounded-lg font-semibold"
                >
                  Get Your Free AI Visibility Check
                </Button>
              </div>

              {/* Footer line */}
              <div className="border-t border-border pt-6 mt-8">
                <p className="text-sm text-muted-foreground font-sans">
                  Published: March 18, 2026 | Author: Fatih, PropertyCopyDesk
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default AIVisibilityArticle;
