import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import blogChatgptImage from "@/assets/blog-chatgpt.webp";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const ARTICLE_SCHEMA = '{"@context":"https://schema.org","@type":"Article","headline":"How Real Estate Agents Get Cited by ChatGPT in 2026","description":"31% of buyers used AI to find agents in 2025. Here\'s exactly how real estate agents get cited by ChatGPT, Perplexity, and Gemini — and how long it takes.", "image":"https://propertycopydesk.com/blog-chatgpt.webp", "author":{"@type":"Person","name":"Fatih","url":"https://propertycopydesk.com"},"publisher":{"@type":"Organization","name":"PropertyCopyDesk","url":"https://propertycopydesk.com"},"datePublished":"2026-03-15T00:00:00+00:00","dateModified":"2026-04-22T00:00:00+00:00","mainEntityOfPage":{"@type":"WebPage","@id":"https://propertycopydesk.com/blog/how-real-estate-agents-get-cited-by-chatgpt"},"keywords":["how to get cited by chatgpt","AI visibility for real estate agents","chatgpt real estate marketing"]}';

const FAQ_SCHEMA = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does ChatGPT decide which real estate agents to recommend?","acceptedAnswer":{"@type":"Answer","text":"ChatGPT primarily draws from Bing\'s web index for its recommendations. Agents who appear in AI responses typically have published content that Bing has indexed and associated with their market and specialty."}},{"@type":"Question","name":"How many articles do I need to get cited by AI?","acceptedAnswer":{"@type":"Answer","text":"Semrush research suggests topical authority is typically achieved around 20-30 interconnected articles on a focused subject."}},{"@type":"Question","name":"Does Google Business Profile affect AI citations?","acceptedAnswer":{"@type":"Answer","text":"Yes, for location-specific queries it has a meaningful impact. Gemini draws directly from Google\'s index, and GBP signals are part of that index."}},{"@type":"Question","name":"Can I get cited by ChatGPT without a blog?","acceptedAnswer":{"@type":"Answer","text":"Technically yes, but practically it\'s very difficult. AI models cite sources they\'ve seen address a topic in detail."}},{"@type":"Question","name":"How long does it take to show up in AI search?","acceptedAnswer":{"@type":"Answer","text":"Expect 60-90 days from when you start publishing consistently, assuming you\'re publishing 2-3 articles per week with schema markup in place and an optimized Google Business Profile."}}]}';

