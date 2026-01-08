import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getRecentPosts } from "@/data/blogPosts";
import { useState } from "react";
import { analytics } from "@/lib/analytics";
import { toast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recentPosts = getRecentPosts(3);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      // 1. Save to Supabase first
      if (isSupabaseConfigured() && supabase) {
        const { error: supabaseError } = await supabase
          .from('newsletter_subscribers')
          .insert([{ email, source: 'website' }]);

        if (supabaseError) {
          // Check if it's a duplicate email error
          if (supabaseError.code === '23505') {
            toast({
              title: "Already subscribed!",
              description: "This email is already on our list.",
            });
            setIsSubmitting(false);
            return;
          }
          throw supabaseError;
        }
      }

      // 2. Add to Campaign Monitor
      const apiKey = import.meta.env.VITE_CAMPAIGN_MONITOR_API_KEY;
      const listId = import.meta.env.VITE_CAMPAIGN_MONITOR_LIST_ID;

      if (apiKey && listId) {
        const response = await fetch(
          `https://api.createsend.com/api/v3.3/subscribers/${listId}.json`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${btoa(apiKey + ':x')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              EmailAddress: email,
              Name: email.split('@')[0],
              Resubscribe: true,
              RestartSubscriptionBasedAutoresponders: true
            })
          }
        );

        if (!response.ok) {
          console.error('Campaign Monitor error:', await response.text());
          // Still show success to user since it's saved in Supabase
        }
      }

      analytics.newsletterSignup("footer");
      toast({
        title: "Successfully subscribed! 🎉",
        description: "You'll receive our latest real estate insights.",
      });
      setEmail("");
    } catch (error) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Error",
        description: "There was an error subscribing. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-editorial py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex flex-col items-start">
                <span className="font-serif text-xl font-semibold tracking-wide">
                  PROPERTY
                </span>
                <div className="w-12 h-px bg-accent my-1" />
                <span className="font-serif text-xs tracking-[0.2em]">
                  COPY DESK
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Professional real estate copywriting and AI workflow consulting for agents and teams who value their time.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://x.com/propcopydesk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => analytics.ctaClick("twitter", "footer")}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/propertycopydesk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => analytics.ctaClick("linkedin", "footer")}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/propertycopydesk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => analytics.ctaClick("facebook", "footer")}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Team Consulting
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/toolkit-waitlist" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  Toolkit Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Recent Posts</h4>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors line-clamp-2"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Get weekly tips on real estate copywriting and AI efficiency.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button
                type="submit"
                variant="editorial-gold"
                size="sm"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} PropertyCopyDesk. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
