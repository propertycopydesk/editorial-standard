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
      
      // 1. Add to Brevo
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
            listIds: [], // Add your list ID here if you want: [123]
            updateEnabled: false, // Don't update if already exists
            emailBlacklisted: false
          })
        });

        const brevoData = await brevoResponse.json();
        
        // Check if already subscribed
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

        // 2. Send welcome email via Brevo
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
                  
                  <h2 style="color: #1a1a1a; font-size: 28px; text-align: center;">Welcome to the Team! 👋</h2>
                  
                  <p style="color: #4a4a4a; line-height: 1.8; font-size: 16px;">Thank you for subscribing to PropertyCopyDesk. You're now part of a community of real estate professionals who value exceptional copywriting and smart AI workflows.</p>
                  
                  <p style="color: #1a1a1a; font-weight: bold; margin-top: 25px;">Here's what you can expect:</p>
                  
                  <ul style="color: #4a4a4a; line-height: 2; font-size: 16px;">
                    <li>Weekly tips on real estate copywriting</li>
                    <li>AI efficiency strategies for agents</li>
                    <li>Exclusive insights and industry updates</li>
                    <li>Special offers on our services</li>
                  </ul>
                  
                  <div style="text-align: center; margin: 30px 0;">
                    <a href="https://propertycopydesk.com/blog" style="background-color: #c9a962; color: #1a1a1a; padding: 12px 30px; text-decoration: none; font-weight: bold; border-radius: 4px;">Read Our Latest Posts</a>
                  </div>
                  
                  <p style="color: #4a4a4a; line-height: 1.8; font-size: 16px;">Have questions? Just reply to this email—we'd love to hear from you!</p>
                  
                  <p style="color: #4a4a4a; line-height: 1.8; font-size: 16px;">Best regards,<br>The PropertyCopyDesk Team</p>
                  
                  <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                  
                  <p style="color: #888; font-size: 12px; text-align: center;">
                    PropertyCopyDesk | Professional Real Estate Copywriting<br>
                    <a href="https://propertycopydesk.com" style="color: #c9a962;">propertycopydesk.com</a>
                  </p>
                </body>
              </html>
            `
          })
        });
      }

      // 3. Save to Supabase (for your records)
      if (isSupabaseConfigured() && supabase) {
        await supabase
          .from('newsletter_subscribers')
          .insert([{ 
            email, 
            source: 'website_footer'
          }]);
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container-editorial section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col items-start mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold tracking-wide text-primary-foreground">
                  PROPERTY
                </span>
                <div className="w-10 h-px bg-accent my-0.5" />
                <span className="font-serif text-xs tracking-[0.2em] text-primary-foreground">
                  COPY DESK
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Professional real estate copywriting and AI workflow consulting for agents and teams who value their time.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://twitter.com/propertycopydesk" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors"
                onClick={() => analytics.ctaClick("twitter", "footer")}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/propertycopydesk" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors"
                onClick={() => analytics.ctaClick("linkedin", "footer")}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://facebook.com/propertycopydesk" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors"
                onClick={() => analytics.ctaClick("facebook", "footer")}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-primary-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Team Consulting
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/toolkit-waitlist" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  Toolkit Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="font-serif text-lg text-primary-foreground mb-6">Recent Posts</h3>
            <ul className="space-y-3">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="text-primary-foreground/70 hover:text-accent transition-colors text-sm line-clamp-2">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-serif text-lg text-primary-foreground mb-6">Stay Updated</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Get weekly tips on real estate copywriting and AI efficiency.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" variant="editorial" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} PropertyCopyDesk. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-primary-foreground/50 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/50 hover:text-accent transition-colors text-sm">
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