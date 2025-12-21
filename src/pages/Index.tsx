import { useState } from "react";
import { Check, BookOpen, Home, TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CredentialBadge from "@/components/CredentialBadge";
import ConsultationModal from "@/components/ConsultationModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

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
                onClick={() => setIsModalOpen(true)}
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

            <p className="font-sans text-sm md:text-base text-muted-foreground max-w-xl mx-auto italic">
              Trusted by agencies who understand that how you write about property shapes how people value it.
            </p>
          </div>
        </section>

        {/* Problem/Solution Section */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
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

            <blockquote className="text-center">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                <span className="text-accent">"</span>
                NOT JUST FASTER. BETTER.
                <span className="text-accent">"</span>
              </p>
              <footer className="font-sans text-muted-foreground">
                AI tools make writing faster. We make writing better.
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-4">
              Three Ways to Work With Us
            </h2>
            <p className="font-sans text-muted-foreground text-center mb-12 md:mb-16 max-w-xl mx-auto">
              From team-wide implementation to individual listings
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <ServiceCard
                badge="For Teams & Brokerages"
                price="$6,000"
                subtitle="Editorial Standards for Your Entire Team"
                features={[
                  "Complete workflow audit",
                  "Custom style guide and templates",
                  "Team training on editorial standards",
                  "90-day implementation support",
                ]}
                roiCallout="Save 10-15 hours per agent per week | Payback: 11 days"
                note="Limited to 3 teams per month"
                ctaText="Close More Deals"
                onCtaClick={() => setIsModalOpen(true)}
              />

              <ServiceCard
                badge="For Solo Agents"
                price="$75/listing"
                subtitle="24-Hour Turnaround"
                features={[
                  "Professional editing quality",
                  "Buyer psychology optimization",
                  "18% average increase in inquiries",
                  "Same standards as $6,000 consulting clients",
                ]}
                ctaText="Refine My Listing"
                popular
                onCtaClick={() => setIsModalOpen(true)}
              />

              <ServiceCard
                badge="Coming Q1 2026"
                badgeColor="gold"
                price="$369"
                originalPrice="$297"
                subtitle="Learn Our System"
                features={[
                  "The PropertyCopyDesk Editorial Method",
                  "Templates, style guides, frameworks",
                  "Everything we teach $6,000 consulting clients",
                  "Lifetime access with quarterly updates",
                ]}
                ctaText="Join Waitlist"
                ctaDisabled
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding bg-muted">
          <div className="container-editorial">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground text-center mb-4">
              Editorial Excellence Drives Results
            </h2>
            <p className="font-sans text-muted-foreground text-center mb-12 md:mb-16 max-w-xl mx-auto">
              What happens when you treat real estate writing as craft
            </p>

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
              Why PropertyCopyDesk?
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg mx-auto mb-12">
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded by Fatih Can, who studied English Literature, owns investment properties, and understands both the craft of writing and the business of real estate.
                </p>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
                  After watching agents struggle with generic descriptions, I built what real estate was missing: a professional editorial desk for property descriptions.
                </p>
                <p className="font-sans text-lg text-foreground leading-relaxed font-medium">
                  We're not trying to be faster or cheaper. We're trying to be BETTER.
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
                  title="Marketing Professional"
                  description="Buyer Psychology"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-editorial text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              Ready to Transform How You Write About Property?
            </h2>
            <p className="font-sans text-primary-foreground/70 mb-12 max-w-xl mx-auto">
              Choose the path that fits your needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <h3 className="font-serif text-xl md:text-2xl mb-2">For Teams</h3>
                <p className="font-sans text-primary-foreground/70 text-sm mb-6">
                  Book a $6,000 strategy call
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full md:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  Start Consultation
                </Button>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl md:text-2xl mb-2">For Solo Agents</h3>
                <p className="font-sans text-primary-foreground/70 text-sm mb-6">
                  Submit a $75 listing
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full md:w-auto"
                  onClick={() => setIsModalOpen(true)}
                >
                  Submit Listing
                </Button>
              </div>
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
              <h4 className="font-sans font-medium text-foreground mb-4">For Teams</h4>
              <p className="font-sans text-sm text-muted-foreground mb-3">
                Managing 5+ agents? Our $6,000 AI Implementation Consulting saves teams 10-15hrs/week per agent.
              </p>
              <button
                onClick={() => scrollToSection("services")}
                className="font-sans text-sm text-accent hover:text-gold-dark transition-colors"
              >
                Learn About Consulting →
              </button>
            </div>

            {/* Trust Indicators */}
            <div>
              <h4 className="font-sans font-medium text-foreground mb-4">Trust Indicators</h4>
              <ul className="space-y-2 font-sans text-sm text-muted-foreground">
                <li>200+ listings delivered monthly</li>
                <li>4.9/5 average rating</li>
                <li>Editorial standards since 2026</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-muted-foreground">
              © {new Date().getFullYear()} PropertyCopyDesk. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </button>
              <button className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Index;
