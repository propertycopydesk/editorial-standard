// NOTE: Upload blog-schema.webp to src/assets/ before deploying.

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ArticleTOC from "@/components/ArticleTOC";
import blogImage from "@/assets/blog-schema.webp";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const ARTICLE_SCHEMA = '{"@context":"https://schema.org","@type":"Article","headline":"Schema Markup for Real Estate: The Missing Piece in Your AI Strategy","description":"Schema markup is how you translate your website into a language AI can read. Here are the 4 schema types every real estate agent needs and exactly how to add them.","image":"https://propertycopydesk.com/blog-schema.webp","author":{"@type":"Person","name":"Fatih","url":"https://propertycopydesk.com"},"publisher":{"@type":"Organization","name":"PropertyCopyDesk","url":"https://propertycopydesk.com"},"datePublished":"2026-04-05T00:00:00+00:00","dateModified":"2026-04-22T00:00:00+00:00","mainEntityOfPage":{"@type":"WebPage","@id":"https://propertycopydesk.com/blog/schema-markup-for-real-estate-the-missing-piece-in-your-ai-strategy"},"keywords":["schema markup real estate","structured data real estate website","JSON-LD real estate"]}';

const FAQ_SCHEMA = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do I need a developer to add schema markup?","acceptedAnswer":{"@type":"Answer","text":"No. The JSON-LD format is readable without coding knowledge. If you use WordPress, a plugin like Rank Math handles most schema automatically. If you have a custom site, you\'ll need to paste a script tag into your page\'s head section — a task most non-developers can follow with a copy-paste guide."}},{"@type":"Question","name":"Does schema markup directly improve AI citations?","acceptedAnswer":{"@type":"Answer","text":"Not directly. Schema doesn\'t guarantee citation. What it does is remove ambiguity — it tells AI crawlers exactly what type of content you have, who wrote it, and what questions it answers. Agents with proper schema are more likely to be cited because their content is easier for AI to classify and trust."}},{"@type":"Question","name":"How often should I update my schema markup?","acceptedAnswer":{"@type":"Answer","text":"Update dateModified whenever you revise an article. Review your LocalBusiness schema every 6 months to ensure phone, address, and description are current. FAQPage schema should be updated whenever you add or change FAQ content on a page."}},{"@type":"Question","name":"What\'s the difference between schema and meta tags?","acceptedAnswer":{"@type":"Answer","text":"Meta tags (title, description, og:image) are read by browsers and social platforms for display purposes. Schema markup is read by search engines and AI crawlers to understand content structure and meaning. You need both. Meta tags control how your page appears in search results and link previews. Schema controls how AI systems classify and cite your content."}}]}';

