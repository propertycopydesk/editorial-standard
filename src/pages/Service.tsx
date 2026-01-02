import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Clock, PenTool, Zap, TrendingUp, ChevronLeft, ChevronRight, Star, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

const BOOKING_URL = "https://cal.com/propertycopydesk/workflowdiscovery";

const pricingTiers = [
  { name: "Standard", turnaround: "24-48 hours", price: "$75", available: true },
  { name: "Priority", turnaround: "12 hours", price: "$150", available: true },
  { name: "Rush", turnaround: "6 hours", price: "$250", slots: 3 },
  { name: "Emergency", turnaround: "2 hours", price: "$500", slots: 2 },
];

const beforeAfterExamples = [
  {
    type: "Luxury Home",
    before: "Beautiful 5 bedroom home with stunning views. Great location near schools and shopping. Spacious backyard perfect for entertaining. Updated kitchen with granite countertops. Must see!",
    after: "Perched above the city lights, this architectural masterpiece commands panoramic views from every window. The chef's kitchen—featuring Calacatta marble and Wolf appliances—flows into a great room designed for both intimate gatherings and grand celebrations. Step through floor-to-ceiling glass onto a private terrace where sunset dinners become unforgettable experiences.",
    metric: "This version got 28% more inquiries",
  },
  {
    type: "Family Home",
    before: "Lovely 4 bedroom family home in great neighborhood. Large yard and updated bathrooms. Close to excellent schools. Two-car garage. Perfect for growing families. Move-in ready!",
    after: "Where morning coffee meets treehouse views. This sun-drenched four-bedroom sits on a corner lot in Maple Heights' most sought-after cul-de-sac, where kids still ride bikes until the streetlights come on. The renovated kitchen opens to a family room with built-ins—the kind of space where homework happens, game nights unfold, and Sunday pancakes become traditions.",
    metric: "This version got 22% more inquiries",
  },
  {
    type: "Starter Home",
    before: "Cute 2 bedroom starter home. Recently painted. New carpet throughout. Nice backyard. Quiet street. Close to downtown. Great investment opportunity. Won't last long!",
    after: "Your first set of house keys unlocks more than a home—it opens a lifestyle. This thoughtfully updated two-bedroom sits on a tree-lined street just twelve minutes from downtown's coffee shops and farmer's markets. The private backyard, wrapped in mature hedges, awaits your vision: garden beds, a fire pit, or simply a hammock and a good book.",
    metric: "This version got 18% more inquiries",
  },
];

const testimonials = [
  {
    quote: "PropertyCopyDesk transformed how we present listings. Our time on market dropped by 15%.",
    author: "Sarah Chen",
    city: "Austin, TX",
    rating: 5,
  },
  {
    quote: "The turnaround is incredible. I submit at night and have polished copy by morning.",
    author: "Marcus Johnson",
    city: "Denver, CO",
    rating: 5,
  },
  {
    quote: "Worth every penny. My luxury listings now sound like they belong in a magazine.",
    author: "Elena Rodriguez",
    city: "Miami, FL",
    rating: 5,
  },
  {
    quote: "I was skeptical at first, but the results speak for themselves. More calls, faster sales.",
    author: "David Park",
    city: "Seattle, WA",
    rating: 5,
  },
  {
    quote: "Finally, someone who understands that listing copy is marketing, not just MLS filler.",
    author: "Jennifer Williams",
    city: "Chicago, IL",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How fast is turnaround really?",
    answer: "We mean what we say. Standard orders are delivered within 24-48 hours. Priority within 12 hours. Rush within 6 hours. Emergency within 2 hours. We've never missed a deadline.",
  },
  {
    question: "What if I don't like it?",
    answer: "We offer unlimited revisions until you're satisfied. In the rare case we can't meet your expectations, we provide a full refund. Your satisfaction is guaranteed.",
  },
  {
    question: "Do you understand my market?",
    answer: "We've written for every major market in the US. Our editors research local terminology, neighborhood highlights, and buyer expectations before crafting your copy.",
  },
  {
    question: "Can I see examples first?",
    answer: "Absolutely! Check out our Before/After examples above. We also offer a sample edit for new clients—submit your listing and we'll show you what's possible.",
  },
  {
    question: "What's included in each tier?",
    answer: "Every tier includes: professional copywriting, buyer psychology optimization, SEO-friendly formatting, headline options, and unlimited revisions. The only difference is turnaround time.",
  },
];