const ChatGPTArticle = () => {
  useEffect(() => {
    document.title = "How Real Estate Agents Get Cited by ChatGPT in 2026";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement("meta"); metaDesc.setAttribute("name", "description"); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute("content", "31% of buyers used AI to find agents in 2025. Here's exactly how real estate agents get cited by ChatGPT, Perplexity, and Gemini — and how long it takes.");

    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://propertycopydesk.com/blog/how-real-estate-agents-get-cited-by-chatgpt");

    // Add JSON-LD schemas
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.textContent = ARTICLE_SCHEMA;
    script1.id = "article-schema";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.textContent = FAQ_SCHEMA;
    script2.id = "faq-schema";
    document.head.appendChild(script2);

    return () => {
      document.getElementById("article-schema")?.remove();
      document.getElementById("faq-schema")?.remove();
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
                How Real Estate Agents Get Cited by ChatGPT in 2026
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-8">
                <span>By Fatih</span>
                <span>·</span>
                <span>March 15, 2026</span>
                <span>·</span>
                <span>12 min read</span>
              </div>

              <div className="aspect-[1200/628] rounded-lg overflow-hidden bg-muted mb-10">
                <img
                  src={blogChatgptImage}
                  alt="How Real Estate Agents Get Cited by ChatGPT in 2026"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Article Body */}
              <div className="space-y-8">
                {/* Opening */}
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  31% of buyers used AI to research real estate agents in 2025. That number is projected to hit 65% by 2027. The problem is that only 12-14% of agents show up in AI search results consistently. The rest are invisible, and most of them don't know it yet. Getting cited by ChatGPT, Google AI, Perplexity, and Gemini is a buildable system. Here's exactly how it works.
                </p>

                {/* Section: What "Getting Cited" Means */}
                <section>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">What "Getting Cited by AI" Actually Means</h2>
                  <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                    <p>
                      When someone asks ChatGPT "who should list my home in Austin," the model doesn't search the internet in real time. It pulls from its training data, supplemented by Bing's index for ChatGPT and Google's index for Gemini. What appears in the response is whoever those indexes associate with expertise on that topic in that market.
                    </p>
                    <p>
                      A citation is when the AI mentions your name, your brand, or your website in a response. There are three types. A <strong className="text-foreground">named citation</strong> is "consider working with [your name] at [your firm]." A <strong className="text-foreground">linked citation</strong> includes your URL directly in the response. A <strong className="text-foreground">described citation</strong> is when AI pulls your content to answer a question without naming you, but citing your domain.
                    </p>
                    <p>
                      All three matter. Named citations drive trust. Linked citations drive traffic. Described citations confirm that AI sees you as a source of authority on the topic.
                    </p>
                    <p>
                      The underlying mechanism is the same across platforms: AI models recommend agents they have seen discussed, quoted, or referenced across enough sources to build confidence in that association.
                    </p>
                  </div>
                </section>

                {/* Section: 5 Factors */}
                <section>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The 5 Factors That Determine Which Agents AI Recommends</h2>
                  <div className="space-y-6 font-sans text-muted-foreground leading-relaxed">
                    <div>
                      <p>
                        <strong className="text-foreground">Topical authority.</strong> This is the biggest one. Topical authority means you have published enough high-quality, interconnected content on a specific subject that AI models recognize you as a reliable source on that topic. For real estate agents, that topic is your market and your specialty. According to Semrush, topical authority typically requires 20-30 interconnected articles on a focused subject. That's not 30 random blog posts. It's 30 articles that reference each other and collectively cover a subject thoroughly.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-foreground">Content freshness.</strong> AI models weight recent content more heavily than old content. HubSpot's research shows content older than 12 months loses 15-30% of its ranking signals. Publishing consistently every 3-4 days signals to crawlers that your site is active and relevant. A site with 9 articles published over 30 days outperforms a site with 9 articles published over 2 years, all else being equal.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-foreground">Schema markup.</strong> Schema is structured data that tells AI exactly what your content is about. Without it, a crawler has to interpret your content. With it, you're explicitly stating: this is an article, this is the author, this is the topic, here are the FAQ answers. FAQPage schema is particularly important because AI models pull FAQ answers as direct responses to conversational queries.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-foreground">Local signals.</strong> For real estate agents, local signals matter because most AI citations are in response to location-specific queries. Google Business Profile optimization, NAP consistency (name, address, phone number across all platforms), and location-specific content all feed into how AI associates you with a particular market.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-foreground">Domain authority and backlinks.</strong> Domain authority is how much trust Google's index assigns your website. Ahrefs research shows domain authority plateaus after 40-50 quality articles. You don't need hundreds of backlinks. You need a handful of credible sources linking to your site. The baseline threshold for getting picked up by AI indexes is lower than most agents expect.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section: Build Foundation */}
                <section>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">How to Build Your AI Visibility Foundation</h2>
                  <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                    <p>
                      Start with your Google Business Profile. Make sure your category is set to "Real Estate Agent" (not "Realtor" or "Real Estate Agency"), your description includes your target markets and specialties, and your posts are updated at least twice a month. GBP optimization is free and most agents have set it up once and forgotten about it.
                    </p>
                    <p>
                      Next, add schema markup to your website. At minimum, you need Organization schema and LocalBusiness schema on your homepage, Article schema on every article you publish, and FAQPage schema on any page with a Q&A section. If you're on WordPress, Rank Math handles this automatically. If you're on a custom or no-code platform, you add JSON-LD blocks to your page headers.
                    </p>
                    <p>
                      Then check your NAP consistency. Search your name and brokerage across Zillow, Realtor.com, your brokerage site, any local directories, and your website. Every listing should have identical name, address, and phone number. Inconsistencies create conflicting signals that AI models weight down.
                    </p>
                  </div>
                </section>

                {/* Section: Content Strategy */}
                <section>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The Content Strategy That Gets AI Citations</h2>
                  <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                    <p>
                      The content format AI models cite most is the comprehensive how-to guide with a FAQ section. AI is optimized to answer questions, so content that directly answers questions in self-contained FAQ format gets pulled more consistently than narrative content.
                    </p>
                    <p>
                      Every article you publish should include a FAQ section with 3-5 questions written in natural conversational language. Each answer should make sense on its own, without requiring the reader to have read the full article. That standalone quality is exactly what AI models look for when assembling a response.
                    </p>
                    <p>
                      The topics to focus on first are the queries your target clients are actually typing. "Who should I use to list my home in [market]" and "best real estate agent in [market]" are the obvious ones. But the highest-value citation opportunities are one level up: educational queries like "how do I sell my home quickly in [market]" or "what's the real estate market doing in [neighborhood]." These are the queries where AI needs a local expert, and if you've published a solid answer, you're the candidate.
                    </p>
                    <p>
                      Publish 2-3 articles per week for the first 4-6 weeks. After that, 4-6 articles per month is enough to maintain and expand your visibility. Domain authority plateaus around 50 quality articles, after which you're mainly refreshing existing content and targeting new keyword clusters.
                    </p>
                  </div>
                </section>

                {/* Section: Timeline */}
                <section>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">How Long It Takes to See First Results</h2>
                  <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                    <p>
                      The honest answer is 60-90 days for your first AI citation, assuming you're publishing consistently and your technical foundation (schema, GBP, NAP consistency) is in place.
                    </p>
                    <p>
                      Here's roughly how the timeline breaks down. In the <strong className="text-foreground">first 30 days</strong>, AI platforms are indexing your new content and beginning to associate your domain with your topic area. You're unlikely to see citations yet, but the foundation is building. <strong className="text-foreground">Days 31-60</strong> are when topical authority starts to register, especially if you've published 15-20 interconnected articles. You may see your first described citations, where AI pulls your content to answer a question without naming you directly. <strong className="text-foreground">Days 61-90</strong> typically produce first named or linked citations if the content and technical setup are solid.
                    </p>
                    <p>
                      At the 6-month mark, with 50+ articles published and consistent GBP activity, you should be appearing in 60-80% of relevant AI searches in your target market.
                    </p>
                    <p>
                      These numbers are based on real patterns across markets where agents have built this kind of content infrastructure. They're not a guarantee. Market competition, content quality, and technical execution all affect the outcome. But agents who build this consistently in markets with low AI visibility competition, which is still most U.S. markets right now, tend to see results on the faster end of that range.
                    </p>
                  </div>
                </section>

                {/* FAQ Section */}
                <section>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {[
                      {
                        q: "How does ChatGPT decide which real estate agents to recommend?",
                        a: "ChatGPT primarily draws from Bing's web index for its recommendations. Agents who appear in AI responses typically have published content that Bing has indexed and associated with their market and specialty. Factors that influence this include topical authority (volume of relevant content), domain trust (quality of backlinks and consistency of site information), schema markup, and Google Business Profile optimization. There's no paid placement. It's based on how well AI can associate your name with a subject."
                      },
                      {
                        q: "How many articles do I need to get cited by AI?",
                        a: "Semrush research suggests topical authority is typically achieved around 20-30 interconnected articles on a focused subject. For real estate agents targeting a specific market, that means 20-30 articles focused on that market's real estate conditions, neighborhoods, buyer and seller topics, and agent strategy. Publishing them within 60-90 days significantly accelerates the process."
                      },
                      {
                        q: "Does Google Business Profile affect AI citations?",
                        a: "Yes, for location-specific queries it has a meaningful impact. Gemini draws directly from Google's index, and GBP signals are part of that index. A fully optimized GBP, with accurate categories, active posts, and consistent NAP data, contributes to how confidently Google's systems associate you with a specific market."
                      },
                      {
                        q: "Can I get cited by ChatGPT without a blog?",
                        a: "Technically yes, but practically it's very difficult. AI models cite sources they've seen address a topic in detail. Without published content, the only way you'd appear is through third-party mentions, press coverage, or highly visible directory profiles. A blog or article section on your website is the most direct, controllable path to AI citations."
                      },
                      {
                        q: "How long does it take to show up in AI search?",
                        a: "Expect 60-90 days from when you start publishing consistently. That assumes you're publishing 2-3 articles per week, your schema markup is in place, and your Google Business Profile is optimized. The first 30 days are mostly invisible. Days 31-60 often produce described citations. Named citations typically follow in months 2-3."
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
                      The agents who show up in AI search results in 2026 and beyond are the ones who started building this infrastructure in 2025. The entry barrier is still low because most agents haven't started. You need 20-30 tightly focused articles, solid schema markup, an optimized Google Business Profile, and consistent publishing. That's a 60-90 day build. The agents who do it now are locking in market positions before their competitors wake up to the shift.
                    </p>
                    <p>
                      If you want to skip the build and have this done for you, <Link to="/" className="text-accent hover:underline font-medium">PropertyCopyDesk</Link> handles the full system, including content, schema, GBP optimization, and citation tracking, for one agent per market.
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
                    Published: March 15, 2026 | Author: Fatih, PropertyCopyDesk
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

export default ChatGPTArticle;