const SchemaArticle = () => {
  useEffect(() => {
    document.title = "Schema Markup for Real Estate: The Missing Piece in Your AI Strategy | PropertyCopyDesk";

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) { metaDesc = document.createElement("meta"); metaDesc.setAttribute("name", "description"); document.head.appendChild(metaDesc); }
    metaDesc.setAttribute("content", "Schema markup is how you translate your website into a language AI can read. Here are the 4 schema types every real estate agent needs and exactly how to add them.");

    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://propertycopydesk.com/blog/schema-markup-for-real-estate-the-missing-piece-in-your-ai-strategy");

    // Add JSON-LD schemas
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.textContent = ARTICLE_SCHEMA;
    script1.id = "article-schema-8";
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.textContent = FAQ_SCHEMA;
    script2.id = "faq-schema-8";
    document.head.appendChild(script2);

    return () => {
      document.getElementById("article-schema-8")?.remove();
      document.getElementById("faq-schema-8")?.remove();
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
              Technical
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              Schema Markup for Real Estate: The Missing Piece in Your AI Strategy
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-8">
              <span>By Fatih</span>
              <span>·</span>
              <span>April 5, 2026</span>
              <span>·</span>
              <span>8 min read</span>
            </div>

            <div className="aspect-[1200/628] rounded-lg overflow-hidden bg-muted mb-10">
              <img
                src={blogImage}
                alt="Schema Markup for Real Estate: The Missing Piece in Your AI Strategy"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Article Body */}
            <div className="space-y-8">
              <ArticleTOC items={[
                { id: "what-schema-markup-is-and-why-ai-cares-about-it", title: "What Schema Markup Is (and Why AI Cares About It)" },
                { id: "the-4-schema-types-every-real-estate-agent-needs", title: "The 4 Schema Types Every Real Estate Agent Needs" },
                { id: "how-to-add-schema-to-your-website", title: "How to Add Schema to Your Website" },
                { id: "how-to-test-your-schema-markup", title: "How to Test Your Schema Markup" },
                { id: "common-schema-mistakes-that-hurt-your-ai-visibility", title: "Common Schema Mistakes That Hurt Your AI Visibility" },
                { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
                { id: "the-bottom-line", title: "The Bottom Line" },
              ]} />

              {/* Opening */}
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Schema markup is how you translate your website into a language AI can read. Most agents have never heard of it. The ones who show up in AI search consistently have it on every page.
              </p>

              {/* Section: What Schema Markup Is */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4" id="what-schema-markup-is-and-why-ai-cares-about-it">What Schema Markup Is (and Why AI Cares About It)</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Schema is structured data embedded in your page's HTML as JSON-LD that explicitly tells crawlers what your content is. Without it, crawlers guess. With it, you're declaring exactly what type of content this is, who wrote it, what questions it answers.
                  </p>
                  <p>
                    Think of schema markup as a translator between human language and machine language. A crawler reading your blog post might understand "this is about selling homes in Austin," but schema markup removes that ambiguity entirely. It says: this is an Article. The author is Fatih. It was published on April 5, 2026. The main entity of the page is a WebPage at this URL. It answers these FAQs.
                  </p>
                  <p>
                    AI systems prefer low-ambiguity signals. Schema reduces ambiguity. When you use the correct schema type and fill in all required fields accurately, you're making it dramatically easier for AI crawlers to index, classify, and trust your content. Without schema, an AI crawler has to make inferences. With schema, you're telling it exactly what you want it to know.
                  </p>
                  <p>
                    The difference in AI visibility between agents with proper schema markup on every page and agents without it is measurable. We've seen agents jump from zero AI citations to multiple citations per week simply by adding Article schema to their blog posts and FAQPage schema to articles with FAQ sections.
                  </p>
                </div>
              </section>

              {/* Section: 4 Schema Types */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4" id="the-4-schema-types-every-real-estate-agent-needs">The 4 Schema Types Every Real Estate Agent Needs</h2>
                <div className="space-y-8">

                  {/* RealEstateAgent Schema */}
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">1. RealEstateAgent Schema (For Your Homepage or About Page)</h3>
                    <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                      This schema tells AI who you are, where you operate, how to contact you, and what you specialize in. It's your identity card in the AI index. Add this once to your homepage or About page. Update it every 6 months to ensure all contact details are current.
                    </p>
                    <pre className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                      <code>{`{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Your Name",
  "url": "https://yoursite.com",
  "telephone": "+1-555-000-0000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Your City",
    "addressRegion": "TX",
    "postalCode": "00000"
  },
  "description": "Real estate agent specializing in [your niche] in [your market]",
  "areaServed": "Your City, TX"
}`}</code>
                    </pre>
                  </div>

                  {/* Article Schema */}
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">2. Article Schema (For Every Blog Post)</h3>
                    <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                      Add this to every article you publish. It tells AI crawlers that the page is an article, who wrote it, when it was published, what the headline is, and which image represents it. AI systems use Article schema to understand whether your content is original, authoritative, and relevant to the query they're processing.
                    </p>
                    <pre className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                      <code>{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  "author": {
    "@type": "Person",
    "name": "Your Name",
    "url": "https://yoursite.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Your Brand",
    "url": "https://yoursite.com"
  },
  "datePublished": "2026-04-05T00:00:00+00:00",
  "dateModified": "2026-04-05T00:00:00+00:00",
  "image": "https://yoursite.com/your-image.webp",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://yoursite.com/your-article-url"
  }
}`}</code>
                    </pre>
                  </div>

                  {/* FAQPage Schema */}
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">3. FAQPage Schema (For Any Page with FAQ Sections)</h3>
                    <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                      If your article has an FAQ section, add FAQPage schema. This is critical. FAQPage schema tells AI what questions your content answers. AI systems use this data directly. When someone asks ChatGPT "Do I need a real estate agent?" and your page has FAQPage schema with that exact question, your content is more likely to be cited as the source for the answer.
                    </p>
                    <pre className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                      <code>{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Your question here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your answer here."
      }
    },
    {
      "@type": "Question",
      "name": "Another question here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your detailed answer here."
      }
    }
  ]
}`}</code>
                    </pre>
                  </div>

                  {/* Person Schema */}
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">4. Person Schema (Establish Author Identity)</h3>
                    <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                      This schema establishes you as a person with expertise in real estate. Add it once across your site (preferably in your site's header or footer via a shared component). It tells AI that you are a real estate professional with specific knowledge areas. When combined with Article schema on your blog posts, it builds a strong author identity signal.
                    </p>
                    <pre className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                      <code>{`{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yoursite.com",
  "jobTitle": "Real Estate Agent",
  "worksFor": {
    "@type": "Organization",
    "name": "Your Brokerage"
  },
  "knowsAbout": [
    "real estate",
    "your market",
    "your specialty"
  ]
}`}</code>
                    </pre>
                  </div>
                </div>
              </section>

              {/* Section: How to Add Schema */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4" id="how-to-add-schema-to-your-website">How to Add Schema to Your Website</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Option A: WordPress</h3>
                    <p>
                      Use Rank Math or Yoast. Both plugins generate schema automatically for posts based on your title, excerpt, and featured image. For LocalBusiness and Person schema, add them once in the plugin settings under "Schema." You don't touch JSON manually. The plugin handles it.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Option B: Manual JSON-LD</h3>
                    <p>
                      Paste the schema script tag directly into your page's &lt;head&gt; section. This is what PropertyCopyDesk articles do. You create a &lt;script&gt; tag with type="application/ld+json", paste the JSON content inside, give it an ID, and add it to the head. Most non-developers can follow a copy-paste guide for this.
                    </p>
                    <p className="mt-3">
                      Example: Create a file called schema.html with the JSON-LD code above, then include it in your page template. Update the values for each page (headline, datePublished, image, etc.) and you're done.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Option C: Custom-Built Site (React/Vite)</h3>
                    <p>
                      Inject schema via useEffect as a script tag, then clean up on unmount. This gives you full control over every field. Each page component creates its own schema objects (as strings), then injects them into the document head. You can conditionally add or remove schema based on page type. This is the most flexible approach but requires a developer familiar with React.
                    </p>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded p-4 mt-5">
                    <p className="text-sm">
                      <strong className="text-foreground">Pro tip:</strong> Whichever method you choose, test every schema implementation using Google's Rich Results Test. It catches errors and missing required fields before you publish. A schema error reduces its effectiveness to near zero.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: How to Test */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4" id="how-to-test-your-schema-markup">How to Test Your Schema Markup</h2>
                <div className="space-y-5 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Never publish schema without testing. A broken schema implementation wastes your effort.
                  </p>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Google Rich Results Test</h3>
                    <p>
                      Go to <strong>search.google.com/test/rich-results</strong>. Paste your article URL or copy-paste your JSON-LD code directly into the tool. Google will validate the schema, show you any errors or warnings, and display how your content will appear in Google's rich results carousel (if eligible). This is the gold standard test. If it passes here, your schema is working.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Schema.org Validator</h3>
                    <p>
                      Go to <strong>validator.schema.org</strong>. Paste your URL. This tool is more comprehensive than Google's. It catches field-level errors and tells you exactly which properties are required vs. optional for your schema type. It's slower but more thorough.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What to Look For</h3>
                    <p>
                      You're checking three things: (1) No errors. Errors mean the schema is invalid or malformed. (2) All required fields are present. Missing required fields reduce schema effectiveness. (3) The @type is correct. If you labeled something as "Article" when it should be "FAQPage," crawlers will misclassify your content.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section: Common Mistakes */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4" id="common-schema-mistakes-that-hurt-your-ai-visibility">Common Schema Mistakes That Hurt Your AI Visibility</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Missing the image field in Article schema</h3>
                    <p>
                      The image field is required for Google Rich Results. Without it, your article won't display with a thumbnail in Google's rich results carousel. Always include a URL to a high-quality image (at least 1200x628px).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Using the wrong @type</h3>
                    <p>
                      Many agents use "Organization" for their homepage when they should use "RealEstateAgent" or "Person." Using the wrong type tells AI crawlers to classify your site as a generic business, not a real estate expert. Choose the correct schema type for each page.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Not having FAQPage schema on articles with FAQ sections</h3>
                    <p>
                      This is the most common miss. You write an FAQ section, but don't add FAQPage schema. Your content has the answers, but crawlers don't understand that it's structured as Q&A. Always pair FAQ sections with FAQPage schema. This is one of the highest-leverage schema additions for AI citations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Outdated dateModified</h3>
                    <p>
                      If you update an article but don't update the dateModified field in Article schema, crawlers think the content is stale. Update dateModified to today's date whenever you revise an article, even if it's just a small change. This signals freshness.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Duplicate schema IDs on the same page</h3>
                    <p>
                      If you add multiple schema scripts to a single page, give each a unique ID. If two schema elements have the same ID, browsers and crawlers will only read the first one. Check your page source to ensure no ID duplicates.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Generic description fields</h3>
                    <p>
                      In RealEstateAgent schema, write a specific description that mentions your market and specialty. Don't write "I'm a real estate agent." Write "I'm a luxury home specialist in Austin, Texas, with 8 years selling properties above $2M in the Hill Country." Specificity helps AI systems match you to relevant queries.
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6" id="frequently-asked-questions">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {[
                    {
                      q: "Do I need a developer to add schema markup?",
                      a: "No. The JSON-LD format is readable without coding knowledge. If you use WordPress, a plugin like Rank Math handles most schema automatically. If you have a custom site, you'll need to paste a script tag into your page's head section — a task most non-developers can follow with a copy-paste guide."
                    },
                    {
                      q: "Does schema markup directly improve AI citations?",
                      a: "Not directly. Schema doesn't guarantee citation. What it does is remove ambiguity — it tells AI crawlers exactly what type of content you have, who wrote it, and what questions it answers. Agents with proper schema are more likely to be cited because their content is easier for AI to classify and trust."
                    },
                    {
                      q: "How often should I update my schema markup?",
                      a: "Update dateModified whenever you revise an article. Review your RealEstateAgent schema every 6 months to ensure phone, address, and description are current. FAQPage schema should be updated whenever you add or change FAQ content on a page."
                    },
                    {
                      q: "What's the difference between schema and meta tags?",
                      a: "Meta tags (title, description, og:image) are read by browsers and social platforms for display purposes. Schema markup is read by search engines and AI crawlers to understand content structure and meaning. You need both. Meta tags control how your page appears in search results and link previews. Schema controls how AI systems classify and cite your content."
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
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4" id="the-bottom-line">The Bottom Line</h2>
                <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                  <p>
                    Schema markup is the difference between your website being an opaque content blob to AI crawlers and being a clearly structured, authoritative source. Most real estate websites have zero schema. That's your competitive advantage. Adding schema to your 20-30 published articles gives you an edge over 95% of agents in your market.
                  </p>
                  <p>
                    Start with Article schema on your blog posts and FAQPage schema on any posts with FAQ sections. Add RealEstateAgent schema to your homepage. Test everything with Google's Rich Results Test. Update dateModified whenever you touch an article. That's the foundation.
                  </p>
                  <p>
                    The agents showing up in AI search now built their infrastructure when most competitors were still focused on MLS listings and Zillow ads. If you implement schema now, you'll be ahead of the curve for the next 12-18 months.
                  </p>
                  <p>
                    For more on building AI visibility, read our guides on <Link to="/blog/how-real-estate-agents-get-cited-by-chatgpt" className="text-accent hover:underline font-medium">how real estate agents get cited by ChatGPT</Link>, <Link to="/blog/the-real-estate-agents-guide-to-ranking-in-perplexity-chatgpt-and-gemini" className="text-accent hover:underline font-medium">ranking in Perplexity, ChatGPT, and Gemini</Link>, and our <Link to="/blog/the-60-day-ai-visibility-roadmap-for-real-estate-agents" className="text-accent hover:underline font-medium">60-day AI visibility roadmap</Link>.
                  </p>
                </div>
              </section>

              {/* CTA Box */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
                <p className="font-serif text-xl text-foreground mb-3">Want this implemented on your site?</p>
                <p className="font-sans text-muted-foreground mb-6">PropertyCopyDesk handles schema implementation, testing, and deployment as part of our full AI visibility build.</p>
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
                  Published: April 5, 2026 | Author: Fatih, PropertyCopyDesk
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

export default SchemaArticle;