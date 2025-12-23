import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRICING_TIERS = [
  { name: "Standard", turnaround: "24-48 hours", price: "$75" },
  { name: "Priority", turnaround: "12 hours", price: "$150" },
  { name: "Rush", turnaround: "6 hours", price: "$250" },
  { name: "Emergency", turnaround: "2 hours", price: "$500" },
];

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: number;
  onTierChange?: (tier: number) => void;
}

const ConsultationModal = ({ 
  isOpen, 
  onClose, 
  selectedTier = 0, 
  onTierChange 
}: ConsultationModalProps) => {
  if (!isOpen) return null;

  const currentTier = PRICING_TIERS[selectedTier];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background border border-border rounded shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                Submit Your Listing
              </h2>
              <p className="text-muted-foreground font-sans text-sm">
                Professional editing • Choose your turnaround time
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form (non-functional demo) */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Property Address *
              </label>
              <input
                type="text"
                placeholder="123 Main Street, City, State ZIP"
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Current Description (optional)
              </label>
              <textarea
                placeholder="Paste your current listing description here..."
                rows={4}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground font-sans text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Upload Photos (up to 10 images)
              </label>
              <div className="border-2 border-dashed border-border rounded p-6 text-center hover:border-accent transition-colors cursor-pointer">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground font-sans">
                  Drop files here or click to browse
                </p>
                <p className="text-xs text-muted-foreground font-sans mt-1">
                  JPG, PNG up to 10MB each
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Select Service Tier *
              </label>
              <div className="space-y-2">
                {PRICING_TIERS.map((tier, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => onTierChange?.(index)}
                    className={`w-full flex items-center justify-between p-3 border rounded text-left transition-all ${
                      selectedTier === index
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          selectedTier === index ? "border-accent" : "border-muted-foreground"
                        }`}
                      >
                        {selectedTier === index && (
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        )}
                      </div>
                      <div>
                        <span className="font-sans text-sm font-medium text-foreground">
                          {tier.name}
                        </span>
                        <span className="font-sans text-xs text-muted-foreground ml-2">
                          ({tier.turnaround})
                        </span>
                      </div>
                    </div>
                    <span className="font-sans font-semibold text-foreground">
                      {tier.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div className="bg-muted border border-border rounded p-4">
              <p className="text-xs text-muted-foreground font-sans text-center">
                This is a demo — form doesn't actually submit
              </p>
            </div>

            <Button variant="editorial" size="lg" className="w-full" type="button">
              Continue to Checkout — {currentTier.price}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
