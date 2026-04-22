import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import blogImage from "@/assets/blog-perplexity.webp";

// NOTE: Upload an image named blog-perplexity.webp to src/assets/ before deploying.

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const ARTICLE_SCHEMA = '{"@context":"https://schema.org","@type":"Article","headline":"The Real Estate Agent\'s Guide to Ranking in Perplexity, ChatGPT, and Gemini","description":"Google isn\'t the only search engine anymore. Here\'s exactly how ChatGPT, Perplexity, and Gemini each find and recommend real estate agents — and the 90-day plan to get cited on all three.","image":"https://propertycopydesk.com/blog-perplexity.webp","author":{"@type":"Person","name":"Fatih","url":"https://propertycopydesk.com"},"publisher":{"@type":"Organization","name":"PropertyCopyDesk","url":"https://propertycopydesk.com"},"datePublished":"2026-03-24T00:00:00+00:00","dateModified":"2026-04-22T00:00:00+00:00","mainEntityOfPage":{"@type":"WebPage","@id":"https://propertycopydesk.com/blog/the-real-estate-agents-guide-to-ranking-in-perplexity-chatgpt-and-gemini"},"keywords":["how to rank in AI search","perplexity real estate","gemini real estate agent","AI search optimization for real estate"]}';

const FAQ_SCHEMA = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which AI platform is most important for real estate agents?","acceptedAnswer":{"@type":"Answer","text":"Start with ChatGPT because it has the largest user base and draws from Bing\'s index, which is well-established for local business content. However, Perplexity is growing fast among research-oriented buyers and sellers, and Gemini is essential for agents who rely on Google Business Profile visibility. The most effective strategy targets all three simultaneously, since the foundational work — topical authority content, schema markup, and a strong GBP — improves your ranking across all platforms at once."}},{"@type":"Question","name":"Does Perplexity rank differently than ChatGPT?","acceptedAnswer":{"@type":"Answer","text":"Yes. ChatGPT primarily draws from Bing\'s pre-crawled web index, so older, well-indexed content can rank even if it hasn\'t been published recently. Perplexity performs real-time web crawls when answering queries, which means newer, freshly published content can surface faster. Perplexity also cites its sources directly in the response, making citation more visible and trackable than ChatGPT, which often recommends without explicit links."}},{"@type":"Question","name":"How often should I publish content for AI visibility?","acceptedAnswer":{"@type":"Answer","text":"Two to three articles per week is the target for agents trying to build topical authority within 60-90 days. The minimum viable pace is one article per week — below that, you\'re unlikely to reach the 20-30 interconnected articles needed before AI platforms begin to associate you with your market. Consistency matters more than volume: an agent who publishes one article every five days for six months will outperform one who publishes ten articles in a week and then stops."}},{"@type":"Question","name":"Do backlinks matter for AI search rankings?","acceptedAnswer":{"@type":"Answer","text":"Yes, but not in the same way they mattered for traditional SEO. AI platforms don\'t score links algorithmically the way Google\'s PageRank did. What matters is whether your content is cited and referenced by other sources — local news sites, real estate publications, neighborhood blogs — which signals to AI crawlers that your content is trustworthy and authoritative. One citation from a credible local source is worth more than dozens of generic directory links."}},{"@type":"Question","name":"Can I track which AI platforms cite my website?","acceptedAnswer":{"@type":"Answer","text":"Not automatically. AI platforms don\'t send referral traffic the way search engines do, and most don\'t provide publisher analytics. The practical approach is manual: run test queries monthly in ChatGPT, Perplexity, and Gemini using your target keywords (\'best real estate agent in [city]\', \'who should I use to sell my home in [neighborhood]\') and record what comes up. Track this in a spreadsheet alongside your publishing activity to measure the lag between content publication and first citation."}}]}';

