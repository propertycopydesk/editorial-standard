import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://cal.com/propertycopydesk/qualificationcall";

const NewHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-editorial py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <span className="font-sans text-lg md:text-xl font-bold tracking-wide text-foreground">
              PROPERTY
            </span>
            <div className="w-10 h-px bg-accent my-0.5" />
            <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-foreground">
              COPY DESK
            </span>
          </div>

          {/* CTA Button - Always visible, no hamburger menu */}
          <Button
            onClick={scrollToPricing}
            className="btn-gold-shine text-sm md:text-base py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold"
          >
            <span className="hidden sm:inline">Get MORE Leads — $2,499/mo</span>
            <span className="sm:hidden">Get Leads</span>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default NewHeader;
