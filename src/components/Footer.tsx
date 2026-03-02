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
      const brevoApiKey = import.meta.env.VITE_BREVO_API_KEY;
      
      if (brevoApiKey) {
        const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': brevoApiKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            attributes: {
              SOURCE: 'website_footer',
              SIGNUP_DATE: new Date().toISOString()
            },
            listIds: [3],
            updateEnabled: false,
            emailBlacklisted: false
          })
        });

        const brevoData = await brevoResponse.json();
        
        if (!brevoResponse.ok && brevoData.code === 'duplicate_parameter') {
          toast({
            title: "Already subscribed!",
            description: "This email is already on our list.",
          });
          setIsSubmitting(false);
          setEmail("");
          return;
        }

        if (!brevoResponse.ok) {
          console.error('Brevo error:', brevoData);
          throw new Error('Failed to add to Brevo');
        }

        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'api-key': brevoApiKey,
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            sender: {
              name: "PropertyCopyDesk",
              email: "fatih@propertycopydesk.com"
            },
            to: [{ email: email }],
            subject: "Welcome to PropertyCopyDesk! 🏡",
            htmlContent: `
              <html>
                <body style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f5f0;">
                  <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="font-size: 24px; color: #1a1a1a; margin-bottom: 5px;">PROPERTY COPY DESK</h1>
                    <div style="width: 60px; height: 2px; background-color: #c9a962; margin: 0 auto;"></div>
                  </div>
                  <h2 style="color: #1a1a1a; font-size: 28px; text-align: center;">Welcome! 👋</h2>
                  <p style="color: #4a4a4a; line-height: 1.8; font-size: 16px;">Thank you for subscribing. You're now part of a community of real estate professionals building genuine local authority.</p>
                  <p style="color: #1a1a1a; font-weight: bold; margin-top: 25px;">Here's what you can expect:</p>
                  <ul style="color: #4a4a4a; line-height: 2; font-size: 16px;">
                    <li>Weekly strategies for building market authority</li>
                    <li>Lead generation insights and tactics</li>
                    <li>AI visibility trends for real estate</li>
                  </ul>
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="https://propertycopydesk.com/blog" style="background-color: #c9a962; color: #1a1a1a; padding: 12px 30px; text-decoration: none; font-weight: bold; border-radius: 4px;">Read Our Latest Posts</a>
                  </div>
                  <p style="color: #4a4a4a; line-height: 1.8; font-size: 16px;">Best regards,<br>The PropertyCopyDesk Team</p>
                  <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                  <p style="color: #888; font-size: 12px; text-align: center;">
                    PropertyCopyDesk<br>
                    <a href="https://propertycopydesk.com" style="color: #c9a962;">propertycopydesk.com</a>
                  </p>
                </body>
              </html>
            `
          })
        });
      }

      if (isSupabaseConfigured() && supabase) {
        await supabase
          .from('newsletter_subscribers')
          .insert([{ email, source: 'website_footer' }]);
      }

      analytics.newsletterSignup("footer");
      
      toast({
        title: "Successfully subscribed! 🎉",
        description: "Check your email for a welcome message.",
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
    <footer className="bg-card border-t border-border text-foreground">
      <div className="container-editorial section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col items-start mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
                  PROPERTY
                </span>
                <div className="w-10 h-px bg-accent my-0.5" />
                <span className="font-serif text-xs tracking-[0.2em] text-foreground">
                  COPY DESK
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The only hybrid system that delivers leads in 7 days while building AI visibility.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://x.com/propcopydesk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://linkedin.com/company/propertycopydesk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://facebook.com/propertycopydesk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/propertycopydesk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.youtube.com/@propertycopydesk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.reddit.com/user/propertycopydesk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 01-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 01.042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 014.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 01.14-.197.35.35 0 01.238-.042l2.906.617a1.214 1.214 0 011.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 00-.231.094.33.33 0 000 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 000-.462.342.342 0 00-.461 0c-.545.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 00-.206-.095z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans text-lg font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-accent transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors text-sm">Blog</Link></li>
              <li><a href="/#faq" className="text-muted-foreground hover:text-accent transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-sans text-lg font-bold text-foreground mb-6">Recent Posts</h3>
            <ul className="space-y-3">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="text-muted-foreground hover:text-accent transition-colors text-sm line-clamp-2">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-sans text-lg font-bold text-foreground mb-6">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Weekly strategies for building market authority and generating leads.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button type="submit" variant="editorial" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} PropertyCopyDesk. All rights reserved.
              </p>
              <p className="text-muted-foreground text-sm">
                <a href="mailto:fatih@propertycopydesk.com" className="text-accent hover:underline">fatih@propertycopydesk.com</a> · Response time: &lt;4 hours
              </p>
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4 italic">
            P.S. Every day you wait, competitors are building the authority in your market that you'll spend twice as much to catch up to.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
