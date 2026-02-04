import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Check } from "lucide-react";
import { analytics } from "@/lib/analytics";
import ProblemSection from "@/components/landing/ProblemSection";
import ResultsSection from "@/components/landing/ResultsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import DifferentiationSection from "@/components/landing/DifferentiationSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/Footer";

const BOOKING_URL = "https://cal.com/propertycopydesk/qualificationcall";

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openBooking = () => {
    analytics.ctaClick("Let's Talk", "header");
    window.open(BOOKING_URL, "_blank");
  };

  const openAudit = () => {
    analytics.ctaClick("Free AI Audit", "hero");
    window.open(BOOKING_URL, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar - Fixed */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex flex-col items-start">
              <span className="font-serif text-lg md:text-xl font-semibold tracking-wide text-primary">
                PROPERTY
              </span>
              <div className="w-10 h-px bg-accent my-0.5" />
              <span className="font-serif text-[10px] md:text-xs tracking-[0.2em] text-primary">
                COPY DESK
              </span>
            </div>

            {/* Desktop CTA */}
            <Button
              onClick={openBooking}
              className="hidden md:flex text-lg py-7 px-7 rounded-lg font-medium btn-gold-shine"
            >
              Let's Talk
            </Button>

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
            <div className="md:hidden mt-4 pt-4 border-t border-border">
              <Button
                onClick={() => {
                  openBooking();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-lg py-6 rounded-lg font-medium btn-gold-shine"
              >
                Let's Talk
              </Button>
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* Hero Section - Full Viewport Height */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
          <div className="max-w-[900px] mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-primary leading-[1.1] mb-6 font-serif md:whitespace-nowrap text-center">
              Are YOU the agent AI recommends?
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-[22px] font-normal text-primary/70 leading-relaxed max-w-[800px] mx-auto mb-8 text-center">
              We ensure you become the agent AI recommends when buyers/sellers ask ChatGPT, Gemini, Perplexity or Grok
            </p>

            {/* Primary CTA Button */}
            <Button
              onClick={openAudit}
              size="lg"
              className="text-xl py-8 px-10 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow mb-4 btn-gold-shine"
            >
              See Where You Rank in AI Search (Free Audit) →
            </Button>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-4 text-primary/60">
              <span className="flex items-center gap-2 text-base">
                <Zap className="w-4 h-4 text-accent" />
                First AI citation in 30 days or we work for free
              </span>
              <span className="flex items-center gap-2 text-base">
                <Check className="w-4 h-4 text-accent" />
                No market exclusivity; we accept serious agents only
              </span>
            </div>
          </div>
        </section>

        {/* All Landing Page Sections */}
        <ProblemSection />
        <HowItWorksSection />
        <ResultsSection />
        <DifferentiationSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
