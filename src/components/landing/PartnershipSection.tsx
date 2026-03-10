import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, X } from "lucide-react";

const PartnershipSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-secondary/20">
      <div ref={ref} className="container-editorial max-w-3xl scroll-reveal">
        <div className="text-center mb-12">
          <span className="section-tag">Partnership</span>
          <h2 className="section-heading">How This Partnership Works</h2>
        </div>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            We can't build your authority without your participation. Here's what we need:
          </p>

          {/* Content Approval */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-foreground font-bold mb-2">Content Approval (30 minutes/week)</h3>
            <p className="text-sm mb-3">
              We'll send article drafts for review. A quick read and "approved" or "change X to Y" within 2-3 business days keeps us on schedule.
            </p>
            <p className="text-sm">
              We're not asking you to write—just review and approve so we publish content that represents you accurately.
            </p>
          </div>

          {/* Strategic Input */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-foreground font-bold mb-2">Strategic Input (5 minutes/month)</h3>
            <p className="text-sm mb-3">Occasionally we'll need your market knowledge:</p>
            <ul className="space-y-1 text-sm">
              <li>→ "Which neighborhoods are hot right now?"</li>
              <li>→ "Any seasonal trends we should write about?"</li>
              <li>→ "What questions are buyers asking you lately?"</li>
            </ul>
            <p className="text-sm mt-2">Your insights keep the content relevant and credible.</p>
          </div>

          {/* Account Access */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-foreground font-bold mb-2">Account Access (one-time setup)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-2">We'll need logins to:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-accent" /> Google Business Profile</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-accent" /> Your website backend</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-accent" /> Google Search Console</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-accent" /> Google Analytics</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3 h-3 text-accent" /> Domain registrar (if needed)</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-2">We don't need:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-1.5"><X className="w-3 h-3 text-destructive/60" /> Your CRM or client data</li>
                  <li className="flex items-center gap-1.5"><X className="w-3 h-3 text-destructive/60" /> Your email login</li>
                  <li className="flex items-center gap-1.5"><X className="w-3 h-3 text-destructive/60" /> Social media passwords</li>
                  <li className="flex items-center gap-1.5"><X className="w-3 h-3 text-destructive/60" /> Your MLS access</li>
                </ul>
              </div>
            </div>
          </div>

          {/* If Life Gets Busy */}
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
            <h3 className="text-foreground font-bold mb-2">If Life Gets Busy</h3>
            <p className="text-sm">
              We get it—you're running a business. If you need a week to review something, just let us know. Communication keeps the partnership working.
            </p>
            <p className="text-sm mt-2">
              What we CAN'T do: Build your authority if content sits unapproved for weeks or we can't reach you. If that happens, we pause the work (and your billing) until we're back in sync.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
