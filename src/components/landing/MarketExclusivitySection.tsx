import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const BOOKING_URL = "https://cal.com/propertycopydesk/auditcall";

// Simulated claimed markets for demo purposes
const CLAIMED_MARKETS = ["Miami, FL"];

const MAJOR_CITIES = [
  "Select your city",
  "Atlanta, GA",
  "Austin, TX",
  "Boston, MA",
  "Charlotte, NC",
  "Chicago, IL",
  "Columbus, OH",
  "Dallas, TX",
  "Denver, CO",
  "Detroit, MI",
  "Houston, TX",
  "Indianapolis, IN",
  "Jacksonville, FL",
  "Las Vegas, NV",
  "Los Angeles, CA",
  "Miami, FL",
  "Minneapolis, MN",
  "Nashville, TN",
  "New York, NY",
  "Orlando, FL",
  "Philadelphia, PA",
  "Phoenix, AZ",
  "Portland, OR",
  "Raleigh, NC",
  "Sacramento, CA",
  "San Antonio, TX",
  "San Diego, CA",
  "San Francisco, CA",
  "San Jose, CA",
  "Scottsdale, AZ",
  "Seattle, WA",
  "Tampa, FL",
  "Washington, DC",
];

const MarketExclusivitySection = () => {
  const ref = useScrollReveal();
  const [selectedCity, setSelectedCity] = useState("");
  const [checkResult, setCheckResult] = useState<"available" | "claimed" | null>(null);

  const handleCheck = () => {
    if (!selectedCity || selectedCity === "Select your city") return;
    setCheckResult(CLAIMED_MARKETS.includes(selectedCity) ? "claimed" : "available");
  };

  return (
    <section className="section-padding">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Exclusivity</span>
          <h2 className="section-heading">One Agent Per Market. Yours or Theirs.</h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
          <p>We work with <span className="font-bold text-foreground">ONE</span> agent per market.</p>
          <p>When your market is claimed, we close it. Forever.</p>
          <p>We turn away your competitors. We don't "adjust positioning to coexist." We don't work with multiple agents in the same city.</p>
          <p className="text-foreground font-semibold">First agent to claim it owns it.</p>
        </div>

        {/* Market Availability Checker */}
        <div className="bg-card border-2 border-border rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            IS YOUR MARKET STILL AVAILABLE?
          </h3>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <select
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
                setCheckResult(null);
              }}
              className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {MAJOR_CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <Button onClick={handleCheck} className="btn-gold-shine font-semibold">
              Check Availability
            </Button>
          </div>

          {/* Results */}
          {checkResult === "available" && (
            <div className="text-center space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-center gap-2 text-green-600">
                <Check className="w-6 h-6" />
                <span className="text-xl font-bold">{selectedCity} — AVAILABLE</span>
              </div>
              <p className="text-sm text-muted-foreground">1 founding partner spot remaining</p>
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                className="btn-gold-shine text-lg py-5 px-8 rounded-lg font-semibold"
              >
                Claim Your Market →
              </Button>
            </div>
          )}

          {checkResult === "claimed" && (
            <div className="text-center space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-center gap-2 text-destructive">
                <X className="w-6 h-6" />
                <span className="text-xl font-bold">{selectedCity} — CLAIMED</span>
              </div>
              <p className="text-sm text-muted-foreground">Market claimed recently</p>
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                variant="outline"
                className="border-accent text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Join Waitlist (Standard Pricing: $1,599/mo)
              </Button>
            </div>
          )}
        </div>

        {/* Below Market Checker */}
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-foreground font-semibold text-lg">Why This Matters:</p>
          <p>Your competitor called us last week. We said no because we'd already spoken to you first.</p>
          <p>But if you don't claim this spot, the next agent in your market will.</p>
          <p>And when they do, you'll be competing against someone who's getting:</p>
          <ul className="space-y-2 ml-1">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>40-60 free organic seller leads per month from AI-sourced traffic</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>Cited 7-8 times out of 10 when buyers search "best agent [your city]"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              <span>A 6-12 month head start you can't catch</span>
            </li>
          </ul>
          <p className="text-foreground font-medium border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
            This isn't a sales tactic. It's capacity. One agent per market. Period.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketExclusivitySection;