const PerplexityArticle = () => {
  useEffect(() => {
    document.title = "The Real Estate Agent's Guide to Ranking in Perplexity, ChatGPT, and Gemini | PropertyCopyDesk";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement("meta"); metaDesc.setAttribute("name", "description"); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute("content", "Google isn't the only search engine anymore. Here's exactly how ChatGPT, Perplexity, and Gemini each find and recommend real estate agents — and the 90-day plan to get cited on all three.");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://propertycopydesk.com/blog/the-real-estate-agents-guide-to-ranking-in-perplexity-chatgpt-and-gemini");

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.textContent = ARTICLE_SCHEMA;
    script1.id = "article-schema-4";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.textContent = FAQ_SCHEMA;
    script2.id = "faq-schema-4";
    document.head.appendChild(script2);

    return () => {
      document.getElementById("article-schema-4")?.remove();
      document.getElementById("faq-schema-4")?.remove();
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
              AI Visibility
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              The Real Estate Agent's Guide to Ranking in Perplexity, ChatGPT, and Gemini
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-8">
              <span>By Fatih</span>
              <span>·</span>
              <span>March 24, 2026</span>
              <span>·</span>
              <span>11 min read</span>
            </div>

            <div className="aspect-[1200/628] rounded-lg overflow-hidden bg-muted mb-10">
              <img
                src={blogImage}
                alt="The Real Estate Agent's Guide to Ranking in Perplexity, ChatGPT, and Gemini"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="space-y-8">

              {/* Opening */}
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Google isn't the only search engine anymore. Buyers are asking ChatGPT who to call before they open Zillow. Sellers are running their neighborhood through Perplexity before they book a listing consultation. Gemini is answering "who's the best agent in [my city]" directly, without sending users to a results page first. Three platforms, three algorithms, one strategic question: are you showing up on any of them?
              </p>

              {/* Section 1 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">How Each AI Platform Finds and Recommends Agents</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The three platforms aren't built the same way, and understanding the difference is the first thing most agents miss. They assume AI search works like Google — a single algorithm, a single approach. It doesn't.
                  </p>
                  <p>
                    <strong className="text-foreground">ChatGPT</strong> draws primarily from Bing's web index. When you ask ChatGPT a question that requires real-world information — including local business recommendations — it searches Bing and synthesizes what it finds. This means everything that made you visible in Bing search (indexed pages, structured content, topical authority) also determines whether ChatGPT knows you exist. The important implication: ChatGPT is drawing from a pre-crawled index, not doing real-time research. A page published yesterday may not influence a ChatGPT response for days or weeks. Content age and index depth matter here. An agent with two years of consistently published, Bing-indexed market content will outperform a newer publisher regardless of how good the newer content is.
                  </p>
                  <p>
                    <strong className="text-foreground">Perplexity</strong> works differently. It performs a real-time web crawl when you submit a query, then synthesizes from what it finds and cites its sources directly in the response. This changes the timing dynamic significantly: newer content can surface faster on Perplexity than on ChatGPT because it's reading the web as it is right now, not from a cached index. Perplexity also shows its work — sources appear as numbered citations in the response — which makes it more trackable for publishers. If your article shows up as a citation in a Perplexity response, you'll know exactly which piece of content got there. The downside is that Perplexity users tend to be more research-oriented and technically literate, meaning the bar for being cited is higher. Vague, general content doesn't get pulled. Specific, data-grounded, well-structured content does.
                  </p>
                  <p>
                    <strong className="text-foreground">Gemini</strong> is Google's AI, and it draws from Google's index — the same one that powers Search, Maps, and Google Business Profile. For real estate agents, this is both a strength and a clarification. Gemini is more responsive to local signals than either ChatGPT or Perplexity. A well-optimized Google Business Profile, consistent NAP (name, address, phone) data across directories, and locally-focused content all have a direct influence on Gemini recommendations in a way they don't on the other two platforms. Agents who've done traditional local SEO work — even without specifically targeting AI — often have a head start on Gemini specifically. The gap, for most, is content depth: GBP optimization alone isn't enough to generate topical authority citations for specific buyer and seller questions.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The Universal Ranking Factors Across All Three Platforms</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Despite their differences, all three platforms reward the same foundational behaviors. Build these and you're building for all three simultaneously.
                  </p>
                  <p>
                    <strong className="text-foreground">Topical authority</strong> is the most important. This is the concept of owning a subject area in the eyes of AI systems — not just mentioning a topic, but publishing enough interconnected, specific content on it that an AI model associates you with that topic. For real estate agents, topical authority means having 20-30 articles that collectively cover your market, your specialty, and the questions buyers and sellers in your area actually ask. Ten articles isn't enough. A hundred generic ones aren't either. The sweet spot is depth within a focused area: an agent who becomes the definitive online resource for selling a home in one specific market will outperform a generalist with far more content. <Link to="/blog/how-real-estate-agents-get-cited-by-chatgpt" className="text-accent hover:underline">We covered exactly how this citation mechanism works</Link> in a previous breakdown.
                  </p>
                  <p>
                    <strong className="text-foreground">Content freshness</strong> matters, but differently across platforms. Perplexity weights it heavily; ChatGPT less so. As a general rule, agents who publish consistently — not in bursts — signal to all three platforms that they're an active, maintained information source. An agent who published 20 articles in 2024 and nothing since is losing ground to one who published five articles last month.
                  </p>
                  <p>
                    <strong className="text-foreground">Structured data</strong> (schema markup) tells AI crawlers what your content is. Without it, a crawler reads your page and guesses. With it, you're explicitly declaring: this is an Article, this is the author, this is the FAQ, these are the questions and answers. Schema doesn't guarantee citation, but it removes ambiguity. AI systems prefer unambiguous signals.
                  </p>
                  <p>
                    <strong className="text-foreground">Local signals</strong> — consistent business name, address, and phone number across directories; an active and optimized Google Business Profile; reviews that mention your market and specialty — affect all three platforms but have the most direct impact on Gemini.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Platform-Specific Optimization for Real Estate Agents</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The universal factors get you most of the way there. These platform-specific moves close the gap.
                  </p>
                  <p>
                    <strong className="text-foreground">For ChatGPT:</strong> prioritize Bing indexing. Go to Bing Webmaster Tools, submit your sitemap, and verify your site. This is a five-minute task most agents skip entirely. ChatGPT's reliance on Bing means anything Bing hasn't indexed doesn't exist to ChatGPT. Also focus on getting your content mentioned or linked from other indexed sources — local news, real estate publications, neighborhood blogs. Third-party references in the Bing index tell ChatGPT your content is worth citing.
                  </p>
                  <p>
                    <strong className="text-foreground">For Perplexity:</strong> structure your content for direct quotability. Perplexity pulls specific passages to cite, not entire articles. Every article should have at least one section that answers a specific question in two to three self-contained sentences — a passage that makes sense without the surrounding context. FAQ sections at the end of articles are particularly effective for this. Perplexity users also tend to ask more specific, research-grade questions, so content that includes local data points (median days on market, list-to-sale ratios, specific neighborhood names) gets cited more often than content that stays general.
                  </p>
                  <p>
                    <strong className="text-foreground">For Gemini:</strong> treat your Google Business Profile as a content asset, not just a listing. Post weekly updates on your GBP — market observations, recent transactions (anonymized), local event mentions. Gemini reads GBP activity as freshness signal. Also ensure your website's About page and homepage copy explicitly name your market and specialty — Gemini uses this as a strong local association signal.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The Content Format AI Prefers</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    AI systems are trained on text that is clear, structured, and self-evidently useful. They've been fed enormous amounts of human content and have learned what "good answer" looks like from the patterns in that data. This is useful to understand because it tells you what to write, not just how much.
                  </p>
                  <p>
                    <strong className="text-foreground">FAQ-structured content</strong> performs disproportionately well across all three platforms. A clear question followed by a thorough, direct answer maps exactly onto what AI models are trained to produce. When they encounter your content in that format, it's easy to cite because the structure is already what they'd generate themselves. Every article you write should include a dedicated FAQ section with five or more questions. Use the exact phrasing your clients use — not marketing language. "What's the best time to sell a house in Austin?" not "Optimal listing timing for Austin sellers."
                  </p>
                  <p>
                    <strong className="text-foreground">How-to guides</strong> with specific, numbered steps are the second most citable format. Step-by-step content answers a specific intent completely. "How to prepare your home for sale in 30 days" with ten concrete steps is more citable than a general overview of home preparation. The specificity signals that the content was written by someone who actually does this work, not someone summarizing what they've read.
                  </p>
                  <p>
                    <strong className="text-foreground">Data-driven comparisons</strong> — "Zillow vs. organic leads: the actual cost per closing," "6-month market update: list-to-sale ratios in [your market]" — get cited because they contain information AI can't generate from training data alone. If your content includes real numbers from your real experience, AI platforms will prefer it over generic content that contains only general claims. <Link to="/blog/ai-visibility-for-real-estate-agents-why-zillow-leads-wont-save-you" className="text-accent hover:underline">The Zillow vs. organic lead cost breakdown</Link> is a good example of the kind of specific, data-grounded comparison that earns citations.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Schema Markup That Speaks to AI Crawlers</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Schema markup is structured data embedded in your page's HTML that explicitly tells search engines and AI crawlers what your content is. It's written in a format called JSON-LD and placed in the head of your page. AI systems use it to reduce ambiguity when deciding whether your content is relevant to a query.
                  </p>
                  <p>
                    For real estate agents, the most valuable schema types are <strong className="text-foreground">Article</strong> (for blog posts and market reports), <strong className="text-foreground">FAQPage</strong> (for pages with question-and-answer content), <strong className="text-foreground">LocalBusiness</strong> (for your homepage or About page), and <strong className="text-foreground">Person</strong> (to establish your identity as the author across all your content). Each schema type sends a different signal. Article schema tells AI crawlers that this page is a piece of authored, dated content with a specific headline and subject. FAQPage schema tells them exactly which questions you're answering and exactly what your answers say — this is particularly valuable for Perplexity and Google.
                  </p>
                  <p>
                    The most common mistake agents make with schema is not having it at all. The second most common mistake is having it added by an SEO plugin that applies generic schema without specifics — no author, no date, no keywords. Generic schema is better than none, but the more specific your schema, the more signal it sends. An Article schema that names the author, links to the author's profile, specifies the publish date, and includes three or four target keywords is meaningfully more effective than one that just declares "this is an article."
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">A 90-Day Plan to Get Cited on All Three Platforms</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The timeline is real. Most agents who follow this consistently see their first AI citations within 60-90 days of starting. Here's how the 90 days break down.
                  </p>
                  <p>
                    <strong className="text-foreground">Month 1: Foundation.</strong> Set up the technical infrastructure before writing anything. Submit your sitemap to Google Search Console and Bing Webmaster Tools. Add Article and FAQPage schema to every piece of content you publish going forward. Optimize your Google Business Profile — complete every field, add photos, and post a weekly update. Write and publish your first cluster of five articles. These should all be on the same focused subject: your market, your specialty, and the most common questions you get from buyers and sellers.
                  </p>
                  <p>
                    <strong className="text-foreground">Month 2: Volume and interconnection.</strong> Publish two articles per week. After every new article, go back through your existing content and add internal links to it from relevant older articles. This interconnection is what turns a collection of separate posts into a topical cluster that AI systems recognize as authoritative. By the end of month two, you should have 15-20 published articles. Begin running monthly test queries in ChatGPT, Perplexity, and Gemini using your target keywords. Record what comes up. You're looking for the first signs of your content appearing.
                  </p>
                  <p>
                    <strong className="text-foreground">Month 3: Authority signals.</strong> Continue publishing, but also pursue external citations. Reach out to local news sites, real estate blogs, or neighborhood publications with data or insights from your content. One external link from a credible local source does more for your AI visibility than 20 additional articles published in isolation. Also ask satisfied clients to leave Google reviews that mention your market and specialty — these reviews feed directly into Gemini's local signals. By the end of month three, agents in most markets begin seeing consistent citations.
                  </p>
                  <p>
                    The agents who don't see results in 90 days are almost always the ones who stopped publishing in month two. <Link to="/blog/why-your-real-estate-website-doesnt-show-up-in-chatgpt" className="text-accent hover:underline">Inconsistency is the single most common reason real estate websites remain invisible to AI</Link> — not technical failure, not bad content, just the gap between starting and sustaining.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "Which AI platform is most important for real estate agents?",
                      a: "Start with ChatGPT because it has the largest user base and draws from Bing's index, which is well-established for local business content. However, Perplexity is growing fast among research-oriented buyers and sellers, and Gemini is essential for agents who rely on Google Business Profile visibility. The most effective strategy targets all three simultaneously, since the foundational work — topical authority content, schema markup, and a strong GBP — improves your ranking across all platforms at once."
                    },
                    {
                      q: "Does Perplexity rank differently than ChatGPT?",
                      a: "Yes. ChatGPT primarily draws from Bing's pre-crawled web index, so older, well-indexed content can rank even if it hasn't been published recently. Perplexity performs real-time web crawls when answering queries, which means newer, freshly published content can surface faster. Perplexity also cites its sources directly in the response, making citation more visible and trackable than ChatGPT, which often recommends without explicit links."
                    },
                    {
                      q: "How often should I publish content for AI visibility?",
                      a: "Two to three articles per week is the target for agents trying to build topical authority within 60-90 days. The minimum viable pace is one article per week — below that, you're unlikely to reach the 20-30 interconnected articles needed before AI platforms begin to associate you with your market. Consistency matters more than volume: an agent who publishes one article every five days for six months will outperform one who publishes ten articles in a week and then stops."
                    },
                    {
                      q: "Do backlinks matter for AI search rankings?",
                      a: "Yes, but not in the same way they mattered for traditional SEO. AI platforms don't score links algorithmically the way Google's PageRank did. What matters is whether your content is cited and referenced by other sources — local news sites, real estate publications, neighborhood blogs — which signals to AI crawlers that your content is trustworthy and authoritative. One citation from a credible local source is worth more than dozens of generic directory links."
                    },
                    {
                      q: "Can I track which AI platforms cite my website?",
                      a: "Not automatically. AI platforms don't send referral traffic the way search engines do, and most don't provide publisher analytics. The practical approach is manual: run test queries monthly in ChatGPT, Perplexity, and Gemini using your target keywords and record what comes up. Track this in a spreadsheet alongside your publishing activity to measure the lag between content publication and first citation."
                    }
                  ].map(({ q, a }) => (
                    <div key={q} className="border-t border-border pt-6">
                      <h3 className="font-serif text-lg text-foreground mb-3">{q}</h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="border-t border-border pt-8">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The Window Is Still Open</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Most real estate agents haven't thought about Perplexity once. A meaningful number haven't checked whether ChatGPT knows they exist. That gap is the opportunity.
                  </p>
                  <p>
                    Three platforms, three algorithms, one foundational strategy: become the most credible, most specific, most consistently published source of information about your market. Do that, and all three platforms will eventually find you. The agents who start now have a 12–18 month head start on the ones who wait until AI search is as competitive as Google.
                  </p>
                  <p>
                    That window closes. It closed for Google in 2012. It closed for Facebook organic reach in 2016. It will close for AI search too — probably faster than either of those, given how quickly adoption is moving.
                  </p>
                  <p>
                    The question isn't whether to build. It's whether you start before or after your competition does.
                  </p>
                </div>
              </section>

              {/* CTA */}
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 text-center space-y-4">
                <h3 className="font-serif text-2xl text-foreground">Find Out Where You Stand Right Now</h3>
                <p className="font-sans text-muted-foreground">
                  We'll run your market through ChatGPT, Perplexity, and Gemini and show you exactly what's showing up — and what isn't. No pitch. Just data.
                </p>
                <Button
                  onClick={() => window.open(BOOKING_URL, "_blank")}
                  className="btn-gold-shine py-3 px-8 rounded-lg font-semibold font-sans"
                >
                  Get Your Free AI Visibility Check
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

export default PerplexityArticle;