const Service = () => {
  const [selectedTier, setSelectedTier] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/service"
                className="text-sm font-sans text-foreground font-medium"
              >
                Listings
              </Link>
              <Link
                to="/blog"
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/consulting"
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                Consulting
              </Link>
              <Button
                variant="editorial"
                size="sm"
                onClick={() => window.open("https://airtable.com/appeZhHUgV9FzKthv/paggbLJsR25HCyAQA/form", "_blank")}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border space-y-4">
              <Link
                to="/"
                className="block text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/service"
                className="block text-sm font-sans text-foreground font-medium"
              >
                Listings
              </Link>
              <Link
                to="/blog"
                className="block text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                to="/consulting"
                className="block text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                Consulting
              </Link>
              <Button
                variant="editorial"
                size="sm"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open("https://airtable.com/appeZhHUgV9FzKthv/paggbLJsR25HCyAQA/form", "_blank");
                }}
              >
                Get Started
              </Button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-editorial text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-sans text-sm uppercase tracking-wider mb-6">
              Professional Listing Copy
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Listing Descriptions That Sell
            </h1>
            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Professional copywriting starting at $75. Because how you write about property directly shapes how buyers value it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="editorial"
                size="lg"
                onClick={() => window.open("https://airtable.com/appeZhHUgV9FzKthv/paggbLJsR25HCyAQA/form", "_blank")}
              >
                Submit Your Listing
              </Button>
              <Button
                variant="editorial-outline"
                size="lg"
                onClick={() => document.getElementById("examples")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Examples
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Professional copy in four simple steps
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: PenTool, step: "1", title: "Submit Details", description: "Share your property address, photos, and any current copy" },
                { icon: PenTool, step: "2", title: "Expert Editing", description: "Our editors craft compelling, buyer-focused copy" },
                { icon: Clock, step: "3", title: "Fast Delivery", description: "Receive polished copy within your chosen timeframe" },
                { icon: TrendingUp, step: "4", title: "Get Results", description: "Publish and watch inquiries increase" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Examples */}
        <section id="examples" className="section-padding">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              Before & After
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              See the PropertyCopyDesk difference
            </p>

            <div className="space-y-12">
              {beforeAfterExamples.map((example, index) => (
                <div key={index} className="border border-border rounded overflow-hidden">
                  <div className="bg-muted px-6 py-3 border-b border-border">
                    <span className="font-sans text-sm font-medium text-foreground">{example.type}</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-6 border-b lg:border-b-0 lg:border-r border-border">
                      <span className="inline-block px-2 py-1 bg-destructive/10 text-destructive text-xs font-sans uppercase tracking-wider mb-4">
                        Typical MLS Description
                      </span>
                      <p className="font-sans text-muted-foreground leading-relaxed">{example.before}</p>
                    </div>
                    <div className="p-6 bg-accent/5">
                      <span className="inline-block px-2 py-1 bg-accent/20 text-accent text-xs font-sans uppercase tracking-wider mb-4">
                        PropertyCopyDesk Version
                      </span>
                      <p className="font-sans text-foreground leading-relaxed">{example.after}</p>
                    </div>
                  </div>
                  <div className="bg-accent/10 px-6 py-3 text-center">
                    <span className="font-sans text-sm font-medium text-accent">{example.metric}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-muted">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              Choose Your Turnaround
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Same quality. Different deadlines.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative bg-card border rounded p-6 transition-all cursor-pointer ${
                    selectedTier === index
                      ? "border-accent border-2 shadow-lg"
                      : "border-border hover:border-accent/50"
                  } ${index === 1 ? "md:scale-105" : ""}`}
                  onClick={() => setSelectedTier(index)}
                >
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 text-xs font-sans uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  {tier.slots && (
                    <div className="absolute -top-3 right-4 bg-destructive text-destructive-foreground px-2 py-1 text-xs font-sans">
                      Only {tier.slots} slots today
                    </div>
                  )}
                  <h3 className="font-serif text-xl text-foreground mb-2">{tier.name}</h3>
                  <p className="font-sans text-3xl font-bold text-foreground mb-1">{tier.price}</p>
                  <p className="font-sans text-sm text-muted-foreground mb-4">{tier.turnaround}</p>
                  <ul className="space-y-2 mb-6">
                    {["Professional copywriting", "Buyer psychology", "Unlimited revisions", "SEO optimized"].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={selectedTier === index ? "editorial" : "editorial-outline"}
                    size="sm"
                    className="w-full"
                  >
                    Select
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="editorial" size="xl" onClick={() => window.open("https://airtable.com/appeZhHUgV9FzKthv/paggbLJsR25HCyAQA/form", "_blank")}>
                Submit Your Listing — {pricingTiers[selectedTier].price}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                100% satisfaction guaranteed or your money back
              </p>
            </div>
          </div>
        </section>

        {/* Testimonial Carousel */}
        <section className="section-padding">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              What Agents Say
            </h2>

            <div className="relative max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded p-8 md:p-12 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="font-serif text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <p className="font-sans text-foreground font-medium">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].city}
                </p>
              </div>

              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 bg-card border border-border rounded-full hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 bg-card border border-border rounded-full hover:bg-muted transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentTestimonial === index ? "bg-accent" : "bg-border"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-muted">
          <div className="container-editorial max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded px-6"
                >
                  <AccordionTrigger className="font-serif text-lg text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-editorial text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              Ready to Elevate Your Listings?
            </h2>
            <p className="font-sans text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join hundreds of agents who trust PropertyCopyDesk for professional listing copy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="xl"
                onClick={() => window.open("https://airtable.com/appeZhHUgV9FzKthv/paggbLJsR25HCyAQA/form", "_blank")}
              >
                Submit Your Listing
              </Button>
              <Button
                variant="secondary"
                size="xl"
                onClick={() => window.open(BOOKING_URL, "_blank")}
              >
                Book a Call
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Service;
