import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Check, Clock, BookOpen, Video, FileText, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import { analytics } from "@/lib/analytics";
import { toast } from "@/hooks/use-toast";

const ToolkitWaitlist = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(347); // Simulated count

  // Countdown to Q2 2026 (April 1, 2026)
  const launchDate = new Date("2026-04-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    analytics.pageView("/toolkit-waitlist", "Toolkit Waitlist");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      analytics.waitlistSignup(email);
      toast({
        title: "You're on the list!",
        description: "We'll notify you when the toolkit launches at the special $297 price.",
      });
      setName("");
      setEmail("");
      setWaitlistCount((prev) => prev + 1);
    }
  };

  const features = [
    {
      icon: BookOpen,
      title: "Complete R.E.A.L. AI System™ Training",
      description: "Step-by-step video training to master the exact system used by top teams",
    },
    {
      icon: FileText,
      title: "20+ Custom Prompt Templates",
      description: "Battle-tested prompts for listings, emails, social posts, and more",
    },
    {
      icon: Video,
      title: "Video Training Library (6+ Hours)",
      description: "In-depth tutorials on implementation and optimization",
    },
    {
      icon: Zap,
      title: "Editorial Standards Guide",
      description: "Professional quality standards for consistent, polished copy",
    },
    {
      icon: FileText,
      title: "Templates & Swipe Files",
      description: "Ready-to-use templates for every real estate scenario",
    },
    {
      icon: Clock,
      title: "Lifetime Access + Updates",
      description: "Quarterly updates as AI and best practices evolve",
    },
  ];

  const testimonials = [
    {
      quote: "The R.E.A.L. system transformed how our team creates content. Implementation was seamless.",
      author: "Jennifer Kim",
      role: "Broker/Owner, Riverside Realty",
    },
    {
      quote: "We went from spending 3 hours on listing copy to 20 minutes. The ROI was immediate.",
      author: "Michael Torres",
      role: "Team Lead, Premier Properties",
    },
    {
      quote: "Finally, a system that maintains our brand voice while leveraging AI efficiency.",
      author: "Sarah Chen",
      role: "Marketing Director, Coastal Homes",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <nav className="container-editorial py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="focus:outline-none">
              <div className="flex flex-col items-start">
                <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
                  PROPERTY
                </span>
                <div className="w-10 h-px bg-accent my-0.5" />
                <span className="font-serif text-xs tracking-[0.2em] text-foreground">
                  COPY DESK
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/service" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
                Listings
              </Link>
              <Link to="/blog" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link to="/consulting" className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors">
                Consulting
              </Link>
              <Button variant="editorial" size="sm" asChild>
                <a href="#waitlist-form">Join Waitlist</a>
              </Button>
            </div>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border space-y-4">
              <Link to="/" className="block text-sm font-sans text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link to="/service" className="block text-sm font-sans text-muted-foreground hover:text-foreground">
                Listings
              </Link>
              <Link to="/blog" className="block text-sm font-sans text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link to="/consulting" className="block text-sm font-sans text-muted-foreground hover:text-foreground">
                Consulting
              </Link>
              <Button variant="editorial" size="sm" className="w-full" asChild>
                <a href="#waitlist-form">Join Waitlist</a>
              </Button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full mb-6">
              <span className="text-sm font-sans font-medium text-accent">Coming Q2 2026</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Learn the $6,000 System for <span className="text-accent">$297</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Master the R.E.A.L. AI System™ used by top real estate teams. Self-paced training with everything you need to transform your workflow.
            </p>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 md:gap-6 mb-10">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sec" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-2">
                    <span className="text-2xl md:text-3xl font-semibold font-sans">
                      {item.value.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground font-sans">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lock In Price Box */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
              Waitlist Members Lock in $297
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-3xl md:text-4xl font-sans font-bold text-accent">$297</span>
              <span className="text-xl md:text-2xl text-primary-foreground/60 line-through">$369</span>
            </div>
            <p className="text-lg text-primary-foreground/80 mb-2">
              Save $72 by joining the waitlist now
            </p>
            <p className="text-sm text-primary-foreground/60">
              Only 500 spots at launch price • {500 - (waitlistCount % 500)} remaining
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist-form" className="py-16 md:py-24">
        <div className="container-editorial">
          <div className="max-w-xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 text-center">
                Join the Waitlist
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Be first to access the toolkit at the special launch price
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <Button type="submit" variant="editorial-gold" size="xl" className="w-full">
                  Join Waitlist - Lock in $297
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{waitlistCount}</span> agents already on the list
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-editorial">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to implement the R.E.A.L. AI System™ for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container-editorial">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              What Consulting Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Teams already using the R.E.A.L. AI System™
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-editorial text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Don't Miss the Launch Price
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join {waitlistCount}+ agents already on the waitlist and lock in $297 (save $72)
          </p>
          <Button variant="editorial-gold" size="xl" asChild>
            <a href="#waitlist-form">Join Waitlist Now</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolkitWaitlist;
