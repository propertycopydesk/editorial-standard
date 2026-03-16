import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogPostCard from "@/components/BlogPostCard";
import LeadMagnetBox from "@/components/LeadMagnetBox";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { 
  blogPosts, 
  categories, 
  getFeaturedPosts, 
  getRecentPosts, 
  getPopularPosts,
  getPostsByCategory 
} from "@/data/blogPosts";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(0);

  const filteredPosts = useMemo(() => {
    let posts = getPostsByCategory(selectedCategory);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.targetKeyword.toLowerCase().includes(query)
      );
    }
    
    return posts;
  }, [selectedCategory, searchQuery]);

  const featuredPosts = getFeaturedPosts(3);
  const recentPosts = getRecentPosts(5);
  const popularPosts = getPopularPosts(5);

  return (
    <div className="min-h-screen bg-background grid-pattern">
      {/* Navigation - matching landing page */}
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

            <div className="hidden md:flex items-center gap-4 md:gap-6">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/blog" className="text-sm text-foreground font-medium">
                Blog
              </Link>
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="btn-gold-shine text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold"
              >
                Get AI Visibility Check
              </Button>
            </div>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border space-y-4">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/blog" className="block text-sm text-foreground font-medium">
                Blog
              </Link>
              <Button
                onClick={() => { window.open(BOOKING_URL, "_blank"); setIsMobileMenuOpen(false); }}
                className="btn-gold-shine w-full text-sm py-2 px-4 rounded-lg font-semibold"
              >
                Get AI Visibility Check
              </Button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="container-editorial text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Building Local Authority Through AI
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how top agents gain visibility, and organic leads with targeted copy and citation tracking
          </p>
        </section>

        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search and Categories */}
              <div className="mb-8">
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 text-sm font-sans rounded-full transition-colors ${
                        selectedCategory === category
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Posts */}
              {selectedCategory === "All" && !searchQuery && (
                <div className="mb-12">
                  <h2 className="font-serif text-2xl text-foreground mb-6">Featured Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredPosts.map((post) => (
                      <BlogPostCard key={post.id} post={post} variant="featured" />
                    ))}
                  </div>
                </div>
              )}

              {/* All Posts Grid */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  {searchQuery ? `Search Results (${filteredPosts.length})` : selectedCategory === "All" ? "All Articles" : selectedCategory}
                </h2>
                
                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-muted rounded-lg">
                    <p className="text-muted-foreground">No articles found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <LeadMagnetBox
                title="Download Free Toolkit"
                description="10 templates + 5 scripts that save 5+ hours per week"
                buttonText="Get Free Toolkit"
                variant="sidebar"
              />

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-serif text-lg text-foreground mb-4">Recent Posts</h3>
                <div className="space-y-0">
                  {recentPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} variant="compact" />
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="font-serif text-lg text-foreground mb-4">Popular Posts</h3>
                <div className="space-y-0">
                  {popularPosts.map((post) => (
                    <BlogPostCard key={post.id} post={post} variant="compact" />
                  ))}
                </div>
              </div>

              <div className="bg-muted border border-border rounded-lg p-5">
                <h3 className="font-serif text-lg text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4 font-sans">
                  Get weekly tips on real estate copy and workflows
                </p>
                <LeadMagnetBox
                  buttonText="Subscribe"
                  variant="compact"
                />
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTier={selectedTier}
        onTierChange={setSelectedTier}
      />
    </div>
  );
};

export default Blog;
