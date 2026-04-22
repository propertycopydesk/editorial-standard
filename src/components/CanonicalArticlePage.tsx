import { useEffect } from "react";
import { getPostBySlug } from "@/data/blogPosts";

interface CanonicalArticlePageProps {
  slug: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
}

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const CanonicalArticlePage = ({
  slug,
  datePublished,
  dateModified,
  authorName = "Fatih Can",
}: CanonicalArticlePageProps) => {
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) return;

    document.title = `${post.title} | PropertyCopyDesk`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", post.metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://propertycopydesk.com/blog/${slug}`);

    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `https://propertycopydesk.com/blog/${slug}#article`,
      headline: post.title,
      description: post.metaDescription,
      author: { "@type": "Person", name: authorName },
      publisher: {
        "@type": "Organization",
        name: "PropertyCopyDesk",
        url: "https://propertycopydesk.com",
      },
      datePublished,
      dateModified,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://propertycopydesk.com/blog/${slug}`,
      },
      keywords: [post.targetKeyword, post.category],
    };

    const scriptId = `article-schema-${slug}`;
    document.getElementById(scriptId)?.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [post, slug, datePublished, dateModified, authorName]);

  if (!post) {
    return <main className="max-w-3xl mx-auto px-4 py-12">Article not found.</main>;
  }

  const formattedDate = new Date(datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <article>
        <header className="mb-10">
          <div className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-3">{post.category}</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
          <p className="text-gray-500 text-sm">By {authorName} · {formattedDate} · {post.readTime} min read</p>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>{post.excerpt}</p>
          {post.sections.map((section) => (
            <section key={section.title} className="mt-8">
              <h2>{section.title}</h2>
              <p className="whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{post.cta.text}</h3>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            {post.cta.buttonText}
          </a>
        </div>
      </article>
    </main>
  );
};

export default CanonicalArticlePage;
