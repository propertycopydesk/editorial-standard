import { useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface LeadMagnetBoxProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "default" | "compact" | "sidebar";
  className?: string;
}

const LeadMagnetBox = ({
  title = "Download the Complete Guide",
  description = "Get our comprehensive real estate copywriting toolkit",
  buttonText = "Get Free Access",
  variant = "default",
  className = ""
}: LeadMagnetBoxProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: "Check your email for your download link.",
    });
    
    setIsSubmitting(false);
    setEmail("");
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button type="submit" variant="editorial" disabled={isSubmitting}>
          {isSubmitting ? "..." : buttonText}
        </Button>
      </form>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className={`bg-accent/10 border border-accent/20 rounded-lg p-5 ${className}`}>
        <div className="flex items-center gap-3 mb-3">
          <FileText className="w-5 h-5 text-accent" />
          <h4 className="font-serif text-lg text-foreground">{title}</h4>
        </div>
        <p className="text-sm text-muted-foreground mb-4 font-sans">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="editorial" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : buttonText}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-muted border border-border rounded-lg p-6 md:p-8 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-accent/10 rounded-lg">
          <FileText className="w-6 h-6 text-accent" />
        </div>
        <h3 className="font-serif text-xl text-foreground">{title}</h3>
      </div>
      
      <p className="text-muted-foreground font-sans mb-6">{description}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="editorial" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : buttonText}
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground mt-4 text-center">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default LeadMagnetBox;
