import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, BookOpen, Home, TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CredentialBadge from "@/components/CredentialBadge";
import ConsultationModal from "@/components/ConsultationModal";
import PainPointCard from "@/components/PainPointCard";

const CALENDLY_URL = "https://calendly.com/propertycopydesk/roi-call";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  const pricingTiers = [
    { name: "Standard", turnaround: "24-48 hours", price: "$75" },
    { name: "Priority", turnaround: "12 hours", price: "$150" },
    { name: "Rush", turnaround: "6 hours", price: "$250" },
    { name: "Emergency", turnaround: "2 hours", price: "$500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <nav className="container-editorial py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollToSection("hero")} className="focus:outline-none">
              <div className="flex flex-col items-start">
                <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
                  PROPERTY
                </span>
                <div className="w-10 h-px bg-accent my-0.5" />
                <span className="font-serif text-xs tracking-[0.2em] text-foreground">
                  COPY DESK
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
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
                onClick={() => setIsModalOpen(true)}
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
              <button
                onClick={() => scrollToSection("services")}
                className="block text-sm font-sans text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-sm font-sans text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                Results
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-sm font-sans text-muted-foreground hover:text-foreground transition-colors w-full text-left"
              >
                About
              </button>
              <Link
                to="/blog"
                className="block text-sm font-sans text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/consulting"
                className="block text-sm font-sans text-muted-foreground hover:text-foreground transition-colors w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Consulting
              </Link>
              <Button
                variant="editorial"
                size="sm"
                className="w-full"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
          <div className="container-editorial text-center">
            <Logo className="mb-12 md:mb-16" />

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground mb-6 md:mb-8 text-balance leading-tight">
              The Editorial Standard<br className="hidden sm:block" /> for Real Estate
            </h1>

            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
              Professional editing for property descriptions. Not AI. Not generic copywriting.{" "}
              <span className="text-foreground font-medium">Editorial excellence.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 md:mb-12">
              <Button
                variant="editorial"
                size="lg"
                onClick={openCalendly}
              >
                Book Consultation
              </Button>
              <Button
                variant="editorial-outline"
                size="lg"
                onClick={() => scrollToSection("services")}
              >
                View Services
              </Button>
            </div>

            <p className="font-sans text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Trusted by agencies who understand the undeniable value of professional property copy and how it shapes buyer perception.
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-12 md:mb-16">
              Real Estate Has No Editorial Standard
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
              {[
                { industry: "Journalism", has: "Has copy desks" },
                { industry: "Publishing", has: "Has editors" },
                { industry: "Marketing", has: "Has content strategists" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background border border-border p-6 md:p-8 text-center"
                >
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                    {item.industry}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-accent">
                    <Check className="w-5 h-5" />
                    <span className="font-sans">{item.has}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-border mb-12" />

            <div className="text-center mb-12">
              <p className="font-sans text-lg md:text-xl text-muted-foreground mb-6">
                But real estate? Agents write listings alone. No training. No standards. No feedback.
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground">
                PropertyCopyDesk Changes That
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Clear, compelling narratives",
                "Buyer psychology optimization",
                "Conversion-tested language",
                "Professional editing quality",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-background border border-border p-4"
                >
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-sans text-foreground text-sm md:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Tagline Section */}
        <section className="section-padding">
          <div className="container-editorial text-center">
            <blockquote>
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-accent mb-6 leading-tight">
                "The copy desk real estate has been missing"
              </p>
              <footer className="font-sans text-lg md:text-xl text-muted-foreground">
                We understand narrative, real estate, and buyer psychology
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Pain Points & Solutions Section */}
        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-12 md:mb-16">
              The Real Cost of Generic Listing Copy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <PainPointCard
                title="Time Drain"
                problem="Agents waste 2+ hours per listing writing descriptions. A 10-agent team loses 160-320 hours monthly just on writing."
                solution="PropertyCopyDesk delivers professional copy in 24 hours. Get your time back for actual selling."
              />
              <PainPointCard
                title="Lost Deals"
                problem="Generic descriptions blend in. 'Stunning home' and 'great location' don't convert. Listings sit longer."
                solution="Our editorial approach creates compelling narratives that drive 18% more inquiries and faster sales."
              />
              <PainPointCard
                title="Inconsistent Quality"
                problem="Every agent writes differently. No standards. No training. Listings look unprofessional."
                solution="We implement editorial standards across your entire team. Consistent, high-quality listings every time."
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-4">
              Work With Us
            </h2>
            <p className="font-sans text-muted-foreground text-center mb-12 md:mb-16 max-w-xl mx-auto">
              Choose the option that fits your needs
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <ServiceCard
                badge="For Real Estate Teams"
                price="Starting at $6,000"
                priceSubtext="Pricing scales with team size"
                subtitle="Editorial Standards for Your Entire Team"
                features={[
                  "Complete workflow audit",
                  "Custom style guide and templates",
                  "Team training on editorial standards",
                  "90-day implementation support",
                ]}
                pricingBreakdown={[
                  { label: "Small teams (5-15 agents)", price: "$6,000" },
                  { label: "Medium teams (16-30 agents)", price: "$9,000" },
                  { label: "Large teams (31+ agents)", price: "Custom" },
                ]}
                roiCallout="Save 10-15 hours per agent per week | ROI: 2,100% in Year 1"
                note="Limited to 2 teams per month"
                ctaText="Book Strategy Call"
                onCtaClick={openCalendly}
              />

              <ServiceCard
                badge="For Individual Agents"
                price="From $75"
                subtitle="Choose your turnaround time"
                features={[
                  "Professional editing quality",
                  "Buyer psychology optimization",
                  "18% average increase in inquiries",
                  "Same standards as our $6,000 consulting",
                ]}
                pricingTiers={pricingTiers}
                selectedTier={selectedTier}
                onTierSelect={setSelectedTier}
                ctaText="Submit Your Listing"
                popular
                onCtaClick={() => setIsModalOpen(true)}
              />

              <ServiceCard
                badge="Coming Q2 2026"
                badgeColor="gold"
                price="$297"
                originalPrice="$369"
                subtitle="Learn Our System"
                features={[
                  "The PropertyCopyDesk Editorial Method",
                  "Templates, style guides, frameworks",
                  "Everything we teach $6,000 consulting clients",
                  "Lifetime access + quarterly updates",
                ]}
                goldNote="Lock in $297 forever — Join waitlist now. Price increases to $369 when toolkit launches Q2 2026."
                ctaText="Join Waitlist"
                ctaDisabled
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding bg-muted">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-12 md:mb-16">
              Editorial Excellence Drives Results
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <TestimonialCard
                quote="PropertyCopyDesk doesn't just write faster. They write BETTER. Our listings now read like they belong in Architectural Digest, not MLS. Inquiries up 22%."
                author="S. Chen"
                role="Austin Realtor"
              />
              <TestimonialCard
                quote="I've used Fiverr, ChatGPT, and expensive copywriters. Nothing compares to PropertyCopyDesk's editorial approach. They understand narrative and buyer psychology."
                author="M. Torres"
                role="Luxury Properties"
              />
              <TestimonialCard
                quote="We hired PropertyCopyDesk to implement editorial standards across our 15-agent team. Three months in: 12 hours saved per agent per week. ROI was 2,100%."
                author="J. Kim"
                role="Broker/Owner"
              />
            </div>
          </div>
        </section>

        {/* About/Founder Section */}
        <section id="about" className="section-padding">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-12 md:mb-16">
              Why PropertyCopyDesk Works
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg mx-auto mb-12">
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded by Fatih Can — an English Literature scholar, property investor, and marketing professional who bridges three worlds most people never connect.
                </p>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
                  After years of watching real estate agents struggle with generic, ineffective descriptions, I realized the problem: real estate has no editorial standard.
                </p>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
                  Journalism has copy desks. Publishing has editors. Marketing has content strategists. But real estate? Agents write alone.
                </p>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
                  PropertyCopyDesk fills that gap. We're not trying to be faster or cheaper. We're trying to be BETTER.
                </p>
                <p className="font-sans text-lg text-foreground leading-relaxed font-medium">
                  Because how you write about property directly shapes how buyers value it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <CredentialBadge
                  icon={BookOpen}
                  title="English Literature"
                  description="Editorial Expertise"
                />
                <CredentialBadge
                  icon={Home}
                  title="Property Investor"
                  description="Real Estate Credibility"
                />
                <CredentialBadge
                  icon={TrendingUp}
                  title="Marketing Pro"
                  description="Buyer Psychology"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-editorial text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-12">
              Ready to Transform Your Property Descriptions?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                variant="secondary"
                size="xl"
                onClick={openCalendly}
              >
                For Teams: Book Strategy Call
              </Button>
              <Button
                variant="secondary"
                size="xl"
                onClick={() => setIsModalOpen(true)}
              >
                For Agents: Submit a Listing
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 md:py-16">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
            {/* Logo & Tagline */}
            <div>
              <div className="flex flex-col items-start mb-4">
                <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
                  PROPERTY
                </span>
                <div className="w-10 h-px bg-accent my-0.5" />
                <span className="font-serif text-xs tracking-[0.2em] text-foreground">
                  COPY DESK
                </span>
              </div>
              <p className="font-sans text-sm text-muted-foreground">
                The Editorial Standard for Real Estate
              </p>
            </div>

            {/* For Teams */}
            <div>
              <h4 className="font-serif text-lg text-foreground mb-4">For Teams</h4>
              <p className="font-sans text-sm text-muted-foreground mb-4">
                Managing 5+ agents? Our editorial consulting saves 10-15 hours per agent per week.
              </p>
              <button
                onClick={() => scrollToSection("services")}
                className="font-sans text-sm text-accent hover:underline"
              >
                Learn About Consulting →
              </button>
            </div>

            {/* Trust Indicators */}
            <div>
              <h4 className="font-serif text-lg text-foreground mb-4">Trust</h4>
              <ul className="space-y-2 font-sans text-sm text-muted-foreground">
                <li>200+ listings delivered monthly</li>
                <li>4.9/5 average rating</li>
                <li>Editorial standards since 2025</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-sm text-muted-foreground">
              © {new Date().getFullYear()} PropertyCopyDesk. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTier={selectedTier}
        onTierChange={setSelectedTier}
      />
    </div>
  );
};

export default Index;
