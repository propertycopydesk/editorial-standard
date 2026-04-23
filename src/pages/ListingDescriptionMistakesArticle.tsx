import React, { useEffect } from "react";

const ListingDescriptionMistakesArticle: React.FC = () => {
  const title = "Listing Description Mistakes That Kill Buyer Interest | PropertyCopyDesk";
  const description =
    "Five listing description mistakes reduce trust, clicks, and conversion quality. Learn practical fixes with examples.";
  const canonicalUrl = "https://propertycopydesk.com/blog/listing-description-mistakes";
  const datePublished = "2025-12-27T00:00:00+00:00";
  const dateModified = "2026-04-22T00:00:00+00:00";

  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: "Listing Description Mistakes That Kill Buyer Interest",
      description,
      author: { "@type": "Person", name: "Fatih Can" },
      publisher: { "@type": "Organization", name: "PropertyCopyDesk", url: "https://propertycopydesk.com" },
      datePublished,
      dateModified,
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      keywords: ["listing description mistakes", "real estate copy", "property marketing"],
    };

    const scriptId = "article-schema-listing-mistakes";
    document.getElementById(scriptId)?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => document.getElementById(scriptId)?.remove();
  }, []);

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article>
        <header className="mb-10">
          <div className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-3">Listing Copy</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            The Five Listing Description Mistakes That Kill Buyer Interest
          </h1>
          <p className="text-gray-500 text-sm">By Fatih Can · December 27, 2025 · 7 min read</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Most listing copy underperforms for predictable reasons. The good news is that these issues are fixable.
            If your descriptions are clear but not converting, you are likely making one of the five mistakes below.
          </p>

          <h2>Mistake 1: Writing a Spec Sheet Instead of a Narrative</h2>
          <p>
            Data fields already list rooms and dimensions. Your copy should explain why those details matter in real life.
            Describe outcomes, not just inputs.
          </p>

          <h2>Mistake 2: Using Empty Adjectives</h2>
          <p>
            Words like "stunning," "charming," and "must-see" are overused and low-trust when unsupported.
            Replace generic adjectives with specific proof and buyer-relevant context.
          </p>

          <h2>Mistake 3: Leading with Features, Not Benefits</h2>
          <p>
            Features matter, but benefits convert. Instead of listing materials, explain the experience and practical upside.
            Buyers need to visualize what ownership improves.
          </p>

          <h2>Mistake 4: Tone Mismatch</h2>
          <p>
            Starter-home copy should not sound like luxury-brand language. Luxury listings should not sound generic.
            Effective copy adapts tone to property type, buyer profile, and market expectations.
          </p>

          <h2>Mistake 5: Weak or Missing Next Step</h2>
          <p>
            Many descriptions end without direction. Tell the reader exactly what to do next and why timing matters.
            A clear call-to-action improves inquiry volume and quality.
          </p>

          <section className="mt-10">
            <h2>Frequently Asked Questions</h2>
            <h3>How long should a listing description be?</h3>
            <p>Long enough to communicate positioning clearly. For most listings, 180-300 words of focused copy is effective.</p>
            <h3>Can AI help avoid these mistakes?</h3>
            <p>Yes, if your prompt and review process enforce specificity, tone fit, and compliance-safe language.</p>
            <h3>What should I fix first?</h3>
            <p>Fix the opening and CTA first. These two areas usually create the biggest performance lift quickly.</p>
          </section>
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Want professional listing copy support?</h3>
          <p className="text-gray-700 mb-4">
            We help agents remove conversion-killing mistakes and build repeatable listing systems.
          </p>
          <a
            href="https://cal.com/propertycopydesk/auditcall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Book Your Free Audit
          </a>
        </div>
      </article>
    </main>
  );
};

export default ListingDescriptionMistakesArticle;