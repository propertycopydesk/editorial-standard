import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";

const COOKIE_NAME = "pcd_exit_popup_seen";
const COOKIE_DAYS = 7;
const MIN_TIME_ON_SITE_MS = 30_000;
const PROMPTS_URL =
  "https://propertycopydesk-shop.fourthwall.com/products/prompts-for-realtors";

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
};

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
};

const hasConverted = (): boolean => {
  // Treat scorecard request or booking as conversion signals
  if (typeof window === "undefined") return false;
  try {
    if (
      localStorage.getItem("scorecardRequested") === "true" ||
      localStorage.getItem("callBooked") === "true" ||
      sessionStorage.getItem("scorecardRequested") === "true" ||
      sessionStorage.getItem("callBooked") === "true"
    ) {
      return true;
    }
  } catch {
    // ignore storage errors
  }
  return false;
};

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (getCookie(COOKIE_NAME)) return;
    if (hasConverted()) return;

    const startTime = Date.now();
    let armed = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (hasConverted()) return;
      if (e.clientY <= 0) {
        show();
      }
    };

    const show = () => {
      setIsVisible(true);
      setCookie(COOKIE_NAME, "1", COOKIE_DAYS);
      analytics.exitIntentShown();
      document.removeEventListener("mouseout", handleMouseLeave);
    };

    const armTimer = setTimeout(() => {
      armed = true;
      document.addEventListener("mouseout", handleMouseLeave);
    }, Math.max(0, MIN_TIME_ON_SITE_MS - (Date.now() - startTime)));

    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const close = () => setIsVisible(false);

  const handleGetPrompts = () => {
    analytics.exitIntentConverted();
    analytics.ctaClick("Get the prompts $47", "exit-intent");
    window.open(PROMPTS_URL, "_blank", "noopener,noreferrer");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={close}
      />

      <div className="relative bg-background border border-border rounded-lg shadow-2xl max-w-md w-full p-6 md:p-8 animate-scale-in">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Starting smaller? Start here.
          </h2>

          <div className="text-muted-foreground font-sans mb-6 space-y-3 text-left md:text-center">
            <p>You're not ready for the scorecard or a call yet. That's fine.</p>
            <p>
              Grab the 75 prompts I use with{" "}
              <span className="text-foreground font-medium">$999/month clients for $47</span>.
              Test your visibility in ChatGPT and Perplexity today, not next week.
            </p>
            <p>
              No email sequences. No sales calls. Just the prompts and a scorecard to see where you stand.
            </p>
          </div>

          <Button
            onClick={handleGetPrompts}
            size="lg"
            className="btn-gold-shine w-full text-base py-6 rounded-lg font-semibold"
          >
            Get the prompts → $47
          </Button>

          <button
            onClick={close}
            className="mt-4 text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
          >
            No thanks, I'll figure it out myself
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
