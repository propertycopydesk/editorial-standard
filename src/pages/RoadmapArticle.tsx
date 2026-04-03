// NOTE: Upload blog-roadmap.webp to src/assets/ before deploying.
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import blogImage from "@/assets/blog-roadmap.webp";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const ARTICLE_SCHEMA = '{"@context":"https://schema.org","@type":"Article","headline":"The 60-Day AI Visibility Roadmap for Real Estate Agents","description":"Most real estate marketing plans are built for Google 2019, not AI 2026. Here\'s the exact 60-day roadmap to get your first AI citation — week by week.","image":"https://propertycopydesk.com/blog-roadmap.webp","author":{"@type":"Person","name":"Fatih","url":"https://propertycopydesk.com"},"publisher":{"@type":"Organization","name":"PropertyCopyDesk","url":"https://propertycopydesk.com"},"datePublished":"2026-03-30T00:00:00+00:00","dateModified":"2026-03-30T00:00:00+00:00","mainEntityOfPage":{"@type":"WebPage","@id":"https://propertycopydesk.com/blog/the-60-day-ai-visibility-roadmap-for-real-estate-agents"},"keywords":["real estate marketing plan","AI visibility roadmap","real estate content marketing plan 2026"]}';

const FAQ_SCHEMA = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can I do this AI visibility roadmap myself?","acceptedAnswer":{"@type":"Answer","text":"Yes, every step is doable without a team. The technical setup (schema, Search Console, GBP) takes 3-4 hours once. The ongoing commitment is content — 2-3 articles per week. Most agents underestimate the writing time and overestimate the technical difficulty."}},{"@type":"Question","name":"How much does it cost to follow this plan?","acceptedAnswer":{"@type":"Answer","text":"The roadmap itself is free. Google Search Console, Bing Webmaster Tools, and Google Business Profile are all free. Schema markup can be added manually (free) or via a plugin ($0-$10/month). The only real cost is time — roughly 4-6 hours per week if you\'re writing your own content."}},{"@type":"Question","name":"What if I don\'t see results after 60 days?","acceptedAnswer":{"@type":"Answer","text":"Check three things: whether your articles are indexed (Search Console), whether your schema is validating (Rich Results Test), and whether your content is specific enough to your market (generic content rarely gets cited regardless of volume). Most 60-day failures trace back to one of these three."}},{"@type":"Question","name":"Should I keep my current marketing while building AI visibility?","acceptedAnswer":{"@type":"Answer","text":"Yes. Don\'t pull paid spend while building organic. This plan doesn\'t require replacing anything — it\'s additive. The goal is to reduce paid dependency over 6-12 months, not overnight."}}]}';

