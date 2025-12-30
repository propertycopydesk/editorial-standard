import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { analytics } from "@/lib/analytics";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if popup was already shown this session
    const wasShown = sessionStorage.getItem("exitPopupShown");
    if (wasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem("exitPopupShown", "true");
        analytics.exitIntentShown();
        document.removeEventListener("mouseout", handleMouseLeave);
      }
    };

    // Add delay before listening for exit intent
    const timer = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    analytics.exitIntentConverted();
    analytics.leadMagnetDownload("exit_intent_toolkit");
    
    toast({
      title: "Success!",
      description: "Check your email for the free toolkit.",
    });
    
    setIsSubmitting(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Modal */}
      <div className="relative bg-background border border-border rounded-lg shadow-2xl max-w-md w-full p-6 md:p-8 animate-scale-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Gift className="w-8 h-8 text-accent" />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
            Wait! Get the Free Real Estate Time-Saving Toolkit
          </h2>
          
          <p className="text-muted-foreground font-sans mb-6">
            10 Templates + 5 Scripts That Save 5+ Hours Per Week
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-center"
            />
            
            <Button 
              type="submit" 
              variant="editorial" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Download Free Toolkit"}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
