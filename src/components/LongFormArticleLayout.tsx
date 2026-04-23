import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import ArticleTOC, { slugifyHeading } from "@/components/ArticleTOC";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

export interface ArticleSection {
  heading: string;
  /** Either an array of paragraph strings or pre-rendered React content. */
  paragraphs?: (string | ReactNode)[];
  body?: ReactNode;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface LongFormArticleLayoutProps {
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  canonicalSlug: string;
  datePublished: string; // ISO yyyy-mm-dd
  dateModified?: string; // ISO yyyy-mm-dd
  displayDate: string; // human "March 15, 2026"
  author?: string;
  readTime: number;
  heroImage: string;
  heroAlt?: string;
  intro: ReactNode;
  sections: ArticleSection[];
  faqs?: FAQItem[];
  closingHeading?: string;
  closing?: ReactNode;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  schemaId?: string;
  keywords?: string[];
}

const LongFormArticleLayout = ({
  category,
  title,
  metaTitle,
  metaDescription,
  canonicalSlug,
  datePublished,
  dateModified,
  displayDate,
  author = "Fatih",
  readTime,
  heroImage,
  heroAlt,
  intro,
  sections,
  faqs,
  closingHeading = "The Bottom Line",
  closing,
  ctaTitle = "Want this done for you?",
  ctaSubtitle = "We build AI visibility for one agent per market. See if yours is available.",
  ctaButtonText = "Get Your Free AI Visibility Check",
  schemaId,
  keywords = [],
}: LongFormArticleLayoutProps) => {
  const canonicalUrl = `https://propertycopydesk.com/blog/${canonicalSlug}`;
  const tocItems = sections.map((s) => ({
    id: slugifyHeading(s.heading),
    title: s.heading,
  }));

  useEffect(() => {
    document.title = metaTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: title,
      description: metaDescription,
      author: { "@type": "Person", name: author, url: "https://propertycopydesk.com" },
      publisher: {
        "@type": "Organization",
        name: "PropertyCopyDesk",
        url: "https://propertycopydesk.com",
      },
      datePublished: `${datePublished}T00:00:00+00:00`,
      dateModified: `${(dateModified ?? datePublished)}T00:00:00+00:00`,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      keywords,
    };

    const idA = `article-schema-${schemaId ?? canonicalSlug}`;
    document.getElementById(idA)?.remove();
    const scriptA = document.createElement("script");
    scriptA.type = "application/ld+json";
    scriptA.id = idA;
    scriptA.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(scriptA);

    let idF: string | null = null;
    if (faqs && faqs.length) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      };
      idF = `faq-schema-${schemaId ?? canonicalSlug}`;
      document.getElementById(idF)?.remove();
      const scriptF = document.createElement("script");
      scriptF.type = "application/ld+json";
      scriptF.id = idF;
      scriptF.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(scriptF);
    }

    return () => {
      document.getElementById(idA)?.remove();
      if (idF) document.getElementById(idF)?.remove();
    };
  }, [
    metaTitle,
    metaDescription,
    canonicalUrl,
    title,
    author,
    datePublished,
    dateModified,
    schemaId,
    canonicalSlug,
    faqs,
    keywords,
  ]);

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
              <Link
                to="/"
                className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
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
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-sans text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-sans rounded-full mb-4">
              {category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-8">
              <span>By {author}</span>
              <span>·</span>
              <span>{displayDate}</span>
              <span>·</span>
              <span>{readTime} min read</span>
            </div>

            <div className="aspect-[1200/628] rounded-lg overflow-hidden bg-muted mb-10">
              <img
                src={heroImage}
                alt={heroAlt ?? title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="space-y-8">
              <ArticleTOC items={tocItems} />

              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                {intro}
              </p>

              {sections.map((section) => {
                const id = slugifyHeading(section.heading);
                return (
                  <section key={id} id={id}>
                    <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                      {section.heading}
                    </h2>
                    <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                      {section.body
                        ? section.body
                        : section.paragraphs?.map((p, i) =>
                            typeof p === "string" ? <p key={i}>{p}</p> : <p key={i}>{p}</p>,
                          )}
                    </div>
                  </section>
                );
              })}

              {faqs && faqs.length > 0 && (
                <section id="frequently-asked-questions">
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {faqs.map((f, i) => (
                      <div
                        key={i}
                        className="border-b border-border pb-6 last:border-0"
                      >
                        <h3 className="font-serif text-lg text-foreground mb-2">
                          {f.q}
                        </h3>
                        <p className="font-sans text-muted-foreground leading-relaxed">
                          {f.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {closing && (
                <section id={slugifyHeading(closingHeading)}>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                    {closingHeading}
                  </h2>
                  <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
                    {closing}
                  </div>
                </section>
              )}

              {/* CTA Box */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
                <p className="font-serif text-xl text-foreground mb-3">{ctaTitle}</p>
                <p className="font-sans text-muted-foreground mb-6">{ctaSubtitle}</p>
                <Button
                  onClick={() => window.open(BOOKING_URL, "_blank")}
                  className="btn-gold-shine text-base py-3 px-8 rounded-lg font-semibold"
                >
                  {ctaButtonText}
                </Button>
              </div>

              {/* Footer line */}
              <div className="border-t border-border pt-6 mt-8">
                <p className="text-sm text-muted-foreground font-sans">
                  Published: {displayDate} | Author: {author}, PropertyCopyDesk
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

export default LongFormArticleLayout;
