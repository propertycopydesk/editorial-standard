import { useState, useRef } from "react";
import { X, Upload, Loader2, ImageIcon, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const PRICING_TIERS = [
  { name: "Standard", turnaround: "24-48 hours", price: "$75" },
  { name: "Priority", turnaround: "12 hours", price: "$150" },
  { name: "Rush", turnaround: "6 hours", price: "$250" },
  { name: "Emergency", turnaround: "2 hours", price: "$500" },
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILES = 10;

const submissionSchema = z.object({
  property_address: z.string().trim().min(1, "Property address is required").max(500, "Address must be less than 500 characters"),
  current_description: z.string().max(5000, "Description must be less than 5000 characters").optional(),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  full_name: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone must be less than 20 characters"),
});

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    property_address: "",
    current_description: "",
    email: "",
    full_name: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const currentTier = PRICING_TIERS[selectedTier];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    addFiles(files);
  };

  const addFiles = (files: File[]) => {
    const validFiles = files.filter(file => {
      if (!ALLOWED_TYPES.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported image format`,
          variant: "destructive",
        });
        return false;
      }
      if (file.size > MAX_FILE_SIZE) {
        toast({
          title: "File too large",
          description: `${file.name} exceeds 10MB limit`,
          variant: "destructive",
        });
        return false;
      }
      return true;
    });

    setSelectedFiles(prev => {
      const combined = [...prev, ...validFiles];
      if (combined.length > MAX_FILES) {
        toast({
          title: "Too many files",
          description: `Maximum ${MAX_FILES} images allowed`,
          variant: "destructive",
        });
        return combined.slice(0, MAX_FILES);
      }
      return combined;
    });
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    addFiles(files);
  };

  const uploadImages = async (): Promise<string[]> => {
    if (!supabase || selectedFiles.length === 0) return [];
    
    setUploadProgress(true);
    const uploadedUrls: string[] = [];
    
    for (const file of selectedFiles) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `property-images/${fileName}`;
      
      const { error } = await supabase.storage
        .from('consultation-uploads')
        .upload(filePath, file);
      
      if (error) {
        console.error('Upload error:', error);
        continue;
      }
      
      const { data: urlData } = supabase.storage
        .from('consultation-uploads')
        .getPublicUrl(filePath);
      
      uploadedUrls.push(urlData.publicUrl);
    }
    
    setUploadProgress(false);
    return uploadedUrls;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = submissionSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      let propertyImages: string[] = [];
      
      if (!isSupabaseConfigured() || !supabase) {
        console.log("Supabase not configured - running in demo mode");
      } else {
        // Upload images first
        if (selectedFiles.length > 0) {
          propertyImages = await uploadImages();
        }
        
        const { error } = await supabase
          .from("consultation_submissions")
          .insert({
            property_address: result.data.property_address,
            current_description: result.data.current_description || null,
            service_tier: currentTier.name,
            service_price: currentTier.price,
            turnaround: currentTier.turnaround,
            email: result.data.email,
            full_name: result.data.full_name,
            phone: result.data.phone,
            property_images: propertyImages.length > 0 ? propertyImages : null,
          });

        if (error) throw error;
      }

      toast({
        title: "Submission received!",
        description: "We'll be in touch within your selected turnaround time.",
      });

      setFormData({
        property_address: "",
        current_description: "",
        email: "",
        full_name: "",
        phone: "",
      });
      setSelectedFiles([]);
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Property Address *
              </label>
              <input
                type="text"
                name="property_address"
                value={formData.property_address}
                onChange={handleInputChange}
                placeholder="123 Main Street, City, State ZIP"
                className={`w-full px-4 py-3 border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                  errors.property_address ? "border-destructive" : "border-border"
                }`}
              />
              {errors.property_address && (
                <p className="text-destructive text-xs mt-1">{errors.property_address}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Current Description (optional)
              </label>
              <textarea
                name="current_description"
                value={formData.current_description}
                onChange={handleInputChange}
                placeholder="Paste your current listing description here..."
                rows={4}
                className="w-full px-4 py-3 border border-border rounded bg-background text-foreground font-sans text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Upload Photos (up to 10 images)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                multiple
                onChange={handleFileSelect}
                className="hidden"
              />
              <div 
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-border rounded p-6 text-center hover:border-accent transition-colors cursor-pointer"
              >
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground font-sans">
                  Drop files here or click to browse
                </p>
                <p className="text-xs text-muted-foreground font-sans mt-1">
                  JPG, PNG, WebP up to 10MB each
                </p>
              </div>
              
              {selectedFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                      <div className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground truncate max-w-[200px]">{file.name}</span>
                        <span className="text-xs text-muted-foreground">
                          ({(file.size / 1024 / 1024).toFixed(1)}MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                  errors.email ? "border-destructive" : "border-border"
                }`}
              />
              {errors.email && (
                <p className="text-destructive text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                placeholder="John Smith"
                className={`w-full px-4 py-3 border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                  errors.full_name ? "border-destructive" : "border-border"
                }`}
              />
              {errors.full_name && (
                <p className="text-destructive text-xs mt-1">{errors.full_name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                className={`w-full px-4 py-3 border rounded bg-background text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${
                  errors.phone ? "border-destructive" : "border-border"
                }`}
              />
              {errors.phone && (
                <p className="text-destructive text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <Button 
              variant="editorial" 
              size="lg" 
              className="w-full" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                `Continue to Checkout — ${currentTier.price}`
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;
