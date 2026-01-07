import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    paypal: any;
  }
}

const PRICING_TIERS = [
  { name: "Standard", turnaround: "24-48 hours", price: 75 },
  { name: "Priority", turnaround: "12 hours", price: 150 },
  { name: "Rush", turnaround: "6 hours", price: 250 },
  { name: "Emergency", turnaround: "2 hours", price: 500 },
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
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    propertyAddress: "",
    currentDescription: "",
    email: "",
    fullName: "",
    phoneNumber: "",
  });

  const currentTier = PRICING_TIERS[selectedTier];

  // Load PayPal SDK
  useEffect(() => {
    if (!showPayPal) return;

    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID as string | undefined;

    if (!clientId) {
      toast({
        title: "PayPal not configured",
        description: "Add VITE_PAYPAL_CLIENT_ID in project secrets to enable payments.",
        variant: "destructive",
      });
      setShowPayPal(false);
      return;
    }

    if (window.paypal) {
      renderPayPalButtons();
      return;
    }

    const existingScript = document.getElementById("paypal-sdk") as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener("load", renderPayPalButtons, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = "paypal-sdk";
    script.async = true;
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.addEventListener("load", renderPayPalButtons, { once: true });
    script.addEventListener("error", () => {
      toast({
        title: "PayPal failed to load",
        description: "Double-check your VITE_PAYPAL_CLIENT_ID and try again.",
        variant: "destructive",
      });
      setShowPayPal(false);
    });

    document.body.appendChild(script);
  }, [showPayPal, selectedTier, submissionId, toast]);

  const renderPayPalButtons = () => {
    const container = document.getElementById('paypal-button-container');
    if (!container || !window.paypal) return;
    
    // Clear existing buttons
    container.innerHTML = '';

    window.paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            description: `${currentTier.name} - Property Listing Edit (${currentTier.turnaround})`,
            amount: {
              value: currentTier.price.toString(),
              currency_code: 'USD'
            },
            custom_id: submissionId,
          }]
        });
      },
      onApprove: async (data: any, actions: any) => {
        const order = await actions.order.capture();
        
        if (supabase && submissionId) {
          // Update submission with payment info
          await supabase
            .from('consultation_submissions')
            .update({ 
              payment_status: 'paid',
              payment_id: order.id,
              payment_details: order
            })
            .eq('id', submissionId);
        }

        toast({
          title: "Payment Successful!",
          description: "Your listing submission has been received. We'll be in touch soon!",
        });

        // Reset and close
        setFormData({
          propertyAddress: "",
          currentDescription: "",
          email: "",
          fullName: "",
          phoneNumber: "",
        });
        setShowPayPal(false);
        onClose();
      },
      onError: (err: any) => {
        console.error('PayPal error:', err);
        toast({
          title: "Payment Failed",
          description: "There was an error processing your payment. Please try again.",
          variant: "destructive",
        });
      },
      onCancel: () => {
        toast({
          title: "Payment Cancelled",
          description: "You can complete payment later by contacting us.",
        });
      }
    }).render('#paypal-button-container');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!isSupabaseConfigured() || !supabase) {
        toast({
          title: "Submissions unavailable",
          description:
            "Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in project secrets to enable listing submissions.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Save submission to Supabase
      const { data: submission, error: dbError } = await supabase
        .from('consultation_submissions')
        .insert([
          {
            property_address: formData.propertyAddress,
            current_description: formData.currentDescription,
            email: formData.email,
            full_name: formData.fullName,
            phone: formData.phoneNumber,
            service_tier: currentTier.name,
            service_price: `${currentTier.price}`,
            turnaround: currentTier.turnaround,
            payment_status: 'pending'
          }
        ])
        .select()
        .single();

      if (dbError) throw dbError;

      setSubmissionId(submission.id);
      setShowPayPal(true);
      setLoading(false);

    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit listing. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
        onClick={() => {
          if (!showPayPal) onClose();
        }}
      />
      
      {/* Modal */}
      <div className="relative bg-background border border-border rounded shadow-2xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                {showPayPal ? 'Complete Payment' : 'Submit Your Listing'}
              </h2>
              <p className="text-muted-foreground font-sans text-sm">
                {showPayPal 
                  ? `${currentTier.name} - $${currentTier.price}` 
                  : 'Professional editing • Choose your turnaround time'}
              </p>
            </div>
            <button
              onClick={() => {
                if (showPayPal) {
                  setShowPayPal(false);
                } else {
                  onClose();
                }
              }}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {showPayPal ? (
            <div className="space-y-6">
              <div className="bg-muted p-4 rounded">
                <h3 className="font-sans font-medium text-foreground mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="text-foreground">{currentTier.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Turnaround:</span>
                    <span className="text-foreground">{currentTier.turnaround}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-2 border-t border-border">
                    <span className="text-foreground">Total:</span>
                    <span className="text-foreground">${currentTier.price}</span>
                  </div>
                </div>
              </div>

              <div id="paypal-button-container" className="min-h-[150px]" />

              <p className="text-xs text-muted-foreground text-center">
                Secure payment powered by PayPal
              </p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.propertyAddress}
                  onChange={(e) => setFormData({...formData, propertyAddress: e.target.value})}
                  placeholder="123 Main Street, City, State ZIP"
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-2">
                  Current Description (optional)
                </label>
                <textarea
                  value={formData.currentDescription}
                  onChange={(e) => setFormData({...formData, currentDescription: e.target.value})}
                  placeholder="Paste your current listing description here..."
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground font-sans text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
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
                        ${tier.price}
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
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-sans font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              <Button 
                variant="editorial" 
                size="lg" 
                className="w-full" 
                type="submit"
                disabled={loading}
              >
                {loading ? "Processing..." : `Continue to Checkout — $${currentTier.price}`}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