const RoadmapArticle = () => {
  useEffect(() => {
    document.title = "The 60-Day AI Visibility Roadmap for Real Estate Agents | PropertyCopyDesk";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement("meta"); metaDesc.setAttribute("name", "description"); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute("content", "Most real estate marketing plans are built for Google 2019, not AI 2026. Here's the exact 60-day roadmap to get your first AI citation — week by week.");

    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://propertycopydesk.com/blog/the-60-day-ai-visibility-roadmap-for-real-estate-agents");

    // Add JSON-LD schemas
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.textContent = ARTICLE_SCHEMA;
    script1.id = "article-schema-6";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.textContent = FAQ_SCHEMA;
    script2.id = "faq-schema-6";
    document.head.appendChild(script2);

    return () => {
      document.getElementById("article-schema-6")?.remove();
      document.getElementById("faq-schema-6")?.remove();
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
              The 60-Day AI Visibility Roadmap for Real Estate Agents
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-8">
              <span>By Fatih</span>
              <span>·</span>
              <span>March 30, 2026</span>
              <span>·</span>
              <span>10 min read</span>
            </div>

            <div className="aspect-[1200/628] rounded-lg overflow-hidden bg-muted mb-10">
              <img
                src={blogImage}
                alt="The 60-Day AI Visibility Roadmap for Real Estate Agents"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Article Body */}
            <div className="space-y-8">
              {/* Opening */}
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Most real estate marketing plans are built for Google 2019, not AI 2026. Agents have playbooks for things that no longer work the same way. You've built your visibility strategy on Google rankings, third-party portals, and paid ads—all tools that still matter, but none of them account for how AI now intermediates search. ChatGPT, Perplexity, and Gemini are redirecting conversations that used to start on Google. Your clients are asking these platforms questions about real estate before they ever search your name. If AI doesn't know you exist, you don't exist to people using AI search.
              </p>

              {/* Section: Weeks 1-2 Foundation */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Weeks 1-2: Foundation — Build the Infrastructure AI Can Crawl</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The first two weeks aren't about content. They're about making sure AI can find you and understand what your website is about. Most real estate websites have zero infrastructure for AI indexing beyond the default.
                  </p>
                  <p>
                    <strong className="text-foreground">Domain health check.</strong> Start by auditing your current website for crawlability issues. Run your domain through Screaming Frog (free tier) or Google's Mobile-Friendly Test. Check that your robots.txt isn't blocking crawlers, that your site structure is crawlable, and that all pages load without JavaScript errors. If your site is on WordPress, audit your permalink structure and ensure it's set to a clean URL format, not default query parameters. This takes 30 minutes and catches blocking issues before you publish content.
                  </p>
                  <p>
                    <strong className="text-foreground">Google Business Profile optimization.</strong> This is where AI first looks for local information. Claim or verify your GBP if you haven't. Update every field: category should be "Real Estate Agent" (not "Realtor"); business description should be 750+ words covering your markets, specialties, client types, and process; add all 10 photos; verify your address and phone number; enable messaging; set your service area to specific neighborhoods if you work locally. Schedule two posts per week starting immediately—these signal to Google and AI that your business is active. Reviews matter too: reach out to five past clients and ask for a quick review if they're willing. You're creating a complete, trusted local profile that AI platforms can cite.
                  </p>
                  <p>
                    <strong className="text-foreground">Add Organization and LocalBusiness schema to your homepage.</strong> Schema markup is structured data that explicitly tells crawlers what your site is about. Go to schema.org, find the LocalBusiness and Organization templates, and add them to your homepage header. If you're not comfortable with code, use a plugin like Yoast SEO or RankMath (free tier includes schema). This takes 30 minutes and removes ambiguity about who you are and where you operate.
                  </p>
                  <p>
                    <strong className="text-foreground">Submit your sitemap to Google Search Console and Bing Webmaster Tools.</strong> If you don't have Search Console set up, create an account now and verify your domain. Generate a sitemap (most platforms like WordPress do this automatically; check yourdomain.com/sitemap.xml). Submit it to Search Console and Bing. This tells both Google and AI platforms: here's every page I want indexed. Bing is critical because Copilot (Microsoft's AI) uses Bing's index. Don't skip it.
                  </p>
                  <p>
                    <strong className="text-foreground">Run a baseline citation check across ChatGPT, Perplexity, and Gemini.</strong> Before you start building, test your current AI visibility. Search for yourself, your market, and your specialty in all three platforms. Screenshot or note what appears. This is your baseline. You'll compare it to day 60 to measure movement. Most agents will see zero citations at this stage. That's normal. You're starting from a known position.
                  </p>
                </div>
              </section>

              {/* Section: Weeks 3-4 First Content Push */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Weeks 3-4: First Content Push — Build Topical Authority</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Now you publish. Your goal: six focused articles targeting long-tail AI queries specific to your market. Not SEO-tool-generated keywords. Questions your clients actually ask. If you work with first-time homebuyers in Austin, your articles should answer their questions: "How much of a down payment do I need in Austin right now?" "What neighborhoods are best for young professionals in Austin?" "How to negotiate inspection repairs in Texas." "Why are closing costs higher in Austin than Dallas?"
                  </p>
                  <p>
                    <strong className="text-foreground">Target long-tail, intent-driven queries.</strong> A long-tail query is more specific than a head term. Instead of "buying a home" (too broad, too competitive), target "best neighborhoods for growing families in [your city]" or "how to sell my home fast without staging in [your market]." AI models are trained to answer specific questions. Generic articles rank in Google. Specific articles get cited in AI.
                  </p>
                  <p>
                    <strong className="text-foreground">Each article needs Article + FAQPage schema.</strong> Article schema tells AI this is published content with an author and date. FAQPage schema tells AI it can cite specific answers from your article. Most agents publish blog posts. Few add schema. That's your competitive advantage. Use Yoast or RankMath to add schema on publish. Test each with Google Rich Results Test to ensure it validates.
                  </p>
                  <p>
                    <strong className="text-foreground">Create internal links between all six articles.</strong> Don't publish them in isolation. As you write article two, link back to article one. Article three links to one and two. By the time you publish six, they form a cluster. Internal linking tells both Google and AI crawlers that these articles are related and topically clustered. A cluster of six tightly linked articles on a single topic (your market, your specialty) starts building topical authority.
                  </p>
                  <p>
                    <strong className="text-foreground">Submit each URL to Search Console immediately after publishing.</strong> Google says it takes 7-14 days to index new content. Submitting to Search Console accelerates this to hours. Every day you delay publishing a URL without submitting it is a day it's not being considered for AI indexing. In the window you're operating in (60 days), speed matters.
                  </p>
                </div>
              </section>

              {/* Section: Weeks 5-6 Technical Optimization */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Weeks 5-6: Technical Optimization — Validate and Strengthen Your Infrastructure</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Your six articles are published. Now you optimize them. This phase is about making sure everything you built validates, links correctly, and signals topical authority to crawlers.
                  </p>
                  <p>
                    <strong className="text-foreground">Audit internal linking structure.</strong> Go back through all six articles. Every article should link to at least 2-3 other articles in the cluster. Not random links—contextual ones. In an article about "How to Sell Your Home in [Neighborhood]," you might link to "Understanding seller closing costs in [State]" when you mention costs. This reinforces to AI crawlers that your articles are related and clustered around specific topics.
                  </p>
                  <p>
                    <strong className="text-foreground">Validate all schema with Google Rich Results Test.</strong> Go to search.google.com/test/rich-results. Paste each article URL. If schema validates, Google will show you how it renders. If it doesn't, the test will tell you what's wrong. Fix any errors. Invalid schema is worthless. Valid schema is a direct signal to AI crawlers about what your content says.
                  </p>
                  <p>
                    <strong className="text-foreground">Check your Google Business Profile for pending edits or unanswered Q&A.</strong> If you've been driving traffic to your GBP, there may be customer questions waiting. Answer them directly, with specificity. If someone asks "Do you work with new construction?", answer "Yes, I've sold 12 new construction homes in [neighborhood] this year." AI uses GBP Q&A as citation material. Specific answers create more citation opportunities.
                  </p>
                  <p>
                    <strong className="text-foreground">Identify thin content and expand it.</strong> Go through your site. Look for any pages that are under 400 words. Your About page, Service pages, anything that's below that threshold. Thin content doesn't signal authority to AI. Expand those pages. Use your experience—why you specialize in your market, what you've learned, specific transactions. This doesn't have to be blog-length, but it should be substantial enough to establish expertise.
                  </p>
                </div>
              </section>

              {/* Section: Weeks 7-8 Amplification and Tracking */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Weeks 7-8: Amplification and Tracking — Extend Reach and Monitor Progress</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Your foundation is built and your first cluster is published. Now amplify. Distribution doesn't mean paid ads. It means making sure your content finds the people and platforms that matter.
                  </p>
                  <p>
                    <strong className="text-foreground">Distribute on LinkedIn from your personal profile.</strong> This isn't promotion. It's positioning. Share each article on your LinkedIn profile (not just as an ad). Write a short personal note with each share—why you wrote it, what you learned. Put the link in the first comment, not the post body; LinkedIn throttles link-post reach. Your network—other agents, brokers, local business owners—may share or comment, which signals engagement to platforms indexing your content. AI models aren't trained on LinkedIn, but the links, traffic, and authority signals from shares do influence how Google and Bing crawlers treat your domain.
                  </p>
                  <p>
                    <strong className="text-foreground">Reach out to one local publication or blog for a potential mention.</strong> Find a local business journal, neighborhood blog, or real estate publication in your market. Email the editor with a specific angle. Example: "I've been tracking market trends in [neighborhood] for three years and published research on price trends this quarter. Would this be worth a feature?" You're not asking for a backlink—you're suggesting they interview you or cite your research. One credible local mention carries significant weight with both Google and AI crawlers.
                  </p>
                  <p>
                    <strong className="text-foreground">Run citation checks across ChatGPT, Perplexity, and Gemini and record results.</strong> Run the same baseline searches you did in week 2. Are you appearing now? Not yet? Both are fine at this stage. What matters is the direction. Record what you see. If none appear yet, note which queries come close. Adjust your next topics based on what queries returned no answers or weak answers—that's white space you can own.
                  </p>
                  <p>
                    <strong className="text-foreground">Adjust content topics based on what AI misses.</strong> If you searched Perplexity for "best neighborhoods for remote workers in [your city]" and it returned generic answers, that's a gap. Plan your next article to fill it. AI loves specificity. If you can answer a question better than the current top results, you have a real chance of being cited in the next update.
                  </p>
                </div>
              </section>

              {/* Section: What to Expect at Day 60 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">What to Expect at Day 60 — Realistic Outcomes</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    You've followed this roadmap for eight weeks. What does success look like? Be specific about what's realistic so you don't get discouraged.
                  </p>
                  <p>
                    <strong className="text-foreground">1-3 citations in at least one platform.</strong> By day 60, you should see your name, article, or company mentioned in at least one of the three platforms (ChatGPT, Perplexity, Gemini) when searched in a relevant query. This might be a single mention. It might be three. It won't be dozens. But it's a foothold. The first citation is the hardest. After the first, momentum builds.
                  </p>
                  <p>
                    <strong className="text-foreground">Foundation fully built.</strong> Your infrastructure is solid. Google Business Profile is optimized. Schema is validating. Sitemap is submitted. Search Console shows all your articles indexed. This foundation compounds. Agents who skip this stage spend months waiting for traction. You won't be one of them.
                  </p>
                  <p>
                    <strong className="text-foreground">6-12 articles indexed and ranked.</strong> Your six articles are indexed. You may have published six more. All 12 are crawled, indexed, and visible in Google Search. They're not necessarily ranking for competitive terms yet, but they're in the index. That's what matters for AI platforms. AI crawls the index.
                  </p>
                  <p>
                    <strong className="text-foreground">Topical cluster forming.</strong> Your articles are linked together, they address a specific market and specialty, and they're building topical authority. Google and AI platforms are starting to associate your domain with your specialty. This is a structural shift in how search algorithms see you. You're not a generic real estate site. You're an expert in a specific market. That distinction matters enormously for AI citations.
                  </p>
                  <p>
                    <strong className="text-foreground">Not a viral moment—a structural shift.</strong> This isn't a moment of fame. It's a quiet transition. In 60 days, you've positioned yourself to be cited by AI platforms for the next 5-10 years if you sustain it. That's the real value.
                  </p>
                </div>
              </section>

              {/* Section: What Happens After Day 60 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">What Happens After Day 60 — Months 3-6: Compounding Effect</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    The 60-day sprint gets you to the starting line. The real race is what happens next.
                  </p>
                  <p>
                    <strong className="text-foreground">Keep publishing 1-2 articles per week.</strong> You don't need to slow down. If you published 3 per week in weeks 3-4, maintain 2 per week in months 3-6. Your topical cluster grows. Each new article is another node in your network of expertise. Each one links back to the others, compounding topical authority.
                  </p>
                  <p>
                    <strong className="text-foreground">Internal linking compounds.</strong> As you publish more articles, you link them to the existing cluster. A new article about "Staging your home in [neighborhood]" links to your earlier article about "Buyer preferences in [neighborhood]." That article links to your original article about the market. Over six months, you're building a massive internal linking structure. AI crawlers use internal links to understand topical relationships. Your site starts looking like an encyclopedia of your market, not a collection of random posts.
                  </p>
                  <p>
                    <strong className="text-foreground">External citations start appearing.</strong> This is where most agents quit too early. Citations don't appear on day 45. They typically start appearing between day 60 and day 120. If you quit at day 60, you never see them. If you continue, they'll appear. When they do, it's because you've built topical authority that AI platforms want to cite. Once they start, frequency increases. Agents I've worked with report doubling citations every 90 days once they hit critical mass (20-30 articles, solid schema, consistent publishing).
                  </p>
                  <p>
                    <strong className="text-foreground">Citation frequency increases.</strong> By month 6, you're not getting one citation per query. You're getting multiple citations across different queries. You're being recommended to different types of buyers and sellers. You're showing up as a source for market analysis, not just buyer representation. This is compounding visibility.
                  </p>
                  <p>
                    <strong className="text-foreground">The agents who stop at day 60 lose the compounding effect.</strong> This is the most important sentence in this roadmap. The 60-day window is the sprint. But the real value accrues in months 3-12. Agents who treat this as a project (60 days, done) never see the payoff. Agents who treat it as a system (ongoing publishing, consistent improvement, long-term play) see exponential returns. Pick which one you want to be before you start.
                  </p>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "Can I do this AI visibility roadmap myself?",
                      a: "Yes, every step is doable without a team. The technical setup (schema, Search Console, GBP) takes 3-4 hours once. The ongoing commitment is content — 2-3 articles per week. Most agents underestimate the writing time and overestimate the technical difficulty. If you can spend 4-6 hours per week on this for eight weeks, you can execute this roadmap. The bottleneck is usually consistency, not complexity."
                    },
                    {
                      q: "How much does it cost to follow this plan?",
                      a: "The roadmap itself is free. Google Search Console, Bing Webmaster Tools, and Google Business Profile are all free. Schema markup can be added manually (free) or via a plugin ($0-$10/month). The only real cost is time — roughly 4-6 hours per week if you're writing your own content. If you outsource writing to a freelancer, budget $100-$300 per article, so $1,200-$1,800 for the first sprint. Tools like Yoast or RankMath are optional (paid versions $15-$20/month) but free tiers cover schema and optimization."
                    },
                    {
                      q: "What if I don't see results after 60 days?",
                      a: "Check three things: whether your articles are indexed (Search Console), whether your schema is validating (Rich Results Test), and whether your content is specific enough to your market (generic content rarely gets cited regardless of volume). Most 60-day failures trace back to one of these three. If all three check out and you still see zero citations, your content likely isn't addressing queries AI is actually being asked. Adjust your topics toward questions your clients actually ask, not keywords a tool suggests."
                    },
                    {
                      q: "Should I keep my current marketing while building AI visibility?",
                      a: "Yes. Don't pull paid spend while building organic. This plan doesn't require replacing anything — it's additive. The goal is to reduce paid dependency over 6-12 months, not overnight. Your Google Ads, Facebook ads, and other paid channels continue working. AI visibility is an insurance policy and long-term play. As citations increase and organic AI referrals pick up, you can reduce paid spend. But don't starve paid channels to feed this strategy. Both matter."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="border-b border-border pb-6 last:border-0">
                      <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                      <p className="font-sans text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Articles Section */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Related Reading</h2>
                <div className="space-y-3 font-sans text-muted-foreground">
                  <p>
                    This roadmap gives you the framework. Here are the deeper dives on specific pieces:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <Link to="/blog/how-real-estate-agents-get-cited-by-chatgpt" className="text-accent hover:underline font-medium">How Real Estate Agents Get Cited by ChatGPT</Link> — a complete breakdown of what makes agents citable and how AI decides which sources to recommend.
                    </li>
                    <li>
                      • <Link to="/blog/why-your-real-estate-website-doesnt-show-up-in-chatgpt" className="text-accent hover:underline font-medium">Why Your Real Estate Website Doesn't Show Up in ChatGPT</Link> — diagnostic questions to pinpoint which part of the foundation you're missing.
                    </li>
                    <li>
                      • <Link to="/blog/the-real-estate-agents-guide-to-ranking-in-perplexity-chatgpt-and-gemini" className="text-accent hover:underline font-medium">The Real Estate Agent's Guide to Ranking in Perplexity, ChatGPT, and Gemini</Link> — platform-specific optimization details for each AI platform.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Bottom Line */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">The Bottom Line</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    This roadmap is not a guess. It's a system that agents in 6 different markets have executed with measurable results. The agents who see citations by month 3 follow the sequence. The agents who see nothing after 60 days either skipped steps (no schema, no GBP optimization, thin content) or quit before citations started appearing (which is after day 60, not before).
                  </p>
                  <p>
                    You have a window. Most markets still have open territory. In 12 months, the agents who start this roadmap now will be the only ones visible in AI search in their markets. Competitors will be scrambling to catch up. Your choice is whether you want to be first or late.
                  </p>
                  <p>
                    If you want this done without the time commitment, <Link to="/" className="text-accent hover:underline font-medium">PropertyCopyDesk</Link> handles the full 60-day build, including article writing, schema implementation, GBP optimization, and citation tracking for one agent per market.
                  </p>
                </div>
              </section>

              {/* CTA Box */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
                <p className="font-serif text-xl text-foreground mb-3">Ready to execute this roadmap?</p>
                <p className="font-sans text-muted-foreground mb-6">We handle the full build for agents ready to own their market in AI search. Limited to one agent per market.</p>
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
                  Published: March 30, 2026 | Author: Fatih, PropertyCopyDesk
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

export default RoadmapArticle;