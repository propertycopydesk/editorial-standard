import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Share2, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/BlogPostCard";
import LeadMagnetBox from "@/components/LeadMagnetBox";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Post Not Found</h1>
          <Button variant="editorial" asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  const tableOfContents = post.sections.map(s => ({ title: s.title, id: s.title.toLowerCase().replace(/\s+/g, '-') }));

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <nav className="container-editorial py-4 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-serif text-lg font-semibold tracking-wide text-foreground">PROPERTY</span>
            <div className="w-10 h-px bg-accent my-0.5" />
            <span className="font-serif text-xs tracking-[0.2em] text-foreground">COPY DESK</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-sans text-muted-foreground hover:text-foreground">Home</Link>
            <Link to="/blog" className="text-sm font-sans text-foreground font-medium">Blog</Link>
            <Link to="/consulting" className="text-sm font-sans text-muted-foreground hover:text-foreground">Consulting</Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-16">
        <article className="container-editorial">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="aspect-[2/1] bg-muted rounded-lg overflow-hidden mb-8">
            <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-sans rounded-full mb-4">{post.category}</span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{formattedDate}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime} min read</span>
            </div>

            {/* Table of Contents */}
            <div className="bg-muted rounded-lg p-6 mb-8">
              <h3 className="font-serif text-lg text-foreground mb-3">Table of Contents</h3>
              <ul className="space-y-2">
                {tableOfContents.map((item, i) => (
                  <li key={i}><a href={`#${item.id}`} className="text-muted-foreground hover:text-accent font-sans text-sm">{item.title}</a></li>
                ))}
              </ul>
            </div>

            {/* Content */}
            {post.sections.map((section, i) => (
              <section key={i} id={section.title.toLowerCase().replace(/\s+/g, '-')} className="mb-8">
                <h2 className="font-serif text-2xl text-foreground mb-4">{section.title}</h2>
                <div className="prose prose-lg max-w-none font-sans text-muted-foreground whitespace-pre-line">{section.content}</div>
                {i === 1 && (
                  <div className="my-8 bg-accent/10 border border-accent/20 rounded-lg p-6">
                    <p className="font-serif text-lg text-foreground mb-3">Want this done for you?</p>
                    <Button variant="editorial" asChild><Link to="/consulting">Submit a listing for $75</Link></Button>
                  </div>
                )}
              </section>
            ))}

            {/* Bottom CTA */}
            <LeadMagnetBox title={post.cta.text} buttonText={post.cta.buttonText} className="my-12" />

            {/* Social Share */}
            <div className="flex items-center gap-4 py-6 border-t border-border">
              <span className="text-sm text-muted-foreground">Share:</span>
              <button className="p-2 hover:bg-muted rounded-lg"><Twitter className="w-5 h-5 text-muted-foreground" /></button>
              <button className="p-2 hover:bg-muted rounded-lg"><Linkedin className="w-5 h-5 text-muted-foreground" /></button>
              <button className="p-2 hover:bg-muted rounded-lg"><Facebook className="w-5 h-5 text-muted-foreground" /></button>
            </div>

            {/* Author Bio */}
            <div className="bg-muted rounded-lg p-6 my-8">
              <h3 className="font-serif text-lg text-foreground mb-2">About the Author</h3>
              <p className="text-muted-foreground font-sans">Fatih Can is the founder of PropertyCopyDesk, bringing together expertise in English Literature, property investment, and marketing to revolutionize real estate copywriting.</p>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="container-editorial mt-16">
            <h2 className="font-serif text-2xl text-foreground mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(p => <BlogPostCard key={p.id} post={p} />)}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default BlogPost;
